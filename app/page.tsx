import Image from 'next/image'

export default function Page() {
    return <>
        <div className="flex items-center justify-center min-h-screen">
            <div className={""}>
            <Image src="/yuffshop-logo.png" height={600} width={600} alt="Yuffshop Logo"
                   loading="eager"
                   className="object-contain h-full w-full"></Image>
            </div>
        </div>
    </>
}