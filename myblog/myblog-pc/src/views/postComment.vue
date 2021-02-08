<template>
  <div class="comm-container">
    <p>请在此处输入你的评论</p>
    <div class="text-area">
      <editor ref="editorOne" v-model="content" @change="change"></editor>
    </div>
    <div class="commBtn">
      <el-button @click="postComment" plain>提交评论</el-button>
      <el-button @click="goIndex" plain>取消</el-button>
    </div>
    <p>友善评论，美好你我他</p>
  </div>
</template>

<script>
import Editor from "@/components/wangEnduit/";
export default {
  components: { Editor },
  data() {
    return {
      content: "",
    };
  },
  methods: {
    // 向后端发送请求 在后端完成存储评论进评论表
    // 向后端发送请求时 需要带参 token user_id blog_id content
    // 我选择使用get方式向后端传参
    // blog_id由于是点评论时带过来的参数
    // 获得方式:let blog_id = this.$route.params.blog_id;
    // content用户输入得到
    // 获得方式:this.content
    // token由于前端封装了请求拦截器 所以采用
    // user_id
    postComment() {
      let loginUser = this.$store.state.loginUser;
      let blog_id = this.$route.params.blog_id;
      if (loginUser) {
        this.$http
          .post("/blog/postComment", {
            content: this.content,
            user_id: loginUser.user_id,
            blog_id: blog_id,
          })
          .then((res) => {
            let { state } = res.data;
            if (state == "success") {
              alert("恭喜您发表评论成功,即将为您跳到文章页面");
              this.$router.push("/index");
            } else {
              alert("发表文章失败！请重新尝试");
            }
          });
      } else {
        alert("请登陆后再进行操作!!");
        this.$router.push("/login");
      }
    },
    goIndex() {
      alert("即将为您跳到文章页面");
      this.$router.push("/index");
    },
  },
};
</script>

<style lang="scss">
body {
  background-image: url("../../public/imgs/bird.jpg");
}
.text-area{
  width: 600px;
  margin: 20px auto;
}
.comm-container {
  margin: 50px auto;
  p {
    margin: 20px auto;
    color: #ccc;
  }
  .commBtn {
    margin: 50px auto;
  }
}
</style>