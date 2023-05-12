import Area from '../common/Area';
import ResponsiveIimage from '../common/ResponsiveIimage';
import Slogan from './Slogan';
import mainImage from '../../../../public/principal.jpg';
export default function Highlight() {
  return (
    <Area className="flex-1">
      <div className="h-[500px] flex items-center justify-around">
        <Slogan />
        <ResponsiveIimage image={mainImage} className="rotate-3 hidden md:inline" />
      </div>
    </Area>
  );
}
