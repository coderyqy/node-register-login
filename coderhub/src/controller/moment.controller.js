const momentService = require('../service/moment.service')

class MomentController {
  // 创建评论
  async create (ctx, next) {
    const userId = ctx.user.id
    const content = ctx.request.body.content


    const result = await momentService.create(userId, content)
    ctx.body = result
  }
  // 获取一条评论
  async detail (ctx, next) {
    // 获取参数
    const momentId = ctx.params.momentId
    // 根据id去查数据库
    const result = await momentService.getMomentById(momentId)

    ctx.body = result[0]
  }
  // 获取多条评论
  async list (ctx, next) {
    const { offset, size } = ctx.query
    console.log(offset, size)
    const result = await momentService.getMomentList(offset, size)
    ctx.body = result[0]
  }
  // 修改评论
  async update (ctx, next) {
    const momentId = ctx.params.momentId
    const content = ctx.request.body.content

    const result = await momentService.update(content, momentId)
    ctx.body = result[0]
  }

  // 删除评论
  async remove (ctx, next) {
    const momentId = ctx.params.momentId
    const result = await momentService.remove(momentId)
    ctx.body = result
  }
}

module.exports = new MomentController()