<template>
<!-- container UI盒子 -->
  <el-container>
    <el-aside>
      <layoutAside></layoutAside>
    </el-aside>
    <el-container>
      <el-header><h1>右侧顶部</h1></el-header>
      <el-main><h1>右侧主体</h1></el-main>
    </el-container>
  </el-container>
</template>

<script>
import LayoutAside from '@/components/home/layout-aside.vue'
export default {
  components: {
    layoutAside: LayoutAside
  }
}
</script>

<style>

</style>
