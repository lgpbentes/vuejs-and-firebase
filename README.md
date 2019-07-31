# vuejs-and-firebase

This is a web application with an authentication system using Vue 2, vue-router and Firebase.

This sample was created based on this [amazing tutorial](https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c).

## Project setup
Before anything, make sure you've created the project in [Firebase console](https://console.firebase.google.com) and enabled `Authentication` -> `SIGN IN METHOD` -> `Email/password`. Use the firebaseConfig provided by Firebase to your project to fill your .env file. The file sample.env can help you to do that.

Now you download the project dependencies:
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
