<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-container>
            <navComponent></navComponent>
            <!-- <el-header>
              <div class="logo">
                <span>My Blog |</span>
                <span>今天又是美好的一天</span>
              </div>

              <el-menu
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#000000"
                text-color="#fff"
                active-text-color="#37b3f1"
              >
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-menu-item index="2" disabled>消息中心</el-menu-item>
                <el-submenu index="3">
                  <template slot="title">个人中心</template>
                  <el-menu-item index="3-1">选项1</el-menu-item>
                  <el-menu-item index="3-2">选项2</el-menu-item>
                  <el-menu-item index="3-3">选项3</el-menu-item>
                </el-submenu>
              </el-menu>

              <div class="demo-input-suffix search">
                <el-input suffix-icon="el-icon-search" placeholder="请输入搜索内容" size="small"></el-input>
              </div>
            </el-header>-->
            <el-container class="el-mains">
              <el-main>
                <mainComponent></mainComponent>
              </el-main>
              <el-aside width="200px">
                <el-card class="box-card box-user">
                  <userBoxComponent></userBoxComponent>
                </el-card>

                <el-card class="box-card card-record">
                <recordBoxComponent></recordBoxComponent>
                </el-card>
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
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {}
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

.box-user,
.card-record {
  margin-bottom: 20px;
}

.card-record .card-record-divTitle {
  text-align: center;
}
</style>

