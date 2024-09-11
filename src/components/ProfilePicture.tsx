import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tw-merge';
import clsx from 'clsx';
import me24 from '../images/me-48px.webp';
import me144 from '../images/me-288px.webp';

export default function ProfilePicture() {
	const [isExpanded, setIsExpanded] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		function handleClick(e: MouseEvent) {
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
			scale: 1,
			transition: { type: 'spring', duration: 0.5, bounce: 0.25 },
		},
		small: {
			scale: 0.166666,
			transition: { type: 'spring', duration: 0.25, bounce: 0.1 },
		},
	};

	return (
		<motion.img
			ref={ref}
			src={me144.src}
			alt="A picture of me smiling"
			variants={variants}
			animate={isExpanded ? 'large' : 'small'}
			initial={false}
			whileTap={{ scale: isExpanded ? 1.075 : 0.14 }}
			onClick={() => setIsExpanded(!isExpanded)}
			className={twMerge(
				clsx(
					'absolute flex h-36 w-36 max-w-none cursor-zoom-in rounded-full shadow-lg shadow-transparent focus:outline-none focus-visible:outline-none',
					isExpanded &&
						'cursor-zoom-out shadow-2xl shadow-black/30 dark:shadow-black/75',
				),
			)}
		/>
	);
}
