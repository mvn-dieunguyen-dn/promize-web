(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{KEkS:function(i,e,b){"use strict";b.r(e),b.d(e,"MainModule",(function(){return g}));var t=b("ofXK"),s=b("fXoL");b("HDdC"),b("DH7j"),b("lJxs"),b("XoHu"),b("Cfvw");const n=new s.q("NgValueAccessor"),o=["*"];let r=(()=>{class i{constructor(i,e,b){this.el=i,this.zone=e,this.platformId=b,this.afterChange=new s.n,this.beforeChange=new s.n,this.breakpoint=new s.n,this.destroy=new s.n,this.init=new s.n,this.currentIndex=0,this.slides=[],this.initialized=!1,this._removedSlides=[],this._addedSlides=[]}ngOnDestroy(){this.unslick()}ngAfterViewInit(){this.ngAfterViewChecked()}ngAfterViewChecked(){if(!Object(t.n)(this.platformId)&&(this._addedSlides.length>0||this._removedSlides.length>0)){const i=this.slides.length-this._removedSlides.length+this._addedSlides.length;this.initialized?0===i?this.unslick():(this._addedSlides.forEach(i=>{this.slides.push(i),this.zone.runOutsideAngular(()=>{this.$instance.slick("slickAdd",i.el.nativeElement)})}),this._addedSlides=[],this._removedSlides.forEach(i=>{const e=this.slides.indexOf(i);this.slides=this.slides.filter(e=>e!==i),this.zone.runOutsideAngular(()=>{this.$instance.slick("slickRemove",e)})}),this._removedSlides=[]):i>0&&this.initSlick()}}initSlick(){this.slides=this._addedSlides,this._addedSlides=[],this._removedSlides=[],this.zone.runOutsideAngular(()=>{this.$instance=jQuery(this.el.nativeElement),this.$instance.on("init",(i,e)=>{this.zone.run(()=>{this.init.emit({event:i,slick:e})})}),this.$instance.slick(this.config),this.zone.run(()=>{var i;this.initialized=!0,this.currentIndex=(null===(i=this.config)||void 0===i?void 0:i.initialSlide)||0}),this.$instance.on("afterChange",(i,e,b)=>{this.zone.run(()=>{this.afterChange.emit({event:i,slick:e,currentSlide:b,first:0===b,last:e.$slides.length===b+e.options.slidesToScroll}),this.currentIndex=b})}),this.$instance.on("beforeChange",(i,e,b,t)=>{this.zone.run(()=>{this.beforeChange.emit({event:i,slick:e,currentSlide:b,nextSlide:t}),this.currentIndex=t})}),this.$instance.on("breakpoint",(i,e,b)=>{this.zone.run(()=>{this.breakpoint.emit({event:i,slick:e,breakpoint:b})})}),this.$instance.on("destroy",(i,e)=>{this.zone.run(()=>{this.destroy.emit({event:i,slick:e}),this.initialized=!1})})})}addSlide(i){this._addedSlides.push(i)}removeSlide(i){this._removedSlides.push(i)}slickGoTo(i){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickGoTo",i)})}slickNext(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickNext")})}slickPrev(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPrev")})}slickPause(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPause")})}slickPlay(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPlay")})}unslick(){this.$instance&&(this.zone.runOutsideAngular(()=>{this.$instance.slick("unslick")}),this.$instance=void 0),this.initialized=!1}ngOnChanges(i){if(this.initialized){const e=i.config;if(e.previousValue!==e.currentValue&&void 0!==e.currentValue){const i=e.currentValue.refresh,b=Object.assign({},e.currentValue);delete b.refresh,this.zone.runOutsideAngular(()=>{this.$instance.slick("slickSetOption",b,i)})}}}}return i.\u0275fac=function(e){return new(e||i)(s.Jb(s.l),s.Jb(s.z),s.Jb(s.B))},i.\u0275cmp=s.Db({type:i,selectors:[["ngx-slick-carousel"]],inputs:{config:"config"},outputs:{afterChange:"afterChange",beforeChange:"beforeChange",breakpoint:"breakpoint",destroy:"destroy",init:"init"},exportAs:["slick-carousel"],features:[s.yb([{provide:n,useExisting:Object(s.S)(()=>i),multi:!0}]),s.xb],ngContentSelectors:o,decls:1,vars:0,template:function(i,e){1&i&&(s.Wb(),s.Vb(0))},encapsulation:2}),i})(),c=(()=>{class i{constructor(i,e,b){this.el=i,this.platformId=e,this.carousel=b}ngOnInit(){Object(t.m)(this.platformId)&&this.carousel.addSlide(this)}ngOnDestroy(){Object(t.m)(this.platformId)&&this.carousel.removeSlide(this)}}return i.\u0275fac=function(e){return new(e||i)(s.Jb(s.l),s.Jb(s.B),s.Jb(r,1))},i.\u0275dir=s.Eb({type:i,selectors:[["","ngxSlickItem",""]]}),i})(),a=(()=>{class i{}return i.\u0275mod=s.Hb({type:i}),i.\u0275inj=s.Gb({factory:function(e){return new(e||i)},imports:[[t.b]]}),i})(),d=(()=>{class i{}return i.\u0275mod=s.Hb({type:i}),i.\u0275inj=s.Gb({factory:function(e){return new(e||i)},imports:[[t.b,a]]}),i})(),l=(()=>{class i{}return i.\u0275mod=s.Hb({type:i}),i.\u0275inj=s.Gb({factory:function(e){return new(e||i)},imports:[[t.b]]}),i})();var u=b("tyNb"),M=b("Om3W");let L=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=s.Db({type:i,selectors:[["app-carousel"]],decls:52,vars:0,consts:[["id","carouselExampleCaptions","data-ride","carousel",1,"carousel","slide"],[1,"carousel-inner"],[1,"carousel-item","active"],[1,"shadow"],[1,"bg-carousel"],["src","./assets/img/banner12.jpg","alt","...",1,"img-banner"],[1,"carousel-caption","d-none","d-md-block"],[1,"carousel-title"],[1,"carousel-content"],[1,"carousel-button"],[1,"btn","btn-custom"],[1,"btn","btn-custom-outline"],[1,"carousel-item"],["src","./assets/img/banner-home-1.jpg","alt","...",1,"img-banner"],["src","./assets/img/banner11.jpg","alt","...",1,"img-banner"],["href","#carouselExampleCaptions","role","button","data-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"sr-only"],["href","#carouselExampleCaptions","role","button","data-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"]],template:function(i,e){1&i&&(s.Mb(0,"div",0),s.Mb(1,"div",1),s.Mb(2,"div",2),s.Mb(3,"div",3),s.Kb(4,"div",4),s.Kb(5,"img",5),s.Lb(),s.Mb(6,"div",6),s.Mb(7,"h1",7),s.dc(8,"WE PROVIDE BUSINESS SOLUTIONS"),s.Lb(),s.Mb(9,"p",8),s.dc(10,"Create just what you need for your Perfect Website. Choose from a various range of Elements & select demo on your own Promize. "),s.Lb(),s.Mb(11,"div",9),s.Mb(12,"button",10),s.dc(13,"Buy now"),s.Lb(),s.Mb(14,"button",11),s.dc(15,"Contact us"),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(16,"div",12),s.Mb(17,"div",3),s.Kb(18,"div",4),s.Kb(19,"img",13),s.Lb(),s.Mb(20,"div",6),s.Mb(21,"h5",7),s.dc(22,"WE PROVIDE BUSINESS SOLUTIONS"),s.Lb(),s.Mb(23,"p",8),s.dc(24,"Create just what you need for your Perfect Website. Choose from a various range of Elements & select demo on your own Promize. "),s.Lb(),s.Mb(25,"div",9),s.Mb(26,"button",10),s.dc(27,"Buy now"),s.Lb(),s.Mb(28,"button",11),s.dc(29,"Contact us"),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(30,"div",12),s.Mb(31,"div",3),s.Kb(32,"div",4),s.Kb(33,"img",14),s.Lb(),s.Mb(34,"div",6),s.Mb(35,"h5",7),s.dc(36,"WE PROVIDE BUSINESS SOLUTIONS"),s.Lb(),s.Mb(37,"p",8),s.dc(38,"Create just what you need for your Perfect Website. Choose from a various range of Elements & select demo on your own Promize. "),s.Lb(),s.Mb(39,"div",9),s.Mb(40,"button",10),s.dc(41,"Buy now"),s.Lb(),s.Mb(42,"button",11),s.dc(43,"Contact us"),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(44,"a",15),s.Kb(45,"span",16),s.Mb(46,"span",17),s.dc(47,"Previous"),s.Lb(),s.Lb(),s.Mb(48,"a",18),s.Kb(49,"span",19),s.Mb(50,"span",17),s.dc(51,"Next"),s.Lb(),s.Lb(),s.Lb())},styles:[""]}),i})();function m(i,e){if(1&i&&(s.Mb(0,"div",5),s.Kb(1,"img",6),s.Lb()),2&i){const i=e.$implicit;s.zb(1),s.Yb("src",i.img,s.ac)}}let h=(()=>{class i{constructor(){this.slides=[{img:"./assets/img/slider1.png"},{img:"./assets/img/slider2.png"},{img:"./assets/img/slider3.png"},{img:"./assets/img/slider4.png"},{img:"./assets/img/slider5.png"},{img:"./assets/img/slider6.png"},{img:"./assets/img/slider7.png"},{img:"./assets/img/slider8.png"},{img:"./assets/img/slider9.png"}],this.slideConfig={slidesToShow:6,slidesToScroll:1,autoplay:!0,infinite:!0,autoplaySpeed:1500,responsive:[{breakpoint:1024,settings:{slidesToShow:4}},{breakpoint:768,settings:{slidesToShow:4}},{breakpoint:480,settings:{slidesToShow:2}},{breakpoint:320,settings:{slidesToShow:2}}]}}ngOnInit(){}slickInit(i){console.log("slick initialized")}breakpoint(i){console.log("breakpoint")}afterChange(i){console.log("afterChange")}beforeChange(i){console.log("beforeChange")}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=s.Db({type:i,selectors:[["app-footer-top"]],decls:5,vars:2,consts:[[1,"footer-carousel"],[1,"container"],[1,"carousel",3,"config","init","breakpoint","afterChange","beforeChange"],["slickModal","slick-carousel"],["ngxSlickItem","","class","slide",4,"ngFor","ngForOf"],["ngxSlickItem","",1,"slide"],["alt","",1,"slider-img",3,"src"]],template:function(i,e){1&i&&(s.Mb(0,"div",0),s.Mb(1,"div",1),s.Mb(2,"ngx-slick-carousel",2,3),s.Tb("init",(function(i){return e.slickInit(i)}))("breakpoint",(function(i){return e.breakpoint(i)}))("afterChange",(function(i){return e.afterChange(i)}))("beforeChange",(function(i){return e.beforeChange(i)})),s.cc(4,m,2,1,"div",4),s.Lb(),s.Lb(),s.Lb()),2&i&&(s.zb(2),s.Xb("config",e.slideConfig),s.zb(2),s.Xb("ngForOf",e.slides))},directives:[r,t.h,c],styles:[""]}),i})();const v=[{path:"",component:(()=>{class i{constructor(i){this.comonservice=i,this.isMain=!0}ngOnInit(){this.comonservice.changeStatusHeader(this.isMain)}ngOnDestroy(){this.comonservice.changeStatusHeader(!this.isMain)}}return i.\u0275fac=function(e){return new(e||i)(s.Jb(M.a))},i.\u0275cmp=s.Db({type:i,selectors:[["app-main"]],decls:541,vars:0,consts:[[1,"container-hidden"],[1,"section"],[1,"container"],[1,"main-typo"],[1,"typo-title"],[1,"typo-content"],[1,"row"],[1,"col-large-4","col-medium-4","col-small-12","card-service"],[1,"card-aricle"],[1,"card-img"],["src","http://www.shreethemes.in/promize/layouts/images/icon/advisor.svg","alt","",1,"card-img-icon"],[1,"card-content"],[1,"card-title"],[1,"card-text"],["src","http://www.shreethemes.in/promize/layouts/images/icon/pc.svg","alt","",1,"card-img-icon"],["src","http://www.shreethemes.in/promize/layouts/images/icon/consultant.svg","alt","",1,"card-img-icon"],[1,"container-fluid"],[1,"col-large-6","col-medium-12","col-smallest-12","no-padding"],[1,"section-left"],["src","./assets/img/03.jpg","alt","",1,"section-left-img"],[1,"section-right"],[1,"about-content"],[1,"about-title"],[1,"about-description"],[1,"list"],[1,"list-note"],[1,"far","fa-check-circle","mr-3"],[1,"text-note"],[1,"btn","btn-custom"],[1,"fas","fa-arrow-right"],[1,"far","fa-star"],["_ngcontent-jdr-c20","",1,"read-more"],["_ngcontent-jdr-c20","","href","#"],["_ngcontent-jdr-c20","","aria-hidden","true",1,"fas","fa-angle-right"],[1,"fas","fa-desktop"],[1,"far","fa-eye"],[1,"far","fa-heart"],[1,"fas","fa-umbrella"],[1,"fas","fa-boxes"],[1,"section-arrow"],[1,"section-intro","row"],[1,"col-medium-8","col-smallest-12"],[1,"intro-text"],[1,"intro-title"],[1,"intro-content"],[1,"col-medium-4","col-smallest-12"],[1,"intro-contact"],["href","",1,"btn","btn-custom-outline-dark"],["href","",1,"btn","btn-dark","btn-custom-2"],[1,"row","item-center"],[1,"col-large-3","col-medium-6","col-smallest-12","card-service"],[1,"price-table"],[1,"price-header"],[1,"far","fa-lightbulb"],[1,"price-title"],[1,"price-content"],[1,"price-value"],[1,"price-number"],[1,"price-text"],[1,"price-list"],[1,"price-note"],[1,"fas","fa-check","mr-3"],[1,"price-button"],[1,"btn","btn-dark","btn-buy"],[1,"col-large-3","col-medium-6","col-smallest-12","card-service","col-custom"],[1,"price-header","header-custom"],[1,"fab","fa-codepen"],[1,"price-value","value-custom"],[1,"price-button","button-custom"],[1,"fab","fa-connectdevelop"],[1,"bg-review"],[1,"section-reivew"],[1,"review-avt"],["src","http://www.shreethemes.in/promize/layouts/images/client/04.jpg","alt","",1,"avt-user"],[1,"review-text"],[1,"review-star"],[1,"list-star"],[1,"fas","fa-star"],[1,"fas","fa-star-half-alt"],[1,"reivew-user"],[1,"reivew-job"],[1,"section","section-team"],[1,"col-large-3","col-medium-6","col-small-12","card-service"],[1,"team-member"],[1,"team-img"],["src","./assets/img/user-1.jpg","alt","",1,"member-img"],[1,"member-info"],[1,"dicription"],[1,"list-social"],[1,"list-icon"],["href","",1,"list-link"],[1,"fab","fa-facebook-f"],[1,"fab","fa-dribbble"],[1,"fab","fa-instagram"],[1,"fab","fa-twitter"],["src","./assets/img/user-2.jpg","alt","",1,"member-img"],["src","./assets/img/user-3.jpg","alt","",1,"member-img"],["src","./assets/img/user-4.jpg","alt","",1,"member-img"],[1,"section","section-news"],[1,"card-news"],[1,"aricle-post"],[1,"post-preview"],["src","./assets/img/card-news-1.jpg","alt","",1,"post-img"],[1,"post-date"],[1,"post-day"],[1,"post-text"],[1,"post-title"],[1,"post-content"],[1,"read-more"],["href","#"],[1,"fas","fa-angle-right"],[1,"post-footer"],[1,"footer-list"],[1,"list-item"],[1,"fas","fa-user"],[1,"fas","fa-tag"],["src","./assets/img/card-news-2.jpg","alt","",1,"post-img"],["src","./assets/img/card-news-3.jpg","alt","",1,"post-img"]],template:function(i,e){if(1&i){s.Kb(0,"app-carousel"),s.Mb(1,"main",0),s.Mb(2,"section",1),s.Mb(3,"div",2),s.Mb(4,"div",3),s.Mb(5,"h2",4),s.dc(6,"Why choosing consult? "),s.Lb(),s.Mb(7,"p",5),s.dc(8,"Cross-agency coordination clean water rural, promising development turmoil inclusive education transformative community. "),s.Lb(),s.Lb(),s.Mb(9,"div",6),s.Mb(10,"div",7),s.Mb(11,"div",8),s.Mb(12,"div",9),s.Kb(13,"img",10),s.Lb(),s.Mb(14,"div",11),s.Mb(15,"h4",12),s.dc(16,"Expert Advisor "),s.Lb(),s.Mb(17,"p",13),s.dc(18,"Promising development turmoil inclusive education transformative community. "),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(19,"div",7),s.Mb(20,"div",8),s.Mb(21,"div",9),s.Kb(22,"img",14),s.Lb(),s.Mb(23,"div",11),s.Mb(24,"h4",12),s.dc(25,"Expert Advisor "),s.Lb(),s.Mb(26,"p",13),s.dc(27,"Promising development turmoil inclusive education transformative community. "),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(28,"div",7),s.Mb(29,"div",8),s.Mb(30,"div",9),s.Kb(31,"img",15),s.Lb(),s.Mb(32,"div",11),s.Mb(33,"h4",12),s.dc(34,"Expert Advisor "),s.Lb(),s.Mb(35,"p",13),s.dc(36,"Promising development turmoil inclusive education transformative community. "),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(37,"section"),s.Mb(38,"div",16),s.Mb(39,"div",6),s.Mb(40,"div",17),s.Mb(41,"div",18),s.Kb(42,"img",19),s.Lb(),s.Lb(),s.Mb(43,"div",17),s.Mb(44,"div",20),s.Mb(45,"div",21),s.Mb(46,"h4",22),s.dc(47,"Let's make great thing together !"),s.Lb(),s.Mb(48,"div",23),s.Mb(49,"ul",24),s.Mb(50,"li",25),s.Kb(51,"i",26),s.dc(52," Lorem ipsum dolor sit amet "),s.Lb(),s.Mb(53,"li",25),s.Kb(54,"i",26),s.dc(55," Sed ut perspiciatis unde omnis "),s.Lb(),s.Mb(56,"li",25),s.Kb(57,"i",26),s.dc(58," But I must explain to you how all this "),s.Lb(),s.Mb(59,"li",25),s.Kb(60,"i",26),s.dc(61," At vero eos et accusamus et iusto odio "),s.Lb(),s.Mb(62,"li",25),s.Kb(63,"i",26),s.dc(64," On the other hand, we denounce "),s.Lb(),s.Lb(),s.Mb(65,"p",27),s.dc(66,"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. "),s.Lb(),s.Mb(67,"a",28),s.dc(68,"Read more "),s.Kb(69,"i",29),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(70,"section",1),s.Mb(71,"div",2),s.Mb(72,"div",3),s.Mb(73,"h2",4),s.dc(74,"Amazing Services"),s.Lb(),s.Mb(75,"p",5),s.dc(76,"Cross-agency coordination clean water rural, promising development turmoil inclusive education transformative community. "),s.Lb(),s.Lb(),s.Mb(77,"div",6),s.Mb(78,"div",7),s.Mb(79,"div",8),s.Mb(80,"div",9),s.Kb(81,"i",30),s.Lb(),s.Mb(82,"div",11),s.Mb(83,"h4",12),s.dc(84,"Expert Advisor "),s.Lb(),s.Mb(85,"p",13),s.dc(86,"Promising development turmoil inclusive education transformative community. "),s.Lb(),s.Mb(87,"div",31),s.Mb(88,"a",32),s.dc(89,"Read More "),s.Kb(90,"i",33),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(91,"div",7),s.Mb(92,"div",8),s.Mb(93,"div",9),s.Kb(94,"i",34),s.Lb(),s.Mb(95,"div",11),s.Mb(96,"h4",12),s.dc(97,"Expert Advisor "),s.Lb(),s.Mb(98,"p",13),s.dc(99,"Promising development turmoil inclusive education transformative community. "),s.Lb(),s.Mb(100,"div",31),s.Mb(101,"a",32),s.dc(102,"Read More "),s.Kb(103,"i",33),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(104,"div",7),s.Mb(105,"div",8),s.Mb(106,"div",9),s.Kb(107,"i",35),s.Lb(),s.Mb(108,"div",11),s.Mb(109,"h4",12),s.dc(110,"Expert Advisor "),s.Lb(),s.Mb(111,"p",13),s.dc(112,"Promising development turmoil inclusive education transformative community. "),s.Lb(),s.Mb(113,"div",31),s.Mb(114,"a",32),s.dc(115,"Read More "),s.Kb(116,"i",33),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(117,"div",7),s.Mb(118,"div",8),s.Mb(119,"div",9),s.Kb(120,"i",36),s.Lb(),s.Mb(121,"div",11),s.Mb(122,"h4",12),s.dc(123,"Expert Advisor "),s.Lb(),s.Mb(124,"p",13),s.dc(125,"Promising development turmoil inclusive education transformative community. "),s.Lb(),s.Mb(126,"div",31),s.Mb(127,"a",32),s.dc(128,"Read More "),s.Kb(129,"i",33),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(130,"div",7),s.Mb(131,"div",8),s.Mb(132,"div",9),s.Kb(133,"i",37),s.Lb(),s.Mb(134,"div",11),s.Mb(135,"h4",12),s.dc(136,"Expert Advisor "),s.Lb(),s.Mb(137,"p",13),s.dc(138,"Promising development turmoil inclusive education transformative community. "),s.Lb(),s.Mb(139,"div",31),s.Mb(140,"a",32),s.dc(141,"Read More "),s.Kb(142,"i",33),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(143,"div",7),s.Mb(144,"div",8),s.Mb(145,"div",9),s.Kb(146,"i",38),s.Lb(),s.Mb(147,"div",11),s.Mb(148,"h4",12),s.dc(149,"Expert Advisor "),s.Lb(),s.Mb(150,"p",13),s.dc(151,"Promising development turmoil inclusive education transformative community. "),s.Lb(),s.Mb(152,"div",31),s.Mb(153,"a",32),s.dc(154,"Read More "),s.Kb(155,"i",33),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(156,"section",39),s.Mb(157,"div",2),s.Mb(158,"div",40),s.Mb(159,"div",41),s.Mb(160,"div",42),s.Mb(161,"h4",43),s.dc(162,"Let's Get Started ! "),s.Lb(),s.Mb(163,"p",44),s.dc(164,"Paying attention to what our customers want and what they say is the most important value in Stylemix. "),s.Lb(),s.Lb(),s.Lb(),s.Mb(165,"div",45),s.Mb(166,"div",46),s.Mb(167,"a",47),s.dc(168,"Buy now"),s.Lb(),s.Mb(169,"a",48),s.dc(170,"Contact us"),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(171,"section",1),s.Mb(172,"div",2),s.Mb(173,"div",3),s.Mb(174,"h2",4),s.dc(175,"OUR BUSINESS PRICING "),s.Lb(),s.Mb(176,"p",5),s.dc(177,"Cross-agency coordination clean water rural, promising development turmoil inclusive education transformative community. "),s.Lb(),s.Lb(),s.Mb(178,"div",49),s.Mb(179,"div",50),s.Mb(180,"div",51),s.Mb(181,"div",52),s.Kb(182,"i",53),s.Mb(183,"h3",54),s.dc(184,"STARTER"),s.Lb(),s.Mb(185,"p",55),s.dc(186,"Suitable for starter "),s.Lb(),s.Lb(),s.Mb(187,"div",56),s.Mb(188,"h4",57),s.dc(189," $10.99 "),s.Mb(190,"span"),s.dc(191,"/Month"),s.Lb(),s.Lb(),s.Lb(),s.Mb(192,"div",58),s.Mb(193,"ul",59),s.Mb(194,"li",60),s.Kb(195,"i",61),s.dc(196," Full Access "),s.Lb(),s.Mb(197,"li",60),s.Kb(198,"i",61),s.dc(199," Source Files "),s.Lb(),s.Mb(200,"li",60),s.Kb(201,"i",61),s.dc(202," 100 User Accounts "),s.Lb(),s.Mb(203,"li",60),s.Kb(204,"i",61),s.dc(205," 1 Year License "),s.Lb(),s.Mb(206,"li",60),s.Kb(207,"i",61),s.dc(208," Phone & Email Support "),s.Lb(),s.Lb(),s.Lb(),s.Mb(209,"div",62),s.Mb(210,"button",63),s.dc(211,"Buy Now"),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(212,"div",50),s.Mb(213,"div",51),s.Mb(214,"div",52),s.Kb(215,"i",30),s.Mb(216,"h3",54),s.dc(217,"PROFESSIONAL"),s.Lb(),s.Mb(218,"p",55),s.dc(219,"Suitable for Regular "),s.Lb(),s.Lb(),s.Mb(220,"div",56),s.Mb(221,"h4",57),s.dc(222," $99.99 "),s.Mb(223,"span"),s.dc(224,"/Month"),s.Lb(),s.Lb(),s.Lb(),s.Mb(225,"div",58),s.Mb(226,"ul",59),s.Mb(227,"li",60),s.Kb(228,"i",61),s.dc(229," Full Access "),s.Lb(),s.Mb(230,"li",60),s.Kb(231,"i",61),s.dc(232," Source Files "),s.Lb(),s.Mb(233,"li",60),s.Kb(234,"i",61),s.dc(235," 100 User Accounts "),s.Lb(),s.Mb(236,"li",60),s.Kb(237,"i",61),s.dc(238," 1 Year License "),s.Lb(),s.Mb(239,"li",60),s.Kb(240,"i",61),s.dc(241," Phone & Email Support "),s.Lb(),s.Lb(),s.Lb(),s.Mb(242,"div",62),s.Mb(243,"button",63),s.dc(244,"Buy Now"),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(245,"div",64),s.Mb(246,"div",51),s.Mb(247,"div",65),s.Kb(248,"i",66),s.Mb(249,"h3",54),s.dc(250,"STANDERD"),s.Lb(),s.Mb(251,"p",55),s.dc(252,"Suitable for Business "),s.Lb(),s.Lb(),s.Mb(253,"div",67),s.Mb(254,"h4",57),s.dc(255," $199.99"),s.Mb(256,"span"),s.dc(257,"/Month"),s.Lb(),s.Lb(),s.Lb(),s.Mb(258,"div",58),s.Mb(259,"ul",59),s.Mb(260,"li",60),s.Kb(261,"i",61),s.dc(262," Full Access "),s.Lb(),s.Mb(263,"li",60),s.Kb(264,"i",61),s.dc(265," Source Files "),s.Lb(),s.Mb(266,"li",60),s.Kb(267,"i",61),s.dc(268," 100 User Accounts "),s.Lb(),s.Mb(269,"li",60),s.Kb(270,"i",61),s.dc(271," 1 Year License "),s.Lb(),s.Mb(272,"li",60),s.Kb(273,"i",61),s.dc(274," Phone & Email Support "),s.Lb(),s.Lb(),s.Lb(),s.Mb(275,"div",68),s.Mb(276,"button",63),s.dc(277,"Buy Now"),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(278,"div",50),s.Mb(279,"div",51),s.Mb(280,"div",52),s.Kb(281,"i",69),s.Mb(282,"h3",54),s.dc(283,"PREMIUM"),s.Lb(),s.Mb(284,"p",55),s.dc(285,"Suitable for Premium "),s.Lb(),s.Lb(),s.Mb(286,"div",56),s.Mb(287,"h4",57),s.dc(288," $499.99"),s.Mb(289,"span"),s.dc(290,"/Month"),s.Lb(),s.Lb(),s.Lb(),s.Mb(291,"div",58),s.Mb(292,"ul",59),s.Mb(293,"li",60),s.Kb(294,"i",61),s.dc(295," Full Access "),s.Lb(),s.Mb(296,"li",60),s.Kb(297,"i",61),s.dc(298," Source Files "),s.Lb(),s.Mb(299,"li",60),s.Kb(300,"i",61),s.dc(301," 100 User Accounts "),s.Lb(),s.Mb(302,"li",60),s.Kb(303,"i",61),s.dc(304," 1 Year License "),s.Lb(),s.Mb(305,"li",60),s.Kb(306,"i",61),s.dc(307," Phone & Email Support "),s.Lb(),s.Lb(),s.Lb(),s.Mb(308,"div",62),s.Mb(309,"button",63),s.dc(310,"Buy Now"),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(311,"section"),s.Mb(312,"div",70),s.Mb(313,"div",2),s.Mb(314,"div",71),s.Mb(315,"div",72),s.Kb(316,"img",73),s.Lb(),s.Mb(317,"div",74),s.Mb(318,"p",5),s.dc(319,'" It has roots in a piece of classical Latin literature from 45 BC, making sure there isn\'t years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia "'),s.Lb(),s.Mb(320,"ul",75),s.Mb(321,"li",76),s.Kb(322,"i",77),s.Lb(),s.Mb(323,"li",76),s.Kb(324,"i",77),s.Lb(),s.Mb(325,"li",76),s.Kb(326,"i",77),s.Lb(),s.Mb(327,"li",76),s.Kb(328,"i",77),s.Lb(),s.Mb(329,"li",76),s.Kb(330,"i",78),s.Lb(),s.Lb(),s.Mb(331,"h4",79),s.dc(332,"Dieu Nguyen H."),s.Lb(),s.Mb(333,"h6",80),s.dc(334,"C.E.O"),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(335,"section",81),s.Mb(336,"div",2),s.Mb(337,"div",3),s.Mb(338,"h2",4),s.dc(339,"OUR TEAM MEMBER "),s.Lb(),s.Mb(340,"p",5),s.dc(341,"Cross-agency coordination clean water rural, promising development turmoil inclusive education transformative community. "),s.Lb(),s.Lb(),s.Mb(342,"div",6),s.Mb(343,"div",82),s.Mb(344,"div",83),s.Mb(345,"div",84),s.Kb(346,"img",85),s.Lb(),s.Mb(347,"div",86),s.Mb(348,"small"),s.dc(349,"Owner -"),s.Mb(350,"i"),s.dc(351,"(Derector)"),s.Lb(),s.Lb(),s.Mb(352,"h4"),s.dc(353,"ANTHONY DEGO"),s.Lb(),s.Mb(354,"p",87),s.dc(355,"Lorem ipsum dolor sit amet, conse ctetur adipi sicing "),s.Lb(),s.Mb(356,"ul",88),s.Mb(357,"li",89),s.Mb(358,"a",90),s.Kb(359,"i",91),s.Lb(),s.Lb(),s.Mb(360,"li",89),s.Mb(361,"a",90),s.Kb(362,"i",92),s.Lb(),s.Lb(),s.Mb(363,"li",89),s.Mb(364,"a",90),s.Kb(365,"i",93),s.Lb(),s.Lb(),s.Mb(366,"li",89),s.Mb(367,"a",90),s.Kb(368,"i",94),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(369,"div",82),s.Mb(370,"div",83),s.Mb(371,"div",84),s.Kb(372,"img",95),s.Lb(),s.Mb(373,"div",86),s.Mb(374,"small"),s.dc(375,"Owner -"),s.Mb(376,"i"),s.dc(377,"(Derector)"),s.Lb(),s.Lb(),s.Mb(378,"h4"),s.dc(379,"ANTHONY DEGO"),s.Lb(),s.Mb(380,"p",87),s.dc(381,"Lorem ipsum dolor sit amet, conse ctetur adipi sicing "),s.Lb(),s.Mb(382,"ul",88),s.Mb(383,"li",89),s.Mb(384,"a",90),s.Kb(385,"i",91),s.Lb(),s.Lb(),s.Mb(386,"li",89),s.Mb(387,"a",90),s.Kb(388,"i",92),s.Lb(),s.Lb(),s.Mb(389,"li",89),s.Mb(390,"a",90),s.Kb(391,"i",93),s.Lb(),s.Lb(),s.Mb(392,"li",89),s.Mb(393,"a",90),s.Kb(394,"i",94),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(395,"div",82),s.Mb(396,"div",83),s.Mb(397,"div",84),s.Kb(398,"img",96),s.Lb(),s.Mb(399,"div",86),s.Mb(400,"small"),s.dc(401,"Owner -"),s.Mb(402,"i"),s.dc(403,"(Derector)"),s.Lb(),s.Lb(),s.Mb(404,"h4"),s.dc(405,"ANTHONY DEGO"),s.Lb(),s.Mb(406,"p",87),s.dc(407,"Lorem ipsum dolor sit amet, conse ctetur adipi sicing "),s.Lb(),s.Mb(408,"ul",88),s.Mb(409,"li",89),s.Mb(410,"a",90),s.Kb(411,"i",91),s.Lb(),s.Lb(),s.Mb(412,"li",89),s.Mb(413,"a",90),s.Kb(414,"i",92),s.Lb(),s.Lb(),s.Mb(415,"li",89),s.Mb(416,"a",90),s.Kb(417,"i",93),s.Lb(),s.Lb(),s.Mb(418,"li",89),s.Mb(419,"a",90),s.Kb(420,"i",94),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(421,"div",82),s.Mb(422,"div",83),s.Mb(423,"div",84),s.Kb(424,"img",97),s.Lb(),s.Mb(425,"div",86),s.Mb(426,"small"),s.dc(427,"Owner -"),s.Mb(428,"i"),s.dc(429,"(Derector)"),s.Lb(),s.Lb(),s.Mb(430,"h4"),s.dc(431,"ANTHONY DEGO"),s.Lb(),s.Mb(432,"p",87),s.dc(433,"Lorem ipsum dolor sit amet, conse ctetur adipi sicing "),s.Lb(),s.Mb(434,"ul",88),s.Mb(435,"li",89),s.Mb(436,"a",90),s.Kb(437,"i",91),s.Lb(),s.Lb(),s.Mb(438,"li",89),s.Mb(439,"a",90),s.Kb(440,"i",92),s.Lb(),s.Lb(),s.Mb(441,"li",89),s.Mb(442,"a",90),s.Kb(443,"i",93),s.Lb(),s.Lb(),s.Mb(444,"li",89),s.Mb(445,"a",90),s.Kb(446,"i",94),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(447,"section",98),s.Mb(448,"div",2),s.Mb(449,"div",3),s.Mb(450,"h2",4),s.dc(451,"LATEST NEWS "),s.Lb(),s.Mb(452,"p",5),s.dc(453,"Cross-agency coordination clean water rural, promising development turmoil inclusive education transformative community. "),s.Lb(),s.Lb(),s.Mb(454,"div",99),s.Mb(455,"div",6),s.Mb(456,"div",7),s.Mb(457,"div",100),s.Mb(458,"div",101),s.Kb(459,"img",102),s.Mb(460,"ul",103),s.Mb(461,"li",104),s.dc(462,"05"),s.Lb(),s.Mb(463,"span"),s.dc(464,"June"),s.Lb(),s.Lb(),s.Lb(),s.Mb(465,"div",105),s.Mb(466,"h4",106),s.dc(467,"As stocks, some strategists"),s.Lb(),s.Mb(468,"p",107),s.dc(469,"On the other hand, we denounce with righteous indignation and dislike men who are indignation. "),s.Lb(),s.Mb(470,"div",108),s.Mb(471,"a",109),s.dc(472,"Read More "),s.Kb(473,"i",110),s.Lb(),s.Lb(),s.Mb(474,"div",111),s.Mb(475,"ul",112),s.Mb(476,"li",113),s.Kb(477,"i",114),s.Mb(478,"a",109),s.dc(479," Nobita "),s.Lb(),s.Lb(),s.Mb(480,"li",113),s.Kb(481,"i",115),s.Mb(482,"a",109),s.dc(483,"Business"),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(484,"div",7),s.Mb(485,"div",100),s.Mb(486,"div",101),s.Kb(487,"img",116),s.Mb(488,"ul",103),s.Mb(489,"li",104),s.dc(490,"05"),s.Lb(),s.Mb(491,"span"),s.dc(492,"June"),s.Lb(),s.Lb(),s.Lb(),s.Mb(493,"div",105),s.Mb(494,"h4",106),s.dc(495,"Explore Vancouver Mountain"),s.Lb(),s.Mb(496,"p",107),s.dc(497,"On the other hand, we denounce with righteous indignation and dislike men who are indignation. "),s.Lb(),s.Mb(498,"div",108),s.Mb(499,"a",109),s.dc(500,"Read More "),s.Kb(501,"i",110),s.Lb(),s.Lb();s.Mb(502,"div",111),s.Mb(503,"ul",112),s.Mb(504,"li",113),s.Kb(505,"i",114),s.Mb(506,"a",109),s.dc(507," Nancy "),s.Lb(),s.Lb(),s.Mb(508,"li",113),s.Kb(509,"i",115),s.Mb(510,"a",109),s.dc(511,"Business"),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(512,"div",7),s.Mb(513,"div",100),s.Mb(514,"div",101),s.Kb(515,"img",117),s.Mb(516,"ul",103),s.Mb(517,"li",104),s.dc(518,"05"),s.Lb(),s.Mb(519,"span"),s.dc(520,"June"),s.Lb(),s.Lb(),s.Lb(),s.Mb(521,"div",105),s.Mb(522,"h4",106),s.dc(523,"Breakfast Fried With Bacon"),s.Lb(),s.Mb(524,"p",107),s.dc(525,"On the other hand, we denounce with righteous indignation and dislike men who are indignation. "),s.Lb(),s.Mb(526,"div",108),s.Mb(527,"a",109),s.dc(528,"Read More "),s.Kb(529,"i",110),s.Lb(),s.Lb(),s.Mb(530,"div",111),s.Mb(531,"ul",112),s.Mb(532,"li",113),s.Kb(533,"i",114),s.Mb(534,"a",109),s.dc(535," Cecil "),s.Lb(),s.Lb(),s.Mb(536,"li",113),s.Kb(537,"i",115),s.Mb(538,"a",109),s.dc(539,"Business"),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Kb(540,"app-footer-top")}},directives:[L,h],styles:[""]}),i})()}];let p=(()=>{class i{}return i.\u0275mod=s.Hb({type:i}),i.\u0275inj=s.Gb({factory:function(e){return new(e||i)},imports:[[u.b.forChild(v)],u.b]}),i})(),g=(()=>{class i{}return i.\u0275mod=s.Hb({type:i}),i.\u0275inj=s.Gb({factory:function(e){return new(e||i)},imports:[[t.b,p,l,d]]}),i})()}}]);