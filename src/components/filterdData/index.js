import { TbShoppingBagPlus } from "react-icons/tb";
import { CiBookmark } from "react-icons/ci";
import './index.css'
const Filtered = (props) => {
    const {details} = props
    console.log(details)
    return(
        <div className='images-con'>
            <img className='images' src={details.image} alt = {details.title}/>
            <p className='txt'>{details.title}</p>
            <div className='cart-bton-rate'>
            <p className='rate'>₹{details.price}<span className='cut-rate'> {details.orginalprice}</span><span className='off'> {details.off}</span></p>
            <TbShoppingBagPlus className='cart-logo'/>
            </div>
            <CiBookmark className='bookmark'/>
        </div>
    )
}

export default Filtered