webpackJsonp([4],{"./app/Containers/SubscriptionExpired/error.jsx":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,r,n=(i="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,o,r){var n=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&n)for(var d in n)void 0===t[d]&&(t[d]=n[d]);else t||(t=n||{});if(1===s)t.children=r;else if(s>1){for(var a=Array(s),l=0;l<s;l++)a[l]=arguments[l+3];t.children=a}return{$$typeof:i,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}),s=o("./node_modules/react/index.js"),d=(c(s),c(o("./node_modules/styled-components/dist/styled-components.es.js"))),a=o("./node_modules/react-router/es/index.js"),l=o("./node_modules/mobx-react/index.module.js"),u=c(o("./app/Containers/Layout/index.jsx")),p=o("./app/Components/index.jsx");function c(e){return e&&e.__esModule?e:{default:e}}const f=d.default.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  font-family: 'roboto regular';
  user-select: none;
  cursor: default;
`,h=d.default.div`
  font-size: 32px;
`,x=d.default.div`
  font-size: 16px;
  margin-top: 20px;
  width: 50%;
  text-align: center;
`,m=d.default.a`
  width: 320px;
  text-decoration: none !important;
  margin-top: 10px;
  margin: 20px;
`,g=d.default.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`,v=(0,d.default)(p.Button)`
  border-radius: 2px;
  padding: 20px;
  height: auto;
`,y=d.default.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  width: auto;
  text-align: center;
  cursor: pointer;
`;let b=(0,l.inject)("PrismicStore")(r=(0,l.observer)(r=class extends s.Component{constructor(){super(),this.redirectToLogin=(()=>{this.setState({redirect:!0,url:"app.html?login"})}),this.state={redirect:!1,url:""}}render(){const{redirect:e,url:t}=this.state,{onLine:o,PrismicStore:i}=this.props;return e&&t.length>0?n(a.Redirect,{to:t}):n(u.default,{titleBar:!0,buttons:!1,display:!0,onLine:o},void 0,n(f,{},void 0,n(h,{},void 0,i.get("subscription.past_due_title")),n(x,{},void 0,i.get("subscription.past_due_description")),n(g,{},void 0,n(m,{href:"https://account.shadow.tech/",onClick:this.redirectToLogin},void 0,n(v,{type:"submit",primary:!0},void 0,i.get("subscription.past_due_regularize")))),n(g,{},void 0,n(m,{style:{width:"auto"},onClick:this.redirectToLogin},void 0,n(y,{type:"submit",primary:!0},void 0,i.get("subscription.login_back"))))))}})||r)||r;t.default=b,e.exports=t.default}});