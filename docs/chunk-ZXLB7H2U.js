import{A as ot,B as rt,C as at,D as lt,E as st,F as mt,H as ct,I as dt,K as Se,L as pt,M as ut,a as pe,b as ue,d as fe,e as ze,f as K,g as Xe,k as We,l as Ue,m as ge,n as Je,o as Ye,p as _e,q as he,r as ve,s as B,t as T,u as Ze,v as Ce,w as et,x as tt,y as it,z as nt}from"./chunk-2MYMYAKR.js";import{h as Ke,i as ce,j as Ge,l as de}from"./chunk-UZUNJAPF.js";import"./chunk-VV7JOQVC.js";import{a as Le,b as Qe}from"./chunk-CJ4NNUHP.js";import{e as ke,h as $,i as y}from"./chunk-LRXKD73H.js";import{Ca as He,Da as H,ia as Ae,j as qe,ja as re,k as Re,ka as ae,l as oe,ma as le,oa as se,xa as $e,ya as me,za as O}from"./chunk-LSZWPU7D.js";import{C as b,D as ne,t as te,w as ie,wb as E,xb as x}from"./chunk-23JEQY34.js";import"./chunk-YNL5WT2L.js";import{u as ee,v as Ve,y as M}from"./chunk-XMK5HHRY.js";import{$b as A,Bb as X,Cb as De,D as Pe,Db as Z,Eb as N,Fa as Ie,Fb as w,G as Ne,Ga as J,Gb as a,Hb as s,Ib as f,Lb as I,Mb as q,Sb as g,Ub as _,Z as we,Zb as R,_b as k,ab as m,ac as j,bb as p,bc as d,cc as Ee,dc as P,f as be,fc as Oe,gc as Be,hc as je,ic as L,jc as S,kc as D,lb as V,mb as Y,n as xe,na as h,nc as W,oc as U,qc as Q,r as Fe,rb as F,tb as c,ya as v,za as C}from"./chunk-5RSXETO7.js";import"./chunk-4XSKOKL7.js";import"./chunk-P2VZOJAX.js";function Nt(e,t){if(e&1&&(a(0,"nz-tag",4),f(1,"span",5),d(2),s()),e&2){let o=_();m(2),P(" ",o.tiempoDemora," h ")}}var ft=(()=>{let t=class t{constructor(i){this.el=i,this.titulo="",this.descripcion="",this.tiempoDemora=0,this.calificacion=0}onMouseMove(i){let r=this.el.nativeElement,n=r.getBoundingClientRect(),l=i.clientX-n.left,u=i.clientY-n.top,z=n.width/2,ye=n.height/2,bt=(l-z)/z*12,xt=(ye-u)/ye*12;r.style.setProperty("--rotate-y",`${bt}deg`),r.style.setProperty("--rotate-x",`${xt}deg`)}onMouseLeave(){let i=this.el.nativeElement;i.style.setProperty("--rotate-y","0deg"),i.style.setProperty("--rotate-x","0deg")}};t.\u0275fac=function(r){return new(r||t)(p(Ie))},t.\u0275cmp=h({type:t,selectors:[["app-tarjeta-servicio"]],hostBindings:function(r,n){r&1&&g("mousemove",function(u){return n.onMouseMove(u)})("mouseleave",function(){return n.onMouseLeave()})},inputs:{titulo:"titulo",descripcion:"descripcion",tiempoDemora:"tiempoDemora",calificacion:"calificacion"},standalone:!0,features:[S],decls:6,vars:5,consts:[["extraTemplate",""],[1,"tarjeta",3,"nzTitle","nzExtra"],[2,"color","rgb(115, 115, 115)"],[3,"ngModel","nzDisabled"],["nzColor","blue"],["nz-icon","","nzType","clock-circle","nzTheme","outline"]],template:function(r,n){if(r&1&&(a(0,"nz-card",1)(1,"p",2),d(2),s(),f(3,"nz-rate",3),s(),F(4,Nt,3,1,"ng-template",null,0,Q)),r&2){let l=j(5);c("nzTitle",n.titulo)("nzExtra",l),m(2),Ee(n.descripcion),m(),c("ngModel",n.calificacion)("nzDisabled",!0)}},dependencies:[he,_e,x,E,Qe,Le,Ye,Je,b,te,ie],styles:[".tarjeta[_ngcontent-%COMP%]{width:100%;border-radius:.4em;font-family:Arial,sans-serif;overflow:hidden;transition:all .3s;transform-style:preserve-3d;perspective:1000px;border-color:#6c757d6c;background-color:#fff;cursor:pointer}.tarjeta[_ngcontent-%COMP%]:hover{box-shadow:0 0 1em #0000001a;transform:rotateX(var(--rotate-x, 0)) rotateY(var(--rotate-y, 0)) scale(.95)}"]});let e=t;return e})();var _t=(()=>{let t=class t{constructor(i,r,n){this.msgService=i,this.pipeService=r,this.servicio=n,this.datos=[],this.parametrosPag={pageIndex:1,pageSize:10,sortField:null,sortOrder:null,searchTerm:"",searchColumn:"id",filter:[]},this.total=1,this.loading=!0,this.busqueda=new be,this.busqueda.pipe(Ne(500)).subscribe(l=>{this.parametrosPag.pageIndex=1,this.parametrosPag.searchTerm=l,this.cargarDatosServidor()})}ngOnInit(){this.cargarDatosServidor(),this.columnasOrden==null?this.columnasOrden=this.columnasBusqueda:this.columnasOrden}cargarDatosServidor(){this.loading=!0,this.datos$=this.servicio?.obtenerTodoPag(this.parametrosPag).pipe(we(i=>{this.manejarRespuesta(i)}),Pe(i=>(this.manejarError(i),xe(null))),Fe(i=>i.data))}manejarRespuesta(i){this.datos=i.data,this.total=i.total,this.loading=!1}manejarError(i){this.msgService.error("Error en la solicitud"),console.error("Error en la solicitud:",i),this.loading=!1}ordenarPor(i){this.parametrosPag.sortField=i,this.cargarDatosServidor()}cambiarOrden(i){this.parametrosPag.sortOrder=i,this.cargarDatosServidor()}cambiarTamanoPagina(i){this.parametrosPag.pageSize=i,this.cargarDatosServidor()}};t.\u0275fac=function(r){return new(r||t)(p(H),p(K),p(He))},t.\u0275cmp=h({type:t,selectors:[["app-mosaico-tarjeta"]],inputs:{scroll:"scroll",columnasBusqueda:"columnasBusqueda",columnasOrden:"columnasOrden"},standalone:!0,features:[S],decls:0,vars:0,template:function(r,n){},dependencies:[M,y,oe,de,ce,Ce],encapsulation:2});let e=t;return e})();function Ot(e,t){if(e&1&&f(0,"nz-option",4),e&2){let o=t.$implicit;c("nzValue",o)("nzLabel",o.name)}}var vt=(()=>{let t=class t{constructor(){this.orden="asc",this.columnaOrdenChange=new J,this.ordenChange=new J,this.distribuirPorChange=new J}ngOnInit(){this.columnaOrden=this.columnasOrden?.find(i=>i.default)}ordenarPorColumna(){this.columnaOrdenChange.emit(this.columnaOrden?.columnKey)}cambiarOrden(){this.orden=this.orden==="asc"?"desc":"asc",this.ordenChange.emit(this.orden)}distribuirPor(i){this.distribuirPorChange.emit(i)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=h({type:t,selectors:[["app-organizador-fichero"]],inputs:{columnasOrden:"columnasOrden"},outputs:{columnaOrdenChange:"columnaOrdenChange",ordenChange:"ordenChange",distribuirPorChange:"distribuirPorChange"},standalone:!0,features:[S],decls:15,vars:1,consts:[["nzAlign","center","nzJustify","start","nzGap","middle",2,"width","100%"],["nzAlign","center"],[2,"margin-right",".5em"],[3,"ngModelChange","ngModel"],[3,"nzValue","nzLabel"],["nz-button","","nzType","default",2,"border-radius","0 .4em .4em 0","margin-left","-.8px",3,"click"],["nz-icon","","nzType","swap","nzTheme","outline",1,"swap-rotado"],["nzType","vertical"],["nz-button","","nzType","default",2,"border-radius",".4em 0 0 .4em",3,"click"],["nz-icon","","nzType","appstore","nzTheme","outline"],["nz-icon","","nzType","unordered-list","nzTheme","outline"]],template:function(r,n){r&1&&(a(0,"nz-flex",0)(1,"nz-flex",1)(2,"span",2),d(3,"Ordenar"),s(),a(4,"nz-select",3),je("ngModelChange",function(u){return Be(n.columnaOrden,u)||(n.columnaOrden=u),u}),g("ngModelChange",function(){return n.ordenarPorColumna()}),N(5,Ot,1,2,"nz-option",4,De),s(),a(7,"button",5),g("click",function(){return n.cambiarOrden()}),f(8,"span",6),s()(),f(9,"nz-divider",7),a(10,"nz-flex",1)(11,"button",8),g("click",function(){return n.distribuirPor("MOSAICO")}),f(12,"span",9),s(),a(13,"button",5),g("click",function(){return n.distribuirPor("LISTA")}),f(14,"span",10),s()()()),r&2&&(m(4),Oe("ngModel",n.columnaOrden),m(),w(n.columnasOrden))},dependencies:[M,b,te,ie,se,le,re,ae,x,E,y,$,ge,We,Ue,O,me],styles:[".select[_ngcontent-%COMP%]{width:max-content}.swap-rotado[_ngcontent-%COMP%]{transform:rotate(90deg)}[_nghost-%COMP%]     .ant-select-selector{border-radius:.4em 0 0 .4em!important}"]});let e=t;return e})();var jt=["vcrModal"],Vt=(e,t)=>t.id,qt=()=>[16,16];function Rt(e,t){if(e&1){let o=q();a(0,"div",8)(1,"app-tarjeta-servicio",12),g("click",function(){let r=v(o).$implicit,n=_();return C(n.abrirModal(r))}),s()()}if(e&2){let o=t.$implicit;c("nzXs",24)("nzSm",12)("nzMd",8)("nzLg",6)("nzXl",6),m(),c("titulo",o.nombre)("descripcion",o.descripcion)("tiempoDemora",o.tiempo_resolucion)("calificacion",o.serv_calificacion)}}function kt(e,t){e&1&&(a(0,"div",9),f(1,"nz-empty",13),s()),e&2&&(c("nzSpan",24),m(),c("nzNotFoundContent",null))}function At(e,t){e&1&&(a(0,"span"),d(1,"No se encontr\xF3 ning\xFAn elemento"),s())}function Lt(e,t){e&1&&(a(0,"span"),d(1,"Se encontr\xF3 1 elemento"),s())}function Qt(e,t){if(e&1&&(a(0,"span"),d(1),s()),e&2){let o=_(2);m(),P("Se encontraron ",o.total," elementos")}}function $t(e,t){if(e&1&&F(0,At,2,0)(1,Lt,2,0)(2,Qt,2,1),e&2){let o,i=_();X(0,(o=i.total)===0?0:o===1?1:2)}}var Ct=(()=>{let t=class t extends _t{constructor(i,r,n,l){super(i,r,n),this.modalService=l,this.columnasBusqueda=[{name:"Id",columnKey:"id",type:"NUMBER",default:!0},{name:"Nombre",columnKey:"nombre"},{name:"Descripci\xF3n",columnKey:"descripcion"},{name:"Tiempo de resoluci\xF3n",columnKey:"tiempo_resolucion",type:"NUMBER"}]}abrirModal(i){this.modalService.insertarModalCrear(this.vcr,"modalFormIncidencia"),this.modalService.obtenerInstancia().mostrarValores(i),this.modalService.obtenerInstancia().onConfirmar.subscribe(()=>{this.cargarDatosServidor()})}};t.\u0275fac=function(r){return new(r||t)(p(H),p(K),p(ut),p(T))},t.\u0275cmp=h({type:t,selectors:[["app-mosaico-tarjeta-servicio"]],viewQuery:function(r,n){if(r&1&&R(jt,5,V),r&2){let l;k(l=A())&&(n.vcr=l.first)}},standalone:!0,features:[L([T]),Y,S],decls:16,vars:15,consts:[["totalTemplate",""],["vcrModal",""],["nz-flex","","nzGap","large","nzAlign","start",3,"nzVertical"],[2,"width","100%",3,"columnaBusquedaChange","terminoBusquedaChange","columnasBusqueda"],[3,"columnaOrdenChange","ordenChange","columnasOrden"],["nz-flex","",3,"nzVertical"],[3,"nzSpinning","nzTip"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXs","nzSm","nzMd","nzLg","nzXl"],["nz-col","",3,"nzSpan"],["nzJustify","end","nzAlign","center",2,"margin-top","2em"],["nzShowSizeChanger","","nzShowQuickJumper","",3,"nzPageSizeChange","nzPageIndex","nzPageSize","nzTotal","nzShowTotal"],[3,"click","titulo","descripcion","tiempoDemora","calificacion"],[3,"nzNotFoundContent"]],template:function(r,n){if(r&1){let l=q();a(0,"div",2)(1,"app-buscador-tabla",3),g("columnaBusquedaChange",function(z){return v(l),C(n.parametrosPag.searchColumn=z)})("terminoBusquedaChange",function(z){return v(l),C(n.busqueda.next(z))}),s(),a(2,"app-organizador-fichero",4),g("columnaOrdenChange",function(z){return v(l),C(n.ordenarPor(z))})("ordenChange",function(z){return v(l),C(n.cambiarOrden(z))}),s()(),a(3,"div",5)(4,"nz-spin",6)(5,"div",7),N(6,Rt,2,9,"div",8,Vt,!1,kt,2,2,"div",9),W(9,"async"),s()(),a(10,"nz-flex",10)(11,"nz-pagination",11),g("nzPageSizeChange",function(z){return v(l),C(n.cambiarTamanoPagina(z))}),s()()(),F(12,$t,3,1,"ng-template",null,0,Q),I(14,null,1)}if(r&2){let l=j(13);c("nzVertical",!1),m(),c("columnasBusqueda",n.columnasBusqueda),m(),c("columnasOrden",n.columnasOrden),m(),c("nzVertical",!0),m(),c("nzSpinning",n.loading)("nzTip","Cargando servicios..."),m(),c("nzGutter",D(14,qt)),m(),w(U(9,12,n.datos$)),m(5),c("nzPageIndex",n.parametrosPag.pageIndex)("nzPageSize",n.parametrosPag.pageSize)("nzTotal",n.total)("nzShowTotal",l)}},dependencies:[M,ee,y,$,oe,Re,qe,de,Ge,ce,Ke,Ce,Ze,Se,ft,vt]});let e=t;return e})();var Kt=["vcrModal"],St=(()=>{let t=class t{constructor(i){this.modalService=i}abrirModal(){this.modalService.insertarModalCrear(this.vcr,"modalFormIncidencia")}};t.\u0275fac=function(r){return new(r||t)(p(T))},t.\u0275cmp=h({type:t,selectors:[["app-solicitar-servicios"]],viewQuery:function(r,n){if(r&1&&R(Kt,5,V),r&2){let l;k(l=A())&&(n.vcr=l.first)}},standalone:!0,features:[L([T]),S],decls:11,vars:0,consts:[["vcrModal",""],["nz-icon","","nzType","appstore","nzTheme","outline"],[2,"margin","0 0.5em"],[1,"panel"]],template:function(r,n){r&1&&(a(0,"nz-page-header")(1,"nz-page-header-title"),f(2,"span",1),a(3,"span",2),d(4,"Servicios de TI"),s()(),a(5,"nz-page-header-subtitle"),d(6,"Lista de servicios"),s()(),a(7,"div",3),f(8,"app-mosaico-tarjeta-servicio"),s(),I(9,null,0))},dependencies:[M,b,ne,y,O,x,E,ze,fe,pe,ue,Ct],styles:[".panel[_ngcontent-%COMP%]{margin:1em 1.5em 1.5em;padding:1.5em;background-color:#f7f7f7bb;border-radius:.4em;box-shadow:1em 1em 4em #0000001a}"]});let e=t;return e})();var Gt=()=>({y:"400px"}),Tt=()=>[];function Xt(e,t){if(e&1&&(a(0,"th",9),d(1),s()),e&2){let o=t.$implicit;c("nzColumnKey",o.columnKey==null?o.attribute:o.columnKey)("nzWidth",o.width==null?null:o.width)("nzShowSort",o.showSort)("nzSortOrder",o.sortOrder==null?null:o.sortOrder)("nzSortFn",o.sortFn==null?null:o.sortFn)("nzSortDirections",o.sortDirections==null?D(13,Tt):o.sortDirections)("nzShowFilter",o.showFilter)("nzFilters",o.listOfFilter==null?D(14,Tt):o.listOfFilter)("nzFilterFn",o.filterFn==null?null:o.filterFn)("nzFilterMultiple",o.filterMultiple==null?!1:o.filterMultiple)("nzLeft",o.left==null?!1:o.left)("nzRight",o.right==null?!1:o.right),m(),P(" ",o.name," ")}}function Wt(e,t){if(e&1&&(a(0,"nz-tag",11),d(1),W(2,"uppercase"),s()),e&2){let o=_(2).$implicit,i=_().$implicit,r=_();c("nzColor",r.tags[i[o.attribute]]?r.tags[i[o.attribute]].color:"default"),m(),P(" ",U(2,2,r.transPipe(i[o.attribute],o.pipe)),"")}}function Ut(e,t){if(e&1&&d(0),e&2){let o=_(2).$implicit,i=_().$implicit,r=_();P(" ",r.transPipe(i[o.attribute],o.pipe)," ")}}function Jt(e,t){if(e&1&&(a(0,"td",10),F(1,Wt,3,4,"nz-tag",11)(2,Ut,1,1),s()),e&2){let o=_().$implicit;c("nzLeft",o.left==null?!1:o.left)("nzAlign",o.align==null?"left":o.align),m(),X(1,o.etiquetable?1:2)}}function Yt(e,t){if(e&1){let o=q();a(0,"td",12)(1,"a",13),g("click",function(){v(o);let r=_(2).$implicit,n=_();return C(n.abrirModal(r))}),d(2,"Detalles "),s()()}if(e&2){let o=_().$implicit;c("nzRight",o.right==null?!1:o.right)}}function Zt(e,t){if(e&1&&F(0,Jt,3,3,"td",10)(1,Yt,3,1),e&2){let o=t.$implicit;X(0,o.attribute!=null?0:1)}}function ei(e,t){if(e&1&&(a(0,"tr"),N(1,Zt,2,1,null,null,Z),s()),e&2){let o=_();m(),w(o.columnas)}}function ti(e,t){if(e&1&&d(0),e&2){let o=t.$implicit;P("Se encontraron ",o," registros")}}var Mt=(()=>{let t=class t extends pt{constructor(i,r,n,l){super(i,r,n,l),this.entidad="Incidencia",this.atributos=["id","id"],this.modal="modalDetallesIncidencia",this.columnasBusqueda=[{name:"Servicio",columnKey:"servicio"},{name:"Solicitud",columnKey:"solicitud"},{name:"Prioridad",columnKey:"prioridad"}],this.columnas=[{name:"Servicio",attribute:"servicio",showSort:!0,sortFn:!0},{name:"Solicitud",attribute:"solicitud",showSort:!0,sortFn:!0},{name:"Prioridad",attribute:"prioridad",showSort:!0,sortFn:!0,etiquetable:!0,width:"100px"},{name:"Estado",attribute:"estado",showSort:!0,sortFn:!0,showFilter:!0,filterFn:!0,listOfFilter:[],etiquetable:!0,width:"100px"},{name:"Enviado",attribute:"fecha_incidencia",width:"115px",showSort:!0,sortFn:!0,pipe:{nombre:"date",datos:["dd/MM/yyyy"]}},{name:"Resuelto",attribute:"fecha_resolucion",width:"115px",showSort:!0,sortFn:!0,pipe:{nombre:"date",datos:["dd/MM/yyyy"]}},{name:"Acciones",width:"100px",right:!0}],this.filtros=[{attribute:"estado",list:[{text:"Enviado",value:B.ENVIADO},{text:"Abierto",value:B.ABIERTO},{text:"Cerrado",value:B.RESUELTO}]}],this.tags={[ve.BAJA]:{color:"green"},[ve.MEDIA]:{color:"orange"},[ve.ALTA]:{color:"red"},[B.ENVIADO]:{color:"blue"},[B.EN_PROCESO]:{color:"orange"},[B.ABIERTO]:{color:"red"},[B.RESUELTO]:{color:"green"}},this.filtrosExternos.next(!0),this.filtrosInternos.next(!0)}};t.\u0275fac=function(r){return new(r||t)(p(H),p(K),p(Xe),p(T))},t.\u0275cmp=h({type:t,selectors:[["app-tabla-pag-detalles-incidencias"]],standalone:!0,features:[Y,S],decls:24,vars:14,consts:[["tabla",""],["totalTemplate",""],["vcrModal",""],["nz-flex","","nzGap","large","nzAlign","start",3,"nzVertical"],[2,"width","100%",3,"columnaBusquedaChange","terminoBusquedaChange","columnasBusqueda"],["nzType","vertical",2,"margin","0.75em 0"],["nz-flex","","nzGap","small","nzAlign","center",3,"nzVertical"],["nz-button","",3,"click"],["nzShowSizeChanger","","nzSize","small",3,"nzQueryParams","nzShowTotal","nzData","nzFrontPagination","nzLoading","nzTotal","nzPageIndex","nzPageSize","nzScroll"],[3,"nzColumnKey","nzWidth","nzShowSort","nzSortOrder","nzSortFn","nzSortDirections","nzShowFilter","nzFilters","nzFilterFn","nzFilterMultiple","nzLeft","nzRight"],[3,"nzLeft","nzAlign"],[3,"nzColor"],[3,"nzRight"],["nz-button","","nzSize","default","nzType","link",3,"click"]],template:function(r,n){if(r&1){let l=q();a(0,"div",3)(1,"app-buscador-tabla",4),g("columnaBusquedaChange",function(z){return v(l),C(n.parametrosPag.searchColumn=z)})("terminoBusquedaChange",function(z){return v(l),C(n.busqueda.next(z))}),s(),f(2,"nz-divider",5),a(3,"div",6)(4,"span"),d(5,"Reiniciar"),s(),a(6,"button",7),g("click",function(){return v(l),C(n.reiniciarFiltros())}),d(7,"Filtros"),s(),a(8,"button",7),g("click",function(){return v(l),C(n.reiniciarOrden())}),d(9,"Orden"),s()()(),a(10,"nz-table",8,0),W(12,"async"),g("nzQueryParams",function(z){return v(l),C(n.onQueryParamsChange(z))}),a(13,"thead")(14,"tr"),N(15,Xt,2,15,"th",9,Z),s()(),a(17,"tbody"),N(18,ei,3,0,"tr",null,Z),s()(),F(20,ti,1,1,"ng-template",null,1,Q),I(22,null,2)}if(r&2){let l=j(11),u=j(21);c("nzVertical",!1),m(),c("columnasBusqueda",n.columnasBusqueda),m(2),c("nzVertical",!1),m(7),c("nzShowTotal",u)("nzData",U(12,11,n.datos$))("nzFrontPagination",!1)("nzLoading",n.loading)("nzTotal",n.total)("nzPageIndex",n.parametrosPag.pageIndex)("nzPageSize",n.parametrosPag.pageSize)("nzScroll",n.scroll==null?D(13,Gt):n.scroll),m(5),w(n.columnas),m(3),w(l.data)}},dependencies:[M,ee,Ve,b,y,$,se,le,re,ae,$e,ge,mt,at,it,tt,nt,st,rt,lt,et,ot,Ae,x,ke,O,me,dt,ct,he,_e,Se],styles:["nz-flex[_ngcontent-%COMP%]{margin:0 0 1em}nz-form-item[_ngcontent-%COMP%]{margin:0 0 1em}nz-select[_ngcontent-%COMP%]{margin:0 0 1em;min-width:157px}"]});let e=t;return e})();var ii=["vcrModal"],ni=()=>({x:"1000px",y:"400px"}),yt=(()=>{let t=class t{constructor(i){this.modalService=i}abrirModal(){this.modalService.insertarModalCrear(this.vcr,"modalFormIncidencia")}};t.\u0275fac=function(r){return new(r||t)(p(T))},t.\u0275cmp=h({type:t,selectors:[["app-incidencias-enviadas"]],viewQuery:function(r,n){if(r&1&&R(ii,5,V),r&2){let l;k(l=A())&&(n.vcr=l.first)}},standalone:!0,features:[L([T]),S],decls:12,vars:2,consts:[["tablaIncidencias",""],["vcrModal",""],["nz-icon","","nzType","alert","nzTheme","outline"],[2,"margin","0 0.5em"],[1,"panel"],["ngSkipHydration","",3,"scroll"]],template:function(r,n){r&1&&(a(0,"nz-page-header")(1,"nz-page-header-title"),f(2,"span",2),a(3,"span",3),d(4,"Incidencias Enviadas"),s()(),a(5,"nz-page-header-subtitle"),d(6,"Lista de incidencias"),s()(),a(7,"div",4),f(8,"app-tabla-pag-detalles-incidencias",5,0),s(),I(10,null,1)),r&2&&(m(8),c("scroll",D(1,ni)))},dependencies:[M,b,ne,y,O,x,E,ze,fe,pe,ue,Mt],styles:[".panel[_ngcontent-%COMP%]{margin:1em 1.5em 1.5em;padding:1.5em;background-color:#f7f7f7bb;border-radius:.4em;box-shadow:1em 1em 4em #0000001a}"]});let e=t;return e})();var Yn=[{path:"",redirectTo:"servicios",pathMatch:"full"},{path:"servicios",component:St},{path:"incidencias",component:yt}];export{Yn as SOLICITANTE_ROUTES};