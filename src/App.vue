<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-container>
            <el-header>
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
            </el-header>
            <el-container class="el-mains">
              <el-main>
                <!-- //轮播图 -->

                <el-carousel trigger="click">
                  <el-carousel-item v-for="item in 4" :key="item">
                    <!-- <img src="images/banner-01.png" alt="" width="100%" > -->
                  </el-carousel-item>
                </el-carousel>
              </el-main>
              <el-aside width="200px">

                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span>卡片名称</span>
                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                  </div>
                  <div v-for="o in 1" :key="1" class="text item">{{'列表内容 ' + o }}</div>
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
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped lang="scss">
// 自定义
.el-mains {
  margin: 0 150px;
}

.el-header,
.el-footer {
  background-color: #000000;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0 150px;
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
  padding-right: 220px;
}
.el-menu-item {
  border: 0 !important;
}

.el-carousel {
  height: 300px;
}
.el-carousel__item {
  background: url(/images/banner-01.png) no-repeat center;
  background-size: cover;
}
.el-carousel__indicators {
}



.el-main {
  color: #333;
  text-align: center;
  margin: 5px 5px 0 0;
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}

// .el-container:nth-child(5) .el-aside,
// .el-container:nth-child(6) .el-aside {
//   line-height: 260px;
// }

// .el-container:nth-child(7) .el-aside {
//   line-height: 320px;
// }

//右边
.el-aside {
  margin: 5px 0 0;
  background-color: #37b3f1;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.text {
    font-size: 14px;
  }
  
  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }



.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  // background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>