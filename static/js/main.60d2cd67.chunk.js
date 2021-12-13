(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(4),r=c.n(s),l=(c(9),c(2)),o=(c(10),c(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})]})})}function b(e){var t=Object(a.useState)(""),c=Object(l.a)(t,2),n=c[0],s=c[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"8",placeholder:"Enter Text Here"})}),Object(o.jsx)("button",{className:"btn btn-success mx-1",onClick:function(){var t=n.toUpperCase();s(t),e.showAlert("Converted to Uppercase","success")},children:" UPPER CASE "}),Object(o.jsx)("button",{className:"btn btn-success mx-1",onClick:function(){var t=n.toLowerCase();s(t),e.showAlert("Converted to Lowercase","success")},children:" lower case "}),Object(o.jsx)("button",{className:"btn btn-success mx-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to Clipboard","success")},children:" Copy to Clipboard "}),Object(o.jsx)("button",{className:"btn btn-success mx-1",onClick:function(){var t=n.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra Space Removed","success")},children:" Remove Extra Spaces "}),Object(o.jsx)("button",{className:"btn btn-success mx-1",onClick:function(){s(""),e.showAlert("Text Cleared","success")},children:" Clear "})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{children:"Your text summary"}),Object(o.jsxs)("p",{children:["Word Count : ",n.split(" ").length," | Character Count : ",n.length," "]}),Object(o.jsxs)("p",{children:["Reading Time : ",.008*n.split(" ").length," minutes"]}),Object(o.jsx)("h2",{children:"Preview:"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter something in the textbox above to preview it here."})]})]})}function d(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.msg]})}i.defaultProps={title:"Set title here",aboutText:"About text here"};var h=function(){var e=Object(a.useState)("light"),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(null),r=Object(l.a)(s,2),h=r[0],u=r[1],j=function(e,t){u({msg:e,type:t}),setTimeout((function(){u(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtils",aboutText:"AboutUs",mode:c,toggleMode:function(){"light"===c?(n("dark"),document.body.style.backgroundColor="grey",j("Dark mode has been enabled","success")):(n("light"),j("Light mode has been enabled","success"),document.body.style.backgroundColor="white")}}),Object(o.jsx)(d,{alert:h}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(b,{showAlert:j,heading:"Enter the text below to analyze",mode:c})})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),u()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.60d2cd67.chunk.js.map