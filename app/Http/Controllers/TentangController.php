<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\Tentang;
use Illuminate\Http\Request;

class TentangController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $tentang = Tentang::all();
        $items = Berita::paginate(3);
        return view('tentang',[
            'tentang' => $tentang,
            'items' => $items
        ]);
    }
}
