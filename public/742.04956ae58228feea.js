"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[742],{742:($,b,p)=>{p.r(b),p.d(b,{DashboardPageModule:()=>R});var g=p(177),s=p(4341),i=p(4488),_=p(4964),h=p(467),f=p(6354),e=p(4438),F=p(3235);let C=(()=>{var o;class l{constructor(n,t,a,d){this.modalController=n,this.fb=t,this.alertController=a,this.firestore=d,this.addClientForm=this.fb.group({nombre:new s.MJ("",s.k0.required),apellido:new s.MJ("",s.k0.required),direccion:new s.MJ("",s.k0.required),telefono:new s.MJ("",s.k0.required)})}addClient(){var n=this;return(0,h.A)(function*(){const t=yield n.alertController.create({header:"Error",message:"Favor de llenar todos los campos.",buttons:["OK"]});try{if(n.addClientForm.valid){const{nombre:a,apellido:d,direccion:m,telefono:c}=n.addClientForm.value;n.firestore.collection("clients").doc().set({nombre:a,apellido:d,direccion:m,telefono:c}),n.modalController.dismiss()}else yield t.present()}catch(a){console.error(a)}})()}ngOnInit(){}dismiss(){this.modalController.dismiss()}}return(o=l).\u0275fac=function(n){return new(n||o)(e.rXU(i.W3),e.rXU(s.ok),e.rXU(i.hG),e.rXU(F.Qe))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-agregar-cliente"]],decls:29,vars:1,consts:[[1,"form-container"],[3,"formGroup"],["size","6"],["formControlName","nombre"],["formControlName","apellido"],["formControlName","direccion"],["formControlName","telefono"],[1,"ion-text-right"],["shape","round","color","light",3,"click"],["shape","round",3,"click"]],template:function(n,t){1&n&&(e.j41(0,"div",0)(1,"ion-title"),e.EFF(2,"Registrar un nuevo cliente"),e.k0s(),e.j41(3,"form",1)(4,"ion-grid")(5,"ion-row")(6,"ion-col",2)(7,"ion-label"),e.EFF(8,"Nombre"),e.k0s(),e.nrm(9,"ion-input",3),e.k0s(),e.j41(10,"ion-col",2)(11,"ion-label"),e.EFF(12,"Apellido"),e.k0s(),e.nrm(13,"ion-input",4),e.k0s()(),e.j41(14,"ion-row")(15,"ion-col",2)(16,"ion-label"),e.EFF(17,"Direcci\xf3n"),e.k0s(),e.nrm(18,"ion-input",5),e.k0s(),e.j41(19,"ion-col",2)(20,"ion-label"),e.EFF(21,"Tel\xe9fono"),e.k0s(),e.nrm(22,"ion-input",6),e.k0s()()()()(),e.j41(23,"ion-footer")(24,"div",7)(25,"ion-button",8),e.bIt("click",function(){return t.dismiss()}),e.EFF(26,"Cancelar"),e.k0s(),e.j41(27,"ion-button",9),e.bIt("click",function(){return t.addClient()}),e.EFF(28,"Confirmar"),e.k0s()()()),2&n&&(e.R7$(3),e.Y8G("formGroup",t.addClientForm))},dependencies:[s.qT,s.BC,s.cb,i.Jm,i.hU,i.M0,i.lO,i.$w,i.he,i.ln,i.BC,i.Gw,s.j4,s.JD],styles:["ion-title[_ngcontent-%COMP%]{padding-inline:0px;padding-bottom:15px}ion-input[_ngcontent-%COMP%]{background-color:#1e1e1e;border-radius:40px;font-size:16px;margin-top:5px;--padding-top: 10px;--padding-bottom: 10px;--padding-start: 15px}ion-footer[_ngcontent-%COMP%]{padding:15px}.form-container[_ngcontent-%COMP%]{padding:20px}"]}),l})(),k=(()=>{var o;class l{constructor(n,t,a,d){this.modalController=n,this.fb=t,this.alertController=a,this.firestore=d,this.addAppointmentForm=this.fb.group({deadline:new s.MJ("",s.k0.required),time:new s.MJ("",s.k0.required),priority:new s.MJ("",s.k0.required),pending:new s.MJ(!0,s.k0.required)})}addAppointment(){var n=this;return(0,h.A)(function*(){const t=yield n.alertController.create({header:"Error",message:"Favor de llenar todos los campos.",buttons:["OK"]});try{if(n.addAppointmentForm.valid){const{deadline:a,time:d,priority:m,pending:c}=n.addAppointmentForm.value;n.firestore.collection("appointments").doc().set({deadline:a,time:d,priority:m,pending:JSON.parse(c)}),n.modalController.dismiss()}else yield t.present()}catch(a){console.error(a)}})()}ngOnInit(){}dismiss(){this.modalController.dismiss()}}return(o=l).\u0275fac=function(n){return new(n||o)(e.rXU(i.W3),e.rXU(s.ok),e.rXU(i.hG),e.rXU(F.Qe))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-agregar-turno"]],decls:39,vars:1,consts:[[1,"form-container"],[3,"formGroup"],["size","6"],["formControlName","deadline"],["formControlName","time"],["formControlName","priority"],["value","baja"],["value","media"],["value","alta"],["formControlName","pending"],["value","true"],["value","false"],[1,"ion-text-right"],["shape","round","color","light",3,"click"],["shape","round",3,"click"]],template:function(n,t){1&n&&(e.j41(0,"div",0)(1,"ion-title"),e.EFF(2,"Registrar un nuevo turno"),e.k0s(),e.j41(3,"form",1)(4,"ion-grid")(5,"ion-row")(6,"ion-col",2)(7,"ion-label"),e.EFF(8,"Fecha"),e.k0s(),e.nrm(9,"ion-input",3),e.k0s(),e.j41(10,"ion-col",2)(11,"ion-label"),e.EFF(12,"Hora"),e.k0s(),e.nrm(13,"ion-input",4),e.k0s()(),e.j41(14,"ion-row")(15,"ion-col",2)(16,"ion-label"),e.EFF(17,"Prioridad"),e.k0s(),e.j41(18,"ion-select",5)(19,"ion-select-option",6),e.EFF(20,"Baja"),e.k0s(),e.j41(21,"ion-select-option",7),e.EFF(22,"Media"),e.k0s(),e.j41(23,"ion-select-option",8),e.EFF(24,"Alta"),e.k0s()()(),e.j41(25,"ion-col",2)(26,"ion-label"),e.EFF(27,"Pendiente"),e.k0s(),e.j41(28,"ion-select",9)(29,"ion-select-option",10),e.EFF(30,"Verdadero"),e.k0s(),e.j41(31,"ion-select-option",11),e.EFF(32,"Falso"),e.k0s()()()()()()(),e.j41(33,"ion-footer")(34,"div",12)(35,"ion-button",13),e.bIt("click",function(){return t.dismiss()}),e.EFF(36,"Cancelar"),e.k0s(),e.j41(37,"ion-button",14),e.bIt("click",function(){return t.addAppointment()}),e.EFF(38,"Confirmar"),e.k0s()()()),2&n&&(e.R7$(3),e.Y8G("formGroup",t.addAppointmentForm))},dependencies:[s.qT,s.BC,s.cb,i.Jm,i.hU,i.M0,i.lO,i.$w,i.he,i.ln,i.Nm,i.Ip,i.BC,i.Je,i.Gw,s.j4,s.JD],styles:["ion-title[_ngcontent-%COMP%]{padding-inline:0px;padding-bottom:15px}ion-input[_ngcontent-%COMP%], ion-select[_ngcontent-%COMP%]{background-color:#1e1e1e;border-radius:40px;font-size:16px;margin-top:5px;--padding-top: 10px;--padding-bottom: 10px;--padding-start: 15px}ion-footer[_ngcontent-%COMP%]{padding:15px}.form-container[_ngcontent-%COMP%]{padding:20px}"]}),l})();var j=p(7157),E=p(1182);const v=["chartDiv"];function P(o,l){if(1&o){const r=e.RV6();e.j41(0,"tr")(1,"td"),e.EFF(2),e.k0s(),e.j41(3,"td"),e.EFF(4),e.k0s(),e.j41(5,"td"),e.EFF(6),e.k0s(),e.j41(7,"td"),e.EFF(8," \xa0 "),e.j41(9,"a",23),e.bIt("click",function(){const t=e.eBV(r).index,a=e.XpG(2);return e.Njj(a.deleteClient(a.clients[t].id))}),e.EFF(10,"Eliminar"),e.k0s()()()}if(2&o){const r=l.$implicit;e.R7$(2),e.Lme("",r.nombre," ",r.apellido,""),e.R7$(2),e.JRh(r.direccion),e.R7$(2),e.JRh(r.telefono)}}function M(o,l){if(1&o){const r=e.RV6();e.j41(0,"ion-grid")(1,"ion-row")(2,"ion-col",20)(3,"ion-card")(4,"ion-card-content")(5,"table")(6,"thead")(7,"tr")(8,"th"),e.EFF(9,"Nombre"),e.k0s(),e.j41(10,"th"),e.EFF(11,"Direcci\xf3n"),e.k0s(),e.j41(12,"th"),e.EFF(13,"Tel\xe9fono"),e.k0s(),e.j41(14,"th"),e.EFF(15,"Acciones"),e.k0s()()(),e.j41(16,"tbody"),e.DNE(17,P,11,4,"tr",21),e.k0s()()()(),e.j41(18,"ion-button",22),e.bIt("click",function(){e.eBV(r);const t=e.XpG();return e.Njj(t.abrirModalClientes())}),e.EFF(19,"Agregar cliente"),e.k0s()()()()}if(2&o){const r=e.XpG();e.R7$(17),e.Y8G("ngForOf",r.clients)}}function D(o,l){if(1&o&&(e.j41(0,"tr",25)(1,"td"),e.EFF(2),e.k0s(),e.j41(3,"td"),e.EFF(4),e.k0s(),e.j41(5,"td"),e.EFF(6),e.k0s()()),2&o){const r=l.$implicit;e.R7$(2),e.JRh(r.email),e.R7$(2),e.JRh(r.username),e.R7$(2),e.JRh(r.role)}}function T(o,l){if(1&o&&(e.j41(0,"ion-grid")(1,"ion-row")(2,"ion-col",20)(3,"ion-card")(4,"ion-card-content")(5,"table")(6,"thead")(7,"tr")(8,"th"),e.EFF(9,"Correo electr\xf3nico"),e.k0s(),e.j41(10,"th"),e.EFF(11,"Nombre de usuario"),e.k0s(),e.j41(12,"th"),e.EFF(13,"Puesto"),e.k0s()()(),e.j41(14,"tbody"),e.DNE(15,D,7,3,"tr",24),e.nI1(16,"async"),e.k0s()()()()()()()),2&o){const r=e.XpG();e.R7$(15),e.Y8G("ngForOf",e.bMT(16,1,r.users$))}}function x(o,l){if(1&o){const r=e.RV6();e.j41(0,"tr")(1,"td"),e.EFF(2),e.k0s(),e.j41(3,"td"),e.EFF(4),e.k0s(),e.j41(5,"td"),e.EFF(6),e.k0s(),e.j41(7,"td"),e.EFF(8," \xa0 "),e.j41(9,"a",23),e.bIt("click",function(){const t=e.eBV(r).index,a=e.XpG(2);return e.Njj(a.deleteAppointment(a.appointments[t].id))}),e.EFF(10,"Eliminar"),e.k0s()()()}if(2&o){const r=l.$implicit;e.R7$(2),e.Lme("",r.deadline,", ",r.time,""),e.R7$(2),e.JRh(r.priority),e.R7$(2),e.JRh(r.pending)}}function y(o,l){if(1&o){const r=e.RV6();e.j41(0,"ion-grid")(1,"ion-row")(2,"ion-col",20)(3,"ion-card")(4,"ion-card-content")(5,"table")(6,"thead")(7,"tr")(8,"th"),e.EFF(9,"Fecha y hora"),e.k0s(),e.j41(10,"th"),e.EFF(11,"Prioridad"),e.k0s(),e.j41(12,"th"),e.EFF(13,"Pendiente"),e.k0s(),e.j41(14,"th"),e.EFF(15,"Acciones"),e.k0s()()(),e.j41(16,"tbody"),e.DNE(17,x,11,4,"tr",21),e.k0s()()()(),e.j41(18,"ion-button",22),e.bIt("click",function(){e.eBV(r);const t=e.XpG();return e.Njj(t.abrirModalTurnos())}),e.EFF(19,"Agregar turno"),e.k0s()()()()}if(2&o){const r=e.XpG();e.R7$(17),e.Y8G("ngForOf",r.appointments)}}function O(o,l){if(1&o&&(e.j41(0,"ion-grid")(1,"ion-row")(2,"ion-col",26)(3,"ion-card")(4,"ion-card-header"),e.EFF(5," Por atender "),e.k0s(),e.j41(6,"ion-card-content",27),e.EFF(7),e.nI1(8,"async"),e.k0s()()(),e.j41(9,"ion-col",26)(10,"ion-card")(11,"ion-card-header"),e.EFF(12," Finalizados "),e.k0s(),e.j41(13,"ion-card-content",27),e.EFF(14),e.nI1(15,"async"),e.k0s()()()()()),2&o){const r=e.XpG();e.R7$(7),e.SpI(" ",e.bMT(8,2,r.pendingCount$)," "),e.R7$(7),e.SpI(" ",e.bMT(15,4,r.nonPendingCount$)," ")}}const I=[{path:"",component:(()=>{var o;class l{constructor(n,t,a,d,m){this.platform=n,this.afAuth=t,this.router=a,this.firestore=d,this.modalController=m,this.selectedItem="",this.appointments=[],this.clients=[],this.appointmentsCollection=this.firestore.collection("appointments"),this.appointments$=this.appointmentsCollection.snapshotChanges().pipe((0,f.T)(c=>c.map(u=>({id:u.payload.doc.id,...u.payload.doc.data()})))),this.appointments$.subscribe(c=>this.appointments=c),this.users$=this.firestore.collection("users").valueChanges(),this.clientsCollection=this.firestore.collection("clients"),this.clients$=this.clientsCollection.snapshotChanges().pipe((0,f.T)(c=>c.map(u=>({id:u.payload.doc.id,...u.payload.doc.data()})))),this.clients$.subscribe(c=>this.clients=c),this.pendingCount$=this.firestore.collection("appointments",c=>c.where("pending","==",!0)).valueChanges().pipe((0,f.T)(c=>c.length)),this.nonPendingCount$=this.firestore.collection("appointments",c=>c.where("pending","==",!1)).valueChanges().pipe((0,f.T)(c=>c.length))}deleteClient(n){try{this.firestore.collection("clients").doc(n).delete()}catch(t){console.error("Error deleting appointment:",t)}}deleteAppointment(n){try{this.firestore.collection("appointments").doc(n).delete()}catch(t){console.error("Error deleting appointment:",t)}}ngOnInit(){}ngAfterViewInit(){this.chartDiv&&(google.charts.load("current",{packages:["corechart"]}),google.charts.setOnLoadCallback(()=>this.drawChart()))}logout(){this.afAuth.signOut().then(()=>{console.log("User signed out"),this.router.navigate(["/login"])}).catch(n=>{console.error("Error signing out:",n)})}abrirModalClientes(){var n=this;return(0,h.A)(function*(){yield(yield n.modalController.create({component:C,componentProps:{}})).present()})()}abrirModalTurnos(){var n=this;return(0,h.A)(function*(){yield(yield n.modalController.create({component:k,componentProps:{}})).present()})()}showContent(n){this.selectedItem=n;var t=document.getElementById("chartContainer");this.chartDiv&&("reports"===n?(this.chartDiv.nativeElement.classList.remove("chart-hidden"),null==t||t.classList.remove("card-hidden"),this.drawChart()):(this.chartDiv.nativeElement.classList.add("chart-hidden"),null==t||t.classList.add("card-hidden")))}drawChart(){const n=[["Task","Turnos atendidos"]];this.appointments.forEach(m=>{n.push([m.deadline,parseInt(m.time)])});const t=google.visualization.arrayToDataTable(n);new google.visualization.LineChart(document.getElementById("chartDiv")).draw(t,{title:"",curveType:"function",legend:{position:"bottom"}})}toggleFullScreen(){this.platform.is("capacitor")||this.platform.is("cordova")?(this.platform.is("android")||this.platform.is("ios"))&&(document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()):document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}}return(o=l).\u0275fac=function(n){return new(n||o)(e.rXU(j.OD),e.rXU(E.DS),e.rXU(_.Ix),e.rXU(F.Qe),e.rXU(i.W3))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-dashboard"]],viewQuery:function(n,t){if(1&n&&e.GBs(v,5),2&n){let a;e.mGM(a=e.lsd())&&(t.chartDiv=a.first)}},decls:44,vars:6,consts:[["mainContainer",""],["chartContainer",""],["chartDiv",""],[3,"translucent"],["slot","end"],["color","primary",3,"click"],[3,"fullscreen"],["size","3",1,"sidebar"],["lines","full"],[1,"hover-effect",3,"click"],["name","business"],["name","person-add"],["name","calendar"],["name","document-text"],["size","9"],[4,"ngIf"],["id","chartContainer",1,"card-hidden"],["id","chartDiv",1,"chart-hidden",2,"width","100%","height","320px"],["slot","end","fill","clear",1,"fullscreen-button",3,"click"],["name","expand"],["size","12"],[4,"ngFor","ngForOf"],["expand","block","shape","round",3,"click"],[2,"cursor","pointer",3,"click"],["class","ion-text-center",4,"ngFor","ngForOf"],[1,"ion-text-center"],["size","6"],[2,"font-size","28px","text-align","center"]],template:function(n,t){if(1&n){const a=e.RV6();e.j41(0,"ion-header",3)(1,"ion-toolbar")(2,"ion-buttons",4)(3,"ion-button",5),e.bIt("click",function(){return e.eBV(a),e.Njj(t.logout())}),e.EFF(4,"Cerrar sesi\xf3n"),e.k0s()(),e.j41(5,"ion-title"),e.EFF(6,"FilaXpress"),e.k0s()()(),e.j41(7,"ion-content",6)(8,"ion-grid")(9,"ion-row")(10,"ion-col",7)(11,"ion-list",8)(12,"ion-item",9),e.bIt("click",function(){return e.eBV(a),e.Njj(t.showContent("admin"))}),e.nrm(13,"ion-icon",10),e.j41(14,"ion-label"),e.EFF(15,"Clientes"),e.k0s()(),e.j41(16,"ion-item",9),e.bIt("click",function(){return e.eBV(a),e.Njj(t.showContent("register"))}),e.nrm(17,"ion-icon",11),e.j41(18,"ion-label"),e.EFF(19,"Usuarios"),e.k0s()(),e.j41(20,"ion-item",9),e.bIt("click",function(){return e.eBV(a),e.Njj(t.showContent("appointments"))}),e.nrm(21,"ion-icon",12),e.j41(22,"ion-label"),e.EFF(23,"Turnos"),e.k0s()(),e.j41(24,"ion-item",9),e.bIt("click",function(){return e.eBV(a),e.Njj(t.showContent("reports"))}),e.nrm(25,"ion-icon",13),e.j41(26,"ion-label"),e.EFF(27,"Informe"),e.k0s()()()(),e.j41(28,"ion-col",14,0),e.DNE(30,M,20,1,"ion-grid",15)(31,T,17,3,"ion-grid",15)(32,y,20,1,"ion-grid",15)(33,O,16,6,"ion-grid",15),e.j41(34,"ion-card",16,1)(36,"ion-card-header"),e.EFF(37," Gr\xe1fica "),e.k0s(),e.j41(38,"ion-card-content"),e.nrm(39,"div",17,2),e.k0s()()()()()(),e.j41(41,"ion-footer")(42,"ion-button",18),e.bIt("click",function(){return e.eBV(a),e.Njj(t.toggleFullScreen())}),e.nrm(43,"ion-icon",19),e.k0s()()}2&n&&(e.Y8G("translucent",!0),e.R7$(7),e.Y8G("fullscreen",!0),e.R7$(23),e.Y8G("ngIf","admin"===t.selectedItem),e.R7$(),e.Y8G("ngIf","register"===t.selectedItem),e.R7$(),e.Y8G("ngIf","appointments"===t.selectedItem),e.R7$(),e.Y8G("ngIf","reports"===t.selectedItem))},dependencies:[g.Sq,g.bT,i.Jm,i.QW,i.b_,i.I9,i.ME,i.hU,i.W9,i.M0,i.lO,i.eU,i.iq,i.uz,i.he,i.nf,i.ln,i.BC,i.ai,g.Jj],styles:['@charset "UTF-8";table[_ngcontent-%COMP%]{border-collapse:separate;border-spacing:0;width:100%}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:8px;text-align:center}th[_ngcontent-%COMP%]:not(:first-child), td[_ngcontent-%COMP%]:not(:first-child){border-left:1px solid #666666}ion-grid[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-top:35px;height:40px;font-size:18px;text-transform:initial;border-radius:50px;box-shadow:1px 8px 8px #0000000d;--box-shadow: none}.sidebar[_ngcontent-%COMP%]{background-color:#1e1e1e;color:#fff;height:89vh;padding:0}.sidebar[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background: #ffffff00;--color: #989898}.sidebar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:10px}.sidebar[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{--background: #ffffff00}.sidebar[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{--background: #ffffff00}.hover-effect[_ngcontent-%COMP%]:hover{background-color:#333}.chart-hidden[_ngcontent-%COMP%], .card-hidden[_ngcontent-%COMP%]{display:none}.fullscreen-button[_ngcontent-%COMP%]{position:fixed;bottom:10px;right:10px}']}),l})()}];let A=(()=>{var o;class l{}return(o=l).\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[_.iI.forChild(I),_.iI]}),l})(),R=(()=>{var o;class l{}return(o=l).\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[g.MD,s.YN,i.bv,s.X1,A]}),l})()}}]);