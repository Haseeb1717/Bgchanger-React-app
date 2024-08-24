import { useState } from 'react';
import './color.css';

export function App() {
  const [color, setColor] = useState('olive');

  return (
    <div className='colorbg' style={{ backgroundColor: color }}>
      <div className='background-flex'>
        <button
          className='green-color'
          onClick={() => setColor('green')}
        ></button>
        <button
          className='maroon-color'
          onClick={() => setColor('maroon')}
        ></button>
        <button
          className='black-color'
          onClick={() => setColor('black')}
        ></button>
        <button className='red-color' onClick={() => setColor('red')}></button>
        <button
          className='golden-rod'
          onClick={() => setColor('goldenrod')}
        ></button>
      </div>
    </div>
  );
}
