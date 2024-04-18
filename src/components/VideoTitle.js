const VideoTitle = ({ title, overview }) => {
  // console.log(title);
  // console.log(overview);
  return (
    <div className=" w-screen aspect-video pt-[18%] px-6 md:px-12 absolute text-white bg-gradient-to-br from-black">
      <h1 className="text-2xl md:text-5xl font-bold text-white">{title}</h1>
      <p className="hidden md:inline-block py-6 text-base w-2/4 text-white">{overview}</p>
      <div className="my-4 md:m-0">
        <button className=" bg-white text-black py-2 md:py-2 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
        <i className="fa-solid fa-play fa-lg"></i> Play
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white py-2 px-8 text-xl bg-opacity-80 hover:bg-opacity-50 rounded-lg">
        <i className='bx bx-info-circle '></i>  More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
