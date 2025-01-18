import Link from "next/link";
import { FaEnvelope, FaWhatsapp, FaTelegramPlane, FaLinkedin, FaGithub } from "react-icons/fa";

export const metadata = {
    title: "User Guide",
};

const UserGuide = async () => {
    const contacts = [
        { id: 1, href: '/', icon: <FaEnvelope className="text-red-500 text-2xl" />, text: 'Email' },
        { id: 2, href: '/', icon: <FaTelegramPlane className="text-blue-400 text-2xl" />, text: 'Telegram' },
        { id: 3, href: '/', icon: <FaWhatsapp className="text-green-500 text-2xl" />, text: 'WhatsApp' },
        { id: 4, href: '/', icon: <FaLinkedin className="text-blue-700 text-2xl" />, text: 'LinkedIn' },
        { id: 5, href: '/', icon: <FaGithub className="text-black text-2xl" />, text: 'GitHub' },
    ]
    return (
        <div className="h-full bg-gradient-to-b from-blue-50 via-purple-300 to-white text-gray-800 p-6 overflow-auto scrollbar-none">
            <div className="max-w-4xl mx-auto">
                <header className="text-center max-sm:text-left py-8">
                    <h1 className="text-5xl font-extrabold text-blue-600 mb-6">
                        Get  to know <span className="text-green-500">Tiny Trailz</span> 🚀
                    </h1>
                    <p className="text-lg text-gray-600">
                        Your ultimate platform for creating short, shareable links with ease.
                    </p>
                </header>

                {/* Main Content */}
                <main className="space-y-12">
                    {/* Section: What is this? */}
                    <section className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-semibold text-blue-500 mb-4">What is Tiny Trailz?</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Tiny Trailz is a platform designed to simplify your link-sharing experience. We take your long, unwieldy URLs and transform them into sleek, manageable links that can be customized to match your brand. Say goodbye to cluttered links and hello to elegance!
                        </p>
                    </section>

                    {/* Section: How does it work? */}
                    <section className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-semibold text-blue-500 mb-4">How Does It Work?</h2>
                        <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3 ">
                            <li className="hover:translate-x-1 cursor-pointer transition-all">
                                Provide us with your long URL, and we’ll generate a short, customized link for you.
                            </li>
                            <li className="hover:translate-x-1 cursor-pointer transition-all">
                                For the sake of getting a shorter link we recommend using a short and easy to remember custom domain.
                            </li>
                            <li className="hover:translate-x-1 cursor-pointer transition-all">
                                Optionally, download a QR code for your link to make sharing even easier.
                            </li>
                            <li className="hover:translate-x-1 cursor-pointer transition-all">
                                Enjoy your new short customised link and use it as you wish!
                            </li>
                        </ol>
                        <div className="mt-6">
                            <Link
                                className="inline-block bg-green-500 text-white font-bold px-6 py-3 rounded-md shadow-md hover:bg-green-600 transition-all"
                                href="/services"
                            >
                                Get Started Now
                            </Link>
                        </div>
                    </section>

                    {/* Section: Contacts */}
                    <section className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Contact the Developer</h2>
                        <p className="text-gray-700 mb-4">
                            Have questions or need help? Reach out to the developer through any of the following channels:
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {contacts.map(contact => (
                                <Link
                                    key={contact.id}
                                    href={contact.href}
                                    className="flex items-center space-x-3 cursor-pointer hover:translate-y-1 transition-all">
                                    {contact.icon}
                                    <span>{contact.text}</span>
                                </Link>
                            ))}
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="text-center py-6 mt-12 text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Tiny Trailz. All rights reserved.
                </footer>
            </div>
        </div>
    );
};

export default UserGuide;
