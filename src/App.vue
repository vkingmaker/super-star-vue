<template>
 <mdb-container class="main-content" fluid>
  <mdb-row>
  <mdb-col class="w-100 px-0">
  <mdb-navbar expand="large" dark color="black">
    <mdb-navbar-brand href="#">
      Lee-Nation
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-nav-item href="#" active>Dashboard</mdb-nav-item>
        <mdb-nav-item href="#">Musics</mdb-nav-item>
        <mdb-nav-item href="#">Pictures</mdb-nav-item>
        <mdb-nav-item href="#">Videos</mdb-nav-item>
        <mdb-nav-item href="#">Tours</mdb-nav-item>
        <mdb-nav-item href="#">Register</mdb-nav-item>
        <mdb-nav-item href="#">Login</mdb-nav-item>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink color="transparent" slot="toggle" waves-fixed>Dropdown</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item>Logout</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
   <router-view />
  </mdb-col>
  </mdb-row>
   </mdb-container>

</template>

<script>
import {
  mdbDropdown,
  mdbDropdownToggle,
  mdbDropdownMenu,
  mdbDropdownItem,
  mdbNavbar,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem
} from "mdbvue";
export default {
  name: "HelloWorld",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem
  }
};
</script>
<style>
.main-content {
  max-width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
