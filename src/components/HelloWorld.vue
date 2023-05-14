<template>
  <div class="hello">
    <h1>{{ msg }}</h1>Title:
    <input id="title" />
    <button id="btn" type="button">Set</button>
  </div>
</template>

<script>
const { ipcRenderer } = require('electron')
export default {
  name: 'HelloWorld',
  mounted () {
    const setButton = document.getElementById('btn')
    const titleInput = document.getElementById('title')
    setButton.addEventListener('click', () => {
      const title = titleInput.value
      ipcRenderer.send('set-title', title)
    })
  },
  props: {
    msg: String
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
