<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;

class PageController extends Controller
{
    //
    public function movies(){
        return Inertia::render('Dashboard');
    }

    public function tvShows(){
        return Inertia::render('app/TVshows');
    }

    public function actors(){
        return Inertia::render('app/Actors');
    }

    public function actor($id){
        return Inertia::render('app/ActorDetail', compact('id'));
    }

    public function detail($id){
        return Inertia::render('app/MovieDetial', compact('id'));
    }

    public function tvDetail($id){
        return Inertia::render('app/TVShowsDetail', compact('id'));
    }
}
