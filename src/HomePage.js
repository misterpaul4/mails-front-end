import logo from './logo.svg';
import './css/index.css';
import mailIcon from './img/mail-icon.png';

function App() {
  return (
    <div className="homepage bg-img">
      <header className="App-header flexed-between">
        <div></div>
        <div className='mail-icon-container bg-img'>
          {/* notification counter */}
          <div id='notification-counter'></div>
        </div>
      </header>

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