import React, { useCallback, useEffect, useState } from "react";

import {
  FiChevronRight,
  FiChevronLeft,
  FiChevronsRight,
  FiChevronsLeft,
} from "react-icons/fi";

import {
  PageContainer,
  PageTitleContainer,
  SearchInputContainer,
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
            api_key: `${process.env.REACT_APP_API_KEY}`,
            query: searchInputValue,
            page: page,
          },
        })
        .then((response) => {
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
      if (searchInputValue) {
        apiRequestMovies(searchInputValue, 1);
      }
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [searchInputValue]);

  // Handle Page Change
  useEffect(() => {
    if (searchInputValue) {
      apiRequestMovies(searchInputValue, page);
    }
  }, [page]);

  return (
    <PageContainer>
      <PageTitleContainer>
        <h1>Movie Finder</h1>
        <span>Data source: The Movie DB API</span>
        <span>Developer: Leonardo Ribeiro</span>
      </PageTitleContainer>

      <SearchInputContainer>
        <input
          onChange={onChangeSearchInput}
          placeholder="Type the movie name here ;)"
        />
      </SearchInputContainer>
      <MoviesContainer>
        {movies &&
          movies.map((movie) => {
            return (
              <MovieItem
                id={movie.id}
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

      {movies.length > 0 && (
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
      )}
    </PageContainer>
  );
};

export default Home;
