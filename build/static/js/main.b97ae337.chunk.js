(this["webpackJsonplivefront-challenge"]=this["webpackJsonplivefront-challenge"]||[]).push([[0],{12:function(e,t,a){},32:function(e,t,a){},41:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},67:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a(1),s=a.n(r),i=a(34),n=a.n(i),o=(a(41),a(11)),l=a(2),j=(a(12),a(10)),p=a.n(j);a(60);var d=function(e){var t=e.category;return Object(c.jsxs)("div",{role:"button",className:"categoryCard__wrapper",onClick:function(){e.history.push({pathname:"/recipes/"+t.strCategory,state:{selection:t.strCategory,queryParamType:"c="}})},children:[Object(c.jsx)("div",{className:"categoryCard__imgWrapper",children:Object(c.jsx)("img",{role:"category-card-img",className:"categoryCard__img",src:t.strCategoryThumb,alt:"category cover"})}),Object(c.jsx)("div",{children:Object(c.jsx)("header",{className:"categoryCard__header",children:t.strCategory})})]})},h=(a(61),a(3)),b=a.p+"static/media/myMealLogo.52903069.svg",u=a.p+"static/media/backArrow.dfac1a3f.svg";var O=function(e){var t=Object(h.f)(),a=Object(r.useState)(""),i=Object(l.a)(a,2),n=i[0],o=i[1];Object(r.useEffect)((function(){"/"===t.pathname?o("categories"):"/by-ingredient"===t.pathname?o("ingredients"):"/by-region"===t.pathname&&o("regions")}),[t.pathname]);var j=function(t){e.history.push(t)},p=e.subheader?Object(c.jsx)("span",{className:"page__subHeaderText",children:e.subheader}):Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsx)("button",{className:"page__filterOption ".concat("categories"===n?"page__filterActive":""),onClick:function(){return j("/")},children:"By Category"}),Object(c.jsx)("button",{className:"page__filterOption ".concat("ingredients"===n?"page__filterActive":""),onClick:function(){return j("/by-ingredient")},children:"By Ingredient"}),Object(c.jsx)("button",{className:"page__filterOption ".concat("regions"===n?"page__filterActive":""),onClick:function(){return j("/by-region")},children:"By Region"})]});return Object(c.jsx)(s.a.Fragment,{children:Object(c.jsxs)("div",{className:"page__headerWrapper",children:[t.pathname.includes("/recipes")&&Object(c.jsx)("button",{className:"page__backArrow app__backArrow",onClick:function(){e.history.goBack()},children:Object(c.jsx)("img",{className:"app__backArrowImg",src:u,alt:"go back"})}),Object(c.jsxs)("header",{className:"page__headerText",children:["MY ",Object(c.jsx)("img",{className:"page__headerLogo",src:b,alt:"my meal logo"})," ","MEAL"]}),Object(c.jsx)("div",{className:"page__filtersWrapper",children:p})]})})},m=a(5),_=a.n(m);a(67);var g=function(){return Object(c.jsx)(m.SkeletonTheme,{color:"white",highlightColor:"lightgrey",children:Object(c.jsxs)("div",{className:"categoryCardLoader__wrapper",children:[Object(c.jsx)("div",{className:"categoryCardLoader__imgWrapper",children:Object(c.jsx)(_.a,{circle:!0,height:70,width:70})}),Object(c.jsx)("div",{children:Object(c.jsx)(_.a,{className:"categoryCardLoader__header"})})]})})};var x=function(e){var t=Object(r.useState)([]),a=Object(l.a)(t,2),s=a[0],i=a[1],n=Object(r.useState)(!0),j=Object(l.a)(n,2),h=j[0],b=j[1],u=Object(r.useState)(!1),m=Object(l.a)(u,2),_=m[0],x=m[1];Object(r.useEffect)((function(){p.a.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((function(e){i(e.data.categories),b(!1)})).catch((function(){b(!1),x(!0)}))}),[]);var f=Object(o.a)(Array(8)).map((function(e,t){return Object(c.jsx)(g,{},t)}));return h||(f=s.map((function(t){return Object(c.jsx)(d,{category:t,history:e.history},t.idCategory)}))),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(O,{history:e.history}),Object(c.jsx)("div",{className:"app__cardsWrapper",children:Object(c.jsx)("div",{className:"app__cardsContainer",children:_?Object(c.jsx)("span",{children:"Could not load categories"}):f})})]})};a(32);var f=function(e){var t=e.cardText,a=e.queryParamType;return Object(c.jsx)("div",{role:"button",className:"textCard__wrapper",onClick:function(){e.history.push({pathname:"/recipes/"+t,state:{selection:t,queryParamType:a}})},children:Object(c.jsx)("header",{className:"textCard__header",children:t})})};var y=function(){return Object(c.jsx)(s.a.Fragment,{children:Object(c.jsx)(m.SkeletonTheme,{color:"white",highlightColor:"lightgrey",children:Object(c.jsx)("div",{className:"textCard__wrapper",children:Object(c.jsx)("div",{children:Object(c.jsx)(_.a,{className:"textCard__header"})})})})})};var v=function(e){var t=Object(r.useState)([]),a=Object(l.a)(t,2),s=a[0],i=a[1],n=Object(r.useState)(!0),j=Object(l.a)(n,2),d=j[0],h=j[1],b=Object(r.useState)(!1),u=Object(l.a)(b,2),m=u[0],_=u[1];Object(r.useEffect)((function(){p.a.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list").then((function(e){i(e.data.meals),h(!1)})).catch((function(){h(!1),_(!0)}))}),[]);var g=Object(o.a)(Array(16)).map((function(e,t){return Object(c.jsx)(y,{},t)}));return d||(g=s.sort((function(e,t){var a=e.strIngredient.toUpperCase(),c=t.strIngredient.toUpperCase();return a<c?-1:a>c?1:0})).map((function(t){return Object(c.jsx)(f,{cardText:t.strIngredient,queryParamType:"i=",history:e.history},t.idIngredient)}))),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(O,{history:e.history}),Object(c.jsx)("div",{className:"app__cardsWrapper",children:Object(c.jsx)("div",{className:"app__cardsContainer",children:m?Object(c.jsx)("span",{children:"Could not load ingredients"}):g})})]})};var N=function(e){var t=Object(r.useState)([]),a=Object(l.a)(t,2),s=a[0],i=a[1],n=Object(r.useState)(!0),j=Object(l.a)(n,2),d=j[0],h=j[1],b=Object(r.useState)(!1),u=Object(l.a)(b,2),m=u[0],_=u[1];Object(r.useEffect)((function(){p.a.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list").then((function(e){i(e.data.meals),h(!1)})).catch((function(){h(!1),_(!0)}))}),[]);var g=Object(o.a)(Array(16)).map((function(e,t){return Object(c.jsx)(y,{},t)}));return d||(g=s.map((function(t){return Object(c.jsx)(f,{cardText:t.strArea,queryParamType:"a=",history:e.history},t.strArea)}))),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(O,{history:e.history}),Object(c.jsx)("div",{className:"app__cardsWrapper",children:Object(c.jsx)("div",{className:"app__cardsContainer",children:m?Object(c.jsx)("span",{children:"Could not load regions"}):g})})]})};a(70);var C=function(e){var t=e.recipe;return Object(c.jsxs)("div",{role:"button",className:"recipeCard__wrapper",onClick:function(){e.history.push({pathname:"/recipe-details/"+t.idMeal,state:{recipe:t}})},children:[Object(c.jsx)("img",{role:"recipe-card-img",className:"recipeCard__img",src:t.strMealThumb,alt:"recipe cover"}),Object(c.jsx)("div",{className:"recipeCard__headerWrapper",children:Object(c.jsx)("header",{className:"recipeCard__header",children:t.strMeal})})]})};a(71);var w=function(){return Object(c.jsx)(m.SkeletonTheme,{color:"white",highlightColor:"lightgrey",children:Object(c.jsx)("div",{className:"recipeCardLoader__wrapper",children:Object(c.jsx)(_.a,{className:"recipeCardLoader__header"})})})};var S=function(e){var t=Object(r.useState)([]),a=Object(l.a)(t,2),s=a[0],i=a[1],n=Object(r.useState)(!0),j=Object(l.a)(n,2),d=j[0],h=j[1],b=Object(r.useState)(!1),u=Object(l.a)(b,2),m=u[0],_=u[1],g="",x="";e.location.state?(g=e.location.state.selection,x=e.location.state.queryParamType,localStorage.setItem("selection",JSON.stringify(e.location.state.selection)),localStorage.setItem("queryType",JSON.stringify(e.location.state.queryParamType))):(g=JSON.parse(localStorage.getItem("selection")),x=JSON.parse(localStorage.getItem("queryType"))),Object(r.useEffect)((function(){p.a.get("https://www.themealdb.com/api/json/v1/1/filter.php?"+x+g).then((function(e){i(e.data.meals),h(!1)})).catch((function(){h(!1),_(!0)}))}),[x,g]);var f=g+" Recipes",y=Object(o.a)(Array(8)).map((function(e,t){return Object(c.jsx)(w,{},t)}));return d||(y=s&&s.length>0?s.map((function(t){return Object(c.jsx)(C,{recipe:t,history:e.history},t.idMeal)})):Object(c.jsx)("span",{className:"app__infoSpan",children:"No recipes found for your selection"})),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(O,{subheader:f,history:e.history}),Object(c.jsx)("div",{className:"app__cardsWrapper",children:Object(c.jsx)("div",{className:"app__cardsContainer",children:m?Object(c.jsx)("span",{children:"Could not load recipes"}):y})})]})};a(72);var T=function(){return Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsx)("section",{role:"loaderHeader",className:"recipeDetails__headerWrapper",children:Object(c.jsx)(_.a,{className:"app__backArrow"})}),Object(c.jsxs)("section",{className:"recipeDetails__contentWrapper",children:[Object(c.jsxs)("div",{className:"recipeDetails__recipeContent",children:[Object(c.jsx)(_.a,{className:"recipeDetails__recipeContentHeader"}),Object(c.jsx)("ul",{className:"recipeDetails__ingredientsList recipeDetailsLoader__ingredientsList",children:Object(o.a)(Array(8)).map((function(e,t){return Object(c.jsx)(_.a,{className:"recipeDetailsLoader__ingredients"},t)}))})]}),Object(c.jsxs)("div",{className:"recipeDetails__recipeContent",children:[Object(c.jsx)(_.a,{className:"recipeDetails__recipeContentHeader"}),Object(c.jsx)(_.a,{className:"recipeDetails__instructionsText recipeDetailsLoader__instructions"})]}),Object(c.jsx)(_.a,{className:"recipeDetailsLoader__mealImage",height:250,width:250})]})]})};var k=function(e){var t=Object(r.useState)({}),a=Object(l.a)(t,2),i=a[0],n=a[1],o=Object(r.useState)(!0),j=Object(l.a)(o,2),d=j[0],h=j[1],b=Object(r.useState)(!1),O=Object(l.a)(b,2),m=O[0],_=O[1],g="";e.location.state?(g=e.location.state.recipe.idMeal,localStorage.setItem("meal",JSON.stringify(e.location.state.recipe))):g=JSON.parse(localStorage.getItem("meal")).idMeal,Object(r.useEffect)((function(){p.a.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+g).then((function(e){n(e.data.meals[0]),h(!1)})).catch((function(){h(!1),_(!0)}))}),[g]);for(var x=[],f=[],y=0,v=Object.entries(i);y<v.length;y++){var N=Object(l.a)(v[y],2),C=N[0],w=N[1];C.includes("Ingredient")&&null!==w&&""!==w&&x.push(w),C.includes("Measure")&&null!==w&&""!==w&&f.push(w)}var S=[];return x.forEach((function(e,t){S.push(f[t]+" "+e)})),Object(c.jsxs)("div",{className:"App",children:[d&&Object(c.jsx)(T,{}),!d&&Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsxs)("section",{className:"recipeDetails__headerWrapper",children:[Object(c.jsx)("button",{className:"recipeDetails__backArrow app__backArrow",onClick:function(){e.history.goBack()},children:Object(c.jsx)("img",{className:"app__backArrowImg",src:u,alt:"go back"})}),Object(c.jsx)("header",{className:"recipeDetails__headerText",children:m?"Couldn't load meal":i.strMeal})]}),!m&&Object(c.jsxs)("section",{className:"recipeDetails__contentWrapper",children:[Object(c.jsxs)("div",{className:"recipeDetails__recipeContent",children:[Object(c.jsx)("span",{className:"recipeDetails__recipeContentHeader",children:"Ingredients"}),Object(c.jsx)("hr",{className:"recipeDetails__contentSeparator"}),Object(c.jsx)("ul",{className:"recipeDetails__ingredientsList",children:S.map((function(e){return Object(c.jsx)("li",{children:e},e)}))})]}),Object(c.jsxs)("div",{className:"recipeDetails__recipeContent",children:[Object(c.jsx)("span",{className:"recipeDetails__recipeContentHeader",children:"Instructions"}),Object(c.jsx)("hr",{className:"recipeDetails__contentSeparator"}),Object(c.jsx)("p",{className:"recipeDetails__instructionsText",children:i.strInstructions})]}),Object(c.jsx)("img",{role:"recipe-image",className:"recipeDetails__mealImage",src:i.strMealThumb,alt:"recipe cover"})]})]})]})},D=a(19),A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),r(e),s(e),i(e)}))};var I=function(e){return Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsx)(O,{history:e.history}),Object(c.jsx)("div",{className:"pageNotFound__Wrapper",children:Object(c.jsx)("div",{className:"pageNotFound__Text",children:"Page Not Found!"})})]})},L=Object(c.jsx)(D.a,{children:Object(c.jsx)("div",{className:"app__wrapper",children:Object(c.jsxs)(h.c,{children:[Object(c.jsx)(h.a,{exact:!0,path:"/",component:x}),Object(c.jsx)(h.a,{path:"/by-ingredient",component:v}),Object(c.jsx)(h.a,{path:"/by-region",component:N}),Object(c.jsx)(h.a,{path:"/recipes/:recipeType",component:S}),Object(c.jsx)(h.a,{path:"/recipe-details/:mealId",component:k}),Object(c.jsx)(h.a,{component:I})]})})});n.a.render(L,document.getElementById("root")),A()}},[[73,1,2]]]);
//# sourceMappingURL=main.b97ae337.chunk.js.map