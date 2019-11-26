<template>
  <div>
    <div slot="header" class="clearfix card-record-divTitle">
      <span class>最新评论</span>
    </div>
    <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
    
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>