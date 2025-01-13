import Link from "next/link"

export const metadata = {
    title: " User guide "
}

const UserGuide = async () => {
    return (
        <div className="bg-white text-black h-full p-4 overflow-auto scrollbar-none">
            <h1 className="text-3xl font-bold mt-5 mb-10 text-center">Get started with Tiny trailz 💡!</h1>
            {/* container */}
            <div>
                <div className="p-3 mb-5 rounded-md bg-slate-300 transition-all cursor-pointer bg-opacity-20 hover:bg-opacity-80 ">
                    <p className="font-bold text-xl mb-2">What is this ?</p>

                    <div className="p-2 my-3 ">
                        First things first,
                        <span className="font-bold underline mx-2 hover:text-green-500 transition-all">Tiny trailz</span>  is a platform that
                        <span className="font-bold underline mx-2 hover:text-green-500 transition-all">provides a better option</span> for sharing data through links. We collect a really
                        <span className="font-bold underline mx-2 hover:text-green-500 transition-all">long link</span> from you, which you surely need but not that long and we help you get
                        <span className="font-bold underline mx-2 hover:text-green-500 transition-all">a better version</span> of it. We encourage you to
                        <span className="font-bold underline mx-2 hover:text-green-500 transition-all">use this service</span> for really long links and enjoy your new short
                        <span className="font-bold underline mx-2 hover:text-green-500 transition-all">links registered under your custom domain.
                        </span>
                    </div>
                </div>
                <div className="p-3 mb-5 rounded-md bg-slate-300 transition-all cursor-pointer bg-opacity-20 hover:bg-opacity-80 ">
                    <p className="font-bold text-xl mb-2">How does it work ?</p>

                    <div className="p-2 my-3 ">
                        Your link is safe with us,
                        <span className="font-bold underline mx-2 hover:text-green-500 transition-all">Tiny trailz</span>  stores your link for you and
                        <span className="font-bold underline mx-2 hover:text-green-500 transition-all">provides a short one</span> to be using for your own.
                        <span className="font-bold underline mx-2 hover:text-green-500 transition-all"> Your long link</span> is transformed into
                        <span className="font-bold underline mx-2 hover:text-green-500 transition-all">a shorter version</span>.And in addition  you can either
                        <span className="font-bold underline mx-2 hover:text-green-500 transition-all">get a short vesion</span> of it or a
                        <span className="font-bold underline mx-2 hover:text-green-500 transition-all"> QR code</span> or simply
                        <span className="font-bold underline mx-2 hover:text-green-500 transition-all">get them both</span>, it's up to you to choose!
                    </div>
                    <Link
                        className="bg-blue-400 text-white font-bold px-5 py-2 rounded-md"
                        href={"/services"}>
                        Try it out 😉
                    </Link>
                </div>
                <div className="p-3 mb-5 rounded-md bg-slate-300 transition-all cursor-pointer bg-opacity-20 hover:bg-opacity-80 ">
                    <p className="font-bold text-xl mb-2">Contact us</p>

                    <div className="p-2 my-3 ">
                        <ul>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Twitter/X</li>
                            <li>Gmail</li>
                            <li>WhatsApp</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserGuide