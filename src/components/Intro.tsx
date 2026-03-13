import { Link } from "@/components/Link";
import { SocialLinks } from "@/components/SocialLinks";

export function Intro() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex max-w-[40ch] flex-col gap-2 text-balance">
        <h1 className="animate-fade-in-slide font-[550] tracking-tight animation-delay-100">
          Nikita Pashinsky
        </h1>
        <p className="animate-fade-in-slide font-[450] tracking-tight text-neutral-600 animation-delay-150">
          I'm a product designer focused on crafting high-quality software. Currently leading
          product design on Composer at{" "}
          <Link href="https://piano.io" external>
            Piano
          </Link>
          .
        </p>
      </div>
      <SocialLinks />
    </div>
  );
}
