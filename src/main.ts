'use strict'

import Vue       = require('vue')
import VueRouter = require('vue-router')
import newRouter = require('./router-config')
const app        = require('./views/app.vue')

const styles     = require('./styles/main.less')
const polyfills  = require('./polyfills')

Vue.use(VueRouter)

var router = newRouter(new VueRouter({
	hashbang: false,
	history:  true
}));

// // function requireAll(requireContext) {
// //   return requireContext.keys().map(requireContext);
// // }
// // // requires and returns all modules that match

// // var modules = requireAll(require.context("./", true, /^\.\/.*\.js$/));
// // // is an array containing all the matching modules

// // console.log(modules)

// var req = require.context("./modules", true, /^\.\/.*\.js$/);

// // var config = req("./config.js");
// // tableTemplate === require("./templates/table.jade");

// // var modules = req("./modules.js");
// // tableTemplateId === require.resolve("./templates/table.jade");

// req.keys();
// // is ["./table.jade", "./table-row.jade", "./directory/folder.jade"]

// // console.log(req, req.keys(), req.id, config, 'Modules: ', modules)

// const modules = {}

// req.keys().map(key => {
//     console.log(key.slice(2, key.length - 3).split(/^(\/)|(\.)$/))
//     modules[key] = req(key)
// })

// console.log(modules)

router.start(app, 'app')