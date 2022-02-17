<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, $slug)
    {
        $item = Page::where('slug', $slug)->firstOrFail();
        $items = Berita::paginate(3);
        return view('page', [
            'item' => $item,
            'items'=>$items
        ]);
    }
}
