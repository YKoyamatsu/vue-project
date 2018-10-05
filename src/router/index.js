import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import LayoutWorks from '@/components/layouts/Work'
import WorksTop from '@/components/WorksTop'
import WorksDetail from '@/components/ProductDetail'
import Contact from '@/components/Contact'
import About from '@/components/About'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {//トップページ
      path: '/',
      name: 'Top',
      component: Top
    },
    {//作品ページ系まとめ
      path:'/Works',
      name:'LayoutWorks',
      children:[
        {//作品一覧ペーシ
        path:'/',
        name:WorksTop,
        component:WorksTop
        },
        {//作品詳細
          path:'slug',
          name:WorksDetail,
          component:WorksDetail
        }
      ]
    },
    {//お問い合わせ
      path:'/contact',
      name:About,
      component:About
    },
    {//404ページ
      path:'*',
      name:'Not Found',
      component: PageNotFound,
      title: 'Not Found'
    }
  ]
})
