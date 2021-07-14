import LeftBar from '../../components/leftBar/LeftBar'
import RightBar from '../../components/rightBar/RightBar'
import TopBar from '../../components/topBar/TopBar'

function Home() {
  return (
    <div className="App">
      <TopBar />
      <LeftBar />
      <RightBar />
    </div>
  );
}

export default Home;
