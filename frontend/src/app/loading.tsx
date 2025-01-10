const Loader = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center flex-col bg-transparent backdrop-blur-sm z-0 absolute top-0 ">
            <div className="flex items-center justify-center flex-col bg-red-50 w-60 h-40 rounded-lg text-black">
                <h1>Wait a moment</h1>
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
            </div>
        </div>
    );
}

export default Loader;