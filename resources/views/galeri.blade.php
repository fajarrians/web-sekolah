@extends('_layout.default')

@section('content')
  <div class="container jarak-galeri">
    <h1>Galeri</h1>
    <div class="row g-3 mb-7">
      @foreach ($items as $item)
        <div class="col-sm-4 col-md-3">
          <div class="text-center">
            <div class="ratio ratio-16x9">
              <div class="overflow-hidden">
                <a href="{{ asset($item->foto) }}" class="video-1 mb-4" data-fancybox="" data-ratio="2">
                  </span>
                  <img src="{{ asset($item->foto) }}" alt="{{ $item->nama }}" class="img-fluid">
                </a>
              </div>
            </div>
            <div class="">
              <div class="small text-muted">{{ $item->nama }}</div>
            </div>
          </div>
        </div>
      @endforeach
    </div>

    {{-- PAGINATION --}}
    {{-- @if ($items->lastPage() > 1)
      {{ $items->links() }}
    @endif --}}
  </div>
@endsection
