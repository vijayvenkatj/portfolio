import { GlowLines } from "./glowlines";
import { Grid } from "./grid";
import { Particles } from "./particles";

const PortfolioBackground = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-950">
      <Grid />
      <Particles />
      <GlowLines />
    </div>
  );
};

export default PortfolioBackground;