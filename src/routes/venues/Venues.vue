<template>
  <div>

    <md-progress md-indeterminate v-if="loading"></md-progress>

    <gmap-map
    v-if="!loading"
    :center="center"
    :zoom="18"

    >
      <gmap-marker
        v-for="m in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      ></gmap-marker>

      <gmap-info-window
        :position="center"
        :content="content"
        class="info-w"
      ></gmap-info-window>
    </gmap-map>

    <venue-form></venue-form>

  </div>
</template>

<script>
  import VenueForm from './VenueForm.vue'

  export default {
    components: {
      VenueForm
    },
    beforeCreate() {

      if ( navigator.geolocation ) {

        navigator.geolocation.getCurrentPosition( position => {

          let pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }

          this.center = pos
          this.loading = false
        })
      }
    },
    data() {
      return {
        loading: true,
        center: { lat: 0, lng: 0 },
        content: '<div class="style-me">Your current Location</div>',
        markers: [{
          position: {lat: 10.0, lng: 10.0}
        }, {
          position: {lat: 11.0, lng: 11.0}
        }]
      }
    }
  }
</script>

<style lang="stylus">
  .vue-map-container
    width: 100%
    height: 500px

  .style-me
    background: red
</style>