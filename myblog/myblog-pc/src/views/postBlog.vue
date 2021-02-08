<template>
  <div class="container">
    <el-row>
      <el-button @click="postBlog" plain>发表文章</el-button>
    </el-row>
    <div class="art-related">
      <div class="art-title">
        <el-input
          v-model="title"
          placeholder="请输入标题"
          style="width: 200px"
        ></el-input>
      </div>
      <div>
        <editor ref="editorOne" v-model="content" @change="change"></editor>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from "@/components/wangEnduit/";
export default {
  components: { Editor },
  data() {
    return {
      title: "",
      content: "",
    };
  },
  created() {},
  methods: {
    postBlog() {
      let loginUser = this.$store.state.loginUser;
      if (loginUser) {
        this.$http
          .post("/blog/post", {
            title: this.title,
            content: this.content,
            userId: loginUser.user_id,
          })
          .then((res) => {
            let { state } = res.data;
            if (state == "success") {
              this.$router.push("/index");
            } else {
              alert("发表文章失败!");
            }
          });
      } else {
        alert("请登陆后再进行操作!!");
        this.$router.push("/login");
      }
    },
    change(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  background-image: url("../../public/imgs/bird.jpg");
}
.container {
  background-image: url("../../public/imgs/bird.jpg");
  .art-related {
    margin: 20px auto;
    width: 800px;
    height: 400px;
    border-radius: 10px;
    overflow: hidden;
    .art-title {
      margin: 30px auto;
    }
    .art-content {
      margin: 20px auto;
    }
  }
}
</style>