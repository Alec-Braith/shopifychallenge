(this.webpackJsonpshopifychallenge=this.webpackJsonpshopifychallenge||[]).push([[0],{54:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(20),r=a.n(c),i=a(10),o=a.n(i),l=a(21),d=a(22),j=a(23),p=a(28),u=a(25),h=a(24),b=a.n(h).a.create({baseURL:"https://api.nasa.gov"}),m=a(26),O=a(27),g=a(1);function v(){var e=Object(s.useState)(!1),t=Object(m.a)(e,2),a=t[0],n=t[1];return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(O.a,{isClick:a,onClick:function(){return n(!a)}})})}var x=a(57),f=(a(9),function(e){return console.log(e.children.props),Object(g.jsxs)(x.a,{children:[Object(g.jsx)(x.a.Img,{variant:"top",src:e.children.props.src}),Object(g.jsxs)(x.a.Body,{children:[Object(g.jsxs)(x.a.Title,{children:[e.children.props.title," - ",e.children.props.date]}),Object(g.jsx)(x.a.Text,{children:e.children.props.description})]}),Object(g.jsx)(v,{})]})}),y=a(55),N=function(e){var t=e.images.map((function(e){var t=e.explanation,a=e.url,s=e.hdurl,n=e.date,c=e.title;return Object(g.jsx)(f,{children:Object(g.jsx)("img",{src:a,description:t,title:c,date:n,alt:""})},s)}));return Object(g.jsxs)(y.a,{className:"postList",children:[Object(g.jsx)("div",{className:"postList--title",children:"Spacestagram"}),Object(g.jsxs)("div",{className:"postList--subtitle",children:["Brought to you by NASA's Astronomy Photo of the Day API"," "]}),Object(g.jsx)("div",{children:t})]})},k=a(56),S=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={images:[],loading:!1},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.prev=1,e.next=4,b.get("/planetary/apod?api_key=VdQaIphlzu2l4v9Xm3vh4eL5R4dXjt3GuZNPJyVo",{params:{count:4}});case 4:t=e.sent,this.setState({images:t.data,loading:!1}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error occured!"),console.log(e.t0),this.setState({loading:!1});case 13:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(this.state.images),0==this.state.loading?Object(g.jsx)("div",{className:"ui-container",children:Object(g.jsx)(N,{images:this.state.images})}):Object(g.jsx)("div",{className:"justify-content-md-center",children:Object(g.jsx)(k.a,{className:"position-absolute top-50 start-50",size:"lg",animation:"border",role:"status",children:Object(g.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}}]),a}(n.a.Component),A=S;r.a.render(Object(g.jsx)(A,{}),document.querySelector("#root"))},9:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.81817909.chunk.js.map