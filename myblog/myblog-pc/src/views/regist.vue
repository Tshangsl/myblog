<template>
  <div class="regist-container">
    <h1>SIGN UP LI'S BLOG</h1>
    <div class="regist_box">
      <el-form size="mini">
        <el-form-item>
          <el-input v-model="username" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="nickname" placeholder="昵称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="password"
            placeholder="密码"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="doRegist" type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
      style="height: 100%"
    >
    </vue-particles>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username:'',
      nickname:'',
      password:''
    };
  },
  methods: {
    doRegist() {
      this.$http
        .post("/user/regist", {
          username: this.username,
          nickname:this.nickname,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          let { state } = res.data;
          if (state == "success") {
            alert('恭喜您，注册成功，点击确定,即为您跳到登陆页面')
            this.$router.push("/login");
          } else {
            alert("注册失败，请重新尝试，或选择再见");
          }
        });
    },
  },
};
</script>

<style lang="scss">
body {
  background-image: url("../../public/imgs/bird.jpg");
}
.regist_container {
  /* background-image: linear-gradient(-180deg, #1a1454 0%, #0e81a5 100%); */
  /* background-image: url("../assets/login.jpg"); */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  width: 100%;
  height: 100%;
  background-color: #99ccff;
  font-size: 13px;
  font-weight: 100;
  /* height: 100%; */
}
h1 {
  margin: 20px auto;
}
.regist_box {
  width: 308px;
  height: 228px;
  /* background-color: #fff; */
  background-color: #f2f6fc;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.el-form {
  padding: 32px;
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
}
.el-button {
  width: 100%;
}
.code {
  width: 45%;
}
img {
  /* style="width: 100px; height: 30px; margin-left:5px;vertical-align: middle;" */
  display: line-inline;
  width: 45%;
  height: 28px;
  margin-left: 10px;
  vertical-align: middle;
  border-radius: 3px;
}
.rememberMe {
  color: #fff;
}
</style>