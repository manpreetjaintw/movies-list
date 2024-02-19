import React, { useEffect, useState } from "react";
import { Header, MovieCard } from "../../components";
import { Box, Grid } from "@mui/material";
import { fetchMovieData } from "../../utils/services";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Home = () => {
  // State variables
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchCount, setFetchCount] = useState(0);

  // Flag for empty image
  let emptyImage = true;

  // Fetch data function
  const fetchData = async () => {
    setIsLoading(true);
    let data;
    if (prevPage < page) {
      data = await fetchMovieData(page);
    }
    if (prevPage < page) {
      if (data) {
        setMovies((prevMovies) => [...prevMovies, ...data]);
        setPage((prevPage) => prevPage + 1);
        setPrevPage((prevPage) => prevPage + 1);
      } else if (emptyImage) {
        emptyImage = false;
        setPrevPage((prevPage) => prevPage + 1);
        setMovies((prevMovies) => [
          ...prevMovies,
          { name: "", "poster-image": "placeholder_for_missing_posters.png" },
        ]);
      }
    }
    setIsLoading(false);
  };

  // Fetch data on initial render and when fetchCount changes
  useEffect(() => {
    fetchData();
  }, [fetchCount]);

  // Event listener for scroll to fetch more data
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.offsetHeight;
      const threshold = 300;

      if (scrollPosition >= documentHeight - threshold && !isLoading) {
        setFetchCount(fetchCount + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

  // Event handler for search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtering movies based on search term
  const filteredMovies = movies.filter((movie) => {
    return movie.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Event handler for back button
  const handleBackButton = () => {
    setSearchTerm("");
  };

  return (
    <>
      {/* Header component */}
      <Header
        handleChange={handleSearchChange}
        searchTerm={searchTerm}
        handleBackButton={handleBackButton}
      />
      {/* Movie grid */}
      <Box sx={{ display: "flex", padding: { xs: 1, md: 3 } }}>
        <Grid container spacing={{ xs: 1, md: 3 }}>
          {/* Render movies or "No Data Found" message */}
          {filteredMovies.length !== 0 ? (
            filteredMovies.map((movie, index) => (
              <Grid item xs={4} sm={4} md={4} lg={1} key={index}>
                <MovieCard data={movie} />
              </Grid>
            ))
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                height: "100vh",
              }}
            >
              No Data Found
            </div>
          )}
        </Grid>
      </Box>
      {/* Loading indicator */}
      {isLoading && <div>Loading more data...</div>}
      {/* Toast notification container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
