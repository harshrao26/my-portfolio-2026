'use client';
import { usePathname } from 'next/navigation';
import Navigation from './Navigation';

export default function ConditionalNavigation() {
    const pathname = usePathname();

    // Hide navigation on resume pages
    const hideNavigation = pathname === '/resume' || pathname === '/resumedubai';

    if (hideNavigation) {
        return null;
    }

    return <Navigation />;
}
