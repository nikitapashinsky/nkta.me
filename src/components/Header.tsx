import { Link } from '@/components/Link';
import { SocialLinks } from '@/components/SocialLinks';

export function Header() {
  return (
    <header className="flex justify-between text-sm">
      <h1 className="font-medium">
        <Link to="/" className={'no-underline'}>
          Nikita Pashinsky
        </Link>
      </h1>

      <div className="flex gap-4">
        <Link to="mailto:n@nkta.me">Email</Link>
        <Link to="https://twitter.com/nikitapashinsky">Twitter</Link>
      </div>
    </header>
  );
}
