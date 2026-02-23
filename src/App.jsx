import Lanyard from './component/Lanyard';

function App() {
  return (
    <>
      <Lanyard
        position={[0, 0, 20]}
        gravity={[0, -40, 0]}
      />
    </>
  );
}

export default App;
