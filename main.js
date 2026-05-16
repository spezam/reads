const { createApp } = Vue
const API = "https://tzk6ryx105.execute-api.eu-west-1.amazonaws.com"

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
