module.exports = {
	outputDir: "./build",
	publicPath: process.env.NODE_ENV === "development" ? "/" : "./",
	configureWebpack: {
		resolve: {
			alias: {
				components: "@/components",
				views: "@/views",
				hooks: "@/hooks",
			},
		},
	},
};
