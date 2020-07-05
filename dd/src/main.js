// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/Layout'
import IndexPage from './pages/IndexPage'
import vueRouter from 'vue-router'

Vue.use(router)

let router = new vueRouter({
    mode: 'history',
    routers: [{
        path: '/',
        components: IndexPage,
    }]
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { Layout },
    template: '<Layout/>'
})