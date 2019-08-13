const devProxy = {
	'/api': {
		target: 'https://raw.githubusercontent.com/futuredayv/frontend-challenge/master/feed/',
		pathRewrite: { '^/api': '' },
		changeOrigin: true,
	},
};

module.exports = devProxy;
