import{pa as o}from"./chunk-JQ54NTA4.js";var c=(()=>{let t=class t{transform(e,r){let i=parseFloat(e);if(isNaN(i))return e;let s=i.toFixed(2);return r?`S/.${s}`:`S/. ${s}`}};t.\u0275fac=function(r){return new(r||t)},t.\u0275pipe=o({name:"moneda",type:t,pure:!0,standalone:!0});let n=t;return n})();var f=(()=>{let t=class t{transform(e){if(typeof e=="number"&&(e=e.toString()),!e.includes("-"))return e;let[r,i]=e.split("-");if(!r&&!i)return"";r=r.trim(),i=i.trim();let s=["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"],a=parseInt(r,10)-1;return`${s[a]??""} - ${i??""}`}};t.\u0275fac=function(r){return new(r||t)},t.\u0275pipe=o({name:"periodo",type:t,pure:!0,standalone:!0});let n=t;return n})();var I=(()=>{let t=class t{transform(e){let[r,i]=e.split("-");r=r.trim(),i=i.trim();let s=["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"],a=parseInt(r,10)-1,m=parseInt(i,10)-1;return`${s[a]??""} - ${s[m]??""}`}};t.\u0275fac=function(r){return new(r||t)},t.\u0275pipe=o({name:"periodoMes",type:t,pure:!0,standalone:!0});let n=t;return n})();var R=(()=>{let t=class t{transform(e){if(!e)return"";let r=["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"],i=parseInt(e,10)-1;return`${r[i]??""}`}};t.\u0275fac=function(r){return new(r||t)},t.\u0275pipe=o({name:"mes",type:t,pure:!0,standalone:!0});let n=t;return n})();export{c as a,f as b,I as c,R as d};
