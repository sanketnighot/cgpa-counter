(this["webpackJsonpcgpa-counter"]=this["webpackJsonpcgpa-counter"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(14),r=c.n(n),m=(c(29),c(30),c(16)),j=c(1),o=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{children:Object(j.jsx)(m.a,{bg:"dark",variant:"dark",fixed:"top",children:Object(j.jsx)(m.a.Brand,{href:"https://github.com/sanketnighot",target:"_blank",className:"justify-content-center",children:Object(j.jsx)("center",{children:"CGPA Counter"})})})})})},i=c(24),b=c(8),l=c(7),d=c(10),O=c(21),h=c(23),p=c(20),x=c(3),u=c.n(x),g=function(){var e=Object(a.useState)(u.a.get("csem1")||""),t=Object(b.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(u.a.get("csem2")||""),r=Object(b.a)(n,2),m=r[0],o=r[1],i=Object(a.useState)(u.a.get("csem3")||""),x=Object(b.a)(i,2),g=x[0],v=x[1],S=Object(a.useState)(u.a.get("csem4")||""),P=Object(b.a)(S,2),f=P[0],C=P[1],k=Object(a.useState)(u.a.get("csem5")||""),y=Object(b.a)(k,2),A=y[0],F=y[1],T=Object(a.useState)(u.a.get("csem6")||""),E=Object(b.a)(T,2),G=E[0],N=E[1],w=Object(a.useState)(u.a.get("csem7")||""),B=Object(b.a)(w,2),R=B[0],D=B[1],I=Object(a.useState)(u.a.get("csem8")||""),J=Object(b.a)(I,2),L=J[0],_=J[1],M=Object(a.useState)(u.a.get("psem1")||""),q=Object(b.a)(M,2),z=q[0],H=q[1],K=Object(a.useState)(u.a.get("psem2")||""),Q=Object(b.a)(K,2),U=Q[0],V=Q[1],W=Object(a.useState)(u.a.get("psem3")||""),X=Object(b.a)(W,2),Y=X[0],Z=X[1],$=Object(a.useState)(u.a.get("psem4")||""),ee=Object(b.a)($,2),te=ee[0],ce=ee[1],ae=Object(a.useState)(u.a.get("psem5")||""),se=Object(b.a)(ae,2),ne=se[0],re=se[1],me=Object(a.useState)(u.a.get("psem6")||""),je=Object(b.a)(me,2),oe=je[0],ie=je[1],be=Object(a.useState)(u.a.get("psem7")||""),le=Object(b.a)(be,2),de=le[0],Oe=le[1],he=Object(a.useState)(u.a.get("psem8")||""),pe=Object(b.a)(he,2),xe=pe[0],ue=pe[1],ge=Object(a.useState)(0),ve=Object(b.a)(ge,2),Se=ve[0],Pe=ve[1],fe=Object(a.useState)(0),Ce=Object(b.a)(fe,2),ke=Ce[0],ye=Ce[1],Ae=Object(a.useState)("checked"),Fe=Object(b.a)(Ae,2),Te=Fe[0],Ee=Fe[1],Ge=Object(a.useState)("Save and Calculate Average"),Ne=Object(b.a)(Ge,2),we=Ne[0],Be=Ne[1],Re=function(e){var t=e.currentTarget,c=t.name,a=t.value;"csem1"===c?(s(a),a<7?(z=(7.1*a+12).toPrecision(4).toString()+"%",0==a&&(z="Sem 1 Percentage"),H(z)):(z=(7.4*a+12).toPrecision(4).toString()+"%",H(z))):"csem2"===c?(o(a),a<7?(U=(7.1*a+12).toPrecision(4).toString()+"%",0==a&&(U="Sem 2 Percentage"),V(U)):(U=(7.4*a+12).toPrecision(4).toString()+"%",V(U))):"csem3"===c?(v(a),a<7?(Y=(7.1*a+12).toPrecision(4).toString()+"%",0==a&&(Y="Sem 3 Percentage"),Z(Y)):(Y=(7.4*a+12).toPrecision(4).toString()+"%",Z(Y))):"csem4"===c?(C(a),a<7?(te=(7.1*a+12).toPrecision(4).toString()+"%",0==a&&(te="Sem 4 Percentage"),ce(te)):(te=(7.4*a+12).toPrecision(4).toString()+"%",ce(te))):"csem5"===c?(F(a),a<7?(ne=(7.1*a+12).toPrecision(4).toString()+"%",0==a&&(ne="Sem 5 Percentage"),re(ne)):(ne=(7.4*a+12).toPrecision(4).toString()+"%",re(ne))):"csem6"===c?(N(a),a<7?(oe=(7.1*a+12).toPrecision(4).toString()+"%",0==a&&(oe="Sem 6 Percentage"),ie(oe)):(oe=(7.4*a+12).toPrecision(4).toString()+"%",ie(oe))):"csem7"===c?(D(a),a<7?(de=(7.1*a+12).toPrecision(4).toString()+"%",0==a&&(de="Sem 7 Percentage"),Oe(de)):(de=(7.4*a+12).toPrecision(4).toString()+"%",Oe(de))):"csem8"===c&&(_(a),a<7?(xe=(7.1*a+12).toPrecision(4).toString()+"%",0==a&&(xe="Sem 8 Percentage"),ue(xe)):(xe=(7.4*a+12).toPrecision(4).toString()+"%",ue(xe)))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(l.a,{className:"mb-3",children:[Object(j.jsx)(l.a.Prepend,{children:Object(j.jsx)(l.a.Text,{children:"Sem 1"})}),Object(j.jsx)(d.a,{type:"number",name:"csem1",value:c,placeholder:"Enter Sem 1 CGPA",onChange:function(e){Re(e)}}),Object(j.jsx)(d.a,{type:"text",name:"psem1",value:z,placeholder:"Sem 1 Percentage",disabled:!0})]}),Object(j.jsxs)(l.a,{className:"mb-3",children:[Object(j.jsx)(l.a.Prepend,{children:Object(j.jsx)(l.a.Text,{children:"Sem 2"})}),Object(j.jsx)(d.a,{type:"number",name:"csem2",value:m,placeholder:"Enter Sem 2 CGPA",onChange:function(e){Re(e)}}),Object(j.jsx)(d.a,{type:"text",name:"psem2",value:U,placeholder:"Sem 2 Percentage",disabled:!0})]}),Object(j.jsxs)(l.a,{className:"mb-3",children:[Object(j.jsx)(l.a.Prepend,{children:Object(j.jsx)(l.a.Text,{children:"Sem 3"})}),Object(j.jsx)(d.a,{type:"number",name:"csem3",value:g,placeholder:"Enter Sem 3 CGPA",onChange:function(e){Re(e)}}),Object(j.jsx)(d.a,{type:"text",name:"psem3",value:Y,placeholder:"Sem 3 Percentage",disabled:!0})]}),Object(j.jsxs)(l.a,{className:"mb-3",children:[Object(j.jsx)(l.a.Prepend,{children:Object(j.jsx)(l.a.Text,{children:"Sem 4"})}),Object(j.jsx)(d.a,{type:"number",name:"csem4",value:f,placeholder:"Enter Sem 4 CGPA",onChange:function(e){Re(e)}}),Object(j.jsx)(d.a,{type:"text",name:"psem4",value:te,placeholder:"Sem 4 Percentage",disabled:!0})]}),Object(j.jsxs)(l.a,{className:"mb-3",children:[Object(j.jsx)(l.a.Prepend,{children:Object(j.jsx)(l.a.Text,{children:"Sem 5"})}),Object(j.jsx)(d.a,{type:"number",name:"csem5",value:A,placeholder:"Enter Sem 5 CGPA",onChange:function(e){Re(e)}}),Object(j.jsx)(d.a,{type:"text",name:"psem5",value:ne,placeholder:"Sem 5 Percentage",disabled:!0})]}),Object(j.jsxs)(l.a,{className:"mb-3",children:[Object(j.jsx)(l.a.Prepend,{children:Object(j.jsx)(l.a.Text,{children:"Sem 6"})}),Object(j.jsx)(d.a,{type:"number",name:"csem6",value:G,placeholder:"Enter Sem 6 CGPA",onChange:function(e){Re(e)}}),Object(j.jsx)(d.a,{type:"text",name:"psem6",value:oe,placeholder:"Sem 6 Percentage",disabled:!0})]}),Object(j.jsxs)(l.a,{className:"mb-3",children:[Object(j.jsx)(l.a.Prepend,{children:Object(j.jsx)(l.a.Text,{children:"Sem 7"})}),Object(j.jsx)(d.a,{type:"number",name:"csem7",value:R,placeholder:"Enter Sem 7 CGPA",onChange:function(e){Re(e)}}),Object(j.jsx)(d.a,{type:"text",name:"psem7",value:de,placeholder:"Sem 7 Percentage",disabled:!0})]}),Object(j.jsxs)(l.a,{className:"mb-3",children:[Object(j.jsx)(l.a.Prepend,{children:Object(j.jsx)(l.a.Text,{children:"Sem 8"})}),Object(j.jsx)(d.a,{type:"number",name:"csem8",value:L,placeholder:"Enter Sem 8 CGPA",onChange:function(e){Re(e)}}),Object(j.jsx)(d.a,{type:"text",name:"psem8",value:xe,placeholder:"Sem 8 Percentage",disabled:!0})]}),Object(j.jsxs)("center",{children:[Object(j.jsx)(p.a,{children:Object(j.jsx)(p.a.Check,{type:"checkbox",id:"default-checkbox",name:"RememberData",value:Te,onChange:function(e){!function(e){var t=e.currentTarget,c=t.name,a=t.value;"checked"===a?(Ee("notchecked"),Be("Calculate Average")):"notchecked"===a&&(Ee("checked"),Be("Save and Calculate Average")),console.log(c," : ",a)}(e)},defaultChecked:!0,label:"Remember data"})}),Object(j.jsx)(O.a,{variant:"success",onClick:function(){return function(){var e=[parseFloat(c),parseFloat(m),parseFloat(g),parseFloat(f),parseFloat(A),parseFloat(G),parseFloat(R),parseFloat(L)],t=0,a=[];if(e.forEach((function(e,t){e>0&&a.push(e)})),a.forEach((function(e,c){t+=e})),(Se=(t/a.length).toPrecision(3))<7){var s=(7.1*Se+12).toPrecision(4);ye(s),Pe(Se)}else{var n=(7.4*Se+12).toPrecision(4);ye(n),Pe(Se)}"checked"===Te?(u.a.set("csem1",c),u.a.set("csem2",m),u.a.set("csem3",g),u.a.set("csem4",f),u.a.set("csem5",A),u.a.set("csem6",G),u.a.set("csem7",R),u.a.set("csem8",L),u.a.set("psem1",z),u.a.set("psem2",U),u.a.set("psem3",Y),u.a.set("psem4",te),u.a.set("psem5",ne),u.a.set("psem6",oe),u.a.set("psem7",de),u.a.set("psem8",xe)):(u.a.remove("csem1"),u.a.remove("psem1"),u.a.remove("csem2"),u.a.remove("psem2"),u.a.remove("csem3"),u.a.remove("psem3"),u.a.remove("csem4"),u.a.remove("psem4"),u.a.remove("csem5"),u.a.remove("psem5"),u.a.remove("csem6"),u.a.remove("psem6"),u.a.remove("csem7"),u.a.remove("psem7"),u.a.remove("csem8"),u.a.remove("psem8"))}()},children:we})," \xa0 \xa0 \xa0",Object(j.jsx)(O.a,{variant:"danger",onClick:function(){return s(""),o(""),v(""),C(""),F(""),N(""),D(""),_(""),H(""),V(""),Z(""),ce(""),re(""),ie(""),Oe(""),ue(""),u.a.remove("csem1"),u.a.remove("psem1"),u.a.remove("csem2"),u.a.remove("psem2"),u.a.remove("csem3"),u.a.remove("psem3"),u.a.remove("csem4"),u.a.remove("psem4"),u.a.remove("csem5"),u.a.remove("psem5"),u.a.remove("csem6"),u.a.remove("psem6"),u.a.remove("csem7"),u.a.remove("psem7"),u.a.remove("csem8"),void u.a.remove("psem8")},children:"Reset"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,responsive:"sm",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:Object(j.jsx)("center",{children:"Average CGPA"})}),Object(j.jsx)("th",{children:Object(j.jsx)("center",{children:"Average Percentage"})})]})}),Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsxs)("center",{children:[Se," CGPA "]})}),Object(j.jsx)("td",{children:Object(j.jsxs)("center",{children:[ke," %"]})})]})})]})]})]})},v=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{children:Object(j.jsx)(m.a,{bg:"dark",variant:"dark",fixed:"bottom",children:Object(j.jsx)("center",{children:Object(j.jsxs)("div",{style:{color:"white"},children:[Object(j.jsx)("a",{href:"http://linkedin.com/in/sanket-nighot",target:"_blank",rel:"noreferrer",children:"  @sanketnighot "})," \xa0 \xa0 \xa0 \xa0"]})})})})})};var S=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{style:{width:"100%"},children:Object(j.jsx)(o,{})}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"row",style:{marginTop:70,scroll:!0},children:Object(j.jsx)(i.a,{style:{marginTop:20},children:Object(j.jsx)(g,{})})}),Object(j.jsx)(v,{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})]})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};c(35);r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),P()}},[[36,1,2]]]);
//# sourceMappingURL=main.7840f74f.chunk.js.map