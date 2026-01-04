import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';

const AnimatedShape = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
        meshRef.current.rotation.x = t * 0.2;
        meshRef.current.rotation.y = t * 0.3;
        
        // Mouse follow effect slightly
        const mouseX = state.mouse.x * 0.5;
        const mouseY = state.mouse.y * 0.5;
        meshRef.current.position.x += (mouseX - meshRef.current.position.x) * 0.1;
        meshRef.current.position.y += (mouseY - meshRef.current.position.y) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere 
        ref={meshRef} 
        args={[1, 100, 200]} 
        scale={hovered ? 2.2 : 2}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color="#4f46e5"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none md:pointer-events-auto opacity-40 md:opacity-100">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} color="#ec4899" intensity={1} />
        <pointLight position={[0, 5, 0]} color="#3b82f6" intensity={2} />
        <AnimatedShape />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
};
