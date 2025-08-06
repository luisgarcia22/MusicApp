import CurrentSong from './components/CurrentSong';
import ActionButtons from './components/ActionButtons';
import TrackItem from './components/TrackItem';
 

const App = () => {
  return (
    <div className=" bg-black text-white">
      <CurrentSong />
      <div className="max-w-6xl mx-auto px-4 py-4">
        <ActionButtons />
        <TrackItem />
      </div>
    </div>
  );
};

export default App;
