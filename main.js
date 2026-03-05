const { createApp } = Vue
const API = "https://2glmn3vc2c2thcn24rd7uocozu0zfwqa.lambda-url.eu-west-1.on.aws/"

createApp({
  data() {
    return {
      bookdata: [],
      loading: true
    }
  },
  computed: {
    singleYear() {
      if (!this.bookdata.length) return true
      const y = new Date(this.bookdata[0].publication_date).getFullYear()
      return this.bookdata.every(b => new Date(b.publication_date).getFullYear() === y)
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
