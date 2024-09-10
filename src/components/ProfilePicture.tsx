import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tw-merge';
import clsx from 'clsx';
import me from '../images/me.jpeg';

export default function ProfilePicture() {
	const [isExpanded, setIsExpanded] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		function handleClick(e) {
			if (e.target !== ref.current && isExpanded) {
				setIsExpanded(false);
			}
		}

		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, [isExpanded]);

	useEffect(() => {
		function handleScroll() {
			if (isExpanded) {
				setIsExpanded(false);
			}
		}

		document.addEventListener('scroll', handleScroll);

		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, [isExpanded]);

	const variants = {
		large: {
			transform: 'scale(6)',
			transition: { type: 'spring', duration: 0.5, bounce: 0.25 },
		},
		small: {
			transform: 'scale(1)',
			transition: { type: 'spring', duration: 0.25, bounce: 0 },
		},
	};

	return (
		<motion.img
			ref={ref}
			src={me.src}
			alt="A picture of me smiling"
			variants={variants}
			animate={isExpanded ? 'large' : 'small'}
			initial={false}
			whileTap={{ transform: isExpanded ? 'scale(6.25)' : 'scale(0.85)' }}
			onClick={() => setIsExpanded(!isExpanded)}
			className={twMerge(
				clsx(
					'absolute z-20 block h-full w-full rounded-full shadow-lg shadow-transparent focus:outline-none focus-visible:outline-none',
					isExpanded && 'shadow-lg shadow-black/20 dark:shadow-black/75',
				),
			)}
		></motion.img>
	);
}
