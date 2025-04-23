import { api, apiKey } from '@/api/apiResource';
import { router, usePage } from '@inertiajs/react'
import { Card } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import MovieModal from './MovieModal';

const MovieDetial = ({ id }) => {
    const { genres } = usePage().props;

    const [movie, setMovie] = useState([]);


    const trailer = movie.videos?.results.find(video => video.name === 'Official Trailer');
    const movieURL = `https://www.youtube.com/embed/${trailer?.key}`;

    const getMovieDetails = async () => {
        const response = await api.get(
            `movie/${id}?api_key=${apiKey}&append_to_response=credits,videos,images`
        );
        setMovie(response.data);
        console.log('response', response.data);
    };

    // const handleTrailor = () => {
    //     if (trailer) {

    //     }
    // }

    useEffect(() => {
        getMovieDetails();
    }, [id]);

    return (
        <>
            {
                movie && (
                    <div>
                        <div
                            className="flex shadow-md items-center justify-center overflow-hidden dark:bg-gray-800"
                        >
                            <img
                                className="w-1/3 object-cover"
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt="Movie poster"
                            />
                            <div className='flex flex-col gap-4 p-5'>
                                <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {movie.title}
                                </h5>
                                <div className="flex gap-3">
                                    <small><i className="fa-solid fa-star me-1 text-yellow-400"></i>{movie.vote_average}</small>
                                    <span>,</span>
                                    <small><i className="fa-solid fa-calendar-days me-1 text-primary-500"></i>{movie.release_date}</small>
                                    <span>,</span>
                                    <small>
                                        {movie.genres?.map(genre => genre.name).join(', ')}
                                    </small>
                                    <span>,</span>
                                    {/* <small><i className="fa-solid fa-globe me-1"></i>{movie.spoken_languages[0].name}</small> */}

                                </div>

                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    {movie.overview}
                                </p>

                                <div>
                                    <h3 className='my-3'>Featured Cast</h3>

                                    <div className="flex gap-5">
                                        {movie.credits?.crew?.slice(0, 2).map((crew, index) => (
                                            <div key={index} className="flex flex-col">
                                                <h3 className='font-semibold'>{crew.name}</h3>
                                                <p className='text-gray-500'>{crew.job}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* <div className='bg-yellow-400 py-2 flex items-center justify-center rounded-lg min-w-[100px] max-w-[150px]'>
                                    <button onClick={() => setShowModal((prev) => !prev)}>Play Trailor</button>
                                </div> */}

                                <MovieModal videoUrl={movieURL} />

                            </div>
                        </div>

                        <hr />

                        <div className='my-5 py-5'>
                            <h2 className='text-xl font-bold text-yellow-350 uppercase my-3 px-5'>Cast</h2>

                            <div className="overflow-x-auto whitespace-nowrap py-5">
                                <div className="inline-flex gap-4">
                                    {movie.credits?.cast?.map((cast, index) => (
                                        <Card
                                            key={index}
                                            className="min-w-[200px] max-w-[200px] text-sm h-auto"
                                            imgAlt={`${cast.original_name}'s profile picture`}
                                            imgSrc={
                                                cast.profile_path
                                                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                                                    : '/default-profile.jpg' // fallback image
                                            }
                                        >
                                            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                {cast.original_name}
                                            </h5>
                                            <p className="text-gray-500">{cast.character}</p>
                                        </Card>
                                    ))}
                                </div>
                            </div>

                        </div>

                        <hr></hr>

                        {/* images */}
                        <div className='my-5 py-5'>
                            <h2 className='text-xl font-bold text-yellow-350 uppercase my-3 px-5'>Images</h2>

                            <div className="overflow-x-auto whitespace-nowrap">
                                <div className="inline-flex gap-4">
                                    {movie.images?.backdrops?.map((image, index) => (
                                        <div key={index} className="flex-shrink-0">
                                            <img
                                                src={image.file_path ? `https://image.tmdb.org/t/p/w500/${image.file_path}` : 'movie/download.png'}
                                                alt={`Backdrop ${index + 1}`}
                                                className="rounded-lg w-[300px] h-[170px] object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                )
            }
        </>
    )
}

export default MovieDetial
