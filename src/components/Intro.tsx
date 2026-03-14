import { Link } from '@/components/Link';

export function Intro() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex max-w-[40ch] flex-col gap-2 text-balance">
        <h1 className="font-medium animation-delay-100">Nikita Pashinsky</h1>
        <p className="text-secondary animation-delay-150">
          I’m a product designer focused on crafting high-quality software. Currently leading
          product design on Composer at <Link to="https://piano.io">Piano</Link>.
        </p>
      </div>
    </div>
  );
}
