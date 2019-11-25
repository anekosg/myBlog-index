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

                <!-- 标签页 -->
                <el-tabs class="main-tabs">
                  <el-tab-pane label="置顶文章" name="first">
                    <ul class="main-tabs-ul">
                      <li>
                        <div>
                          <span class="main-tabs-spanSerial">1</span>
                          <span class="main-tabs-spanTitle">我是握手</span>
                        </div>
                        <p>
                          我是握手我是握手我是握手我是握手我是握手我是握手我是握手我是握手我是握手我是握手我是握手我是握手我是握手我是握
                          手我是握手我是握手我是握手我是握手我是握手我是握手我是握手我是握手我是握手我是握手
                        </p>
                      </li>
                      <li>
                        <div>
                          <span class="main-tabs-spanSerial">2</span>
                          <span class="main-tabs-spanTitle">我是握手</span>
                        </div>
                        <p>11111</p>
                      </li>
                      <li>
                        <div>
                          <span class="main-tabs-spanSerial">3</span>
                          <span class="main-tabs-spanTitle">我是握手</span>
                        </div>
                        <p></p>
                      </li>
                    </ul>
                  </el-tab-pane>
                  <el-tab-pane label="最新文章" name="second">最新文章</el-tab-pane>
                  <el-tab-pane label="推荐文章" name="third">推荐文章</el-tab-pane>
                  <el-tab-pane label="Html与CSS" name="fourth">Html与CSS</el-tab-pane>
                </el-tabs>
              </el-main>
              <el-aside width="200px">
                <el-card class="box-card box-user">
                  <!-- <div  slot="header" class="clearfix">
                    <span>卡片名称</span>
                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                  </div>-->
                  <!-- <div v-for="o in 1" :key="o" class="text item">{{'列表内容 ' + o }}</div> -->
                  <p class="card-title">
                    <span>关于我</span>
                  </p>
                  <div class="clearfix">
                    <ul class="card-description ulFloat">
                      <li>昵称：aneko</li>
                      <li>职业：前端工程师</li>
                      <li>爱好：吉他,跑步,读书</li>
                    </ul>
                  </div>
                  <p class="card-chat">
                    <span>联系我</span>
                    <el-image src="images/weChat.png" fit="cover" class="chat-img-small"></el-image>

                    <el-image src="images/weChat.png" fit="cover" class="chat-img-large"></el-image>
                  </p>
                </el-card>

                <el-card class="box-card card-record">
                  <div slot="header" class="clearfix card-record-divTitle">
                    <span class="">最新评论</span>
                    
                  </div>
                  <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
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
  margin: 0 200px;
}

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
}
.el-menu-item {
  border: 0 !important;
}

.el-carousel {
  height: 300px;
  margin-bottom: 20px;
}
.el-carousel__item {
  background: url(/images/banner-01.png) no-repeat center;
  background-size: cover;
}

.el-main {
  color: #333;
  text-align: center;
  margin: 0 20px 0 0;
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

  // background-color: #37b3f1;
  // color: #333;
  // text-align: center;
  // line-height: 200px;
}

.box-user,.card-record{
  margin-bottom: 20px;
}

.box-card .card-title,
.card-chat {
  margin: 0;
  text-align: center;
  &:nth-child(1) {
    font-size: 20px;
    font-weight: 500;
  
  }
}
.box-card .card-chat span {
  font-size: 20px;
  font-weight: 500;

}
.card-chat {
  position: relative;
}
.box-card .chat-img-small {
 
  margin: 16px 50px;
  width: 50px;
  height: 50px;
}

.box-card .chat-img-small:hover + .chat-img-large {
  display: block;
}
.card-chat .chat-img-large {
  display: none;
  position: absolute;
  width: 100px;
  height: 100px;
  left: 50%;
  margin-left: -50px;
  top: 0;
  margin-top: -65px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.box-card ul {
  padding: 0;
  width: 100%;
}

// 选项卡
.main-tabs {
  background-color: #fff;
  margin-bottom: 5px;
  height: 300px;
  overflow: hidden;

  .main-tabs-ul {
    text-decoration: none;
    list-style: none;
    text-align: left;

    margin: 0 60px 0 60px;
    padding-left: 0;
    // border: 1px solid gray;
    overflow: hidden;
    & li {
      padding: 10px 10px;
      p {
        display: none;
      }
      border-bottom: 1px solid gray;
      // &:last-child {
      //   border-bottom: 0;
      // }
      .main-tabs-spanSerial {
        display: inline-block;
        width: 16px;
        height: 16px;
        line-height: 16px;

        background-color: #000000;
        color: #ffffff;
        text-align: center;
      }
      .main-tabs-spanTitle {
        margin-left: 30px;
        line-height: 16px;
      }
    }

    // & li:first-child {
    //   p {
    //     display: block;
    //   }
    //   & .main-tabs-spanSerial {
    //     width: 30px;
    //     height: 30px;
    //     line-height: 30px;
    //   }
    //   & .main-tabs-spanTitle {
    //     line-height: 30px;
    //   }
    // }

    & li:hover {
      background: #f7f7f7;
      p {
        display: block;
        font-size: 14px;
      }
      .main-tabs-spanSerial {
        width: 20px;
        height: 20px;
        line-height: 20px;
        font-weight: 500;
        font-size: 18px;
      }

      .main-tabs-spanTitle {
        line-height: 30px;
        font-weight: 600;
        font-size: 18px;
      }
    }
  }
}

.card-record .card-record-divTitle{
  text-align: center;
}
</style>

<style scope lang="scss">
.main-tabs {
  .el-tabs__nav {
    margin: 8px 0 0 60px;
    padding-bottom: 10px;
  }
}
</style>