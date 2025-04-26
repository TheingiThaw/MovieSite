<?php

namespace App\Http\Middleware;

use Inertia\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $genres = Cache::remember('tmdb_genres', 86400, function () {
            $response = Http::get('https://api.themoviedb.org/3/genre/movie/list', [
            'api_key' => config('services.tmdb.api_key')]);

            return $response->json('genres') ?? [];
        });

        $popularMovies = Cache::remember('popular_movies', 3600, function () {
            return Http::get("https://api.themoviedb.org/3/movie/popular", [
                'api_key' => config('services.tmdb.api_key')
            ])->json()['results'] ?? [];
        });

        $popularActors = Cache::remember('popular_actors', 3600, function () {
            return Http::get("https://api.themoviedb.org/3/person/popular", [
                'api_key' => config('services.tmdb.api_key')
            ])->json()['results'] ?? [];
        });

        $popularTVShows = Cache::remember('popular_tvshows', 3600, function () {
            return Http::get("https://api.themoviedb.org/3/tv/popular", [
                'api_key' => config('services.tmdb.api_key')
            ])->json()['results'] ?? [];
        });

        // Log::info('actors', ['popular_actors' => $popularActors]);

        return [
            ...parent::share($request),
            'auth' => [
                'user' => new UserResource($request->user()),
            ],
            'genres' => $genres,
            'popularMovies' => $popularMovies,
            'popularActors' => $popularActors,
            'popularTVShows' => $popularTVShows,
        ];
    }
}
