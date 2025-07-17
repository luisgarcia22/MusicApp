const App = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-b from-purple-700 to-black pb-6">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center sm:items-end gap-4">
          <img
            src="https://via.placeholder.com/150"
            className="w-40 h-40 rounded-lg shadow-lg"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl font-bold text-white">a girl and a cat</h1>
            <p className="text-sm text-gray-300 mt-2">661,250 monthly listeners</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App