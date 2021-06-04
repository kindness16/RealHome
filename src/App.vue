<template>
  <div class="major">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
