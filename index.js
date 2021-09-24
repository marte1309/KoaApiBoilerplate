const http 		= require('http');
const Koa 		= require('koa');
const KoaBody 	= require('koa-body');
const cors  	= require('koa2-cors');
const router 	= require('./src/router');
const port		= process.env.PORT || 8081;

const app = new Koa();

app.use(cors());

app.use(KoaBody());

app.use(async (ctx, next) => {
	await next();
})

router(app);

let server = http.createServer(app.callback(), console.log('🛸 Server Ready on Port: %s', port));

server.listen(port);