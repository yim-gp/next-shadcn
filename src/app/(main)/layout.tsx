import dynamic from "next/dynamic"
const ClientShell = dynamic(() => import("@/components/client-shell").then(m => m.ClientShell), { ssr: false })
export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <ClientShell>{children}</ClientShell>
        </>
    )
}