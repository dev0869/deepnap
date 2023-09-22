import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { PatricleConfig } from "./Config/ParticleConfig";

export const ParticleBackground = () => {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return <Particles options={PatricleConfig} init={particlesInit} />;
};
