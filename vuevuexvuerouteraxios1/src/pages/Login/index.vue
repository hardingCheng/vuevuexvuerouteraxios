<template>
  <div id="login">
    <button @click="loginHandle">Login</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapGetters, mapActions, mapMutations } = createNamespacedHelpers('loginModules')

export default {
  name: "Login",
  methods: {
    ...mapMutations(['setToken']),
    loginHandle() {
      this.$api
        .login({
          username: "iwen",
          password: "123456",
        })
        .then( res => {
          //存入vuex
          this.setToken(res.data.token)
          //存入本地
          localStorage.setItem('token',res.data.token)
          this.$router.replace('/')
        })
        .catch(err => {
          console.log(err)
      })
    },
  },
};
</script>

<style scoped>
</style>
