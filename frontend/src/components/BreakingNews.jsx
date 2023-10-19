import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '../main';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

const BreakingNews = () => {

   const [headlines,setHeadlines] = useState([]);

    const getHeadlines = async () => {
        const res = await axios.get(`${server}/api/v1/headlines`);
        setHeadlines(res.data.data);
    }

    useEffect(()=>{
        getHeadlines();
    },[]);

    // const headlines = [
    //     {
    //         uuid:1,
    //         title : "flower1",
    //         image_url : "https://images.ctfassets.net/hrltx12pl8hq/5ZjPpfAhn1rZWeopnHiXb/3e1b9a709297905672a0d24eac94a873/thumb_nov22_03.jpg",
    //         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor iaculis dapibus. Donec vel nunc vel nunc ultricies congue. Duis id ex nisl. Morbi in diam dictum, aliquam erat fermentum, porta sapien. Vivamus eget pulvinar mi. Vivamus imperdiet varius erat, eget accumsan ipsum tincidunt at. Donec dictum molestie dui, quis hendrerit leo venenatis nec. "
    //     },
    //     {
    //         uuid:12,
    //         title : "flower2",
    //         image_url : "https://images.ctfassets.net/hrltx12pl8hq/5ZjPpfAhn1rZWeopnHiXb/3e1b9a709297905672a0d24eac94a873/thumb_nov22_03.jpg",
    //         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor iaculis dapibus. Donec vel nunc vel nunc ultricies congue. Duis id ex nisl. Morbi in diam dictum, aliquam erat fermentum, porta sapien. Vivamus eget pulvinar mi. Vivamus imperdiet varius erat, eget accumsan ipsum tincidunt at. Donec dictum molestie dui, quis hendrerit leo venenatis nec. "
    //     },
    //     {
    //         uuid:3,
    //         title : "flower3",
    //         image_url : "https://images.ctfassets.net/hrltx12pl8hq/5ZjPpfAhn1rZWeopnHiXb/3e1b9a709297905672a0d24eac94a873/thumb_nov22_03.jpg",
    //         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor iaculis dapibus. Donec vel nunc vel nunc ultricies congue. Duis id ex nisl. Morbi in diam dictum, aliquam erat fermentum, porta sapien. Vivamus eget pulvinar mi. Vivamus imperdiet varius erat, eget accumsan ipsum tincidunt at. Donec dictum molestie dui, quis hendrerit leo venenatis nec. "
    //     },
    //     {
    //         uuid:4,
    //         title : "flower4",
    //         image_url : "https://images.ctfassets.net/hrltx12pl8hq/5ZjPpfAhn1rZWeopnHiXb/3e1b9a709297905672a0d24eac94a873/thumb_nov22_03.jpg",
    //         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor iaculis dapibus. Donec vel nunc vel nunc ultricies congue. Duis id ex nisl. Morbi in diam dictum, aliquam erat fermentum, porta sapien. Vivamus eget pulvinar mi. Vivamus imperdiet varius erat, eget accumsan ipsum tincidunt at. Donec dictum molestie dui, quis hendrerit leo venenatis nec. "
    //     },
    // ]

  return (
    <div className='w-full bg-white h-auto text-center lg:text-start'>
      <div className='lg:flex lg:flex-row'>
        <div className='lg:flex-col px-8 py-8'>
          <h3 className='text-black text-4xl font-bold font-serif'>Breaking</h3>
          <h3 className='text-4xl font-bold font-serif text-red-500'>News!</h3>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          className='mySwiper'
        >
          {headlines.length > 0 ? (
            headlines.map((item) => (
              <SwiperSlide className='lg:flex lg:flex-row px-8 py-4' key={item.uuid}>
                <div className='w-full lg:w-2/5 py-4'>
                  <img className='w-full h-24 object-cover' src={item.image_url} alt={item.title} />
                </div>
                <div className='px-6 py-2'>
                  <h4 className='text-black text-2xl lg:text-lg font-sans'>{item.title}</h4>
                  <p className='text-black text-lg lg:text-sm font-thin font-sans Description'>{item.description}</p>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p className='text-black flex justify-center items-center'>Loading headlines...</p>
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default BreakingNews;
