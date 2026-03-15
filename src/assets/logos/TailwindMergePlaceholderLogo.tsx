import { twMerge } from 'tailwind-merge';

export function TailwindMergePlaceholderLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      className={twMerge(
        'fill-neutral-450 group-hover:fill-neutral-950 group-active:fill-neutral-950',
        props.className,
      )}
    >
      <path d="M6 17.2c0-2.978 0-4.467.392-5.672a8 8 0 0 1 5.136-5.136C12.733 6 14.222 6 17.2 6h13.6c2.978 0 4.467 0 5.672.392a8 8 0 0 1 5.136 5.136C42 12.733 42 14.222 42 17.2v13.6c0 2.978 0 4.467-.392 5.672a8 8 0 0 1-5.136 5.136C35.267 42 33.778 42 30.8 42H17.2c-2.978 0-4.467 0-5.672-.392a8 8 0 0 1-5.136-5.136C6 35.267 6 33.778 6 30.8V17.2Z" />
      <path
        fill="#fff"
        d="M20.994 19.864H16.96V31h-1.767V19.864H11.16v-1.547h9.835v1.547Zm8.675 8.816h.15l4.2-10.363h2.04V31h-1.626v-9.51h-.114L30.442 31h-1.397l-3.87-9.51h-.12V31h-1.617V18.317h2.03l4.2 10.363Z"
      />
    </svg>
  );
}
