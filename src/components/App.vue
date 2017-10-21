<template>
  <div id="app">
    <div id="menu">
          <a href="/">Home</a>
          <!--a v-if="!this.$store.state.user.displayName" href="/register" @click="register">Register</a-->
          <a v-if="this.$store.state.user.displayName" href="/logout" >Logout</a>
          <a v-else href="/login">Login</a>
    </div>
      <h1><a href="/login" style="text-decoration:none;"> {{ title }}</a></h1>
    <img src="https://user-images.githubusercontent.com/31264160/31743405-e7d712cc-b40f-11e7-8c22-d7d9b7b54c43.png">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Toro Net'
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
  mounted() {
    this.$store.dispatch('getUser')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}

#menu {
  background-image: linear-gradient(to bottom ,#3498db 0,#fff);
  padding: 30px
}

#menu a {
  font-size: 30px;
  text-decoration: none;
  padding-top: 20px;
  color: #000;
  margin-left: 20px;
}

#menu a:hover {
  color: #204d74;
}

h1, h2 {
  font-weight: normal;
}

h1 {
  color: #645f72;
  font-style: italic;
  font-size: 55px;
  font-family: comic sans ms;
  background: linear-gradient(180deg,#268dd8, #c4d0da);
      background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: #0000;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #860038;
}

</style>
