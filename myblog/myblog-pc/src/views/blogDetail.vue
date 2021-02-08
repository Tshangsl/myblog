<template>
  <div class="container">
    <div class="blog">
      <div class="blog-title">
        <!-- <h3 style="color: red">{{ blog && blog.blog_id }}</h3> -->
        <h3>{{ blog && blog.title }}</h3>
        <span>{{ blog && blog.post_time }}</span>
      </div>
      <!-- <div class="blog-content">{{ blog && blog.content }}</div> -->
      <div class="blog-content" v-html="blog && blog.content"></div>
      <el-divider></el-divider>
      <div class="comments">
        <div>
          <h3>文章评论</h3>
        </div>
        <div class="comment" v-for="item in blog.comments" :key="item.blog_id">
          <!-- <div class="comment-id">{{ item && item.comm_id }}</div> -->
          <!-- <div class="comment-content">{{ item && item.comm_content }}</div> -->
          <div class="comment-content" v-html="item && item.comm_content"></div>
          <div class="comment-info">
            <div class="userinfo">
              <span>{{ item && item.username }}</span>
            </div>
            <div class="post-time">
              <span>{{ item && item.comm_post_time }}</span>
            </div>
          </div>
          <!-- <el-button @click="delComment" plain>删除评论</el-button> -->
        </div>
      </div>
    </div>
    <el-button style="float:right;margin-bottom:20px" @click="goIndex" plain>回到文章页</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blog: null,
    };
  },
  created() {
    this.getBlogDetail();
  },
  methods: {
    getBlogDetail() {
      let blog_id = this.$route.params.blog_id;
      console.log(blog_id);
      this.$http
        .get("/blog/detail", {
          params: {
            blog_id: blog_id,
          },
        })
        .then((res) => {
          let { state, blog } = res.data;
          if (state == "auth-fail") {
            alert("请求未授权!");
          } else if (state == "success") {
            this.blog = blog;
            console.log(blog);
          }
        });
    },
    goIndex() {
      alert("即将为您跳转到文章页");
      this.$router.push("/index");
    },
  },
};
</script>

<style scoped lang="scss">
body {
  background-image: url("../../public/imgs/bird.jpg");
}
.container {
  border-radius: 5px;
  .blog {
    margin: 20px auto;
    padding: 20px;
    background-image: url("../../public/imgs/bird.jpg");
    // background: #ccc;
    border-radius: 5px;
    .blog-title {
      padding: 10px;
      // border: 1px solid #ccc;
    }
    .blog-content {
      padding: 10px;
    }
    .comment {
      padding: 20px;
      border: 1px solid #ccc;
      margin: 10px 300px;
      padding: 60px 0;
      .comment-info {
      float: right;
      .userinfo{
        padding: 5px 0;
      }
      .post-time{
        padding: 5px 0;
      }
    }
    }
  }
}
</style>
