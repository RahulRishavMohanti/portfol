(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(47)},28:function(e,t,n){},29:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),o=n(19),c=n.n(o),i=(n(28),n(29),n(30),n(20)),r=n(11),s=n(2),d=n(3),u=n(5),h=n(4),m=n(6),w=(n(31),n(32),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"bighead",style:{color:this.props.col}},this.props.title)}}]),t}(l.Component)),v=n(7),f=(n(33),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleScroll=n.handleScroll.bind(Object(v.a)(n)),n.state={x:20,y:100,styl:"AvenirNext-Bold",scrolling:!1},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){this.setState({styl:"AvenirNext-BoldItalic"});var t=Math.min(4,1+.005*window.scrollY),n=Math.max(26,100-.1*window.scrollY);this.setState({x:t}),this.setState({y:n}),26===n&&this.setState({styl:"AvenirNext-Bold"}),console.log(window.scrollY)}},{key:"render",value:function(){return a.a.createElement("div",{className:"bighead2",style:{letterSpacing:this.state.x+"vw",marginLeft:this.state.y+"vw",fontFamily:this.state.styl}},this.props.title)}}]),t}(l.Component)),b=(n(34),n(35),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"scroll-down svg",id:"home-scroll-down"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink",version:"1.1",id:"Layer_2",x:"0px",y:"0px",viewBox:"0 0 25.166666 37.8704414",enableBackground:"new 0 0 25.166666 37.8704414"},a.a.createElement("path",{className:"stroke",fill:"none",stroke:"#c7c4b8",strokeWidth:"2.5",strokeMiterlimit:"10",d:"M12.5833445 36.6204414h-0.0000229C6.3499947 36.6204414 1.25 31.5204487 1.25 25.2871208V12.5833216C1.25 6.3499947 6.3499951 1.25 12.5833216 1.25h0.0000229c6.2333269 0 11.3333216 5.0999947 11.3333216 11.3333216v12.7037992C23.916666 31.5204487 18.8166714 36.6204414 12.5833445 36.6204414z"}),a.a.createElement("path",{className:"scroller",fill:"#c7c4b8",d:"M13.0833359 19.2157116h-0.9192753c-1.0999985 0-1.9999971-0.8999996-1.9999971-1.9999981v-5.428606c0-1.0999994 0.8999987-1.9999981 1.9999971-1.9999981h0.9192753c1.0999985 0 1.9999981 0.8999987 1.9999981 1.9999981v5.428606C15.083334 18.315712 14.1833344 19.2157116 13.0833359 19.2157116z"})),a.a.createElement("i",{className:"icon icon-arrow-down"}))}}]),t}(l.Component)),p=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleScroll=n.handleScroll.bind(Object(v.a)(n)),n.state={wid:100},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){var t=Math.max(0,100-.1*window.scrollY);this.setState({wid:t})}},{key:"render",value:function(){return a.a.createElement("div",{className:"wc",style:{width:this.state.wid+"%"}},a.a.createElement(b,null))}}]),t}(l.Component),y=(n(36),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleScroll=n.handleScroll.bind(Object(v.a)(n)),n.state={opac:1},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){window.scrollY>1273?this.setState({opac:1-3e-4*window.scrollY}):this.setState({opac:1})}},{key:"render",value:function(){return a.a.createElement("div",{className:"bc",style:{opacity:this.state.opac}})}}]),t}(l.Component)),j=(n(37),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleScroll=n.handleScroll.bind(Object(v.a)(n)),n.state={wid:100},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){if(window.scrollY>1100){var t=Math.min(0,.01*window.scrollY-61);this.setState({wid:t}),console.log(t)}}},{key:"render",value:function(){return a.a.createElement("div",{className:"whitebanner",style:{marginTop:this.state.wid+"vh"}},this.props.content)}}]),t}(l.Component)),O=(n(38),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleScroll=n.handleScroll.bind(Object(v.a)(n)),n.state={col:"#222222"},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){window.scrollY>6098?this.setState({col:"white"}):this.setState({col:"#222222"})}},{key:"render",value:function(){return a.a.createElement("div",{className:"grid-container",style:{color:this.state.col}},a.a.createElement("div",{className:"grid-item",style:{gridRowStart:1,gridRowEnd:4,textAlign:"center"}},"HTML"),a.a.createElement("div",{className:"grid-item",style:{gridRowStart:1,gridRowEnd:4,gridColumn:3,textAlign:"center",verticalAlign:"middle"}},"C++"),a.a.createElement("div",{className:"grid-item",style:{gridColumnStart:4,gridColumnEnd:6,gridRowStart:1,gridRowEnd:4,textAlign:"center"}},"Python"))}}]),t}(l.Component)),S=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(p,null),a.a.createElement(j,{content:"Hello, I am Rahul, Software Developer \nbased in India. I work on projects that \ninterest me."}),a.a.createElement(w,{title:"RAHUL RISHAV"}),a.a.createElement(f,{title:"MOHANTI"}),a.a.createElement(y,null),a.a.createElement(O,null))}}]),t}(l.Component);var E=function(){return a.a.createElement(i.a,null,a.a.createElement("div",null,a.a.createElement(r.a,{exact:!0,path:"/",component:S})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.e78d0e5d.chunk.js.map