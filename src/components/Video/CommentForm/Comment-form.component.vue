<template>
  <mdb-card class="mb-5">
      <mdb-card-body class="d-flex flex-column">
        <mdb-input label="Comment" type="text" validate />
        <mdb-btn color="black" class="align-self-end" dark large>Add</mdb-btn>
      </mdb-card-body>
    </mdb-card>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
const { mdbCard, mdbCardBody, mdbInput, mdbBtn } = require("mdbvue");

@Component({
  components: { mdbCard, mdbCardBody, mdbInput, mdbBtn }
})
export default class CommentFormComponent extends Vue {}
</script>
