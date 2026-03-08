import { Link as RouterLink } from '@tanstack/react-router';
import { cn } from '~/utils/cn';

export const linkStyles = cn(
	'relative outline-none',
	'transition-colors duration-125 hover:duration-75',
	'hover:text-black focus-visible:text-black active:text-black',
	'before:absolute before:inset-x-0 before:-bottom-px before:-z-1 before:h-px before:bg-black/12',
	'before:transition-all before:duration-125 hover:before:duration-75 focus-visible:before:duration-75 active:duration-75',
	'hover:before:-inset-s-0.5 hover:before:-inset-e-0.75 hover:before:h-[calc(100%+2px)]',
	'hover:before:rounded hover:before:bg-black/8',
	'focus-visible:before:-inset-s-0.5 focus-visible:before:-inset-e-0.75 focus-visible:before:h-[calc(100%+2px)] focus-visible:before:rounded focus-visible:before:bg-black/8',
	'active:before:-inset-s-0.5 active:before:-inset-e-0.75 active:before:h-[calc(100%+2px)] active:before:rounded active:before:bg-black/8',
);

type ExternalLinkProps = Omit<React.ComponentProps<'a'>, 'href'> & {
	external: true;
	to: `http://${string}` | `https://${string}` | `mailto:${string}`;
};

type InternalLinkProps = React.ComponentProps<typeof RouterLink> & {
	external?: false;
};

type LinkProps = ExternalLinkProps | InternalLinkProps;

export function Link(props: LinkProps) {
	if (props.external) {
		const { external, to, className, ...rest } = props;
		return (
			<a
				href={to}
				target="_blank"
				rel="noopener noreferrer"
				{...rest}
				className={cn(linkStyles, className)}
			/>
		);
	}

	const { external, className, ...rest } = props;
	return <RouterLink {...rest} className={cn(linkStyles, className)} />;
}
