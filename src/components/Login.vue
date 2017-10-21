<template>
  <div v-if="!this.$store.state.user.displayName">
    <div class="container">
      <form @submit.prevent="validateBeforeSubmit" id="login" action="/auth/local" method="post">
        <div class="form-group" :class="{'has-error': errors.has('email') }" >
          <input name="email" v-validate="'required|email'" data-vv-delay="500" type="text" data-vv-as="email address" placeholder="Email" class="form-control">
          <p class="text-danger" align="center" v-if="errors.has('email')">{{ errors.first('email') }}</p>
        </div>
        <div class="form-group" :class="{'has-error': errors.has('password') }" >
          <input name="password" v-validate="'required'" data-vv-delay="500" type="text" data-vv-as="password" placeholder="Password" class="form-control" type="password">
          <p class="text-danger" align="center" v-if="errors.has('password')">{{ errors.first('password') }}</p>
        </div>
        <button class="btn btn-primary" form="login" type="submit">Sign in</button>
        <a v-if="!this.$store.state.user.displayName" href="/register" class="btn btn-primary" @click="register">Register</a>
        <a href="/auth/github" class="btn btn-github">
          <i class="fa fa-github"></i> Sign in
        </a>
        <a href="/auth/google" class="btn btn-google">
          <i class="fa fa-google"></i> Sign in
        </a>
      </form>
    </div>
  </div>
  <div v-else>
    <div class="container">
      <h4>You are already logged in, {{this.$store.state.user.displayName}}!</h4>
    </div>
  </div>
</template>

<style scoped>
.btn-github {
  border: 0;
  background: #444;
  color: white;
}
.btn-github:hover {
  background: #2B2B2B;
  color: white;
}

.btn-google {
  border: 0;
  background: #db4437;
  color: white;
}

.btn-google:hover {
  background: #c90b0b;
  color: white;
}

.form-group input {
  margin-top: 10px;
  width: 30%;
  display: inline-block;
  box-shadow: 10px 10px 10px -10px rgba(11,90,110,1);
}
</style>

<script>
export default {
  name: 'Login',
  methods: {
    validateBeforeSubmit(e) {
      e.preventDefault()
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          document.querySelector('#login').submit()
          return
        }
      })
    }
  },
  mounted() {
    this.$store.dispatch('getUser')
  }
}
</script>
