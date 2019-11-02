<template>
<mdb-container>
  <mdb-row class="d-flex justify-content-center">
  <mdb-col md="5" class="mt-5">
  <mdb-card>
    <mdb-card-body>
      <form>
        <p class="h4 text-center py-4">Sign in</p>
        <div class="grey-text">
          <mdb-input label="Email" group type="email" validate error="wrong" success="right"/>
          <mdb-input label="Password" group type="password" validate error="wrong" success="right"/>
        </div>
        <div class="text-center py-4 mt-3">
          <mdb-btn color="black" type="submit" dark>Login</mdb-btn>
        </div>
      </form>
    </mdb-card-body>
  </mdb-card>
  </mdb-col>
  </mdb-row>
  </mdb-container>
</template>
<script lang="ts">
import Vue from "vue";
const {
  mdbInput,
  mdbCard,
  mdbCardImage,
  mdbCol,
  mdbRow,
  mdbContainer,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbBtn,
  mdbView,
  mdbMask
} = require("mdbvue");
import Component from "vue-class-component";

@Component({
  components: {
    mdbInput,
    mdbCard,
    mdbCardImage,
    mdbCol,
    mdbRow,
    mdbContainer,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    mdbView,
    mdbMask
  }
})
export default class LoginController extends Vue {}
</script>

