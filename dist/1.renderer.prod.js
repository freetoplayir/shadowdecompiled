webpackJsonp([1],{"./app/Containers/Feedback/comments.jsx":function(e,t,o){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,o,i){var n=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&n)for(var s in n)void 0===t[s]&&(t[s]=n[s]);else t||(t=n||{});if(1===a)t.children=i;else if(a>1){for(var d=Array(a),l=0;l<a;l++)d[l]=arguments[l+3];t.children=d}return{$$typeof:r,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}),a=o("./node_modules/react/index.js"),s=(c(a),c(o("./node_modules/styled-components/dist/styled-components.es.js"))),d=o("./node_modules/mobx-react/index.module.js"),l=o("./app/Components/index.jsx");function c(e){return e&&e.__esModule?e:{default:e}}var p=n("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"});const f=({showSpinner:e})=>n(u,{show:e,viewBox:"0 0 50 50"},void 0,p),u=s.default.svg`
  animation: rotate 2s linear infinite;
  width: 25px;
  height: 25px;
  margin-top: 47px;
  display: ${e=>e.show?"block":"none"};

  & .path {
    stroke: #fff;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`,h=s.default.div`
  width: 100%;
  height: 100%;
  color: #fff;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'roboto regular';
  :not(input):not(textarea),
  :not(input):not(textarea)::after,
  :not(input):not(textarea)::before {
    -webkit-user-select: none;
    user-select: none;
    cursor: default;
  }
`,g=s.default.div`
  position: absolute;
  top: 50px;
  left: 70px;
  z-index: 2;
  display: inline-block;
  color: rgba(255, 255, 255, 0.7);
  font-family: 'roboto regular';
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  width: calc(100% - 70px);

  &:hover {
    color: #fff;
  }
`,x=s.default.p`
  font-size: 14px;
  margin-left: 8px;
  display: inline;
`,m=s.default.p`
  font-size: 32px;
`,b=s.default.p`
  margin-top: 0px;
  width: 310px;
  text-align: center;
  font-size: 14px;
  font-family: 'roboto light';
`,v=s.default.div`
  width: 480px;
  height: 180px;
  margin-top: 30px;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
`,k=s.default.div`
  font-weight: bold;
  margin-top: 30px;
  margin-left: 60px;
  font-size: 16px;
  text-align: center;
  width: 360px;
`,y=s.default.div`
  width: 380px;
  height: 80px;
  border: solid 1px rgba(255, 255, 255, 0.1);
  margin-left: 50px;
  margin-top: 20px;
  cursor: text;
`,w=s.default.textarea`
  border-style: none;
  outline: none;
  resize: none;
  overflow: auto;
  width: 356px;
  height: 70px;
  background-color: inherit;
  font-size: 14px;
  margin-top: 8px;
  margin-left: 12px;
  color: #fff;
  cursor: text;
`,_=s.default.div`
  width: 112px;
  height: 42px;
  margin-top: 30px;
  border-radius: 8px;
  border: solid 1px rgba(255, 255, 255, 0.7);
  letter-spacing: -0.1px;
  font-size: 18px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.7);
  display: ${e=>e.show?"block":"none"};
  transition: border-color 0.5s ease-in-out, color 0.3s ease-in-out;
  &:hover {
    border-color: rgba(255, 255, 255, 1);
    color: rgba(255, 255, 255, 1);
  }
  text-align: center;
  padding-top: 8px;
`;let S=(0,d.inject)("PrismicStore")(i=(0,d.observer)(i=class extends a.Component{constructor(e){super(e),this.onChangeTextArea=(e=>{this.setState({comment:e.target.value})}),this.sendFeedback=(()=>{const{rating:e,sendFeedback:t}=this.props,{comment:o}=this.state;this.setState({showSpinner:!0}),setTimeout(()=>{t(e,o),this.setState({showSpinner:!1,comment:""})},1500)}),this.state={comment:"",showSpinner:!1}}render(){const{PrismicStore:e,backHome:t}=this.props;return n(a.Fragment,{},void 0,n(g,{onClick:t},void 0,n(l.Ico,{type:"Arrow",style:{display:"inline"}}),n(x,{},void 0,e.get("feedback.back_text_1"))),n(h,{},void 0,n(m,{},void 0,e.get("feedback.title")),n(b,{},void 0,e.get("feedback.subtitle")),n(v,{},void 0,n(k,{},void 0,e.get("feedback.suggestion_title")),n(y,{onClick:()=>document.getElementById("input").focus()},void 0,n(w,{id:"input",maxLength:"499",onChange:this.onChangeTextArea,placeholder:e.get("feedback.message_placeholder"),style:{cursor:"text"}}))),n(_,{show:!this.state.showSpinner,onClick:this.sendFeedback},void 0,e.get("feedback.button")),n(f,{showSpinner:this.state.showSpinner})))}})||i)||i;t.default=S,e.exports=t.default},"./app/Containers/Feedback/finish.jsx":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,r,n=(i="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,o,r){var n=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&n)for(var s in n)void 0===t[s]&&(t[s]=n[s]);else t||(t=n||{});if(1===a)t.children=r;else if(a>1){for(var d=Array(a),l=0;l<a;l++)d[l]=arguments[l+3];t.children=d}return{$$typeof:i,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}),a=o("./node_modules/react/index.js"),s=(c(a),c(o("./node_modules/styled-components/dist/styled-components.es.js"))),d=o("./node_modules/mobx-react/index.module.js"),l=o("./app/Components/index.jsx");function c(e){return e&&e.__esModule?e:{default:e}}const p=s.default.div`
  width: 100%;
  height: 100%;
  color: #fff;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'roboto regular';
  user-select: none;
  cursor: default;
`,f=s.default.div`
  margin-top: 30px;
  display: inline-block;
  color: rgba(255, 255, 255, 0.7);
  font-family: 'roboto regular';
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  width: 100%;
  text-align: center;
  &:hover {
    color: #fff;
  }
`,u=s.default.p`
  font-size: 14px;
  margin-left: 8px;
  display: inline;
`,h=s.default.div`
  font-size: 32px;
`,g=s.default.div`
  width: 480px;
  text-align: center;
  font-size: 14px;
  font-family: 'roboto light';
  margin-top: 20px;
`;let x=(0,d.inject)("PrismicStore")(r=(0,d.observer)(r=class extends a.Component{render(){const{PrismicStore:e,backHome:t}=this.props;return n(a.Fragment,{},void 0,n(p,{},void 0,n(h,{},void 0,e.get("feedback.thanks_title")),n(g,{},void 0,e.get("feedback.confirmation")),n(f,{onClick:t},void 0,n(l.Ico,{type:"Arrow",style:{display:"inline"}}),n(u,{},void 0,e.get("feedback.back_text_2")))))}})||r)||r;t.default=x,e.exports=t.default},"./app/Containers/Feedback/index.jsx":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,r=(i="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,o,r){var n=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&n)for(var s in n)void 0===t[s]&&(t[s]=n[s]);else t||(t=n||{});if(1===a)t.children=r;else if(a>1){for(var d=Array(a),l=0;l<a;l++)d[l]=arguments[l+3];t.children=d}return{$$typeof:i,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}),n=o("./node_modules/react/index.js"),a=(g(n),g(o("./node_modules/styled-components/dist/styled-components.es.js"))),s=o("./node_modules/react-router/es/index.js"),d=g(o("./app/Containers/Feedback/ratings.jsx")),l=g(o("./app/Containers/Feedback/comments.jsx")),c=g(o("./app/Containers/Feedback/finish.jsx")),p=g(o("./app/Stores/GapStore.js")),f=o("./app/Config.js"),u=g(o("./app/images/poly_background_black.jpg")),h=g(o("./app/Containers/Layout/index.jsx"));function g(e){return e&&e.__esModule?e:{default:e}}const x=a.default.div`
  background-image: url(${u.default});
  background-size: cover;
  width: 100%;
  height: 100%;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
  z-index: 1;
`;var m=r(s.Redirect,{to:"app.html?home"}),b=r(x,{});t.default=class extends n.Component{constructor(){super(),this.setRating=(e=>{p.default.review.canCommentReview?this.setState({rating:e,showComment:!0,showRating:!1}):(this.setState({rating:e,showRating:!1}),this.sendFeedback(e)),p.default.review.canCommentReview=!1}),this.sendFeedback=((e,t="")=>{p.default.sendFeedback({rating:e,comment:t,app_version:`${f.VERSION}`,renderer_version:`${f.APP_VERSION}`}),this.setState({showComment:!1,showRating:!1,rating:0})}),this.redirect=(()=>{this.setState({redirect:!0})}),this.state={showRating:!0,showComment:!1,rating:0,redirect:!1}}render(){const{showRating:e,showComment:t,rating:o,redirect:i}=this.state,{onLine:n}=this.props;return i?m:r(h.default,{titleBar:!0,customStyles:{backgroundImage:"none",backgroundColor:"#292929"},theme:"dark",onLine:n},void 0,r("div",{style:{position:"absolute",zIndex:1,width:"100%",height:"100%",overflow:"hidden",top:0}},void 0,b),e&&r(d.default,{sendFeedback:this.setRating,backHome:this.redirect}),t&&r(l.default,{rating:o,sendFeedback:this.sendFeedback,backHome:this.redirect}),!e&&!t&&r(c.default,{backHome:this.redirect}))}},e.exports=t.default},"./app/Containers/Feedback/ratings.jsx":function(e,t,o){"use strict";var i,r,n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s=(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,o,i){var r=e&&e.defaultProps,n=arguments.length-3;if(t||0===n||(t={}),t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});if(1===n)t.children=i;else if(n>1){for(var d=Array(n),l=0;l<n;l++)d[l]=arguments[l+3];t.children=d}return{$$typeof:a,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}),d=o("./node_modules/react/index.js"),l=(f(d),f(o("./node_modules/styled-components/dist/styled-components.es.js"))),c=o("./node_modules/mobx-react/index.module.js"),p=o("./app/Components/index.jsx");function f(e){return e&&e.__esModule?e:{default:e}}const u=l.default.div`
  width: 100%;
  height: 100%;
  color: #fff;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "roboto regular";
  user-select: none;
  cursor: default;
`,h=l.default.div`
  position: absolute;
  top: 50px;
  left: 70px;
  z-index: 2;
  display: inline-block;
  color: rgba(255, 255, 255, 0.7);
  font-family: "roboto regular";
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  width: calc(100% - 70px);

  &:hover {
    color: #fff;
  }
`,g=l.default.p`
  font-size: 14px;
  margin-left: 8px;
  display: inline;
`,x=l.default.div`
  width: 100%;
  font-weight: 300;
  font-size: 32px;
  text-align: center;
  color: rgb(255, 255, 255);
`,m=l.default.div`
  font-size: 14px;
  text-align: center;
  color: rgb(255, 255, 255);
  font-family: "roboto light";
  margin-top: 20px;
  width: 310px;
`,b=l.default.div`
  width: 480px;
  height: 159px;
  margin-top: 30px;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.15);
  border: solid 1px tgb(255, 255, 255);
