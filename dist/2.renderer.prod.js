webpackJsonp([2],{"./app/Containers/TrialEnd/index.jsx":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,o,n){var i=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&i)for(var d in i)void 0===t[d]&&(t[d]=i[d]);else t||(t=i||{});if(1===s)t.children=n;else if(s>1){for(var l=Array(s),a=0;a<s;a++)l[a]=arguments[a+3];t.children=l}return{$$typeof:r,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}),i=o("./node_modules/react/index.js"),s=(u(i),o("./node_modules/react-router/es/index.js")),d=u(o("./node_modules/styled-components/dist/styled-components.es.js")),l=o("./app/Components/index.jsx"),a=u(o("./app/Containers/Layout/index.jsx"));function u(e){return e&&e.__esModule?e:{default:e}}const p=d.default.a`
  margin-top: 5%;
  width: 50%;
  text-decoration: none !important;
`;var c=n(l.Text,{fontSize:"h1_roboto",color:"#fff"},void 0,"Offre d’essai expirée");t.default=class extends i.Component{constructor(){super(),this.state={redirect:!1}}componentWillMount(){this.ipc=window.require("electron").ipcRenderer,this.remote=window.require("electron").remote}componentDidMount(){}render(){const{}=this.props;return this.state&&this.state.redirect?n(s.Redirect,{to:this.state.url}):n(a.default,{titleBar:!0,buttons:!1,display:!0,onLine:this.props.onLine},void 0,n(l.Column,{style:{width:"50%"}},void 0,c,n(l.Text,{style:{marginTop:"5%"},fontSize:"h3_roboto",color:"#fff"},void 0,"Votre période d'essai est terminée. Rendez-vous sur Shadow.tech pour vous abonner."),n(p,{href:"https://account.shadow.tech/",onClick:()=>this.setState({redirect:!0,url:"app.html?login"})},void 0,n(l.Button,{style:{width:"100%",borderRadius:"12px"},type:"submit",primary:!0},void 0,"S'abonner"))))}},e.exports=t.default}});