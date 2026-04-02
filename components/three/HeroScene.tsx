'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

/**
 * Network graph particles — clusters of dots connected by faint lines
 * that represent "connecting group members to your inbox."
 * Some particles drift toward the envelope to visualize lead capture.
 */
function NetworkParticles({ count = 35 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const velocities = useRef<Float32Array>();
  const CONNECTION_DISTANCE = 2.5;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 7;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
      // Velocity: some particles drift toward center (envelope) to visualize lead capture
      const driftToCenter = i < 8; // first 8 particles drift toward envelope
      vel[i * 3] = driftToCenter ? -pos[i * 3] * 0.002 : (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 1] = driftToCenter ? -pos[i * 3 + 1] * 0.002 : (Math.random() - 0.5) * 0.002;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.001;
    }
    velocities.current = vel;
    return pos;
  }, [count]);

  // Line buffer for connections — max possible connections
  const maxLines = count * count;
  const linePositions = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);
  const lineColors = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current || !velocities.current) return;
    const time = state.clock.elapsedTime;
    const posArr = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const vel = velocities.current;

    // Move particles
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      // Breathing idle: slow oscillation
      posArr[idx] += vel[idx] + Math.sin(time * 0.3 + i) * 0.001;
      posArr[idx + 1] += vel[idx + 1] + Math.cos(time * 0.25 + i * 0.7) * 0.001;
      posArr[idx + 2] += vel[idx + 2];

      // "Captured" particles — reset when they reach envelope center
      if (i < 8) {
        const dist = Math.sqrt(posArr[idx] ** 2 + posArr[idx + 1] ** 2 + posArr[idx + 2] ** 2);
        if (dist < 0.5) {
          // Respawn at edge
          posArr[idx] = (Math.random() - 0.5) * 10;
          posArr[idx + 1] = (Math.random() - 0.5) * 7;
          posArr[idx + 2] = (Math.random() - 0.5) * 4;
          vel[idx] = -posArr[idx] * 0.003;
          vel[idx + 1] = -posArr[idx + 1] * 0.003;
        }
      }

      // Wrap-around for wandering particles
      if (Math.abs(posArr[idx]) > 6) posArr[idx] *= -0.8;
      if (Math.abs(posArr[idx + 1]) > 4.5) posArr[idx + 1] *= -0.8;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Build connections — faint lines between nearby particles
    let lineIdx = 0;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = posArr[i * 3] - posArr[j * 3];
        const dy = posArr[i * 3 + 1] - posArr[j * 3 + 1];
        const dz = posArr[i * 3 + 2] - posArr[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONNECTION_DISTANCE) {
          const opacity = 1 - dist / CONNECTION_DISTANCE;
          const baseIdx = lineIdx * 6;

          linePositions[baseIdx] = posArr[i * 3];
          linePositions[baseIdx + 1] = posArr[i * 3 + 1];
          linePositions[baseIdx + 2] = posArr[i * 3 + 2];
          linePositions[baseIdx + 3] = posArr[j * 3];
          linePositions[baseIdx + 4] = posArr[j * 3 + 1];
          linePositions[baseIdx + 5] = posArr[j * 3 + 2];

          // Blue-tinted lines
          const c = opacity * 0.3;
          lineColors[baseIdx] = c * 0.31;
          lineColors[baseIdx + 1] = c * 0.55;
          lineColors[baseIdx + 2] = c;
          lineColors[baseIdx + 3] = c * 0.31;
          lineColors[baseIdx + 4] = c * 0.55;
          lineColors[baseIdx + 5] = c;

          lineIdx++;
        }
      }
    }

    // Update line geometry
    const lineGeo = linesRef.current.geometry;
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions.slice(0, lineIdx * 6), 3));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors.slice(0, lineIdx * 6), 3));
    lineGeo.setDrawRange(0, lineIdx * 2);
    lineGeo.attributes.position.needsUpdate = true;
    lineGeo.attributes.color.needsUpdate = true;
  });

  return (
    <>
      <points ref={pointsRef} frustumCulled>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={count}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#4F8CFF"
          transparent
          opacity={0.9}
          sizeAttenuation
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial vertexColors transparent opacity={0.5} />
      </lineSegments>
    </>
  );
}

/**
 * Improved envelope with proper proportions, triangular flap,
 * MeshPhysicalMaterial, and subtle letter-emerging animation.
 */
