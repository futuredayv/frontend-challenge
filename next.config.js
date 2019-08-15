/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const withPlugins = require('next-compose-plugins');

const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const nextRuntimeDotenv = require('next-runtime-dotenv');
const withReactSvg = require('next-react-svg');
/* eslint-enable @typescript-eslint/no-var-requires */

const withConfig = nextRuntimeDotenv({
	public: ['API_URL', 'API_KEY', 'SAMPLE_JSON'],
});

module.exports = withConfig(
	withPlugins(
		[
			[
				withReactSvg,
				{
					include: path.resolve(__dirname, 'src/Assets/icons'),
				},
			],
			[withTypescript],
			[withCSS],
			[withSass],
			[withBundleAnalyzer],
		],
		{
			analyzeServer: ['server', 'both'].includes(
				process.env.BUNDLE_ANALYZE,
			),
			analyzeBrowser: ['browser', 'both'].includes(
				process.env.BUNDLE_ANALYZE,
			),
			bundleAnalyzerConfig: {
				server: {
					analyzerMode: 'static',
					reportFilename: '../bundles/server.html',
				},
				browser: {
					analyzerMode: 'static',
					reportFilename: '../bundles/client.html',
				},
			},
		},
	),
);
