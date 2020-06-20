// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from './router'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.user('VueResource')

/* eslint-disable no-new */
new Vue({
        el: '#app',
        router,
        components: { App },
        template: '<App/>'
    })
    // eslint-disable-next-line no-new
    // var myHead = {
    //         templates: "<div>this is header</div>",
    //         data: function() {

//         }
//     }
//     // Vue.component('my-Head', {
//     //     template: "<p>this is header</p>",
//     //     data: function() {

// //     }
// // })

// new Vue({
//     el: '#app',
//     //router,
//     components: {
//         'my-Head': myHead,
//     },
//     //template: "<div>this is header</div>",
//     data: {
//         message: 'hello Vue'
//     }
// })