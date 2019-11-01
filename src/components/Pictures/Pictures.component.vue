<template>
<section>
   <mdb-jumbotron fluid class="mb-0">
    <mdb-container>
      <h2 class="display-4">Fluid jumbotron</h2>
      <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    </mdb-container>
  </mdb-jumbotron>
  <mdb-container class="mt-5">
    <mdb-row>
      <mdb-col md="4" class="mb-5">
       <mdb-card>
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg" alt="Card image cap"></mdb-card-image>
          </mdb-card>
          <mdb-body class="d-flex justify-content-between mt-1">
            <i class="fa fa-heart text-danger"><span class="text-muted ml-1 small">(0)</span></i>
            <i class="fa fa-trash text-danger"></i>
          </mdb-body>
      </mdb-col>
      <mdb-col md="4" class="mb-5">
       <mdb-card>
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg" alt="Card image cap"></mdb-card-image>
          </mdb-card>
          <mdb-body class="d-flex justify-content-between mt-1">
            <i class="fa fa-heart text-danger"><span class="text-muted ml-1 small">(0)</span></i>
            <i class="fa fa-trash text-danger"></i>
          </mdb-body>
      </mdb-col>
      <mdb-col md="4" class="mb-5">
       <mdb-card>
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg" alt="Card image cap"></mdb-card-image>
          </mdb-card>
          <mdb-body class="d-flex justify-content-between mt-1">
            <i class="fa fa-heart text-danger"><span class="text-muted ml-1 small">(0)</span></i>
            <i class="fa fa-trash text-danger"></i>
          </mdb-body>
      </mdb-col>

    </mdb-row>
  </mdb-container>
</section>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
const {
  mdbJumbotron,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbCardBody
} = require("mdbvue");

@Component({
  components: {
    mdbJumbotron,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody
  }
})
export default class PhotoComponent extends Vue {}
</script>
<style>
</style>
