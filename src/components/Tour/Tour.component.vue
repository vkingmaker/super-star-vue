<template>
<section>
  <mdb-jumbotron fluid class="mb-0">
    <mdb-container>
      <h2 class="display-4">Tours</h2>
      <p class="lead">Lorem ipsum dolor sit amet.</p>
    </mdb-container>
  </mdb-jumbotron>
  <mdb-container class="mt-5">
    <mdb-row>
      <mdb-col md="8" class="mx-auto mb-4">
        <mdb-card>
          <mdb-card-body>
            Lorem ipsum dolor sit
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
      <mdb-col md="8" class="mx-auto mb-4">
        <mdb-card>
          <mdb-card-body>
            Lorem ipsum dolor sit
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</section>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
const {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbJumbotron
} = require("mdbvue");

@Component({
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbJumbotron
  }
})
export default class TourComponent extends Vue {}
</script>
<style>
</style>
