(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{UKik:function(e,n,t){"use strict";t.r(n),t.d(n,"AddonCompetencyLearningPlansLazyModule",(function(){return H}));var c=t("tyNb"),a=t("vY5A"),o=t("Y+03"),i=t("L3Fv"),l=t("mrSG"),d=t("3LXp"),r=t("pHTc"),s=t("eoiU"),p=t("baaQ"),m=t("CvRw"),_=t("RJwM"),u=t("FBtE"),g=t("qjHM");class competency_plans_source_AddonCompetencyPlansSource extends m.a{constructor(e){super(),this.USER_ID=e}static getSourceId(e){return e?String(e):"current-user"}getItemPath(e){return`${e.id}/${_.a}`}getItemQueryParams(){return this.USER_ID?{userId:this.USER_ID}:{}}invalidateCache(){return Object(l.a)(this,void 0,void 0,(function*(){yield u.a.invalidateLearningPlans(this.USER_ID)}))}loadPageItems(){return Object(l.a)(this,void 0,void 0,(function*(){const e=yield u.a.getLearningPlans(this.USER_ID);return e.forEach((e=>{switch(e.statusname=g.a.getPlanStatusName(e.status),e.status){case u.b.STATUS_ACTIVE:e.statuscolor="success";break;case u.b.STATUS_COMPLETE:e.statuscolor="danger";break;default:e.statuscolor="warning"}})),{items:e}}))}}var y=t("EoRH"),P=t("l4/z"),f=t("D7J2"),h=t("8vmT"),E=t("fXoL"),b=t("TEn/"),D=t("ofXK"),C=t("nt/U"),A=t("OZH1"),I=t("PgjG"),L=t("hMzs"),v=t("FeAf"),T=t("TKc2"),x=t("sYmb"),V=t("uYHD");function AddonCompetencyPlanPage_h1_6_Template(e,n){if(1&e&&(E.Ec(0,"h1"),E.zc(1,"core-format-text",7),E.Dc()),2&e){const e=E.Oc();E.lc(1),E.Vc("text",e.plan.plan.name)("contextInstanceId",e.plan.plan.userid)}}function AddonCompetencyPlanPage_ion_card_12_Template(e,n){if(1&e&&(E.Ec(0,"ion-card"),E.Ec(1,"ion-item",8),E.Ec(2,"ion-label"),E.zc(3,"core-user-avatar",9),E.Ec(4,"p",10),E.pd(5),E.Dc(),E.Dc(),E.Dc(),E.Dc()),2&e){const e=E.Oc();E.lc(3),E.Vc("user",e.user),E.lc(2),E.qd(e.user.fullname)}}function AddonCompetencyPlanPage_ion_card_13_ion_item_2_Template(e,n){if(1&e&&(E.Ec(0,"ion-item",8),E.Ec(1,"ion-label"),E.Ec(2,"p"),E.zc(3,"core-format-text",7),E.Dc(),E.Dc(),E.Dc()),2&e){const e=E.Oc(2);E.lc(3),E.Vc("text",e.plan.plan.description)("contextInstanceId",e.plan.plan.userid)}}function AddonCompetencyPlanPage_ion_card_13_ion_item_10_Template(e,n){if(1&e&&(E.Ec(0,"ion-item",8),E.Ec(1,"ion-label"),E.Ec(2,"p",10),E.pd(3),E.Pc(4,"translate"),E.Dc(),E.Ec(5,"p"),E.pd(6),E.Pc(7,"coreFormatDate"),E.Dc(),E.Dc(),E.Dc()),2&e){const e=E.Oc(2);E.lc(3),E.qd(E.Qc(4,2,"addon.competency.duedate")),E.lc(3),E.qd(E.Qc(7,4,1e3*e.plan.plan.duedate))}}function AddonCompetencyPlanPage_ion_card_13_ion_item_11_Template(e,n){if(1&e&&(E.Ec(0,"ion-item",8),E.Ec(1,"ion-label"),E.Ec(2,"p",10),E.pd(3),E.Pc(4,"translate"),E.Dc(),E.Ec(5,"p"),E.zc(6,"core-format-text",14),E.Dc(),E.Dc(),E.Dc()),2&e){const e=E.Oc(2);E.lc(3),E.qd(E.Qc(4,3,"addon.competency.template")),E.lc(3),E.Vc("text",e.plan.plan.template.shortname)("contextInstanceId",0)}}const _c0=function(e,n){return{x:e,y:n}},_c1=function(e){return{$a:e}};function AddonCompetencyPlanPage_ion_card_13_Template(e,n){if(1&e&&(E.Ec(0,"ion-card"),E.Ec(1,"ion-list"),E.nd(2,AddonCompetencyPlanPage_ion_card_13_ion_item_2_Template,4,2,"ion-item",11),E.Ec(3,"ion-item",8),E.Ec(4,"ion-label"),E.Ec(5,"p",10),E.pd(6),E.Pc(7,"translate"),E.Dc(),E.Ec(8,"p"),E.pd(9),E.Dc(),E.Dc(),E.Dc(),E.nd(10,AddonCompetencyPlanPage_ion_card_13_ion_item_10_Template,8,6,"ion-item",11),E.nd(11,AddonCompetencyPlanPage_ion_card_13_ion_item_11_Template,7,5,"ion-item",11),E.Ec(12,"ion-item",8),E.Ec(13,"ion-label",12),E.Ec(14,"p",10),E.pd(15),E.Pc(16,"translate"),E.Dc(),E.Ec(17,"p"),E.pd(18),E.Pc(19,"translate"),E.Dc(),E.zc(20,"core-progress-bar",13),E.Dc(),E.Dc(),E.Dc(),E.Dc()),2&e){const e=E.Oc();E.lc(2),E.Vc("ngIf",e.plan.plan.description),E.lc(4),E.qd(E.Qc(7,11,"addon.competency.status")),E.lc(3),E.qd(e.plan.plan.statusname),E.lc(1),E.Vc("ngIf",e.plan.plan.duedate>0),E.lc(1),E.Vc("ngIf",e.plan.plan.template),E.lc(2),E.Xc("id","addon-competency-plan-",e.plan.plan.id,"-progress"),E.lc(2),E.qd(E.Qc(16,13,"addon.competency.progress")),E.lc(3),E.rd(" ",E.Rc(19,15,"addon.competency.xcompetenciesproficientoutofy",E.ad(21,_c1,E.bd(18,_c0,e.plan.proficientcompetencycount,e.plan.competencycount)))," "),E.lc(2),E.Xc("ariaDescribedBy","addon-competency-plan-",e.plan.plan.id,"-progress"),E.Vc("progress",e.plan.proficientcompetencypercentage)("text",e.plan.proficientcompetencypercentageformatted)}}function AddonCompetencyPlanPage_ion_card_14_ion_item_6_Template(e,n){1&e&&(E.Ec(0,"ion-item",8),E.Ec(1,"ion-label"),E.Ec(2,"p"),E.pd(3),E.Pc(4,"translate"),E.Dc(),E.Dc(),E.Dc()),2&e&&(E.lc(3),E.qd(E.Qc(4,1,"addon.competency.nocompetencies")))}function AddonCompetencyPlanPage_ion_card_14_ion_item_7_ion_badge_6_Template(e,n){if(1&e&&(E.Ec(0,"ion-badge",18),E.pd(1),E.Dc()),2&e){const e=E.Oc().$implicit;E.Vc("color",e.usercompetencyplan.proficiency?"success":"danger"),E.lc(1),E.rd(" ",e.usercompetencyplan.gradename," ")}}function AddonCompetencyPlanPage_ion_card_14_ion_item_7_ion_badge_7_Template(e,n){if(1&e&&(E.Ec(0,"ion-badge",18),E.pd(1),E.Dc()),2&e){const e=E.Oc().$implicit;E.Vc("color",e.usercompetency.proficiency?"success":"danger"),E.lc(1),E.rd(" ",e.usercompetency.gradename," ")}}function AddonCompetencyPlanPage_ion_card_14_ion_item_7_Template(e,n){if(1&e){const e=E.Fc();E.Ec(0,"ion-item",16),E.Mc("click",(function AddonCompetencyPlanPage_ion_card_14_ion_item_7_Template_ion_item_click_0_listener(){E.fd(e);const t=n.$implicit;return E.Oc(2).competencies.select(t)})),E.Ec(1,"ion-label"),E.Ec(2,"p",10),E.zc(3,"core-format-text",7),E.Ec(4,"em"),E.pd(5),E.Dc(),E.Dc(),E.Dc(),E.nd(6,AddonCompetencyPlanPage_ion_card_14_ion_item_7_ion_badge_6_Template,2,2,"ion-badge",17),E.nd(7,AddonCompetencyPlanPage_ion_card_14_ion_item_7_ion_badge_7_Template,2,2,"ion-badge",17),E.Dc()}if(2&e){const e=n.$implicit,t=E.Oc(2);E.mc("aria-label",e.competency.shortname),E.lc(3),E.Vc("text",e.competency.shortname)("contextInstanceId",t.plan.plan.userid),E.lc(2),E.qd(e.competency.idnumber),E.lc(1),E.Vc("ngIf",e.usercompetencyplan),E.lc(1),E.Vc("ngIf",!e.usercompetencyplan)}}function AddonCompetencyPlanPage_ion_card_14_Template(e,n){if(1&e&&(E.Ec(0,"ion-card"),E.Ec(1,"ion-card-header",8),E.Ec(2,"ion-card-title"),E.pd(3),E.Pc(4,"translate"),E.Dc(),E.Dc(),E.Ec(5,"ion-list"),E.nd(6,AddonCompetencyPlanPage_ion_card_14_ion_item_6_Template,5,3,"ion-item",11),E.nd(7,AddonCompetencyPlanPage_ion_card_14_ion_item_7_Template,8,6,"ion-item",15),E.Dc(),E.Dc()),2&e){const e=E.Oc();E.lc(3),E.qd(E.Qc(4,3,"addon.competency.learningplancompetencies")),E.lc(3),E.Vc("ngIf",0==e.plan.competencycount),E.lc(1),E.Vc("ngForOf",e.competencies.items)}}let w=(()=>{class AddonCompetencyPlanPage{constructor(){this.logView=h.a.once((()=>this.performLogView()));try{const e=r.a.getRequiredRouteNumberParam("planId"),n=r.a.getRouteNumberParam("userId"),t=p.a.getOrCreateSource(competency_plans_source_AddonCompetencyPlansSource,[n]),c=p.a.getOrCreateSource(P.a,[e]);this.competencies=new y.a(c,AddonCompetencyPlanPage),this.plans=new s.a(t)}catch(e){return d.a.showErrorModal(e),r.a.back(),void 0}}get plan(){return this.competencies.getSource().plan}get user(){return this.competencies.getSource().user}ngOnInit(){return Object(l.a)(this,void 0,void 0,(function*(){yield this.fetchLearningPlan(),yield this.plans.start(),yield this.competencies.start()}))}ngOnDestroy(){this.plans.destroy(),this.competencies.destroy()}fetchLearningPlan(){return Object(l.a)(this,void 0,void 0,(function*(){try{yield this.competencies.getSource().reload(),this.logView()}catch(e){d.a.showErrorModalDefault(e,"Error getting learning plan data.")}}))}refreshLearningPlan(e){return Object(l.a)(this,void 0,void 0,(function*(){yield this.competencies.getSource().invalidateCache(),this.fetchLearningPlan().finally((()=>{null==e?void 0:e.complete()}))}))}performLogView(){if(!this.plan)return;const e=this.competencies.getSource().PLAN_ID;f.a.logEvent({type:f.b.VIEW_ITEM_LIST,ws:"tool_lp_data_for_plan_page",name:this.plan.plan.name,data:{category:"competency",planid:e},url:`/admin/tool/lp/coursecompetencies.php?id=${e}`})}}return AddonCompetencyPlanPage.ɵfac=function AddonCompetencyPlanPage_Factory(e){return new(e||AddonCompetencyPlanPage)},AddonCompetencyPlanPage.ɵcmp=E.sc({type:AddonCompetencyPlanPage,selectors:[["page-addon-competency-plan"]],decls:15,vars:13,consts:[["slot","start"],[3,"text"],[4,"ngIf"],[1,"limited-width",3,"core-swipe-navigation"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[3,"hideUntil"],["contextLevel","user",3,"text","contextInstanceId"],[1,"ion-text-wrap"],["slot","start",3,"user"],[1,"item-heading"],["class","ion-text-wrap",4,"ngIf"],[3,"id"],[3,"progress","text","ariaDescribedBy"],["contextLevel","system",3,"text","contextInstanceId"],["class","ion-text-wrap","detail","true","button","",3,"click",4,"ngFor","ngForOf"],["detail","true","button","",1,"ion-text-wrap",3,"click"],["slot","end",3,"color",4,"ngIf"],["slot","end",3,"color"]],template:function AddonCompetencyPlanPage_Template(e,n){1&e&&(E.Ec(0,"ion-header"),E.Ec(1,"ion-toolbar"),E.Ec(2,"ion-buttons",0),E.zc(3,"ion-back-button",1),E.Pc(4,"translate"),E.Dc(),E.Ec(5,"ion-title"),E.nd(6,AddonCompetencyPlanPage_h1_6_Template,2,2,"h1",2),E.Dc(),E.Dc(),E.Dc(),E.Ec(7,"ion-content",3),E.Ec(8,"ion-refresher",4),E.Mc("ionRefresh",(function AddonCompetencyPlanPage_Template_ion_refresher_ionRefresh_8_listener(e){return n.refreshLearningPlan(e.target)})),E.zc(9,"ion-refresher-content",5),E.Pc(10,"translate"),E.Dc(),E.Ec(11,"core-loading",6),E.nd(12,AddonCompetencyPlanPage_ion_card_12_Template,6,2,"ion-card",2),E.nd(13,AddonCompetencyPlanPage_ion_card_13_Template,21,23,"ion-card",2),E.nd(14,AddonCompetencyPlanPage_ion_card_14_Template,8,5,"ion-card",2),E.Dc(),E.Dc()),2&e&&(E.lc(3),E.Vc("text",E.Qc(4,9,"core.back")),E.lc(3),E.Vc("ngIf",n.plan),E.lc(1),E.Vc("core-swipe-navigation",n.plans),E.lc(1),E.Vc("disabled",!n.competencies.loaded),E.lc(1),E.Wc("pullingText",E.Qc(10,11,"core.pulltorefresh")),E.lc(2),E.Vc("hideUntil",n.competencies.loaded),E.lc(1),E.Vc("ngIf",n.user),E.lc(1),E.Vc("ngIf",n.plan),E.lc(1),E.Vc("ngIf",n.plan))},directives:[b.C,b.Ab,b.m,b.h,b.i,b.yb,D.t,C.a,b.v,A.a,b.bb,b.cb,I.a,L.a,b.n,b.I,b.O,v.a,b.P,T.a,b.p,b.r,D.s,b.k],pipes:[x.d,V.a],encapsulation:2}),AddonCompetencyPlanPage})();var O=t("46ml"),S=t("9+EE"),M=t("j3ag"),k=t("r8G5");function AddonCompetencyPlanListPage_core_empty_box_15_Template(e,n){1&e&&(E.zc(0,"core-empty-box",7),E.Pc(1,"translate")),2&e&&E.Vc("message",E.Qc(1,1,"addon.competency.noplanswerecreated"))}function AddonCompetencyPlanListPage_ion_list_16_ion_item_1_p_4_Template(e,n){if(1&e&&(E.Ec(0,"p"),E.pd(1),E.Pc(2,"translate"),E.Pc(3,"coreFormatDate"),E.Dc()),2&e){const e=E.Oc().$implicit;E.lc(1),E.sd(" ",E.Qc(2,2,"addon.competency.duedate"),":  ",E.Rc(3,4,1e3*e.duedate,"strftimedatetimeshort")," ")}}function AddonCompetencyPlanListPage_ion_list_16_ion_item_1_Template(e,n){if(1&e){const e=E.Fc();E.Ec(0,"ion-item",10),E.Mc("click",(function AddonCompetencyPlanListPage_ion_list_16_ion_item_1_Template_ion_item_click_0_listener(){E.fd(e);const t=n.$implicit;return E.Oc(2).plans.select(t)})),E.Ec(1,"ion-label"),E.Ec(2,"p",11),E.zc(3,"core-format-text",12),E.Dc(),E.nd(4,AddonCompetencyPlanListPage_ion_list_16_ion_item_1_p_4_Template,4,7,"p",13),E.Dc(),E.Ec(5,"ion-badge",14),E.pd(6),E.Dc(),E.Dc()}if(2&e){const e=n.$implicit,t=E.Oc(2);E.mc("aria-label",e.name)("aria-current",t.plans.getItemAriaCurrent(e)),E.lc(3),E.Vc("text",e.name)("contextInstanceId",e.userid),E.lc(1),E.Vc("ngIf",e.duedate>0),E.lc(1),E.Vc("color",e.statuscolor),E.lc(1),E.qd(e.statusname)}}function AddonCompetencyPlanListPage_ion_list_16_Template(e,n){if(1&e&&(E.Ec(0,"ion-list",8),E.nd(1,AddonCompetencyPlanListPage_ion_list_16_ion_item_1_Template,7,7,"ion-item",9),E.Dc()),2&e){const e=E.Oc();E.lc(1),E.Vc("ngForOf",e.plans.items)}}let z=(()=>{class AddonCompetencyPlanListPage{constructor(){var e;const n=null!==(e=r.a.getRouteNumberParam("userId"))&&void 0!==e?e:S.c.getCurrentSiteUserId(),t=p.a.getOrCreateSource(competency_plans_source_AddonCompetencyPlansSource,[n]);this.plans=new y.a(t,AddonCompetencyPlanListPage),this.logView=h.a.once((()=>Object(l.a)(this,void 0,void 0,(function*(){f.a.logEvent({type:f.b.VIEW_ITEM_LIST,ws:"tool_lp_data_for_plans_page",name:M.I.instant("addon.competency.userplans"),data:{userid:n},url:`/admin/tool/lp/plans.php?userid=${n}`})}))))}ngAfterViewInit(){return Object(l.a)(this,void 0,void 0,(function*(){yield this.fetchLearningPlans(),this.plans.start(this.splitView)}))}fetchLearningPlans(){return Object(l.a)(this,void 0,void 0,(function*(){try{yield this.plans.load(),this.logView()}catch(e){d.a.showErrorModalDefault(e,"Error getting learning plans data.")}}))}refreshLearningPlans(e){return Object(l.a)(this,void 0,void 0,(function*(){yield this.plans.getSource().invalidateCache(),this.plans.getSource().setDirty(!0),this.fetchLearningPlans().finally((()=>{null==e?void 0:e.complete()}))}))}ngOnDestroy(){this.plans.destroy()}}return AddonCompetencyPlanListPage.ɵfac=function AddonCompetencyPlanListPage_Factory(e){return new(e||AddonCompetencyPlanListPage)},AddonCompetencyPlanListPage.ɵcmp=E.sc({type:AddonCompetencyPlanListPage,selectors:[["page-addon-competency-planlist"]],viewQuery:function AddonCompetencyPlanListPage_Query(e,n){var t;(1&e&&E.ud(O.a,!0),2&e)&&(E.dd(t=E.Nc())&&(n.splitView=t.first))},decls:17,vars:13,consts:[["slot","start"],[3,"text"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[3,"hideUntil"],["icon","fas-route",3,"message",4,"ngIf"],["class","ion-no-margin",4,"ngIf"],["icon","fas-route",3,"message"],[1,"ion-no-margin"],["class","ion-text-wrap","button","","detail","true",3,"click",4,"ngFor","ngForOf"],["button","","detail","true",1,"ion-text-wrap",3,"click"],[1,"item-heading"],["contextLevel","user",3,"text","contextInstanceId"],[4,"ngIf"],["slot","end",1,"ion-text-wrap",3,"color"]],template:function AddonCompetencyPlanListPage_Template(e,n){1&e&&(E.Ec(0,"ion-header"),E.Ec(1,"ion-toolbar"),E.Ec(2,"ion-buttons",0),E.zc(3,"ion-back-button",1),E.Pc(4,"translate"),E.Dc(),E.Ec(5,"ion-title"),E.Ec(6,"h1"),E.pd(7),E.Pc(8,"translate"),E.Dc(),E.Dc(),E.Dc(),E.Dc(),E.Ec(9,"ion-content"),E.Ec(10,"core-split-view"),E.Ec(11,"ion-refresher",2),E.Mc("ionRefresh",(function AddonCompetencyPlanListPage_Template_ion_refresher_ionRefresh_11_listener(e){return n.refreshLearningPlans(e.target)})),E.zc(12,"ion-refresher-content",3),E.Pc(13,"translate"),E.Dc(),E.Ec(14,"core-loading",4),E.nd(15,AddonCompetencyPlanListPage_core_empty_box_15_Template,2,3,"core-empty-box",5),E.nd(16,AddonCompetencyPlanListPage_ion_list_16_Template,2,1,"ion-list",6),E.Dc(),E.Dc(),E.Dc()),2&e&&(E.lc(3),E.Vc("text",E.Qc(4,7,"core.back")),E.lc(4),E.qd(E.Qc(8,9,"addon.competency.userplans")),E.lc(4),E.Vc("disabled",!n.plans.loaded),E.lc(1),E.Wc("pullingText",E.Qc(13,11,"core.pulltorefresh")),E.lc(2),E.Vc("hideUntil",n.plans.loaded),E.lc(1),E.Vc("ngIf",n.plans.empty),E.lc(1),E.Vc("ngIf",!n.plans.empty))},directives:[b.C,b.Ab,b.m,b.h,b.i,b.yb,C.a,b.v,O.a,b.bb,b.cb,I.a,D.t,k.a,b.P,D.s,b.I,b.O,L.a,b.k],pipes:[x.d,V.a],encapsulation:2}),AddonCompetencyPlanListPage})();var Q=t("ZnQC"),R=t("vgj2"),$=t("XQtJ"),j=t("7Dkd"),F=t("47DI"),U=t("H4nd");const q=[{path:"",pathMatch:"full",component:z},{path:`:planId/${_.a}`,component:w},{path:`:planId/${_.a}/:competencyId`,component:Q.a}],J=[{path:"",component:z,children:[{path:`:planId/${_.a}`,component:w}]},{path:`:planId/${_.a}`,component:F.a,children:[{path:":competencyId",component:Q.a}]}],N=[...Object(a.c)(q,(()=>o.a.isMobile)),...Object(a.c)(J,(()=>o.a.isTablet)),{path:`:planId/${_.a}/:competencyId/${_.d}`,component:R.a}];let H=(()=>{class AddonCompetencyLearningPlansLazyModule{}return AddonCompetencyLearningPlansLazyModule.ɵmod=E.wc({type:AddonCompetencyLearningPlansLazyModule}),AddonCompetencyLearningPlansLazyModule.ɵinj=E.vc({factory:function AddonCompetencyLearningPlansLazyModule_Factory(e){return new(e||AddonCompetencyLearningPlansLazyModule)},imports:[[c.m.forChild(N),i.a,U.a,$.a,j.a]]}),AddonCompetencyLearningPlansLazyModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&E.kd(H,{declarations:[w,z],imports:[c.m,i.a,U.a,$.a,j.a]}))}}]);