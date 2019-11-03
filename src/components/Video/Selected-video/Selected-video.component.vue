<template>
  <mdb-card class="selected-video mb-5">
    <mdb-card-body>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sunt! Eum omnis voluptatem dignissimos dicta officiis earum sed dolorem, incidunt, nam veniam praesentium vel, voluptates repellat quia quos quidem velit magnam ipsa labore quo. Ad expedita vitae cum aliquid officiis neque non delectus eligendi tenetur. Maiores ipsam officia dolorum distinctio expedita cupiditate odio laudantium quas delectus animi esse accusamus voluptatum, adipisci veritatis minima fugiat sit eum autem ex deserunt. Qui molestiae voluptatum inventore soluta unde natus eius assumenda deleniti alias ut aliquid debitis numquam necessitatibus repudiandae illum ipsum, eaque ab molestias vero! Numquam voluptates impedit natus, esse facilis reprehenderit amet ab excepturi cumque molestias at maxime, quod culpa delectus hic neque harum consequatur vel eligendi corporis deleniti architecto ad dolorem. Consequuntur ab itaque assumenda nam vero voluptas iure molestiae sequi recusandae iste, aspernatur maiores placeat dicta, suscipit repudiandae vitae perspiciatis aut ratione porro, impedit consectetur voluptate? Optio impedit iste expedita suscipit vel obcaecati exercitationem sed iure est quos. Nostrum provident, dolorem minima at consectetur reprehenderit eveniet cupiditate accusantium, quibusdam quia eius unde recusandae numquam earum distinctio ratione voluptate illum sint enim quam non, cum dolore? Reiciendis voluptatibus commodi dicta ipsum, consectetur, iste, esse neque libero quaerat odit pariatur deleniti molestiae!
    </mdb-card-body>
     <mdb-card-footer>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ex cupiditate perferendis voluptatibus rerum! Quae itaque eligendi maxime eum voluptatem.
      <span class="d-flex justify-content-between mt-3">
         <i class="fa fa-heart text-danger"><span class="text-muted ml-1 small">(0)</span></i>
          <i class="fa fa-trash text-danger"></i>
      </span>
    </mdb-card-footer>
  </mdb-card>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
const { mdbCard, mdbCardBody, mdbCardFooter } = require("mdbvue");

@Component({
  components: { mdbCard, mdbCardBody, mdbCardFooter }
})
export default class SelectedVideoComponent extends Vue {}
</script>
<style scoped>
.selected-video {
  height: 500px;
}
</style>
