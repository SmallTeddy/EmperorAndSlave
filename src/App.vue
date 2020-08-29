<template>
  <div id="app">
    <el-container style="height: 100%;">
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

body > .el-container {
  margin-bottom: 40px;
  background: url("./assets/bg.jpg");
}
</style>