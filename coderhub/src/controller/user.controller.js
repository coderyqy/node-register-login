const service = require('../service/user.service')

class UserController {
  async create (ctx, next) {
    // 获取用户请求的数据
    console.log("进来create了")
    const user = ctx.request.body
    // 查询数据
    const result = await service.create(user)

    // 返回数据
    ctx.body = result

  }
}

module.exports = new UserController