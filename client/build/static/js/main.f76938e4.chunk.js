(this["webpackJsonpquick-utils"]=this["webpackJsonpquick-utils"]||[]).push([[0],{13:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},34:function(e,t,n){e.exports=n(77)},39:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),l=n.n(c),o=(n(39),n(13),n(5)),u=(n(42),n(7)),i=n(31),s=n.n(i),m={PORT:Object({NODE_ENV:"production",PUBLIC_URL:""}).PORT||"localhost:4000"},d=n(32),h=n.n(d),f=(n(28),n(29),function(e){var t=e.date,n=e.events,a=e.handleClick,c=n||[],l={sport:"blue",social:"pink",outdoors:"green"};return r.a.createElement("div",{className:"Calendar-date-column"},r.a.createElement("div",{className:"Calendar-details"},"The date and time is: "),r.a.createElement("div",{className:"Calendar-details"},r.a.createElement("h3",null,t.toDateString())),r.a.createElement("div",{className:"Calendar-details"},"Your events",r.a.createElement("button",{onClick:a,className:"refresh-button"},"Refresh")),c.map((function(e){var t=l[e.eventType.toLowerCase()];return r.a.createElement("div",{className:"Calendar-events",key:e.id,style:{backgroundColor:t}},e.eventName)})))}),p=Object(a.createContext)(),v=function(e){var t=e.reducer,n=e.initialState,c=e.children;return r.a.createElement(p.Provider,{value:Object(a.useReducer)(t,n)},c)},b=function(){return Object(a.useContext)(p)},E=function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),n=t[0],c=t[1],l=b(),o=Object(u.a)(l,2),i=o[0],d=i.datePicked,p=i.events,v=o[1];Object(a.useEffect)((function(){d||v({type:"changeDate",newDate:new Date}),p&&0!==p.length||E()}),[]),Object(a.useEffect)((function(){p&&c(p.filter((function(e){var t=e.day,n=e.month;return t===d.getDate()&&n===d.getMonth()})))}),[p]);var E=function(){var e=m.PORT;h.a.get("http://".concat(e,"/users/").concat("John")).then((function(e){v({type:"updateEvents",events:e.data.events})}))};return r.a.createElement("div",{className:"Calendar"},r.a.createElement(s.a,{value:d,onChange:function(e){v({type:"changeDate",newDate:e}),p&&c(p.filter((function(t){var n=t.day,a=t.month;return n===e.getDate()&&a===e.getMonth()})))},minDate:new Date(2001,0,1),maxDate:new Date(2050,11,31),className:["Calendar-component"]}),r.a.createElement(f,{date:d,events:n,handleClick:E}))},g=function(){var e=b(),t=Object(u.a)(e,2),n=t[0].theme,c=t[1];Object(a.useEffect)((function(){var e=document.querySelector("body"),t=window.getComputedStyle(e).backgroundColor;c("rgb(40, 44, 52)"===t?{type:"changeTheme",newTheme:"dark"}:{type:"changeTheme",newTheme:"light"})}),[]);return r.a.createElement("button",{onClick:function(){var e="dark"===n?"rgb(194, 214, 255)":"rgb(40, 44, 52)",t="dark"===n?"light":"dark";document.body.style.backgroundColor=e,c({type:"changeTheme",newTheme:t})},className:"theme-toggle"},"dark"===n?"Switch to light theme":"Switch to dark theme")},O=function(){return r.a.createElement(o.d,null,r.a.createElement(o.b,null,r.a.createElement(o.a,null,"Calendar"),r.a.createElement(o.a,null,"Task List"),r.a.createElement(o.a,null,"Preferences")),r.a.createElement(o.c,null,r.a.createElement(E,null)),r.a.createElement(o.c,null),r.a.createElement(o.c,null,r.a.createElement(g,null)))},y=n(33);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(e,t){switch(t.type){case"changeTheme":return w({},e,{theme:t.newTheme});case"changeDate":return w({},e,{datePicked:t.newDate});case"updateEvents":return w({},e,{events:t.events});default:return e}},C=function(){var e={theme:"",datePicked:new Date,events:[]};return r.a.createElement(v,{initialState:e,reducer:j},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"Welcome to QuickUtils\u2122!!"),r.a.createElement(O,null)))};l.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.f76938e4.chunk.js.map