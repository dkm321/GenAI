<template>
  <v-app>
    <v-app-bar color="white" light :elevation="2">
      
        <v-app-bar-title>
            Generative AI Resources
        </v-app-bar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat class="nav-btn" to="/">
        <v-icon left class="mr-2">mdi-home</v-icon>
        Resources
      </v-btn>
      <v-btn to="/newsletter">
        <v-icon left class="mr-2">mdi-email-newsletter</v-icon>
        Newsletter
      </v-btn>
      </v-toolbar-items>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary location="right">
      <v-list dense>
        <v-list-item @click="goTo('/')">
          <v-list-item-title>Resources</v-list-item-title>
        </v-list-item>
        <v-list-item @click="goTo('/newsletter')">
          <v-list-item-title>Newsletter</v-list-item-title>
        </v-list-item>
        <!-- Add more navigation links as needed -->
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <v-footer app>
      <span>&copy; 2023 - DK Marsh</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,  // controls whether the drawer is open or closed
    };
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.nav-btn {
  margin: 0;
}
</style>