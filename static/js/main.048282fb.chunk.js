(this.webpackJsonpshopifychallenge=this.webpackJsonpshopifychallenge||[]).push([[0],{53:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(19),c=a.n(r),i=a(9),o=a.n(i),l=a(20),d=a(21),u=a(22),h=a(27),j=a(24),p=a(23),b=a.n(p).a.create({baseURL:"https://api.nasa.gov"}),g=a(25),m=a(26),O=a(1);function v(){var e=Object(s.useState)(!1),t=Object(g.a)(e,2),a=t[0],n=t[1];return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(m.a,{isClick:a,onClick:function(){return n(!a)}})})}var x=a(56),y=function(e){return console.log(e.children.props),Object(O.jsxs)(x.a,{className:"m-3",style:{borderRadius:15},children:[Object(O.jsx)(x.a.Img,{variant:"top",src:e.children.props.src}),Object(O.jsxs)(x.a.Body,{children:[Object(O.jsxs)(x.a.Title,{children:[e.children.props.title," - ",e.children.props.date]}),Object(O.jsx)(x.a.Text,{children:e.children.props.description})]}),Object(O.jsx)(v,{})]})},f=a(54),k=function(e){var t=e.images.map((function(e){var t=e.explanation,a=e.url,s=e.hdurl,n=e.date,r=e.title;return Object(O.jsx)(y,{children:Object(O.jsx)("img",{src:a,description:t,title:r,date:n,alt:""})},s)}));return Object(O.jsxs)(f.a,{className:"justify-content-md-center",style:{width:"50%",flex:1,backgroundColor:"lightgrey",borderRadius:15},children:[Object(O.jsx)("div",{className:"mt-5",style:{fontSize:"200%",fontWeight:"bold"},children:"Spacestagram"}),Object(O.jsx)("div",{style:{color:"grey"},children:" Brought to you by NASA's Astronomy Photo of the Day API "}),Object(O.jsx)("div",{children:t})]})},N=a(55),S=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={images:[],loading:!1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.prev=1,e.next=4,b.get("/planetary/apod?api_key=VdQaIphlzu2l4v9Xm3vh4eL5R4dXjt3GuZNPJyVo",{params:{count:4}});case 4:t=e.sent,this.setState({images:t.data,loading:!1}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error occured!"),console.log(e.t0),this.setState({loading:!1});case 13:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(this.state.images),0==this.state.loading?Object(O.jsx)("div",{className:"ui cointainer",children:Object(O.jsx)(k,{images:this.state.images})}):Object(O.jsx)("div",{className:"justify-content-md-center",children:Object(O.jsx)(N.a,{className:"position-absolute top-50 start-50",size:"lg",animation:"border",role:"status",children:Object(O.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}}]),a}(n.a.Component),w=S;c.a.render(Object(O.jsx)(w,{}),document.querySelector("#root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.048282fb.chunk.js.map