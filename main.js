const { createApp } = Vue
const API = "https://rpu7mnr3bhuedurcwgfnckzgie0drkud.lambda-url.eu-west-1.on.aws/"

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
      const y = this.year(this.bookdata[0])
      return this.bookdata.every(b => this.year(b) === y)
    }
  },
  methods: {
    year(b) {
      return new Date(b.publication_date).getFullYear()
    }
  },
  mounted() {
    axios.get(API).then(response => {
      this.bookdata = response.data
      this.loading = false
    })
  }
}).mount('#books')
