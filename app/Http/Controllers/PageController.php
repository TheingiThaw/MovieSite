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
        return ;
    }

    public function actors(){

    }

    public function detail(){
        return Inertia::render('app/MovieDetial');
    }
}
