@extends('_layout.with-sidebar')

@section('content')
<div class="container berita">
  <div class="">
    <div class="">
   
          <h1>{{ $item->judul }}</h1>

          <div>{!! $item->isi !!}</div>

      
    </div>
  </div>

</div>
  

 
@endsection