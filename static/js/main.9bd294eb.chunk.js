(this["webpackJsonppdf-bullets-cra"]=this["webpackJsonppdf-bullets-cra"]||[]).push([[0],{199:function(e,t){},201:function(e,t){},238:function(e,t,a){e.exports=a.p+"static/media/abbrs.914e7438.xlsx"},245:function(e,t,a){e.exports=a(310)},265:function(e,t){},266:function(e,t){},267:function(e,t){},268:function(e,t){},269:function(e,t){},274:function(e,t){},275:function(e,t){},308:function(e,t,a){},310:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),i=a(129),s=a.n(i),o=a(51),l=a(52),c=a(54),u=a(53),p=0,h=1,m=-1,d=1,b=-1,f=-4,g=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).evaluate=function(){var e=n.renderRef.current;e.style.whiteSpace="nowrap";var t=e.parentNode.getBoundingClientRect().width,a=e.getBoundingClientRect().width,r=e.getBoundingClientRect().height;e.style.whiteSpace="pre-wrap",e.style.wordBreak="break-word";var i=e.getBoundingClientRect().height,s=a-t,o=i>r,l={optimization:{sentence:n.props.text,status:!1},direction:!1,height:i};return l.direction=o?b:d,l.optimization.status=s>f&&!o?p:h,l},n.renderRef=r.a.createRef(),n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:this.props.width,height:this.props.height},onMouseUp:this.props.onHighlight},r.a.createElement("span",{className:this.props.class,style:this.props.style,ref:this.renderRef},this.props.text))}}],[{key:"Tokenize",value:function(e){return e.split(/[\s]+/)}},{key:"Clean",value:function(e){return a.Tokenize(e).join(" ")}},{key:"Tweak",value:function(e){return e=(e=e.replace(/(\w)\//g,"$1/\u200b")).replace(/-/g,"\u2011")}},{key:"Untweak",value:function(e){return e=(e=e.replace(/[\u200B]/g,"")).replace(/[\u2011]/g,"-")}}]),a}(r.a.PureComponent),v=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.props.handleTextChange(e),n.fixHeight()},n.handleInput=function(e){n.fixHeight()},n.fixHeight=function(){n.ref.current.style.height="auto",n.ref.current.style.height=Math.max(n.ref.current.scrollHeight,n.props.minHeight)+"px"},n.ref=r.a.createRef(),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fixHeight()}},{key:"componentDidUpdate",value:function(e){var t,a;(this.fixHeight(),this.props.textSelRange.trigger!==e.textSelRange.trigger)&&(this.props.textSelRange.start<this.props.textSelRange.end?(t=this.props.textSelRange.start,a=this.props.textSelRange.end):(t=this.props.textSelRange.end,a=this.props.textSelRange.start),this.ref.current.setSelectionRange(t,a))}},{key:"render",value:function(){return r.a.createElement("div",{className:"border"},r.a.createElement("textarea",{ref:this.ref,onChange:this.handleChange,value:this.props.text,onInput:this.handleInput,style:{width:this.props.width,maxHeight:"unset"},onMouseUp:this.props.onHighlight,onKeyUp:this.props.onHighlight,className:"bullets textarea is-paddingless is-marginless"}))}}]),a}(r.a.PureComponent),w=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).selectOutput=function(e){if(e.ctrlKey&&65===e.keyCode&&(e.preventDefault(),window.getSelection)){var t=document.createRange();t.selectNode(n.outputRef.current),window.getSelection().removeAllRanges(),window.getSelection().addRange(t)}},n.handleCopy=function(e){var t=g.Untweak(window.getSelection().toString());t=t.replace(/\n/g,"\r\n"),e.clipboardData.setData("text/plain",t),e.preventDefault()},n.outputRef=r.a.createRef(),n.state={abbrBullets:n.props.bullets.map(n.props.abbrReplacer)},n}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.props.bullets.map(this.props.abbrReplacer);e.bullets.map(e.abbrReplacer).join("")!==a.join("")&&this.setState({abbrBullets:a})}},{key:"render",value:function(){var e=this,t={};return r.a.createElement("div",{className:"border",tabIndex:"1",onKeyDown:this.selectOutput,onKeyUp:this.props.onHighlight,ref:this.outputRef,onCopy:this.handleCopy},this.props.bullets.map((function(a,n){var i=e.state.abbrBullets[n]+e.props.width+e.props.enableOptim;return i in t?t[i]+=1:t[i]=1,r.a.createElement(S,{text:e.state.abbrBullets[n]||"",rawText:a,width:e.props.width,key:i+t[i],optims:e.props.optims,onOptim:e.props.onOptim,optimizer:e.props.optimizer,enableOptim:e.props.enableOptim,onHighlight:e.props.onHighlight,abbrReplacer:e.props.abbrReplacer})})))}}]),a}(r.a.PureComponent),S=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).bulletRef=r.a.createRef(),n.state={checkingHeight:!0,height:"unset"},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){if(this.state.checkingHeight){var e=this.bulletRef.current.evaluate().height,t=0===e?"inherit":e+"px";this.setState({height:t,checkingHeight:!1})}}},{key:"componentDidUpdate",value:function(e,t){if(e.rawText!==this.props.rawText)this.setState({checkingHeight:!0});else if(this.state.checkingHeight){var a=this.bulletRef.current.evaluate().height,n=0===a?"inherit":a+"px";this.setState({checkingHeight:!1,height:n})}}},{key:"render",value:function(){var e;return e=this.state.checkingHeight?r.a.createElement(g,{text:g.Tweak(this.props.rawText),ref:this.bulletRef,width:this.props.width,onHighlight:this.props.onHighlight,class:"bullets optimized",style:{display:"inline-block",wordBreak:"break-word"}}):r.a.createElement(y,{text:this.props.text,width:this.props.width,height:this.state.height,optims:this.props.optims,onOptim:this.props.onOptim,optimizer:this.props.optimizer,enableOptim:this.props.enableOptim,onHighlight:this.props.onHighlight,abbrReplacer:this.props.abbrReplacer}),r.a.createElement("div",null,e," ")}}]),a}(r.a.PureComponent),y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).optimExists=function(){return!(!n.props.optims[n.state.text]||!n.props.optims[n.state.text][n.props.width])},n.update=function(){var e=n.state.text;n.props.enableOptim?n.optimExists()?n.setState({text:n.props.optims[e][n.props.width].result,status:n.props.optims[e][n.props.width].status,loading:!1}):(n.setState({loading:!0}),n.bufferedOptimize(500)):n.setState({text:n.props.text,status:m,loading:!1})},n.bufferedOptimize=function(e){n.state.updating&&n.state.loading&&clearTimeout(n.state.updating),n.setState({updating:setTimeout((function(){n.optimize().then((function(){n.setState({updating:null,loading:!1})}))}),e)})},n.optimize=function(){var e=g.Clean(n.state.text);return n.optimizer().then((function(t){return n.props.onOptim({sentence:e,width:n.props.width,optimized:t.sentence,status:t.status}),t})).then((function(e){n.setState({text:e.sentence,status:e.status,loading:!1})}))},n.optimizer=function(){return new Promise((function(e){var t=n.bulletRef.current;if(null!==t){var a=g.Clean(n.props.text),r=g.Tokenize(a),i=t.evaluate();n.setState({text:a});var s,o,l=i,c=i,u=i.direction===d?"\u2004":"\u2006";if(a.trim())for(;c.optimization.status!==p;){var h=(s=r.join(""),o=r.length-1-1,Math.floor(Math.abs(Math.floor(9*s.hashCode()+5)%1e5/1e5)*Math.floor(o))+1);r.splice(h,2,r.slice(h,h+2).join(u));var m=r.join(" ");n.setState({text:m});var f=t.evaluate();if(i.direction===d&&f.direction===b){c.optimization=l.optimization;break}if(i.direction===b&&f.direction===d){c.optimization=f.optimization;break}if(r.length<=2){c.optimization=f.optimization;break}l=f}else c.optimization.status=p;e(c.optimization)}}))},n.state={text:n.props.text,loading:!0,updating:null,status:m,height:"unset"},n.bulletRef=r.a.createRef(),n}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){}},{key:"componentDidMount",value:function(){this.update(),this.setState({height:this.props.height})}},{key:"componentWillUnmount",value:function(){clearTimeout(this.state.updating)}},{key:"render",value:function(){var e="inherit";return this.state.loading?e="gray":this.state.status===h&&(e="red"),r.a.createElement(g,{text:g.Tweak(this.state.text),ref:this.bulletRef,width:this.props.width,onHighlight:this.props.onHighlight,class:"bullets optimized",style:{color:e,display:"inline-block",wordBreak:"break-word"},height:this.state.height})}}]),a}(r.a.PureComponent),O=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).updateOptims=function(e){n.setState((function(t){return t.optims[e.sentence]=t.optims[e.sentence]||{},t.optims[e.sentence][e.width]={result:e.optimized,status:e.status},t}))},n.handleTextChange=function(e){n.setState({text:e.target.value})},n.handleSelect=function(e){var t=window.getSelection().toString();if(""!==t)n.props.onSelect(t);else if(e.target.selectionStart){var a=e.target.value.substring(e.target.selectionStart,e.target.selectionEnd);0,n.props.onSelect(a)}},n.state={enableOptim:!0,optims:{}},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"columns is-multiline"},r.a.createElement("div",{className:"column is-narrow"},r.a.createElement("h2",{className:"subtitle"},"Input Bullets Here:"),r.a.createElement(v,{textSelRange:this.props.textSelRange,text:this.props.text,handleTextChange:this.props.handleTextChange,width:this.props.width,onHighlight:this.handleSelect,minHeight:100})),r.a.createElement("div",{className:"column is-narrow"},r.a.createElement("h2",{className:"subtitle"},"View Output Here:"),r.a.createElement(w,{bullets:this.props.text.split("\n"),abbrReplacer:this.props.abbrReplacer,width:this.props.width,optims:this.state.optims,enableOptim:this.props.enableOptim,optimizer:this.optimizer,onOptim:this.updateOptims,onHighlight:this.handleSelect})))}}]),a}(r.a.PureComponent),E=a(182),x=a(102),k=a(103),C=a(253),R=a(270);C.GlobalWorkerOptions.workerSrc=R;var N=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).importFile=function(e){if(n.fileInputRef.current.value){var t=function(e){console.log(e)};"PDF"===n.state.type?t=n.getDataFromPDF:"JSON"===n.state.type&&(t=n.getDataFromJSON),t(n.fileInputRef.current.files[0]),n.fileInputRef.current.value=""}else console.log("no file picked")},n.inputClick=function(e){return function(){n.setState({type:e}),n.fileInputRef.current.click()}},n.getDataFromPDF=function(e){var t=function(e){var t=e.arrayBuffer().then((function(e){var t=new Uint8Array(e);return C.getDocument({data:t}).promise})),a=t.then((function(e){return e.getXFA()})),n=t.then((function(e){return e.getMetadata().then((function(e){return e.info.Custom["Short Title - Prefix"]+""+e.info.Custom["Short Title - Number"]}))})),r=Promise.all([n,a]),i=r.then((function(e){var t=e[0],a=e[1].datasets;a=a.replace(/&#xD;/g,"\n");var n,r=(new DOMParser).parseFromString(a,"text/xml"),i="",s=Object(E.a)(z.all[t].fields);try{for(s.s();!(n=s.n()).done;){var o=n.value;i+=r.querySelector(o).innerHTML+"\n"}}catch(l){s.e(l)}finally{s.f()}return i})),s=r.then((function(e){var t,a=e[0],n=e[1].template,r=(new DOMParser).parseFromString(n,"text/xml"),i=[],s=[],o=[],l=0,c=Object(E.a)(z.all[a].fields);try{for(c.s();!(t=c.n()).done;){var u=t.value,p=r.querySelector("field[name='"+u+"'");i[l]=p.querySelector("font").getAttribute("typeface"),s[l]=p.querySelector("font").getAttribute("size"),o[l]=p.getAttribute("w"),l+=1}}catch(v){c.e(v)}finally{c.f()}for(var h=0,m=i;h<m.length;h++){if(m[h]!==i[0]){console.log("warning: not all grabbed sections have the same font type");break}}for(var d=0,b=s;d<b.length;d++){if(b[d]!==s[0]){console.log("warning: not all grabbed sections have the same font size");break}}for(var f=0,g=o;f<g.length;f++){if(g[f]!==o[0]){console.log("warning: not all grabbed sections have the same width");break}}return{font:i[0],fontSize:s[0],width:o[0]}}));return{pullBullets:i,getPageInfo:s}}(e),a=n.props.onTextUpdate,r=n.props.onWidthUpdate;t.pullBullets.then((function(e){var t=(new DOMParser).parseFromString(e,"text/html").documentElement.textContent;a(t)()})),t.getPageInfo.then((function(e){e.width;r(e.width)()}))},n.getDataFromJSON=function(e){var t=new FileReader;t.onload=function(e){var t=JSON.parse(e.target.result);n.props.onJSONImport(G.ParseSettings(t))},t.readAsText(e)},n.hoverOut=function(){n.setState({hovering:!1})},n.toggleMenu=function(){var e=n.state.hovering;n.setState({hovering:!e})},n.fileInputRef=r.a.createRef(),n.state={type:"none",hovering:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.hovering?"is-active":"";return r.a.createElement("div",{className:"dropdown "+e},r.a.createElement("input",{type:"file",onChange:this.importFile,style:{display:"none"},ref:this.fileInputRef}),r.a.createElement("div",{className:"dropdown-trigger"},r.a.createElement("div",{className:"buttons has-addons"},r.a.createElement("button",{className:"button",onClick:this.inputClick("PDF")},"Import"),r.a.createElement("button",{className:"button",onClick:this.toggleMenu,"aria-haspopup":"true","aria-controls":"import-menu"},r.a.createElement("span",{className:"icon"},r.a.createElement(x.a,{icon:k.a}))))),r.a.createElement("div",{className:"dropdown-menu",id:"import-menu",role:"menu",onMouseLeave:this.hoverOut},r.a.createElement("div",{className:"dropdown-content"},r.a.createElement("a",{className:"dropdown-item",onClick:this.inputClick("PDF")},"PDF"),r.a.createElement("a",{className:"dropdown-item",onClick:this.inputClick("JSON")},"JSON"))))}}]),a}(r.a.PureComponent),j=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"field is-grouped"},r.a.createElement("div",{className:"control field has-addons"},r.a.createElement("div",{className:"control has-icons-right"},r.a.createElement("input",{className:"input",id:"widthInput",type:"number",min:"100",max:"500",step:".001",value:this.props.width.replace(/[a-zA-Z]/g,""),onChange:this.props.onWidthChange}),r.a.createElement("span",{className:"icon is-right"},"mm")),r.a.createElement("div",{className:"control buttons has-addons"},r.a.createElement("a",{className:"button is-primary "+("202.321mm"===this.props.width?"":"is-outlined"),onClick:this.props.onWidthUpdate("202.321mm")},"AWD"),r.a.createElement("a",{className:"button is-success "+("202.321mm"===this.props.width?"":"is-outlined"),onClick:this.props.onWidthUpdate("202.321mm")},"EPR"),r.a.createElement("a",{className:"button is-link "+("201.041mm"===this.props.width?"":"is-outlined"),onClick:this.props.onWidthUpdate("201.041mm")},"OPR"))),r.a.createElement("a",{className:"control button is-dark"+(this.props.enableOptim?"":"is-outlined"),onClick:this.props.onOptimChange,id:"enableOptim"},"Auto-Space"))}}]),a}(r.a.PureComponent),D=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("button",{className:"button",onClick:this.props.onTextNorm},"Renormalize Input Spacing")}}]),a}(r.a.PureComponent),T=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onSave=function(){var e=n.props.onSave(),t=JSON.stringify([e]);try{localStorage.setItem("bullet-settings",t),console.log("saved settings/data to local storage with character length "+t.length)}catch(a){if("SecurityError"!==a.name)throw a;alert("Sorry, saving to cookies does not work using the file:// interface and/or your browser's privacy settings")}},n.onExport=function(){var e=n.props.onSave(),t=JSON.stringify([e]),a="data:application/JSON;charset=utf-8,"+encodeURIComponent(t);n.exportRef.current.href=a,n.exportRef.current.click(),console.log("exported settings/data to local storage with character length "+t.length)},n.hoverOut=function(){n.setState({hovering:!1})},n.toggleMenu=function(){var e=n.state.hovering;n.setState({hovering:!e})},n.exportRef=r.a.createRef(),n.state={hovering:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.hovering?"is-active":"";return r.a.createElement("div",{className:"dropdown "+e},r.a.createElement("div",{className:"dropdown-trigger"},r.a.createElement("div",{className:"buttons has-addons"},r.a.createElement("button",{className:"button",onClick:this.onSave},"Save "),r.a.createElement("button",{className:"button","aria-haspopup":"true","aria-controls":"save-menu"},r.a.createElement("span",{className:"icon",onClick:this.toggleMenu},r.a.createElement(x.a,{icon:k.a}))))),r.a.createElement("div",{className:"dropdown-menu",id:"save-menu",role:"menu",onMouseLeave:this.hoverOut},r.a.createElement("div",{className:"dropdown-content"},r.a.createElement("a",{className:"dropdown-item",onClick:this.onSave},"Cookie"),r.a.createElement("a",{className:"dropdown-item",onClick:this.onExport},"JSON"))),r.a.createElement("a",{style:{display:"none"},download:"settings.json",ref:this.exportRef}))}}]),a}(r.a.PureComponent),A=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",{className:"title"},r.a.createElement("span",{className:"logo"},"AF "),r.a.createElement("span",{className:"logo"},"Bull"),"et",r.a.createElement("span",{className:"logo"}," Sh"),"aping &",r.a.createElement("span",{className:"logo"}," i"),"teration",r.a.createElement("span",{className:"logo"}," t"),"ool")}}]),a}(r.a.PureComponent),I=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("a",{className:"button",onClick:this.props.onHide,"aria-haspopup":"true","aria-controls":"thesaurus-menu"},r.a.createElement("span",null,"Thesaurus"),r.a.createElement("span",{className:"icon"},r.a.createElement(x.a,{icon:k.a})))}}]),a}(r.a.PureComponent),H=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-start"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement(T,{onSave:this.props.onSave})),r.a.createElement("div",{className:"navbar-item"},r.a.createElement(N,{onJSONImport:this.props.onJSONImport,onTextUpdate:this.props.onTextUpdate,onWidthUpdate:this.props.onWidthUpdate})),r.a.createElement("div",{className:"navbar-item"},r.a.createElement(j,{enableOptim:this.props.enableOptim,onOptimChange:this.props.onOptimChange,width:this.props.width,onWidthChange:this.props.onWidthChange,onWidthUpdate:this.props.onWidthUpdate})),r.a.createElement("div",{className:"navbar-item"},r.a.createElement(D,{onTextNorm:this.props.onTextNorm})),r.a.createElement("div",{className:"navbar-item"},r.a.createElement(I,{onHide:this.props.onThesaurusHide}))))}}]),a}(r.a.PureComponent),z={all:{AF707:{fields:["S2DutyTitleDesc","S4Assessment","S5Assessment","S6Assessment"],likelyWidth:"201.041mm"},AF1206:{fields:["specificAccomplishments","p2SpecificAccomplishments"],likelyWidth:"202.321mm"},AF910:{fields:["KeyDuties","IIIComments","IVComments","VComments","VIIIComments","IXComments"],likelyWidth:"202.321mm"},AF911:{fields:["KeyDuties","IIIComments","IVComments","VIIComments","VIIIComments","IXComments"],likelyWidth:"202.321mm"}}};var P=a(105),W=a.n(P),M=a(238),U=a.n(M),F=a(244),B=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).importSampleAbbrs=function(){return new Promise((function(e,t){var a=new XMLHttpRequest;a.responseType="blob",a.onload=function(){e(a.response)},a.open("GET",U.a,!0),a.send()})).then(n.getDataFromXLS)},n.importAbbrs=function(e){n.fileInputRef.current.value?(n.getDataFromXLS(n.fileInputRef.current.files[0]),n.fileInputRef.current.value=""):console.log("no file picked")},n.getDataFromXLS=function(e){var t=new FileReader;t.onload=function(e){var t=e.target.result,a=W.a.read(t,{type:"binary",raw:!0}),r=W.a.utils.sheet_to_json(a.Sheets[a.SheetNames[0]],{header:["enabled","value","abbr"]});n.props.updater(r)},t.readAsBinaryString(e)},n.exportToXLS=function(){var e=W.a.utils.book_new(),t=W.a.utils.aoa_to_sheet(n.props.getter());W.a.utils.book_append_sheet(e,t,"abbrs"),W.a.writeFile(e,"abbrs.xlsx")},n.inputClick=function(){n.fileInputRef.current.click()},n.fileInputRef=r.a.createRef(),n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"toolbox"},r.a.createElement("input",{type:"file",onChange:this.importAbbrs,ref:this.fileInputRef,style:{display:"none"}}),r.a.createElement("button",{className:"button",onClick:this.inputClick},"Import Abbrs"),r.a.createElement("button",{className:"button",onClick:this.exportToXLS},"Export Abbrs"),r.a.createElement("button",{className:"button",onClick:function(){window.confirm("Are you sure you want to remove all existing acronyms and replace with a common list?")&&e.importSampleAbbrs()}},"Load Common Abbrs"))}}]),a}(r.a.PureComponent),J=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleAbbrChange=function(e){return function(e){n.props.onAbbrChange(n.tableRef)}},n.reloadData=function(e){n.tableRef.current.hotInstance.alter("remove_row",0,n.tableRef.current.hotInstance.countRows()),n.tableRef.current.hotInstance.loadData(e)},n.getData=function(){return n.tableRef.current.hotInstance.getData()},n.tableRef=r.a.createRef(),n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(B,{updater:this.reloadData,getter:this.getData}),r.a.createElement(F.a,{settings:this.props.settings,data:this.props.abbrData,ref:this.tableRef,afterChange:this.handleAbbrChange("afterchange"),afterPaste:this.handleAbbrChange("afterpaste"),afterRemoveRow:this.handleAbbrChange("afterremoverow"),afterUpdateSettings:this.handleAbbrChange("afterupdatesettings")}))}}]),a}(r.a.PureComponent),L=function(e,t){return function(a){if(a.preventDefault(),document.activeElement===window.getSelection().anchorNode.firstChild){var n=document.activeElement;t.props.onSelReplace(n.selectionStart,n.selectionEnd,e)}}},V=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getSynonyms=function(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){if(4===t.readyState&&200===t.status){var e=JSON.parse(t.responseText);0!==e.length?n.setState({synonyms:e.map((function(e){return e.word}))}):n.setState({synonyms:[]})}};t.open("GET","https://api.datamuse.com/words?max=75&ml="+e,!0),t.send()},n.state={synonyms:[],hidden:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getSynonyms(this.props.word)}},{key:"componentDidUpdate",value:function(e){e.word!==this.props.word&&this.getSynonyms(this.props.word)}},{key:"render",value:function(){var e,t=this.props.abbrReplacer(this.props.word),a=this.props.abbrDict[this.props.word],n=r.a.createElement(K,{word:this.props.word,key:this.props.word,abbr:t===this.props.word?"":t,otherAbbrs:a}),i=r.a.createElement(q,{onSelReplace:this.props.onSelReplace,key:this.state.synonyms.join(""),synonyms:this.state.synonyms,abbrDict:this.props.abbrDict,abbrReplacer:this.props.abbrReplacer}),s=r.a.createElement("a",{className:"panel-block",key:"init"},"Auto-thesaurus box - highlight a word or phrase below to show synonyms in this box"),o=r.a.createElement("a",{className:"panel-block",key:"none"},"no results found");return e=""===this.props.word?s:0===this.state.synonyms.length?o:i,r.a.createElement("div",{className:"card"},r.a.createElement("header",{className:"card-header has-background-light\tis-shadowless"},r.a.createElement("div",{className:"card-header-title"},r.a.createElement("span",{style:{marginRight:"5px"}},"Thesaurus",""===this.props.word?"":":"),n,r.a.createElement("a",{className:"icon is-small",onMouseDown:L(this.props.word,this)},r.a.createElement(x.a,{icon:k.b,size:"xs",color:"#51cf66"}))),r.a.createElement("a",{className:"card-header-icon",onClick:this.props.onHide},r.a.createElement("span",{className:"delete"}))),r.a.createElement("div",{className:"card-content",style:{height:"275px",overflow:"auto"}},e))}}]),a}(r.a.PureComponent),X=Math.ceil;Object.defineProperty(Array.prototype,"chunk",{value:function(e){var t=this;return Array(X(this.length/e)).fill().map((function(a,n){return t.slice(n*e,n*e+e)}))}});var q=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;new Array(5).join(".").split(".");return r.a.createElement("div",null,r.a.createElement("div",{className:"columns is-multiline"},this.props.synonyms.map((function(t,a){var n=e.props.abbrReplacer(t),i=e.props.abbrDict[t];return r.a.createElement("div",{className:"card column is-narrow ",key:a},r.a.createElement("div",{className:"card-content is-paddingless"},r.a.createElement(K,{word:t,abbr:n===t?"":n,otherAbbrs:i}),r.a.createElement("a",{className:"icon is-small",onMouseDown:L(t,e)},r.a.createElement(x.a,{icon:k.b,size:"xs",color:"#51cf66"}))))}))))}}]),a}(r.a.PureComponent),K=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t="";this.props.abbr&&(t=r.a.createElement("span",{style:{fontWeight:"bold"}}," ("+this.props.abbr+")"));var a="",n="";if(this.props.otherAbbrs){if(this.props.otherAbbrs.enabled){var i=this.props.otherAbbrs.enabled.filter((function(t){return t!==e.props.abbr}));i.length>0&&(a=r.a.createElement("span",{style:{fontStyle:"italic"}}," ("+i.join(",")+")"))}if(this.props.otherAbbrs.disabled){var s=this.props.otherAbbrs.disabled;s.length>0&&(n=r.a.createElement("span",{style:{fontStyle:"italic"}}," ("+s.join(",")+")"))}}return r.a.createElement("span",null,r.a.createElement("span",null,this.props.word),t,a,n)}}]),a}(r.a.PureComponent),_=V,$=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleJSONImport=function(e){n.setState({text:e.text}),n.setState((function(t){return t.enableOptim=e.enableOptim,t.width=e.width,t.abbrData=e.abbrData,t}))},n.handleAbbrChange=function(e){if(null!=e.current){for(var t=e.current.hotInstance,a={},r=0;r<t.countRows();r++){var i=String(t.getDataAtRowProp(r,"value")).replace(/\s/g," "),s=t.getDataAtRowProp(r,"abbr"),o=t.getDataAtRowProp(r,"enabled");a[i]=a[i]||[],o?(a[i].enabled=a[i].enabled||[],a[i].enabled.push(s)):(a[i].disabled=a[i].disabled||[],a[i].disabled.push(s))}n.setState({abbrDict:a})}else n.setState({abbrDict:n.createAbbrDict(n.state.abbrData)})},n.createAbbrDict=function(e){var t={};return e.map((function(e){var a=String(e.value).replace(/\s/g," "),n=e.abbr,r=e.enabled;t[a]=t[a]||[],r?(t[a].enabled=t[a].enabled||[],t[a].enabled.push(n)):(t[a].disabled=t[a].disabled||[],t[a].disabled.push(n))})),t},n.createAbbrReplacer=function(e){return function(t){var a={};Object.keys(e).map((function(t){var n=e[t];n.enabled&&(a[t]=n.enabled[n.enabled.length-1])}));var n=Object.keys(a).map((function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})).join("|"),r=new RegExp("(^|\\W|\\b)("+n+")(\\W|\\b|$)","g");return t.replace(r,(function(e,t,n,r){var i=a[n];return i||(i=""),t+i+r}))}},n.handleOptimChange=function(){n.setState((function(e){return{enableOptim:!e.enableOptim}}))},n.handleSelect=function(e){""!==e.trim()&&n.setState({selection:g.Tokenize(e.trim()).slice(0,8).join(" ")})},n.handleTextChange=function(e){n.setState({text:e.target.value})},n.handleWidthChange=function(e){n.setState({width:e.target.value+"mm"})},n.handleTextNorm=function(){n.setState((function(e){return e.text=e.text.split("\n").map((function(e){return e.replace(/\s+/g," ")})).join("\n"),e}))},n.handleTextUpdate=function(e){return function(){return n.setState({text:e})}},n.handleWidthUpdate=function(e){return function(){n.setState({width:e})}},n.handleSave=function(){return{width:n.state.width,text:n.state.text,abbrData:n.abbrsViewerRef.current.getData().filter((function(e){return null!==e[0]})),enableOptim:n.state.enableOptim}},n.handleTabChange=function(e){return function(){n.setState({currentTab:e})}},n.handleThesaurusHide=function(){var e=n.state.showThesaurus;n.setState({showThesaurus:!e})},n.handleSelReplace=function(e,t,a){var r,i=n.state.text,s=i.substring(0,e),o=i.substring(e,t),l=o.match(/^(\s*).*?(\s*)$/),c=l[1],u=l[2];r=o.match(/^\s*[A-Z]/)?a.split(/\s/).map((function(e){return e[0].toUpperCase()+e.slice(1)})).join(" "):a;var p=i.substring(t);console.log(s+c,s+c+r),console.log((s+c).length,(s+c+r).length),n.setState({text:s+c+r+u+p,textSelRange:{trigger:Math.random(),start:(s+c).length,end:(s+c+r).length}})},n.handleCaseChange=function(){n.setState((function(e){return e.enableCase=!e.enableCase,e}))},n.props.savedSettings?n.state=a.ParseSettings(n.props.savedSettings):n.state={enableOptim:!0,text:n.props.initialText,width:n.props.initialWidth,abbrData:n.props.abbrData},n.state.abbrDict={},n.state.textSelRange={start:0,end:0},n.state.selection="",n.state.currentTab=0,n.abbrsViewerRef=r.a.createRef(),n.state.showThesaurus=!1,n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.createAbbrReplacer(this.state.abbrDict);return r.a.createElement("div",{className:"container is-fluid"},r.a.createElement("div",{className:"columns is-multiline"},r.a.createElement("div",{className:"column is-full"},r.a.createElement(A,null),r.a.createElement(H,{enableOptim:this.state.enableOptim,onOptimChange:this.handleOptimChange,width:this.state.width,onWidthChange:this.handleWidthChange,onWidthUpdate:this.handleWidthUpdate,onTextNorm:this.handleTextNorm,onTextUpdate:this.handleTextUpdate,onSave:this.handleSave,onJSONImport:this.handleJSONImport,onThesaurusHide:this.handleThesaurusHide})),r.a.createElement("div",{className:"column is-full "+(this.state.showThesaurus?"":"is-hidden")},r.a.createElement(_,{word:this.state.selection,onSelReplace:this.handleSelReplace,abbrDict:this.state.abbrDict,abbrReplacer:t,onHide:this.handleThesaurusHide})),r.a.createElement("div",{className:"column is-full"},r.a.createElement("div",{className:"tabs"},r.a.createElement("ul",null,["Bullets","Abbreviations"].map((function(t,a){return r.a.createElement("li",{key:a,className:e.state.currentTab===a?"is-active":""},r.a.createElement("a",{onClick:e.handleTabChange(a)},t))}))))),0===this.state.currentTab?r.a.createElement("div",{className:"column is-full"},r.a.createElement(O,{text:this.state.text,textSelRange:this.state.textSelRange,abbrReplacer:t,handleTextChange:this.handleTextChange,width:this.state.enableOptim?parseFloat(this.state.width.replace(/[a-zA-Z]/g,""))-0+"mm":this.state.width,onSelect:this.handleSelect,enableOptim:this.state.enableOptim})):"",r.a.createElement("div",{className:"column is-full "+(1!==this.state.currentTab?"is-invisible":"")},r.a.createElement(J,{settings:this.props.tableSettings,abbrData:this.state.abbrData,onAbbrChange:this.handleAbbrChange,ref:this.abbrsViewerRef}))))}}]),a}(r.a.Component);$.ParseSettings=function(e){var t=e[0];return{enableOptim:t.enableOptim,text:t.text,width:t.width,abbrData:t.abbrData.map((function(e){return{enabled:e[0],value:e[1],abbr:e[2]}}))}};var G=$,Z=(a(308),a(309),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function Q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Y=a(243),ee=a.n(Y);String.prototype.hashCode=function(){var e,t=0;if(0===this.length)return t;for(e=0;e<this.length;e++)t=(t<<5)-t+this.charCodeAt(e),t|=0;return t};var te,ae={columns:[{data:"enabled",type:"checkbox",disableVisualSelection:!0,width:20},{data:"value",type:"text"},{data:"abbr",type:"text"}],stretchH:"all",width:500,autoWrapRow:!0,height:500,maxRows:1/0,manualRowResize:!0,manualColumnResize:!0,rowHeaders:!0,colHeaders:["Enabled","Word","Abbreviation"],trimWhitespace:!1,enterBeginsEditing:!1,manualRowMove:!0,manualColumnMove:!0,columnSorting:{indicator:!0},autoColumnSize:!1,minRows:15,contextMenu:!0,licenseKey:"non-commercial-and-evaluation",search:{queryMethod:function(e,t){return e.toString()===t.toString()},callback:function(e,t,a,n,r){var i=function(e,t,a,n,r){e.getCellMeta(t,a).isSearchResult=r};i.apply(this,arguments)}}};try{localStorage.getItem("bullet-settings")&&(te=JSON.parse(localStorage.getItem("bullet-settings")))}catch(ne){if("SecurityError"!==ne.name)throw ne;console.log("Was not able to get localstorage bullets due to use of file interface and browser privacy settings")}ee.a.load({custom:{families:["AdobeTimes"]}}),s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",{className:"section",id:"stuff"},r.a.createElement(G,{savedSettings:te,tableSettings:ae,abbrData:[{enabled:!0,value:"abbreviations",abbr:"abbrs"},{enabled:!0,value:"table",abbr:"tbl"},{enabled:!0,value:"optimize",abbr:"optim"},{enabled:!0,value:"with ",abbr:"w/"},{enabled:!0,value:"parentheses",abbr:"parens"}],initialText:"- This is a custom built bullet writing tool; abbreviations will be replaced according to table in the abbreviations tab--you will see output on the right\n- This tool can optimize spacing; output will be red if the optimizer could not fix spacing with 2004 or 2006 Unicode spaces\n- Click the thesaurus button to show one; select a word in this or the output box to view synonyms--words in parentheses are abbreviations that are configured",initialWidth:"202.321mm"})),r.a.createElement("div",{className:"container",id:"footer"},r.a.createElement("div",null,"If you have feedback, submit an ",r.a.createElement("a",{href:"https://github.com/AF-VCD/pdf-bullets/issues"},"issue"),"or a ",r.a.createElement("a",{href:"https://github.com/AF-VCD/pdf-bullets/pulls"},"pull request")),r.a.createElement("div",null,"This site utilizes PDF.JS (pdf import), HandsOnTable (spreadsheet), the DataMuse API (thesaurus), and Bulma (CSS)."),r.a.createElement("div",null,"This site has basic analytics to track the total number of visits to the page. See ",r.a.createElement("a",{href:"https://github.com/ckhordiasma/log-bullet-visitors"},"here")," for details"),r.a.createElement("div",null,"Maintained by Christopher Kodama "))),document.getElementById("root")),function(){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(e.readyState===XMLHttpRequest.DONE){var t=e.status;if(t>=200&&t<400){var a=JSON.parse(e.response).Count;console.log("The bullets site(s) have been visited "+a+" times.")}else console.log("Visitor count increment: task failed successfully")}},e.open("POST","https://g5z50elklh.execute-api.us-east-2.amazonaws.com/default/LogVisitors",!0),e.send()}(),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");Z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Q(t,e)}))}}()}},[[245,1,2]]]);
//# sourceMappingURL=main.9bd294eb.chunk.js.map