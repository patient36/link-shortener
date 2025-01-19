"use client";

import React from "react";
import useShortenUrl from "./shorten";
import Image from "next/image";
import { FaClipboard, FaCheck, FaDownload } from "react-icons/fa";
import Link from "next/link";

const Service: React.FC = () => {
    const {
        form,
        result,
        error,
        status,
        setStatus,
        handleInputChange,
        handleInputFocus,
        handleShorten,
    } = useShortenUrl();

    const handleCopy = (): void => {
        if (result?.shortUrl) {
            navigator.clipboard
                .writeText(result.shortUrl)
                .then(() => setStatus((prev) => ({ ...prev, copy: "Copied!" })))
                .catch((err) => console.error("Failed to copy URL: ", err));
        }
    };

    const handleDownloadQrCode = (): void => {
        if (result?.qrCode) {
            const date = new Date()
            const now = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}-${date.getMilliseconds()}`
            const link = document.createElement("a");
            link.href = result.qrCode;
            link.download = `qr-code-${now}.png`;
            link.click();
            setStatus((prev) => ({ ...prev, download: "Downloaded!" }));
        }
    };

    return (
        <div className="h-full bg-gradient-to-b from-blue-100 to-gray-100 text-gray-800 p-8 overflow-auto scrollbar-none">
            <div className="max-w-3xl mx-auto">
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-blue-600 mb-2">
                        Simplify Your Links with <span className="text-green-500">Tiny Trailz</span>
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Shorten, customize, and share your links effortlessly.
                    </p>
                </header>

                <div className="flex flex-col gap-8">
                    <div className="rounded-md bg-green-500 bg-opacity-20 w-full flex gap-4 flex-wrap py-4 px-5">
                        <input
                            name="original"
                            type="url"
                            placeholder="Enter your long URL"
                            value={form.original}
                            onChange={handleInputChange}
                            onFocus={() => handleInputFocus("original")} // Clear input and reset result
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            name="alias"
                            type="text"
                            placeholder="Custom domain"
                            value={form.alias}
                            onChange={handleInputChange}
                            onFocus={() => handleInputFocus("alias")} // Clear input and reset result
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                            onClick={handleShorten}
                            className="w-full bg-blue-500 text-white font-bold px-8 py-2 rounded-lg hover:bg-blue-600 transition duration-300 active:scale-95"
                        >
                            Shorten URL
                        </button>
                    </div>

                    {error && <div className="text-red-700 font-semibold text-center">{error}</div>}

                    {result && (
                        <div className="rounded-md bg-blue-100 w-full py-4 px-5 flex flex-col gap-6">
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <p className="bg-white rounded-md py-2 px-6 ">
                                    <span className="font-bold">Short link: </span>
                                    <Link
                                        className="font-light text-gray-500 italic underline"
                                        href={result.shortUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {result.shortUrl}
                                    </Link>
                                </p>
                                <button
                                    onClick={handleCopy}
                                    className={`bg-green-500 text-white font-bold px-8 py-2 rounded-lg hover:bg-green-600 transition-all active:scale-95 flex items-center gap-2 ${status.copy === "Copied!" ? "bg-green-600" : ""
                                        }`}
                                >
                                    {status.copy === "Copied!" ? <FaCheck /> : <FaClipboard />} {status.copy}
                                </button>
                            </div>

                            <div className="flex flex-col items-center justify-center bg-white rounded-md py-6">
                                {result.qrCode && (
                                    <Image
                                        src={result.qrCode}
                                        width={300}
                                        height={300}
                                        priority={true}
                                        alt="QR Code"
                                        className="rounded-md"
                                    />
                                )}
                                <button
                                    onClick={handleDownloadQrCode}
                                    className={`mt-4 bg-green-500 text-white font-bold px-8 py-2 rounded-lg hover:bg-green-600 transition-all active:scale-95 flex items-center gap-2 ${status.download === "Downloaded!" ? "bg-green-600" : ""
                                        }`}
                                >
                                    {status.download === "Downloaded!" ? <FaCheck /> : <FaDownload />} {status.download}
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <footer className="text-center mt-12 text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Tiny Trailz. All rights reserved.
                </footer>
            </div>
        </div>
    );
};

export default Service;
