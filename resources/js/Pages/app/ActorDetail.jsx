import React from 'react'

const ActorDetail = ({ id }) => {

    const fetchActorDetails = async () => {

    };

    return (
        <div>
            <div
                className="flex shadow-md items-center justify-center overflow-hidden dark:bg-gray-800"
            >
                <img
                    className="w-1/3 object-cover"
                    src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                    alt="actor poster"
                />
                <div className='flex flex-col gap-4 p-5'>
                    <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {actor.title}
                    </h5>
                    <div className="flex gap-3">
                        <small><i className="fa-solid fa-star me-1 text-yellow-400"></i>{actor.vote_average}</small>
                        <span>,</span>
                        <small><i className="fa-solid fa-calendar-days me-1 text-primary-500"></i>{actor.release_date}</small>
                        <span>,</span>
                        <small>
                            {actor.genres?.map(genre => genre.name).join(', ')}
                        </small>
                        <span>,</span>
                        {/* <small><i className="fa-solid fa-globe me-1"></i>{actor.spoken_languages[0].name}</small> */}

                    </div>

                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {actor.overview}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default ActorDetail
