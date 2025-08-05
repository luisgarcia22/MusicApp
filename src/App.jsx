import CurrentSong from './components/CurrentSong';
import ActionButtons from './components/ActionButtons';

const App = () => {
  return (
    <div>
      <CurrentSong />
      <div className="max-w-6xl mx-auto px-4 py-4">
        <ActionButtons />
       </div>
    </div>
  );
};

export default App;
