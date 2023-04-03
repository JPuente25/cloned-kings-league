import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ArrowSVG } from '../../components/Svg/ArrowSVG';
import { VideoCard } from '../../components/VideoCard';
import { VideoProps } from '../../types';
import { Carousel, Container, Header } from './index.styled';

interface Props {
   videosData: Array<VideoProps>
}

const VideosCarousel = ({videosData}: Props) => {
   const carouselRef = useRef<HTMLDivElement>(null);

   const handleClick = (direction: string) => {
      const container = carouselRef.current;
      if (container) {
         const extraScroll = container.clientWidth > 768 
            ? 600 
            : container.clientWidth + 15;

         const scrollAmmount =
            direction === 'left'
               ? container.scrollLeft - extraScroll
               : container.scrollLeft + extraScroll;

         container.scroll({
            left: scrollAmmount,
            behavior: 'smooth',
         });
      }
   };

   return (
      <Container>
         <Header>
            <h3>Síguenos</h3>
            <img
               src="https://kingsleague.pro//wp-content/uploads/2022/12/youtube.svg"
               alt="yt logo"
            />
         </Header>

         <Carousel ref={carouselRef}>
            <div
               className="previous-arrow"
               onClick={() => handleClick('left')}>
               <ArrowSVG />
            </div>

            {videosData.map((video) => (
               <VideoCard
                  videoKey={video.key}
                  key={uuidv4()}
               />
            ))}

            <div
               className="next-arrow"
               onClick={() => handleClick('right')}>
               <ArrowSVG />
            </div>
         </Carousel>
      </Container>
   );
};

export { VideosCarousel };
