import { useSelector } from "react-redux";
import VideoBG from "./VideoBG";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayMovies);

  // console.log(movies)
  if (!movies) return;

  const mainMovie = movies[0];
  // console.log(mainMovie);
  const { original_title, overview,id } = mainMovie;
  // console.log(original_title, overview);
  
  // console.log(" Main component", process.env.REACT_APP_OpenAI_Key)

  return (
    <div className="bg-black pt-[32%] sm:pt-[20%] lg:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBG movieId={id} />
    </div>
  );
};

export default MainContainer;
