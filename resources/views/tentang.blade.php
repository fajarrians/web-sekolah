@extends('_layout.with-sidebar')
@section('content')
        @forelse ($tentang as $item)
        <div >{!! $item->tentang !!}</div>
            
        @empty
            
        @endforelse
        
    
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