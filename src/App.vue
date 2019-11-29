<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-container>
            <router-view name="index_navbar"></router-view>
            <el-container class="el-mains">
              <el-main>
                <router-view name="index_carouselPic"></router-view>
                <router-view name="index_contentTas"></router-view>
              </el-main>
              <el-aside width="200px">
                <router-view name="index_userBox"></router-view>
                <router-view name="index_commentBox"></router-view>
              </el-aside>
            </el-container>
            <el-footer>Footer</el-footer>
          </el-container>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script >
export default {
  data: function() {
    return {};
  },
  methods: {},
  created: function() {
    // this.$axios.get('/').then((response)=>{
    //   console.log("response");
    // }).catch();
  }
};
</script>

<style scoped lang="scss">
body > .el-container {
  margin-bottom: 40px;
}
// 自定义
.el-mains {
  margin: 0 200px;
}
.el-main {
  color: #333;
  text-align: center;
  margin: 0 20px 0 0;
  padding: 0 !important;
}

//右边
.el-aside {
}
</style>

