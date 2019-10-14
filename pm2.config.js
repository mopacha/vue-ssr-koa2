module.exports = {
  apps: [{
    name: 'vue-ssr-koa2', // app名称
    script: 'server/index.js', // 要运行的脚本的路径。
    args: '', // 由传递给脚本的参数组成的字符串或字符串数​​组。
    output: './log/out.log',
    error: './log/error.log',
    log: './log/combined.outerr.log',
    merge_logs: true, // 集群的所有实例的日志文件合并
    log_date_format: "YYYY-MM-DD HH:mm Z",
		instances: "max",  // 进程数 1、数字 2、'max'根据cpu内核数
		instance_var: "INSTANCE_ID",
    max_memory_restart: '1G', // 当内存超过1024M时自动重启
    watching: true,
    env: {
			NODE_ENV: 'production',
			PORT: 8066
		},
    env_production: {
			NODE_ENV: 'production',
			PORT: 8066
    }
  }],
}
