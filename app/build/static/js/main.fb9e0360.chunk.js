(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{150:function(e,t,a){e.exports=a(278)},155:function(e,t,a){},156:function(e,t,a){},278:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(146),s=a.n(r),o=(a(155),a(156),a(66)),c=a(19),l=a(24),u=a(26),h=a(25),p=a(27),d=a(67),m=(a(157),a(135),a(40)),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleLoad=function(){a.setState({image:a.image})},a.state={image:null},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadImage()}},{key:"componentDidUpdate",value:function(e){e.src!==this.props.src&&this.loadImage()}},{key:"componentWillUnmount",value:function(){this.image.removeEventListener("load",this.handleLoad)}},{key:"loadImage",value:function(){this.image=new window.Image,this.image.src=this.props.src,this.image.addEventListener("load",this.handleLoad)}},{key:"render",value:function(){var e=this;return i.a.createElement(m.Image,{key:this.props.key,x:this.props.x,y:this.props.y,scaleX:this.props.scale,scaleY:this.props.scale,image:this.state.image,width:100,height:100,ref:function(t){e.imageNode=t}})}}]),t}(n.Component),v=function(e){return g(10,e-100)},g=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).posAllShapes=function(){a.savedRender=[],a.setState({shapes:a.props.shapes},(function(){}))},a.savedRender=[],a.textFile=null,a.makeTextFile=function(e){var t=new Blob([e],{type:"text/plain"});return null!==a.textFile&&window.URL.revokeObjectURL(a.textFile),a.textFile=window.URL.createObjectURL(t),a.textFile},a.saveFile=function(){a.downloadURI(a.makeTextFile(JSON.stringify(a.savedRender)),"shapes.json")},a.downloadURI=function(e,t){var a=document.createElement("a");a.download=t,a.href=e,document.body.appendChild(a),a.click(),document.body.removeChild(a)},a.saveImage=function(){var e=a.stageRef.current.getStage().toDataURL({pixelRatio:3});a.downloadURI(e,"stage.png")},a.renderArrayOfShapes=function(e){var t=[],n=[],r=0;for(console.log(e,"I need this shape flag");n.length<e.numToRender&&r<1e3;){for(var s=v(window.innerWidth-a.state.sideBar),c=v(window.innerHeight),l=!0,u=(e.scale,[].concat(n,Object(o.a)(a.savedRender))),h=0;h<u.flat().length;h++){var p=u.flat()[h];p.pos&&s>p.pos.x-100&&s<p.pos.x+100&&c>p.pos.y-100&&c<p.pos.y+100&&(console.log("overlap"),l=!1,r++)}l&&(t.push(i.a.createElement(f,{key:"img".concat(t.length*c*s),src:e.image,x:s,y:c,scale:e.minSize})),n.push(Object(d.a)({},e,{pos:{x:s,y:c}})))}return a.savedRender.push(n),t},a.shapeRender=function(){return a.state.shapes.map((function(e){return a.renderArrayOfShapes(e)}))},a.state={shapes:[],sideBar:600},a.stageRef=i.a.createRef(),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.Stage,{ref:this.stageRef,width:window.innerWidth-this.state.sideBar,height:window.innerHeight},i.a.createElement(m.Layer,null,i.a.createElement(m.Rect,{x:0,y:0,width:window.innerWidth-this.state.sideBar,height:window.innerHeight,fill:"white"})),i.a.createElement(m.Layer,null,this.shapeRender())),i.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},i.a.createElement("button",{onClick:this.posAllShapes},"mix"),i.a.createElement("button",{onClick:this.saveImage},"Save Image"),i.a.createElement("button",{onClick:this.saveFile},"Save set")),i.a.createElement("div",{id:"create"}))}}]),t}(n.Component),y=function e(t,a){var n=this;Object(c.a)(this,e),this.toObj=function(){return{image:n.image,pos:n.pos,color:n.color,minSize:n.minSize,maxSize:n.maxSize}},this.setPos=function(e){n.pos=e},this.upDateNum=function(e){return n.numToRender=Number(e),n},this.upDateMinSize=function(e){return n.minSize=Number(e),n},this.image=t,this.imageName=a,this.pos={x:1,y:1},this.color="#fffff",this.minSize=1,this.maxSize=1,this.numToRender=1},O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).makeShape=function(e){var t=new y(URL.createObjectURL(e.target.files[0]),e.target.files[0].name);console.log(t,"file",e.target.files[0]),a.props.addShape(t)},a.state={},a.fileRef=i.a.createRef(),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("input",{type:"file",name:"",id:"",onChange:function(t){return e.makeShape(t)}}),i.a.createElement("button",{onClick:this.makeShape},"go "))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).onUpdateScale=function(){a.props.updateShape(a.props.shape.upDateMinSize(a.scaleRef.current.value))},a.onUpdateAmount=function(){a.props.updateShape(a.props.shape.upDateNum(a.amountToSpawnRef.current.value))},a.state={},a.amountToSpawnRef=i.a.createRef(),a.scaleRef=i.a.createRef(),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.shape;return i.a.createElement("div",{key:this.props.key},i.a.createElement("label",null,"number to spawn:",i.a.createElement("input",{onChange:this.onUpdateAmount,ref:this.amountToSpawnRef,type:"text",value:e.numToRender})),i.a.createElement("img",{src:e.image,width:100,height:100,alt:""}))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h5",null,"some things are missing / not ready yet"),i.a.createElement("p",null,"color, random scale, overlap control's, phone support,",i.a.createElement("br",null)," locked down to just svgs(you can upload any image you want right now),",i.a.createElement("br",null)," replay from saved files, some svgs are broken, exporting svg"))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,this.props.shapes.map((function(t,a){return i.a.createElement(j,{updateShape:e.props.updateShape,shape:t,key:a})})),i.a.createElement(O,{addShape:this.props.addShape}),i.a.createElement(w,null))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).addShape=function(e){var t=[e].concat(Object(o.a)(a.state.shapes));a.setState({shapes:t})},a.updateShape=function(e){var t=a.state.shapes.map((function(t){return t.image===e.image?e:t}));a.setState({shapes:t})},a.state={shapes:[]},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(b,{shapes:this.state.shapes})),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(S,{shapes:this.state.shapes,addShape:this.addShape,updateShape:this.updateShape})))}}]),t}(n.Component);var R=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[150,1,2]]]);
//# sourceMappingURL=main.fb9e0360.chunk.js.map