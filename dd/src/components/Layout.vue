<template>
  <div class="hello">
  <div id='layout-header'>header</div>
  <div id='layout-content'>
    <keep-allive>
      <router-view></router-view>
    </keep-allive>
  </div>
  <div id='layout-footer'>footer</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // msg: 'first'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
