import { Card } from 'flowbite-react'
import React from 'react'

const MovieDetial = () => {
    return (
        <div>
            <div
                className="flex shadow-md items-center justify-center overflow-hidden dark:bg-gray-800"
            >
                <img
                    className="w-1/3 object-cover"
                    src="/movie/p_moana2_payoff_5787a994.jpeg"
                    alt="Movie poster"
                />
                <div className=''>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <div className="flex gap-3">
                        <small><i className="fa-solid fa-star"></i> 7</small>
                        <small><i className="fa-solid fa-calendar-days me-1"></i>2019, Sep, 10</small>
                        <small>Action, Thriller, Drama</small>
                    </div>

                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi autem commodi, placeat, provident recusandae adipisci aspernatur culpa et labore consequuntur aliquid quis nihil quaerat voluptas quia dolore optio vitae? Iusto.
                    </p>

                    <div>
                        <h3 className='my-3'>Featured Cast</h3>

                        <div className="flex gap-3">
                            <div className="flex flex-col">
                                <h3>Director Name</h3>
                                <p>ScreenPlay, Director, Story</p>
                            </div>
                            <div className="flex flex-col">
                                <h3>Director Name</h3>
                                <p>ScreenPlay, Director, Story</p>
                            </div>
                        </div>
                    </div>

                    <div className='btn btn-success bg-success py-3'>
                        Play Trailor
                    </div>
                </div>
            </div>

            <hr />

            <div className='my-5 py-5'>
                <h2 className='text-xl font-bold text-yellow-350 uppercase my-3'>Cast</h2>

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

            <hr></hr>


            <div>

            </div>
        </div>
    )
}

export default MovieDetial
