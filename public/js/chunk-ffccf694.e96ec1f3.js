(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ffccf694"],{"0184":function(t,e,a){"use strict";var n=a("ccad"),c=a.n(n);c.a},"01c1":function(t,e,a){t.exports=a.p+"img/unreg_bh.ae7ccb4a.svg"},"8be7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap -mx-2"},[n("div",{staticClass:"w-full lg:w-2/3 xl:w-3/4 mb-4 px-4"},[n("h3",{staticClass:"mb-5"},[t._v("Зарегистрированные")]),t.$store.state.bagholders.list.length?t._l(t.$store.state.bagholders.list,(function(e){return n("vx-card",{staticClass:"mb-4 pointer",on:{click:function(a){return t.$router.push("bagholders/"+e.id)}}},[n("div",{attrs:{slot:"no-body"},slot:"no-body"},[n("div",{staticClass:"item"},[n("div",{staticClass:"label"},[t._v("\n                            "+t._s(e.name)+"\n                        ")]),n("div",{staticClass:"actions"},[n("div",{on:{click:function(a){return a.target!==a.currentTarget?null:(a.stopPropagation(),t.edit(e.id,e.name))}}},[n("vs-icon",{attrs:{"icon-pack":"feather",icon:"icon-edit",size:"18px"},nativeOn:{click:function(a){return a.target!==a.currentTarget?null:(a.stopPropagation(),t.edit(e.id,e.name))}}})],1),n("div",{on:{click:function(a){return a.target!==a.currentTarget?null:(a.stopPropagation(),t.remove(e.id,e.name))}}},[n("vs-icon",{attrs:{"icon-pack":"feather",icon:"icon-trash-2",size:"18px"},nativeOn:{click:function(a){return a.target!==a.currentTarget?null:(a.stopPropagation(),t.remove(e.id,e.name))}}})],1)])])])])})):n("vx-card",{staticStyle:{overflow:"hidden"}},[n("div",{staticClass:"not-bagholders"},[n("div",{staticClass:"icon"},[n("img",{attrs:{src:a("cb56"),alt:""}})]),n("div",{staticClass:"message"},[t._v("\n                        У вас нет зарегистрированных бэгхолдеров\n                    ")]),n("div",{staticClass:"sub-message"},[t._v("\n                        Чтобы отслеживать работу бэгхолдеров, их необходимо зарегистрировать\n                    ")])])])],2),n("div",{staticClass:"w-full sm:w-1/1 md:w-full lg:w-1/3 xl:w-1/4 mb-4 px-4"},[n("h3",{staticClass:"mb-5"},[t._v("Незарегистрированные")]),t.$store.getters["bagholders/newList"].length?t._l(t.$store.getters["bagholders/newList"],(function(e){return n("vx-card",{staticClass:"mb-4"},[n("div",{attrs:{slot:"no-body"},slot:"no-body"},[n("div",{staticClass:"item"},[n("div",{staticClass:"label"},[t._v("\n                            "+t._s(e)+"\n                        ")]),n("div",{staticClass:"actions"},[n("vs-button",{attrs:{radius:"",size:"small",color:"primary",type:"filled","icon-pack":"feather",icon:"icon-plus"},on:{click:function(a){return t.register(e)}}})],1)])])])})):n("vx-card",{staticStyle:{overflow:"hidden"}},[n("div",{staticClass:"not-bagholders"},[n("div",{staticClass:"icon"},[n("img",{attrs:{src:a("01c1"),alt:""}})]),n("div",{staticClass:"message"},[t._v("\n                        Бэгхолдеры не найдены\n                    ")]),n("div",{staticClass:"sub-message"},[t._v("\n                        В сети не найдены незарегистрированные бэгхолдеры\n                    ")])])])],2),n("vs-prompt",{attrs:{title:"Зарегистрировать бэгхолдер","accept-text":"Зарегистрировать","cancel-text":"Отмена",active:t.activeRegister},on:{cancel:t.cancelRegister,accept:t.acceptRegister,close:t.cancelRegister,"update:active":function(e){t.activeRegister=e}}},[n("div",{staticClass:"con-exemple-prompt"},[n("div",{staticClass:"mb-1"},[t._v("Введите название")]),n("vs-input",{staticClass:"w-full",attrs:{autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.acceptRegister(e)}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)]),n("vs-prompt",{attrs:{title:"Переименовать бэгхолдер","accept-text":"Переименовать","cancel-text":"Отмена",active:t.activeEdit},on:{cancel:t.cancelEdit,accept:t.acceptEdit,close:t.cancelEdit,"update:active":function(e){t.activeEdit=e}}},[n("div",{staticClass:"con-exemple-prompt"},[n("div",{staticClass:"mb-1"},[t._v("Введите название")]),n("vs-input",{staticClass:"w-full",attrs:{autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.acceptEdit(e)}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)])],1)},c=[],s=(a("7f7f"),a("96cf"),a("3b8d")),i={data:function(){return{activeEdit:!1,activeRegister:!1,name:"",currentMac:""}},methods:{register:function(t){this.activeRegister=!0,this.currentMac=t},acceptRegister:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$http.post("/bagholders",{id:this.currentMac,name:this.name});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.log(t.t0);case 8:this.cancelRegister();case 9:case"end":return t.stop()}}),t,this,[[0,5]])})));function e(){return t.apply(this,arguments)}return e}(),cancelRegister:function(){this.activeRegister=!1,this.currentMac="",this.name=""},remove:function(t,e){this.$vs.dialog({type:"confirm",color:"danger",title:"Подтвердите действие",text:'Вы собираетесь удалить бэгхолдер "'+e+'"! Все настройки бэгхолдера будут удалены!',acceptText:"Удалить",cancelText:"Отмена",accept:this.acceptRemove(t)})},acceptRemove:function(t){var e=this;return(Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$http.delete("/bagholders/"+t);case 3:a.next=8;break;case 5:a.prev=5,a.t0=a["catch"](0),console.log(a.t0);case 8:case"end":return a.stop()}}),a,null,[[0,5]])}))))},edit:function(t,e){this.name=e,this.currentMac=t,this.activeEdit=!0},acceptEdit:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$http.post("/bagholders/"+this.currentMac,{name:this.name});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.log(t.t0);case 8:this.cancelEdit();case 9:case"end":return t.stop()}}),t,this,[[0,5]])})));function e(){return t.apply(this,arguments)}return e}(),cancelEdit:function(){this.activeEdit=!1,this.currentMac="",this.name=""}}},r=i,o=(a("0184"),a("2877")),l=Object(o["a"])(r,n,c,!1,null,"4317be60",null);e["default"]=l.exports},cb56:function(t,e,a){t.exports=a.p+"img/reg_bh.d5fdb28c.svg"},ccad:function(t,e,a){}}]);
//# sourceMappingURL=chunk-ffccf694.e96ec1f3.js.map