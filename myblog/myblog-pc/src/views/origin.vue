<template>
  <div class="container">
    <h1 style="color: #ccc">WELCOME TO MY BLOG</h1>
    <img style="display:block;margin:30px auto" src="../../public/imgs/white.jpg" alt="">
    <el-link type="primary" @click="signIn">登录</el-link>|
    <el-link type="success" @click="signUp">注册</el-link>
    <p>
      wild West Wind, <br />
      thou breath of Autumn's being,<br />
      Thou, <br />
      from whose unseen presence the leaves dead<br />
      Are driven, <br />
      like ghosts from an enchanter fleeing,<br />
      Yellow, <br />
      and black, <br />
      and pale, <br />
      and hectic red,<br />
      Pestilence-stricken multitudes: O thou,<br />
    </p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        signIn(){
            this.$router.push('/login')
        },
        signUp(){
            this.$router.push('/regist')
        }
    },
};
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
}
.container {
  margin-top: 0;
  padding: 20px;
  background-image: url("../../public/imgs/bird.jpg");
  h1{
    margin: 20px auto;      
  }
  img{
      width: 80px;
      height: 80px;
      border-radius: 5px;
  }
  p {
    line-height: 50px;
    font-size: 18px;
    color: #ccc;
  }
}
</style>