import React from 'react';
import { Image } from '@chakra-ui/react';

interface MoviePosterProps {
  src: string;
  props: React.HTMLProps<HTMLImageElement>;
}

const MoviePoster: React.FC<MoviePosterProps> = ({ src, ...props }) => {
  return <Image src={src} alt="" borderTopRadius="base" {...props} />;
};

export default MoviePoster;
