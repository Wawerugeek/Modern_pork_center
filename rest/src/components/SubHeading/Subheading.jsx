import React from 'react'
import images from '../../constants/images'

const Subheading = ({title}) => (
   
    <div style={{marginBottom: '1rem'}}>
      <p className='p__cormorant'>{title}</p>
      <img src={images.spoon} alt ="head" className='spoon__img'/>
    </div>

  )


export default Subheading