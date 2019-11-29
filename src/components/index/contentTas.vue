<template>
  <div>
    <!-- 标签页 -->
    <el-tabs class="main-tabs">
      <el-tab-pane label="置顶文章" name="first">
        <ul class="main-tabs-ul">
          <li
            v-for="(item,index) in contents"
            :key="item.id"
            v-on:mouseover="mouseover(item,index)"
            v-on:mouseout="mouseout(item,index)"
            v-bind:class={active:item.active}
          >
            <div>
              <span class="main-tabs-spanSerial" v-text="item.sortNum"></span>
              <span class="main-tabs-spanTitle" v-text="item.title"></span>
            </div>
            <p v-text="item.content"></p>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="最新文章" name="second">最新文章</el-tab-pane>
      <el-tab-pane label="推荐文章" name="third">推荐文章</el-tab-pane>
      <el-tab-pane label="Html与CSS" name="fourth">Html与CSS</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      contents: this.common.contents,
    };
  },
  methods: {
    mouseover: function(item,index) {
      debugger
      this.common.contents[index].active = true;
    },
    mouseout: function(item,index) {
     console.log(item)
       console.log(this.common.contents)
       var info = this.common.contents.find((item,i)=>{
         item.active == true 
       });
       console.log(info)
       if(info===null){
          this.common.contents[0].active =true;
       }
       this.common.contents[index].active = false;
    }
  }
};
</script>


<style lang="scss">
.main-tabs {
  .el-tabs__nav {
    margin: 8px 0 0 60px;
    padding-bottom: 10px;
  }
}
</style>
<style lang="scss" scoped>
// 选项卡
.main-tabs {
  background-color: #fff;
  margin-bottom: 5px;

  overflow: hidden;
  .el-tabs__nav {
    margin: 8px 0 0 60px;
    padding-bottom: 10px;
  }
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

    & li.active {
      background: #f7f7f7;
      p {
        // display: block;
        font-size: 14px;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
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
</style>