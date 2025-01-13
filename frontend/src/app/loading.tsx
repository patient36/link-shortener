const Loader = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-transparent backdrop-blur-sm z-0 absolute top-0 ">
            <div className="flex items-center justify-center flex-col bg-slate-800 w-60 h-52 rounded-lg text-black">
                <div id="wifi-loader">
                    <svg viewBox="0 0 86 86" className="circle-outer">
                        <circle r="40" cy="43" cx="43" className="back"></circle>
                        <circle r="40" cy="43" cx="43" className="front"></circle>
                        <circle r="40" cy="43" cx="43" className="new"></circle>
                    </svg>
                    <svg viewBox="0 0 60 60" className="circle-middle">
                        <circle r="27" cy="30" cx="30" className="back"></circle>
                        <circle r="27" cy="30" cx="30" className="front"></circle>
                    </svg>

                    <div data-text="Loading..." className="text"></div>
                </div>

            </div>
        </div>
    );
}

export default Loader;