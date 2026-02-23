import Lanyard from './component/Lanyard';

function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#000', // Optional: dark background
      }}
    >
      <Lanyard
        position={[0, 0, 20]}
        gravity={[0, -40, 0]}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  );
}

export default App;
