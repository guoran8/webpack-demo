// 模拟devServer
const fastify = require('fastify')({ logger: true })
const webpack = require("webpack")
const webpackDevMiddleware = require("webpack-dev-middleware")
const config = require("./webpack.config.js")
const compiler = webpack(config)

const { publicPath } = config.output

(async () => {
  await fastify.register(require('fastify-express'));
  await fastify.use(webpackDevMiddleware(compiler, { publicPath }));
  await fastify.listen(3000);
})();