<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <a class="navbar-brand"><img src="../assets/img/logo.png" alt="" /></a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
        <div class="social">
          <a href=""> <i class="fab fa-facebook-f"></i> </a>
          <a href=""> <i class="fab fa-pinterest"></i> </a>
          <a href=""> <i class="fab fa-instagram"></i> </a>
          <a href=""> <i class="fab fa-google-plus"></i> </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import "../assets/styles/header.scss";
export default {
  name: "Header",
  props: {
    msg: String,
  },
  data() {
    return {
      headerMenuList: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Property", path: "/property" },
        { name: "Our Blog", path: "/blog" },
        { name: "Contacts", path: "/contacts" },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
$Playfair: "Playfair Display", serif;
.navbar {
  padding: 10px 80px 10px 80px;
  background-color: white;
  font-size: 18px;
}
.social {
  a {
    margin-left: 20px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: 1px solid rgb(212, 212, 212);
    display: inline-block;
    text-align: center;
    color: black;
  }
}
.navbar-brand {
  padding-right: 130px;
}
.nav-item {
  font-family: $Playfair;
  padding: 10px 20px;
  &:hover {
    background-color: rgb(245, 245, 245);
    border-radius: 10px;
    transition: 0.4s;
  }
}
</style>
