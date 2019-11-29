!<template>
  <div>
    <el-carousel trigger="click">
      <el-carousel-item v-for="item in 4" :key="item">
        <!-- <img src="images/banner-01.png" alt="" width="100%" > -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.el-carousel {
  height: 300px;
  margin-bottom: 20px;
}
.el-carousel__item {
  background: url(/images/banner-01.png) no-repeat center;
  background-size: cover;
}
</style>