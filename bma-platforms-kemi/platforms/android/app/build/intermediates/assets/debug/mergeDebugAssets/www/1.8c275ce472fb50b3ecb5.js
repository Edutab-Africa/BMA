(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{JpIC:function(n,o,t){"use strict";t.d(o,"a",(function(){return u}));var e=t("mrSG"),i=t("bFG1"),c=t("j3ag"),r=t("mv9v"),a=t("3LXp"),s=t("fXoL"),l=t("TEn/"),g=t("ACYt"),_=t("3CSS"),d=t("nt/U"),p=t("ofXK"),m=t("hMzs"),C=t("sYmb");function CoreLoginSiteHelpComponent_ng_container_12_p_8_Template(n,o){if(1&n&&(s.Ec(0,"p"),s.pd(1),s.Dc()),2&n){const n=s.Oc().$implicit;s.lc(1),s.qd(n.answer.text)}}function CoreLoginSiteHelpComponent_ng_container_12_p_9_Template(n,o){if(1&n&&s.zc(0,"p",4),2&n){const n=s.Oc().$implicit;s.Vc("innerHTML",n.answer.text,s.gd)}}function CoreLoginSiteHelpComponent_ng_container_12_core_format_text_10_Template(n,o){if(1&n&&s.zc(0,"core-format-text",11),2&n){const n=s.Oc().$implicit;s.Vc("text",n.answer.text)("filter",!1)}}function CoreLoginSiteHelpComponent_ng_container_12_Template(n,o){if(1&n){const n=s.Fc();s.Cc(0),s.Ec(1,"ion-item",5),s.Mc("click",(function CoreLoginSiteHelpComponent_ng_container_12_Template_ion_item_click_1_listener(){s.fd(n);const t=o.$implicit;return s.Oc().toggle(t)})),s.zc(2,"ion-icon",6),s.Ec(3,"ion-label"),s.Ec(4,"h2"),s.pd(5),s.Dc(),s.Dc(),s.Dc(),s.Ec(6,"ion-item",7),s.Ec(7,"ion-label"),s.nd(8,CoreLoginSiteHelpComponent_ng_container_12_p_8_Template,2,1,"p",8),s.nd(9,CoreLoginSiteHelpComponent_ng_container_12_p_9_Template,1,1,"p",9),s.nd(10,CoreLoginSiteHelpComponent_ng_container_12_core_format_text_10_Template,1,2,"core-format-text",10),s.Dc(),s.Dc(),s.Bc()}if(2&n){const n=o.$implicit,t=s.Oc();s.lc(1),s.mc("aria-expanded",t.isOpen(n))("aria-controls","question-"+n.id+"-answer"),s.lc(1),s.qc("expandable-status-icon-expanded",t.isOpen(n)),s.lc(3),s.qd(n.text),s.lc(1),s.nc(n.answer.class+" ion-text-wrap core-login-site-help--answer"),s.qc("open",t.isOpen(n)),s.Vc("id","question-"+n.id+"-answer")("tabindex",t.isOpen(n)?null:-1),s.mc("inert",t.isOpen(n)?null:"true"),s.lc(2),s.Vc("ngIf","text"===n.answer.format),s.lc(1),s.Vc("ngIf","safe-html"===n.answer.format),s.lc(1),s.Vc("ngIf","unsafe-html"===n.answer.format)}}let u=(()=>{class CoreLoginSiteHelpComponent{constructor(n){var o;this.el=n,this.questions=[],this.hydrated=!1,this.promises=[];const t=c.I.instant("core.login.faqsetupsitelinktitle"),e=i.a.canScanQR(),a=r.b.FAQ_URL_IMAGE_HTML,s=r.b.FAQ_QRCODE_IMAGE_HTML,l=`<a href="${r.c}" title="${t}">${r.c}</a>`,g=[{text:c.I.instant("core.login.faqwhatisurlquestion"),answer:{text:c.I.instant("core.login.faqwhatisurlanswer",{$image:a}),format:h.SafeHTML,class:"core-login-faqwhatisurlanswer"}},{text:c.I.instant("core.login.faqcannotfindmysitequestion"),answer:{text:c.I.instant("core.login.faqcannotfindmysiteanswer"),format:h.Text}},{text:c.I.instant("core.login.faqcantloginquestion"),answer:{text:c.I.instant("core.login.faqcantloginanswer"),format:h.SafeHTML}},e&&{text:c.I.instant("core.login.faqwhereisqrcode"),answer:{text:c.I.instant("core.login.faqwhereisqrcodeanswer",{$image:s}),format:h.SafeHTML,class:"core-login-faqwhereisqrcodeanswer"}},{text:c.I.instant("core.login.faqsetupsitequestion"),answer:{text:c.I.instant("core.login.faqsetupsiteanswer",{$link:l}),format:h.UnsafeHTML}},{text:c.I.instant("core.login.faqtestappquestion"),answer:{text:c.I.instant("core.login.faqtestappanswer"),format:h.SafeHTML}}];for(const n of g)n&&this.questions.push(Object.assign(Object.assign({},n),{id:this.questions.length+1,answer:Object.assign(Object.assign({},n.answer),{class:null!==(o=n.answer.class)&&void 0!==o?o:""})}))}ngAfterViewInit(){return Object(e.a)(this,void 0,void 0,(function*(){const n=Array.from(this.el.nativeElement.querySelectorAll(".core-login-site-help--answer"));yield Promise.all(n.map((n=>Object(e.a)(this,void 0,void 0,(function*(){yield this.track(i.a.waitFor((()=>0!==n.clientHeight))),yield this.track(a.a.waitForImages(n)),n.style.setProperty("--height",`${n.clientHeight}px`)}))))),this.hydrated=!0}))}ngOnDestroy(){this.promises.forEach((n=>n.cancel()))}isOpen(n){return this.openQuestion===n.id}toggle(n){if(n.id===this.openQuestion)return delete this.openQuestion,void 0;this.openQuestion=n.id}close(){c.w.dismiss()}track(n){const remove=()=>{const o=this.promises.indexOf(n);-1!==o&&this.promises.splice(o,1)};return this.promises.push(n),n.then(remove).catch(remove),n}}return CoreLoginSiteHelpComponent.ɵfac=function CoreLoginSiteHelpComponent_Factory(n){return new(n||CoreLoginSiteHelpComponent)(s.yc(s.r))},CoreLoginSiteHelpComponent.ɵcmp=s.sc({type:CoreLoginSiteHelpComponent,selectors:[["core-login-site-help"]],hostVars:2,hostBindings:function CoreLoginSiteHelpComponent_HostBindings(n,o){2&n&&s.qc("hydrated",o.hydrated)},decls:17,vars:10,consts:[["slot","end"],["fill","clear",3,"click"],["slot","icon-only","name","fas-xmark","aria-hidden","true"],[4,"ngFor","ngForOf"],[3,"innerHTML"],["button","","sticky","true","role","heading","detail","false",1,"ion-text-wrap","divider",3,"click"],["name","fas-chevron-right","flip-rtl","","slot","start","aria-hidden","true",1,"expandable-status-icon"],[3,"id","tabindex"],[4,"ngIf"],[3,"innerHTML",4,"ngIf"],[3,"text","filter",4,"ngIf"],[3,"text","filter"]],template:function CoreLoginSiteHelpComponent_Template(n,o){1&n&&(s.Ec(0,"ion-header"),s.Ec(1,"ion-toolbar"),s.Ec(2,"ion-title"),s.Ec(3,"h1"),s.pd(4),s.Pc(5,"translate"),s.Dc(),s.Dc(),s.Ec(6,"ion-buttons",0),s.Ec(7,"ion-button",1),s.Mc("click",(function CoreLoginSiteHelpComponent_Template_ion_button_click_7_listener(){return o.close()})),s.Pc(8,"translate"),s.zc(9,"ion-icon",2),s.Dc(),s.Dc(),s.Dc(),s.Dc(),s.Ec(10,"ion-content"),s.Ec(11,"ion-list"),s.nd(12,CoreLoginSiteHelpComponent_ng_container_12_Template,11,15,"ng-container",3),s.Ec(13,"ion-item"),s.Ec(14,"ion-label"),s.zc(15,"p",4),s.Pc(16,"translate"),s.Dc(),s.Dc(),s.Dc(),s.Dc()),2&n&&(s.lc(4),s.qd(s.Qc(5,4,"core.login.help")),s.lc(3),s.mc("aria-label",s.Qc(8,6,"core.close")),s.lc(5),s.Vc("ngForOf",o.questions),s.lc(3),s.Vc("innerHTML",s.Qc(16,8,"core.login.faqmore"),s.gd))},directives:[l.C,l.Ab,l.yb,l.m,g.a,l.l,l.D,_.a,d.a,l.v,l.P,p.s,l.I,l.O,p.t,m.a],pipes:[C.d],styles:["[_nghost-%COMP%]   .core-login-faqwhatisurlanswer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:50px}[_nghost-%COMP%]   .core-login-faqwhereisqrcodeanswer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:220px;margin-top:5px;margin-bottom:5px}[_nghost-%COMP%]:not(.hydrated)   .core-login-site-help--answer[_ngcontent-%COMP%]{opacity:0;max-width:100%;position:absolute;pointer-events:none}.hydrated[_nghost-%COMP%]   .core-login-site-help--answer[_ngcontent-%COMP%]{height:0;transition:height .2s ease-in-out}.hydrated[_nghost-%COMP%]   .core-login-site-help--answer.open[_ngcontent-%COMP%]{height:var(--height)}"]}),CoreLoginSiteHelpComponent})();var h=function(n){return n.Text="text",n.SafeHTML="safe-html",n.UnsafeHTML="unsafe-html",n}({})},R5ZM:function(n,o,t){"use strict";t.d(o,"a",(function(){return p}));var e=t("mrSG"),i=t("mv9v"),c=t("9+EE"),r=t("3LXp"),a=t("fXoL"),s=t("ofXK"),l=t("ACYt"),g=t("TEn/"),_=t("3CSS"),d=t("sYmb");function CoreLoginMethodsComponent_div_0_Template(n,o){1&n&&(a.Ec(0,"div",4),a.Ec(1,"span"),a.pd(2),a.Pc(3,"translate"),a.Dc(),a.Dc()),2&n&&(a.lc(2),a.qd(a.Qc(3,1,"core.login.or")))}function CoreLoginMethodsComponent_div_1_ion_button_1_ion_icon_1_Template(n,o){if(1&n&&a.zc(0,"ion-icon",9),2&n){const n=a.Oc().$implicit;a.Vc("name",n.icon)}}function CoreLoginMethodsComponent_div_1_ion_button_1_Template(n,o){if(1&n&&(a.Ec(0,"ion-button",7),a.Mc("click",(function CoreLoginMethodsComponent_div_1_ion_button_1_Template_ion_button_click_0_listener(){return o.$implicit.action()})),a.nd(1,CoreLoginMethodsComponent_div_1_ion_button_1_ion_icon_1_Template,1,1,"ion-icon",8),a.Ec(2,"ion-label"),a.pd(3),a.Dc(),a.Dc()),2&n){const n=o.$implicit;a.Vc("fill","outline"),a.mc("aria-label",n.name),a.lc(1),a.Vc("ngIf",n.icon),a.lc(2),a.qd(n.name)}}function CoreLoginMethodsComponent_div_1_Template(n,o){if(1&n&&(a.Ec(0,"div",5),a.nd(1,CoreLoginMethodsComponent_div_1_ion_button_1_Template,4,4,"ion-button",6),a.Dc()),2&n){const n=a.Oc();a.lc(1),a.Vc("ngForOf",n.loginMethods)}}function CoreLoginMethodsComponent_ng_container_2_Template(n,o){if(1&n){const n=a.Fc();a.Cc(0),a.Ec(1,"ion-button",10),a.Mc("click",(function CoreLoginMethodsComponent_ng_container_2_Template_ion_button_click_1_listener(){a.fd(n);return a.Oc().showInstructionsAndScanQR()})),a.zc(2,"ion-icon",11),a.pd(3),a.Pc(4,"translate"),a.Dc(),a.Bc()}2&n&&(a.lc(3),a.rd(" ",a.Qc(4,1,"core.scanqr")," "))}function CoreLoginMethodsComponent_ion_list_3_ion_button_4_img_1_Template(n,o){if(1&n&&a.zc(0,"img",17),2&n){const n=a.Oc().$implicit;a.Vc("src",n.iconurl,a.id)}}function CoreLoginMethodsComponent_ion_list_3_ion_button_4_Template(n,o){if(1&n){const n=a.Fc();a.Ec(0,"ion-button",15),a.Mc("click",(function CoreLoginMethodsComponent_ion_list_3_ion_button_4_Template_ion_button_click_0_listener(){a.fd(n);const t=o.$implicit;return a.Oc(2).oauthClicked(t)})),a.nd(1,CoreLoginMethodsComponent_ion_list_3_ion_button_4_img_1_Template,1,1,"img",16),a.Ec(2,"ion-label"),a.pd(3),a.Dc(),a.Dc()}if(2&n){const n=o.$implicit;a.Vc("fill","outline"),a.mc("aria-label",n.name),a.lc(1),a.Vc("ngIf",n.iconurl),a.lc(2),a.qd(n.name)}}function CoreLoginMethodsComponent_ion_list_3_Template(n,o){if(1&n&&(a.Ec(0,"ion-list",12),a.Ec(1,"h2",13),a.pd(2),a.Pc(3,"translate"),a.Dc(),a.nd(4,CoreLoginMethodsComponent_ion_list_3_ion_button_4_Template,4,4,"ion-button",14),a.Dc()),2&n){const n=a.Oc();a.lc(2),a.qd(a.Qc(3,2,"core.login.potentialidps")),a.lc(2),a.Vc("ngForOf",n.identityProviders)}}let p=(()=>{class CoreLoginMethodsComponent{constructor(){this.reconnect=!1,this.siteUrl="",this.isBrowserSSO=!1,this.showScanQR=!1,this.loginMethods=[],this.identityProviders=[]}ngOnInit(){return Object(e.a)(this,void 0,void 0,(function*(){if(this.reconnect){this.loginMethods=yield i.a.getLoginMethods();const n=c.c.getCurrentSite(),o=yield i.a.getDefaultLoginMethod();(null==n?void 0:n.isLoggedOut())&&o&&(yield o.action())}if(this.siteConfig){if(this.isBrowserSSO=i.a.isSSOLoginNeeded(this.siteConfig.typeoflogin),!this.isBrowserSSO){const n=i.a.getDisabledFeatures(this.siteConfig);this.identityProviders=i.a.getValidIdentityProviders(this.siteConfig,n)}this.reconnect&&(this.showScanQR=i.a.displayQRInSiteScreen()),this.reconnect&&this.showScanQR||(this.showScanQR=yield i.a.displayQRInCredentialsScreen(this.siteConfig.tool_mobile_qrcodetype))}}))}showInstructionsAndScanQR(){return Object(e.a)(this,void 0,void 0,(function*(){try{yield i.a.showScanQRInstructions(),yield i.a.scanQR()}catch(n){}}))}oauthClicked(n){var o;i.a.openBrowserForOAuthLogin(this.siteUrl,n,null===(o=this.siteConfig)||void 0===o?void 0:o.launchurl,this.redirectData)||r.a.showErrorModal("Invalid data.")}}return CoreLoginMethodsComponent.ɵfac=function CoreLoginMethodsComponent_Factory(n){return new(n||CoreLoginMethodsComponent)},CoreLoginMethodsComponent.ɵcmp=a.sc({type:CoreLoginMethodsComponent,selectors:[["core-login-methods"]],inputs:{reconnect:"reconnect",siteUrl:"siteUrl",siteConfig:"siteConfig",redirectData:"redirectData"},decls:4,vars:4,consts:[["class","ion-text-center ion-padding core-login-methods-separator",4,"ngIf"],["class","core-login-methods",4,"ngIf"],[4,"ngIf"],["class","core-login-identity-providers",4,"ngIf"],[1,"ion-text-center","ion-padding","core-login-methods-separator"],[1,"core-login-methods"],["class","ion-text-wrap ion-margin","expand","block",3,"fill","click",4,"ngFor","ngForOf"],["expand","block",1,"ion-text-wrap","ion-margin",3,"fill","click"],["slot","start",3,"name",4,"ngIf"],["slot","start",3,"name"],["expand","block","fill","outline",1,"ion-margin","core-login-site-qrcode",3,"click"],["slot","start","name","fas-qrcode","aria-hidden","true"],[1,"core-login-identity-providers"],[1,"item-heading"],["class","ion-text-wrap ion-margin core-oauth-provider","expand","block",3,"fill","click",4,"ngFor","ngForOf"],["expand","block",1,"ion-text-wrap","ion-margin","core-oauth-provider",3,"fill","click"],["alt","","width","32","height","32","slot","start","aria-hidden","true",3,"src",4,"ngIf"],["alt","","width","32","height","32","slot","start","aria-hidden","true",3,"src"]],template:function CoreLoginMethodsComponent_Template(n,o){1&n&&(a.nd(0,CoreLoginMethodsComponent_div_0_Template,4,3,"div",0),a.nd(1,CoreLoginMethodsComponent_div_1_Template,2,1,"div",1),a.nd(2,CoreLoginMethodsComponent_ng_container_2_Template,5,3,"ng-container",2),a.nd(3,CoreLoginMethodsComponent_ion_list_3_Template,5,4,"ion-list",3)),2&n&&(a.Vc("ngIf",o.loginMethods.length||o.identityProviders.length||o.showScanQR),a.lc(1),a.Vc("ngIf",o.loginMethods.length),a.lc(1),a.Vc("ngIf",o.showScanQR),a.lc(1),a.Vc("ngIf",o.identityProviders.length))},directives:[s.t,s.s,l.a,g.l,g.O,g.D,_.a,g.P],pipes:[d.d],styles:['[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--background:var(--core-login-background);--ion-item-background:var(--core-login-background)}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--color:var(--core-login-text-color)}[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .core-oauth-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]{--color:var(--core-login-text-color);-webkit-text-decoration-color:var(--core-login-text-color);text-decoration-color:var(--core-login-text-color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--core-login-text-color)}[_nghost-%COMP%]   .core-login-reconnect-warning[_ngcontent-%COMP%]{margin:0 0 32px}[_nghost-%COMP%]   .core-login-info-box[_ngcontent-%COMP%]{margin-bottom:32px}[_nghost-%COMP%]   .core-login-info-box[_ngcontent-%COMP%]   .core-login-site[_ngcontent-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]{width:90%;max-width:300px;margin:0 auto}[_nghost-%COMP%]   .core-login-info-box[_ngcontent-%COMP%]   .core-login-site[_ngcontent-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:104px}[_nghost-%COMP%]   .core-login-info-box[_ngcontent-%COMP%]   .core-login-site[_ngcontent-%COMP%]   .core-sitename[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:8px}[_nghost-%COMP%]   .core-login-info-box[_ngcontent-%COMP%]   .core-login-site[_ngcontent-%COMP%]   .core-siteurl[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:0}[_nghost-%COMP%]   .core-login-info-box[_ngcontent-%COMP%]   .core-login-site[_ngcontent-%COMP%] + .core-login-user[_ngcontent-%COMP%]{margin-top:24px}[_nghost-%COMP%]   core-user-avatar.large-avatar[_ngcontent-%COMP%]{--core-avatar-size:var(--core-large-avatar-size)}[_nghost-%COMP%]   .core-login-fullname[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:0}[_nghost-%COMP%]   .core-login-methods[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .item.item-input[_ngcontent-%COMP%]{margin-bottom:16px}[_nghost-%COMP%]   .core-login-methods[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%], [_nghost-%COMP%]   .core-login-methods[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{--background:var(--core-login-input-background);--color:var(--core-login-input-color)}[_nghost-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-left:0;margin-right:0}[_nghost-%COMP%]   .core-login-forgotten-password[_ngcontent-%COMP%]{text-decoration:underline}[_nghost-%COMP%]   .core-sitename[_ngcontent-%COMP%], [_nghost-%COMP%]   .core-siteurl[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .core-login-methods-separator[_ngcontent-%COMP%]{position:relative;padding:8px 0}[_nghost-%COMP%]   .core-login-methods-separator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:var(--core-login-background);padding:0 8px}[_nghost-%COMP%]   .core-login-methods-separator[_ngcontent-%COMP%]:before{height:1px;position:absolute;top:50%;left:0;right:0;border-bottom:1px solid var(--gray-300);content:"";z-index:-1}[_nghost-%COMP%]   .core-login-login-button[_ngcontent-%COMP%]{margin-top:32px}[_nghost-%COMP%]   .core-login-login-inbrowser-button[_ngcontent-%COMP%]{margin-bottom:8px}[_nghost-%COMP%]   p.core-login-inbrowser[_ngcontent-%COMP%]{font-size:12px;margin-top:8px;margin-bottom:8px}[_nghost-%COMP%]   .core-login-sign-up[_ngcontent-%COMP%]{margin-top:8px;border-top:1px solid var(--gray-300)}[_nghost-%COMP%]   .core-login-identity-providers[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   .core-login-sign-up[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:16px;margin-bottom:8px;font-size:16px}html.dark[_nghost-%COMP%]   core-loading[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   core-loading[_ngcontent-%COMP%]{--loading-background:var(--core-login-background-dark);--loading-text-color:#fff;--loading-spinner:#fff}']}),CoreLoginMethodsComponent})()},RiDC:function(n,o,t){"use strict";t.d(o,"a",(function(){return x}));var e=t("mrSG"),i=t("3LXp"),c=t("9+EE"),r=t("mv9v"),a=t("pHTc"),s=t("tS8V"),l=t("MUy3"),g=t("j3ag"),_=t("fXoL"),d=t("TEn/"),p=t("ACYt"),m=t("ofXK"),C=t("nt/U"),u=t("PgjG"),h=t("yNDK"),f=t("3CSS"),O=t("hMzs"),M=t("iSJP"),b=t("FeAf"),P=t("sYmb");function CoreLoginSitesComponent_ion_button_11_Template(n,o){if(1&n){const n=_.Fc();_.Ec(0,"ion-button",14),_.Mc("click",(function CoreLoginSitesComponent_ion_button_11_Template_ion_button_click_0_listener(){_.fd(n);return _.Oc().toggleDelete()})),_.Pc(1,"translate"),_.zc(2,"ion-icon",15),_.Dc()}2&n&&_.mc("aria-label",_.Qc(1,1,"core.login.toggleremove"))}function CoreLoginSitesComponent_ion_card_15_ng_container_14_Template(n,o){1&n&&_.Ac(0)}const _c0=function(n){return{sites:n}};function CoreLoginSitesComponent_ion_card_15_Template(n,o){if(1&n&&(_.Ec(0,"ion-card"),_.Ec(1,"ion-item-divider",16),_.Ec(2,"ion-label"),_.Ec(3,"h2"),_.zc(4,"core-format-text",17),_.Dc(),_.Ec(5,"p"),_.Ec(6,"a",18),_.pd(7),_.Dc(),_.Dc(),_.Dc(),_.Dc(),_.Ec(8,"ion-item",19),_.zc(9,"core-user-avatar",20),_.Ec(10,"ion-label"),_.Ec(11,"p",21),_.pd(12),_.Dc(),_.Dc(),_.zc(13,"ion-icon",22),_.Dc(),_.nd(14,CoreLoginSitesComponent_ion_card_15_ng_container_14_Template,1,0,"ng-container",23),_.Dc()),2&n){const n=_.Oc(),o=_.ed(25);_.lc(4),_.Vc("text",n.accountsList.currentSite.siteName)("siteId",n.accountsList.currentSite.id),_.lc(2),_.Vc("href",n.accountsList.currentSite.siteUrl,_.id),_.lc(1),_.qd(n.accountsList.currentSite.siteUrlWithoutProtocol),_.lc(2),_.Vc("user",n.accountsList.currentSite)("linkProfile",!1)("siteId",n.accountsList.currentSite.id),_.lc(3),_.qd(n.accountsList.currentSite.fullname),_.lc(2),_.Vc("ngTemplateOutlet",o)("ngTemplateOutletContext",_.ad(10,_c0,n.accountsList.sameSite))}}function CoreLoginSitesComponent_ion_card_16_ion_item_divider_1_Template(n,o){if(1&n&&(_.Ec(0,"ion-item-divider",16),_.Ec(1,"ion-label"),_.Ec(2,"h2"),_.zc(3,"core-format-text",17),_.Dc(),_.Ec(4,"p"),_.Ec(5,"a",25),_.pd(6),_.Dc(),_.Dc(),_.Dc(),_.Dc()),2&n){const n=_.Oc().$implicit;_.lc(3),_.Vc("text",n[0].siteName)("siteId",n[0].id),_.lc(2),_.Vc("href",n[0].siteUrl,_.id),_.lc(1),_.qd(n[0].siteUrlWithoutProtocol)}}function CoreLoginSitesComponent_ion_card_16_ng_container_2_Template(n,o){1&n&&_.Ac(0)}function CoreLoginSitesComponent_ion_card_16_Template(n,o){if(1&n&&(_.Ec(0,"ion-card"),_.nd(1,CoreLoginSitesComponent_ion_card_16_ion_item_divider_1_Template,7,4,"ion-item-divider",24),_.nd(2,CoreLoginSitesComponent_ion_card_16_ng_container_2_Template,1,0,"ng-container",23),_.Dc()),2&n){const n=o.$implicit;_.Oc();const t=_.ed(25);_.lc(1),_.Vc("ngIf",n[0]),_.lc(1),_.Vc("ngTemplateOutlet",t)("ngTemplateOutletContext",_.ad(3,_c0,n))}}const _c1=function(n){return{count:n}};function CoreLoginSitesComponent_ng_template_24_ion_item_0_ion_badge_5_Template(n,o){if(1&n&&(_.Ec(0,"ion-badge",3),_.Ec(1,"span",30),_.pd(2),_.Dc(),_.Ec(3,"span",12),_.pd(4),_.Pc(5,"translate"),_.Dc(),_.Dc()),2&n){const n=_.Oc().$implicit;_.Vc("@coreShowHideAnimation",void 0),_.lc(2),_.qd(n.badge),_.lc(2),_.qd(_.Rc(5,3,"core.login.sitebadgedescription",_.ad(6,_c1,n.badge)))}}function CoreLoginSitesComponent_ng_template_24_ion_item_0_ion_button_6_Template(n,o){if(1&n){const n=_.Fc();_.Ec(0,"ion-button",31),_.Mc("click",(function CoreLoginSitesComponent_ng_template_24_ion_item_0_ion_button_6_Template_ion_button_click_0_listener(o){_.fd(n);const t=_.Oc().$implicit;return _.Oc(2).deleteSite(o,t)})),_.Pc(1,"translate"),_.zc(2,"ion-icon",32),_.Dc()}2&n&&(_.Vc("@coreSlideInOut","fromRight"),_.mc("aria-label",_.Qc(1,2,"core.login.removeaccount")))}function CoreLoginSitesComponent_ng_template_24_ion_item_0_Template(n,o){if(1&n){const n=_.Fc();_.Ec(0,"ion-item",27),_.Mc("click",(function CoreLoginSitesComponent_ng_template_24_ion_item_0_Template_ion_item_click_0_listener(t){_.fd(n);const e=o.$implicit;return _.Oc(2).login(t,e.id)})),_.zc(1,"core-user-avatar",20),_.Ec(2,"ion-label"),_.Ec(3,"p",21),_.pd(4),_.Dc(),_.Dc(),_.nd(5,CoreLoginSitesComponent_ng_template_24_ion_item_0_ion_badge_5_Template,6,8,"ion-badge",28),_.nd(6,CoreLoginSitesComponent_ng_template_24_ion_item_0_ion_button_6_Template,3,4,"ion-button",29),_.Dc()}if(2&n){const n=o.$implicit,t=_.Oc(2);_.lc(1),_.Vc("user",n)("linkProfile",!1)("siteId",n.id),_.lc(3),_.qd(n.fullname),_.lc(1),_.Vc("ngIf",!t.showDelete&&n.badge),_.lc(1),_.Vc("ngIf",t.showDelete)}}function CoreLoginSitesComponent_ng_template_24_Template(n,o){if(1&n&&_.nd(0,CoreLoginSitesComponent_ng_template_24_ion_item_0_Template,7,6,"ion-item",26),2&n){_.Vc("ngForOf",o.sites)}}let x=(()=>{class CoreLoginSitesComponent{constructor(){this.accountsList={sameSite:[],otherSites:[],count:0},this.showDelete=!1,this.loaded=!1,this.currentSiteId=c.c.getRequiredCurrentSite().getId()}ngOnInit(){return Object(e.a)(this,void 0,void 0,(function*(){this.accountsList=yield r.a.getAccountsList(this.currentSiteId),this.loaded=!0}))}add(n){return Object(e.a)(this,void 0,void 0,(function*(){yield this.close(n,!0),yield r.a.goToAddSite(!0,!0)}))}deleteSite(n,o){return Object(e.a)(this,void 0,void 0,(function*(){n.stopPropagation();let t=o.siteName||"";t=yield s.a.formatText(t,{clean:!0,singleLine:!0,filter:!1},[],o.id);try{yield i.a.showDeleteConfirm("core.login.confirmdeletesite",{sitename:t})}catch(n){return}try{yield r.a.deleteAccountFromList(this.accountsList,o),this.showDelete=!1}catch(n){i.a.showErrorModalDefault(n,"core.login.errordeletesite",!0)}}))}login(n,o){return Object(e.a)(this,void 0,void 0,(function*(){yield this.close(n,!0),yield a.a.navigateToSiteHome({preferCurrentTab:!1,siteId:o})}))}toggleDelete(){this.showDelete=!this.showDelete}close(n,o=!1){return Object(e.a)(this,void 0,void 0,(function*(){n.preventDefault(),n.stopPropagation(),yield g.w.dismiss(o)}))}}return CoreLoginSitesComponent.ɵfac=function CoreLoginSitesComponent_Factory(n){return new(n||CoreLoginSitesComponent)},CoreLoginSitesComponent.ɵcmp=_.sc({type:CoreLoginSitesComponent,selectors:[["core-login-sites"]],decls:26,vars:16,consts:[["slot","start"],["fill","clear",1,"ion-back-button",3,"click"],["ios","chevron-back","md","arrow-back-sharp","slot","icon-only","aria-hidden","true"],["slot","end"],["fill","clear",3,"click",4,"ngIf"],[3,"hideUntil"],[1,"core-sitelist"],[4,"ngIf"],[4,"ngFor","ngForOf"],["slot","fixed","core-fab","","vertical","bottom","horizontal","end"],[3,"click"],["name","fas-plus","aria-hidden","true"],[1,"sr-only"],["siteList",""],["fill","clear",3,"click"],["slot","icon-only","name","fas-pen","aria-hidden","true"],["sticky","true",1,"core-sitelist-sitename"],["clean","true",3,"text","siteId"],["core-link","","autoLogin","yes",3,"href"],["detail","false"],["slot","start",3,"user","linkProfile","siteId"],[1,"item-heading"],["color","success","name","fas-check"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["sticky","true","class","core-sitelist-sitename",4,"ngIf"],["core-link","","autoLogin","no",3,"href"],["button","","detail","true",3,"click",4,"ngFor","ngForOf"],["button","","detail","true",3,"click"],["slot","end",4,"ngIf"],["slot","end","fill","clear","color","danger",3,"click",4,"ngIf"],["aria-hidden","true"],["slot","end","fill","clear","color","danger",3,"click"],["name","fas-trash","slot","icon-only","aria-hidden","true"]],template:function CoreLoginSitesComponent_Template(n,o){1&n&&(_.Ec(0,"ion-header"),_.Ec(1,"ion-toolbar"),_.Ec(2,"ion-buttons",0),_.Ec(3,"ion-button",1),_.Mc("click",(function CoreLoginSitesComponent_Template_ion_button_click_3_listener(n){return o.close(n)})),_.Pc(4,"translate"),_.zc(5,"ion-icon",2),_.Dc(),_.Dc(),_.Ec(6,"ion-title"),_.Ec(7,"h1"),_.pd(8),_.Pc(9,"translate"),_.Dc(),_.Dc(),_.Ec(10,"ion-buttons",3),_.nd(11,CoreLoginSitesComponent_ion_button_11_Template,3,3,"ion-button",4),_.Dc(),_.Dc(),_.Dc(),_.Ec(12,"ion-content"),_.Ec(13,"core-loading",5),_.Ec(14,"ion-list",6),_.nd(15,CoreLoginSitesComponent_ion_card_15_Template,15,12,"ion-card",7),_.nd(16,CoreLoginSitesComponent_ion_card_16_Template,3,5,"ion-card",8),_.Dc(),_.Dc(),_.Ec(17,"ion-fab",9),_.Ec(18,"ion-fab-button",10),_.Mc("click",(function CoreLoginSitesComponent_Template_ion_fab_button_click_18_listener(n){return o.add(n)})),_.Pc(19,"translate"),_.zc(20,"ion-icon",11),_.Ec(21,"span",12),_.pd(22),_.Pc(23,"translate"),_.Dc(),_.Dc(),_.Dc(),_.Dc(),_.nd(24,CoreLoginSitesComponent_ng_template_24_Template,1,1,"ng-template",null,13,_.od)),2&n&&(_.lc(3),_.mc("aria-label",_.Qc(4,8,"core.back")),_.lc(5),_.qd(_.Qc(9,10,"core.mainmenu.switchaccount")),_.lc(3),_.Vc("ngIf",o.accountsList.count>1),_.lc(2),_.Vc("hideUntil",o.loaded),_.lc(2),_.Vc("ngIf",o.accountsList.currentSite),_.lc(1),_.Vc("ngForOf",o.accountsList.otherSites),_.lc(2),_.mc("aria-label",_.Qc(19,12,"core.login.add")),_.lc(4),_.qd(_.Qc(23,14,"core.login.add")))},directives:[d.C,d.Ab,d.m,p.a,d.l,d.D,d.yb,m.t,C.a,d.v,u.a,d.P,m.s,d.x,h.a,d.y,f.a,d.n,d.J,d.O,O.a,M.a,d.I,b.a,m.A,d.k],pipes:[P.d],styles:["ion-list.core-sitelist[_ngcontent-%COMP%]   .core-sitelist-sitename[_ngcontent-%COMP%]{border-bottom:1px solid var(--stroke)}ion-list.core-sitelist[_ngcontent-%COMP%]   .core-sitelist-sitename[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:8px}"],data:{animation:[l.a.SLIDE_IN_OUT,l.a.SHOW_HIDE]}}),CoreLoginSitesComponent})()},ho2i:function(n,o,t){"use strict";t.d(o,"a",(function(){return g}));var e=t("L3Fv"),i=t("m2Ry"),c=t("JpIC"),r=t("RiDC"),a=t("R5ZM"),s=t("uI1u"),l=t("fXoL");let g=(()=>{class CoreLoginComponentsModule{}return CoreLoginComponentsModule.ɵmod=l.wc({type:CoreLoginComponentsModule}),CoreLoginComponentsModule.ɵinj=l.vc({factory:function CoreLoginComponentsModule_Factory(n){return new(n||CoreLoginComponentsModule)},imports:[[e.a]]}),CoreLoginComponentsModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&l.kd(g,{declarations:[s.a,i.a,c.a,r.a,a.a],imports:[e.a],exports:[s.a,i.a,c.a,r.a,a.a]}))},m2Ry:function(n,o,t){"use strict";t.d(o,"a",(function(){return m}));var e=t("BBqZ"),i=t("bFG1"),c=t("mv9v"),r=t("j3ag"),a=t("fXoL"),s=t("TEn/"),l=t("ACYt"),g=t("3CSS"),_=t("nt/U"),d=t("ofXK"),p=t("sYmb");function CoreLoginSiteOnboardingComponent_div_19_Template(n,o){if(1&n){const n=a.Fc();a.Ec(0,"div",7),a.Ec(1,"ion-button",9),a.Mc("click",(function CoreLoginSiteOnboardingComponent_div_19_Template_ion_button_click_1_listener(o){a.fd(n);return a.Oc().skip(o)})),a.pd(2),a.Pc(3,"translate"),a.Dc(),a.Ec(4,"ion-button",9),a.Mc("click",(function CoreLoginSiteOnboardingComponent_div_19_Template_ion_button_click_4_listener(o){a.fd(n);return a.Oc().next(o)})),a.pd(5),a.Pc(6,"translate"),a.Dc(),a.Dc()}2&n&&(a.lc(2),a.rd(" ",a.Qc(3,2,"core.login.onboardingimalearner")," "),a.lc(3),a.rd(" ",a.Qc(6,4,"core.login.onboardingimaneducator")," "))}function CoreLoginSiteOnboardingComponent_div_20_Template(n,o){if(1&n){const n=a.Fc();a.Ec(0,"div",7),a.Ec(1,"p",10),a.pd(2),a.Pc(3,"translate"),a.Dc(),a.Ec(4,"ion-button",9),a.Mc("click",(function CoreLoginSiteOnboardingComponent_div_20_Template_ion_button_click_4_listener(o){a.fd(n);return a.Oc().skip(o)})),a.pd(5),a.Pc(6,"translate"),a.Dc(),a.Ec(7,"ion-button",11),a.Mc("click",(function CoreLoginSiteOnboardingComponent_div_20_Template_ion_button_click_7_listener(o){a.fd(n);return a.Oc().next(o)})),a.pd(8),a.Pc(9,"translate"),a.Dc(),a.Dc()}2&n&&(a.lc(2),a.rd(" ",a.Qc(3,3,"core.login.onboardingtoconnect")," "),a.lc(3),a.rd(" ",a.Qc(6,5,"core.login.onboardingialreadyhaveasite")," "),a.lc(3),a.rd(" ",a.Qc(9,7,"core.login.onboardingineedasite")," "))}function CoreLoginSiteOnboardingComponent_div_21_Template(n,o){if(1&n){const n=a.Fc();a.Ec(0,"div",7),a.Ec(1,"ul",12),a.Ec(2,"li"),a.zc(3,"ion-icon",13),a.pd(4),a.Pc(5,"translate"),a.Dc(),a.Ec(6,"li"),a.zc(7,"ion-icon",13),a.pd(8),a.Pc(9,"translate"),a.Dc(),a.Ec(10,"li"),a.zc(11,"ion-icon",13),a.pd(12),a.Pc(13,"translate"),a.Dc(),a.Dc(),a.Ec(14,"ion-button",11),a.Mc("click",(function CoreLoginSiteOnboardingComponent_div_21_Template_ion_button_click_14_listener(o){a.fd(n);return a.Oc().gotoWeb(o)})),a.pd(15),a.Pc(16,"translate"),a.Dc(),a.Dc()}2&n&&(a.lc(4),a.rd(" ",a.Qc(5,4,"core.login.onboardingcreatemanagecourses")," "),a.lc(4),a.rd(" ",a.Qc(9,6,"core.login.onboardingenrolmanagestudents")," "),a.lc(4),a.rd(" ",a.Qc(13,8,"core.login.onboardingprovidefeedback")," "),a.lc(3),a.rd(" ",a.Qc(16,10,"core.login.onboardinggetstarted")," "))}let m=(()=>{class CoreLoginSiteOnboardingComponent{constructor(){this.step=0}next(n){n.stopPropagation(),this.step++}previous(n){n.stopPropagation(),0==this.step?r.w.dismiss():this.step--}skip(n){n.stopPropagation(),this.saveOnboardingDone(),r.w.dismiss()}gotoWeb(n){n.stopPropagation(),this.saveOnboardingDone(),i.a.openInBrowser(c.c,{showBrowserWarning:!1}),r.w.dismiss()}saveOnboardingDone(){e.a.set(c.b.ONBOARDING_DONE,1)}}return CoreLoginSiteOnboardingComponent.ɵfac=function CoreLoginSiteOnboardingComponent_Factory(n){return new(n||CoreLoginSiteOnboardingComponent)},CoreLoginSiteOnboardingComponent.ɵcmp=a.sc({type:CoreLoginSiteOnboardingComponent,selectors:[["core-login-site-onboarding"]],decls:22,vars:15,consts:[["slot","start"],["fill","clear",3,"click"],["slot","icon-only","name","fas-arrow-left","aria-hidden","true"],["slot","end"],[1,"ion-padding"],[1,"ion-text-center","ion-padding","core-login-site-logo"],["src","assets/img/login_logo.png","role","presentation","alt","",1,"avatar-full","login-logo"],[1,"core-login-onboarding-step"],["class","core-login-onboarding-step",4,"ngIf"],["expand","block","fill","outline",1,"ion-margin-bottom",3,"click"],[1,"core-login-onboarding-text"],["expand","block",1,"ion-margin-bottom",3,"click"],[1,"core-login-onboarding-text","ion-text-start"],["name","far-circle-check","aria-hidden","true"]],template:function CoreLoginSiteOnboardingComponent_Template(n,o){1&n&&(a.Ec(0,"ion-header"),a.Ec(1,"ion-toolbar"),a.Ec(2,"ion-buttons",0),a.Ec(3,"ion-button",1),a.Mc("click",(function CoreLoginSiteOnboardingComponent_Template_ion_button_click_3_listener(n){return o.previous(n)})),a.Pc(4,"translate"),a.zc(5,"ion-icon",2),a.Dc(),a.Dc(),a.zc(6,"ion-title"),a.Ec(7,"ion-buttons",3),a.Ec(8,"ion-button",1),a.Mc("click",(function CoreLoginSiteOnboardingComponent_Template_ion_button_click_8_listener(n){return o.skip(n)})),a.Pc(9,"translate"),a.pd(10),a.Pc(11,"translate"),a.Dc(),a.Dc(),a.Dc(),a.Dc(),a.Ec(12,"ion-content",4),a.Ec(13,"div"),a.Ec(14,"div",5),a.zc(15,"img",6),a.Dc(),a.Ec(16,"h1",7),a.pd(17),a.Pc(18,"translate"),a.Dc(),a.nd(19,CoreLoginSiteOnboardingComponent_div_19_Template,7,6,"div",8),a.nd(20,CoreLoginSiteOnboardingComponent_div_20_Template,10,9,"div",8),a.nd(21,CoreLoginSiteOnboardingComponent_div_21_Template,17,12,"div",8),a.Dc(),a.Dc()),2&n&&(a.lc(3),a.mc("aria-label",a.Qc(4,7,"core.back")),a.lc(5),a.mc("aria-label",a.Qc(9,9,"core.skip")),a.lc(2),a.rd(" ",a.Qc(11,11,"core.skip")," "),a.lc(7),a.rd(" ",a.Qc(18,13,"core.login.onboardingwelcome")," "),a.lc(2),a.Vc("ngIf",0==o.step),a.lc(1),a.Vc("ngIf",1==o.step),a.lc(1),a.Vc("ngIf",2==o.step))},directives:[s.C,s.Ab,s.m,l.a,s.l,s.D,g.a,s.yb,_.a,s.v,d.t],pipes:[p.d],styles:["[_nghost-%COMP%]   .core-login-onboarding-step[_ngcontent-%COMP%]{padding:10px 20px;text-align:center;margin:0 auto}@media (min-width:768px){[_nghost-%COMP%]   .core-login-onboarding-step[_ngcontent-%COMP%]{max-width:80%}}[_nghost-%COMP%]   .core-login-onboarding-step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:10px}[_nghost-%COMP%]   .core-login-onboarding-step[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-bottom:30px;list-style-type:none;-webkit-padding-start:10px;padding-inline-start:10px}[_nghost-%COMP%]   .core-login-onboarding-step[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:10px}[_nghost-%COMP%]   .core-login-onboarding-step[_ngcontent-%COMP%]   .button-block[_ngcontent-%COMP%]{margin-top:20px}[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{font-size:22px}",'[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--background:var(--core-login-background);--ion-item-background:var(--core-login-background)}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--color:var(--core-login-text-color)}[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .core-oauth-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]{--color:var(--core-login-text-color);-webkit-text-decoration-color:var(--core-login-text-color);text-decoration-color:var(--core-login-text-color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--core-login-text-color)}[_nghost-%COMP%]   .core-login-reconnect-warning[_ngcontent-%COMP%]{margin:0 0 32px}[_nghost-%COMP%]   .core-login-info-box[_ngcontent-%COMP%]{margin-bottom:32px}[_nghost-%COMP%]   .core-login-info-box[_ngcontent-%COMP%]   .core-login-site[_ngcontent-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]{width:90%;max-width:300px;margin:0 auto}[_nghost-%COMP%]   .core-login-info-box[_ngcontent-%COMP%]   .core-login-site[_ngcontent-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:104px}[_nghost-%COMP%]   .core-login-info-box[_ngcontent-%COMP%]   .core-login-site[_ngcontent-%COMP%]   .core-sitename[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:8px}[_nghost-%COMP%]   .core-login-info-box[_ngcontent-%COMP%]   .core-login-site[_ngcontent-%COMP%]   .core-siteurl[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:0}[_nghost-%COMP%]   .core-login-info-box[_ngcontent-%COMP%]   .core-login-site[_ngcontent-%COMP%] + .core-login-user[_ngcontent-%COMP%]{margin-top:24px}[_nghost-%COMP%]   core-user-avatar.large-avatar[_ngcontent-%COMP%]{--core-avatar-size:var(--core-large-avatar-size)}[_nghost-%COMP%]   .core-login-fullname[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:0}[_nghost-%COMP%]   .core-login-methods[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .item.item-input[_ngcontent-%COMP%]{margin-bottom:16px}[_nghost-%COMP%]   .core-login-methods[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%], [_nghost-%COMP%]   .core-login-methods[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{--background:var(--core-login-input-background);--color:var(--core-login-input-color)}[_nghost-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-left:0;margin-right:0}[_nghost-%COMP%]   .core-login-forgotten-password[_ngcontent-%COMP%]{text-decoration:underline}[_nghost-%COMP%]   .core-sitename[_ngcontent-%COMP%], [_nghost-%COMP%]   .core-siteurl[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .core-login-methods-separator[_ngcontent-%COMP%]{position:relative;padding:8px 0}[_nghost-%COMP%]   .core-login-methods-separator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:var(--core-login-background);padding:0 8px}[_nghost-%COMP%]   .core-login-methods-separator[_ngcontent-%COMP%]:before{height:1px;position:absolute;top:50%;left:0;right:0;border-bottom:1px solid var(--gray-300);content:"";z-index:-1}[_nghost-%COMP%]   .core-login-login-button[_ngcontent-%COMP%]{margin-top:32px}[_nghost-%COMP%]   .core-login-login-inbrowser-button[_ngcontent-%COMP%]{margin-bottom:8px}[_nghost-%COMP%]   p.core-login-inbrowser[_ngcontent-%COMP%]{font-size:12px;margin-top:8px;margin-bottom:8px}[_nghost-%COMP%]   .core-login-sign-up[_ngcontent-%COMP%]{margin-top:8px;border-top:1px solid var(--gray-300)}[_nghost-%COMP%]   .core-login-identity-providers[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   .core-login-sign-up[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:16px;margin-bottom:8px;font-size:16px}html.dark[_nghost-%COMP%]   core-loading[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   core-loading[_ngcontent-%COMP%]{--loading-background:var(--core-login-background-dark);--loading-text-color:#fff;--loading-spinner:#fff}']}),CoreLoginSiteOnboardingComponent})()},uI1u:function(n,o,t){"use strict";t.d(o,"a",(function(){return d}));var e=t("mrSG"),i=t("51eS"),c=t("fXoL"),r=t("TEn/"),a=t("3CSS"),s=t("ofXK"),l=t("ACYt"),g=t("sYmb");function CoreLoginExceededAttemptsComponent_ion_button_6_Template(n,o){if(1&n){const n=c.Fc();c.Ec(0,"ion-button",3),c.Mc("click",(function CoreLoginExceededAttemptsComponent_ion_button_6_Template_ion_button_click_0_listener(){c.fd(n);return c.Oc().contactSupport()})),c.pd(1),c.Pc(2,"translate"),c.Dc()}2&n&&(c.lc(1),c.rd(" ",c.Qc(2,1,"core.contactsupport")," "))}const _=["*"];let d=(()=>{class CoreLoginExceededAttemptsComponent{constructor(){this.canContactSupport=!1}ngOnInit(){this.canContactSupport=this.supportConfig.canContactSupport()}contactSupport(){return Object(e.a)(this,void 0,void 0,(function*(){yield i.a.contact({supportConfig:this.supportConfig,subject:this.supportSubject})}))}}return CoreLoginExceededAttemptsComponent.ɵfac=function CoreLoginExceededAttemptsComponent_Factory(n){return new(n||CoreLoginExceededAttemptsComponent)},CoreLoginExceededAttemptsComponent.ɵcmp=c.sc({type:CoreLoginExceededAttemptsComponent,selectors:[["core-login-exceeded-attempts"]],inputs:{supportConfig:"supportConfig",supportSubject:"supportSubject"},ngContentSelectors:_,decls:7,vars:1,consts:[[1,"core-danger-card"],["name","fas-triangle-exclamation","slot","start","aria-hidden","true"],["fill","outline","color","medium",3,"click",4,"ngIf"],["fill","outline","color","medium",3,"click"]],template:function CoreLoginExceededAttemptsComponent_Template(n,o){1&n&&(c.Uc(),c.Ec(0,"ion-card",0),c.Ec(1,"ion-item"),c.zc(2,"ion-icon",1),c.Ec(3,"ion-label"),c.Ec(4,"p"),c.Tc(5),c.Dc(),c.nd(6,CoreLoginExceededAttemptsComponent_ion_button_6_Template,3,3,"ion-button",2),c.Dc(),c.Dc(),c.Dc()),2&n&&(c.lc(6),c.Vc("ngIf",o.canContactSupport))},directives:[r.n,r.I,r.D,a.a,r.O,s.t,l.a,r.l],pipes:[g.d],styles:["[_nghost-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-left:0;margin-right:0;margin-top:16px}"]}),CoreLoginExceededAttemptsComponent})()}}]);