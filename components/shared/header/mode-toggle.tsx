'use client';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { MoonIcon, SunIcon, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes'; //hook to manage themes
import { useEffect, useState } from 'react';

const ModeToggle = () => {
	const { theme, setTheme } = useTheme(); // Get the current theme and function to set the theme
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return null; // yoki skeleton
	}
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="rounded-md" asChild>
				<Button
					variant="ghost"
					className="!focus-visible:ring-0 !focus-visible:ring-offset-0"
				>
					{theme === 'system' ? (
						<SunMoon />
					) : theme === 'dark' ? (
						<MoonIcon />
					) : (
						<SunIcon />
					)}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="border-1 border-orange-500 rounded-md">
				<DropdownMenuLabel className="p-1">Appearance</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuCheckboxItem
					className="px-1"
					checked={theme === 'system'}
					onClick={() => setTheme('system')}
				>
					System
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					className="px-1"
					checked={theme === 'dark'}
					onClick={() => setTheme('dark')}
				>
					Dark
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					className="px-1"
					checked={theme === 'light'}
					onClick={() => setTheme('light')}
				>
					Light
				</DropdownMenuCheckboxItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ModeToggle;
