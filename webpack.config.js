const { resolve, join } = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ENV = process.env.NODE_ENV;


let mergeConfig = null;

if(ENV === 'development'){
	mergeConfig = {
		mode:'development',
	}
}else{
	mergeConfig = {
		mode:'production',
	}
}

// console.log( mergeConfig );

module.exports = merge({
	// mode:'development',
		
	// 入口
    entry:'./src/index.js',
		
	// 输出
	output:{
		path: resolve(__dirname, 'dist'),
		filename:"js/[name].js"
	},
	
	// 加载项
	module: {
	    rules: [
			{
			    test: /\.(css|less)$/,
			    use: ['style-loader', 'css-loader', 'less-loader'],
			},
	        {
	            test: /\.vue$/,
	            loader: 'vue-loader',
	        },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015'],
                    plugins: ['syntax-dynamic-import'],
                },
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url-loader',
            },
            {
                exclude: /\.(html|vue|js|png|jpg|jpeg|gif|svg|css|less)$/,
                loader: 'file-loader',
            },
		],	
	},
    
	// 插件
	plugins:[
		// vue加载器
		new VueLoaderPlugin(),	
		// 文件清理器
		new CleanWebpackPlugin()
	],
	
	// 别名
	resolve: {
	    alias: {
	        _less: resolve(__dirname, './src/less'),
	        _pages: resolve(__dirname, './src/pages'),
	        _statics: resolve(__dirname, './src/statics'),
	        _components: resolve(__dirname, './src/components'),
	        _utils: resolve(__dirname, './src/utils'),
	        _routers: resolve(__dirname, './src/routers'),
	    },
	    extensions: ['.js', '.vue', '.css', '.less'],
	},
	
}, mergeConfig);