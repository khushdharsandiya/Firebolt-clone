import React from 'react'
import { Link } from 'react-router-dom'
import Outdoor_Data from '../../Data/HeaderData/Outdoor'

export default function HeaderOutdoor() {
  return (
    <div className='Header_Cart_Main'>
      <div className='d-flex flex-wrap justify-content-center gap-3'>
        {
          Outdoor_Data.slice(0, 8).map((el, i) => {
            return <>
              <div className='Header_Luxe_img'>
                <Link to={`/OutdoorProduct/${el.id}`}>
                  <div className='img_div'><img src={el.img} alt="" /></div>
                </Link>
                <div className='p-2 Header_Product_Title'><h4><b>{el.title}</b></h4></div>
              </div>
            </>
          })
        }
      </div>
      <div className="Audio_button text-center mt-2">
        <Link to="/Outdoor">
          <button><h6 className='mt-1'>View All</h6></button>
        </Link>
      </div>
    </div>
  )
}
