<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\Sejarah;
use Illuminate\Http\Request;

class SejarahController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $sejarah = Sejarah::all();
        $items = Berita::paginate(3);
        return view('sejarah',[
            'sejarah' => $sejarah,
            'items'=> $items
        ]);
    }
}
