'use client';

/* eslint-disable @next/next/no-img-element -- static export with unoptimized images */
import { useRef, type CSSProperties, type ReactNode } from 'react';

// Pointer-driven tilt. Sets --tx/--ty on the element; CSS (.stage-3d, .tilt-card) applies them.
function useTilt(max = 10, base: [number, number] = [0, 0]) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== 'mouse') return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--ty', `${base[1] + x * max}deg`);
    el.style.setProperty('--tx', `${base[0] - y * max}deg`);
  };
  const onLeave = () => {
    ref.current?.style.removeProperty('--tx');
    ref.current?.style.removeProperty('--ty');
  };
  return { ref, onPointerMove: onMove, onPointerLeave: onLeave };
}

/** A card that tilts toward the pointer. */
export function TiltCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const tilt = useTilt(8);
  return (
    <div {...tilt} className={`tilt-card h-full ${className}`}>
      {children}
    </div>
  );
}

export interface Layer {
  node: ReactNode;
  /** Depth in px; nearer layers float in front. */
  z: number;
  style: CSSProperties;
  delay?: number;
}

/** Floating layers in a tilted 3D stage that follows the pointer. */
export function LayerStack({ layers, height = 520 }: { layers: Layer[]; height?: number }) {
  const tilt = useTilt(14, [10, -16]);
  return (
    <div className="scene-3d mx-auto w-full max-w-5xl" style={{ height }}>
      <div {...tilt} className="stage-3d relative h-full w-full">
        {layers.map((l, i) => (
          <div key={i} className="layer-3d" style={{ ...l.style, transform: `translateZ(${l.z}px)`, animationDelay: `${l.delay ?? -i * 1.7}s` }}>
            {l.node}
          </div>
        ))}
      </div>
    </div>
  );
}

/** A slowly spinning wireframe sphere built from rings. */
export function Orb({ size = 220, rings = 7, className = '' }: { size?: number; rings?: number; className?: string }) {
  return (
    <div className={`scene-3d pointer-events-none ${className}`} style={{ width: size, height: size }} aria-hidden>
      <div className="orb-3d h-full w-full">
        {Array.from({ length: rings }, (_, i) => (
          <i key={i} style={{ transform: `rotateY(${(180 / rings) * i}deg)` }} />
        ))}
        <i style={{ transform: 'rotateX(90deg)', borderColor: 'rgba(124,92,255,.3)' }} />
      </div>
    </div>
  );
}

/** Items orbiting a centre piece on a 3D ring. */
export function Carousel3D({ items, center, radius = 260, height = 360 }: { items: ReactNode[]; center: ReactNode; radius?: number; height?: number }) {
  return (
    <div className="scene-3d relative mx-auto w-full" style={{ height }}>
      <div className="carousel-3d">
        {/* The centre lives in the same 3D space, so cards behind it are hidden by it. */}
        <div style={{ transform: 'translate(-50%, -50%)' }}>
          <div className="carousel-face">{center}</div>
        </div>
        {items.map((it, i) => (
          <div key={i} style={{ transform: `translate(-50%, -50%) rotateY(${(360 / items.length) * i}deg) translateZ(${radius}px) rotateY(${(-360 / items.length) * i}deg)` }}>
            <div className="carousel-face">{it}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
