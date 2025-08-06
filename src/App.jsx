import CurrentSong from './components/CurrentSong';
import ActionButtons from './components/ActionButtons';
import TrackList from './components/TrackList';
import { tracks } from './data/tracks'; 

const App = () => {
  return (
    <div className=" bg-black text-white">
      <CurrentSong />
      <div className="max-w-6xl mx-auto px-4 py-4">
        <ActionButtons />
        <TrackList tracks={tracks} />
      </div>
    </div>
  );
};

export default App;
