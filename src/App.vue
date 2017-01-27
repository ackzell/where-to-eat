<template>
  <div id="app">
     <md-toolbar class="">

      <h2 class="md-title" style="flex: 1">Where to?</h2>

      <md-list-item>
         <router-link to="/">Go to Home</router-link>
       </md-list-item>

       <md-list-item>
         <router-link to="/venues">Go to Venues</router-link>
       </md-list-item>


    </md-toolbar>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {}

</script>

<style>

  li.md-list-item {
    list-style: none;
  }
</style>
