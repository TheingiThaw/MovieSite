import { api, apiKey } from '@/api/apiResource';
import { router } from '@inertiajs/react';
import React, { useEffect, useRef, useState } from 'react'

const SearchForm = () => {
    const [searchKey, setSearchKey] = useState('');
    const [movies, setMovies] = useState([]);
    const dropdownRef = useRef(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const getMovie = await api.get(`search/movie?api_key=${apiKey}&query=${searchKey}`);
            const response = getMovie.data.results;
            setMovies(response);
            // console.log(movies);
        }
        catch (error) {
            console.error('Error fetching movie:', error);
        }
    }

    const movieOnClick = (id) => {
        router.get(route('movie.detail', id));
        setSearchKey('');
        setMovies([]);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setMovies([]);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className='flex flex-col gap-5 relative mt-3'>
            <form className="w-full max-w-sm flex items-center" onSubmit={handleSearch}>
                <label className="flex items-center gap-2 border border-gray-200 rounded-lg px-2">
                    <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.3-4.3" />
                    </svg>
                    <input
                        type="search"
                        className="w-full outline-none border-0 bg-transparent"
                        required
                        placeholder="Search"
                        onFocus={handleSearch}
                        onChange={(e) => setSearchKey(e.target.value)}
                    />
                </label>
            </form>
            {movies.length > 0 && (
                <div className='w-60 rounded-lg shadow-lg bg-gray-200 z-10'>
                    {movies.slice(0, 5).map((movie) => (
                        <div onClick={() => movieOnClick(movie.id)} key={movie.id} className='border-b px-4 py-2 flex'>
                            <img className='rounded-log w-12 h-16 object-cover' src={movie.poster_path ? `https://image.tmdb.org/t/p/w92/${movie.poster_path}` : 'movie/download.png'}
                                alt={`${movie.title} movie poster`}
                            ></img>
                            <h3 className="font-semibold flex items-center text-gray-900">{movie.title}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchForm
