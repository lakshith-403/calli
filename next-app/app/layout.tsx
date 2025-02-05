import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import ThemeToggle from "./components/ThemeToggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "SplitWise",
    description: "Manage temporary finances between friends",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} dark:bg-gray-900 dark:text-white`}
            >
                <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                    <header className="bg-white dark:bg-gray-800 shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                Calli
                            </h1>
                            <div className="flex items-center space-x-4">
                                <ThemeToggle />
                                <svg
                                    className="h-8 w-8 text-indigo-600 dark:text-indigo-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </header>
                    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 px-6">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
}
