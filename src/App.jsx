import CurrentSong from './components/CurrentSong';
import ActionButtons from './components/ActionButtons';
import TrackList from './components/TrackList';
import { tracks } from './data/tracks'; 
import { useState,useEffect } from 'react';

const App = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);
  return (
    <div className="min-h-screen bg-black text-white">
      <CurrentSong />
      <div className="max-w-6xl mx-auto px-4 py-4">
        <ActionButtons isMobile={isMobile}/>
        <TrackList tracks={tracks} />
      </div>
    </div>
  );
};

export default App;
