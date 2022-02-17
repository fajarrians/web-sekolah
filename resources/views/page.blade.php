@extends('_layout.with-sidebar')

@section('content')
  <div class="container">
    <div class="card-body">
      
      <h1>{{ $item->judul }}</h1>

      <div>{!! $item->isi !!}</div>
    </div>
  </div>
@endsection

@push('sidebar')
<div class="section-heading">
  <h3 class="text-black">Berita Terbaru</h3>
</div>
  @forelse ($items as $item)
  
  <div class="berita-sidebar"><a href="{{ route('berita.index') }}">{{ $item->judul }}</a></div>
  @empty
  <div>berita kosong</div>
  @endforelse
@endpush
