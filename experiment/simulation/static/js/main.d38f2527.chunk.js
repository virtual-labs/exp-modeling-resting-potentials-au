(this["webpackJsonpamrita-neuron-simulator"]=this["webpackJsonpamrita-neuron-simulator"]||[]).push([[0],{129:function(e,t,a){},164:function(e,t){},166:function(e,t){},200:function(e,t,a){},203:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a(1),s=a.n(n),c=a(9),h=a.n(c),r=(a(129),a(207)),j=a(25),i=a(48),o=a(7),d=a(29),b=a(14),_=a(26),x=a(2),u=a(17),m={hh_params:{stim:"stim1",multi:!1,mode:"CC",hh_modes_list:["CC","VC"],T:6.3,Rm:8.31451,Cm:1e-9,F:96485.3,Vr:-47.77,c_in_na:50,c_out_na:440,c_in_k:400,c_out_k:20,c_in_cl:52,c_out_cl:560,g_na:.0265,g_k:.07,g_cl:.1,g_na_max:120,m_exp:3,m_alpha_equation:1,m_alpha_magnitude:.1,m_alpha_threshold:-40,m_alpha_slope:-.1,m_beta_equation:0,m_beta_magnitude:4,m_beta_threshold:-65,m_beta_slope:-.05555,h_exp:1,h_alpha_equation:0,h_alpha_magnitude:.07,h_alpha_threshold:-65,h_alpha_slope:-.05,h_beta_equation:2,h_beta_magnitude:1,h_beta_threshold:-35,h_beta_slope:-.1,g_k_max:36,n_exp:4,n_alpha_equation:1,n_alpha_magnitude:.01,n_alpha_threshold:-55,n_alpha_slope:-.1,n_beta_equation:0,n_beta_magnitude:.125,n_beta_threshold:-65,n_beta_slope:-.0125,g_user_max:0,p_exp:3,p_alpha_equation:1,p_alpha_magnitude:.1,p_alpha_threshold:-40,p_alpha_slope:.1,p_beta_equation:3,p_beta_magnitude:4,p_beta_threshold:-65,p_beta_slope:-.05555,exponent:3,q_alpha_equation:3,q_alpha_magnitude:.07,q_alpha_threshold:-65,q_alpha_slope:-.05,q_beta_equation:2,q_beta_magnitude:1,q_beta_threshold:-35,q_beta_slope:-.1,ttx:0,tea:0,pronase:0,s1_time1:[0,50],s1_v1:30,s1_time2:[50,60],s1_v2:20,s2_time1:[0,20],s2_v1:40,s2_time2:[13,48],s2_v2:40,v1y:-60,v1x:20,v2y:-20,v2x:20,v3y:-60,v3x:20},hh_param_list:[],hh_outputs:{V:[],I:[],T_steps:[]}},O=a(146),p=u.LineChart,v=u.Line,g=(u.Cell,u.XAxis),f=u.YAxis,C=u.CartesianGrid,F=u.Tooltip,M=u.Legend,w=u.ResponsiveContainer;var q=function(){var e=Object(n.useState)(m),t=Object(_.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),h=Object(_.a)(c,2),j=h[0],i=h[1],o=Object(n.useState)(!1),u=Object(_.a)(o,2),q=u[0],R=u[1],k=Object(n.useState)(!1),V=Object(_.a)(k,2),T=V[0],y=V[1],G=a.hh_outputs.T_steps.map((function(e,t){return{name:e,v:a.hh_outputs.V[t]}})),A=function(e,t){s(Object(b.a)(Object(b.a)({},a),{},{hh_params:Object(b.a)(Object(b.a)({},a.hh_params),{},Object(d.a)({},e,t))}))},N=function(){var e=a.hh_params;console.log(e.mode),"CC"===e.mode?function(){var t=e.stim,l=e.T,n=e.Rm,c=e.Cm,h=e.F,r=(e.Vr,e.c_in_na),j=e.c_out_na,i=e.c_in_k,o=e.c_out_k,d=e.c_in_cl,_=e.c_out_cl,x=e.g_na,u=e.g_k,m=e.g_cl,O=e.g_na_max,p=e.m_exp,v=e.m_alpha_equation,g=e.m_alpha_magnitude,f=e.m_alpha_threshold,C=e.m_alpha_slope,F=e.m_beta_equation,M=e.m_beta_magnitude,w=e.m_beta_threshold,q=e.m_beta_slope,R=e.h_exp,k=e.h_alpha_equation,V=e.h_alpha_magnitude,T=e.h_alpha_threshold,y=e.h_alpha_slope,G=e.h_beta_equation,A=e.h_beta_magnitude,N=e.h_beta_threshold,S=e.h_beta_slope,L=e.g_k_max,K=e.n_exp,E=e.n_alpha_equation,I=e.n_alpha_magnitude,D=e.n_alpha_threshold,H=e.n_alpha_slope,P=e.n_beta_equation,B=e.n_beta_magnitude,J=e.n_beta_threshold,X=e.n_beta_slope,U=e.ttx,Y=e.tea,z=e.pronase,Q=e.s1_time1,W=e.s1_v1,Z=e.s1_time2,$=e.s1_v2,ee=[0,20],te=[13,18],ae=[],le=[],ne=[],se=[],ce=[],he=[],re=parseFloat((n*(l+273.16)/h*Math.log(j/r)*1e3).toFixed(2)),je=parseFloat((n*(l+273.16)/h*Math.log(o/i)*1e3).toFixed(2)),ie=parseFloat((n*(l+273.16)/(-1*h)*Math.log(_/d)*1e3).toFixed(2));function oe(e,t,a,l){switch(e){case 0:return t*Math.exp((1e3*we[0]-a)*l);case 1:return t*(1e3*we[0]-a)/(1-Math.exp((1e3*we[0]-a)*l));case 2:return t/(1+Math.exp((1e3*we[0]-a)*l));case 3:return 0}}function de(e){!function(){var e=oe(Se,Pe,Be,Je),t=oe(Le,Xe,Ue,Ye),a=oe(Ke,Qe,We,Ze),l=oe(Ee,$e,et,tt),n=oe(Ie,lt,nt,st),s=oe(De,ct,ht,rt),c=e-(e+t)*ge[0],h=Math.max(0,ge[0]+c*Ot*1e3);ge[0]=Math.min(1,h);var r=n-(n+s)*Ce[0],j=Math.max(0,Ce[0]+r*Ot*1e3);Ce[0]=Math.min(1,j);var i=a-(a+l)*fe[0],o=Math.max(0,fe[0]+i*Ot*1e3);fe[0]=Math.min(1,o)}(),1===z&&(fe[0]=1);var t=1e6*Re*(Te-we[0]),a=1e6*ke*(ye-we[0]),l=1e6*Ve*(Ge-we[0]);mt[0]=t+a+l;var n=1e6*Ae*Math.pow(ge[0],He)*Math.pow(fe[0],ze)*(Te-we[0]),s=1e6*Ne*Math.pow(Ce[0],at)*(ye-we[0]),c=1e3*Ot*(t+a+l+n+s+1e6*e)/(1e9*qe);return xt&&(me[0]=n,Oe[0]=s,pe[0]=1e6*Ae*Math.pow(ge[0],He)*Math.pow(fe[0],ze),ve[0]=1e6*Ne*Math.pow(Ce[0],at)),c}var be=[],_e=[],xe=[],ue=[],me=[],Oe=[],pe=[],ve=[],ge=[],fe=[],Ce=[],Fe=[],Me=[],we=[],qe=c;we.push(-.06339),ge[0]=.068775,fe[0]=.515186,Ce[0]=.35286656;var Re=1e-6*x,ke=1e-6*u,Ve=1e-6*m,Te=.001*re,ye=.001*je,Ge=.001*ie,Ae=1e-6*O,Ne=1e-6*L;console.log(qe,Ve,ke,Re),console.log(Te,ye,Ge),Ae-=Ae*U/100,Ne-=Ne*Y/100,console.log(Ae,Ne),console.log(Y,U);var Se=v,Le=F,Ke=k,Ee=G,Ie=E,De=P,He=p,Pe=g,Be=f,Je=C,Xe=M,Ue=w,Ye=q;console.log(He,Pe,Be,Je,Xe,Ue,Ye);var ze=R,Qe=V,We=T,Ze=y,$e=A,et=N,tt=S;console.log(ze,Qe,We,Ze,$e,et,tt);var at=K,lt=I,nt=D,st=H,ct=B,ht=J,rt=X;if(console.log(at,lt,nt,st,ct,ht,rt),"stim1"===t)var jt=Q[0],it=Q[1],ot=W,dt=Z[0],bt=Z[1],_t=$;else"stim2"===t&&(jt=ee[0],it=ee[1],ot=20,dt=te[0],bt=te[1],_t=20);var xt,ut=[],mt=[],Ot=1e-4;mt[0]=0;var pt=0;!function(){for(var e=0;e<10*jt;)ut.push(0),e++;for(e=0;e<10*it;)ut.push(1e-9*ot),e++;for(e=0;e<10*dt;)ut.push(0),e++;for(e=0;e<10*bt;)ut.push(1e-9*_t),e++;for(e=0;e<300;)ut.push(0),e++}();for(var vt=1,gt=0;vt<ut.length;){vt++;for(var ft=1;ft;){ft=0,ge[1]=ge[0],Ce[1]=Ce[0],fe[1]=fe[0],we[1]=we[0],mt[1]=mt[0],xt=!0;var Ct=de(ut[gt]);ge[3]=ge[0],Ce[3]=Ce[0],fe[3]=fe[0],we[3]=we[0],mt[3]=mt[0],xt=!1;var Ft=.5*(Ct+de(ut[gt]));ge[2]=ge[0],Ce[2]=Ce[0],Fe[2]=Fe[0],Me[2]=Me[0],fe[2]=fe[0],mt[2]=.5*(mt[0]+mt[3]),we[2]=we[0],ge[2]=.5*(ge[0]+ge[3]),fe[2]=.5*(fe[0]+fe[3]),Ce[2]=.5*(Ce[0]+Ce[3]);var Mt=Math.abs(Ct-Ft)/Ot,wt=Math.abs(Ce[3]-Ce[2]);(Mt>30||wt>.01)&&(ft=1,ge[0]=ge[1],Ce[0]=Ce[1],fe[0]=fe[1],we[0]=we[1],mt[0]=mt[1],Ot/=2)}gt++,ge[0]=ge[2],Ce[0]=Ce[2],fe[0]=fe[2],we[0]=we[2],mt[0]=mt[2],we[0]=we[0]+Ft,Mt<10&&wt<.003&&Ot<1e-4&&(Ot*=2),pt+=Ot,ae.push(parseFloat(pt.toFixed(3))),console.log(we[0]),_e.push(parseFloat(ge[0].toFixed(3))),xe.push(parseFloat(fe[0].toFixed(3))),ue.push(parseFloat(Ce[0].toFixed(3))),be.push(1e3*parseFloat(we[0].toFixed(3))),le.push(parseFloat(mt[0].toFixed(3))),ne.push(parseFloat(me[0].toFixed(3))),se.push(parseFloat(Oe[0].toFixed(3))),ce.push(parseFloat(pe[0].toFixed(3))),he.push(parseFloat(ve[0].toFixed(3)))}s(Object(b.a)(Object(b.a)({},a),{},{hh_outputs:{V:be,m:_e,n:ue,h:xe,T_steps:ae}}))}():"VC"===e.mode?function(){var t=8.31451,l=96485.3,n=e.m_alpha_equation,c=e.m_alpha_magnitude,h=e.m_alpha_threshold,r=e.m_alpha_slope,j=e.m_beta_equation,i=e.m_beta_magnitude,o=e.m_beta_threshold,d=e.m_beta_slope,_=e.h_exp,x=e.h_alpha_equation,u=e.h_alpha_magnitude,m=e.h_alpha_threshold,O=e.h_alpha_slope,p=e.h_beta_equation,v=e.h_beta_magnitude,g=e.h_beta_threshold,f=e.h_beta_slope,C=e.g_k_max,F=e.n_exp,M=e.n_alpha_equation,w=e.n_alpha_magnitude,q=e.n_alpha_threshold,R=e.n_alpha_slope,k=e.n_beta_equation,V=e.n_beta_magnitude,T=e.n_beta_threshold,y=e.n_beta_slope,G=[],A=[],N=[],S=[],L=[],K=[],E=[],I=[],D=[],H=[],P=e.v1y,B=e.v1x,J=e.v2y,X=e.v2x,U=e.v3y,Y=e.v3x,z=parseFloat((t*(6.3+273.16)/l*Math.log(8.8)*1e3).toFixed(2)),Q=parseFloat((t*(6.3+273.16)/l*Math.log(.05)*1e3).toFixed(2)),W=parseFloat((-.024082144788895306*Math.log(560/52)*1e3).toFixed(2)),Z=[],$=[],ee=[],te=[],ae=[],le=[],ne=[],se=[];ae[0]=.068775,le[0]=.515186,ne[0]=.35286656,se.push(-.06339),ae[0]=.068775,le[0]=.515186,ne[0]=.35286656;var ce=2.65e-8,he=7e-8,re=1e-7,je=.001*z,ie=.001*Q,oe=.001*W,de=120*1e-6,be=1e-6*C;console.log(1e-9,re,he,ce),console.log(je,ie,oe),de-=0*de/100,be-=0*be/100,console.log(de,be),console.log(0,0);var _e,xe=n,ue=j,me=x,Oe=p,pe=M,ve=k,ge=c,fe=h,Ce=r,Fe=i,Me=o,we=d,qe=_,Re=u,ke=m,Ve=O,Te=v,ye=g,Ge=f,Ae=F,Ne=w,Se=q,Le=R,Ke=V,Ee=T,Ie=y,De=0,He=(N=[],[]),Pe=[],Be=5e-5;Pe[0]=0;var Je=0;function Xe(e,t,a,l){switch(e){case 0:var n=t*Math.exp((1e3*at-a)*l);return n;case 1:return t*(1e3*at-a)/(1-Math.exp((1e3*at-a)*l));case 2:return t/(1+Math.exp((1e3*at-a)*l));case 3:default:return 0}}function Ue(){!function(){1e3*at===fe&&(fe=Number(fe)+.01);var e=Xe(xe,ge,fe,Ce),t=Xe(ue,Fe,Me,we),a=Xe(me,Re,ke,Ve),l=Xe(Oe,Te,ye,Ge),n=Xe(pe,Ne,Se,Le),s=Xe(ve,Ke,Ee,Ie),c=e-(e+t)*ae[0],h=Math.max(0,ae[0]+c*Be*1e3);ae[0]=Math.min(1,h);var r=n-(n+s)*ne[0],j=Math.max(0,ne[0]+r*Be*1e3);ne[0]=Math.min(1,j);var i=a-(a+l)*le[0],o=Math.max(0,le[0]+i*Be*1e3);le[0]=Math.min(1,o)}(),console.log("VO",at),console.log(oe,ie,je,ce,he,re);var e=.0265*(je-at),t=.07*(ie-at),a=1e6*re*(oe-at);Pe[0]=e+t+a;var l=1e6*de*Math.pow(ae[0],3)*Math.pow(le[0],qe)*(je-at),n=1e6*be*Math.pow(ne[0],Ae)*(ie-at),s=1*Je/.05-(Pe[0]+l+n);return _e&&(Z[0]=l,$[0]=n,ee[0]=1e6*de*Math.pow(ae[0],3)*Math.pow(le[0],qe),te[0]=1e6*be*Math.pow(ne[0],Ae)),s}var Ye=void 0,ze=void 0,Qe=void 0,We=[];We[0]=0;var Ze=0,$e=0;se.splice(0,se.length);var et=0,tt=0;for(function(){for(var e=0;e<10*B;)se.push(.001*P),e++;for(e=0;e<10*X;)se.push(.001*J),e++;for(e=0;e<10*Y;)se.push(.001*U),e++}();et<se.length;){et++,ae[1]=ae[0],ne[1]=ne[0],le[1]=le[0],We[1]=We[0];var at=se[tt];_e=!0,ze=Ue(),ae[3]=ae[0],ne[3]=ne[0],le[3]=le[0],se[3]=se[0],We[3]=We[0],_e=!1,Qe=.5*(ze+Ue()),ae[2]=ae[0],ne[2]=ne[0],le[2]=le[0],We[2]=We[0],We[2]=.5*(We[0]+We[3]),ae[2]=.5*(ae[0]+ae[3]),le[2]=.5*(le[0]+le[3]),ne[2]=.5*(ne[0]+ne[3]),ae[0]=ae[2],ne[0]=ne[2],le[0]=le[2],We[0]=We[2],Ye=Qe,Ze?(Math.abs(Je)>0&&($e=41),$e>=1&&$e--,tt<5?(Je=0,tt+=1):(Je=se[tt]-se[tt-1],tt+=1)):Ze=1,K.push(parseFloat(De.toFixed(2))),N.push(parseFloat(ae[0].toFixed(3))),G.push(parseFloat(le[0].toFixed(3))),A.push(parseFloat(ne[0].toFixed(3))),E.push(-1*Z[0].toFixed(3)),I.push(-1*$[0].toFixed(3)),He.push(1e3*Ye.toFixed(3)),D.push(parseFloat(ee[0].toFixed(3))),H.push(parseFloat(te[0].toFixed(3))),De+=.01,s(Object(b.a)(Object(b.a)({},a),{},{hh_outputs:{V:He,m:N,n:L,h:S,T_steps:K}}))}}():alert("Unknown Mode")};return Object(l.jsx)("div",{children:Object(l.jsx)(x.Grid,{fluid:!0,children:Object(l.jsxs)(x.Row,{children:[Object(l.jsx)(x.Col,{md:8,children:Object(l.jsx)(w,{children:Object(l.jsxs)(p,{data:G,margin:{top:5,right:30,left:20,bottom:5},children:[Object(l.jsx)(C,{}),Object(l.jsx)(g,{dataKey:"name"}),Object(l.jsx)(f,{}),Object(l.jsx)(F,{}),Object(l.jsx)(M,{}),Object(l.jsx)(v,{type:"monotone",dataKey:"v",stroke:"#8884d8",dot:!1})]})})}),Object(l.jsx)(x.Col,{md:4,children:Object(l.jsxs)(r.b,{children:[Object(l.jsx)("h5",{children:"Run Control"}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{class:"bp3-select .modifier",children:Object(l.jsxs)("select",{onChange:function(e){return t=e.target.value,void s(Object(b.a)(Object(b.a)({},a),{},{hh_params:Object(b.a)(Object(b.a)({},a.hh_params),{},{mode:t})}));var t},children:[Object(l.jsx)("option",{selected:"CC"===a.hh_params.mode,value:"CC",children:"Current Clamp"}),Object(l.jsx)("option",{selected:"VC"===a.hh_params.mode,value:"VC",children:"Volatge Clamp"})]})})}),Object(l.jsx)(r.d,{vertical:!0}),Object(l.jsx)("div",{children:Object(l.jsxs)(r.b,{children:[Object(l.jsx)(x.Grid,{children:Object(l.jsxs)(x.Row,{children:[Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.f,{children:"Cm :"})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.Cm,onChange:function(e){return A("Cm",e.target.value)}})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.f,{children:"Rm : "})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.Rm,onChange:function(e){return A("Rm",e.target.value)}})})]})}),Object(l.jsx)(x.Grid,{children:Object(l.jsxs)(x.Row,{children:[Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.f,{children:"T :"})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.T,onChange:function(e){return A("T",e.target.value)}})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.f,{children:"F : "})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.F,onChange:function(e){return A("F",e.target.value)}})})]})}),Object(l.jsx)(x.Grid,{children:Object(l.jsxs)(x.Row,{children:[Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.f,{children:"Vr :"})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.Vr,onChange:function(e){return A("Vr",e.target.value)}})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.f,{})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,disabled:!0})})]})})]})}),Object(l.jsx)(r.d,{vertical:!0}),Object(l.jsx)("div",{children:Object(l.jsxs)(r.b,{children:[Object(l.jsx)(x.Grid,{children:Object(l.jsxs)(x.Row,{children:[Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.f,{children:"gNa :"})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.g_na,onChange:function(e){return A("g_na",e.target.value)}})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.f,{children:"gK : "})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.g_k,onChange:function(e){return A("g_k",e.target.value)}})})]})}),Object(l.jsx)(x.Grid,{children:Object(l.jsxs)(x.Row,{children:[Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.f,{children:"gCl :"})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.g_cl,onChange:function(e){return A("g_cl",e.target.value)}})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.f,{})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{disabled:!0,fill:!1,small:!0})})]})})]})}),Object(l.jsx)(r.d,{vertical:!0}),Object(l.jsx)("div",{children:Object(l.jsxs)(r.b,{children:[Object(l.jsx)(r.a,{text:"Channel",onClick:function(){return y(!T)},minimal:!0}),Object(l.jsxs)(r.c,{isOpen:T,children:[Object(l.jsx)(x.Grid,{children:Object(l.jsxs)(x.Row,{children:[Object(l.jsx)(x.Col,{md:3,children:Object(l.jsxs)(r.f,{children:["Na",Object(l.jsx)("sub",{children:"in"}),":"]})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.c_in_na,onChange:function(e){return A("c_in_na",e.target.value)}})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsxs)(r.f,{children:["Na",Object(l.jsx)("sub",{children:"out"}),":"]})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.c_out_na,onChange:function(e){return A("c_out_na",e.target.value)}})})]})}),Object(l.jsx)(x.Grid,{children:Object(l.jsxs)(x.Row,{children:[Object(l.jsx)(x.Col,{md:3,children:Object(l.jsxs)(r.f,{children:["Cl",Object(l.jsx)("sub",{children:"in"}),":"]})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.c_in_cl,onChange:function(e){return A("c_in_cl",e.target.value)}})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsxs)(r.f,{children:["Cl",Object(l.jsx)("sub",{children:"out"})]})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.c_out_cl,onChange:function(e){return A("c_out_cl",e.target.value)}})})]})}),Object(l.jsx)(x.Grid,{children:Object(l.jsxs)(x.Row,{children:[Object(l.jsx)(x.Col,{md:3,children:Object(l.jsxs)(r.f,{children:["K",Object(l.jsx)("sub",{children:"in"}),":"]})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.c_in_k,onChange:function(e){return A("c_in_k",e.target.value)}})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsxs)(r.f,{children:["K",Object(l.jsx)("sub",{children:"out"})]})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.c_out_k,onChange:function(e){return A("c_out_k",e.target.value)}})})]})})]})]})}),Object(l.jsx)(r.d,{vertical:!0}),Object(l.jsx)("div",{children:Object(l.jsxs)(r.b,{children:[Object(l.jsx)(r.a,{minimal:!0,text:"Drugs",onClick:function(){return R(!q)}}),Object(l.jsx)(r.c,{isOpen:q,children:Object(l.jsxs)(x.Grid,{children:[Object(l.jsxs)(x.Row,{children:[Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.f,{children:"TEA:"})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.tea,onChange:function(e){return A("tea",e.target.value)}})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.f,{children:"TTX:"})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.ttx,onChange:function(e){return A("ttx",e.target.value)}})})]}),Object(l.jsxs)(x.Row,{children:[Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.f,{children:"Pronase:"})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.pronase,onChange:function(e){return A("pronase",e.target.value)}})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.f,{})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,disabled:!0})})]})]})})]})}),Object(l.jsx)(r.d,{vertical:!0}),Object(l.jsx)("div",{children:Object(l.jsxs)(r.b,{children:[Object(l.jsx)(r.a,{minimal:!0,text:"Input",onClick:function(){return i(!j)}}),Object(l.jsx)(r.c,{isOpen:j,children:"CC"===a.hh_params.mode?Object(l.jsxs)(x.Grid,{children:[Object(l.jsxs)(x.Row,{children:[Object(l.jsx)(x.Col,{md:3,children:Object(l.jsxs)(r.f,{children:["T1",Object(l.jsx)("sub",{children:"start"})]})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.s1_time1[0],onChange:function(e){return A("s1_time1",e.target.value)}})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsxs)(r.f,{children:["T1",Object(l.jsx)("sub",{children:"stop"})]})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.s1_time1[1],onChange:function(e){return A("s1_time2",e.target.value)}})})]}),Object(l.jsxs)(x.Row,{children:[Object(l.jsx)(x.Col,{md:3,children:Object(l.jsxs)(r.f,{children:["T2",Object(l.jsx)("sub",{children:"start"})]})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.s1_time2[0],onChange:function(e){return A("s1_time1",e.target.value)}})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsxs)(r.f,{children:["T2",Object(l.jsx)("sub",{children:"stop"})]})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.s1_time2[1],onChange:function(e){return A("s1_time2",e.target.value)}})})]}),Object(l.jsx)(x.Row,{children:Object(l.jsxs)(x.Row,{children:[Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.f,{children:"V1"})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.s1_v1,onChange:function(e){return A("s1_v1",e.target.value)}})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.f,{children:"V2"})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.s1_v2,onChange:function(e){return A("s1_v2",e.target.value)}})})]})})]}):"VC"===a.hh_params.mode?Object(l.jsx)("div",{children:Object(l.jsxs)(x.Grid,{children:[Object(l.jsxs)(x.Row,{children:[Object(l.jsx)(x.Col,{md:3,children:Object(l.jsxs)(r.f,{children:["V",Object(l.jsx)("sub",{children:"1"})]})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.v1x,onChange:function(e){return A("v1x",e.target.value)}})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsxs)(r.f,{children:["V",Object(l.jsx)("sub",{children:"2"})]})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.v1y,onChange:function(e){return A("v1y",e.target.value)}})})]}),Object(l.jsxs)(x.Row,{children:[Object(l.jsx)(x.Col,{md:3,children:Object(l.jsxs)(r.f,{children:["V",Object(l.jsx)("sub",{children:"3"})]})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.v2x,onChange:function(e){return A("v2x",e.target.value)}})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsxs)(r.f,{children:["V",Object(l.jsx)("sub",{children:"4"})]})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.v2y,onChange:function(e){return A("v2y",e.target.value)}})})]}),Object(l.jsx)(x.Row,{children:Object(l.jsxs)(x.Row,{children:[Object(l.jsx)(x.Col,{md:3,children:Object(l.jsxs)(r.f,{children:["V",Object(l.jsx)("sub",{children:"5"})]})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.v3x,onChange:function(e){return A("v3x",e.target.value)}})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsxs)(r.f,{children:["V",Object(l.jsx)("sub",{children:"6"})]})}),Object(l.jsx)(x.Col,{md:3,children:Object(l.jsx)(r.e,{fill:!1,small:!0,value:a.hh_params.v3y,onChange:function(e){return A("v3y",e.target.value)}})})]})})]})}):Object(l.jsx)("div",{})})]})}),Object(l.jsxs)("div",{children:[Object(l.jsx)(r.d,{}),Object(l.jsx)(r.a,{onClick:function(){return N()},children:"Run"}),Object(l.jsx)(r.a,{onClick:function(){O(a.hh_outputs,(function(e,t){if(e)return console.log(e);console.log(t)}))},disabled:!0,children:"Export Data"})]})]})})]})})})},R="./static/media/Amritalogo.74a0debe.png",k="./static/media/vlablogo2.00a678a6.jpg";a(200);var V=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{className:"App bp3-dark",style:{margin:"0 auto",width:"80%"},children:[Object(l.jsxs)(r.g,{children:[Object(l.jsx)(r.g.Heading,{align:j.a.LEFT,children:"Amrita Neuron Simulator"}),Object(l.jsx)(i.b,{to:"/",children:Object(l.jsx)(r.a,{className:"bp3-minimal",text:"HH"})})]}),Object(l.jsxs)(r.b,{children:[Object(l.jsx)(o.c,{children:Object(l.jsx)(o.a,{path:"/",exact:!0,component:q})}),Object(l.jsx)("img",{style:{width:"200px",height:"50px",paddingRight:"10px"},src:R,alt:"Amrita"}),Object(l.jsx)("img",{style:{width:"200px",height:"50px"},src:k,alt:"Amrita"})]})]})})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,208)).then((function(t){var a=t.getCLS,l=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),l(e),n(e),s(e),c(e)}))};h.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(V,{})}),document.getElementById("root")),T()}},[[203,1,2]]]);
//# sourceMappingURL=main.d38f2527.chunk.js.map