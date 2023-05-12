import Area from '../common/Area';
import Logo from '../common/Logo';
import SocialMediaMenu from './SocialMediaMenu';

export default function Footer() {
  return (
    <Area className="bg-black py-20">
      <Logo />
      <div className="mt-3 text-zinc-400 text-center md:text-left">
        <div>Plataforma financeira</div>
        <div className="flex gap-1.5">
          que
          <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">
            simplifica
          </span>
          sua vida
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between item-center mt-14">
        <SocialMediaMenu />
        <p className="text-zinc-100 mt-7 md:mt-0 text-center">
          <span className="font-bold">
            eemr<span className="text-red-500">3</span> ® - Todos os direitos reservados
          </span>
        </p>
      </div>
    </Area>
  );
}
