export default {
  data () {
    return {
      selectedModule: null,
      modules: {}
    }
  },
  created () {
    this.$services.authService.getUserModules().then((data) => {
      this.modules = data
    })
  },
  computed: {
    componentInstance () {
      // NB you have to reference the variable that will contain the path to your module somewhere to make it reactive
      if (!this.selectedModule) {
        this.selectedModule = 'componentC/componentC.vue'
      }
      return () => import(`~/components/${this.selectedModule}`)
    }
  },
  methods: {
    btnSelectComponent_Click (selectedComponent) {
      this.selectedModule = selectedComponent.path
    }
  }
}
