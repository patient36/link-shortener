import Link from 'next/link'
import { FaFaceSadTear } from 'react-icons/fa6';
const NotFound = () => {
    return (
        <div className="w-screen h-screen bg-black flex items-center gap-10 justify-center flex-col absolute top-0 ">
            <div className="flex gap-2">
                <div
                    className='w-20 h-20 max-sm:w-14 max-sm:h-14 max-sm:text-2xl flex items-center justify-center font-extrabold text-7xl border'
                >4</div>
                <div
                    className='w-20 h-20 max-sm:w-14 max-sm:h-14 max-sm:text-4xl flex items-center justify-center font-extrabold text-7xl rounded-full text-red-500 animate-pulse'
                ><FaFaceSadTear /> </div>
                <div
                    className='w-20 h-20 max-sm:w-14 max-sm:h-14 max-sm:text-2xl flex items-center justify-center font-extrabold text-7xl border'
                >4</div>
            </div>
            <div className='text-white flex items-center'>
                <p
                    className='ml-4'
                >Page not found</p>
                <Link
                    className="font-bold border-l-2 border-l-green-500 mx-2 px-2 hover:underline cursor-pointer hover:text-blue-400 transition-all"
                    href={'/'}>
                    Go back Home
                </Link>
            </div>
        </div >
    );
}

export default NotFound;