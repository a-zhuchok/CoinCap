import { useState } from 'react';
import total from '../img/total.png';

const Total=() =>{
 

  return (
    <div class='total'>
      <img src={total} width={40} height={40} alt='total'/>
      <div>
      <p class='total__title'>Итого:</p>

      </div>
   </div>
  )
}

export default Total