import { api, apiKey } from '@/api/apiResource';
import { Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react'

const ActorDetail = ({ id }) => {

    const [actor, setActor] = useState({});

    const fetchActorDetails = async () => {
        const response = await api.get(`person/${id}?api_key=${apiKey}&append_to_response=movie_credits,external_ids`);
        console.log(response.data);
        setActor(response.data);
    };

    useEffect(() => {
        fetchActorDetails();
    }, [id]);

    useEffect(() => {
        console.log("Updated actor:", actor);
    }, [actor]);


    return (
        <div>
            <div
                className="flex w-full p-3 shadow-md items-center justify-center overflow-hidden dark:bg-gray-800"
            >
                <div className="w-1/3 flex flex-col">
                    <img
                        className=" rounded-lg object-cover"
                        src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                        alt="actor poster"
                    />
                    <ul className="flex items-center mt-4 gap-8">
                        <li>
                            <a href={actor.external_ids?.facebook_id ? `https://www.facebook.com/${actor.external_ids.facebook_id}` : '#'}><i className="fa-brands fa-facebook text-2xl"></i></a>
                        </li>
                        <li>
                            <a href={actor.external_ids?.instagram_id ? `https://www.instagram.com/${actor.external_ids.instagram_id}` : '#'}><i className="fa-brands fa-instagram text-2xl"></i></a>
                        </li>
                        <li>
                            <a href={actor.external_ids?.twitter_id ? `https://www.twitter.com/${actor.external_ids.twitter_id}` : '#'}><i className="fa-brands fa-twitter text-2xl"></i></a>
                        </li>
                        <li>
                            <a href={actor.external_ids?.wikipedia_id ? `https://www.wikipedia.com/${actor.external_ids.wikipedia_id}` : '#'}><i className="fa-brands fa-wikipedia-w text-2xl"></i></a>
                        </li>
                    </ul>
                </div>
                <div className='w-2/3 flex flex-col gap-4 p-5'>
                    <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {actor.name}
                    </h5>

                    <div className="flex gap-3">
                        <small><i className="fa-solid fa-calendar-days me-1 text-yellow-300"></i>{actor.birthday}</small>
                        <span>,</span>
                        <small><i className="fa-solid fa-map me-1 text-primary-500"></i>{actor.place_of_birth}</small>
                    </div>

                    <h6 className='text-2xl tracking-tight text-gray-900 dark:text-white'>Biography</h6>

                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {actor.biography}
                    </p>

                </div>
            </div>

            <div className='my-5 py-5'>
                <h2 className='text-xl font-bold text-yellow-350 uppercase my-3 px-5'>Known For</h2>

                <div className="overflow-x-auto whitespace-nowrap py-5">
                    <div className="inline-flex gap-4">
                        {actor.movie_credits?.cast?.map((cast, index) => (
                            <Card
                                key={index}
                                className="min-w-[200px] max-w-[200px] text-sm h-auto"
                                imgAlt={`${cast.original_title}'s poster picture`}
                                imgSrc={
                                    cast.poster_path
                                        ? `https://image.tmdb.org/t/p/w500/${cast.poster_path}`
                                        : 'movie/p_moana2_payoff_5787a994.jpeg' // fallback image
                                }
                            >
                                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {cast.original_title}
                                </h5>
                                <p className="text-gray-500">{cast.character}</p>
                            </Card>
                        ))}
                    </div>
                </div>

            </div>

            <div className='shadow-lg p-5'>
                <h5 className='text-xl font-bold text-yellow-350 uppercase my-3 px-5'>Credits</h5>

                <ul className=' list-disc leading-loose px-5 gap-16'>
                    {actor.movie_credits?.cast?.map((cast, index) => (
                        <li key={index} >
                            {cast.release_date ? cast.release_date.slice(0, 4) : 'date'} &middot; <strong>{cast.title}</strong> as {cast.character}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ActorDetail
