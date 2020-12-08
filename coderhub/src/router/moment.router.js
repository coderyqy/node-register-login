const Router = require('koa-router')
const momentRouter = new Router({ prefix: "/moment" })

const { verifyAuth, verifyPermission } = require('../middleware/auth.middleware')
const { create, detail, list, update, remove } = require('../controller/moment.controller')

momentRouter.post('/', verifyAuth, create)
momentRouter.get('/list', list)
momentRouter.get('/:momentId', detail)

momentRouter.patch('/update/:momentId', verifyAuth, verifyPermission, update)
momentRouter.delete('/delete/:momentId', verifyAuth, verifyPermission, remove)

module.exports = momentRouter