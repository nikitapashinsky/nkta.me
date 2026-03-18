import type { Metadata } from "next";
import Image from "next/image";
import { twJoin } from "tailwind-merge";
import { Link } from "@/components/Link";
import { GithubIcon } from "@/components/icons";
import ZedLogo from "@/assets/images/logos/zed.svg";
import ZoegiDarkImg from "@/assets/images/zoegi-dark-base-ui.webp";

export const metadata: Metadata = {
  title: "Projects · Nikita Pashinsky",
};

export default function Projects() {
  return (
    <div
      className={twJoin(
        "col-span-full row-start-2",
        "grid grid-cols-subgrid content-start gap-x-4 gap-y-12",
      )}
    >
      <div className={"col-span-full flex flex-col gap-2"}>
        <h1 className={"text-xl md:text-2xl"}>Projects</h1>
      </div>

      <div className={"col-span-full flex flex-col gap-6 md:col-span-5"}>
        <Image
          src={ZoegiDarkImg}
          alt="Zoegi Dark theme for Zed code editor"
          className={
            "h-auto w-full rounded-xs bg-neutral-100 shadow-lg dark:bg-neutral-900"
          }
        />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3>Zoegi theme</h3>
            <p className="text-balance text-secondary">
              A visually pleasing and polished theme for Zed based on the
              beautiful Moegi theme for VS Code.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="zed://extension/zoegi-theme"
              className="group flex items-center gap-1.5"
            >
              <ZedLogo className="size-5 fill-neutral-450 group-hover:fill-[#1348DC] group-active:fill-[#1348DC]" />
              Install in Zed
            </Link>
            <Link
              href="https://github.com/nikitapashinsky/zoegi-theme"
              className="group flex items-center gap-1.5"
            >
              <GithubIcon className="size-5 fill-neutral-450 group-hover:fill-neutral-950 group-active:fill-neutral-950" />
              Github
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
