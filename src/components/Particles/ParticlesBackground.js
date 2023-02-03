// import { Particles } from 'react-particles';
import { Particles } from 'react-tsparticles';
import particlesConfig from './ParticlesConfig';

const ParticlesBackground = () => {
  return <Particles id="particles" params={particlesConfig}></Particles>;
};
export default ParticlesBackground;
