import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";

function AnimatedSphere() {
  const mesh = useRef();

  useFrame((state) => {
    mesh.current.rotation.x =
      state.clock.elapsedTime * 0.25;

    mesh.current.rotation.y =
      state.clock.elapsedTime * 0.35;
  });

  return (
    <Sphere ref={mesh} args={[1.5, 64, 64]} scale={1.5}>
      <MeshDistortMaterial
        color="#00f5ff"
        roughness={0.2}
        metalness={0.8}
        distort={0.35}
        speed={2}
      />
    </Sphere>
  );
}

export default function TechSphere() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 45,
      }}
    >
      <ambientLight intensity={1} />

      <directionalLight
        position={[3, 3, 3]}
        intensity={2}
      />

      <AnimatedSphere />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={2}
      />
    </Canvas>
  );
}