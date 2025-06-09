'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

function RobotModel() {
  const { scene } = useGLTF('/models/robot.glb');

  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      if ((mesh.material as THREE.MeshStandardMaterial).metalness !== undefined) {
        const material = mesh.material as THREE.MeshStandardMaterial;
        material.metalness = 0.6;
        material.roughness = 0.3;
        material.envMapIntensity = 2;
      }
    }
  });

  return <primitive object={scene} scale={1.5} />;
}

export default function Robot3D() {
  return (
    <div className="w-16 h-16 z-20 relative">
      <Canvas camera={{ position: [2, 2, 3.5], fov: 35 }} gl={{ antialias: true }}>
        {/* Lighting Setup */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 5, 2]} intensity={2} />
        <pointLight position={[-2, 2, -2]} intensity={1.5} color="#ffffff" />

        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <RobotModel />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}