function ImprovedEnvelope() {
  const groupRef = useRef<THREE.Group>(null);
  const flapRef = useRef<THREE.Mesh>(null);
  const letterRef = useRef<THREE.Mesh>(null);

  // Triangular flap shape
  const flapShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-1, 0);
    shape.lineTo(0, 0.7);
    shape.lineTo(1, 0);
    shape.lineTo(-1, 0);
    return shape;
  }, []);

  const flapGeometry = useMemo(() => {
    return new THREE.ExtrudeGeometry(flapShape, {
      depth: 0.02,
      bevelEnabled: false,
    });
  }, [flapShape]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;
    // Gentle idle rotation — scene "breathes" slower
    groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.1;
    groupRef.current.position.y = Math.sin(time * 0.35) * 0.1;

    // Flap opens and closes subtly
    if (flapRef.current) {
      flapRef.current.rotation.x = -0.1 + Math.sin(time * 0.4) * 0.15;
    }

    // Letter peeks out
    if (letterRef.current) {
      letterRef.current.position.y = 0.1 + Math.sin(time * 0.4) * 0.12;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.3}>
      <group ref={groupRef}>
        {/* Envelope body — proper proportions */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 1.1, 0.25]} />
          <meshPhysicalMaterial
            color="#4F8CFF"
            emissive="#4F8CFF"
            emissiveIntensity={0.25}
            transparent
            opacity={0.85}
            clearcoat={0.4}
            clearcoatRoughness={0.3}
            roughness={0.6}
            metalness={0.1}
          />
        </mesh>

        {/* Triangular flap */}
        <mesh
          ref={flapRef}
          geometry={flapGeometry}
          position={[0, 0.55, 0.1]}
          rotation={[-0.1, 0, 0]}
        >
          <meshPhysicalMaterial
            color="#3A75E0"
            emissive="#3A75E0"
            emissiveIntensity={0.15}
            transparent
            opacity={0.75}
            clearcoat={0.3}
            clearcoatRoughness={0.4}
            roughness={0.7}
            metalness={0.05}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Letter emerging from envelope */}
        <mesh ref={letterRef} position={[0, 0.1, 0.05]}>
          <boxGeometry args={[1.6, 0.9, 0.04]} />
          <meshPhysicalMaterial
            color="#f0f0f0"
            emissive="#ffffff"
            emissiveIntensity={0.05}
            transparent
            opacity={0.6}
            roughness={0.8}
            metalness={0.0}
          />
        </mesh>

        {/* Subtle glow */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1.3, 16, 16]} />
          <meshStandardMaterial
            color="#4F8CFF"
            emissive="#4F8CFF"
            emissiveIntensity={0.1}
            transparent
            opacity={0.06}
          />
        </mesh>
      </group>
    </Float>
  );
}

/**
 * Mouse parallax + scroll-linked camera pullback
 */
function CameraController() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);

  useEffect(() => {
    const mouseHandler = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    const scrollHandler = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener('mousemove', mouseHandler);
    window.addEventListener('scroll', scrollHandler, { passive: true });
    return () => {
      window.removeEventListener('mousemove', mouseHandler);
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useFrame(() => {
    // Mouse parallax
    const targetX = mouse.current.x * 0.4;
    const targetY = mouse.current.y * 0.25;
    camera.position.x += (targetX - camera.position.x) * 0.02;
    camera.position.y += (targetY - camera.position.y) * 0.02;

    // Scroll-linked pullback — camera moves back as user scrolls past hero
    const scrollFactor = Math.min(scrollY.current / 800, 1);
    const targetZ = 6 + scrollFactor * 3;
    camera.position.z += (targetZ - camera.position.z) * 0.03;

    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function HeroScene() {
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      if (navigator.hardwareConcurrency < 4) {
        setIsLowPower(true);
      }
      // Check for data-saver mode
      const conn = (navigator as unknown as Record<string, unknown>).connection as { saveData?: boolean } | undefined;
      if (conn?.saveData) {
        setIsLowPower(true);
      }
    }
  }, []);

  if (isLowPower) {
    return null;
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{ position: 'absolute', inset: 0 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      aria-hidden="true"
    >
      {/* Lighting: low ambient + warm key light + teal rim light */}
      <ambientLight intensity={0.1} />
      {/* Warm white key light from upper-right */}
      <pointLight position={[5, 4, 3]} intensity={0.8} color="#fff5e6" />
      {/* Teal accent as rim/back light */}
      <pointLight position={[-3, -2, -4]} intensity={0.35} color="#4F8CFF" />

      <Stars
        radius={50}
        depth={50}
        count={800}
        factor={3}
        saturation={0}
        fade
        speed={0.3}
      />

      <NetworkParticles count={35} />
      <ImprovedEnvelope />
      <CameraController />

      <EffectComposer>
        <Bloom
          luminanceThreshold={0.6}
          luminanceSmoothing={0.9}
          intensity={0.4}
        />
        <Vignette eskil={false} offset={0.1} darkness={0.5} />
      </EffectComposer>
    </Canvas>
  );
}
