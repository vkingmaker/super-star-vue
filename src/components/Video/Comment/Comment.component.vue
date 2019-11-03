<template>
<mdb-card class="mb-4">
  <mdb-card-body class="d-flex">
    <div>
      <img src="https://pbs.twimg.com/profile_images/1022253973565304832/EAW5TPjj_400x400.jpg" alt="">
    </div>
    <div class="mx-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cum voluptatibus autem suscipit doloremque ea, veritatis ducimus impedit hic quo eligendi quos neque nihil? Est quisquam excepturi culpa veniam porro?
    </div>
  </mdb-card-body>
</mdb-card>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
const { mdbCard, mdbCardBody } = require("mdbvue");

@Component({
  components: { mdbCard, mdbCardBody }
})
export default class CommentComponent extends Vue {}
</script>
<style scoped>
img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 1px solid #eee;
}
</style>
