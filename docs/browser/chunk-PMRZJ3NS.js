import{$ as _e,Ca as we,Da as Pe,Ea as Ie,Fa as Oe,Ga as Be,Ha as Le,Ia as je,La as qe,Ma as He,_ as Ce,aa as Se,ba as ye,ca as Te,h as fe,i as he,j as ge,ja as xe,k as ve,ma as Ne,na as De,oa as ke,qa as be,sa as Me,t as V,u as G,ua as Ae,va as Fe,wa as Ee}from"./chunk-TUCOI77A.js";import{A as le,B as ce,C as de,E as pe,T as me,V as y,j as ne,kb as ue,lb as A,m as ie,q as oe,r as L,u as ae,v as re,xb as ze,y as se}from"./chunk-SAZXBRTL.js";import"./chunk-6UJOJNZQ.js";import{$a as r,Ab as f,Bb as K,Db as W,Eb as J,Fb as s,Gb as l,Hb as h,Ib as _,Jb as S,Ob as Z,Qb as p,Qc as ee,Rb as k,Rc as te,Sb as b,Ub as H,Vb as X,Vc as B,Wb as P,Wc as R,X as j,Xb as I,Zb as m,_b as M,ab as u,ca as F,cb as $,f as U,fc as C,gc as Y,l as g,ma as v,na as E,oa as w,qb as d,sb as c,tb as D,ub as T,vc as O,wa as q}from"./chunk-JQ54NTA4.js";import"./chunk-4XSKOKL7.js";import{a as N}from"./chunk-P2VZOJAX.js";var Je=["nzType","avatar"];var Ze=["*"];function Xe(e,t){if(e&1&&(s(0,"div",5),h(1,"nz-skeleton-element",6),l()),e&2){let a=p(2);r(),c("nzSize",a.avatar.size||"default")("nzShape",a.avatar.shape||"circle")}}function Ye(e,t){if(e&1&&h(0,"h3",7),e&2){let a=p(2);D("width",a.toCSSUnit(a.title.width))}}function et(e,t){if(e&1&&h(0,"li"),e&2){let a=t.index,n=p(3);D("width",n.toCSSUnit(n.widthList[a]))}}function tt(e,t){if(e&1&&(s(0,"ul",8),d(1,et,1,2,"li",9),l()),e&2){let a=p(2);r(),c("ngForOf",a.rowsList)}}function nt(e,t){if(e&1&&(_(0),d(1,Xe,2,2,"div",1),s(2,"div",2),d(3,Ye,1,2,"h3",3)(4,tt,2,1,"ul",4),l(),S()),e&2){let a=p();r(),c("ngIf",!!a.nzAvatar),r(2),c("ngIf",!!a.nzTitle),r(),c("ngIf",!!a.nzParagraph)}}function it(e,t){e&1&&(_(0),b(1),S())}var ot=(()=>{let t=class t{constructor(){this.nzActive=!1,this.nzBlock=!1}};t.\u0275fac=function(o){return new(o||t)},t.\u0275dir=w({type:t,selectors:[["nz-skeleton-element"]],hostAttrs:[1,"ant-skeleton","ant-skeleton-element"],hostVars:4,hostBindings:function(o,i){o&2&&T("ant-skeleton-active",i.nzActive)("ant-skeleton-block",i.nzBlock)},inputs:{nzActive:"nzActive",nzType:"nzType",nzBlock:"nzBlock"},standalone:!0});let e=t;return g([y()],e.prototype,"nzBlock",void 0),e})();var at=(()=>{let t=class t{constructor(){this.nzShape="circle",this.nzSize="default",this.styleMap={}}ngOnChanges(n){if(n.nzSize&&typeof this.nzSize=="number"){let o=`${this.nzSize}px`;this.styleMap={width:o,height:o,"line-height":o}}else this.styleMap={}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=v({type:t,selectors:[["nz-skeleton-element","nzType","avatar"]],inputs:{nzShape:"nzShape",nzSize:"nzSize"},standalone:!0,features:[q,C],attrs:Je,decls:1,vars:9,consts:[[1,"ant-skeleton-avatar",3,"ngStyle"]],template:function(o,i){o&1&&h(0,"span",0),o&2&&(T("ant-skeleton-avatar-square",i.nzShape==="square")("ant-skeleton-avatar-circle",i.nzShape==="circle")("ant-skeleton-avatar-lg",i.nzSize==="large")("ant-skeleton-avatar-sm",i.nzSize==="small"),c("ngStyle",i.styleMap))},dependencies:[B],encapsulation:2,changeDetection:0});let e=t;return e})();var Ve=(()=>{let t=class t{constructor(n){this.cdr=n,this.nzActive=!1,this.nzLoading=!0,this.nzRound=!1,this.nzTitle=!0,this.nzAvatar=!1,this.nzParagraph=!0,this.rowsList=[],this.widthList=[]}toCSSUnit(n=""){return me(n)}getTitleProps(){let n=!!this.nzAvatar,o=!!this.nzParagraph,i="";return!n&&o?i="38%":n&&o&&(i="50%"),N({width:i},this.getProps(this.nzTitle))}getAvatarProps(){let n=this.nzTitle&&!this.nzParagraph?"square":"circle";return N({shape:n,size:"large"},this.getProps(this.nzAvatar))}getParagraphProps(){let n=!!this.nzAvatar,o=!!this.nzTitle,i={};return(!n||!o)&&(i.width="61%"),!n&&o?i.rows=3:i.rows=2,N(N({},i),this.getProps(this.nzParagraph))}getProps(n){return n&&typeof n=="object"?n:{}}getWidthList(){let{width:n,rows:o}=this.paragraph,i=[];return n&&Array.isArray(n)?i=n:n&&!Array.isArray(n)&&(i=[],i[o-1]=n),i}updateProps(){this.title=this.getTitleProps(),this.avatar=this.getAvatarProps(),this.paragraph=this.getParagraphProps(),this.rowsList=[...Array(this.paragraph.rows)],this.widthList=this.getWidthList(),this.cdr.markForCheck()}ngOnInit(){this.updateProps()}ngOnChanges(n){(n.nzTitle||n.nzAvatar||n.nzParagraph)&&this.updateProps()}};t.\u0275fac=function(o){return new(o||t)(u(O))},t.\u0275cmp=v({type:t,selectors:[["nz-skeleton"]],hostAttrs:[1,"ant-skeleton"],hostVars:6,hostBindings:function(o,i){o&2&&T("ant-skeleton-with-avatar",!!i.nzAvatar)("ant-skeleton-active",i.nzActive)("ant-skeleton-round",!!i.nzRound)},inputs:{nzActive:"nzActive",nzLoading:"nzLoading",nzRound:"nzRound",nzTitle:"nzTitle",nzAvatar:"nzAvatar",nzParagraph:"nzParagraph"},exportAs:["nzSkeleton"],standalone:!0,features:[q,C],ngContentSelectors:Ze,decls:2,vars:2,consts:[[4,"ngIf"],["class","ant-skeleton-header",4,"ngIf"],[1,"ant-skeleton-content"],["class","ant-skeleton-title",3,"width",4,"ngIf"],["class","ant-skeleton-paragraph",4,"ngIf"],[1,"ant-skeleton-header"],["nzType","avatar",3,"nzSize","nzShape"],[1,"ant-skeleton-title"],[1,"ant-skeleton-paragraph"],[3,"width",4,"ngFor","ngForOf"]],template:function(o,i){o&1&&(k(),d(0,nt,5,3,"ng-container",0)(1,it,2,0,"ng-container",0)),o&2&&(c("ngIf",i.nzLoading),r(),c("ngIf",!i.nzLoading))},dependencies:[ot,at,te,ee],encapsulation:2,changeDetection:0});let e=t;return e})(),Ge=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=E({type:t}),t.\u0275inj=F({});let e=t;return e})();function st(e,t){}function lt(e,t){if(e&1&&(s(0,"div",0),d(1,st,0,0,"ng-template",2),l()),e&2){let a=p();r(),c("ngTemplateOutlet",a.nzAvatar)}}function ct(e,t){if(e&1&&(_(0),m(1),S()),e&2){let a=p(3);r(),M(a.nzTitle)}}function dt(e,t){if(e&1&&(s(0,"div",3),d(1,ct,2,1,"ng-container",5),l()),e&2){let a=p(2);r(),c("nzStringTemplateOutlet",a.nzTitle)}}function pt(e,t){if(e&1&&(_(0),m(1),S()),e&2){let a=p(3);r(),M(a.nzDescription)}}function mt(e,t){if(e&1&&(s(0,"div",4),d(1,pt,2,1,"ng-container",5),l()),e&2){let a=p(2);r(),c("nzStringTemplateOutlet",a.nzDescription)}}function ut(e,t){if(e&1&&(s(0,"div",1),d(1,dt,2,1,"div",3)(2,mt,2,1,"div",4),l()),e&2){let a=p();r(),f(1,a.nzTitle?1:-1),r(),f(2,a.nzDescription?2:-1)}}var Ue=["*"];function zt(e,t){e&1&&b(0)}var ft=()=>({rows:4});function ht(e,t){if(e&1&&(_(0),m(1),S()),e&2){let a=p(3);r(),M(a.nzTitle)}}function gt(e,t){if(e&1&&(s(0,"div",6),d(1,ht,2,1,"ng-container",9),l()),e&2){let a=p(2);r(),c("nzStringTemplateOutlet",a.nzTitle)}}function vt(e,t){if(e&1&&(_(0),m(1),S()),e&2){let a=p(3);r(),M(a.nzExtra)}}function Ct(e,t){if(e&1&&(s(0,"div",7),d(1,vt,2,1,"ng-container",9),l()),e&2){let a=p(2);r(),c("nzStringTemplateOutlet",a.nzExtra)}}function _t(e,t){}function St(e,t){if(e&1&&d(0,_t,0,0,"ng-template",8),e&2){let a=p(2);c("ngTemplateOutlet",a.listOfNzCardTabComponent.template)}}function yt(e,t){if(e&1&&(s(0,"div",0)(1,"div",5),d(2,gt,2,1,"div",6)(3,Ct,2,1,"div",7),l(),d(4,St,1,1,null,8),l()),e&2){let a=p();r(2),f(2,a.nzTitle?2:-1),r(),f(3,a.nzExtra?3:-1),r(),f(4,a.listOfNzCardTabComponent?4:-1)}}function Tt(e,t){}function xt(e,t){if(e&1&&(s(0,"div",1),d(1,Tt,0,0,"ng-template",8),l()),e&2){let a=p();r(),c("ngTemplateOutlet",a.nzCover)}}function Nt(e,t){e&1&&h(0,"nz-skeleton",3),e&2&&c("nzActive",!0)("nzTitle",!1)("nzParagraph",Y(3,ft))}function Dt(e,t){e&1&&b(0)}function kt(e,t){}function bt(e,t){if(e&1&&(s(0,"li")(1,"span"),d(2,kt,0,0,"ng-template",8),l()()),e&2){let a=t.$implicit,n=p(2);D("width",100/n.nzActions.length,"%"),r(2),c("ngTemplateOutlet",a)}}function Mt(e,t){if(e&1&&(s(0,"ul",4),W(1,bt,3,3,"li",10,K),l()),e&2){let a=p();r(),J(a.nzActions)}}var At=(()=>{let t=class t{constructor(){this.nzHoverable=!0}};t.\u0275fac=function(o){return new(o||t)},t.\u0275dir=w({type:t,selectors:[["","nz-card-grid",""]],hostAttrs:[1,"ant-card-grid"],hostVars:2,hostBindings:function(o,i){o&2&&T("ant-card-hoverable",i.nzHoverable)},inputs:{nzHoverable:"nzHoverable"},exportAs:["nzCardGrid"],standalone:!0});let e=t;return g([y()],e.prototype,"nzHoverable",void 0),e})(),Ft=(()=>{let t=class t{constructor(){this.nzTitle=null,this.nzDescription=null,this.nzAvatar=null}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=v({type:t,selectors:[["nz-card-meta"]],hostAttrs:[1,"ant-card-meta"],inputs:{nzTitle:"nzTitle",nzDescription:"nzDescription",nzAvatar:"nzAvatar"},exportAs:["nzCardMeta"],standalone:!0,features:[C],decls:2,vars:2,consts:[[1,"ant-card-meta-avatar"],[1,"ant-card-meta-detail"],[3,"ngTemplateOutlet"],[1,"ant-card-meta-title"],[1,"ant-card-meta-description"],[4,"nzStringTemplateOutlet"]],template:function(o,i){o&1&&d(0,lt,2,1,"div",0)(1,ut,3,2,"div",1),o&2&&(f(0,i.nzAvatar?0:-1),r(),f(1,i.nzTitle||i.nzDescription?1:-1))},dependencies:[R,G,V],encapsulation:2,changeDetection:0});let e=t;return e})(),Et=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=v({type:t,selectors:[["nz-card-tab"]],viewQuery:function(o,i){if(o&1&&X($,7),o&2){let z;P(z=I())&&(i.template=z.first)}},exportAs:["nzCardTab"],standalone:!0,features:[C],ngContentSelectors:Ue,decls:1,vars:0,template:function(o,i){o&1&&(k(),d(0,zt,1,0,"ng-template"))},encapsulation:2,changeDetection:0});let e=t;return e})(),Qe="card",Q=(()=>{let t=class t{constructor(n,o,i){this.nzConfigService=n,this.cdr=o,this.directionality=i,this._nzModuleName=Qe,this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new U,this.nzConfigService.getConfigChangeEventForComponent(Qe).pipe(j(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){this.directionality.change?.pipe(j(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}};t.\u0275fac=function(o){return new(o||t)(u(ue),u(O),u(fe,8))},t.\u0275cmp=v({type:t,selectors:[["nz-card"]],contentQueries:function(o,i,z){if(o&1&&(H(z,Et,5),H(z,At,4)),o&2){let x;P(x=I())&&(i.listOfNzCardTabComponent=x.first),P(x=I())&&(i.listOfNzCardGridDirective=x)}},hostAttrs:[1,"ant-card"],hostVars:16,hostBindings:function(o,i){o&2&&T("ant-card-loading",i.nzLoading)("ant-card-bordered",i.nzBorderless===!1&&i.nzBordered)("ant-card-hoverable",i.nzHoverable)("ant-card-small",i.nzSize==="small")("ant-card-contain-grid",i.listOfNzCardGridDirective&&i.listOfNzCardGridDirective.length)("ant-card-type-inner",i.nzType==="inner")("ant-card-contain-tabs",!!i.listOfNzCardTabComponent)("ant-card-rtl",i.dir==="rtl")},inputs:{nzBordered:"nzBordered",nzBorderless:"nzBorderless",nzLoading:"nzLoading",nzHoverable:"nzHoverable",nzBodyStyle:"nzBodyStyle",nzCover:"nzCover",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],standalone:!0,features:[C],ngContentSelectors:Ue,decls:6,vars:5,consts:[[1,"ant-card-head"],[1,"ant-card-cover"],[1,"ant-card-body",3,"ngStyle"],[3,"nzActive","nzTitle","nzParagraph"],[1,"ant-card-actions"],[1,"ant-card-head-wrapper"],[1,"ant-card-head-title"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[4,"nzStringTemplateOutlet"],[3,"width"]],template:function(o,i){o&1&&(k(),d(0,yt,5,3,"div",0)(1,xt,2,1,"div",1),s(2,"div",2),d(3,Nt,1,4,"nz-skeleton",3)(4,Dt,1,0),l(),d(5,Mt,3,0,"ul",4)),o&2&&(f(0,i.nzTitle||i.nzExtra||i.listOfNzCardTabComponent?0:-1),r(),f(1,i.nzCover?1:-1),r(),c("ngStyle",i.nzBodyStyle),r(),f(3,i.nzLoading?3:4),r(2),f(5,i.nzActions.length?5:-1))},dependencies:[G,V,R,B,Ge,Ve],encapsulation:2,changeDetection:0});let e=t;return g([A(),y()],e.prototype,"nzBordered",void 0),g([A(),y()],e.prototype,"nzBorderless",void 0),g([y()],e.prototype,"nzLoading",void 0),g([A(),y()],e.prototype,"nzHoverable",void 0),g([A()],e.prototype,"nzSize",void 0),e})(),$e=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=E({type:t}),t.\u0275inj=F({imports:[Q,Ft,he]});let e=t;return e})();var Ke=(()=>{let t=class t{constructor(n,o,i,z,x,We){this.fb=n,this.router=o,this.autenticacionService=i,this.usuarioService=z,this.msgService=x,this.tokenServicio=We,this.ingresoForm=this.fb.group({correo:["",[L.required,L.email]],password:["",[L.required]]}),this.cargando=!1}ngOnInit(){}enviarFormulario(){this.cargando=!0,this.ingresoForm.valid?(this.autenticacionService.ingreso(this.ingresoForm.value).subscribe({next:n=>{n?this.manejarRespuesta(n):this.manejarError(n)},error:n=>{this.manejarError(n)}}),console.log("submit",this.ingresoForm.value)):(this.cargando=!1,this.msgService.error("\xA1Complete los campos!"),Object.values(this.ingresoForm.controls).forEach(n=>{n.invalid&&(n.markAsDirty(),n.updateValueAndValidity({onlySelf:!0}))}))}manejarRespuesta(n){this.cargando=!1,this.msgService.success("\xA1Inicio de sesi\xF3n exitoso!"),this.tokenServicio.manejarToken("token_simulado");let o=this.autenticacionService.obtenerIdUsuario();this.usuarioService.obtenerPorId(o).subscribe({next:i=>{let z=i.rol_id;z===1||z===2?this.router.navigate(["enviar/tickets"]):z===3&&this.router.navigate(["admin/tickets"])}})}manejarError(n){this.cargando=!1,this.msgService.error("\xA1Nombre de usuario o contrase\xF1a incorrecta!")}};t.\u0275fac=function(o){return new(o||t)(u(de),u(ne),u(je),u(qe),u(He),u(ie))},t.\u0275cmp=v({type:t,selectors:[["app-ingreso"]],standalone:!0,features:[C],decls:28,vars:4,consts:[["nz-flex","","nzJustify","center","nzAlign","center",2,"height","100%",3,"nzVertical"],[1,"login-title"],[2,"width","400px"],["nz-form","","nzLayout","vertical",1,"login-form",3,"ngSubmit","formGroup"],["nzErrorTip","\xA1Por favor ingrese su correo!"],["type","email","nz-input","","nzSize","large","formControlName","correo","placeholder","ejemplo@email.com"],["nzErrorTip","\xA1Por favor ingrese su contrase\xF1a!"],["type","password","nz-input","","nzSize","large","formControlName","password","placeholder","Escriba su contrase\xF1a"],["nz-button","","nzSize","large",1,"login-form-button","login-form-margin",3,"nzLoading","nzType"],["nzOrientation","center","nzText","HELPDESK - Copyright \xA9 2024"]],template:function(o,i){o&1&&(s(0,"nz-layout")(1,"nz-content")(2,"div",0)(3,"h1",1),m(4,"HELPDESK"),l(),s(5,"nz-card",2)(6,"h2"),m(7,"Iniciar Sesi\xF3n"),l(),s(8,"p"),m(9,"Inicia sesi\xF3n con tu cuenta de "),s(10,"b"),m(11,"HELPDESK"),l()(),s(12,"form",3),Z("ngSubmit",function(){return i.enviarFormulario()}),s(13,"nz-form-item")(14,"nz-form-label"),m(15,"Correo"),l(),s(16,"nz-form-control",4),h(17,"input",5),l()(),s(18,"nz-form-item")(19,"nz-form-label"),m(20,"Contrase\xF1a"),l(),s(21,"nz-form-control",6),h(22,"input",7),l()(),s(23,"button",8),m(24,"Ingresar"),l()()()()(),s(25,"nz-footer"),h(26,"nz-divider",9),m(27," Sistema HELPDESK. "),l()()),o&2&&(r(2),c("nzVertical",!0),r(10),c("formGroup",i.ingresoForm),r(11),c("nzLoading",i.cargando)("nzType","primary"))},dependencies:[pe,se,oe,ae,re,le,ce,ze,Te,ve,ge,_e,Ce,ye,Se,Ne,xe,Me,be,De,ke,$e,Q,Ae,Ee,Fe,Oe,Ie,we,Pe,Le,Be],styles:["nz-layout[_ngcontent-%COMP%]{height:100vh}nz-card[_ngcontent-%COMP%]{box-shadow:0 4px 20px #0003}.login-form-margin[_ngcontent-%COMP%]{margin-bottom:16px}.login-form-button[_ngcontent-%COMP%]{width:100%}.login-title[_ngcontent-%COMP%]{text-align:center;font-weight:700;color:#0a5aa4;margin-bottom:1em}"]});let e=t;return e})();var Ln=[{path:"",redirectTo:"ingreso",pathMatch:"full"},{path:"ingreso",component:Ke}];export{Ln as AUTENTICACION_ROUTES};