_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[47],{GPKm:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a("rePB"),i=a("q1tI"),s=a.n(i),l=a("GOVm"),n=s.a.createElement;function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={theme:"light",variant:"primary",align:"left",isFluid:!1,button:"cta",buttonText:"Get started free"},g={theme:"dark",style:"style2"},m=function(e){var t=e.children,a=e.headerConfig,r=void 0===a?null:a,o=e.footerConfig,m=void 0===o?null:o,b=Object(i.useContext)(l.b);return Object(i.useEffect)((function(){b.themeDark?(b.setHeader(c(c(c({},u),r),{},{theme:"dark"})),b.setFooter(c(c(c({},g),m),{},{theme:"dark"}))):(b.setHeader(c(c({},u),r)),b.setFooter(c(c({},g),m)))}),[b.themeDark,r,m]),n(s.a.Fragment,null,t)}},"P+CZ":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pricing3",function(){return a("kVSy")}])},Qg85:function(e,t,a){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];e.apply(this,r),t.apply(this,r)}}),null)}},cWnB:function(e,t,a){"use strict";var r=a("wx14"),i=a("zLVn"),s=a("eC2I"),l=a.n(s),n=a("q1tI"),o=a.n(n),c=a("vUet"),u=a("Qg85"),g=["as","disabled","onKeyDown"];function m(e){return!e||"#"===e.trim()}var b=o.a.forwardRef((function(e,t){var a=e.as,s=void 0===a?"a":a,l=e.disabled,n=e.onKeyDown,c=Object(i.a)(e,g),b=function(e){var t=c.href,a=c.onClick;(l||m(t))&&e.preventDefault(),l?e.stopPropagation():a&&a(e)};return m(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),l&&(c.tabIndex=-1,c["aria-disabled"]=!0),o.a.createElement(s,Object(r.a)({ref:t},c,{onClick:b,onKeyDown:Object(u.a)((function(e){" "===e.key&&(e.preventDefault(),b(e))}),n)}))}));b.displayName="SafeAnchor";var d=b,p=["bsPrefix","variant","size","active","className","block","type","as"],f=o.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.variant,n=e.size,u=e.active,g=e.className,m=e.block,b=e.type,f=e.as,h=Object(i.a)(e,p),x=Object(c.a)(a,"btn"),y=l()(g,x,u&&"active",s&&x+"-"+s,m&&x+"-block",n&&x+"-"+n);if(h.href)return o.a.createElement(d,Object(r.a)({},h,{as:f,ref:t,className:l()(y,h.disabled&&"disabled")}));t&&(h.ref=t),b?h.type=b:f||(h.type="button");var N=f||"button";return o.a.createElement(N,Object(r.a)({},h,{className:y}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=f},kVSy:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),s=a("YFqc"),l=a.n(s),n=a("7vrA"),o=a("3Z9Z"),c=a("JI6e"),u=a("cWnB"),g=a("GPKm"),m=i.a.createElement;t.default=function(){return m(i.a.Fragment,null,m(g.a,{headerConfig:{align:"right",button:"account"}},m("div",{className:"inner-banner pt-25 pt-lg-31 pb-lg-11 bg-default-6"},m(n.a,null,m(o.a,{className:"justify-content-center"},m(c.a,{xl:"8",lg:"9"},m("div",{className:"px-md-12 text-center mb-11 mb-lg-13"},m("h2",{className:"title gr-text-2 mb-9 mb-lg-12"},"Pricing & Plans"),m("p",{className:"gr-text-8 mb-0"},"With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.")))))),m("div",{className:"pricing-section pb-5 pb-lg-20 bg-default-6"},m(n.a,null,m(o.a,{className:"justify-content-center"},m(c.a,{lg:"4",md:"6",sm:"8",className:"mb-9"},m("div",{className:"pricing-card gr-hover-shadow-1 bg-white border rounded-10 text-center pt-9 pb-6 pr-6 pl-6"},m("span",{className:"badge gr-badge text-primary gr-bg-blue-opacity-1 rounded-pill gr-text-12 text-uppercase"},"Basic"),m("h2",{className:"price-value gr-text-3 font-weight-bold text-blackish-blue line-spacing-none mb-2 mt-8"},"$29"),m("p",{className:"gr-text-11 mb-7 mb-lg-11 gr-color-blackish-blue-opacity-7"},"One time purchase"),m("p",{className:"gr-text-9 px-5 gr-color-blackish-blue-opacity-7 mb-0"},"With lots of unique blocks, you can easily build a page without coding. Build your next landing page."),m(u.a,{className:"gr-hover-y w-100 mt-9 mt-lg-15 gr-text-9"},"Get started for free"))),m(c.a,{lg:"4",md:"6",sm:"8",className:"mb-9"},m("div",{className:"pricing-card gr-hover-shadow-1 bg-white border rounded-10 text-center pt-9 pb-6 pr-6 pl-6"},m("span",{className:"badge gr-badge text-primary gr-bg-blue-opacity-1 rounded-pill gr-text-12 text-uppercase"},"Standard"),m("h2",{className:"price-value gr-text-3 font-weight-bold text-blackish-blue line-spacing-none mb-2 mt-8"},"$49"),m("p",{className:"gr-text-11 mb-7 mb-lg-11 gr-color-blackish-blue-opacity-7"},"One time purchase"),m("p",{className:"gr-text-9 px-5 gr-color-blackish-blue-opacity-7 mb-0"},"With lots of unique blocks, you can easily build a page without coding. Build your next landing page."),m(u.a,{className:"gr-hover-y w-100 mt-9 mt-lg-15 gr-text-9"},"Get started for free"))),m(c.a,{lg:"4",md:"6",sm:"8",className:"mb-9"},m("div",{className:"pricing-card gr-hover-shadow-1 bg-white border rounded-10 text-center pt-9 pb-6 pr-6 pl-6"},m("span",{className:"badge gr-badge text-primary gr-bg-blue-opacity-1 rounded-pill gr-text-12 text-uppercase"},"Premium"),m("h2",{className:"price-value gr-text-3 font-weight-bold text-blackish-blue line-spacing-none mb-2 mt-8"},"$99"),m("p",{className:"gr-text-11 mb-7 mb-lg-11 gr-color-blackish-blue-opacity-7"},"One time purchase"),m("p",{className:"gr-text-9 px-5 gr-color-blackish-blue-opacity-7 mb-0"},"With lots of unique blocks, you can easily build a page without coding. Build your next landing page."),m(u.a,{className:"gr-hover-y w-100 mt-9 mt-lg-15 gr-text-9"},"Get started for free")))))),m("div",{className:"pb-13 pb-lg-24 bg-default-6"},m(n.a,null,m(o.a,{className:"justify-content-center"},m(c.a,{xl:"6",lg:"6",className:"pb-9 pb-lg-15"},m("div",{className:"faq d-flex"},m("div",{className:"faq-icon mt-1 circle-xs bg-green text-white mr-5 mr-sm-7"},m("i",{className:"fas fa-question"})),m("div",{className:"faq-texts pr-md-7 pr-lg-0 pr-xl-7"},m("h3",{className:"gr-text-7 font-weight-bold mb-7"},"Can I use Albino for my clients?"),m("p",{className:"gr-text-9 mb-0"},"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre."),m(l.a,{href:"/"},m("a",{className:"btn-link with-icon font-weight-bold gr-text-9 mt-9"},"Click to learn more"," ",m("i",{className:"fas fa-arrow-right font-weight-bold"})))))),m(c.a,{xl:"6",lg:"6",className:"pb-9 pb-lg-15"},m("div",{className:"faq d-flex"},m("div",{className:"faq-icon mt-1 circle-xs bg-green text-white mr-5 mr-sm-7"},m("i",{className:"fas fa-question"})),m("div",{className:"faq-texts pr-md-7 pr-lg-0 pr-xl-7"},m("h3",{className:"gr-text-7 font-weight-bold mb-7"},"Does it work with WordPress?"),m("p",{className:"gr-text-9 mb-0"},"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.")))),m(c.a,{xl:"6",lg:"6",className:"pb-9 pb-lg-15"},m("div",{className:"faq d-flex"},m("div",{className:"faq-icon mt-1 circle-xs bg-green text-white mr-5 mr-sm-7"},m("i",{className:"fas fa-question"})),m("div",{className:"faq-texts pr-md-7 pr-lg-0 pr-xl-7"},m("h3",{className:"gr-text-7 font-weight-bold mb-7"},"Do I get free updates?"),m("p",{className:"gr-text-9 mb-0"},"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.")))),m(c.a,{xl:"6",lg:"6",className:"pb-9 pb-lg-15"},m("div",{className:"faq d-flex"},m("div",{className:"faq-icon mt-1 circle-xs bg-green text-white mr-5 mr-sm-7"},m("i",{className:"fas fa-question"})),m("div",{className:"faq-texts pr-md-7 pr-lg-0 pr-xl-7"},m("h3",{className:"gr-text-7 font-weight-bold mb-7"},"Will you provide support?"),m("p",{className:"gr-text-9 mb-0"},"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.")))),m("div",{className:"col-12 text-center mt-lg-9 "},m("p",{className:"gr-text-9 gr-text-9 gr-text-color mb-0"},"Haven\u2019t got your answer? ",m("br",{className:"d-xs-none"}),m(l.a,{href:"/"},m("a",{className:"btn-link"},"Contact our support now")))))))))}}},[["P+CZ",0,1,2,3]]]);