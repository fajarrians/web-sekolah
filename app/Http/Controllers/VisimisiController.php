<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\Visimisi;
use Illuminate\Http\Request;

class VisimisiController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $visimisi = Visimisi::all();
        $items = Berita::paginate(3);
        return view('visimisi',[
            'visimisi' => $visimisi,
            'items'=>$items
        ]);
    }
}
