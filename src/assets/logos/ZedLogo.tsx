import { twMerge } from 'tailwind-merge';

export function ZedLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      className={twMerge(
        'fill-neutral-450 group-hover:fill-[#1348DC] group-active:fill-[#1348DC]',
        props.className,
      )}
    >
      <path d="M9.375 8.25c-.621 0-1.125.504-1.125 1.125v24.75H6V9.375A3.375 3.375 0 0 1 9.375 6h30.142c1.503 0 2.256 1.818 1.193 2.88L22.146 27.446h5.229v-2.32h2.25v2.883c0 .932-.756 1.687-1.688 1.687h-8.041l-3.867 3.867h17.534V19.5h2.25v14.063a2.25 2.25 0 0 1-2.25 2.25H13.777L9.842 39.75h28.784c.621 0 1.125-.504 1.125-1.125v-24.75H42v24.75A3.375 3.375 0 0 1 38.625 42H8.483c-1.503 0-2.256-1.818-1.193-2.88l18.494-18.495h-5.159v2.25h-2.25v-2.813c0-.931.756-1.687 1.688-1.687h7.971l3.938-3.938H14.436V28.5h-2.25V14.437a2.25 2.25 0 0 1 2.25-2.25h19.785l3.937-3.937H9.375Z" />
    </svg>
  );
}
