(this["webpackJsonpnaveen-ro"]=this["webpackJsonpnaveen-ro"]||[]).push([[0],{113:function(e,t,a){e.exports=a(153)},118:function(e,t,a){},129:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},143:function(e,t){},144:function(e,t){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t),a.d(t,"firebaseConfig",(function(){return Te}));var n=a(0),r=a.n(n),l=a(13),c=a.n(l),o=(a(118),a(33)),i=a(34),u=a(38),s=a(37),m=a(11),d=a(40),h=a(9),E=a(10),g=a.n(E),v=(a(129),a(186)),f=a(24),p=a.n(f),b=a(89),O=a.n(b),y=a(183),C=a(202),j=a(201),w=a(203),S=a(190),k=Object(y.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}})),N=Object(d.g)((function(e){var t=k(),a=k(),l=Object(n.useState)(null),c=Object(h.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(null),s=Object(h.a)(u,2),d=s[0],f=s[1],b=Object(n.useState)(null),y=Object(h.a)(b,2),N=y[0],x=y[1],D=Object(n.useState)(null),R=Object(h.a)(D,2),I=R[0],A=R[1],F=Object(n.useState)(null),P=Object(h.a)(F,2),M=P[0],W=P[1],B=r.a.useState("select"),L=Object(h.a)(B,2),T=L[0],q=L[1],z=r.a.useState(null),G=Object(h.a)(z,2),J=G[0],U=G[1],H=r.a.useState(null),V=Object(h.a)(H,2),X=V[0],_=V[1],Y=r.a.useState(null),Q=Object(h.a)(Y,2),K=Q[0],Z=Q[1],$=r.a.useState("select"),ee=Object(h.a)($,2),te=ee[0],ae=ee[1],ne=r.a.useState(""),re=Object(h.a)(ne,2),le=re[0],ce=re[1];Object(n.useEffect)((function(){oe()}));var oe=function(t){g.a.auth().onAuthStateChanged((function(t){ce(t.uid),null!==t&&void 0!==t||e.history.push("/login")}))},ie=function(e){switch(e.persist(),e.target.name){case"name":i(e.target.value);break;case"number":f(e.target.value);break;case"dateofinstallment":x(e.target.value);break;case"nextservicedate":A(e.target.value);break;case"natureofwork":W(e.target.value);break;case"product":q(e.target.value);break;case"brandmodel":U(e.target.value);break;case"amountreceived":_(e.target.value);break;case"recommendedby":Z(e.target.value);break;case"recommended":ae(e.target.value)}};return r.a.createElement("div",{className:"login-form"},r.a.createElement("p",null,r.a.createElement(m.b,{to:"/dashboard"},r.a.createElement(v.a,{color:"secondary",variant:"contained"},r.a.createElement(p.a,null),"\xa0"," Go To Dashboard"))),r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement("h2",null,"Add New Record"),r.a.createElement(C.a,{name:"name",type:"text",onChange:ie,label:"Customer Name, Addr",required:!0}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(C.a,{name:"number",type:"number",onChange:ie,label:"Customer Phone Number",required:!0}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(S.a,{className:a.formControl},r.a.createElement(j.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"product",value:T,onChange:ie},r.a.createElement(w.a,{value:"select",disabled:!0},"Select a Product"),r.a.createElement(w.a,{value:"Air Conditioner"},"Air Conditioner"),r.a.createElement(w.a,{value:"RO"},"RO"),r.a.createElement(w.a,{value:"Washing Machine"},"Washing Machine"),r.a.createElement(w.a,{value:"Refrigerator"},"Refrigerator"),r.a.createElement(w.a,{value:"TV"},"TV"),r.a.createElement(w.a,{value:"Microwave Oven"},"Microwave Oven"),r.a.createElement(w.a,{value:"Others"},"Others"))),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(C.a,{className:t.textField,name:"dateofinstallment",type:"date",onChange:ie,label:"Date",required:!0}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(C.a,{className:t.textField,name:"nextservicedate",type:"date",onChange:ie,label:"Next Due Date"}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(C.a,{name:"natureofwork",type:"text",onChange:ie,label:"Nature of Work",required:!0}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(C.a,{name:"brandmodel",type:"text",onChange:ie,label:"Brand and Model",required:!0}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(C.a,{name:"amountreceived",type:"text",onChange:ie,label:"Amount Received",required:!0}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(S.a,{className:a.formControl},r.a.createElement(j.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"recommended",value:te,onChange:ie},r.a.createElement(w.a,{value:"select",disabled:!0},"Recommended By"),r.a.createElement(w.a,{value:"Relatives"},"Relatives"),r.a.createElement(w.a,{value:"Friends"},"Friends"),r.a.createElement(w.a,{value:"Dealers"},"Dealers"),r.a.createElement(w.a,{value:"Neighbours"},"Neighbours"),r.a.createElement(w.a,{value:"Customers"},"Customers"),r.a.createElement(w.a,{value:"JustDial"},"JustDial"),r.a.createElement(w.a,{value:"Google"},"Google"),r.a.createElement(w.a,{value:"Others"},"Others"))),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(C.a,{name:"recommendedby",type:"text",onChange:ie,label:"Recommender Name",required:!0}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(v.a,{color:"primary",variant:"contained",type:"submit",onClick:function(t){(t.preventDefault(),null!==o&&null!==d&&null!==N&&null!==M&&null!==J&&null!==X&&null!==K&&null!==te)&&(window.confirm("Are you sure you want to add this Record?")&&Object(E.firestore)().collection("installations").add({custName:o,custPhone:d,product:T,dateOfInstallment:N,nextServiceDate:I,natureOfWork:M,brandModel:J,amountReceived:X,recommendedBy:K,recommended:te,uid:le}).then((function(){alert("Record Added Successfully..!"),e.history.push("/dashboard")})).catch((function(e){console.error("Error Adding Document: ",e)})));return!1}},"Add New Record \xa0 ",r.a.createElement(O.a,null))),r.a.createElement("div",null," ",r.a.createElement("div",null,"\xa0")))})),x=a(31),D=(a(135),a(5)),R=a(195),I=a(197),A=a(192),F=a(194),P=a(196),M=a(193),W=a(191),B=a(92),L=a.n(B),T=a(93),q=a.n(T),z=a(90),G=a.n(z),J=a(91),U=a.n(J),H=Object(y.a)({table:{minWidth:650},container:{maxHeight:500}}),V=Object(D.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(A.a),X=Object(D.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:"#8ECDCC"},"&:nth-of-type(even)":{backgroundColor:"#CD8EBF"}}}}))(M.a),_=Object(d.g)((function(e){var t=H(),a=Object(n.useState)([]),l=Object(h.a)(a,2),c=l[0],o=l[1],i=Object(n.useState)(!1),u=Object(h.a)(i,2),s=u[0],d=u[1],f=Object(n.useState)(""),b=Object(h.a)(f,2),O=b[0],y=b[1],j=Object(n.useState)(!1),w=Object(h.a)(j,2),S=w[0],k=w[1],N=Object(n.useState)([]),D=Object(h.a)(N,2),B=D[0],T=D[1],z=r.a.useState(""),J=Object(h.a)(z,2);J[0],J[1];Object(n.useEffect)((function(){_(),Q()}),[]);var _=function(){g.a.auth().onAuthStateChanged((function(t){localStorage.setItem("uid",t.uid),null!==t&&void 0!==t||e.history.push("/login")}))},Y=function(e,t){var a=e.dateOfInstallment,n=t.dateOfInstallment,r=0;return a>n?r=-1:a<n&&(r=1),r},Q=function(){var e=Object(E.firestore)(),t=[];e.collection("installations").where("uid","==",localStorage.getItem("uid")).get().then((function(e){e.forEach((function(e){var a={id:e.id},n=Object(x.a)({},a,{},e.data());t.push(n)})),t.sort(Y),o(t),d(!0)}))},K=(!0===S?B:c).map((function(t){return r.a.createElement(X,{key:t.id},r.a.createElement(V,{component:"th",scope:"row"},t.custName),r.a.createElement(V,{align:"right"},t.custPhone),r.a.createElement(V,{align:"right"},t.product),r.a.createElement(V,{align:"right"},t.dateOfInstallment),r.a.createElement(V,{align:"right"},t.nextServiceDate),r.a.createElement(V,{align:"right"},t.natureOfWork),r.a.createElement(V,{align:"right"},t.brandModel),r.a.createElement(V,{align:"right"},t.amountReceived),r.a.createElement(V,{align:"right"},t.recommendedBy),r.a.createElement(V,{onClick:function(){return a=t.id,void e.history.push("/editrecord/"+a);var a},align:"right"},r.a.createElement(G.a,null)),r.a.createElement(V,{onClick:function(){return e=t.id,void(window.confirm("Are you sure you want to delete?")&&Object(E.firestore)().collection("installations").doc(String(e)).delete().then((function(){alert("Record Deleted Successfully");var t=c.filter((function(t){return t.id!==e}));o(t)})).catch((function(e){console.error("Error removing document: ",e)})));var e},align:"right"},r.a.createElement(U.a,null)))})),Z=!0===s?K:r.a.createElement(M.a,null,r.a.createElement(A.a,null,"Loading"));return r.a.createElement("div",{className:"login-form"},r.a.createElement("p",null,r.a.createElement(m.b,{to:"/dashboard"},r.a.createElement(v.a,{color:"secondary",variant:"contained"},r.a.createElement(p.a,null),"\xa0"," Go To Dashboard"))),r.a.createElement("h2",{id:"title"},"Viewing All Records"),r.a.createElement(C.a,{value:O,label:"Search any record",type:"text",name:"searchbox",onChange:function(e){e.persist(),y(e.target.value)}})," \xa0 \xa0",r.a.createElement(v.a,{color:"primary",variant:"contained",type:"button",onClick:function(e){k(!0);var t=c.filter((function(e){return-1!==String(e.custName).toLowerCase().search(String(O).toLowerCase())})),a=c.filter((function(e){return-1!==String(e.product).toLowerCase().search(String(O).toLowerCase())})),n=c.filter((function(e){return-1!==String(e.custPhone).toLowerCase().search(String(O).toLowerCase())})),r=c.filter((function(e){return-1!==String(e.brandModel).toLowerCase().search(String(O).toLowerCase())})),l=c.filter((function(e){return-1!==String(e.recommendedBy).toLowerCase().search(String(O).toLowerCase())})),o=t.concat(a,n,r,l);T(o)}},r.a.createElement(L.a,null)),"\xa0 ","  "," ",r.a.createElement(v.a,{color:"primary",variant:"contained",type:"button",onClick:function(e){k(!1),y("")}},r.a.createElement(q.a,null)),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement(F.a,{className:t.container,component:W.a},r.a.createElement(R.a,{className:t.table,stickyHeader:!0,size:"small","aria-label":"sticky table"},r.a.createElement(P.a,null,r.a.createElement(M.a,null,r.a.createElement(V,{align:"right"},"Name and Address"),r.a.createElement(V,{align:"right"},"Phone"),r.a.createElement(V,{align:"right"},"Product"),r.a.createElement(V,{align:"right"},"Date "),r.a.createElement(V,{align:"right"},"Next Due Date"),r.a.createElement(V,{align:"right"},"Nature Of Work"),r.a.createElement(V,{align:"right"},"Brand and Model"),r.a.createElement(V,{align:"right"},"Amount Received"),r.a.createElement(V,{align:"right"},"Recommended By"),r.a.createElement(V,{align:"right"},"Edit"),r.a.createElement(V,{align:"right"},"Delete"))),r.a.createElement(I.a,null,Z))))})),Y=function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1,n=e.getFullYear();return t<10&&(t="0"+t),a<10&&(a="0"+a),e=n+"-"+a+"-"+t},Q=(a(136),a(198)),K=a(65),Z=a.n(K),$=a(94),ee=a.n($),te=a(95),ae=a.n(te),ne=a(73),re=a(138);ne.setXLSX(re);var le=Object(d.g)((function(e){var t=Object(n.useState)(0),a=Object(h.a)(t,2),l=a[0],c=a[1],o=Object(n.useRef)(document.createElement("audio")),i=r.a.useState(),u=Object(h.a)(i,2),s=u[0],d=u[1],f={color:"secondary",children:r.a.createElement(Z.a,null)};Object(n.useEffect)((function(){b(),y(),O()}),[]);var b=function(t){g.a.auth().onAuthStateChanged((function(t){null!==t&&void 0!==t||e.history.push("/login")}))},O=function(){var e=Object(E.firestore)(),t=[];e.collection("installations").get().then((function(e){e.forEach((function(e){var a={id:e.id},n=Object(x.a)({},a,{},e.data());t.push(n)}));var a=t.reduce((function(e,t){var a=e[t.recommended]||[];return a.push(t),e[t.recommended]=a,e}),{}),n={customers:void 0!==a.Customers?a.Customers.length:0,relatives:void 0!==a.Relatives?a.Relatives.length:0,friends:void 0!==a.Friends?a.Friends.length:0,dealers:void 0!==a.Dealers?a.Dealers.length:0,neighbours:void 0!==a.Neighbours?a.Neighbours.length:0,justDial:void 0!==a.JustDial?a.JustDial.length:0,google:void 0!==a.Google?a.Google.length:0,others:void 0!==a.Others?a.Others.length:0};d(t),localStorage.setItem("reports_data",JSON.stringify(n))}))},y=function(){var e=Y(),t=Object(E.firestore)(),a=[];t.collection("installations").where("nextServiceDate","==",e).get().then((function(e){e.forEach((function(e){var t={id:e.id},n=Object(x.a)({},t,{},e.data());a.push(n)})),c(a.length)})).catch((function(e){console.log(e)})),t.collection("installations").where("status","==","pending").get().then((function(e){e.forEach((function(e){var t={id:e.id},n=Object(x.a)({},t,{},e.data()),r=a.find((function(e){return e.id===t.id}));null!==r&&void 0!==r||a.push(n)})),c(a.length),C(a.length)})).catch((function(e){console.log(e)}))},C=function(e){e>0&&o.current.play()};return r.a.createElement("div",{className:"dashboardform"},r.a.createElement("h2",null,"On Time Service ",r.a.createElement(p.a,{variant:"filled",color:"primary"})),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("p",null,r.a.createElement(m.b,{to:"/addrecords"},r.a.createElement(v.a,{size:"large",variant:"contained",color:"primary",type:"button"},"Add Records"))," "),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("p",null,r.a.createElement(m.b,{to:"/viewrecords"},r.a.createElement(v.a,{size:"large",variant:"contained",color:"primary",type:"button"},"View Records"))),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("p",null,r.a.createElement(m.b,{to:"/notifications"},r.a.createElement(v.a,{size:"large",variant:"contained",color:"primary",type:"button"},"Notifications \xa0"," ",r.a.createElement(Q.a,Object.assign({max:10,color:"secondary",badgeContent:l},f))))," "),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement(v.a,{size:"large",color:"primary",variant:"contained",onClick:function(){ne('SELECT * INTO XLSX("OnTimeServiceRecords.xlsx",?) FROM ?',[[{sheetid:"On Time Service Records",header:!0}],[s]])}},"Export As File\xa0 ",r.a.createElement(ee.a,null)),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement(m.b,{to:"/reports"},r.a.createElement(v.a,{size:"large",color:"primary",variant:"contained"},"Reports \xa0",r.a.createElement(ae.a,null))),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("p",null,r.a.createElement(v.a,{size:"large",variant:"contained",color:"secondary",onClick:function(t){g.a.auth().signOut().then((function(){localStorage.removeItem("uid"),e.history.push("/login")})).catch((function(e){console.log(e)}))}},"Logout")),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("audio",{"webkit-playsinline":"true",playsInline:!0,ref:o,id:"notificationSound",src:"https://notificationsounds.com/soundfiles/acc3e0404646c57502b480dc052c4fe1/file-sounds-1140-just-saying.mp3"}))})),ce=(a(145),void 0),oe=Object(y.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),ie=Object(y.a)({table:{minWidth:650},container:{maxHeight:440}}),ue=Object(D.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(A.a),se=Object(D.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:"#8ECDCC"},"&:nth-of-type(even)":{backgroundColor:"#CD8EBF"}}}}))(M.a),me=Object(d.g)((function(e){var t=ie(),a=oe(),l=Object(n.useState)(!1),c=Object(h.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)([]),s=Object(h.a)(u,2),d=s[0],f=s[1],b=Object(n.useState)(0),O=Object(h.a)(b,2),y=O[0],C=O[1];Object(n.useEffect)((function(){k(),N()}),[]);var k=function(t){g.a.auth().onAuthStateChanged((function(t){null!==t&&void 0!==t||e.history.push("/login")}))},N=function(){var e=Y(),t=Object(E.firestore)(),a=[];t.collection("installations").where("nextServiceDate","==",e).get().then((function(e){e.forEach((function(e){var t={id:e.id},n=Object(x.a)({},t,{},e.data());a.push(n)})),i(!0),f(a),C(a.length)})).catch((function(e){console.log(e)})),t.collection("installations").where("status","==","pending").get().then((function(e){e.forEach((function(e){var t={id:e.id},n=Object(x.a)({},t,{},e.data()),r=a.find((function(e){return e.id===t.id}));null!==r&&void 0!==r||a.push(n)})),i(!0),f(a),C(a.length)})).catch((function(e){console.log(e)}))},D=d.map((function(e,t){return r.a.createElement(se,{key:t},r.a.createElement(ue,null,e.custName),r.a.createElement(ue,null,e.plantInstalled),r.a.createElement(ue,null,e.dateOfInstallment),r.a.createElement(ue,null,e.nextServiceDate),r.a.createElement(ue,null,e.custAddress),r.a.createElement(ue,null,e.custPhone),r.a.createElement(ue,null,r.a.createElement(S.a,{className:a.formControl},r.a.createElement(j.a,{defaultValue:"pending",value:e.status,labelId:"demo-simple-select-label",id:"demo-simple-select",onChange:function(t){return function(e,t){var a=Object(E.firestore)();window.confirm("Are you sure to Change?")&&a.collection("installations").doc(String(e)).set({status:t},{merge:!0}).then((function(){var a=ce.state.records,n=ce.state.records.find((function(t){return t.id===e}));a.pop(n),n.status=t,a.push(n),i(!0),f(a),C(a.length)})).catch((function(e){console.error("Error Adding Document: ",e)}))}(e.id,t.target.value)}},r.a.createElement(w.a,{value:"pending"},"Pending"),r.a.createElement(w.a,{value:"completed"},"Completed")))))})),A=!0===o?D:r.a.createElement(se,null,r.a.createElement(ue,null,"Loading")),B=0===y?r.a.createElement("tr",null,r.a.createElement("td",null,"No Notification")):A,L={color:"secondary",children:r.a.createElement(Z.a,null)};return r.a.createElement("div",{className:"login-form"},r.a.createElement("p",null,r.a.createElement(m.b,{to:"/dashboard"},r.a.createElement(v.a,{color:"secondary",variant:"contained"},r.a.createElement(p.a,null),"\xa0"," Go To Dashboard"))),r.a.createElement("h2",null,"Notifications ",r.a.createElement(Q.a,Object.assign({color:"secondary",badgeContent:y},L))),r.a.createElement(F.a,{className:t.container,component:W.a},r.a.createElement(R.a,{className:t.table,stickyHeader:!0,size:"small","aria-label":"sticky table"},r.a.createElement(P.a,null,r.a.createElement(M.a,null,r.a.createElement(ue,{align:"right"},"Name"),r.a.createElement(ue,{align:"right"},"Plant Installed"),r.a.createElement(ue,{align:"right"},"Date of Installment"),r.a.createElement(ue,{align:"right"},"Next Service Date"),r.a.createElement(ue,{align:"right"},"Address"),r.a.createElement(ue,{align:"right"},"Phone"),r.a.createElement(ue,{align:"right"},"Status"))),r.a.createElement(I.a,null,B))))})),de=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(i.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{className:"error-block"},r.a.createElement("p",null,r.a.createElement("span",null,"Something went wrong. "),r.a.createElement(m.b,{to:"/"},"Go To Dashboard"))):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(n.Component);var he=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"pagenotfound"},r.a.createElement("h1",null," 404 Error. Page Not Found "),r.a.createElement(m.b,{className:"link",to:"/dashboard"},"Click Here to go to Dashboard")))},Ee=a(48),ge=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:"",product:"",dateofinstallment:"",nextservicedate:"",natureOfWork:"",brandModel:"",amountReceived:"",recommendedBy:"",recommended:"",userId:""},e.getCurrentUser=function(t){g.a.auth().onAuthStateChanged((function(t){e.setState((function(){return{userId:t.uid}})),null!==t&&void 0!==t||e.props.history.push("/login")}))},e.handleInputChange=function(t){t.persist(),e.setState((function(){return Object(Ee.a)({},t.target.name,t.target.value)}))},e.validateInput=function(){var t=e.state,a=t.name,n=t.number,r=t.product,l=t.dateofinstallment,c=t.natureOfWork,o=t.brandModel,i=t.amountReceived,u=t.recommendedBy,s=t.recommended;return null!==a&&null!==n&&null!==r&&null!==l&&null!==c&&null!==o&&null!==i&&null!==u&&null!==s},e.addRecord=function(t){if(t.preventDefault(),e.validateInput()&&window.confirm("Are you sure to edit?")){var a=e.props.match.params.id;Object(E.firestore)().collection("installations").doc(String(a)).set({custName:e.state.name,custPhone:e.state.number,product:e.state.product,dateOfInstallment:e.state.dateofinstallment,nextServiceDate:e.state.nextservicedate,natureOfWork:e.state.natureOfWork,brandModel:e.state.brandModel,amountReceived:e.state.amountReceived,recommendedBy:e.state.recommendedBy,recommended:e.state.recommended,uid:e.state.userId}).then((function(){alert("Record Edited Successfully..!"),e.props.history.push("/dashboard")})).catch((function(e){console.error("Error Adding Document: ",e)}))}return!1},e.getData=function(){var t=e.props.match.params.id;Object(E.firestore)().collection("installations").doc(String(t)).get().then((function(t){if(t.exists){var a=t.data();e.setState((function(){return{name:a.custName,number:a.custPhone,product:a.product,dateofinstallment:a.dateOfInstallment,nextservicedate:a.nextServiceDate,natureOfWork:a.natureOfWork,brandModel:a.brandModel,amountReceived:a.amountReceived,recommendedBy:a.recommendedBy,recommended:a.recommended}}),(function(){}))}else console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getCurrentUser(),this.getData()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(m.b,{to:"/dashboard"},r.a.createElement("button",{id:"home"},"< Go To Dashboard"))),r.a.createElement("div",{className:"form"},r.a.createElement("form",null,r.a.createElement("h2",null,"Edit Record"),r.a.createElement("p",{htmlFor:"name"},"Customer Name, Addr:"),r.a.createElement("input",{type:"text",value:this.state.name,placeholder:"Customer Name, Addr",onChange:this.handleInputChange,name:"name",required:!0}),r.a.createElement("p",{htmlFor:"number"},"Customer Contact Number:"),r.a.createElement("input",{type:"number",value:this.state.number,placeholder:"Customer Phone Number",onChange:this.handleInputChange,name:"number",required:!0}),r.a.createElement("p",{htmlFor:"product"},"Product:"),r.a.createElement(j.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"product",value:this.state.product,onChange:this.handleInputChange},r.a.createElement(w.a,{value:"select",disabled:!0},"Select a Product"),r.a.createElement(w.a,{value:"Air Conditioner"},"Air Conditioner"),r.a.createElement(w.a,{value:"RO"},"RO"),r.a.createElement(w.a,{value:"Washing Machine"},"Washing Machine"),r.a.createElement(w.a,{value:"Refrigerator"},"Refrigerator"),r.a.createElement(w.a,{value:"TV"},"TV"),r.a.createElement(w.a,{value:"Microwave Oven"},"Microwave Oven"),r.a.createElement(w.a,{value:"Others"},"Others")),r.a.createElement("p",{htmlFor:"dateofinstallment"},"Date:"),r.a.createElement("input",{type:"date",value:this.state.dateofinstallment,placeholder:"Date of Installment",onChange:this.handleInputChange,name:"dateofinstallment",required:!0}),r.a.createElement("p",{htmlFor:"nextservicedate"},"Next Due Date:"),r.a.createElement("input",{type:"date",value:this.state.nextservicedate,placeholder:"Next Service Date",onChange:this.handleInputChange,name:"nextservicedate"}),r.a.createElement("p",{htmlFor:"natureOfWork"},"Nature Of Work:"),r.a.createElement("input",{type:"text",value:this.state.natureOfWork,placeholder:"Nature Of Work",onChange:this.handleInputChange,name:"natureOfWork",required:!0}),r.a.createElement("p",{htmlFor:"brandModel"},"Brand and Model:"),r.a.createElement("input",{type:"text",value:this.state.brandModel,placeholder:"Brand and Model",onChange:this.handleInputChange,name:"brandModel",required:!0}),r.a.createElement("p",{htmlFor:"amountReceived"},"Amount Received:"),r.a.createElement("input",{type:"text",value:this.state.amountReceived,placeholder:"Amount Received",onChange:this.handleInputChange,name:"amountReceived",required:!0}),r.a.createElement("p",{htmlFor:"recommended"},"Recommender:"),r.a.createElement(j.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"recommended",value:this.state.recommended,onChange:this.handleInputChange},r.a.createElement(w.a,{value:"select",disabled:!0},"Recommended By"),r.a.createElement(w.a,{value:"Relatives"},"Relatives"),r.a.createElement(w.a,{value:"Friends"},"Friends"),r.a.createElement(w.a,{value:"Dealers"},"Dealers"),r.a.createElement(w.a,{value:"Neighbours"},"Neighbours"),r.a.createElement(w.a,{value:"Customers"},"Customers"),r.a.createElement(w.a,{value:"JustDial"},"JustDial"),r.a.createElement(w.a,{value:"Google"},"Google"),r.a.createElement(w.a,{value:"Others"},"Others")),r.a.createElement("p",{htmlFor:"recommendedBy"},"Recommended By:"),r.a.createElement("input",{type:"text",value:this.state.recommendedBy,placeholder:"Recommended By",onChange:this.handleInputChange,name:"recommendedBy",required:!0}),r.a.createElement("div",null),r.a.createElement("button",{type:"submit",onClick:this.addRecord}," ","Submit"))))}}]),a}(n.Component),ve=Object(d.g)(ge),fe=(a(146),a(204)),pe=a(199),be=Object(y.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),Oe=Object(y.a)((function(e){return{textfield:{"& > *":{margin:e.spacing(1),width:"25ch"}}}})),ye=Object(d.g)((function(e){var t=Oe(),a=be(),l=Object(n.useState)(!1),c=Object(h.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(""),s=Object(h.a)(u,2),m=s[0],d=s[1],E=Object(n.useState)(""),f=Object(h.a)(E,2),p=f[0],b=f[1],O=Object(n.useState)(""),y=Object(h.a)(O,2),j=y[0],w=y[1],S=function(e){e.persist(),"email"===e.target.name?b(e.target.value):w(e.target.value)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",null,"\xa0"),r.a.createElement("div",null,"\xa0"),r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:"/naveen-db/logo-3.png",width:"360",height:"96.33",alt:"logo-here"}))),r.a.createElement("div",{className:"login-form"},r.a.createElement("div",null,"\xa0"),r.a.createElement("div",null,"\xa0"),r.a.createElement(v.a,{style:{color:"black",backgroundColor:"white"},size:"large",variant:"contained"},"\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Login\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0"),r.a.createElement("div",null,"\xa0"),r.a.createElement("div",null,"\xa0"),r.a.createElement("form",{className:t.textfield},r.a.createElement("small",null),r.a.createElement(C.a,{variant:"outlined",type:"email",onChange:S,required:!0,error:""!==m,name:"email",id:"standard-basic",label:"Email Address",helperText:m}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),"\xa0\xa0\xa0\xa0\xa0",r.a.createElement(C.a,{type:"password",variant:"outlined",onChange:S,required:!0,name:"pwd",id:"standard-basic",label:"Password"}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement("div",null),r.a.createElement(v.a,{size:"large",variant:"contained",color:"primary",type:"submit",name:"submit",onClick:function(t){t.preventDefault(),i(!0),g.a.auth().signInWithEmailAndPassword(p,j).then((function(t){e.history.push("/dashboard")})).catch((function(e){i(!1),"auth/wrong-password"===e.code&&d("Email or Password is incorrect")}))}},"Login Now"),r.a.createElement(v.a,{style:{backgroundColor:"red",color:"white"},size:"large",variant:"contained",type:"submit",name:"submit",onClick:function(t){""===String(p).trim()?alert("Enter email address and then click Forgot Password Link"):g.a.auth().sendPasswordResetEmail(p).then((function(t){e.history.push("/resetpwd")})).catch((function(e){console.log(e)}))}},"Forgot Password?"))),r.a.createElement(fe.a,{className:a.backdrop,open:o,onClick:function(e){i(!1)}},r.a.createElement(pe.a,{color:"inherit"})))})),Ce=(a(147),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={authMessage:""},e.handleInputChange=function(t){t.persist(),e.setState((function(){return Object(Ee.a)({},t.target.name,t.target.value)}),(function(){}))},e.signIn=function(t){t.preventDefault(),g.a.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(t){alert("Account Created Successfully ! Please Login Now"),e.props.history.push("/login")})).catch((function(t){e.setState((function(){return{authMessage:t.message}}))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h2",{className:"title"},"Naveen's Db")),r.a.createElement("h3",{className:"title"},"Sign Up"),r.a.createElement("div",{className:"form"},r.a.createElement("form",null,r.a.createElement("small",{id:"err"},this.state.authMessage),r.a.createElement("p",{htmlFor:"email"},"Email"),r.a.createElement("input",{placeholder:"eg., xxx@example.com",type:"email",name:"email",onChange:this.handleInputChange,required:!0}),r.a.createElement("p",{htmlFor:"password"},"Password"),r.a.createElement("input",{placeholder:"Must be atleast 8 characters",type:"password",name:"password",onChange:this.handleInputChange,required:!0}),r.a.createElement("button",{type:"submit",name:"submit",onClick:this.signIn},"Sign In")),r.a.createElement("p",null,"Already have an account?"," ",r.a.createElement(m.b,{to:"/login"},r.a.createElement("u",null,"Login here")))))}}]),a}(n.Component)),je=Object(d.g)(Ce),we=(a(148),function(e){return r.a.createElement("div",{id:"pwdreset"},r.a.createElement("h2",null,"Password Reset"),r.a.createElement("p",null,"Hi User, Please check your Mail Inbox for Password Reset Link"),r.a.createElement("small",null,"Note: It might take a minute or two to send password reset mail. Please be patient for the time being."),r.a.createElement("small",null," Once you reset the Password, ",r.a.createElement(m.b,{to:"/login"},r.a.createElement("u",null,"Click here"))))}),Se=a(96),ke=a(200),Ne=(a(149),function(){var e=JSON.parse(localStorage.getItem("reports_data"));return r.a.createElement(n.Fragment,null,r.a.createElement(ke.a,{container:!0,justify:"center",alignContent:"center",alignItems:"center"},r.a.createElement("p",null,r.a.createElement(ke.a,{item:!0,justify:"center",alignContent:"center",alignItems:"center"},r.a.createElement(m.b,{to:"/dashboard"},r.a.createElement(v.a,{color:"secondary",variant:"contained"},r.a.createElement(p.a,null),"\xa0"," Go To Dashboard")))),r.a.createElement("div",null,r.a.createElement("p",null,"\xa0")),r.a.createElement(ke.a,{item:!0},r.a.createElement(Se.a,{chartType:"PieChart",data:[["Sales","Recommenders"],["Relatives",e.relatives],["Friends",e.friends],["Dealers",e.dealers],["Neighbours",e.neighbours],["Customers",e.customers],["JustDial",e.justDial],["Google",e.google],["Others",e.others]],options:{pieHole:.5,slices:[{color:"#2BB673"},{color:"#d91e48"},{color:"#007fad"},{color:"#e9a227"}],legend:{position:"bottom",alignment:"center",textStyle:{color:"233238",fontSize:14}},tooltip:{showColorCode:!0},chartArea:{top:30,width:"50%",height:"50%"},fontName:"Roboto"},graph_id:"PieChart",width:"100%",height:"400px",legend_toggle:!0}))))}),xe=a(98),De=a.n(xe),Re=a(99),Ie=a.n(Re),Ae=(a(152),function(e){r.a.useRef("canvas");return r.a.createElement(r.a.Fragment,null,r.a.createElement(De.a,{penColor:"green",canvasProps:{width:400,height:500,className:"sigCanvas",id:"signatureCanvas"}}),r.a.createElement("button",{onClick:function(){var e=document.getElementById("signatureCanvas");Ie()(e,{name:"signature",type:"jpg",quality:.5})}},"Save Signature"))}),Fe=function(){return r.a.createElement(m.a,{basename:"/"},r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/naveen-db/",render:function(){return r.a.createElement(d.a,{to:"/login"})}}),r.a.createElement(d.b,{exact:!0,path:"/",render:function(){return r.a.createElement(d.a,{to:"/login"})}}),r.a.createElement(d.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(ye,null)}}),r.a.createElement(d.b,{exact:!0,path:"/signup",render:function(){return r.a.createElement(je,null)}}),r.a.createElement(d.b,{exact:!0,path:"/dashboard",render:function(){return r.a.createElement(le,null)}}),r.a.createElement(d.b,{exact:!0,path:"/addrecords",render:function(){return r.a.createElement(N,null)}}),r.a.createElement(d.b,{exact:!0,path:"/notifications",render:function(){return r.a.createElement(me,null)}}),r.a.createElement(d.b,{exact:!0,path:"/viewrecords",render:function(){return r.a.createElement(_,null)}}),r.a.createElement(d.b,{exact:!0,path:"/editrecord/:id",render:function(){return r.a.createElement(ve,null)}}),r.a.createElement(d.b,{exact:!0,path:"/resetpwd",render:function(){return r.a.createElement(we,null)}}),r.a.createElement(d.b,{exact:!0,path:"/reports",render:function(){return r.a.createElement(Ne,null)}}),r.a.createElement(d.b,{exact:!0,path:"/generate-bill",render:function(){return r.a.createElement(Ae,null)}}),r.a.createElement(d.b,{render:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(de,null,r.a.createElement(he,null)))}})))},Pe=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Fe,null))}}]),a}(n.Component),Me=a(100),We=a.n(Me),Be=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Le(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Te={apiKey:"AIzaSyCmGN1TXfG9dTYXx80HvckdQkJpE9nTLXY",authDomain:"naveen-s-db.firebaseapp.com",databaseURL:"https://naveen-s-db.firebaseio.com",projectId:"naveen-s-db",storageBucket:"naveen-s-db.appspot.com",messagingSenderId:"941064666107",appId:"1:941064666107:web:17532e787616deadbf695e",measurementId:"G-34S1Z2T39Q"};We.a.initializeApp(Te),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Pe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/naveen-db",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/naveen-db","/service-worker.js");Be?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Le(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Le(t,e)}))}}()},87:function(e,t){}},[[113,1,2]]]);
//# sourceMappingURL=main.18047cef.chunk.js.map