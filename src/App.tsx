import { Impress, Step } from 'react-impressjs';
import 'react-impressjs/styles/react-impressjs.css';
import './App.css';

const defaultData = {
  x: 0,       // as data-x
  y: 0,       // as data-y
  z: 0,       // as data-z
  rotateX: 0, // as data-rotate-x
  rotateY: 0, // as data-rotate-y
  rotateZ: 0, // as data-rotate and data-rotate-z
  scale: 1    // as data-scale
};

export function App() {
  return (
    <Impress 
      progress={true}
      fallbackMessage={<p>Sorry, your device/browser doesn't support this much awesome.</p>}
    >
      <Step id='overview'>
        <h1>Overview</h1>
      </Step> 
      <Step id='any_id' className='class_name'>
        <h2>Step 2</h2>
        <hr />
        <p>Oh yeah...</p>
      </Step>
      <Step className='without_id_is_ok'
        data={{
          x:100,
          y:-100,
          scale:2
        }}
      >
        <h3>Some Cool Content Here!</h3>
        <hr />
        <ul>
          <li>So</li>
          <li>Damn</li>
          <li>Cool</li>
        </ul>
      </Step>
      <Step duration={1500}>
        <h1>Any Element write in Step!</h1>
        <hr />
        <p>Made by your <b>Creativity</b> !!</p>
      </Step>
    </Impress>
  );
}

export default App;
