(this["webpackJsonpfood-dash"]=this["webpackJsonpfood-dash"]||[]).push([[0],[,,,,function(t,e,a){t.exports={cart__item:"CartItem_cart__item__1sU-A",cart__details:"CartItem_cart__details__3xZRL",cart__price:"CartItem_cart__price__XiX0H",cart__numbers:"CartItem_cart__numbers__1VbLZ",cart__controls:"CartItem_cart__controls__1YLuG"}},,,function(t,e,a){t.exports={button:"Button_button__1HRwj",large:"Button_large__1bsBN",small:"Button_small__xCIeI",dark:"Button_dark__r-F_a",light:"Button_light__f5HJz",outline:"Button_outline__D6dDk","outline-rounded":"Button_outline-rounded__1xiqz"}},function(t,e,a){t.exports={cart__price:"CartModal_cart__price__2noNA",cart__controls:"CartModal_cart__controls__3fw63",form__controls:"CartModal_form__controls__2GDcT",cart__form:"CartModal_cart__form__5FNiS"}},function(t,e,a){t.exports={input:"Input_input__3TAX-",large:"Input_large__1OewK",left:"Input_left__HzIwt",invalid:"Input_invalid__88uRk"}},function(t,e,a){t.exports={food__item:"FoodItem_food__item__1xJDx",food__details:"FoodItem_food__details__2yQTb",food__controls:"FoodItem_food__controls__19rlq",food__amount:"FoodItem_food__amount__3578i"}},,function(t,e,a){t.exports={icon:"CartBtn_icon__3lv_D",cart__count:"CartBtn_cart__count__VAF94",cart__wrapper:"CartBtn_cart__wrapper__Ae-3u"}},function(t,e,a){t.exports={splash:"Splash_splash__jTwt0",splash__background:"Splash_splash__background__3VN2C",splash__content:"Splash_splash__content__3bE2s"}},,,,function(t,e,a){t.exports={backdrop:"ModalBackDrop_backdrop__2DQbJ"}},function(t,e,a){t.exports={modal:"Modal_modal__1ip_N"}},function(t,e,a){t.exports={chip:"Chip_chip__2WTHj"}},,function(t,e,a){t.exports={invalid:"InputGroup_invalid__NEyPe"}},function(t,e,a){t.exports={cartwrapper:"CartList_cartwrapper__1SKie"}},function(t,e,a){t.exports={header:"Header_header__KWG-5"}},function(t,e,a){t.exports={food:"Food_food__3ZHju"}},function(t,e,a){t.exports={price:"Price_price__3HlNw"}},function(t,e,a){t.exports={main:"Main_main__2mUaQ"}},,,,,,,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),r=a(5),o=a.n(r),i=a(3),s=a(12),l=a.n(s),u=a(17),d=a.n(u),_=a(0),j=function(t){return Object(_.jsx)("div",{onClick:t.toggleCartDisplay,className:d.a.backdrop})},m=a(2),b=a(7),f=a.n(b),O=function(t){return Object(_.jsx)("button",Object(m.a)(Object(m.a)({onClick:function(e){e.preventDefault(),t.btnHandler&&"formSubmit"!==t.formType&&t.btnHandler(Object(m.a)(Object(m.a)({},t.itemInfo),{},{amount:t.orderAmount?+t.orderAmount:1})),"formSubmit"===t.formType&&t.btnHandler()},className:"".concat(f.a.button," ").concat(f.a[t.size]," ").concat(f.a[t.variation]," ").concat(f.a[t.color])},t),{},{children:t.children}))},p=a(18),h=a.n(p),x=function(t){return Object(_.jsx)("div",{className:h.a.modal,children:t.children})},v=a(19),C=a.n(v),g=function(t){return Object(_.jsx)("div",{className:C.a.chip,children:t.children})},I=a(4),y=a.n(I),N=a(15),D=a.n(N),H=a(20),S=a(16),A=c.a.createContext({menu:[]});function T(t,e){if("ADD_FOOD"===e.type){if(t.cartItems.find((function(t){return t.name===e.item.name}))){var a=t.cartItems.map((function(t){return t.name!==e.item.name?t:Object(m.a)(Object(m.a)({},t),{},{amount:t.amount+e.item.amount})}));return Object(m.a)(Object(m.a)({},t),{},{cartItems:a})}return Object(m.a)(Object(m.a)({},t),{},{cartItems:[].concat(Object(S.a)(t.cartItems),[e.item])})}if("DELETE_FOOD"===e.type){var n=t.cartItems.find((function(t){return t.name===e.item.name}));if(n.amount<=1)return Object(m.a)(Object(m.a)({},t),{},{cartItems:Object(S.a)(t.cartItems.filter((function(t){return t.name!==e.item.name})))});if(n.amount>1){var c=t.cartItems.map((function(t){return t.name!==e.item.name?t:Object(m.a)(Object(m.a)({},t),{},{amount:t.amount-1})}));return Object(m.a)(Object(m.a)({},t),{},{cartItems:c})}}return"TOGGLE_CART"===e.type?Object(m.a)(Object(m.a)({},t),{},{cartDisplay:!t.cartDisplay}):"GET_DATA"===e.type?Object(m.a)(Object(m.a)({},t),{},{menu:e.foodList}):void 0}var k=function(t){var e=Object(n.useReducer)(T,{cartItems:[],menu:[],cartDisplay:!1}),a=Object(i.a)(e,2),c=a[0],r=a[1],o=function(){var t=Object(H.a)(D.a.mark((function t(){var e,a;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://fooddash-40af5-default-rtdb.asia-southeast1.firebasedatabase.app/foodData.json");case 2:return e=t.sent,t.next=5,e.json();case 5:a=t.sent,console.log(a),r({type:"GET_DATA",foodList:a});case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(_.jsx)(A.Provider,{value:{foodData:c,addtoCartHandler:function(t){r({type:"ADD_FOOD",item:t})},deletefromCartHandler:function(t){r({type:"DELETE_FOOD",item:t})},toggleCartDisplayHandler:function(){r({type:"TOGGLE_CART"})},retrieveCart:o},children:t.children})},F=A,w=function(t){var e=Object(n.useContext)(F),a=Object(m.a)(Object(m.a)({},t.itemInfo),{},{amount:1});return Object(_.jsxs)("div",{className:y.a.cart__item,children:[Object(_.jsxs)("div",{className:y.a.cart__details,children:[Object(_.jsx)("h3",{className:y.a.cart__name,children:t.itemInfo.name}),Object(_.jsxs)("div",{className:y.a.cart__numbers,children:[Object(_.jsx)("h5",{className:y.a.cart__price,children:t.itemInfo.price}),Object(_.jsxs)(g,{className:y.a.cart__quantity,children:["x",t.itemInfo.amount]})]})]}),Object(_.jsxs)("div",{className:y.a.cart__controls,children:[Object(_.jsx)(O,{btnHandler:e.deletefromCartHandler,itemInfo:t.itemInfo,variation:"outline",color:"light",children:"-"}),Object(_.jsx)(O,{btnHandler:e.addtoCartHandler,itemInfo:a,variation:"outline",color:"light",children:"+"})]})]})},B=a(8),E=a.n(B),z=function(t){var e=Object(n.useState)(""),a=Object(i.a)(e,2),c=a[0],r=a[1],o=Object(n.useState)(!1),s=Object(i.a)(o,2),l=s[0];return{inputValue:c,setInputValue:r,setInputTouched:s[1],inputInvalid:!t(c)&&l}},G=a(9),L=a.n(G),M=function(t){return Object(_.jsx)("input",{type:t.type,onChange:function(e){!t.type&&t.modifyAmount(e.target.value<0?1:e.target.value),t.onChangeHandler(e.target.value)},onBlur:function(e){t.onBlurHandler&&t.onBlurHandler(!0)},value:t.amount,className:"".concat(L.a.input," ").concat(L.a[t.size]," ").concat(L.a[t.textAlign]," ").concat(L.a[t.validity])})},q=a(21),P=a.n(q),V=function(t){var e=z(t.validation),a=e.inputValue,c=e.setInputValue,r=e.setInputTouched,o=e.inputInvalid;return t.validityConnection(o),Object(n.useEffect)((function(){t.formSubmit&&r(!0)}),[t.formSubmit]),Object(_.jsxs)("div",{children:[Object(_.jsx)("label",{children:Object(_.jsx)("h6",{children:t.label})}),Object(_.jsx)(M,{value:a,onChangeHandler:c,onBlurHandler:r,textAlign:"left",type:"form",size:"large",validity:o?"invalid":""}),o&&Object(_.jsxs)("p",{className:P.a.invalid,children:["Please enter a valid ",t.name,"!"]})]})};function R(t){return!(""===t.trim())}function J(t){return isFinite(t)&&6===t.toString().length}var Y=function(t){var e,a=Object(n.useContext)(F),c=Object(n.useState)(!1),r=Object(i.a)(c,2),o=r[0],s=r[1],l=Object(n.useState)(!1),u=Object(i.a)(l,2),d=u[0],j=u[1],m=Object(n.useState)(!1),b=Object(i.a)(m,2),f=b[0],p=b[1],h=Object(n.useState)(!1),v=Object(i.a)(h,2),C=v[0],g=v[1],I=Object(n.useState)(!1),y=Object(i.a)(I,2),N=y[0],D=y[1],H=Object(n.useState)(!1),S=Object(i.a)(H,2),A=S[0],T=S[1];return Object(_.jsxs)(x,{children:[a.foodData.cartItems.map((function(t){return Object(_.jsx)(w,{itemInfo:t},Math.random())})),Object(_.jsxs)("div",{className:E.a.cart__price,children:[Object(_.jsx)("h3",{children:"Total Amount"}),Object(_.jsxs)("h3",{children:["$",a.foodData.cartItems.reduce((function(t,e){return t+parseFloat(e.price.slice(1))*e.amount}),0).toFixed(2)]})]}),A&&Object(_.jsxs)("form",{className:E.a.cart__form,children:[Object(_.jsx)(V,{validityConnection:s,validation:R,name:"name",label:"Your Name",formSubmit:N}),Object(_.jsx)(V,{validityConnection:j,validation:R,name:"street",label:"Street",formSubmit:N}),Object(_.jsx)(V,{validityConnection:p,validation:J,name:"postal code",label:"Postal Code",formSubmit:N}),Object(_.jsx)(V,{validityConnection:g,validation:R,name:"city",label:"City",formSubmit:N}),Object(_.jsxs)("div",{className:E.a.form__controls,children:[Object(_.jsx)(O,{btnHandler:function(){return T(!1)},size:"large",variation:"outline-rounded",children:"Cancel"}),Object(_.jsx)(O,{disabled:e,formType:"formSubmit",btnHandler:function(){D(!0),(e=o||d||f||C)||console.log("Form submitted successfully")},size:"large",color:"light",children:"Confirm"})]})]}),!A&&Object(_.jsxs)("div",{className:E.a.cart__controls,children:[Object(_.jsx)(O,{btnHandler:t.toggleCartDisplay,size:"large",variation:"outline-rounded",children:"Close"}),Object(_.jsx)(O,{btnHandler:function(){return T(!0)},size:"large",color:"light",children:"Order"})]})]})},K=a(22),Q=a.n(K),X=function(t){return Object(_.jsxs)("div",{className:Q.a.cartwrapper,children:[o.a.createPortal(Object(_.jsx)(Y,{toggleCartDisplay:t.toggleCartDisplay}),document.querySelector("#modal-root")),o.a.createPortal(Object(_.jsx)(j,{toggleCartDisplay:t.toggleCartDisplay}),document.querySelector("#backdrop-root"))]})},Z=function(){var t=Object(n.useState)(!1),e=Object(i.a)(t,2),a=e[0],c=e[1],r=Object(n.useContext)(F).foodData.cartItems.reduce((function(t,e){return t+e.amount}),0);function o(){c((function(t){return!t}))}return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(O,{btnHandler:o,size:"large",color:"dark",children:Object(_.jsxs)("div",{className:l.a.cart__wrapper,children:[Object(_.jsx)("svg",{className:l.a.icon,"aria-hidden":"true",focusable:"false",role:"presentation",viewBox:"0 0 576 512",children:Object(_.jsx)("path",{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"})}),Object(_.jsx)("span",{children:"Your Cart"}),Object(_.jsx)("div",{className:l.a.cart__count,children:r})]})}),a&&Object(_.jsx)(X,{toggleCartDisplay:o})]})},U=a(23),W=a.n(U),$=function(){return Object(_.jsxs)("div",{className:W.a.header,children:[Object(_.jsx)("h1",{children:"FoodDash"}),Object(_.jsx)(Z,{})]})},tt=(a(33),a(24)),et=a.n(tt),at=function(t){return Object(_.jsx)("ul",{className:"".concat(et.a.food," ").concat(t.className),children:t.children})},nt=a(25),ct=a.n(nt),rt=function(t){return Object(_.jsx)("div",{className:ct.a.price,children:t.children})},ot=a(10),it=a.n(ot),st=function(t){var e=Object(n.useState)(1),a=Object(i.a)(e,2),c=a[0],r=a[1],o=Object(n.useContext)(F);return Object(_.jsxs)("li",{className:it.a.food__item,children:[Object(_.jsxs)("div",{className:it.a.food__details,children:[Object(_.jsx)("h4",{children:t.itemInfo.name}),Object(_.jsx)("i",{children:t.itemInfo.description}),Object(_.jsx)(rt,{children:t.itemInfo.price})]}),Object(_.jsxs)("form",{className:it.a.food__controls,children:[Object(_.jsxs)("div",{className:it.a.food__amount,children:[Object(_.jsx)("h4",{children:"Amount"})," ",Object(_.jsx)(M,{itemInfo:t.itemInfo,type:"number",modifyAmount:r,amount:c})]}),Object(_.jsx)(O,{itemInfo:t.itemInfo,orderAmount:c,btnHandler:o.addtoCartHandler,color:"light",children:"+ Add"})]})]})},lt=function(){var t=Object(n.useContext)(F);return Object(n.useEffect)((function(){t.retrieveCart()}),[]),Object(_.jsx)(at,{children:t.foodData.menu.map((function(t){return Object(_.jsx)(st,{itemInfo:t},Math.random())}))})},ut=a(13),dt=a.n(ut),_t=a.p+"static/media/buffet.1ccf7b93.jpeg",jt=function(){return Object(_.jsxs)("div",{className:dt.a.splash,children:[Object(_.jsx)("img",{src:_t,alt:"background",className:dt.a.splash__background}),Object(_.jsxs)("div",{className:dt.a.splash__content,children:[Object(_.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(_.jsx)("p",{children:"Choose our favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(_.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})]})},mt=a(26),bt=a.n(mt),ft=function(){return Object(_.jsxs)("div",{className:bt.a.main,children:[Object(_.jsx)(jt,{}),Object(_.jsx)(lt,{})]})},Ot=function(){return Object(_.jsxs)(k,{children:[Object(_.jsx)($,{}),Object(_.jsx)(ft,{})]})};o.a.render(Object(_.jsx)(Ot,{}),document.querySelector("#root"))}],[[34,1,2]]]);
//# sourceMappingURL=main.e09e928c.chunk.js.map