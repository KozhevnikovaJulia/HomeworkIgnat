(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{24:function(e,a,t){e.exports={item:"HW5_item__1eK38",active:"HW5_active__3XuKg"}},28:function(e,a,t){e.exports={contaner:"Message_contaner__1GK8B",message:"Message_message__28k13",ava:"Message_ava__3pGk1",messageArea:"Message_messageArea__240j5",time:"Message_time__r5np4"}},36:function(e,a,t){e.exports={App:"App_App__1PflB",error404:"App_error404__qRqCr"}},38:function(e,a,t){e.exports={affairs:"Affairs_affairs__1vsMf",affair:"Affairs_affair__1p98m"}},44:function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3OlBc",errorInput:"SuperInputText_errorInput__1hciX",error:"SuperInputText_error__19nxq"}},45:function(e,a,t){e.exports={container:"Clock_container__1687u",time:"Clock_time__wbj-C",date:"Clock_date__3xIo7"}},46:function(e,a,t){e.exports={default:"SuperButton_default__4pqlr",red:"SuperButton_red__2BqnW"}},47:function(e,a,t){e.exports={someClass:"Greeting_someClass__hnAct",error:"Greeting_error__kArJm"}},48:function(e,a,t){e.exports={blue:"HW4_blue__2F0np",column:"HW4_column__Ts4Gf"}},49:function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3sJOJ",spanClassName:"SuperCheckbox_spanClassName__MfWya"}},50:function(e,a,t){e.exports={select:"SuperSelect_select__16Ty-",items:"SuperSelect_items__Sml5B"}},58:function(e,a,t){e.exports={superSpan:"SuperEditableSpan_superSpan__8tifW"}},59:function(e,a,t){e.exports={button:"HW8_button__3AOxP"}},61:function(e,a,t){e.exports=t.p+"static/media/Wedges-3s-200px (1).0e6d959b.svg"},65:function(e,a,t){e.exports=t(77)},70:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(6),c=t.n(l),o=(t(70),t(36)),i=t.n(o),u=t(3),s=t(101),m=t(102),d=t(24),E=t.n(d),f=t(23),p=t(5),h=t(28),v=t.n(h);var g=function(e){return r.a.createElement("div",{className:v.a.contaner},r.a.createElement("div",{className:v.a.message},r.a.createElement("div",{className:v.a.ava},r.a.createElement("img",{src:e.avatar})),r.a.createElement("div",{className:v.a.messageArea},r.a.createElement("span",null,e.name),r.a.createElement("div",null," ",e.message),r.a.createElement("div",{className:v.a.time},e.time))))},b="https://i.pinimg.com/736x/6d/f7/03/6df7036c28e8cf6b160f4839a4bd8c3d--gru--agnes-despicable-me.jpg",_="Julia",C="Pies are a baked or fried dough dish with a filling. The dough can be different - yeast, sponge, puff, shortbread, grated... Pies are open when the filling is on top of the dough, and closed when the filling is completely inside the dough. There are many varieties of pies: kulebyaka, kurnik, sweet pies, chapilg, Kish, sponge cake, cheesecake, strudel, gingerbread, kulich, Mannik, taten, cheesecake, Babka",k="22:00";var O=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null,"homeworks 1"),r.a.createElement(g,{avatar:b,name:_,message:C,time:k}))},j=t(12),N=t(46),w=t.n(N),x=function(e){var a=e.red,t=e.className,n=Object(j.a)(e,["red","className"]),l=a?"".concat(w.a.red," ").concat(t):"".concat(w.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},y=t(38),S=t.n(y);var A=function(e){return r.a.createElement("div",{className:S.a.affair},r.a.createElement("div",null,e.affair.name),r.a.createElement("div",null,r.a.createElement(x,{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X")))};var T=function(e){var a=e.data.map((function(a){return r.a.createElement(A,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:S.a.affairs},a,r.a.createElement(x,{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(x,{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(x,{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(x,{onClick:function(){e.setFilter("low")}},"Low"))},I=[{_id:1,name:"React",priority:"high"},{_id:2,name:"ani",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var M=function(){var e=Object(n.useState)(I),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(u.a)(c,2),i=o[0],s=o[1],m=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):e}(t,i);return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null,"homeworks 2"),r.a.createElement(T,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}))},J=t(62),P=t(47),B=t.n(P),F=t(44),W=t.n(F),H=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,i=e.spanClassName,u=Object(j.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(W.a.error," ").concat(i||""),m=c?"".concat(W.a.errorInput," ").concat(o):"".concat(W.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},u)),c&&r.a.createElement("span",{className:s},c))},K=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o="Error!"===l?B.a.error:B.a.someClass;return r.a.createElement("div",null,r.a.createElement(H,{value:a,onChange:t,className:o}),r.a.createElement("span",null,l),r.a.createElement(x,{onClick:n},"add"),r.a.createElement("span",null,c))},G=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(u.a)(l,2),o=c[0],i=c[1],s=Object(n.useState)(""),m=Object(u.a)(s,2),d=m[0],E=m[1],f=a.length;return r.a.createElement(K,{name:o,setNameCallback:function(e){i(e.currentTarget.value)},addUser:function(){""===o?E("Error!"):(t(o),alert("Hello ".concat(o,"!")),i(""),E(""))},error:d,totalUsers:f})},D=t(103);var R=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null,"homeworks 3"),r.a.createElement(G,{users:t,addUserCallback:function(e){var a=[{_id:Object(D.a)(),name:"NewName"}].concat(Object(J.a)(t));l(a)}}))},L=t(48),U=t.n(L),q=t(49),X=t.n(q),z=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=(e.className,e.spanClassName,e.children),l=Object(j.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]);return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:X.a.checkbox},l)),n&&r.a.createElement("span",{className:X.a.spanClassName},n))};var $=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},i=Object(n.useState)(!1),s=Object(u.a)(i,2),m=s[0],d=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null,"homeworks 4"),r.a.createElement("div",{className:"".concat(U.a.column," ").concat(U.a.blue)},r.a.createElement(H,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(x,{red:!0,onClick:o},"  delete "),r.a.createElement(z,{checked:m,onChangeChecked:d},"I like this button "),r.a.createElement(z,{checked:m,onChange:function(e){return d(e.currentTarget.checked)}})))},Q=t(58),V=t.n(Q),Y=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(j.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),i=Object(u.a)(o,2),s=i[0],m=i[1],d=l||{},E=d.children,f=d.onDoubleClick,p=d.className,h=Object(j.a)(d,["children","onDoubleClick","className"]),v="".concat(V.a.superSpan," ").concat(p);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(H,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),f&&f(e)},className:v},h),E||c.value))};function Z(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function ee(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}Z("test",{x:"A",y:1});ee("test",{x:"",y:0});var ae=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null,"homeworks 6"),r.a.createElement("div",null,r.a.createElement(Y,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(x,{onClick:function(){Z("editable-span-value",t)}},"save"),r.a.createElement(x,{onClick:function(){var e=ee("editable-span-value","");l(e)}},"restore"))};var te=function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(M,null),r.a.createElement(R,null),r.a.createElement($,null),r.a.createElement(ae,null))},ne=t(50),re=t.n(ne),le=function(e){var a=e.options,t=(e.onChange,e.onChangeOption),n=Object(j.a)(e,["options","onChange","onChangeOption"]),l=a&&a.map((function(e,a){return r.a.createElement("option",{className:re.a.items,key:a},e)}));return r.a.createElement("select",Object.assign({className:re.a.select,onChange:function(e){t&&t(e.currentTarget.value)}},n),l)},ce=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(j.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&l(e.currentTarget.value)}),o=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",{name:a,value:e,type:"radio",onChange:c,checked:e===n}))})):[];return r.a.createElement("div",null,o)},oe=["x","y","z"];var ie=function(){var e=Object(n.useState)(oe[1]),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null,"homeworks 7"),r.a.createElement("div",null,r.a.createElement(le,{options:oe,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ce,{name:"radio",options:oe,value:t,onChangeOption:l})))},ue=t(43),se=function(e,a){switch(a.type){case"SORT-NAME":var t=e.map((function(e){return Object(ue.a)({},e)}));return"up"===a.orientation?t.sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0})):t.sort((function(e,a){return e.name<a.name?1:e.name>a.name?-1:0})),t;case"CHECK-AGE-18":return e.filter((function(e){return e.age>a.age}));default:throw new Error("I do not andastand this action.type!")}},me=t(59),de=t.n(me),Ee=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var fe=function(){var e=Object(n.useState)(Ee),a=Object(u.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id},e.name,", \u0432\u043e\u0437\u0440\u0430\u0441\u0442: ",e.age)}));return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null," homeworks 8"),c,r.a.createElement("div",{className:de.a.button},r.a.createElement("div",null,r.a.createElement(x,{onClick:function(){return l(se(Ee,{type:"SORT-NAME",orientation:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(x,{onClick:function(){return l(se(Ee,{type:"SORT-NAME",orientation:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(x,{onClick:function(){return l(se(Ee,{type:"CHECK-AGE-18",age:18}))}},"check 18"))))},pe=t(45),he=t.n(pe);var ve=function(){var e=Object(n.useState)(0),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(new Date),o=Object(u.a)(c,2),i=o[0],s=o[1],m=Object(n.useState)(!1),d=Object(u.a)(m,2),E=d[0],f=d[1],p=function(){clearInterval(t)},h=i.toLocaleTimeString(),v=i.toLocaleDateString();return r.a.createElement("div",{className:he.a.container},r.a.createElement("div",{className:he.a.time,onMouseEnter:function(){f(!0)},onMouseLeave:function(){f(!1)}},h),E&&r.a.createElement("div",{className:he.a.date},v),r.a.createElement(x,{onClick:function(){p();var e=window.setInterval((function(){s(new Date)}),1e3);l(e)}},"start"),r.a.createElement(x,{onClick:p},"stop"))};var ge=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null,"homeworks 9"),r.a.createElement(ve,null))},be=t(34),_e={loading:!1},Ce=t(61),ke=t.n(Ce);var Oe=function(){var e=Object(be.c)((function(e){return e.loading})),a=Object(be.b)();return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null,"homeworks 10"),e.loading?r.a.createElement("div",null,r.a.createElement("img",{src:ke.a})):r.a.createElement("div",null,r.a.createElement(x,{onClick:function(){var e={type:"LOADING"};a(e),setTimeout((function(){a(e)}),2e3),console.log("loading...")}},"set loading...")))};var je=function(){return r.a.createElement("div",null,r.a.createElement(ie,null),r.a.createElement(fe,null),r.a.createElement(ge,null),r.a.createElement(Oe,null))};var Ne=function(){return r.a.createElement("div",null,"JuniorPlus")};var we=function(){return r.a.createElement("div",{className:i.a.error404},r.a.createElement("img",{src:"https://w7.pngwing.com/pngs/324/215/png-transparent-http-404-error-message-small-alligator-web-design-material-damage-animals-text-vertebrate-thumbnail.png"}))};var xe=function(){return r.a.createElement("div",null,r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",render:function(){return r.a.createElement(p.a,{to:"/preJunior"})}}),r.a.createElement(p.b,{exact:!0,path:"/preJunior",render:function(){return r.a.createElement(te,null)}}),r.a.createElement(p.b,{exact:!0,path:"/junior",render:function(){return r.a.createElement(je,null)}}),r.a.createElement(p.b,{exact:!0,path:"/juniorPlus",render:function(){return r.a.createElement(Ne,null)}}),r.a.createElement(p.b,{render:function(){return r.a.createElement(we,null)}})))};function ye(){var e=r.a.useState(!1),a=Object(u.a)(e,2),t=a[0],n=a[1];return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{onClick:function(){return n(!0)}},"Menu"),r.a.createElement(s.a,{anchor:"left",open:t,onClose:function(){return n(!1)}},r.a.createElement("div",{className:E.a.item},r.a.createElement(f.b,{to:"/preJunior",activeClassName:E.a.active},"PreJunior")),r.a.createElement("div",{className:E.a.item},r.a.createElement(f.b,{to:"/junior",activeClassName:E.a.active},"Junior")),r.a.createElement("div",{className:E.a.item},r.a.createElement(f.b,{to:"/juniorPlus",activeClassName:E.a.active},"JuniorPlus")))))}var Se=function(){return r.a.createElement("div",null,r.a.createElement(ye,null))};var Ae=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null,"homeworks 5"),r.a.createElement(f.a,null,r.a.createElement(Se,null),r.a.createElement(xe,null)))};var Te=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement("h3",null,"REACT HOMEWORKS:"),r.a.createElement(Ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(76);var Ie=t(31),Me=Object(Ie.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOADING":var t=Object(ue.a)({},e);return t.loading=!e.loading,t;default:return e}}}),Je=Object(Ie.c)(Me),Pe=Je;window.store=Je,c.a.render(r.a.createElement(be.a,{store:Pe},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.c3acdff3.chunk.js.map