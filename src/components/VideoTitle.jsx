const VideoTitle = ({ title, overview }) => {


    return (
        <div className=" md:pt-[18%] px-6 md:px-12 absolute text-white md:bg-gradient-to-r from-black w-screen aspect-video ">
            <h1 className="  mt-1 text-xl md:text-4xl font-bold">{title}</h1>
            <p className=" hidden md:inline-block md:w-1/4  md:text-justify md:py-6"> {overview}</p>
            <div>
                <button className="bg-white text-black mt-2 text-sm md:text-xl  rounded-md  px-6 py-1 md:px-12 md:py-2 hover:bg-opacity-90 ">▶️ Play</button>
                <button className=" hidden md:inline-block bg-gray-500 text-white text-xl bg-opacity-50 rounded-md px-12 py-2 mx-2">More Info</button>
            </div>
        </div>
    )
};
export default VideoTitle;