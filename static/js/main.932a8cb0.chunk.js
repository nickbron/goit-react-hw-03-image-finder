(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{38:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=(n(38),n(19)),s=n(11),p=n.n(s),l=n(14),u=n(7),d=n(8),h=n(10),g=n(9),b=n(15),m=(n(40),n(3));var f=Object(m.a)("header",{target:"e1khanco4"})({name:"geu48e",styles:"top:0;left:0;position:sticky;z-index:1100;display:flex;justify-content:center;align-items:center;padding-right:24px;padding-left:24px;padding-top:12px;padding-bottom:12px;color:#fff;background-color:#3f51b5;box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)"}),x=Object(m.a)("form",{target:"e1khanco3"})({name:"1rcv33n",styles:"display:flex;align-items:center;max-width:600px;background-color:#fff;border-radius:3px;overflow:hidden"}),j=Object(m.a)("button",{target:"e1khanco2"})({name:"1a3m8tj",styles:"display:inline-block;width:48px;height:48px;border:0;background-image:url('https://image.flaticon.com/icons/svg/149/149852.svg');background-size:40%;background-repeat:no-repeat;background-position:center;opacity:0.6;transition:opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;outline:none;&:hover{opacity:1;}"}),v=Object(m.a)("span",{target:"e1khanco1"})({name:"jnnlmv",styles:"position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;clip-path:inset(50%);border:0"}),O=Object(m.a)("input",{target:"e1khanco0"})({name:"g6sr3k",styles:"display:inline-block;width:100%;font:inherit;font-size:20px;border:none;outline:none;padding-left:4px;padding-right:4px;&::placeholder{font:inherit;font-size:18px;}"}),y=n(1),w=function(e){var t=e.onSearch;return Object(y.jsx)(f,{children:Object(y.jsxs)(x,{onSubmit:function(e){e.preventDefault(),""!==e.target.elements.pictureName.value.trim()?t(e.target.elements.pictureName.value):b.b.error("\u0414\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")},autoComplete:"off",children:[Object(y.jsx)(j,{type:"submit",children:Object(y.jsx)(v,{children:"Search"})}),Object(y.jsx)(O,{name:"pictureName",className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},k=n(29),S=n.n(k),C=function(){var e=Object(l.a)(p.a.mark((function e(t,n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"image_type=photo$orientation=horizontal&safesearch=true&per_page=12",e.next=3,S.a.get("".concat("https://pixabay.com/api/","?key=").concat("22624023-cde2aba775d295bec8b1b2952","&q=").concat(t,"&").concat("image_type=photo$orientation=horizontal&safesearch=true&per_page=12","&page=").concat(n));case 3:return a=e.sent,e.abrupt("return",a.data.hits);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var L=Object(m.a)("li",{target:"e1af4p3x1"})({name:"ia8atm",styles:"border-radius:2px;box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)"}),z=Object(m.a)("img",{target:"e1af4p3x0"})({name:"1plt1o8",styles:"width:100%;height:260px;object-fit:cover;transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);&:hover{transform:scale(1.03);cursor:zoom-in;}"}),M=function(e){var t=e.item,n=e.imageLarge,a=e.onSelect;return Object(y.jsx)(L,{children:Object(y.jsx)(z,{src:t.webformatURL,alt:"",onClick:function(){return a(n)}})},t.id)};var N=Object(m.a)("ul",{target:"eqr0ccf0"})({name:"1bhb8yv",styles:"display:grid;max-width:calc(100vw - 48px);grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));grid-gap:16px;margin-top:0;margin-bottom:0;padding:0;list-style:none;margin-left:auto;margin-right:auto"}),I=function(e){var t=e.pic,n=e.onSelect;return Object(y.jsx)(N,{children:t.map((function(e){return Object(y.jsx)(M,{item:e,imageLarge:e.largeImageURL,onSelect:n},e.webformatURL)}))})};var U=Object(m.a)("button",{target:"e29pg7m0"})({name:"wpzo6k",styles:"border:none;background:rgb(0, 166, 243);color:#ffffff;border-radius:15px;padding:15px 35px;margin:0 auto;display:block"}),D=function(e){var t=e.onClick;return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(U,{type:"button",onClick:t,children:"Load more"})})};var F,R=Object(m.a)("div",{target:"e1d5aw6f1"})({name:"v6xvz3",styles:"position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.8)"}),B=Object(m.a)("div",{target:"e1d5aw6f0"})({name:"sve88p",styles:"max-width:calc(100vw - 48px);max-height:calc(100vh - 24px)"}),E=document.querySelector("#modal-root"),_=function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.onOverlayClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(y.jsx)(R,{onClick:this.onOverlayClick,children:Object(y.jsx)(B,{children:this.props.children})}),E)}}]),n}(a.Component),q=n(30),A=n.n(q),K=n(31),P=n(32).a.div(F||(F=Object(K.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n"]))),T=function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(y.jsx)(P,{children:Object(y.jsx)(A.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})})}}]),n}(a.Component),H=function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={pictureName:null,pictures:[],page:1,selectedImage:null,showModal:!1},e.fetchData=Object(l.a)(p.a.mark((function t(){var n,a,r,o,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state,a=n.pictureName,r=n.page,t.next=3,C(a,r);case 3:return o=t.sent,c=o.map((function(e){return{id:e.id,largeImageURL:e.largeImageURL,webformatURL:e.webformatURL}})),t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)}))),e.scroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleBarSubmit=function(t){e.setState({pictureName:t})},e.handleSelectImage=function(t){e.setState({selectedImage:t}),e.toggleModal()},e.showMore=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this,a=this.fetchData();this.scroll(),t.pictureName!==this.state.pictureName&&a.then((function(e){n.setState({pictures:e})})),t.page!==this.state.page&&a.then((function(e){n.setState({pictures:[].concat(Object(i.a)(t.pictures),Object(i.a)(e))})}))}},{key:"render",value:function(){var e=this.state,t=e.pictures,n=e.showModal,a=e.selectedImage;return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(w,{onSearch:this.handleBarSubmit}),t.length>0&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(T,{}),Object(y.jsx)(I,{pic:t,onSelect:this.handleSelectImage}),";",Object(y.jsx)(D,{onClick:this.showMore}),n&&Object(y.jsx)(_,{onClose:this.toggleModal,children:Object(y.jsx)("img",{src:a,alt:""})})]}),Object(y.jsx)(b.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}}]),n}(a.Component);c.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(H,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.932a8cb0.chunk.js.map