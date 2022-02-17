@extends('_layout._base')

@section('main-content')
  <div class="container">
    <div class="row tentang">
      <div class="col-md-8">
        @yield('content')
      </div>
      <div class="col-md-4 tentang1">
        @stack('sidebar')
      </div>
    </div>
  </div>
@endsection
