(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{tVmb:function(t,e,n){"use strict";n.d(e,"a",(function(){return k}));var i=n("mrSG"),o=n("fjkH"),a=n("vPQ6"),s=n("35jd"),r=n("j3ag"),c=n("bFG1"),b=n("4G9N"),d=n("pHTc"),l=n("pLZG"),g=n("tyNb"),u=n("R0Ic"),_=n("9+EE"),h=n("6s78"),M=n("3j9v"),m=n("r2Z7"),p=n("fXoL"),P=n("TEn/"),O=n("ofXK"),C=n("3CSS"),f=n("C1x5"),v=n("sYmb");const y=["mainTabs"];function CoreMainMenuPage_ion_spinner_3_Template(t,e){1&t&&(p.zc(0,"ion-spinner"),p.Pc(1,"translate")),2&t&&p.mc("aria-label",p.Qc(1,1,"core.loading"))}function CoreMainMenuPage_core_user_menu_button_4_Template(t,e){1&t&&p.zc(0,"core-user-menu-button",14),2&t&&p.Vc("alwaysShow",!0)}function CoreMainMenuPage_ion_tab_button_5_ion_badge_5_Template(t,e){if(1&t&&(p.Ec(0,"ion-badge",19),p.pd(1),p.Dc()),2&t){const t=p.Oc().$implicit;p.lc(1),p.qd(t.badge)}}const _c1=function(t){return{$a:t}};function CoreMainMenuPage_ion_tab_button_5_span_9_Template(t,e){if(1&t&&(p.Ec(0,"span",9),p.pd(1),p.Pc(2,"translate"),p.Dc()),2&t){const t=p.Oc().$implicit;p.lc(1),p.rd(" ",p.Rc(2,1,t.badgeA11yText,p.ad(4,_c1,t.badge))," ")}}function CoreMainMenuPage_ion_tab_button_5_Template(t,e){if(1&t){const t=p.Fc();p.Ec(0,"ion-tab-button",15),p.Mc("keydown",(function CoreMainMenuPage_ion_tab_button_5_Template_ion_tab_button_keydown_0_listener(n){p.fd(t);const i=e.$implicit;return p.Oc().tabAction.keyDown(i.page,n)}))("keyup",(function CoreMainMenuPage_ion_tab_button_5_Template_ion_tab_button_keyup_0_listener(n){p.fd(t);const i=e.$implicit;return p.Oc().tabAction.keyUp(i.page,n)})),p.zc(1,"ion-icon",16),p.Ec(2,"ion-label",8),p.pd(3),p.Pc(4,"translate"),p.Dc(),p.nd(5,CoreMainMenuPage_ion_tab_button_5_ion_badge_5_Template,2,1,"ion-badge",17),p.Ec(6,"span",9),p.pd(7),p.Pc(8,"translate"),p.Dc(),p.nd(9,CoreMainMenuPage_ion_tab_button_5_span_9_Template,3,6,"span",18),p.Dc()}if(2&t){const t=e.$implicit,n=p.Oc();p.nc(t.class),p.Vc("hidden",!n.loaded&&t.hide)("tab",t.page)("disabled",t.hide)("selected",t.page===n.selectedTab)("tabindex",n.selectedTab==t.page?0:-1),p.mc("aria-controls",t.id),p.lc(1),p.Vc("name",t.icon),p.lc(2),p.qd(p.Qc(4,14,t.title)),p.lc(2),p.Vc("ngIf",t.badge),p.lc(2),p.qd(p.Qc(8,16,t.title)),p.lc(2),p.Vc("ngIf",t.badge&&t.badgeA11yText)}}function CoreMainMenuPage_ion_icon_14_Template(t,e){1&t&&p.zc(0,"ion-icon",20)}let k=(()=>{class CoreMainMenuPage{constructor(){this.tabs=[],this.loaded=!1,this.showTabs=!1,this.tabsPlacement="bottom",this.morePageName=a.b.MORE_PAGE_NAME,this.isMainScreen=!1,this.moreBadge=!1,this.visibility="hidden",this.selectHistory=[],this.backButtonFunction=t=>this.backButtonClicked(t),this.tabAction=new CoreMainMenuRoleTab(this),this.logger=M.a.getInstance("CoreMainMenuPage"),this.navSubscription=r.D.events.pipe(Object(l.a)((t=>t instanceof g.c))).subscribe((()=>{var t;this.isMainScreen=!(null===(t=this.mainTabs)||void 0===t?void 0:t.outlet.canGoBack()),this.updateVisibility()}))}ngOnInit(){var t;return Object(i.a)(this,void 0,void 0,(function*(){this.showTabs=!0,this.urlToOpen=d.a.getRouteParam("urlToOpen"),this.redirectPath=d.a.getRouteParam("redirectPath"),this.redirectOptions=d.a.getRouteParam("redirectOptions"),this.isMainScreen=!(null===(t=this.mainTabs)||void 0===t?void 0:t.outlet.canGoBack()),this.updateVisibility(),this.subscription=s.a.getHandlersObservable().subscribe((t=>{const e=this.allHandlers;this.allHandlers=t,this.updateHandlers(e)})),this.badgeUpdateObserver=o.b.on(a.b.MAIN_MENU_HANDLER_BADGE_UPDATED,(t=>{t.siteId==_.c.getCurrentSiteId()&&this.updateMoreBadge()})),this.resizeListener=h.a.onWindowResize((()=>{this.updateHandlers()})),document.addEventListener("ionBackButton",this.backButtonFunction),m.a.isIOS()&&(this.keyboardObserver=o.b.on(o.b.KEYBOARD_CHANGE,(t=>{0===t&&(this.updateHandlers(),setTimeout((()=>{this.updateHandlers()}),250))}))),o.b.trigger(o.b.MAIN_HOME_LOADED)}))}updateHandlers(t){return Object(i.a)(this,void 0,void 0,(function*(){if(!this.allHandlers)return;this.tabsPlacement=a.a.getTabPlacement(),this.updateVisibility();const e=this.allHandlers.filter((t=>!t.onlyInMore)).slice(0,a.a.getNumItems()),n=[];for(let t=0;t<e.length;t++){const i=e[t],o=this.tabs.find((t=>t.page==i.page));o&&(o.hide=!1),i.hide=!1,i.id=i.id||"core-mainmenu-"+c.a.getUniqueId("CoreMainMenuPage"),n.push(o||i)}this.tabs=n,this.tabs.sort(((t,e)=>(e.priority||0)-(t.priority||0))),this.updateMoreBadge();let i=[];if(t){const e=this.allHandlers;i=t.map((t=>t.page)).filter((t=>!e.some((e=>e.page===t))))}const o=d.a.getCurrentMainMenuTab();if(this.loaded=s.a.areHandlersLoaded(),this.loaded&&(!o||i.includes(o))){yield c.a.nextTick();const t=this.tabs[0]?this.tabs[0].page:this.morePageName,e=this.tabs[0]?this.tabs[0].pageParams:{};this.logger.debug(`Select first tab: ${t}.`,this.tabs),d.a.navigateToSitePath(t,{preferCurrentTab:!1,params:Object.assign({urlToOpen:this.urlToOpen,redirectPath:this.redirectPath,redirectOptions:this.redirectOptions},e)})}}))}updateMoreBadge(){if(!this.allHandlers)return;const t=this.allHandlers.filter((t=>!t.onlyInMore)).slice(0,a.a.getNumItems());this.moreBadge=this.allHandlers.some((e=>-1==t.indexOf(e)&&!!e.badge))}ngOnDestroy(){var t,e,n,i,o;null===(t=this.subscription)||void 0===t?void 0:t.unsubscribe(),null===(e=this.navSubscription)||void 0===e||e.unsubscribe(),document.removeEventListener("ionBackButton",this.backButtonFunction),null===(n=this.keyboardObserver)||void 0===n||n.off(),null===(i=this.badgeUpdateObserver)||void 0===i||i.off(),null===(o=this.resizeListener)||void 0===o||o.off()}tabChanged(t){var e;this.selectedTab=t.tab,this.firstSelectedTab=null!==(e=this.firstSelectedTab)&&void 0!==e?e:t.tab,this.selectHistory.push(t.tab)}updateVisibility(){const t="side"==this.tabsPlacement?"":this.isMainScreen?"visible":"hidden";t!==this.visibility&&(this.visibility=t,this.notifyVisibilityUpdated())}backButtonClicked(t){t.detail.register(-10,(t=>Object(i.a)(this,void 0,void 0,(function*(){var e,n;if(yield this.currentRouteIsMainMenuRoot()){if(this.selectHistory.length>1){const t=this.selectHistory[this.selectHistory.length-2];return this.selectHistory=this.selectHistory.filter((e=>this.selectedTab!=e&&t!=e)),null===(e=this.mainTabs)||void 0===e||e.select(t),void 0}if(this.firstSelectedTab&&this.selectedTab!=this.firstSelectedTab)return this.selectHistory=[],null===(n=this.mainTabs)||void 0===n||n.select(this.firstSelectedTab),void 0;t()}}))))}currentRouteIsMainMenuRoot(){return Object(i.a)(this,void 0,void 0,(function*(){return!!d.a.getCurrentRoute({routeData:{mainMenuTabRoot:d.a.getCurrentMainMenuTab()}})}))}notifyVisibilityUpdated(){return Object(i.a)(this,void 0,void 0,(function*(){yield c.a.nextTick(),yield c.a.wait(500),yield c.a.nextTick(),o.b.trigger(a.b.MAIN_MENU_VISIBILITY_UPDATED)}))}}return CoreMainMenuPage.ɵfac=function CoreMainMenuPage_Factory(t){return new(t||CoreMainMenuPage)},CoreMainMenuPage.ɵcmp=p.sc({type:CoreMainMenuPage,selectors:[["page-core-mainmenu"]],viewQuery:function CoreMainMenuPage_Query(t,e){var n;(1&t&&p.ud(y,!0),2&t)&&(p.dd(n=p.Nc())&&(e.mainTabs=n.first))},decls:22,vars:27,consts:[[3,"hidden","ionTabsDidChange"],["mainTabs",""],["slot","bottom",1,"mainmenu-tabs"],[4,"ngIf"],[3,"alwaysShow",4,"ngIf"],["layout","label-hide",3,"hidden","tab","disabled","class","selected","tabindex","keydown","keyup",4,"ngFor","ngForOf"],["layout","label-hide",3,"hidden","tab","tabindex","keydown","keyup"],["name","ellipsis-horizontal","aria-hidden","true",1,"core-tab-icon"],["aria-hidden","true"],[1,"sr-only"],["class","core-tab-badge","name","fas-circle","aria-hidden","true",4,"ngIf"],[1,"core-network-message",3,"hidden"],[1,"core-online-message"],[1,"core-offline-message"],[3,"alwaysShow"],["layout","label-hide",3,"hidden","tab","disabled","selected","tabindex","keydown","keyup"],["aria-hidden","true",1,"core-tab-icon",3,"name"],["class","core-tab-badge","aria-hidden","true",4,"ngIf"],["class","sr-only",4,"ngIf"],["aria-hidden","true",1,"core-tab-badge"],["name","fas-circle","aria-hidden","true",1,"core-tab-badge"]],template:function CoreMainMenuPage_Template(t,e){1&t&&(p.Ec(0,"ion-tabs",0,1),p.Mc("ionTabsDidChange",(function CoreMainMenuPage_Template_ion_tabs_ionTabsDidChange_0_listener(t){return e.tabChanged(t)})),p.Ec(2,"ion-tab-bar",2),p.nd(3,CoreMainMenuPage_ion_spinner_3_Template,2,3,"ion-spinner",3),p.nd(4,CoreMainMenuPage_core_user_menu_button_4_Template,1,1,"core-user-menu-button",4),p.nd(5,CoreMainMenuPage_ion_tab_button_5_Template,10,18,"ion-tab-button",5),p.Ec(6,"ion-tab-button",6),p.Mc("keydown",(function CoreMainMenuPage_Template_ion_tab_button_keydown_6_listener(t){return e.tabAction.keyDown(e.morePageName,t)}))("keyup",(function CoreMainMenuPage_Template_ion_tab_button_keyup_6_listener(t){return e.tabAction.keyUp(e.morePageName,t)})),p.zc(7,"ion-icon",7),p.Ec(8,"ion-label",8),p.pd(9),p.Pc(10,"translate"),p.Dc(),p.Ec(11,"span",9),p.pd(12),p.Pc(13,"translate"),p.Dc(),p.nd(14,CoreMainMenuPage_ion_icon_14_Template,1,0,"ion-icon",10),p.Dc(),p.Dc(),p.Dc(),p.Ec(15,"div",11),p.Ec(16,"div",12),p.pd(17),p.Pc(18,"translate"),p.Dc(),p.Ec(19,"div",13),p.pd(20),p.Pc(21,"translate"),p.Dc(),p.Dc()),2&t&&(p.nc("placement-"+e.tabsPlacement),p.qc("tabshidden",!e.isMainScreen&&"bottom"==e.tabsPlacement),p.Vc("hidden",!e.showTabs),p.lc(2),p.Vc("@menuVisibilityAnimation",e.visibility),p.lc(1),p.Vc("ngIf",!e.loaded),p.lc(1),p.Vc("ngIf",e.loaded&&"side"==e.tabsPlacement),p.lc(1),p.Vc("ngForOf",e.tabs),p.lc(1),p.Vc("hidden",!e.loaded)("tab",e.morePageName)("tabindex",e.selectedTab==e.morePageName?0:-1),p.mc("aria-controls",e.morePageName),p.lc(3),p.qd(p.Qc(10,19,"core.more")),p.lc(3),p.qd(p.Qc(13,21,"core.more")),p.lc(2),p.Vc("ngIf",e.moreBadge),p.lc(1),p.Vc("hidden",!e.showTabs),p.lc(2),p.rd(" ",p.Qc(18,23,"core.youreonline")," "),p.lc(3),p.rd(" ",p.Qc(21,25,"core.youreoffline")," "))},directives:[P.ub,P.sb,O.t,O.s,P.tb,P.D,C.a,P.O,P.qb,f.a,P.k],pipes:[v.d],styles:["[_nghost-%COMP%]{--network-margin-bottom:0px;--network-message-background:transparent;--network-message-offline:none;--network-message-online:none;--network-message-height:16px}[_nghost-%COMP%]   ion-tabs[_ngcontent-%COMP%]{--menutabbar-size:var(--bottom-tabs-size)}[_nghost-%COMP%]   ion-tabs.placement-side[_ngcontent-%COMP%]{--menutabbar-size:var(--side-tabs-size)}.core-offline[_nghost-%COMP%]   .core-network-message[_ngcontent-%COMP%], .core-offline   [_nghost-%COMP%]   .core-network-message[_ngcontent-%COMP%], .core-online[_nghost-%COMP%]   .core-network-message[_ngcontent-%COMP%], .core-online   [_nghost-%COMP%]   .core-network-message[_ngcontent-%COMP%]{visibility:visible;height:var(--network-message-height);line-height:var(--network-message-height);padding-bottom:calc(var(--ion-safe-area-bottom, 0px) + var(--network-message-height))}.core-online[_nghost-%COMP%], .core-online   [_nghost-%COMP%]{--network-margin-bottom:8px;--network-message-background:var(--success);--network-message-online:block}.core-offline[_nghost-%COMP%], .core-offline   [_nghost-%COMP%]{--network-margin-bottom:8px;--network-message-background:var(--danger);--network-message-offline:block}ion-tab-bar[_ngcontent-%COMP%]{height:var(--menutabbar-size)}ion-tab-bar[_ngcontent-%COMP%]   core-user-menu-button[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button.tab-selected[_ngcontent-%COMP%]{background:var(--background-selected)}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-icon[_ngcontent-%COMP%]{text-overflow:unset;overflow:visible;text-align:center;font-size:24px}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%]{font-size:12px;font-weight:700;border-radius:10px;padding-left:6px;padding-right:6px;line-height:14px;--background:var(--core-bottom-tabs-badge-color);--color:var(--core-bottom-tabs-badge-text-color)}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%]{color:var(--core-bottom-tabs-badge-color);padding:3px 6px 2px;top:8px;min-width:12px;font-size:8px;font-weight:400;box-sizing:border-box;position:absolute;z-index:1}@supports (inset-inline-start:0){ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%]{inset-inline-start:calc(50% + 6px)}}@supports not (inset-inline-start:0){ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%]{left:calc(50% + 6px)}[dir=rtl][_nghost-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%], [dir=rtl][_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%]{left:unset;right:unset;right:calc(50% + 6px)}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%]:dir(rtl){left:unset;right:unset;right:calc(50% + 6px)}}ion-tabs.placement-bottom[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-icon[_ngcontent-%COMP%]{margin-bottom:var(--network-margin-bottom);transition:margin .5s ease-in-out,transform .3s ease-in-out}ion-tabs.placement-bottom[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%], ion-tabs.placement-bottom[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%]{top:8px}ion-tabs.placement-bottom.tabshidden[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]{pointer-events:none}ion-tabs.placement-bottom.tabshidden[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]{height:auto}ion-tabs.placement-side[_ngcontent-%COMP%]{flex-direction:row}ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]{order:-1;width:var(--menutabbar-size);height:calc(100% - var(--ion-safe-area-top) - var(--ion-safe-area-bottom));flex-direction:column;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;justify-content:flex-start;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:0;padding-inline-end:0;padding-top:var(--ion-safe-area-top);padding-bottom:var(--ion-safe-area-bottom)}ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]{--padding-start:0;--padding-end:0}@supports (inset-inline-start:0){ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%]{inset-inline-start:auto;inset-inline-end:1px}}@supports not (inset-inline-start:0){ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%]{left:auto;right:1px}[dir=rtl][_nghost-%COMP%]   ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%], [dir=rtl][_ngcontent-%COMP%]   ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%]{left:unset;right:unset;left:1px;right:auto}ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%]:dir(rtl){left:unset;right:unset;left:1px;right:auto}}ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   core-user-menu-button[_ngcontent-%COMP%], ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]{width:100%;min-height:var(--menutabbar-size);flex:0}ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   core-user-menu-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%], ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   core-user-menu-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%], ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%], ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%]{top:calc(50% - 20px)}.core-network-message[_ngcontent-%COMP%]{background:var(--network-message-background);pointer-events:none;position:absolute;bottom:0;left:0;right:0;padding-left:10px;padding-right:10px;text-align:center;color:#fff;visibility:hidden;height:0;transition:all .5s ease-in-out;opacity:.8;z-index:12;font-size:12px}.core-network-message[_ngcontent-%COMP%]   .core-online-message[_ngcontent-%COMP%]{display:var(--network-message-online)}.core-network-message[_ngcontent-%COMP%]   .core-offline-message[_ngcontent-%COMP%]{display:var(--network-message-offline)}"],data:{animation:[Object(u.k)("menuVisibilityAnimation",[Object(u.h)("hidden",Object(u.i)({height:0,visibility:"hidden",transform:"translateY(100%)"})),Object(u.h)("visible",Object(u.i)({visibility:"visible"})),Object(u.j)("visible => hidden",[Object(u.i)({transform:"translateY(0)"}),Object(u.e)("500ms ease-in-out",Object(u.i)({transform:"translateY(100%)"}))]),Object(u.j)("hidden => visible",[Object(u.i)({transform:"translateY(100%)",visibility:"visible",height:"*"}),Object(u.e)("500ms ease-in-out",Object(u.i)({transform:"translateY(0)"}))])])]}}),CoreMainMenuPage})();class CoreMainMenuRoleTab extends b.a{getSelectableTabs(){const t=this.componentInstance.tabs.filter((t=>!t.hide)).map((t=>({id:t.id||t.page,findIndex:t.page})));return t.push({id:this.componentInstance.morePageName,findIndex:this.componentInstance.morePageName}),t}isHorizontal(){return"bottom"==this.componentInstance.tabsPlacement}selectTab(t){var e;null===(e=this.componentInstance.mainTabs)||void 0===e?void 0:e.select(t)}}}}]);