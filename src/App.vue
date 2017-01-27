<template>
  <div id="app">
     <md-toolbar class="">
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">Where to?</h2>


      <md-button>
         <router-link tag="span" to="/">Go to Home</router-link>
       </md-button>

       <md-button>
         <router-link tag="span" to="/venues">Go to Venues</router-link>
       </md-button>


    </md-toolbar>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {}

</script>

<style>

</style>
