import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import SocialMedia from './SocialMedia';

export default function SocialMediaMenu() {
  return (
    <div className="flex">
      <SocialMedia
        icon={<IconBrandLinkedin />}
        url="https://www.linkedin.com/in/emerson-moreira/"
      />
      <SocialMedia icon={<IconBrandGithub />} url="https://github.com/eemr3" />
      <SocialMedia
        icon={<IconBrandFacebook />}
        url="https://www.facebook.com/Archimonder"
      />
      <SocialMedia
        icon={<IconBrandInstagram />}
        url="https://www.instagram.com/emerson_moreira_fsa"
      />
    </div>
  );
}
