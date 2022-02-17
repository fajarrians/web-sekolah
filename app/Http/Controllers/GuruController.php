<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\Guru;
use Illuminate\Http\Request;

class GuruController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $item = Guru::get();
        $items = Berita::paginate(3);
        return view('guru', [
            'item' => $item,
            'items' => $items
        ]);
    }
}
