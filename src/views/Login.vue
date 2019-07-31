<template>
    <div class="login">
        <h3>Sign in</h3>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button @click="login">Sign In</button>
        <p>
          or Sign In with Google <br>
          <button @click="socialLogin" class="social-button">
            <img alt="Google Logo" src="../assets/google-logo.png">
          </button>
        </p>
        <p>
          You don't have an account? You can
          <router-link to="/sign-up">
            create one
          </router-link>
        </p>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(
        this.email,
        this.password,
      ).then(
        // eslint-disable-next-line no-unused-vars
        (user) => {
          this.$router.replace('home');
        },
        (err) => {
          alert(`Oops. ${err.message}`);
        },
      );
    },
    socialLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      // eslint-disable-next-line no-unused-vars
      firebase.auth().signInWithPopup(provider).then((result) => {
        this.$router.replace('home');
      }).catch((err) => {
        alert(`Oops. ${err.message}`);
      });
    },
  },
};
</script>

<style scoped>
    .login {
        margin-top: 40px;
    }

    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }

    button {
        margin-top: 20px;
        width: 10%;
        cursor: pointer;
    }

    p {
        margin-top: 40px;
        font-size: 13px;
    }

    p a {
        text-decoration: underline;
        cursor: pointer;
    }

    .social-button {
      width: 50px;
      background: white;
      padding: 10px;
      border-radius: 100%;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
      outline: 0;
      border:0;
    }

    .social-button:active {
      box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
    }

    .social-button img {
      width: 100%;
    }

</style>
