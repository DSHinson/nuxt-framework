<template>
  <div class="container">
    <div>
      <dcl></dcl>
      <h1 class="title">
        nuxt-framework
      </h1>
      <h2 class="subtitle">
        Is logged on: {{ isLoggedOn }}
      </h2>
      <h2 class="subtitle">
        Is logged on from store: {{ isLoggedInFromStore }}
      </h2>
    </div>
  </div>
</template>
<script>
import dcl from '~/components/dynamicComponentImporter/dynamicComponentimported.vue'
export default {
  name: 'Login',
  components: {
    dcl
  },
  data () {
    return {
      loginform: {
        username: '',
        password: ''
      },
      isLoggedOn: false
    }
  },
  computed: {
    isLoggedInFromStore () {
      return this.$services.authService.isLoggedIn()
    }
  },
  created () {
    // eslint-disable-next-line no-console
    this.$services.authService.login(this.loginform).then((isLoggedIn) => {
      this.isLoggedOn = isLoggedIn
    })
  },
  methods: {
    handleSubmit () {

    }
  }
}
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
