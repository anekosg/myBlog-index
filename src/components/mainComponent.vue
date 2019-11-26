<template>
  <div>
    <!-- //轮播图 -->

    <el-carousel trigger="click">
      <el-carousel-item v-for="item in 4" :key="item">
        <!-- <img src="images/banner-01.png" alt="" width="100%" > -->
      </el-carousel-item>
    </el-carousel>

    <contantTabsComponent></contantTabsComponent>
    <!-- 标签页 -->
    <!-- <el-tabs class="main-tabs">
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
    </el-tabs>-->
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

// // 选项卡
// .main-tabs {
//   background-color: #fff;
//   margin-bottom: 5px;
//   height: 300px;
//   overflow: hidden;

//   .main-tabs-ul {
//     text-decoration: none;
//     list-style: none;
//     text-align: left;

//     margin: 0 60px 0 60px;
//     padding-left: 0;
//     // border: 1px solid gray;
//     overflow: hidden;
//     & li {
//       padding: 10px 10px;
//       p {
//         display: none;
//       }
//       border-bottom: 1px solid gray;
//       // &:last-child {
//       //   border-bottom: 0;
//       // }
//       .main-tabs-spanSerial {
//         display: inline-block;
//         width: 16px;
//         height: 16px;
//         line-height: 16px;

//         background-color: #000000;
//         color: #ffffff;
//         text-align: center;
//       }
//       .main-tabs-spanTitle {
//         margin-left: 30px;
//         line-height: 16px;
//       }
//     }

//     // & li:first-child {
//     //   p {
//     //     display: block;
//     //   }
//     //   & .main-tabs-spanSerial {
//     //     width: 30px;
//     //     height: 30px;
//     //     line-height: 30px;
//     //   }
//     //   & .main-tabs-spanTitle {
//     //     line-height: 30px;
//     //   }
//     // }

//     & li:hover {
//       background: #f7f7f7;
//       p {
//         display: block;
//         font-size: 14px;
//       }
//       .main-tabs-spanSerial {
//         width: 20px;
//         height: 20px;
//         line-height: 20px;
//         font-weight: 500;
//         font-size: 18px;
//       }

//       .main-tabs-spanTitle {
//         line-height: 30px;
//         font-weight: 600;
//         font-size: 18px;
//       }
//     }
//   }
// }
</style>

<style scope lang="scss">
// .main-tabs {
//   .el-tabs__nav {
//     margin: 8px 0 0 60px;
//     padding-bottom: 10px;
//   }
// }
</style>