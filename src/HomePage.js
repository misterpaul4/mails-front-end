import './css/index.css';
import Header from './component/Header';

function App() {

  return (
    <div className="homepage bg-img">
      <Header />
      <div className='hero'>
        <div className='hero-bg text-center'>
          <h1>Simple Inbox Application</h1>
          <p>This app is simply a demo of a mail application where you can send and receive messages to inactive users.</p>
          <button className='btn-padd'>CHECK INBOX</button>
        </div>
      </div>      
    </div>
  );
}

export default App;
