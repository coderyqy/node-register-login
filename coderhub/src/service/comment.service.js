const connection = require('../app/database')

class CommentService {
  // 发表评论
  async create (user_id, momentId, content) {
    console.log(user_id, momentId, content)
    const statement = `insert into comment (user_id, moment_id, content) values(?, ?, ?)`
    const result = connection.execute(statement, [user_id, momentId, content])
    return result
  }

  // 回复评论
  async reply (user_id, momentId, content, commentId) {
    console.log(user_id, momentId, content)
    const statement = `insert into comment (user_id, moment_id, content, comment_id) values(?, ?, ?, ?)`
    const result = await connection.execute(statement, [user_id, momentId, content, commentId])
    console.log(user_id, momentId, content, commentId)
    return result
  }

  // 修改评论
  async update (commentId, content) {
    const statement = `update comment set content = ? where id = ?`
    const result = await connection.execute(statement, [content, commentId])
    return result
  }

  // 修改评论
  async remove (commentId) {
    const statement = `DELETE FROM comment WHERE id = ?`
    const result = await connection.execute(statement, [commentId])
    return result
  }
}

module.exports = new CommentService()