<template>
  <div class="container">
    <h1>BLOG'S ARTICLE</h1>
    <div class="blog-list">
      <div class="blog" v-for="item in blogList" :key="item.blogId">
        <h3 class="blog-title">
          <span @click="goDetail(item.blog_id)">{{ item.title }}</span>
        </h3>
        <p class="blog-content">{{ item.content }}</p>
        <span class="post-time">{{ item.postTime }}</span>
        <el-link type="info" @click="delMyBlog(item.blog_id)">删除文章</el-link
        >|
        <el-link type="info" @click="goPostComment(item.blog_id)"
          >发表评论</el-link
        >
      </div>
    </div>
    <div class="blog-post">
      <el-row>
        <el-button @click="goPostBlog" plain>发表文章</el-button>
      </el-row>
    </div>
    <!-- 分页功能应该是前端传参 后端实现 
    后端返回响应数据 前端对其进行相应展示 -->
    <div class="list-footer">
      <el-pagination background layout="prev, pager, next" :total="50">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogList: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get("/blog/list").then((res) => {
        let { state } = res.data;
        if (state == "auth-fail") {
          alert("请求未授权-then!");
        } else if (state == "success") {
          let { blogs } = res.data;
          this.blogList = blogs;
        }
      });
    },
    goPostBlog() {
      this.$router.push("/blog/post");
    },
    goDetail(id) {
      this.$router.push("/blog/detail/" + id);
    },
    goPostComment(id) {
      this.$router.push("/blog/postComment/" + id);
    },
    delMyBlog(id) {
      this.$http
        .get("/blog/del", {
          params: {
            blog_id: id,
          },
        })
        .then((res) => {
          let { state } = res.data;
          if (state == "auth-fail") {
            alert("请求未授权-then!");
          } else if (state == "success") {
            alert("删除成功!");
            // let { blogs } = res.data;
            // this.blogList = blogs;
            this.getData();
          }
        });
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  border: 1px solid #ccc;
  padding: 0 -80px;
  h1{
    margin: 20px 0;
  }
  .list-footer {
    margin: 30px auto;
  }
  .blog-list {
    width: 815px;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .blog {
      // background: #ccf;
      background-image: url("../../public/imgs/bird.jpg");
      padding: 20px;
      margin: 20px 5px;
      // width: 300px;
      width: 40%;
      height: 300px;
      border-radius: 10px;
      box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.05);
      opacity: 0.5;
      border: 1px solid #ccc;
    }
  }
  .blog-post {
    margin: 10px 300px 20px 0;
    float: right;
  }
  .blog-title{
    cursor: pointer;
    margin: 20px 0;
  }
  .blog-content,
  .post-time {
    margin: 20px 0;
  }
}
</style>