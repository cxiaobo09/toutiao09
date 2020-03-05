<template>
<!-- container UI盒子 -->
  <el-container>
    <el-aside>
      <layoutAside></layoutAside>
    </el-aside>
    <el-container>
      <el-header>
        <layoutHeader></layoutHeader>
      </el-header>
      <el-main><h1>右侧主体</h1></el-main>
    </el-container>
  </el-container>
</template>

<script>
import LayoutAside from '@/components/home/layout-aside.vue'
import LayoutHeader from '@/components/home/layout-header.vue'
export default {
  components: {
    layoutAside: LayoutAside,
    layoutHeader: LayoutHeader
  }
}
</script>

<style>

</style>
