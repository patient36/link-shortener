import Link from 'next/link'
const NotFound = () => {
    return (
        <div className="w-screen h-screen bg-slate-500 flex items-center gap-10 justify-center flex-col absolute top-0 ">
            <p>Page Not Found</p>
            <Link
                className="bg-blue-400 text-white font-bold px-5 py-2 rounded-md"
                href={'/'}>Back Home</Link>
        </div>
    );
}

export default NotFound;