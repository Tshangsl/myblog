const blogModel = require("../models/blogModel");
const dataTimeUtil = require('../utils/dataTimeUtil')

module.exports = {
  postBlog: async function (ctx, next) {
    let { title, content, userId } = ctx.request.body;
    let results = await blogModel.saveBlog(title, content, userId);
    if (results.insertId > 0) {
      ctx.body = {
        state: "success",
      };
    } else {
      ctx.body = {
        state: "fail",
      };
    }
  },
  listBlog: async (ctx, next) => {
    try {
      // 接收数据
      let {pageSize,currentPage} = ctx.query;
      console.log(pageSize,currentPage);
      // 连接数据库
      let startNum = (currentPage-1)*pageSize;
      console.log(startNum);
      let results = await blogModel.getBlogs(startNum,pageSize);
      console.log(results);
      // 根据数据库操作的结果返回相应的信息
      if (results.length > 0) {
        ctx.body = {
          state: "success",
          blogs: results,
        };
      } else {
        ctx.body = {
          state: "fail",
        };
      }
    } catch (err) {
      ctx.status = 500;
      console.log(err);
    }
  },
  getBlogDetail: async (ctx) => {
    try {
      // 接收数据
      let { blog_id } = ctx.query;
      // 连接数据库
      let results = await blogModel.getBlogById(blog_id);
      // 根据数据库操作的结果返回相应的信息
      if (results.length > 0) {
        let { blog_id, title, content, post_time } = results[0];
        post_time = dataTimeUtil.formatTime(post_time);
        let blogInfo = {
          blog_id,
          title,
          content,
          post_time,
        };
        blogInfo.comments = [];
        for (let i = 0; i < results.length; i++) {
          let obj = results[i];
          obj.comm_post_time = dataTimeUtil.formatTime(obj.comm_post_time);
          blogInfo.comments.push({
            comm_id: obj.comm_id,
            comm_content: obj.comm_content,
            comm_post_time: obj.comm_post_time,
            username: obj.username
          });
        }
        console.log(blogInfo);
        ctx.body = {
          state: 'success',
          blog: blogInfo
        }
      } else {
        ctx.body={
          state:'fail',
          blog:'the blog is not exist!!!'
        }
      }
    } catch (err) {
      ctx.status = 500;
      console.log(err);
    }
  },
  changeComment:async(ctx,next)=>{
    try{
      // 接收数据
      let {content,user_id,blog_id} = ctx.request.body;
      console.log(content);
      // 验证
      // 连接数据库
      let results = await blogModel.saveBlogComment( content, user_id,blog_id);
      if (results.insertId > 0) {
        ctx.body = {
          state: "success",
        };
      } else {
        ctx.body = {
          state: "fail",
        };
      }
    }catch(err){
      ctx.status = 500;
      console.log(err);
    }
  },
  changeBlog:async (ctx,next)=>{
    try{
      // 接收数据
      let { blog_id } = ctx.query;
      // 连接数据库
      let results = await blogModel.deleteBlog(blog_id);
      // 根据数据库操作的结果返回相关信息
      if(results.affectedRows){
        ctx.body = {
          state: 'success',
          blog: results
        }
      }else{
        ctx.body={
          state:'fail',
        }
      }
    }catch(err){
      ctx.status = 500;
      console.log(err);
    }
  }
};
