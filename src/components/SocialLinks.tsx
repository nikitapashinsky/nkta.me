import { twMerge } from "tailwind-merge";
import { ArenaIcon, BlueskyIcon, EmailIcon, GithubIcon, TwitterIcon } from "./icons";

const links = [
  { label: "Email", url: "mailto:n@nkta.me", icon: EmailIcon },
  {
    label: "Twitter",
    url: "https://twitter.com/nikitapashinsky",
    icon: TwitterIcon,
  },
  {
    label: "Bluesky",
    url: "https://bsky.app/profile/nkta.me",
    icon: BlueskyIcon,
  },
  {
    label: "Github",
    url: "https://github.com/nikitapashinsky",
    icon: GithubIcon,
  },
  {
    label: "Are.na",
    url: "https://www.are.na/nikita-pashinsky",
    icon: ArenaIcon,
  },
];

export function SocialLinks() {
  return (
    <ul className="-ml-3 flex md:-ml-2.5">
      {links.map(({ icon: Icon, label, url }, index) => (
        <li
          key={label}
          style={{ "--delay": `${index * 50 + 250}ms` } as React.CSSProperties}
          className="animate-fade-in-slide animation-delay-(--delay)"
        >
          <a
            href={url}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className={twMerge(
              "group relative flex items-center justify-center px-3 py-2 md:px-2.5",
              "transition-transform will-change-transform active:scale-95",
              "outline-none",
              "before:pointer-events-none before:absolute before:inset-x-1 before:inset-y-0 before:-z-1 before:rounded-md md:before:inset-x-0.5",
              "before:bg-neutral-100/0 before:will-change-transform",
              "before:transition-colors before:duration-125",
              "hover:before:bg-neutral-100 hover:before:duration-75 active:before:bg-neutral-100 active:before:duration-75",
              "before:outline-neutral-300 focus-visible:before:outline",
            )}
          >
            <Icon
              className={twMerge(
                "size-5 shrink-0 fill-neutral-450 transition-colors",
                "duration-125 group-hover:duration-75 group-focus-visible:duration-75 group-active:duration-75",
                "group-hover:fill-black group-focus-visible:fill-black group-active:fill-black",
                label === "Twitter" &&
                  "group-hover:fill-[#1DA1F2] group-focus-visible:fill-[#1DA1F2] group-active:fill-[#1DA1F2]",
                label === "Bluesky" &&
                  "group-hover:fill-[#0f73ff] group-focus-visible:fill-[#0f73ff] group-active:fill-[#0f73ff]",
              )}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
