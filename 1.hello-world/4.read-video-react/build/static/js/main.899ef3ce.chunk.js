(this.webpackJsonphelloworld=this.webpackJsonphelloworld||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var r=n(4),s=n.n(r),a=n(13),c=n.n(a),o=(n(18),n(19),n(0)),i=n.n(o),l=n(9),d=n(5),u=n(6),h=n(8),p=n(7),b=(n(21),n.p+"static/media/logo.6ce24c58.svg"),j=n(11);j.a.BarcodeReader.engineResourcePath="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode/dist/",j.a.BarcodeReader.organizationID="100448235";var f=j.a,m=n(2),v=(n(22),n(1)),x=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).bDestroyed=!1,r.scanner=null,r.elRef=s.a.createRef(),r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,e.t0=this.scanner,e.t0){e.next=6;break}return e.next=5,f.BarcodeScanner.createInstance();case 5:e.t0=e.sent;case 6:if(this.scanner=e.t0,!this.bDestroyed){e.next=10;break}return this.scanner.destroy(),e.abrupt("return");case 10:return this.scanner.setUIElement(this.elRef.current),this.scanner.onFrameRead=function(e){var n,r=Object(m.a)(e);try{for(r.s();!(n=r.n()).done;){var s=n.value;t.props.appendMessage({format:s.barcodeFormatString,text:s.barcodeText,type:"result"}),-1!==s.barcodeText.indexOf("Attention(exceptionCode")&&t.props.appendMessage({msg:s.exception.message,type:"error"})}}catch(a){r.e(a)}finally{r.f()}},e.next=14,this.scanner.open();case 14:e.next=20;break;case 16:e.prev=16,e.t1=e.catch(0),this.props.appendMessage({msg:e.t1.message,type:"error"}),console.error(e.t1);case 20:case"end":return e.stop()}}),e,this,[[0,16]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.bDestroyed=!0,this.scanner&&this.scanner.destroy()}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return Object(v.jsxs)("div",{ref:this.elRef,className:"component-barcode-scanner",children:[Object(v.jsx)("svg",{className:"dbrScanner-bg-loading",viewBox:"0 0 1792 1792",children:Object(v.jsx)("path",{d:"M1760 896q0 176-68.5 336t-184 275.5-275.5 184-336 68.5-336-68.5-275.5-184-184-275.5-68.5-336q0-213 97-398.5t265-305.5 374-151v228q-221 45-366.5 221t-145.5 406q0 130 51 248.5t136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5q0-230-145.5-406t-366.5-221v-228q206 31 374 151t265 305.5 97 398.5z"})}),Object(v.jsx)("svg",{className:"dbrScanner-bg-camera",style:{display:"none"},viewBox:"0 0 2048 1792",children:Object(v.jsx)("path",{d:"M1024 672q119 0 203.5 84.5t84.5 203.5-84.5 203.5-203.5 84.5-203.5-84.5-84.5-203.5 84.5-203.5 203.5-84.5zm704-416q106 0 181 75t75 181v896q0 106-75 181t-181 75h-1408q-106 0-181-75t-75-181v-896q0-106 75-181t181-75h224l51-136q19-49 69.5-84.5t103.5-35.5h512q53 0 103.5 35.5t69.5 84.5l51 136h224zm-704 1152q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z"})}),Object(v.jsx)("video",{className:"dbrScanner-video",playsInline:!0}),Object(v.jsx)("canvas",{className:"dbrScanner-cvs-drawarea"}),Object(v.jsx)("div",{className:"dbrScanner-cvs-scanarea",children:Object(v.jsx)("div",{className:"dbrScanner-scanlight",style:{display:"none"}})}),Object(v.jsx)("div",{className:"dbrScanner-poweredby",children:"Powered by Dynamsoft"})]})}}]),n}(s.a.Component),O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).scrollToBottom=function(){r.refDivMessage.current.scrollTop=r.refDivMessage.current.scrollHeight},r.appendMessage=function(e){switch(e.type){case"result":r.setState((function(t){return t.resultValue=e.format+": "+e.text,t.resultItems=t.resultItems.concat([{type:e.format+": ",text:e.text}]),t}));break;case"error":r.setState((function(t){return t.resultValue="Error Occurred! Check the error message in 'All results'!",t.resultItems=t.resultItems.concat([{type:"Error: ",text:e.msg}]),t}))}},r.showScanner=function(){r.setState({bShowScanner:!0})},r.refDivMessage=s.a.createRef(),r.state={libLoaded:!1,resultValue:"",resultItems:[],bShowScanner:!1},r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.BarcodeScanner.loadWasm();case 3:this.setState((function(e){return e.libLoaded=!0,e}),(function(){t.showScanner()})),e.next=10;break;case 6:throw e.prev=6,e.t0=e.catch(0),alert(e.t0.message),e.t0;case 10:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"helloWorld",children:[Object(v.jsxs)("h2",{children:["Hello World Sample for React",Object(v.jsx)("img",{src:b,className:"App-logo",alt:"logo"})]}),Object(v.jsx)("input",{type:"text",value:this.state.resultValue,readOnly:!0,className:"latest-result",placeholder:"The Last Read Barcode"}),Object(v.jsxs)("div",{id:"UIElement",children:[this.state.libLoaded?"":Object(v.jsx)("span",{style:{fontSize:"x-large"},children:"Loading Library..."}),this.state.bShowScanner?Object(v.jsx)(x,{appendMessage:this.appendMessage}):""]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{style:{float:"left"},children:"All Results:"}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{id:"results",ref:this.refDivMessage,children:Object(v.jsx)("ul",{children:this.state.resultItems.map((function(e,t){return Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{children:e.type}),Object(v.jsx)("span",{className:"resultText",children:e.text}),"                                "]},1e5+t)}))})})]})]})}}]),n}(s.a.Component);var g=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(O,{})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))};c.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(g,{})}),document.getElementById("root")),y()}},[[24,1,2]]]);
//# sourceMappingURL=main.899ef3ce.chunk.js.map