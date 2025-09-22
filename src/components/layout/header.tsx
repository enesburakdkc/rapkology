"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, Search } from "lucide-react";
import { useSidebar } from "@/context/sidebar-context";

interface Props {
    className?: string;
}

export function Header({ className }: Props) {
    const router = useRouter();
    const { setOpen } = useSidebar();

    const handleMenuClick = () => {
        setOpen(true);
    };

    return (
        <header className={`px-4 md:px-20 py-2 h-16 md:h-auto w-full absolute flex flex-row justify-between items-center z-100 bg-black/20 backdrop-blur-md md:border-b border-gray-500/50 ${className}`}>
            {/* Logo section */}
            <Image
                src="/images/header/logo.svg"
                alt="RapKology Logo"
                width={260}
                height={260}
                className="w-auto h-full pl-0 md:pl-5"
                onClick={() => router.push("/")}
            />

            {/* Pages section */}
            <ul className="hidden xl:flex flex-row gap-8 pr-50 font-saira text-sm">
                <li>HABERLER</li>
                <li>ETKİNLİKLER</li>
                <li>MÜZİKLER</li>
                <li>VİDEOLAR</li>
                <li>İLETİŞİM</li>
            </ul>

            {/* Search Bar & Login section */}
            <div className="hidden xl:flex flex-row items-center gap-8">
                <Search strokeWidth={3} />
                <button className="bg-white px-7 py-3 text-black text-sm font-saira font-semibold whitespace-nowrap">GİRİŞ YAP</button>
            </div>

            <Menu className="flex xl:hidden cursor-pointer" onClick={handleMenuClick} />
        </header>
    )
}