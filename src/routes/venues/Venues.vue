<template>
  <div>
    Venues Component

    <gmap-map
    :center="center"
    :zoom="15"
    style="width: 100%; height: 700px"
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
    ></gmap-info-window>
  </gmap-map>


  </div>
</template>

<script>
  export default {
    beforeCreate() {

      if ( navigator.geolocation ) {

        navigator.geolocation.getCurrentPosition( position => {

          let pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }

          this.center = pos
        })
      }
    },
    data() {
      return {
        center: { lat: 0, lng: 0 },
        content: 'Your current Location',
        markers: [{
          position: {lat: 10.0, lng: 10.0}
        }, {
          position: {lat: 11.0, lng: 11.0}
        }]
      }
    }
  }
</script>

<style>

</style>