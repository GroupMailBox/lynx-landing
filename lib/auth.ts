'use client';

import { useEffect, useState, useCallback } from 'react';
import { BACKEND_URL } from './constants';

const TOKEN_KEY = 'gmb_token';
const USER_KEY = 'gmb_user';
const RETURN_TO_KEY = 'gmb_signin_return_to';

export interface StoredUser {
  userId: string;
  email: string;
}

export interface StoredAuth {
  token: string;
  user: StoredUser;
}

function safeReadAuth(): StoredAuth | null {
  if (typeof window === 'undefined') return null;
  try {
    const token = window.localStorage.getItem(TOKEN_KEY);
    const userRaw = window.localStorage.getItem(USER_KEY);
    if (!token || !userRaw) return null;
    const user = JSON.parse(userRaw) as StoredUser;
    if (!user.userId || !user.email) return null;
    return { token, user };
  } catch {
    return null;
  }
}

export function getStoredAuth(): StoredAuth | null {
  return safeReadAuth();
}

export function setStoredAuth(auth: StoredAuth) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(TOKEN_KEY, auth.token);
  window.localStorage.setItem(USER_KEY, JSON.stringify(auth.user));
  // Notify other components in the same tab.
  window.dispatchEvent(new Event('gmb-auth-change'));
}

export function clearStoredAuth() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem(USER_KEY);
  window.dispatchEvent(new Event('gmb-auth-change'));
}

// Kick the browser into the Google flow. The backend redirects back to
// /auth/callback/ on the same origin with the JWT in the URL hash.
export function signInWithGoogle(returnTo?: string) {
  if (typeof window === 'undefined') return;
  const target = returnTo || window.location.pathname + window.location.search + window.location.hash;
  try {
    window.sessionStorage.setItem(RETURN_TO_KEY, target);
  } catch {
    // sessionStorage can be unavailable in some embed contexts; we fall back
    // to "/" in the callback.
  }
  const cbUrl = `${window.location.origin}/auth/callback/`;
  const url = `${BACKEND_URL}/api/oauth/google/web-signin?return_to=${encodeURIComponent(cbUrl)}`;
  window.location.href = url;
}

export function consumeStoredReturnTo(): string {
  if (typeof window === 'undefined') return '/';
  try {
    const v = window.sessionStorage.getItem(RETURN_TO_KEY);
    if (v) {
      window.sessionStorage.removeItem(RETURN_TO_KEY);
      // Reject anything not same-origin (must be a path, not a full URL).
      if (v.startsWith('/') && !v.startsWith('//')) return v;
    }
  } catch {
    // ignore
  }
  return '/';
}

export function signOut() {
  clearStoredAuth();
}

// Hook for components. Subscribes to both cross-tab (storage) and same-tab
// (custom event) auth changes so signing in/out anywhere re-renders consumers.
export function useAuth() {
  const [auth, setAuth] = useState<StoredAuth | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setAuth(safeReadAuth());
    setHydrated(true);

    const onStorage = (e: StorageEvent) => {
      if (e.key === TOKEN_KEY || e.key === USER_KEY) {
        setAuth(safeReadAuth());
      }
    };
    const onLocal = () => setAuth(safeReadAuth());

    window.addEventListener('storage', onStorage);
    window.addEventListener('gmb-auth-change', onLocal);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('gmb-auth-change', onLocal);
    };
  }, []);

  const signIn = useCallback((returnTo?: string) => signInWithGoogle(returnTo), []);

  return { auth, signIn, signOut, hydrated };
}
