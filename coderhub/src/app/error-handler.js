const errorTypes = require('../constants/error-type')

const errorHandler = (error, ctx) => {
  let status, message
  switch (error.message) {
    case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400 // Bad Request
      message = "用户名或密码不能为空"
      break
    case errorTypes.USER_NOT_EXISTS:
      status = 404 // Confilct
      message = "用户不存在"
      break
    case errorTypes.USER_ALREADY_EXISTS:
      status = 409 // Confilct
      message = "用户名已存在"
      break
    case errorTypes.USER_INFO_ERROR:
      status = 400 // 参数错误
      message = "用户名或密码不正确"
      break
    case errorTypes.UNAUTHORIZATION:
      status = 401 // 没权限
      message = "未授权"
      break
    default:
      status = 404
      message = "Not Found"
      break
  }
  ctx.status = status
  ctx.body = message
}

module.exports = errorHandler