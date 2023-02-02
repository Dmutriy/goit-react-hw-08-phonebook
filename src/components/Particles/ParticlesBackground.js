import { Particles } from 'react-particles';
import particlesConfig from './ParticlesConfig';
const ParticlesBackground = () => {
  return (
    <Particles params={particlesConfig}>
      <h1>Hi</h1>
    </Particles>
  );
};
export default ParticlesBackground;
