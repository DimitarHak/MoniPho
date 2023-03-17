import React from 'react';
import '../Style/pages.css';
import IMAGES from '../index2.json';

export default function RenderImages() {

  
  return (
   <>
    <div className='img-container'>
   {
    IMAGES && IMAGES.map((item) =>
    <div className='img-pr' key={item.id}>
      <img src={item.image} className='img-print' alt={item.name} /><br/>
      <span>{item.name}</span>
      <span>{item.model}</span>
    </div>)
   }
   </div>
   </>
  );
}
