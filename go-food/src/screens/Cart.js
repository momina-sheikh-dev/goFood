import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useCart, useDispatchCart } from '../components/ContextReducer';

export default function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();

  if (!data || data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    );
  }

  const totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div>
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md'>
        <table className='table table-hover'>
          <thead className='text-white fs-4' style={{ backgroundColor: 'navy' }}>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Option</th>
              <th scope='col'>Amount</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td><button type="button" className="btn p-0" onClick={() => { dispatch({ type: "REMOVE", index: index }) }}><DeleteIcon /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div> */}
      </div>
    </div>
  );
}
