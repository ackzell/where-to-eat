<template>
  <div>
    <form>
      <md-input-container>
        <label>Name</label>
        <md-input v-model="name"/>
      </md-input-container>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: ''
      }
    }
  }
</script>

<style>
</style>