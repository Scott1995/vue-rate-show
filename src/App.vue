<template>
  <div id="app">
    <vue-rate-show :score="score"></vue-rate-show>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      score: '2.7'
    }
  }
}
</script>

<style>
</style>
