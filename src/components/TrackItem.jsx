import moreIcon from '../assets/see-more.png';

export default function TrackItem({ track }) {
  return (
    <div className="flex items-center gap-4">
      <img src={track.image} className="w-14 h-14 rounded" alt="Track" />
      <div className="flex-1">
        <p className="font-semibold">{track.title}</p>
        <p className="text-sm text-gray-400">{track.artist}</p>
      </div>
      <img src={track.like_button} alt="Like" className="w-5 h-5 cursor-pointer" />
      <img src={moreIcon} alt="More" className="w-5 h-5 cursor-pointer" />
    </div>
  );
}
