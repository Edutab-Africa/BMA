(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{gviW:function(o,e,n){"use strict";n.r(e),n.d(e,"CoreLoginReconnectLazyModule",(function(){return F}));var t=n("tyNb"),i=n("L3Fv"),c=n("ho2i"),r=n("mrSG"),s=n("3Pt+"),a=n("nvXB"),g=n("GGba"),l=n("9+EE"),d=n("3LXp"),_=n("bFG1"),p=n("mv9v"),u=n("fjkH"),m=n("93ts"),f=n("pHTc"),h=n("4reR"),C=n("51eS"),P=n("7mgC"),O=n("j3ag"),M=n("fXoL"),b=n("TEn/"),w=n("ACYt"),v=n("3CSS"),L=n("nt/U"),k=n("PgjG"),x=n("ofXK"),y=n("hMzs"),E=n("FeAf"),R=n("uI1u"),I=n("lqoc"),T=n("R5ZM"),D=n("sYmb");const S=["reconnectForm"];function CoreLoginReconnectPage_ion_card_17_Template(o,e){1&o&&(M.Ec(0,"ion-card",23),M.Ec(1,"ion-item"),M.zc(2,"ion-icon",24),M.Ec(3,"ion-label"),M.Ec(4,"p"),M.pd(5),M.Pc(6,"translate"),M.Dc(),M.Dc(),M.Dc(),M.Dc()),2&o&&(M.lc(5),M.qd(M.Qc(6,1,"core.lostconnection")))}function CoreLoginReconnectPage_div_20_img_1_Template(o,e){if(1&o&&M.zc(0,"img",28),2&o){const o=M.Oc(2);M.Vc("src",o.logoUrl,M.id)}}function CoreLoginReconnectPage_div_20_img_2_Template(o,e){1&o&&M.zc(0,"img",29)}function CoreLoginReconnectPage_div_20_Template(o,e){if(1&o&&(M.Ec(0,"div",25),M.nd(1,CoreLoginReconnectPage_div_20_img_1_Template,1,1,"img",26),M.nd(2,CoreLoginReconnectPage_div_20_img_2_Template,1,0,"img",27),M.Dc()),2&o){const o=M.Oc();M.lc(1),M.Vc("ngIf",o.logoUrl),M.lc(1),M.Vc("ngIf",!o.logoUrl)}}function CoreLoginReconnectPage_p_21_Template(o,e){if(1&o&&(M.Ec(0,"p",30),M.zc(1,"core-format-text",31),M.Dc()),2&o){const o=M.Oc();M.lc(1),M.Vc("text",null==o.siteInfo?null:o.siteInfo.siteName)("filter",!1)}}function CoreLoginReconnectPage_core_user_avatar_25_Template(o,e){if(1&o&&M.zc(0,"core-user-avatar",32),2&o){const o=M.Oc();M.Vc("user",o.siteInfo)("linkProfile",!1)("siteId",o.siteId)}}function CoreLoginReconnectPage_p_26_Template(o,e){if(1&o&&(M.Ec(0,"p",33),M.zc(1,"core-format-text",31),M.Dc()),2&o){const o=M.Oc();M.lc(1),M.Vc("text",null==o.siteInfo?null:o.siteInfo.fullname)("filter",!1)}}function CoreLoginReconnectPage_core_login_exceeded_attempts_27_Template(o,e){if(1&o){const o=M.Fc();M.Ec(0,"core-login-exceeded-attempts",34),M.Pc(1,"translate"),M.Ec(2,"div",35),M.Mc("click",(function CoreLoginReconnectPage_core_login_exceeded_attempts_27_Template_div_click_2_listener(e){M.fd(o);return M.Oc().exceededAttemptsClicked(e)})),M.Dc(),M.Dc()}if(2&o){const o=M.Oc();M.Vc("supportConfig",o.supportConfig)("supportSubject",M.Qc(1,3,"core.login.exceededloginattemptssupportsubject")),M.lc(2),M.Vc("innerHTML",o.exceededAttemptsHTML,M.gd)}}function CoreLoginReconnectPage_form_29_ion_button_12_Template(o,e){if(1&o){const o=M.Fc();M.Ec(0,"ion-button",44),M.Mc("click",(function CoreLoginReconnectPage_form_29_ion_button_12_Template_ion_button_click_0_listener(){M.fd(o);return M.Oc(2).forgottenPassword()})),M.pd(1),M.Pc(2,"translate"),M.Dc()}2&o&&(M.lc(1),M.rd(" ",M.Qc(2,1,"core.login.forgotaccount")," "))}function CoreLoginReconnectPage_form_29_Template(o,e){if(1&o){const o=M.Fc();M.Ec(0,"form",36,37),M.Mc("ngSubmit",(function CoreLoginReconnectPage_form_29_Template_form_ngSubmit_0_listener(e){M.fd(o);return M.Oc().login(e)})),M.Ec(2,"ion-item",38),M.Ec(3,"ion-label",39),M.pd(4),M.Pc(5,"translate"),M.Dc(),M.Ec(6,"core-show-password",40),M.zc(7,"ion-input",41),M.Pc(8,"translate"),M.Dc(),M.Dc(),M.Ec(9,"ion-button",42),M.pd(10),M.Pc(11,"translate"),M.Dc(),M.nd(12,CoreLoginReconnectPage_form_29_ion_button_12_Template,3,3,"ion-button",43),M.Dc()}if(2&o){const o=M.Oc();M.Vc("formGroup",o.credForm),M.lc(4),M.qd(M.Qc(5,7,"core.login.password")),M.lc(3),M.Wc("placeholder",M.Qc(8,9,"core.login.password")),M.Vc("clearOnEdit",!1),M.lc(2),M.Vc("disabled",!o.credForm.valid),M.lc(1),M.rd(" ",M.Qc(11,11,"core.login.loginbutton")," "),M.lc(2),M.Vc("ngIf",o.showForgottenPassword)}}function CoreLoginReconnectPage_ng_container_30_Template(o,e){if(1&o){const o=M.Fc();M.Cc(0),M.Ec(1,"ion-button",45),M.Mc("click",(function CoreLoginReconnectPage_ng_container_30_Template_ion_button_click_1_listener(){M.fd(o);return M.Oc().openBrowserSSO()})),M.pd(2),M.Pc(3,"translate"),M.zc(4,"ion-icon",46),M.Dc(),M.Ec(5,"p",47),M.pd(6),M.Pc(7,"translate"),M.Dc(),M.Bc()}2&o&&(M.lc(2),M.rd(" ",M.Qc(3,2,"core.login.loginbutton")," "),M.lc(4),M.qd(M.Qc(7,4,"core.openinbrowserdescription")))}function CoreLoginReconnectPage_core_login_methods_31_Template(o,e){if(1&o&&M.zc(0,"core-login-methods",48),2&o){const o=M.Oc();M.Vc("siteConfig",o.siteConfig)("reconnect",!0)("siteUrl",o.siteUrl)("redirectData",o.redirectData)}}let U=(()=>{class CoreLoginReconnectPage{constructor(o){this.fb=o,this.showForgottenPassword=!0,this.showUserAvatar=!1,this.isBrowserSSO=!1,this.showScanQR=!1,this.showLoading=!0,this.reconnectAttempts=0,this.viewLeft=!1,this.eventThrown=!1,this.loginSuccessful=!1,this.username="";const e=l.c.getCurrentSite();this.isLoggedOut=!e||e.isLoggedOut(),this.credForm=o.group({password:["",s.F.required]})}ngOnInit(){return Object(r.a)(this,void 0,void 0,(function*(){try{this.siteId=f.a.getRequiredRouteParam("siteId");const o=f.a.getRouteParam("redirectPath"),e=f.a.getRouteParam("urlToOpen");(o||e)&&(this.redirectData={redirectPath:o,redirectOptions:f.a.getRouteParam("redirectOptions"),urlToOpen:e});const n=yield l.c.getSite(this.siteId);if(!n.infos)throw new m.a("Invalid site");this.siteUrl=n.getURL(),this.siteInfo={id:this.siteId,siteUrl:this.siteUrl,siteUrlWithoutProtocol:this.siteUrl.replace(/^https?:\/\//,"").toLowerCase(),fullname:n.infos.fullname,firstname:n.infos.firstname,lastname:n.infos.lastname,siteName:yield n.getSiteName(),userpictureurl:n.infos.userpictureurl,loggedOut:!0},this.username=n.infos.username,this.supportConfig=new P.a(n);const t=yield p.a.getAvailableSites();this.showUserAvatar=!t.length,yield this.checkSiteConfig(n),this.showLoading=!1}catch(o){return d.a.showErrorModal(o),this.cancel()}}))}ngOnDestroy(){this.viewLeft=!0,u.b.trigger(u.b.LOGIN_SITE_UNCHECKED,{config:this.siteConfig,loginSuccessful:this.loginSuccessful},this.siteId)}showHelp(){C.a.showHelp(O.I.instant("core.login.reconnecthelp"),O.I.instant("core.login.reconnectsupportsubject"),this.supportConfig)}checkSiteConfig(o){var e;return Object(r.a)(this,void 0,void 0,(function*(){this.siteConfig=yield _.a.ignoreErrors(o.getPublicConfig({readingStrategy:3})),this.siteConfig&&(this.showForgottenPassword=!p.a.isForgottenPasswordDisabled(this.siteConfig),this.exceededAttemptsHTML=p.a.buildExceededAttemptsHTML(!!(null===(e=this.supportConfig)||void 0===e?void 0:e.canContactSupport()),this.showForgottenPassword),this.eventThrown||this.viewLeft||(this.eventThrown=!0,u.b.trigger(u.b.LOGIN_SITE_CHECKED,{config:this.siteConfig})),this.isBrowserSSO=p.a.isSSOLoginNeeded(this.siteConfig.typeoflogin),yield l.c.checkApplication(this.siteConfig),this.logoUrl=p.a.getLogoUrl(this.siteConfig))}))}cancel(o){o&&(o.preventDefault(),o.stopPropagation()),this.isLoggedOut&&f.a.navigate("/login/sites",{reset:!0}),l.c.logout()}login(o){return Object(r.a)(this,void 0,void 0,(function*(){o.preventDefault(),o.stopPropagation(),a.a.closeKeyboard();const e=this.credForm.value.password;if(!e)return d.a.showErrorModal("core.login.passwordrequired",!0),void 0;if(!g.a.isOnline())return d.a.showErrorModal("core.networkerrormsg",!0),void 0;const n=yield d.a.showModalLoading();try{const o=yield l.c.getUserToken(this.siteUrl,this.username,e);yield l.c.updateSiteToken(this.siteUrl,this.username,o.token,o.privateToken),h.a.triggerFormSubmittedEvent(this.formElement,!0),yield l.c.updateSiteInfoByUrl(this.siteUrl,this.username),this.credForm.controls.password.reset(),this.loginSuccessful=!0,yield f.a.navigateToSiteHome({params:this.redirectData})}catch(o){p.a.treatUserTokenError(this.siteUrl,o,this.username,e),o.loggedout?this.cancel():"forcepasswordchangenotice"==o.errorcode?this.credForm.controls.password.reset():"invalidlogin"==o.errorcode&&this.reconnectAttempts++}finally{n.dismiss()}}))}exceededAttemptsClicked(o){o.preventDefault(),o.target instanceof HTMLAnchorElement&&this.forgottenPassword()}forgottenPassword(){p.a.forgottenPasswordClicked(this.siteUrl,this.username,this.siteConfig)}openBrowserSSO(){this.siteConfig&&p.a.openBrowserForSSOLogin(this.siteUrl,this.siteConfig.typeoflogin,void 0,this.siteConfig.launchurl,this.redirectData)}keyDown(o){"Escape"===o.key&&(o.preventDefault(),o.stopPropagation())}keyUp(o){"Escape"===o.key&&this.cancel(o)}}return CoreLoginReconnectPage.ɵfac=function CoreLoginReconnectPage_Factory(o){return new(o||CoreLoginReconnectPage)(M.yc(s.f))},CoreLoginReconnectPage.ɵcmp=M.sc({type:CoreLoginReconnectPage,selectors:[["page-core-login-reconnect"]],viewQuery:function CoreLoginReconnectPage_Query(o,e){var n;(1&o&&M.ud(S,!0),2&o)&&(M.dd(n=M.Nc())&&(e.formElement=n.first))},decls:32,vars:20,consts:[["slot","start"],["fill","clear",1,"ion-back-button",3,"click"],["ios","chevron-back","md","arrow-back-sharp","slot","icon-only","aria-hidden","true"],["slot","end"],["fill","clear",3,"click"],["slot","icon-only","name","far-circle-question","aria-hidden","true"],[1,"ion-padding",3,"keydown","keyup"],[3,"hideUntil"],[1,"list-item-limited-width"],["class","core-warning-card core-login-reconnect-warning",4,"ngIf"],[1,"ion-text-wrap","ion-text-center","core-login-info-box"],[1,"core-login-site"],["class","core-login-site-logo",4,"ngIf"],["class","ion-no-margin ion-no-padding core-sitename",4,"ngIf"],[1,"core-siteurl"],[1,"core-login-user"],["class","large-avatar",3,"user","linkProfile","siteId",4,"ngIf"],["class","core-login-fullname",4,"ngIf"],[3,"supportConfig","supportSubject",4,"ngIf"],[1,"core-login-methods"],["class","core-login-form",3,"formGroup","ngSubmit",4,"ngIf"],[4,"ngIf"],[3,"siteConfig","reconnect","siteUrl","redirectData",4,"ngIf"],[1,"core-warning-card","core-login-reconnect-warning"],["name","fas-triangle-exclamation","slot","start","aria-hidden","true"],[1,"core-login-site-logo"],["role","presentation","onError","this.src='assets/img/login_logo.png'","alt","",3,"src",4,"ngIf"],["src","assets/img/login_logo.png","role","presentation","alt","",4,"ngIf"],["role","presentation","onError","this.src='assets/img/login_logo.png'","alt","",3,"src"],["src","assets/img/login_logo.png","role","presentation","alt",""],[1,"ion-no-margin","ion-no-padding","core-sitename"],[3,"text","filter"],[1,"large-avatar",3,"user","linkProfile","siteId"],[1,"core-login-fullname"],[3,"supportConfig","supportSubject"],[3,"innerHTML","click"],[1,"core-login-form",3,"formGroup","ngSubmit"],["reconnectForm",""],[1,"ion-margin-bottom"],[1,"sr-only"],["name","password"],["name","password","type","password","formControlName","password","autocomplete","current-password","enterkeyhint","go","required","true",1,"core-ioninput-password",3,"placeholder","clearOnEdit"],["type","submit","expand","block",1,"ion-margin","core-login-login-button","ion-text-wrap",3,"disabled"],["expand","block","fill","clear","class","core-login-forgotten-password core-button-as-link ion-text-wrap",3,"click",4,"ngIf"],["expand","block","fill","clear",1,"core-login-forgotten-password","core-button-as-link","ion-text-wrap",3,"click"],["expand","block",1,"ion-margin","core-login-login-inbrowser-button","ion-text-wrap",3,"click"],["name","fas-up-right-from-square","slot","end","aria-hidden","true"],[1,"text-center","core-login-inbrowser"],[3,"siteConfig","reconnect","siteUrl","redirectData"]],template:function CoreLoginReconnectPage_Template(o,e){1&o&&(M.Ec(0,"ion-header"),M.Ec(1,"ion-toolbar"),M.Ec(2,"ion-buttons",0),M.Ec(3,"ion-button",1),M.Mc("click",(function CoreLoginReconnectPage_Template_ion_button_click_3_listener(o){return e.cancel(o)})),M.Pc(4,"translate"),M.zc(5,"ion-icon",2),M.Dc(),M.Dc(),M.Ec(6,"ion-title"),M.Ec(7,"h1"),M.pd(8),M.Pc(9,"translate"),M.Dc(),M.Dc(),M.Ec(10,"ion-buttons",3),M.Ec(11,"ion-button",4),M.Mc("click",(function CoreLoginReconnectPage_Template_ion_button_click_11_listener(){return e.showHelp()})),M.Pc(12,"translate"),M.zc(13,"ion-icon",5),M.Dc(),M.Dc(),M.Dc(),M.Dc(),M.Ec(14,"ion-content",6),M.Mc("keydown",(function CoreLoginReconnectPage_Template_ion_content_keydown_14_listener(o){return e.keyDown(o)}))("keyup",(function CoreLoginReconnectPage_Template_ion_content_keyup_14_listener(o){return e.keyUp(o)})),M.Ec(15,"core-loading",7),M.Ec(16,"div",8),M.nd(17,CoreLoginReconnectPage_ion_card_17_Template,7,3,"ion-card",9),M.Ec(18,"div",10),M.Ec(19,"div",11),M.nd(20,CoreLoginReconnectPage_div_20_Template,3,2,"div",12),M.nd(21,CoreLoginReconnectPage_p_21_Template,2,2,"p",13),M.Ec(22,"p",14),M.pd(23),M.Dc(),M.Dc(),M.Ec(24,"div",15),M.nd(25,CoreLoginReconnectPage_core_user_avatar_25_Template,1,3,"core-user-avatar",16),M.nd(26,CoreLoginReconnectPage_p_26_Template,2,2,"p",17),M.Dc(),M.nd(27,CoreLoginReconnectPage_core_login_exceeded_attempts_27_Template,3,5,"core-login-exceeded-attempts",18),M.Dc(),M.Ec(28,"div",19),M.nd(29,CoreLoginReconnectPage_form_29_Template,13,13,"form",20),M.nd(30,CoreLoginReconnectPage_ng_container_30_Template,8,6,"ng-container",21),M.nd(31,CoreLoginReconnectPage_core_login_methods_31_Template,1,4,"core-login-methods",22),M.Dc(),M.Dc(),M.Dc(),M.Dc()),2&o&&(M.lc(3),M.mc("aria-label",M.Qc(4,14,"core.back")),M.lc(5),M.qd(M.Qc(9,16,"core.login.reconnect")),M.lc(3),M.mc("aria-label",M.Qc(12,18,"core.help")),M.lc(4),M.Vc("hideUntil",!e.showLoading),M.lc(2),M.Vc("ngIf",!e.isLoggedOut),M.lc(3),M.Vc("ngIf",!e.showUserAvatar),M.lc(1),M.Vc("ngIf",null==e.siteInfo?null:e.siteInfo.siteName),M.lc(2),M.qd(e.siteUrl),M.lc(2),M.Vc("ngIf",e.showUserAvatar),M.lc(1),M.Vc("ngIf",null==e.siteInfo?null:e.siteInfo.fullname),M.lc(1),M.Vc("ngIf",e.exceededAttemptsHTML&&e.supportConfig&&e.reconnectAttempts>=3),M.lc(2),M.Vc("ngIf",!e.isBrowserSSO),M.lc(1),M.Vc("ngIf",e.isBrowserSSO),M.lc(1),M.Vc("ngIf",e.siteConfig))},directives:[b.C,b.Ab,b.m,w.a,b.l,b.D,b.yb,v.a,L.a,b.v,k.a,x.t,b.n,b.I,b.O,y.a,E.a,R.a,s.H,s.s,s.k,I.a,b.H,b.Pb,s.r,s.i,s.C,T.a],pipes:[D.d],styles:['[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--background:var(--core-login-background);--ion-item-background:var(--core-login-background)}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--color:var(--core-login-text-color)}[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .core-oauth-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]{--color:var(--core-login-text-color);-webkit-text-decoration-color:var(--core-login-text-color);text-decoration-color:var(--core-login-text-color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--core-login-text-color)}[_nghost-%COMP%]   .core-login-reconnect-warning[_ngcontent-%COMP%]{margin:0 0 32px}[_nghost-%COMP%]   .core-login-info-box[_ngcontent-%COMP%]{margin-bottom:32px}[_nghost-%COMP%]   .core-login-info-box[_ngcontent-%COMP%]   .core-login-site[_ngcontent-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]{width:90%;max-width:300px;margin:0 auto}[_nghost-%COMP%]   .core-login-info-box[_ngcontent-%COMP%]   .core-login-site[_ngcontent-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:104px}[_nghost-%COMP%]   .core-login-info-box[_ngcontent-%COMP%]   .core-login-site[_ngcontent-%COMP%]   .core-sitename[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:8px}[_nghost-%COMP%]   .core-login-info-box[_ngcontent-%COMP%]   .core-login-site[_ngcontent-%COMP%]   .core-siteurl[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:0}[_nghost-%COMP%]   .core-login-info-box[_ngcontent-%COMP%]   .core-login-site[_ngcontent-%COMP%] + .core-login-user[_ngcontent-%COMP%]{margin-top:24px}[_nghost-%COMP%]   core-user-avatar.large-avatar[_ngcontent-%COMP%]{--core-avatar-size:var(--core-large-avatar-size)}[_nghost-%COMP%]   .core-login-fullname[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:0}[_nghost-%COMP%]   .core-login-methods[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .item.item-input[_ngcontent-%COMP%]{margin-bottom:16px}[_nghost-%COMP%]   .core-login-methods[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%], [_nghost-%COMP%]   .core-login-methods[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{--background:var(--core-login-input-background);--color:var(--core-login-input-color)}[_nghost-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-left:0;margin-right:0}[_nghost-%COMP%]   .core-login-forgotten-password[_ngcontent-%COMP%]{text-decoration:underline}[_nghost-%COMP%]   .core-sitename[_ngcontent-%COMP%], [_nghost-%COMP%]   .core-siteurl[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .core-login-methods-separator[_ngcontent-%COMP%]{position:relative;padding:8px 0}[_nghost-%COMP%]   .core-login-methods-separator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:var(--core-login-background);padding:0 8px}[_nghost-%COMP%]   .core-login-methods-separator[_ngcontent-%COMP%]:before{height:1px;position:absolute;top:50%;left:0;right:0;border-bottom:1px solid var(--gray-300);content:"";z-index:-1}[_nghost-%COMP%]   .core-login-login-button[_ngcontent-%COMP%]{margin-top:32px}[_nghost-%COMP%]   .core-login-login-inbrowser-button[_ngcontent-%COMP%]{margin-bottom:8px}[_nghost-%COMP%]   p.core-login-inbrowser[_ngcontent-%COMP%]{font-size:12px;margin-top:8px;margin-bottom:8px}[_nghost-%COMP%]   .core-login-sign-up[_ngcontent-%COMP%]{margin-top:8px;border-top:1px solid var(--gray-300)}[_nghost-%COMP%]   .core-login-identity-providers[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   .core-login-sign-up[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:16px;margin-bottom:8px;font-size:16px}html.dark[_nghost-%COMP%]   core-loading[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   core-loading[_ngcontent-%COMP%]{--loading-background:var(--core-login-background-dark);--loading-text-color:#fff;--loading-spinner:#fff}']}),CoreLoginReconnectPage})();const z=[{path:"",component:U}];let F=(()=>{class CoreLoginReconnectLazyModule{}return CoreLoginReconnectLazyModule.ɵmod=M.wc({type:CoreLoginReconnectLazyModule}),CoreLoginReconnectLazyModule.ɵinj=M.vc({factory:function CoreLoginReconnectLazyModule_Factory(o){return new(o||CoreLoginReconnectLazyModule)},imports:[[t.m.forChild(z),i.a,c.a],t.m]}),CoreLoginReconnectLazyModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&M.kd(F,{declarations:[U],imports:[t.m,i.a,c.a],exports:[t.m]}))}}]);