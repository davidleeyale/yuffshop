import './globals.css';
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Yuffshop",
    description: "Blank website template for Yuffshop",
};

const navigation = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    {
        name: "Company",
        href: "/company",
        children: [
            { name: "Team", href: "/company/team" },
            { name: "Investors", href: "/company/investors" },
            { name: "Public Relations", href: "/company/public-relations" },
        ],
    },
    { name: "Contact Us", href: "/contact-us" },
];

const footerLinks = [
    { name: "Careers", href: "/careers" },
    { name: "Newsletter", href: "/newsletter" },
];

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className="min-h-screen text-gray-900">
        <div className="flex flex-col">
            {/* Header */}
            <header className="border-b">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <Link
                        href="/"
                        className="text-2xl font-bold tracking-tight"
                    >
                        Yuffshop
                    </Link>

                    <nav>
                        <ul className="flex items-center gap-8">
                            {navigation.map((item) => (
                                <li
                                    key={item.name}
                                    className="group relative"
                                >
                                    <Link
                                        href={item.href}
                                        className="font-medium transition hover:text-blue-600"
                                    >
                                        {item.name}
                                    </Link>

                                    {item.children && (
                                        <div className="absolute left-0 top-full z-50 hidden pt-3 group-hover:block">
                                            <ul className="min-w-[220px] rounded-xl border bg-white p-2 shadow-lg">
                                                {item.children.map((subItem) => (
                                                    <li key={subItem.name}>
                                                        <Link
                                                            href={subItem.href}
                                                            className="block rounded-lg px-4 py-2 transition hover:bg-gray-100"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-12">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t bg-white">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Yuffshop. All rights reserved.
                    </p>

                    <ul className="flex items-center gap-6">
                        {footerLinks.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="text-sm font-medium transition hover:text-blue-600"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>
        </div>
        </body>
        </html>
    );
}