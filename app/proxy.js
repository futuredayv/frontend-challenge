const devProxy = {
	'/api': {
		target: '',
		pathRewrite: { '^/api': '' },
		changeOrigin: true,
	},
};

module.exports = devProxy;
