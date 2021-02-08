<template>
  <div class="container">
    <div class="blog">
      <div class="blog-title">
        <!-- <h3 style="color: red">{{ blog && blog.blog_id }}</h3> -->
        <span>文章名</span>
        <h1>{{ blog && blog.title }}</h1>
        <span>发表于-----</span>
        <span>{{ blog && blog.post_time }}</span>
      </div>
      <span>文章内容</span>
      <div class="blog-content">{{ blog && blog.content }}</div>
      <div class="comments">
        <div>
          <span> 
            文章评论
          </span>
        </div>
        <div class="comment" v-for="item in blog.comments" :key="item.blog_id">
          <div class="comment-id">{{ item && item.comm_id }}</div>
          <div class="comment-content">{{ item && item.comm_content }}</div>
          <div class="comment-info">
            <span class="userinfo">{{ item && item.username }}</span>
            <span class="post-time">{{ item && item.comm_post_time }}</span>
          </div>
        </div>
      </div>
    </div>
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
    }
    .blog-content {
      padding: 10px;
    }
    .comment {
      padding: 20px;
    }
    .comment-info {
      float: right;
    }
  }
}
</style>
