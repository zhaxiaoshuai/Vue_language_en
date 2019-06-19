// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 使用插件修改页面title
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// #通过use方法加载axios插件
Vue.use(VueAxios,axios)



// 引入全局css 公用 css
import '../static/css/initial.css'


import './assets/js/top'
// ElementUI
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)


// 全局header component
import id_skin_head from './components/public/head.vue'
Vue.component('idSkinHead', id_skin_head)

// 全局footer component
import id_skin_footer from './components/public/footer.vue'
Vue.component('idSkinFooter', id_skin_footer)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App,
	},
	template: '<App/>'
})
router.beforeEach((to, from, next) => {
	/* 路由发生变化修改页面title */
	if (to.meta.title) {
		document.title = to.meta.title
	}
	next()
})