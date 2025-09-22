import React from "react"

interface MainProps {
    className?: string;
    children?: React.ReactNode;
}

export function Main({ className, children }: MainProps) {
    return (
        <main className={`min-h-[calc(100svh-4rem)] ${className}`}>
            {children}
        </main>
    )
}