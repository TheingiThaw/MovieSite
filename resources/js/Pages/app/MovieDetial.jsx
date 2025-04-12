import { api, apiKey } from '@/api/apiResource';
import { usePage } from '@inertiajs/react'
import { Card } from 'flowbite-react'
import React, { useEffect, useState } from 'react'

const MovieDetial = ({ id }) => {
    const { popularMovies, genres } = usePage().props;

    const [movie, setMovie] = useState([]);

    const getMovieDetails = async () => {
        const response = await api.get(`movie/` + id + `?api_key=` + apiKey);
        setMovie(response.data);
        console.log('response', response);
    }

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
                                    {/* <small>{
                                        genres.filter((genre) => movie.genre_ids.includes(genre.id)).map((genre) => genre.name).join(', ')
                                    }</small> */}
                                    <span>,</span>
                                    <small>{ }</small>
                                </div>

                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    {movie.overview}
                                </p>

                                <div>
                                    <h3 className='my-3'>Featured Cast</h3>

                                    <div className="flex gap-3">
                                        <div className="flex flex-col">
                                            <h3>Director Name</h3>
                                            <p className='text-gray-500'>ScreenPlay, Director, Story</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3>Director Name</h3>
                                            <p className='text-gray-500'>ScreenPlay, Director, Story</p>
                                        </div>
                                    </div>
                                </div>

                                <button className='bg-yellow-400 py-2 flex items-center justify-center rounded-lg min-w-[100px] max-w-[150px]'>
                                    Play Trailor
                                </button>

                            </div>
                        </div>

                        <hr />

                        <div className='my-5 py-5'>
                            <h2 className='text-xl font-bold text-yellow-350 uppercase my-3 px-5'>Cast</h2>

                            <div className='flex items-center justify-center'>
                                <div className='flex flex-wrap gap-3'>
                                    <Card
                                        className=" max-w-[200px] text-sm mt-3 h-auto"
                                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                                        imgSrc='/movie/p_moana2_payoff_5787a994.jpeg'
                                    // imgSrc={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                                    >
                                        <h5 className="text-xl flex-wrap font-bold tracking-tight text-gray-900 dark:text-white">
                                            Real Name
                                            {/* {data.title} */}
                                        </h5>
                                        <div>
                                            <p>Movie Name</p>
                                        </div>
                                    </Card>
                                    <Card
                                        className=" max-w-[200px] text-sm mt-3 h-auto"
                                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                                        imgSrc='/movie/p_moana2_payoff_5787a994.jpeg'
                                    // imgSrc={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                                    >
                                        <h5 className="text-xl flex-wrap font-bold tracking-tight text-gray-900 dark:text-white">
                                            Real Name
                                            {/* {data.title} */}
                                        </h5>
                                        <div>
                                            <p>Movie Name</p>
                                        </div>
                                    </Card>
                                    <Card
                                        className=" max-w-[200px] text-sm mt-3 h-auto"
                                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                                        imgSrc='/movie/p_moana2_payoff_5787a994.jpeg'
                                    // imgSrc={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                                    >
                                        <h5 className="text-xl flex-wrap font-bold tracking-tight text-gray-900 dark:text-white">
                                            Real Name
                                            {/* {data.title} */}
                                        </h5>
                                        <div>
                                            <p>Movie Name</p>
                                        </div>
                                    </Card>
                                    <Card
                                        className=" max-w-[200px] text-sm mt-3 h-auto"
                                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                                        imgSrc='/movie/p_moana2_payoff_5787a994.jpeg'
                                    // imgSrc={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                                    >
                                        <h5 className="text-xl flex-wrap font-bold tracking-tight text-gray-900 dark:text-white">
                                            Real Name
                                            {/* {data.title} */}
                                        </h5>
                                        <div>
                                            <p>Movie Name</p>
                                        </div>
                                    </Card>
                                    <Card
                                        className=" max-w-[200px] text-sm mt-3 h-auto"
                                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                                        imgSrc='/movie/p_moana2_payoff_5787a994.jpeg'
                                    // imgSrc={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                                    >
                                        <h5 className="text-xl flex-wrap font-bold tracking-tight text-gray-900 dark:text-white">
                                            Real Name
                                            {/* {data.title} */}
                                        </h5>
                                        <div>
                                            <p>Movie Name</p>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>

                        <hr></hr>


                        <div>

                        </div>
                    </div>
                )
            }
        </>
    )
}

export default MovieDetial
