<template>
  <div id="app">

  <md-whiteframe md-elevation="2" md-tag="md-toolbar">
    <div class="md-toolbar-container">
      <h2 class="md-title" style="flex: 1">Where to?</h2>
    </div>

    <router-tabs></router-tabs>
</md-whiteframe>

  <router-view></router-view>
  </div>
</template>

<script>
  import RouterTabs from './components/RouterTabs'
  export default {
    components: {
      RouterTabs
    }
  }

</script>

<style>

  li.md-list-item {
    list-style: none;
  }

  .main-tab {
    height: 30px;
  }

</style>
