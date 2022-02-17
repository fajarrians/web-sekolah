@extends('_layout.with-sidebar')

@section('content')
<div class="container guru">
  <h1 class="">Daftar Guru</h1>
  <div class="row">
    @foreach ($item as $item)
      <div class="col-sm-3">
        <div class="">
          <div style="width: 150px; height: 150px;" class="mx-auto mb-1 text-center">
            <img src="{{ asset($item->foto) }}" alt="{{ $item->nama }}" class="img-fluid">
          </div>
          <div class="text-center">{{ $item->nama }}</div>
          <div class="text-muted small text-center jarak-guru">{{ $item->jabatan }}</div>
        </div>
      </div>
    @endforeach

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
