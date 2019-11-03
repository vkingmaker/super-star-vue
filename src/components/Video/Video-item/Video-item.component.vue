<template>
  <mdb-card class="video-item mb-4">
    <mdb-card-body class="d-flex">
      <div class="w-25 border">

      </div>
      <div class="w-75">

      </div>
    </mdb-card-body>
  </mdb-card>
</template>
<script>
import Vue from "vue";
import Component from "vue-class-component";
const { mdbCard, mdbCardBody } = require("mdbvue");

@Component({
  components: { mdbCard, mdbCardBody }
})
export default class VideoItemComponent extends Vue {}
</script>
<style scoped>
.video-item {
  height: 150px;
}
</style>
