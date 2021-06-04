<template>
  <div class="offer">
    <div class="text">
      <h4>We are Offering the Best Estate Deals</h4>
      <p class="lorem">
        Quisque diam lorem interdum vitaapibus ac scelerisque vitae pede. Donec
        eget tellus non erat lacinia fertum. Donec in velit vel ipsum
        auctovinar. Proin umcorper urna et felisstibulum iaculis lacinia est.
        Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget
        dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis
        elit, aliquam eget nibh etlibura. Lorem ipsum dolor sitamet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.
      </p>
    </div>
  </div>
  <div class="blocks">
    <div class="block">
      <img src="../assets/img/blocks/earth.png" alt="" />
      <h4>Whole World</h4>
      <p>
        Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum
        elem entum velit fusce euismod. Aenean commodo ligula eget dolor.
      </p>
    </div>
    <div class="block">
      <img src="../assets/img/blocks/briefcase.png" alt="" />
      <h4>Confidentially</h4>
      <p>
        Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum
        elem entum velit fusce euismod. Aenean commodo ligula eget dolor.
      </p>
    </div>
    <div class="block">
      <img src="../assets/img/blocks/file-drawer.png" alt="" />
      <h4>Good Previews</h4>
      <p>
        Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum
        elem entum velit fusce euismod. Aenean commodo ligula eget dolor.
      </p>
    </div>
    <div class="block">
      <img src="../assets/img/blocks/photos.png" alt="" />
      <h4>Confidentially</h4>
      <p>
        Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum
        elem entum velit fusce euismod. Aenean commodo ligula eget dolor.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
$Playfair: "Playfair Display", serif;
.offer {
  padding: 40px 0 40px 0;
  font-family: "Times New Roman", Times, serif;
  font-size: 16px;
}
.text {
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: 15% 85%;
  padding: 0 150px 0 150px;
}
.lorem {
  padding-left: 3rem;
  font-weight: 200;
}
.blocks {
  background-color: #f8f8f8;
  line-height: 30px;
  padding: 30px 50px 30px 50px;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  h4 {
    font-weight: 400;
  }
  p {
    font-weight: 100;
    font-size: 15px;
    padding: 0 30px 0 30px;
  }
}
</style>
