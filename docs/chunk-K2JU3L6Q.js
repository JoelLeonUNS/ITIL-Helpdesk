import{a as G,b as H}from"./chunk-CJ4NNUHP.js";import{a as j,b as _,c as P,d as T,e as k,g as K,h as U,i as B}from"./chunk-LRXKD73H.js";import{a as $}from"./chunk-MPVWZLMH.js";import{Aa as Z,Da as ee,fa as O,ia as w,j as M,ja as A,k as D,ka as L,ma as V,oa as R,ua as q,va as J,wa as W,xa as Q,ya as X,za as Y}from"./chunk-LSZWPU7D.js";import{a as h}from"./chunk-LC5HVWUB.js";import{A as E,B as x,D as y,j as v,p as S,q as u,t as b,u as N,x as C,xb as I,z as F}from"./chunk-23JEQY34.js";import"./chunk-YNL5WT2L.js";import"./chunk-XMK5HHRY.js";import{Gb as i,Hb as t,Ib as s,Sb as g,ab as c,bb as a,bc as o,jc as z,na as f,tb as l}from"./chunk-5RSXETO7.js";import"./chunk-4XSKOKL7.js";import"./chunk-P2VZOJAX.js";var ie=(()=>{let m=class m{constructor(e,r,n,d,te,oe){this.fb=e,this.router=r,this.autenticacionService=n,this.usuarioService=d,this.msgService=te,this.tokenServicio=oe,this.ingresoForm=this.fb.group({correo:["",[u.required,u.email]],clave:["",[u.required]]}),this.cargando=!1}ngOnInit(){}enviarFormulario(){this.cargando=!0,this.ingresoForm.valid?(this.autenticacionService.ingreso(this.ingresoForm.value).subscribe({next:e=>{e?this.manejarRespuesta(e):this.manejarError(e)},error:e=>{this.manejarError(e)}}),console.log("submit",this.ingresoForm.value)):(this.cargando=!1,this.msgService.error("\xA1Complete los campos!"),Object.values(this.ingresoForm.controls).forEach(e=>{e.invalid&&(e.markAsDirty(),e.updateValueAndValidity({onlySelf:!0}))}))}manejarRespuesta(e){this.cargando=!1,this.msgService.success("\xA1Inicio de sesi\xF3n exitoso!"),this.tokenServicio.manejarToken("token_simulado");let r=this.autenticacionService.obtenerIdUsuario();this.usuarioService.obtenerPorId(r).subscribe({next:n=>{switch(n.rol_id){case 1:this.router.navigate(["/admin"]);break;case 2:this.router.navigate(["/servidor"]);break;case 3:this.router.navigate(["/solicitante"]);break;default:this.router.navigate(["/"]);break}}})}manejarError(e){this.cargando=!1,this.msgService.error("\xA1Nombre de usuario o contrase\xF1a incorrecta!")}};m.\u0275fac=function(r){return new(r||m)(a(x),a(v),a(Z),a($),a(ee),a(h))},m.\u0275cmp=f({type:m,selectors:[["app-ingreso"]],standalone:!0,features:[z],decls:29,vars:4,consts:[["src","assets/imagenes/uns_fondo.jpg","alt","uns_fondo",1,"fondo-img"],[2,"background-color","rgba(175, 175, 175, .3)"],["nz-flex","","nzJustify","center","nzAlign","center",2,"height","100%",3,"nzVertical"],[1,"login-title"],[2,"width","400px"],["nz-form","","nzLayout","vertical",1,"login-form",3,"ngSubmit","formGroup"],["nzErrorTip","\xA1Por favor ingrese su correo!"],["type","email","nz-input","","nzSize","large","formControlName","correo","placeholder","ejemplo@email.com"],["nzErrorTip","\xA1Por favor ingrese su contrase\xF1a!"],["type","password","nz-input","","nzSize","large","formControlName","clave","placeholder","Escriba su contrase\xF1a"],["nz-button","","nzSize","large",1,"login-form-button","login-form-margin",3,"nzLoading","nzType"],[2,"background-color","rgba(255, 255, 255, 0.65)"],["nzOrientation","center","nzText","HELPDESK - Copyright \xA9 2024"]],template:function(r,n){r&1&&(s(0,"img",0),i(1,"nz-layout",1)(2,"nz-content")(3,"div",2)(4,"h1",3),o(5,"HELPDESK"),t(),i(6,"nz-card",4)(7,"h2"),o(8,"Iniciar Sesi\xF3n"),t(),i(9,"p"),o(10,"Inicia sesi\xF3n con tu cuenta de "),i(11,"b"),o(12,"HELPDESK"),t()(),i(13,"form",5),g("ngSubmit",function(){return n.enviarFormulario()}),i(14,"nz-form-item")(15,"nz-form-label"),o(16,"Correo"),t(),i(17,"nz-form-control",6),s(18,"input",7),t()(),i(19,"nz-form-item")(20,"nz-form-label"),o(21,"Contrase\xF1a"),t(),i(22,"nz-form-control",8),s(23,"input",9),t()(),i(24,"button",10),o(25,"Ingresar"),t()()()()(),i(26,"nz-footer",11),s(27,"nz-divider",12),o(28," Sistema HELPDESK. "),t()()),r&2&&(c(3),l("nzVertical",!0),c(10),l("formGroup",n.ingresoForm),c(11),l("nzLoading",n.cargando)("nzType","primary"))},dependencies:[y,C,S,b,N,F,E,I,k,D,M,_,j,T,P,w,O,R,V,A,L,H,G,K,B,U,Q,W,q,J,Y,X],styles:["nz-layout[_ngcontent-%COMP%]{height:100vh}nz-card[_ngcontent-%COMP%]{box-shadow:0 4px 20px #0003}.login-form-margin[_ngcontent-%COMP%]{margin-bottom:16px}.login-form-button[_ngcontent-%COMP%]{width:100%}.login-title[_ngcontent-%COMP%]{text-align:center;font-weight:700;color:#0a5aa4;margin-bottom:1em}.fondo-img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100vw;height:100vh;object-fit:cover;z-index:-1}"]});let p=m;return p})();var ke=[{path:"",redirectTo:"ingreso",pathMatch:"full"},{path:"ingreso",component:ie}];export{ke as AUTENTICACION_ROUTES};
