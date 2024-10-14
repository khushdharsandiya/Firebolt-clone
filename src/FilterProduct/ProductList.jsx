// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useCart } from '../AddToCart/CartContext';

// const ProductList = ({ products }) => {
//   const { dispatch } = useCart();

//   const addToCart = (item) => {
//     dispatch({ type: 'ADD_TO_CART', payload: item });
//   };
//   return (
//     <ul>
//       <div className='d-flex container justify-content-around gap-2 flex-wrap Best_watch_Cart'>
//         {products.map(product => (
//           <div className='Cart' key={product.id}>
//             <div className='Img-main d-flex justify-content-center align-items-center'>
//               <Link to={`/WatchProduct/${product.id}`}>
//                 <img src={product.img} alt={product.title} />
//               </Link>
//             </div>
//             <div className='d-flex justify-content-between align-items-center p-2 title'>
//               <h3>{product.title}</h3>
//               <p className='mt-2'>{product.rating}</p>
//             </div>
//             <div className='p-1 ps-2'>
//               <h4>{product.price}</h4>
//             </div>
//             <div className='ps-2 p-1 Addtocart'>
//               <Link className='Link' to={"/AddToCart"} onClick={() => addToCart(product)}>
//                 <h5 className='text-dark'>Add to cart</h5>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </ul >
//   );
// };

// export default ProductList;




import React from 'react';
import { Link } from 'react-router-dom';
// import watch_Data from '../Data/Watch';
// import '../style/WatchCart.css';
import { useCart } from '../AddToCart/CartContext';

export default function ProductList({ products }) {
  const { dispatch } = useCart();

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  return (
    <div className='Watch_main_div'>
      <div className='d-flex container justify-content-around gap-2 flex-wrap Best_watch_Cart'>
        {products.map((item) => (
          <div className='Cart' key={item.id}>
            <div className='Img-main d-flex justify-content-center align-items-center'>
              <Link to={`/WatchProduct/${item.id}`}>
                <img src={item.img} alt={item.title} />
              </Link>
            </div>
            <div className='d-flex justify-content-between align-items-center p-2 title'>
              <h3>{item.title}</h3>
              <p className='mt-2'>{item.rating}</p>
            </div>
            <div className='p-1 ps-2'>
              <h4>{item.price}</h4>
            </div>
            <div className='ps-2 p-1 Addtocart'>
              <Link className='Link' to={"/AddToCart"} onClick={() => addToCart(item)}>
                <h5 className='text-dark'>Add to cart</h5>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
