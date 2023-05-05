import React from 'react'
import { Subheading } from '../../components'
import {useState} from 'react'
import { useEffect} from 'react'
import images from '../../constants/images'

import './Header.css'

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const ImageUrls = [images.smart, images.sribs, images.steak, images.ribs, images.prime]

  useEffect(() => {
    const interval = setInterval(()=> {
      setActiveIndex((activeIndex + 1) % ImageUrls.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, ImageUrls.length]);
  return (
    <div className='app__header app__wrapper section__padding' id="home">
      <div className='app__wrapper_info'>
        <Subheading title="Let your tastebuds take you tastistual tour"/>
        <h1 className='app__header-h1'> Congratulations! You are in the website of the finest pork joint in town </h1>
        <p className='p__opensans' style={{margin: '1rem 0'}}> Our restaurant serves bistro style food using good, honest ingredients. The atmosphere is light, cosy and beautifully styled with warm creams, rich greens and gold, and comfortable seating. </p>
        <p className='p__opensans' style={{margin: '1rem 0'}}> There are vegetarian and vegan dishes on our menus. Please make us aware if you have gluten free, dairy free or other specific dietary requirements and our team will be happy to advise options </p> <p className='p__opensans' style={{margin: '1rem 0'}}> We have an extensive, impeccable wine list all carefully selected to bring you a selection of the weird and wonderful, the quirky and quaint and the unexpected, as well as the classics, the crowd-pleasers and the outstanding. </p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>

        <div className='app__wrapper_img'>
          {ImageUrls.map((ImageUrl, index) => (
            <img 
            key = {ImageUrl}
            src={ImageUrl}
            alt={`yeah&{index}`}
            className={index === activeIndex ? 'active': ''}/>))}
      </div>

    </div>
  )
}
    
export default Header