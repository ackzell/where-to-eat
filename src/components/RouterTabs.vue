<template>
  <md-tabs class="page-tabs" @change="changeRoute" md-fixed>
    <md-tab id="home" md-label="Home"></md-tab>
    <md-tab id="venues" md-label="Venues"></md-tab>
  </md-tabs>
</template>

<script>
  const tabs = {
    0: '/',
    1: '/venues'
  }
  export default {
    methods: {
      changeRoute( tab ) {
        this.$router.push({ path: tabs[ tab ] })
      }
    }
  }
</script>

<style>
  .page-tabs .md-tabs-content {
    display: none;
  }
</style>