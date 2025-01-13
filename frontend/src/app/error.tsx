"use client"

export default function ErrorBoundary({ error, reset }: { error: Error, reset: () => void }) {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-transparent backdrop-blur-sm z-0 absolute top-0 ">

            <div className="flex items-center justify-center gap-4 flex-col bg-slate-800 w-80 h-52 rounded-lg text-black">
                <p className="text-white font-semibold capitalize p-2"
                >{error.message}</p>
                <button className="bg-blue-400 text-white font-bold px-5 py-2 rounded-md" onClick={reset}>Try again</button>
            </div>

        </div>
    )
}