import { createContext, use, useEffect, useRef, useState } from 'react';
import { Switch } from '@base-ui/react/switch';
import { Field } from '@base-ui/react';
import { cn } from '~/utils/cn';

const DevToolbarContext = createContext({ showGrid: false });

export function useDevToolbar() {
	return use(DevToolbarContext);
}

export function DevToolbarProvider({ children }: { children: React.ReactNode }) {
	const [showToolbar, setShowToolbar] = useState(true);
	const [showGrid, setShowGrid] = useState(false);
	const showGridRef = useRef(showGrid);

	useEffect(() => {
		setShowGrid(localStorage.getItem('dev-toolbar:showGrid') === 'true');

		function handleKeyDown(e: KeyboardEvent) {
			if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
			if (e.key === 'd' || e.key === 'D') {
				setShowToolbar((prev) => !prev);
			}
			if (e.key === 'g' || e.key === 'G') {
				handleShowGridChange(!showGridRef.current);
			}
		}

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, []);

	function handleShowGridChange(value: boolean) {
		setShowGrid(value);
		showGridRef.current = value;
		localStorage.setItem('dev-toolbar:showGrid', String(value));
	}

	if (!import.meta.env.DEV) {
		return children;
	}

	return (
		<DevToolbarContext value={{ showGrid }}>
			{children}
			<div
				className={cn(
					'hidden md:flex',
					'fixed right-3 bottom-3 z-100',
					'items-center gap-3 rounded-full bg-neutral-900/85 p-2 pl-3 text-sm text-white shadow-lg shadow-black/15 backdrop-blur-xs',
					!showToolbar && 'hidden',
				)}
			>
				<Field.Root>
					<Field.Label className={'flex items-center gap-2'}>
						<span className={'text-xs font-[450]'}>Grid</span>
						<Switch.Root
							id="grid-toggle"
							checked={showGrid}
							onCheckedChange={handleShowGridChange}
							className={cn(
								'relative flex h-5 w-8 rounded-full bg-white/20 p-0.5 transition-colors',
								'data-checked:bg-blue-500',
							)}
						>
							<Switch.Thumb
								className={cn(
									'aspect-square h-full rounded-full bg-white transition-transform',
									'data-checked:translate-x-3',
								)}
							/>
						</Switch.Root>
					</Field.Label>
				</Field.Root>
			</div>
		</DevToolbarContext>
	);
}
