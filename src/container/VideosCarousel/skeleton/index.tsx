import { Carousel, Container, Header } from './index.styled';

const SkeletonVideosCarousel = () => {
   return (
      <Container>
         <Header>
            <div className="siguenos"></div>
         </Header>

         <Carousel>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </Carousel>
      </Container>
   );
};

export { SkeletonVideosCarousel };
