import React from 'react';
import { Link } from 'react-router-dom';
import Properties from './Properties';

export default function Temp() {
  return (
    <div className='heading text-center m-5'>
      <h2>This feature has not been implemented yet</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
        laboriosam molestiae incidunt tempore, fugiat veritatis! Quam libero,
        deleniti aliquam consequatur delectus modi, illo eveniet maiores dolor
        repudiandae distinctio harum quibusdam fuga? Doloremque, aut nisi
        possimus numquam, quibusdam consequuntur in temporibus minima, quasi
        corporis ullam voluptas! Voluptatum odio veritatis harum perferendis
        earum quae alias! Vero nihil animi aliquam amet similique iste sunt quae
        sint perferendis? Adipisci, a quibusdam quidem ad quod hic sequi nemo
        eos nobis.
      </p>
      <Link
        className='btn btn-lg btn-primary'
        to='/properties'
        element={<Properties />}
      >
        Go back to Properties
      </Link>
    </div>
  );
}
