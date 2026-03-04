const { createApp } = Vue
const API = "https://2glmn3vc2c2thcn24rd7uocozu0zfwqa.lambda-url.eu-west-1.on.aws/"

createApp({
  data() {
    return {
      bookdata: [],
      loading: true
    }
  },
  mounted() {
    axios.get(API)
      .then(response => {
        setTimeout(() => {
          this.bookdata = response.data;
          this.loading = false;
        }, 1000)
      })
  }
}).mount('#books')
