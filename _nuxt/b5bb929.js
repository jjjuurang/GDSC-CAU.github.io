(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{278:function(t,e,n){var map={"./eunsol.jpg":281,"./hakyoung.jpg":282,"./heemin.jpg":283,"./ilgoo.jpg":284,"./jaehyoung.jpg":285,"./minjun.jpg":286,"./peniel.jpg":287,"./seokjoo.jpg":288,"./songgyeong.jpg":289,"./uhyeon.JPG":290};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=278},281:function(t,e,n){t.exports=n.p+"img/eunsol.8a0eeaf.jpg"},282:function(t,e,n){t.exports=n.p+"img/hakyoung.a7f4668.jpg"},283:function(t,e,n){t.exports=n.p+"img/heemin.c61b693.jpg"},284:function(t,e,n){t.exports=n.p+"img/ilgoo.39ec243.jpg"},285:function(t,e,n){t.exports=n.p+"img/jaehyoung.dcadcdc.jpg"},286:function(t,e,n){t.exports=n.p+"img/minjun.e7101cf.jpg"},287:function(t,e,n){t.exports=n.p+"img/peniel.aabf029.jpg"},288:function(t,e,n){t.exports=n.p+"img/seokjoo.6b400cd.jpg"},289:function(t,e,n){t.exports=n.p+"img/songgyeong.f86d17d.jpg"},290:function(t,e,n){t.exports=n.p+"img/uhyeon.2b5ad42.JPG"},304:function(t,e,n){var content=n(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("2e6ee786",content,!0,{sourceMap:!1})},319:function(t,e,n){"use strict";n(304)},320:function(t,e,n){var o=n(28)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.custom-text[data-v-fd89ea92]{\n  word-break:keep-all\n}\n.back-yellow[data-v-fd89ea92]{\n  background-color:#fbbf25\n}\n.lead-box[data-v-fd89ea92]{\n  border-radius:70%;\n  overflow:hidden\n}\n.profile[data-v-fd89ea92]{\n  width:100%;\n  height:100%;\n  -o-object-fit:cover;\n     object-fit:cover\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},372:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(42),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,e.next=3,n("members",o.id).where({role:"Lead"}).fetch();case 3:return r=e.sent,e.next=6,n("members",o.id).sortBy("name","asc").where({role:"Core Member"}).fetch();case 6:return l=e.sent,e.abrupt("return",{coreMember:l,Lead:r});case 8:case"end":return e.stop()}}),e)})))()},head:{title:"About",htmlAttrs:{lang:"ko"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"중앙대학교 Google DSC 블로그입니다. 활동 관련 소식, 공부 내용 등을 주기적으로 업로드합니다."},{name:"format-detection",content:"telephone=no"}]}}),l=(n(319),n(9)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),t._v(" "),o("div",{staticClass:"max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-6 md:gap-y-0"},[o("div",{staticClass:"custom-text poppins text-2xl md:text-3xl mr-9 py-2 md:py-6 text-gray-800"},[t._v("\n            Google Developer Student Clubs CAU is a community group for CAU students interested in Google developer technologies.\n        ")]),t._v(" "),o("div",{staticClass:"px-8 py-8 back-yellow rounded-xl relative h-52 md:h-auto"},[t._m(1),t._v(" "),o("nuxt-link",{staticClass:"absolute bottom-0 left-0 pb-8 pl-8",attrs:{to:"members"}},[o("div",{staticClass:"poppins text-base md:text-lg text-gray-800 underline"},[t._v("\n                    See Members\n                ")])])],1),t._v(" "),o("div",{staticClass:"px-8 py-8 back-yellow rounded-xl relative h-56 md:h-auto"},[t._m(2),t._v(" "),o("nuxt-link",{staticClass:"absolute bottom-0 left-0 pb-8 pl-8",attrs:{to:"projects"}},[o("div",{staticClass:" poppins text-base md:text-lg text-gray-800 underline"},[t._v("\n                    See Projects\n                ")])])],1)]),t._v(" "),t._m(3),t._v(" "),o("div",{staticClass:"pt-12 md:pt-16 max-w-6xl mx-auto px-10"},[o("div",{},t._l(t.Lead,(function(e){return o("div",{key:e},[o("nuxt-link",{staticClass:"max-x-3xl mx-auto md:flex md:justify-between md:items-center group",attrs:{to:"member/"+e.slug}},[o("div",{staticClass:"flex justify-center"},[o("div",{staticClass:"lead-box w-40 h-40 md:w-52 md:h-52"},[o("img",{staticClass:"profile",attrs:{src:n(278)("./"+e.img),alt:""}})])]),t._v(" "),o("div",{staticClass:"mx-auto pl-0 md:pl-12"},[o("div",{},[o("p",{staticClass:"pt-6 md:pt-0 custom-text text-center text-gray-600 text-base md:text-xl mb-4 md:mb-6"},[t._v('\n                                "공부만을 위한 프로그래밍을 원하지 않습니다. 세상과 부딪히는 개발을 원합니다. '),o("br"),t._v(' 그런 사람들과 함께하고자 중앙대학교 GDSC에서 모였습니다."\n                            ')]),t._v(" "),o("div",{staticClass:"text-lg md:text-xl flex justify-center poppins text-gray-800 group-hover:underline"},[t._v(t._s(e.name))]),t._v(" "),o("div",{staticClass:"text-sm md:text-base flex justify-center poppins text-gray-800"},[t._v(t._s(e.role))])])])])],1)})),0)]),t._v(" "),t._m(4),t._v(" "),o("div",{staticClass:"max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-x-3 md:gap-x-5 gap-y-9 pb-20 md:pb-24"},t._l(t.coreMember,(function(e){return o("div",{key:e},[o("nuxt-link",{staticClass:"group",attrs:{to:"member/"+e.slug}},[o("div",{staticClass:"flex justify-center mb-3 md:mb-5"},[o("div",{staticClass:"lead-box h-32 w-32 md:h-40 md:w-40"},[o("img",{staticClass:"profile",attrs:{src:n(278)("./"+e.img),alt:""}})])]),t._v(" "),o("div",[o("div",{staticClass:"text-lg md:text-xl flex justify-center poppins text-gray-800 group-hover:underline"},[t._v(t._s(e.name))]),t._v(" "),o("div",{staticClass:"text-sm md:text-base flex justify-center poppins text-gray-800"},[t._v(t._s(e.role))])])])],1)})),0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-28 md:pt-52 pb-0 md:pb-10 max-w-6xl mx-auto px-6"},[n("div",{staticClass:"pb-6 poppins text-3xl md:text-7xl font-medium text-gray-800"},[t._v("\n            About\n        ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"text-5xl poppins pb-2.5 font-medium text-gray-800"},[t._v("20")]),t._v(" "),n("p",{staticClass:"text-xl poppins text-gray-800"},[t._v("Active Members")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"text-5xl poppins pb-2.5 font-medium text-gray-800"},[t._v("20")]),t._v(" "),n("p",{staticClass:"text-xl poppins text-gray-800"},[t._v("Individual Projects "),n("br"),t._v(" in Process")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-16 md:pt-24 flex justify-between items-center max-w-6xl mx-auto px-6"},[n("div",{staticClass:"text-3xl md:text-4xl text-gray-800 font-medium poppins"},[t._v("Lead")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-16 md:pt-24 flex justify-between items-center max-w-6xl mx-auto px-6 pb-12 md:pb-16"},[n("div",{staticClass:"text-3xl md:text-4xl text-gray-800 font-medium poppins"},[t._v("Core Members")])])}],!1,null,"fd89ea92",null);e.default=component.exports}}]);