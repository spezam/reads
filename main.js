const { createApp } = Vue
const API = "https://rpu7mnr3bhuedurcwgfnckzgie0drkud.lambda-url.eu-west-1.on.aws/"

createApp({
  data() {
    return {
      bookdata: [],
      loading: true,
      error: false
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
        this.bookdata = response.data
        this.loading = false
      })
      .catch(() => {
        this.error = true
        this.loading = false
      })
  }
}).mount('#books')
