import Image from 'next/image'

export default function Page() {
    return <>
        <div className="flex items-center justify-center min-h-screen">
            <div className={""}>
            <Image src="/yuffshop-logo.png" height={800} width={800} alt="Yuffshop Logo"
                   className="w-full h-full object-cover"></Image>
            </div>
        </div>
    </>
}