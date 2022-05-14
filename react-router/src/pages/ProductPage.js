import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ProductPage() {
  const { id } = useParams();
  return (
    <div>
      Product pages
      {id ? (
        <div> Product ID: {id}</div>
      ) : (
        <ul>
          <li>
            <Link to="/product/1"> Product 1</Link>
          </li>
          <li>
            <Link to="/product/2"> Product 2</Link>
          </li>
          <li>
            <Link to="/product/3"> Product 3</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
