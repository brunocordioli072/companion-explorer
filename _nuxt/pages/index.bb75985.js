(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1333:function(t,e,n){var content=n(1337);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(111).default)("1b7833da",content,!0,{sourceMap:!1})},1336:function(t,e,n){"use strict";var o=n(1333);n.n(o).a},1337:function(t,e,n){(e=n(110)(!1)).push([t.i,'.container{margin:20px auto 0;min-height:30vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=e},1339:function(t,e,n){"use strict";n.r(e);n(46),n(32),n(30),n(25),n(40);var o=n(23),r=(n(136),n(27));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={methods:{login:function(){this.$ga.event({eventCategory:"Button",eventAction:"Click",eventLabel:"Tried to Login"}),window.location.replace("".concat("https://rqt6sty8u4.execute-api.us-east-1.amazonaws.com/prod","/auth/spotify/login"))}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)({isAuthenticated:"client/isAuthenticated"}))},h=(n(1336),n(20)),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("a-space",{attrs:{direction:"vertical"}},[n("div",{staticStyle:{"max-width":"800px",width:"80vw","font-size":"16px",margin:"0 420px"}},[n("h2",[t._v("Do your own playlist!")]),t._v(" "),n("p",[t._v("\n        For people who have\n        "),n("a",{attrs:{target:"_blank",href:"https://www.spotify.com/"}},[t._v("spotify")]),t._v(",\n        "),n("b",[t._v("PlaylistCompanion")]),t._v(" is your best friend when the subject is\n        music.\n        "),n("b",[t._v("\n          It helps you see all your favorite musicians and see all the\n          musicians that are related to them!\n        ")]),t._v("\n        And based on your choices it creates a playlist with the musics of the\n        musicians you chose.\n        "),n("b",[t._v("Its pretty awesome!")]),t._v(" You just have to click on the login button\n        right above login with your spotify account and give it a try!\n      ")]),t._v(" "),n("a-space",{attrs:{direction:"vertical"}},[t.isAuthenticated?n("a-button",{attrs:{size:"large",type:"primary",id:"login"},on:{click:function(e){return t.$router.push("/explore")}}},[t._v("Go explore!")]):n("a-button",{attrs:{size:"large",type:"primary",id:"login"},on:{click:t.login}},[t._v("login")])],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);