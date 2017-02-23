<template>
   <v-app id="example-2" top-toolbar left-fixed-sidebar sidebar-under-toolbar footer>
    <v-toolbar>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.native.stop="sidebar = !sidebar" />
      <v-toolbar-logo></v-toolbar-logo>
    </v-toolbar>
    <main>
      <v-sidebar left fixed v-model="sidebar">
        <v-list two-line sub-header>
          <v-list-sub-header>Options</v-list-sub-header>
          <v-list-item v-for="i in 3">
            <v-list-tile ripple router append href="/venues">
              <v-list-tile-content>
                <v-list-tile-title>Item {{ i }}</v-list-tile-title>
                <v-list-tile-sub-title>subtitle here</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list two-line sub-header>
          <v-list-sub-header>Options</v-list-sub-header>
          <v-list-item v-for="i in 3">
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Item {{ i }}</v-list-tile-title>
                <v-list-tile-sub-title>subtitle here</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-checkbox label="&nbsp;" id="check-e6-" filled></v-checkbox>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-sidebar>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
    <v-footer>Footer</v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sidebar: null
      }
    }
  }
</script>

<style lang="stylus">

  @import '../node_modules/vuetify/dist/vuetify.min.css';

</style>
