import React from "react";
import Particles from "react-tsparticles";
import { configureParticles } from "./configure-particles";

export const Particless = () => {
  return <Particles options={configureParticles} />;
};
