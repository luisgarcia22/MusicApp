import TrackItem from './TrackItem';

export default function TrackList({ tracks }) {
  return (
    <div className="flex flex-col gap-4 mt-4">
      {tracks.map((track, idx) => (
        <TrackItem key={idx} track={track} />
      ))}
    </div>
  );
}
