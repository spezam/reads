const { createApp } = Vue
const API = "https://2glmn3vc2c2thcn24rd7uocozu0zfwqa.lambda-url.eu-west-1.on.aws/"

createApp({
  data() {
    return {
      bookdata: []
    }
  },
  mounted() {
    axios.get(API)
      .then(response => {
        this.books = response;
        this.bookdata = response.data;
      })
  }
}).mount('#books')
