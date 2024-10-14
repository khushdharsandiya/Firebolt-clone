import React from 'react';
import Slider from './Slider';
import CartMenu from './WatchCartMenu';
import VideoSlider from './VideoSlider';
import Cart from './WatchCart';
import AudioCart from './AudioCart';
import Categories from './Categories';
import Dhoni from './Dhoni';
import Blog from './Blog';
import Partners from './Partners';
import NewLaunch from './NewLaunch';
import Footer from './Footer'

export default function Main() {

  return (
    <div>
      <Slider />
      <CartMenu />
      <VideoSlider />
      <Categories/>
      <Cart />
      <NewLaunch/>
      <AudioCart />
      <Dhoni/>
      <Blog/>
      <Partners/>
      <Footer/>
    </div>
  );
}
