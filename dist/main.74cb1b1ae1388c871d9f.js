(()=>{"use strict";var t,r={453:(t,r,e)=>{var i=e(638);const o=JSON.parse('{"title":"I am JSON title"}'),n=e.p+"cc26b40b45814e200a17.png",s=new class{constructor(t,r){this.title=t,this.date=new Date,this.img=r}toString(){return JSON.stringify({title:this.title,date:this.date.toJSON(),img:this.img},null,2)}get uppercaseTitle(){return this.title.toUpperCase()}}("Webpack Post Title",n);i("pre").addClass("code").html(s.toString()),console.log("JSON:",o)}},e={};function i(t){var o=e[t];if(void 0!==o)return o.exports;var n=e[t]={exports:{}};return r[t].call(n.exports,n,n.exports,i),n.exports}i.m=r,t=[],i.O=(r,e,o,n)=>{if(!e){var s=1/0;for(p=0;p<t.length;p++){for(var[e,o,n]=t[p],a=!0,l=0;l<e.length;l++)(!1&n||s>=n)&&Object.keys(i.O).every((t=>i.O[t](e[l])))?e.splice(l--,1):(a=!1,n<s&&(s=n));if(a){t.splice(p--,1);var c=o();void 0!==c&&(r=c)}}return r}n=n||0;for(var p=t.length;p>0&&t[p-1][2]>n;p--)t[p]=t[p-1];t[p]=[e,o,n]},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var r=i.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var e=r.getElementsByTagName("script");if(e.length)for(var o=e.length-1;o>-1&&!t;)t=e[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t})(),(()=>{var t={179:0};i.O.j=r=>0===t[r];var r=(r,e)=>{var o,n,[s,a,l]=e,c=0;if(s.some((r=>0!==t[r]))){for(o in a)i.o(a,o)&&(i.m[o]=a[o]);if(l)var p=l(i)}for(r&&r(e);c<s.length;c++)n=s[c],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(p)},e=self.webpackChunk=self.webpackChunk||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))})();var o=i.O(void 0,[638],(()=>i(453)));o=i.O(o)})();