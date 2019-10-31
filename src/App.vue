<template>
<mdb-container>
  <mdb-row id="app">
    <mdb-col id="nav" md="12">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </mdb-col>
    <router-view class="mx-auto"/>
  </mdb-row>
</mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
