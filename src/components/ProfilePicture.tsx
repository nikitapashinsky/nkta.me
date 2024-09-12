import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tw-merge';
import clsx from 'clsx';
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
			rotate: 360,
			transition: { type: 'spring', duration: 0.5, bounce: 0.15 },
		},
		small: {
			scale: 0.1666666667,
			rotate: 0,
			transition: { type: 'spring', duration: 0.35, bounce: 0.15 },
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
			style={{ WebkitTouchCallout: 'none' }}
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
