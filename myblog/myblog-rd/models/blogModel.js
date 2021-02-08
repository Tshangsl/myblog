const db = require('../models/db');

module.exports = {
    saveBlog(title, content, userId) {
        return db.query('insert into t_blog set ?', {
            title,
            content,
            user_id: userId
        });
    },
    saveBlogComment(content, user_id,blog_id){
        return db.query('insert into t_comment set ?',{
          content,
          user_id,
          blog_id  
        })
    },
    getBlogs(startNum,pageSize) {
        // return db.query("select * from t_blog order by post_time desc");
        return db.query(`SELECT * FROM t_blog ORDER BY post_time desc LIMIT ${startNum},${pageSize}`);
        // return db.query(`SELECT * FROM t_blog LIMIT ${startNum},${pageSize}`);
    },
    getBlogById(blogId){
        return db.query(`
        SELECT blog.*, comm.comm_id, comm.content as comm_content, comm.post_time as comm_post_time, usr.username
        FROM t_blog blog  LEFT JOIN t_comment comm 
        ON comm.blog_id=blog.blog_id  
        LEFT JOIN t_user usr ON comm.user_id=usr.user_id
        WHERE blog.blog_id=?`, [blogId]);
    },
    deleteBlog(blog_id) {
        return db.query('delete from t_blog where blog_id = ?',[blog_id])
    }
}

