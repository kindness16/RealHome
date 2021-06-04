<template>
  <div class="home">
    <Carusel/>
    <Offering/>
    <Featured/>
  </div>
</template>

<script>
import Carusel from '../components/Carusel'
import Offering from '../components/Offering'
import Featured from '../components/Featured'
import "../assets/styles/style.scss";
export default {
  name: "Home",
  components: {
    Carusel,
    Offering,
    Featured,
  },
};
</script>
