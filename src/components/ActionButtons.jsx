import playButton from '../assets/Play Button.png';
import followButton from '../assets/Follow-Button.png';
import shuffleButton from '../assets/shuffle.png';


export default function ActionButtons({ isMobile }) {
    return isMobile ? (
    <>
      <div className="flex justify-between items-center mb-2">
           <img
          src={followButton}
          alt="Play"
          className="w-17 h-8 cursor-pointer"
        />
        <div className="flex gap-2 items-center">
          <img src={shuffleButton} alt="Shuffle" className="w-6 h-6 cursor-pointer" />
          <img src={playButton} alt="Play" className="w-8 h-8 cursor-pointer"/>
        </div>
      </div>
      <div className="mb-2">
        <h2 className="text-xl font-bold">Popular</h2>
      </div>
    </>
  ) : (
    <div className="flex justify-between items-center w-full mb-4">
      <h2 className="text-xl font-bold">Popular</h2>
      <div className="flex items-center gap-[16px]">
        <img src={playButton} alt="Play" className="w-12 h-12 cursor-pointer" />

        <img
          src={followButton}
          alt="Play"
          className="w-17 h-8 cursor-pointer"
        />

        <img
          src={shuffleButton}
          alt="Play"
          className="w-6 h-6 cursor-pointer"
        />
      </div>
    </div>
  );
}
