(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[286],{6286:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return G}});var r,u,i,o=t(168),a=t(7691),c=a.ZP.h2(r||(r=(0,o.Z)(["\n  font-family: sans-serif;\n  font-size: 30px;\n  line-height: 1.15;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n"]))),s=t(3329),l=function(n){var e=n.title,t=n.children;return(0,s.jsxs)("section",{children:[(0,s.jsx)(c,{children:e}),t]})},f=a.ZP.label(u||(u=(0,o.Z)(["\n  font-family: 'Segoe UI', sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.15;\n"]))),p=(a.ZP.input(i||(i=(0,o.Z)(["\n  all: unset;\n  display: flex;\n  border: 2px solid black;\n  margin: 10px 0;\n  padding: 15px;\n  font-size: 20px;\n  &:focus-visible {\n    border-radius: 4px;\n    border: 3px solid lightblue;\n  }\n"]))),t(9434)),d=t(686),h=t(2007),m=t.n(h),v=t(1095);f.propTypes={filter:m().string};var y,g,x,b=function(){var n=(0,p.I0)();return(0,s.jsx)(v.Z,{margin:"normal",fullWidth:!0,id:"name",label:"Username",name:"name",autoFocus:!0,onChange:function(e){n((0,d.sP)(e.currentTarget.value))},placeholder:"Search"})},Z=a.ZP.ul(y||(y=(0,o.Z)(["\n  width: 600px;\n  margin: 0 auto;\n"]))),j=a.ZP.li(g||(g=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 25px;\n  line-height: 1.15;\n"]))),w=(a.ZP.p(x||(x=(0,o.Z)(["\n  margin: 0 10px 5px 0;\n"]))),t(3634)),_=function(n){return n.contacts.items},C=function(n){return n.contacts.isLoading},k=function(n){return n.contacts.error},P="NOT_FOUND";var O=function(n,e){return n===e};function I(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,u=void 0===r?O:r,i=t.maxSize,o=void 0===i?1:i,a=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,u=0;u<r;u++)if(!n(e[u],t[u]))return!1;return!0}}(u),s=1===o?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:P},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var u=t[r];return r>0&&(t.splice(r,1),t.unshift(u)),u.value}return P}return{get:r,put:function(e,u){r(e)===P&&(t.unshift({key:e,value:u}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,c);function l(){var e=s.get(arguments);if(e===P){if(e=n.apply(null,arguments),a){var t=s.getEntries(),r=t.find((function(n){return a(n.value,e)}));r&&(e=r.value)}s.put(arguments,e)}return e}return l.clearCache=function(){return s.clear()},l}function T(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function E(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var u=function(){for(var e=arguments.length,r=new Array(e),u=0;u<e;u++)r[u]=arguments[u];var i,o=0,a={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(a=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=a,l=s.memoizeOptions,f=void 0===l?t:l,p=Array.isArray(f)?f:[f],d=T(r),h=n.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(p)),m=n((function(){for(var n=[],e=d.length,t=0;t<e;t++)n.push(d[t].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:h,dependencies:d,lastResult:function(){return i},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),m};return u}var z=E(I),S=function(n){return n.filter},A=(z([_,S],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),t(4565)),R=t(9541),F=t(7247);Z.propTypes={contacts:m().arrayOf(m().exact({id:m().string.isRequired,name:m().string.isRequired,number:m().number.isRequired}))};var q,L=function(){var n=(0,p.v9)(_),e=(0,p.v9)(S),t=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})),r=(0,p.I0)();return(0,s.jsx)(Z,{children:t.map((function(n){var e=n.id,t=n.name,u=n.number;return(0,s.jsxs)(j,{children:[(0,s.jsxs)(A.Z,{component:"p",variant:"h6",children:[t,": ",u]}),(0,s.jsx)(R.Z,{variant:"contained",startIcon:(0,s.jsx)(F.Z,{}),onClick:function(){return r((0,w.GK)(e))},children:"Delete"})]},e)}))})},D=t(9439),W=t(2791),M=t(5218),N=t(6015),U=function(){var n=(0,W.useState)(""),e=(0,D.Z)(n,2),t=e[0],r=e[1],u=(0,W.useState)(""),i=(0,D.Z)(u,2),o=i[0],a=i[1],c=(0,p.v9)(_),l=(0,p.I0)(),f=function(n){var e=n.currentTarget,t=e.name,u=e.value;switch(t){case"name":r(u);break;case"number":a(u);break;default:return}},d=function(){r(""),a("")};return(0,s.jsx)(N.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:(0,s.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e={name:t,number:o},r=c.some((function(n){return n.name.toLowerCase()===t.toLowerCase()}));r?M.Am.error("".concat(t," is already in contacts.")):l((0,w.uK)(e)),d()},children:[(0,s.jsx)(v.Z,{value:t,onChange:f,type:"text",name:"name",label:"Name",id:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,fullWidth:!0,margin:"normal"}),(0,s.jsx)(v.Z,{value:o,onChange:f,type:"tel",name:"number",label:"Number",id:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,fullWidth:!0,margin:"normal"}),(0,s.jsx)(M.x7,{position:"top-right",reverseOrder:!1}),(0,s.jsx)(R.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add contact"})]})})},V=a.ZP.div(q||(q=(0,o.Z)(["\n  margin: 16px;\n"])));function G(){var n=(0,p.I0)(),e=(0,p.v9)(C),t=(0,p.v9)(k),r=(0,p.v9)(_),u=(0,p.v9)(S);return(0,W.useEffect)((function(){n((0,w.yF)())}),[n]),(0,s.jsxs)(V,{children:[(0,s.jsx)(U,{}),(0,s.jsxs)(l,{children:[(0,s.jsx)(b,{}),e&&!t&&(0,s.jsx)("b",{children:"Loading..."}),r.length>0&&(0,s.jsx)(L,{contacts:u})]})]})}},7247:function(n,e,t){"use strict";var r=t(4836);e.Z=void 0;var u=r(t(5649)),i=t(3329),o=(0,u.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=o},5649:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(5741)},5741:function(n,e,t){"use strict";t.r(e),t.d(e,{capitalize:function(){return u.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return o.Z},debounce:function(){return a.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return s.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return f.Z},requirePropFactory:function(){return p},setRef:function(){return d},unstable_ClassNameGenerator:function(){return Z},unstable_useEnhancedEffect:function(){return h.Z},unstable_useId:function(){return m},unsupportedProp:function(){return v},useControlled:function(){return y.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return x.Z},useIsFocusVisible:function(){return b.Z}});var r=t(5902),u=t(9853),i=t(8949).Z,o=t(1245),a=t(2977);var c=function(n,e){return function(){return null}},s=t(6258),l=t(5783),f=t(8195);t(7462);var p=function(n,e){return function(){return null}},d=t(2971).Z,h=t(3026),m=t(6248).Z;var v=function(n,e,t,r,u){return null},y=t(4938),g=t(9511),x=t(7933),b=t(2763),Z={configure:function(n){r.Z.configure(n)}}},888:function(n,e,t){"use strict";var r=t(9047);function u(){}function i(){}i.resetWarningCache=u,n.exports=function(){function n(n,e,t,u,i,o){if(o!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:u};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4836:function(n){n.exports=function(n){return n&&n.__esModule?n:{default:n}},n.exports.__esModule=!0,n.exports.default=n.exports}}]);
//# sourceMappingURL=286.2dfded85.chunk.js.map