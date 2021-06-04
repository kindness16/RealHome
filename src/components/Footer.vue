<template>
  <div class="footer">
    <div class="icons">
      <img src="../assets/img/footer-logo.png" alt="" />
      <div class="socials">
        <a href=""> <i class="fab fa-facebook-f"></i> </a>
        <a href=""> <i class="fab fa-pinterest"></i> </a>
        <a href=""> <i class="fab fa-instagram"></i> </a>
        <a href=""> <i class="fab fa-google-plus"></i> </a>
      </div>
    </div>
    <div class="nav">
      <div class="navbar-collapse" id="navbarSupportedContent">
        <h4>Navigation</h4>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li
            class="nav-item" 
            v-for="(menu, index) in headerMenuList"
            :key="index"
          >
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="menu.path"
              >{{ menu.name }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="clients">
      <h4>For clients</h4>
      <div class="new">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li
            class="nav-item" 
            v-for="(menu, i) in footerMenu"
            :key="i"
          >
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="menu.path"
              >{{ menu.name }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="contact">
      <h4>Contact us</h4>
      <div>
        <p>240 Central Park, London OR 10019</p>
        <p>240Freephone: +1 800 559 6580</p>
        <p>Telephone: +1 959 603 6035</p>
        <p>FAX: +1 800 559 6580</p>
        <a href=""> info@realhome.com </a>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/styles/footer.scss";
export default {
  data() {
    return {
      headerMenuList: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Property", path: "/property" },
        { name: "Our Blog", path: "/blog" },
        { name: "Contacts", path: "/contacts" },
      ],
      footerMenu:[
        {name: 'Sign In', path: '/signIn'},
        {name: 'Forum', path: '/forum'},
        {name: 'Promotions', path: '/promotions'},
        {name: 'News', path: '/news'}
      ],
    };
  },
};
</script>
