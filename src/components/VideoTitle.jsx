const VideoTitle = ({ title, overview }) => {


    return (
        <div className="pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video ">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="w-1/4  text-justify py-6"> {overview}</p>
            <div>
                <button className="bg-white text-black text-xl  rounded-md px-12 py-2 hover:bg-opacity-90 ">▶️ Play</button>
                <button className="bg-gray-500 text-white text-xl bg-opacity-50 rounded-md px-12 py-2 mx-2">More Info</button>
            </div>
        </div>
    )
};
export default VideoTitle;