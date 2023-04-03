import React from 'react';
import { Card } from './index.styled';

interface Props {
   videoKey: string;
}

const VideoCard = ({videoKey}: Props) => {

   return (
      <Card
      loading='lazy'
      src={`https://www.youtube-nocookie.com/embed/${videoKey}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen></Card>
   );
};

export { VideoCard };