<template>
  <div id="home">
    Home
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted(){
    this.$api.getList()
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
          console.log(err)
    })
  }
}
</script>

<style scoped>

</style>
