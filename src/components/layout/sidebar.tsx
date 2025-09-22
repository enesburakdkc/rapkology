"use client";

import { X } from "lucide-react";
import { useSidebar } from "@/context/sidebar-context";

interface SidebarProps {
    className?: string;
}

const menu = [
    { label: "ANA SAYFA", href: "/" },
    { label: "HABERLER", href: "/haberler" },
    { label: "ETKİNLİKLER", href: "/etkinlikler" },
    { label: "MÜZİKLER", href: "/muzikler" },
    { label: "VİDEOLAR", href: "/videolar" },
    { label: "İLETİŞİM", href: "/iletisim" },
];

export function Sidebar({ className, }: SidebarProps) {
    const { open, setOpen } = useSidebar();

    const handleClose = () => {
        setOpen(false);
    };

    if (!open) return null;

    return (
        <>
            {/* Backdrop */}
            <div 
                className="fixed inset-0 bg-black/50 z-110"
                onClick={handleClose}
            />
            
            {/* Sidebar */}
            <aside className={`${className} fixed top-0 right-0 z-120`}>
                <nav className="flex flex-col gap-2 bg-black w-64 h-screen p-4">
                    <div className="flex justify-end mb-4">
                        <button 
                            onClick={handleClose}
                            className="p-2 rounded hover:bg-gray-700 text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>
                    {menu.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="p-2 rounded hover:bg-gray-700 text-white transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </aside>
        </>
    )
}
