const Router = require('koa-router');
const router = new Router({prefix: '/productos'});

router.get('/obtener', (ctx) => {
	console.log('entro');
	ctx.body = "barberia25";
})

module.exports = router.routes();