import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  AccumulativeShadows,
  Environment,
  RandomizedLight,
} from "@react-three/drei";

const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      position={[0, 0, -0.14]}
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.25}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      resolution={1024}
    >
      <Environment preset="city" />
      <RandomizedLight
        amount={1}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={1}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
