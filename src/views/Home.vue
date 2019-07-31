<template>
  <div class="home">
    <h3> Hello, {{showUsername}}!</h3>
    <HelloWorld msg="Welcome to this sample Vue.js App"/>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase';

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  computed: {
    showUsername() {
      const { currentUser } = firebase.auth();
      return currentUser.displayName || currentUser.email;
    },
  },
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login');
      });
    },
  },
};
</script>
