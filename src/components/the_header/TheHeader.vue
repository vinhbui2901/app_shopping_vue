<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <!-- <div class="container-fluid"> -->
          <a class="navbar-brand logo" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2    " type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div class="ml-2">
                <button class="btn btn-danger">
                    <i class="fa fa-shopping-cart"></i>
                <span class="badge badge-light ml-2">0</span>
                </button>
            </div>
          </div>
        <!-- </div> -->
      </nav>
      <app-modal/>
</template>

<script>
import AppModal from '../app_modal/AppModal.vue'
export default {
  components: { AppModal },

}
</script>

<style>
.logo{
    font-size: 30px;
    background: -webkit-linear-gradient(#41b883, #35495e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

</style>