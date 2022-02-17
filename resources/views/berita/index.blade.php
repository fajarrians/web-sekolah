@extends('_layout.with-sidebar')

@section('content')
<div class="container berita">
  <h1>Berita Terbaru</h1>

  @foreach ($item as $item)
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="{{ asset($item->foto) }}" class="img-fluid rounded-start" alt="{{ $item->judul }}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ $item->judul }}</h5>
            <p class="card-text">{{ $item->sinopsis }}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

            <a href="{{ route('berita.show', [
                'beritum' => $item->id,
            ]) }}"
              class="stretched-link"></a>
          </div>
        </div>
      </div>
    </div>
  @endforeach
</div>
  

  {{-- PAGINATION --}}
  {{-- @if ($items->lastPage() > 1)
    {{ $items->links() }}
  @endif --}}
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
