(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,function(e,t,r){e.exports={title:"OtherDetails_title__1CX_X"}},,,,,function(e,t,r){e.exports={"search-form":"UserSearch_search-form__1ewLP","form-group":"UserSearch_form-group__36-Lm",notValid:"UserSearch_notValid__2xldx"}},,,,function(e,t,r){e.exports={weather:"Weather_weather__1d13P",weatherDesc:"Weather_weatherDesc__30ZZE"}},function(e,t,r){e.exports={"weather-details":"WeatherDetails_weather-details__36whO","weather-details__item":"WeatherDetails_weather-details__item__24MjS"}},function(e,t,r){e.exports={"daily-weather":"DailyWeather_daily-weather__2lpWl","daily-weather__item":"DailyWeather_daily-weather__item__2pmqI"}},,function(e,t,r){e.exports={main:"Layout_main__3V_uc"}},function(e,t,r){e.exports={notification:"Notification_notification__3NXhz"}},function(e,t,r){e.exports={"lds-roller":"Loading_lds-roller__1ZO2V"}},function(e,t,r){e.exports={"today-info":"TodayInfo_today-info__RPYpW"}},,,,,,function(e,t,r){},,,,,,,function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(10),i=r.n(c),s=(r(28),r(19)),o=r.n(s),l=r(1),u=function(e){return Object(l.jsx)(n.Fragment,{children:Object(l.jsx)("main",{className:o.a.main,children:e.children})})},d=r(23),h=r(11),j=r.n(h),b=r(7),x=Object(b.b)({name:"ui",initialState:{notification:null,loading:!1},reducers:{showNotification:function(e,t){e.notification={message:t.payload.message}},clearNotification:function(e){e.notification=null},setLoading:function(e,t){e.loading=t.payload}}}),f=x.actions,m=x,p=r(2),O=r(5),w=r.n(O),v=r(9),y=Object(b.b)({name:"city",initialState:{weather:null,hourlyWeather:null,dailyWeather:null},reducers:{addWeather:function(e,t){e.weather=t.payload,e.weather.main.temp=(e.weather.main.temp-273.15).toFixed(0),e.weather.main.temp_max=(e.weather.main.temp_max-273.15).toFixed(0),e.weather.main.feels_like=(e.weather.main.feels_like-273.15).toFixed(0),e.weather.visibility=e.weather.visibility/1e3;var r=e.weather.sys.sunrise,n=new Date(1e3*r),a=(n.getHours()<10?"0":"")+n.getHours()+":"+(n.getMinutes()<10?"0":"")+n.getMinutes();e.weather.sys.sunrise=a;var c=e.weather.sys.sunset,i=new Date(1e3*c),s=(i.getHours()<10?"0":"")+i.getHours()+":"+(i.getMinutes()<10?"0":"")+i.getMinutes();e.weather.sys.sunset=s},addHourlyWeather:function(e,t){e.hourlyWeather=t.payload,e.hourlyWeather.hourly.forEach((function(e){e.temp=(e.temp-273.15).toFixed()})),e.hourlyWeather.current.temp=(e.hourlyWeather.current.temp-273.15).toFixed()},addDailyWeather:function(e,t){e.dailyWeather=t.payload,e.dailyWeather.daily.forEach((function(e){e.temp.day=(e.temp.day-273.15).toFixed()}))}}}),_=y.actions,g=y,N="28b0799543359e8e6ed8330d199b4ccc",W=function(e){return function(){var t=Object(v.a)(w.a.mark((function t(r){var n,a,c,i;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=function(){var t=Object(v.a)(w.a.mark((function t(){var n,a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat(N,"&lang=ru"));case 2:if((n=t.sent).ok){t.next=5;break}throw new Error({message:"There is a server error"});case 5:return t.next=7,n.json();case 7:return a=t.sent,r(_.addWeather(a)),t.abrupt("return",a);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=function(){var e=Object(v.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t.coord.lat,"&lon=").concat(t.coord.lon,"&exclude=daily&lang=ru&appid=").concat(N));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error({message:"There is a server error"});case 5:return e.next=7,n.json();case 7:return a=e.sent,r(_.addHourlyWeather(a)),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=Object(v.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t.coord.lat,"&lon=").concat(t.coord.lon,"&exclude=hourly&appid=").concat(N,"&lang=ru"));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error({message:"There is a server error"});case 5:return e.next=7,n.json();case 7:return a=e.sent,r(_.addDailyWeather(a)),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.prev=3,r(f.setLoading(!0)),t.next=7,n();case 7:return i=t.sent,t.next=10,a(i);case 10:return t.next=12,c(i);case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(3),r(f.showNotification({message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0432\u0432\u043e\u0434! \u0422\u0430\u043a\u043e\u0433\u043e \u0433\u043e\u0440\u043e\u0434\u0430 \u043d\u0435\u0442..."}));case 17:r(f.setLoading(!1));case 18:case"end":return t.stop()}}),t,null,[[3,14]])})));return function(e){return t.apply(this,arguments)}}()},D=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),r=t[0],a=t[1],c=Object(p.b)(),i=Object(n.useRef)();return Object(l.jsxs)("form",{className:j.a["search-form"],onSubmit:function(e){e.preventDefault();var t=i.current.value.trim();""!==t&&isNaN(t)?(c(W(t)),r||a(!0),i.current.value=""):(a(!1),c(f.showNotification({message:"\u0412\u044b \u043d\u0435 \u0432\u0432\u0435\u043b\u0438 \u0433\u043e\u0440\u043e\u0434!"}))),window.scrollTo({top:0,behavior:"smooth"})},children:[Object(l.jsxs)("div",{className:j.a["form-group"],children:[Object(l.jsx)("label",{htmlFor:"city",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{className:"".concat(r?"":j.a.notValid),ref:i,type:"text",id:"city"})]}),Object(l.jsx)("button",{children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u043f\u043e\u0433\u043e\u0434\u0435"})]})},k=r(37),F=r(15),C=r.n(F),S=function(){var e=Object(p.c)((function(e){return e.city.weather})),t=e.weather[0].description.split("").map((function(e,t){return 0===t?e.toUpperCase():e})).join("");return Object(l.jsx)(k.a.div,{initial:{x:"-100vw"},animate:{x:0},className:C.a.weather,children:Object(l.jsxs)("div",{className:C.a.weatherDesc,children:[Object(l.jsxs)("h2",{children:[e.name," "]}),Object(l.jsx)("h3",{children:t}),Object(l.jsxs)("h1",{children:[e.main.temp," \xb0C"]})]})})},T=r(8),E=r(16),L=r.n(E),M=function(){var e=Object(p.c)((function(e){return e.city.hourlyWeather})).hourly.slice(0,6).map((function(e){var t=e.dt,r=new Date(1e3*t),n=(r.getHours()<10?"0":"")+r.getHours()+":"+r.getMinutes()+"0";return Object(T.a)(Object(T.a)({},e),{},{dt:n,id:Math.random()})}));return Object(l.jsx)(k.a.ul,{initial:{x:"100vw"},animate:{x:0},className:L.a["weather-details"],children:e.map((function(e){return Object(l.jsxs)("li",{className:L.a["weather-details__item"],children:[Object(l.jsx)("div",{children:e.dt}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),alt:"weather icon"})}),Object(l.jsxs)("div",{children:[e.temp," ","\xb0C"]})]},e.id)}))})},H=r(17),P=r.n(H),V=function(){var e=["\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043e\u0442\u0430"],t=Object(p.c)((function(e){return e.city.dailyWeather})).daily.slice(1).map((function(t){var r=t.dt,n=new Date(1e3*r).getDay();return Object(T.a)(Object(T.a)({},t),{},{dt:e[n],id:Math.random()})}));return Object(l.jsx)("ul",{className:P.a["daily-weather"],children:t.map((function(e){return Object(l.jsxs)("li",{className:P.a["daily-weather__item"],children:[Object(l.jsx)("span",{children:e.dt}),Object(l.jsx)("span",{children:Object(l.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),alt:"weather icon"})}),Object(l.jsxs)("span",{children:[e.temp.day," ","\xb0C"]})]},e.id)}))})},I=r(20),U=r.n(I),X=function(e){return Object(l.jsx)(k.a.div,{initial:{y:"-100vh"},animate:{y:0},className:U.a.notification,children:Object(l.jsx)("div",{children:e.message})})},Z=r(21),q=r.n(Z),B=function(){return Object(l.jsxs)("div",{className:q.a["lds-roller"],children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})},J=r(22),R=r.n(J),z=function(){var e=Object(p.c)((function(e){return e.city.weather}));return Object(l.jsx)("div",{className:R.a["today-info"],children:Object(l.jsxs)("p",{children:["\u0421\u0435\u0433\u043e\u0434\u043d\u044f: c\u0435\u0439\u0447\u0430\u0441 ",e.weather[0].description,". Te\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0432\u043e\u0437\u0434\u0443\u0445\u0430 ",e.main.temp," \xb0C. \u041e\u0436\u0438\u0434\u0430\u0435\u043c\u0430\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0432\u043e\u0437\u0434\u0443\u0445\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f ",e.main.temp_max," \xb0C."]})})},Y=r(6),A=r.n(Y),G=function(){var e=Object(p.c)((function(e){return e.city.weather}));return Object(l.jsxs)(n.Fragment,{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:A.a.title,children:"\u0412\u043e\u0441\u0445\u043e\u0434 \u0441\u043e\u043b\u043d\u0446\u0430"}),Object(l.jsx)("div",{children:e.sys.sunrise}),Object(l.jsx)("hr",{})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:A.a.title,children:"\u0417\u0430\u0445\u043e\u0434 \u0441\u043e\u043b\u043d\u0446\u0430"}),Object(l.jsx)("div",{children:e.sys.sunset}),Object(l.jsx)("hr",{})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:A.a.title,children:"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c"}),Object(l.jsxs)("div",{children:[e.main.humidity," %"]}),Object(l.jsx)("hr",{})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:A.a.title,children:"\u0412\u0435\u0442\u0435\u0440"}),Object(l.jsxs)("div",{children:[e.wind.speed," \u043c/c"]}),Object(l.jsx)("hr",{})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:A.a.title,children:"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a"}),Object(l.jsxs)("div",{children:[e.main.feels_like," \xb0C"]}),Object(l.jsx)("hr",{})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:A.a.title,children:"\u0412\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u044c"}),Object(l.jsxs)("div",{children:[e.visibility," \u043a\u043c"]}),Object(l.jsx)("hr",{})]})]})};var K=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.city.weather})),r=Object(p.c)((function(e){return e.city.hourlyWeather})),a=Object(p.c)((function(e){return e.city.dailyWeather})),c=Object(p.c)((function(e){return e.ui.notification})),i=Object(p.c)((function(e){return e.ui.loading}));return Object(n.useEffect)((function(){e(W("\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433"))}),[e]),Object(n.useEffect)((function(){var t=setTimeout((function(){e(f.clearNotification())}),3e3);return function(){return clearTimeout(t)}}),[e,c]),Object(l.jsxs)(u,{children:[i&&Object(l.jsx)(B,{}),!i&&c&&Object(l.jsx)(X,{message:c.message}),!i&&t&&Object(l.jsx)(S,{}),!i&&r&&Object(l.jsx)(M,{}),Object(l.jsx)(D,{}),!i&&a&&Object(l.jsx)(V,{}),!i&&t&&Object(l.jsx)(z,{}),!i&&t&&Object(l.jsx)(G,{})]})},Q=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,38)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),c(e),i(e)}))},$=Object(b.a)({reducer:{ui:m.reducer,city:g.reducer}});i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(p.a,{store:$,children:Object(l.jsx)(K,{})})}),document.getElementById("root")),Q()}],[[35,1,2]]]);
//# sourceMappingURL=main.f430f07e.chunk.js.map