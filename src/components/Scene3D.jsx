import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

function InteractiveShapes() {
  const groupRef = useRef();
  const wireframeRef = useRef();
  const sphereRef = useRef();

  useFrame((state, delta) => {
    // 1. Constant slow rotation
    wireframeRef.current.rotation.x += delta * 0.15;
    wireframeRef.current.rotation.y += delta * 0.2;
    sphereRef.current.rotation.y += delta * 0.3;
    sphereRef.current.rotation.z += delta * 0.15;

    // 2. Mouse interactive tilt (Catchy effect!)
    // state.pointer holds mouse coordinates from -1 to 1
    const targetX = (state.pointer.y * Math.PI) / 4; // Tilt up/down
    const targetY = (state.pointer.x * Math.PI) / 4; // Tilt left/right
    
    // Smooth interpolation (lerp) towards mouse position
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={2.5}>
        {/* Outer Wireframe Icosahedron */}
        <mesh ref={wireframeRef} scale={1.6}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#64ffda"
            wireframe
            transparent
            opacity={0.7}
            emissive="#64ffda"
            emissiveIntensity={0.15}
          />
        </mesh>

        {/* Inner Distorted Sphere */}
        <mesh ref={sphereRef} scale={0.9}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial
            color="#7c3aed"
            transparent
            opacity={0.15}
            distort={0.4}
            speed={2}
            roughness={0.2}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-[350px] md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#64ffda" />
        <pointLight position={[-10, -10, -5]} intensity={0.4} color="#7c3aed" />
        <Suspense fallback={null}>
          <InteractiveShapes />
        </Suspense>
      </Canvas>
    </div>
  );
}