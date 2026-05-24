import Image from 'next/image'

export default function Page() {
    return <>
        <div className="flex items-center justify-center">
            <div className={""}>
            <Image src="/yuffshop-logo.png" height={400} width={400} alt="Yuffshop Logo"
                   loading="eager"
                   className=""></Image>
            </div>
            <p>
                This website is built with <a href="https://nextjs.org/" className="text-blue-500" target="blank">Next.JS</a> and <a href="https://tailwindcss.com" className="text-blue-500" target="blank">Tailwind CSS</a>. The <a href="https://github.com/davidleeyale/yuffshop" className="text-blue-500" target="blank">code repository</a> is on <a href="https://www.github.com" className="text-blue-500" target="blank">GitHub</a> and deploys to <a href="https://www.vercel.com" className="text-blue-500" target="blank">Vercel</a>.
            </p>
        </div>
    </>
}