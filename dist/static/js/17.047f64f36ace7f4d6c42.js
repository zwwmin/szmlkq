webpackJsonp([17],{"7fvt":function(t,i){},eTrs:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={data:function(){return{data:[]}},mounted:function(){this.ArticleBy(this.$route.query.id)},methods:{ArticleBy:function(t){var i=this;this.$api.article.showArticleBy({aId:t}).then(function(t){i.data=t.obj})},back:function(){this.$router.go(-1)}},components:{},watch:{$route:function(t,i){this.ArticleBy(t.query.id)}}},a=e("VU/8")(s,{render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.data!=[]?e("div",{staticClass:"article"},[e("div",{staticClass:"fixed_top"},[e("div",{staticClass:"fixed_top_cen left",on:{click:t.back}},[e("div",{staticClass:"icon left_arrow"})])]),t._v(" "),e("div",{staticClass:"article_center"},[e("div",{staticClass:"article_center_title"},[e("h1",[t._v(t._s(t.data.aTitle))]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"article_center_html",domProps:{innerHTML:t._s(t.data.aContent)}})]),t._v(" "),e("div",{staticClass:"mlkq_line"})]):t._e()},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"list_thing_bottom1 float"},[i("div",{staticClass:"icon fine list_thing_bottom_icon1"}),this._v(" "),i("span",[this._v("张维维")]),this._v(" "),i("span",[this._v("30分钟前")])])}]},!1,function(t){e("7fvt")},null,null);i.default=a.exports}});