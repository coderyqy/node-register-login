const connection = require('../app/database')

class MomentService {
  // 创建评论
  async create (userId, content) {
    console.log(userId)
    const statement = `INSERT INTO moment (content, user_id) VALUES(?,?)`
    const result = await connection.execute(statement, [content, userId])

    return result
  }
  // 根据用户id获取一条评论
  async getMomentById (id) {
    // const statement = `SELECT * FROM moment WHERE id = ?`
    const statement = `
      SELECT 
        m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
        JSON_OBJECT('id', u.id, 'name', u.name) user
      FROM moment m
      LEFT JOIN users u ON m.user_id = u.id
      WHERE m.id = ?;
    `
    const result = await connection.execute(statement, [id])
    return result
  }
  // 获取评论列表
  async getMomentList (offset, size) {
    const statement = `
      SELECT 
        m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
        JSON_OBJECT('id', u.id, 'name', u.name) user
      FROM moment m
      LEFT JOIN users u ON m.user_id = u.id
      LIMIT ?, ?;
    `
    const result = await connection.execute(statement, [offset, size])
    return result
  }
  // 更新、修改评论
  async update (content, momentId) {
    const statement = `UPDATE moment SET content = ? WHERE id = ?`
    const result = await connection.execute(statement, [content, momentId])
    return result
  }

  // 删除评论
  async remove (momentId) {
    const statement = `DELETE FROM moment WHERE id = ?`
    const result = await connection.execute(statement, [momentId])
    return result
  }
}

module.exports = new MomentService()