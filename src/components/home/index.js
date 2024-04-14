import './index.css'
import { CiSearch } from "react-icons/ci";
import { MdOutlinePersonOutline } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Allbags from "../images/Group475.png"
import Vanitypouch from '../images/Group 307.png'
import TateBag from '../images/Group 300.png'
import DuffleBag from '../images/Group 301.png'
import LaptopSleve from '../images/Group 302.png'
import MessangerBag from '../images/Group 303.png'
import SlingBAg from '../images/Group 304.png'
import HandBag from '../images/Group 305.png'
import BrownBag from '../images/SIPR04018_01 1.png'
import BlackBag from '../images/SIPR04031_01 1.png'
import DarkBag from '../images/SIPR04085_01 1.png'
import GaryBag from '../images/SIPR04086_01 1.png'
import { TbShoppingBagPlus } from "react-icons/tb";

const Home = () => {
    return(
        <div className = "home-container">
            <div className = 'header-container'>
                <div>
                    <h2>TANN TRIM</h2>
                </div>
                <div className='icons-container'>
                    <CiSearch  className='icons'/>
                    <MdOutlinePersonOutline className='icons'/>
                    <CiBookmark className='icons'/>
                    <HiOutlineShoppingBag className='icons'/>
                </div>
            </div>
            <div className='category-container'>
                <h3>Bags</h3>
                <h3>Travel</h3>
                <h3>Accesories</h3>
                <h3>Gifting</h3>
                <h3>Jewelery</h3>
            </div>
            <div className='caregory-images-container'>
                <img className='category-images' src= {Allbags} alt = "bag" />
                <img className='category-images' src={Vanitypouch} alt='Vanity Pouch' />
                <img className='category-images' src = {TateBag} alt = "TateBag" />
                <img className='category-images' src = {DuffleBag} alt = "Duffly Bag" />
                <img className='category-images' src = {LaptopSleve} alt = "LaptopSleve" />
                <img className='category-images' src = {MessangerBag} alt = "MessangerBag" />
                <img className='category-images' src = {SlingBAg} alt = "SlingBAg" />
                <img className='category-images' src = {HandBag} alt = "HandBag" />
            </div>
            <b>Bags . Backepacks</b>
            <div className='images-container'>
                <div className='images-con'>
                    <img className='images' src={BrownBag} alt = "BrownBag"/>
                    <p className='txt'>The Metro Movers Black</p>
                    <div className='cart-bton-rate'>
                    <p className='rate'>$ 4899<span className='cut-rate'> 8999</span><span className='off'> (50% Off)</span></p>
                    <TbShoppingBagPlus className='cart-logo'/>
                    </div>
                    <CiBookmark className='bookmark'/>
                </div>
                <div className='images-con'>
                    <img className='images' src = {BlackBag} alt ="BlackBag"/>
                    <p className='txt'>The Metro Movers Black</p>
                    <div className='cart-bton-rate'>
                    <p className='rate'>$ 4899<span className='cut-rate'> 8999</span><span className='off'> (50% Off)</span></p>
                    <TbShoppingBagPlus className='cart-logo'/>
                    </div>
                    <CiBookmark className='bookmark'/>
                </div>
                <div className='images-con'>
                    <img className='images' src = {DarkBag} alt ="DarkBag"/>
                    <p className='txt'>The Metro Movers Black</p>
                    <div className='cart-bton-rate'>
                    <p className='rate'>$ 4899<span className='cut-rate'> 8999</span><span className='off'> (50% Off)</span></p>
                    <TbShoppingBagPlus className='cart-logo'/>
                    </div>
                    <CiBookmark className='bookmark'/>
                </div>
                <div className='images-con'>
                    <img className='images' src = {GaryBag} alt ="GrayBag"/>
                    <p className='txt'>The Metro Movers Black</p>
                    <div className='cart-bton-rate'>
                    <p className='rate'>$ 4899<span className='cut-rate'> 8999</span><span className='off'> (50% Off)</span></p>
                    <TbShoppingBagPlus className='cart-logo'/>
                    </div>
                    <CiBookmark className='bookmark'/>
                </div>
            </div>
            <div className='images-container'>
                <div className='images-con'>
                    <img className='images' src={BrownBag} alt = "BrownBag"/>
                    <p className='txt'>The Metro Movers Black</p>
                    <div className='cart-bton-rate'>
                    <p className='rate'>$ 4899<span className='cut-rate'> 8999</span><span className='off'> (50% Off)</span></p>
                    <TbShoppingBagPlus className='cart-logo'/>
                    </div>
                    <CiBookmark className='bookmark'/>
                </div>
                <div className='images-con'>
                    <img className='images' src = {BlackBag} alt ="BlackBag"/>
                    <p className='txt'>The Metro Movers Black</p>
                    <div className='cart-bton-rate'>
                    <p className='rate'>$ 4899<span className='cut-rate'> 8999</span><span className='off'> (50% Off)</span></p>
                    <TbShoppingBagPlus className='cart-logo'/>
                    </div>
                    <CiBookmark className='bookmark'/>
                </div>
                <div className='images-con'>
                    <img className='images' src = {DarkBag} alt ="DarkBag"/>
                    <p className='txt'>The Metro Movers Black</p>
                    <div className='cart-bton-rate'>
                        
                    <p className='rate'>$ 4899<span className='cut-rate'> 8999</span><span className='off'> (50% Off)</span></p>
                    <TbShoppingBagPlus className='cart-logo'/>
                    </div>
                    <CiBookmark className='bookmark'/>
                </div>
                <div className='images-con'>
                    <img className='images' src = {GaryBag} alt ="GrayBag"/>
                    <p className='txt'>The Metro Movers Black</p>
                    <div className='cart-bton-rate'>
                    <p className='rate'>$ 4899<span className='cut-rate'> 8999</span><span className='off'> (50% Off)</span></p>
                    <TbShoppingBagPlus className='cart-logo'/>
                    </div>
                    <CiBookmark className='bookmark'/>
                </div>
            </div>
        </div>
    )
}

export default Home