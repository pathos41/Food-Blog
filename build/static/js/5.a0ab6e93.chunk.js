(this.webpackJsonponline_forum=this.webpackJsonponline_forum||[]).push([[5],{101:function(n,t,e){"use strict";e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return f})),e.d(t,"a",(function(){return l}));var i=e(1),r=e(2);function o(){var n=Object(i.a)(["\n  color: #2f2f2f;\n  img{\n    width: 100%;\n  }\n  p{\n    margin: 25px 0;\n    font-size: 20px;\n    line-height: 30px;\n  }\n  b{\n    font-weight: bold;\n  }\n"]);return o=function(){return n},n}function a(){var n=Object(i.a)(["\n  margin: 50px 0 20px 0;\n  font-size: 34px;\n  line-height: 44px;\n  color: #333;\n  font-weight: bold;\n"]);return a=function(){return n},n}function u(){var n=Object(i.a)(["\n  width: 1000px;\n  margin: 0 auto;\n  overflow: hidden;\n  padding-bottom: 100px;\n"]);return u=function(){return n},n}var c=r.a.div(u()),f=r.a.div(a()),l=r.a.div(o())},106:function(n,t,e){"use strict";e.r(t);var i={};e.r(i),e.d(i,"getDetail",(function(){return m}));var r=e(8),o=e(9),a=e(11),u=e(10),c=e(12),f=e(0),l=e.n(f),p=e(101),s=e(14),d=e(24),h=e(38),g=e(21),b=e.n(g),m=function(n){return function(n){b.a.get("/api/detailList.json?id={id}").then((function(t){var e=t.data.data[11];n(v(e))})).catch((function(){console.log("failed")}))}},v=function(n){return{type:h.a.CHANGE_DETAIL_DATA,list:n}},j=function(n){function t(){return Object(r.a)(this,t),Object(a.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(c.a)(t,n),Object(o.a)(t,[{key:"render",value:function(){var n=this.props.list;return l.a.createElement(p.b,{key:n.get("id")},l.a.createElement(p.c,null,n.get("title")),l.a.createElement(p.a,{dangerouslySetInnerHTML:{__html:n.get("content")}}))}},{key:"componentDidMount",value:function(){this.props.getDetail(this.props.match.params.id)}}]),t}(f.PureComponent);t.default=Object(s.b)((function(n){return{list:n.getIn(["detail","list"])}}),(function(n){return{getDetail:function(t){n(i.getDetail(t))}}}))(Object(d.f)(j))}}]);
//# sourceMappingURL=5.a0ab6e93.chunk.js.map