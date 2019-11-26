<template>
  <div>
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
</style>