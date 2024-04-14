import './index.css'
import { CiSearch } from "react-icons/ci";
import { MdOutlinePersonOutline } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Allbags from "../images/Group 475.png"
import Vanitypouch from '../images/Group 307.png'
import TateBag from '../images/Group 300.png'
import DuffleBag from '../images/Group 301.png'
import LaptopSleve from '../images/Group 302.png'
import MessangerBag from '../images/Group 303.png'
import SlingBAg from '../images/Group 304.png'
import HandBag from '../images/Group 305.png'
import { useEffect, useState } from 'react';
import axios from "axios"
import Filtered from '../filterdData';

const Home = () => {
    const [products, setProducts] = useState([])
    const [data, setData] = useState([])
    const [select, setSelect] = useState("Backpacks")
    useEffect(() => {
        getTheProductsData()
    }, [])
    useEffect(() => {
        filteData();
    }, [select, products]);

    const getTheProductsData = async() => {
        try{
            const response = await axios.get("https://saleassistbackend.onrender.com/")
            const result = response.data
            setProducts(result)

        } catch(e){
            console.log(e.message)
        }
    }

   const filteData = () => {
    const filteredData = products.filter((each) => (
        each.category === select
    ))
    console.log(filteredData)
    setData(filteredData)
   }
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
                <img className='category-images' src= {Allbags} alt = "bag" onClick={() => {setSelect("Backpacks"); filteData()}}/>
                <img className='category-images' src={Vanitypouch} alt='Vanity Pouch' onClick={() => {setSelect("Vanity Pouch");filteData()}}/>
                <img className='category-images' src = {TateBag} alt = "TateBag" onClick={() => {setSelect("Totebag"); filteData()}}/>
                <img className='category-images' src = {DuffleBag} alt = "Duffly Bag" onClick={() => {setSelect("Duffle bag"); filteData()}}/>
                <img className='category-images' src = {LaptopSleve} alt = "LaptopSleve" onClick={() => {setSelect("Laptop sleeve"); filteData()}}/>
                <img className='category-images' src = {MessangerBag} alt = "MessangerBag" onClick={() => {setSelect("Messanger bag"); filteData()}}/>
                <img className='category-images' src = {SlingBAg} alt = "SlingBAg" onClick={() => {setSelect("Sling bag"); filteData()}}/>
                <img className='category-images' src = {HandBag} alt = "HandBag" onClick={() => {setSelect("Hand bag"); filteData()}}/>
            </div>
            <b>Bags . {select}</b>
            <ul className='images-container'>
                {data.map((each) => (
                    <Filtered details = {each} />
                ))}
            </ul>
        </div>
    )
}

export default Home
  

