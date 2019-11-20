import Vue from 'vue'
import Router from 'vue-router'
// 首页路由
// import index from '@/components/index'
// import IDskinCutSystem from '@/components/details/IDskinCutSystem'
import newsList from '@/components/public/newsList'

import Custom from '@/components/details/Custom'

import AboutIDskin from '@/components/details/AboutIDskin'

import Agent from '@/components/details/Agent'

import Contact_us from '@/components/details/Contact_us'

import Video from '@/components/details/Video'
import appDownload from '@/components/details/appDownload'

import privacyagreement from '@/components/details/privacyagreement'


// Vue官方介绍这么写是 懒加载路由，实测无卵用

// 详情页路由 IDskinCutSystem
const IDskinCutSystem = () => import('@/components/details/IDskinCutSystem')
// 首页路由
const index = () => import('@/components/index')




Vue.use(Router)

export default new Router({
	routes: [
		// 重定向 首页跳转
		{
			path: "/",
			redirect: {
				name: 'index'
			}
		},
		// 默认首页跳转到index
		{
			path: '/index',
			name: 'index',
			component: index,
			meta: {
				title: 'Attract customers and add profits for store ',
			}
		},
		// 导航跳转
		{
			path: '/idskincutsystem',
			name: 'IDskinCutSystem',
			component: IDskinCutSystem,
			meta: {
				title: 'Fast cutting hydrogel film',
			}
		},
		{
			path: '/custom',
			name: 'Custom',
			component: Custom,
			meta: {
				title: 'Accept OEM for IDskin',
			}
		},
		// 关于id-skin
		{
			path: "/aboutidskin",
			name: "AboutIDskin",
			component: AboutIDskin,
			meta: {
				title: 'Hydrogel film cutting machine ',
			}
		},
		{
			path: "/agent",
			name: "Agent",
			component: Agent,
			meta: {
				title: 'Developing exclusive agent for IDskin',
			}
		},
		{
			path: "/contact",
			name: "Contact_us",
			component: Contact_us,
			meta: {
				title: 'Contact IDskin ',
			}
		},
		{
			path: "/video",
			name: "Video",
			component: Video,
			meta: {
				title: 'how to cut hydrogel ?',
			}
		},
		{
			path: "/appdownload",
			name: "appDownload",
			component: appDownload,
			meta: {
				title: 'Download your app',
			}
		},
		{
			path: "/privacyagreement",
			component: privacyagreement,
			meta: {
				title: 'privacyagreement',
			}
			
		},



		// 测试路由
		{
			path: '/newsList',
			name: 'newsList',
			component: newsList
		}],
	scrollBehavior(to, from, saveTop) {
		if (saveTop) {
			return saveTop;
		} else {
			return { x: 0, y: 0 }
		}
	},
})
