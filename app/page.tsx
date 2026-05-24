import Image from 'next/image'

export default function Page() {
    return <>
        <div className="flex items-center justify-center">
            <div className={""}>
            <Image src="/yuffshop-logo.png" height={400} width={400} alt="Yuffshop Logo"
                   loading="eager"
                   className=""></Image>
            </div>
        </div>
    </>
}