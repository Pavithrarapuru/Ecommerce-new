import React, { useContext } from 'react';
import './css/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item';
import { Link } from 'react-router-dom';
// import ProductDisplay from '../components/ProductDisplay/ProductDisplay';


const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p><span>Showing 1-12</span> out of 36 products</p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          let image = <img src={item.image} alt="" />
          if (props.category === item.category) {
            return (<div className='return'>
              <Link to={`/product/${item.id}`}>{image}</Link>
              <Item key={i} id={item.id} name={item.name} new_price={<p><b> Price :₹{item.new_price}</b></p>} old_price={<p>Old price :₹{item.old_price} </p>} />
            </div>)
          }
          else {
            return null;
          }
        })}
      </div>
      <div className="loadmore">
        Explore More
      </div>
    </div>
  );
}

export default ShopCategory;
