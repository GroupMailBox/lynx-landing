import { BACKEND_URL, type PlanId } from './constants';

export interface Order {
  orderId: string;
  plan: PlanId;
  amountPaise: number;
  amountRupees: string;
  currency: string;
  status: 'pending' | 'submitted' | 'paid' | 'failed' | 'refunded' | 'expired';
  expiresAt: string;
  upiUri: string;
  upiVpa: string;
  payeeName: string;
}

export interface OrderStatus {
  id: string;
  plan: PlanId;
  amount_paise: number;
  currency: string;
  status: Order['status'];
  upi_utr: string | null;
  expires_at: string;
  paid_at: string | null;
  period_end: string | null;
}

async function readError(res: Response): Promise<string> {
  try {
    const data = await res.json();
    return data.message || data.error || `HTTP ${res.status}`;
  } catch {
    return `HTTP ${res.status}`;
  }
}

export async function createOrder(token: string, plan: PlanId): Promise<Order> {
  const res = await fetch(`${BACKEND_URL}/api/billing/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ plan }),
  });
  if (!res.ok) throw new Error(await readError(res));
  const data = await res.json();
  return data.order;
}

export async function submitUtr(
  token: string,
  orderId: string,
  utr: string,
): Promise<{ status: string; alreadyPaid?: boolean }> {
  const res = await fetch(`${BACKEND_URL}/api/billing/utr`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ orderId, utr }),
  });
  if (!res.ok) throw new Error(await readError(res));
  return res.json();
}

export async function getOrderStatus(
  token: string,
  orderId: string,
): Promise<OrderStatus> {
  const res = await fetch(`${BACKEND_URL}/api/billing/order/${orderId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(await readError(res));
  const data = await res.json();
  return data.order;
}
