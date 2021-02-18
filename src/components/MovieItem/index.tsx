import React from "react";
import {
  MovieItemContainer,
  Poster,
  Title,
  Sinopsis,
  InfoContainer,
} from "./styles";

import posterPlaceHolder from "../../assets/no_poster_available.png";

interface MovieItemProps {
  title: string;
  sinopsis: string;
  image_url: string | undefined;
}

// Poster example: https://image.tmdb.org/t/p/w500/8kNruSfhk5IoE4eZOc4UpvDn6tq.jpg

const MovieItem: React.FC<MovieItemProps> = ({
  title,
  sinopsis,
  image_url,
}: MovieItemProps) => {
  return (
    <MovieItemContainer>
      <Poster src={image_url ? image_url : posterPlaceHolder} />
      <InfoContainer>
        <Title>{title}</Title>
        <Sinopsis>
          {sinopsis
            ? sinopsis
            : "Oops... It seems we don't have a sinopsis for you."}
        </Sinopsis>
      </InfoContainer>
    </MovieItemContainer>
  );
};

export default MovieItem;
