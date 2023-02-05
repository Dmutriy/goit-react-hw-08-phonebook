import { useCallback } from 'react';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import particlesConfig from './ParticlesConfig';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);
  return (
    <Particles
      id="particles"
      params={particlesConfig}
      init={particlesInit}
    ></Particles>
  );
};
export default ParticlesBackground;
