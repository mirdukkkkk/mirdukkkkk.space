var e=Object.defineProperty,t=(t,i,n)=>((t,i,n)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n)(t,"symbol"!=typeof i?i+"":i,n);import{G as i,d as n,u as s,k as r,m as o,b as a,L as l,R as h,a as c,S as d,B as u}from"./lib-BdbWX1uf.js";(()=>{const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=(e=>{const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t})(e);fetch(e.href,t)}})();class m{static set(e,t,i=JSON.stringify){localStorage.setItem(e,i(t))}static get(e,t){const i=localStorage.getItem(e);return i?t?t(JSON.parse(i)):JSON.parse(i):void 0}static reset(e){localStorage.removeItem(e)}}const p={available:["#1755ff","#50c257","#9f37c2","#f1d04f","#ff3737","#7fffec"],danger:"#ff3737"},v={available:["#ffffff","#a2c8ff","#d7ffc3","#fff5c3","#d4c3ff","#ffc3e7"],default:"#ffffff"},y={isEnabled:n(!0),starColor:n(v.default),starSpeed:n(5e-4),toggle(e){y.isEnabled.value=e,y.save()},nextStarColor(){y.starColor.value=v.available[(v.available.indexOf(y.starColor.value)+1)%v.available.length],y.save()},setStarSpeed(e){y.starSpeed.value=e},load(){const e=m.get("background");e&&Object.keys(e).map((t=>y[t].value=e[t]))},save(){const e={};Object.keys(y).slice(0,2).map((t=>e[t]=y[t].value)),m.set("background",e)}},f=i({}),g=({width:e,height:t,onClick:i})=>s("img",{title:"mirdukkkkk avatar",className:"_avatar_etb43_1",alt:"mirdukkkkk avatar",width:e,height:t,src:"/avatar.webp",onClick:i}),k=e=>`https://${e}.mirdukkkkk.space`,b=[[k("life"),"My Pixel Battle"],[k("source"),"This website repo"],[k("github"),"GitHub"],[k("discord"),"Discord"],[k("youtube"),"YouTube"]],_=()=>s("ul",{className:"_links_mtfr9_1",children:b.map((([e,t])=>s("li",{children:s("a",{href:e,target:"_blank",children:t})})))}),w={color:n(p.available[Math.floor(Math.random()*p.available.length)]),nextColor(){w.color.value=p.available[(p.available.indexOf(w.color.value)+1)%p.available.length]}},x=i({});class M extends r{constructor(){super(...arguments),t(this,"reference",o()),t(this,"unsubscribe",null),t(this,"changeColor",(()=>{this.reference.current&&(this.reference.current.style.color=this.context.color.value)}))}componentDidMount(){this.unsubscribe=this.context.color.subscribe(this.changeColor)}componentWillUnmount(){this.unsubscribe&&this.unsubscribe()}render({children:e}){return s("span",{className:"_rainbow_f41wz_1",style:{color:this.context.color.peek()},onClick:this.context.nextColor,ref:this.reference,children:e})}}t(M,"contextType",x);const N=["hello","hello there","hi","hey","g'day","howdy","peek-a-boo","hey there","yo"],S=()=>s("strong",{children:N[Math.floor(Math.random()*N.length)]}),z=({className:e,width:t,height:i,name:n,code:r,onClick:o})=>s("img",{className:e,title:n,width:t,height:i,src:`/images/flag_${r}.svg`,alt:n+" Flag",onClick:o});class C extends r{render(){return s(a,{children:[s(g,{width:200,height:200,onClick:()=>this.context.nextStarColor()}),s("div",{className:"_title_19h34_1",children:[s(S,{}),", i'm",s("div",{className:"_information_19h34_1",translate:!1,children:[" ",s(M,{children:"mirdukkkkk"})," ",s(z,{width:32,height:32,name:"New Zealand",code:"nz"})]})]}),s("p",{children:"node.js, web"}),s("p",{children:[s(M,{children:"junior"})," developer"]}),s(_,{})]})}}t(C,"contextType",f);const V=({children:e})=>s("div",{className:"_title_s27u2_1",children:e});class E extends r{componentWillMount(){this.context.color.value=p.danger}render(){return s(a,{children:[s(V,{children:[s(M,{children:"404"}),s("p",{className:"_additional_1roqk_1",children:"Not Found"})]}),s("div",{className:"_comment_1roqk_1",children:[s("p",{children:["page ",s(M,{children:"doesn't"})," exist"]}),s("p",{children:["you're ",s(M,{children:"lost?"})]})]}),s(l,{to:"/",className:"_return_1roqk_1",children:["click to return ",s("img",{title:"Return to home",src:"/images/back.svg",width:"20",height:"20",alt:"Return to home"})]})]})}}t(E,"contextType",x);const I=["TypeScript","Preact"],T=[s("p",{children:"and I'm very bad at design"}),s("p",{children:["i try to learn new and ",s(M,{children:"interesting"})," things"]})],O=["JavaScript","TypeScript","Python","Discord.JS","HTML","CSS","Stylus","EJS","React","Preact","MongoDB","Git"],P=["/niko","/oneshot"],F=[{path:"/",element:s(C,{})},{path:"/skills",element:s(class extends r{render(){return s(a,{children:[s(V,{children:"My skills"}),s("p",{className:"_skills_zb5db_1",children:O.map(((e,t)=>s(a,{children:[I.includes(e)?s(M,{children:e}):s("span",{children:e}),t<O.length-1&&", "]},t)))}),s("div",{className:"_additional_zb5db_1",children:T})]})}},{})},{path:"/niko",element:s(class extends r{constructor(){super(...arguments),t(this,"slide",o()),t(this,"video",o()),t(this,"audio",o()),t(this,"createImage",((e,t)=>{if(!this.video.current)return;const i=document.createElement("canvas");i.width=e,i.height=t,i.getContext("2d").drawImage(this.video.current,0,0,e,t);const n=i.toDataURL("image/png");return i.remove(),n})),t(this,"playAudio",(async()=>{this.audio.current&&this.audio.current.play()})),t(this,"handleEvent",(()=>{this.slide.current&&(this.slide.current.remove(),this.playAudio(),document.body.removeEventListener("click",this.handleEvent),document.body.removeEventListener("keydown",this.handleEvent))}))}componentWillMount(){document.body.addEventListener("click",this.handleEvent),document.body.addEventListener("keydown",this.handleEvent),setInterval((()=>{const e=this.createImage(32,32);document.body.style.cursor=`url('${e}'), auto`}),100)}render(){return s(a,{children:[s("video",{src:"/niko/niko-oneshot.mp4",className:"_video_uo40r_1",ref:this.video,playsinline:!0,autoplay:!0,muted:!0,loop:!0}),s("audio",{ref:this.audio,style:{display:"none"},src:"/niko/shoeshine.mp3",preload:"auto",loop:!0}),s("div",{className:"_slide_uo40r_1",ref:this.slide,children:s("div",{className:"_text_uo40r_1",children:"click somewhere"})})]})}},{})},{path:"/oneshot",element:s(h,{to:"/niko"})},{path:void 0,element:s(E,{})}];class L extends r{constructor(){super(),t(this,"canvas",o()),t(this,"animationFrameId"),t(this,"starSize",6),t(this,"starMinScale",2.5e-10),t(this,"stars",[]),t(this,"starVelocity",{x:0,y:0,tx:0,ty:0,z:5e-4}),t(this,"scale",.5),t(this,"overflowThreshold",50),t(this,"pointerX",null),t(this,"pointerY",null),t(this,"touchInput",!1),t(this,"width",window.innerWidth*this.scale),t(this,"height",window.innerHeight*this.scale),t(this,"spawn",(()=>{const e=(window.innerWidth+window.innerHeight)/(navigator.userAgent.indexOf("Firefox")>-1?18:11);for(let t=0;e>t;t++)this.stars.push({x:0,y:0,z:this.starMinScale+Math.random()*(1-this.starMinScale)});console.info("[INFO] Stars spawned successfully!")})),t(this,"movePointer",((e,t)=>{if("number"==typeof this.pointerX&&"number"==typeof this.pointerY){let i=e-this.pointerX,n=t-this.pointerY;this.starVelocity.tx=this.starVelocity.tx+i/8*this.scale*(this.touchInput?1:-1),this.starVelocity.ty=this.starVelocity.ty+n/8*this.scale*(this.touchInput?1:-1)}this.pointerX=e,this.pointerY=t})),t(this,"resize",(()=>{this.canvas.current&&(this.width=window.innerWidth*this.scale,this.height=window.innerHeight*this.scale,this.canvas.current.width=this.width,this.canvas.current.height=this.height,this.stars.forEach((e=>{e.x=Math.random()*this.width,e.y=Math.random()*this.height})))})),t(this,"animate",(()=>{if(!this.canvas.current)return;const e=this.canvas.current.getContext("2d");e.clearRect(0,0,this.width,this.height),this.starVelocity.tx*=.86,this.starVelocity.ty*=.86,this.starVelocity.x+=.8*(this.starVelocity.tx-this.starVelocity.x),this.starVelocity.y+=.8*(this.starVelocity.ty-this.starVelocity.y),this.stars.forEach((e=>{if(e.x+=this.starVelocity.x*e.z,e.y+=this.starVelocity.y*e.z,e.x+=(e.x-this.width/2)*this.starVelocity.z*e.z,e.y+=(e.y-this.height/2)*this.starVelocity.z*e.z,e.z+=this.starVelocity.z,e.x<-this.overflowThreshold||e.x>this.width+this.overflowThreshold||e.y<-this.overflowThreshold||e.y>this.height+this.overflowThreshold){let t="z",i=Math.abs(this.starVelocity.x),n=Math.abs(this.starVelocity.y);if(i>1||n>1){let e;e=i>n?Math.random()<i/(i+n)?"h":"v":Math.random()<n/(i+n)?"v":"h",t="h"===e?this.starVelocity.x>0?"l":"r":this.starVelocity.y>0?"t":"b"}e.z=this.starMinScale+Math.random()*(1-this.starMinScale),"z"===t?(e.z=.1,e.x=Math.random()*this.width,e.y=Math.random()*this.height):"l"===t?(e.x=-this.overflowThreshold,e.y=this.height*Math.random()):"r"===t?(e.x=this.width+this.overflowThreshold,e.y=this.height*Math.random()):"t"===t?(e.x=this.width*Math.random(),e.y=-this.overflowThreshold):"b"===t&&(e.x=this.width*Math.random(),e.y=this.height+this.overflowThreshold)}})),this.stars.forEach((t=>{e.beginPath(),e.lineCap="round",e.lineWidth=this.starSize*t.z*this.scale,e.globalAlpha=.5+.5*Math.random(),e.strokeStyle=this.props.starColor,e.beginPath(),e.moveTo(t.x,t.y);let i=2*this.starVelocity.x,n=2*this.starVelocity.y;.1>Math.abs(i)&&(i=.5),.1>Math.abs(n)&&(n=.5),e.lineTo(t.x+i,t.y+n),e.stroke()})),this.animationFrameId=requestAnimationFrame(this.animate)})),this.spawn()}componentWillUnmount(){window.onresize=null,document.onmousemove=null,document.ontouchmove=null,document.ontouchend=null,document.onmouseleave=null,"number"==typeof this.animationFrameId&&cancelAnimationFrame(this.animationFrameId),console.info("[INFO] Background has been removed!")}componentWillReceiveProps(e){this.starVelocity.z=e.starSpeed}componentWillMount(){window.onresize=this.resize,document.onmousemove=e=>{this.touchInput=!1,this.movePointer(e.clientX,e.clientY)},document.ontouchmove=e=>{this.touchInput=!0,this.movePointer(e.touches[0].clientX,e.touches[0].clientY),e.preventDefault()},document.ontouchend=()=>{this.pointerX=null,this.pointerY=null},document.onmouseleave=()=>{this.pointerX=null,this.pointerY=null},console.info("[INFO] Background events are attached!")}componentDidMount(){this.resize(),this.animate(),console.info("[INFO] Background animation started!")}render(){return s("canvas",{className:"_background_rql6s_1",ref:this.canvas})}}const W=({name:e,checked:t=!1,children:i,onChange:n})=>s("div",{className:"_container_97olu_1",children:[s("input",{name:e,type:"checkbox",checked:t,className:"_check_97olu_1",onChange(e){return n(!!e.currentTarget.checked)}}),s("label",{for:e,children:i})]}),Y=[{name:"Home",path:"/"},{name:"Skills",path:"/skills"}],j=l;class A extends r{constructor(){super(...arguments),t(this,"stylize",(e=>e?"_active_133me_1":"")),t(this,"backgroundCheckbox",(e=>{this.context.toggle(e),this.context.save()}))}render(){return s("header",{className:"_header_133me_1",children:[s("div",{className:"_left_133me_1",children:Y.map((({name:e,path:t})=>s(j,{to:t,className:this.stylize,children:e})))}),s("div",{className:"_right_133me_1",children:s(W,{name:"enable_background",onChange:this.backgroundCheckbox,checked:this.context.isEnabled,children:"Background"})})]})}}t(A,"contextType",f);const X=()=>s(d,{children:F.map((({path:e,element:t})=>s(c,{path:e,children:t})))});console.log("%cmirdukkkkk@space:~$ cd /personal/space/\nmirdukkkkk@space:/personal/space/$ space --version\n\nVersion: 2.3.0\nAuthor:  mirdukkkkk\n\nmirdukkkkk@space:/personal/space/$ space preview\nLaunching personal space...\nExpanding space for /niko\n\n                       :==--..                                             \n                      .-=#+++=-:.                                          \n                      :-=*++++++=-:.:::::....           ......             \n                      :-==*+++**+++++++++++++==-:.:-===+++**+-.            \n                      :-==**#**++++++++++++++++++=+++++***+==-             \n           ..::-------==+*##*******++++++++++++++**++**+=====:             \n          .-##%%%%%####****+++++*********++++++++*#**+======-:             \n           :-#%%%%%%#+====**+****+++++++*****+++++##========:              \n            .:=*#%#+======**===+++*****+++++*##**++#+======-:              \n               .-========*=**++++++++******++++*##**#+====-:               \n         -.     -=======*=-=**+++**+++*****##**+++*+=*#+=-:                \n        :::    :-======++=*+++**++#****-:+*:=##****+=-=*-:                 \n          .  .:--==*+=+#+#-::=#+#+*=+*-::+#-:-#++****+=-:.::-. ::.         \n              .:-=+**+**+=:::=#=======-::-#--+#+++++**===+=-:              \n               .:=**#*#*++=-::*+=+=====---==+**++++-=**=---:     ::        \n              :--==*#*++*+++=======++=+=====+#++++=-***=====-:.  -..       \n                 :-====++*+=====++*****=====**+++=--=**-.  .:-.            \n                :-:.  :====-:::-=+*****====**++==:  :=+=-.  .:-.           \n                ..:--:....::::::..=+**++++*+=--=*=--:=-=+-:-:.             \n               :=+++- .::::::::---: :=====-====*+======----=---:.          \n              .=+++= ::... .-===---- .+***#*#**+:----============-:.       \n              :++++::-.::.:*******+-: ******#*===-:...:--===========-:.    \n             .=++++..:.::=**+*******: ********=====:.   .:-============-:. \n             :+++++- ::.=#+++********=#*****+=-=====:.     .:-============-\n             :++++++: :=*++++*******###*****-.:=++===-:       :-===========\n             :++++++*+=*++++++++***#*##****=: :-++++++-:       .:-=========\n             :++++++***++++++++****#**#***+:   :=++++++=:        .-=++=====\n             .=++++++#++++++++*****#******-.   :-+++++++=:        .:=++++++\n              .::::.:=++++++++*****##****#+:   .:++++++++-.         :-+++++\n                  ..-*++++++*******#****#**:    :=++++++++-.         :=++++\n              .:-=+++***********#*##***#***-.   :-++++++++=:         .:++++\n           .:-=+++++++++++*****************+-   :-+++++++++-.         .-+++\n         .*****+++++++++*********************+  :-+++++++++=:         .:+++\n         .#%%%##**++++++**********************#.:=++++++++++:.         :-++\n           =#%%%%##***********#****************#=+++++++++++:.         ....\n\nmirdukkkkk@space:/personal/space/$","color: #ee9cff"),u(s(class extends r{constructor(){super(...arguments),t(this,"isException",P.includes(window.location.pathname)),t(this,"backgroundSwitcher",(()=>y.isEnabled.value&&!this.isException&&s(L,{starColor:y.starColor.value,starSpeed:y.starSpeed.value})))}componentWillMount(){y.load()}render(){return s(f.Provider,{value:y,children:[s(f.Consumer,{children:this.backgroundSwitcher}),s("div",{className:"_page_content_1wjhe_1",children:[!this.isException&&s(a,{children:[s(A,{}),s("div",{className:"_indent_1wjhe_1"})]}),s(x.Provider,{value:w,children:s(X,{})})]})]})}},{}),document.getElementById("app"));
//# sourceMappingURL=home-BrMkiTpD.js.map
