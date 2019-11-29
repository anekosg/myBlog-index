<template>
  <div>
    <el-header>
      <div class="logo">
        <router-link to="/">
          <span>My Blog |</span>
          <span>今天又是美好的一天</span>
        </router-link>
      </div>

      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#000000"
        text-color="#fff"
        active-text-color="#37b3f1"
      >
        <el-menu-item
          v-bind:index="item.id"
          v-for="item in navItem"
          v-bind:key="item.id"
          v-text="item.name"
        ></el-menu-item>

        <!-- <el-submenu index="3">
          <template slot="title">个人中心</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-submenu>-->
      </el-menu>

      <div class="demo-input-suffix search">
        <el-input suffix-icon="el-icon-search" placeholder="请输入搜索内容" size="small"></el-input>
      </div>
    </el-header>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      navItem: this.common.navItem
    };
  },
  created: function() {
    // this.$axios.get('www.baidu.com').then((reponse)=>{
    //   console.log(reponse);
    // },()=>{}).catch((error)=>{
    //   console.log(error);
    // });
  }
};
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #000000;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0 200px;
  margin-bottom: 20px;
}
.el-header {
  // padding-left: 100px;
  display: flex;
  justify-content: space-between;
}
.el-header .logo span {
  line-height: 60px;
  color: #ffffff;
  font-size: 26px;
  &:last-of-type {
    font-size: 16px;
  }
}
.el-menu.el-menu--horizontal {
  border: 0;
  padding-left: 20%;
  & li.el-menu-item:hover {
    color: #37b3f1 !important;
  }
  .el-menu-item {
    border: 0 !important;
  }
}
</style>