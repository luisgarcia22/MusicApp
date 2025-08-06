import HeaderSong from '../assets/image_girl_header.png';
import goBackIcon from '../assets/Go-back.png';

const CurrentSong = () => {
  return (
    <div className="relative bg-gradient-to-b from-purple-700 to-black pb-6">
       <div className="relative bg-gradient-to-b from-purple-700 to-black pb-6">
      <img
        src={goBackIcon}
        alt="Go back"
        className="absolute top-6 left-[20px] w-6 h-6 sm:w-8 sm:h-8 2xl:left-70 sm:left-15 cursor-pointer"
      />
      <div className="max-w-6xl mx-auto px-4 2xl:px-60 py-6 flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:ml-25 lg:ml-35">
        <img src={HeaderSong} className="w-40 h-40 rounded-lg shadow-lg" />
        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            a girl and a cat
          </h1>
          <p className="text-sm text-gray-300 mt-2">
            661,250 monthly listeners
          </p>
        </div>
      </div>
      </div>
      </div>
  );
};

export default CurrentSong;
