import React from 'react';
import styles from './SlideShow.module.css';
import MovieCard from '../MovieCard/MovieCard';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

function SlideShow({ title, movies }) {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.Row}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={100}    
          slidesPerView={5.1}
        >
          {/* Array.isArray ማድረጋችን movies አሬይ መሆኑን ያረጋግጣል */}
          {Array.isArray(movies) && movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideShow;