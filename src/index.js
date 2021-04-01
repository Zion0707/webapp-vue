import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from '_routers';
import {
	Button,
	Toast,
	CellGroup,
	Cell,
	NavBar
} from 'vant';
import {
	remSize,
	returnKeyEvent
} from '_utils';
import '_less/index.less';

// rem 尺寸设置基准为40px
remSize();

// 安卓返回键处理
returnKeyEvent(Toast);


Vue.use(VueRouter);
Vue.use(Toast);
Vue.use(Button);
Vue.use(CellGroup);
Vue.use(Cell);
Vue.use(NavBar);

new Vue({
	render: h => h(App),
	router: new VueRouter(router),
}).$mount('#root');
