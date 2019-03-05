webpackJsonp([3],{"./app/Containers/SubscriptionExpired/index.jsx":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r,n=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,i,r){var n=e&&e.defaultProps,d=arguments.length-3;if(t||0===d||(t={}),t&&n)for(var s in n)void 0===t[s]&&(t[s]=n[s]);else t||(t=n||{});if(1===d)t.children=r;else if(d>1){for(var l=Array(d),a=0;a<d;a++)l[a]=arguments[a+3];t.children=l}return{$$typeof:o,type:e,key:void 0===i?null:""+i,ref:null,props:t,_owner:null}}),d=i("./node_modules/react/index.js"),s=(c(d),c(i("./node_modules/styled-components/dist/styled-components.es.js"))),l=i("./node_modules/react-router/es/index.js"),a=i("./node_modules/mobx-react/index.module.js"),u=c(i("./app/Containers/Layout/index.jsx")),p=i("./app/Components/index.jsx");function c(e){return e&&e.__esModule?e:{default:e}}const f=s.default.div`
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
`,x=s.default.div`
  font-size: 32px;
`,h=s.default.div`
  font-size: 16px;
  margin-top: 20px;
  width: 50%;
  text-align: center;
`,m=s.default.a`
  width: 320px;
  text-decoration: none !important;
  margin-top: 10px;
  margin: 20px;
`,g=s.default.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`,v=(0,s.default)(p.Button)`
  border-radius: 2px;
  padding: 20px;
  height: auto;
`,b=s.default.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  width: auto;
  text-align: center;
  cursor: pointer;
`;let y=(0,a.inject)("PrismicStore")(r=(0,a.observer)(r=class extends d.Component{constructor(){super(),this.redirectToLogin=(()=>{this.setState({redirect:!0,url:"app.html?login"})}),this.state={redirect:!1,url:""}}render(){const{redirect:e,url:t}=this.state,{onLine:i,PrismicStore:o}=this.props;return e&&t.length>0?n(l.Redirect,{to:t}):n(u.default,{titleBar:!0,buttons:!1,display:!0,onLine:i},void 0,n(f,{},void 0,n(x,{},void 0,o.get("subscription.expired_title")),n(h,{},void 0,o.get("subscription.expired_description")),n(g,{},void 0,n(m,{href:"https://account.shadow.tech/",onClick:this.redirectToLogin},void 0,n(v,{type:"submit",primary:!0},void 0,o.get("subscription.expired_button")))),n(g,{},void 0,n(m,{style:{width:"auto"},onClick:this.redirectToLogin},void 0,n(b,{type:"submit",primary:!0},void 0,o.get("subscription.login_back"))))))}})||r)||r;t.default=y,e.exports=t.default}});