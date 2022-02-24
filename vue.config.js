module.exports = {
	outputDir: "./build",
	configureWebpack: {
		resolve: {
			alias: {
				components: "@/components",
				views: "@/views",
			},
		},
	},
};
