import trackImage from '../assets/image_list_1.png';
import heartIcon from '../assets/favorite.png';
import moreIcon from '../assets/see-more.png';

export default function TrackItem() {
  return (
    <div className="flex items-center gap-4">
      <img src={trackImage} className="w-14 h-14 rounded" alt="Track" />
      <div className="flex-1">
        <p className="font-semibold">Lofi Rain</p>
        <p className="text-sm text-gray-400">A girl and a cat</p>
      </div>
      <img src={heartIcon} alt="Like" className="w-5 h-5 cursor-pointer" />
      <img src={moreIcon} alt="More" className="w-5 h-5 cursor-pointer" />
    </div>
  );
}
