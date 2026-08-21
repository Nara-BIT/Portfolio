import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

function GeometricShape() {
  const groupRef = useRef();
  const torusRef = useRef();
  const wireRef = useRef();
  const innerRef = useRef();

  useFrame((state, delta) => {
    // Constant slow rotation
    torusRef.current.rotation.x += delta * 0.1;
    torusRef.current.rotation.y += delta * 0.15;
    wireRef.current.rotation.x -= delta * 0.08;
    wireRef.current.rotation.z += delta * 0.12;
    innerRef.current.rotation.y += delta * 0.2;

    // Mouse-interactive tilt
    const targetX = (state.pointer.y * Math.PI) / 6;
    const targetY = (state.pointer.x * Math.PI) / 6;
    groupRef.current.rotation.x +=
      (targetX - groupRef.current.rotation.x) * 0.04;
    groupRef.current.rotation.y +=
      (targetY - groupRef.current.rotation.y) * 0.04;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
        {/* Outer Torus Knot — wireframe */}
        <mesh ref={torusRef} scale={1.1}>
          <torusKnotGeometry args={[1, 0.3, 128, 16, 2, 3]} />
          <meshStandardMaterial
            color="#35322B"
            wireframe
            transparent
            opacity={0.14}
            emissive="#6F8060"
            emissiveIntensity={0.05}
          />
        </mesh>

        {/* Middle Icosahedron — wireframe */}
        <mesh ref={wireRef} scale={1.6}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#6F8060"
            wireframe
            transparent
            opacity={0.12}
            emissive="#6F8060"
            emissiveIntensity={0.02}
          />
        </mesh>

        {/* Inner distorted sphere — glass-like */}
        <mesh ref={innerRef} scale={0.7}>
          <sphereGeometry args={[1, 48, 48]} />
          <MeshDistortMaterial
            color="#8A9A7B"
            transparent
            opacity={0.15}
            distort={0.35}
            speed={1.5}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight
          position={[10, 10, 10]}
          intensity={0.5}
          color="#ffffff"
        />
        <pointLight
          position={[-10, -10, -5]}
          intensity={0.3}
          color="#A3B18A"
        />
        <Suspense fallback={null}>
          <GeometricShape />
        </Suspense>
      </Canvas>
    </div>
  );
}