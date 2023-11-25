import './/Carditem.css'
import p_product from '../products.json'

const CardItems = () => {
    const name = 'Dami'
  return (
    <div className='Item'>
{p_product.map((item,key)=>{
        const {product_name,product_desc,product_price,product_img} = item
return(
 <div  className='container' key={key} >
 <div className="bag"> 
 <img src={product_img} className='first' alt=' p'/>
    <div className="second">{product_name}</div>
    <div className="third">{product_desc}</div>
    <div className="fourth">#{product_price}</div>
    </div>
 </div>
)})}
 <h1 className='text'>Hello {name}</h1>

    </div>
  )
}

export default CardItems