(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4227],{24253:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var i=s(54503),a=s(18730),r=s.n(a),o=s(14517);function n(e){let{offset:t,children:s,shadow:a}=e;return(0,i.jsxs)("div",{style:{top:t??0},className:"jsx-8d6c1b2e1604b381 "+((0,o.W)({shadow:a})||""),children:[s,(0,i.jsx)(r(),{id:"8d6c1b2e1604b381",children:"div.jsx-8d6c1b2e1604b381{background:#fff;position:-webkit-sticky;position:sticky;z-index:1000}@media(max-width:950px){div.jsx-8d6c1b2e1604b381{height:152px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}}div.shadow.jsx-8d6c1b2e1604b381{-webkit-box-shadow:rgba(0,0,0,.06)0px 6px 20px;-moz-box-shadow:rgba(0,0,0,.06)0px 6px 20px;box-shadow:rgba(0,0,0,.06)0px 6px 20px}.mobile-menu-visible div.shadow.jsx-8d6c1b2e1604b381{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}"})]})}},24227:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return Q},default:function(){return X}});var i=s(54503),a=s(10786),r=s(55843),o=s.n(r),n=s(47118),l=s(98881),c=s(49161),d=s(64837),x=s.n(d);class b extends c.PureComponent{constructor(e){super(),this.state={selected:e.data[0]}}componentDidMount(){let e=new(x()),{anchor:t,data:s}=this.props;if(t){let t=s.map(t=>e.slug(t)).indexOf(window.location.hash.slice(1));-1!==t&&this.setState({selected:s[t]})}}componentDidUpdate(e){let{data:t}=this.props;t!==e.data&&this.setState({selected:t[0]})}onSelect=e=>{let{data:t,selected:s,anchor:i}=this.props;-1!==t.indexOf(e)&&s!==e&&(i&&setTimeout(()=>{let t=new(x());o().replace(window.location.pathname,`${window.location.pathname}#${t.slug(e)}`,{shallow:!0})},300),this.setState({selected:e}))};render(){let{data:e,children:t}=this.props;if(!e.length)return null;let{selected:s}=this.state,i=e.indexOf(s);return(-1===i&&(s=e[0]),"function"!=typeof t)?null:t(this.onSelect,s,i)}}function p(e){return(0,i.jsx)(b,{...e})}var h=s(18730),m=s.n(h),f=s(95763),g=s(19070),u=s(8905);function w(){return(0,i.jsxs)(f.Z,{center:!0,region:"showcase",children:[(0,i.jsx)("div",{className:"jsx-fa8539efcca401a showcase-title",children:(0,i.jsx)(g.Z,{description:(0,i.jsxs)("span",{className:"jsx-fa8539efcca401a",children:["Meet hundreds of beautiful websites"," ",(0,i.jsx)("br",{className:"jsx-fa8539efcca401a display-mobile"}),"built with Next.js by ",u.Fp]}),id:"showcase",margin:"0 0 2rem 0",title:"Showcase"})}),(0,i.jsx)(m(),{id:"fa8539efcca401a",children:".showcase-title.jsx-fa8539efcca401a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding-top:2rem;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}"})]})}var j=s(37463),y=s(54221),k=s(10179),v=function(e){let{color:t}=e;return(0,i.jsx)("svg",{height:"8px",viewBox:"0 0 12 8",width:"12px",children:(0,i.jsx)("g",{fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1",children:(0,i.jsx)("g",{fill:t||"inherit",fillRule:"nonzero",transform:"translate(-767.000000, -1776.000000)",children:(0,i.jsx)("g",{transform:"translate(767.000000, 1776.000000)",children:(0,i.jsx)("polygon",{points:"10 7.4 6 3.4 2 7.4 0.6 6 6 0.6 11.4 6"})})})})})},z=function(e){let{color:t}=e;return(0,i.jsx)("svg",{height:"14px",version:"1.1",viewBox:"0 -2 16 16",width:"14px",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("g",{fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1",children:(0,i.jsx)("g",{fill:t||"#FD3B47",fillRule:"nonzero",transform:"translate(-917.000000, -313.000000)",children:(0,i.jsx)("g",{transform:"translate(504.000000, 253.000000)",children:(0,i.jsx)("g",{transform:"translate(413.000000, 60.000000)",children:(0,i.jsx)("path",{d:"M14.682,1.318 C12.925,-0.439 10.075,-0.439 8.318,1.318 C8.197,1.439 8.104,1.577 8,1.707 C7.896,1.577 7.803,1.439 7.682,1.318 C5.925,-0.439 3.075,-0.439 1.318,1.318 C-0.439,3.075 -0.439,5.925 1.318,7.682 L8,14 L14.682,7.682 C16.439,5.925 16.439,3.075 14.682,1.318 Z"})})})})})})},_=s(23872);let C={submitShowcase:"https://github.com/vercel/next.js/discussions/10640",license:"https://github.com/vercel/next.js/blob/canary/license.md"};var N=s(84165),S=s.n(N);function M(e){return e.split(/[?#]/)[0]}function E(e){let{highlighted:t,siteData:s,flex:a,isTablet:o}=e,n=(0,r.useRouter)(),l=e=>{if("A"===e.target.nodeName)return;let t=s.internalUrl;n.push("/showcase/[item]",`/showcase/${t}`)};return(0,i.jsxs)("div",{className:m().dynamic([["982d363b6827a844",[a||1,24,24,24,24]]])+" "+`no-tap-callout site-container${t&&!o?" highlighed":""}`,children:[(0,i.jsx)("div",{className:m().dynamic([["982d363b6827a844",[a||1,24,24,24,24]]])+" content",children:(0,i.jsxs)("button",{onClick:l,type:"button",className:m().dynamic([["982d363b6827a844",[a||1,24,24,24,24]]])+" preview",children:[(0,i.jsx)(S(),{alt:`preview for ${s.title}`,fill:!0,placeholder:"blur",priority:s.priority,quality:s.quality||(t?65:55),sizes:t?"(max-width: 480px) 100vw, 50vw":"(max-width: 480px) 100vw, 33vw",src:s.src,style:{objectFit:"cover"}}),(0,i.jsx)("div",{className:m().dynamic([["982d363b6827a844",[a||1,24,24,24,24]]])+" shadow",children:(0,i.jsxs)("div",{className:m().dynamic([["982d363b6827a844",[a||1,24,24,24,24]]])+" info",children:[(0,i.jsx)("h3",{className:m().dynamic([["982d363b6827a844",[a||1,24,24,24,24]]])+" "+((t&&!o?"f2":"f4")||""),children:s.title}),(0,i.jsx)("a",{href:s.link,rel:"noopener noreferrer",target:"_blank",className:m().dynamic([["982d363b6827a844",[a||1,24,24,24,24]]])+" f5",children:M(s.link)})]})})]})}),(0,i.jsx)(m(),{id:"982d363b6827a844",dynamic:[a||1,24,24,24,24],children:`.site-container.__jsx-style-dynamic-selector{position:relative;-webkit-box-flex:${a||1};-webkit-flex:${a||1};-moz-box-flex:${a||1};-ms-flex:${a||1};flex:${a||1};height:unset}.content.__jsx-style-dynamic-selector{position:relative;width:100%;height:100%}.preview.__jsx-style-dynamic-selector{position:absolute;top:24px;bottom:24px;left:24px;right:24px;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-position:center top;background-repeat:no-repeat;-webkit-box-shadow:0 4px 12px 0 rgba(0,0,0,.08),0 0 0 1px rgba(0,0,0,.02);-moz-box-shadow:0 4px 12px 0 rgba(0,0,0,.08),0 0 0 1px rgba(0,0,0,.02);box-shadow:0 4px 12px 0 rgba(0,0,0,.08),0 0 0 1px rgba(0,0,0,.02);-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;text-align:center;overflow:hidden;background-color:#fff;border:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;font-family:var(--sans-font);font-size:16px;cursor:-webkit-zoom-in;cursor:-moz-zoom-in;cursor:zoom-in;height:-webkit-calc(100% - 48px);height:-moz-calc(100% - 48px);height:calc(100% - 48px);width:-webkit-calc(100% - 48px);width:-moz-calc(100% - 48px);width:calc(100% - 48px)}.preview.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{line-height:29px}.preview.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{line-height:23px}.preview.__jsx-style-dynamic-selector .shadow.__jsx-style-dynamic-selector{position:absolute;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;height:100%;color:white;text-shadow:0 2px 20px rgba(0,0,0,.5);background:-webkit-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,.3));background:-moz-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,.3));background:-o-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,.3));background:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,.3));-webkit-transition:opacity.2s ease;-moz-transition:opacity.2s ease;-o-transition:opacity.2s ease;transition:opacity.2s ease;opacity:0}.info.__jsx-style-dynamic-selector{width:100%;padding:1.5rem;background:rgba(0,0,0,.8);text-align:center;-webkit-transition:opacity.6s ease;-moz-transition:opacity.6s ease;-o-transition:opacity.6s ease;transition:opacity.6s ease;opacity:0}.preview.__jsx-style-dynamic-selector:hover{-webkit-box-shadow:0 10px 20px 0 rgba(0,0,0,.12);-moz-box-shadow:0 10px 20px 0 rgba(0,0,0,.12);box-shadow:0 10px 20px 0 rgba(0,0,0,.12)}.preview.__jsx-style-dynamic-selector:hover .shadow.__jsx-style-dynamic-selector{opacity:1}.preview.__jsx-style-dynamic-selector:hover .info.__jsx-style-dynamic-selector{opacity:1}`})]},`site-${s.internalUrl}`)}function $(e){return("marketing"===e&&(e="e-commerce"),"all"===e)?_.b4:_.b4.filter(t=>t.tags&&t.tags.includes(e))}let L="All",W=$("all"),I=(e,t)=>{let{index:s}=e;if(t<3)return 1;let i=1,a=s*t;for(let e=0;e<t;++e)if(W[a+e]&&W[a+e].highlighted){i*=t-1;break}return i};function R(){return(0,i.jsx)("div",{style:{flex:1,height:"100%"}})}let Z=e=>{window.scrollTo({top:e,left:0,behavior:"smooth"})},O=e=>function(t){let{index:s,isScrolling:a,isVisible:r,style:o}=t,n=[],l=null,c="row",d=s*e;for(let t=0;t<e;++t){let s=W[d+t];if(!s){e>1&&n.push((0,i.jsx)(R,{},`site-${d+t}`));continue}!l&&s.highlighted&&3===e?(l=(0,i.jsx)(E,{flex:e-1,highlighted:!0,isScrolling:a,isTablet:e<3,isVisible:r,siteData:s},`site-${s.internalUrl}`),c=1===s.highlighted?"row":"row-reverse"):n.push((0,i.jsx)(E,{isScrolling:a,isTablet:e<3,isVisible:r,siteData:s},`site-${s.internalUrl}`))}return(0,i.jsx)("div",{style:{display:"flex",flexDirection:1===e?"column":c,...(0,y.GG)("padding",0,24),...o},children:l?[l,(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",flex:1},children:n},"column-normal")]:n},`row-${s}`)},D=O(3),T=O(2),U=O(1);class F extends c.Component{state={width:1};stopCachedIndex=0;startCachedIndex=1/0;lastColumnCount=3;resize=()=>{this.setState({width:Math.min(window.innerWidth,1440)})};updateCategory(e){e!==L&&(L=e,W=$(e.toLowerCase()),window.scrollY>192&&Z(192))}componentDidMount(){this.updateCategory(this.props.category),window.addEventListener("resize",this.resize),this.resize()}componentWillUnmount(){window.removeEventListener("resize",this.resize)}UNSAFE_componentWillReceiveProps(e){this.updateCategory(e.category)}overscanIndicesGetter=(e,t)=>{let{cellCount:s,overscanCellsCount:i,startIndex:a,stopIndex:r}=e,o=Math.max(0,Math.min(a-i,this.startCachedIndex));this.startCachedIndex=Math.max(a-50,Math.min(this.startCachedIndex,o));let n=Math.min(s-1,Math.max(r+i,this.stopCachedIndex));return this.stopCachedIndex=Math.min(r+50,Math.max(this.stopCachedIndex,n)),{overscanStartIndex:o,overscanStopIndex:n}};render(){let{width:e}=this.state,t=e<960,s=e<640;return(0,i.jsx)(f.Z,{center:!0,gray:!0,wide:!0,children:(0,i.jsxs)("div",{className:"jsx-6b4b92a365cbdac7 container",children:[(0,i.jsx)(m(),{id:"6b4b92a365cbdac7",children:".container.jsx-6b4b92a365cbdac7{margin:1rem 0 6rem}.spacer.jsx-6b4b92a365cbdac7{margin-top:2rem}.icon-label.jsx-6b4b92a365cbdac7{margin-right:.625rem}.flex-center.jsx-6b4b92a365cbdac7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}"}),(0,i.jsx)(j._K,{serverHeight:800,children:a=>{let{height:r,isScrolling:o,onChildScroll:n,scrollTop:l}=a;return(0,i.jsx)(j.aV,{autoHeight:!0,estimatedRowSize:500,height:r,isScrolling:o,onScroll:n,overscanIndicesGetter:e=>this.overscanIndicesGetter(e,t),overscanRowCount:5,ref:e=>{let i=s?1:t?2:3;i!==this.lastColumnCount&&(this.lastColumnCount=i,e.recomputeRowHeights())},rowCount:Math.ceil(W.length/(s?1:t?2:3)),rowHeight:e=>268*I(e,s?1:t?2:3),rowRenderer:s?U:t?T:D,scrollTop:l,style:{willChange:"",margin:"auto"},width:e})}}),(0,i.jsx)("div",{className:"jsx-6b4b92a365cbdac7 spacer"}),(0,i.jsx)(k.Z,{onClick:()=>Z(0),children:(0,i.jsxs)("div",{className:"jsx-6b4b92a365cbdac7 flex-center",children:[(0,i.jsx)("span",{className:"jsx-6b4b92a365cbdac7 icon-label",children:"Back to Top"}),(0,i.jsx)(v,{color:"#0070f3"})]})}),(0,i.jsx)("div",{className:"jsx-6b4b92a365cbdac7 spacer"}),(0,i.jsxs)(k.Z,{href:C.submitShowcase,invert:!0,children:[(0,i.jsx)("span",{className:"jsx-6b4b92a365cbdac7 icon-label",children:"Share Your Website"}),(0,i.jsx)(z,{color:"white"})]})]})})}}var G=s(14517);class A extends c.PureComponent{state={show:!1,top:!0,left:!1};onMouseEnter=()=>{let e=1/0,t=1/0,s=0;if(this.containerEl){let i=this.containerEl.getBoundingClientRect();e=i.top,t=window.innerWidth-i.right,s=i.left}this.setState({show:!0,left:t<100,right:s<100,bottom:e<(this.props.top||110)})};onMouseLeave=()=>{this.setState({show:!1})};handleClickOutside=e=>{this.state.show&&this.containerEl&&(this.containerEl===e.target||this.containerEl.contains(e.target))&&this.onMouseLeave()};componentDidMount(){window.addEventListener("mousedown",this.handleClickOutside),window.addEventListener("touchstart",this.handleClickOutside)}componentWillUnmount(){window.removeEventListener("mousedown",this.handleClickOutside),window.removeEventListener("touchstart",this.handleClickOutside)}render(){let{bottom:e,left:t,right:s,content:a,children:r}=this.props,{show:o,left:n,right:l,bottom:c}=this.state;return(0,i.jsxs)("div",{onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onTouchStart:this.onMouseEnter,ref:e=>{this.containerEl=e},className:"jsx-17b125257da16867 "+((0,G.W)("container",{show:o})||""),children:[(0,i.jsx)(m(),{id:"17b125257da16867",children:'.container.jsx-17b125257da16867{position:relative;display:inline-block;overflow:hidden}.popover.jsx-17b125257da16867{position:absolute;left:50%;padding:.5rem 1rem;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;background:white;-webkit-box-shadow:0 10px 20px rgba(0,0,0,.08),0 0 8px rgba(0,0,0,.1);-moz-box-shadow:0 10px 20px rgba(0,0,0,.08),0 0 8px rgba(0,0,0,.1);box-shadow:0 10px 20px rgba(0,0,0,.08),0 0 8px rgba(0,0,0,.1);-webkit-transition:opacity.2s ease;-moz-transition:opacity.2s ease;-o-transition:opacity.2s ease;transition:opacity.2s ease;-webkit-transform:translatex(-50%);-moz-transform:translatex(-50%);-ms-transform:translatex(-50%);-o-transform:translatex(-50%);transform:translatex(-50%);opacity:0;visibility:hidden;z-index:1011}.popover.top.jsx-17b125257da16867{bottom:100%;margin-bottom:10px}.popover.bottom.jsx-17b125257da16867{top:100%;bottom:unset;margin-top:10px}.popover.jsx-17b125257da16867:after{content:"";position:absolute;width:8px;height:8px;background:white;-webkit-transform:translatex(-50%)translatey(-50%)rotate(45deg);-moz-transform:translatex(-50%)translatey(-50%)rotate(45deg);-ms-transform:translatex(-50%)translatey(-50%)rotate(45deg);-o-transform:translatex(-50%)translatey(-50%)rotate(45deg);transform:translatex(-50%)translatey(-50%)rotate(45deg)}.popover.top.jsx-17b125257da16867:after{top:100%;left:50%}.popover.bottom.jsx-17b125257da16867:after{top:0;left:50%}.popover.left.jsx-17b125257da16867{left:-webkit-calc(50% + 17px);left:-moz-calc(50% + 17px);left:calc(50% + 17px);-webkit-transform:translatex(-100%);-moz-transform:translatex(-100%);-ms-transform:translatex(-100%);-o-transform:translatex(-100%);transform:translatex(-100%)}.popover.left.jsx-17b125257da16867:after{right:10px;left:unset;-webkit-transform:translatex(-50%)translatey(-50%)rotate(45deg);-moz-transform:translatex(-50%)translatey(-50%)rotate(45deg);-ms-transform:translatex(-50%)translatey(-50%)rotate(45deg);-o-transform:translatex(-50%)translatey(-50%)rotate(45deg);transform:translatex(-50%)translatey(-50%)rotate(45deg)}.popover.right.jsx-17b125257da16867{left:-webkit-calc(50% - 17px);left:-moz-calc(50% - 17px);left:calc(50% - 17px);-webkit-transform:translatex(0%);-moz-transform:translatex(0%);-ms-transform:translatex(0%);-o-transform:translatex(0%);transform:translatex(0%)}.popover.right.jsx-17b125257da16867:after{right:unset;left:10px;-webkit-transform:translatex(-50%)translatey(-50%)rotate(45deg);-moz-transform:translatex(-50%)translatey(-50%)rotate(45deg);-ms-transform:translatex(-50%)translatey(-50%)rotate(45deg);-o-transform:translatex(-50%)translatey(-50%)rotate(45deg);transform:translatex(-50%)translatey(-50%)rotate(45deg)}.popover.show.jsx-17b125257da16867{opacity:1;visibility:visible}.container.show.jsx-17b125257da16867{overflow:visible}'}),r,(0,i.jsx)("div",{className:"jsx-17b125257da16867 "+((0,G.W)("popover top","f6",{show:o,bottom:e||c,left:t||n,right:s||l})||""),children:a})]})}}var B=s(24253),P=(0,c.memo)(function(e){let{onSelect:t,selectedId:s}=e;return(0,i.jsxs)(B.Z,{offset:129,children:[(0,i.jsx)(f.Z,{center:!0,children:(0,i.jsxs)("div",{className:"jsx-f161530e4d15364f categories",children:[_.pz.map((e,a)=>{let r=_.bd[a];return(0,i.jsx)("button",{onClick:()=>t(r),type:"button",className:`jsx-f161530e4d15364f no-tap-highlight short tab${s===r?" selected":""} f6`,children:e},r)}),_.bd.map((e,a)=>{let r=_.bd[a];return(0,i.jsx)("button",{onClick:()=>t(r),type:"button",className:`jsx-f161530e4d15364f no-tap-highlight not-short tab${s===r?" selected":""} f6`,children:e},r)}),(0,i.jsx)(A,{content:(0,i.jsx)("div",{style:{whiteSpace:"nowrap"},className:"jsx-f161530e4d15364f",children:"Share your website!"}),children:(0,i.jsx)("a",{"aria-label":"Submit Your Website",href:C.submitShowcase,rel:"noopener noreferrer",target:"_blank",className:"jsx-f161530e4d15364f not-mobile",children:(0,i.jsx)("span",{style:{verticalAlign:"top"},className:"jsx-f161530e4d15364f tab f5",children:(0,i.jsx)(z,{})})})})]})}),(0,i.jsx)(m(),{id:"f161530e4d15364f",children:".categories.jsx-f161530e4d15364f{display:grid;grid-template-columns:repeat(10,-webkit-max-content);grid-template-columns:repeat(10,max-content);-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;justify-items:center;padding:.5rem 1rem;font-weight:500;border-top:1px solid transparent}.categories.jsx-f161530e4d15364f *.jsx-f161530e4d15364f::-moz-selection{background-color:inherit;color:inherit}.categories.jsx-f161530e4d15364f *.jsx-f161530e4d15364f::selection{background-color:inherit;color:inherit}.tab.jsx-f161530e4d15364f{background-color:transparent;border:none;outline:none;font-weight:inherit;display:inline-block;height:100%;line-height:2rem;position:relative;text-align:center;padding:0 1.25rem;cursor:pointer;white-space:nowrap;text-transform:uppercase;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;color:#696969}.tab.jsx-f161530e4d15364f:hover{color:#000}.tab.selected.jsx-f161530e4d15364f{background:rgba(0,118,255,.1);color:#0070f3}.short.jsx-f161530e4d15364f{display:none}@media screen and (max-width:960px){.categories.jsx-f161530e4d15364f{grid-template-columns:repeat(5,-webkit-max-content);grid-template-columns:repeat(5,max-content)}}@media screen and (max-width:640px){.tab.jsx-f161530e4d15364f{padding:0 .5rem;text-transform:unset}.not-mobile.jsx-f161530e4d15364f,.not-short.jsx-f161530e4d15364f{display:none}.short.jsx-f161530e4d15364f{display:unset;margin:0 auto}}"})]})}),H=s(13922),V=s.n(H);class Y extends c.PureComponent{clickOuter=()=>{o().router.push("/showcase")};render(){let{siteData:e}=this.props;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(V(),{children:(0,i.jsxs)("title",{children:["Showcase | ",e.title]})}),(0,i.jsxs)("button",{onClick:this.clickOuter,ref:e=>this.lightbox=e,type:"button",className:"jsx-c459cf2e236e914f lightbox",children:[(0,i.jsx)(m(),{id:"c459cf2e236e914f",children:".lightbox.jsx-c459cf2e236e914f{position:fixed;z-index:3001;top:0;left:0;right:0;bottom:0;padding:3rem 3rem 7rem 3rem;border:0;background-color:rgba(0,0,0,.9);cursor:-webkit-zoom-out;cursor:-moz-zoom-out;cursor:zoom-out}.preview.jsx-c459cf2e236e914f{width:100%;height:100%;text-align:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.info.jsx-c459cf2e236e914f{position:absolute;bottom:0;left:0;width:100%;padding:1rem 2rem 2rem;text-align:center;color:white;text-shadow:0 2px 20px rgba(0,0,0,.5)}img.jsx-c459cf2e236e914f{max-width:100%;max-height:100%;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;-webkit-box-shadow:0 2px 6px rgba(0,0,0,.2),0 10px 20px rgba(0,0,0,.1);-moz-box-shadow:0 2px 6px rgba(0,0,0,.2),0 10px 20px rgba(0,0,0,.1);box-shadow:0 2px 6px rgba(0,0,0,.2),0 10px 20px rgba(0,0,0,.1);overflow:hidden}@media screen and (max-width:640px){.lightbox.jsx-c459cf2e236e914f{padding:2rem 1rem 3rem 1rem}}"}),(0,i.jsxs)("div",{className:"jsx-c459cf2e236e914f preview",children:[(0,i.jsx)("img",{alt:e.title,src:e.src.default.src,className:"jsx-c459cf2e236e914f"}),(0,i.jsxs)("div",{className:"jsx-c459cf2e236e914f info",children:[(0,i.jsx)("h3",{className:"jsx-c459cf2e236e914f f4",children:e.title}),(0,i.jsx)("a",{href:e.link,rel:"noopener noreferrer",target:"_blank",className:"jsx-c459cf2e236e914f f5",children:M(e.link)})]})]})]})]})}}var q=s(88738),K=s(87129),J=s.n(K),Q=!0,X=function(e){let{item:t}=e,s=(0,r.useRouter)();return(0,i.jsxs)(n.Z,{title:"Showcase | Next.js",children:[(0,i.jsx)(q.Z,{description:`Meet hundreds of beautiful websites powered by Next.js by ${u.Fp}`,image:"/static/twitter-cards/showcase.png",title:"Showcase | Next.js",url:`${u._O}/showcase`}),(0,i.jsx)(p,{anchor:!0,data:_.bd,children:(e,t)=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(w,{}),(0,i.jsx)(P,{onSelect:e,selectedId:t}),(0,i.jsx)("div",{className:J().wrapList,children:(0,i.jsx)(F,{category:t})})]})},s.asPath),t&&_.Wp[t]?(0,i.jsx)(Y,{siteData:_.Wp[t]}):null,(0,i.jsx)(a.f,{}),(0,i.jsx)(l.Z,{})]})}},87129:function(e){e.exports={wrapList:"showcase_wrapList__T_A3z"}}}]);