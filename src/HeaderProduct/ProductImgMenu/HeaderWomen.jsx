import React from 'react'
import { Link } from 'react-router-dom'
import Women_collection from '../../Data/HeaderData/Women_collection'

export default function HeaderWomen() {
  return (
    <div className='Header_Cart_Main'>
      <div className='d-flex flex-wrap justify-content-center gap-3'>
        {
          Women_collection.slice(0, 8).map((el, i) => {
            return <>
              <div className='Header_Luxe_img'>
                <Link to={`/WomenProduct/${el.id}`}>
                  <div className='img_div'><img src={el.img} alt="" /></div>
                </Link>
                <div className='p-2 Header_Product_Title'><h4><b>{el.title}</b></h4></div>
              </div>
            </>
          })
        }
      </div>
      <div className="Audio_button text-center mt-2">
        <Link to="/Women">
          <button><h6 className='mt-1'>View All</h6></button>
        </Link>
      </div>
    </div>
  )
}
