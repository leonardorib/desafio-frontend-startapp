import React, { useCallback, useEffect, useState } from "react";

import {
  FiChevronRight,
  FiChevronLeft,
  FiChevronsRight,
  FiChevronsLeft,
} from "react-icons/fi";

import {
  PageContainer,
  Title,
  SearchInput,
  MoviesContainer,
  NavigationFooter,
  NavigationBack,
  NavigationFoward,
  PageButton,
  PageNumber,
} from "./styles";
import MovieItem from "../../components/MovieItem";

import api from "../../utils/api";

interface IMoviePropertiesFromAPI {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string | null;
}

const Home: React.FC = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [temp, setTemp] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [movies, setMovies] = useState<IMoviePropertiesFromAPI[]>([]);

  const onChangeSearchInput = useCallback((event) => {
    setSearchInputValue(event.target.value);
  }, []);

  const handlePressFirstPage = useCallback(() => {
    if (page !== 1) {
      setPage(1);
      window.scrollTo(0, 0);
    }
  }, [page]);

  const handlePressLastPage = useCallback(() => {
    if (page !== lastPage) {
      setPage(lastPage);
      window.scrollTo(0, 0);
    }
  }, [lastPage]);

  const handlePressNextPage = useCallback(() => {
    if (page < lastPage) {
      setPage(page + 1);
      window.scrollTo(0, 0);
    }
  }, [page, lastPage]);

  const handlePressPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo(0, 0);
    }
  }, [page]);

  const apiRequestMovies = useCallback(
    (searchInputValue, page) => {
      api
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "58e2c281247f8e440e2aa123c99f041f",
            query: searchInputValue,
            page: page,
          },
        })
        .then((response) => {
          console.log(response.data);
          setMovies(response.data.results);
          setLastPage(response.data.total_pages);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    [api]
  );

  // Handles Search Input Timer
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (temp !== searchInputValue) {
        setTemp(searchInputValue);
        apiRequestMovies(searchInputValue, page);
      }
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [searchInputValue]);

  // Handle Page Change
  useEffect(() => {
    apiRequestMovies(searchInputValue, page);
  }, [page]);

  const sinopsisTest =
    'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.';

  return (
    <PageContainer>
      <Title>Movie Finder</Title>

      <SearchInput
        onChange={onChangeSearchInput}
        placeholder="Type the movie name"
      />
      <MoviesContainer>
        {movies &&
          movies.map((movie) => {
            return (
              <MovieItem
                key={movie.id}
                title={movie.original_title}
                sinopsis={movie.overview}
                image_url={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : undefined
                }
              />
            );
          })}
      </MoviesContainer>
      <NavigationFooter>
        <NavigationBack>
          <PageButton onClick={handlePressFirstPage}>
            <FiChevronsLeft size={35} />
          </PageButton>
          <PageButton onClick={handlePressPreviousPage}>
            <FiChevronLeft size={35} />
          </PageButton>
        </NavigationBack>
        <PageNumber>{`${page} / ${lastPage}`}</PageNumber>
        <NavigationFoward>
          <PageButton onClick={handlePressNextPage}>
            <FiChevronRight size={35} />
          </PageButton>
          <PageButton onClick={handlePressLastPage}>
            <FiChevronsRight size={35} />
          </PageButton>
        </NavigationFoward>
      </NavigationFooter>
    </PageContainer>
  );
};

export default Home;
