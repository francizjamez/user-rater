(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var r=c(1),s=c.n(r),a=c(16),n=c.n(a),l=(c(22),c(3)),o=c.n(l),i=c(6),d=c(5),x=c(4),j=c.n(x),u=c(17),b=c(0),p=function(e){var t=e.selectedLocation,c=Object(r.useState)([]),s=Object(d.a)(c,2),a=s[0],n=s[1],l=Object(r.useRef)(),x=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}return e.next=3,j.a.post("https://rate-people.herokuapp.com/users",{name:l.current.value,location:t});case 3:u();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){j.a.get("https://rate-people.herokuapp.com/users/".concat(t)).then((function(e){return n(e.data)}))};return Object(r.useEffect)((function(){t&&u()}),[t]),Object(b.jsxs)("div",{className:"w-64 border-l-4 border-r-4 border-gray-500 h-screen flex flex-col justify-between",children:[Object(b.jsx)("h2",{className:"text-3xl text-center p-4",children:"Users list"}),Object(b.jsx)("div",{className:"flex-1 px-3 py-3",children:a.map((function(e,t){var c=e.name;return Object(b.jsx)("div",{className:"".concat(t%2===0&&"bg-gray-200"," p-2 cursor-pointer hover:bg-gray-800 hover:text-white"),children:Object(b.jsx)("p",{className:"font-semibold",children:c})})}))}),Object(b.jsxs)("div",{className:"flex flex-col gap-8",children:[Object(b.jsxs)("div",{className:"flex flex-col gap-2",children:[Object(b.jsx)("input",{ref:l,className:"w-56 border-4 border-gray-600 self-center px-4 py-1 rounded"}),Object(b.jsx)("button",{onClick:x,className:"rounded-xl py-2 px-6 self-center bg-gray-500 text-white",children:"Add user"})]}),Object(b.jsx)("h2",{className:"text-2xl text-center border-t-4 border-gray-500 px-2 py-6",children:t||"Select a location"})]})]})};var f=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)(""),n=Object(d.a)(a,2),l=n[0],x=n[1],f=Object(r.useRef)();return Object(b.jsxs)("div",{className:"container mx-auto flex",children:[Object(b.jsx)(p,{selectedLocation:l}),Object(b.jsxs)("div",{className:"flex flex-col justify-start justify-items-center gap-2 p-20 mx-auto",children:[Object(b.jsxs)("div",{className:"flex flex-col gap-1",children:[Object(b.jsx)("h1",{className:"text-4xl font-bold self-center",children:"Enter a place to search"}),Object(b.jsx)("div",{className:"relative",children:Object(b.jsx)("button",{className:"absolute right-5 top-4",onClick:Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://geocode.search.hereapi.com/v1/geocode?q=".concat(f.current.value,"&apiKey=W2QI5pBCQSZ-b8fWT3GNiaUzG3LkgXn1Tax7kmtn79M"));case 2:t=e.sent,console.log(t.data.items),s(t.data.items);case 5:case"end":return e.stop()}}),e)}))),children:Object(b.jsx)(u.a,{className:" text-4xl"})})}),Object(b.jsx)("input",{ref:f,className:"border-2 text-4xl border-black rounded-full outline-none py-2 px-6"})]}),Object(b.jsx)("div",{className:"grid mt-10 gap-16 ",children:c.map((function(e,t){var c=e.title,r=e.address,s=e.resultType;return Object(b.jsxs)("div",{onClick:function(){x(c)},className:"gap-2 hover:border-gray-700 cursor-pointer border-4 border-gray-400 p-4 rounded-lg grid justify-items-start",children:[Object(b.jsxs)("div",{className:"flex justify-between w-full gap-2",children:[Object(b.jsx)("h1",{className:"max-w-xs",children:c}),Object(b.jsx)("p",{className:"font-bold",children:r.countryCode})]}),Object(b.jsx)("p",{className:"text-gray-500",children:s})]},t)}))})]})]})};n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.711b8371.chunk.js.map