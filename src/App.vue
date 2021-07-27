<template>
  <div>
    <div>{{name}}</div>
    <div v-for="item in list" :key="item.id">{{item.name}}</div>
    <tou></tou>
  </div>
</template>
<script>
import tou from './views/header.vue'
export default {
  name: "App",
  components:{tou},
  data() {
    return {
      name: "vue",
      list:[
        {
          name:'alax',
          id:1
        }
      ]
    };
  },
};
</script>
<style lang="stylus">
div {
  color: blue;
}
</style>
