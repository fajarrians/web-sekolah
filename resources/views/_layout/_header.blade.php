<header class="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">

  <div class="container">
    <div class="d-flex align-items-center">
      <div class="site-logo">
        <a href="{{ route('home') }}" class="d-block">
          <img src="images/logo.jpg" alt="Image" class="img-fluid">
        </a>
      </div>
      <div class="mr-auto">
        <nav class="site-navigation position-relative text-right" role="navigation">
          <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
            <li class="active">
              <a href="{{ route('home') }}" class="nav-link text-left">Home</a>
            </li>
            <li class="has-children">
              <a href="#" class="nav-link text-left">Profil</a>
              <ul class="dropdown">
                <li><a href="{{ route('tentang.index') }}">Tentang</a></li>
                <li><a href="{{ route('sejarah.index') }}">Sejarah</a></li>
                <li><a href="{{ route('visimisi.index') }}">Visi & Misi</a></li>
              </ul>
            </li>
            <li>
              <a href="{{ route('guru.index') }}" class="nav-link text-left">Guru</a>
            </li>
            <li>
            <a href="{{ route('berita.index') }}" class="nav-link text-left">Berita</a>
            </li>
            <li>
              <a href="{{ route('galeri.index') }}" class="nav-link text-left">Galeri</a>
            </li>
            <li>
                <a href="{{ route('kontak.index') }}" class="nav-link text-left">Contact</a>
              </li>
          </ul>                                                                                                                                                                                                                                                                                          </ul>
        </nav>

      </div>
      <div class="ml-auto">
        <div class="social-wrap">
          <a href="#"><span class="icon-facebook"></span></a>
          <a href="#"><span class="icon-twitter"></span></a>
          <a href="#"><span class="icon-linkedin"></span></a>

          <a href="#" class="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"><span
            class="icon-menu h3"></span></a>
        </div>
      </div>
     
    </div>
  </div>

</header>