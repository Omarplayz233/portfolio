import { TbBrandBluesky, TbBrandGithub, TbBrandDiscord, TbMail, TbRss } from 'react-icons/tb';

const socialLinks = [
  {
    href: "https://bsky.app/profile/omarplayz.eu.org",
    ariaLabel: "Bluesky",
    Icon: TbBrandBluesky
  },
  {
    href: "https://github.com/Omarplayz233",
    ariaLabel: "GitHub",
    Icon: TbBrandGithub
  },
  {
    href: "https://discord.com/users/756529025719074846",
    ariaLabel: "Discord",
    Icon: TbBrandDiscord
  },
  {
    href: "mailto:hi@dev.omarplayz.eu.org", // Replace with your actual email address
    ariaLabel: "Email",
    Icon: TbMail
  },
  {
    href: "https://beta.omarplayz.eu.org/rss.xml",
    ariaLabel: "RSS",
    Icon: TbRss
  }
];

export default function SocialIcons() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex items-center justify-center pb-4 z-50">
      <div className="w-auto flex items-center justify-center rounded-xl border border-white/20 bg-gray-800 p-1 shadow-lg backdrop-blur-lg bg-white/10">
        {socialLinks.map(({ href, ariaLabel, Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-white transition-all ease-in-out hover:bg-white/10"
            aria-label={ariaLabel}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </footer>
  );
}


