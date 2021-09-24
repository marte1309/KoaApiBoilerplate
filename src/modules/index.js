const Router = require('koa-router');
const router = new Router({prefix: '/'});

router.get('/', (ctx) => {
	ctx.body = "barberia25";
})

module.exports = router.routes();