`,v=l.default.p`
  font-size: 16px;
  position: absolute;
  text-align: center;
  margin-top: 30px;
  width: inherit;
`,k=l.default.div`
  margin-top: 69px;
  position: absolute;
  margin-left: 123px;
  height: 27px;
  display: flex;
`,y=l.default.p`
  position: absolute;
  margin-top: 115px;
  width: inherit;
  text-align: center;
`,w=l.default.div`
  width: 112px;
  height: 42px;
  margin-top: 30px;
  border-radius: 8px;
  border: solid 1px rgba(255, 255, 255, 0.7);
  letter-spacing: -0.1px;
  font-size: 18px;
  cursor: default;
  color: rgba(255, 255, 255, 0.7);
  display: ${e=>e.show?"block":"none"};
  transition: border-color 0.5s ease-in-out, color 0.3s ease-in-out;

  ${e=>e.active&&"cursor: pointer; &:hover { border-color: rgba(255, 255, 255, 1);color: rgba(255, 255, 255, 1)};"} text-align: center;
  padding-top: 8px;
`,_=l.default.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 46px;
  height: 27px;
`,S=l.default.div`
  position: absolute;
  transition: opacity 0.1s ease-in-out;
`,j=(0,l.default)(S)`
  z-index: 1;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`,C=(0,l.default)(S)`
  opacity: 1;
  &:hover {
    z-index: 0;
    opacity: 0;
  }
`;var z=s("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"});const F=({showSpinner:e})=>s(P,{show:e,viewBox:"0 0 50 50"},void 0,z),P=l.default.svg`
  animation: rotate 2s linear infinite;
  width: 25px;
  height: 25px;
  margin-top: 47px;
  display: ${e=>e.show?"block":"none"};

  & .path {
    stroke: #fff;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;var $=s(p.Ico,{type:"FilledStar",height:27,width:28}),R=s(p.Ico,{type:"Star",height:27,width:28});let I=(0,c.inject)("PrismicStore","ErrorStore")(i=(0,c.observer)((r=class extends d.Component{constructor(e){super(e),n.call(this);const{PrismicStore:t}=e;this.state={rating:-1,ratingLimit:5,ratingText:"",showSpinner:!1}}componentDidMount(){this.highlightStars(-1)}setRating(e){this.setState({rating:e})}sendFeedback(e){const{PrismicStore:t,sendFeedback:o}=this.props;this.setState({showSpinner:!0}),setTimeout(()=>{o(e),this.setState({rating:-1,ratingLimit:5,ratingText:t.get("feedback.rating_text_3"),showSpinner:!1}),this.highlightStars(2)},1500)}render(){const{PrismicStore:e,backHome:t}=this.props;return s(d.Fragment,{},void 0,s(h,{onClick:t},void 0,s(p.Ico,{type:"Arrow",style:{display:"inline"}}),s(g,{},void 0,e.get("feedback.back_text_1"))),s(u,{},void 0,s(x,{},void 0,e.get("feedback.title")),s(m,{},void 0,e.get("feedback.subtitle")),s(b,{},void 0,s(v,{},void 0,e.get("feedback.session_title")),s(k,{},void 0,this.createStars()),s(y,{},void 0,this.state.ratingText)),s(w,{active:this.state.rating>-1,show:!this.state.showSpinner,onClick:()=>this.state.rating>-1&&this.sendFeedback(this.state.rating)},void 0,e.get("feedback.button")),s(F,{showSpinner:this.state.showSpinner})))}},n=function(){this.highlightStars=(e=>{const{PrismicStore:t}=this.props;for(let o=0;o<this.state.ratingLimit;o++){let i=document.getElementById(`starenable_${o}`),r=document.getElementById(`stardisable_${o}`),n="";switch(e){case 0:n=t.get("feedback.rating_text_1");break;case 1:n=t.get("feedback.rating_text_2");break;case 2:n=t.get("feedback.rating_text_3");break;case 3:n=t.get("feedback.rating_text_4");break;case 4:n=t.get("feedback.rating_text_5");break;default:n=this.state.ratingText}this.setState({ratingText:n}),r&&i&&(o<=e?(r.style.opacity=0,i.style.opacity=1):(r.style.opacity=1,i.style.opacity=0))}}),this.createStars=(()=>{const{PrismicStore:e}=this.props,t=[];for(let o=0;o<this.state.ratingLimit;o++)t.push(s(_,{onMouseEnter:()=>this.highlightStars(o),onMouseLeave:()=>this.highlightStars(this.state.rating-1),onClick:()=>{let t="";switch(o){case 0:t=e.get("feedback.rating_text_1");break;case 1:t=e.get("feedback.rating_text_2");break;case 2:t=e.get("feedback.rating_text_3");break;case 3:t=e.get("feedback.rating_text_4");break;case 4:t=e.get("feedback.rating_text_5");break;default:t=this.state.ratingText}this.setState({rating:o+1,ratingText:t})}},o,s(j,{id:`starenable_${o}`},void 0,$),s(C,{id:`stardisable_${o}`},void 0,R)));return t})},i=r))||i)||i;t.default=I,e.exports=t.default}});