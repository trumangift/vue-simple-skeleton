<template>
  <div id="app">
    <div class="example example_5">
      <h1>demo 1 not actived</h1>
      <skeleton :loading="true"  :active="false" :title="false"   avatar :paragraph="{rows: 10, width: '80%' }" >
         <table>
           <thead>
              <tr>
                <th>aa</th>
                <th>bb</th>
              </tr>
           </thead>
           <tbody>
              <tr>
                <td>数据1</td>
                <td>数据2</td>
              </tr>
           </tbody>
         </table>
      </skeleton>
    </div>
    <div class="example example_6">
      <h1>demo 2 actived with loading data</h1>
      <skeleton :loading="loading"  :active="true" :title="false"   avatar :paragraph="{rows: 10, width: '80%' }" >
        <table>
          <thead>
          <tr>
            <th>aa</th>
            <th>bb</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>数据1</td>
            <td>数据2</td>
          </tr>
          </tbody>
        </table>
      </skeleton>
    </div>
    <div class="example example_1">
      <h1>demo3 actived</h1>
      <skeleton :loading="true"  :title="false" active  avatar :paragraph="{rows: 10, width: '80%' }" >
        123
      </skeleton>
    </div>
    <div class="example example_2">
      <h1>demo4</h1>
      <skeleton :loading="true"  active  :avatar="false" :paragraph="{rows: 3, width: '100%' }" >
        123
      </skeleton>
    </div>
    <div class="example example_3">
      <h1>demo5</h1>
      <skeleton :loading="true"  active  :avatar="false" :paragraph="{rows: 4, width: '50%' }" >
        123
      </skeleton>
    </div>
    <div class="example example_4">
      <h1>demo6</h1>
      <skeleton :loading="true"  active  :avatar="false" :paragraph="{rows: 4, width: '90%' }" >
        123
      </skeleton>
    </div>
  </div>
</template>

<script>
import Skeleton from "./plugin/skeleton";
export default {
  name: 'app',
  components: {
      Skeleton
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      loading: true
    }
  },
  mounted() {
      setTimeout(() => {
         this.loading = false;
      }, 10000);
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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
  .example {
    width: 600px;
    float: left;
    margin-left: 20px;
  }
  h1 {
    text-align: left;
  }
</style>
