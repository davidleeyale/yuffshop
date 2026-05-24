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
                This website is built with <a href="https://nextjs.org/" target="blank">Next.JS</a> and <a href="https://tailwindcss.com" target="blank">Tailwind CSS</a>. The <a href="https://github.com/davidleeyale/yuffshop" target="blank">code repository</a> is on <a href="https://www.github.com" target="blank">GitHub</a> and deploys to <a href="https://www.vercel.com" target="blank">Vercel</a>.
            </p>
        </div>
    </>
}