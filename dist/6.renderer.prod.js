webpackJsonp([6],{"./app/Containers/CodeReset/index.jsx":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,r,n=(i="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,o,r){var n=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&n)for(var a in n)void 0===t[a]&&(t[a]=n[a]);else t||(t=n||{});if(1===s)t.children=r;else if(s>1){for(var d=Array(s),l=0;l<s;l++)d[l]=arguments[l+3];t.children=d}return{$$typeof:i,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}),s=o("./node_modules/react/index.js"),a=(g(s),o("./node_modules/react-router/es/index.js")),d=o("./node_modules/mobx-react/index.module.js"),l=g(o("./node_modules/styled-components/dist/styled-components.es.js")),p=o("./app/Components/index.jsx"),u=g(o("./app/Containers/Layout/index.jsx")),c=g(o("./app/Stores/GapStore.js")),f=g(o("./app/Services/Error.js")),h=g(o("./app/Services/Storage.js"));function g(e){return e&&e.__esModule?e:{default:e}}const x=l.default.div`
  * {
    box-sizing: border-box;
  }
  :not(input):not(textarea),
  :not(input):not(textarea)::after,
  :not(input):not(textarea)::before {
    -webkit-user-select: none;
    user-select: none;
    cursor: default;
  }
  input,
  button,
  textarea,
  :focus {
    -webkit-user-select: none;
    user-select: none;
    cursor: default;
    outline: none;
  }
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`,m=l.default.div`
  font-size: 32px;
  margin-left: -50px;
  font-family: "roboto light";
  color: #fff;
`,b=l.default.div`
  margin-left: -45px;

  margin-top: 20px;
  font-size: 14px;
  font-family: "roboto light";
  color: #fff;
  width: 520px;
  text-align: center;
`,v=(0,l.default)(b)`
  font-family: "roboto light";
`,y=l.default.div`
  display: flex;
  justify-content: center;
  width: 270px;
  height: 54px;
  margin-top: 30px;
  margin-left: -60px;
`,k=l.default.input`
  border: none;
  width: 40px;
  height: 54px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  margin-left: 10px;
  text-align: center;
  font-size: 32px;
  color: rgba(0, 0, 0, 0.6);
  caret-color: transparent;

  ::selection {
    background: none;
  }

  &:focus {
    box-shadow: 0 0 5px 4px #5171f7;
  }
`,w=l.default.div`
  height: 25px;
  width: 25px;
  margin-right: 5px;
  background: none;
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: solid 2px #ffffff;
  cursor: pointer;
  .dot {
    display: none;
  }
  &.checked {
    .dot {
      display: block;
      width: 6px;
      height: 6px;
      background-color: white;
      margin-left: 2px;
      margin-top: 2px;
      border-radius: 1px;
    }
  }
`,C=(l.default.div`
  width: 276px;
  font-size: 12px;
`,l.default.div`
  width: 303px;
  margin-top: 20px;
  cursor: pointer;
  display: ${e=>e.show?"flex":"none"};
`),S=l.default.div`
  margin-left: 8px;
  color: #fff;
  font-size: 12px;
  font-family: "roboto light";
`,N=l.default.div`
  ${""} margin-top: 20px;
  margin-left: -44px;
  height: 13px;
  cursor: pointer;
  display: flex;
  cursor: default;
`,_=l.default.div`
  color: #fff;
  font-size: 12px;
  font-family: "roboto light";
  text-align: center;
  width: inherit;
`,z=l.default.div`
  margin-top: 30px;
  margin-left: -50px;
  width: 320px;
  height: 48px;
  border: none;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.3);
  border: solid 1px rgb(255, 255, 255);
  display: ${e=>e.show?"block":"none"};
`,j=l.default.input`
  margin-top: 12px;
  margin-left: 20px;
  font-size: 14px;
  width: 24px;
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(0, 0, 0, 0);
  border: none;
  width: 280px;
  text-align: center;
`,P=l.default.div`
  width: 104px;
  height: 42px;
  border-radius: 8px;
  margin-top: 20px;
  margin-left: -40px;
  border: solid 1px rgba(255, 255, 255, 0.7);
  color: rgba(255, 255, 255, 0.7);
  font-family: "roboto light";
  font-size: 18px;
  cursor: pointer;
  transition: border-color 0.2s ease-in-out, color 0.3s ease-in-out;
  &:hover {
    border: solid 1px rgba(255, 255, 255, 1);
    color: rgba(255, 255, 255, 1);
  }
`,$=(l.default.p`
  margin-left: 24px;
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.2px;
  font-size: 18px;
  font-family: "roboto light";
`,l.default.p`
  font-size: 12px;
  font-family: "roboto light";
  color: ${e=>e.disable?"rgba(255, 255, 255, 0.2)":"rgba(255, 255, 255, 0.5)"};
  transition: color 0.3s ease-in-out;
  outline: none;
  margin-top: 48px;
  margin-left: -40px;
  width: 90px;
  &:hover {
    cursor: ${e=>e.disable?"default":"pointer"};
    text-decoration: ${e=>e.disable?"none":"underline"};
  }
`),I=l.default.div`
  position: absolute;
  top: 45px;
  left: 45px;
  cursor: pointer;
  display: flex;
  font-family: "roboto light";
  align-items: center;
  width: 42px;
  transition: color 0.3s ease-in-out;
  color: rgba(255, 255, 255, 0.7);
  -webkit-user-select: none;
  user-select: none;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`,B=l.default.p`
  font-size: 14px;
  margin-left: 8px;
`;var E=n(B,{},void 0,"Retour"),L=n(m,{},void 0,"Autoriser cet appareil"),U=n(b,{},void 0,"Pour autoriser Shadow sur cet appareil, entrez le code que vous venez de recevoir sur votre email :"),A=n("div",{className:"dot"}),T=n(S,{},void 0,"Enregistrer cet appareil et ne plus demander de code"),D=n(j,{id:"device",placeholder:"Mac de John",disabled:!0});let K=(0,d.inject)("PrismicStore")(r=(0,d.observer)(r=class extends s.Component{constructor(e){super(e),this.state={option:!0,pinNumbers:6,redirect:!1,url:"app.html?login",error:"",alreadySending:!1,codes:0},this.focusNext=this.focusNext.bind(this),this.onChange=this.onChange.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.toggleOption=this.toggleOption.bind(this),this.onPaste=this.onPaste.bind(this),this.redirectLogin=this.redirectLogin.bind(this),this.sendCode=this.sendCode.bind(this),this.resendCode=this.resendCode.bind(this)}componentDidMount(){f.default.clear();let e=c.default.hostname;e.length>34&&(e=`${e.substring(0,34)}...`),document.getElementById("device").value=e,document.getElementById("pinNumber_0").focus()}onChange(e){const t=e.target.value;/^[a-z0-9]+$/i.test(t)&&1===t.length?(e.target.value=t.toUpperCase(),this.focusNext(e)):e.target.value=""}onPaste(e){const t=/^[a-z0-9]+$/i,o=e.clipboardData.getData("Text").split("");for(let e=0;e<this.state.pinNumbers&&o[e]&&t.test(o[e]);e++)document.getElementById(`pinNumber_${e}`).value=o[e].toUpperCase(),e+1<this.state.pinNumbers&&setTimeout(()=>{document.getElementById(`pinNumber_${e+1}`).focus()},10)}onKeyUp(e){const t=e.target.id;if("Enter"===e.key&&this.sendCode(),/^[a-z0-9]+$/i.test(e.key)){if("Backspace"===e.key||"ArrowLeft"===e.key||8===e.keyCode)"Backspace"!==e.key&&8!==e.keyCode||(e.target.value=""),this.focusPrev(e);else if("ArrowRight"===e.key)this.focusNext(e,t);else if(e.keyCode>=48&&e.keyCode<=57||e.keyCode>=65&&e.keyCode<=90||e.keyCode>=96&&e.keyCode<=105){const o=e.key.toUpperCase();e.target.value=o,setTimeout(()=>{this.focusNext(e,t)},1)}}else e.preventDefault()}focusNext(e,t){if(e){const e=t.split("_");e[1]=parseInt(e[1])+1;const o=document.getElementById(e.join("_"));o&&o.focus()}}focusPrev(e){if(e){const t=e.target.id.split("_");t[1]=parseInt(t[1])-1;const o=document.getElementById(t.join("_"));o&&setTimeout(()=>{o.focus()},50)}}toggleOption(){this.setState({option:!this.state.option})}createPinNumber(){const e=[];for(let t=0;t<this.state.pinNumbers;t++)e.push(n(k,{onPaste:this.onPaste,id:`pinNumber_${t}`,onKeyDown:this.onKeyUp,maxLength:1},t));return e}sendCode(){var e,t=this;return(e=function*(){let e="";for(let o=0;o<t.state.pinNumbers;o++)e+=document.getElementById(`pinNumber_${o}`).value;const o=yield c.default.approval(e);200===o.status?(h.default.setItem("token",c.default.token),t.setState({redirect:!0,url:"app.html?home"})):404===o.status?(f.default.set(o.result),t.setState({redirect:!0,url:"app.html?login"})):t.setState({error:o.result})},function(){var t=e.apply(this,arguments);return new Promise(function(e,o){return function i(r,n){try{var s=t[r](n),a=s.value}catch(e){return void o(e)}if(!s.done)return Promise.resolve(a).then(function(e){i("next",e)},function(e){i("throw",e)});e(a)}("next")})})()}resendCode(){const{PrismicStore:e}=this.props;this.state.codes<3?(c.default.checkAuth().then(t=>{this.setState({error:e.get("code.email")})}),this.setState({alreadySending:!0,codes:this.state.codes+1}),setTimeout(()=>{this.setState({alreadySending:!1})},2e4)):this.redirectLogin()}redirectLogin(){this.setState({redirect:!0,url:"app.html?login"})}render(){return this.state.redirect?n(a.Redirect,{to:this.state.url}):n(u.default,{titleBar:!0,buttons:!1,display:!0,onLine:this.props.onLine},void 0,n(I,{onClick:this.redirectLogin},void 0,n(p.Ico,{type:"Arrow",style:{display:"inline"}}),E),n(x,{},void 0,L,U,n(v,{},void 0,h.default.getItem("email")),n(y,{},void 0,this.createPinNumber()),n(N,{show:this.state.error},void 0,n(_,{},void 0,this.state.error)),n(C,{show:!1,onClick:this.toggleOption},void 0,n(w,{className:this.state.option?"checked":void 0},void 0,A),T),n(z,{show:!0,onClick:()=>{document.getElementById("device").focus()}},void 0,D),n(P,{onClick:this.sendCode},void 0,n("p",{style:{marginLeft:24,marginTop:10}},void 0,"Valider")),n($,{disable:this.state.alreadySending,onClick:this.state.alreadySending?void 0:this.resendCode},void 0,"Renvoyer le code")))}})||r)||r;t.default=K,e.exports=t.default}});