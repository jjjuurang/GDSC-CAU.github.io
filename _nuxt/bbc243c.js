(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{278:function(t,e,n){var map={"./heemin.jpg":281,"./ilgoo.jpg":282,"./peniel.jpg":283,"./uhyeon.JPG":284};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=278},281:function(t,e,n){t.exports=n.p+"img/heemin.c61b693.jpg"},282:function(t,e,n){t.exports=n.p+"img/ilgoo.39ec243.jpg"},283:function(t,e,n){t.exports=n.p+"img/peniel.aabf029.jpg"},284:function(t,e,n){t.exports=n.p+"img/uhyeon.2b5ad42.JPG"},305:function(t,e,n){var content=n(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("64e3a469",content,!0,{sourceMap:!1})},327:function(t,e,n){"use strict";n(305)},328:function(t,e,n){var r=n(28)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.custom-text[data-v-6d7c7948]{\n  word-break:keep-all\n}\n.back-yellow[data-v-6d7c7948]{\n  background-color:#fbbf25\n}\n.lead-box[data-v-6d7c7948]{\n  border-radius:70%;\n  overflow:hidden\n}\n.profile[data-v-6d7c7948]{\n  width:100%;\n  height:100%;\n  -o-object-fit:cover;\n     object-fit:cover\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},376:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(42),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("members",r.id).sortBy("name","asc").fetch();case 3:return o=e.sent,e.abrupt("return",{member:o});case 5:case"end":return e.stop()}}),e)})))()},head:{title:"Members",htmlAttrs:{lang:"ko"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"중앙대학교 Google DSC 블로그입니다. 활동 관련 소식, 공부 내용 등을 주기적으로 업로드합니다."},{name:"format-detection",content:"telephone=no"}]}}),c=(n(327),n(9)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("div",{staticClass:"max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-x-3 md:gap-x-5 gap-y-9 pb-20 md:pb-24"},t._l(t.member,(function(e){return r("div",{key:e},[r("nuxt-link",{staticClass:"group",attrs:{to:{name:"id",params:{id:e.slug}}}},[r("div",{staticClass:"flex justify-center mb-3 md:mb-5"},[r("div",{staticClass:"lead-box h-32 w-32 md:h-40 md:w-40"},[r("img",{staticClass:"profile",attrs:{src:n(278)("./"+e.img),alt:""}})])]),t._v(" "),r("div",[r("div",{staticClass:"text-lg md:text-xl flex justify-center poppins text-gray-800 group-hover:underline"},[t._v(t._s(e.name))]),t._v(" "),r("div",{staticClass:"text-sm md:text-base flex justify-center poppins text-gray-800"},[t._v(t._s(e.role))])])])],1)})),0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-28 md:pt-52 pb-0 md:pb-14 max-w-6xl mx-auto px-6"},[n("div",{staticClass:"pb-10 poppins text-3xl md:text-7xl font-medium text-gray-800"},[t._v("\n            Members\n        ")])])}],!1,null,"6d7c7948",null);e.default=component.exports}}]);