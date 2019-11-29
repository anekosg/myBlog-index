<template>
  <div>
    <el-card class="box-card card-record">
      <div slot="header" class="clearfix card-record-divTitle">
        <span class>最新评论</span>
      </div>
      <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
    </el-card>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
  
    };
  }
};
</script>

<style lang="scss" scoped>
.card-record {
  margin-bottom: 20px;
}
.card-record .card-record-divTitle {
  text-align: center;
}
</style>