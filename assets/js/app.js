/*! angular-groovy - v0.0.1 - 2015-08-18 *//*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.2.0",d.prototype.close=function(b){function c(){f.detach().trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",c).emulateTransitionEnd(150):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.2.0",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),d[e](null==f[b]?this.options[b]:f[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b).on("keydown.bs.carousel",a.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.2.0",c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},c.prototype.keydown=function(a){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.to=function(b){var c=this,d=this.getItemIndex(this.$active=this.$element.find(".item.active"));return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=e[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:g});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,f&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(e)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:g});return a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one("bsTransitionEnd",function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger(m)),f&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(b=!b),e||d.data("bs.collapse",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};c.VERSION="3.2.0",c.DEFAULTS={toggle:!0},c.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},c.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var c=a.Event("show.bs.collapse");if(this.$element.trigger(c),!c.isDefaultPrevented()){var d=this.$parent&&this.$parent.find("> .panel > .in");if(d&&d.length){var e=d.data("bs.collapse");if(e&&e.transitioning)return;b.call(d,"hide"),e||d.data("bs.collapse",null)}var f=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[f](0),this.transitioning=1;var g=function(){this.$element.removeClass("collapsing").addClass("collapse in")[f](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return g.call(this);var h=a.camelCase(["scroll",f].join("-"));this.$element.one("bsTransitionEnd",a.proxy(g,this)).emulateTransitionEnd(350)[f](this.$element[0][h])}}},c.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},c.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var d=a.fn.collapse;a.fn.collapse=b,a.fn.collapse.Constructor=c,a.fn.collapse.noConflict=function(){return a.fn.collapse=d,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(c){var d,e=a(this),f=e.attr("data-target")||c.preventDefault()||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),g=a(f),h=g.data("bs.collapse"),i=h?"toggle":e.data(),j=e.attr("data-parent"),k=j&&a(j);h&&h.transitioning||(k&&k.find('[data-toggle="collapse"][data-parent="'+j+'"]').not(e).addClass("collapsed"),e[g.hasClass("in")?"addClass":"removeClass"]("collapsed")),b.call(g,i)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.2.0",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f+', [role="menu"], [role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.2.0",c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(c.$body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one("bsTransitionEnd",function(){c.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(300):c.$element.trigger("focus").trigger(e)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;if(this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;e?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(150):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var f=function(){c.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",f).emulateTransitionEnd(150):f()}else b&&b()},c.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.2.0",c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var c=a.contains(document.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!c)return;var d=this,e=this.tip(),f=this.getUID(this.type);this.setContent(),e.attr("id",f),this.$element.attr("aria-describedby",f),this.options.animation&&e.addClass("fade");var g="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,h=/\s?auto?\s?/i,i=h.test(g);i&&(g=g.replace(h,"")||"top"),e.detach().css({top:0,left:0,display:"block"}).addClass(g).data("bs."+this.type,this),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element);var j=this.getPosition(),k=e[0].offsetWidth,l=e[0].offsetHeight;if(i){var m=g,n=this.$element.parent(),o=this.getPosition(n);g="bottom"==g&&j.top+j.height+l-o.scroll>o.height?"top":"top"==g&&j.top-o.scroll-l<0?"bottom":"right"==g&&j.right+k>o.width?"left":"left"==g&&j.left-k<o.left?"right":g,e.removeClass(m).addClass(g)}var p=this.getCalculatedOffset(g,j,k,l);this.applyPlacement(p,g);var q=function(){d.$element.trigger("shown.bs."+d.type),d.hoverState=null};a.support.transition&&this.$tip.hasClass("fade")?e.one("bsTransitionEnd",q).emulateTransitionEnd(150):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=k.left?2*k.left-e+i:2*k.top-f+j,m=k.left?"left":"top",n=k.left?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(l,d[0][n],m)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one("bsTransitionEnd",b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName;return a.extend({},"function"==typeof c.getBoundingClientRect?c.getBoundingClientRect():null,{scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop(),width:d?a(window).width():b.outerWidth(),height:d?a(window).height():b.outerHeight()},d?{top:0,left:0}:b.offset())},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.2.0",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").empty()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.2.0",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.2.0",c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.closest("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},c.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),f.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(c){c.preventDefault(),b.call(a(this),"show")})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.2.0",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=a(document).height(),d=this.$target.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=b-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){null!=this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:b-this.$element.height()-h}))}}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},d.offsetBottom&&(d.offset.bottom=d.offsetBottom),d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);


window.google = window.google || {};
google.maps = google.maps || {};
(function() {

  function getScript(src) {
    document.write('<' + 'script src="' + src + '"' +
                   ' type="text/javascript"><' + '/script>');
  }

  var modules = google.maps.modules = {};
  google.maps.__gjsload__ = function(name, text) {
    modules[name] = text;
  };

  google.maps.Load = function(apiLoad) {
    delete google.maps.Load;
    apiLoad([0.009999999776482582,[[["http://mt0.googleapis.com/vt?lyrs=m@279000000\u0026src=api\u0026hl=en\u0026","http://mt1.googleapis.com/vt?lyrs=m@279000000\u0026src=api\u0026hl=en\u0026"],null,null,null,null,"m@279000000",["https://mts0.google.com/vt?lyrs=m@279000000\u0026src=api\u0026hl=en\u0026","https://mts1.google.com/vt?lyrs=m@279000000\u0026src=api\u0026hl=en\u0026"]],[["http://khm0.googleapis.com/kh?v=161\u0026hl=en\u0026","http://khm1.googleapis.com/kh?v=161\u0026hl=en\u0026"],null,null,null,1,"161",["https://khms0.google.com/kh?v=161\u0026hl=en\u0026","https://khms1.google.com/kh?v=161\u0026hl=en\u0026"]],[["http://mt0.googleapis.com/vt?lyrs=h@279000000\u0026src=api\u0026hl=en\u0026","http://mt1.googleapis.com/vt?lyrs=h@279000000\u0026src=api\u0026hl=en\u0026"],null,null,null,null,"h@279000000",["https://mts0.google.com/vt?lyrs=h@279000000\u0026src=api\u0026hl=en\u0026","https://mts1.google.com/vt?lyrs=h@279000000\u0026src=api\u0026hl=en\u0026"]],[["http://mt0.googleapis.com/vt?lyrs=t@132,r@279000000\u0026src=api\u0026hl=en\u0026","http://mt1.googleapis.com/vt?lyrs=t@132,r@279000000\u0026src=api\u0026hl=en\u0026"],null,null,null,null,"t@132,r@279000000",["https://mts0.google.com/vt?lyrs=t@132,r@279000000\u0026src=api\u0026hl=en\u0026","https://mts1.google.com/vt?lyrs=t@132,r@279000000\u0026src=api\u0026hl=en\u0026"]],null,null,[["http://cbk0.googleapis.com/cbk?","http://cbk1.googleapis.com/cbk?"]],[["http://khm0.googleapis.com/kh?v=84\u0026hl=en\u0026","http://khm1.googleapis.com/kh?v=84\u0026hl=en\u0026"],null,null,null,null,"84",["https://khms0.google.com/kh?v=84\u0026hl=en\u0026","https://khms1.google.com/kh?v=84\u0026hl=en\u0026"]],[["http://mt0.googleapis.com/mapslt?hl=en\u0026","http://mt1.googleapis.com/mapslt?hl=en\u0026"]],[["http://mt0.googleapis.com/mapslt/ft?hl=en\u0026","http://mt1.googleapis.com/mapslt/ft?hl=en\u0026"]],[["http://mt0.googleapis.com/vt?hl=en\u0026","http://mt1.googleapis.com/vt?hl=en\u0026"]],[["http://mt0.googleapis.com/mapslt/loom?hl=en\u0026","http://mt1.googleapis.com/mapslt/loom?hl=en\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=en\u0026","https://mts1.googleapis.com/mapslt?hl=en\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=en\u0026","https://mts1.googleapis.com/mapslt/ft?hl=en\u0026"]],[["https://mts0.googleapis.com/mapslt/loom?hl=en\u0026","https://mts1.googleapis.com/mapslt/loom?hl=en\u0026"]]],["en","US",null,0,null,null,"http://maps.gstatic.com/mapfiles/","http://csi.gstatic.com","https://maps.googleapis.com","http://maps.googleapis.com",null,"https://maps.google.com"],["http://maps.gstatic.com/maps-api-v3/api/js/18/14","3.18.14"],[3062753088],1,null,null,null,null,null,"",null,null,0,"http://khm.googleapis.com/mz?v=161\u0026",null,"https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"http://mt.googleapis.com/vt/icon",[["http://mt0.googleapis.com/vt","http://mt1.googleapis.com/vt"],["https://mts0.googleapis.com/vt","https://mts1.googleapis.com/vt"],[null,[[0,"m",279000000]],[null,"en","US",null,18,null,null,null,null,null,null,[[47],[37,[["smartmaps"]]]]],0],[null,[[0,"m",279000000]],[null,"en","US",null,18,null,null,null,null,null,null,[[47],[37,[["smartmaps"]]]]],3],[null,[[0,"m",279000000]],[null,"en","US",null,18,null,null,null,null,null,null,[[50],[37,[["smartmaps"]]]]],0],[null,[[0,"m",279000000]],[null,"en","US",null,18,null,null,null,null,null,null,[[50],[37,[["smartmaps"]]]]],3],[null,[[4,"t",132],[0,"r",132000000]],[null,"en","US",null,18,null,null,null,null,null,null,[[63],[37,[["smartmaps"]]]]],0],[null,[[4,"t",132],[0,"r",132000000]],[null,"en","US",null,18,null,null,null,null,null,null,[[63],[37,[["smartmaps"]]]]],3],[null,null,[null,"en","US",null,18],0],[null,null,[null,"en","US",null,18],3],[null,null,[null,"en","US",null,18],6],[null,null,[null,"en","US",null,18],0],["https://mts0.google.com/vt","https://mts1.google.com/vt"],"/maps/vt",279000000,132],2,500,["http://geo0.ggpht.com/cbk","http://g0.gstatic.com/landmark/tour","http://g0.gstatic.com/landmark/config","","http://www.google.com/maps/preview/log204","","http://static.panoramio.com.storage.googleapis.com/photos/"],["https://www.google.com/maps/api/js/master?pb=!1m2!1u18!2s14!2sen!3sUS!4s18/14","https://www.google.com/maps/api/js/widget?pb=!1m2!1u18!2s14!2sen"],1,0], loadScriptTime);
  };
  var loadScriptTime = (new Date).getTime();
  getScript("https://maps.googleapis.com/maps/api/js");
})();

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.3
 *
 */
(function(e){e.fn.extend({slimScroll:function(g){var a=e.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},g);this.each(function(){function u(d){if(r){d=d||window.event;
var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);e(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&m(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function m(d,e,g){k=!1;var f=d,h=b.outerHeight()-c.outerHeight();e&&(f=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),f=Math.min(Math.max(f,0),h),f=0<d?Math.ceil(f):Math.floor(f),c.css({top:f+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());
f=l*(b[0].scrollHeight-b.outerHeight());g&&(f=d,d=f/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),h),c.css({top:d+"px"}));b.scrollTop(f);b.trigger("slimscrolling",~~f);v();p()}function C(){window.addEventListener?(this.addEventListener("DOMMouseScroll",u,!1),this.addEventListener("mousewheel",u,!1)):document.attachEvent("onmousewheel",u)}function w(){s=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),30);c.css({height:s+"px"});var a=s==b.outerHeight()?"none":"block";c.css({display:a})}
function v(){w();clearTimeout(A);l==~~l?(k=a.allowPageScroll,B!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;B=l;s>=b.outerHeight()?k=!0:(c.stop(!0,!0).fadeIn("fast"),a.railVisible&&h.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(A=setTimeout(function(){a.disableFadeOut&&r||x||y||(c.fadeOut("slow"),h.fadeOut("slow"))},1E3))}var r,x,y,A,z,s,l,B,k=!1,b=e(this);if(b.parent().hasClass(a.wrapperClass)){var n=b.scrollTop(),c=b.parent().find("."+a.barClass),h=b.parent().find("."+a.railClass);
w();if(e.isPlainObject(g)){if("height"in g&&"auto"==g.height){b.parent().css("height","auto");b.css("height","auto");var q=b.parent().parent().height();b.parent().css("height",q);b.css("height",q)}if("scrollTo"in g)n=parseInt(a.scrollTo);else if("scrollBy"in g)n+=parseInt(a.scrollBy);else if("destroy"in g){c.remove();h.remove();b.unwrap();return}m(n,!1,!0)}}else if(!(e.isPlainObject(g)&&"destroy"in g)){a.height="auto"==a.height?b.parent().height():a.height;n=e("<div></div>").addClass(a.wrapperClass).css({position:"relative",
overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",width:a.width,height:a.height});var h=e("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=e("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?
"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),q="right"==a.position?{right:a.distance}:{left:a.distance};h.css(q);c.css(q);b.wrap(n);b.parent().append(c);b.parent().append(h);a.railDraggable&&c.bind("mousedown",function(a){var b=e(document);y=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);m(0,c.position().top,!1)});
b.bind("mouseup.slimscroll",function(a){y=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",function(a){a.stopPropagation();a.preventDefault();return!1});h.hover(function(){v()},function(){p()});c.hover(function(){x=!0},function(){x=!1});b.hover(function(){r=!0;v();p()},function(){r=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(z=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&
(m((z-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),z=b.originalEvent.touches[0].pageY)});w();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),m(0,!0)):"top"!==a.start&&(m(e(a.start).position().top,null,!0),a.alwaysVisible||c.hide());C()}});return this}});e.fn.extend({slimscroll:e.fn.slimScroll})})(jQuery);
(function(Q,W,t){'use strict';function R(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.15/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Sa(b){if(null==b||Ta(b))return!1;var a=b.length;return b.nodeType===
qa&&a?!0:C(b)||H(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d,e;if(b)if(G(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(H(b)||Sa(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==r)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Ed(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
b[d[e]],d[e]);return d}function mc(b){return function(a,c){b(c,a)}}function Fd(){return++ob}function nc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function w(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var l=f[g];b[l]=e[l]}}nc(b,a);return b}function aa(b){return parseInt(b,10)}function Ob(b,a){return w(Object.create(b),a)}function E(){}function ra(b){return b}function ea(b){return function(){return b}}function x(b){return"undefined"===
typeof b}function y(b){return"undefined"!==typeof b}function J(b){return null!==b&&"object"===typeof b}function C(b){return"string"===typeof b}function Y(b){return"number"===typeof b}function ga(b){return"[object Date]"===Ca.call(b)}function G(b){return"function"===typeof b}function Ua(b){return"[object RegExp]"===Ca.call(b)}function Ta(b){return b&&b.window===b}function Va(b){return b&&b.$evalAsync&&b.$watch}function Wa(b){return"boolean"===typeof b}function oc(b){return!(!b||!(b.nodeName||b.prop&&
b.attr&&b.find))}function Gd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function va(b){return z(b.nodeName||b[0]&&b[0].nodeName)}function Xa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Da(b,a,c,d){if(Ta(b)||Va(b))throw Ja("cpws");if(a){if(b===a)throw Ja("cpi");c=c||[];d=d||[];if(J(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(H(b))for(var f=a.length=0;f<b.length;f++)e=Da(b[f],null,c,d),J(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);
else{var g=a.$$hashKey;H(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Da(b[f],null,c,d),J(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);nc(a,g)}}else if(a=b)H(b)?a=Da(b,[],c,d):ga(b)?a=new Date(b.getTime()):Ua(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):J(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Da(b,e,c,d));return a}function sa(b,a){if(H(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(J(b))for(c in a=a||{},
b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ha(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(H(b)){if(!H(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ha(b[d],a[d]))return!1;return!0}}else{if(ga(b))return ga(a)?ha(b.getTime(),a.getTime()):!1;if(Ua(b))return Ua(a)?b.toString()==a.toString():!1;if(Va(b)||Va(a)||Ta(b)||Ta(a)||H(a)||ga(a)||Ua(a))return!1;c={};for(d in b)if("$"!==
d.charAt(0)&&!G(b[d])){if(!ha(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==t&&!G(a[d]))return!1;return!0}return!1}function Ya(b,a,c){return b.concat(Za.call(a,c))}function pc(b,a){var c=2<arguments.length?Za.call(arguments,2):[];return!G(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Ya(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Hd(b,a){var c=a;"string"===typeof b&&
"$"===b.charAt(0)&&"$"===b.charAt(1)?c=t:Ta(a)?c="$WINDOW":a&&W===a?c="$DOCUMENT":Va(a)&&(c="$SCOPE");return c}function $a(b,a){if("undefined"===typeof b)return t;Y(a)||(a=a?2:null);return JSON.stringify(b,Hd,a)}function qc(b){return C(b)?JSON.parse(b):b}function wa(b){b=A(b).clone();try{b.empty()}catch(a){}var c=A("<div>").append(b).html();try{return b[0].nodeType===pb?z(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+z(b)})}catch(d){return z(c)}}function rc(b){try{return decodeURIComponent(b)}catch(a){}}
function sc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=rc(c[0]),y(d)&&(b=y(c[1])?rc(c[1]):!0,tc.call(a,d)?H(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Pb(b){var a=[];r(b,function(b,d){H(b)?r(b,function(b){a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))}):a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))});return a.length?a.join("&"):""}function qb(b){return Ea(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ea(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Id(b,a){var c,d,e=rb.length;b=A(b);for(d=0;d<e;++d)if(c=rb[d]+a,C(c=b.attr(c)))return c;return null}function Jd(b,a){var c,d,e={};r(rb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});r(rb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Id(c,"strict-di"),
a(c,d?[d]:[],e))}function uc(b,a,c){J(c)||(c={});c=w({strictDi:!1},c);var d=function(){b=A(b);if(b.injector()){var d=b[0]===W?"document":wa(b);throw Ja("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=ab(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;Q&&e.test(Q.name)&&(c.debugInfoEnabled=!0,Q.name=Q.name.replace(e,""));if(Q&&!f.test(Q.name))return d();Q.name=Q.name.replace(f,"");ca.resumeBootstrap=function(b){r(b,function(b){a.push(b)});return d()};G(ca.resumeDeferredBootstrap)&&ca.resumeDeferredBootstrap()}function Kd(){Q.name="NG_ENABLE_DEBUG_INFO!"+Q.name;Q.location.reload()}function Ld(b){b=ca.element(b).injector();if(!b)throw Ja("test");return b.get("$$testability")}
function vc(b,a){a=a||"_";return b.replace(Md,function(b,d){return(d?a:"")+b.toLowerCase()})}function Nd(){var b;wc||((ta=Q.jQuery)&&ta.fn.on?(A=ta,w(ta.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),b=ta.cleanData,ta.cleanData=function(a){var c;if(Qb)Qb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=ta._data(e,"events"))&&c.$destroy&&ta(e).triggerHandler("$destroy");b(a)}):A=T,ca.element=A,wc=!0)}function Rb(b,a,c){if(!b)throw Ja("areq",
a||"?",c||"required");return b}function sb(b,a,c){c&&H(b)&&(b=b[b.length-1]);Rb(G(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function La(b,a){if("hasOwnProperty"===b)throw Ja("badname",a);}function xc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&G(b)?pc(e,b):b}function tb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return A(c)}function ia(){return Object.create(null)}
function Od(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=R("$injector"),d=R("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||R;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return u}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],q=a("$injector","invoke","push",d),u={_invokeQueue:b,_configBlocks:d,
_runBlocks:e,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:q,run:function(a){e.push(a);return this}};h&&q(h);return u})}})}function Pd(b){w(b,{bootstrap:uc,copy:Da,extend:w,equals:ha,
element:A,forEach:r,injector:ab,noop:E,bind:pc,toJson:$a,fromJson:qc,identity:ra,isUndefined:x,isDefined:y,isString:C,isFunction:G,isObject:J,isNumber:Y,isElement:oc,isArray:H,version:Qd,isDate:ga,lowercase:z,uppercase:ub,callbacks:{counter:0},getTestability:Ld,$$minErr:R,$$csp:bb,reloadWithDebugInfo:Kd});cb=Od(Q);try{cb("ngLocale")}catch(a){cb("ngLocale",[]).provider("$locale",Rd)}cb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Sd});a.provider("$compile",yc).directive({a:Td,
input:zc,textarea:zc,form:Ud,script:Vd,select:Wd,style:Xd,option:Yd,ngBind:Zd,ngBindHtml:$d,ngBindTemplate:ae,ngClass:be,ngClassEven:ce,ngClassOdd:de,ngCloak:ee,ngController:fe,ngForm:ge,ngHide:he,ngIf:ie,ngInclude:je,ngInit:ke,ngNonBindable:le,ngPluralize:me,ngRepeat:ne,ngShow:oe,ngStyle:pe,ngSwitch:qe,ngSwitchWhen:re,ngSwitchDefault:se,ngOptions:te,ngTransclude:ue,ngModel:ve,ngList:we,ngChange:xe,pattern:Ac,ngPattern:Ac,required:Bc,ngRequired:Bc,minlength:Cc,ngMinlength:Cc,maxlength:Dc,ngMaxlength:Dc,
ngValue:ye,ngModelOptions:ze}).directive({ngInclude:Ae}).directive(vb).directive(Ec);a.provider({$anchorScroll:Be,$animate:Ce,$browser:De,$cacheFactory:Ee,$controller:Fe,$document:Ge,$exceptionHandler:He,$filter:Fc,$interpolate:Ie,$interval:Je,$http:Ke,$httpBackend:Le,$location:Me,$log:Ne,$parse:Oe,$rootScope:Pe,$q:Qe,$$q:Re,$sce:Se,$sceDelegate:Te,$sniffer:Ue,$templateCache:Ve,$templateRequest:We,$$testability:Xe,$timeout:Ye,$window:Ze,$$rAF:$e,$$asyncCallback:af,$$jqLite:bf})}])}function db(b){return b.replace(cf,
function(a,b,d,e){return e?d.toUpperCase():d}).replace(df,"Moz$1")}function Gc(b){b=b.nodeType;return b===qa||!b||9===b}function Hc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Sb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(ef.exec(b)||["",""])[1].toLowerCase();d=ja[d]||ja._default;c.innerHTML=d[1]+b.replace(ff,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Ya(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});
return e}function T(b){if(b instanceof T)return b;var a;C(b)&&(b=N(b),a=!0);if(!(this instanceof T)){if(a&&"<"!=b.charAt(0))throw Tb("nosel");return new T(b)}if(a){a=W;var c;b=(c=gf.exec(b))?[a.createElement(c[1])]:(c=Hc(b,a))?c.childNodes:[]}Ic(this,b)}function Ub(b){return b.cloneNode(!0)}function wb(b,a){a||xb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)xb(c[d])}function Jc(b,a,c,d){if(y(d))throw Tb("offargs");var e=(d=yb(b))&&d.events,f=d&&d.handle;if(f)if(a)r(a.split(" "),
function(a){if(y(c)){var d=e[a];Xa(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function xb(b,a){var c=b.ng339,d=c&&zb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Jc(b)),delete zb[c],b.ng339=t))}function yb(b,a){var c=b.ng339,c=c&&zb[c];a&&!c&&(b.ng339=c=++hf,c=zb[c]={events:{},data:{},handle:t});return c}function Vb(b,a,c){if(Gc(b)){var d=y(c),e=!d&&a&&!J(a),
f=!a;b=(b=yb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];w(b,a)}}}function Ab(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Bb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",N((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+N(a)+" "," ")))})}function Cb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");
r(a.split(" "),function(a){a=N(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",N(c))}}function Ic(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Kc(b,a){return Db(b,"$"+(a||"ngController")+"Controller")}function Db(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=H(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=A.data(b,a[d]))!==t)return c;b=b.parentNode||
11===b.nodeType&&b.host}}function Lc(b){for(wb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Mc(b,a){a||wb(b);var c=b.parentNode;c&&c.removeChild(b)}function jf(b,a){a=a||Q;if("complete"===a.document.readyState)a.setTimeout(b);else A(a).on("load",b)}function Nc(b,a){var c=Eb[a.toLowerCase()];return c&&Oc[va(b)]&&c}function kf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Pc[a]}function lf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=
a[e||c.type],g=f?f.length:0;if(g){if(x(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=sa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function bf(){this.$get=function(){return w(T,{hasClass:function(b,a){b.attr&&(b=b[0]);
return Ab(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return Cb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return Bb(b,a)}})}}function Ma(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Fd)():c+":"+b}function eb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function mf(b){return(b=b.toString().replace(Qc,"").match(Rc))?"function("+(b[1]||"").replace(/[\s\r\n]+/,
" ")+")":"fn"}function ab(b,a){function c(a){return function(b,c){if(J(b))r(b,mc(a));else return a(b,c)}}function d(a,b){La(a,"service");if(G(b)||H(b))b=q.instantiate(b);if(!b.$get)throw Fa("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=s.invoke(b,this);if(x(c))throw Fa("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,
e[2])}}if(!n.get(a)){n.put(a,!0);try{C(a)?(c=cb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):G(a)?b.push(q.invoke(a)):H(a)?b.push(q.invoke(a)):sb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Fa("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Fa("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),
b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var k=[],h=ab.$$annotate(b,a,g),l,q,p;q=0;for(l=h.length;q<l;q++){p=h[q];if("string"!==typeof p)throw Fa("itkn",p);k.push(f&&f.hasOwnProperty(p)?f[p]:d(p,g))}H(b)&&(b=b[l]);return b.apply(c,k)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((H(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return J(a)||G(a)?a:d},get:d,annotate:ab.$$annotate,has:function(a){return p.hasOwnProperty(a+
"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],n=new eb([],!0),p={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ea(b),!1)}),constant:c(function(a,b){La(a,"constant");p[a]=b;u[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},q=p.$injector=h(p,function(a,b){ca.isString(b)&&k.push(b);
throw Fa("unpr",k.join(" <- "));}),u={},s=u.$injector=h(u,function(a,b){var c=q.get(a+"Provider",b);return s.invoke(c.$get,c,t,a)});r(g(b),function(a){s.invoke(a||E)});return s}function Be(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===va(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;G(c)?c=c():oc(c)?(c=c[0],c="fixed"!==
a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Y(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||jf(function(){d.$evalAsync(g)})});return g}]}function af(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:
function(b){return a(b,0,!1)}}]}function nf(b,a,c,d){function e(a){try{a.apply(null,Za.call(arguments,1))}finally{if(m--,0===m)for(;F.length;)try{F.pop()()}catch(b){c.error(b)}}}function f(a,b){(function da(){r(Z,function(a){a()});L=b(da,a)})()}function g(){h();l()}function h(){a:{try{B=u.state;break a}catch(a){}B=void 0}B=x(B)?null:B;ha(B,O)&&(B=O);O=B}function l(){if(D!==n.url()||I!==B)D=n.url(),I=B,r(X,function(a){a(n.url(),B)})}function k(a){try{return decodeURIComponent(a)}catch(b){return a}}
var n=this,p=a[0],q=b.location,u=b.history,s=b.setTimeout,M=b.clearTimeout,v={};n.isMock=!1;var m=0,F=[];n.$$completeOutstandingRequest=e;n.$$incOutstandingRequestCount=function(){m++};n.notifyWhenNoOutstandingRequests=function(a){r(Z,function(a){a()});0===m?a():F.push(a)};var Z=[],L;n.addPollFn=function(a){x(L)&&f(100,s);Z.push(a);return a};var B,I,D=q.href,S=a.find("base"),P=null;h();I=B;n.url=function(a,c,e){x(e)&&(e=null);q!==b.location&&(q=b.location);u!==b.history&&(u=b.history);if(a){var f=
I===e;if(D===a&&(!d.history||f))return n;var g=D&&Ga(D)===Ga(a);D=a;I=e;!d.history||g&&f?(g||(P=a),c?q.replace(a):g?(c=q,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):q.href=a):(u[c?"replaceState":"pushState"](e,"",a),h(),I=B);return n}return P||q.href.replace(/%27/g,"'")};n.state=function(){return B};var X=[],ba=!1,O=null;n.onUrlChange=function(a){if(!ba){if(d.history)A(b).on("popstate",g);A(b).on("hashchange",g);ba=!0}X.push(a);return a};n.$$checkUrlChange=l;n.baseHref=function(){var a=S.attr("href");
return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var fa={},y="",ka=n.baseHref();n.cookies=function(a,b){var d,e,f,g;if(a)b===t?p.cookie=encodeURIComponent(a)+"=;path="+ka+";expires=Thu, 01 Jan 1970 00:00:00 GMT":C(b)&&(d=(p.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+ka).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(p.cookie!==y)for(y=p.cookie,d=y.split("; "),fa={},f=0;f<d.length;f++)e=d[f],g=
e.indexOf("="),0<g&&(a=k(e.substring(0,g)),fa[a]===t&&(fa[a]=k(e.substring(g+1))));return fa}};n.defer=function(a,b){var c;m++;c=s(function(){delete v[c];e(a)},b||0);v[c]=!0;return c};n.defer.cancel=function(a){return v[a]?(delete v[a],M(a),e(E),!0):!1}}function De(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new nf(b,d,a,c)}]}function Ee(){this.$get=function(){function b(b,d){function e(a){a!=p&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=
b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw R("$cacheFactory")("iid",b);var g=0,h=w({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,n={},p=null,q=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}if(!x(b))return a in l||g++,l[a]=b,g>k&&this.remove(q.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==p&&(p=b.p);b==q&&(q=b.n);f(b.n,b.p);delete n[a]}delete l[a];
g--},removeAll:function(){l={};g=0;n={};p=q=null},destroy:function(){n=h=l=null;delete a[b]},info:function(){return w({},h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Ve(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function yc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};r(a,function(a,e){var f=a.match(c);if(!f)throw la("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===
f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d={},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Gd("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function p(a,e){La(a,"directive");C(a)?(Rb(e,"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];r(d[a],function(d,g){try{var h=b.invoke(d);G(h)?h={compile:ea(h)}:!h.compile&&h.link&&
(h.compile=ea(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";J(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(k){e(k)}});return f}])),d[a].push(e)):r(a,mc(p));return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};
var k=!0;this.debugInfoEnabled=function(a){return y(a)?(k=a,this):k};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,s,M,v,m,F,Z,L,B){function I(a,b){try{a.addClass(b)}catch(c){}}function D(a,b,c,d,e){a instanceof A||(a=A(a));r(a,function(b,c){b.nodeType==pb&&b.nodeValue.match(/\S+/)&&(a[c]=A(b).wrap("<span></span>").parent()[0])});var f=S(a,b,a,c,d,e);D.$$addScopeClass(a);
var g=null;return function(b,c,d){Rb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==va(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?A(Xb(g,A("<div>").append(a).html())):c?Ka.clone.call(a):a;if(h)for(var k in h)d.data("$"+k+"Controller",h[k].instance);D.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function S(a,b,c,d,e,f){function g(a,
c,d,e){var f,k,l,q,p,s,M;if(m)for(M=Array(c.length),q=0;q<h.length;q+=3)f=h[q],M[f]=c[f];else M=c;q=0;for(p=h.length;q<p;)k=M[h[q++]],c=h[q++],f=h[q++],c?(c.scope?(l=a.$new(),D.$$addScopeInfo(A(k),l)):l=a,s=c.transcludeOnThisElement?P(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?P(a,b):null,c(f,l,k,d,s)):f&&f(a,k.childNodes,t,e)}for(var h=[],k,l,q,p,m,s=0;s<a.length;s++){k=new Yb;l=X(a[s],[],k,0===s?d:t,e);(f=l.length?fa(l,a[s],k,b,c,null,[],[],f):null)&&
f.scope&&D.$$addScopeClass(k.$$element);k=f&&f.terminal||!(q=a[s].childNodes)||!q.length?null:S(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(s,f,k),p=!0,m=m||f;f=null}return p?g:null}function P(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function X(a,b,c,d,g){var h=c.$attr,k;switch(a.nodeType){case qa:ka(b,xa(va(a)),"E",d,g);for(var l,
q,p,m=a.attributes,s=0,M=m&&m.length;s<M;s++){var u=!1,L=!1;l=m[s];k=l.name;q=N(l.value);l=xa(k);if(p=U.test(l))k=k.replace(Sc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var B=l.replace(/(Start|End)$/,"");x(B)&&l===B+"Start"&&(u=k,L=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=xa(k.toLowerCase());h[l]=k;if(p||!c.hasOwnProperty(l))c[l]=q,Nc(a,l)&&(c[l]=!0);Oa(a,b,q,l,p);ka(b,l,"A",d,g,u,L)}a=a.className;J(a)&&(a=a.animVal);if(C(a)&&""!==a)for(;k=f.exec(a);)l=xa(k[2]),
ka(b,l,"C",d,g)&&(c[l]=N(k[3])),a=a.substr(k.index+k[0].length);break;case pb:za(b,a.nodeValue);break;case 8:try{if(k=e.exec(a.nodeValue))l=xa(k[1]),ka(b,l,"M",d,g)&&(c[l]=N(k[2]))}catch(v){}}b.sort(da);return b}function ba(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw la("uterdir",b,c);a.nodeType==qa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return A(d)}function O(a,b,c){return function(d,e,f,g,h){e=ba(e[0],
b,c);return a(d,e,f,g,h)}}function fa(a,d,e,f,g,k,l,p,m){function s(a,b,c,d){if(a){c&&(a=O(a,c,d));a.require=K.require;a.directiveName=da;if(P===K||K.$$isolateScope)a=Y(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=O(b,c,d));b.require=K.require;b.directiveName=da;if(P===K||K.$$isolateScope)b=Y(b,{isolateScope:!0});p.push(b)}}function L(a,b,c,d){var e,f="data",g=!1,k=c,l;if(C(b)){l=b.match(h);b=b.substring(l[0].length);l[3]&&(l[1]?l[3]=null:l[1]=l[3]);"^"===l[1]?f="inheritedData":"^^"===l[1]&&(f="inheritedData",
k=c.parent());"?"===l[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||k[f]("$"+b+"Controller");if(!e&&!g)throw la("ctreq",b,a);return e||null}H(b)&&(e=[],r(b,function(b){e.push(L(a,b,c,d))}));return e}function B(a,c,f,g,h){function k(a,b,c){var d;Va(a)||(c=b,b=a,a=t);E&&(d=F);c||(c=E?X.parent():X);return h(a,b,d,c,Wb)}var m,s,u,I,F,gb,X,O;d===f?(O=e,X=e.$$element):(X=A(f),O=new Yb(X,e));P&&(I=c.$new(!0));h&&(gb=k,gb.$$boundTransclude=h);S&&(Z={},F={},r(S,function(a){var b={$scope:a===
P||a.$$isolateScope?I:c,$element:X,$attrs:O,$transclude:gb};u=a.controller;"@"==u&&(u=O[a.name]);b=v(u,b,!0,a.controllerAs);F[a.name]=b;E||X.data("$"+a.name+"Controller",b.instance);Z[a.name]=b}));if(P){D.$$addScopeInfo(X,I,!0,!(ma&&(ma===P||ma===P.$$originalDirective)));D.$$addScopeClass(X,!0);g=Z&&Z[P.name];var ba=I;g&&g.identifier&&!0===P.bindToController&&(ba=g.instance);r(I.$$isolateBindings=P.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,k,l;switch(a.mode){case "@":O.$observe(e,
function(a){ba[d]=a});O.$$observers[e].$$scope=c;O[e]&&(ba[d]=b(O[e])(c));break;case "=":if(f&&!O[e])break;h=M(O[e]);l=h.literal?ha:function(a,b){return a===b||a!==a&&b!==b};k=h.assign||function(){g=ba[d]=h(c);throw la("nonassign",O[e],P.name);};g=ba[d]=h(c);f=function(a){l(a,ba[d])||(l(a,g)?k(c,a=ba[d]):ba[d]=a);return g=a};f.$stateful=!0;f=a.collection?c.$watchCollection(O[e],f):c.$watch(M(O[e],f),null,h.literal);I.$on("$destroy",f);break;case "&":h=M(O[e]),ba[d]=function(a){return h(c,a)}}})}Z&&
(r(Z,function(a){a()}),Z=null);g=0;for(m=l.length;g<m;g++)s=l[g],$(s,s.isolateScope?I:c,X,O,s.require&&L(s.directiveName,s.require,X,F),gb);var Wb=c;P&&(P.template||null===P.templateUrl)&&(Wb=I);a&&a(Wb,f.childNodes,t,h);for(g=p.length-1;0<=g;g--)s=p[g],$(s,s.isolateScope?I:c,X,O,s.require&&L(s.directiveName,s.require,X,F),gb)}m=m||{};for(var I=-Number.MAX_VALUE,F,S=m.controllerDirectives,Z,P=m.newIsolateScopeDirective,ma=m.templateDirective,fa=m.nonTlbTranscludeDirective,ka=!1,x=!1,E=m.hasElementTranscludeDirective,
w=e.$$element=A(d),K,da,V,fb=f,za,z=0,Q=a.length;z<Q;z++){K=a[z];var Oa=K.$$start,U=K.$$end;Oa&&(w=ba(d,Oa,U));V=t;if(I>K.priority)break;if(V=K.scope)K.templateUrl||(J(V)?(Na("new/isolated scope",P||F,K,w),P=K):Na("new/isolated scope",P,K,w)),F=F||K;da=K.name;!K.templateUrl&&K.controller&&(V=K.controller,S=S||{},Na("'"+da+"' controller",S[da],K,w),S[da]=K);if(V=K.transclude)ka=!0,K.$$tlb||(Na("transclusion",fa,K,w),fa=K),"element"==V?(E=!0,I=K.priority,V=w,w=e.$$element=A(W.createComment(" "+da+": "+
e[da]+" ")),d=w[0],T(g,Za.call(V,0),d),fb=D(V,f,I,k&&k.name,{nonTlbTranscludeDirective:fa})):(V=A(Ub(d)).contents(),w.empty(),fb=D(V,f));if(K.template)if(x=!0,Na("template",ma,K,w),ma=K,V=G(K.template)?K.template(w,e):K.template,V=Tc(V),K.replace){k=K;V=Sb.test(V)?Uc(Xb(K.templateNamespace,N(V))):[];d=V[0];if(1!=V.length||d.nodeType!==qa)throw la("tplrt",da,"");T(g,w,d);Q={$attr:{}};V=X(d,[],Q);var aa=a.splice(z+1,a.length-(z+1));P&&y(V);a=a.concat(V).concat(aa);R(e,Q);Q=a.length}else w.html(V);if(K.templateUrl)x=
!0,Na("template",ma,K,w),ma=K,K.replace&&(k=K),B=of(a.splice(z,a.length-z),w,e,g,ka&&fb,l,p,{controllerDirectives:S,newIsolateScopeDirective:P,templateDirective:ma,nonTlbTranscludeDirective:fa}),Q=a.length;else if(K.compile)try{za=K.compile(w,e,fb),G(za)?s(null,za,Oa,U):za&&s(za.pre,za.post,Oa,U)}catch(pf){c(pf,wa(w))}K.terminal&&(B.terminal=!0,I=Math.max(I,K.priority))}B.scope=F&&!0===F.scope;B.transcludeOnThisElement=ka;B.elementTranscludeOnThisElement=E;B.templateOnThisElement=x;B.transclude=fb;
m.hasElementTranscludeDirective=E;return B}function y(a){for(var b=0,c=a.length;b<c;b++)a[b]=Ob(a[b],{$$isolateScope:!0})}function ka(b,e,f,g,h,k,l){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var q;e=a.get(e+"Directive");for(var m=0,s=e.length;m<s;m++)try{q=e[m],(g===t||g>q.priority)&&-1!=q.restrict.indexOf(f)&&(k&&(q=Ob(q,{$$start:k,$$end:l})),b.push(q),h=q)}catch(M){c(M)}}return h}function x(b){if(d.hasOwnProperty(b))for(var c=a.get(b+"Directive"),e=0,f=c.length;e<f;e++)if(b=c[e],b.multiElement)return!0;
return!1}function R(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(I(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function of(a,b,c,d,e,f,g,h){var k=[],l,q,p=b[0],m=a.shift(),M=Ob(m,{templateUrl:null,transclude:null,
replace:null,$$originalDirective:m}),u=G(m.templateUrl)?m.templateUrl(b,c):m.templateUrl,L=m.templateNamespace;b.empty();s(Z.getTrustedResourceUrl(u)).then(function(s){var B,v;s=Tc(s);if(m.replace){s=Sb.test(s)?Uc(Xb(L,N(s))):[];B=s[0];if(1!=s.length||B.nodeType!==qa)throw la("tplrt",m.name,u);s={$attr:{}};T(d,b,B);var D=X(B,[],s);J(m.scope)&&y(D);a=D.concat(a);R(c,s)}else B=p,b.html(s);a.unshift(M);l=fa(a,B,c,e,b,m,f,g,h);r(d,function(a,c){a==B&&(d[c]=b[0])});for(q=S(b[0].childNodes,e);k.length;){s=
k.shift();v=k.shift();var F=k.shift(),O=k.shift(),D=b[0];if(!s.$$destroyed){if(v!==p){var Z=v.className;h.hasElementTranscludeDirective&&m.replace||(D=Ub(B));T(F,A(v),D);I(A(D),Z)}v=l.transcludeOnThisElement?P(s,l.transclude,O):O;l(q,s,D,d,v)}}k=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(k?k.push(b,c,d,a):(l.transcludeOnThisElement&&(a=P(b,l.transclude,e)),l(q,b,c,d,a)))}}function da(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Na(a,
b,c,d){if(b)throw la("multidir",b.name,c.name,a,wa(d));}function za(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&D.$$addBindingClass(a);return function(a,c){var e=c.parent();b||D.$$addBindingClass(e);D.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Xb(a,b){a=z(a||"html");switch(a){case "svg":case "math":var c=W.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}
function Q(a,b){if("srcdoc"==b)return Z.HTML;var c=va(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return Z.RESOURCE_URL}function Oa(a,c,d,e,f){var h=Q(a,e);f=g[e]||f;var k=b(d,!0,h,f);if(k){if("multiple"===e&&"select"===va(a))throw la("selmulti",wa(a));c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers={});if(l.test(e))throw la("nodomevents");var m=g[e];m!==d&&(k=m&&b(m,!0,h,f),d=m);k&&(g[e]=k(a),(c[e]||(c[e]=[])).$$inter=
!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function T(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=W.createDocumentFragment();a.appendChild(d);A(c).data(A(d).data());ta?(Qb=!0,ta.cleanData([d])):delete A.cache[d[A.expando]];
d=1;for(e=b.length;d<e;d++)f=b[d],A(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Y(a,b){return w(function(){return a.apply(null,arguments)},a,b)}function $(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,wa(d))}}var Yb=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Yb.prototype={$normalize:xa,$addClass:function(a){a&&0<a.length&&L.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&
L.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Vc(a,b);c&&c.length&&L.addClass(this.$$element,c);(c=Vc(b,a))&&c.length&&L.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Nc(f,a),h=kf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=vc(a,"-"));g=va(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=B(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g=
"",h=N(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var q=2*l,g=g+B(N(h[q]),!0),g=g+(" "+N(h[q+1]));h=N(h[2*l]).split(/\s/);g+=B(N(h[0]),!0);2===h.length&&(g+=" "+N(h[1]));this[a]=b=g}!1!==d&&(null===b||b===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&r(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ia()),e=d[a]||(d[a]=[]);e.push(b);
m.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Xa(e,b)}}};var V=b.startSymbol(),ma=b.endSymbol(),Tc="{{"==V||"}}"==ma?ra:function(a){return a.replace(/\{\{/g,V).replace(/}}/g,ma)},U=/^ngAttr[A-Z]/;D.$$addBindingInfo=k?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:E;D.$$addBindingClass=k?function(a){I(a,"ng-binding")}:E;D.$$addScopeInfo=k?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",
b)}:E;D.$$addScopeClass=k?function(a,b){I(a,b?"ng-isolate-scope":"ng-scope")}:E;return D}]}function xa(b){return db(b.replace(Sc,""))}function Vc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Uc(b){b=A(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&qf.call(b,a,1);return b}function Fe(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){La(a,
"controller");J(a)?w(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!J(a.$scope))throw R("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,l,k){var n,p,q;l=!0===l;k&&C(k)&&(q=k);if(C(g)){k=g.match(c);if(!k)throw rf("ctrlfmt",g);p=k[1];q=q||k[3];g=b.hasOwnProperty(p)?b[p]:xc(h.$scope,p,!0)||(a?xc(e,p,!0):t);sb(g,p,!0)}if(l)return l=(H(g)?g[g.length-1]:g).prototype,n=Object.create(l||null),q&&f(h,q,n,p||g.name),w(function(){d.invoke(g,
n,h,p);return n},{instance:n,identifier:q});n=d.instantiate(g,h,p);q&&f(h,q,n,p||g.name);return n}}]}function Ge(){this.$get=["$window",function(b){return A(b.document)}]}function He(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Zb(b,a){if(C(b)){var c=b.replace(sf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(Wc))||(d=(d=c.match(tf))&&uf[d[0]].test(c));d&&(b=qc(c))}}return b}function Xc(b){var a=ia(),c,d,e;if(!b)return a;r(b.split("\n"),
function(b){e=b.indexOf(":");c=z(N(b.substr(0,e)));d=N(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Yc(b){var a=J(b)?b:t;return function(c){a||(a=Xc(b));return c?(c=a[z(c)],void 0===c&&(c=null),c):a}}function Zc(b,a,c,d){if(G(d))return d(b,a,c);r(d,function(d){b=d(b,a,c)});return b}function Ke(){var b=this.defaults={transformResponse:[Zb],transformRequest:[function(a){return J(a)&&"[object File]"!==Ca.call(a)&&"[object Blob]"!==Ca.call(a)&&"[object FormData]"!==Ca.call(a)?$a(a):
a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:sa($b),put:sa($b),patch:sa($b)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=w({},a);b.data=a.data?Zc(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?
b:h.reject(b)}function d(a){var b,c={};r(a,function(a,d){G(a)?(b=a(),null!=b&&(c[d]=b)):c[d]=a});return c}if(!ca.isObject(a))throw R("$http")("badreq",a);var e=w({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},a);e.headers=function(a){var c=b.headers,e=w({},a.headers),f,g,c=w({},c.common,c[z(a.method)]);a:for(f in c){a=z(f);for(g in e)if(z(g)===a)continue a;e[f]=c[f]}return d(e)}(a);e.method=ub(e.method);var f=[function(a){var d=a.headers,e=Zc(a.data,Yc(d),
t,a.transformRequest);x(e)&&r(d,function(a,b){"content-type"===z(b)&&delete d[b]});x(a.withCredentials)&&!x(b.withCredentials)&&(a.withCredentials=b.withCredentials);return n(a,e).then(c,c)},t],g=h.when(e);for(r(u,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),g=g.then(a,k)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=
function(a){g.then(null,function(b){a(b.data,b.status,b.headers,e)});return g};return g}function n(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}I&&(200<=b&&300>b?I.put(P,[b,c,Xc(d),e]):I.remove(P));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?L.resolve:L.reject)({data:a,status:b,headers:Yc(d),config:c,statusText:e})}function n(a){m(a.data,a.status,sa(a.headers()),a.statusText)}function u(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,
1)}var L=h.defer(),B=L.promise,I,D,S=c.headers,P=p(c.url,c.params);k.pendingRequests.push(c);B.then(u,u);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(I=J(c.cache)?c.cache:J(b.cache)?b.cache:q);I&&(D=I.get(P),y(D)?D&&G(D.then)?D.then(n,n):H(D)?m(D[1],D[0],sa(D[2]),D[3]):m(D,200,{},"OK"):I.put(P,B));x(D)&&((D=$c(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:t)&&(S[c.xsrfHeaderName||b.xsrfHeaderName]=D),d(c.method,P,f,l,S,c.timeout,c.withCredentials,c.responseType));
return B}function p(a,b){if(!b)return a;var c=[];Ed(b,function(a,b){null===a||x(a)||(H(a)||(a=[a]),r(a,function(a){J(a)&&(a=ga(a)?a.toISOString():$a(a));c.push(Ea(b)+"="+Ea(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var q=f("$http"),u=[];r(c,function(a){u.unshift(C(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){r(arguments,function(a){k[a]=function(b,c){return k(w(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){k[a]=
function(b,c,d){return k(w(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function vf(){return new Q.XMLHttpRequest}function Le(){this.$get=["$browser","$window","$document",function(b,a,c){return wf(b,vf,b.defer,a.angular.callbacks,c[0])}]}function wf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);
f=null;var g=-1,u="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);c&&c(g,u)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,h,l,k,n,p,q,u){function s(){m&&m();F&&F.abort()}function M(a,d,e,f,g){L!==t&&c.cancel(L);m=F=null;a(d,e,f,g);b.$$completeOutstandingRequest(E)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==z(e)){var v="_"+(d.counter++).toString(36);d[v]=function(a){d[v].data=
a;d[v].called=!0};var m=f(h.replace("JSON_CALLBACK","angular.callbacks."+v),v,function(a,b){M(k,a,d[v].data,"",b);d[v]=E})}else{var F=a();F.open(e,h,!0);r(n,function(a,b){y(a)&&F.setRequestHeader(b,a)});F.onload=function(){var a=F.statusText||"",b="response"in F?F.response:F.responseText,c=1223===F.status?204:F.status;0===c&&(c=b?200:"file"==Aa(h).protocol?404:0);M(k,c,b,F.getAllResponseHeaders(),a)};e=function(){M(k,-1,null,null,"")};F.onerror=e;F.onabort=e;q&&(F.withCredentials=!0);if(u)try{F.responseType=
u}catch(Z){if("json"!==u)throw Z;}F.send(l||null)}if(0<p)var L=c(s,p);else p&&G(p.then)&&p.then(s)}}function Ie(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,u,s){function M(c){return c.replace(k,b).replace(n,a)}function v(a){try{var b=a;a=u?e.getTrusted(u,b):e.valueOf(b);var c;if(s&&!y(a))c=a;else if(null==a)c="";
else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=$a(a)}c=a}return c}catch(g){c=ac("interr",f,g.toString()),d(c)}}s=!!s;for(var m,F,r=0,L=[],B=[],I=f.length,D=[],S=[];r<I;)if(-1!=(m=f.indexOf(b,r))&&-1!=(F=f.indexOf(a,m+h)))r!==m&&D.push(M(f.substring(r,m))),r=f.substring(m+h,F),L.push(r),B.push(c(r,v)),r=F+l,S.push(D.length),D.push("");else{r!==I&&D.push(M(f.substring(r)));break}if(u&&1<D.length)throw ac("noconcat",f);if(!g||L.length){var P=function(a){for(var b=0,c=
L.length;b<c;b++){if(s&&x(a[b]))return;D[S[b]]=a[b]}return D.join("")};return w(function(a){var b=0,c=L.length,e=Array(c);try{for(;b<c;b++)e[b]=B[b](a);return P(e)}catch(g){a=ac("interr",f,g.toString()),d(a)}},{exp:f,expressions:L,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(B,function(c,e){var f=P(c);G(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,l=a.length,k=new RegExp(b.replace(/./g,f),"g"),n=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=
function(){return a};return g}]}function Je(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var n=a.setInterval,p=a.clearInterval,q=0,u=y(k)&&!k,s=(u?d:c).defer(),M=s.promise;l=y(l)?l:0;M.then(null,null,e);M.$$intervalId=n(function(){s.notify(q++);0<l&&q>=l&&(s.resolve(q),p(M.$$intervalId),delete f[M.$$intervalId]);u||b.$apply()},h);f[M.$$intervalId]=s;return M}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),
delete f[b.$$intervalId],!0):!1};return e}]}function Rd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(b){return 1===b?"one":"other"}}}}function bc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=qb(b[a]);
return b.join("/")}function ad(b,a){var c=Aa(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=aa(c.port)||xf[c.protocol]||null}function bd(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Aa(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=sc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ya(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ga(b){var a=b.indexOf("#");
return-1==a?b:b.substr(0,a)}function Fb(b){return b.replace(/(#.+)|#$/,"$1")}function cc(b){return b.substr(0,Ga(b).lastIndexOf("/")+1)}function dc(b,a){this.$$html5=!0;a=a||"";var c=cc(b);ad(b,this);this.$$parse=function(a){var b=ya(c,a);if(!C(b))throw Gb("ipthprfx",a,c);bd(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Pb(this.$$search),b=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=
function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=ya(b,d))!==t?(g=f,g=(f=ya(a,f))!==t?c+(ya("/",f)||f):b+g):(f=ya(c,d))!==t?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function ec(b,a){var c=cc(b);ad(b,this);this.$$parse=function(d){d=ya(b,d)||ya(c,d);var e;"#"===d.charAt(0)?(e=ya(a,d),x(e)&&(e=d)):e=this.$$html5?d:"";bd(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};
this.$$compose=function(){var c=Pb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ga(b)==Ga(a)?(this.$$parse(a),!0):!1}}function cd(b,a){this.$$html5=!0;ec.apply(this,arguments);var c=cc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ga(d)?f=d:(g=ya(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=
function(){var c=Pb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Hb(b){return function(){return this[b]}}function dd(b,a){return function(c){if(x(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Me(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return Wa(b)?(a.enabled=b,this):J(b)?(Wa(b.enabled)&&(a.enabled=
b.enabled),Wa(b.requireBase)&&(a.requireBase=b.requireBase),Wa(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,n;n=d.baseHref();var p=d.url(),q;if(a.enabled){if(!n&&a.requireBase)throw Gb("nobase");
q=p.substring(0,p.indexOf("/",p.indexOf("//")+2))+(n||"/");n=e.history?dc:cd}else q=Ga(p),n=ec;k=new n(q,"#"+b);k.$$parseLinkUrl(p,p);k.$$state=d.state();var u=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=A(b.target);"a"!==va(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");J(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Aa(h.animVal).href);
u.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});Fb(k.absUrl())!=Fb(p)&&d.url(k.absUrl(),!0);var s=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(s=!1,l(d,e)))});c.$$phase||c.$digest()});
c.$watch(function(){var a=Fb(d.url()),b=Fb(k.absUrl()),f=d.state(),g=k.$$replace,q=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(s||q)s=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(q&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function Ne(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof
Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||E;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,
arguments)}}()}}]}function ua(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw na("isecfld",a);return b}function oa(b,a){if(b){if(b.constructor===b)throw na("isecfn",a);if(b.window===b)throw na("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw na("isecdom",a);if(b===Object)throw na("isecobj",a);}return b}function fc(b){return b.constant}function hb(b,a,c,d,e){oa(b,e);oa(a,e);c=c.split(".");for(var f,
g=0;1<c.length;g++){f=ua(c.shift(),e);var h=0===g&&a&&a[f]||b[f];h||(h={},b[f]=h);b=oa(h,e)}f=ua(c.shift(),e);oa(b[f],e);return b[f]=d}function Pa(b){return"constructor"==b}function ed(b,a,c,d,e,f,g){ua(b,f);ua(a,f);ua(c,f);ua(d,f);ua(e,f);var h=function(a){return oa(a,f)},l=g||Pa(b)?h:ra,k=g||Pa(a)?h:ra,n=g||Pa(c)?h:ra,p=g||Pa(d)?h:ra,q=g||Pa(e)?h:ra;return function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=l(h[b]);if(!a)return h;if(null==h)return t;h=k(h[a]);if(!c)return h;if(null==
h)return t;h=n(h[c]);if(!d)return h;if(null==h)return t;h=p(h[d]);return e?null==h?t:h=q(h[e]):h}}function yf(b,a){return function(c,d){return b(c,d,oa,a)}}function zf(b,a,c){var d=a.expensiveChecks,e=d?Af:Bf,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=6>h?ed(g[0],g[1],g[2],g[3],g[4],c,d):function(a,b){var e=0,f;do f=ed(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=t,a=f;while(e<h);return f};else{var l="";d&&(l+="s = eso(s, fe);\nl = eso(l, fe);\n");var k=d;r(g,function(a,b){ua(a,
c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;if(d||Pa(a))e="eso("+e+", fe)",k=!0;l+="if(s == null) return undefined;\ns="+e+";\n"});l+="return s;";a=new Function("s","l","eso","fe",l);a.toString=ea(l);k&&(a=yf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,c,d){return hb(a,d,b,c,b)};return e[b]=f}function gc(b){return G(b.valueOf)?b.valueOf():Cf.call(b)}function Oe(){var b=ia(),a=ia();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,
c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=gc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var k=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,k)||(h=d(a),k=b&&
gc(b));return h},b,c)}for(var l=[],q=0,p=e.length;q<p;q++)l[q]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var k=e[c](a);if(b||(b=!g(k,l[c])))l[c]=k&&gc(k)}b&&(h=d(a));return h},b,c)}function l(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;G(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function k(a,b,c,d){function e(a){var b=!0;r(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},
function(a,c,d){g=a;G(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function n(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){G(b)&&b.apply(this,arguments);e()},c)}function p(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==k&&c!==l?function(c,d){var e=a(c,d);return b(e,c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return y(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=
[a]);return c}var q={csp:d.csp,expensiveChecks:!1},u={csp:d.csp,expensiveChecks:!0};return function(d,f,g){var m,r,t;switch(typeof d){case "string":t=d=d.trim();var L=g?a:b;m=L[t];m||(":"===d.charAt(0)&&":"===d.charAt(1)&&(r=!0,d=d.substring(2)),g=g?u:q,m=new hc(g),m=(new ib(m,c,g)).parse(d),m.constant?m.$$watchDelegate=n:r?(m=e(m),m.$$watchDelegate=m.literal?k:l):m.inputs&&(m.$$watchDelegate=h),L[t]=m);return p(m,f);case "function":return p(d,f);default:return p(E,f)}}}]}function Qe(){this.$get=
["$rootScope","$exceptionHandler",function(b,a){return fd(function(a){b.$evalAsync(a)},a)}]}function Re(){this.$get=["$browser","$exceptionHandler",function(b,a){return fd(function(a){b.defer(a)},a)}]}function fd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;
c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{G(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=R("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&
f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(J(b)||G(b))d=b&&b.then;G(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=
b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(G(b)?b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):
c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{G(c)&&(d=c())}catch(e){return l(e,!1)}return d&&G(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function u(a){if(!G(a))throw h("norslvr",a);if(!(this instanceof u))return new u(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};p.defer=function(){return new g};p.reject=function(a){var b=new g;
b.reject(a);return b.promise};p.when=n;p.all=function(a){var b=new g,c=0,d=H(a)?[]:{};r(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function $e(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=
c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Pe(){function b(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++ob;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=R("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=["$injector","$exceptionHandler",
"$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=!0}function n(){this.$id=++ob;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function p(a){if(v.$$phase)throw c("inprog",v.$$phase);v.$$phase=a}function q(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];
while(a=a.$parent)}function u(){}function s(){for(;t.length;)try{t.shift()()}catch(a){g(a)}e=null}function M(){null===e&&(e=l.defer(function(){v.$apply(s)}))}n.prototype={constructor:n,$new:function(a,c){var d;c=c||this;a?(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},
$watch:function(a,b,c){var e=h(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,c,e);var f=this.$$watchers,g={fn:b,last:u,get:e,exp:a,eq:!!c};d=null;G(b)||(g.fn=E);f||(f=this.$$watchers=[]);f.unshift(g);return function(){Xa(f,g);d=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],
function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!x(e)){if(J(e))if(Sa(e))for(f!==p&&(f=p,u=f.length=0,l++),a=e.length,u!==a&&(l++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==n&&(f=n={},u=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=
f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(u++,f[b]=g,l++));if(u>a)for(b in l++,f)e.hasOwnProperty(b)||(u--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,g,k=1<b.length,l=0,q=h(a,c),p=[],n={},m=!0,u=0;return this.$watch(q,function(){m?(m=!1,b(e,e,d)):b(e,g,d);if(k)if(J(e))if(Sa(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)tc.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,q,n,r=a,t,O=[],M,y;p("$digest");l.$$checkUrlChange();
this===v&&null!==e&&(l.defer.cancel(e),s());d=null;do{n=!1;for(t=this;m.length;){try{y=m.shift(),y.scope.$eval(y.expression,y.locals)}catch(w){g(w)}d=null}a:do{if(k=t.$$watchers)for(q=k.length;q--;)try{if(b=k[q])if((f=b.get(t))!==(h=b.last)&&!(b.eq?ha(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))n=!0,d=b,b.last=b.eq?Da(f,null):f,b.fn(f,h===u?f:h,t),5>r&&(M=4-r,O[M]||(O[M]=[]),O[M].push({msg:G(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===
d){n=!1;break a}}catch(A){g(A)}if(!(k=t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(k=t.$$nextSibling);)t=t.$parent}while(t=k);if((n||m.length)&&!r--)throw v.$$phase=null,c("infdig",a,O);}while(n||m.length);for(v.$$phase=null;F.length;)try{F.shift()()}catch(x){g(x)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==v){for(var b in this.$$listenerCount)q(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=
this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=E;this.$on=this.$watch=this.$watchGroup=function(){return E};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,
b){return h(a)(this,b)},$evalAsync:function(a,b){v.$$phase||m.length||l.defer(function(){m.length&&v.$digest()});m.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){F.push(a)},$apply:function(a){try{return p("$apply"),this.$eval(a)}catch(b){g(b)}finally{v.$$phase=null;try{v.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&t.push(b);M()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||
(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,q(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=Ya([h],arguments,1),l,q;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(q=d.length;l<q;l++)if(d[l])try{d[l].apply(null,k)}catch(p){g(p)}else d.splice(l,1),l--,q--;if(f)return h.currentScope=
null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=Ya([e],arguments,1),h,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,f)}catch(k){g(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=
c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var v=new n,m=v.$$asyncQueue=[],F=v.$$postDigestQueue=[],t=v.$$applyAsyncQueue=[];return v}]}function Sd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Aa(c).href;return""===f||f.match(e)?c:"unsafe:"+
f}}}function Df(b){if("self"===b)return b;if(C(b)){if(-1<b.indexOf("***"))throw Ba("iwcard",b);b=gd(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Ua(b))return new RegExp("^"+b.source+"$");throw Ba("imatcher");}function hd(b){var a=[];y(b)&&r(b,function(b){a.push(Df(b))});return a}function Te(){this.SCE_CONTEXTS=pa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=hd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&
(a=hd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?$c(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ba("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[pa.HTML]=e(g);h[pa.CSS]=e(g);h[pa.URL]=
e(g);h[pa.JS]=e(g);h[pa.RESOURCE_URL]=e(h[pa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ba("icontext",a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw Ba("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===t||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===pa.RESOURCE_URL){var g=Aa(e.toString()),p,q,u=!1;p=0;for(q=b.length;p<q;p++)if(d(b[p],g)){u=!0;break}if(u)for(p=
0,q=a.length;p<q;p++)if(d(a[p],g)){u=!1;break}if(u)return e;throw Ba("insecurl",e.toString());}if(c===pa.HTML)return f(e);throw Ba("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Se(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Qa)throw Ba("iequirks");var d=sa(pa);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=
d.getTrusted=function(a,b){return b},d.valueOf=ra);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;r(pa,function(a,b){var c=z(b);d[db("parse_as_"+c)]=function(b){return e(a,b)};d[db("get_trusted_"+c)]=function(b){return f(a,b)};d[db("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function Ue(){this.$get=["$window","$document",function(b,a){var c={},d=aa((/android (\d+)/.exec(z((b.navigator||
{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,n=!1;if(l){for(var p in l)if(k=h.exec(p)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);n=!!("animation"in l||g+"Animation"in l);!d||k&&n||(k=C(f.body.style.webkitTransition),n=C(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===
a&&11>=Qa)return!1;if(x(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:bb(),vendorPrefix:g,transitions:k,animations:n,android:d}}]}function We(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;var g=a.defaults&&a.defaults.transformResponse;H(g)?g=g.filter(function(a){return a!==Zb}):g===Zb&&(g=null);return a.get(e,{cache:b,transformResponse:g})["finally"](function(){d.totalPendingRequests--}).then(function(a){return a.data},
function(a){if(!f)throw la("tpload",e);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function Xe(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var d=ca.element(a).data("$binding");d&&r(d,function(d){c?(new RegExp("(^|\\s)"+gd(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],
h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Ye(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){var n=y(k)&&!k,p=(n?d:c).defer(),q=p.promise;l=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),e(a)}finally{delete g[q.$$timeoutId]}n||
b.$apply()},l);q.$$timeoutId=l;g[l]=p;return q}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b){Qa&&($.setAttribute("href",b),b=$.href);$.setAttribute("href",b);return{href:$.href,protocol:$.protocol?$.protocol.replace(/:$/,""):"",host:$.host,search:$.search?$.search.replace(/^\?/,""):"",hash:$.hash?$.hash.replace(/^#/,""):"",hostname:$.hostname,port:$.port,pathname:"/"===
$.pathname.charAt(0)?$.pathname:"/"+$.pathname}}function $c(b){b=C(b)?Aa(b):b;return b.protocol===id.protocol&&b.host===id.host}function Ze(){this.$get=ea(Q)}function Fc(b){function a(c,d){if(J(c)){var e={};r(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",jd);a("date",kd);a("filter",Ef);a("json",Ff);a("limitTo",Gf);a("lowercase",Hf);a("number",ld);a("orderBy",md);a("uppercase",
If)}function Ef(){return function(b,a,c){if(!H(b))return b;var d;switch(typeof a){case "function":break;case "boolean":case "number":case "string":d=!0;case "object":a=Jf(a,c,d);break;default:return b}return b.filter(a)}}function Jf(b,a,c){var d=J(b)&&"$"in b;!0===a?a=ha:G(a)||(a=function(a,b){if(J(a)||J(b))return!1;a=z(""+a);b=z(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!J(e)?Ha(e,b.$,a,!1):Ha(e,b,a,c)}}function Ha(b,a,c,d,e){var f=null!==b?typeof b:"null",g=null!==a?typeof a:
"null";if("string"===g&&"!"===a.charAt(0))return!Ha(b,a.substring(1),c,d);if(H(b))return b.some(function(b){return Ha(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&Ha(b[h],a,c,!0))return!0;return e?!1:Ha(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!G(e)&&!x(e)&&(f="$"===h,!Ha(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function jd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){x(d)&&(d=a.CURRENCY_SYM);x(e)&&
(e=a.PATTERNS[1].maxFrac);return null==b?b:nd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function ld(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:nd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function nd(b,a,c,d,e){if(!isFinite(b)||J(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",l=[],k=!1;if(-1!==g.indexOf("e")){var n=g.match(/([\d\.]+)e(-?)(\d+)/);n&&"-"==n[2]&&n[3]>e+1?b=0:(h=g,k=!0)}if(k)0<e&&1>b&&(h=b.toFixed(e),b=parseFloat(h));else{g=(g.split(od)[1]||
"").length;x(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(od),k=g[0],g=g[1]||"",p=0,q=a.lgSize,u=a.gSize;if(k.length>=q+u)for(p=k.length-q,n=0;n<p;n++)0===(p-n)%u&&0!==n&&(h+=c),h+=k.charAt(n);for(n=p;n<k.length;n++)0===(k.length-n)%q&&0!==n&&(h+=c),h+=k.charAt(n);for(;g.length<e;)g+="0";e&&"0"!==e&&(h+=d+g.substr(0,e))}0===b&&(f=!1);l.push(f?a.negPre:a.posPre,h,f?a.negSuf:a.posSuf);return l.join("")}function Ib(b,a,
c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function U(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Ib(e,a,d)}}function Jb(b,a){return function(c,d){var e=c["get"+b](),f=ub(a?"SHORT"+b:b);return d[f][e]}}function pd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function qd(b){return function(a){var c=pd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+
(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Ib(a,b)}}function ic(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function kd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=aa(b[9]+b[10]),g=aa(b[9]+b[11]));h.call(a,aa(b[1]),aa(b[2])-1,aa(b[3]));f=aa(b[4]||0)-f;g=aa(b[5]||0)-g;h=aa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;C(c)&&(c=Kf.test(c)?aa(c):a(c));Y(c)&&(c=new Date(c));if(!ga(c))return c;for(;e;)(k=Lf.exec(e))?(h=Ya(h,k,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));r(h,function(a){l=Mf[a];g+=l?l(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ff(){return function(b,a){x(a)&&(a=2);return $a(b,a)}}function Gf(){return function(b,
a){Y(b)&&(b=b.toString());return H(b)||C(b)?(a=Infinity===Math.abs(Number(a))?Number(a):aa(a))?0<a?b.slice(0,a):b.slice(a):C(b)?"":[]:b}}function md(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function g(a){return null===a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=
typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Sa(a))return a;c=H(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||ra;if(C(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(h,c);d=b(a);if(d.constant){var f=d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,b){return h(d(a),d(b))},c)});return Za.call(a).sort(e(function(a,
b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ia(b){G(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ea(b)}function rd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Kb;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(g,
function(a){a.$commitViewValue()})};f.$addControl=function(a){La(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(f.$pending,function(b,c){f.$setValidity(c,null,a)});r(f.$error,function(b,c){f.$setValidity(c,null,a)});r(f.$$success,function(b,c){f.$setValidity(c,null,a)});Xa(g,a)};sd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];
d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Xa(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Ra);d.addClass(b,Lb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Ra,Lb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(g,function(a){a.$setPristine()})};f.$setUntouched=function(){r(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");
f.$submitted=!0;h.$setSubmitted()}}function jc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function jb(b,a,c,d,e,f){var g=z(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=N(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",
l);else{var k,n=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||n(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",n)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Mb(b,a){return function(c,d){var e,f;if(ga(c))return c;if(C(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(Nf.test(c))return new Date(c);b.lastIndex=
0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function kb(b,a,c,d){return function(e,f,g,h,l,k,n){function p(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function q(a){return y(a)?ga(a)?a:c(a):t}td(e,f,g,h);
jb(e,f,g,h,l,k);var u=h&&h.$options&&h.$options.timezone,s;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,s),"UTC"===u&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):t});h.$formatters.push(function(a){if(a&&!ga(a))throw Nb("datefmt",a);if(p(a)){if((s=a)&&"UTC"===u){var b=6E4*s.getTimezoneOffset();s=new Date(s.getTime()+b)}return n("date")(a,d,u)}s=null;return""});if(y(g.min)||g.ngMin){var r;h.$validators.min=function(a){return!p(a)||x(r)||c(a)>=r};
g.$observe("min",function(a){r=q(a);h.$validate()})}if(y(g.max)||g.ngMax){var v;h.$validators.max=function(a){return!p(a)||x(v)||c(a)<=v};g.$observe("max",function(a){v=q(a);h.$validate()})}}}function td(b,a,c,d){(d.$$hasNativeValidators=J(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?t:b})}function ud(b,a,c,d,e){if(y(d)){b=b(d);if(!b.constant)throw R("ngModel")("constexpr",c,d);return b(a)}return e}function kc(b,a){b="ngClass"+b;return["$animate",
function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){if(!H(a)){if(C(a))return a.split(" ");if(J(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===
a||f.$index%2===a){var k=e(b||[]);if(!n){var u=l(k,1);h.$addClass(u)}else if(!ha(b,n)){var s=e(n),u=d(k,s),k=d(s,k),u=l(u,1),k=l(k,-1);u&&u.length&&c.addClass(g,u);k&&k.length&&c.removeClass(g,k)}}n=sa(b)}var n;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function sd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),
f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+vc(b,"-"):"";a(lb+b,!0===c);a(vd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[vd]=!(f[lb]=e.hasClass(lb));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),wd(d.$pending)&&(d.$pending=t));Wa(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(xd,
!0),d.$valid=d.$invalid=t,c("",null)):(a(xd,!1),d.$valid=wd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function wd(b){if(b)for(var a in b)return!1;return!0}var Of=/^\/(.+)\/([a-z]*)$/,z=function(b){return C(b)?b.toLowerCase():b},tc=Object.prototype.hasOwnProperty,ub=function(b){return C(b)?b.toUpperCase():b},Qa,A,ta,Za=[].slice,qf=[].splice,Pf=[].push,Ca=Object.prototype.toString,Ja=R("ng"),ca=Q.angular||
(Q.angular={}),cb,ob=0;Qa=W.documentMode;E.$inject=[];ra.$inject=[];var H=Array.isArray,N=function(b){return C(b)?b.trim():b},gd=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},bb=function(){if(y(bb.isActive_))return bb.isActive_;var b=!(!W.querySelector("[ng-csp]")&&!W.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return bb.isActive_=b},rb=["ng-","data-ng-","ng:","x-ng-"],Md=/[A-Z]/g,wc=!1,Qb,qa=1,pb=3,Qd={full:"1.3.15",major:1,
minor:3,dot:15,codeName:"locality-filtration"};T.expando="ng339";var zb=T.cache={},hf=1;T._data=function(b){return this.cache[b[this.expando]]||{}};var cf=/([\:\-\_]+(.))/g,df=/^moz([A-Z])/,Qf={mouseleave:"mouseout",mouseenter:"mouseover"},Tb=R("jqLite"),gf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Sb=/<|&#?\w+;/,ef=/<([\w:]+)/,ff=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>",
"</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;ja.th=ja.td;var Ka=T.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===W.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),T(Q).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=
b?A(this[b]):A(this[this.length+b])},length:0,push:Pf,sort:[].sort,splice:[].splice},Eb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){Eb[z(b)]=b});var Oc={};r("input select option textarea button form details".split(" "),function(b){Oc[b]=!0});var Pc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};r({data:Vb,removeData:xb},function(b,a){T[a]=b});r({data:Vb,inheritedData:Db,scope:function(b){return A.data(b,"$scope")||
Db(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return A.data(b,"$isolateScope")||A.data(b,"$isolateScopeNoTemplate")},controller:Kc,injector:function(b){return Db(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ab,css:function(b,a,c){a=db(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=z(a);if(Eb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||E).specified?
d:t;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(x(b)){var d=a.nodeType;return d===qa||d===pb?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(x(a)){if(b.multiple&&"select"===va(b)){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(x(a))return b.innerHTML;
wb(b,!0);b.innerHTML=a},empty:Lc},function(b,a){T.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Lc&&(2==b.length&&b!==Ab&&b!==Kc?a:d)===t){if(J(a)){for(e=0;e<g;e++)if(b===Vb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:xb,on:function a(c,d,e,f){if(y(f))throw Tb("onargs");if(Gc(c)){var g=yb(c,!0);f=g.events;var h=g.handle;h||(h=
g.handle=lf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Qf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Jc,one:function(a,c,d){a=A(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;wb(a);r(new T(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,
a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){a.nodeType===qa&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===qa||11===d){c=new T(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===qa){var d=a.firstChild;r(new T(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=A(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},
remove:Mc,detach:function(a){Mc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new T(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Cb,removeClass:Bb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;x(f)&&(f=!Ab(a,c));(f?Cb:Bb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ub,
triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=yb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:E,type:g,target:a},c.type&&(e=w(e,c)),c=sa(h),f=d?[e].concat(d):[e],r(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,
f)})}},function(a,c){T.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)x(g)?(g=a(this[h],c,e,f),y(g)&&(g=A(g))):Ic(g,a(this[h],c,e,f));return y(g)?g:this};T.prototype.bind=T.prototype.on;T.prototype.unbind=T.prototype.off});eb.prototype={put:function(a,c){this[Ma(a,this.nextUid)]=c},get:function(a){return this[Ma(a,this.nextUid)]},remove:function(a){var c=this[a=Ma(a,this.nextUid)];delete this[a];return c}};var Rc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Rf=/,/,Sf=/^\s*(_?)(\S+?)\1\s*$/,
Qc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Fa=R("$injector");ab.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw C(d)&&d||(d=a.name||mf(a)),Fa("strictdi",d);c=a.toString().replace(Qc,"");c=c.match(Rc);r(c[1].split(Rf),function(a){a.replace(Sf,function(a,c,d){e.push(d)})})}a.$inject=e}}else H(a)?(c=a.length-1,sb(a[c],"fn"),e=a.slice(0,c)):sb(a,"fn",!0);return e};var Tf=R("$animate"),Ce=["$provide",function(a){this.$$selectors={};this.register=function(c,
d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Tf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=ia();
r((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});r(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function l(){n||(n=a.defer(),d(function(){n.resolve();n=null}));return n.promise}function k(a,c){if(ca.isObject(c)){var d=w(c.from||{},c.to||{});a.css(d)}}var n;return{animate:function(a,c,d){k(a,{from:c,to:d});return l()},enter:function(a,c,d,e){k(a,
e);d?d.after(a):c.prepend(a);return l()},leave:function(a,c){k(a,c);a.remove();return l()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=A(a);c=C(c)?c:H(c)?c.join(" "):"";r(a,function(a){Cb(a,c)});k(a,d);return l()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=A(a);c=C(c)?c:H(c)?c.join(" "):"";r(a,function(a){Bb(a,c)});k(a,d);return l()},setClass:function(a,
c,d,e){var k=this,l=!1;a=A(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=ca.extend(m.options||{},e)):(m={classes:{},options:e},l=!0);e=m.classes;c=H(c)?c:c.split(" ");d=H(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,
c);d&&this.$$removeClassImmediately(a,d);k(a,e);return l()},enabled:E,cancel:E}}]}],la=R("$compile");yc.$inject=["$provide","$$sanitizeUriProvider"];var Sc=/^((?:x|data)[\:\-_])/i,rf=R("$controller"),Wc="application/json",$b={"Content-Type":Wc+";charset=utf-8"},tf=/^\[|^\{(?!\{)/,uf={"[":/]$/,"{":/}$/},sf=/^\)\]\}',?\n/,ac=R("$interpolate"),Uf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,xf={http:80,https:443,ftp:21},Gb=R("$location"),Vf={$$html5:!1,$$replace:!1,absUrl:Hb("$$absUrl"),url:function(a){if(x(a))return this.$$url;
var c=Uf.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Hb("$$protocol"),host:Hb("$$host"),port:Hb("$$port"),path:dd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(C(a)||Y(a))a=a.toString(),this.$$search=sc(a);else if(J(a))a=Da(a,{}),r(a,function(c,e){null==c&&delete a[e]}),this.$$search=
a;else throw Gb("isrcharg");break;default:x(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};r([cd,ec,dc],function(a){a.prototype=Object.create(Vf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==dc||!this.$$html5)throw Gb("nostate");this.$$state=x(c)?null:c;return this}});var na=R("$parse"),Wf=Function.prototype.call,
Xf=Function.prototype.apply,Yf=Function.prototype.bind,mb=ia();r({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;mb[c]=a});mb["this"]=function(a){return a};mb["this"].sharedGetter=!0;var nb=w(ia(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?d+e:d:y(e)?e:t},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},
"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},
"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Zf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},hc=function(a){this.options=a};hc.prototype={constructor:hc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,
"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=nb[c],f=nb[d];nb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},
isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw na("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<
this.text.length;){var d=z(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=
this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):
d+=Zf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var ib=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};ib.ZERO=w(function(){return 0},{sharedGetter:!0,constant:!0});ib.prototype={constructor:ib,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);
a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier&&this.peek().text in mb?a=mb[this.consume().text]:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,
d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw na("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw na("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===
f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw na("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},unaryFn:function(a,c){var d=nb[a];return w(function(a,f){return d(a,f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,c,d,e){var f=nb[c];return w(function(c,e){return f(c,e,a,d)},{constant:a.constant&&
d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return zf(a,this.options,this.text)},constant:function(){var a=this.consume().value;return w(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,
d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());var f=[a].concat(d||[]);return w(function(f,h){var l=a(f,h);if(e){e[0]=l;for(l=d.length;l--;)e[l+1]=d[l](f,h);return c.apply(t,e)}return c(l)},{constant:!c.$stateful&&f.every(fc),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},
assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),w(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&(c=this.assignment(),this.consume(":"))){var d=this.assignment();return w(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},
logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){for(var a=this.equality(),c;c=this.expect("&&");)a=this.binaryFn(a,c.text,this.equality(),!0);return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a=this.binaryFn(a,c.text,this.relational());return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a=this.binaryFn(a,c.text,
this.additive());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(ib.ZERO,a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=
this.identifier();return w(function(d,e,f){d=f||a(d,e);return null==d?t:c(d)},{assign:function(d,e,f){var g=a(d,f);g||a.assign(d,g={},f);return c.assign(g,e)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return w(function(e,f){var g=a(e,f),h=d(e,f);ua(h,c);return g?oa(g[h],c):t},{assign:function(e,f,g){var h=ua(d(e,g),c),l=oa(a(e,g),c);l||a.assign(e,l={},g);return l[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());
while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var l=c?c(g,h):y(c)?t:g,k=a(g,h,l)||E;if(f)for(var n=d.length;n--;)f[n]=oa(d[n](g,h),e);oa(l,e);if(k){if(k.constructor===k)throw na("isecfn",e);if(k===Wf||k===Xf||k===Yf)throw na("isecff",e);}l=k.apply?k.apply(l,f):k(f[0],f[1],f[2],f[3],f[4]);f&&(f.length=0);return oa(l,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))
}this.consume("]");return w(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(fc),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))}this.consume("}");return w(function(d,f){for(var g={},h=0,l=c.length;h<l;h++)g[a[h]]=
c[h](d,f);return g},{literal:!0,constant:c.every(fc),inputs:c})}};var Bf=ia(),Af=ia(),Cf=Object.prototype.valueOf,Ba=R("$sce"),pa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},la=R("$compile"),$=W.createElement("a"),id=Aa(Q.location.href);Fc.$inject=["$provide"];jd.$inject=["$locale"];ld.$inject=["$locale"];var od=".",Mf={yyyy:U("FullYear",4),yy:U("FullYear",2,0,!0),y:U("FullYear",1),MMMM:Jb("Month"),MMM:Jb("Month",!0),MM:U("Month",2,1),M:U("Month",1,1),dd:U("Date",2),d:U("Date",
1),HH:U("Hours",2),H:U("Hours",1),hh:U("Hours",2,-12),h:U("Hours",1,-12),mm:U("Minutes",2),m:U("Minutes",1),ss:U("Seconds",2),s:U("Seconds",1),sss:U("Milliseconds",3),EEEE:Jb("Day"),EEE:Jb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Ib(Math[0<a?"floor":"ceil"](a/60),2)+Ib(Math.abs(a%60),2))},ww:qd(2),w:qd(1),G:ic,GG:ic,GGG:ic,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},Lf=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
Kf=/^\-?\d+$/;kd.$inject=["$locale"];var Hf=ea(z),If=ea(ub);md.$inject=["$parse"];var Td=ea({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===Ca.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),vb={};r(Eb,function(a,c){if("multiple"!=a){var d=xa("ng-"+c);vb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],
function(a){g.$set(c,!!a)})}}}}});r(Pc,function(a,c){vb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Of))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});r(["src","srcset","href"],function(a){var c=xa("ng-"+a);vb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ca.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",
g=null);f.$observe(c,function(c){c?(f.$set(h,c),Qa&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Kb={$addControl:E,$$renameControl:function(a,c){a.$name=c},$removeControl:E,$setValidity:E,$setDirty:E,$setPristine:E,$setSubmitted:E};rd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var yd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:rd,compile:function(d,e){d.addClass(Ra).addClass(lb);var f=e.name?"name":a&&e.ngForm?"ngForm":
!1;return{pre:function(a,d,e,k){if(!("action"in e)){var n=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",n,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",n,!1)},0,!1)})}var p=k.$$parentForm;f&&(hb(a,null,k.$name,k,k.$name),e.$observe(f,function(c){k.$name!==c&&(hb(a,null,k.$name,t,k.$name),p.$$renameControl(k,c),hb(a,null,k.$name,k,k.$name))}));d.on("$destroy",function(){p.$removeControl(k);
f&&hb(a,null,e[f],t,k.$name);w(k,Kb)})}}}}}]},Ud=yd(),ge=yd(!0),Nf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,$f=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,ag=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,bg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,zd=/^(\d{4})-(\d{2})-(\d{2})$/,Ad=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,lc=/^(\d{4})-W(\d\d)$/,Bd=/^(\d{4})-(\d\d)$/,
Cd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Dd={text:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);jc(e)},date:kb("date",zd,Mb(zd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":kb("datetimelocal",Ad,Mb(Ad,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:kb("time",Cd,Mb(Cd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:kb("week",lc,function(a,c){if(ga(a))return a;if(C(a)){lc.lastIndex=0;var d=lc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=pd(e),f=7*(f-1);c&&(d=c.getHours(),g=
c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:kb("month",Bd,Mb(Bd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){td(a,c,d,e);jb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:bg.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!Y(a))throw Nb("numfmt",a);a=a.toString()}return a});if(y(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||
x(h)||a>=h};d.$observe("min",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));h=Y(a)&&!isNaN(a)?a:t;e.$validate()})}if(y(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||x(l)||a<=l};d.$observe("max",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));l=Y(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);jc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||$f.test(d)}},email:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);jc(e);
e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||ag.test(d)}},radio:function(a,c,d,e){x(d.name)&&c.attr("name",++ob);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=ud(l,a,"ngTrueValue",d.ngTrueValue,!0),n=ud(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&
a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ha(a,k)});e.$parsers.push(function(a){return a?k:n})},hidden:E,button:E,submit:E,reset:E,file:E},zc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Dd[z(h.type)]||Dd.text)(f,g,h,l[0],c,a,d,e)}}}}],cg=/^(true|false|\d+)$/,ye=function(){return{restrict:"A",priority:100,compile:function(a,
c){return cg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},Zd=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],ae=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));
c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===t?"":a})}}}}],$d=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],xe=ea({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
be=kc("",!0),de=kc("Odd",0),ce=kc("Even",1),ee=Ia({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),fe=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Ec={},dg={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=xa("ng-"+a);Ec[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=
d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};dg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ie=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=W.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=
tb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],je=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(f,g){var h=g.ngInclude||g.src,l=g.onload||"",k=g.autoscroll;return function(f,g,q,r,s){var t=0,v,m,F,w=function(){m&&(m.remove(),m=null);v&&(v.$destroy(),v=null);F&&(d.leave(F).then(function(){m=null}),m=F,F=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=
function(){!y(k)||k&&!f.$eval(k)||c()},m=++t;e?(a(e,!0).then(function(a){if(m===t){var c=f.$new();r.template=a;a=s(c,function(a){w();d.enter(a,null,g).then(h)});v=c;F=a;v.$emit("$includeContentLoaded",e);f.$eval(l)}},function(){m===t&&(w(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(w(),r.template=null)})}}}}],Ae=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Hc(f.template,
W).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ke=Ia({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),we=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?N(f):f;e.$parsers.push(function(a){if(!x(a)){var c=[];a&&r(a.split(h),function(a){a&&c.push(g?N(a):a)});return c}});e.$formatters.push(function(a){return H(a)?
a.join(f):t});e.$isEmpty=function(a){return!a||!a.length}}}},lb="ng-valid",vd="ng-invalid",Ra="ng-pristine",Lb="ng-dirty",xd="ng-pending",Nb=new R("ngModel"),eg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,n){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=t;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;
this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=t;this.$name=n(d.name||"",!1)(a);var p=f(d.ngModel),q=p.assign,u=p,s=q,M=null,v,m=this;this.$$setOptions=function(a){if((m.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");u=function(a){var d=p(a);G(d)&&(d=c(a));return d};s=function(a,c){G(p(a))?g(a,{$$$p:m.$modelValue}):q(a,m.$modelValue)}}else if(!p.assign)throw Nb("nonassign",d.ngModel,wa(e));
};this.$render=E;this.$isEmpty=function(a){return x(a)||""===a||null===a||a!==a};var F=e.inheritedData("$formController")||Kb,w=0;sd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:F,$animate:g});this.$setPristine=function(){m.$dirty=!1;m.$pristine=!0;g.removeClass(e,Lb);g.addClass(e,Ra)};this.$setDirty=function(){m.$dirty=!0;m.$pristine=!1;g.removeClass(e,Ra);g.addClass(e,Lb);F.$setDirty()};this.$setUntouched=function(){m.$touched=!1;m.$untouched=!0;g.setClass(e,
"ng-untouched","ng-touched")};this.$setTouched=function(){m.$touched=!0;m.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(M);m.$viewValue=m.$$lastCommittedViewValue;m.$render()};this.$validate=function(){if(!Y(m.$modelValue)||!isNaN(m.$modelValue)){var a=m.$$rawModelValue,c=m.$valid,d=m.$modelValue,e=m.$options&&m.$options.allowInvalid;m.$$runValidators(a,m.$$lastCommittedViewValue,function(f){e||c===f||(m.$modelValue=f?a:t,m.$modelValue!==d&&m.$$writeModelToScope())})}};
this.$$runValidators=function(a,c,d){function e(){var d=!0;r(m.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(r(m.$asyncValidators,function(a,c){g(c,null)}),!1)}function f(){var d=[],e=!0;r(m.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!G(k.then))throw Nb("$asyncValidators",k);g(h,t);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},E):h(!0)}function g(a,c){l===w&&m.$setValidity(a,c)}function h(a){l===w&&d(a)}w++;var l=
w;(function(){var a=m.$$parserName||"parse";if(v===t)g(a,null);else return v||(r(m.$validators,function(a,c){g(c,null)}),r(m.$asyncValidators,function(a,c){g(c,null)})),g(a,v),v;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=m.$viewValue;h.cancel(M);if(m.$$lastCommittedViewValue!==a||""===a&&m.$$hasNativeValidators)m.$$lastCommittedViewValue=a,m.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=m.$$lastCommittedViewValue;if(v=
x(c)?t:!0)for(var d=0;d<m.$parsers.length;d++)if(c=m.$parsers[d](c),x(c)){v=!1;break}Y(m.$modelValue)&&isNaN(m.$modelValue)&&(m.$modelValue=u(a));var e=m.$modelValue,f=m.$options&&m.$options.allowInvalid;m.$$rawModelValue=c;f&&(m.$modelValue=c,m.$modelValue!==e&&m.$$writeModelToScope());m.$$runValidators(c,m.$$lastCommittedViewValue,function(a){f||(m.$modelValue=a?c:t,m.$modelValue!==e&&m.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,m.$modelValue);r(m.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};
this.$setViewValue=function(a,c){m.$viewValue=a;m.$options&&!m.$options.updateOnDefault||m.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=m.$options;e&&y(e.debounce)&&(e=e.debounce,Y(e)?d=e:Y(e[c])?d=e[c]:Y(e["default"])&&(d=e["default"]));h.cancel(M);d?M=h(function(){m.$commitViewValue()},d):l.$$phase?m.$commitViewValue():a.$apply(function(){m.$commitViewValue()})};a.$watch(function(){var c=u(a);if(c!==m.$modelValue){m.$modelValue=m.$$rawModelValue=c;v=t;for(var d=
m.$formatters,e=d.length,f=c;e--;)f=d[e](f);m.$viewValue!==f&&(m.$viewValue=m.$$lastCommittedViewValue=f,m.$render(),m.$$runValidators(c,f,E))}return c})}],ve=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:eg,priority:1,compile:function(c){c.addClass(Ra).addClass("ng-untouched").addClass(lb);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Kb;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,
a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],fg=/(\s+|^)default(\s+|$)/,ze=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==t?(this.$options.updateOnDefault=
!1,this.$options.updateOn=N(this.$options.updateOn.replace(fg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},le=Ia({terminal:!0,priority:1E3}),me=["$locale","$interpolate",function(a,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(f,g,h){function l(a){g.text(a||"")}var k=h.count,n=h.$attr.when&&g.attr(h.$attr.when),p=h.offset||0,q=f.$eval(n)||{},u={},n=c.startSymbol(),s=c.endSymbol(),t=n+k+"-"+p+s,v=ca.noop,m;r(h,function(a,c){var d=
e.exec(c);d&&(d=(d[1]?"-":"")+z(d[2]),q[d]=g.attr(h.$attr[c]))});r(q,function(a,e){u[e]=c(a.replace(d,t))});f.$watch(k,function(c){c=parseFloat(c);var d=isNaN(c);d||c in q||(c=a.pluralCat(c-p));c===m||d&&isNaN(m)||(v(),v=f.$watch(u[c],l),m=c)})}}}],ne=["$parse","$animate",function(a,c){var d=R("ngRepeat"),e=function(a,c,d,e,k,n,p){a[d]=e;k&&(a[k]=n);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",
priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=W.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var n=k[1],p=k[2],q=k[3],u=k[4],k=n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",n);var s=k[3]||k[1],y=k[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw d("badident",
q);var v,m,w,x,E={$id:Ma};u?v=a(u):(w=function(a,c){return Ma(c)},x=function(a){return a});return function(a,f,g,k,n){v&&(m=function(c,d,e){y&&(E[y]=c);E[s]=d;E.$index=e;return v(a,E)});var u=ia();a.$watchCollection(p,function(g){var k,p,v=f[0],D,E=ia(),G,H,L,S,J,C,z;q&&(a[q]=g);if(Sa(g))J=g,p=m||w;else{p=m||x;J=[];for(z in g)g.hasOwnProperty(z)&&"$"!=z.charAt(0)&&J.push(z);J.sort()}G=J.length;z=Array(G);for(k=0;k<G;k++)if(H=g===J?k:J[k],L=g[H],S=p(H,L,k),u[S])C=u[S],delete u[S],E[S]=C,z[k]=C;else{if(E[S])throw r(z,
function(a){a&&a.scope&&(u[a.id]=a)}),d("dupes",h,S,L);z[k]={id:S,scope:t,clone:t};E[S]=!0}for(D in u){C=u[D];S=tb(C.clone);c.leave(S);if(S[0].parentNode)for(k=0,p=S.length;k<p;k++)S[k].$$NG_REMOVED=!0;C.scope.$destroy()}for(k=0;k<G;k++)if(H=g===J?k:J[k],L=g[H],C=z[k],C.scope){D=v;do D=D.nextSibling;while(D&&D.$$NG_REMOVED);C.clone[0]!=D&&c.move(tb(C.clone),null,A(v));v=C.clone[C.clone.length-1];e(C.scope,k,s,L,y,H,G)}else n(function(a,d){C.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,
null,A(v));v=f;C.clone=a;E[C.id]=C;e(C.scope,k,s,L,y,H,G)});u=E})}}}}],oe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],he=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],pe=Ia(function(a,c,d){a.$watchCollection(d.ngStyle,
function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)})}),qe=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var s=tb(h[d].clone);k[d].$destroy();(l[d]=a.leave(s)).then(n(l,d))}h.length=0;k.length=0;(g=
f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=W.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],re=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),se=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,
link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),ue=Ia({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw R("ngTransclude")("orphan",wa(c));f(function(a){c.empty();c.append(a)})}}),Vd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],gg=R("ngOptions"),te=ea({restrict:"A",terminal:!0}),Wd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
e={$setViewValue:E};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},n=e,p;l.databound=d.ngModel;l.init=function(a,c,d){n=a;p=d};l.addOption=function(c,d){La(c,'"option value"');k[c]=!0;n.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],n.$viewValue===a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c=
"? "+Ma(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=E})}],link:function(e,g,h,l){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(C.parent()&&C.remove(),c.val(a),""===a&&v.prop("selected",!0)):x(a)&&v?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){C.parent()&&C.remove();d.$setViewValue(c.val())})})}function n(a,c,d){var e;
d.$render=function(){var a=new eb(d.$viewValue);r(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){ha(e,d.$viewValue)||(e=sa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(a,c,d){T[x]=d;G&&(T[G]=c);return a(e,T)}function k(a){var c;if(u)if(I&&H(a)){c=new eb([]);for(var d=0;d<a.length;d++)c.put(h(I,null,a[d]),!0)}else c=
new eb(a);else I&&(a=h(I,null,a));return function(d,e){var f;f=I?I:B?B:z;return u?y(c.remove(h(f,d,e))):a===h(f,d,e)}}function l(){m||(e.$$postDigest(p),m=!0)}function n(a,c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function p(){m=!1;var a={"":[]},c=[""],d,l,s,t,v;s=g.$viewValue;t=L(e)||[];var B=G?Object.keys(t).sort():t,x,A,H,z,O={};v=k(s);var N=!1,U,W;Q={};for(z=0;H=B.length,z<H;z++){x=z;if(G&&(x=B[z],"$"===x.charAt(0)))continue;A=t[x];d=h(J,x,A)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=v(x,A);N=N||d;A=h(C,x,A);
A=y(A)?A:"";W=I?I(e,T):G?B[z]:z;I&&(Q[W]=x);l.push({id:W,label:A,selected:d})}u||(w||null===s?a[""].unshift({id:"",label:"",selected:!N}):N||a[""].unshift({id:"?",label:"",selected:!0}));x=0;for(B=c.length;x<B;x++){d=c[x];l=a[d];R.length<=x?(s={element:E.clone().attr("label",d),label:l.label},t=[s],R.push(t),f.append(s.element)):(t=R[x],s=t[0],s.label!=d&&s.element.attr("label",s.label=d));N=null;z=0;for(H=l.length;z<H;z++)d=l[z],(v=t[z+1])?(N=v.element,v.label!==d.label&&(n(O,v.label,!1),n(O,d.label,
!0),N.text(v.label=d.label),N.prop("label",v.label)),v.id!==d.id&&N.val(v.id=d.id),N[0].selected!==d.selected&&(N.prop("selected",v.selected=d.selected),Qa&&N.prop("selected",v.selected))):(""===d.id&&w?U=w:(U=F.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),t.push(v={element:U,label:d.label,id:d.id,selected:d.selected}),n(O,d.label,!0),N?N.after(U):s.element.append(U),N=U);for(z++;t.length>z;)d=t.pop(),n(O,d.label,!1),d.element.remove()}for(;R.length>
x;){l=R.pop();for(z=1;z<l.length;++z)n(O,l[z].label,!1);l[0].element.remove()}r(O,function(a,c){0<a?q.addOption(c):0>a&&q.removeOption(c)})}var v;if(!(v=s.match(d)))throw gg("iexp",s,wa(f));var C=c(v[2]||v[1]),x=v[4]||v[6],A=/ as /.test(v[0])&&v[1],B=A?c(A):null,G=v[5],J=c(v[3]||""),z=c(v[2]?v[1]:x),L=c(v[7]),I=v[8]?c(v[8]):null,Q={},R=[[{element:f,label:""}]],T={};w&&(a(w)(e),w.removeClass("ng-scope"),w.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=L(e)||[],c;if(u)c=[],r(f.val(),
function(d){d=I?Q[d]:d;c.push("?"===d?t:""===d?null:h(B?B:z,d,a[d]))});else{var d=I?Q[f.val()]:f.val();c="?"===d?t:""===d?null:h(B?B:z,d,a[d])}g.$setViewValue(c);p()})});g.$render=p;e.$watchCollection(L,l);e.$watchCollection(function(){var a=L(e),c;if(a&&H(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(C,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(C,d,a[d]));return c},l);u&&e.$watchCollection(function(){return g.$modelValue},l)}if(l[1]){var q=l[0];l=l[1];var u=h.multiple,
s=h.ngOptions,w=!1,v,m=!1,F=A(W.createElement("option")),E=A(W.createElement("optgroup")),C=F.clone();h=0;for(var B=g.children(),G=B.length;h<G;h++)if(""===B[h].value){v=w=B.eq(h);break}q.init(l,w,C);u&&(l.$isEmpty=function(a){return!a||0===a.length});s?p(e,g,l):u?n(e,g,l):k(e,g,l,q)}}}}],Yd=["$interpolate",function(a){var c={addOption:E,removeOption:E};return{restrict:"E",priority:100,compile:function(d,e){if(x(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=
d.parent(),n=k.data("$selectController")||k.parent().data("$selectController");n&&n.databound||(n=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&n.removeOption(c);n.addOption(a,d)}):n.addOption(e.value,d);d.on("$destroy",function(){n.removeOption(e.value)})}}}}],Xd=ea({restrict:"E",terminal:!1}),Bc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},
Ac=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){C(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw R("ngPattern")("noregexp",g,a,wa(c));f=a||t;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||x(f)||f.test(a)}}}}},Dc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=aa(a);f=isNaN(a)?-1:a;e.$validate()});
e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Cc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=aa(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};Q.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Nd(),Pd(ca),A(W).ready(function(){Jd(W,uc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

(function(N,f,W){'use strict';f.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(X,C,g){g=g.ngAnimateChildren;f.isString(g)&&0===g.length?C.data("$$ngAnimateChildren",!0):X.$watch(g,function(f){C.data("$$ngAnimateChildren",!!f)})}}).factory("$$animateReflow",["$$rAF","$document",function(f,C){return function(g){return f(function(){g()})}}]).config(["$provide","$animateProvider",function(X,C){function g(f){for(var n=0;n<f.length;n++){var g=f[n];if(1==g.nodeType)return g}}
function ba(f,n){return g(f)==g(n)}var t=f.noop,n=f.forEach,da=C.$$selectors,aa=f.isArray,ea=f.isString,ga=f.isObject,r={running:!0},u;X.decorator("$animate",["$delegate","$$q","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document","$templateRequest","$$jqLite",function(O,N,M,Y,y,H,P,W,Z,Q){function R(a,c){var b=a.data("$$ngAnimateState")||{};c&&(b.running=!0,b.structural=!0,a.data("$$ngAnimateState",b));return b.disabled||b.running&&b.structural}function D(a){var c,b=N.defer();
b.promise.$$cancelFn=function(){c&&c()};P.$$postDigest(function(){c=a(function(){b.resolve()})});return b.promise}function I(a){if(ga(a))return a.tempClasses&&ea(a.tempClasses)&&(a.tempClasses=a.tempClasses.split(/\s+/)),a}function S(a,c,b){b=b||{};var d={};n(b,function(e,a){n(a.split(" "),function(a){d[a]=e})});var h=Object.create(null);n((a.attr("class")||"").split(/\s+/),function(e){h[e]=!0});var f=[],l=[];n(c&&c.classes||[],function(e,a){var b=h[a],c=d[a]||{};!1===e?(b||"addClass"==c.event)&&
l.push(a):!0===e&&(b&&"removeClass"!=c.event||f.push(a))});return 0<f.length+l.length&&[f.join(" "),l.join(" ")]}function T(a){if(a){var c=[],b={};a=a.substr(1).split(".");(Y.transitions||Y.animations)&&c.push(M.get(da[""]));for(var d=0;d<a.length;d++){var f=a[d],k=da[f];k&&!b[f]&&(c.push(M.get(k)),b[f]=!0)}return c}}function U(a,c,b,d){function h(e,a){var b=e[a],c=e["before"+a.charAt(0).toUpperCase()+a.substr(1)];if(b||c)return"leave"==a&&(c=b,b=null),u.push({event:a,fn:b}),J.push({event:a,fn:c}),
!0}function k(c,l,w){var E=[];n(c,function(a){a.fn&&E.push(a)});var m=0;n(E,function(c,f){var p=function(){a:{if(l){(l[f]||t)();if(++m<E.length)break a;l=null}w()}};switch(c.event){case "setClass":l.push(c.fn(a,e,A,p,d));break;case "animate":l.push(c.fn(a,b,d.from,d.to,p));break;case "addClass":l.push(c.fn(a,e||b,p,d));break;case "removeClass":l.push(c.fn(a,A||b,p,d));break;default:l.push(c.fn(a,p,d))}});l&&0===l.length&&w()}var l=a[0];if(l){d&&(d.to=d.to||{},d.from=d.from||{});var e,A;aa(b)&&(e=
b[0],A=b[1],e?A?b=e+" "+A:(b=e,c="addClass"):(b=A,c="removeClass"));var w="setClass"==c,E=w||"addClass"==c||"removeClass"==c||"animate"==c,p=a.attr("class")+" "+b;if(x(p)){var ca=t,m=[],J=[],g=t,s=[],u=[],p=(" "+p).replace(/\s+/g,".");n(T(p),function(a){!h(a,c)&&w&&(h(a,"addClass"),h(a,"removeClass"))});return{node:l,event:c,className:b,isClassBased:E,isSetClassOperation:w,applyStyles:function(){d&&a.css(f.extend(d.from||{},d.to||{}))},before:function(a){ca=a;k(J,m,function(){ca=t;a()})},after:function(a){g=
a;k(u,s,function(){g=t;a()})},cancel:function(){m&&(n(m,function(a){(a||t)(!0)}),ca(!0));s&&(n(s,function(a){(a||t)(!0)}),g(!0))}}}}}function G(a,c,b,d,h,k,l,e){function A(e){var l="$animate:"+e;J&&J[l]&&0<J[l].length&&H(function(){b.triggerHandler(l,{event:a,className:c})})}function w(){A("before")}function E(){A("after")}function p(){p.hasBeenRun||(p.hasBeenRun=!0,k())}function g(){if(!g.hasBeenRun){m&&m.applyStyles();g.hasBeenRun=!0;l&&l.tempClasses&&n(l.tempClasses,function(a){u.removeClass(b,
a)});var w=b.data("$$ngAnimateState");w&&(m&&m.isClassBased?B(b,c):(H(function(){var e=b.data("$$ngAnimateState")||{};fa==e.index&&B(b,c,a)}),b.data("$$ngAnimateState",w)));A("close");e()}}var m=U(b,a,c,l);if(!m)return p(),w(),E(),g(),t;a=m.event;c=m.className;var J=f.element._data(m.node),J=J&&J.events;d||(d=h?h.parent():b.parent());if(z(b,d))return p(),w(),E(),g(),t;d=b.data("$$ngAnimateState")||{};var L=d.active||{},s=d.totalActive||0,q=d.last;h=!1;if(0<s){s=[];if(m.isClassBased)"setClass"==q.event?
(s.push(q),B(b,c)):L[c]&&(v=L[c],v.event==a?h=!0:(s.push(v),B(b,c)));else if("leave"==a&&L["ng-leave"])h=!0;else{for(var v in L)s.push(L[v]);d={};B(b,!0)}0<s.length&&n(s,function(a){a.cancel()})}!m.isClassBased||m.isSetClassOperation||"animate"==a||h||(h="addClass"==a==b.hasClass(c));if(h)return p(),w(),E(),A("close"),e(),t;L=d.active||{};s=d.totalActive||0;if("leave"==a)b.one("$destroy",function(a){a=f.element(this);var e=a.data("$$ngAnimateState");e&&(e=e.active["ng-leave"])&&(e.cancel(),B(a,"ng-leave"))});
u.addClass(b,"ng-animate");l&&l.tempClasses&&n(l.tempClasses,function(a){u.addClass(b,a)});var fa=K++;s++;L[c]=m;b.data("$$ngAnimateState",{last:m,active:L,index:fa,totalActive:s});w();m.before(function(e){var l=b.data("$$ngAnimateState");e=e||!l||!l.active[c]||m.isClassBased&&l.active[c].event!=a;p();!0===e?g():(E(),m.after(g))});return m.cancel}function q(a){if(a=g(a))a=f.isFunction(a.getElementsByClassName)?a.getElementsByClassName("ng-animate"):a.querySelectorAll(".ng-animate"),n(a,function(a){a=
f.element(a);(a=a.data("$$ngAnimateState"))&&a.active&&n(a.active,function(a){a.cancel()})})}function B(a,c){if(ba(a,y))r.disabled||(r.running=!1,r.structural=!1);else if(c){var b=a.data("$$ngAnimateState")||{},d=!0===c;!d&&b.active&&b.active[c]&&(b.totalActive--,delete b.active[c]);if(d||!b.totalActive)u.removeClass(a,"ng-animate"),a.removeData("$$ngAnimateState")}}function z(a,c){if(r.disabled)return!0;if(ba(a,y))return r.running;var b,d,g;do{if(0===c.length)break;var k=ba(c,y),l=k?r:c.data("$$ngAnimateState")||
{};if(l.disabled)return!0;k&&(g=!0);!1!==b&&(k=c.data("$$ngAnimateChildren"),f.isDefined(k)&&(b=k));d=d||l.running||l.last&&!l.last.isClassBased}while(c=c.parent());return!g||!b&&d}u=Q;y.data("$$ngAnimateState",r);var $=P.$watch(function(){return Z.totalPendingRequests},function(a,c){0===a&&($(),P.$$postDigest(function(){P.$$postDigest(function(){r.running=!1})}))}),K=0,V=C.classNameFilter(),x=V?function(a){return V.test(a)}:function(){return!0};return{animate:function(a,c,b,d,h){d=d||"ng-inline-animate";
h=I(h)||{};h.from=b?c:null;h.to=b?b:c;return D(function(b){return G("animate",d,f.element(g(a)),null,null,t,h,b)})},enter:function(a,c,b,d){d=I(d);a=f.element(a);c=c&&f.element(c);b=b&&f.element(b);R(a,!0);O.enter(a,c,b);return D(function(h){return G("enter","ng-enter",f.element(g(a)),c,b,t,d,h)})},leave:function(a,c){c=I(c);a=f.element(a);q(a);R(a,!0);return D(function(b){return G("leave","ng-leave",f.element(g(a)),null,null,function(){O.leave(a)},c,b)})},move:function(a,c,b,d){d=I(d);a=f.element(a);
c=c&&f.element(c);b=b&&f.element(b);q(a);R(a,!0);O.move(a,c,b);return D(function(h){return G("move","ng-move",f.element(g(a)),c,b,t,d,h)})},addClass:function(a,c,b){return this.setClass(a,c,[],b)},removeClass:function(a,c,b){return this.setClass(a,[],c,b)},setClass:function(a,c,b,d){d=I(d);a=f.element(a);a=f.element(g(a));if(R(a))return O.$$setClassImmediately(a,c,b,d);var h,k=a.data("$$animateClasses"),l=!!k;k||(k={classes:{}});h=k.classes;c=aa(c)?c:c.split(" ");n(c,function(a){a&&a.length&&(h[a]=
!0)});b=aa(b)?b:b.split(" ");n(b,function(a){a&&a.length&&(h[a]=!1)});if(l)return d&&k.options&&(k.options=f.extend(k.options||{},d)),k.promise;a.data("$$animateClasses",k={classes:h,options:d});return k.promise=D(function(e){var l=a.parent(),b=g(a),c=b.parentNode;if(!c||c.$$NG_REMOVED||b.$$NG_REMOVED)e();else{b=a.data("$$animateClasses");a.removeData("$$animateClasses");var c=a.data("$$ngAnimateState")||{},d=S(a,b,c.active);return d?G("setClass",d,a,l,null,function(){d[0]&&O.$$addClassImmediately(a,
d[0]);d[1]&&O.$$removeClassImmediately(a,d[1])},b.options,e):e()}})},cancel:function(a){a.$$cancelFn()},enabled:function(a,c){switch(arguments.length){case 2:if(a)B(c);else{var b=c.data("$$ngAnimateState")||{};b.disabled=!0;c.data("$$ngAnimateState",b)}break;case 1:r.disabled=!a;break;default:a=!r.disabled}return!!a}}}]);C.register("",["$window","$sniffer","$timeout","$$animateReflow",function(r,C,M,Y){function y(){b||(b=Y(function(){c=[];b=null;x={}}))}function H(a,e){b&&b();c.push(e);b=Y(function(){n(c,
function(a){a()});c=[];b=null;x={}})}function P(a,e){var b=g(a);a=f.element(b);k.push(a);b=Date.now()+e;b<=h||(M.cancel(d),h=b,d=M(function(){X(k);k=[]},e,!1))}function X(a){n(a,function(a){(a=a.data("$$ngAnimateCSS3Data"))&&n(a.closeAnimationFns,function(a){a()})})}function Z(a,e){var b=e?x[e]:null;if(!b){var c=0,d=0,f=0,g=0;n(a,function(a){if(1==a.nodeType){a=r.getComputedStyle(a)||{};c=Math.max(Q(a[z+"Duration"]),c);d=Math.max(Q(a[z+"Delay"]),d);g=Math.max(Q(a[K+"Delay"]),g);var e=Q(a[K+"Duration"]);
0<e&&(e*=parseInt(a[K+"IterationCount"],10)||1);f=Math.max(e,f)}});b={total:0,transitionDelay:d,transitionDuration:c,animationDelay:g,animationDuration:f};e&&(x[e]=b)}return b}function Q(a){var e=0;a=ea(a)?a.split(/\s*,\s*/):[];n(a,function(a){e=Math.max(parseFloat(a)||0,e)});return e}function R(b,e,c,d){b=0<=["ng-enter","ng-leave","ng-move"].indexOf(c);var f,p=e.parent(),h=p.data("$$ngAnimateKey");h||(p.data("$$ngAnimateKey",++a),h=a);f=h+"-"+g(e).getAttribute("class");var p=f+" "+c,h=x[p]?++x[p].total:
0,m={};if(0<h){var n=c+"-stagger",m=f+" "+n;(f=!x[m])&&u.addClass(e,n);m=Z(e,m);f&&u.removeClass(e,n)}u.addClass(e,c);var n=e.data("$$ngAnimateCSS3Data")||{},k=Z(e,p);f=k.transitionDuration;k=k.animationDuration;if(b&&0===f&&0===k)return u.removeClass(e,c),!1;c=d||b&&0<f;b=0<k&&0<m.animationDelay&&0===m.animationDuration;e.data("$$ngAnimateCSS3Data",{stagger:m,cacheKey:p,running:n.running||0,itemIndex:h,blockTransition:c,closeAnimationFns:n.closeAnimationFns||[]});p=g(e);c&&(I(p,!0),d&&e.css(d));
b&&(p.style[K+"PlayState"]="paused");return!0}function D(a,e,b,c,d){function f(){e.off(D,h);u.removeClass(e,k);u.removeClass(e,t);z&&M.cancel(z);G(e,b);var a=g(e),c;for(c in s)a.style.removeProperty(s[c])}function h(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-H,0)>=C&&b>=x&&c()}var m=g(e);a=e.data("$$ngAnimateCSS3Data");if(-1!=m.getAttribute("class").indexOf(b)&&a){var k="",t="";n(b.split(" "),function(a,
b){var e=(0<b?" ":"")+a;k+=e+"-active";t+=e+"-pending"});var s=[],q=a.itemIndex,v=a.stagger,r=0;if(0<q){r=0;0<v.transitionDelay&&0===v.transitionDuration&&(r=v.transitionDelay*q);var y=0;0<v.animationDelay&&0===v.animationDuration&&(y=v.animationDelay*q,s.push(B+"animation-play-state"));r=Math.round(100*Math.max(r,y))/100}r||(u.addClass(e,k),a.blockTransition&&I(m,!1));var F=Z(e,a.cacheKey+" "+k),x=Math.max(F.transitionDuration,F.animationDuration);if(0===x)u.removeClass(e,k),G(e,b),c();else{!r&&
d&&0<Object.keys(d).length&&(F.transitionDuration||(e.css("transition",F.animationDuration+"s linear all"),s.push("transition")),e.css(d));var q=Math.max(F.transitionDelay,F.animationDelay),C=1E3*q;0<s.length&&(v=m.getAttribute("style")||"",";"!==v.charAt(v.length-1)&&(v+=";"),m.setAttribute("style",v+" "));var H=Date.now(),D=V+" "+$,q=1E3*(r+1.5*(q+x)),z;0<r&&(u.addClass(e,t),z=M(function(){z=null;0<F.transitionDuration&&I(m,!1);0<F.animationDuration&&(m.style[K+"PlayState"]="");u.addClass(e,k);
u.removeClass(e,t);d&&(0===F.transitionDuration&&e.css("transition",F.animationDuration+"s linear all"),e.css(d),s.push("transition"))},1E3*r,!1));e.on(D,h);a.closeAnimationFns.push(function(){f();c()});a.running++;P(e,q);return f}}else c()}function I(a,b){a.style[z+"Property"]=b?"none":""}function S(a,b,c,d){if(R(a,b,c,d))return function(a){a&&G(b,c)}}function T(a,b,c,d,f){if(b.data("$$ngAnimateCSS3Data"))return D(a,b,c,d,f);G(b,c);d()}function U(a,b,c,d,f){var g=S(a,b,c,f.from);if(g){var h=g;H(b,
function(){h=T(a,b,c,d,f.to)});return function(a){(h||t)(a)}}y();d()}function G(a,b){u.removeClass(a,b);var c=a.data("$$ngAnimateCSS3Data");c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData("$$ngAnimateCSS3Data"))}function q(a,b){var c="";a=aa(a)?a:a.split(/\s+/);n(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var B="",z,$,K,V;N.ontransitionend===W&&N.onwebkittransitionend!==W?(B="-webkit-",z="WebkitTransition",$="webkitTransitionEnd transitionend"):(z="transition",
$="transitionend");N.onanimationend===W&&N.onwebkitanimationend!==W?(B="-webkit-",K="WebkitAnimation",V="webkitAnimationEnd animationend"):(K="animation",V="animationend");var x={},a=0,c=[],b,d=null,h=0,k=[];return{animate:function(a,b,c,d,f,g){g=g||{};g.from=c;g.to=d;return U("animate",a,b,f,g)},enter:function(a,b,c){c=c||{};return U("enter",a,"ng-enter",b,c)},leave:function(a,b,c){c=c||{};return U("leave",a,"ng-leave",b,c)},move:function(a,b,c){c=c||{};return U("move",a,"ng-move",b,c)},beforeSetClass:function(a,
b,c,d,f){f=f||{};b=q(c,"-remove")+" "+q(b,"-add");if(f=S("setClass",a,b,f.from))return H(a,d),f;y();d()},beforeAddClass:function(a,b,c,d){d=d||{};if(b=S("addClass",a,q(b,"-add"),d.from))return H(a,c),b;y();c()},beforeRemoveClass:function(a,b,c,d){d=d||{};if(b=S("removeClass",a,q(b,"-remove"),d.from))return H(a,c),b;y();c()},setClass:function(a,b,c,d,f){f=f||{};c=q(c,"-remove");b=q(b,"-add");return T("setClass",a,c+" "+b,d,f.to)},addClass:function(a,b,c,d){d=d||{};return T("addClass",a,q(b,"-add"),
c,d.to)},removeClass:function(a,b,c,d){d=d||{};return T("removeClass",a,q(b,"-remove"),c,d.to)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

(function(q,d,C){'use strict';function v(r,k,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,c,y){function z(){l&&(h.cancel(l),l=null);m&&(m.$destroy(),m=null);n&&(l=h.leave(n),l.then(function(){l=null}),n=null)}function x(){var b=r.current&&r.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),c=r.current;n=y(b,function(b){h.enter(b,null,n||f).then(function(){!d.isDefined(t)||t&&!a.$eval(t)||k()});z()});m=c.scope=b;m.$emit("$viewContentLoaded");
m.$eval(w)}else z()}var m,n,l,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(d,k,h){return{restrict:"ECA",priority:-400,link:function(a,f){var b=h.current,c=b.locals;f.html(c.$template);var y=d(f.contents());b.controller&&(c.$scope=a,c=k(b.controller,c),b.controllerAs&&(a[b.controllerAs]=c),f.data("$ngControllerController",c),f.children().data("$ngControllerController",c));y(a)}}}q=d.module("ngRoute",["ng"]).provider("$route",function(){function r(a,f){return d.extend(Object.create(a),
f)}function k(a,d){var b=d.caseInsensitiveMatch,c={originalPath:a,regexp:a},h=c.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,b,c){a="?"===c?c:null;c="*"===c?c:null;h.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");c.regexp=new RegExp("^"+a+"$",b?"i":"");return c}var h={};this.when=function(a,f){var b=d.copy(f);d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);h[a]=d.extend(b,a&&k(a,b));if(a){var c="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";h[c]=d.extend({redirectTo:a},k(c,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,c,k,q,x){function m(b){var e=s.current;
(v=(p=l())&&e&&p.$$route===e.$$route&&d.equals(p.pathParams,e.pathParams)&&!p.reloadOnSearch&&!w)||!e&&!p||a.$broadcast("$routeChangeStart",p,e).defaultPrevented&&b&&b.preventDefault()}function n(){var u=s.current,e=p;if(v)u.params=e.params,d.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?f.path(t(e.redirectTo,e.params)).search(e.params).replace():f.url(e.redirectTo(e.pathParams,f.path(),f.search())).replace()),c.when(e).then(function(){if(e){var a=
d.extend({},e.resolve),b,g;d.forEach(a,function(b,e){a[e]=d.isString(b)?k.get(b):k.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(g=e.templateUrl)&&(d.isFunction(g)&&(g=g(e.params)),g=x.getTrustedResourceUrl(g),d.isDefined(g)&&(e.loadedTemplateUrl=g,b=q(g)));d.isDefined(b)&&(a.$template=b);return c.all(a)}}).then(function(c){e==s.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
e,u,b)})}function l(){var a,b;d.forEach(h,function(c,h){var g;if(g=!b){var k=f.path();g=c.keys;var m={};if(c.regexp)if(k=c.regexp.exec(k)){for(var l=1,n=k.length;l<n;++l){var p=g[l-1],q=k[l];p&&q&&(m[p.name]=q)}g=m}else g=null;else g=null;g=a=g}g&&(b=r(c,{params:d.extend({},f.search(),a),pathParams:a}),b.$$route=c)});return b||h[null]&&r(h[null],{params:{},pathParams:{}})}function t(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
h=f[1];c.push(b[h]);c.push(f[2]||"");delete b[h]}});return c.join("")}var w=!1,p,v,s={routes:h,reload:function(){w=!0;a.$evalAsync(function(){m();n()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),f.path(t(this.current.$$route.originalPath,a)),f.search(a);else throw B("norout");}};a.$on("$locationChangeStart",m);a.$on("$locationChangeSuccess",n);return s}]});var B=d.$$minErr("ngRoute");q.provider("$routeParams",function(){this.$get=function(){return{}}});
q.directive("ngView",v);q.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

(function(n,h,p){'use strict';function E(a){var e=[];r(e,h.noop).chars(a);return e.join("")}function g(a){var e={};a=a.split(",");var d;for(d=0;d<a.length;d++)e[a[d]]=!0;return e}function F(a,e){function d(a,b,d,l){b=h.lowercase(b);if(s[b])for(;f.last()&&t[f.last()];)c("",f.last());u[b]&&f.last()==b&&c("",b);(l=v[b]||!!l)||f.push(b);var m={};d.replace(G,function(a,b,e,c,d){m[b]=q(e||c||d||"")});e.start&&e.start(b,m,l)}function c(a,b){var c=0,d;if(b=h.lowercase(b))for(c=f.length-1;0<=c&&f[c]!=b;c--);
if(0<=c){for(d=f.length-1;d>=c;d--)e.end&&e.end(f[d]);f.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,f=[],m=a,l;for(f.last=function(){return f[f.length-1]};a;){l="";k=!0;if(f.last()&&w[f.last()])a=a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(a,b){b=b.replace(H,"$1").replace(I,"$1");e.chars&&e.chars(q(b));return""}),c("",f.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(e.comment&&
e.comment(a.substring(4,b)),a=a.substring(b+3),k=!1);else if(x.test(a)){if(b=a.match(x))a=a.replace(b[0],""),k=!1}else if(J.test(a)){if(b=a.match(y))a=a.substring(b[0].length),b[0].replace(y,c),k=!1}else K.test(a)&&((b=a.match(z))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(z,d)),k=!1):(l+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),l+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),e.chars&&e.chars(q(l)))}if(a==m)throw L("badparse",a);m=a}c()}function q(a){if(!a)return"";A.innerHTML=a.replace(/</g,
"&lt;");return A.textContent}function B(a){return a.replace(/&/g,"&amp;").replace(M,function(a){var d=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(d-55296)+(a-56320)+65536)+";"}).replace(N,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(a,e){var d=!1,c=h.bind(a,a.push);return{start:function(a,k,f){a=h.lowercase(a);!d&&w[a]&&(d=a);d||!0!==C[a]||(c("<"),c(a),h.forEach(k,function(d,f){var k=h.lowercase(f),g="img"===a&&"src"===k||"background"===
k;!0!==O[k]||!0===D[k]&&!e(d,g)||(c(" "),c(f),c('="'),c(B(d)),c('"'))}),c(f?"/>":">"))},end:function(a){a=h.lowercase(a);d||!0!==C[a]||(c("</"),c(a),c(">"));a==d&&(d=!1)},chars:function(a){d||c(B(a))}}}var L=h.$$minErr("$sanitize"),z=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,y=/^<\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,J=/^<\//,H=/\x3c!--(.*?)--\x3e/g,x=/<!DOCTYPE([^>]*?)>/i,
I=/<!\[CDATA\[(.*?)]]\x3e/g,M=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,N=/([^\#-~| |!])/g,v=g("area,br,col,hr,img,wbr");n=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");p=g("rp,rt");var u=h.extend({},p,n),s=h.extend({},n,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),t=h.extend({},p,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
n=g("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use");var w=g("script,style"),C=h.extend({},v,s,t,u,n),D=g("background,cite,href,longdesc,src,usemap,xlink:href");n=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width");
p=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan");
var O=h.extend({},D,p,n),A=document.createElement("pre");h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(e){var d=[];F(e,r(d,function(c,b){return!/^unsafe/.test(a(c,b))}));return d.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var e=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/,d=/^mailto:/;return function(c,b){function k(a){a&&g.push(E(a))}function f(a,c){g.push("<a ");
h.isDefined(b)&&g.push('target="',b,'" ');g.push('href="',a.replace(/"/g,"&quot;"),'">');k(c);g.push("</a>")}if(!c)return c;for(var m,l=c,g=[],n,p;m=l.match(e);)n=m[0],m[2]||m[4]||(n=(m[3]?"http://":"mailto:")+n),p=m.index,k(l.substr(0,p)),f(n,m[0].replace(d,"")),l=l.substring(p+m[0].length);k(l);return a(g.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

function wizardButtonDirective(a){angular.module("mgo-angular-wizard").directive(a,function(){return{restrict:"A",replace:!1,require:"^wizard",link:function(b,c,d,e){c.on("click",function(c){c.preventDefault(),b.$apply(function(){b.$eval(d[a]),e[a.replace("wz","").toLowerCase()]()})})}}})}angular.module("templates-angularwizard",["step.html","wizard.html"]),angular.module("step.html",[]).run(["$templateCache",function(a){a.put("step.html",'<section ng-show="selected" ng-class="{current: selected, done: completed}" class="step" ng-transclude>\n</section>')}]),angular.module("wizard.html",[]).run(["$templateCache",function(a){a.put("wizard.html",'<div>\n    <div class="steps" ng-transclude></div>\n    <ul class="steps-indicator steps-{{steps.length}}" ng-if="!hideIndicators">\n      <li ng-class="{default: !step.completed && !step.selected, current: step.selected && !step.completed, done: step.completed && !step.selected, editing: step.selected && step.completed}" ng-repeat="step in steps">\n        <a ng-click="goTo(step)">{{step.title || step.wzTitle}}</a>\n      </li>\n    </ul>\n</div>\n')}]),angular.module("mgo-angular-wizard",["templates-angularwizard"]),angular.module("mgo-angular-wizard").directive("wzStep",function(){return{restrict:"EA",replace:!0,transclude:!0,scope:{wzTitle:"@",title:"@",canenter:"=",canexit:"="},require:"^wizard",templateUrl:function(a,b){return b.template||"step.html"},link:function(a,b,c,d){a.title=a.title||a.wzTitle,d.addStep(a)}}}),angular.module("mgo-angular-wizard").directive("wizard",function(){return{restrict:"EA",replace:!0,transclude:!0,scope:{currentStep:"=",onFinish:"&",hideIndicators:"=",editMode:"=",name:"@"},templateUrl:function(a,b){return b.template||"wizard.html"},controller:["$scope","$element","$log","WizardHandler",function(a,b,c,d){function e(){_.each(a.steps,function(a){a.selected=!1}),a.selectedStep=null}var f=!0;d.addWizard(a.name||d.defaultName,this),a.$on("$destroy",function(){d.removeWizard(a.name||d.defaultName)}),a.steps=[],a.context={},a.$watch("currentStep",function(b){if(b){var c=a.selectedStep.title||a.selectedStep.wzTitle;a.selectedStep&&c!==a.currentStep&&a.goTo(_.findWhere(a.steps,{title:a.currentStep}))}}),a.$watch("[editMode, steps.length]",function(){var b=a.editMode;_.isUndefined(b)||_.isNull(b)||b&&_.each(a.steps,function(a){a.completed=!0})},!0),this.addStep=function(b){a.steps.push(b),1===a.steps.length&&a.goTo(a.steps[0])},this.context=a.context,a.getStepNumber=function(b){return _.indexOf(a.steps,b)+1},a.goTo=function(b){if(f)e(),a.selectedStep=b,_.isUndefined(a.currentStep)||(a.currentStep=b.title||b.wzTitle),b.selected=!0,a.$emit("wizard:stepChanged",{step:b,index:_.indexOf(a.steps,b)}),f=!1;else{var c,d=!1,g=!1;if(a.currentStepNumber()>0?c=a.currentStepNumber()-1:0===a.currentStepNumber()&&(c=0),("undefined"==typeof a.steps[c].canexit||a.steps[c].canexit(a.context)===!0)&&(d=!0),a.getStepNumber(b)<a.currentStepNumber()&&(d=!0),(d&&void 0===b.canenter||d&&b.canenter(a.context)===!0)&&(g=!0),!d||!g)return;e(),a.selectedStep=b,_.isUndefined(a.currentStep)||(a.currentStep=b.title||b.wzTitle),b.selected=!0,a.$emit("wizard:stepChanged",{step:b,index:_.indexOf(a.steps,b)})}},a.currentStepNumber=function(){return _.indexOf(a.steps,a.selectedStep)+1},this.currentStepNumber=function(){return a.currentStepNumber()},this.next=function(b){var c=_.indexOf(a.steps,a.selectedStep);if(angular.isFunction(b)){if(!b())return;c===a.steps.length-1?this.finish():a.goTo(a.steps[c+1])}b||(a.selectedStep.completed=!0),c===a.steps.length-1?this.finish():a.goTo(a.steps[c+1])},this.goTo=function(b){var c;c=_.isNumber(b)?a.steps[b]:_.findWhere(a.steps,{title:b}),a.goTo(c)},this.finish=function(){a.onFinish&&a.onFinish()},this.cancel=this.previous=function(){var b=_.indexOf(a.steps,a.selectedStep);if(0===b)throw new Error("Can't go back. It's already in step 0");a.goTo(a.steps[b-1])}}]}}),wizardButtonDirective("wzNext"),wizardButtonDirective("wzPrevious"),wizardButtonDirective("wzFinish"),wizardButtonDirective("wzCancel"),angular.module("mgo-angular-wizard").factory("WizardHandler",function(){var a={},b={};return a.defaultName="defaultWizard",a.addWizard=function(a,c){b[a]=c},a.removeWizard=function(a){delete b[a]},a.wizard=function(c){var d=c;return c||(d=a.defaultName),b[d]},a});
(function () {
  'use strict';

  angular.module('ui.tree', [])
    .constant('treeConfig', {
      treeClass: 'angular-ui-tree',
      emptyTreeClass: 'angular-ui-tree-empty',
      hiddenClass: 'angular-ui-tree-hidden',
      nodesClass: 'angular-ui-tree-nodes',
      nodeClass: 'angular-ui-tree-node',
      handleClass: 'angular-ui-tree-handle',
      placeHoldersWrapperClass: 'angular-ui-tree-placeholders-wrapper',
      placeHolderClass: 'angular-ui-tree-placeholder',
      dragClass: 'angular-ui-tree-drag',
      dragWrapperClass: 'angular-ui-tree-drag-wrapper',
      dragUpThreshold: 10,
      dir: 'ltr',
      levelThreshold: 30
    })
    .constant('keys', {
      space: 32,
      enter: 13,
      tab: 9,
      esc: 27,
      escape: 27,
      backspace: 8,
      back: 8,
      shift: 16,
      maj: 16,
      ctrl: 17,
      control: 17,
      alt: 18,
      left: 37,
      leftarrow: 37,
      up: 38,
      uparrow: 38,
      right: 39,
      rightarrow: 39,
      down: 40,
      downarrow: 40,
      ins: 45,
      insert: 45,
      del: 46,
      'delete': 46,
      home: 36,
      end: 35,
      pgup: 33,
      pageup: 33,
      pgdown: 34,
      pagedown: 34,
      f1: 112,
      f2: 113,
      f3: 114,
      f4: 115,
      f5: 116,
      f6: 117,
      f7: 118,
      f8: 119,
      f9: 120,
      f10: 121,
      f11: 122,
      f12: 123
    });
})();

(function() {
  'use strict';

  angular.module('ui.tree')

    .controller('TreeHandleController', ['$scope', '$element', '$attrs', 'treeConfig',
      function ($scope, $element, $attrs, treeConfig) {
        this.scope = $scope;

        $scope.$element = $element;
        $scope.$handleElement = $element;
        $scope.$nodeScope = undefined;
        $scope.$type = 'uiTreeHandle';
      }
    ]);
})();

(function() {
  'use strict';

  angular.module('ui.tree')

    .controller('TreeNodeController', ['$scope', '$element', '$attrs', 'treeConfig',
      function ($scope, $element, $attrs, treeConfig) {
        this.scope = $scope;

        $scope.$element = $element;
        $scope.$nodeElement = $element;
        $scope.$modelValue = undefined; // Model value for node;
        $scope.$parentNodeScope = undefined; // uiTreeNode Scope of parent node;
        $scope.$childNodesScope = undefined; // uiTreeNodes Scope of child nodes.
        $scope.$parentNodesScope = undefined; // uiTreeNodes Scope of parent nodes.
        $scope.$treeScope = undefined; // uiTree scope
        $scope.$handleScope = undefined; // it's handle scope
        $scope.$type = 'uiTreeNode';
        $scope.$$apply = false; //
        $scope.$dragInfo = undefined;

        $scope.collapsed = false;
        $scope.expandOnHover = false;

        $scope.selected = false;

        $scope.init = function(controllersArr) {
          var treeNodesCtrl = controllersArr[0];
          $scope.$treeScope = controllersArr[1] ? controllersArr[1].scope : undefined;

          // find the scope of it's parent node
          $scope.$parentNodeScope = treeNodesCtrl.scope.$nodeScope;
          // modelValue for current node
          $scope.$modelValue = treeNodesCtrl.scope.$modelValue[$scope.$index];
          $scope.$parentNodesScope = treeNodesCtrl.scope;
          treeNodesCtrl.scope.initSubNode($scope); // init sub nodes

          $element.on('$destroy', function() {
            treeNodesCtrl.scope.destroySubNode($scope); // destroy sub nodes
          });
        };

        $scope.toggleSelected = function() {
          if ($scope.selected) {
            $scope.unselect();
          } else {
            $scope.select();
          }
        };

        $scope.select = function() {
          if (!$scope.selected && $scope.$treeScope.$callbacks.select($scope)) {
            $scope.selected = true;

            $scope.$treeScope.$selecteds.push($scope.$element);
          }
        };

        $scope.unselect = function() {
          if ($scope.selected && $scope.$treeScope.$callbacks.unselect($scope)) {
            $scope.selected = false;

            var indexOf = $scope.$treeScope.$selecteds.indexOf($scope.$element);
            if (angular.isDefined(indexOf) && indexOf > -1) {
              $scope.$treeScope.$selecteds.splice(indexOf, 1);
            }
          }
        };

        $scope.index = function() {
          return $scope.$parentNodesScope.$modelValue.indexOf($scope.$modelValue);
        };

        $scope.dragEnabled = function() {
          return !($scope.$treeScope && !$scope.$treeScope.dragEnabled);
        };

        $scope.isSibling = function(targetNode) {
          return $scope.$parentNodesScope === targetNode.$parentNodesScope;
        };

        $scope.isChild = function(targetNode) {
          var nodes = $scope.childNodes();
          return nodes && nodes.indexOf(targetNode) > -1;
        };

        $scope.prev = function() {
          var index = $scope.index();
          if (index > 0) {
            return $scope.siblings()[index - 1];
          }

          return undefined;
        };

        $scope.siblings = function() {
          return $scope.$parentNodesScope.childNodes();
        };

        $scope.childNodesCount = function() {
          return (angular.isDefined($scope.childNodes())) ? $scope.childNodes().length : 0;
        };

        $scope.hasChild = function() {
          return $scope.childNodesCount() > 0;
        };

        $scope.childNodes = function() {
          return (angular.isDefined($scope.$childNodesScope) && angular.isDefined($scope.$childNodesScope.$modelValue)) ?
                 $scope.$childNodesScope.childNodes() : undefined;
        };

        $scope.accept = function(sourceNode, destIndex) {
          return angular.isDefined($scope.$childNodesScope) &&
                  angular.isDefined($scope.$childNodesScope.$modelValue) &&
                  $scope.$childNodesScope.accept(sourceNode, destIndex);
        };

        $scope.removeNode = function() {
          if ($scope.$treeScope.$callbacks.remove(node)) {
            var node = $scope.remove();

            return node;
          }

          return undefined;
        };

        $scope.remove = function() {
          return $scope.$parentNodesScope.removeNode($scope);
        };

        $scope.toggle = function() {
          $scope.collapsed = !$scope.collapsed;
        };

        $scope.collapse = function(all) {
          $scope.collapsed = $scope.$treeScope.$callbacks.collapse($scope, all);
        };

        $scope.expand = function(all) {
          $scope.collapsed = !$scope.$treeScope.$callbacks.expand($scope, all);
        };

        $scope.depth = function() {
          var parentNode = $scope.$parentNodeScope;
          if (parentNode) {
            return parentNode.depth() + 1;
          }

          return 1;
        };

        var subDepth = 0;
        var countSubDepth = function(scope) {
          var count = 0;
          var nodes = scope.childNodes();
          for (var i = 0; i < nodes.length; i++) {
            var childNodes = nodes[i].$childNodesScope;
            if (childNodes) {
              count = 1;
              countSubDepth(childNodes);
            }
          }
          subDepth += count;
        };

        $scope.maxSubDepth = function() {
          subDepth = 0;
          if ($scope.$childNodesScope) {
            countSubDepth($scope.$childNodesScope);
          }

          return subDepth;
        };

      }
    ]);
})();

(function() {
  'use strict';

  angular.module('ui.tree')

    .controller('TreeNodesController', ['$scope', '$element', '$q', 'treeConfig',
      function ($scope, $element, $q, treeConfig) {
        this.scope = $scope;

        $scope.$element = $element;
        $scope.$nodesElement = $element;
        $scope.$modelValue = undefined;
        $scope.$nodeScope = undefined; // the scope of node which the nodes belongs to
        $scope.$treeScope = undefined;
        $scope.$type = 'uiTreeNodes';
        $scope.$nodesMap = {};

        $scope.nodrop = false;
        $scope.maxDepth = 0;

        $scope.expandOnHover = undefined;

        $scope.initSubNode = function(subNode) {
          if (!subNode.$modelValue) {
            return undefined;
          }
          $scope.$nodesMap[subNode.$modelValue.$$hashKey] = subNode;
        };

        $scope.destroySubNode = function(subNode) {
          if (!subNode.$modelValue) {
            return undefined;
          }
          $scope.$nodesMap[subNode.$modelValue.$$hashKey] = undefined;
        };

        $scope.accept = function(sourceNode, destIndex) {
          return $scope.$treeScope.$callbacks.accept(sourceNode, $scope, destIndex);
        };

        $scope.beforeDrag = function(sourceNode, event) {
          return $scope.$treeScope.$callbacks.beforeDrag(sourceNode, event);
        };

        $scope.isParent = function(node) {
          return node.$parentNodesScope == $scope;
        };

        $scope.hasChild = function() {
          return $scope.$modelValue.length > 0;
        };

        $scope.safeApply = function(fn) {
          var phase = this.$root.$$phase;
          if (phase == '$apply' || phase == '$digest') {
            if (fn && (typeof(fn) === 'function')) {
              fn();
            }
          } else {
            this.$apply(fn);
          }
        };

        $scope.removeNode = function(node) {
          var deferred = $q.defer();

          var index = $scope.$modelValue.indexOf(node.$modelValue);
          if (index > -1) {
            $scope.safeApply(function() {
              $scope.$modelValue.splice(index, 1)[0];

              deferred.resolve(node);
            });
          } else {
            deferred.reject('not found');
          }

          return deferred.promise;
        };

        $scope.insertNode = function(index, nodeData) {
          var deferred = $q.defer();

          $scope.safeApply(function() {
            $scope.$modelValue.splice(index, 0, nodeData);
            deferred.resolve('inserted');
          });

          return deferred.promise;
        };

        $scope.childNodes = function() {
          var nodes = [];
          if ($scope.$modelValue) {
            for (var i = 0; i < $scope.$modelValue.length; i++) {
              nodes.push($scope.$nodesMap[$scope.$modelValue[i].$$hashKey]);
            }
          }
          return nodes;
        };

        $scope.depth = function() {
          if ($scope.$nodeScope) {
            return $scope.$nodeScope.depth();
          }
          return 0; // if it has no $nodeScope, it's root
        };

        // check if depth limit has reached
        $scope.outOfDepth = function(sourceNode) {
          var maxDepth = $scope.maxDepth || $scope.$treeScope.maxDepth;
          if (maxDepth > 0) {
            return $scope.depth() + sourceNode.maxSubDepth() + 1 > maxDepth;
          }
          return false;
        };

      }
    ]);
})();

(function() {
  'use strict';

  angular.module('ui.tree')
    .controller('TreeController', ['$scope', '$element', '$window', '$attrs', 'treeConfig', 'keys',
      function ($scope, $element, $window, $attrs, treeConfig, keys) {
        this.scope = $scope;

        $scope.$element = $element;
        $scope.$treeElement = $element;
        $scope.$nodesScope = undefined; // root nodes
        $scope.$type = 'uiTree';
        $scope.$emptyElm = undefined;
        $scope.$callbacks = undefined;

        $scope.$selecteds = [];

        $scope.dragEnabled = (angular.isUndefined($scope.dragEnabled)) ? true : $scope.dragEnabled;
        $scope.emptyPlaceholderEnabled = (angular.isUndefined($scope.emptyPlaceholderEnabled)) ? false : $scope.emptyPlaceholderEnabled;
        $scope.maxDepth = (angular.isUndefined($scope.maxDepth)) ? 10 : $scope.maxDepth;
        $scope.dragDelay = (angular.isUndefined($scope.dragDelay)) ? 0 : $scope.dragDelay;
        $scope.dragDistance = (angular.isUndefined($scope.dragDistance)) ? 0 : $scope.dragDistance;
        $scope.cancelKey = keys.escape;
        $scope.lockXKey = undefined;
        $scope.lockX = false;
        $scope.lockYKey = undefined;
        $scope.lockY = false;
        $scope.boundTo = (angular.isUndefined($scope.boundTo)) ? '' : $scope.boundTo;
        $scope.collideWith = 'bottom';
        $scope.coverage = 0.5;
        $scope.spacing = (angular.isUndefined($scope.spacing)) ? 50 : $scope.spacing;
        $scope.spacingThreshold = Math.floor($scope.spacing / 4);

        $scope.copyKey = undefined;
        $scope.copy = false;
        $scope.multiSelectKey = undefined;
        $scope.multiSelect = false;

        $scope.expandOnHover = (angular.isUndefined($scope.expandOnHover)) ? 500 : $scope.expandOnHover;

        $scope.$watch('callbacks', function(newOptions) {
          angular.forEach(newOptions, function(value, key) {
            if ($scope.$callbacks[key]) {
              if (angular.isFunction(value)) {
                $scope.$callbacks[key] = value;
              }
            }
          });
        }, true);

        $scope.$watch('$nodesScope.$modelValue.length', function(val) {
          if ((typeof val) != 'undefined' && $scope.$nodesScope.$modelValue) {
            $scope.resetEmptyElement();
          }
        }, true);

        $scope.$watch('lockXKeyString', function(val) {
          if (angular.isString(val)) {
            val = val.toLowerCase();
            if (val.length > 0) {
              $scope.lockXKey = (angular.isDefined(keys[val])) ? keys[val] : (val.length === 1) ? (val.charCodeAt(0) - 32) : undefined;
            }
          }

          $scope.lockX = (angular.isUndefined($scope.lockXKey) && ((typeof val) === 'boolean')) ? val : false;
        });

        $scope.$watch('lockYKeyString', function(val) {
          if (angular.isString(val)) {
            val = val.toLowerCase();
            if (val.length > 0) {
              $scope.lockYKey = (angular.isDefined(keys[val])) ? keys[val] : (val.length === 1) ? (val.charCodeAt(0) - 32) : undefined;
            }
          }

          $scope.lockY = (angular.isUndefined($scope.lockXKey) && ((typeof val) === 'boolean')) ? val : false;
        });

        $scope.$watch('boundToString', function(val) {
          if (angular.isString(val) && val.length > 0) {
            try {
              $scope.boundTo = angular.element($window.document.querySelectorAll(val));
            } catch (exception) {
              $scope.boundTo = '';
            }
          }
        });

        $scope.$watch('spacing', function(val) {
          if (angular.isNumber(val) && val > 0) {
            $scope.spacingThreshold = Math.floor($scope.spacing / 4);
          }
        });

        $scope.$watch('coveragePercent', function(val) {
          if (angular.isNumber(val) && val >= -100 && val <= 100) {
            $scope.collideWith = (val < 0) ? 'top' : 'bottom';
            $scope.coverage = Math.abs((val / 100));
          }
        });

        $scope.$watch('cancelKeyString', function(val) {
          if (angular.isString(val)) {
            val = val.toLowerCase();
            if (val.length > 0) {
              $scope.cancelKey = (angular.isDefined(keys[val])) ? keys[val] : (val.charCodeAt(0) - 32);
            }
          }
        });

        $scope.$watch('copyKeyString', function(val) {
          if (angular.isString(val)) {
            val = val.toLowerCase();
            if (val.length > 0) {
              $scope.copyKey = (angular.isDefined(keys[val])) ? keys[val] : (val.charCodeAt(0) - 32);
            }
          }
        });

        $scope.$watch('selectKeyString', function(val) {
          if (angular.isString(val)) {
            val = val.toLowerCase();
            if (val.length > 0) {
              $scope.multiSelectKey = (angular.isDefined(keys[val])) ? keys[val] : (val.charCodeAt(0) - 32);
            }
          }
        });

        // Check if it's a empty tree
        $scope.isEmpty = function() {
          return ($scope.$nodesScope && $scope.$nodesScope.$modelValue && $scope.$nodesScope.$modelValue.length === 0);
        };

        // add placeholder to empty tree
        $scope.place = function(placeElm) {
          $scope.$nodesScope.$element.append(placeElm);
          $scope.$emptyElm.remove();
        };

        $scope.resetEmptyElement = function() {
          if ($scope.$nodesScope.$modelValue.length === 0 && $scope.emptyPlaceholderEnabled) {
            $element.append($scope.$emptyElm);
          } else {
            $scope.$emptyElm.remove();
          }
        };

        var collapseOrExpand = function(scope, collapsed) {
          var nodes = scope.childNodes();
          for (var i = 0; i < nodes.length; i++) {
            if (nodes[i]) {
              (collapsed) ? nodes[i].collapse(true) : nodes[i].expand(true);

              var subScope = nodes[i].$childNodesScope;
              if (subScope) {
                collapseOrExpand(subScope, collapsed);
              }
            }
          }
        };

        $scope.collapseAll = function() {
          collapseOrExpand($scope.$nodesScope, true);
        };
        $scope.$on('collapseAll', $scope.collapseAll);

        $scope.expandAll = function() {
          collapseOrExpand($scope.$nodesScope, false);
        };
        $scope.$on('expandAll', $scope.expandAll);
      }
    ]);
})();

(function() {
  'use strict';

  angular.module('ui.tree')
  .directive('uiTree', [ 'treeConfig', 'keys', '$window',
    function(treeConfig, keys, $window) {
      return {
        restrict: 'EA',
        scope: {
          callbacks: '=?',
          dragEnabled: '=?',
          emptyPlaceholderEnabled: '=?',
          maxDepth: '=?',
          dragDelay: '=?',
          dragDistance: '=?',
          lockXKeyString: '=?lockX',
          lockYKeyString: '=?lockY',
          boundToString: '=?boundTo',
          spacing: '=?',
          coveragePercent: '=?coverage',
          cancelKeyString: '=?cancelKey',
          copyKeyString: '=?copyKey',
          selectKeyString: '=?selectKey',
          expandOnHover: '=?'
        },
        controller: 'TreeController',
        link: function(scope, element, attrs) {
          var callbacks = {
            accept: undefined,
            beforeDrag: undefined
          };

          var config = {};

          if (attrs.uiTreeDir) {
            treeConfig.dir = attrs.uiTreeDir;
          }

          angular.extend(config, treeConfig);
          if (config.treeClass) {
            element.addClass(config.treeClass);
          }

          scope.$emptyElm = angular.element($window.document.createElement('div'));
          if (config.emptyTreeClass) {
            scope.$emptyElm.addClass(config.emptyTreeClass);
          }

          // check if the dest node can accept the dragging node
          // by default, we check the 'nodrop' attribute in `ui-tree-nodes`
          // and the 'max-depth' attribute in `ui-tree` or `ui-tree-nodes`.
          // the method can be overrided
          callbacks.accept = function(sourceNodeScope, destNodesScope, destIndex) {
            if (destNodesScope.nodrop || destNodesScope.outOfDepth(sourceNodeScope)) {
              return false;
            }

            return true;
          };

          callbacks.collapse = function(node, all) {
            return true;
          };

          callbacks.expand = function(node, all) {
            return true;
          };

          callbacks.beforeDrag = function(sourceNodeScope) {
            return true;
          };

          callbacks.expandTimeoutStart = function() {
          };

          callbacks.expandTimeoutCancel = function() {
          };

          callbacks.expandTimeoutEnd = function() {
            return true;
          };

          callbacks.remove = function(node) {
            return true;
          };

          callbacks.dropped = function(event) {
          };

          callbacks.droppedInto = function(event) {
          };

          callbacks.dragStart = function(event) {
          };

          callbacks.dragMove = function(event) {
          };

          callbacks.placeholderMove = function(event) {
          };

          callbacks.dragCancel = function(event) {
          };

          callbacks.dragStop = function(event) {
          };

          callbacks.beforeDrop = function(event) {
            return true;
          };

          callbacks.lock = function(axis) {
            return true;
          };

          callbacks.unlock = function(axis) {
            return true;
          };

          callbacks.startCopy = function() {
            return true;
          };

          callbacks.endCopy = function() {
          };

          callbacks.startSelect = function() {
            return true;
          };

          callbacks.select = function(node) {
            return true;
          };

          callbacks.unselect = function(node) {
            return true;
          };

          callbacks.endSelect = function() {
          };

          scope.$callbacks = callbacks;
        }
      };
    }
  ]);
})();

(function() {
  'use strict';

  angular.module('ui.tree')
  .directive('uiTreeHandle', [ 'treeConfig',
    function(treeConfig) {
      return {
        require: '^uiTreeNode',
        restrict: 'A',
        scope: true,
        controller: 'TreeHandleController',
        link: function(scope, element, attrs, treeNodeCtrl) {
          var config = {};
          angular.extend(config, treeConfig);
          if (config.handleClass) {
            element.addClass(config.handleClass);
          }
          // connect with the tree node.
          if (scope != treeNodeCtrl.scope) {
            scope.$nodeScope = treeNodeCtrl.scope;
            treeNodeCtrl.scope.$handleScope = scope;
          }
        }
      };
    }
  ]);
})();

(function() {
  'use strict';

  angular.module('ui.tree')
    .directive('uiTreeNode', ['treeConfig', '$uiTreeHelper', '$window', '$document', '$timeout', '$filter',
      function (treeConfig, $uiTreeHelper, $window, $document, $timeout, $filter) {
        return {
          require: ['^uiTreeNodes', '^uiTree'],
          restrict: 'EA',
          controller: 'TreeNodeController',
          link: function(scope, element, attrs, controllersArr) {
            var config = {};
            angular.extend(config, treeConfig);
            if (config.nodeClass) {
              element.addClass(config.nodeClass);
            }
            scope.init(controllersArr);

            scope.collapsed = !!$uiTreeHelper.getNodeAttribute(scope, 'collapsed');
            if (attrs && attrs.collapsed) {
              scope.$watch(attrs.collapsed, function (val) {
                if ((typeof val) === "boolean") {
                  scope.collapsed = val;
                }
              });
            }
            scope.$watch('collapsed', function(val) {
              $uiTreeHelper.setNodeAttribute(scope, 'collapsed', val);
              attrs.$set('collapsed', val);
            });

            scope.selected = !!$uiTreeHelper.getNodeAttribute(scope, 'selected');
            if (attrs && attrs.selected) {
              scope.$watch(attrs.selected, function (val) {
                if ((typeof val) === "boolean") {
                  scope.selected = val;
                }
              });
            }
            scope.$watch('selected', function(val) {
              $uiTreeHelper.setNodeAttribute(scope, 'selected', val);
              attrs.$set('selected', val);
            });

            if (attrs && attrs.expandOnHover) {
              scope.$watch(attrs.expandOnHover, function (val) {
                scope.expandOnHover = val;
              });
            }

            var hasTouch = 'ontouchstart' in window;
            // todo startPos is unused
            var startPos, firstMoving, pos;
            var placeElm, hiddenPlaceElm, dragElm;
            var treeScope;
            var elements; // As a parameter for callbacks
            var dragDelaying = true;
            var dragStarted = false;
            var dragTimer;
            var body = document.body,
                html = document.documentElement,
                documentHeight,
                documentWidth;

            var toggleSelect = function(e) {
              e.preventDefault();
              e.stopPropagation();

              removeChildSelect(scope);

              if (!checkParentSelect(scope)) {
                scope.$apply(scope.toggleSelected);
              }
            };

            var checkParentSelect = function(elementScope, count) {
              elementScope = (angular.isUndefined(elementScope)) ? scope : elementScope;
              count = (angular.isUndefined(count)) ? 0 : count;

              var selected = false;
              if (elementScope !== null) {
                selected = false;
                if (!selected && angular.isDefined(elementScope.$parent)) {
                  selected = checkParentSelect(elementScope.$parent, (count + 1));
                }

                if (!selected && count > 0) {
                  selected = (angular.isDefined(elementScope.selected)) ? elementScope.selected : false;
                }
              }

              return selected;
            };

            var removeChildSelect = function(elementScope) {
              elementScope = (angular.isUndefined(elementScope)) ? scope : elementScope;

              if (elementScope.hasChild()) {
                angular.forEach(elementScope.childNodes(), function(childNodeScope) {
                  childNodeScope.$apply(childNodeScope.unselect);
                  removeChildSelect(childNodeScope);
                });
              }
            };

            var dragStart = function(e) {
              if (scope.$treeScope.dragDistance > 0) {
                var eventObj = $uiTreeHelper.eventObj(e);
                pos = $uiTreeHelper.positionStarted(eventObj, scope.$element);

                var tempMoveFunction = function(tempEvent) {
                  tempEvent.preventDefault();

                  var distance = Math.floor(Math.sqrt(Math.pow(tempEvent.pageX - pos.startX, 2) + Math.pow(tempEvent.pageY - pos.startY, 2)));

                  if (distance >= scope.$treeScope.dragDistance) {
                    angular.element($document).unbind('touchmove', tempMoveFunction);
                    angular.element($document).unbind('mousemove', tempMoveFunction);
                    angular.element($document).unbind('touchend', tempEndFunction);
                    angular.element($document).unbind('touchcancel', tempEndFunction);
                    angular.element($document).unbind('mouseup', tempEndFunction);

                    drag(e);
                  }
                };
                angular.element($document).bind('touchmove', tempMoveFunction);
                angular.element($document).bind('mousemove', tempMoveFunction);

                var tempEndFunction = function(tempEvent) {
                  tempEvent.preventDefault();

                  angular.element($document).unbind('touchmove', tempMoveFunction);
                  angular.element($document).unbind('mousemove', tempMoveFunction);
                  angular.element($document).unbind('touchend', tempEndFunction);
                  angular.element($document).unbind('touchcancel', tempEndFunction);
                  angular.element($document).unbind('mouseup', tempEndFunction);

                  dragEndEvent(tempEvent);
                };

                angular.element($document).bind('touchend', tempEndFunction);
                angular.element($document).bind('touchcancel', tempEndFunction);
                angular.element($document).bind('mouseup', tempEndFunction);
              } else {
                drag(e);
              }
            };

            var drag = function(e, restart) {
              scope.$treeScope.dragEvent = (angular.isDefined(e) && !restart) ? e : scope.$treeScope.dragEvent;

              if (angular.isDefined(scope.$treeScope.dragEvent))
              {
                var position = $uiTreeHelper.offset(scope.$element);

                if (!hasTouch && (scope.$treeScope.dragEvent.button == 2 || scope.$treeScope.dragEvent.which == 3)) {
                  // disable right click
                  return;
                }
                if ((scope.$treeScope.dragEvent.uiTreeDragging || (scope.$treeScope.dragEvent.originalEvent &&
                     scope.$treeScope.dragEvent.originalEvent.uiTreeDragging)) && !restart) { // event has already fired in other scope.
                  return;
                }
                // the element which is clicked.
                var eventElm = angular.element(scope.$treeScope.dragEvent.target);
                var eventScope = eventElm.scope();
                if (!eventScope || !eventScope.$type) {
                  return;
                }
                if (eventScope.$type != 'uiTreeNode' && eventScope.$type != 'uiTreeHandle') {
                  // Check if it is a node or a handle
                  return;
                }
                if (eventScope.$type == 'uiTreeNode' && eventScope.$handleScope) {
                  // If the node has a handle, then it should be clicked by the handle
                  return;
                }

                var eventElmTagName = eventElm.prop('tagName').toLowerCase();
                if (eventElmTagName == 'input' ||
                  eventElmTagName == 'textarea' ||
                  eventElmTagName == 'button' ||
                  eventElmTagName == 'select') { // if it's a input or button, ignore it
                  return;
                }

                // check if it or it's parents has a 'nodrag' attribute
                while (eventElm && eventElm[0] && eventElm[0] != element) {
                  if ($uiTreeHelper.nodrag(eventElm)) { // if the node mark as `nodrag`, DONOT drag it.
                    return;
                  }
                  eventElm = eventElm.parent();
                }

                if (!scope.$parentNodesScope.beforeDrag(scope, scope.$treeScope.dragEvent) && !restart) {
                  return;
                }

                scope.$treeScope.dragEvent.uiTreeDragging = true; // stop event bubbling
                if (scope.$treeScope.dragEvent.originalEvent) {
                  scope.$treeScope.dragEvent.originalEvent.uiTreeDragging = true;
                }

                scope.$treeScope.dragEvent.preventDefault();
                if ($window.getSelection) {
                  $window.getSelection().removeAllRanges();
                } else if ($window.document.selection) {
                  $window.document.selection.empty();
                }

                var eventObj = $uiTreeHelper.eventObj(scope.$treeScope.dragEvent);

                if (!restart) {
                  firstMoving = true;

                  if (angular.isUndefined(scope.$treeScope.$selecteds) || scope.$treeScope.$selecteds.length === 0) {
                    scope.$treeScope.$selecteds = [scope.$element];
                  }

                  if (!scope.selected) {
                    angular.forEach(scope.$treeScope.$selecteds, function(selectedElement) {
                      var selectedElementScope = angular.element(selectedElement).scope();

                      selectedElementScope.$apply(function() {
                        selectedElementScope.selected = false;
                      });
                    });

                    scope.$treeScope.$selecteds = [scope.$element];
                  }

                  if (scope.$treeScope.$selecteds.length > 1) {
                    scope.$treeScope.$selecteds = $filter('orderBy')(scope.$treeScope.$selecteds, function(selectedElement) {
                      return $uiTreeHelper.offset(angular.element(selectedElement)).top;
                    }, false);
                  }

                  if (angular.isDefined(scope.$treeScope.$selecteds) && scope.$treeScope.$selecteds.length > 0) {
                    var orderedElements = [];

                    placeElm = angular.element($window.document.createElement('div')).addClass(config.placeHoldersWrapperClass);
                    hiddenPlaceElm = angular.element($window.document.createElement('div'));
                    dragElm = angular.element($window.document.createElement('div')).addClass(config.dragWrapperClass);

                    pos = $uiTreeHelper.positionStarted(eventObj, angular.element(scope.$treeScope.$selecteds[0]));

                    var firstElement = angular.element(scope.$treeScope.$selecteds[0]);
                    var firstElementOffset = angular.copy($uiTreeHelper.offset(firstElement));

                    angular.forEach(scope.$treeScope.$selecteds, function(selected, index) {
                      var selectedElement = angular.element(selected);
                      var selectedElementScope = selectedElement.scope();

                      selectedElementScope.$dragInfo = $uiTreeHelper.dragInfo(selectedElementScope);

                      var selectedElementHeight = $uiTreeHelper.height(selectedElement);
                      var selectedElementWidth = $uiTreeHelper.width(selectedElement);

                      var selectedElementPlace;

                      var tagName = selectedElement.prop('tagName');
                      if (tagName.toLowerCase() === 'tr') {
                        selectedElementPlace = angular.element($window.document.createElement(tagName));
                        var tdElm = angular.element($window.document.createElement('td'))
                                           .addClass(config.placeHolderClass);
                        selectedElementPlace.append(tdElm);
                      } else {
                        selectedElementPlace = angular.element($window.document.createElement(tagName))
                                                      .addClass(config.placeHolderClass);
                      }
                      selectedElementPlace.css('height', selectedElementHeight + 'px');
                      placeElm.append(selectedElementPlace);

                      var selectedElementHiddenPlace = angular.element($window.document.createElement(tagName));
                      if (config.hiddenClass) {
                        selectedElementHiddenPlace.addClass(config.hiddenClass);
                      }
                      hiddenPlaceElm.append(selectedElementHiddenPlace);

                      var selectedElementDrag = angular.element($window.document.createElement(selectedElementScope.$parentNodesScope.$element.prop('tagName')))
                                                       .addClass(selectedElementScope.$parentNodesScope.$element.attr('class'));

                      selectedElementDrag.css('width', selectedElementWidth + 'px');

                      var clone = selectedElement.clone();
                      selectedElementDrag.append(clone);
                      if (!scope.$treeScope.copy) {
                        selectedElement.addClass(config.hiddenClass);
                      }

                      dragElm.append(selectedElementDrag);
                      // Prevents cursor to change rapidly in Opera 12.16 and IE when dragging an element
                      var hStyle = (scope.$element[0].querySelector('.angular-ui-tree-handle') || scope.$element[0]).currentStyle;
                      if (hStyle) {
                        document.body.setAttribute('ui-tree-cursor', $document.find('body').css('cursor') || '');
                        $document.find('body').css({ cursor: hStyle.cursor + '!important' });
                      }

                      selectedElementScope.$apply(function() {
                        selectedElementScope.selected = false;
                        selectedElementScope.original = true;
                      });
                    });

                    dragElm.css('z-index', 9999).addClass(config.dragClass);

                    firstElement.parent()[0].insertBefore(placeElm[0], firstElement[0]);
                    firstElement.parent()[0].insertBefore(hiddenPlaceElm[0], firstElement[0]);

                    $document.find('body').append(dragElm);
                    dragElm.css({
                      left: firstElementOffset.left + 'px',
                      top: firstElementOffset.top + 'px'
                    });
                    elements = {
                      placeholder: placeElm,
                      dragging: dragElm
                    };

                    angular.element($document).bind('touchend', dragEndEvent);
                    angular.element($document).bind('touchcancel', dragEndEvent);
                    angular.element($document).bind('touchmove', dragMoveEvent);
                    angular.element($document).bind('mouseup', dragEndEvent);
                    angular.element($document).bind('mousemove', dragMoveEvent);
                    angular.element($document).bind('mouseleave', dragCancelEvent);
                  }

                  documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
                  documentWidth = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
                } else {
                  angular.forEach(scope.$treeScope.$selecteds, function(selectedElement) {
                    selectedElement = angular.element(selectedElement);

                    if (scope.$treeScope.copy) {
                      selectedElement.removeClass(config.hiddenClass);
                    } else {
                      selectedElement.addClass(config.hiddenClass);
                    }
                  });
                }
              }
            };

            var restartDrag = function(e) {
              e.preventDefault();

              if ( scope.$treeScope.$selecteds.length > 0) {
                drag(undefined, true);
              }
            };

            var dragMove = function(e) {
              if (!dragStarted) {
                if (!dragDelaying) {
                  dragStarted = true;

                  angular.forEach(scope.$treeScope.$selecteds, function(selectedElement) {
                    selectedElement = angular.element(selectedElement);
                    var selectedElementScope = selectedElement.scope();

                    selectedElementScope.$apply(function() {
                      scope.$treeScope.$callbacks.dragStart(selectedElementScope.$dragInfo.eventArgs(elements, pos));
                    });
                  });
                }
                return;
              }

              var eventObj = $uiTreeHelper.eventObj(e);
              var elmPos = {}, elmOrigPos = {}, hdlPos = {}, boundToPos = {};
              var prev, hdlElm, hdlOffset;

              // Prevent default action and text selection
              e.preventDefault();
              if ($window.getSelection) {
                $window.getSelection().removeAllRanges();
              } else if ($window.document.selection) {
                $window.document.selection.empty();
              }

              if (dragElm) {
                elmOrigPos = $uiTreeHelper.offset(dragElm);

                // Retrieve object position and dimensions
                elmPos.left = eventObj.pageX - pos.offsetX;
                elmPos.width = elmOrigPos.width;
                elmPos.right = elmPos.left + elmPos.width;
                elmPos.top = eventObj.pageY - pos.offsetY;
                elmPos.height = elmOrigPos.height;
                elmPos.bottom = elmPos.top + elmPos.height;

                // Retrieve handle position and dimension
                hdlElm = scope.$element.find(config.handleClass);
                var hdlElmOffset;
                if (angular.isDefined(hdlElm) && hdlElm.length > 0) {
                  hdlElmOffset = $uiTreeHelper.offset(hdlElm);
                  hdlPos.left = hdlElmOffset.left;
                  hdlPos.width = hdlElmOffset.width;
                  hdlPos.top = hdlElmOffset.top;
                  hdlPos.height = hdlElmOffset.height;
                  hdlPos.offset = hdlElm.position().top;
                } else {
                  hdlPos.left = elmPos.left;
                  hdlPos.width = elmPos.width;
                  hdlPos.top = elmPos.top;
                }
                hdlPos.right = hdlPos.left + hdlPos.width;
                hdlPos.bottom = hdlPos.top + hdlPos.height;

                // If we are bounded to an element, and that element exists (and is offset is defined)
                if (angular.isDefined(scope.$treeScope.boundTo) && scope.$treeScope.boundTo.length > 0) {
                  var boundToOffset = $uiTreeHelper.offset(scope.$treeScope.boundTo);
                  // Then get it's position and dimension
                  boundToPos.left = boundToOffset.left;
                  boundToPos.width = boundToOffset.width;
                  boundToPos.top = boundToOffset.top;
                  boundToPos.height = boundToOffset.height;
                } else { // Else, bound to document
                  boundToPos.left = 0;
                  boundToPos.width = documentWidth;
                  boundToPos.top = 0;
                  boundToPos.height = documentHeight;
                }
                boundToPos.right = boundToPos.left + boundToPos.width;
                boundToPos.bottom = boundToPos.top + boundToPos.height;

                //dragElm can't leave the screen or the bounding parent on the left
                if (elmPos.left < boundToPos.left) {
                  elmPos.left = boundToPos.left;
                }
                //dragElm can't leave the screen or the bounding parent on the top
                if (elmPos.top < boundToPos.top) {
                  elmPos.top = boundToPos.top;
                }
                //dragElm can't leave the screen or the bounding parent on the right
                if (elmPos.left > boundToPos.right){
                  elmPos.left = boundToPos.right;
                }
                //dragElm can't leave the screen or the bounding parent on the bottom
                if (elmPos.top > boundToPos.bottom){
                  elmPos.top = boundToPos.bottom;
                }
                if (scope.$treeScope.lockY) {
                  elmPos.top = elmOrigPos.top;
                }
                if (scope.$treeScope.lockX) {
                  elmPos.left = elmOrigPos.left;
                }

                dragElm.css({
                  'left': elmPos.left + 'px',
                  'top': elmPos.top + 'px'
                });

                var topScroll = window.pageYOffset || $window.document.documentElement.scrollTop;
                var bottomScroll = topScroll + (window.innerHeight || $window.document.clientHeight || $window.document.clientHeight);
                // to scroll down if cursor y-position is greater than the bottom position the vertical scroll
                if (bottomScroll < eventObj.pageY && bottomScroll <= documentHeight) {
                  window.scrollBy(0, 10);
                }
                // to scroll top if cursor y-position is less than the top position the vertical scroll
                if (topScroll > eventObj.pageY) {
                  window.scrollBy(0, -10);
                }

                $uiTreeHelper.positionMoved(e, pos, firstMoving);
                if (firstMoving) {
                  firstMoving = false;
                  return;
                }

                // Check if we are above another tree
                // var targetX = eventObj.pageX - $window.document.body.scrollLeft;
                var targetX = elmPos.left + (elmPos.width / 2);
                // var targetY = eventObj.pageY - (window.pageYOffset || $window.document.documentElement.scrollTop);
                var targetY = elmPos.top + (elmPos.height * scope.$treeScope.coverage);
                // Select the drag target. Because IE does not support CSS 'pointer-events: none', it will always
                // pick the drag element itself as the target. To prevent this, we hide the drag element while
                // selecting the target.
                var displayElm;
                if (angular.isFunction(dragElm.hide)) {
                  dragElm.hide();
                } else {
                  displayElm = dragElm[0].style.display;
                  dragElm[0].style.display = "none";
                }

                var placeDisplayElm;
                if (angular.isFunction(placeElm.hide)) {
                  placeElm.hide();
                } else {
                  placeDisplayElm = placeElm[0].style.display;
                  placeElm[0].style.display = "none";
                }

                // when using elementFromPoint() inside an iframe, you have to call
                // elementFromPoint() twice to make sure IE8 returns the correct value
                $window.document.elementFromPoint(targetX, targetY);
                var closestElement = angular.element($window.document.elementFromPoint(targetX, targetY));

                if (angular.isFunction(placeElm.show)) {
                  placeElm.show();
                } else {
                  placeElm[0].style.display = placeDisplayElm;
                }

                if (angular.isFunction(dragElm.show)) {
                  dragElm.show();
                } else {
                  dragElm[0].style.display = displayElm;
                }

                var targetBefore, targetNode, targetElm, isEmpty, isTree, targetElmOffset;
                var closestScope = closestElement.scope();
                var selectedScope;

                if (angular.isDefined(closestScope) && angular.isDefined(closestScope.$nodeScope)) {
                  closestScope = closestScope.$nodeScope;
                } else if (angular.isDefined(closestScope) && angular.isDefined(closestScope.$nodesScope)) {
                  closestScope = closestScope.$nodesScope;
                }

                if (angular.isDefined(closestScope) && angular.isDefined(closestScope.$treeScope) && angular.isDefined(closestScope.$treeScope.$treeElement)
                    && angular.isDefined(closestScope.$treeScope.$treeElement.children())) {
                  selectedScope = closestScope;
                } else {
                  selectedScope = scope;
                }
                var nodes = selectedScope.$treeScope.$treeElement.children();

                var treeChange = (angular.isUndefined(scope.previousTreeId) || scope.previousTreeId.length === 0
                                  || angular.isUndefined(selectedScope.$treeScope) || scope.previousTreeId !== selectedScope.$treeScope.$id);
                scope.previousTreeId = (angular.isDefined(selectedScope.$treeScope)) ? selectedScope.$treeScope.$id : undefined;

                // Compute the intersected element of the tree we are hovering
                var direction = (treeChange) ? 1 : (pos.dirAx) ? pos.dirX : pos.dirY;

                var intersectWith = $uiTreeHelper.findIntersect(elmPos, nodes, scope.$treeScope.collideWith, direction, scope.$parentNodesScope.horizontal);
                if (angular.isDefined(intersectWith)) {
                  targetElm = angular.element(intersectWith);
                }

                if (pos.moving || treeChange) {
                  // Move horizontally
                  var dragInfo = angular.element(scope.$treeScope.$selecteds[0]).scope().$dragInfo;
                  var previous = dragInfo.prev();
                  var parent = dragInfo.parentNode();

                  // If we have a element right above us and it's not collapsed and it accept the current element
                  if (angular.isDefined(previous) && !previous.collapsed && angular.isDefined(previous.$childNodesScope)) {
                    var previousElmOffset = $uiTreeHelper.offset(previous.$element);
                    // And if the horizontal position of the mouse is greater than the one of the parent
                    if (elmPos.left >= (previousElmOffset.left + scope.$treeScope.spacing - scope.$treeScope.spacingThreshold)) {
                      // Then move the element as a children of the previous element
                      if (previous.accept(scope, previous.childNodesCount())) {
                        previous.$childNodesScope.$element.append(placeElm);
                      }

                      angular.forEach(scope.$treeScope.$selecteds, function(selectedElement, index) {
                        var selectedElementScope = angular.element(selectedElement).scope();

                        selectedElementScope.moved = selectedElementScope.$dragInfo.moveTo(previous.$childNodesScope, previous.childNodes(), previous.childNodesCount() + index);
                      });

                      scope.asChild = true;
                    }
                  }

                  parent = dragInfo.parentNode();

                  // If we have a parent
                  if (angular.isDefined(parent)) {
                    var parentElmOffset = $uiTreeHelper.offset(parent.$element);
                    // And that the horizontal position of the mouse is around the position of the parent
                    if (elmPos.left <= (parentElmOffset.left + scope.$treeScope.spacingThreshold)) {
                      // And that there is no element after the current one
                      if (!dragInfo.next()) {
                        // Then move the element as the parent sibling
                        if (parent.accept(scope, (parent.index() + 1))) {
                          parent.$element.after(placeElm);
                        }

                        angular.forEach(scope.$treeScope.$selecteds, function(selectedElement, index) {
                          var selectedElementScope = angular.element(selectedElement).scope();

                          selectedElementScope.moved = selectedElementScope.$dragInfo.moveTo(parent.$parentNodesScope, parent.siblings(), parent.index() + 1 + index);
                        });

                        scope.asChild = false;
                      }
                    }
                  }

                  if (angular.isUndefined(targetElm)) {
                    return;
                  }

                  targetNode = targetElm.scope();
                  if (!targetNode) {
                    return;
                  }

                  // check it's new position
                  isEmpty = false;
                  isTree = false;

                  if (targetNode.$type == 'uiTree' && targetNode.dragEnabled) {
                    isEmpty = targetNode.isEmpty(); // Check if it's empty tree
                  }
                  if (targetNode.$type == 'uiTreeHandle') {
                    targetNode = targetNode.$nodeScope;
                  }
                  if (targetNode.$type != 'uiTreeNode' && !isEmpty) { // Check if it is a uiTreeNode or it's an empty tree
                    if (targetNode.$type == 'uiTree') {
                      isTree = true;
                    } else {
                      return;
                    }
                  }

                  targetElm = targetNode.$element; // Get the element of ui-tree-node
                  targetElmOffset = $uiTreeHelper.offset(targetElm);

                  // if placeholder move from empty tree, reset it.
                  if (treeScope && placeElm.parent()[0] != treeScope.$element[0]) {
                    treeScope.resetEmptyElement();
                    treeScope = undefined;
                  }

                  if (isEmpty) { // it's an empty tree
                    treeScope = targetNode;

                    if (targetNode.accept(scope, 0)) {
                      targetNode.place(placeElm);
                    }

                    angular.forEach(scope.$treeScope.$selecteds, function(selectedElement, index) {
                      var selectedElementScope = angular.element(selectedElement).scope();

                      selectedElementScope.moved = selectedElementScope.$dragInfo.moveTo(targetNode.$parentNodesScope, targetNode.$parentNodesScope.childNodes(), index);
                    });
                  } else if (isTree) { // it's in the bottom padded portion of the tree itself
                    if (targetNode.accept(scope, (targetNode.$parentNodesScope.childNodes().length + 1))) {
                      targetNode.place(placeElm);
                    }

                    angular.forEach(scope.$treeScope.$selecteds, function(selectedElement, index) {
                      var selectedElementScope = angular.element(selectedElement).scope();

                      selectedElementScope.moved = selectedElementScope.$dragInfo.moveTo(targetNode.$parentNodesScope, targetNode.$parentNodesScope.childNodes(),
                                                                                         (targetNode.$parentNodesScope.childNodes().length + 1 + index));
                    });
                  } else if (targetNode.dragEnabled()) { // drag enabled
                    // If another node was witing for expand, cancel it
                    angular.forEach(scope.$treeScope.$selecteds, function(selectedElement) {
                      var selectedElementScope = angular.element(selectedElement).scope();

                      if (angular.isDefined(selectedElementScope.expandTimeoutOn) && selectedElementScope.expandTimeoutOn !== targetNode.id) {
                        $timeout.cancel(selectedElementScope.expandTimeout);
                        delete selectedElementScope.expandTimeout;
                        delete selectedElementScope.expandTimeoutOn;

                        targetNode.$apply(function() {
                          scope.$treeScope.$callbacks.expandTimeoutCancel();
                        });
                      }
                    });

                    // If the node is collapsed, expand it accordingly to the configuration
                    if (targetNode.collapsed) {
                      var expandOnHover = targetNode.expandOnHover || targetNode.$parentNodesScope.expandOnHover || targetNode.$treeScope.expandOnHover;

                      if (expandOnHover === true || (angular.isNumber(expandOnHover) && expandOnHover === 0)) {
                        targetNode.collapsed = false;
                      } else if (expandOnHover !== false && angular.isNumber(expandOnHover) && expandOnHover > 0) {
                        angular.forEach(scope.$treeScope.$selecteds, function(selectedElement) {
                          var selectedElementScope = angular.element(selectedElement).scope();

                          if (angular.isUndefined(selectedElementScope.expandTimeoutOn)) {
                            selectedElementScope.expandTimeoutOn = targetNode.$id;
                            targetNode.$apply(function() {
                              targetNode.$treeScope.$callbacks.expandTimeoutStart();
                            });
                            selectedElementScope.expandTimeout = $timeout(function()
                            {
                              targetNode.$apply(function() {
                                targetNode.collapsed = !targetNode.$treeScope.$callbacks.expandTimeoutEnd();
                              });
                            }, expandOnHover);
                          }
                        });
                      }
                    }

                    var childsHeight = (targetNode.hasChild()) ? $uiTreeHelper.offset(targetNode.$childNodesScope.$element).height : 0;

                    if ((!scope.$parentNodesScope.horizontal && pos.dirY > 0) || (scope.$parentNodesScope.horizontal && pos.dirX > 0) || treeChange) {
                      var elmVertDown = (scope.$treeScope.collideWith === 'top') ? (scope.$parentNodesScope.horizontal) ? elmPos.right : elmPos.top
                                                                                : (scope.$parentNodesScope.horizontal) ? elmPos.left : elmPos.bottom;
                      var downLimit = (scope.$parentNodesScope.horizontal) ? ((targetElmOffset.left - elmPos.left) + (targetElmOffset.width * scope.$treeScope.coverage))
                                                        : (targetElmOffset.top + ((targetElmOffset.height - childsHeight) * scope.$treeScope.coverage));

                      // If the element as moved behond the trigger
                      if (elmVertDown >= downLimit) {
                        if ((targetNode.collapsed || !targetNode.hasChild()) && !scope.asChild) {
                          if (targetNode.accept(scope, (targetNode.index() + 1))) {
                            targetElm.after(placeElm);
                          }

                          angular.forEach(scope.$treeScope.$selecteds, function(selectedElement, index) {
                            var selectedElementScope = angular.element(selectedElement).scope();

                            selectedElementScope.moved = selectedElementScope.$dragInfo.moveTo(targetNode.$parentNodesScope, targetNode.siblings(), (targetNode.index() + 1 + index));
                          });
                        } else {
                          var firstChild = (targetNode.childNodesCount() > 0) ? targetNode.childNodes()[0] : undefined;
                          var firstChildOffset = (angular.isDefined(firstChild)) ? $uiTreeHelper.offset(firstChild.$element) : undefined;

                          var firstChildChildsHeight = (angular.isDefined(firstChild) && firstChild.hasChild()) ? $uiTreeHelper.offset(firstChild.$childNodesScope.$element).height : 0;

                          if (angular.isUndefined(firstChild) || (angular.isDefined(firstChild) &&
                              elmVertDown < (firstChildOffset.top + ((firstChildOffset.height - firstChildChildsHeight) * scope.$treeScope.coverage))))
                          {
                            if (targetNode.accept(scope, 0)) {
                              targetNode.$childNodesScope.$element.prepend(placeElm);
                            }

                            angular.forEach(scope.$treeScope.$selecteds, function(selectedElement, index) {
                              var selectedElementScope = angular.element(selectedElement).scope();

                              var target = targetNode;
                              if (!target.$childNodesScope){
                                while (typeof(target.$childNodesScope) === "undefined"){
                                  target = target.$parent;
                                }
                              }

                              selectedElementScope.moved = selectedElementScope.$dragInfo.moveTo(target.$childNodesScope, target.childNodes(), index);
                            });
                          }
                        }
                      }
                    }

                    if ((((!scope.$parentNodesScope.horizontal && pos.dirY < 0) || (scope.$parentNodesScope.horizontal && pos.dirX < 0))
                          && ((!scope.$parentNodesScope.horizontal && pos.distAxY > config.dragUpThreshold) || (!scope.$parentNodesScope.horizontal && pos.distAxX > 8))
                          || treeChange)) {
                      var elmVertUp = (scope.$treeScope.collideWith === 'top') ? (scope.$parentNodesScope.horizontal) ? elmPos.left : elmPos.bottom
                                                                               : (scope.$parentNodesScope.horizontal) ? elmPos.right : elmPos.top;
                      var upLimit = (scope.$parentNodesScope.horizontal) ? ((targetElmOffset.left - elmPos.left) + targetElmOffset.width - (targetElmOffset.width * scope.$treeScope.coverage))
                                                      : (targetElmOffset.top + targetElmOffset.height - childsHeight - ((targetElmOffset.height - childsHeight) * scope.$treeScope.coverage));

                      if (elmVertUp <= upLimit) {
                        if (targetNode.accept(scope, targetNode.index())) {
                          targetElm[0].parentNode.insertBefore(placeElm[0], targetElm[0]);
                        }

                        angular.forEach(scope.$treeScope.$selecteds, function(selectedElement, index) {
                          var selectedElementScope = angular.element(selectedElement).scope();

                          selectedElementScope.moved = selectedElementScope.$dragInfo.moveTo(targetNode.$parentNodesScope, targetNode.siblings(), (targetNode.index() + index));
                        });
                      }
                    }

                    angular.forEach(scope.$treeScope.$selecteds, function(selectedElement, index) {
                      var selectedElementScope = angular.element(selectedElement).scope();

                      if (selectedElementScope.moved) {
                        var dragInfoEventsArgs = selectedElementScope.$dragInfo.eventArgs(elements, pos);

                        if (angular.isDefined(dragInfoEventsArgs) && angular.isDefined(dragInfoEventsArgs.dest))
                        {
                          if (angular.isUndefined(selectedElementScope.dragInfoEventsArgs) || angular.isUndefined(selectedElementScope.dragInfoEventsArgs.dest)
                              || !angular.equals(selectedElementScope.dragInfoEventsArgs.dest, dragInfoEventsArgs.dest))
                          {
                            selectedElementScope.$apply(function() {
                              scope.$treeScope.$callbacks.placeholderMove(dragInfoEventsArgs);
                            });

                            selectedElementScope.dragInfoEventsArgs = dragInfoEventsArgs;
                          }
                        }
                      }
                    });
                  }
                }
              }

              angular.forEach(scope.$treeScope.$selecteds, function(selectedElement, index) {
                var selectedElementScope = angular.element(selectedElement).scope();

                selectedElementScope.$apply(function() {
                  scope.$treeScope.$callbacks.dragMove(selectedElementScope.$dragInfo.eventArgs(elements, pos));
                });
              });
            };

            var dragEnd = function(e, cancel) {
              if (angular.isDefined(e)) {
                e.preventDefault();
              }

              $timeout.cancel(scope.expandTimeout);

              if (angular.isDefined(dragElm) && angular.isDefined(e)) {
                var selectedsCount = angular.copy(scope.$treeScope.$selecteds.length);

                angular.forEach(scope.$treeScope.$selecteds, function(selectedElement, index) {
                  var selectedElementScope = angular.element(selectedElement).scope();

                  if (angular.isDefined(selectedElementScope)) {
                    var dragInfoEventArgs = selectedElementScope.$dragInfo.eventArgs(elements, pos);

                    selectedElementScope.$apply(function() {
                      selectedElementScope.$$apply = scope.$treeScope.$callbacks.beforeDrop(dragInfoEventArgs);
                    });

                    if (selectedElementScope.$$apply && !cancel) {
                      selectedElementScope.$dragInfo.apply(scope.$treeScope.copy);

                      scope.$treeScope.$apply(function() {
                        scope.$treeScope.$callbacks.dropped(dragInfoEventArgs);
                      });
                      dragInfoEventArgs.dest.nodesScope.$apply(function() {
                        scope.$treeScope.$callbacks.droppedInto(dragInfoEventArgs);
                      });
                    } else {
                      selectedElementScope.$element.removeClass(config.hiddenClass);

                      selectedElementScope.$apply(function() {
                        scope.$treeScope.$callbacks.dragCancel(dragInfoEventArgs);
                      });
                    }

                    selectedElementScope.$apply(function() {
                      scope.$treeScope.$callbacks.dragStop(dragInfoEventArgs);
                    });

                    selectedElementScope.$dragInfo = undefined;

                    selectedElementScope.$apply(function() {
                      delete selectedElementScope.original;
                    });
                  }
                });

                if (angular.isDefined(placeElm)) {
                  placeElm.remove();
                  placeElm = undefined;
                }
                if (angular.isDefined(hiddenPlaceElm)) {
                  hiddenPlaceElm.remove();
                  hiddenPlaceElm = undefined;
                }
                if (angular.isDefined(dragElm)) {
                  dragElm.remove();
                  dragElm = undefined;
                }

                scope.$treeScope.$selecteds = [];
              }

              // Restore cursor in Opera 12.16 and IE
              var oldCur = document.body.getAttribute('ui-tree-cursor');
              if (oldCur !== null) {
                $document.find('body').css({ cursor: oldCur });
                document.body.removeAttribute('ui-tree-cursor');
              }

              angular.element($document).unbind('touchend', dragEndEvent); // Mobile
              angular.element($document).unbind('touchcancel', dragEndEvent); // Mobile
              angular.element($document).unbind('touchmove', dragMoveEvent); // Mobile
              angular.element($document).unbind('mouseup', dragEndEvent);
              angular.element($document).unbind('mousemove', dragMoveEvent);
              angular.element($document).unbind('mouseleave', dragCancelEvent);
            };

            var dragStartEvent = function(e) {
              if (scope.dragEnabled()) {
                dragStart(e);
              }
            };

            var dragMoveEvent = function(e) {
              dragMove(e);
            };

            var dragEndEvent = function(e) {
              angular.forEach(scope.$treeScope.$selecteds, function(selected) {
                var selectedElement = angular.element(selected);

                if (angular.isDefined(selectedElement)) {
                  var selectedElementScope = selectedElement.scope();

                  if (angular.isDefined(selectedElementScope)) {
                    selectedElementScope.$$apply = true;
                  }
                }
              });

              dragEnd(e);
            };

            var dragCancelEvent = function(e) {
              angular.forEach(scope.$treeScope.$selecteds, function(selected) {
                var selectedElement = angular.element(selected);

                if (angular.isDefined(selectedElement)) {
                  var selectedElementScope = selectedElement.scope();

                  if (angular.isDefined(selectedElementScope)) {
                    selectedElementScope.$$apply = false;
                  }
                }
              });

              dragEnd(e, true);
            };

            var bindDrag = function() {
              element.bind('touchstart mousedown', function (e) {
                if (!scope.$treeScope.multiSelect) {
                  dragDelaying = true;
                  dragStarted = false;

                  dragTimer = $timeout(function() {
                    dragStartEvent(e);
                    dragDelaying = false;
                  }, scope.$treeScope.dragDelay);
                } else {
                  toggleSelect(e);
                }
              });
              element.bind('touchend touchcancel mouseup', function() {
                $timeout.cancel(dragTimer);
              });
            };

            var unbind = function() {
              dragEnd();
              angular.element($document).unbind('keydown').unbind('keyup');
            };

            bindDrag();

            angular.element($document).bind("keydown", function(e) {
              if (e.keyCode === scope.$treeScope.cancelKey) {
                dragCancelEvent(e);
              }

              if (angular.isDefined(scope.$treeScope.lockXKey)) {
                if (e.keyCode === scope.$treeScope.lockXKey) {
                  scope.$treeScope.$apply(function() {
                    scope.$treeScope.lockX = scope.$treeScope.$callbacks.lock('X');
                  });
                }
              }
              if (angular.isDefined(scope.$treeScope.lockYKey)) {
                if (e.keyCode === scope.$treeScope.lockYKey) {
                  scope.$treeScope.$apply(function() {
                    scope.$treeScope.lockY = scope.$treeScope.$callbacks.lock('Y');
                  });
                }
              }

              if (e.keyCode === scope.$treeScope.copyKey) {
                if (!scope.$treeScope.copy) {
                  scope.$treeScope.$apply(function() {
                    scope.$treeScope.copy = scope.$treeScope.$callbacks.startCopy();
                  });
                  restartDrag(e);
                }
              } else if (e.keyCode === scope.$treeScope.multiSelectKey) {
                if (!scope.$treeScope.multiSelect) {
                  scope.$treeScope.$apply(function() {
                    scope.$treeScope.multiSelect = scope.$treeScope.$callbacks.startSelect();
                  });
                }
              }
            });

            angular.element($document).bind("keyup", function(e) {
              if (angular.isDefined(scope.$treeScope.lockXKey)) {
                if (e.keyCode === scope.$treeScope.lockXKey) {
                  scope.$treeScope.$apply(function() {
                    scope.$treeScope.lockX = !scope.$treeScope.$callbacks.unlock('X');
                  });
                }
              }
              if (angular.isDefined(scope.$treeScope.lockYKey)) {
                if (e.keyCode === scope.$treeScope.lockYKey) {
                  scope.$treeScope.$apply(function() {
                    scope.$treeScope.lockY = !scope.$treeScope.$callbacks.unlock('Y');
                  });
                }
              }

              if (e.keyCode === scope.$treeScope.copyKey) {
                if (scope.$treeScope.copy) {
                  scope.$treeScope.$apply(function() {
                    scope.$treeScope.copy = !scope.$treeScope.$callbacks.endCopy();
                  });
                  restartDrag(e);
                }
              } else if (e.keyCode === scope.$treeScope.multiSelectKey) {
                if (scope.$treeScope.multiSelect) {
                  scope.$treeScope.$apply(function() {
                    scope.$treeScope.multiSelect = !scope.$treeScope.$callbacks.endSelect();
                  });
                }
              }
            });

            scope.$on("$destroy", unbind);
          }
        };
      }
    ]);
})();

(function() {
  'use strict';

  angular.module('ui.tree')
  .directive('uiTreeNodes', [ 'treeConfig',
    function(treeConfig) {
      return {
        require: ['ngModel', '?^uiTreeNode', '^uiTree'],
        restrict: 'EA',
        scope: {
          maxDepth: '=?',
          expandOnHover: '=?',
          noDrop: '=?',
          horizontal: '=?'
        },
        controller: 'TreeNodesController',
        link: function(scope, element, attrs, controllersArr) {
          var config = {};
          angular.extend(config, treeConfig);
          if (config.nodesClass) {
            element.addClass(config.nodesClass);
          }

          var ngModel = controllersArr[0];
          var treeNodeCtrl = controllersArr[1];
          var treeCtrl = controllersArr[2];

          if (treeNodeCtrl) {
            treeNodeCtrl.scope.$childNodesScope = scope;
            scope.$nodeScope = treeNodeCtrl.scope;
          } else { // find the root nodes if there is no parent node and have a parent ui-tree
            treeCtrl.scope.$nodesScope = scope;
          }
          scope.$treeScope = treeCtrl.scope;

          if (ngModel) {
            ngModel.$render = function() {
              if (!ngModel.$modelValue || !angular.isArray(ngModel.$modelValue)) {
                scope.$modelValue = [];
              }
              scope.$modelValue = ngModel.$modelValue;
            };
          }
        }
      };
    }
  ]);
})();

(function() {
  'use strict';

  angular.module('ui.tree')

   /**
    * @ngdoc service
    * @name ui.tree.service:$helper
    * @requires ng.$document
    * @requires ng.$window
    *
    * @description
    * angular-ui-tree.
    */
    .factory('$uiTreeHelper', ['$document', '$window', 'treeConfig',
      function ($document, $window, treeConfig) {
        return {

          /**
           * A hashtable used to storage data of nodes
           * @type {Object}
           */
          nodesData: {
          },

          setNodeAttribute: function(scope, attrName, val) {
            if (!scope.$modelValue) {
              return undefined;
            }
            var data = this.nodesData[scope.$modelValue.$$hashKey];
            if (!data) {
              data = {};
              this.nodesData[scope.$modelValue.$$hashKey] = data;
            }
            data[attrName] = val;
          },

          getNodeAttribute: function(scope, attrName) {
            if (!scope.$modelValue) {
              return undefined;
            }
            var data = this.nodesData[scope.$modelValue.$$hashKey];
            if (data) {
              return data[attrName];
            }
            return undefined;
          },

          /**
           * @ngdoc method
           * @methodOf ui.tree.service:$nodrag
           * @param  {Object} targetElm angular element
           * @return {Bool} check if the node can be dragged.
           */
          nodrag: function (targetElm) {
            return (typeof targetElm.attr('nodrag')) != "undefined";
          },

          /**
           * get the event object for touchs
           * @param  {[type]} e [description]
           * @return {[type]}   [description]
           */
          eventObj: function(e) {
            var obj = e;
            if (e.targetTouches !== undefined) {
              obj = e.targetTouches.item(0);
            } else if (e.originalEvent !== undefined && e.originalEvent.targetTouches !== undefined) {
              obj = e.originalEvent.targetTouches.item(0);
            }
            return obj;
          },

          dragInfo: function(node) {
            if (angular.isDefined(node)) {
              return {
                source: node,
                sourceInfo: {
                  nodeScope: node,
                  index: (angular.isFunction(node.index)) ? node.index() : 0,
                  nodesScope: node.$parentNodesScope
                },
                index: (angular.isFunction(node.index)) ? node.index() : 0,
                siblings: (angular.isFunction(node.siblings)) ? node.siblings().slice(0) : [],
                parent: node.$parentNodesScope,

                moveTo: function(parent, siblings, index) { // Move the node to a new position
                  if (parent.accept(node, index) === true)
                  {
                    this.parent = parent;
                    this.siblings = siblings.slice(0);
                    var i = this.siblings.indexOf(this.source); // If source node is in the target nodes

                    if (i > -1) {
                      this.siblings.splice(i, 1);
                      if (this.source.index() < index) {
                        index--;
                      }
                    }

                    this.siblings.splice(index, 0, this.source);
                    this.index = index;

                    return true;
                  }

                  return false;
                },

                parentNode: function() {
                  return this.parent.$nodeScope;
                },

                prev: function() {
                  if (this.index > 0) {
                    return this.siblings[this.index - 1];
                  }
                  return undefined;
                },

                next: function() {
                  if (this.index < this.siblings.length - 1) {
                    return this.siblings[this.index + 1];
                  }
                  return undefined;
                },

                isDirty: function() {
                  return this.source.$parentNodesScope != this.parent ||
                          this.source.index() != this.index;
                },

                eventArgs: function(elements, pos) {
                  return {
                    source: this.sourceInfo,
                    dest: {
                      index: this.index,
                      nodesScope: this.parent
                    },
                    elements: elements,
                    pos: pos
                  };
                },

                apply: function(copy) {
                  var nodeData = this.source.$modelValue;
                  if (!copy) {
                    this.source.remove();
                  }

                  if (angular.isDefined(this.parent))
                  {
                    var data = (copy) ? angular.copy(nodeData) : nodeData;
                    var index = this.index;
                    if (copy && this.sourceInfo.index < this.index && this.sourceInfo.nodesScope === this.parent) {
                      index = this.index + 1;
                    }
                    this.parent.insertNode(index, data);
                  }
                }
              };
            } else {
              return undefined;
            }
          },

          /**
          * @ngdoc method
          * @name hippo.theme#height
          * @methodOf ui.tree.service:$helper
          *
          * @description
          * Get the height of an element.
          *
          * @param {Object} element Angular element.
          * @returns {String} Height
          */
          height: function (element) {
            return element.prop('scrollHeight');
          },

          /**
          * @ngdoc method
          * @name hippo.theme#width
          * @methodOf ui.tree.service:$helper
          *
          * @description
          * Get the width of an element.
          *
          * @param {Object} element Angular element.
          * @returns {String} Width
          */
          width: function (element) {
            return element.prop('scrollWidth');
          },

          /**
          * @ngdoc method
          * @name hippo.theme#offset
          * @methodOf ui.nestedSortable.service:$helper
          *
          * @description
          * Get the offset values of an element.
          *
          * @param {Object} element Angular element.
          * @returns {Object} Object with properties width, height, top and left
          */
          offset: function (element) {
            var boundingClientRect = element[0].getBoundingClientRect();

            return {
                width: element.prop('offsetWidth'),
                height: element.prop('offsetHeight'),
                top: boundingClientRect.top + ($window.pageYOffset || $document[0].body.scrollTop || $document[0].documentElement.scrollTop),
                left: boundingClientRect.left + ($window.pageXOffset || $document[0].body.scrollLeft  || $document[0].documentElement.scrollLeft)
              };
          },

          /**
          * @ngdoc method
          * @name hippo.theme#positionStarted
          * @methodOf ui.tree.service:$helper
          *
          * @description
          * Get the start position of the target element according to the provided event properties.
          *
          * @param {Object} e Event
          * @param {Object} target Target element
          * @returns {Object} Object with properties offsetX, offsetY, startX, startY, nowX and dirX.
          */
          positionStarted: function (e, target) {
            var pos = {};
            pos.offsetX = e.pageX - this.offset(target).left;
            pos.offsetY = e.pageY - this.offset(target).top;
            pos.startX = pos.lastX = e.pageX;
            pos.startY = pos.lastY = e.pageY;
            pos.nowX = pos.nowY = pos.distX = pos.distY = pos.dirAx = 0;
            pos.dirX = pos.dirY = pos.lastDirX = pos.lastDirY = pos.distAxX = pos.distAxY = 0;
            return pos;
          },

          positionMoved: function (e, pos, firstMoving) {
            // mouse position last events
            pos.lastX = pos.nowX;
            pos.lastY = pos.nowY;

            // mouse position this events
            pos.nowX  = e.pageX;
            pos.nowY  = e.pageY;

            // distance mouse moved between events
            if (treeConfig.dir == 'rtl') {
              pos.distX = pos.lastX - pos.nowX;
            } else {
              pos.distX = pos.nowX - pos.lastX;
            }
            pos.distY = pos.nowY - pos.lastY;

            // direction mouse was moving
            pos.lastDirX = pos.dirX;
            pos.lastDirY = pos.dirY;

            // direction mouse is now moving (on both axis)
            pos.dirX = pos.distX === 0 ? 0 : pos.distX > 0 ? 1 : -1;
            pos.dirY = pos.distY === 0 ? 0 : pos.distY > 0 ? 1 : -1;

            // axis mouse is now moving on
            var newAx   = Math.abs(pos.distX) > Math.abs(pos.distY) ? 1 : 0;

            // do nothing on first move
            if (firstMoving) {
              pos.dirAx  = newAx;
              pos.moving = true;
              return;
            }

            // calc distance moved on this axis (and direction)
            if (pos.dirAx !== newAx) {
              pos.distAxX = 0;
              pos.distAxY = 0;
            } else {
              pos.distAxX += Math.abs(pos.distX);
              if (pos.dirX !== 0 && pos.dirX !== pos.lastDirX) {
                pos.distAxX = 0;
              }

              pos.distAxY += Math.abs(pos.distY);
              if (pos.dirY !== 0 && pos.dirY !== pos.lastDirY) {
                pos.distAxY = 0;
              }
            }

            pos.dirAx = newAx;
          },

          findIntersect: function(elmPos, nodes, collideWith, direction, horizontal) {
            var self = this;
            var intersectWith;
            for (var nodeIdx = 0; nodeIdx < nodes.length; nodeIdx++) {
              var intersectWithChild;
              var nodeElement = angular.element(nodes[nodeIdx]);

              if (angular.isDefined(nodeElement[0])) {
                if (nodeElement.hasClass('angular-ui-tree-node')) {
                  intersectWithChild = self.findIntersect(elmPos, nodeElement.children(), collideWith, direction, horizontal);

                  if (angular.isUndefined(intersectWithChild)) {
                    var nodeOffset = self.offset(nodeElement);
                    var nodePos = {
                      left: nodeOffset.left,
                      width: nodeOffset.width,
                      right: nodeOffset.left + nodeOffset.width,
                      top: nodeOffset.top,
                      height: nodeOffset.height,
                      bottom: nodeOffset.top + nodeOffset.height
                    };

                    var isOverElementWidth;
                    var isOverElementHeight;
                    if (horizontal) {
                      if (direction < 0) {
                        isOverElementWidth = (collideWith === 'bottom') ? (elmPos.left <= nodePos.right && elmPos.right >= nodePos.left)
                                                                         : (elmPos.right <= nodePos.right && elmPos.right >= nodePos.left);
                      } else if (direction > 0) {
                        isOverElementWidth = (collideWith === 'bottom') ? (elmPos.right >= nodePos.left && elmPos.left <= nodePos.right)
                                                                        : (elmPos.left >= nodePos.left && elmPos.left <= nodePos.right);
                      }
                    }

                    if (direction < 0) {
                      isOverElementHeight = (collideWith === 'bottom') ? (elmPos.top <= nodePos.bottom && elmPos.bottom >= nodePos.top)
                                                                       : (elmPos.bottom <= nodePos.bottom && elmPos.bottom >= nodePos.top);
                    } else if (direction > 0) {
                      isOverElementHeight = (collideWith === 'bottom') ? (elmPos.bottom >= nodePos.top && elmPos.top <= nodePos.bottom)
                                                                       : (elmPos.top >= nodePos.top && elmPos.top <= nodePos.bottom);
                    }

                    if ((horizontal && (isOverElementWidth && isOverElementHeight)) || (!horizontal && isOverElementHeight)) {
                      intersectWith = nodes[nodeIdx];
                    }
                  } else {
                    intersectWith = intersectWithChild;
                  }
                } else {
                  if (angular.isDefined(nodeElement.children()) && nodeElement.children().length > 0) {
                    intersectWith = self.findIntersect(elmPos, nodeElement.children(), collideWith, direction, horizontal);
                  }
                }
              }

              if (angular.isDefined(intersectWith))
              {
                break;
              }
            }

            return intersectWith;
          }
        };
      }
    ]);
})();

angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.transition","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.transition",[]).factory("$transition",["$q","$timeout","$rootScope",function(a,b,c){function d(a){for(var b in a)if(void 0!==f.style[b])return a[b]}var e=function(d,f,g){g=g||{};var h=a.defer(),i=e[g.animation?"animationEndEventName":"transitionEndEventName"],j=function(){c.$apply(function(){d.unbind(i,j),h.resolve(d)})};return i&&d.bind(i,j),b(function(){angular.isString(f)?d.addClass(f):angular.isFunction(f)?f(d):angular.isObject(f)&&d.css(f),i||h.resolve(d)}),h.promise.cancel=function(){i&&d.unbind(i,j),h.reject("Transition cancelled")},h.promise},f=document.createElement("trans"),g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},h={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return e.transitionEndEventName=d(g),e.animationEndEventName=d(h),e}]),angular.module("ui.bootstrap.collapse",["ui.bootstrap.transition"]).directive("collapse",["$transition",function(a){return{link:function(b,c,d){function e(b){function d(){j===e&&(j=void 0)}var e=a(c,b);return j&&j.cancel(),j=e,e.then(d,d),e}function f(){k?(k=!1,g()):(c.removeClass("collapse").addClass("collapsing"),e({height:c[0].scrollHeight+"px"}).then(g))}function g(){c.removeClass("collapsing"),c.addClass("collapse in"),c.css({height:"auto"})}function h(){if(k)k=!1,i(),c.css({height:0});else{c.css({height:c[0].scrollHeight+"px"});{c[0].offsetWidth}c.removeClass("collapse in").addClass("collapsing"),e({height:0}).then(i)}}function i(){c.removeClass("collapsing"),c.addClass("collapse")}var j,k=!0;b.$watch(d.collapse,function(a){a?h():f()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"template/accordion/accordion.html"}}).directive("accordionGroup",function(){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.$watch("isOpen",function(b){b&&d.closeOthers(a)}),a.toggleOpen=function(){a.isDisabled||(a.isOpen=!a.isOpen)}}}}).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,function(){}))}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(a,b,c,d){a.$watch(function(){return d[c.accordionTransclude]},function(a){a&&(b.html(""),b.append(a))})}}}),angular.module("ui.bootstrap.alert",[]).controller("AlertController",["$scope","$attrs",function(a,b){a.closeable="close"in b,this.close=a.close}]).directive("alert",function(){return{restrict:"EA",controller:"AlertController",templateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}).directive("dismissOnTimeout",["$timeout",function(a){return{require:"alert",link:function(b,c,d,e){a(function(){e.close()},parseInt(d.dismissOnTimeout,10))}}}]),angular.module("ui.bootstrap.bindHtml",[]).directive("bindHtmlUnsafe",function(){return function(a,b,c){b.addClass("ng-binding").data("$binding",c.bindHtmlUnsafe),a.$watch(c.bindHtmlUnsafe,function(a){b.html(a||"")})}}),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).controller("ButtonsController",["buttonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("btnRadio",function(){return{require:["btnRadio","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){var e=d[0],f=d[1];f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.btnRadio)))},b.bind(e.toggleEvent,function(){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.btnRadio)),f.$render()})})}}}).directive("btnCheckbox",function(){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){var d=a.$eval(b);return angular.isDefined(d)?d:c}var h=d[0],i=d[1];i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.bind(h.toggleEvent,function(){a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",["ui.bootstrap.transition"]).controller("CarouselController",["$scope","$timeout","$interval","$transition",function(a,b,c,d){function e(){f();var b=+a.interval;!isNaN(b)&&b>0&&(h=c(g,b))}function f(){h&&(c.cancel(h),h=null)}function g(){var b=+a.interval;i&&!isNaN(b)&&b>0?a.next():a.pause()}var h,i,j=this,k=j.slides=a.slides=[],l=-1;j.currentSlide=null;var m=!1;j.select=a.select=function(c,f){function g(){if(!m){if(j.currentSlide&&angular.isString(f)&&!a.noTransition&&c.$element){c.$element.addClass(f);{c.$element[0].offsetWidth}angular.forEach(k,function(a){angular.extend(a,{direction:"",entering:!1,leaving:!1,active:!1})}),angular.extend(c,{direction:f,active:!0,entering:!0}),angular.extend(j.currentSlide||{},{direction:f,leaving:!0}),a.$currentTransition=d(c.$element,{}),function(b,c){a.$currentTransition.then(function(){h(b,c)},function(){h(b,c)})}(c,j.currentSlide)}else h(c,j.currentSlide);j.currentSlide=c,l=i,e()}}function h(b,c){angular.extend(b,{direction:"",active:!0,leaving:!1,entering:!1}),angular.extend(c||{},{direction:"",active:!1,leaving:!1,entering:!1}),a.$currentTransition=null}var i=k.indexOf(c);void 0===f&&(f=i>l?"next":"prev"),c&&c!==j.currentSlide&&(a.$currentTransition?(a.$currentTransition.cancel(),b(g)):g())},a.$on("$destroy",function(){m=!0}),j.indexOfSlide=function(a){return k.indexOf(a)},a.next=function(){var b=(l+1)%k.length;return a.$currentTransition?void 0:j.select(k[b],"next")},a.prev=function(){var b=0>l-1?k.length-1:l-1;return a.$currentTransition?void 0:j.select(k[b],"prev")},a.isActive=function(a){return j.currentSlide===a},a.$watch("interval",e),a.$on("$destroy",f),a.play=function(){i||(i=!0,e())},a.pause=function(){a.noPause||(i=!1,f())},j.addSlide=function(b,c){b.$element=c,k.push(b),1===k.length||b.active?(j.select(k[k.length-1]),1==k.length&&a.play()):b.active=!1},j.removeSlide=function(a){var b=k.indexOf(a);k.splice(b,1),k.length>0&&a.active?j.select(b>=k.length?k[b-1]:k[b]):l>b&&l--}}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",require:"carousel",templateUrl:"template/carousel/carousel.html",scope:{interval:"=",noTransition:"=",noPause:"="}}}]).directive("slide",function(){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/carousel/slide.html",scope:{active:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}),angular.module("ui.bootstrap.dateparser",[]).service("dateParser",["$locale","orderByFilter",function(a,b){function c(a){var c=[],d=a.split("");return angular.forEach(e,function(b,e){var f=a.indexOf(e);if(f>-1){a=a.split(""),d[f]="("+b.regex+")",a[f]="$";for(var g=f+1,h=f+e.length;h>g;g++)d[g]="",a[g]="$";a=a.join(""),c.push({index:f,apply:b.apply})}}),{regex:new RegExp("^"+d.join("")+"$"),map:b(c,"index")}}function d(a,b,c){return 1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}this.parsers={};var e={yyyy:{regex:"\\d{4}",apply:function(a){this.year=+a}},yy:{regex:"\\d{2}",apply:function(a){this.year=+a+2e3}},y:{regex:"\\d{1,4}",apply:function(a){this.year=+a}},MMMM:{regex:a.DATETIME_FORMATS.MONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.MONTH.indexOf(b)}},MMM:{regex:a.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1}},M:{regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},EEEE:{regex:a.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:a.DATETIME_FORMATS.SHORTDAY.join("|")}};this.parse=function(b,e){if(!angular.isString(b)||!e)return b;e=a.DATETIME_FORMATS[e]||e,this.parsers[e]||(this.parsers[e]=c(e));var f=this.parsers[e],g=f.regex,h=f.map,i=b.match(g);if(i&&i.length){for(var j,k={year:1900,month:0,date:1,hours:0},l=1,m=i.length;m>l;l++){var n=h[l-1];n.apply&&n.apply.call(k,i[l])}return d(k.year,k.month,k.date)&&(j=new Date(k.year,k.month,k.date,k.hours)),j}}}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split("-"),j=i[0],k=i[1]||"center";e=d?this.offset(a):this.position(a),f=b.prop("offsetWidth"),g=b.prop("offsetHeight");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case"right":h={top:m[k](),left:l[j]()};break;case"left":h={top:m[k](),left:e.left-f};break;case"bottom":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).constant("datepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null}).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$timeout","$log","dateFilter","datepickerConfig",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","minMode","maxMode","showWeeks","startingDay","yearRange"],function(c,e){i[c]=angular.isDefined(b[c])?8>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):h[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=h[d]?new Date(h[d]):null}),a.datepickerMode=a.datepickerMode||h.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),this.activeDate=angular.isDefined(b.initDate)?a.$parent.$eval(b.initDate):new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$modelValue){var a=new Date(j.$modelValue),b=!isNaN(a);b?this.activeDate=a:f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'),j.$setValidity("date",b)}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$modelValue?new Date(j.$modelValue):null;j.$setValidity("date-disabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$modelValue?new Date(j.$modelValue):null;return{date:a,label:g(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$modelValue?new Date(j.$modelValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var k=function(){e(function(){i.element[0].focus()},0,!1)};a.$on("datepicker.focus",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),b.stopPropagation(),"enter"===c||"space"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate),k()}else!b.ctrlKey||"up"!==c&&"down"!==c?(i.handleKeyDown(c,b),i.refreshView()):(a.toggleMode("up"===c?1:-1),k())}}]).directive("datepicker",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/datepicker.html",scope:{datepickerMode:"=?",dateDisabled:"&"},require:["datepicker","?^ngModel"],controller:"DatepickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}).directive("daypicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/day.html",require:"^datepicker",link:function(b,c,d,e){function f(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?i[b]:29}function g(a,b){var c=new Array(b),d=new Date(a),e=0;for(d.setHours(12);b>e;)c[e++]=new Date(d),d.setDate(d.getDate()+1);return c}function h(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}b.showWeeks=e.showWeeks,e.step={months:1},e.element=c;var i=[31,28,31,30,31,30,31,31,30,31,30,31];e._refreshView=function(){var c=e.activeDate.getFullYear(),d=e.activeDate.getMonth(),f=new Date(c,d,1),i=e.startingDay-f.getDay(),j=i>0?7-i:-i,k=new Date(f);j>0&&k.setDate(-j+1);for(var l=g(k,42),m=0;42>m;m++)l[m]=angular.extend(e.createDateObject(l[m],e.formatDay),{secondary:l[m].getMonth()!==d,uid:b.uniqueId+"-"+m});b.labels=new Array(7);for(var n=0;7>n;n++)b.labels[n]={abbr:a(l[n].date,e.formatDayHeader),full:a(l[n].date,"EEEE")};if(b.title=a(e.activeDate,e.formatDayTitle),b.rows=e.split(l,7),b.showWeeks){b.weekNumbers=[];for(var o=h(b.rows[0][0].date),p=b.rows.length;b.weekNumbers.push(o++)<p;);}},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},e.handleKeyDown=function(a){var b=e.activeDate.getDate();if("left"===a)b-=1;else if("up"===a)b-=7;else if("right"===a)b+=1;else if("down"===a)b+=7;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getMonth()+("pageup"===a?-1:1);e.activeDate.setMonth(c,1),b=Math.min(f(e.activeDate.getFullYear(),e.activeDate.getMonth()),b)}else"home"===a?b=1:"end"===a&&(b=f(e.activeDate.getFullYear(),e.activeDate.getMonth()));e.activeDate.setDate(b)},e.refreshView()}}}]).directive("monthpicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/month.html",require:"^datepicker",link:function(b,c,d,e){e.step={years:1},e.element=c,e._refreshView=function(){for(var c=new Array(12),d=e.activeDate.getFullYear(),f=0;12>f;f++)c[f]=angular.extend(e.createDateObject(new Date(d,f,1),e.formatMonth),{uid:b.uniqueId+"-"+f});b.title=a(e.activeDate,e.formatMonthTitle),b.rows=e.split(c,3)},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},e.handleKeyDown=function(a){var b=e.activeDate.getMonth();if("left"===a)b-=1;else if("up"===a)b-=3;else if("right"===a)b+=1;else if("down"===a)b+=3;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getFullYear()+("pageup"===a?-1:1);e.activeDate.setFullYear(c)}else"home"===a?b=0:"end"===a&&(b=11);e.activeDate.setMonth(b)},e.refreshView()}}}]).directive("yearpicker",["dateFilter",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/year.html",require:"^datepicker",link:function(a,b,c,d){function e(a){return parseInt((a-1)/f,10)*f+1}var f=d.yearRange;d.step={years:f},d.element=b,d._refreshView=function(){for(var b=new Array(f),c=0,g=e(d.activeDate.getFullYear());f>c;c++)b[c]=angular.extend(d.createDateObject(new Date(g+c,0,1),d.formatYear),{uid:a.uniqueId+"-"+c});a.title=[b[0].label,b[f-1].label].join(" - "),a.rows=d.split(b,5)},d.compare=function(a,b){return a.getFullYear()-b.getFullYear()},d.handleKeyDown=function(a){var b=d.activeDate.getFullYear();"left"===a?b-=1:"up"===a?b-=5:"right"===a?b+=1:"down"===a?b+=5:"pageup"===a||"pagedown"===a?b+=("pageup"===a?-1:1)*d.step.years:"home"===a?b=e(d.activeDate.getFullYear()):"end"===a&&(b=e(d.activeDate.getFullYear())+f-1),d.activeDate.setFullYear(b)},d.refreshView()}}}]).constant("datepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0}).directive("datepickerPopup",["$compile","$parse","$document","$position","dateFilter","dateParser","datepickerPopupConfig",function(a,b,c,d,e,f,g){return{restrict:"EA",require:"ngModel",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&"},link:function(h,i,j,k){function l(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function m(a){if(a){if(angular.isDate(a)&&!isNaN(a))return k.$setValidity("date",!0),a;if(angular.isString(a)){var b=f.parse(a,n)||new Date(a);return isNaN(b)?void k.$setValidity("date",!1):(k.$setValidity("date",!0),b)}return void k.$setValidity("date",!1)}return k.$setValidity("date",!0),null}var n,o=angular.isDefined(j.closeOnDateSelection)?h.$parent.$eval(j.closeOnDateSelection):g.closeOnDateSelection,p=angular.isDefined(j.datepickerAppendToBody)?h.$parent.$eval(j.datepickerAppendToBody):g.appendToBody;h.showButtonBar=angular.isDefined(j.showButtonBar)?h.$parent.$eval(j.showButtonBar):g.showButtonBar,h.getText=function(a){return h[a+"Text"]||g[a+"Text"]},j.$observe("datepickerPopup",function(a){n=a||g.datepickerPopup,k.$render()});var q=angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");q.attr({"ng-model":"date","ng-change":"dateSelection()"});var r=angular.element(q.children()[0]);j.datepickerOptions&&angular.forEach(h.$parent.$eval(j.datepickerOptions),function(a,b){r.attr(l(b),a)}),h.watchData={},angular.forEach(["minDate","maxDate","datepickerMode"],function(a){if(j[a]){var c=b(j[a]);if(h.$parent.$watch(c,function(b){h.watchData[a]=b}),r.attr(l(a),"watchData."+a),"datepickerMode"===a){var d=c.assign;h.$watch("watchData."+a,function(a,b){a!==b&&d(h.$parent,a)})}}}),j.dateDisabled&&r.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),k.$parsers.unshift(m),h.dateSelection=function(a){angular.isDefined(a)&&(h.date=a),k.$setViewValue(h.date),k.$render(),o&&(h.isOpen=!1,i[0].focus())},i.bind("input change keyup",function(){h.$apply(function(){h.date=k.$modelValue})}),k.$render=function(){var a=k.$viewValue?e(k.$viewValue,n):"";i.val(a),h.date=m(k.$modelValue)};var s=function(a){h.isOpen&&a.target!==i[0]&&h.$apply(function(){h.isOpen=!1})},t=function(a){h.keydown(a)};i.bind("keydown",t),h.keydown=function(a){27===a.which?(a.preventDefault(),a.stopPropagation(),h.close()):40!==a.which||h.isOpen||(h.isOpen=!0)},h.$watch("isOpen",function(a){a?(h.$broadcast("datepicker.focus"),h.position=p?d.offset(i):d.position(i),h.position.top=h.position.top+i.prop("offsetHeight"),c.bind("click",s)):c.unbind("click",s)}),h.select=function(a){if("today"===a){var b=new Date;angular.isDate(k.$modelValue)?(a=new Date(k.$modelValue),a.setFullYear(b.getFullYear(),b.getMonth(),b.getDate())):a=new Date(b.setHours(0,0,0,0))}h.dateSelection(a)},h.close=function(){h.isOpen=!1,i[0].focus()};var u=a(q)(h);q.remove(),p?c.find("body").append(u):i.after(u),h.$on("$destroy",function(){u.remove(),i.unbind("keydown",t),c.unbind("click",s)})}}}]).directive("datepickerPopupWrap",function(){return{restrict:"EA",replace:!0,transclude:!0,templateUrl:"template/datepicker/popup.html",link:function(a,b){b.bind("click",function(a){a.preventDefault(),a.stopPropagation()})}}}),angular.module("ui.bootstrap.dropdown",[]).constant("dropdownConfig",{openClass:"open"}).service("dropdownService",["$document",function(a){var b=null;this.open=function(e){b||(a.bind("click",c),a.bind("keydown",d)),b&&b!==e&&(b.isOpen=!1),b=e},this.close=function(e){b===e&&(b=null,a.unbind("click",c),a.unbind("keydown",d))};var c=function(a){if(b){var c=b.getToggleElement();a&&c&&c[0].contains(a.target)||b.$apply(function(){b.isOpen=!1})}},d=function(a){27===a.which&&(b.focusToggleElement(),c())}}]).controller("DropdownController",["$scope","$attrs","$parse","dropdownConfig","dropdownService","$animate",function(a,b,c,d,e,f){var g,h=this,i=a.$new(),j=d.openClass,k=angular.noop,l=b.onToggle?c(b.onToggle):angular.noop;this.init=function(d){h.$element=d,b.isOpen&&(g=c(b.isOpen),k=g.assign,a.$watch(g,function(a){i.isOpen=!!a}))},this.toggle=function(a){return i.isOpen=arguments.length?!!a:!i.isOpen},this.isOpen=function(){return i.isOpen},i.getToggleElement=function(){return h.toggleElement},i.focusToggleElement=function(){h.toggleElement&&h.toggleElement[0].focus()},i.$watch("isOpen",function(b,c){f[b?"addClass":"removeClass"](h.$element,j),b?(i.focusToggleElement(),e.open(i)):e.close(i),k(a,b),angular.isDefined(b)&&b!==c&&l(a,{open:!!b})}),a.$on("$locationChangeSuccess",function(){i.isOpen=!1}),a.$on("$destroy",function(){i.$destroy()})}]).directive("dropdown",function(){return{controller:"DropdownController",link:function(a,b,c,d){d.init(b)}}}).directive("dropdownToggle",function(){return{require:"?^dropdown",link:function(a,b,c,d){if(d){d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.transition"]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}).directive("modalBackdrop",["$timeout",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/modal/backdrop.html",link:function(b,c,d){b.backdropClass=d.backdropClass||"",b.animate=!1,a(function(){b.animate=!0})}}}]).directive("modalWindow",["$modalStack","$timeout",function(a,b){return{restrict:"EA",scope:{index:"@",animate:"="},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(c,d,e){d.addClass(e.windowClass||""),c.size=e.size,b(function(){c.animate=!0,d[0].querySelectorAll("[autofocus]").length||d[0].focus()}),c.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!=c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))}}}}]).directive("modalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$modalStack",["$transition","$timeout","$document","$compile","$rootScope","$$stackedMap",function(a,b,c,d,e,f){function g(){for(var a=-1,b=n.keys(),c=0;c<b.length;c++)n.get(b[c]).value.backdrop&&(a=c);return a}function h(a){var b=c.find("body").eq(0),d=n.get(a).value;n.remove(a),j(d.modalDomEl,d.modalScope,300,function(){d.modalScope.$destroy(),b.toggleClass(m,n.length()>0),i()})}function i(){if(k&&-1==g()){var a=l;j(k,l,150,function(){a.$destroy(),a=null}),k=void 0,l=void 0}}function j(c,d,e,f){function g(){g.done||(g.done=!0,c.remove(),f&&f())}d.animate=!1;var h=a.transitionEndEventName;if(h){var i=b(g,e);c.bind(h,function(){b.cancel(i),g(),d.$apply()})}else b(g)}var k,l,m="modal-open",n=f.createNew(),o={};return e.$watch(g,function(a){l&&(l.index=a)}),c.bind("keydown",function(a){var b;27===a.which&&(b=n.top(),b&&b.value.keyboard&&(a.preventDefault(),e.$apply(function(){o.dismiss(b.key,"escape key press")})))}),o.open=function(a,b){n.add(a,{deferred:b.deferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard});var f=c.find("body").eq(0),h=g();if(h>=0&&!k){l=e.$new(!0),l.index=h;var i=angular.element("<div modal-backdrop></div>");i.attr("backdrop-class",b.backdropClass),k=d(i)(l),f.append(k)}var j=angular.element("<div modal-window></div>");j.attr({"template-url":b.windowTemplateUrl,"window-class":b.windowClass,size:b.size,index:n.length()-1,animate:"animate"}).html(b.content);var o=d(j)(b.scope);n.top().value.modalDomEl=o,f.append(o),f.addClass(m)},o.close=function(a,b){var c=n.get(a);c&&(c.value.deferred.resolve(b),h(a))},o.dismiss=function(a,b){var c=n.get(a);c&&(c.value.deferred.reject(b),h(a))},o.dismissAll=function(a){for(var b=this.getTop();b;)this.dismiss(b.key,a),b=this.getTop()},o.getTop=function(){return n.top()},o}]).provider("$modal",function(){var a={options:{backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$http","$templateCache","$controller","$modalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?d.when(a.template):e.get(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl,{cache:f}).then(function(a){return a.data})}function j(a){var c=[];return angular.forEach(a,function(a){(angular.isFunction(a)||angular.isArray(a))&&c.push(d.when(b.invoke(a)))}),c}var k={};return k.open=function(b){var e=d.defer(),f=d.defer(),k={result:e.promise,opened:f.promise,close:function(a){h.close(k,a)},dismiss:function(a){h.dismiss(k,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var l=d.all([i(b)].concat(j(b.resolve)));return l.then(function(a){var d=(b.scope||c).$new();d.$close=k.close,d.$dismiss=k.dismiss;var f,i={},j=1;b.controller&&(i.$scope=d,i.$modalInstance=k,angular.forEach(b.resolve,function(b,c){i[c]=a[j++]}),f=g(b.controller,i),b.controllerAs&&(d[b.controllerAs]=f)),h.open(k,{scope:d,deferred:e,content:a[0],backdrop:b.backdrop,keyboard:b.keyboard,backdropClass:b.backdropClass,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size})},function(a){e.reject(a)}),l.then(function(){f.resolve(!0)},function(){f.reject(!1)}),k},k}]};return a}),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$attrs","$parse",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(f,g){e=f,this.config=g,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=g.itemsPerPage},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b){a.page!==b&&b>0&&b<=a.totalPages&&(e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+"Text"]||d.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages},a.$watch("totalItems",function(){a.totalPages=d.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})}]).constant("paginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["$parse","paginationConfig",function(a,b){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@"},require:["pagination","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pagination.html",replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,"...",!1);c.unshift(j)}if(b>e){var m=g(e+1,"...",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()
});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant("pagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("pager",["pagerConfig",function(a){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@"},require:["pager","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pager.html",replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).provider("$tooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",animation:!0,popupDelay:0},c={mouseenter:"mouseleave",click:"click",focus:"blur"},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$position","$interpolate",function(e,f,g,h,i,j){return function(e,k,l){function m(a){var b=a||n.trigger||l,d=c[b]||b;return{show:b,hide:d}}var n=angular.extend({},b,d),o=a(e),p=j.startSymbol(),q=j.endSymbol(),r="<div "+o+'-popup title="'+p+"title"+q+'" content="'+p+"content"+q+'" placement="'+p+"placement"+q+'" animation="animation" is-open="isOpen"></div>';return{restrict:"EA",compile:function(){var a=f(r);return function(b,c,d){function f(){D.isOpen?l():j()}function j(){(!C||b.$eval(d[k+"Enable"]))&&(s(),D.popupDelay?z||(z=g(o,D.popupDelay,!1),z.then(function(a){a()})):o()())}function l(){b.$apply(function(){p()})}function o(){return z=null,y&&(g.cancel(y),y=null),D.content?(q(),w.css({top:0,left:0,display:"block"}),D.$digest(),E(),D.isOpen=!0,D.$digest(),E):angular.noop}function p(){D.isOpen=!1,g.cancel(z),z=null,D.animation?y||(y=g(r,500)):r()}function q(){w&&r(),x=D.$new(),w=a(x,function(a){A?h.find("body").append(a):c.after(a)})}function r(){y=null,w&&(w.remove(),w=null),x&&(x.$destroy(),x=null)}function s(){t(),u()}function t(){var a=d[k+"Placement"];D.placement=angular.isDefined(a)?a:n.placement}function u(){var a=d[k+"PopupDelay"],b=parseInt(a,10);D.popupDelay=isNaN(b)?n.popupDelay:b}function v(){var a=d[k+"Trigger"];F(),B=m(a),B.show===B.hide?c.bind(B.show,f):(c.bind(B.show,j),c.bind(B.hide,l))}var w,x,y,z,A=angular.isDefined(n.appendToBody)?n.appendToBody:!1,B=m(void 0),C=angular.isDefined(d[k+"Enable"]),D=b.$new(!0),E=function(){var a=i.positionElements(c,w,D.placement,A);a.top+="px",a.left+="px",w.css(a)};D.isOpen=!1,d.$observe(e,function(a){D.content=a,!a&&D.isOpen&&p()}),d.$observe(k+"Title",function(a){D.title=a});var F=function(){c.unbind(B.show,j),c.unbind(B.hide,l)};v();var G=b.$eval(d[k+"Animation"]);D.animation=angular.isDefined(G)?!!G:n.animation;var H=b.$eval(d[k+"AppendToBody"]);A=angular.isDefined(H)?H:A,A&&b.$on("$locationChangeSuccess",function(){D.isOpen&&p()}),b.$on("$destroy",function(){g.cancel(y),g.cancel(z),F(),r(),D=null})}}}}}]}).directive("tooltipPopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).directive("tooltipHtmlUnsafe",["$tooltip",function(a){return a("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("progressConfig",{animate:!0,max:100}).controller("ProgressController",["$scope","$attrs","progressConfig",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max,this.addBar=function(b,c){e||c.css({transition:"none"}),this.bars.push(b),b.$watch("value",function(c){b.percent=+(100*c/a.max).toFixed(2)}),b.$on("$destroy",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)}}]).directive("progress",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{},templateUrl:"template/progressbar/progress.html"}}).directive("bar",function(){return{restrict:"EA",replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b)}}}).directive("progressbar",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]))}}}),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",{max:5,stateOn:null,stateOff:null}).controller("RatingController",["$scope","$attrs","ratingConfig",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(f)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff},a[b]);return a},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive("rating",function(){return{restrict:"EA",require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("TabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect())}),a.active=!0,a.onSelect()},b.addTab=function(a){c.push(a),1===c.length?a.active=!0:a.active&&b.select(a)},b.removeTab=function(a){var e=c.indexOf(a);if(a.active&&c.length>1&&!d){var f=e==c.length-1?e-1:e+1;b.select(c[f])}c.splice(e,1)};var d;a.$on("$destroy",function(){d=!0})}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("tab",["$parse",function(a){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},compile:function(b,c,d){return function(b,c,e,f){b.$watch("active",function(a){a&&f.select(b)}),b.disabled=!1,e.disabled&&b.$parent.$watch(a(e.disabled),function(a){b.disabled=!!a}),b.select=function(){b.disabled||(b.active=!0)},f.addTab(b),b.$on("$destroy",function(){f.removeTab(b)}),b.$transcludeFn=d}}}}]).directive("tabHeadingTransclude",[function(){return{restrict:"A",require:"^tab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}]).directive("tabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(b,c,d){var e=b.$eval(d.tabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("timepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0}).controller("TimepickerController",["$scope","$attrs","$parse","$log","$locale","timepickerConfig",function(a,b,c,d,e,f){function g(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===p[1]&&(b+=12)),b):void 0}function h(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function i(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a}function j(a){k(),o.$setViewValue(new Date(n)),l(a)}function k(){o.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1}function l(b){var c=n.getHours(),d=n.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:i(c),a.minutes="m"===b?d:i(d),a.meridian=n.getHours()<12?p[0]:p[1]}function m(a){var b=new Date(n.getTime()+6e4*a);n.setHours(b.getHours(),b.getMinutes()),j()}var n=new Date,o={$setViewValue:angular.noop},p=angular.isDefined(b.meridians)?a.$parent.$eval(b.meridians):f.meridians||e.DATETIME_FORMATS.AMPMS;this.init=function(c,d){o=c,o.$render=this.render;var e=d.eq(0),g=d.eq(1),h=angular.isDefined(b.mousewheel)?a.$parent.$eval(b.mousewheel):f.mousewheel;h&&this.setupMousewheelEvents(e,g),a.readonlyInput=angular.isDefined(b.readonlyInput)?a.$parent.$eval(b.readonlyInput):f.readonlyInput,this.setupInputEvents(e,g)};var q=f.hourStep;b.hourStep&&a.$parent.$watch(c(b.hourStep),function(a){q=parseInt(a,10)});var r=f.minuteStep;b.minuteStep&&a.$parent.$watch(c(b.minuteStep),function(a){r=parseInt(a,10)}),a.showMeridian=f.showMeridian,b.showMeridian&&a.$parent.$watch(c(b.showMeridian),function(b){if(a.showMeridian=!!b,o.$error.time){var c=g(),d=h();angular.isDefined(c)&&angular.isDefined(d)&&(n.setHours(c),j())}else l()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){o.$setViewValue(null),o.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=g();angular.isDefined(a)?(n.setHours(a),j("h")):d(!0)},b.bind("blur",function(){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=i(a.hours)})}),a.updateMinutes=function(){var a=h();angular.isDefined(a)?(n.setMinutes(a),j("m")):d(void 0,!0)},c.bind("blur",function(){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=i(a.minutes)})})},this.render=function(){var a=o.$modelValue?new Date(o.$modelValue):null;isNaN(a)?(o.$setValidity("time",!1),d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(a&&(n=a),k(),l())},a.incrementHours=function(){m(60*q)},a.decrementHours=function(){m(60*-q)},a.incrementMinutes=function(){m(r)},a.decrementMinutes=function(){m(-r)},a.toggleMeridian=function(){m(720*(n.getHours()<12?1:-1))}}]).directive("timepicker",function(){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",replace:!0,scope:{},templateUrl:"template/timepicker/timepicker.html",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).factory("typeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$position","typeaheadParser",function(a,b,c,d,e,f,g){var h=[9,13,27,38,40];return{require:"ngModel",link:function(i,j,k,l){var m,n=i.$eval(k.typeaheadMinLength)||1,o=i.$eval(k.typeaheadWaitMs)||0,p=i.$eval(k.typeaheadEditable)!==!1,q=b(k.typeaheadLoading).assign||angular.noop,r=b(k.typeaheadOnSelect),s=k.typeaheadInputFormatter?b(k.typeaheadInputFormatter):void 0,t=k.typeaheadAppendToBody?i.$eval(k.typeaheadAppendToBody):!1,u=i.$eval(k.typeaheadFocusFirst)!==!1,v=b(k.ngModel).assign,w=g.parse(k.typeahead),x=i.$new();i.$on("$destroy",function(){x.$destroy()});var y="typeahead-"+x.$id+"-"+Math.floor(1e4*Math.random());j.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":y});var z=angular.element("<div typeahead-popup></div>");z.attr({id:y,matches:"matches",active:"activeIdx",select:"select(activeIdx)",query:"query",position:"position"}),angular.isDefined(k.typeaheadTemplateUrl)&&z.attr("template-url",k.typeaheadTemplateUrl);var A=function(){x.matches=[],x.activeIdx=-1,j.attr("aria-expanded",!1)},B=function(a){return y+"-option-"+a};x.$watch("activeIdx",function(a){0>a?j.removeAttr("aria-activedescendant"):j.attr("aria-activedescendant",B(a))});var C=function(a){var b={$viewValue:a};q(i,!0),c.when(w.source(i,b)).then(function(c){var d=a===l.$viewValue;if(d&&m)if(c.length>0){x.activeIdx=u?0:-1,x.matches.length=0;for(var e=0;e<c.length;e++)b[w.itemName]=c[e],x.matches.push({id:B(e),label:w.viewMapper(x,b),model:c[e]});x.query=a,x.position=t?f.offset(j):f.position(j),x.position.top=x.position.top+j.prop("offsetHeight"),j.attr("aria-expanded",!0)}else A();d&&q(i,!1)},function(){A(),q(i,!1)})};A(),x.query=void 0;var D,E=function(a){D=d(function(){C(a)},o)},F=function(){D&&d.cancel(D)};l.$parsers.unshift(function(a){return m=!0,a&&a.length>=n?o>0?(F(),E(a)):C(a):(q(i,!1),F(),A()),p?a:a?void l.$setValidity("editable",!1):(l.$setValidity("editable",!0),a)}),l.$formatters.push(function(a){var b,c,d={};return s?(d.$model=a,s(i,d)):(d[w.itemName]=a,b=w.viewMapper(i,d),d[w.itemName]=void 0,c=w.viewMapper(i,d),b!==c?b:a)}),x.select=function(a){var b,c,e={};e[w.itemName]=c=x.matches[a].model,b=w.modelMapper(i,e),v(i,b),l.$setValidity("editable",!0),r(i,{$item:c,$model:b,$label:w.viewMapper(i,e)}),A(),d(function(){j[0].focus()},0,!1)},j.bind("keydown",function(a){0!==x.matches.length&&-1!==h.indexOf(a.which)&&(-1!=x.activeIdx||13!==a.which&&9!==a.which)&&(a.preventDefault(),40===a.which?(x.activeIdx=(x.activeIdx+1)%x.matches.length,x.$digest()):38===a.which?(x.activeIdx=(x.activeIdx>0?x.activeIdx:x.matches.length)-1,x.$digest()):13===a.which||9===a.which?x.$apply(function(){x.select(x.activeIdx)}):27===a.which&&(a.stopPropagation(),A(),x.$digest()))}),j.bind("blur",function(){m=!1});var G=function(a){j[0]!==a.target&&(A(),x.$digest())};e.bind("click",G),i.$on("$destroy",function(){e.unbind("click",G),t&&H.remove()});var H=a(z)(x);t?e.find("body").append(H):j.after(H)}}}]).directive("typeaheadPopup",function(){return{restrict:"EA",scope:{matches:"=",query:"=",active:"=",position:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("typeaheadMatch",["$http","$templateCache","$compile","$parse",function(a,b,c,d){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(e,f,g){var h=d(g.templateUrl)(e.$parent)||"template/typeahead/typeahead-match.html";a.get(h,{cache:b}).success(function(a){f.replaceWith(c(a.trim())(e))})}}}]).filter("typeaheadHighlight",function(){function a(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(b,c){return c?(""+b).replace(new RegExp(a(c),"gi"),"<strong>$&</strong>"):b}}),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion-group.html",'<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a href class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion.html",'<div class="panel-group" ng-transclude></div>')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("template/alert/alert.html",'<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("template/carousel/slide.html","<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/datepicker.html",'<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')}]),angular.module("template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/day.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/month.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/popup.html",'<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')}]),angular.module("template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/year.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("template/modal/backdrop.html",'<div class="modal-backdrop fade {{ backdropClass }}"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(a){a.put("template/modal/window.html",'<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" modal-transclude></div></div>\n</div>')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pager.html",'<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')}]),angular.module("template/tooltip/tooltip-html-unsafe-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-unsafe-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover.html",'<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progress.html",'<div class="progress" ng-transclude></div>')}]),angular.module("template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("template/timepicker/timepicker.html",'<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-match.html",'<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]);
angular.module("mediaPlayer",["mediaPlayer.helpers"]).value("mp.throttleSettings",{enabled:!0,time:1e3}).constant("mp.playerDefaults",{currentTrack:0,ended:void 0,network:void 0,playing:!1,seeking:!1,tracks:0,volume:1,formatDuration:"00:00",formatTime:"00:00",loadPercent:0}).directive("mediaPlayer",["$rootScope","$interpolate","$timeout","mp.throttle","mp.playerDefaults","mp.throttleSettings",function(a,b,c,d,e,f){function g(a){return function(b,d){var e,f=null;if(a.$attachPlaylist(b),void 0===b&&void 0!==d)return a.pause();if(a.currentTrack){e=d?d[a.currentTrack-1]:-1;for(var g=0;g<b.length;g++)if(angular.equals(b[g],e)){f=g;break}null!==f?(a.currentTrack=f+1,a.tracks=b.length):(a.pause(),b.length?c(function(){a.$clearSourceList(),a.$addSourceList(b[0]),a.load(),a.tracks=b.length}):a.reset())}else b.length?(a.$clearSourceList(),a.$addSourceList(b[0]),a.load(),a.tracks=b.length):a.reset()}}var h={load:function(a,b){"boolean"==typeof a?(b=a,a=null):"object"==typeof a&&(this.$clearSourceList(),this.$addSourceList(a)),this.$domEl.load(),this.ended=void 0,b&&this.$element.one("canplay",this.play.bind(this))},reset:function(a){angular.extend(this,e),this.$clearSourceList(),this.load(this.$playlist,a)},play:function(a,b){return"boolean"==typeof a&&(b=a,a=void 0),b&&(this.$selective=!0),this.$playlist.length>a?(this.currentTrack=a+1,this.load(this.$playlist[a],!0)):(!this.currentTrack&&this.$domEl.readyState&&this.currentTrack++,void(this.ended?this.load(!0):this.$domEl.play()))},playPause:function(a,b){"boolean"==typeof a&&(b=a,a=void 0),b&&(this.$selective=!0),"number"==typeof a&&a+1!==this.currentTrack?this.play(a):this.playing?this.pause():this.play()},pause:function(){this.$domEl.pause()},stop:function(){this.reset()},toggleMute:function(){this.muted=this.$domEl.muted=!this.$domEl.muted},next:function(a){var b=this;if(b.currentTrack&&b.currentTrack<b.tracks){var d=a||b.playing;b.pause(),c(function(){b.$clearSourceList(),b.$addSourceList(b.$playlist[b.currentTrack]),b.load(d),b.currentTrack++})}},prev:function(a){var b=this;if(b.currentTrack&&b.currentTrack-1){var d=a||b.playing;b.pause(),c(function(){b.$clearSourceList(),b.$addSourceList(b.$playlist[b.currentTrack-2]),b.load(d),b.currentTrack--})}},setPlaybackRate:function(a){this.$domEl.playbackRate=a},setVolume:function(a){this.$domEl.volume=a},seek:function(a){var b,c=0;return"string"!=typeof a?this.$domEl.currentTime=a:(b=a.split(":"),c+=parseInt(b.pop(),10),b.length&&(c+=60*parseInt(b.pop(),10)),b.length&&(c+=3600*parseInt(b.pop(),10)),isNaN(c)?void 0:this.$domEl.currentTime=c)},on:function(a,b){return this.$element.on(a,b)},off:function(a,b){return this.$element.off(a,b)},one:function(a,b){return this.$element.one(a,b)},$addSourceList:function(a){var b=this;if(angular.isArray(a))angular.forEach(a,function(a){var c=document.createElement("SOURCE");["src","type","media"].forEach(function(b){void 0!==a[b]&&c.setAttribute(b,a[b])}),b.$element.append(c)});else if(angular.isObject(a)){var c=document.createElement("SOURCE");["src","type","media"].forEach(function(b){void 0!==a[b]&&c.setAttribute(b,a[b])}),b.$element.append(c)}},$clearSourceList:function(){this.$element.contents().remove()},$formatTime:function(a){if(1/0===a)return"∞";var b,c=parseInt(a/3600,10)%24,d=parseInt(a/60,10)%60,e=parseInt(a%60,10),f=(10>d?"0"+d:d)+":"+(10>e?"0"+e:e);return b=c>0?(10>c?"0"+c:c)+":"+f:f},$attachPlaylist:function(a){void 0===a||null===a?this.playlist=[]:this.$playlist=a}},i=function(a,b,c){var e={playing:function(){a.$apply(function(a){a.playing=!0,a.ended=!1})},pause:function(){a.$apply(function(a){a.playing=!1})},ended:function(){!a.$selective&&a.currentTrack<a.tracks?a.next(!0):a.$apply(function(a){a.ended=!0,a.playing=!1})},timeupdate:function(){a.$apply(function(a){a.currentTime=b.currentTime,a.formatTime=a.$formatTime(a.currentTime)})},loadedmetadata:function(){a.$apply(function(a){a.currentTrack||a.currentTrack++,a.duration=b.duration,a.formatDuration=a.$formatTime(a.duration),b.buffered.length&&(a.loadPercent=Math.round(b.buffered.end(b.buffered.length-1)/a.duration*100))})},progress:function(){a.$domEl.buffered.length&&a.$apply(function(a){a.loadPercent=Math.round(b.buffered.end(b.buffered.length-1)/a.duration*100),a.network="progress"})},volumechange:function(){a.$apply(function(a){a.volume=b.volume,a.muted=b.muted})},seeked:function(){a.$apply(function(a){a.seeking=!1})},seeking:function(){a.$apply(function(a){a.seeking=!0})},ratechange:function(){a.$apply(function(a){a.playbackRate=b.playbackRate})},stalled:function(){a.$apply(function(a){a.network="stalled"})},suspend:function(){a.$apply(function(a){a.network="suspend"})}};f.enabled&&(e.timeupdate=d(f.time,!1,e.timeupdate)),angular.forEach(e,function(a,b){c.on(b,a)})},j=function(b){var c=angular.extend(a.$new(!0),{$element:b,$domEl:b[0],$playlist:void 0,buffered:b[0].buffered,played:b[0].played,seekable:b[0].seekable},e,h);return i(c,b[0],b),c};return{scope:!1,link:function(a,b,c){var d=c.playlist,e=c.mediaPlayer||c.playerControl,f=new j(b),h=a[d];if(h=void 0===d?[]:void 0===a[d]?a[d]=[]:a[d],void 0!==e&&(a[e]=f),"AUDIO"!==b[0].tagName&&"VIDEO"!==b[0].tagName)return new Error("player directive works only when attached to an <audio>/<video> type tag");var i=[],k=b.find("source");1===k.length?h.unshift({src:k[0].src,type:k[0].type,media:k[0].media}):k.length>1&&(angular.forEach(k,function(a){i.push({src:a.src,type:a.type,media:a.media})}),h.unshift(i)),void 0===d?f.$attachPlaylist(h):h.length?(g(f)(h,void 0,a),a.$watch(d,g(f),!0)):a.$watch(d,g(f),!0)}}}]),angular.module("mediaPlayer.helpers",[]).factory("mp.throttle",["$timeout",function(a){return function(b,c,d,e){var f,g=0;"boolean"!=typeof c&&(e=d,d=c,c=void 0);var h=function(){var h=this,i=+new Date-g,j=arguments,k=function(){g=+new Date,d.apply(h,j)},l=function(){f=void 0};e&&!f&&k(),f&&a.cancel(f),void 0===e&&i>b?k():c!==!0&&(f=a(e?l:k,void 0===e?b-i:b))};return h}}]);
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map
/*!
 * jQVMap Version 1.0 
 *
 * http://jqvmap.com
 *
 * Copyright 2012, Peter Schmalfeldt <manifestinteractive@gmail.com>
 * Copyright 2011-2012, Kirill Lebedev
 * Licensed under the MIT license.
 *
 * Fork Me @ https://github.com/manifestinteractive/jqvmap
 */
(function($){var apiParams={colors:1,values:1,backgroundColor:1,scaleColors:1,normalizeFunction:1,enableZoom:1,showTooltip:1,borderColor:1,borderWidth:1,borderOpacity:1,selectedRegion:1};var apiEvents={onLabelShow:'labelShow',onRegionOver:'regionMouseOver',onRegionOut:'regionMouseOut',onRegionClick:'regionClick'};$.fn.vectorMap=function(options){var defaultParams={map:'world_en',backgroundColor:'#a5bfdd',color:'#f4f3f0',hoverColor:'#c9dfaf',selectedColor:'#c9dfaf',scaleColors:['#b6d6ff','#005ace'],normalizeFunction:'linear',enableZoom:true,showTooltip:true,borderColor:'#818181',borderWidth:1,borderOpacity:0.25,selectedRegion:null},map;if(options==='addMap'){WorldMap.maps[arguments[1]]=arguments[2]}else if(options==='set'&&apiParams[arguments[1]]){this.data('mapObject')['set'+arguments[1].charAt(0).toUpperCase()+arguments[1].substr(1)].apply(this.data('mapObject'),Array.prototype.slice.call(arguments,2))}else{$.extend(defaultParams,options);defaultParams.container=this;this.css({position:'relative',overflow:'hidden'});map=new WorldMap(defaultParams);this.data('mapObject',map);for(var e in apiEvents){if(defaultParams[e]){this.bind(apiEvents[e]+'.jqvmap',defaultParams[e])}}}};var VectorCanvas=function(width,height,params){this.mode=window.SVGAngle?'svg':'vml';this.params=params;if(this.mode=='svg'){this.createSvgNode=function(nodeName){return document.createElementNS(this.svgns,nodeName)}}else{try{if(!document.namespaces.rvml){document.namespaces.add("rvml","urn:schemas-microsoft-com:vml")}this.createVmlNode=function(tagName){return document.createElement('<rvml:'+tagName+' class="rvml">')}}catch(e){this.createVmlNode=function(tagName){return document.createElement('<'+tagName+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)")}if(this.mode=='svg'){this.canvas=this.createSvgNode('svg')}else{this.canvas=this.createVmlNode('group');this.canvas.style.position='absolute'}this.setSize(width,height)};VectorCanvas.prototype={svgns:"http://www.w3.org/2000/svg",mode:'svg',width:0,height:0,canvas:null,setSize:function(width,height){if(this.mode=='svg'){this.canvas.setAttribute('width',width);this.canvas.setAttribute('height',height)}else{this.canvas.style.width=width+"px";this.canvas.style.height=height+"px";this.canvas.coordsize=width+' '+height;this.canvas.coordorigin="0 0";if(this.rootGroup){var pathes=this.rootGroup.getElementsByTagName('shape');for(var i=0,l=pathes.length;i<l;i++){pathes[i].coordsize=width+' '+height;pathes[i].style.width=width+'px';pathes[i].style.height=height+'px'}this.rootGroup.coordsize=width+' '+height;this.rootGroup.style.width=width+'px';this.rootGroup.style.height=height+'px'}}this.width=width;this.height=height},createPath:function(config){var node;if(this.mode=='svg'){node=this.createSvgNode('path');node.setAttribute('d',config.path);if(this.params.borderColor!==null){node.setAttribute('stroke',this.params.borderColor)}if(this.params.borderWidth>0){node.setAttribute('stroke-width',this.params.borderWidth);node.setAttribute('stroke-linecap','round');node.setAttribute('stroke-linejoin','round')}if(this.params.borderOpacity>0){node.setAttribute('stroke-opacity',this.params.borderOpacity)}node.setFill=function(color){this.setAttribute("fill",color);if(this.getAttribute("original")===null){this.setAttribute("original",color)}};node.getFill=function(color){return this.getAttribute("fill")};node.getOriginalFill=function(){return this.getAttribute("original")};node.setOpacity=function(opacity){this.setAttribute('fill-opacity',opacity)}}else{node=this.createVmlNode('shape');node.coordorigin="0 0";node.coordsize=this.width+' '+this.height;node.style.width=this.width+'px';node.style.height=this.height+'px';node.fillcolor=WorldMap.defaultFillColor;node.stroked=false;node.path=VectorCanvas.pathSvgToVml(config.path);var scale=this.createVmlNode('skew');scale.on=true;scale.matrix='0.01,0,0,0.01,0,0';scale.offset='0,0';node.appendChild(scale);var fill=this.createVmlNode('fill');node.appendChild(fill);node.setFill=function(color){this.getElementsByTagName('fill')[0].color=color};node.getFill=function(color){return this.getElementsByTagName('fill')[0].color};node.setOpacity=function(opacity){this.getElementsByTagName('fill')[0].opacity=parseInt(opacity*100,10)+'%'}}return node},createGroup:function(isRoot){var node;if(this.mode=='svg'){node=this.createSvgNode('g')}else{node=this.createVmlNode('group');node.style.width=this.width+'px';node.style.height=this.height+'px';node.style.left='0px';node.style.top='0px';node.coordorigin="0 0";node.coordsize=this.width+' '+this.height}if(isRoot){this.rootGroup=node}return node},applyTransformParams:function(scale,transX,transY){if(this.mode=='svg'){this.rootGroup.setAttribute('transform','scale('+scale+') translate('+transX+', '+transY+')')}else{this.rootGroup.coordorigin=(this.width-transX)+','+(this.height-transY);this.rootGroup.coordsize=this.width/scale+','+this.height/scale}}};VectorCanvas.pathSvgToVml=function(path){var result='';var cx=0,cy=0,ctrlx,ctrly;return path.replace(/([MmLlHhVvCcSs])((?:-?(?:\d+)?(?:\.\d+)?,?\s?)+)/g,function(segment,letter,coords,index){coords=coords.replace(/(\d)-/g,'$1,-').replace(/\s+/g,',').split(',');if(!coords[0]){coords.shift()}for(var i=0,l=coords.length;i<l;i++){coords[i]=Math.round(100*coords[i])}switch(letter){case'm':cx+=coords[0];cy+=coords[1];return't'+coords.join(',');break;case'M':cx=coords[0];cy=coords[1];return'm'+coords.join(',');break;case'l':cx+=coords[0];cy+=coords[1];return'r'+coords.join(',');break;case'L':cx=coords[0];cy=coords[1];return'l'+coords.join(',');break;case'h':cx+=coords[0];return'r'+coords[0]+',0';break;case'H':cx=coords[0];return'l'+cx+','+cy;break;case'v':cy+=coords[0];return'r0,'+coords[0];break;case'V':cy=coords[0];return'l'+cx+','+cy;break;case'c':ctrlx=cx+coords[coords.length-4];ctrly=cy+coords[coords.length-3];cx+=coords[coords.length-2];cy+=coords[coords.length-1];return'v'+coords.join(',');break;case'C':ctrlx=coords[coords.length-4];ctrly=coords[coords.length-3];cx=coords[coords.length-2];cy=coords[coords.length-1];return'c'+coords.join(',');break;case's':coords.unshift(cy-ctrly);coords.unshift(cx-ctrlx);ctrlx=cx+coords[coords.length-4];ctrly=cy+coords[coords.length-3];cx+=coords[coords.length-2];cy+=coords[coords.length-1];return'v'+coords.join(',');break;case'S':coords.unshift(cy+cy-ctrly);coords.unshift(cx+cx-ctrlx);ctrlx=coords[coords.length-4];ctrly=coords[coords.length-3];cx=coords[coords.length-2];cy=coords[coords.length-1];return'c'+coords.join(',');break;default:return false;break}return''}).replace(/z/g,'')};var WorldMap=function(params){params=params||{};var map=this;var mapData=WorldMap.maps[params.map];this.container=params.container;this.defaultWidth=mapData.width;this.defaultHeight=mapData.height;this.color=params.color;this.hoverColor=params.hoverColor;this.setBackgroundColor(params.backgroundColor);this.width=params.container.width();this.height=params.container.height();this.resize();jQuery(window).resize(function(){map.width=params.container.width();map.height=params.container.height();map.resize();map.canvas.setSize(map.width,map.height);map.applyTransform()});this.canvas=new VectorCanvas(this.width,this.height,params);params.container.append(this.canvas.canvas);this.makeDraggable();this.rootGroup=this.canvas.createGroup(true);this.index=WorldMap.mapIndex;this.label=jQuery('<div/>').addClass('jqvmap-label').appendTo(jQuery('body'));if(params.enableZoom){jQuery('<div/>').addClass('jqvmap-zoomin').text('+').appendTo(params.container);jQuery('<div/>').addClass('jqvmap-zoomout').html('&#x2212;').appendTo(params.container)}map.countries=[];for(var key in mapData.pathes){var path=this.canvas.createPath({path:mapData.pathes[key].path});path.setFill(this.color);path.id='jqvmap'+map.index+'_'+key;map.countries[key]=path;jQuery(this.rootGroup).append(path);path.setAttribute('class','jqvmap-region');if(params.selectedRegion!==null){if(key.toLowerCase()==params.selectedRegion.toLowerCase()){path.setFill(params.selectedColor)}}}jQuery(params.container).delegate(this.canvas.mode=='svg'?'path':'shape','mouseover mouseout',function(e){var path=e.target,code=e.target.id.split('_').pop(),labelShowEvent=$.Event('labelShow.jqvmap'),regionMouseOverEvent=$.Event('regionMouseOver.jqvmap');if(e.type=='mouseover'){jQuery(params.container).trigger(regionMouseOverEvent,[code,mapData.pathes[code].name]);if(!regionMouseOverEvent.isDefaultPrevented()){if(params.hoverOpacity){path.setOpacity(params.hoverOpacity)}else if(params.hoverColor){path.currentFillColor=path.getFill()+'';path.setFill(params.hoverColor)}}if(params.showTooltip){map.label.text(mapData.pathes[code].name);jQuery(params.container).trigger(labelShowEvent,[map.label,code]);if(!labelShowEvent.isDefaultPrevented()){map.label.show();map.labelWidth=map.label.width();map.labelHeight=map.label.height()}}}else{path.setOpacity(1);if(path.currentFillColor){path.setFill(path.currentFillColor)}map.label.hide();jQuery(params.container).trigger('regionMouseOut.jqvmap',[code,mapData.pathes[code].name])}});jQuery(params.container).delegate(this.canvas.mode=='svg'?'path':'shape','click',function(e){for(var key in mapData.pathes){map.countries[key].currentFillColor=map.countries[key].getOriginalFill();map.countries[key].setFill(map.countries[key].getOriginalFill())}var path=e.target;var code=e.target.id.split('_').pop();jQuery(params.container).trigger('regionClick.jqvmap',[code,mapData.pathes[code].name]);path.currentFillColor=params.selectedColor;path.setFill(params.selectedColor)});if(params.showTooltip){params.container.mousemove(function(e){if(map.label.is(':visible')){map.label.css({left:e.pageX-15-map.labelWidth,top:e.pageY-15-map.labelHeight})}})}this.setColors(params.colors);this.canvas.canvas.appendChild(this.rootGroup);this.applyTransform();this.colorScale=new ColorScale(params.scaleColors,params.normalizeFunction,params.valueMin,params.valueMax);if(params.values){this.values=params.values;this.setValues(params.values)}this.bindZoomButtons();WorldMap.mapIndex++};WorldMap.prototype={transX:0,transY:0,scale:1,baseTransX:0,baseTransY:0,baseScale:1,width:0,height:0,countries:{},countriesColors:{},countriesData:{},zoomStep:1.4,zoomMaxStep:4,zoomCurStep:1,setColors:function(key,color){if(typeof key=='string'){this.countries[key].setFill(color);this.countries[key].setAttribute("original",color)}else{var colors=key;for(var code in colors){if(this.countries[code]){this.countries[code].setFill(colors[code]);this.countries[code].setAttribute("original",colors[code])}}}},setValues:function(values){var max=0,min=Number.MAX_VALUE,val;for(var cc in values){val=parseFloat(values[cc]);if(val>max){max=values[cc]}if(val&&val<min){min=val}}this.colorScale.setMin(min);this.colorScale.setMax(max);var colors={};for(cc in values){val=parseFloat(values[cc]);if(val){colors[cc]=this.colorScale.getColor(val)}else{colors[cc]=this.color}}this.setColors(colors);this.values=values},setBackgroundColor:function(backgroundColor){this.container.css('background-color',backgroundColor)},setScaleColors:function(colors){this.colorScale.setColors(colors);if(this.values){this.setValues(this.values)}},setNormalizeFunction:function(f){this.colorScale.setNormalizeFunction(f);if(this.values){this.setValues(this.values)}},resize:function(){var curBaseScale=this.baseScale;if(this.width/this.height>this.defaultWidth/this.defaultHeight){this.baseScale=this.height/this.defaultHeight;this.baseTransX=Math.abs(this.width-this.defaultWidth*this.baseScale)/(2*this.baseScale)}else{this.baseScale=this.width/this.defaultWidth;this.baseTransY=Math.abs(this.height-this.defaultHeight*this.baseScale)/(2*this.baseScale)}this.scale*=this.baseScale/curBaseScale;this.transX*=this.baseScale/curBaseScale;this.transY*=this.baseScale/curBaseScale},reset:function(){this.countryTitle.reset();for(var key in this.countries){this.countries[key].setFill(WorldMap.defaultColor)}this.scale=this.baseScale;this.transX=this.baseTransX;this.transY=this.baseTransY;this.applyTransform()},applyTransform:function(){var maxTransX,maxTransY,minTransX,minTransY;if(this.defaultWidth*this.scale<=this.width){maxTransX=(this.width-this.defaultWidth*this.scale)/(2*this.scale);minTransX=(this.width-this.defaultWidth*this.scale)/(2*this.scale)}else{maxTransX=0;minTransX=(this.width-this.defaultWidth*this.scale)/this.scale}if(this.defaultHeight*this.scale<=this.height){maxTransY=(this.height-this.defaultHeight*this.scale)/(2*this.scale);minTransY=(this.height-this.defaultHeight*this.scale)/(2*this.scale)}else{maxTransY=0;minTransY=(this.height-this.defaultHeight*this.scale)/this.scale}if(this.transY>maxTransY){this.transY=maxTransY}else if(this.transY<minTransY){this.transY=minTransY}if(this.transX>maxTransX){this.transX=maxTransX}else if(this.transX<minTransX){this.transX=minTransX}this.canvas.applyTransformParams(this.scale,this.transX,this.transY)},makeDraggable:function(){var mouseDown=false;var oldPageX,oldPageY;var self=this;this.container.mousemove(function(e){if(mouseDown){var curTransX=self.transX;var curTransY=self.transY;self.transX-=(oldPageX-e.pageX)/self.scale;self.transY-=(oldPageY-e.pageY)/self.scale;self.applyTransform();oldPageX=e.pageX;oldPageY=e.pageY}return false}).mousedown(function(e){mouseDown=true;oldPageX=e.pageX;oldPageY=e.pageY;return false}).mouseup(function(){mouseDown=false;return false})},bindZoomButtons:function(){var map=this;var sliderDelta=(jQuery('#zoom').innerHeight()-6*2-15*2-3*2-7-6)/(this.zoomMaxStep-this.zoomCurStep);this.container.find('.jqvmap-zoomin').click(function(){if(map.zoomCurStep<map.zoomMaxStep){var curTransX=map.transX;var curTransY=map.transY;var curScale=map.scale;map.transX-=(map.width/map.scale-map.width/ (map.scale * map.zoomStep)) /2;map.transY-=(map.height/map.scale-map.height/ (map.scale * map.zoomStep)) /2;map.setScale(map.scale*map.zoomStep);map.zoomCurStep++;jQuery('#zoomSlider').css('top',parseInt(jQuery('#zoomSlider').css('top'),10)-sliderDelta)}});this.container.find('.jqvmap-zoomout').click(function(){if(map.zoomCurStep>1){var curTransX=map.transX;var curTransY=map.transY;var curScale=map.scale;map.transX+=(map.width/(map.scale/ map.zoomStep) - map.width/map.scale)/2;map.transY+=(map.height/(map.scale/ map.zoomStep) - map.height/map.scale)/2;map.setScale(map.scale/map.zoomStep);map.zoomCurStep--;jQuery('#zoomSlider').css('top',parseInt(jQuery('#zoomSlider').css('top'),10)+sliderDelta)}})},setScale:function(scale){this.scale=scale;this.applyTransform()},getCountryPath:function(cc){return jQuery('#'+cc)[0]}};WorldMap.xlink="http://www.w3.org/1999/xlink";WorldMap.mapIndex=1;WorldMap.maps={};var ColorScale=function(colors,normalizeFunction,minValue,maxValue){if(colors){this.setColors(colors)}if(normalizeFunction){this.setNormalizeFunction(normalizeFunction)}if(minValue){this.setMin(minValue)}if(minValue){this.setMax(maxValue)}};ColorScale.prototype={colors:[],setMin:function(min){this.clearMinValue=min;if(typeof this.normalize==='function'){this.minValue=this.normalize(min)}else{this.minValue=min}},setMax:function(max){this.clearMaxValue=max;if(typeof this.normalize==='function'){this.maxValue=this.normalize(max)}else{this.maxValue=max}},setColors:function(colors){for(var i=0;i<colors.length;i++){colors[i]=ColorScale.rgbToArray(colors[i])}this.colors=colors},setNormalizeFunction:function(f){if(f==='polynomial'){this.normalize=function(value){return Math.pow(value,0.2)}}else if(f==='linear'){delete this.normalize}else{this.normalize=f}this.setMin(this.clearMinValue);this.setMax(this.clearMaxValue)},getColor:function(value){if(typeof this.normalize==='function'){value=this.normalize(value)}var lengthes=[];var fullLength=0;var l;for(var i=0;i<this.colors.length-1;i++){l=this.vectorLength(this.vectorSubtract(this.colors[i+1],this.colors[i]));lengthes.push(l);fullLength+=l}var c=(this.maxValue-this.minValue)/fullLength;for(i=0;i<lengthes.length;i++){lengthes[i]*=c}i=0;value-=this.minValue;while(value-lengthes[i]>=0){value-=lengthes[i];i++}var color;if(i==this.colors.length-1){color=this.vectorToNum(this.colors[i]).toString(16)}else{color=(this.vectorToNum(this.vectorAdd(this.colors[i],this.vectorMult(this.vectorSubtract(this.colors[i+1],this.colors[i]),(value)/(lengthes[i]))))).toString(16)}while(color.length<6){color='0'+color}return'#'+color},vectorToNum:function(vector){var num=0;for(var i=0;i<vector.length;i++){num+=Math.round(vector[i])*Math.pow(256,vector.length-i-1)}return num},vectorSubtract:function(vector1,vector2){var vector=[];for(var i=0;i<vector1.length;i++){vector[i]=vector1[i]-vector2[i]}return vector},vectorAdd:function(vector1,vector2){var vector=[];for(var i=0;i<vector1.length;i++){vector[i]=vector1[i]+vector2[i]}return vector},vectorMult:function(vector,num){var result=[];for(var i=0;i<vector.length;i++){result[i]=vector[i]*num}return result},vectorLength:function(vector){var result=0;for(var i=0;i<vector.length;i++){result+=vector[i]*vector[i]}return Math.sqrt(result)}};ColorScale.arrayToRgb=function(ar){var rgb='#';var d;for(var i=0;i<ar.length;i++){d=ar[i].toString(16);rgb+=d.length==1?'0'+d:d}return rgb};ColorScale.rgbToArray=function(rgb){rgb=rgb.substr(1);return[parseInt(rgb.substr(0,2),16),parseInt(rgb.substr(2,2),16),parseInt(rgb.substr(4,2),16)]}})(jQuery);

!function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return"string"==typeof a?a.split(" "):a}function e(a,b){var c=t.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),t.elements=c+" "+a,j(b)}function f(a){var b=s[a[q]];return b||(b={},r++,a[q]=r,s[r]=b),b}function g(a,c,d){if(c||(c=b),l)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():p.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||o.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),l)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return!t.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||i(a,d),a}var k,l,m="3.7.2",n=a.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q="_html5shiv",r=0,s={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden"in a,l=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){k=!0,l=!0}}();var t={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:n.shivCSS!==!1,supportsUnknownElements:l,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b)}(this,document);
angular.module("ngDragDrop",[])
    .directive("uiDraggable", [
        '$parse',
        '$rootScope',
        function ($parse, $rootScope) {
            return function (scope, element, attrs) {
                if (window.jQuery && !window.jQuery.event.props.dataTransfer) {
                    window.jQuery.event.props.push('dataTransfer');
                }
                element.attr("draggable", false);
                attrs.$observe("uiDraggable", function (newValue) {
                    element.attr("draggable", newValue);
                });
                var dragData = "";
                scope.$watch(attrs.drag, function (newValue) {
                    dragData = newValue;
                });
                element.bind("dragstart", function (e) {
                    var sendData = angular.toJson(dragData);
                    var sendChannel = attrs.dragChannel || "defaultchannel";
                    e.dataTransfer.setData("Text", sendData);
                    $rootScope.$broadcast("ANGULAR_DRAG_START", sendChannel);

                });

                element.bind("dragend", function (e) {
                    var sendChannel = attrs.dragChannel || "defaultchannel";
                    $rootScope.$broadcast("ANGULAR_DRAG_END", sendChannel);
                    if (e.dataTransfer && e.dataTransfer.dropEffect !== "none") {
                        if (attrs.onDropSuccess) {
                            var fn = $parse(attrs.onDropSuccess);
                            scope.$apply(function () {
                                fn(scope, {$event: e});
                            });
                        }
                    }
                });


            };
        }
    ])
    .directive("uiOnDrop", [
        '$parse',
        '$rootScope',
        function ($parse, $rootScope) {
            return function (scope, element, attr) {
                var dropChannel = "defaultchannel";
                var dragChannel = "";
                var dragEnterClass = attr.dragEnterClass || "on-drag-enter";
                var dragHoverClass = attr.dragHoverClass || "on-drag-hover";

                function onDragOver(e) {

                    if (e.preventDefault) {
                        e.preventDefault(); // Necessary. Allows us to drop.
                    }

                    if (e.stopPropagation) {
                        e.stopPropagation();
                    }
                    e.dataTransfer.dropEffect = 'move';
                    return false;
                }

                function onDragEnter(e) {
                    $rootScope.$broadcast("ANGULAR_HOVER", dropChannel);
                    element.addClass(dragHoverClass);
                }

                function onDrop(e) {
                    if (e.preventDefault) {
                        e.preventDefault(); // Necessary. Allows us to drop.
                    }
                    if (e.stopPropagation) {
                        e.stopPropagation(); // Necessary. Allows us to drop.
                    }
                    var data = e.dataTransfer.getData("Text");
                    data = angular.fromJson(data);
                    var fn = $parse(attr.uiOnDrop);
                    scope.$apply(function () {
                        fn(scope, {$data: data, $event: e});
                    });
                    element.removeClass(dragEnterClass);
                }


                $rootScope.$on("ANGULAR_DRAG_START", function (event, channel) {
                    dragChannel = channel;
                    if (dropChannel === channel) {

                        element.bind("dragover", onDragOver);
                        element.bind("dragenter", onDragEnter);

                        element.bind("drop", onDrop);
                        element.addClass(dragEnterClass);
                    }

                });



                $rootScope.$on("ANGULAR_DRAG_END", function (e, channel) {
                    dragChannel = "";
                    if (dropChannel === channel) {

                        element.unbind("dragover", onDragOver);
                        element.unbind("dragenter", onDragEnter);

                        element.unbind("drop", onDrop);
                        element.removeClass(dragHoverClass);
                        element.removeClass(dragEnterClass);
                    }
                });


                $rootScope.$on("ANGULAR_HOVER", function (e, channel) {
                    if (dropChannel === channel) {
                      element.removeClass(dragHoverClass);
                    }
                });


                attr.$observe('dropChannel', function (value) {
                    if (value) {
                        dropChannel = value;
                    }
                });


            };
        }
    ]);

/*! jQuery spinner - v0.1.5 - 2013-12-03
* https://github.com/xixilive/jquery-spinner
* Copyright (c) 2013 xixilive; Licensed MIT */
!function(a){"use strict";var b,c=function(b,d){return this.$el=b,this.options=a.extend({},c.rules.defaults,c.rules[d.rule]||{},d||{}),this.min=parseFloat(this.options.min)||0,this.max=parseFloat(this.options.max)||0,this.$el.on("focus.spinner",a.proxy(function(b){b.preventDefault(),a(document).trigger("mouseup.spinner"),this.oldValue=this.value()},this)).on("change.spinner",a.proxy(function(a){a.preventDefault(),this.value(this.$el.val())},this)).on("keydown.spinner",a.proxy(function(a){var b={38:"up",40:"down"}[a.which];b&&(a.preventDefault(),this.spin(b))},this)),this.oldValue=this.value(),this.value(this.$el.val()),this};c.rules={defaults:{min:null,max:null,step:1,precision:0},currency:{min:0,max:null,step:.01,precision:2},quantity:{min:1,max:999,step:1,precision:0},percent:{min:1,max:100,step:1,precision:0},month:{min:1,max:12,step:1,precision:0},day:{min:1,max:31,step:1,precision:0},hour:{min:0,max:23,step:1,precision:0},minute:{min:1,max:59,step:1,precision:0},second:{min:1,max:59,step:1,precision:0}},c.prototype={spin:function(a){switch(this.oldValue=this.value(),a){case"up":this.value(this.oldValue+Number(this.options.step,10));break;case"down":this.value(this.oldValue-Number(this.options.step,10))}},value:function(c){if(null===c||void 0===c)return this.numeric(this.$el.val());c=this.numeric(c);var e=this.validate(c);0!==e&&(c=-1===e?this.min:this.max),this.$el.val(c.toFixed(this.options.precision)),this.oldValue!==this.value()&&(this.$el.trigger("changing.spinner",[this.value(),this.oldValue]),clearTimeout(b),b=setTimeout(a.proxy(function(){this.$el.trigger("changed.spinner",[this.value(),this.oldValue])},this),d.delay))},numeric:function(a){return a=this.options.precision>0?parseFloat(a,10):parseInt(a,10),a||this.options.min||0},validate:function(a){return null!==this.options.min&&a<this.min?-1:null!==this.options.max&&a>this.max?1:0}};var d=function(b,d){this.$el=b,this.$spinning=a("[data-spin='spinner']",this.$el),0===this.$spinning.length&&(this.$spinning=a(":input[type='text']",this.$el)),this.spinning=new c(this.$spinning,this.$spinning.data()),this.$el.on("click.spinner","[data-spin='up'],[data-spin='down']",a.proxy(this.spin,this)).on("mousedown.spinner","[data-spin='up'],[data-spin='down']",a.proxy(this.spin,this)),a(document).on("mouseup.spinner",a.proxy(function(){clearTimeout(this.spinTimeout),clearInterval(this.spinInterval)},this)),d=a.extend({},d),d.delay&&this.delay(d.delay),d.changed&&this.changed(d.changed),d.changing&&this.changing(d.changing)};d.delay=500,d.prototype={constructor:d,spin:function(b){var c=a(b.currentTarget).data("spin");switch(b.type){case"click":b.preventDefault(),this.spinning.spin(c);break;case"mousedown":1===b.which&&(this.spinTimeout=setTimeout(a.proxy(this.beginSpin,this,c),300))}},delay:function(a){var b=parseInt(a,10);b>0&&(this.constructor.delay=b+100)},value:function(){return this.spinning.value()},changed:function(a){this.bindHandler("changed.spinner",a)},changing:function(a){this.bindHandler("changing.spinner",a)},bindHandler:function(b,c){a.isFunction(c)?this.$spinning.on(b,c):this.$spinning.off(b)},beginSpin:function(b){this.spinInterval=setInterval(a.proxy(this.spinning.spin,this.spinning,b),100)}},a.fn.spinner=function(b,c){return this.each(function(){var e=a(this),f=e.data("spinner");f||e.data("spinner",f=new d(e,a.extend({},e.data(),b))),("delay"===b||"changed"===b||"changing"===b)&&f[b](c),"spin"===b&&c&&f.spinning.spin(c)})},a(function(){a('[data-trigger="spinner"]').spinner()})}(jQuery);
;
!function(a){function b(a,b){if(g[a]){var d=c(this);return g[a].apply(d,b)}throw new Error("method '"+a+"()' does not exist for slider.")}function c(b){var c=a(b).data("slider");if(c&&c instanceof f)return c;throw new Error(e.callingContextNotSliderInstance)}function d(b){var c=a(this),d=c.data("slider"),e="object"==typeof b&&b;return d||c.data("slider",d=new f(this,a.extend({},a.fn.slider.defaults,e))),c}var e={formatInvalidInputErrorMsg:function(a){return"Invalid input value '"+a+"' passed in"},callingContextNotSliderInstance:"Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"},f=function(b,c){var d=this.element=a(b).hide(),e=d.outerWidth(),f=!1,g=this.element.parent();g.hasClass("slider")===!0?(f=!0,this.picker=g):this.picker=a('<div class="slider"><div class="slider-track"><div class="slider-selection"></div><div class="slider-handle"></div><div class="slider-handle"></div></div><div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div></div>').insertBefore(this.element).append(this.element),this.id=this.element.data("slider-id")||c.id,this.id&&(this.picker[0].id=this.id),"undefined"!=typeof Modernizr&&Modernizr.touch&&(this.touchCapable=!0);var h=this.element.data("slider-tooltip")||c.tooltip;switch(this.tooltip=this.picker.find(".tooltip"),this.tooltipInner=this.tooltip.find("div.tooltip-inner"),this.orientation=this.element.data("slider-orientation")||c.orientation,this.orientation){case"vertical":this.picker.addClass("slider-vertical"),this.stylePos="top",this.mousePos="pageY",this.sizePos="offsetHeight",this.tooltip.addClass("right")[0].style.left="100%";break;default:this.picker.addClass("slider-horizontal").css("width",e),this.orientation="horizontal",this.stylePos="left",this.mousePos="pageX",this.sizePos="offsetWidth",this.tooltip.addClass("top")[0].style.top=-this.tooltip.outerHeight()-14+"px"}["min","max","step","value"].forEach(function(a){this[a]="undefined"!=typeof d.data("slider-"+a)?d.data("slider-"+a):"undefined"!=typeof c[a]?c[a]:"undefined"!=typeof d.prop(a)?d.prop(a):0},this),this.value instanceof Array&&(this.range=!0),this.selection=this.element.data("slider-selection")||c.selection,this.selectionEl=this.picker.find(".slider-selection"),"none"===this.selection&&this.selectionEl.addClass("hide"),this.selectionElStyle=this.selectionEl[0].style,this.handle1=this.picker.find(".slider-handle:first"),this.handle1Stype=this.handle1[0].style,this.handle2=this.picker.find(".slider-handle:last"),this.handle2Stype=this.handle2[0].style;var i=this.element.data("slider-handle")||c.handle;switch(i){case"round":this.handle1.addClass("round"),this.handle2.addClass("round");break;case"triangle":this.handle1.addClass("triangle"),this.handle2.addClass("triangle")}if(this.range?(this.value[0]=Math.max(this.min,Math.min(this.max,this.value[0])),this.value[1]=Math.max(this.min,Math.min(this.max,this.value[1]))):(this.value=[Math.max(this.min,Math.min(this.max,this.value))],this.handle2.addClass("hide"),this.value[1]="after"===this.selection?this.max:this.min),this.diff=this.max-this.min,this.percentage=[100*(this.value[0]-this.min)/this.diff,100*(this.value[1]-this.min)/this.diff,100*this.step/this.diff],this.offset=this.picker.offset(),this.size=this.picker[0][this.sizePos],this.formater=c.formater,this.reversed=this.element.data("slider-reversed")||c.reversed,this.layout(),this.touchCapable?this.picker.on({touchstart:a.proxy(this.mousedown,this)}):this.picker.on({mousedown:a.proxy(this.mousedown,this)}),"hide"===h?this.tooltip.addClass("hide"):"always"===h?(this.showTooltip(),this.alwaysShowTooltip=!0):this.picker.on({mouseenter:a.proxy(this.showTooltip,this),mouseleave:a.proxy(this.hideTooltip,this)}),f===!0){var j=this.getValue(),k=this.calculateValue();this.element.trigger({type:"slide",value:k}).data("value",k).prop("value",k),j!==k&&this.element.trigger({type:"slideChange","new":k,old:j}).data("value",k).prop("value",k)}this.enabled=c.enabled&&(void 0===this.element.data("slider-enabled")||this.element.data("slider-enabled")===!0),this.enabled||this.disable()};f.prototype={constructor:f,over:!1,inDrag:!1,showTooltip:function(){this.tooltip.addClass("in"),this.over=!0},hideTooltip:function(){this.inDrag===!1&&this.alwaysShowTooltip!==!0&&this.tooltip.removeClass("in"),this.over=!1},layout:function(){var a;a=this.reversed?[100-this.percentage[0],this.percentage[1]]:[this.percentage[0],this.percentage[1]],this.handle1Stype[this.stylePos]=a[0]+"%",this.handle2Stype[this.stylePos]=a[1]+"%","vertical"===this.orientation?(this.selectionElStyle.top=Math.min(a[0],a[1])+"%",this.selectionElStyle.height=Math.abs(a[0]-a[1])+"%"):(this.selectionElStyle.left=Math.min(a[0],a[1])+"%",this.selectionElStyle.width=Math.abs(a[0]-a[1])+"%"),this.range?(this.tooltipInner.text(this.formater(this.value[0])+" : "+this.formater(this.value[1])),this.tooltip[0].style[this.stylePos]=this.size*(a[0]+(a[1]-a[0])/2)/100-("vertical"===this.orientation?this.tooltip.outerHeight()/2:this.tooltip.outerWidth()/2)+"px"):(this.tooltipInner.text(this.formater(this.value[0])),this.tooltip[0].style[this.stylePos]=this.size*a[0]/100-("vertical"===this.orientation?this.tooltip.outerHeight()/2:this.tooltip.outerWidth()/2)+"px")},mousedown:function(b){if(!this.isEnabled())return!1;this.touchCapable&&"touchstart"===b.type&&(b=b.originalEvent),this.offset=this.picker.offset(),this.size=this.picker[0][this.sizePos];var c=this.getPercentage(b);if(this.range){var d=Math.abs(this.percentage[0]-c),e=Math.abs(this.percentage[1]-c);this.dragged=e>d?0:1}else this.dragged=0;this.percentage[this.dragged]=this.reversed?100-c:c,this.layout(),this.touchCapable?a(document).on({touchmove:a.proxy(this.mousemove,this),touchend:a.proxy(this.mouseup,this)}):a(document).on({mousemove:a.proxy(this.mousemove,this),mouseup:a.proxy(this.mouseup,this)}),this.inDrag=!0;var f=this.calculateValue();return this.setValue(f),this.element.trigger({type:"slideStart",value:f}).trigger({type:"slide",value:f}),!1},mousemove:function(a){if(!this.isEnabled())return!1;this.touchCapable&&"touchmove"===a.type&&(a=a.originalEvent);var b=this.getPercentage(a);this.range&&(0===this.dragged&&this.percentage[1]<b?(this.percentage[0]=this.percentage[1],this.dragged=1):1===this.dragged&&this.percentage[0]>b&&(this.percentage[1]=this.percentage[0],this.dragged=0)),this.percentage[this.dragged]=this.reversed?100-b:b,this.layout();var c=this.calculateValue();return this.setValue(c),this.element.trigger({type:"slide",value:c}).data("value",c).prop("value",c),!1},mouseup:function(){if(!this.isEnabled())return!1;this.touchCapable?a(document).off({touchmove:this.mousemove,touchend:this.mouseup}):a(document).off({mousemove:this.mousemove,mouseup:this.mouseup}),this.inDrag=!1,this.over===!1&&this.hideTooltip();var b=this.calculateValue();return this.layout(),this.element.data("value",b).prop("value",b).trigger({type:"slideStop",value:b}),!1},calculateValue:function(){var a;return this.range?(a=[Math.max(this.min,this.min+Math.round(this.diff*this.percentage[0]/100/this.step)*this.step),Math.min(this.max,this.min+Math.round(this.diff*this.percentage[1]/100/this.step)*this.step)],this.value=a):(a=this.min+Math.round(this.diff*this.percentage[0]/100/this.step)*this.step,a<this.min?a=this.min:a>this.max&&(a=this.max),a=parseFloat(a),this.value=[a,this.value[1]]),a},getPercentage:function(a){this.touchCapable&&(a=a.touches[0]);var b=100*(a[this.mousePos]-this.offset[this.stylePos])/this.size;return b=Math.round(b/this.percentage[2])*this.percentage[2],Math.max(0,Math.min(100,b))},getValue:function(){return this.range?this.value:this.value[0]},setValue:function(a){this.value=this.validateInputValue(a),this.range?(this.value[0]=Math.max(this.min,Math.min(this.max,this.value[0])),this.value[1]=Math.max(this.min,Math.min(this.max,this.value[1]))):(this.value=[Math.max(this.min,Math.min(this.max,this.value))],this.handle2.addClass("hide"),this.value[1]="after"===this.selection?this.max:this.min),this.diff=this.max-this.min,this.percentage=[100*(this.value[0]-this.min)/this.diff,100*(this.value[1]-this.min)/this.diff,100*this.step/this.diff],this.layout()},validateInputValue:function(a){if("number"==typeof a)return a;if(a instanceof Array)return a.forEach(function(a){if("number"!=typeof a)throw new Error(e.formatInvalidInputErrorMsg(a))}),a;throw new Error(e.formatInvalidInputErrorMsg(a))},destroy:function(){this.element.show().insertBefore(this.picker),this.picker.remove(),a(this.element).removeData("slider"),a(this.element).off()},disable:function(){this.enabled=!1,this.picker.addClass("slider-disabled"),this.element.trigger("slideDisabled")},enable:function(){this.enabled=!0,this.picker.removeClass("slider-disabled"),this.element.trigger("slideEnabled")},toggle:function(){this.enabled?this.disable():this.enable()},isEnabled:function(){return this.enabled}};var g={getValue:f.prototype.getValue,setValue:f.prototype.setValue,destroy:f.prototype.destroy,disable:f.prototype.disable,enable:f.prototype.enable,toggle:f.prototype.toggle,isEnabled:f.prototype.isEnabled};a.fn.slider=function(a){if("string"==typeof a){var c=Array.prototype.slice.call(arguments,1);return b.call(this,a,c)}return d.call(this,a)},a.fn.slider.defaults={min:0,max:10,step:1,orientation:"horizontal",value:5,selection:"before",tooltip:"show",handle:"round",reversed:!1,enabled:!0,formater:function(a){return a}},a.fn.slider.Constructor=f}(window.jQuery);
;
/*!
 * jQuery Steps v1.0.7 - 05/07/2014
 * Copyright (c) 2014 Rafael Staib (http://www.jquery-steps.com)
 * Licensed under MIT http://www.opensource.org/licenses/MIT
 */
!function(a,b){function c(a,b){o(a).push(b)}function d(d,e,f){var g=d.children(e.headerTag),h=d.children(e.bodyTag);g.length>h.length?R(Z,"contents"):g.length<h.length&&R(Z,"titles");var i=e.startIndex;if(f.stepCount=g.length,e.saveState&&a.cookie){var j=a.cookie(U+q(d)),k=parseInt(j,0);!isNaN(k)&&k<f.stepCount&&(i=k)}f.currentIndex=i,g.each(function(e){var f=a(this),g=h.eq(e),i=g.data("mode"),j=null==i?$.html:r($,/^\s*$/.test(i)||isNaN(i)?i:parseInt(i,0)),k=j===$.html||g.data("url")===b?"":g.data("url"),l=j!==$.html&&"1"===g.data("loaded"),m=a.extend({},bb,{title:f.html(),content:j===$.html?g.html():"",contentUrl:k,contentMode:j,contentLoaded:l});c(d,m)})}function e(a){a.triggerHandler("canceled")}function f(a,b){return a.currentIndex-b}function g(b,c){var d=i(b);b.unbind(d).removeData("uid").removeData("options").removeData("state").removeData("steps").removeData("eventNamespace").find(".actions a").unbind(d),b.removeClass(c.clearFixCssClass+" vertical");var e=b.find(".content > *");e.removeData("loaded").removeData("mode").removeData("url"),e.removeAttr("id").removeAttr("role").removeAttr("tabindex").removeAttr("class").removeAttr("style")._removeAria("labelledby")._removeAria("hidden"),b.find(".content > [data-mode='async'],.content > [data-mode='iframe']").empty();var f=a('<{0} class="{1}"></{0}>'.format(b.get(0).tagName,b.attr("class"))),g=b._id();return null!=g&&""!==g&&f._id(g),f.html(b.find(".content").html()),b.after(f),b.remove(),f}function h(a,b){var c=a.find(".steps li").eq(b.currentIndex);a.triggerHandler("finishing",[b.currentIndex])?(c.addClass("done").removeClass("error"),a.triggerHandler("finished",[b.currentIndex])):c.addClass("error")}function i(a){var b=a.data("eventNamespace");return null==b&&(b="."+q(a),a.data("eventNamespace",b)),b}function j(a,b){var c=q(a);return a.find("#"+c+V+b)}function k(a,b){var c=q(a);return a.find("#"+c+W+b)}function l(a,b){var c=q(a);return a.find("#"+c+X+b)}function m(a){return a.data("options")}function n(a){return a.data("state")}function o(a){return a.data("steps")}function p(a,b){var c=o(a);return(0>b||b>=c.length)&&R(Y),c[b]}function q(a){var b=a.data("uid");return null==b&&(b=a._id(),null==b&&(b="steps-uid-".concat(T),a._id(b)),T++,a.data("uid",b)),b}function r(a,c){if(S("enumType",a),S("keyOrValue",c),"string"==typeof c){var d=a[c];return d===b&&R("The enum key '{0}' does not exist.",c),d}if("number"==typeof c){for(var e in a)if(a[e]===c)return c;R("Invalid enum value '{0}'.",c)}else R("Invalid key or value type.")}function s(a,b,c){return B(a,b,c,v(c,1))}function t(a,b,c){return B(a,b,c,f(c,1))}function u(a,b,c,d){if((0>d||d>=c.stepCount)&&R(Y),!(b.forceMoveForward&&d<c.currentIndex)){var e=c.currentIndex;return a.triggerHandler("stepChanging",[c.currentIndex,d])?(c.currentIndex=d,O(a,b,c),E(a,b,c,e),D(a,b,c),A(a,b,c),P(a,b,c,d,e),a.triggerHandler("stepChanged",[d,e])):a.find(".steps li").eq(e).addClass("error"),!0}}function v(a,b){return a.currentIndex+b}function w(b){var c=a.extend(!0,{},cb,b);return this.each(function(){var b=a(this),e={currentIndex:c.startIndex,currentStep:null,stepCount:0,transitionElement:null};b.data("options",c),b.data("state",e),b.data("steps",[]),d(b,c,e),J(b,c,e),G(b,c),c.autoFocus&&0===T&&j(b,c.startIndex).focus()})}function x(b,c,d,e,f){(0>e||e>d.stepCount)&&R(Y),f=a.extend({},bb,f),y(b,e,f),d.currentIndex!==d.stepCount&&d.currentIndex>=e&&(d.currentIndex++,O(b,c,d)),d.stepCount++;var g=b.find(".content"),h=a("<{0}>{1}</{0}>".format(c.headerTag,f.title)),i=a("<{0}></{0}>".format(c.bodyTag));return(null==f.contentMode||f.contentMode===$.html)&&i.html(f.content),0===e?g.prepend(i).prepend(h):k(b,e-1).after(i).after(h),K(b,d,i,e),N(b,c,d,h,e),F(b,c,d,e),e===d.currentIndex&&E(b,c,d),D(b,c,d),b}function y(a,b,c){o(a).splice(b,0,c)}function z(b){var c=a(this),d=m(c),e=n(c);if(d.suppressPaginationOnFocus&&c.find(":focus").is(":input"))return b.preventDefault(),!1;var f={left:37,right:39};b.keyCode===f.left?(b.preventDefault(),t(c,d,e)):b.keyCode===f.right&&(b.preventDefault(),s(c,d,e))}function A(b,c,d){if(d.stepCount>0){var e=p(b,d.currentIndex);if(!c.enableContentCache||!e.contentLoaded)switch(r($,e.contentMode)){case $.iframe:b.find(".content > .body").eq(d.currentIndex).empty().html('<iframe src="'+e.contentUrl+'" frameborder="0" scrolling="no" />').data("loaded","1");break;case $.async:var f=k(b,d.currentIndex)._aria("busy","true").empty().append(M(c.loadingTemplate,{text:c.labels.loading}));a.ajax({url:e.contentUrl,cache:!1}).done(function(a){f.empty().html(a)._aria("busy","false").data("loaded","1")})}}}function B(a,b,c,d){var e=c.currentIndex;if(d>=0&&d<c.stepCount&&!(b.forceMoveForward&&d<c.currentIndex)){var f=j(a,d),g=f.parent(),h=g.hasClass("disabled");return g._enableAria(),f.click(),e===c.currentIndex&&h?(g._enableAria(!1),!1):!0}return!1}function C(b){b.preventDefault();var c=a(this),d=c.parent().parent().parent().parent(),f=m(d),g=n(d),i=c.attr("href");switch(i.substring(i.lastIndexOf("#")+1)){case"cancel":e(d);break;case"finish":h(d,g);break;case"next":s(d,f,g);break;case"previous":t(d,f,g)}}function D(a,b,c){if(b.enablePagination){var d=a.find(".actions a[href$='#finish']").parent(),e=a.find(".actions a[href$='#next']").parent();if(!b.forceMoveForward){var f=a.find(".actions a[href$='#previous']").parent();f._enableAria(c.currentIndex>0)}b.enableFinishButton&&b.showFinishButtonAlways?(d._enableAria(c.stepCount>0),e._enableAria(c.stepCount>1&&c.stepCount>c.currentIndex+1)):(d._showAria(b.enableFinishButton&&c.stepCount===c.currentIndex+1),e._showAria(0===c.stepCount||c.stepCount>c.currentIndex+1)._enableAria(c.stepCount>c.currentIndex+1||!b.enableFinishButton))}}function E(b,c,d,e){var f=j(b,d.currentIndex),g=a('<span class="current-info audible">'+c.labels.current+" </span>"),h=b.find(".content > .title");if(null!=e){var i=j(b,e);i.parent().addClass("done").removeClass("error")._selectAria(!1),h.eq(e).removeClass("current").next(".body").removeClass("current"),g=i.find(".current-info"),f.focus()}f.prepend(g).parent()._selectAria().removeClass("done")._enableAria(),h.eq(d.currentIndex).addClass("current").next(".body").addClass("current")}function F(a,b,c,d){for(var e=q(a),f=d;f<c.stepCount;f++){var g=e+V+f,h=e+W+f,i=e+X+f,j=a.find(".title").eq(f)._id(i);a.find(".steps a").eq(f)._id(g)._aria("controls",h).attr("href","#"+i).html(M(b.titleTemplate,{index:f+1,title:j.html()})),a.find(".body").eq(f)._id(h)._aria("labelledby",i)}}function G(a,b){var c=i(a);a.bind("canceled"+c,b.onCanceled),a.bind("finishing"+c,b.onFinishing),a.bind("finished"+c,b.onFinished),a.bind("stepChanging"+c,b.onStepChanging),a.bind("stepChanged"+c,b.onStepChanged),b.enableKeyNavigation&&a.bind("keyup"+c,z),a.find(".actions a").bind("click"+c,C)}function H(a,b,c,d){return 0>d||d>=c.stepCount||c.currentIndex===d?!1:(I(a,d),c.currentIndex>d&&(c.currentIndex--,O(a,b,c)),c.stepCount--,l(a,d).remove(),k(a,d).remove(),j(a,d).parent().remove(),0===d&&a.find(".steps li").first().addClass("first"),d===c.stepCount&&a.find(".steps li").eq(d).addClass("last"),F(a,b,c,d),D(a,b,c),!0)}function I(a,b){o(a).splice(b,1)}function J(b,c,d){var e='<{0} class="{1}">{2}</{0}>',f=r(_,c.stepsOrientation),g=f===_.vertical?" vertical":"",h=a(e.format(c.contentContainerTag,"content "+c.clearFixCssClass,b.html())),i=a(e.format(c.stepsContainerTag,"steps "+c.clearFixCssClass,'<ul role="tablist"></ul>')),j=h.children(c.headerTag),k=h.children(c.bodyTag);b.attr("role","application").empty().append(i).append(h).addClass(c.cssClass+" "+c.clearFixCssClass+g),k.each(function(c){K(b,d,a(this),c)}),j.each(function(e){N(b,c,d,a(this),e)}),E(b,c,d),L(b,c,d)}function K(a,b,c,d){var e=q(a),f=e+W+d,g=e+X+d;c._id(f).attr("role","tabpanel")._aria("labelledby",g).addClass("body")._showAria(b.currentIndex===d)}function L(a,b,c){if(b.enablePagination){var d='<{0} class="actions {1}"><ul role="menu" aria-label="{2}">{3}</ul></{0}>',e='<li><a href="#{0}" role="menuitem">{1}</a></li>',f="";b.forceMoveForward||(f+=e.format("previous",b.labels.previous)),f+=e.format("next",b.labels.next),b.enableFinishButton&&(f+=e.format("finish",b.labels.finish)),b.enableCancelButton&&(f+=e.format("cancel",b.labels.cancel)),a.append(d.format(b.actionContainerTag,b.clearFixCssClass,b.labels.pagination,f)),D(a,b,c),A(a,b,c)}}function M(a,c){for(var d=a.match(/#([a-z]*)#/gi),e=0;e<d.length;e++){var f=d[e],g=f.substring(1,f.length-1);c[g]===b&&R("The key '{0}' does not exist in the substitute collection!",g),a=a.replace(f,c[g])}return a}function N(b,c,d,e,f){var g=q(b),h=g+V+f,j=g+W+f,k=g+X+f,l=b.find(".steps > ul"),m=M(c.titleTemplate,{index:f+1,title:e.html()}),n=a('<li role="tab"><a id="'+h+'" href="#'+k+'" aria-controls="'+j+'">'+m+"</a></li>");n._enableAria(c.enableAllSteps||d.currentIndex>f),d.currentIndex>f&&n.addClass("done"),e._id(k).attr("tabindex","-1").addClass("title"),0===f?l.prepend(n):l.find("li").eq(f-1).after(n),0===f&&l.find("li").removeClass("first").eq(f).addClass("first"),f===d.stepCount-1&&l.find("li").removeClass("last").eq(f).addClass("last"),n.children("a").bind("click"+i(b),Q)}function O(b,c,d){c.saveState&&a.cookie&&a.cookie(U+q(b),d.currentIndex)}function P(b,c,d,e,f){var g=b.find(".content > .body"),h=r(ab,c.transitionEffect),i=c.transitionEffectSpeed,j=g.eq(e),k=g.eq(f);switch(h){case ab.fade:case ab.slide:var l=h===ab.fade?"fadeOut":"slideUp",m=h===ab.fade?"fadeIn":"slideDown";d.transitionElement=j,k[l](i,function(){var b=a(this)._showAria(!1).parent().parent(),c=n(b);c.transitionElement&&(c.transitionElement[m](i,function(){a(this)._showAria()}),c.transitionElement=null)}).promise();break;case ab.slideLeft:var o=k.outerWidth(!0),p=e>f?-o:o,q=e>f?o:-o;k.animate({left:p},i,function(){a(this)._showAria(!1)}).promise(),j.css("left",q+"px")._showAria().animate({left:0},i).promise();break;default:k._showAria(!1),j._showAria()}}function Q(b){b.preventDefault();var c=a(this),d=c.parent().parent().parent().parent(),e=m(d),f=n(d),g=f.currentIndex;if(c.parent().is(":not(.disabled):not(.current)")){var h=c.attr("href"),i=parseInt(h.substring(h.lastIndexOf("-")+1),0);u(d,e,f,i)}return g===f.currentIndex?(j(d,g).focus(),!1):void 0}function R(a){throw arguments.length>1&&(a=a.format(Array.prototype.slice.call(arguments,1))),new Error(a)}function S(a,b){null==b&&R("The argument '{0}' is null or undefined.",a)}a.fn.extend({_aria:function(a,b){return this.attr("aria-"+a,b)},_removeAria:function(a){return this.removeAttr("aria-"+a)},_enableAria:function(a){return null==a||a?this.removeClass("disabled")._aria("disabled","false"):this.addClass("disabled")._aria("disabled","true")},_showAria:function(a){return null==a||a?this.show()._aria("hidden","false"):this.hide()._aria("hidden","true")},_selectAria:function(a){return null==a||a?this.addClass("current")._aria("selected","true"):this.removeClass("current")._aria("selected","false")},_id:function(a){return a?this.attr("id",a):this.attr("id")}}),String.prototype.format||(String.prototype.format=function(){for(var b=1===arguments.length&&a.isArray(arguments[0])?arguments[0]:arguments,c=this,d=0;d<b.length;d++){var e=new RegExp("\\{"+d+"\\}","gm");c=c.replace(e,b[d])}return c});var T=0,U="jQu3ry_5teps_St@te_",V="-t-",W="-p-",X="-h-",Y="Index out of range.",Z="One or more corresponding step {0} are missing.";a.fn.steps=function(b){return a.fn.steps[b]?a.fn.steps[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("Method "+b+" does not exist on jQuery.steps"):w.apply(this,arguments)},a.fn.steps.add=function(a){var b=n(this);return x(this,m(this),b,b.stepCount,a)},a.fn.steps.destroy=function(){return g(this,m(this))},a.fn.steps.finish=function(){h(this,n(this))},a.fn.steps.getCurrentIndex=function(){return n(this).currentIndex},a.fn.steps.getCurrentStep=function(){return p(this,n(this).currentIndex)},a.fn.steps.getStep=function(a){return p(this,a)},a.fn.steps.insert=function(a,b){return x(this,m(this),n(this),a,b)},a.fn.steps.next=function(){return s(this,m(this),n(this))},a.fn.steps.previous=function(){return t(this,m(this),n(this))},a.fn.steps.remove=function(a){return H(this,m(this),n(this),a)},a.fn.steps.setStep=function(){throw new Error("Not yet implemented!")},a.fn.steps.skip=function(){throw new Error("Not yet implemented!")};var $=a.fn.steps.contentMode={html:0,iframe:1,async:2},_=a.fn.steps.stepsOrientation={horizontal:0,vertical:1},ab=a.fn.steps.transitionEffect={none:0,fade:1,slide:2,slideLeft:3},bb=a.fn.steps.stepModel={title:"",content:"",contentUrl:"",contentMode:$.html,contentLoaded:!1},cb=a.fn.steps.defaults={headerTag:"h1",bodyTag:"div",contentContainerTag:"div",actionContainerTag:"div",stepsContainerTag:"div",cssClass:"wizard",clearFixCssClass:"clearfix",stepsOrientation:_.horizontal,titleTemplate:'<span class="number">#index#.</span> #title#',loadingTemplate:'<span class="spinner"></span> #text#',autoFocus:!1,enableAllSteps:!1,enableKeyNavigation:!0,enablePagination:!0,suppressPaginationOnFocus:!0,enableContentCache:!0,enableCancelButton:!1,enableFinishButton:!0,preloadContent:!1,showFinishButtonAlways:!1,forceMoveForward:!1,saveState:!1,startIndex:0,transitionEffect:ab.none,transitionEffectSpeed:200,onStepChanging:function(){return!0},onStepChanged:function(){},onCanceled:function(){},onFinishing:function(){return!0},onFinished:function(){},labels:{cancel:"Cancel",current:"current step:",pagination:"Pagination",finish:"Finish",next:"Next",previous:"Previous",loading:"Loading ..."}}}(jQuery);
;
!function(a){a(["jquery"],function(a){return function(){function b(a,b,c){return o({type:u.error,iconClass:p().iconClasses.error,message:a,optionsOverride:c,title:b})}function c(b,c){return b||(b=p()),r=a("#"+b.containerId),r.length?r:(c&&(r=l(b)),r)}function d(a,b,c){return o({type:u.info,iconClass:p().iconClasses.info,message:a,optionsOverride:c,title:b})}function e(a){s=a}function f(a,b,c){return o({type:u.success,iconClass:p().iconClasses.success,message:a,optionsOverride:c,title:b})}function g(a,b,c){return o({type:u.warning,iconClass:p().iconClasses.warning,message:a,optionsOverride:c,title:b})}function h(a){var b=p();r||c(b),k(a,b)||j(b)}function i(b){var d=p();return r||c(d),b&&0===a(":focus",b).length?void q(b):void(r.children().length&&r.remove())}function j(b){for(var c=r.children(),d=c.length-1;d>=0;d--)k(a(c[d]),b)}function k(b,c){return b&&0===a(":focus",b).length?(b[c.hideMethod]({duration:c.hideDuration,easing:c.hideEasing,complete:function(){q(b)}}),!0):!1}function l(b){return r=a("<div/>").attr("id",b.containerId).addClass(b.positionClass).attr("aria-live","polite").attr("role","alert"),r.appendTo(a(b.target)),r}function m(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",target:"body",closeHtml:"<button>&times;</button>",newestOnTop:!0}}function n(a){s&&s(a)}function o(b){function d(b){return!a(":focus",j).length||b?j[g.hideMethod]({duration:g.hideDuration,easing:g.hideEasing,complete:function(){q(j),g.onHidden&&"hidden"!==o.state&&g.onHidden(),o.state="hidden",o.endTime=new Date,n(o)}}):void 0}function e(){(g.timeOut>0||g.extendedTimeOut>0)&&(i=setTimeout(d,g.extendedTimeOut))}function f(){clearTimeout(i),j.stop(!0,!0)[g.showMethod]({duration:g.showDuration,easing:g.showEasing})}var g=p(),h=b.iconClass||g.iconClass;"undefined"!=typeof b.optionsOverride&&(g=a.extend(g,b.optionsOverride),h=b.optionsOverride.iconClass||h),t++,r=c(g,!0);var i=null,j=a("<div/>"),k=a("<div/>"),l=a("<div/>"),m=a(g.closeHtml),o={toastId:t,state:"visible",startTime:new Date,options:g,map:b};return b.iconClass&&j.addClass(g.toastClass).addClass(h),b.title&&(k.append(b.title).addClass(g.titleClass),j.append(k)),b.message&&(l.append(b.message).addClass(g.messageClass),j.append(l)),g.closeButton&&(m.addClass("toast-close-button").attr("role","button"),j.prepend(m)),j.hide(),g.newestOnTop?r.prepend(j):r.append(j),j[g.showMethod]({duration:g.showDuration,easing:g.showEasing,complete:g.onShown}),g.timeOut>0&&(i=setTimeout(d,g.timeOut)),j.hover(f,e),!g.onclick&&g.tapToDismiss&&j.click(d),g.closeButton&&m&&m.click(function(a){a.stopPropagation?a.stopPropagation():void 0!==a.cancelBubble&&a.cancelBubble!==!0&&(a.cancelBubble=!0),d(!0)}),g.onclick&&j.click(function(){g.onclick(),d()}),n(o),g.debug&&console&&console.log(o),j}function p(){return a.extend({},m(),v.options)}function q(a){r||(r=c()),a.is(":visible")||(a.remove(),a=null,0===r.children().length&&r.remove())}var r,s,t=0,u={error:"error",info:"info",success:"success",warning:"warning"},v={clear:h,remove:i,error:b,getContainer:c,info:d,options:{},subscribe:e,success:f,version:"2.0.3",warning:g};return v}()})}("function"==typeof define&&define.amd?define:function(a,b){"undefined"!=typeof module&&module.exports?module.exports=b(require("jquery")):window.toastr=b(window.jQuery)});
;



/*!

Holder - 2.3.2 - client side image placeholders
(c) 2012-2014 Ivan Malopinsky / http://imsky.co

Provided under the MIT License.
Commercial use requires attribution.

*/
var Holder = Holder || {};
(function (app, win) {
var system_config = {
	use_svg: false,
	use_canvas: false,
	use_fallback: false
};
var instance_config = {};
var preempted = false;
canvas = document.createElement('canvas');
var dpr = 1, bsr = 1;
var resizable_images = [];

if (!canvas.getContext) {
	system_config.use_fallback = true;
} else {
	if (canvas.toDataURL("image/png")
		.indexOf("data:image/png") < 0) {
		//Android doesn't support data URI
		system_config.use_fallback = true;
	} else {
		var ctx = canvas.getContext("2d");
	}
}

if(!!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect){
	system_config.use_svg = true;
	system_config.use_canvas = false;
}

if(!system_config.use_fallback){
    dpr = window.devicePixelRatio || 1,
    bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
}

var ratio = dpr / bsr;

var settings = {
	domain: "holder.js",
	images: "img",
	bgnodes: ".holderjs",
	themes: {
		"gray": {
			background: "#eee",
			foreground: "#aaa",
			size: 12
		},
		"social": {
			background: "#3a5a97",
			foreground: "#fff",
			size: 12
		},
		"industrial": {
			background: "#434A52",
			foreground: "#C2F200",
			size: 12
		},
		"sky": {
			background: "#0D8FDB",
			foreground: "#fff",
			size: 12
		},
		"vine": {
			background: "#39DBAC",
			foreground: "#1E292C",
			size: 12
		},
		"lava": {
			background: "#F8591A",
			foreground: "#1C2846",
			size: 12
		}
	},
	stylesheet: ""
};


//github.com/davidchambers/Base64.js
(function(){function t(t){this.message=t}var e="undefined"!=typeof exports?exports:this,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.prototype=Error(),t.prototype.name="InvalidCharacterError",e.btoa||(e.btoa=function(e){for(var o,n,a=0,i=r,c="";e.charAt(0|a)||(i="=",a%1);c+=i.charAt(63&o>>8-8*(a%1))){if(n=e.charCodeAt(a+=.75),n>255)throw new t("'btoa' failed");o=o<<8|n}return c}),e.atob||(e.atob=function(e){if(e=e.replace(/=+$/,""),1==e.length%4)throw new t("'atob' failed");for(var o,n,a=0,i=0,c="";n=e.charAt(i++);~n&&(o=a%4?64*o+n:n,a++%4)?c+=String.fromCharCode(255&o>>(6&-2*a)):0)n=r.indexOf(n);return c})})();

//getElementsByClassName polyfill
document.getElementsByClassName||(document.getElementsByClassName=function(e){var t=document,n,r,i,s=[];if(t.querySelectorAll)return t.querySelectorAll("."+e);if(t.evaluate){r=".//*[contains(concat(' ', @class, ' '), ' "+e+" ')]",n=t.evaluate(r,t,null,0,null);while(i=n.iterateNext())s.push(i)}else{n=t.getElementsByTagName("*"),r=new RegExp("(^|\\s)"+e+"(\\s|$)");for(i=0;i<n.length;i++)r.test(n[i].className)&&s.push(n[i])}return s})

//getComputedStyle polyfill
window.getComputedStyle||(window.getComputedStyle=function(e){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return t=="float"&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this})

//http://javascript.nwbox.com/ContentLoaded by Diego Perini with modifications
function contentLoaded(n,t){var l="complete",s="readystatechange",u=!1,h=u,c=!0,i=n.document,a=i.documentElement,e=i.addEventListener?"addEventListener":"attachEvent",v=i.addEventListener?"removeEventListener":"detachEvent",f=i.addEventListener?"":"on",r=function(e){(e.type!=s||i.readyState==l)&&((e.type=="load"?n:i)[v](f+e.type,r,u),!h&&(h=!0)&&t.call(n,null))},o=function(){try{a.doScroll("left")}catch(n){setTimeout(o,50);return}r("poll")};if(i.readyState==l)t.call(n,"lazy");else{if(i.createEventObject&&a.doScroll){try{c=!n.frameElement}catch(y){}c&&o()}i[e](f+"DOMContentLoaded",r,u),i[e](f+s,r,u),n[e](f+"load",r,u)}}

//https://gist.github.com/991057 by Jed Schmidt with modifications
function selector(a,b){var a=a.match(/^(\W)?(.*)/),b=b||document,c=b["getElement"+(a[1]?"#"==a[1]?"ById":"sByClassName":"sByTagName")],d=c.call(b,a[2]),e=[];return null!==d&&(e=d.length||0===d.length?d:[d]),e}



//hasOwnProperty polyfill
if (!Object.prototype.hasOwnProperty)
    /*jshint -W001, -W103 */
    Object.prototype.hasOwnProperty = function(prop) {
		var proto = this.__proto__ || this.constructor.prototype;
		return (prop in this) && (!(prop in proto) || proto[prop] !== this[prop]);
	}
    /*jshint +W001, +W103 */

})(Holder, window);


;
/** Add World Map Data Points */
jQuery.fn.vectorMap('addMap', 'world_en', {"width":950,"height":550,"pathes":{"id":{"path":"M781.68,324.4l-2.31,8.68l-12.53,4.23l-3.75-4.4l-1.82,0.5l3.4,13.12l5.09,0.57l6.79,2.57v2.57l3.11-0.57l4.53-6.27v-5.13l2.55-5.13l2.83,0.57l-3.4-7.13l-0.52-4.59L781.68,324.4L781.68,324.4M722.48,317.57l-0.28,2.28l6.79,11.41h1.98l14.15,23.67l5.66,0.57l2.83-8.27l-4.53-2.85l-0.85-4.56L722.48,317.57L722.48,317.57M789.53,349.11l2.26,2.77l-1.47,4.16v0.79h3.34l1.18-10.4l1.08,0.3l1.96,9.5l1.87,0.5l1.77-4.06l-1.77-6.14l-1.47-2.67l4.62-3.37l-1.08-1.49l-4.42,2.87h-1.18l-2.16-3.17l0.69-1.39l3.64-1.78l5.5,1.68l1.67-0.1l4.13-3.86l-1.67-1.68l-3.83,2.97h-2.46l-3.73-1.78l-2.65,0.1l-2.95,4.75l-1.87,8.22L789.53,349.11L789.53,349.11M814.19,330.5l-1.87,4.55l2.95,3.86h0.98l1.28-2.57l0.69-0.89l-1.28-1.39l-1.87-0.69L814.19,330.5L814.19,330.5M819.99,345.45l-4.03,0.89l-1.18,1.29l0.98,1.68l2.65-0.99l1.67-0.99l2.46,1.98l1.08-0.89l-1.96-2.38L819.99,345.45L819.99,345.45M753.17,358.32l-2.75,1.88l0.59,1.58l8.75,1.98l4.42,0.79l1.87,1.98l5.01,0.4l2.36,1.98l2.16-0.5l1.97-1.78l-3.64-1.68l-3.14-2.67l-8.16-1.98L753.17,358.32L753.17,358.32M781.77,366.93l-2.16,1.19l1.28,1.39l3.14-1.19L781.77,366.93L781.77,366.93M785.5,366.04l0.39,1.88l2.26,0.59l0.88-1.09l-0.98-1.49L785.5,366.04L785.5,366.04M790.91,370.99l-2.75,0.4l2.46,2.08h1.96L790.91,370.99L790.91,370.99M791.69,367.72l-0.59,1.19l4.42,0.69l3.44-1.98l-1.96-0.59l-3.14,0.89l-1.18-0.99L791.69,367.72L791.69,367.72M831.93,339.34l-4.17,0.47l-2.68,1.96l1.11,2.24l4.54,0.84v0.84l-2.87,2.33l1.39,4.85l1.39,0.09l1.2-4.76h2.22l0.93,4.66l10.83,8.96l0.28,7l3.7,4.01l1.67-0.09l0.37-24.72l-6.29-4.38l-5.93,4.01l-2.13,1.31l-3.52-2.24l-0.09-7.09L831.93,339.34L831.93,339.34z","name":"Indonesia"},"pg":{"path":"M852.76,348.29l-0.37,24.44l3.52-0.19l4.63-5.41l3.89,0.19l2.5,2.24l0.83,6.9l7.96,4.2l2.04-0.75v-2.52l-6.39-5.32l-3.15-7.28l2.5-1.21l-1.85-4.01l-3.7-0.09l-0.93-4.29l-9.81-6.62L852.76,348.29L852.76,348.29M880.48,349l-0.88,1.25l4.81,4.26l0.66,2.5l1.31-0.15l0.15-2.57l-1.46-1.32L880.48,349L880.48,349M882.89,355.03l-0.95,0.22l-0.58,2.57l-1.82,1.18l-5.47,0.96l0.22,2.06l5.76-0.29l3.65-2.28l-0.22-3.97L882.89,355.03L882.89,355.03M889.38,359.51l1.24,3.45l2.19,2.13l0.66-0.59l-0.22-2.28l-2.48-3.01L889.38,359.51L889.38,359.51z","name":"Papua New Guinea"},"mx":{"path":"M137.49,225.43l4.83,15.21l-2.25,1.26l0.25,3.02l4.25,3.27v6.05l5.25,5.04l-2.25-14.86l-3-9.83l0.75-6.8l2.5,0.25l1,2.27l-1,5.79l13,25.44v9.07l10.5,12.34l11.5,5.29l4.75-2.77l6.75,5.54l4-4.03l-1.75-4.54l5.75-1.76l1.75,1.01l1.75-1.76h2.75l5-8.82l-2.5-2.27l-9.75,2.27l-2.25,6.55l-5.75,1.01l-6.75-2.77l-3-9.57l2.27-12.07l-4.64-2.89l-2.21-11.59l-1.85-0.79l-3.38,3.43l-3.88-2.07l-1.52-7.73l-15.37-1.61l-7.94-5.97L137.49,225.43L137.49,225.43z","name":"Mexico"},"ee":{"path":"M517.77,143.66l-5.6-0.2l-3.55,2.17l-0.05,1.61l2.3,2.17l7.15,1.21L517.77,143.66L517.77,143.66M506.76,147.64l-1.55-0.05l-0.9,0.91l0.65,0.96l1.55,0.1l0.8-1.16L506.76,147.64L506.76,147.64z","name":"Estonia"},"dz":{"path":"M473.88,227.49l-4.08-1.37l-16.98,3.19l-3.7,2.81l2.26,11.67l-6.75,0.27l-4.06,6.53l-9.67,2.32l0.03,4.75l31.85,24.35l5.43,0.46l18.11-14.15l-1.81-2.28l-3.4-0.46l-2.04-3.42v-14.15l-1.36-1.37l0.23-3.65l-3.62-3.65l-0.45-3.88l1.58-1.14l-0.68-4.11L473.88,227.49L473.88,227.49z","name":"Algeria"},"ma":{"path":"M448.29,232.28h-11.55l-2.26,5.02l-5.21,2.51l-4.3,11.64l-8.38,5.02l-11.77,19.39l11.55-0.23l0.45-5.7h2.94v-7.76h10.19l0.23-10.04l9.74-2.28l4.08-6.62l6.34-0.23L448.29,232.28L448.29,232.28z","name":"Morocco"},"mr":{"path":"M404.9,276.66l2.18,2.85l-0.45,12.32l3.17-2.28l2.26-0.46l3.17,1.14l3.62,5.02l3.4-2.28l16.53-0.23l-4.08-27.61l4.38-0.02l-8.16-6.25l0.01,4.06l-10.33,0.01l-0.05,7.75l-2.97-0.01l-0.38,5.72L404.9,276.66L404.9,276.66z","name":"Mauritania"},"sn":{"path":"M412.03,289.84L410.12,290.31L406.18,293.18L405.28,294.78L405,296.37L406.43,297.40L411.28,297.34L414.40,296.5L414.75,298.03L414.46,300.06L414.53,300.09L406.78,300.21L408.03,303.21L408.71,301.37L418,302.15L418.06,302.21L419.03,302.25L422,302.37L422.12,300.62L418.53,296.31L414.53,290.87L412.03,289.84z","name":"Senegal"},"gm":{"path":"M406.89,298.34l-0.13,1.11l6.92-0.1l0.35-1.03l-0.15-1.04l-1.99,0.81L406.89,298.34L406.89,298.34z","name":"Gambia"},"gw":{"path":"M408.6,304.53l1.4,2.77l3.93-3.38l0.04-1.04l-4.63-0.67L408.6,304.53L408.6,304.53z","name":"Guinea-Bissau"},"gn":{"path":"M410.42,307.94l3.04,4.68l3.96-3.44l4.06-0.18l3.38,4.49l2.87,1.89l1.08-2.1l0.96-0.54l-0.07-4.62l-1.91-5.48l-5.86,0.65l-7.25-0.58l-0.04,1.86L410.42,307.94L410.42,307.94z","name":"Guinea"},"sl":{"path":"M413.93,313.13l5.65,5.46l4.03-4.89l-2.52-3.95l-3.47,0.35L413.93,313.13L413.93,313.13z","name":"Sierra Leone"},"lr":{"path":"M420.17,319.19l10.98,7.34l-0.26-5.56l-3.32-3.91l-3.24-2.87L420.17,319.19L420.17,319.19z","name":"Liberia"},"ci":{"path":"M432.07,326.75l4.28-3.03l5.32-0.93l5.43,1.17l-2.77-4.19l-0.81-2.56l0.81-7.57l-4.85,0.23l-2.2-2.1l-4.62,0.12l-2.2,0.35l0.23,5.12l-1.16,0.47l-1.39,2.56l3.58,4.19L432.07,326.75L432.07,326.75z","name":"Cote d'Ivoire"},"ml":{"path":"M419.46,295.84l3.08-2.11l17.12-0.1l-3.96-27.54l4.52-0.13l21.87,16.69l2.94,0.42l-1.11,9.28l-13.75,1.25l-10.61,7.92l-1.93,5.42l-7.37,0.31l-1.88-5.41l-5.65,0.4l0.22-1.77L419.46,295.84L419.46,295.84z","name":"Mali"},"bf":{"path":"M450.59,294.28l3.64-0.29l5.97,8.44l-5.54,4.18l-4.01-1.03l-5.39,0.07l-0.87,3.16l-4.52,0.22l-1.24-1.69l1.6-5.14L450.59,294.28L450.59,294.28z","name":"Burkina Faso"},"ne":{"path":"M460.89,302l2.55-0.06l2.3-3.45l3.86-0.69l4.11,2.51l8.77,0.25l6.78-2.76l2.55-2.19l0.19-2.88l4.73-4.77l1.25-10.53l-3.11-6.52l-7.96-1.94l-18.42,14.36l-2.61-0.25l-1.12,9.97l-9.4,0.94L460.89,302L460.89,302z","name":"Niger"},"gh":{"path":"M444.34,317.05l1.12,2.63l2.92,4.58l1.62-0.06l4.42-2.51l-0.31-14.29l-3.42-1l-4.79,0.13L444.34,317.05L444.34,317.05z","name":"Ghana"},"tg":{"path":"M455.22,321.25l2.68-1.57l-0.06-10.35l-1.74-2.82l-1.12,0.94L455.22,321.25L455.22,321.25z","name":"Togo"},"bj":{"path":"M458.71,319.49h2.12l0.12-6.02l2.68-3.89l-0.12-6.77l-2.43-0.06l-4.17,3.26l1.74,3.32L458.71,319.49L458.71,319.49z","name":"Benin"},"ng":{"path":"M461.57,319.37l3.92,0.19l4.73,5.27l2.3,0.63l1.8-0.88l2.74-0.38l0.93-3.82l3.73-2.45l4.04-0.19l7.4-13.61l-0.12-3.07l-3.42-2.63l-6.84,3.01l-9.15-0.13l-4.36-2.76l-3.11,0.69l-1.62,2.82l-0.12,7.96l-2.61,3.7L461.57,319.37L461.57,319.37z","name":"Nigeria"},"tn":{"path":"M474.91,227.33l5.53-2.23l1.82,1.18l0.07,1.44l-0.85,1.11l0.13,1.97l0.85,0.46v3.54l-0.98,1.64l0.13,1.05l3.71,1.31l-2.99,4.65l-1.17-0.07l-0.2,3.74l-1.3,0.2l-1.11-0.98l0.26-3.8l-3.64-3.54l-0.46-3.08l1.76-1.38L474.91,227.33L474.91,227.33z","name":"Tunisia"},"ly":{"path":"M480.05,248.03l1.56-0.26l0.46-3.6h0.78l3.19-5.24l7.87,2.29l2.15,3.34l7.74,3.54l4.03-1.7l-0.39-1.7l-1.76-1.7l0.2-1.18l2.86-2.42h5.66l2.15,2.88l4.55,0.66l0.59,36.89l-3.38-0.13l-20.42-10.62l-2.21,1.25l-8.39-2.1l-2.28-3.01l-3.32-0.46l-1.69-3.01L480.05,248.03L480.05,248.03z","name":"Libya"},"eg":{"path":"M521.93,243.06l2.67,0.07l5.2,1.44l2.47,0.07l3.06-2.56h1.43l2.6,1.44h3.29l0.59-0.04l2.08,5.98l0.59,1.93l0.55,2.89l-0.98,0.72l-1.69-0.85l-1.95-6.36l-1.76-0.13l-0.13,2.16l1.17,3.74l9.37,11.6l0.2,4.98l-2.73,3.15L522.32,273L521.93,243.06L521.93,243.06z","name":"Egypt"},"td":{"path":"M492.79,296l0.13-2.95l4.74-4.61l1.27-11.32l-3.16-6.04l2.21-1.13l21.4,11.15l-0.13,10.94l-3.77,3.21v5.64l2.47,4.78h-4.36l-7.22,7.14l-0.19,2.16l-5.33-0.07l-0.07,0.98l-3.04-0.4l-2.08-3.93l-1.56-0.77l0.2-1.2l1.96-1.5v-7.02l-2.71-0.42l-3.27-2.43L492.79,296L492.79,296L492.79,296z","name":"Chad"},"sd":{"path":"M520.15,292.43l0.18-11.83l2.46,0.07l-0.28-6.57l25.8,0.23l3.69-3.72l7.96,12.73l-4.36,5.14v7.85l-6.86,14.75l-2.36,1.04l0.75,4.11h2.94l3.99,5.79l-3.2,0.41l-0.82,1.49l-0.08,2.15l-9.6-0.17l-0.98-1.49l-6.71-0.38l-12.32-12.68l1.23-0.74l0.33-2.98l-2.95-1.74l-2.69-5.31l0.15-4.94L520.15,292.43L520.15,292.43z","name":"Sudan"},"cm":{"path":"M477.82,324.28l3.22,2.96l-0.23,4.58l17.66-0.41l1.44-1.62l-5.06-5.45l-0.75-1.97l3.22-6.03l-2.19-4l-1.84-0.99v-2.03l2.13-1.39l0.12-6.32l-1.69-0.19l-0.03,3.32l-7.42,13.85l-4.54,0.23l-3.11,2.14L477.82,324.28L477.82,324.28z","name":"Cameroon"},"er":{"path":"M556.71,294.7l-0.25-5.89l3.96-4.62l1.07,0.82l1.95,6.52l9.36,6.97l-1.7,2.09l-6.85-5.89H556.71L556.71,294.7z","name":"Eritrea"},"dj":{"path":"M571.48,301.54l-0.57,3.36l3.96-0.06l0.06-4.94l-1.45-0.89L571.48,301.54L571.48,301.54z","name":"Djibouti"},"et":{"path":"M549.49,311.76l7.28-16.2l7.23,0.04l6.41,5.57l-0.45,4.59h4.97l0.51,2.76l8.04,4.81l4.96,0.25l-9.43,10.13l-12.95,3.99h-3.21l-5.72-4.88l-2.26-0.95l-4.38-6.45l-2.89,0.04l-0.34-2.96L549.49,311.76L549.49,311.76z","name":"Ethiopia"},"so":{"path":"M575.74,305.04l4.08,2.78l1.21-0.06l10.13-3.48l1.15,3.71l-0.81,3.13l-2.19,1.74l-5.47-0.35l-7.83-4.81L575.74,305.04L575.74,305.04M591.97,304.05l4.37-1.68l1.55,0.93l-0.17,3.88l-4.03,11.48l-21.81,23.36l-2.53-1.74l-0.17-9.86l3.28-3.77l6.96-2.15l10.21-10.78l2.67-2.38l0.75-3.48L591.97,304.05L591.97,304.05z","name":"Somalia"},"ye":{"path":"M599.62,299.65l2.13,2.38l2.88-1.74l1.04-0.35l-1.32-1.28l-2.53,0.75L599.62,299.65L599.62,299.65M571.99,289.23l1.44,4.28v4.18l3.46,3.14l24.38-9.93l0.23-2.73l-3.91-7.02l-9.81,3.13l-5.63,5.54l-6.53-3.86L571.99,289.23L571.99,289.23z","name":"Yemen"},"cf":{"path":"M495.66,324.05l4.66,5.04l1.84-2.38l2.93,0.12l0.63-2.32l2.88-1.8l5.98,4.12l3.45-3.42l13.39,0.59L519,311.18l1.67-1.04l0.23-2.26l-2.82-1.33h-4.14l-6.67,6.61l-0.23,2.72l-5.29-0.17l-0.17,1.16l-3.45-0.35l-3.11,5.91L495.66,324.05L495.66,324.05z","name":"Central African Republic"},"st":{"path":"M470.74,337.15l1.15-0.58l0.86,0.7l-0.86,1.33l-1.04-0.41L470.74,337.15L470.74,337.15M473.05,333.5l1.73-0.29l0.58,1.1l-0.86,0.93l-0.86-0.12L473.05,333.5L473.05,333.5z","name":"Sao Tome and Principe"},"gq":{"path":"M476.84,327.41l-0.46,1.97l1.38,0.75l1.32-0.99l-0.46-2.03L476.84,327.41L476.84,327.41M480.99,332.69l-0.06,1.39l4.54,0.23l-0.06-1.57L480.99,332.69L480.99,332.69z","name":"Equatorial Guinea"},"ga":{"path":"M486.39,332.63l-0.12,2.49l-5.64-0.12l-3.45,6.67l8.11,8.87l2.01-1.68l-0.06-1.74l-1.38-0.64v-1.22l3.11-1.97l2.76,2.09l3.05,0.06l-0.06-10.49l-4.83-0.23l-0.06-2.2L486.39,332.63L486.39,332.63z","name":"Gabon"},"cg":{"path":"M491,332.52l-0.06,1.45l4.78,0.12l0.17,12.41l-4.37-0.12l-2.53-1.97l-1.96,1.1l-0.09,0.55l1.01,0.49l0.29,2.55l-2.7,2.32l0.58,1.22l2.99-2.32h1.44l0.46,1.39l1.9,0.81l6.1-5.16l-0.12-3.77l1.27-3.07l3.91-2.9l1.05-9.81l-2.78,0.01l-3.22,4.41L491,332.52L491,332.52z","name":"Congo"},"ao":{"path":"M486.55,353.23l1.74,2.26l2.25-2.13l-0.66-2.21l-0.56-0.04L486.55,353.23L486.55,353.23M488.62,356.71l3.41,12.73l-0.08,4.02l-4.99,5.36l-0.75,8.71l19.2,0.17l6.24,2.26l5.15-0.67l-3-3.76l0.01-10.74l5.9-0.25v-4.19l-4.79-0.2l-0.96-9.92l-2.02,0.03l-1.09-0.98l-1.19,0.06l-1.58,3.06H502l-1.41-1.42l0.42-2.01l-1.66-2.43L488.62,356.71L488.62,356.71z","name":"Angola"},"cd":{"path":"M489.38,355.71l10.31-0.18l2.09,2.97l-0.08,2.19l0.77,0.7h5.12l1.47-2.89h2.09l0.85,0.86l2.87-0.08l0.85,10.08l4.96,0.16v0.78l13.33,6.01l0.62,1.17h2.79l-0.31-4.22l-5.04-2.42l0.31-3.2l2.17-5.08l4.96-0.16l-4.26-14.14l0.08-6.01l6.74-10.54l0.08-1.48l-1.01-0.55l0.04-2.86l-1.23-0.11l-1.24-1.58l-20.35-0.92l-3.73,3.63l-6.11-4.02l-2.15,1.32l-1.56,13.13l-3.86,2.98l-1.16,2.64l0.21,3.91l-6.96,5.69l-1.85-0.84l0.25,1.09L489.38,355.71L489.38,355.71z","name":"Congo"},"rw":{"path":"M537.82,339.9l2.81,2.59l-0.12,2.77l-4.36,0.09v-3.06L537.82,339.9L537.82,339.9z","name":"Rwanda"},"bi":{"path":"M536.21,346.21l4.27-0.09l-1.11,3.74l-1.08,0.94h-1.32l-0.94-2.53L536.21,346.21L536.21,346.21z","name":"Burundi"},"ug":{"path":"M538.3,339.09l3.03,2.84l1.9-1.21l5.14-0.84l0.88,0.09l0.33-1.95l2.9-6.1l-2.44-5.08l-7.91,0.05l-0.05,2.09l1.06,1.02l-0.16,2.09L538.3,339.09L538.3,339.09z","name":"Uganda"},"ke":{"path":"M550.83,326.52l2.66,5.19l-3.19,6.69l-0.42,2.03l15.93,9.85l4.94-7.76l-2.5-2.03l-0.05-10.22l3.13-3.42l-4.99,1.66l-3.77,0.05l-5.9-4.98l-1.86-0.8l-3.45,0.32l-0.61,1.02L550.83,326.52L550.83,326.52z","name":"Kenya"},"tz":{"path":"M550.57,371.42l17.47-2.14l-3.93-7.6l-0.21-7.28l1.27-3.48l-16.62-10.44l-5.21,0.86l-1.81,1.34l-0.16,3.05l-1.17,4.23l-1.22,1.45l-1.75,0.16l3.35,11.61l5.47,2.57l3.77,0.11L550.57,371.42L550.57,371.42z","name":"Tanzania"},"zm":{"path":"M514.55,384.7l3.17,4.4l4.91,0.3l1.74,0.96l5.14,0.06l4.43-6.21l12.38-5.54l1.08-4.88l-1.44-6.99l-6.46-3.68l-4.31,0.3l-2.15,4.76l0.06,2.17l5.08,2.47l0.3,5.37l-4.37,0.24l-1.08-1.81l-12.14-5.18l-0.36,3.98l-5.74,0.18L514.55,384.7L514.55,384.7z","name":"Zambia"},"mw":{"path":"M547.16,379.4l3.11,3.25l-0.06,4.16l0.6,1.75l4.13-4.46l-0.48-5.67l-2.21-1.69l-1.97-9.95l-3.41-0.12l1.55,7.17L547.16,379.4L547.16,379.4z","name":"Malawi"},"mz":{"path":"M541.17,413.28l2.69,2.23l6.34-3.86l1.02-5.73v-9.46l10.17-8.32l1.74,0.06l6.16-5.91l-0.96-12.18L552,372.17l0.48,3.68l2.81,2.17l0.66,6.63l-5.5,5.37l-1.32-3.01l0.24-3.98l-3.17-3.44l-7.78,3.62l7.24,3.68l0.24,10.73l-4.79,7.11L541.17,413.28L541.17,413.28z","name":"Mozambique"},"zw":{"path":"M524.66,392.3l8.97,10.13l6.88,1.75l4.61-7.23l-0.36-9.58l-7.48-3.86l-2.81,1.27l-4.19,6.39l-5.8-0.06L524.66,392.3L524.66,392.3z","name":"Zimbabwe"},"na":{"path":"M496.55,421.96l3.35,0.24l1.97,1.99l4.67,0.06l1.14-13.26v-8.68l2.99-0.6l1.14-9.1l7.6-0.24l2.69-2.23l-4.55-0.18l-6.16,0.84l-6.64-2.41h-18.66l0.48,5.3l6.22,9.16l-1.08,4.7l0.06,2.47L496.55,421.96L496.55,421.96z","name":"Namibia"},"bw":{"path":"M508.51,411.23l2.15,0.66l-0.3,6.15l2.21,0.3l5.08-4.58l6.1,0.66l1.62-4.1l7.72-7.05l-9.27-10.67l-0.12-1.75l-1.02-0.3l-2.81,2.59l-7.3,0.18l-1.02,9.1l-2.87,0.66L508.51,411.23L508.51,411.23z","name":"Botswana"},"sz":{"path":"M540.87,414l-2.51,0.42l-1.08,2.95l1.92,1.75h2.33l1.97-2.83L540.87,414L540.87,414z","name":"Swaziland"},"ls":{"path":"M527.41,425.39l3.05-2.35l1.44,0.06l1.74,2.17l-0.18,2.17l-2.93,1.08v0.84l-3.23-0.18l-0.78-2.35L527.41,425.39L527.41,425.39z","name":"Lesotho"},"za":{"path":"M534.16,403.63l-7.9,7.3l-1.88,4.51l-6.26-0.78l-5.21,4.63l-3.46-0.34l0.28-6.4l-1.23-0.43l-0.86,13.09l-6.14-0.06l-1.85-2.18l-2.71-0.03l2.47,7.09l4.41,4.17l-3.15,3.67l2.04,4.6l4.72,1.8l3.76-3.2l10.77,0.06l0.77-0.96l4.78-0.84l16.17-16.1l-0.06-5.07l-1.73,2.24h-2.59l-3.15-2.64l1.6-3.98l2.75-0.56l-0.25-8.18L534.16,403.63L534.16,403.63z M530.37,422.13l1.51-0.06l2.45,2.66l-0.07,3.08l-2.87,1.45l-0.18,1.02l-4.38,0.05l-1.37-3.3l1.25-2.42L530.37,422.13L530.37,422.13z","name":"South Africa"},"gl":{"path":"M321.13,50.07l-1.36,2.17l2.45,2.45l-1.09,2.45l3.54,4.62l4.35-1.36l5.71-0.54l6.53,7.07l4.35,11.69l-3.53,7.34l4.89-0.82l2.72,1.63l0.27,3.54l-5.98,0.27l3.26,3.26l4.08,0.82l-8.97,11.96l-1.09,7.34l1.9,5.98l-1.36,3.54l2.45,7.61l4.62,5.17l1.36-0.27l2.99-0.82l0.27,4.35l1.9,2.72l3.53-0.27l2.72-10.06l8.16-10.06l12.24-4.89l7.61-9.52l3.53,1.63h7.34l5.98-5.98l7.34-2.99l0.82-4.62l-4.62-4.08l-4.08-1.36l-2.18-5.71l5.17-2.99l8.16,4.35l2.72-2.99l-4.35-2.45l9.25-12.51l-1.63-5.44l-4.35-0.27l1.63-4.89l5.44-2.45l11.15-9.79l-3.26-3.53l-12.51,1.09l-6.53,6.53l3.81-8.43l-4.35-1.09l-2.45,4.35l-3.53-2.99l-9.79,1.09l2.72-4.35l16.04-0.54l-4.08-5.44l-17.4-3.26l-7.07,1.09l0.27,3.54l-7.34-2.45l0.27-2.45l-5.17,1.09l-1.09,2.72l5.44,1.9l-5.71,4.08l-4.08-4.62l-5.71-1.63l-0.82,4.35h-5.71l-2.18-4.62l-8.97-1.36l-4.89,2.45l-0.27,3.26l-6.25-0.82l-3.81,1.63l0.27,3.81v1.9l-7.07,1.36l-3.26-2.17l-2.18,3.53l3.26,3.54l6.8-0.82l0.54,2.18l-5.17,2.45L321.13,50.07L321.13,50.07M342.89,92.49l1.63,2.45l-0.82,2.99h-1.63l-2.18-2.45l0.54-1.9L342.89,92.49L342.89,92.49M410.87,85.69l4.62,1.36l-0.27,3.81l-4.89-2.45l-1.09-1.36L410.87,85.69L410.87,85.69z","name":"Greenland"},"au":{"path":"M761.17,427.98l-0.35,25.38l-3.9,2.86l-0.35,2.5l5.32,3.57l13.13-2.5h6.74l2.48-3.58l14.9-2.86l10.64,3.22l-0.71,4.29l1.42,4.29l8.16-1.43l0.35,2.14l-5.32,3.93l1.77,1.43l3.9-1.43l-1.06,11.8l7.45,5.72l4.26-1.43l2.13,2.14l12.42-1.79l11.71-18.95l4.26-1.07l8.51-15.73l2.13-13.58l-5.32-6.79l2.13-1.43l-4.26-13.23l-4.61-3.22l0.71-17.87l-4.26-3.22l-1.06-10.01h-2.13l-7.1,23.59l-3.9,0.36l-8.87-8.94l4.97-13.23l-9.22-1.79l-10.29,2.86l-2.84,8.22l-4.61,1.07l-0.35-5.72l-18.8,11.44l0.35,4.29l-2.84,3.93h-7.1l-15.26,6.43L761.17,427.98L761.17,427.98M825.74,496.26l-1.77,7.15l0.35,5l5.32-0.36l6.03-9.29L825.74,496.26L825.74,496.26z","name":"Australia"},"nz":{"path":"M913.02,481.96l1.06,11.8l-1.42,5.36l-5.32,3.93l0.35,4.65v5l1.42,1.79l14.55-12.51v-2.86h-3.55l-4.97-16.8L913.02,481.96L913.02,481.96M902.38,507.7l2.84,5.36l-7.81,7.51l-0.71,3.93l-5.32,0.71l-8.87,8.22l-8.16-3.93l-0.71-2.86l14.9-6.43L902.38,507.7L902.38,507.7z","name":"New Zealand"},"nc":{"path":"M906.64,420.47l-0.35,1.79l4.61,6.43l2.48,1.07l0.35-2.5L906.64,420.47L906.64,420.47z","name":"New Caledonia"},"my":{"path":"M764.14,332.92l3.02,3.49l11.58-4.01l2.29-8.84l5.16-0.37l4.72-3.42l-6.12-4.46l-1.4-2.45l-3.02,5.57l1.11,3.2l-1.84,2.67l-3.47-0.89l-8.41,6.17l0.22,3.57L764.14,332.92L764.14,332.92M732.71,315.45l2.01,4.51l0.45,5.86l2.69,4.17l6.49,3.94l2.46,0.23l-0.45-4.06l-2.13-5.18l-3.12-6.63l-0.26,1.16l-3.76-0.17l-2.7-3.88L732.71,315.45L732.71,315.45z","name":"Malaysia"},"bn":{"path":"M779.77,319.25l-2.88,3.49l2.36,0.74l1.33-1.86L779.77,319.25L779.77,319.25z","name":"Brunei Darussalam"},"tl":{"path":"M806.14,368.42l-5.11,4.26l0.49,1.09l2.16-0.4l2.55-2.38l5.01-0.69l-0.98-1.68L806.14,368.42L806.14,368.42z","name":"Timor-Leste"},"sb":{"path":"M895.43,364.65l0.15,2.28l1.39,1.32l1.31-0.81l-1.17-2.43L895.43,364.65L895.43,364.65M897.18,370.31l-1.17,1.25l1.24,2.28l1.46,0.44l-0.07-1.54L897.18,370.31L897.18,370.31M900.03,368.99l1.02,2.5l1.97,2.35l1.09-1.76l-1.46-2.5L900.03,368.99L900.03,368.99M905.14,372.74l0.58,3.09l1.39,1.91l1.17-2.42L905.14,372.74L905.14,372.74M906.74,379.65l-0.51,0.88l1.68,2.21l1.17,0.07l-0.73-2.87L906.74,379.65L906.74,379.65M903.02,384.05l-1.75,0.81l1.53,2.13l1.31-0.74L903.02,384.05L903.02,384.05z","name":"Solomon Islands"},"vu":{"path":"M920.87,397.22l-1.24,1.66l0.52,1.87l0.62,0.42l1.13-1.46L920.87,397.22L920.87,397.22M921.49,402.31l0.1,1.35l1.34,0.42l0.93-0.52l-0.93-1.46L921.49,402.31L921.49,402.31M923.45,414.37l-0.62,0.94l0.93,1.04l1.55-0.52L923.45,414.37L923.45,414.37z","name":"Vanuatu"},"fj":{"path":"M948.62,412.29l-1.24,1.66l-0.1,1.87l1.44,1.46L948.62,412.29L948.62,412.29z","name":"Fiji"},"ph":{"path":"M789.37,297.53l-0.86,1.64l-0.48,2.02l-4.78,6.07l0.29,1.25l2.01-0.29l6.21-6.94L789.37,297.53L789.37,297.53M797.11,295.22l-0.1,5.01l1.82,1.83l0.67,3.56l1.82,0.39l0.86-2.22l-1.43-1.06l-0.38-6.26L797.11,295.22L797.11,295.22M802.28,297.15l-0.1,4.43l1.05,1.73l1.82-2.12l-0.48-3.85L802.28,297.15L802.28,297.15M803.42,293.29l1.82,2.41l0.86,2.31h1.63l-0.29-3.95l-1.82-1.25L803.42,293.29L803.42,293.29M806.96,302.35l0.38,2.89l-3.35,2.7l-2.77,0.29l-2.96,3.18l0.1,1.45l2.77-0.87l1.91-1.25l1.63,4.14l2.87,2.02l1.15-0.39l1.05-1.25l-2.29-2.31l1.34-1.06l1.53,1.25l1.05-1.73l-1.05-2.12l-0.19-4.72L806.96,302.35L806.96,302.35M791.38,272.97l-2.58,1.83l-0.29,5.78l4.02,7.8l1.34,1.06l1.72-1.16l2.96,0.48l0.57,2.6l2.2,0.19l1.05-1.44l-1.34-1.83l-1.63-1.54l-3.44-0.38l-1.82-2.99l2.1-3.18l0.19-2.79l-1.43-3.56L791.38,272.97L791.38,272.97M792.72,290.21l0.76,2.7l1.34,0.87l0.96-1.25l-1.53-2.12L792.72,290.21L792.72,290.21z","name":"Philippines"},"cn":{"path":"M759.83,270.17l-2.39,0.67l-1.72,2.12l1.43,2.79l2.1,0.19l2.39-2.12l0.57-2.79L759.83,270.17L759.83,270.17M670.4,170.07l-3.46,8.7l-4.77-0.25l-5.03,11.01l4.27,5.44l-8.8,12.15l-4.52-0.76l-3.02,3.8l0.75,2.28l3.52,0.25l1.76,4.05l3.52,0.76l10.81,13.93v7.09l5.28,3.29l5.78-1.01l7.29,4.3l8.8,2.53l4.27-0.51l4.78-0.51l10.05-6.58l3.27,0.51l1.25,2.97l2.77,0.83l3.77,5.57l-2.51,5.57l1.51,3.8l4.27,1.52l0.75,4.56l5.03,0.51l0.75-2.28l7.29-3.8l4.52,0.25l5.28,5.82l3.52-1.52l2.26,0.25l1.01,2.79l1.76,0.25l2.51-3.54l10.05-3.8l9.05-10.89l3.02-10.38l-0.25-6.84l-3.77-0.76l2.26-2.53l-0.5-4.05l-9.55-9.62v-4.81l2.76-3.54l2.76-1.27l0.25-2.79h-7.04l-1.26,3.8l-3.27-0.76l-4.02-4.3l2.51-6.58l3.52-3.8l3.27,0.25l-0.5,5.82l1.76,1.52l4.27-4.3l1.51-0.25l-0.5-3.29l4.02-4.81l3.02,0.25l1.76-5.57l2.06-1.09l0.21-3.47l-2-2.1l-0.17-5.48l3.85-0.25l-0.25-14.13l-2.7,1.62l-1.01,3.62l-4.51-0.01l-13.07-7.35l-9.44-11.38l-9.58-0.1l-2.44,2.12l3.1,7.1l-1.08,6.66l-3.86,1.6l-2.17-0.17l-0.16,6.59l2.26,0.51l4.02-1.77l5.28,2.53v2.53l-3.77,0.25l-3.02,6.58l-2.76,0.25l-9.8,12.91l-10.3,4.56l-7.04,0.51l-4.77-3.29l-6.79,3.55l-7.29-2.28l-1.76-4.81l-12.31-0.76l-6.53-10.63h-2.76l-2.22-4.93L670.4,170.07z","name":"China"},"tw":{"path":"M787.46,248.31l-3.54,2.7l-0.19,5.2l3.06,3.56l0.76-0.67L787.46,248.31L787.46,248.31z","name":"Taiwan"},"jp":{"path":"M803.23,216.42l-1.63,1.64l0.67,2.31l1.43,0.1l0.96,5.01l1.15,1.25l2.01-1.83l0.86-3.28l-2.49-3.56L803.23,216.42L803.23,216.42M812.03,213.15l-2.77,2.6l-0.1,2.99l0.67,0.87l3.73-3.18l-0.29-3.18L812.03,213.15L812.03,213.15M808.2,206.98l-4.88,5.59l0.86,1.35l2.39,0.29l4.49-3.47l3.16-0.58l2.87,3.37l2.2-0.77l0.86-3.28l4.11-0.1l4.02-4.82l-2.1-8l-0.96-4.24l2.1-1.73l-4.78-7.22l-1.24,0.1l-2.58,2.89v2.41l1.15,1.35l0.38,6.36l-2.96,3.66l-1.72-1.06l-1.34,2.99l-0.29,2.79l1.05,1.64l-0.67,1.25l-2.2-1.83h-1.53l-1.34,0.77L808.2,206.98L808.2,206.98M816.43,163.44l-1.53,1.35l0.77,2.89l1.34,1.35l-0.1,4.43l-1.72,0.67l-1.34,2.99l3.92,5.39l2.58-0.87l0.48-1.35l-2.77-2.5l1.72-2.22l1.82,0.29l1.43,1.54l0.1-3.18l3.92-3.18l2.2-0.58l-1.82-3.08l-0.86-1.35l-1.43,0.96l-1.24,1.54l-2.68-0.58l-2.77-1.83L816.43,163.44L816.43,163.44z","name":"Japan"},"ru":{"path":"M506.61,151.72l-1.5-0.15l-2.7,3.23v1.51l0.9,0.35l1.75,0.05l2.9-2.37l0.4-0.81L506.61,151.72L506.61,151.72M830.86,160.45l-2.68,3.76l0.19,1.83l1.34-0.58l3.15-3.95L830.86,160.45L830.86,160.45M834.4,154.96l-0.96,2.6l0.1,1.73l1.63-1.06l1.53-3.08V154L834.4,154.96L834.4,154.96M840.04,132.03l-1.24,1.54l0.1,2.41l1.15-0.1l1.91-3.37L840.04,132.03L840.04,132.03M837.75,137.91v4.24l1.34,0.48l0.96-1.54v-3.27L837.75,137.91L837.75,137.91M798.64,122.59l-0.09,6.17l7.74,11.95l2.77,10.4l4.88,9.25l1.91,0.67l1.63-1.35l0.76-2.22l-6.98-7.61l0.19-3.95l1.53-0.67l0.38-2.31l-13.67-19.36L798.64,122.59L798.64,122.59M852.57,103.42l-1.91,0.19l1.15,1.64l2.39,1.64l0.67-0.77L852.57,103.42L852.57,103.42M856.29,104.58l0.29,1.64l2.96,0.87l0.29-1.16L856.29,104.58L856.29,104.58M547.82,38.79l1.72,0.69l-1.21,2.08v2.95l-2.58,1.56H543l-1.55-1.91l0.17-2.08l1.21-1.56h2.41L547.82,38.79L547.82,38.79M554.36,36.88v2.08l1.72,1.39l2.41-0.17l2.07-1.91v-1.39h-1.89l-1.55,0.52l-1.21-1.39L554.36,36.88L554.36,36.88M564.18,37.06l1.21,2.6l2.41,0.17l1.72-0.69l-0.86-2.43l-2.24-0.52L564.18,37.06L564.18,37.06M573.99,33.59l-1.89-0.35l-1.72,1.74l0.86,1.56l0.52,2.43l2.24-1.73l0.52-1.91L573.99,33.59L573.99,33.59M584.49,51.98l-0.52,2.43l-3.96,3.47l-8.44,1.91l-6.89,11.45l-1.21,3.3l6.89,1.74l1.03-4.16l2.07-6.42l5.34-2.78l4.48-3.47l3.27-1.39h1.72v-4.68L584.49,51.98L584.49,51.98M562.28,77.31l4.65,0.52l1.55,5.38l3.96,4.16l-1.38,2.78h-2.41l-2.24-2.6l-4.99-0.17l-2.07-2.78v-1.91l3.1-0.87L562.28,77.31L562.28,77.31M634.95,18.15l-2.24-1.39h-2.58l-0.52,1.56l-2.75,1.56l-2.07,0.69l-0.34,2.08l4.82,0.35L634.95,18.15L634.95,18.15M640.28,18.67l-1.21,2.6l-2.41-0.17l-3.79,2.78l-1.03,3.47h2.41l1.38-2.26l3.27,2.43l3.1-1.39l2.24-1.91l-0.86-2.95l-1.21-2.08L640.28,18.67L640.28,18.67M645.28,20.58l1.21,4.86l1.89,4.51l2.07-3.64l3.96-0.87v-2.6l-2.58-1.91L645.28,20.58L645.28,20.58M739.76,12.8l2.69,2.26l1.91-0.79l0.56-3.17L741,8.39l-2.58,1.7l-6.28,0.57v2.83l-6.62,0.11v4.63l7.74,5.76l2.02-1.47l-0.45-4.07l4.94-1.24l-1.01-1.92l-1.79-1.81L739.76,12.8L739.76,12.8M746.94,10.09l1.79,3.39l6.96-0.79l1.91-2.49l-0.45-2.15l-1.91-0.79l-1.79,1.36l-5.16,1.13L746.94,10.09L746.94,10.09M746.49,23.31l-3.48-0.9L741,24.56l-0.9,2.94l4.71-0.45l3.59-1.81L746.49,23.31L746.49,23.31M836.68,3.76l-2.92-0.9L830.4,4.1l-1.68,2.49l2.13,2.83l5.61-2.49l1.12-1.24L836.68,3.76L836.68,3.76M817.97,72.93l1.76,6.08l3.52,1.01l3.52-5.57l-2.01-3.8l0.75-3.29h5.28l-1.26,2.53l0.5,9.12l-7.54,18.74l0.75,4.05l-0.25,6.84l14.07,20.51l2.76,0.76l0.25-16.71l2.76-2.53l-3.02-6.58l2.51-2.79l-5.53-7.34l-3.02,0.25l-1-12.15l7.79-2.03l0.5-3.55l4.02-1.01l2.26,2.03l2.76-11.14l4.77-8.1l3.77-2.03l3.27,0.25v-3.8l-5.28-1.01l-7.29-6.08l3.52-4.05l-3.02-6.84l2.51-2.53l3.02,4.05l7.54,2.79l8.29,0.76l1.01-3.54l-4.27-4.3l4.77-6.58l-10.81-3.8l-2.76,5.57l-3.52-4.56l-19.85-6.84l-18.85,3.29l-2.76,1.52v1.52l4.02,2.03l-0.5,4.81l-7.29-3.04l-16.08,6.33l-2.76-5.82h-11.06l-5.03,5.32l-17.84-4.05l-16.33,3.29l-2.01,5.06l2.51,0.76l-0.25,3.8l-15.83,1.77l1.01,5.06l-14.58-2.53l3.52-6.58l-14.83-0.76l1.26,6.84l-4.77,2.28l-4.02-3.8l-16.33,2.79l-6.28,5.82l-0.25,3.54l-4.02,0.25l-0.5-4.05l12.82-11.14v-7.6l-8.29-2.28l-10.81,3.54l-4.52-4.56h-2.01l-2.51,5.06l2.01,2.28l-14.33,7.85l-12.31,9.37l-7.54,10.38v4.3l8.04,3.29l-4.02,3.04l-8.54-3.04l-3.52,3.04l-5.28-6.08l-1.01,2.28l5.78,18.23l1.51,0.51l4.02-2.03l2.01,1.52v3.29l-3.77-1.52l-2.26,1.77l1.51,3.29l-1.26,8.61l-7.79,0.76l-0.5-2.79l4.52-2.79l1.01-7.6l-5.03-6.58l-1.76-11.39l-8.04-1.27l-0.75,4.05l1.51,2.03l-3.27,2.79l1.26,7.6l4.77,2.03l1.01,5.57l-4.78-3.04l-12.31-2.28l-1.51,4.05l-9.8,3.54l-1.51-2.53l-12.82,7.09l-0.25,4.81l-5.03,0.76l1.51-3.54v-3.54l-5.03-1.77l-3.27,1.27l2.76,5.32l2.01,3.54v2.79l-3.77-0.76l-0.75-0.76l-3.77,4.05l2.01,3.54l-8.54-0.25l2.76,3.55l-0.75,1.52h-4.52l-3.27-2.28l-0.75-6.33l-5.28-2.03v-2.53l11.06,2.28l6.03,0.51l2.51-3.8l-2.26-4.05l-16.08-6.33l-5.55,1.38l-1.9,1.63l0.59,3.75l2.36,0.41l-0.55,5.9l7.28,17.1l-5.26,8.34l-0.36,1.88l2.67,1.88l-2.41,1.59l-1.6,0.03l0.3,7.35l2.21,3.13l0.03,3.04l2.83,0.26l4.33,1.65l4.58,6.3l0.05,1.66l-1.49,2.55l3.42-0.19l3.33,0.96l4.5,6.37l11.08,1.01l-0.48,7.58l-3.82,3.27l0.79,1.28l-3.77,4.05l-1,3.8l2.26,3.29l7.29,2.53l3.02-1.77l19.35,7.34l0.75-2.03l-4.02-3.8v-4.81l-2.51-0.76l0.5-4.05l4.02-4.81l-7.21-5.4l0.5-7.51l7.71-5.07l9.05,0.51l1.51,2.79l9.3,0.51l6.79-3.8l-3.52-3.8l0.75-7.09l17.59-8.61l13.53,6.1l4.52-4.05l13.32,12.66l10.05-1.01l3.52,3.54l9.55,1.01l6.28-8.61l8.04,3.55l4.27,0.76l4.27-3.8l-3.77-2.53l3.27-5.06l9.3,3.04l2.01,4.05l4.02,0.25l2.51-1.77l6.79-0.25l0.75,1.77l7.79,0.51l5.28-5.57l10.81,1.27l3.27-1.27l1-6.08l-3.27-7.34l3.27-2.79h10.3l9.8,11.65l12.56,7.09h3.77l0.5-3.04l4.52-2.79l0.5,16.46l-4.02,0.25v4.05l2.26,2.79l-0.42,3.62l1.67,0.69l1.01-2.53l1.51,0.51l1,1.01l4.52-1.01l4.52-13.17l0.5-16.46l-5.78-13.17l-7.29-8.86l-3.52,0.51v2.79l-8.54-3.29l3.27-7.09l2.76-18.74l11.56-3.54l5.53-3.54h6.03L805.86,96l1.51,2.53l5.28-5.57l3.02,0.25l-0.5-3.29l-4.78-1.01l3.27-11.9L817.97,72.93L817.97,72.93z","name":"Russian Federation"},"us":{"path":"M69.17,53.35l3.46,6.47l2.22-0.5v-2.24L69.17,53.35L69.17,53.35M49.66,110.26l-0.17,3.01l2.16-0.5v-1.34L49.66,110.26L49.66,110.26M46.34,111.6l-4.32,2.18l0.67,2.34l1.66-1.34l3.32-1.51L46.34,111.6L46.34,111.6M28.39,114.44l-2.99-0.67l-0.5,1.34l0.33,2.51L28.39,114.44L28.39,114.44M22.07,114.28l-2.83-1.17l-1,1.84l1.83,1.84L22.07,114.28L22.07,114.28M12.27,111.6l-1.33-1.84l-1.33,0.5v2.51l1.5,1L12.27,111.6L12.27,111.6M1.47,99.71l1.66,1.17l-0.5,1.34H1.47V99.71L1.47,99.71M10,248.7l-0.14,2.33l2.04,1.37l1.22-1.09L10,248.7L10,248.7M15.29,252.13l-1.9,1.37l1.63,2.05l1.9-1.64L15.29,252.13L15.29,252.13M19.1,255.41l-1.63,2.19l0.54,1.37l2.31-1.09L19.1,255.41L19.1,255.41M21.81,259.65l-0.95,5.47l0.95,2.05l3.12-0.96l1.63-2.74l-3.4-3.15L21.81,259.65L21.81,259.65M271.05,281.06l-2.64-0.89l-2.12,1.33l1.06,1.24l3.61,0.53L271.05,281.06L271.05,281.06M93.11,44.89l-8.39,1.99l1.73,9.45l9.13,2.49l0.49,1.99L82.5,65.04l-7.65,12.68l2.71,13.43L82,94.13l3.46-3.23l0.99,1.99l-4.2,4.97l-16.29,7.46l-10.37,2.49l-0.25,3.73l23.94-6.96l9.87-2.74l9.13-11.19l10.12-6.71l-5.18,8.7l5.68,0.75l9.63-4.23l1.73,6.96l6.66,1.49l6.91,6.71l0.49,4.97l-0.99,1.24l1.23,4.72h1.73l0.25-7.96h1.97l0.49,19.64l4.94-4.23l-3.46-20.39h-5.18l-5.68-7.21l27.89-47.25l-27.64-21.63l-30.85,5.97l-1.23,9.45l6.66,3.98l-2.47,6.47L93.11,44.89L93.11,44.89M148.76,158.34l-1,4.02l-3.49-2.26h-1.74l-1,4.27l-12.21,27.36l3.24,23.84l3.99,2.01l0.75,6.53h8.22l7.97,6.02l15.69,1.51l1.74,8.03l2.49,1.76l3.49-3.51l2.74,1.25l2.49,11.54l4.23,2.76l3.49-6.53l10.71-7.78l6.97,3.26l5.98,0.5l0.25-3.76l12.45,0.25l2.49,2.76l0.5,6.27l-1.49,3.51l1.74,6.02h3.74l3.74-5.77l-1.49-2.76l-1.49-6.02l2.24-6.78l10.21-8.78l7.72-2.26l-1-7.28l10.71-11.55l10.71-1.76L272.8,199l10.46-6.02v-8.03l-1-0.5l-3.74,1.25l-0.5,4.92l-12.43,0.15l-9.74,6.47l-15.29,5l-2.44-2.99l6.94-10.5l-3.43-3.27l-2.33-4.44l-4.83-3.88l-5.25-0.44l-9.92-6.77L148.76,158.34L148.76,158.34z","name":"United States of America"},"mu":{"path":"M613.01,398.99l-1.52,1.99l0.3,2.15l3.2-2.61L613.01,398.99L613.01,398.99z","name":"Mauritius"},"re":{"path":"M607.38,402.37l-2.28,0.15l-0.15,1.99l1.52,0.31l2.28-1.07L607.38,402.37L607.38,402.37z","name":"Reunion"},"mg":{"path":"M592.3,372.92l-2.13,5.06l-3.65,6.44l-6.39,0.46l-2.74,3.22l0.46,9.82l-3.96,4.6l0.46,7.82l3.35,3.83l3.96-0.46l3.96-2.92l-0.91-4.6l9.13-15.8l-1.83-1.99l1.83-3.83l1.98,0.61l0.61-1.53l-1.83-7.82l-1.07-3.22L592.3,372.92L592.3,372.92z","name":"Madagascar"},"km":{"path":"M577.69,371.23l0.46,1.53l1.98,0.31l0.76-1.99L577.69,371.23L577.69,371.23M580.58,374.3l0.76,1.69h1.22l0.61-2.15L580.58,374.3L580.58,374.3z","name":"Comoros"},"sc":{"path":"M602.35,358.34l-0.61,1.23l1.67,1.38l1.22-1.38L602.35,358.34L602.35,358.34M610.88,349.14l-1.83,1.23l1.37,2.15h1.83L610.88,349.14L610.88,349.14M611.64,354.51l-1.22,1.38l0.91,1.38l1.67,0.31l0.15-2.92L611.64,354.51L611.64,354.51z","name":"Seychelles"},"mv":{"path":"M656.4,320.76l0.3,2.61l1.67,0.61l0.3-2.3L656.4,320.76L656.4,320.76M658.53,326.28l-0.15,3.22l1.22,0.61l1.07-2.15L658.53,326.28L658.53,326.28M658.84,332.57l-1.07,1.07l1.22,1.07l1.52-1.07L658.84,332.57L658.84,332.57z","name":"Maldives"},"pt":{"path":"M372.64,217.02l-1.36,1.37l2.44,1.37l0.27-1.91L372.64,217.02L372.64,217.02M379.97,216.2l-1.63,1.09l1.36,1.09l2.17-0.55L379.97,216.2L379.97,216.2M381.05,220.03l-0.81,2.19l1.08,1.37l1.36-1.09L381.05,220.03L381.05,220.03M387.56,224.4l-0.54,1.37l0.81,0.82l2.17-1.37L387.56,224.4L387.56,224.4M408.18,236.42l-1.08,1.37l1.08,1.37l1.63-0.82L408.18,236.42L408.18,236.42M430.93,211.24l-0.62,8.65l-1.77,1.6l0.18,0.98l1.24,2.05l-0.8,2.5l1.33,0.45l3.1-0.36l-0.18-2.5l2.03-11.59l-0.44-1.6L430.93,211.24L430.93,211.24z","name":"Portugal"},"es":{"path":"M415.62,253.73l-1.75,1.01l0.81,0.82L415.62,253.73L415.62,253.73M409.54,253.92l-2.17,0.55l1.08,1.64h1.63L409.54,253.92L409.54,253.92M404.38,252.28l-1.36,1.37l1.9,1.64l1.08-2.46L404.38,252.28L404.38,252.28M448.36,205h-12.74l-2.57-1.16l-1.24,0.09l-1.5,3.12l0.53,3.21l4.87,0.45l0.62,2.05l-2.12,11.95l0.09,2.14l3.45,1.87l3.98,0.27l7.96-1.96l3.89-4.9l0.09-4.99l6.9-6.24l0.35-2.76l-6.28-0.09L448.36,205L448.36,205M461.1,217.21l-1.59,0.54l0.35,1.43h2.3l0.97-1.07L461.1,217.21L461.1,217.21z","name":"Spain"},"cv":{"path":"M387.56,290.54l-1.9,1.09l1.36,1.09l1.63-0.82L387.56,290.54L387.56,290.54M392.23,292.74l-1.24,1.1l0.88,1.63l2.12-0.95L392.23,292.74L392.23,292.74M389.52,295.83l-1.59,0.95l1.71,2.29l1.35-0.71L389.52,295.83L389.52,295.83z","name":"Cape Verde"},"pf":{"path":"M27.25,402.68l-1.9-0.14l-0.14,1.78l1.49,0.96l1.77-1.09L27.25,402.68L27.25,402.68M33.77,404.6l-2.72,1.78l2.04,2.46l1.77-0.41l0.95-1.23L33.77,404.6L33.77,404.6z","name":"French Polynesia"},"kn":{"path":"M276.6,283.37l-1.5,0.62l0.53,1.33l1.76-1.15l-0.35-0.36L276.6,283.37L276.6,283.37z","name":"Saint Kitts and Nevis"},"ag":{"path":"M279.07,284.88l-0.88,1.87l1.06,1.42l1.32-1.15L279.07,284.88L279.07,284.88z","name":"Antigua and Barbuda"},"dm":{"path":"M282.07,290.03l-1.06,0.98l0.79,1.6l1.5-0.44L282.07,290.03L282.07,290.03z","name":"Dominica"},"lc":{"path":"M281.98,294.03l-0.71,1.51l1.15,1.24l1.5-0.8L281.98,294.03L281.98,294.03z","name":"Saint Lucia"},"bb":{"path":"M282.07,297.85l-1.23,0.89l0.97,1.78l1.59-0.89L282.07,297.85L282.07,297.85z","name":"Barbados"},"gd":{"path":"M280.57,301.31l-1.15,1.15l0.44,0.71h1.41l0.44-1.16L280.57,301.31L280.57,301.31z","name":"Grenada"},"tt":{"path":"M282.24,304.78l-1.06,0.98l-1.15,0.18v1.42l2.12,1.95l0.88-1.42l0.53-1.6l-0.18-1.33L282.24,304.78L282.24,304.78z","name":"Trinidad and Tobago"},"do":{"path":"M263.11,280.44l-5.29-3.46l-2.5-0.85l-0.84,6l0.88,1.69l1.15-1.33l3.35-0.89l2.91,0.62L263.11,280.44L263.11,280.44z","name":"Dominican Republic"},"ht":{"path":"M250.86,275.38l3.44,0.36l-0.41,4.22l-0.34,2.22l-4.01-0.22l-0.71,1.07l-1.23-0.09l-0.44-2.31l4.23-0.35l-0.26-2.4l-1.94-0.8L250.86,275.38L250.86,275.38z","name":"Haiti"},"fk":{"path":"M307.95,508.18l-2.63-0.29l-2.62,1.76l1.9,2.06L307.95,508.18L307.95,508.18M310.57,506.86l-0.87,2.79l-2.48,2.2l0.15,0.73l4.23-1.62l1.75-2.2L310.57,506.86L310.57,506.86z","name":"Falkland Islands"},"is":{"path":"M406.36,117.31l-1.96-1.11l-2.64,1.67l-2.27,2.1l0.06,1.17l2.94,0.37l-0.18,2.1l-1.04,1.05l0.25,0.68l2.94,0.19v3.4l4.23,0.74l2.51,1.42l2.82,0.12l4.84-2.41l3.74-4.94l0.06-3.34l-2.27-1.92l-1.9-1.61l-0.86,0.62l-1.29,1.67l-1.47-0.19l-1.47-1.61l-1.9,0.18l-2.76,2.29l-1.66,1.79l-0.92-0.8l-0.06-1.98l0.92-0.62L406.36,117.31L406.36,117.31z","name":"Iceland"},"no":{"path":"M488.26,53.96l-1.65-1.66l-3.66,1.78h-6.72L475.17,58l3.77,3.33l1.65-0.24l2.36-4.04l2,1.43l-1.42,2.85l-0.71,4.16l1.65,2.61l3.54-5.94l4.6-5.59l-1.77-1.54L488.26,53.96L488.26,53.96M490.26,46.83l-2.95,2.73l1.77,2.73h3.18l1.3,1.78l3.89,2.02l4.48-2.61l3.07-2.61l-1.06-2.14l-3.07-1.78l-2.24,2.02l-1.53-1.9l-1.18,0.12l-1.53,3.33l-2.24-2.26l-0.24-1.54L490.26,46.83L490.26,46.83M496.98,59.07l-2.36,2.14l-2,1.54l0.94,1.66l1.89,0.59l3.07-1.43l1.42-1.78l-1.3-2.14L496.98,59.07L496.98,59.07M515.46,102.14l2.02-1.48L517.3,99l-1.28-0.74l0.18-2.03h1.1v-1.11l-4.77-1.29l-7.15,0.74l-0.73,3.14L503,97.16l-1.1-1.85l-3.49,0.18L498.04,99l-1.65,0.74l-0.92-1.85l-7.34,5.91l1.47,1.66l-2.75,1.29l-6.24,12.38l-2.2,1.48l0.18,1.11l2.2,1.11l-0.55,2.4l-3.67-0.19l-1.1-1.29l-2.38,2.77l-1.47,1.11l-0.37,2.59l-1.28,0.74l-3.3,0.74l-1.65,5.18l1.1,8.5l1.28,3.88l1.47,1.48l3.3-0.18l4.77-4.62l1.83-3.14l0.55,4.62l3.12-5.54l0.18-15.53l2.54-1.6l0.76-8.57l7.7-11.09l3.67-1.29l1.65-2.03l5.5,1.29l2.75,1.66l0.92-4.62l4.59-2.77L515.46,102.14L515.46,102.14z","name":"Norway"},"lk":{"path":"M680.54,308.05l0.25,2.72l0.25,1.98l-1.47,0.25l0.74,4.45l2.21,1.24l3.43-1.98l-0.98-4.69l0.25-1.73l-3.19-2.96L680.54,308.05L680.54,308.05z","name":"Sri Lanka"},"cu":{"path":"M220.85,266.92v1.27l5.32,0.1l2.51-1.46l0.39,1.07l5.22,1.27l4.64,4.19l-1.06,1.46l0.19,1.66l3.87,0.97l3.87-1.75l1.74-1.75l-2.51-1.27l-12.95-7.6l-4.54-0.49L220.85,266.92L220.85,266.92z","name":"Cuba"},"bs":{"path":"M239.61,259.13l-1.26-0.39l-0.1,2.43l1.55,1.56l1.06-1.56L239.61,259.13L239.61,259.13M242.12,262.93l-1.74,0.97l1.64,2.34l0.87-1.17L242.12,262.93L242.12,262.93M247.73,264.68l-1.84-0.1l0.19,1.17l1.35,1.95l1.16-1.27L247.73,264.68L247.73,264.68M246.86,262.35l-3-1.27l-0.58-3.02l1.16-0.49l1.16,2.34l1.16,0.88L246.86,262.35L246.86,262.35M243.96,256.21l-1.55-0.39l-0.29-1.95l-1.64-0.58l1.06-1.07l1.93,0.68l1.45,0.88L243.96,256.21L243.96,256.21z","name":"Bahamas"},"jm":{"path":"M238.93,279.59l-3.48,0.88v0.97l2.03,1.17h2.13l1.35-1.56L238.93,279.59L238.93,279.59z","name":"Jamaica"},"ec":{"path":"M230.2,335.85l-4.73,2.94l-0.34,4.36l-0.95,1.43l2.98,2.86l-1.29,1.41l0.3,3.6l5.33,1.27l8.07-9.55l-0.02-3.33l-3.87-0.25L230.2,335.85L230.2,335.85z","name":"Ecuador"},"ca":{"path":"M203.73,35.89l0.22,4.02l-7.98,8.27l2,6.7l5.76-1.56l3.33-4.92l8.42-3.13l6.87-0.45l-5.32-5.81l-2.66,2.01l-2-0.67l-1.11-2.46l-2.44-2.46L203.73,35.89L203.73,35.89M214.15,24.05l-1.77,3.13l8.65,3.13l3.1-4.69l1.33,3.13h2.22l4.21-4.69l-5.1-1.34l-2-1.56l-2.66,2.68L214.15,24.05L214.15,24.05M229.23,30.31l-6.87,2.9v2.23l8.87,3.35l-2,2.23l1.33,2.9l5.54-2.46h4.66l2.22,3.57l3.77-3.8l-0.89-3.58l-3.1,1.12l-0.44-4.47l1.55-2.68h-1.55l-2.44,1.56l-1.11,0.89l0.67,3.13l-1.77,1.34l-2.66-0.22l-0.67-4.02L229.23,30.31L229.23,30.31M238.32,23.38l-0.67,2.23l4.21,2.01l3.1-1.79l-0.22-1.34L238.32,23.38L238.32,23.38M241.64,19.58l-3.1,1.12l0.22,1.56l6.87-0.45l-0.22-1.56L241.64,19.58L241.64,19.58M256.5,23.38l-0.44,1.56l-1.11,1.56v2.23l4.21-0.67l4.43,3.8h1.55v-3.8l-4.43-4.92L256.5,23.38L256.5,23.38M267.81,27.85l1.77,2.01l-1.55,2.68l1.11,2.9l4.88-2.68v-2.01l-2.88-3.35L267.81,27.85L267.81,27.85M274.24,22.71l0.22,3.57h5.99l1.55,1.34l-0.22,1.56l-5.32,0.67l3.77,5.14l5.1,0.89l7.09-3.13l-10.2-15.42l-3.1,2.01l0.22,2.68l-3.55-1.34L274.24,22.71L274.24,22.71M222.58,47.96l-8.42,2.23l-4.88,4.25l0.44,4.69l8.87,2.68l-2,4.47l-6.43-4.02l-1.77,3.35l4.21,2.9l-0.22,4.69l6.43,1.79l7.76-0.45l1.33-2.46l5.76,6.48l3.99-1.34l0.67-4.47l2.88,2.01l0.44-4.47l-3.55-2.23l0.22-14.07l-3.1-2.46L231.89,56L222.58,47.96L222.58,47.96M249.63,57.79l-2.88-1.34l-1.55,2.01l3.1,4.92l0.22,4.69l6.65-4.02v-5.81l2.44-2.46l-2.44-1.79h-3.99L249.63,57.79L249.63,57.79M263.82,55.78l-4.66,3.8l1.11,4.69h2.88l1.33-2.46l2,2.01l2-0.22l5.32-4.47L263.82,55.78L263.82,55.78M263.37,48.4l-1.11,2.23l4.88,1.79l1.33-2.01L263.37,48.4L263.37,48.4M260.49,39.91l-4.88,0.67l-2.88,2.68l5.32,0.22l-1.55,4.02l1.11,1.79l1.55-0.22l3.77-6.03L260.49,39.91L260.49,39.91M268.92,38.35l-2.66,0.89l0.44,3.57l4.43,2.9l0.22,2.23l-1.33,1.34l0.67,4.47l17.07,5.58l4.66,1.56l4.66-4.02l-5.54-4.47l-5.1,1.34l-7.09-0.67l-2.66-2.68l-0.67-7.37l-4.43-2.23L268.92,38.35L268.92,38.35M282.88,61.59L278,61.14l-5.76,2.23l-3.1,4.24l0.89,11.62l9.53,0.45l9.09,4.47l6.43,7.37l4.88-0.22l-1.33,6.92l-4.43,7.37l-4.88,2.23l-3.55-0.67l-1.77-1.56l-2.66,3.57l1.11,3.57l3.77,0.22l4.66-2.23l3.99,10.28l9.98,6.48l6.87-8.71l-5.76-9.38l3.33-3.8l4.66,7.82l8.42-7.37l-1.55-3.35l-5.76,1.79l-3.99-10.95l3.77-6.25l-7.54-8.04l-4.21,2.9l-3.99-8.71l-8.42,1.12l-2.22-10.5l-6.87,4.69l-0.67,5.81h-3.77l0.44-5.14L282.88,61.59L282.88,61.59M292.86,65.61l-1.77,1.79l1.55,2.46l7.32,0.89l-4.66-4.92L292.86,65.61L292.86,65.61M285.77,40.36v2.01l-4.88,1.12l1.33,2.23l5.54,2.23l6.21,0.67l4.43,3.13l4.43-2.46l-3.1-3.13h3.99l2.44-2.68l5.99-0.89v-1.34l-3.33-2.23l0.44-2.46l9.31,1.56l13.75-5.36l-5.1-1.56l1.33-1.79h10.64l1.77-1.79l-21.51-7.6l-5.1-1.79l-5.54,4.02l-6.21-5.14l-3.33-0.22l-0.67,4.25l-4.21-3.8l-4.88,1.56l0.89,2.46l7.32,1.56l-0.44,3.57l3.99,2.46l9.76-2.46l0.22,3.35l-7.98,3.8l-4.88-3.8l-4.43,0.45l4.43,6.26l-2.22,1.12l-3.33-2.9l-2.44,1.56l2.22,4.24h3.77l-0.89,4.02l-3.1-0.45l-3.99-4.25L285.77,40.36L285.77,40.36M266.01,101.85l-4.23,5.32l-0.26,5.86l3.7-2.13h4.49l3.17,2.93l2.91-2.4L266.01,101.85L266.01,101.85M317.52,171.05l-10.57,10.12l1.06,2.4l12.94,4.79l1.85-3.19l-1.06-5.32l-4.23,0.53l-2.38-2.66l3.96-3.99L317.52,171.05L317.52,171.05M158.22,48.66l1.99,3.01l1,4.02l4.98,1.25l3.49-3.76l2.99,1.51l8.47,0.75l5.98-2.51l1,8.28h3.49V57.7l3.49,0.25l8.72,10.29l5.73,3.51l-2.99,4.77l1.25,1.25L219,80.03l0.25,5.02l2.99,0.5l0.75-7.53l4.73-1.25l3.49,5.27l7.47,3.51l3.74,0.75l2.49-3.01l0.25-4.77l4.48-2.76l1.49,4.02l-3.99,7.03l0.5,3.51l2.24-3.51l4.48-4.02l0.25-5.27l-2.49-4.02l0.75-3.26l5.98-3.01l2.74,2.01l0.5,17.57l4.23-3.76l2.49,1.51l-3.49,6.02l4.48,1l6.48-10.04l5.48,5.77l-2.24,10.29l-5.48,3.01l-5.23-2.51l-9.46,2.01l1,3.26l-2.49,4.02l-7.72,1.76l-8.72,6.78l-7.72,10.29l-1,3.26l5.23,2.01l1.99,5.02l7.22,7.28l11.46,5.02l-2.49,11.54l-0.25,3.26l2.99,2.01l3.99-5.27l0.5-10.04l6.23-0.25l2.99-5.77l0.5-8.78l7.97-15.56l9.96,3.51l5.23,7.28l-2.24,7.28l3.99,2.26l9.71-6.53l2.74,17.82l8.97,10.79l0.25,5.52l-9.96,2.51l-4.73,5.02l-9.96-2.26l-4.98-0.25l-8.72,6.78l5.23-1.25l6.48-1.25l1.25,1.51l-1.74,5.52l0.25,5.02l2.99,2.01l2.99-0.75l1.5-2.26h1.99l-3.24,6.02l-6.23,0.25l-2.74,4.02h-3.49l-1-3.01l4.98-5.02l-5.98,2.01l-0.27-8.53l-1.72-1l-5.23,2.26l-0.5,4.27h-11.96l-10.21,7.03l-13.7,4.52l-1.49-2.01l6.9-10.3l-3.92-3.77l-2.49-4.78l-5.07-3.87l-5.44-0.45l-9.75-6.83l-70.71-11.62l-1.17-4.79l-6.48-6.02v-5.02l1-4.52l-0.5-2.51l-2.49-2.51l-0.5-4.02l6.48-4.52l-3.99-21.58l-5.48-0.25l-4.98-6.53L158.22,48.66L158.22,48.66M133.83,128.41l-1.7,3.26l0.59,2.31l1.11,0.69l-0.26,0.94l-1.19,0.34l0.34,3.43l1.28,1.29l1.02-1.11l-1.28-3.34l0.76-2.66l1.87-2.49l-1.36-2.31L133.83,128.41L133.83,128.41M139.45,147.95l-1.53,0.6l2.81,3.26l0.68,3.86l2.81,3l2.38-0.43v-3.94l-2.89-1.8L139.45,147.95L139.45,147.95z","name":"Canada"},"gt":{"path":"M194.88,291.52l5.93,4.34l5.98-7.43l-1.02-1.54l-2.04-0.07v-4.35l-1.53-0.93l-4.63,1.38l1.77,4.08L194.88,291.52L194.88,291.52z","name":"Guatemala"},"hn":{"path":"M207.55,288.78l9.24-0.35l2.74,3.26l-1.71-0.39l-3.29,0.14l-4.3,4.04l-1.84,4.09l-1.21-0.64l-0.01-4.48l-2.66-1.78L207.55,288.78L207.55,288.78z","name":"Honduras"},"sv":{"path":"M201.65,296.27l4.7,2.34l-0.07-3.71l-2.41-1.47L201.65,296.27L201.65,296.27z","name":"El Salvador"},"ni":{"path":"M217.74,292.11l2.19,0.44l0.07,4.49l-2.55,7.28l-6.87-0.68l-1.53-3.51l2.04-4.26l3.87-3.6L217.74,292.11L217.74,292.11z","name":"Nicaragua"},"cr":{"path":"M217.38,304.98l1.39,2.72l1.13,1.5l-1.52,4.51l-2.9-2.04l-4.74-4.34v-2.87L217.38,304.98L217.38,304.98z","name":"Costa Rica"},"pa":{"path":"M220.59,309.61l-1.46,4.56l4.82,1.25l2.99,0.59l0.51-3.53l3.21-1.62l2.85,1.47l1.12,1.79l1.36-0.16l1.07-3.25l-3.56-1.47l-2.7-1.47l-2.7,1.84l-3.21,1.62l-3.28-1.32L220.59,309.61L220.59,309.61z","name":"Panama"},"co":{"path":"M253.73,299.78l-2.06-0.21l-13.62,11.23l-1.44,3.95l-1.86,0.21l0.83,8.73l-4.75,11.65l5.16,4.37l6.61,0.42l4.54,6.66l6.6,0.21l-0.21,4.99H256l2.68-9.15l-2.48-3.12l0.62-5.82l5.16-0.42l-0.62-13.52l-11.56-3.74l-2.68-7.28L253.73,299.78L253.73,299.78z","name":"Colombia"},"ve":{"path":"M250.46,305.92l0.44,2.59l3.25,1.03l0.74-4.77l3.43-3.55l3.43,4.02l7.89,2.15l6.68-1.4l4.55,5.61l3.43,2.15l-3.76,5.73l1.26,4.34l-2.15,2.66l-2.23,1.87l-4.83-2.43l-1.11,1.12v3.46l3.53,1.68l-2.6,2.81l-2.6,2.81l-3.43-0.28l-3.45-3.79l-0.73-14.26l-11.78-4.02l-2.14-6.27L250.46,305.92L250.46,305.92z","name":"Venezuela"},"gy":{"path":"M285.05,314.13l7.22,6.54l-2.87,3.32l-0.23,1.97l3.77,3.89l-0.09,3.74l-6.56,2.5l-3.93-5.31l0.84-6.38l-1.68-4.75L285.05,314.13L285.05,314.13z","name":"Guyana"},"sr":{"path":"M293.13,321.14l2.04,1.87l3.16-1.96l2.88,0.09l-0.37,1.12l-1.21,2.52l-0.19,6.27l-5.75,2.34l0.28-4.02l-3.71-3.46l0.19-1.78L293.13,321.14L293.13,321.14z","name":"Suriname"},"gf":{"path":"M302.13,321.8l5.85,3.65l-3.06,6.08l-1.11,1.4l-3.25-1.87l0.09-6.55L302.13,321.8L302.13,321.8z","name":"French Guiana"},"pe":{"path":"M225.03,349.52l-1.94,1.96l0.13,3.13l16.94,30.88l17.59,11.34l2.72-4.56l0.65-10.03l-1.42-6.25l-4.79-8.08l-2.85,0.91l-1.29,1.43l-5.69-6.52l1.42-7.69l6.6-4.3l-0.52-4.04l-6.72-0.26l-3.49-5.86l-1.94-0.65l0.13,3.52l-8.66,10.29l-6.47-1.56L225.03,349.52L225.03,349.52z","name":"Peru"},"bo":{"path":"M258.71,372.79l8.23-3.59l2.72,0.26l1.81,7.56l12.54,4.17l2.07,6.39l5.17,0.65l2.2,5.47l-1.55,4.95l-8.41,0.65l-3.1,7.95l-6.6-0.13l-2.07-0.39l-3.81,3.7l-1.88-0.18l-6.47-14.99l1.79-2.68l0.63-10.6l-1.6-6.31L258.71,372.79L258.71,372.79z","name":"Bolivia"},"py":{"path":"M291.76,399.51l2.2,2.4l-0.26,5.08l6.34-0.39l4.79,6.13l-0.39,5.47l-3.1,4.69l-6.34,0.26l-0.26-2.61l1.81-4.3l-6.21-3.91h-5.17l-3.88-4.17l2.82-8.06L291.76,399.51L291.76,399.51z","name":"Paraguay"},"uy":{"path":"M300.36,431.93l-2.05,2.19l0.85,11.78l6.44,1.87l8.19-8.21L300.36,431.93L300.36,431.93z","name":"Uruguay"},"ar":{"path":"M305.47,418.2l1.94,1.82l-7.37,10.95l-2.59,2.87l0.9,12.51l5.69,6.91l-4.78,8.34l-3.62,1.56h-4.14l1.16,6.51l-6.47,2.22l1.55,5.47l-3.88,12.38l4.79,3.91l-2.59,6.38l-4.4,6.91l2.33,4.82l-5.69,0.91l-4.66-5.73l-0.78-17.85l-7.24-30.32l2.19-10.6l-4.66-13.55l3.1-17.59l2.85-3.39l-0.7-2.57l3.66-3.34l8.16,0.56l4.56,4.87l5.27,0.09l5.4,3.3l-1.59,3.72l0.38,3.76l7.65-0.36L305.47,418.2L305.47,418.2M288.92,518.79l0.26,5.73l4.4-0.39l3.75-2.48l-6.34-1.3L288.92,518.79L288.92,518.79z","name":"Argentina"},"cl":{"path":"M285.04,514.1l-4.27,9.38l7.37,0.78l0.13-6.25L285.04,514.1L285.04,514.1M283.59,512.63l-3.21,3.55l-0.39,4.17l-6.21-3.52l-6.6-9.51l-1.94-3.39l2.72-3.52l-0.26-4.43l-3.1-1.3l-2.46-1.82l0.52-2.48l3.23-0.91l0.65-14.33l-5.04-2.87l-3.29-74.59l0.85-1.48l6.44,14.85l2.06,0.04l0.67,2.37l-2.74,3.32l-3.15,17.87l4.48,13.76l-2.07,10.42l7.3,30.64l0.77,17.92l5.23,6.05L283.59,512.63L283.59,512.63M262.28,475.14l-1.29,1.95l0.65,3.39l1.29,0.13l0.65-4.3L262.28,475.14L262.28,475.14z","name":"Chile"},"br":{"path":"M314.24,438.85l6.25-12.02l0.23-10.1l11.66-7.52h6.53l5.13-8.69l0.93-16.68l-2.1-4.46l12.36-11.28l0.47-12.45l-16.79-8.22l-20.28-6.34l-9.56-0.94l2.57-5.4l-0.7-8.22l-2.09-0.69l-3.09,6.14l-1.62,2.03l-4.16-1.84l-13.99,4.93l-4.66-5.87l0.75-6.13l-4.4,4.48l-4.86-2.62l-0.49,0.69l0.01,2.13l4.19,2.25l-6.29,6.63l-3.97-0.04l-4.02-4.09l-4.55,0.14l-0.56,4.86l2.61,3.17l-3.08,9.87l-3.6,0.28l-5.73,3.62l-1.4,7.11l4.97,5.32l0.91-1.03l3.49-0.94l2.98,5.02l8.53-3.66l3.31,0.19l2.28,8.07l12.17,3.86l2.1,6.44l5.18,0.62l2.47,6.15l-1.67,5.47l2.18,2.86l-0.32,4.26l5.84-0.55l5.35,6.76l-0.42,4.75l3.17,2.68l-7.6,11.51L314.24,438.85L314.24,438.85z","name":"Brazil"},"bz":{"path":"M204.56,282.4l-0.05,3.65h0.84l2.86-5.34h-1.94L204.56,282.4L204.56,282.4z","name":"Belize"},"mn":{"path":"M673.8,170.17l5.82-7.72l6.99,3.23l4.75,1.27l5.82-5.34l-3.95-2.91l2.6-3.67l7.76,2.74l2.69,4.41l4.86,0.13l2.54-1.89l5.23-0.21l1.14,1.94l8.69,0.44l5.5-5.61l7.61,0.8l-0.44,7.64l3.33,0.76l4.09-1.86l4.33,2.14l-0.1,1.08l-3.14,0.09l-3.27,6.86l-2.54,0.25l-9.88,12.91l-10.09,4.45l-6.31,0.49l-5.24-3.38l-6.7,3.58l-6.6-2.05l-1.87-4.79l-12.5-0.88l-6.4-10.85l-3.11-0.2L673.8,170.17L673.8,170.17z","name":"Mongolia"},"kp":{"path":"M778.28,194.27l1.84,0.77l0.56,6.44l3.65,0.21l3.44-4.03l-1.19-1.06l0.14-4.32l3.16-3.82l-1.61-2.9l1.05-1.2l0.58-3l-1.83-0.83l-1.56,0.79l-1.93,5.86l-3.12-0.27l-3.61,4.26L778.28,194.27L778.28,194.27z","name":"North Korea"},"kr":{"path":"M788.34,198.2l6.18,5.04l1.05,4.88l-0.21,2.62l-3.02,3.4l-2.6,0.14l-2.95-6.37l-1.12-3.04l1.19-0.92l-0.28-1.27l-1.47-0.66L788.34,198.2L788.34,198.2z","name":"South Korea"},"kz":{"path":"M576.69,188.62l4.1-1.75l4.58-0.16l0.32,7h-2.68l-2.05,3.34l2.68,4.45l3.95,2.23l0.36,2.55l1.45-0.48l1.34-1.59l2.21,0.48l1.11,2.23h2.84v-2.86l-1.74-5.09l-0.79-4.13l5.05-2.23l6.79,1.11l4.26,4.29l9.63-0.95l5.37,7.63l6.31,0.32l1.74-2.86l2.21-0.48l0.32-3.18l3.31-0.16l1.74,2.07l1.74-4.13l14.99,2.07l2.52-3.34l-4.26-5.25l5.68-12.4l4.58,0.32l3.16-7.63l-6.31-0.64l-3.63-3.5l-10,1.16l-12.88-12.45l-4.54,4.03l-13.77-6.25l-16.89,8.27l-0.47,5.88l3.95,4.61l-7.7,4.35l-9.99-0.22l-2.09-3.07l-7.83-0.43l-7.42,4.77l-0.16,6.52L576.69,188.62L576.69,188.62z","name":"Kazakhstan"},"tm":{"path":"M593.85,207.59l-0.62,2.63h-4.15v3.56l4.46,2.94l-1.38,4.03v1.86l1.85,0.31l2.46-3.25l5.54-1.24l11.84,4.49l0.15,3.25l6.61,0.62l7.38-7.75l-0.92-2.48l-4.92-1.08l-13.84-8.99l-0.62-3.25h-5.23l-2.31,4.34h-2.31L593.85,207.59L593.85,207.59z","name":"Turkmenistan"},"uz":{"path":"M628.92,219.06l3.08,0.16v-5.27l-2.92-1.7l4.92-6.2h2l2,2.33l5.23-2.01l-7.23-2.48l-0.28-1.5l-1.72,0.42l-1.69,2.94l-7.29-0.24l-5.35-7.57l-9.4,0.93l-4.48-4.44l-6.2-1.05l-4.5,1.83l2.61,8.68l0.03,2.92l1.9,0.04l2.33-4.44l6.2,0.08l0.92,3.41l13.29,8.82l5.14,1.18L628.92,219.06L628.92,219.06z","name":"Uzbekistan"},"tj":{"path":"M630.19,211.84l4.11-5.1h1.55l0.54,1.14l-1.9,1.38v1.14l1.25,0.9l6.01,0.36l1.96-0.84l0.89,0.18l0.6,1.92l3.57,0.36l1.79,3.78l-0.54,1.14l-0.71,0.06l-0.71-1.44l-1.55-0.12l-2.68,0.36l-0.18,2.52l-2.68-0.18l0.12-3.18l-1.96-1.92l-2.98,2.46l0.06,1.62l-2.62,0.9h-1.55l0.12-5.58L630.19,211.84L630.19,211.84z","name":"Tajikistan"},"kg":{"path":"M636.81,199.21l-0.31,2.53l0.25,1.56l8.7,2.92l-7.64,3.08l-0.87-0.72l-1.65,1.06l0.08,0.58l0.88,0.4l5.36,0.14l2.72-0.82l3.49-4.4l4.37,0.76l5.27-7.3l-14.1-1.92l-1.95,4.73l-2.46-2.64L636.81,199.21L636.81,199.21z","name":"Kyrgyz Republic"},"af":{"path":"M614.12,227.05l1.59,12.46l3.96,0.87l0.37,2.24l-2.84,2.37l5.29,4.27l10.28-3.7l0.82-4.38l6.47-4.04l2.48-9.36l1.85-1.99l-1.92-3.34l6.26-3.87l-0.8-1.12l-2.89,0.18l-0.26,2.66l-3.88-0.04l-0.07-3.55l-1.25-1.49l-2.1,1.91l0.06,1.75l-3.17,1.2l-5.85-0.37l-7.6,7.96L614.12,227.05L614.12,227.05z","name":"Afghanistan"},"pk":{"path":"M623.13,249.84l2.6,3.86l-0.25,1.99l-3.46,1.37l-0.25,3.24h3.96l1.36-1.12h7.54l6.8,5.98l0.87-2.87h5.07l0.12-3.61l-5.19-4.98l1.11-2.74l5.32-0.37l7.17-14.95l-3.96-3.11l-1.48-5.23l9.64-0.87l-5.69-8.1l-3.03-0.82l-1.24,1.5l-0.93,0.07l-5.69,3.61l1.86,3.12l-2.1,2.24l-2.6,9.59l-6.43,4.11l-0.87,4.49L623.13,249.84L623.13,249.84z","name":"Pakistan"},"in":{"path":"M670.98,313.01l4.58-2.24l2.72-9.84l-0.12-12.08l15.58-16.82v-3.99l3.21-1.25l-0.12-4.61l-3.46-6.73l1.98-3.61l4.33,3.99l5.56,0.25v2.24l-1.73,1.87l0.37,1l2.97,0.12l0.62,3.36h0.87l2.23-3.99l1.11-10.46l3.71-2.62l0.12-3.61l-1.48-2.87l-2.35-0.12l-9.2,6.08l0.58,3.91l-6.46-0.02l-2.28-2.79l-1.24,0.16l0.42,3.88l-13.97-1l-8.66-3.86l-0.46-4.75l-5.77-3.58l-0.07-7.37l-3.96-4.53l-9.1,0.87l0.99,3.96l4.46,3.61l-7.71,15.78l-5.16,0.39l-0.85,1.9l5.08,4.7l-0.25,4.75l-5.19-0.08l-0.56,2.36l4.31-0.19l0.12,1.87l-3.09,1.62l1.98,3.74l3.83,1.25l2.35-1.74l1.11-3.11l1.36-0.62l1.61,1.62l-0.49,3.99l-1.11,1.87l0.25,3.24L670.98,313.01L670.98,313.01z","name":"India"},"np":{"path":"M671.19,242.56l0.46,4.27l8.08,3.66l12.95,0.96l-0.49-3.13l-8.65-2.38l-7.34-4.37L671.19,242.56L671.19,242.56z","name":"Nepal"},"bt":{"path":"M695.4,248.08l1.55,2.12l5.24,0.04l-0.53-2.9L695.4,248.08L695.4,248.08z","name":"Bhutan"},"bd":{"path":"M695.57,253.11l-1.31,2.37l3.4,6.46l0.1,5.04l0.62,1.35l3.99,0.07l2.26-2.17l1.64,0.99l0.33,3.07l1.31-0.82l0.08-3.92l-1.1-0.13l-0.69-3.33l-2.78-0.1l-0.69-1.85l1.7-2.27l0.03-1.12h-4.94L695.57,253.11L695.57,253.11z","name":"Bangladesh"},"mm":{"path":"M729.44,303.65l-2.77-4.44l2.01-2.82l-1.9-3.49l-1.79-0.34l-0.34-5.86l-2.68-5.19l-0.78,1.24l-1.79,3.04l-2.24,0.34l-1.12-1.47l-0.56-3.95l-1.68-3.16l-6.84-6.45l1.68-1.11l0.31-4.67l2.5-4.2l1.08-10.45l3.62-2.47l0.12-3.81l2.17,0.72l3.42,4.95l-2.54,5.44l1.71,4.27l4.23,1.66l0.77,4.65l5.68,0.88l-1.57,2.71l-7.16,2.82l-0.78,4.62l5.26,6.76l0.22,3.61l-1.23,1.24l0.11,1.13l3.92,5.75l0.11,5.97L729.44,303.65L729.44,303.65z","name":"Myanmar"},"th":{"path":"M730.03,270.47l3.24,4.17v5.07l1.12,0.56l5.15-2.48l1.01,0.34l6.15,7.1l-0.22,4.85l-2.01-0.34l-1.79-1.13l-1.34,0.11l-2.35,3.94l0.45,2.14l1.9,1.01l-0.11,2.37l-1.34,0.68l-4.59-3.16v-2.82l-1.9-0.11l-0.78,1.24l-0.4,12.62l2.97,5.42l5.26,5.07l-0.22,1.47l-2.8-0.11l-2.57-3.83h-2.69l-3.36-2.71l-1.01-2.82l1.45-2.37l0.5-2.14l1.58-2.8l-0.07-6.44l-3.86-5.58l-0.16-0.68l1.25-1.26l-0.29-4.43l-5.14-6.51l0.6-3.75L730.03,270.47L730.03,270.47z","name":"Thailand"},"kh":{"path":"M740.48,299.47l4.09,4.37l7.61-5.64l0.67-8.9l-3.93,2.71l-2.04-1.14l-2.77-0.37l-1.55-1.09l-0.75,0.04l-2.03,3.33l0.33,1.54l2.06,1.15l-0.25,3.13L740.48,299.47L740.48,299.47z","name":"Cambodia"},"la":{"path":"M735.47,262.93l-2.42,1.23l-2.01,5.86l3.36,4.28l-0.56,4.73l0.56,0.23l5.59-2.71l7.5,8.38l-0.18,5.28l1.63,0.88l4.03-3.27l-0.33-2.59l-11.63-11.05l0.11-1.69l1.45-1.01l-1.01-2.82l-4.81-0.79L735.47,262.93L735.47,262.93z","name":"Lao People's Democratic Republic"},"vn":{"path":"M745.06,304.45l1.19,1.87l0.22,2.14l3.13,0.34l3.8-5.07l3.58-1.01l1.9-5.18l-0.89-8.34l-3.69-5.07l-3.89-3.11l-4.95-8.5l3.55-5.94l-5.08-5.83l-4.07-0.18l-3.66,1.97l1.09,4.71l4.88,0.86l1.31,3.63l-1.72,1.12l0.11,0.9l11.45,11.2l0.45,3.29l-0.69,10.4L745.06,304.45L745.06,304.45z","name":"Vietnam"},"ge":{"path":"M555.46,204.16l3.27,4.27l4.08,1.88l2.51-0.01l4.31-1.17l1.08-1.69l-12.75-4.77L555.46,204.16L555.46,204.16z","name":"Georgia"},"am":{"path":"M569.72,209.89l4.8,6.26l-1.41,1.65l-3.4-0.59l-4.22-3.78l0.23-2.48L569.72,209.89L569.72,209.89z","name":"Armenia"},"az":{"path":"M571.41,207.72l-1.01,1.72l4.71,6.18l1.64-0.53l2.7,2.83l1.17-4.96l2.93,0.47l-0.12-1.42l-4.82-4.22l-0.92,2.48L571.41,207.72L571.41,207.72z","name":"Azerbaijan"},"ir":{"path":"M569.65,217.95l-1.22,1.27l0.12,2.01l1.52,2.13l5.39,5.9l-0.82,2.36h-0.94l-0.47,2.36l3.05,3.9l2.81,0.24l5.63,7.79l3.16,0.24l2.46,1.77l0.12,3.54l9.73,5.67h3.63l2.23-1.89l2.81-0.12l1.64,3.78l10.51,1.46l0.31-3.86l3.48-1.26l0.16-1.38l-2.77-3.78l-6.17-4.96l3.24-2.95l-0.23-1.3l-4.06-0.63l-1.72-13.7l-0.2-3.15l-11.01-4.21l-4.88,1.1l-2.73,3.35l-2.42-0.16l-0.7,0.59l-5.39-0.35l-6.8-4.96l-2.53-2.77l-1.16,0.28l-2.09,2.39L569.65,217.95L569.65,217.95z","name":"Iran"},"tr":{"path":"M558.7,209.19l-2.23,2.36l-8.2-0.24l-4.92-2.95l-4.8-0.12l-5.51,3.9l-5.16,0.24l-0.47,2.95h-5.86l-2.34,2.13v1.18l1.41,1.18v1.3l-0.59,1.54l0.59,1.3l1.88-0.94l1.88,2.01l-0.47,1.42l-0.7,0.95l1.05,1.18l5.16,1.06l3.63-1.54v-2.24l1.76,0.35l4.22,2.48l4.57-0.71l1.99-1.89l1.29,0.47v2.13h1.76l1.52-2.95l13.36-1.42l5.83-0.71l-1.54-2.02l-0.03-2.73l1.17-1.4l-4.26-3.42l0.23-2.95h-2.34L558.7,209.19L558.7,209.19M523.02,209.7l-0.16,3.55l3.1-0.95l1.42-0.95l-0.42-1.54l-1.47-1.17L523.02,209.7L523.02,209.7z","name":"Turkey"},"om":{"path":"M598.38,280.84l7.39-4.26l1.31-6.25l-1.62-0.93l0.67-6.7l1.41-0.82l1.51,2.37l8.99,4.7v2.61l-10.89,16.03l-5.01,0.17L598.38,280.84L598.38,280.84z","name":"Oman"},"ae":{"path":"M594.01,264.94l0.87,3.48l9.86,0.87l0.69-7.14l1.9-1.04l0.52-2.61l-3.11,0.87l-3.46,5.23L594.01,264.94L594.01,264.94z","name":"United Arab Emirates"},"qa":{"path":"M592.63,259.02l-0.52,4.01l1.54,1.17l1.4-0.13l0.52-5.05l-1.21-0.87L592.63,259.02L592.63,259.02z","name":"Qatar"},"kw":{"path":"M583.29,247.17l-2.25-1.22l-1.56,1.57l0.17,3.14l3.63,1.39L583.29,247.17L583.29,247.17z","name":"Kuwait"},"sa":{"path":"M584,253.24l7.01,9.77l2.26,1.8l1.01,4.38l10.79,0.85l1.22,0.64l-1.21,5.4l-7.09,4.18l-10.37,3.14l-5.53,5.4l-6.57-3.83l-3.98,3.48L566,279.4l-3.8-1.74l-1.38-2.09v-4.53l-13.83-16.72l-0.52-2.96h3.98l4.84-4.18l0.17-2.09l-1.38-1.39l2.77-2.26l5.88,0.35l10.03,8.36l5.92-0.27l0.38,1.46L584,253.24L584,253.24z","name":"Saudi Arabia"},"sy":{"path":"M546.67,229.13l-0.35,2.54l2.82,1.18l-0.12,7.04l2.82-0.06l2.82-2.13l1.06-0.18l6.4-5.09l1.29-7.39l-12.79,1.3l-1.35,2.96L546.67,229.13L546.67,229.13z","name":"Syrian Arab Republic"},"iq":{"path":"M564.31,225.03l-1.56,7.71l-6.46,5.38l0.41,2.54l6.31,0.43l10.05,8.18l5.62-0.16l0.15-1.89l2.06-2.21l2.88,1.63l0.38-0.36l-5.57-7.41l-2.64-0.16l-3.51-4.51l0.7-3.32l1.07-0.14l0.37-1.47l-4.78-5.03L564.31,225.03L564.31,225.03z","name":"Iraq"},"jo":{"path":"M548.9,240.78l-2.46,8.58l-0.11,1.31h3.87l4.33-3.82l0.11-1.45l-1.77-1.81l3.17-2.63l-0.46-2.44l-0.87,0.2l-2.64,1.89L548.9,240.78L548.9,240.78z","name":"Jordan"},"lb":{"path":"M546.2,232.44l0.06,1.95l-0.82,2.96l2.82,0.24l0.18-4.2L546.2,232.44L546.2,232.44z","name":"Lebanon"},"il":{"path":"M545.32,238.06l-1.58,5.03l2.05,6.03l2.35-8.81v-1.89L545.32,238.06L545.32,238.06z","name":"Israel"},"cy":{"path":"M543.21,229.84l1.23,0.89l-3.81,3.61l-1.82-0.06l-1.35-0.95l0.18-1.77l2.76-0.18L543.21,229.84L543.21,229.84z","name":"Cyprus"},"gb":{"path":"M446.12,149.08l-1.83,2.77l0.73,1.11h4.22v1.85l-1.1,1.48l0.73,3.88l2.38,4.62l1.83,4.25l2.93,1.11l1.28,2.22l-0.18,2.03l-1.83,1.11l-0.18,0.92l1.28,0.74l-1.1,1.48l-2.57,1.11l-4.95-0.55l-7.71,3.51l-2.57-1.29l7.34-4.25l-0.92-0.55l-3.85-0.37l2.38-3.51l0.37-2.96l3.12-0.37l-0.55-5.73l-3.67-0.18l-1.1-1.29l0.18-4.25l-2.2,0.18l2.2-7.39l4.04-2.96L446.12,149.08L446.12,149.08M438.42,161.47l-3.3,0.37l-0.18,2.96l2.2,1.48l2.38-0.55l0.92-1.66L438.42,161.47L438.42,161.47z","name":"United Kingdom"},"ie":{"path":"M439.51,166.55l-0.91,6l-8.07,2.96h-2.57l-1.83-1.29v-1.11l4.04-2.59l-1.1-2.22l0.18-3.14l3.49,0.18l1.6-3.76l-0.21,3.34l2.71,2.15L439.51,166.55L439.51,166.55z","name":"Ireland"},"se":{"path":"M497.72,104.58l1.96,1.81h3.67l2.02,3.88l0.55,6.65l-4.95,3.51v3.51l-3.49,4.81l-2.02,0.18l-2.75,4.62l0.18,4.44l4.77,3.51l-0.37,2.03l-1.83,2.77l-2.75,2.4l0.18,7.95l-4.22,1.48l-1.47,3.14h-2.02l-1.1-5.54l-4.59-7.04l3.77-6.31l0.26-15.59l2.6-1.43l0.63-8.92l7.41-10.61L497.72,104.58L497.72,104.58M498.49,150.17l-2.11,1.67l1.06,2.45l1.87-1.82L498.49,150.17L498.49,150.17z","name":"Sweden"},"fi":{"path":"M506.79,116.94l2.07,0.91l1.28,2.4l-1.28,1.66l-6.42,7.02l-1.1,3.7l1.47,5.36l4.95,3.7l6.6-3.14l5.32-0.74l4.95-7.95l-3.67-8.69l-3.49-8.32l0.55-5.36l-2.2-0.37l-0.57-3.91l-2.96-4.83l-3.28,2.27l-1.29,5.27l-3.48-2.09l-4.84-1.18l-1.08,1.26l1.86,1.68l3.39-0.06l2.73,4.41L506.79,116.94L506.79,116.94z","name":"Finland"},"lv":{"path":"M518.07,151.37l-6.85-1.11l0.15,3.83l6.35,3.88l2.6-0.76l-0.15-2.92L518.07,151.37L518.07,151.37z","name":"Latvia"},"lt":{"path":"M510.81,154.7l-2.15-0.05l-2.95,2.82h-2.5l0.15,3.53l-1.5,2.77l5.4,0.05l1.55-0.2l1.55,1.87l3.55-0.15l3.4-4.33l-0.2-2.57L510.81,154.7L510.81,154.7z","name":"Lithuania"},"by":{"path":"M510.66,166.29l1.5,2.47l-0.6,1.97l0.1,1.56l0.55,1.87l3.1-1.76l3.85,0.1l2.7,1.11h6.85l2-4.79l1.2-1.81v-1.21l-4.3-6.05l-3.8-1.51l-3.1-0.35l-2.7,0.86l0.1,2.72l-3.75,4.74L510.66,166.29L510.66,166.29z","name":"Belarus"},"pl":{"path":"M511.46,174.76l0.85,1.56l0.2,1.66l-0.7,1.61l-1.6,3.08l-1.35,0.61l-1.75-0.76l-1.05,0.05l-2.55,0.96l-2.9-0.86l-4.7-3.33l-4.6-2.47l-1.85-2.82l-0.35-6.65l3.6-3.13l4.7-1.56l1.75-0.2l-0.7,1.41l0.45,0.55l7.91,0.15l1.7-0.05l2.8,4.29l-0.7,1.76l0.3,2.07L511.46,174.76L511.46,174.76z","name":"Poland"},"it":{"path":"M477.56,213.38l-2.65,1.34l0.35,5.17l2.12,0.36l1.59-1.52v-4.9L477.56,213.38L477.56,213.38M472.27,196.98l-0.62,1.57l0.17,1.71l2.39,2.79l3.76-0.13l8.3,9.64l5.18,1.5l3.06,2.89l0.73,6.59l1.64-0.96l1.42-3.59l-0.35-2.58l2.43-0.22l0.35-1.46l-6.85-3.28l-6.5-6.39l-2.59-3.82l-0.63-3.63l3.31-0.79l-0.85-2.39l-2.03-1.71l-1.75-0.08l-2.44,0.67l-2.3,3.22l-1.39,0.92l-2.15-1.32L472.27,196.98L472.27,196.98M492.44,223.02l-1.45-0.78l-4.95,0.78l0.17,1.34l4.45,2.24l0.67,0.73l1.17,0.17L492.44,223.02L492.44,223.02z","name":"Italy"},"fr":{"path":"M477.83,206.96l-1.95,1.96l-0.18,1.78l1.59,0.98l0.62-0.09l0.35-2.59L477.83,206.96L477.83,206.96M460.4,178.7l-2.21,0.54l-4.42,4.81l-1.33,0.09l-1.77-1.25l-1.15,0.27l-0.88,2.76l-6.46,0.18l0.18,1.43l4.42,2.94l5.13,4.1l-0.09,4.9l-2.74,4.81l5.93,2.85l6.02,0.18l1.86-2.14l3.8,0.09l1.06,0.98l3.8-0.27l1.95-2.5l-2.48-2.94l-0.18-1.87l0.53-2.05l-1.24-1.78l-2.12,0.62l-0.27-1.6l4.69-5.17v-3.12l-3.1-1.78l-1.59-0.27L460.4,178.7L460.4,178.7z","name":"France"},"nl":{"path":"M470.09,168.27l-4.53,2.23l0.96,0.87l0.1,2.23l-0.96-0.19l-1.06-1.65l-2.53,4.01l3.89,0.81l1.45,1.53l0.77,0.02l0.51-3.46l2.45-1.03L470.09,168.27L470.09,168.27z","name":"Netherlands"},"be":{"path":"M461.61,176.52l-0.64,1.6l6.88,4.54l1.98,0.47l0.07-2.15l-1.73-1.94h-1.06l-1.45-1.65L461.61,176.52L461.61,176.52z","name":"Belgium"},"de":{"path":"M471.14,167.88l3.57-0.58v-2.52l2.99-0.49l1.64,1.65l1.73,0.19l2.7-1.17l2.41,0.68l2.12,1.84l0.29,6.89l2.12,2.82l-2.79,0.39l-4.63,2.91l0.39,0.97l4.14,3.88l-0.29,1.94l-3.85,1.94l-3.57,0.1l-0.87,1.84h-1.83l-0.87-1.94l-3.18-0.78l-0.1-3.2l-2.7-1.84l0.29-2.33l-1.83-2.52l0.48-3.3l2.5-1.17L471.14,167.88L471.14,167.88z","name":"Germany"},"dk":{"path":"M476.77,151.5l-4.15,4.59l-0.15,2.99l1.89,4.93l2.96-0.56l-0.37-4.03l2.04-2.28l-0.04-1.79l-1.44-3.73L476.77,151.5L476.77,151.5M481.44,159.64l-0.93-0.04l-1.22,1.12l0.15,1.75l2.89,0.08l0.15-1.98L481.44,159.64L481.44,159.64z","name":"Denmark"},"ch":{"path":"M472.91,189.38l-4.36,4.64l0.09,0.47l1.79-0.56l1.61,2.24l2.72-0.96l1.88,1.46l0.77-0.44l2.32-3.64l-0.59-0.56l-2.29-0.06l-1.11-2.27L472.91,189.38L472.91,189.38z","name":"Switzerland"},"cz":{"path":"M488.43,184.87h2.97h1.46l2.37,1.69l4.39-3.65l-4.26-3.04l-4.22-2.04l-2.89,0.52l-3.92,2.52L488.43,184.87L488.43,184.87z","name":"Czech Republic"},"sk":{"path":"M495.84,187.13l0.69,0.61l0.09,1.04l7.63-0.17l5.64-2.43l-0.09-2.47l-1.08,0.48l-1.55-0.83l-0.95-0.04l-2.5,1l-3.4-0.82L495.84,187.13L495.84,187.13z","name":"Slovakia"},"at":{"path":"M480.63,190.12l-0.65,1.35l0.56,0.96l2.33-0.48h1.98l2.15,1.82l4.57-0.83l3.36-2l0.86-1.35l-0.13-1.74l-3.02-2.26l-4.05,0.04l-0.34,2.3l-4.26,2.08L480.63,190.12L480.63,190.12z","name":"Austria"},"hu":{"path":"M496.74,189.6l-1.16,1.82l0.09,2.78l1.85,0.95l5.69,0.17l7.93-6.68l0.04-1.48l-0.86-0.43l-5.73,2.6L496.74,189.6L496.74,189.6z","name":"Hungary"},"si":{"path":"M494.8,191.99l-2.54,1.52l-4.74,1.04l0.95,2.74l3.32,0.04l3.06-2.56L494.8,191.99L494.8,191.99z","name":"Slovenia"},"hr":{"path":"M495.62,195.16l-3.53,2.91h-3.58l-0.43,2.52l1.64,0.43l0.82-1.22l1.29,1.13l1.03,3.6l7.07,3.3l0.7-0.8l-7.17-7.4l0.73-1.35l6.81-0.26l0.69-2.17l-4.44,0.13L495.62,195.16L495.62,195.16z","name":"Croatia"},"ba":{"path":"M494.8,198.94l-0.37,0.61l6.71,6.92l2.46-3.62l-0.09-1.43l-2.15-2.61L494.8,198.94L494.8,198.94z","name":"Bosnia and Herzegovina"},"mt":{"path":"M492.61,230.47l-1.67,0.34l0.06,1.85l1.5,0.5l0.67-0.56L492.61,230.47L492.61,230.47z","name":"Malta"},"ua":{"path":"M515.57,173.15l-2.9,1.63l0.72,3.08l-2.68,5.65l0.02,2.49l1.26,0.8l8.08,0.4l2.26-1.87l2.42,0.81l3.47,4.63l-2.54,4.56l3.02,0.88l3.95-4.55l2.26,0.41l2.1,1.46l-1.85,2.44l2.5,3.9h2.66l1.37-2.6l2.82-0.57l0.08-2.11l-5.24-0.81l0.16-2.27h5.08l5.48-4.39l2.42-2.11l0.4-6.66l-10.8-0.97l-4.43-6.25l-3.06-1.05l-3.71,0.16l-1.67,4.13l-7.6,0.1l-2.47-1.14L515.57,173.15L515.57,173.15z","name":"Ukraine"},"md":{"path":"M520.75,187.71l3.1,4.77l-0.26,2.7l1.11,0.05l2.63-4.45l-3.16-3.92l-1.79-0.74L520.75,187.71L520.75,187.71z","name":"Moldova"},"ro":{"path":"M512.18,187.6l-0.26,1.48l-5.79,4.82l4.84,7.1l3.1,2.17h5.58l1.84-1.54l2.47-0.32l1.84,1.11l3.26-3.71l-0.63-1.86l-3.31-0.85l-2.26-0.11l0.11-3.18l-3-4.72L512.18,187.6L512.18,187.6z","name":"Romania"},"rs":{"path":"M505.55,194.54l-2.05,1.54h-1l-0.68,2.12l2.42,2.81l0.16,2.23l-3,4.24l0.42,1.27l1.74,0.32l1.37-1.86l0.74-0.05l1.26,1.22l3.84-1.17l-0.32-5.46L505.55,194.54L505.55,194.54z","name":"Serbia"},"bg":{"path":"M511.44,202.39l0.16,4.98l1.68,3.5l6.31,0.11l2.84-2.01l2.79-1.11l-0.68-3.18l0.63-1.7l-1.42-0.74l-1.95,0.16l-1.53,1.54l-6.42,0.05L511.44,202.39L511.44,202.39z","name":"Bulgaria"},"al":{"path":"M504.02,209.76v4.61l1.32,2.49l0.95-0.11l1.63-2.97l-0.95-1.33l-0.37-3.29l-1.26-1.17L504.02,209.76L504.02,209.76z","name":"Albania"},"mk":{"path":"M510.92,208.01l-3.37,1.11l0.16,2.86l0.79,1.01l4-1.86L510.92,208.01L510.92,208.01z","name":"Macedonia"},"gr":{"path":"M506.71,217.6l-0.11,1.33l4.63,2.33l2.21,0.85l-1.16,1.22l-2.58,0.26l-0.37,1.17l0.89,2.01l2.89,1.54l1.26,0.11l0.16-3.45l1.89-2.28l-5.16-6.1l0.68-2.07l1.21-0.05l1.84,1.48l1.16-0.58l0.37-2.07l5.42,0.05l0.21-3.18l-2.26,1.59l-6.63-0.16l-4.31,2.23L506.71,217.6L506.71,217.6M516.76,230.59l1.63,0.05l0.68,1.01h2.37l1.58-0.58l0.53,0.64l-1.05,1.38l-4.63,0.16l-0.84-1.11l-0.89-0.53L516.76,230.59L516.76,230.59z","name":"Greece"}}});

;
/** Add USA Map Data Points */
jQuery.fn.vectorMap('addMap', 'usa_en', {"width":959,"height":593,"pathes":{"hi":{"path":"m244.66,512.25c-2.48,3.8 2.23,4.04 4.74,5.38 3.06,0.16 3.51,-4.28 2.66,-6.56 -2.72,-0.77 -5.01,-0.19 -7.41,1.19z m-9.31,3.97c-4.02,5.11 3.64,0.48 0.63,-0.09l-0.5,0.07 -0.14,0.02z m39.69,7.97c-0.62,2.09 1.91,6.73 4.39,6.2 2.41,-1.46 3.73,1.73 6.48,0.56 1.23,-1.48 -3.77,-3.2 -3.7,-6.08 -0.95,-3.8 -3.28,-3.2 -5.96,-1.28 -0.41,0.2 -0.81,0.4 -1.22,0.6z m19.94,10.03c3.58,0.95 7.91,2.99 11.25,0.47 -1.05,-1.63 -5.06,-0.59 -7.1,-0.86 -1.44,0.01 -3.54,-1.63 -4.15,0.39z m12.13,4.38c2.33,2.45 3.64,6.83 7.24,7.4 2.36,-0.69 6.84,-0.66 7.32,-3.43 -2.09,-2.51 -5.77,-3.35 -8.88,-4.29 -2.53,-1.2 -4.11,-3.25 -5.68,0.33z m-7.06,1c-0.29,3.69 5.55,3.98 3.67,0.55 -0.27,-1.25 -3.83,-1.74 -3.67,-0.55z m23.66,14.69c0.27,2.45 3.18,3.93 0.47,6.15 -0.65,2.42 -5.54,2.87 -2.52,5.53 2.36,1.46 2.01,4.85 2.92,7.14 -0.72,2.69 -1.43,6.78 1.72,8.06 2.8,2.95 4.5,-1.93 6.19,-3.68 1.27,-1.69 3.85,-4.1 5.94,-2.59 3.04,-0.81 6.3,-2.42 7.78,-5.22 -2.79,-1.31 -4.88,-3.19 -5.57,-6.29 -2.4,-5.33 -8.95,-6.26 -13.58,-8.98 -1.29,-0.52 -2.26,-1.62 -3.34,-0.11z","name":"Hawaii"},"ak":{"path":"m107.84,436.56c-2.27,0.55 -4.87,0.32 -6.84,-0.34 -2.41,1.22 -5.63,4.03 -8.25,1.88 -3.1,0.93 -3.51,3.84 -5.22,5.97 -1.82,2.52 -4.21,3.65 -7.31,3.14 -2.5,-0.94 -5.49,-1.15 -7.5,0.98 2.03,4.34 6.39,8.13 5.82,13.23 -1.85,2.94 6.31,2.99 2.68,5.02 0.15,2.8 3.07,5.68 2.91,7.88 -2.35,2.21 -5.24,-0.38 -7.71,-1.06 -3.24,-0.64 -2.73,-3.35 -0.82,-5.22 -1.57,-1.51 -7.35,-1.81 -6.51,1.12 -2.01,0.04 -3.81,-1.66 -6.27,-0.77 -3.72,-0.44 -5.97,0.65 -2.94,4.05 3.68,1.45 1.06,4.72 1.17,7.57 0.76,2.63 3.66,4.89 6.67,4.17 3.2,-0.06 5.87,3.59 9.21,1.65 2.16,-1.3 5.33,-0.99 4.79,1.89 -2.53,2.07 -1.36,6.13 -2.78,8.75 -1.96,1.88 -4.53,1.59 -6.59,0.16 -1.52,1.37 -4.7,3.68 -6.28,2.22 0.72,-3.71 -4.77,-3.63 -5.51,-0.61 -1.21,3.97 -6.27,4.46 -8.31,7.63 -0.7,2.42 -1.55,6.7 1.74,6.3 1.26,1.11 -1.2,4.8 -2.77,5.52 1.62,2.19 2.65,4.59 2.72,7.34 1.71,1.55 6.35,1.98 7.5,-0.16 2.45,-0.95 1.79,4.1 2.08,5.97 2.47,2.95 -4.02,1.28 -1.61,4.56 -0.85,2.93 -1.76,5.02 2,2.72 2.76,-0.47 5.11,-0.69 5.66,2.09 2.59,-3.91 2.26,2.78 3.25,4.66 0.59,-0.75 1.3,-5.69 3.94,-3.06 -0.17,4.52 5.33,-0.45 5.78,-0.04 0.54,2.92 -1.63,4.24 -2.86,6.41 -1.51,2.24 -2.07,5.63 -4.21,7.17 -3.87,-0.42 -3.37,4.1 -5.5,5.02 -2.65,-0.72 -5.73,0.71 -8.44,1.41 -1.35,2.41 -3.61,4.2 -5.78,1.81 -2.56,0.05 -5.63,0.68 -7.63,2.33 -2.48,2.43 -6.32,3.11 -9.66,2.29 -2.78,-1.91 -7.11,3.41 -3.11,2.31 2.5,-1.91 4.66,0.64 7.25,0.63 2.21,-1.15 4.17,-2.75 6.84,-2.06 2.32,-3.35 5.1,-0.32 7.92,-1.16 2.31,-0.39 7.01,-3.91 5.26,0.66 0.09,-2.91 3.42,-2.73 5.54,-2.04 4.21,0.96 0.29,-3.16 2.08,-3.43 3.47,-2.05 7.52,-2.41 11.2,-3.72 5.48,-3.19 11.62,-5.7 16.21,-10.1 4.27,-2.97 -2.78,-3.48 -1.21,-6.32 1.68,-2.43 4.58,-3.81 7.47,-4.5 1.5,-3.07 3.53,-6.11 5.88,-8.52 2.49,-1.32 4.83,-3.39 7.83,-2.32 2.67,0.71 3.74,5.32 -0.52,3.66 -1.27,-1.88 -5.56,-0.09 -5.25,2.41 -0.21,2.44 -2.56,4.22 -3.06,6.66 4.79,0.85 0.24,3.54 -1.38,3.8 1.67,1.91 5.66,0.6 7.57,-1.14 1.25,-1.85 3.43,-3.8 5.41,-4.22 1.81,2.8 5.1,-1.16 5.74,2.72 0.71,2.78 6.02,-4.86 3.34,-3.1 -3.03,3.11 -3.78,2.86 -1.94,-1.24 1.43,-4.85 -1.76,6.17 -1.45,0.81 -0.81,-3.19 -0.93,-6.03 3.05,-6.4 2.7,-0.86 5.37,-0.87 5.79,2.52 0.42,3.48 3.8,2.84 5.95,4.76 2.41,2.2 4.76,1.95 7.8,1.78 4.34,-0.47 8.01,4.04 12.28,3.17 2.49,-0.42 5.1,-5.2 4.29,-0.23 -2.26,2.83 -0.02,4.12 2.5,5.41 3.13,1.35 5.87,3.14 7.94,5.85 1.31,3.02 6.05,0.28 6.18,2.43 -3.83,1.25 -1.23,3.54 0.21,5.47 1.81,1.95 0.33,5.72 3.64,5.82 1.14,1.28 3.49,7.44 4.01,5.38 -0.35,-2.32 -0.7,-7.86 1.61,-3.76 0.37,1.42 1.04,8.7 2.07,4.74 1.07,-4.88 3.18,0.18 2.22,2.93 3.33,1.69 -1.23,3.33 0.69,4.88 0.69,-3.24 1.31,-0.36 2.16,1.56 1.05,1 1.54,3.94 3.13,3.72 -1.68,-1.72 -2.94,-6.23 0.4,-3 2.42,2.79 4.05,2.12 2.74,-1.66 -2.65,-2.66 0.28,-4.96 2.58,-2.29 3.12,-0.05 2.84,5.21 5.28,4.53 3.31,-3.17 1.5,-7.87 0.69,-11.7 -3.3,-1.55 -7.04,-2.54 -10.22,-4.06 -1.5,-5.33 -6.29,-8.69 -8.4,-13.77 -0.44,-3.33 -4.71,-2.62 -5.75,-5.23 -2.32,-1.72 -2.7,-4.4 -4.56,-6.35 -1.65,-1.53 -5.22,0.95 -5.51,2.94 0.59,3.09 -3.23,3.04 -5.06,4.72 0.05,-4.27 -4.3,-6.15 -6.7,-9.1 -1.33,-1.99 -1.32,-5.36 -4.45,-2.34 -2.37,0.24 -6.38,-0.31 -5.34,-3.62 0.1,-27.7 0.2,-55.4 0.31,-83.09 -2.75,-1.88 -5.88,-4.17 -9.15,-4.4 -2.52,1.72 -5.07,1.09 -7.39,-0.62 -2.72,0.23 -5.12,-0.65 -7.7,-2.89 -3.08,-2.74 -8.58,0.17 -10.98,-3.65 1.13,-3.56 -3.22,-4.83 -5,-2.09 -2.09,0.26 -0.65,-4.31 -3.64,-4.93 -2.57,-2.85 -4.01,-1.28 -5.86,1.21z M36.38,480.63c-0.67,3.11 4.27,1.31 4.72,4.66 0.24,3.82 5.37,3.9 2.34,-0.08 -0.1,-3.22 -3.92,-1.83 -5.06,-4.43 -0.76,-2.02 -0.9,-1.86 -2,-0.16z m-17.16,23.16c2.57,4.06 1.45,1.37 0.13,-1.28 -0.36,0.01 0,1 -0.13,1.28z m21.84,14.81c1.27,1.79 4.99,5.58 6.22,2.03 2.26,-3.3 -3.27,-2.89 -5.23,-3.68 -1.83,-0.9 -0.88,0.54 -0.99,1.65z m91.72,18.78c0.06,3.21 2.81,-1.98 0,0z m-31.47,14.69c-3.2,2.91 -7.24,4.67 -10.56,7.38 0.22,2.75 0.99,7.64 4.67,5.15 2.5,-1.44 4.98,-2.9 7.45,-4.37 -1.84,-3.31 -0.81,-3.15 -4.55,-3.48 -4.15,0.09 1.06,-3.73 2.64,-1.62 3.74,-1.04 3.95,-2.36 1.5,-3.66 0.7,-1.08 -1,0.61 -1.16,0.59z M55.75,570.75c1.42,2.83 3.53,-1.99 0,0z m-35.78,0.34c0.53,2.46 -4.04,4.84 1.05,3.59 4.2,0.47 3.46,-4.35 0.01,-3.84 -0.35,0.08 -0.7,0.16 -1.06,0.24z m62.19,0.69c1.57,2.91 1.31,-2.03 0,0z M58.63,573.13c3.23,0.49 0.99,-3.05 0,0z m-49,0.09c-4.84,2.56 -0.44,1.81 2.29,0.58 2.89,0.16 5.05,-0.48 0.84,-1.46 -1.04,0.29 -2.08,0.58 -3.13,0.88z m7.25,1.38c1.28,0.21 -2.23,-0.59 0,0z","name":"Alaska"},"fl":{"path":"m748.38,439.94c1.69,2.92 1.5,6.12 1.16,9.34 -4.12,0.54 -2.15,-4.69 -5.56,-3.99 -6.18,-0.07 -12.34,1.13 -18.54,1.19 -10.09,0.29 -20.37,2.14 -30.33,0.64 -2.57,-1.57 -2.84,-6.15 -6.5,-5.33 -9.12,-0.12 -18.18,1.79 -27.26,2.55 -5.82,0.63 -11.62,1.37 -17.43,2.12 -1.42,3.25 2.6,4.37 4.06,6.34 0.8,2.28 -1.56,8.42 2.19,7.1 4.11,-1.2 8.08,-2.93 12.48,-2.72 3.34,-0.82 6.63,-0.73 9.89,0.45 4.09,0.8 7.77,3.09 11.41,4.98 1.77,1.94 5.5,1.87 5.97,5 -0.14,3.27 4.32,-0.94 6.5,0.53 3.19,-0.8 5.24,-3.68 7.69,-5.5 4.86,1.69 0.62,-2.9 3.27,-3.97 3.13,-0.83 6.62,-1.39 9.35,0.79 3.04,0.57 5.43,2 6.57,4.99 3.68,0.02 2.88,4.13 5.48,5.3 2.96,0.49 2.98,4.52 6.3,4.3 2.91,0.36 5.45,1.15 5.84,4.45 2.05,2.11 3.92,4.26 3.09,7.41 0.18,3.68 0.12,7.33 -1.44,10.75 0.39,3.68 1.37,7.94 3.28,10.78 2.25,-3.46 0.17,-3.87 -1.74,-6.03 2.19,-1.76 4.86,-0.22 7.3,0.16 0.82,3.15 -2.16,5.6 -3.48,8.19 -3.3,2.21 1.65,4.09 2.73,6.3 3.11,3.34 4.35,7.94 7.53,11.26 0.78,2.29 2.51,7.47 4.63,3.09 2.54,-0.24 3.88,3.44 5.28,5.41 -0.02,2.26 1.93,7.04 3.59,6.44 2.88,-0.8 6.04,0.65 8.28,2.59 2.56,3.3 4.58,6.98 4.56,11.27 1.37,2.73 4.55,0.44 5.81,-1.14 3.74,0.45 7.26,-1.25 9.22,-4.47 -1.01,-2.36 -0.57,-4.83 -0.32,-7.17 -0.04,-2.18 4.33,-3.19 2.25,-6.51 -0.98,-6.33 -0.19,-12.96 -1.87,-19.25 -2.46,-6.93 -7.54,-12.74 -10.4,-19.56 -1.51,-2.41 -4.24,-3.92 -4.62,-7.04 -0.94,-2.28 -2.67,-4.95 -0.07,-6.71 -0.39,-3.56 -4.86,-5.42 -6.84,-8.41 -5.38,-5.57 -8.29,-12.94 -12.35,-19.44 -2.15,-5.53 -4.29,-11.07 -5.91,-16.78 -3.43,0.07 -7.3,-1.03 -10.46,-0.35l-0.34,0.37 -0.26,0.29z m52.91,109.22c-1.9,4.58 0.72,0.38 0.66,-1.91 -0.22,0.64 -0.44,1.27 -0.66,1.91z m-4.69,9.91c2.56,-1.97 3.68,-6.84 1.04,-1.68 -0.35,0.56 -0.69,1.12 -1.04,1.68z m-2.25,2.22c1.46,-1.22 2.04,-2.07 0.18,-0.18l-0.18,0.18z m-5.72,4.16c-5.23,3.69 4.03,-2.14 0.33,-0.19l-0.33,0.19z m-10.72,3.22c-3.41,3.16 5.71,-0.32 4.1,-0.81 -1.8,-0.56 -2.56,-0.71 -4.1,0.81z m-4.59,3.16c0.08,0.16 0.4,-0.3 0,0z","name":"Florida"},"nh":{"path":"m862.56,94c-1.4,-0.41 -3.87,-0.72 -3.05,3 0.22,3.63 -0.73,7.84 2.23,10.59 0.33,2.78 0.08,5.36 -2.17,7.29 -0.19,2.83 -5.98,2.58 -3.35,5.32 1.16,7.35 -0.56,15.03 -0.62,22.51 1.2,1.95 0.98,4.39 0.76,6.75 -1.07,3.79 4.84,-0.05 6.89,0.06 3.93,-1.29 8.46,-1.74 12.04,-3.54 0.77,-3.1 4.37,-2.75 5.94,-4.96 2.59,-3.52 -3.01,-2.73 -2,-6.59 -3.83,0.01 -4.27,-2.46 -4.66,-5.62 -3.84,-11.98 -7.32,-24.45 -11.49,-36.1 -0.18,0.43 -0.35,0.85 -0.53,1.28z","name":"New Hampshire"},"mi":{"path":"M697.86,177.24L694.63,168.99L692.36,159.94L689.94,156.71L687.35,154.93L685.74,156.06L681.86,157.84L679.92,162.85L677.17,166.57L676.04,167.21L674.58,166.57C674.58,166.57 671.99,165.11 672.16,164.47C672.32,163.82 672.64,159.45 672.64,159.45L676.04,158.16L676.84,154.77L677.49,152.18L679.92,150.56L679.59,140.54L677.98,138.28L676.68,137.47L675.87,135.37L676.68,134.56L678.3,134.88L678.46,133.27L676.04,131L674.74,128.42L672.16,128.42L667.63,126.96L662.13,123.57L659.38,123.57L658.74,124.21L657.77,123.73L654.7,121.46L651.79,123.24L648.88,125.51L649.2,129.06L650.17,129.39L652.27,129.87L652.76,130.68L650.17,131.49L647.58,131.81L646.13,133.59L645.81,135.69L646.13,137.31L646.45,142.8L642.9,144.9L642.25,144.74L642.25,140.54L643.54,138.12L644.19,135.69L643.38,134.88L641.44,135.69L640.47,139.89L637.72,141.02L635.94,142.96L635.78,143.93L636.43,144.74L635.78,147.33L633.52,147.81L633.52,148.95L634.33,151.37L633.2,157.51L631.58,161.56L632.23,166.24L632.71,167.38L631.9,169.8L631.58,170.61L631.26,173.36L634.81,179.34L637.72,185.8L639.18,190.65L638.37,195.34L637.4,201.32L634.97,206.5L634.65,209.25L631.39,212.33L635.8,212.17L657.22,209.91L664.5,208.92L664.59,210.58L671.45,209.37L681.74,207.87L685.6,207.41L685.74,206.82L685.9,205.37L688,201.65L690,199.91L689.78,194.86L691.37,193.26L692.46,192.92L692.69,189.36L694.22,186.33L695.27,186.94L695.44,187.58L696.24,187.74L698.18,186.77L697.86,177.24z M581.62,82.06L583.45,80L585.62,79.2L590.99,75.31L593.28,74.74L593.74,75.2L588.59,80.34L585.28,82.29L583.22,83.2L581.62,82.06z M667.79,114.19L668.44,116.69L671.67,116.85L672.97,115.64C672.97,115.64 672.89,114.19 672.56,114.03C672.24,113.86 670.95,112.17 670.95,112.17L668.76,112.41L667.15,112.57L666.82,113.7L667.79,114.19z M567.49,111.21L568.21,110.63L570.96,109.82L574.51,107.56L574.51,106.59L575.16,105.94L581.14,104.97L583.57,103.03L587.93,100.93L588.09,99.64L590.03,96.73L591.81,95.92L593.1,94.14L595.37,91.88L599.73,89.46L604.42,88.97L605.55,90.1L605.23,91.07L601.51,92.04L600.06,95.11L597.79,95.92L597.31,98.35L594.88,101.58L594.56,104.17L595.37,104.65L596.34,103.52L599.89,100.61L601.19,101.9L603.45,101.9L606.68,102.87L608.14,104L609.59,107.08L612.34,109.82L616.22,109.66L617.68,108.69L619.29,109.99L620.91,110.47L622.2,109.66L623.33,109.66L624.95,108.69L628.99,105.14L632.39,104L639.02,103.68L643.54,101.74L646.13,100.45L647.58,100.61L647.58,106.27L648.07,106.59L650.98,107.4L652.92,106.91L659.06,105.3L660.19,104.17L661.65,104.65L661.65,111.6L664.88,114.67L666.17,115.32L667.47,116.29L666.17,116.61L665.37,116.29L661.65,115.81L659.55,116.45L657.28,116.29L654.05,117.75L652.27,117.75L646.45,116.45L641.28,116.61L639.34,119.2L632.39,119.85L629.96,120.66L628.83,123.73L627.54,124.86L627.05,124.7L625.6,123.08L621.07,125.51L620.42,125.51L619.29,123.89L618.48,124.05L616.54,128.42L615.57,132.46L612.39,139.46L611.22,138.42L609.85,137.39L607.9,127.1L604.36,125.73L602.31,123.45L590.19,120.7L587.33,119.67L579.1,117.5L571.21,116.36L567.49,111.21z","name":"Michigan"},"vt":{"path":"m833.16,106.59c0.19,6 4.65,11.21 3.72,17.28 -2.48,4.23 4.52,7.29 2.22,11.58 0.9,1.59 4.66,1.96 4.06,5.25 1.08,4.21 2.86,8.34 1.84,12.76 3.35,-0.51 7.06,-1.17 10.13,-1.97 -0.21,-2.13 1.51,-5.75 -0.53,-7.81 0.2,-7.64 1.01,-15.26 1.13,-22.91 -3.25,-2.41 0.32,-3.79 2.12,-5.18 1.96,-2.28 3.9,-5.07 2.6,-8.1 -2.62,-1.63 -1.02,-5.94 -2.39,-7.22 -8.3,2.1 -16.59,4.21 -24.89,6.31z","name":"Vermont"},"me":{"path":"m889.88,40.22c-2.16,1.31 -3.69,2.74 -4.84,4.69 -2.29,0.6 -4.99,-1.37 -4.88,-3.94 -2.97,-0.82 -3.33,3.68 -4.37,5.71 -1.09,4.29 -3.27,8.39 -3.97,12.69 -0.06,3.04 1,6.63 -1.35,9.09 0.08,2.92 -0.75,6.18 2,8.16 -1.37,5.7 -6.23,10.36 -5.41,16.56 -4.27,-2.21 -1.74,2.47 -1.09,4.73 3.51,11.08 7.19,22.16 10.25,33.35 0.21,3.01 5.81,1.35 4.53,5.7 2.9,2 2.06,-3.92 2.66,-5.87 -1.01,-3.29 2.7,-4.63 0.66,-7.62 0.94,-1.05 2.92,-5.9 4.61,-3.46 2.03,1.03 5.28,-1.89 6.74,-3.19 -0.98,-4.02 4.21,-1.75 4.73,-5.32 -1.11,-2.61 0.74,-5.45 -0.57,-7.44 -2.42,-1.59 3.53,-4.63 3.31,-0.78 2.27,0.48 2.15,2.8 3.66,3.93 1.94,-2.82 -2.15,-3.81 0.35,-6.03 2.43,-0.81 3.1,-3.96 6,-3.31 -0.17,1.46 1.03,3.34 2.26,1.38 2.94,-2.9 5.24,-7.08 9.37,-8.34 1.17,-2.61 3.34,-5.74 0.71,-8.24 -0.55,-1.64 -3.68,-4.84 -4.15,-2.58 -0.75,2.6 -4.66,-0.65 -4.92,-2.22 0.1,-2.8 0.29,-7.17 -3.8,-5.81 -3.96,1.36 -3.64,-3.04 -4.69,-5.61C905.22,58.3 902.75,50.15 900.28,42c-2.86,-1.25 -5.71,-2.92 -8.81,-3.38 -0.53,0.53 -1.06,1.06 -1.59,1.59z m20.47,61c-2.81,1.7 1.87,5.16 1.13,1.22 1.48,-0.9 0.13,-2.4 -1.13,-1.22z m-7.81,7.81c3.16,6.67 2.63,-3.59 0,0z","name":"Maine"},"ri":{"path":"m871,164.28c1.15,4.66 2.29,9.31 3.44,13.97 2.56,-0.49 4.66,-2.29 5.84,-4.56 4.17,0.76 4,-2.64 1.51,-4.97 -1.79,-1.94 -3.16,-5.31 -5.74,-5.92 -1.68,0.49 -3.37,0.99 -5.05,1.48z","name":"Rhode Island"},"ny":{"path":"m825.56,108.66c-2.7,1.12 -5.45,1.68 -8.33,1.43 -5.07,0.72 -10.17,2.73 -12.92,7.31 -2.84,3.43 -4.89,7.49 -7.18,11.2 -1.65,2.36 -5.82,3.73 -5.55,6.84 -0.17,3.56 5.77,0.73 4.43,4.38 -2.69,2.3 0.8,4.23 0.56,6.59 0.5,3.47 -4.26,1.99 -5.36,4 -1.62,2.71 -3.35,6.62 -7.22,6.05 -3.04,-0.43 -5.35,2.05 -7.98,2.63 -2.5,-0.75 -4.7,-2.05 -7.59,-1.31 -5.31,0.21 -10.62,1.98 -15.23,4.53 -0.29,1.77 0.61,6.25 3.17,6.14 1.55,2.48 2.09,4.96 -0.63,6.72 -1.51,1.76 -1.8,4.25 -4.16,5.3 -1.93,1.14 -2.68,3.51 -4.8,4.54 0.33,3.07 -0.22,7.29 4.08,5.12 22.14,-4.26 44.26,-8.68 66.23,-13.74 0.98,3.85 5.67,1.32 6.44,4 0.64,2.93 1.36,7.4 5.33,6.88 3.14,1.9 6.9,3.68 10.69,4.22 2.71,0.47 7.18,1.43 6.44,5.06 -0.33,1.97 -1.62,7.56 1.97,5.93 5.3,-1.65 10.96,-2.84 15.06,-6.85 3.23,-2.49 6.76,-4.64 9.35,-7.86 -2.99,-2.44 -4.65,0.46 -6.81,2.42 -2.91,1.56 -6.01,3.51 -9.16,4.32 -2.6,-0.63 -4.83,-0.86 -6.18,2.07 -1.03,2.04 -4.86,2.98 -3.98,-0.15 4.26,-1.87 -2.17,-3.97 -0.33,-6.21 1.19,-3.13 0.56,-6.87 0.42,-10.21 -1.43,-7.38 -3.69,-14.76 -2.54,-22.36 -0.08,-4.46 1.55,-8.97 -0.51,-13.21 -1.22,-2.56 -0.47,-6.83 -4.05,-7.34 -2.99,-0.66 0.75,-4.31 -1.57,-6.2 -1.7,-2.43 -3.17,-4.91 -1.54,-7.81 0.38,-5.77 -3.83,-10.57 -3.55,-16.35 -2.32,0.65 -4.65,1.29 -6.97,1.94z","name":"New York"},"pa":{"path":"m798.88,181.63c-17.5,3.38 -34.87,7.42 -52.47,10.28 -0.61,-2 0.48,-8.42 -2.41,-4.31 -2.18,2.73 -5.48,3.74 -8.09,5.97 1.52,9.75 2.63,19.57 5.44,29.05 1.14,6.09 2.27,12.17 3.41,18.26 8.85,-1.42 17.79,-2.25 26.51,-4.41 16.39,-3.45 33.03,-6.46 49.33,-9.87 2.48,-3.07 8.03,-1.69 8.97,-6.19 0.64,-2.36 4.86,-3.99 4.33,-5.9 -2.3,-1.89 -5.94,-2.77 -6.39,-6.13 -3.14,1.09 -4.42,-3.94 -3.12,-5.32 3.86,-1.1 -0.49,-3.68 0.55,-5.96 2.52,-1.88 1.12,-5.15 2.81,-7.07 3.87,-2.7 -2.98,-1.1 -3.72,-3.99 -1.35,-2.18 -0.28,-7.24 -4.16,-5.92 -2.34,-1.13 -3.87,-3.75 -7.09,-1.7 -4.64,1.07 -9.28,2.15 -13.92,3.22z","name":"Pennsylvania"},"nj":{"path":"m827.84,191.34c1.03,2.99 -1.82,4.8 -2.06,7.47 2.86,1.63 0.49,4.87 -0.92,5.73 -0.41,3.86 4.01,1.68 4.16,5.14 1.37,2.19 4.72,3.02 6.26,4.94 -0.15,2.61 -3.85,3.5 -4.69,6.06 -0.26,3.07 -4.09,3.19 -4.18,5.96 -0.99,2.38 -0.74,5.09 1.7,6.47 2.85,2.76 6.86,3.99 10.73,4.38 0.48,1.55 -1.84,7.18 1.1,3.59 1.5,-2.42 0.59,-5.95 3.11,-8.01 2.5,-4.08 5.03,-8.84 4.88,-13.61 -1.35,-4.07 0.8,-9.01 -1.81,-12.82 -1.1,1.32 -6.17,1.23 -4.13,-0.8 2.39,-1.39 3.37,-3.62 2.39,-6.31 0.21,-2.31 1.58,-5.42 -1.69,-6.19 -4.35,-1.15 -8.82,-2.13 -12.88,-4.26 -0.66,0.75 -1.31,1.5 -1.97,2.25z","name":"New Jersey"},"de":{"path":"m824.88,225.34c-3.72,0.25 -3.47,3.52 -1.91,6.13 3.35,6.89 3.86,14.58 6.03,21.81 3.45,0.11 6.81,-0.49 10.16,-1.25 -1.2,-2.17 -0.68,-6.38 -3.32,-6.38 -2.9,-1.2 -4.17,-3.69 -4.9,-6.58 -0.91,-3.11 -3.62,-4.96 -5.48,-7.35 -1.85,-1.82 0.94,-5.5 -0.26,-6.47l-0.33,0.09z","name":"Delaware"},"md":{"path":"m813.59,229.19c-17.31,3.18 -34.53,6.83 -51.78,10.28 0.74,3.02 1.31,6.08 1.78,9.16 2.14,-1.9 3.29,-5.35 6.59,-5.34 2.14,-1.85 2.67,-5.25 5.77,-3.55 3.46,0.18 5.43,-5.35 9.01,-3.85 2.63,1.63 5.66,2.79 7.34,5.59 4.19,0.11 3.68,3.73 5.74,4.96 2.73,1.11 5.02,1.18 6.38,-0.53 4.29,1.38 2.24,3.74 1.44,6.9 0.09,2.97 -3.7,4.92 -1.66,7.97 3.1,1.31 6.4,1.2 9.63,1.4 2.17,1.58 6.83,1.03 3.79,-2.1 0.41,-2.74 -3.08,-3.35 -3.32,-6.04 -1.7,-2.67 -1.42,-5.47 -0.36,-8.32 1.68,-2.42 -2.83,-3.82 -0.4,-5.41 1.25,-1.53 0.43,-4.16 2.98,-4.7 1.62,-3.02 5.1,-1.45 2.35,1.02 -2.54,2.98 -0.81,4.5 0.57,6.3 1.41,3.55 -0.68,5.07 -1.53,7.31 -0.22,-0.81 3.62,-1.01 3.22,1.79 -3.15,1.64 -1.45,6.12 1.09,7.31 2.98,0.99 5.58,-1.8 6.98,2.14 1.5,3.75 4.92,0.81 7.41,-0.02 2.74,-1.21 3.47,-4.93 2.78,-7.7 -1.13,-1.58 -4.82,0.92 -7.13,0.4 -3.86,1.26 -4.9,-1.25 -5.28,-4.64 -1.68,-5.97 -2.14,-12.33 -5.16,-17.9 -0.04,-4.32 -2.71,-4.2 -6.07,-2.91 -0.73,0.16 -1.45,0.31 -2.18,0.47z m10.94,32.59c1.32,0.99 0.59,4.97 2.06,4.63 -0.48,-1.31 -0.36,-4.99 -2.06,-4.63z","name":"Maryland"},"va":{"path":"m792.88,242.88c-0.16,1.46 0.24,5.89 -2.4,4.29 -2.58,-0.67 -6.42,-3.2 -8.23,-2.73 0.7,3.72 -1.46,6.77 -2.99,9.94 -3.05,1.14 -2.29,5.83 -5.84,5.58 -1.62,1.74 -1.47,5.31 -2.45,7.73 -3.09,1.14 -5.37,-0.48 -7.28,-1.75 0.11,6.5 -3.72,11.95 -5.91,17.84 -1.69,1.73 1.19,3.8 -0.74,5.77 -1.35,3.56 -3.79,2.72 -6.19,4.19 -2.72,1.1 -4.9,0.5 -5.4,4.61 -2.07,1.14 -4.83,2.63 -6.91,0.47 -2.38,1.51 -5.02,3.21 -7.81,1.6 -2.69,-0.01 -3.9,-6.55 -6.07,-2.94 -3.27,4.09 -7.89,7.48 -10.21,12.09 0.43,3.25 -4.46,3.32 -6.42,5.15 -4.27,1.95 3.62,-0.11 5.16,-0.07 5.56,-0.79 11.14,-1.37 16.76,-1.36 1.95,-2.65 4.98,-1.81 7.77,-1.65 7.86,-0.32 15.65,-2.12 23.48,-2.99 12.85,-1.4 25.44,-4.27 38.04,-7.05 11.65,-2.52 23.3,-5.03 34.96,-7.55 -1.64,-2.66 -2.75,-6.67 -6.42,-4.14 -1.99,2.03 -6.61,-1.82 -2.7,-2.48 2.65,-1.62 -1.75,-4.07 -1.8,-5.97 -2.73,-0.62 -2.88,-5.12 0.54,-3.6 -0.17,-1.37 -1.24,-3.62 -1.62,-5.68 1.47,-3.51 -0.84,-4.97 -3.72,-5.16 0.31,-3.42 -2.9,-2.93 -5.22,-3.97 -3.33,0.21 -7.06,-0.25 -9.91,-1.66 -1.22,-2.41 -0.91,-5.12 1.25,-6.88 1.39,-2.83 -0.28,-5.7 -3.3,-6.27 -2.65,-0.83 -6.97,-0.29 -5.73,-4.3 -0.83,-0.3 -2.05,-1.06 -2.69,-1.06z m39.16,21.59c0.44,4.71 -3.15,8.7 -2.62,13.48 -0.34,4.11 2.64,5.72 3.48,0.92 1.71,-3.04 -0.23,-6.47 0.8,-9.73 0.4,-2.53 3.66,-3.88 3.52,-6.73 -1.73,0.69 -3.46,1.38 -5.19,2.06z","name":"Virginia"},"wv":{"path":"m739.75,223.25c-1.6,2.23 1.3,5.02 0.25,7.75 -0.18,4.04 -0.63,8.11 -0.84,12.13 -1.94,3.58 -4.43,7.35 -8.16,9.13 -3.15,-1.33 -3.92,3.25 -5.76,4.98 -1.56,2.28 2.64,4.93 -0.3,6.69 -2.57,3.58 -2.6,-4.8 -4.46,-0.71 -1.32,2.59 0.02,6.02 -1.35,8.33 -1.82,1.54 -0.53,5.19 -4.16,4.81 -2.23,0.13 -1.45,6.19 1,6.81 2.24,1.47 2.49,4.74 5.5,5.92 1.92,1.96 2.28,5.18 5.39,6.05 1.64,2.19 3.07,4.96 6.25,4.88 2.63,0.5 4.77,-3.86 7.22,-1.35 1.49,0.81 3.93,-0.57 4.58,-1.83 0.43,-4.57 3.42,-2.71 6.03,-4.39 2.39,-0.94 4.82,-0.98 5.62,-4.44 -1.26,-2.59 0.3,-5 1.56,-7.64 2.23,-4.81 4.72,-9.61 4.67,-15.05 2.65,-2.31 3.72,3.56 7.05,1.41 1.64,-1.77 1.12,-5.67 2.6,-7.59 3.47,0.39 2.97,-3.96 5.76,-5.21 2.29,-3.11 3.52,-6.8 3.06,-10.7 1.06,-1.29 5.1,1.62 7.23,2.15 3.3,3.35 4.34,-1.98 2.85,-4.05 -2,-2.28 -5.12,-3.7 -7.62,-4.75 -3.31,0.98 -5.44,5.47 -9.38,3.97 -1.86,-0.23 -2.38,3.98 -4.86,3.88 -2.89,0.71 -3.79,4.38 -6.03,6.22 -1.1,-0.06 -0.99,-4.82 -1.62,-6.64 -0.01,-3.93 -1.77,-5.3 -5.48,-3.82 -4.21,0.6 -8.41,1.23 -12.61,1.91 -1.17,-6.45 -2.29,-12.92 -3.44,-19.38l-0.35,0.35 -0.18,0.18z","name":"West Virginia"},"oh":{"path":"m729.5,197.78c-4.85,2.06 -7.38,6.9 -11.47,9.97 -4.08,0.86 -8.09,1.75 -11.72,3.88 -3.41,1.61 -4.39,-4.09 -7.67,-2.63 -3.13,1.35 -5.49,-1.1 -8.11,-2.41 -8.6,1.15 -17.15,2.64 -25.66,4.38 1.45,17.83 4.12,35.53 5.87,53.33 -0.69,3.82 4.06,2.26 6.23,1.48 2.74,0.41 4.83,2.16 5.48,4.94 1.26,2.48 5.82,-0.87 6.96,2.54 2.19,1.53 4.46,-2.33 7.03,-0.58 2.52,0.04 5.62,1.51 6.84,-1.56 1.49,-0.55 5.37,-3.85 5.41,-0.71 0.38,2.53 3.82,3.57 5.77,4.7 3.53,0.63 2.32,-3.91 4.21,-5.51 -0.11,-2.74 0.21,-5.73 1.39,-8.13 2.53,-2.81 3.8,4.53 4.98,0.39 -2.02,-2.27 -0.99,-5.41 0.93,-7.41 1.07,-4.06 4.05,-2.41 6.5,-4.39 2.93,-3.16 6.59,-6.57 5.97,-11.27 0.44,-4.71 1.18,-9.75 -0.53,-14.23 1.47,-2.48 2.58,-4.29 0.96,-7.33 -2.04,-7.53 -2.56,-15.37 -3.93,-23.04 -1.81,1.2 -3.63,2.4 -5.44,3.59z","name":"Ohio"},"in":{"path":"m658.66,210.31c-9.12,0.93 -18.35,1.98 -27.41,2.68 -2.6,0.39 -4.21,5.08 -6.89,2.98 -3.83,-2.84 -2.64,1.83 -2.41,4.45 1.1,14.81 2.73,29.61 3.44,44.42 -0.76,3.69 -1.39,7.89 1.36,10.91 0.1,2.99 1.4,6.28 -1.14,8.65 -1.83,2.73 -2.55,6.09 -5.02,8.42 0.09,2.08 -2.02,8.2 1.63,5.16 3.49,-0.6 7.25,-1.53 10.69,-1.34 2.36,4.08 2.67,-0.62 5.26,-1.29 2.03,-2.62 4.78,2.05 5.34,1.04 -1.26,-3.41 3.05,-3.77 5.1,-5.22 1.09,0.63 6.05,3.38 5.3,-0.64 -0.46,-2.47 2.02,-4.71 3.65,-6.34 3.11,-1.39 4.33,-3.9 4.16,-7.23 1.83,-1 4.93,-1.01 6.97,-2.47 4.23,-1.03 0.26,-3.48 1.22,-5.92 -0.83,-12.56 -2.8,-25.13 -4.08,-37.69 -0.85,-6.99 -1.44,-14.01 -2.14,-21.02 -1.68,0.16 -3.35,0.31 -5.03,0.47z","name":"Indiana"},"il":{"path":"m569.75,200.44c-0.29,2.58 4.2,1.83 3.73,5.07 2.07,2.09 5.71,4.21 4.38,7.77 -0.31,3.04 -2.61,5.44 -3.08,8.4 -2.38,2.71 -6.06,2.98 -9.31,3.94 -1.61,2.47 -1.05,4.91 1.28,6.47 0.63,3.25 -1.08,5.07 -2.74,7.38 1.41,3.63 -2.39,2.86 -3.56,5.02 1.08,3.12 -2.11,3.8 -2.53,6.64 0.19,3.95 1.33,8.21 3.28,11.58 3.68,3.96 7.38,7.9 12.21,10.47 -0.61,2.88 -0.64,6.7 3.43,5.71 2.05,0 6.18,0.38 6.26,2.68 -0.19,4.39 -3.6,8.24 -3.28,12.53 1.6,3.83 5.33,6.26 8.59,8.42 3.37,-0.29 5.36,1.27 5.9,4.6 1.01,2.64 3.84,4.73 1.73,7.67 0.55,1.74 2.58,7.7 4.31,4.05 1.21,-2.98 5.41,-4.78 8.07,-2.46 3.1,2.46 5.94,0.47 3.13,-2.8 -0.98,-3.39 2.61,-4.96 5.37,-5.33 1.01,-1.55 -1.6,-4.46 1.4,-5.97 1.8,-3.97 -0.56,-9.39 3.32,-12.49 1.43,-2.97 3.23,-5.97 4.4,-8.97 0.13,-3 -0.7,-5.7 -2.34,-8.16 -0.45,-4.59 1.31,-9.09 0.02,-13.65 -1.16,-15 -2.22,-30.05 -3.67,-45.01 -1.02,-3.1 -1.61,-6.46 -4.04,-8.77 -2.27,-1.83 -0.51,-5.93 -1.97,-7.32 -14.76,0.83 -29.52,1.67 -44.28,2.5z","name":"Illinois"},"ct":{"path":"m865.78,165.41c-6.91,1.54 -13.81,3.08 -20.72,4.63 2.17,6.2 2.74,12.83 2.44,19.34 -2.62,4.3 2.61,2.38 3.97,-0.21 2.09,-1.89 4.19,-3.71 5.99,-5.88 2.06,1.35 4.78,-1.86 7.44,-1.46 2.98,-0.68 5.69,-2.24 8.56,-3.26 -1.15,-4.67 -2.29,-9.33 -3.44,-14 -1.42,0.28 -2.83,0.56 -4.25,0.84z","name":"Connecticut"},"wi":{"path":"m559.53,104.97c-4.06,2.75 -8.71,4.92 -13.53,5.84 -2.88,-1.08 -5.54,-1.12 -5.57,2.68 -0.48,3.34 0.51,7.03 -0.47,10.17 -2.02,3.26 -6.91,4.03 -7.36,8.38 -2.63,2.78 2.21,3.06 2.23,5.53 1.79,2.9 -2.13,4.74 -1.33,7.65 0.29,2.93 -0.4,6.49 1.14,8.93 1.33,3.48 5.88,0.21 6.64,3.93 1.56,2.26 5.47,1.03 6.19,4.78 2.15,5.1 9.7,4.85 11.21,10.39 0.68,3.38 0.35,7.34 1.94,10.32 3.26,1.05 1.94,4.34 0.25,6.21 -0.79,3.96 2.53,8.34 6.75,8.25 2.28,1.6 4.86,1.65 7.83,1.19 13.03,-0.77 26.07,-1.53 39.1,-2.3 -0.02,-4.45 -1.98,-8.61 -1.86,-13.13 -1.7,-2.04 -0.86,-4.17 -0.04,-6.39 0.32,-2.84 3.07,-4.93 1.51,-7.87 -1.05,-2.94 -0.88,-6.21 1.73,-8.27 -0.2,-2.83 -0.5,-5.03 -0.16,-7.93 -1.14,-4.2 2.64,-7.5 3.69,-11.36 0.92,-1.13 3.15,-8.34 0.73,-4.93 -2.65,3.81 -4.99,8.01 -8.18,11.29 -0.86,2.06 -3.21,4.55 -5.21,4.5 -2.57,-1.26 0.28,-4.49 0.9,-6.41 0.47,-2.94 3.2,-4.25 4.09,-6.85 -3.31,-1.29 -2.77,-5.03 -3.54,-7.92 0.02,-3.09 -1.23,-5.08 -4.29,-5.57 -2.14,-3.67 -7.04,-2.78 -10.59,-4.12 -7.13,-1.87 -14.21,-4.39 -21.67,-4.99 -2.48,-0.54 -2.84,-5.51 -5.51,-4.73 -1.71,-1.54 -3.85,-0.7 -5.82,0.13 -2.8,-1.32 0.68,-4.59 1.5,-6.38 2.18,-1.34 -1.53,-2.14 -2.31,-1z","name":"Wisconsin"},"nc":{"path":"m830.06,295.97c-18.3,3.8 -36.53,8 -54.86,11.65 -12.74,1.51 -25.38,4.07 -38.18,4.94 -3.32,-0.82 -1.17,3.72 -2.5,5.53 -2.62,1.34 -3.49,4.59 -5.03,6.38 -3.24,-1.36 -5.07,1.46 -6.34,3.97 -1.09,-0.57 -2.96,0.03 -3.41,-1.41 -2.02,1.96 -4.37,3.73 -4.31,6.81 -3.66,1.1 -6.31,3.82 -9.28,5.96 -2.64,0.94 -5.76,2.16 -7.4,4.35 0.73,4.06 -2.98,3.3 -5.1,5.29 -1.98,4.69 2.74,2.66 5.58,2.5 6.41,-1.19 13.32,-0.49 19.18,-3.73 5.04,-1.9 9.41,-5.9 15.06,-5.67 6.5,-0.64 13.15,-0.6 19.62,-0.69 2.99,0.53 3.36,4.79 5.58,5.01 5.37,-0.81 10.87,-1.67 16.25,-1.79 5.38,1.36 9.61,5.45 14.52,7.93 3.59,2.64 6.93,5.66 10.43,8.44 3.15,-0.86 6.32,-1.58 9.59,-1.72 1.06,-4.55 2.04,-9.29 5.39,-12.78 4.2,-4.27 9.23,-8.29 15.33,-9.29 2.91,1.95 3.69,-2.9 5.27,-4.53 2.72,-5 -2.44,3.91 -2.46,-1.22 -3.87,0.7 -5.43,-0.26 -3.29,-4 2.77,-4.25 -2.73,-2.51 -2.12,-6.02 -1.42,-3.76 2.84,2.19 5.06,0.81 2.81,0.12 5.1,-1.87 5.59,-4.6 0.45,-2.9 4.59,-2.7 3.28,-6.48 -4.02,-2.43 4.25,-0.66 0.4,-3.93 -3.52,-3.44 -5.24,-8.33 -7.23,-12.76 -1.54,0.35 -3.08,0.71 -4.63,1.06z m17.13,23.72c1.55,2.61 -4.64,4.26 -0.52,2.69 1.38,-1.92 0.21,-5.22 0.24,-7.62 -0.74,-2.05 0.37,4.57 0.28,4.94z","name":"North Carolina"},"dc":{"path":"m803.44,248.16c2.67,3.43 3.85,-1.02 0.55,-0.75l-0.29,0.4 -0.25,0.35z","name":"District of Columbia"},"ma":{"path":"m877.59,144.41c-1.04,3.1 -4.01,3.5 -6.79,4.13 -8.62,2.32 -17.17,4.6 -25.96,6.12 -0.11,4.77 -1.17,9.59 -0.03,14.31 10.66,-2.6 21.54,-4.29 32,-7.44 3.57,2.81 6.01,6.73 8.28,10.59 2.13,-0.78 0.01,-5.15 3.77,-5.38 2.93,-3.28 1.83,4.78 3.17,2.62 2.13,-3.09 6.1,-3.9 9.41,-5.21 -0.11,-3.41 -2.21,-8.55 -6.38,-7.53 1.64,-0.1 4.89,0.87 4.91,3.82 0.85,2.24 -2.55,3.71 -4.35,4.24 -3.37,0.51 -4.99,-1.76 -6.32,-4.47 -1.38,-2.05 -3.58,-6.56 -6.3,-3.6 -1.89,-1.72 -3.13,-4.04 -1.33,-6.3 2.3,-2.34 1.23,-6.2 -1.28,-7.16 -0.93,0.41 -1.86,0.82 -2.79,1.24z M902.25,172.69c-1.6,2.76 3.05,-2.44 0.08,-0.32l-0.08,0.32z m-11.28,1.28c1.59,0.78 6.09,-2.26 1.78,-2.03 -0.59,0.68 -1.19,1.35 -1.78,2.03z","name":"Massachusetts"},"tn":{"path":"m730.41,314.34c-8.87,-0.11 -17.76,1.5 -26.57,2.73 -10.24,2.86 -20.99,2.66 -31.48,4.02 -16.34,1.45 -32.65,3.29 -48.96,4.95 -4.57,-1.71 -0.43,5.74 -5.06,4.14 -6.97,0.06 -13.87,1.23 -20.84,0.71 -0.95,4.26 -1.37,9.04 -3.6,12.76 -3.45,1.82 -4.01,5.81 -4.43,9.33 -3.1,1.1 -4.68,2.61 -2.53,5.59 -1.75,3.9 -0.58,5.24 3.51,3.98 33.91,-3.26 67.83,-6.53 101.74,-9.79 -0.23,-2.54 0.72,-5.31 3.53,-5.69 3.11,-0.4 0.99,-5.41 4.88,-5.81 2.77,-2.02 6.49,-2.19 8.62,-5.18 1.76,-2.26 6.31,-1.64 5.78,-5.38 1.19,-1.77 3.1,-3.84 5.03,-4.85 1.04,-0.39 0.28,1.78 1.72,1.19 2.38,0.56 2.2,-4.36 5.22,-3.86 3.3,1.27 2.68,-2.92 4.96,-4.18 2.05,-0.94 3.81,-6.68 0.92,-6.59 -0.81,0.64 -1.63,1.27 -2.44,1.91z","name":"Tennessee"},"ar":{"path":"m509.47,335.31c1.73,4.9 1.5,10.02 1.53,15.12 2.15,12.21 1.13,24.64 1.47,36.97 0.02,3.71 0.04,7.42 0.06,11.13 2.06,3.2 5.05,-1.45 7.69,1.47 1.53,1.76 -0.88,7.54 2.97,6.49 17.61,-0.36 35.23,-0.72 52.84,-1.08 1.97,-2.6 0.41,-5.9 -1.28,-8.22 3.3,-1.61 -1.59,-3.96 0.84,-6.53 0.75,-2.77 0.62,-6.34 3.78,-7.69 -1.88,-3.07 2.08,-5.24 3.19,-7.88 3.77,-0.38 1.58,-3.3 2.64,-5.42 1.12,-2.67 2.56,-5.28 4.85,-6.58 1.2,-4.12 0.21,-2.67 -1.53,-5.61 -2.76,-3.32 1.95,-3.96 2.36,-6.84 -0.05,-1.94 3.31,-6.69 1.22,-6.75 -2.65,0.85 -5.34,-0.18 -8.02,-0.33 -0.09,-3.38 4.4,-3.88 4.22,-7.3 0.58,-3.87 -3.58,-3.68 -6.34,-3.26 -24.17,0.77 -48.34,1.54 -72.5,2.31z","name":"Arkansas"},"mo":{"path":"m490.44,245.63c-2.39,-0.46 -0.19,4.05 0.07,5.6 2.45,3.32 4.51,7.86 8.55,9.22 2.81,-0.24 3.61,2.67 2.79,4.84 -3.22,1.64 -1.72,5.03 0.19,7.07 0.9,2.55 4.61,3.05 4.89,5.61 2.1,12.97 1.12,26.14 1.51,39.22 0,5.72 0.08,11.44 0.72,17.13 24.99,-0.94 49.98,-1.8 74.97,-2.51 3.02,-1.12 4.35,1.72 5.31,3.98 0.52,3.48 -2.86,4.46 -4.14,6.86 2.37,0.64 5.57,0.65 8.21,-0.08 1.46,-3.59 1.87,-7.45 2.38,-11.22 0.84,-2.83 5.27,-2.89 4.61,-6.03 1.37,-2.94 0.14,-4.6 -2.22,-4.28 -2.15,-1.81 -2.84,-5.03 -2.86,-7.6 1.45,-2.84 -2.08,-5.07 -2.44,-7.89 -0.66,-3.24 -5.34,-0.87 -6.89,-3.66 -2.64,-2.34 -6.24,-3.94 -6.91,-7.76 -0.94,-3.21 1.52,-6.47 2.17,-9.64 2.2,-3.53 -1.34,-4.7 -4.33,-4.5 -2.66,0.39 -5.34,-1.15 -4.81,-4.1 0.86,-4.07 -4.71,-4.05 -6.43,-6.93 -2.7,-3.4 -6.72,-6.05 -7.25,-10.67 -1.1,-3.16 -2.12,-6.86 -0.62,-10.06 -2.3,-1.34 -2.28,-5.77 -5.37,-4.89 -20.69,0.77 -41.38,1.53 -62.06,2.3z","name":"Missouri"},"ga":{"path":"m672.78,356c-0.74,7.06 4.28,12.69 5.29,19.4 1.36,6.57 3.44,12.96 5.03,19.44 0.94,4.88 2.17,9.95 5.53,13.75 -0.85,3.5 3.37,3.17 2.59,6.44 -1.89,4.45 -3.57,9.65 -0.84,14.13 0.05,2.63 0.94,5.4 -0.38,7.88 2.95,0.94 1.45,4.01 3.07,6.01 1.35,2.67 3.68,4.75 6.83,4 12.35,-0.01 24.69,-1.31 37.03,-1.92 3.32,-0.58 6.67,-0.74 10.04,-0.59 -0.78,4.24 3.04,4.15 2.09,-0.09 -0.9,-2.14 -2.94,-6.23 0.59,-6.62 3.2,0.5 6.42,0.91 9.66,1.02 -0.84,-3.8 -0.8,-7.57 0.5,-11.27 0.2,-3.54 2.62,-6.73 2.21,-10.21 -0.72,-2.93 3.26,-5.26 2.85,-8.05 -2.19,1.37 -5.29,-0.71 -5.34,-3.19 -0.56,-3.12 -2.71,-5.83 -6.03,-6.06 -1.33,-3.9 -2.62,-8.17 -4.99,-11.43 -3.12,-1.07 -6.13,-2.99 -7.17,-6.29 -2.06,-2.33 -5.23,-3.21 -6.66,-6.16 -2.08,-2.2 -5.24,-2.83 -7.66,-4.19 -0.76,-2.53 -3.21,-4.09 -3.94,-6.67 -1.36,-2.63 -2.97,-4.65 -6.15,-3.77 -2.33,-1.57 -7.15,-3.38 -5.31,-6.97 2.02,-2.01 3.76,-4.11 -0.8,-3.11 -12.68,1.51 -25.37,3.01 -38.05,4.52z","name":"Georgia"},"sc":{"path":"m737.03,343.19c-4.26,0.4 -8.64,0.43 -12.24,3.07 -3.2,1.75 -6.48,3.19 -9.88,4.49 2.21,3.31 -4.28,2.74 -2.34,6.44 2.27,2.24 5.2,4.13 8.5,3.28 2.53,3.15 3.83,6.94 6.53,9.88 0.91,2.76 5.13,2.06 6.85,4.46 2.18,1.38 2.96,4.25 5.62,5.01 2.99,1.95 3.36,6.38 7.26,7.24 3.61,0.62 3.77,4.77 5.34,7.38 0.38,3.35 2.02,4.84 4.79,5.96 3.36,1.79 1.76,7.23 5.67,8.16 3.63,-1.38 5.8,-4.63 8.38,-7.34 -2.35,-3.93 0.29,-3.32 3.01,-4.44 1.95,-2.4 5.02,-3.3 6.25,-6.28 2.17,-2 3.86,-4.52 5.4,-6.9 2.81,-0.17 3.42,-3.58 4.92,-5.03 -0.28,-4.13 1.3,-7.89 3.12,-11.47 1.03,-2.11 7.03,-4.5 3.47,-6.34 -5.97,-5.35 -12.78,-9.5 -19.71,-13.47 -4.45,-2.68 -9.74,-0.07 -14.57,-0.06 -2.57,-0.23 -6.63,2.48 -7.32,-1.28 -1.66,-4.5 -6.93,-2.82 -10.63,-2.96 -2.8,0.07 -5.61,0.14 -8.41,0.21z","name":"South Carolina"},"ky":{"path":"m675,267.5c-2.76,-0.77 -6,1.11 -3.38,3.78 1.52,3.15 -3.12,4.12 -5.19,5.27 -2.94,0.53 -4.71,1.29 -4.3,4.82 -1.15,2.66 -5.3,3.24 -6.32,6.32 -2.16,1.4 0.74,6.22 -2.84,5.92 -3.06,0.61 -4.36,-2.79 -7.09,0.11 -2.26,0.51 -1.1,6.98 -3.85,3.1 -2.27,-2.54 -5.57,0.14 -6.16,2.81 -1.91,1.07 -3.4,-3.73 -6.02,-1.91 -3.32,0.61 -7.48,0.47 -9.92,2.91 0.08,2.65 -3.39,3.78 -1.7,6.05 2.34,2.66 -2.23,2.68 -3.86,3.3 -3.57,1.35 -0.68,4.35 -0.76,6.72 0.33,3.45 -3.76,1.44 -5.49,0.72 -2.5,-2.29 -6.26,-0.38 -7.13,2.53 2.86,2.28 -0.04,4.76 0.41,7.66 -3.47,2.04 -3.19,2.73 0.94,2.35 5.84,0.01 11.64,-0.95 17.5,-0.76 -0.7,-3.74 0.98,-4.99 4.56,-4.19 24.33,-3.01 48.82,-4.7 73.16,-7.43 4.3,-0.7 8.2,-2.38 11.75,-4.88 3.3,-0.8 4.04,-2.71 5.12,-5.35 3.46,-4.09 7.13,-8.06 10.79,-12 -3.27,-1.24 -3.03,-5.51 -6.21,-6.95 -2.6,-1.25 -2.07,-4.66 -5.16,-5.36 -2.38,-2.64 0.8,-7.28 -3.02,-8.87 -3.02,-0.01 -2.37,-4.65 -4.57,-3.51 -2.95,0.61 -3.67,4.78 -7.02,3.29 -2.69,-0.23 -5.51,-1.19 -7.82,0.71 -3,0.83 -3.99,-3.61 -7.44,-2.06 -3.51,0.82 -2.17,-5.19 -5.65,-5.26C677.17,266.43 676.21,267.17 675,267.5z","name":"Kentucky"},"al":{"path":"m628.53,359.63c-0.2,14.37 0.12,28.75 -0.54,43.12 -0.04,9.01 -0.88,18.1 -0.07,27.07 1.55,10 2.94,20.01 3.85,30.09 3.07,1.09 3.69,-1.92 4.4,-4.18 -0.3,-3.89 4.27,-3.02 4.89,-0.04 0.72,2.06 4.08,5.27 0.77,6.65 -0.15,0.92 6.17,-0.9 5.88,-2.89 -0.44,-3.01 0.64,-6.86 -2.87,-8.19 -2.29,-0.88 -3.03,-5.59 -0.32,-5.67 14.08,-1.86 28.21,-3.59 42.35,-4.8 2.7,1.07 6.76,-0.25 2.97,-2.5 -1.8,-2 0.95,-5.03 -0.27,-7.65 -0.31,-3.1 -2.63,-5.9 -1.31,-9.15 0.01,-2.92 2.49,-5.36 1.93,-8.3 -3.52,-0.45 -1.34,-5.11 -4.26,-6.7 -3.48,-5.82 -3.36,-13.04 -5.96,-19.21 -2.02,-8.09 -3.34,-16.41 -7.25,-23.88 -0.51,-2.39 -1.08,-4.85 -0.72,-7.31 -14.49,1.18 -28.98,2.35 -43.47,3.53z","name":"Alabama"},"la":{"path":"m521.09,407.28c0.1,7.53 -0.24,15.32 1.67,22.61 2.08,2.49 2.82,5.51 3.15,8.67 1.87,2.78 5.27,4.95 4.59,8.72 1.61,2.18 -0.21,5.69 0.08,8.38 0.42,2.64 -4.36,4.89 -2.01,7.12 1.07,2.26 -0.92,5.31 -0.53,7.95 0.38,3.22 -2.37,5.7 -1.55,8.93 5.18,-2.4 10.98,-0.86 16.47,-1.09 5.72,1.7 11.56,4.87 17.56,4.26 2.93,-2.25 5.94,0.36 8.98,0.93 1.08,-3.4 -4.22,-0.81 -5.8,-2.2 -1.91,-0.36 -2.89,-2.3 -1.17,-3.4 2.08,-1.1 4.08,-1.09 5.66,0.04 2.15,-1.39 5.6,-0.24 6.26,2.38 -0.33,3.62 3.42,1.7 5.28,3.15 3.83,1.5 -1.41,4.07 0.83,5.37 2.88,0.97 5.73,2.94 8.62,3.29 3.51,-0.05 2.81,-4.53 6.47,-4.17 1.83,-2.9 4.44,-0.25 4.39,2.31 1.53,1.64 4,-3.68 1.98,-3.66 0.22,-3.37 2.17,-3.21 4.31,-5.41 1.59,0.95 0.91,2.82 1.41,4.16 3.33,0.39 7.44,1.09 9.34,4.06 2.79,0.08 5.17,1.1 5.56,-2.56 -2.68,-0.27 -4.15,-3.88 -7.35,-3.19 -2.31,0.06 -6.3,-1.62 -6.15,-3.77 1.62,-3.62 2.23,-1.74 2.03,-4.38 2.88,1.09 5.69,-2.27 3.22,-4.47 0.46,-4.62 -3.73,-0.15 -3.34,2.19 -1.36,1.21 -6.35,-0.96 -4.6,-3.27 1.71,-1.84 4.2,-4.5 2.19,-6.95 -0.13,-3.26 -2.69,-5.21 -4.47,-7.38 0.52,-2.7 2.26,-7.35 -2.36,-5.46 -10.43,1.28 -20.97,0.69 -31.45,1.12 -1.61,-3.72 -0.02,-7.76 0.16,-11.59 2.66,-4.86 5.46,-9.65 8.25,-14.44 -2.04,-2.82 3.52,-4.45 -0.74,-6.48 -0.53,-2.15 -1.29,-4.65 -2.32,-6.83 -0.08,-3.1 0.9,-7.3 -3.62,-5.79 -17,0.28 -34,0.57 -51,0.85z","name":"Louisiana"},"ms":{"path":"m591.03,363.5c-1.45,1.74 -4.03,3.15 -4.63,6.03 -1.4,2.22 1.43,5.74 -2.69,6.07 -1.48,1.97 -4.77,4.42 -3.4,7.17 -1.36,1.83 -3.59,3.95 -3.48,7.01 -2.16,2.66 1.55,5.28 -0.27,7.12 -0.45,1.84 2.25,4.42 1.35,7.03 -1.92,2.71 -1.63,6.55 -0.61,9.53 1.6,2.4 0.78,5.54 3.73,6.94 -0.95,2.53 -1.41,3.75 -1.87,6.31 -2.55,4.96 -6.07,9.62 -7.89,14.84 0.01,2.98 -1.44,6.14 -0.14,8.97 11.4,-0.36 22.87,0.25 34.19,-1.5 2.75,2.21 -2.19,6.39 1.33,8.15 2.82,1.62 2.28,5.18 3.89,7.63 2.07,-1.86 2.51,-6.19 5.82,-4.07 3.21,-0.67 6.85,-3.02 9.89,-0.64 3.62,0.73 6.01,-0.27 4.42,-4.26 -0.81,-10.1 -2.99,-20.07 -3.84,-30.15 0.14,-21.99 1.48,-43.98 0.64,-65.97 -12.15,1.26 -24.29,2.52 -36.44,3.78z","name":"Mississippi"},"ia":{"path":"m476.25,181.16c-3.42,-0.05 -2.16,5.68 0.72,6.29 0.54,2.07 -0.75,5.06 -1.41,7.35 -2.13,2.82 -0.93,5.45 1.04,7.92 1.22,4.34 2.24,8.85 4.05,13.06 0.6,3.22 1.29,6.38 3.41,9 0.02,3.49 1.27,6.69 2.3,9.91 -0.04,3.54 0.03,7.05 2.08,10.09 22.2,-1.02 44.44,-1.75 66.66,-2.63 0.77,1.43 3.25,7.11 4.37,4.25 -0.96,-2.5 1.19,-4.52 3.57,-4.72 -0.88,-2.62 1.19,-4.59 2.5,-6.28 1.27,-2.92 -1.39,-4.02 -2.41,-6.31 0.69,-2.9 1.79,-5.3 5.13,-5.46 2.88,-0.83 6.57,-1.81 6.65,-5.41 1.76,-3.04 3.73,-8.01 -0.26,-10.18 -2.74,-1.06 -1.75,-5.27 -5.21,-5.14 -0.64,-1.97 -0.85,-4.76 -4.19,-4.21 -2.75,-0.8 -4.55,-3.47 -5.37,-6 -1.36,-2.89 2.01,-4.72 1.65,-7.28 -3.82,-0.4 -1.19,-6.5 -5.03,-5.47 -26.75,0.41 -53.5,0.81 -80.25,1.22z","name":"Iowa"},"mn":{"path":"m497.03,53.84c-0.69,2.52 0.93,7.42 -1.31,8.34 -9.65,-0.01 -19.29,-0.02 -28.94,-0.03 1.16,2.87 2.18,5.76 0.97,8.81 0.05,5.74 -0.79,11.86 2.51,16.95 2.04,3.78 0.64,8.47 1.5,12.6 0.82,6.84 1.76,13.67 3.55,20.32 0.05,3.83 0.88,7.8 0.03,11.53 -1.57,1.74 -4.91,3.29 -2.22,5.78 1.89,1.83 5.05,2.94 4.58,6.1 0.28,11.9 0.25,23.83 0.42,35.75 26.72,-0.38 53.44,-0.75 80.16,-1.13 -0.15,-3.62 -0.46,-7.93 -4.36,-9.47 -3.02,-1.66 -6.24,-3.1 -7.63,-6.5 -0.72,-3.61 -5.32,-1.16 -6.05,-4.61 -1.56,-2.09 -5.29,-0.37 -6.57,-3.78 -1.66,-2.1 -0.52,-5.5 -1.1,-8.1 -1.34,-2.93 1.65,-4.99 1.47,-7.54 -0.2,-3.22 -5.36,-3.85 -2.24,-7.43 0.41,-4.47 5.39,-5.33 7.61,-8.59 0.24,-3.87 -0.73,-8.14 0.52,-11.77 1.76,-3.14 5.17,-5.1 8.28,-6.26 1.92,-2.08 3.66,-4.57 6.13,-5.81 2.54,-4.97 6.04,-9.99 11.81,-11.4 4.55,-1.98 9.12,-3.92 13.6,-6.04 0.73,-3.15 -3.7,-0.18 -5.06,0.03 -0.82,-3.87 -4.2,-3.09 -7.28,-2.87 -2.25,-0.87 -5.34,2.83 -6,-0.66 -1.13,-3.5 -4.51,0.72 -5.88,2.13 -2.33,1.63 -6.22,1.16 -8.06,-0.56 0.94,-3.05 -4.61,-0.39 -4.53,-3.96 -0.16,-2.3 -3.48,1.3 -5.77,-1.2 -3.04,-0.91 -5.5,-3.22 -8.29,-4.38 -2.49,0.4 -5.86,-2.38 -6.7,1.5 -1.17,0.79 -7.15,1.83 -5.93,-1.54 -2.99,0.03 -6.03,-0.05 -7.53,-1.75 -2.6,0.59 -5.72,-0.41 -5.9,-3.43 -0.88,-3.28 -1.44,-6.61 -1.88,-9.98 -1.23,-0.6 -2.54,-1.02 -3.91,-1.06z","name":"Minnesota"},"ok":{"path":"m363.31,330.03c17.51,1.12 35.04,1.73 52.56,2.47 -1.37,13.62 -2.89,27.23 -2.83,40.93 -0.92,3.93 3.48,5.78 6.14,7.66 0.56,-5.56 2.96,1.46 4.25,-1.31 0.93,-1.5 5.57,1.68 3.39,4.42 1.59,0.66 4.76,0.51 6.73,1.82 2.79,-0.99 5.16,3.32 7.03,1.26 1.82,-1.93 5.59,-0.31 6.5,2.02 2.44,0.79 1.71,5.84 4.76,3.05 1.39,-1.65 6.25,-1.17 6.69,1.21 1.28,1.5 5.69,3.72 7.39,1.92 0.33,-2.75 3.38,-5.95 4.59,-1.83 3.59,0.38 6.96,2 10.46,3 2.28,-1.86 2.44,-4.68 6.53,-3.41 2.53,1.92 3.8,-1.41 6.31,-1.16 0.85,2.42 5.2,2.41 6.19,-0.5 3.2,-0.2 3.66,3.71 6.55,4.35 1.86,0.4 6.31,3.63 5.36,0.18 -0.32,-12.27 0.1,-24.59 -0.7,-36.82 -1.15,-6.03 -1.01,-12.18 -1.43,-18.25 -1.32,-5.29 -2.05,-10.73 -2.07,-16.18 -20.01,0.66 -40.04,-0.04 -60.06,-0.22 -27.85,-1.32 -55.73,-2.3 -83.53,-4.56 -0.27,3.31 -0.54,6.63 -0.81,9.94z","name":"Oklahoma"},"tx":{"path":"m359.47,330.97c2.34,-0.11 -0.86,-1.81 0,0z m0.72,18.31c-1.64,20.84 -2.52,41.75 -4.68,62.55 -0.51,4.33 -0.99,8.66 -1.51,12.98 -17.84,-0.87 -35.67,-1.93 -53.42,-3.89 -4.16,-0.41 -8.32,-0.76 -12.48,-1.11 -0.67,3.74 2.27,3.68 4.04,6.12 2.26,1.83 1.13,6.03 4.65,6.5 3.52,0.48 2.9,4.6 5.45,6.34 3.38,3.15 5.5,7.91 10.27,9.06 1.91,1.27 4,3.22 4.53,5.46 0.69,3.96 4.53,7.02 3.47,11.33 -0.88,5.15 2.22,9.63 5.93,12.88 2.18,2.95 5.14,4.76 8.63,5.78 1.88,1.95 3.01,3.88 5.72,4.88 2.59,0.18 5.38,4.34 7.35,1.18 2.59,-3.14 5.48,-6.41 6.05,-10.55 1.26,-2.82 3.58,-4.32 6.5,-5.06 2.72,-1.59 5.32,-2.13 7.47,0.62 4.91,0.57 10.2,0.53 14.79,2.22 2.83,1.43 2.56,4.53 5.17,6.33 1.73,2.05 4.83,3.37 5.81,5.82 1.37,2.07 2.66,4.26 2.69,7.03 1.62,4.34 4.17,8.51 5.31,12.94 -0.24,2.77 4.65,2.49 4.95,5.51 2.24,4.08 4.37,9.17 9.21,10.49 3.28,2 0.03,5.04 0.91,7.5 3.28,0.87 -0.01,4.68 0.94,6.67 2.53,1.36 4.37,3.2 4.22,6.44 0.39,3.34 2.13,6.83 5.69,7.54 3.01,1.93 6.69,2.13 9.87,3.4 2.28,1.79 5.15,4.09 8.16,2.83 3.46,0.46 6.77,1.29 9.37,3.75 1.43,2.54 6.51,-0.91 4.31,-2.89 -2.04,-3.39 -1.3,-7.79 -2.83,-11.46 -0.63,-3.07 -2.39,-5.95 -0.99,-9.1 1.17,-4.9 2.87,-9.76 4.04,-14.71 -3.37,-1.01 -2.07,-5.47 1.21,-4.71 3.99,0.42 3.65,-6.43 7.81,-6.05 5.25,-1.56 9.07,-6 14.16,-8.05 6.91,-2.81 13.62,-6.46 18.72,-12.05 2.58,-2.98 7.09,-3.95 8.69,-7.75 5,-2.22 9.8,-4.93 15.22,-6 -0.97,-2.64 0.52,-4.86 1.32,-7.22 0.39,-2.99 0.19,-6.07 1.18,-8.94 -3.15,-2.27 0.38,-4.91 1.38,-7.41 -0.2,-2.8 1.42,-6.25 0.09,-8.66 0.3,-2.93 -1.49,-5.14 -3.35,-7.29 -2.46,-2.64 -1.11,-6.91 -3.87,-9.52 -2.53,-4.57 -1.59,-10.19 -2.25,-15.22 0.02,-5 0.19,-10 -0.5,-14.97 -2.63,-2.31 -5.52,2.33 -7.52,-1.37 -3.1,-2.07 -7.66,-2.1 -9.73,-5.68 -2.31,-2.48 -3.82,2.84 -7.18,0.96 -1.91,-2.73 -3.59,0.03 -5.98,0.18 -2.27,-1.15 -6.07,-1.48 -6.09,1.76 -2.76,2.37 -5.95,-0.93 -8.94,-1.28 -3,1.38 -5.23,-3.83 -6.3,-1.87 -0.15,2.66 -2.52,5.1 -5.13,3.34 -3.23,-0.15 -4.91,-2.49 -6.57,-3.89 -2.95,-1.74 -4.3,2.32 -6.94,0.88 -1.48,-1.39 -1.87,-3.6 -3.92,-5.65 -3.06,-2.83 -5.03,3.17 -7.13,0.23 -2.05,-2.11 -5.57,-0.83 -7.94,-2.69 -3.56,0.59 -5.54,-0.24 -4.13,-4.11 -1.89,-1.85 -2.28,1.21 -4.77,-0.14 -0.59,-0.41 -3.45,1.78 -5,-1.11 -1.9,-1.9 -5.13,-3.22 -4.18,-6.45 0.03,-10.58 0.25,-21.15 1.66,-31.65 0.3,-2.99 0.6,-5.98 0.89,-8.98 -17.65,-0.63 -35.3,-1.27 -52.94,-2.22 -0.52,6.07 -1.04,12.15 -1.56,18.22z M466.53,518.63c-5.2,7.17 2.93,-3.27 0,0z","name":"Texas"},"nm":{"path":"m242.72,428.78c4.82,0.63 9.65,1.25 14.47,1.88 0.43,-3.33 0.85,-6.67 1.28,-10 9.7,0.89 19.4,1.86 29.09,2.78 -0.9,-3.14 -1.39,-5.98 2.84,-4.5 18.29,1.28 36.48,3.79 54.81,4.49 2.45,-0.6 7.66,2.13 7.99,-1.01 3.06,-22.93 3.75,-46.09 5.59,-69.14 0.54,-7.79 1.39,-15.56 2.02,-23.34 3.21,0.65 1.17,-4.81 2.07,-6.86 1.79,-4.38 -2.87,-3.37 -5.73,-3.85 -32.35,-3.3 -64.71,-6.59 -97.06,-9.89 -5.79,39.81 -11.58,79.63 -17.38,119.44z","name":"New Mexico"},"ks":{"path":"m380.53,320.34c25.06,1.17 50.11,2.71 75.19,3.35 17.22,0.07 34.44,0.63 51.66,0.18 -0.25,-12.69 0.23,-25.42 -0.47,-38.08 -0.61,-2.83 -0.17,-6.27 -1.38,-8.74 -3.04,-2.03 -6.02,-5.19 -6.68,-8.77 -0.43,-2.51 4.3,-4.59 1.29,-6.64 -3.02,0.54 -4.05,-3.34 -7.17,-2.43 -36.21,-0.82 -72.43,-1.33 -108.63,-2.5 -1.27,21.21 -2.54,42.42 -3.81,63.63z","name":"Kansas"},"ne":{"path":"m353.38,230.59c10.76,0.96 21.27,2.72 32.03,3.66 -0.37,7.11 -0.71,14.23 -1.06,21.34 36.49,1.29 73,1.84 109.5,2.56 -0.31,-1.17 -3.13,-4.05 -4.03,-6.15 -1.99,-2.11 -0.36,-5.13 -2.45,-7.34 -2.42,-3.19 -1.66,-7.14 -2.2,-10.79 -1.66,-2.86 -1.45,-6.25 -2.29,-9.26 -2.94,-2.85 -2.34,-7.01 -3.95,-10.49 -1.13,-3.1 -2.18,-6.19 -2.62,-9.47 -3.51,1.32 -2.89,-3.07 -4.85,-4.29 -2.4,-1.68 -5.57,-1.85 -7.72,-3.93 -3.79,0.07 -7.65,1.04 -11.13,1.94 -2.52,-2.2 -6.03,-3.13 -7.91,-6.06 -13.61,0.96 -27.23,-0.49 -40.83,-1.11 -15.5,-1.05 -31.02,-1.79 -46.51,-2.86 -1.67,14.08 -2.83,28.17 -4,42.25z","name":"Nebraska"},"sd":{"path":"m357.44,187.41c25.68,1.58 51.37,3.15 77.06,4.26 3.58,-0.01 7.34,-0.51 10.81,-0.23 1.8,2.9 5.24,3.85 7.69,6 3.55,-1.45 7.52,-1.89 11.25,-1.91 2.45,2.67 7.26,2.29 9.15,5.33 1.32,4.76 3.27,1.86 0.18,-1.15 -1.53,-2.17 1.46,-4.6 1.56,-6.99 1.2,-2.87 1.38,-5.28 -1.58,-6.75 -0.5,-2.04 -0.73,-6.65 2.41,-5.84 2.62,-0.28 0.39,-5.28 1.06,-7.5 -0.32,-9.7 0.19,-19.47 -0.64,-29.13 -0.24,-3.58 -6.26,-4.19 -5.42,-8.4 1.09,-1.22 5.81,-4.38 2.75,-5.4 -27.23,-0.89 -54.5,-1.01 -81.67,-3.15 -9.79,-0.62 -19.57,-1.24 -29.36,-1.86 -1.75,20.91 -3.5,41.81 -5.25,62.72z","name":"South Dakota"},"nd":{"path":"m362.88,123.72c26.46,1.49 52.89,3.7 79.4,3.91 10.84,0.26 21.67,0.52 32.51,0.78 0.01,-5.53 -1.38,-10.82 -2.5,-16.17 -1.27,-7.42 -2.05,-14.89 -2.13,-22.42 -2.61,-4.16 -4.11,-9 -3.48,-13.94 -0.44,-3.25 0.67,-6.57 0.3,-9.7 -0.15,-4.01 -2.83,-4.61 -6.31,-4.12 -25.15,-0.47 -50.33,-1.05 -75.41,-3.06 -5.17,-0.49 -10.33,-0.98 -15.5,-1.47 -2.29,22.06 -4.58,44.13 -6.88,66.19z","name":"North Dakota"},"wy":{"path":"m240.16,217.84c37.4,4.49 74.29,8.23 111.69,12.72 2.5,-29.2 5.5,-57.65 8,-86.84 -35.26,-4.45 -70.52,-8.9 -105.78,-13.34 -4.64,29.16 -9.27,58.31 -13.91,87.47z","name":"Wyoming"},"mt":{"path":"m192.59,52.19c0.84,2.76 3.25,5.4 3.2,8.23 -1.5,2.79 -1,5.49 0.52,8.15 3.4,0.39 4.18,3.44 5.26,6.16 1.43,3.34 2.55,6.88 5.37,9.34 0.88,2.21 5.27,1.18 4.34,4.72 -2.23,6.21 -5.45,12.23 -7.06,18.56 0.02,3.34 3.4,5.25 5.73,2.22 1.61,-2.43 5.63,-3.04 4.69,0.97 -0.5,5.3 1.81,10.35 2.59,15.53 1.9,2 5.27,3.44 5.68,6.31 -0.71,1.91 -0.39,8.78 2.32,5.14 1.85,-1.89 4.93,-0.29 6.85,0.86 3.28,-1.63 7.26,-1.21 10.34,0.69 3.69,0.41 1.52,-5 5.95,-4.08 2.71,-0.42 2.01,6.69 3.21,4.1 0.56,-3.26 1.09,-6.54 1.68,-9.8 35.57,4.49 71.15,8.96 106.72,13.44 2.9,-28.44 5.79,-56.88 8.69,-85.31 -28.84,-2.29 -57.55,-5.91 -86.19,-9.99 -26.71,-4.12 -53.36,-8.71 -79.73,-14.68 -3.05,-0.61 -6.99,-2.59 -6.53,2.19 -1.21,5.75 -2.42,11.51 -3.62,17.26z","name":"Montana"},"co":{"path":"m260.17,308.53c39.89,4.09 79.51,8.26 119.39,11.91 1.61,-28.46 3.23,-56.92 4.84,-85.38 -37.47,-4.17 -74.94,-8.33 -112.41,-12.5 -4.03,28.98 -7.8,56.99 -11.83,85.97z","name":"Colorado"},"id":{"path":"m169.84,91.72c0.52,3.07 2.27,5.25 4.94,6.78 0.4,3.02 -0.61,5.46 -3.03,7.31 -2.3,2.7 -4.38,5.97 -6.09,8.83 0.39,2.93 -2.57,3.54 -4.23,4.8 -1.77,2.31 -4.28,4.3 -3.93,7.5 -0.64,2.43 4.69,0.57 4.09,4.34 -5.19,11.17 -6.78,23.51 -10.13,35.32 -0.79,3.16 -1.22,4.91 -2.01,8.08 56.92,12.84 62.26,13.45 93.58,19.41 2.75,-17.6 5.5,-35.21 8.25,-52.81 -2.66,-0.84 -0.58,-6.52 -4.23,-4.97 -1.24,1.7 -1.62,4.95 -5.17,3.47 -3.11,-1.99 -6.81,-1.34 -10.13,-0.56 -2.53,-1.76 -5.91,-2.01 -7.69,0.88 -1.75,-0.05 -3.29,-3.39 -2.79,-5.36 1.91,-3.98 -2.85,-5.89 -5.05,-8.27 -0.98,-5.88 -3.48,-11.64 -2.5,-17.69 -1.86,-0.01 -4.25,2.69 -6.47,3.63 -2.21,0.18 -4.52,-3.09 -4.1,-5.31 1.19,-5.37 4.07,-10.37 5.88,-15.6 1.95,-2.64 1.12,-5.57 -2.41,-5.62 -1.55,-3.37 -4.92,-5.66 -5.61,-9.53 -1.31,-2.63 -1.42,-6.47 -5.06,-6.76 -0.99,-1.85 -3.18,-4.47 -1.91,-6.73 2.09,-2.98 -0.34,-5.7 -1.53,-8.5 -2.13,-3.05 0.55,-6.68 0.67,-10.01 0.9,-4.35 1.8,-8.69 2.69,-13.04 -4.18,-0.78 -8.35,-1.56 -12.53,-2.34 -4.5,20.92 -9,41.83 -13.5,62.75z","name":"Idaho"},"ut":{"path":"m176.34,297.78c27.57,3.92 55.15,7.83 82.72,11.75 4.04,-29.08 8.08,-58.17 12.13,-87.25 -10.83,-1.14 -21.65,-2.33 -32.47,-3.59 1.43,-7.93 2.82,-15.85 3.84,-23.84 -15.27,-2.85 -30.54,-5.71 -45.81,-8.56 -6.8,37.17 -13.6,74.33 -20.41,111.5z","name":"Utah"},"az":{"path":"m173.19,314.66c-2.49,-0.06 -3.05,4.43 -6.38,2.94 -0.74,-2.87 -3.59,-2.82 -5.59,-4.22 -3.74,0.74 -2.37,4.58 -2.68,7.41 -0.52,5.04 -0.42,10.21 -0.89,15.22 -2.19,2.33 -2.44,5.78 -0.24,8.19 2.32,2.62 0.58,7.52 4.09,9.09 0.98,3.59 -2.89,4.83 -5.41,6.09 -3.29,2.46 -3.28,6.86 -3.88,10.47 -1.25,2.44 -4.81,2.39 -4.92,4.97 0.47,2.18 6.18,0.38 3.42,4.54 -0.65,2.75 -3.14,3.45 -5.62,3.78 -3.6,1.45 -2.69,4.7 0.77,5.44 14.69,7.84 28.52,17.13 43.01,25.32 5.79,3.19 11.27,7.21 17.27,9.88 11.71,2.83 23.75,3.45 35.68,4.87 5.71,-39.38 11.42,-78.75 17.13,-118.13 -27.58,-3.93 -55.17,-7.85 -82.75,-11.78 -1,5.31 -2,10.63 -3,15.94z","name":"Arizona"},"nv":{"path":"m84.84,232.41c22.96,34.61 45.92,69.23 68.88,103.84 3.66,2.65 3.19,-3.47 3.27,-5.71 0.37,-5.43 0.36,-11.24 1.08,-16.44 2.05,-2.03 4.26,-2 6.08,-0.39 2.62,-0.16 3.86,5.9 6.03,1.27 2.74,-0.82 2.66,-3.64 3.13,-6.41 7.5,-40.87 15,-81.75 22.51,-122.62 -30.72,-6.81 -61.44,-13.63 -92.16,-20.44 -6.27,22.3 -12.54,44.6 -18.81,66.91z","name":"Nevada"},"or":{"path":"M67.16,62.81C64.24,70.42 62.73,78.57 58.5,85.63c-2.86,8.53 -5.96,16.93 -10.17,24.89 -3.06,6.61 -8,12.31 -11.32,18.7 -1.03,6.5 -0.64,13.05 -0.36,19.6 37.23,8.7 74.46,16.69 111.69,25.39 3.45,-13.15 6.51,-25.75 10.19,-38.81 1.2,-2.48 3.15,-6.06 -1.1,-5.42 -2.58,-1.78 -0.23,-4.45 -0.38,-6.91 2.3,-2.82 4.36,-5.82 7.47,-7.75 1.75,-5.08 5.43,-9.19 9.03,-13.06 1.66,-3.48 -2.46,-3.92 -3.39,-6.47 -0.25,-3.79 -3.56,-4.26 -6.62,-4.99 -7.63,-2.2 -15.38,-4.2 -23.21,-5.54 -4.9,0.03 -9.79,0.06 -14.69,0.09 -0.95,-2.84 -4.67,1.86 -7.11,0.5 -2.61,0.82 -4.42,-2.63 -6.57,-1.28 -2.61,-0.06 -5.23,0.11 -7.15,-1.87 -3.09,-1.53 -6.33,-1.81 -9.5,-3.1 -1.87,3.03 -5.69,1.22 -8.53,1.31 -1.65,-1.64 -5.79,-3.02 -6.03,-4.81 1.1,-2.44 0.78,-5.93 0.53,-8.59 -0.42,-3.92 -4.72,-2.63 -6.25,-4.49C74.59,58.67 69.45,62.45 67.16,62.81z","name":"Oregon"},"wa":{"path":"m101.38,8.72c0.05,2.75 2.93,5.39 3.25,8.16 -1.92,2.33 -1.78,5.19 -1.32,7.71 -1.81,2.64 1.63,4.82 0.67,7.42 -3.6,1.52 -2.43,-3.7 -4.86,-4.99 -3.34,-2.24 1.47,-3.87 1.17,-5.42 -2.5,-1.11 -2.24,3.88 -3.69,4.17C92.33,26.39 88.86,23.04 84.76,22.57 79.82,20.66 75.28,17.69 72.25,13.25c-3.13,-0.98 -1.96,4.97 -3.25,6.95 -0.63,2.8 2.59,5.06 1.41,8.21 0.52,3.86 -1.29,7.55 0.18,11.29 -1.06,2.88 4.75,5.54 2.94,6.39 -3.45,-1.05 -6.2,3.2 -2.25,4.34 1.57,0.97 -0.61,6.32 -3.3,5.43 -1.83,2.15 1.28,6.86 4.14,4.17 3.77,-1.55 2.75,3.51 5.83,3.13 2.81,-0.24 4.26,3.31 4.54,5.61 0.04,2.48 -0.15,6.02 -0.26,7.78 2.63,1.76 5.01,4.26 8.46,3.62 3.2,0.66 4.7,-3.26 7.97,-0.5 3.01,0.48 6.37,1.55 8.79,3.66 3.03,0.92 6.02,-1.78 8.19,1.05 3.44,1.3 6.67,0.03 9.84,-1.4 0.99,1.78 4.42,1.32 7,1.3 5.35,-0.19 10.68,-0.16 15.82,1.55 6.99,1.44 13.78,3.45 20.65,5.4 4.47,-20.85 8.94,-41.71 13.41,-62.56 -19.81,-3.93 -39.37,-9.21 -58.73,-14.66 -7.27,-1.53 -14.4,-3.52 -21.46,-5.87L101.75,8.45 101.38,8.72z M95.5,15.16C94.05,13.72 92.15,14.26 94.72,17.63 94.39,13.84 99.19,18.11 98.98,14.18 98.24,12.75 96.05,14.08 95.5,15.16z m2.31,1.91c-3.13,3.04 1.36,2.18 0.16,-0.25l-0.16,0.25z","name":"Washington"},"ca":{"path":"m35.06,153.94c-0.1,4.04 0.4,8.21 -1.99,11.75 -1.86,3.68 -2.55,8.24 -6.48,10.38 -1.19,2.11 -3.49,3.38 -3.59,6.45 -1.94,3.49 2.49,5.65 2.91,8.98 1.54,3.39 2.34,6.94 1.63,10.65 0,2.92 -2.79,5.01 -2.24,8.14 0.05,2.97 -2.24,5.87 0.04,8.54 2.58,5 6.38,9.93 6.71,15.69 -0.54,2.77 -0.99,5.37 1.81,7.17 1.6,1.95 4.49,3.66 2.79,6.46 -1.73,3.87 -1.14,8.04 -1.09,12.16 1.68,2.67 2.83,6.76 6.66,6.53 1.48,2.33 0.97,4.84 -0.22,7.13 -2.5,1.53 -4.36,2.73 -3.66,6.08 0.27,3.49 4.27,5.34 4.36,9.01 1.46,6.2 4.13,11.92 7.59,17.25 0.71,2.57 2.16,4.34 2.9,6.41 -0.24,3.33 -1.93,6.49 -2.41,9.87 -1.66,2.61 1.19,5.52 3.99,5.12 4.03,0.15 7.27,3.31 11.01,4.04 3,-0.55 4.74,2.9 6.07,5.11 1.54,2.71 2.37,6 5.76,6.88 2.51,1.14 6.19,0.05 7.17,3.45 2.41,2.72 -2.39,5.05 1.41,5.17 2.73,1.87 5.56,-1.74 7.56,-0.74 2.13,2.06 4.05,4.2 4.93,7.05 4.3,4.9 1.44,11.77 2.79,17.52 14.73,1.94 29.44,4.72 44.27,5.38 2.78,1.19 6.19,-4.43 2.84,-4.65 -3.13,0.64 -2.83,-4.02 -1.36,-4.66 3.15,-0.88 4.92,-3.83 4.65,-7.04 0.47,-3.98 3.27,-7.43 7.22,-8.4 3.43,-2.04 -0.33,-3.58 -0.79,-5.79 -0.23,-3.65 -1.95,-6.81 -3.62,-9.89 2.02,-3.66 -2.22,-3.32 -3.16,-6.24 -22.6,-34.1 -45.2,-68.19 -67.81,-102.29 6.27,-22.44 12.54,-44.88 18.81,-67.31 -22.04,-5.16 -44.08,-10.31 -66.13,-15.47 -0.45,1.38 -0.9,2.75 -1.34,4.13z m24.13,184.72c-0.27,3.05 7.99,3.06 4.7,2.07 -1.63,-0.35 -3.17,-2.46 -4.7,-2.07z m-5.16,0.38c0.33,3.71 5.81,0.51 1.31,-0.04 -0.44,0.01 -0.88,0.02 -1.31,0.04z M79.69,357.5c-0.2,1.58 4.42,6 3.16,2.37C82.22,358.91 80.8,357.6 79.69,357.5z M77.75,369.13c-0.14,1.55 3.2,3.89 1.32,1.26C78.6,369.72 77.39,366.55 77.75,369.13z","name":"California"}}});

;
/** Add Europe Map Data Points */
jQuery.fn.vectorMap('addMap', 'europe_en', {"width":680,"height":520,"pathes":{"gl":{"path":"M13.47,93.57C12.35,92.52 12.34,90 10.44,89.14 10.62,88.14 13.84,87.66 11.35,86.39 10.05,87.17 9.25,86.92 8.71,87.58 6.27,88.12 8.6,85.09 6.17,85.17 5.23,84.47 10.33,84.75 9.98,83.14 11.32,83.4 14.67,82.04 12.37,81.03 11.23,81.19 6.54,82.06 10.06,81.32 13.04,80.64 9.92,76.6 8.71,79.05 9.24,77.06 11.03,78.05 12.88,77.78 14.68,74.59 9.38,77.17 8.23,75.54 7.26,73.61 12.43,77.09 11.48,74.6c2.44,-0.76 -0.97,1.23 1.21,1.43 1,0.07 3.06,0.24 1.26,-0.8C15.39,74.51 14.27,73.05 14.04,72.76 16.26,70.08 9.73,69.39 11.65,72.54 9.43,70.77 7.4,69.72 5.62,68.37 4.84,67.27 3.62,65.14 5.75,64.54 6.27,63.17 3.83,63.23 6.08,62.64 8.52,60.62 3.8,58.38 3.79,56.87 4.78,56.07 3.39,53.57 4.92,55.82c2,1.48 -1.5,0.05 -0.41,1.67 0.7,1.18 4.94,4.58 4.09,1.22C7.96,57.37 6.11,57.21 8.09,56.47 5.75,56.14 4.83,52.58 8.11,53.61c1.58,0.65 2.17,-1 2.13,-1.24 1.86,-0.56 0.99,-3.89 0.14,-5.02 -2.29,-0.92 1.59,-2.34 -1.23,-2.91 0.6,-3.73 4.98,-2.29 7.51,-3.37 2.78,-1.33 -1.33,-1.73 -1.69,-3.06 -3.07,-1.99 2.8,-0.5 3.28,-2.76 2.87,0.22 -2.67,-2.82 -1.49,-3.84 1.34,0.59 4.57,3.1 4.27,-0.2C20.58,29.48 17.09,31.14 17.33,29.6c1.78,1.02 0.79,-3.69 2.33,-1.12 1.76,1.21 4.05,-0.81 1.11,-1.21 -0.72,-0.16 1.96,-1.91 2.18,-0.31 2.04,0.89 2.39,3.26 4.86,3.29 1.12,-1.58 -2.89,-2.38 -0.16,-2.31 1.35,-1.83 -5.03,-0.94 -1.14,-2.29 1.39,-1.55 1.81,4.29 2.64,1.36 -0.57,-1.39 -0.41,-4.67 1.53,-2.59 0.16,2.02 -2.74,3.73 -1.03,6.23 2.7,1.13 0.11,-4.85 3.69,-4.25 2.74,-0.7 0.37,-3.01 -1.39,-3.16 0.93,-1.59 -0.48,-0.52 -0.91,-1.1 -1.26,0.42 -2.63,-0.27 -1.15,-1.19 -0.81,-1.9 -3.85,0.74 -5.54,0.53 -3.44,0.64 1.14,-2.76 2.36,-3.3 2.28,-0.77 4.66,2.97 6.55,0.04C34.81,17.14 33.04,17.79 32.17,17.97 30.61,18.81 30.38,17.32 30.54,16.77 29.14,17.79 26.4,16.27 29.42,16.34 29.89,14.12 31.85,14.39 33.58,13.44c0.27,-2.21 -3.96,0.03 -1.92,-1.94 2.34,1.37 5.29,0.49 7.37,1.6 0.49,1.25 2.93,3.07 2.07,0.58C40.16,10.86 37.07,10.79 34.89,10.94 32.01,10.71 38.39,8.92 36.45,6.69 35.49,6.8 33.31,6.65 34.75,5.53c1.74,0.57 3.45,1.31 2.13,3.63 0.97,-0.77 3.6,0.14 4.92,-0.01C42.62,6.51 37.36,8.29 39.31,5.97 39.94,4.69 35.39,5.71 36.07,3.41c2.18,-0.52 6.21,0.1 8.48,1.64 1.78,-0.72 2.84,-0.23 4.07,0.55 1.73,-0.23 3.46,0.06 2.78,2.25C52.75,9.86 54.51,8.35 52.72,6.73 52.71,4.07 54.56,10.07 55.78,8.98 56.01,5.87 52.57,4.02 49.87,3.57 48.45,2.66 43.96,4.29 45.02,2.48 44.96,1.07 43.75,0.16 45.71,1.28 47.56,3.52 50.55,-0.47 53.01,0.78 55.13,-0.05 52.02,4.62 54.57,4.07 55.09,3.62 56.43,7.62 57.26,5.53 57.36,3.28 54.5,4.61 54.71,2.93 54.66,0.68 56.28,0.89 57.93,0.78 59.1,1.36 57.92,5.72 60.98,5.64 61.74,4.33 57.63,0.17 61.09,2.11 61.53,3.09 65.18,3.43 63.42,2.17 61.88,1.53 60.02,-0.12 62.69,1.24c1.18,0.74 1.27,-0.27 2.37,-0.09 0.49,-0.8 2.06,-0.17 3.01,-0.37 45.89,0 91.78,0 137.67,0 0.61,1.21 1.15,3.04 -0.24,1.09 -2.48,-0.7 1.23,2.94 1.58,3.94 1.63,2.86 -1.86,0.67 -3.36,1.88 1.28,-1.72 -2.26,-4.24 -1.57,-1.36 0.03,2.25 1.64,3.73 3.68,2.39 1.03,0.77 -1.42,2.8 -1.62,3.53 -3.09,0.12 0.02,1.62 1.04,2.22 0.66,2.09 4.04,0.64 2.3,3.22 -1.05,1.95 -3.92,1.82 -3.21,-0.86 0.14,-3.28 -4.67,-1.36 -4.04,-5.02 -2.02,-0.71 -0.18,3.84 -2.96,2.48 -0.73,0.74 0.41,1.75 -1.42,1.32 -2.61,0.54 1.71,4.84 -0.38,4.25 -1.39,0.66 -1.21,4.72 0.33,2.08 -0.04,-1.13 1.18,-4.09 2.39,-2.05 0.43,1.69 3.14,3.16 0.34,3.59 0.86,3.33 -3.29,2.48 -4.22,0.42 -0.56,1.42 -4.92,2.25 -4.96,-1.01 -1.09,-1.09 -0.61,-6.28 0.38,-2.79 -0.38,2.15 4.88,3.94 3.74,1.34 -3.75,0.99 -2.13,-7.24 -6.06,-4.79 -0.93,1.3 -1.66,1.94 -1.57,-0.09 0.87,-1.48 -0.65,-6.36 -1.62,-2.76 -0.29,1.71 1.87,5.7 -1.38,4.23 -1.61,0.79 -3.43,1.95 -3.68,-0.56 -1.68,-1 0.16,-4.48 -2.68,-3.04 -0.67,1.11 2.68,6.25 0.02,3.71 -0.94,-1.89 -3.02,-1.6 -4.56,-0.77 1.83,0.09 2.37,0.85 0.57,2.18 0.59,2.05 2.81,-2.2 3.66,0.12 1.38,0.4 3.13,-0.11 3.81,2.17 2.43,3.24 -2.95,0.83 -4.01,1.04 -0.05,-1.82 -4.79,-3.3 -3.23,-1.13 1.49,0.95 1.71,0.82 0.15,1.51 -1.1,2.37 1.53,3.48 2.9,1.87 3.12,-1.53 5.02,4.79 1.15,3.53 -2.62,-0.97 -1.48,2.05 -3.89,2.7 -0.43,2.18 2.56,-0.04 2.88,-0.79 2.47,-0.74 2.4,2.46 3.26,3.28 -2.41,2.08 2.06,1.61 0.72,3.86 0.87,0.94 2.37,2.01 0.05,2.28 -2.05,0.35 -0.86,2.02 0.59,1.45 -1.67,-0.11 -1.69,1.85 -1.36,2.27 -1.73,0.52 -2.08,4.37 -0.55,3.78 -0.25,-2.23 4.33,-2.23 2.08,-0.24 -2.82,-0.46 -0.7,2.99 -3.43,2.2 2.08,0.81 0.22,1 -1.03,1.19 -1.32,0.16 3.49,1.1 1.39,1.26 -1.9,0.07 -0.29,1.99 -2.31,1.42 1.18,0.54 1.34,1.84 1.35,2.8 -2.18,2.04 -4.44,-0.74 -2.18,-2.64 1.63,-0.69 0.76,-4.19 -0.17,-2.1 -0.64,2.71 -4.66,4.66 -4.98,0.68 -0.13,-3.43 1.98,-6.57 2.12,-10.01 -0.26,-1.47 -2.38,-1.12 -1.92,-3.26 0.2,-2.67 -2.43,-4.09 -3.97,-4.66 0.54,-2.82 0.04,-5.39 -1.15,-7.72 0.49,-2.96 -3.2,-2.36 -2.3,0.29 0.39,1.99 2.16,3.98 1.82,5.79 -0.98,-1.18 -4.72,-2.37 -4.53,0.09 1.53,0.74 4.96,0.32 3.23,3.09 -0.36,0.92 2.65,-0.97 2.92,1.14 1.39,1.16 4.2,3.13 1.09,4.33 -2.3,0.81 -7.78,0.76 -7.23,-2.79 1.56,-1.72 -2.19,-2.27 -1.32,0.16 -1.72,-2.55 -3.53,-0.09 -1.9,1.66 -2.13,2.01 -4.41,0.62 -6.81,0.57 -2.19,2.71 4.76,1.16 2.08,3.05 0.58,1.9 4.08,1.91 5.81,2.83 1.96,1.43 -0.47,2.15 -1.35,0.46 -1.82,-1.08 -3.45,2.21 -4.74,-0.62 -0.64,-2.28 -4.68,1.1 -2.47,0.81 1.98,0.42 2.27,5.38 5.07,2.98 1.84,-3.35 3.57,2.14 6.26,0.44 1.29,-0.17 2.13,-0.02 0.67,0.65 1.09,1.24 2.33,0.17 2.6,1.96 1.19,2.8 4.25,5.41 6.32,6.4 -0.65,1.36 -3.26,-1.74 -3.14,1.07 -0.24,-1.71 -1.8,-0.78 -1.41,0.45 -1.2,-0.78 -1.84,-2.07 -1.82,0.08 -0.39,2.77 -2.92,-1.74 -2.76,-0.46 0.55,1.51 -0.55,2.28 -0.85,0.45 -2.38,-1.66 -2.14,3.66 -3.7,0.79 -1.88,-0.98 -0.85,3.28 -2.38,0.99 -2,-0.69 -1.48,2.95 -3.73,1.98 -1.43,0.57 -1.73,-1.87 -2.48,0.33 -1.28,0.15 -2.02,-1.77 -3.67,-0.49 -1.51,-0.59 -3.89,-0.69 -5.18,-1.79 -1.83,0.4 -3.94,-2.71 -4.99,0.05 -1.52,0.2 0.6,-5.44 -2.51,-2.84 -0.5,1.46 -2.44,2.79 -1.46,0.41 -0.04,-2.08 -3.47,-2.35 -1.81,-0.01 -0.33,2.95 -2.47,-1.46 -3.31,-2.22 2.66,-0.66 -1.9,-3.4 0.58,-4.85 0.98,-1.25 -0.43,-3.9 -1.29,-1.57 -2.2,1.2 0.59,4.8 -2.3,3.1 0.07,1.58 0.73,2.33 -0.49,2.37 -0.31,3.19 -2.4,-0.77 -3.7,1.08 -1.26,-0.57 -3.86,-0.58 -3.24,0.73 -1.86,1.54 -5.17,-0.4 -5.06,3.18 -2.02,-0.95 -3.43,1.13 -4.24,1.49 -0.67,-0.74 -1.24,2.48 -2,1.23 2.12,-2.45 -2.15,-1.8 -1.8,0.58 -2.16,1.39 -3.92,0.18 -2.08,-1.7 -1.67,0.05 -3.09,2.47 -2.5,-0.4 -0.88,-2.96 -1.92,-0.22 -2,1.13 -1.96,-0.26 -4.27,2.16 -3.76,-0.97 -0.78,-1.12 -2.93,1.49 -3.4,-0.02 1.83,-0.91 0.7,-3.4 -0.63,-1.07 -0.78,1.04 -1.78,1.59 -1.04,-0.05 -2.35,-3.54 3.85,-1.66 4.59,-3.73 -0.17,-1.96 -2.75,-5.32 -4.26,-2.64 1.79,0.66 -1.44,2.8 -2.07,2.43 -1.51,-3.02 -4.63,-0.57 -2.13,1.56 0.17,1.83 -2.38,1.81 -1.85,-0.14 -1.36,-2.38 -2.64,3.42 -2.69,-0.09 0.92,-1.47 0.05,-4.47 -1.39,-1.81 0.69,-2.4 -1.59,-1.67 -2.42,-0.69 -1.63,-2.6 -2.81,-0.08 -1.32,1.39 -0.12,2.09 -5.82,3.27 -3.43,0.33 -0.7,-1.39 -2.14,-1.09 -2.9,-2.54 -1.31,0.12 -1.87,1.12 -2.63,1.96 -0.18,2.43 -0.75,4.74 -2.05,6.98 -0.56,-1.99 -3.06,-1.81 -4.45,-3.2 -2.37,1.32 0.55,4.85 0.85,5.51 -2.93,-1.09 -0.49,5.23 -3.18,2.66C53.03,69.44 53.8,64.37 51.35,66.72c-0.01,1.25 1.67,5.14 1.03,4.67 -0.53,-2.51 -2.88,0.37 -2.61,-2.21 -1.56,-2.63 -4.32,1.46 -2.75,2.77 0.01,1.17 -1.56,2.39 -0.5,0.42 0.86,-3.51 -4.59,-2.97 -3.27,0.28 1.49,1.65 -0.07,2.95 -1.09,0.84 -1.55,-1.63 -4.28,0.31 -4.69,-2.84 -1.38,-1.87 -1.94,1.56 -0.77,2.26 -0.06,1.31 -0.47,2.49 -0.74,0.56 -1.54,-2.22 -1.58,2.78 -0.86,3.53 1.64,2.36 -5.86,1.67 -2.64,3.82 2.3,1.03 -2.22,1.12 -2.82,0.61 -1.74,0.43 1.87,2.58 -0.75,1.83C27.52,82.87 27.84,78.97 25.72,81.05c-0.33,1.79 3.97,2.08 0.81,3.67C24.18,85.6 27.77,81.48 24.7,81.96c-1.65,-0.58 -3.25,0.94 -2.07,2.52 -0.13,-1.56 -3.34,-2.97 -2.3,-0.65 0.92,1 3.65,4.19 0.68,3.11 -0.39,-1.36 -2.18,-3.54 -2.55,-1.53 -2.1,0.36 1.98,3.44 0.79,3.95 -0.52,-1.87 -2.86,-1.68 -1.64,0.35 -0.16,0.51 -2.67,-2.78 -2.9,-4.29 -1.64,-2.64 -1.84,0.81 -1.4,1.86 -0.78,1.52 2.24,0.79 1.57,2.42 -1.75,-0.73 -3.2,1.28 -0.75,1.28 -0.16,0.78 0.34,2.28 -0.65,2.59z M34.12,18.3c-1.05,0.6 -2.47,3.81 -0.57,3.47 1.95,-0.22 4.06,-4.82 0.57,-3.47z m-22.97,56.17c-2.31,-0.35 -0.79,-1.58 0,0z M2.14,66.59c-1.38,-1.11 -0.95,-1.35 0.46,-0.36 -0.18,-0.08 -0.27,0.6 -0.46,0.36z m168.23,-6.32c-0.28,-1.85 2.85,0.02 0.03,0l-0.03,0z M7.85,51.96c-0.57,-0.92 1.55,0.27 0,0z m1.18,-1.63C7.41,50.26 7.17,48.77 8.95,49.87 10,50.07 10.77,49.96 9.03,50.33z M184.09,37.53c-0.77,-1.48 -1.43,-4.23 -2.73,-6.24 -2.01,-2.67 1.21,-6.02 3.05,-2.64 0.95,1.04 0.93,3.38 1.44,4.42 -4.98,-0.16 0.39,3.51 -1.76,4.46z M23.01,25.35c-1.12,-0.81 -0.79,-3.25 0.17,-0.92 0.17,0.37 -0.49,0.58 -0.17,0.92z M209.99,8.88c0.65,-1.41 0.2,-3.29 -1.61,-3.21 -0.07,-1.5 -1.95,-5.46 0.62,-4.89 1.44,0 2.88,0 4.31,0 1.06,2.38 -1.6,4.58 -1.58,7.24 -0.32,0.7 -1.06,0.8 -1.74,0.86z M44.32,3.05c-1.74,-0.98 -6.31,0.12 -6.14,-2.09 1.47,1.81 3.05,0.95 2.25,-0.17 2.2,-0.52 2.82,0.46 3.89,2.27z","name":"Greenland"},"is":{"path":"m151.61,141.44c-2.42,-0.05 -4.73,-1.12 -5.95,-3.36 -0.71,-2.06 -4.34,-1.68 -3.81,-4.38 0.8,-0.95 3.4,-0.95 1.03,-1.6 -1.69,0.92 -0.37,-1.61 -2.18,-0.86 -0.88,-0.03 -1.32,-2.12 -2.96,-2.05 -1.43,-1.13 -6,-1.27 -4.53,-3.48 1.4,1.45 5.16,1.15 5.29,-1.63 0.95,-0.08 4.39,1.14 2.46,-0.91 -1.28,-0.31 -3.16,-1.27 -0.58,-1.35 2.41,0.51 2.39,-2.69 -0.02,-1.57 -1.25,0.39 -2.36,1.06 -1.66,-0.43 -0.34,-1.62 1.57,-4.11 -1.54,-3.94 -1.49,-1.7 -3.83,-2.36 -5.98,-2.91 1.9,-1.43 2.13,2 4.45,0.36 0.58,-0.11 0.84,1.82 1.93,0.36 1.45,0.02 2.12,1.75 4.12,1.85 1.57,1.88 4.72,-0.08 2.56,-1.73 -1.13,0.23 -4.71,-0.08 -2.41,-1.51 1.13,0.1 5.66,-0.35 3.94,-1.58 -2.53,-0.05 -1.4,-0.83 -0.29,-1.63 0.84,-2.83 -2.64,-1.96 -3.34,-1.81 -1.47,-0.72 -2,-0.85 -1.64,-2.44 2.52,0.42 0.64,-2.75 -0.27,-3.56 -0.04,-0.34 1.76,2 1.91,-0.11 -0.65,-3.43 1.88,0.34 1.11,2 -0.95,4.21 5.86,2.44 3.19,-0.73 -1.94,-1.31 0.11,-2.67 -1.13,-4.2 1.13,0.42 1.67,1.6 2.04,1.18 1.98,0.31 -0.01,2.5 1.33,3.37 0.86,1.89 -0.77,4.19 1.64,5.57 -1.28,0.64 -3.87,-0.52 -2.63,1.99 -0.4,1.18 -1.92,2.25 -0.42,2.93 -1.31,1.46 -1.09,4.59 1.22,2.7 0.49,-1.4 2.89,-6.12 2.22,-2.37 2.69,2.22 4.53,-3.04 4.48,-5.25 2.58,0.03 -0.68,6.63 3.51,5.53 -0.01,-0.74 0.05,-5.1 1.81,-2.72 1.08,-2.01 3.5,-0.36 1.83,1.62 2.1,1.36 -0.53,3.45 0.95,5.46 2.69,-0.06 0.02,-7.39 2.92,-6.07 -0.32,2.52 1.49,4.92 3.27,1.85 1.68,-2.37 1.62,3.33 3.69,1.28 1.71,-0.8 1.1,-6.38 3.47,-3.02 -0.81,1.5 1.32,1.54 -0.24,3.29 -0.5,2.17 2.82,1.16 2.36,3.29 2.02,0.52 2.1,1.62 0.19,2.57 -2.6,1.53 3.45,1.86 0.49,3.25 -0.74,0.55 -3.68,1.15 -1.27,1.34 1.72,-0.23 4.34,-1.28 4.35,1.54 -0.04,2.17 -4.93,1.21 -2.47,3.09 1.83,0.33 2.75,2.38 0.41,2.2 -1.18,-0.56 -1.74,-0.63 -0.71,0.56 -0.6,-0.3 -3.92,0.12 -2.06,0.55 2.71,0.87 -0.55,1.36 -1.7,1.52 -1.06,0.04 -2.49,1.02 -2.87,2.69 -1.35,-0.83 -1.72,1.98 -2.29,-0.35 -0.72,-2.57 -2.1,-0.68 -2.71,0.31 -2.09,-0.1 -4.17,0.18 -5.78,1.63 -1.89,0.57 -3.52,-3.04 -3.52,0.21 -2.4,-1.75 -5.62,-1.53 -6.88,1.4l-0.35,0.08 0,0z m24.31,-7.94c-1.58,1.64 1.17,1.65 0.84,-0.23 -0.28,0.08 -0.56,0.15 -0.84,0.23z M147.49,99.76c-2.33,0.02 -1.42,1.38 0.2,1.79 0.14,-0.38 0.69,-1.97 -0.2,-1.79z m33.62,15.99c1.19,-0.59 1.6,-0.17 0,0z m-44.05,-9.09c-1.62,-0.01 -0.68,-1.6 0.37,-0.74 1.34,-0.47 -0.84,-4.6 0.49,-2.48 -0.6,1.82 2.54,3.42 -0.86,3.22z m-1.42,-1.5c-1.66,0.2 -1.5,-3.06 -0.29,-0.86 -0.05,0.3 1.22,0.95 0.29,0.86z m4.48,-1.49c-0.86,-0.96 -0.83,-1.57 0,0z","name":"Iceland"},"pt":{"path":"m126.31,476.79c-3.11,-0.89 -5.74,-4.21 -9.28,-3.12 -1.78,0.38 1.76,-2.58 1.47,-3.95 0.39,-1.92 1.56,-3.11 1.18,-4.56 -0.46,-1.65 0.47,-3.6 1.4,-5.27 -0.61,-1.65 3.07,-0.14 2.33,-1.74 -1.59,-1.17 -2.48,-2.71 -4.71,-1.61 -1.89,-0.04 -2.12,-3.1 -2.67,-4.46 0.27,-2.21 3.57,-4.27 2.21,-6.5 2.42,0.37 3.47,-2.17 4.77,-3.81 0.98,-1.71 1.87,-3.43 3.16,-4.47 -0.79,-1.76 1.02,-5.31 3.28,-5.87 1.59,-1.26 -0.95,-2.63 0.8,-4.09 0.23,-2.53 -1.05,-5.19 -0.11,-7.75 2.54,0.06 0.15,-1.87 0.17,-2.24 1.59,-1.44 4.74,-3.3 6.49,-1.31 -3.35,1.53 -0.16,3.98 2.09,3.19 1.85,-0.17 3.87,2.53 6.45,0.97 1.56,-0.13 6.26,-0.07 4.22,3.05 0.22,1.77 4.81,2.08 1.88,3.98 -2.66,0.33 -4.02,2.88 -6.33,3.35 -0.97,1.66 1.09,4.53 -0.81,6.49 -1.07,1.01 0.55,2.39 -1.62,2.77 -2.6,1.54 1.62,6.06 -2.82,6.49 -1.74,-0.37 -5.6,-2.08 -3.57,1.31 1.07,1.89 -0.41,4.57 2.03,6.2 1.92,2.91 -3.81,2.81 -3.68,5.95 -1.09,1.6 0.5,5.45 2.67,5.41 -1.19,1.2 -4.31,1 -5,3.34 -3.07,2.07 -0.28,7.22 -4.25,7.62 -0.55,0.29 -1.11,0.63 -1.75,0.65z","name":"Portugal"},"ma":{"path":"m114.26,519.26c5.38,-1.06 11.75,-0.39 15.9,-4.63 5.26,-4.88 8.22,-11.54 11.83,-17.6 2.3,-1.64 3.11,0.89 3.7,2.43 3.25,0.06 3.27,5.03 6.51,6.18 2.01,2.4 5.02,1.6 7.69,1.35 1.26,1.84 3.78,-0.68 5.41,1.5 1.48,1.09 4.97,-1.46 5.09,1.72 1.76,1.07 3.75,0.97 5.94,1.12 1.21,2.49 5.27,4 3.5,6.77 1.55,1.82 -0.97,1 -2.11,1.18 -21.15,0 -42.31,0 -63.46,0z","name":"Morocco"},"es":{"path":"m170.08,507.95c-0.69,-0.45 0.64,-1.19 0,0z m-23.1,-9.15c-1.89,-0.27 -1.23,-3.36 0.81,-2.76 -1.01,0.61 -0.28,2.16 -0.81,2.76z m-1.53,-5.41c-1.92,-1.84 -4.81,-3.55 -4.78,-6.5 1.74,-1.65 -3.05,-2.72 0.06,-3.62 1.8,0.08 1.95,-2.62 0.29,-1.71 -1.68,1.92 -1.49,-3.2 -3.57,-3.37 -1.21,-2.54 -5.06,-1.7 -6.26,-3.7 0.08,-2.72 1.22,-5.37 3.58,-6.95 1.91,0.46 5.66,-3.3 1.98,-3.27 -1.9,-2.17 -1.67,-5.74 1.14,-6.99 3.7,-0.95 1.1,-4.57 -0.28,-6.35 0.58,-1.68 0.45,-3.01 -0.84,-4.53 2.46,2.34 7.45,0.07 6.4,-3.43 -2.26,-2.56 3.15,-2.71 1.97,-5.34 1.81,-1.67 0.28,-5.41 1.17,-6.21 1.77,-2.14 4.99,-2.46 6.88,-4.55 1.92,-2.79 -4.07,-2.45 -2.2,-4.91 0.43,-3.16 -4.07,-2.3 -5.69,-3.2 -1.8,2.37 -3.89,-1.02 -6.23,-0.51 -0.28,-1.34 -3.49,1.05 -2.42,-0.88 2.82,-1.19 -0.75,-4.5 -2.73,-2.96 -2.11,1.45 -3.86,-0.78 -1.34,-1.64 0.94,0.28 2.32,-1.98 0.72,-1.58 2.23,-1.63 -2.16,-0.92 -0.24,-2.66 2.41,-1.99 0.28,-4.66 -2.06,-3.75 -2.26,-1.66 -0.12,-3.23 1.07,-4.13 3.66,0.29 6.76,-2.08 9.92,-3.51 1.78,-2.19 1.34,2.22 3.29,-0.21 3.33,-0.27 2.62,6.64 6.6,4.09 2.47,1.16 5.51,0.94 8.02,1.44 1.9,-1.24 3.14,2.45 5.32,2.3 2.35,0.57 4.3,2.34 6.75,2.93 2.65,1.41 5.29,-0 7.84,-0 2.13,0.65 4.69,5.39 6.5,1.98 2.5,1.32 5.04,3.91 8.46,3.08 1.39,-0.01 3.8,0.79 4.14,1.8 -1.87,1.22 0.06,2.67 1.22,2.4 1.66,1.57 5.29,1.19 5.34,4 1.46,0.54 4.43,-0.57 4.33,1.92 1.41,-0.29 3.73,0.98 4.54,0.5 1.54,0.01 3.53,0.67 3.72,-1.35 1.63,1.02 3.94,2.12 5.05,3.3 -0.62,2.48 1.62,2.94 3.4,2.37 1.23,1.43 2.74,2.23 4.47,1.42 1.62,0.92 3.85,2.1 4.94,-0.04 1.38,-0.43 5.47,1.31 2.5,2.25 -0.52,2.49 0.35,5.62 -3.02,6.24 -3.95,0.65 -6.55,3.99 -10.24,4.85 -4,0.26 -8.86,0.24 -11.41,3.91 0.64,1.13 2.06,1.75 -0.08,1.82 -2.98,1.35 -3.8,5 -6.55,6.72 -2.04,2.09 -4.6,4.27 -5.09,7.29 -0.14,3.13 0.72,6.8 3.86,8.19 -0.28,2.13 -4.94,1.61 -6.14,3.93 -1.51,0.81 -1.84,2.35 -3.08,3.65 0.22,1.68 -4.27,3.01 -1.46,5.03 -0.94,1.1 -4.96,-1.49 -6.88,0.41 -2.79,1.13 -4.55,3.71 -5.69,6.37 -2.11,3.74 -4.63,-2.34 -7.31,0.69 -2.28,0.2 -4.7,-1.72 -7.4,-1.1 -2.51,-0.92 -5.12,-1.75 -7.89,-1.82 -2.99,0.03 -4.54,3.25 -7.74,1.83 -3.45,-0.48 -3.73,3.46 -6.83,4.06z M229.67,469.73c-3.03,-0.94 2.34,-1.17 0,0z m-3.28,-1.86c-1.31,-1.98 3.63,-2.8 0.96,-0.55 -0.28,0.23 -0.58,0.51 -0.96,0.55z m8.15,-0.95c-0.99,-1.19 -3.24,-1.21 -2.69,-3.07 -1.57,-0.61 -4.43,-0.57 -1.44,-1.83 1.82,-0.69 5.61,-3.6 5.15,-0.13 1.01,1.13 4.03,0.64 1.76,2.77 -0.83,0.87 -1.8,1.58 -2.78,2.26z m11.67,-5.53c-0.43,-1.32 -5.6,-1.9 -2.47,-2.15 1.42,0.04 2.4,0.66 2.47,2.15z","name":"Spain"},"tn":{"path":"m284.9,519.26c-2.21,-1.12 0.73,-3.64 -0.95,-5.51 -1.46,-3.16 2.15,-6.93 -0.12,-9.45 -0.67,-0.73 2.93,-1.29 1.98,-2.95 2.23,-0.03 1.46,-2.58 3.74,-2.85 2.52,-1.83 5.41,-3.02 8.35,-3.78 1.3,0.18 -1.34,3.29 1.51,2.64 0.71,-1.15 1.1,-2.15 2.08,-1.26 -0.76,0.27 1.03,1.6 0.03,2.09 1.72,0.55 2.13,5.46 4.03,3.7 1.46,-0.73 4.4,-5.15 5.37,-2.71 -0.9,2.37 -2.28,5.07 -4.51,6.35 -3.22,1.82 -2.27,6.37 0.87,7.67 1.26,0.82 1.66,2.08 3.04,2.36 -0.15,1.99 1.01,4.41 -1.79,3.68 -7.88,0 -15.77,-0.01 -23.63,0.01z","name":"Tunisia"},"dz":{"path":"m181.84,519.26c-2.16,-1 0.09,-2.29 0.05,-3.03 -0.8,-1.48 -5.28,-4.37 -1.47,-3.7 2.83,-0.51 5.98,-1.33 7.84,-3.67 1.17,-2.46 3.66,-2.95 5.89,-2.07 1.44,-0.79 2.77,-2.77 3.38,-0.29 3.67,1.9 4.38,-3.05 7.15,-3.91 3.27,-1.17 6.41,-3.1 10.01,-2.8 3.04,0.05 6.13,0.57 9.13,-0.19 2.74,1.56 5.53,-0.24 7.63,-1.26 2.46,0.75 5.2,0.79 7.75,-0.34 2.83,-0.67 5.62,0.67 8.61,0.23 3.35,0.17 5.17,6.05 8.94,3.1 1.43,-2.77 7.09,0.3 7.33,-3.88 2.03,-1.62 1.87,1.59 2.96,1.23 1.79,0.05 6.14,2.99 6.01,-0.61 2.5,-2 5.17,3.33 8.12,2.16 1.57,-1.13 4.46,-0.6 5.35,-0.15 -1.62,-0.02 -2.54,1.2 -1.93,2.18 -1.87,0.63 -3.58,2.5 -1.04,3.3 0.38,2.87 -2.09,5.94 -0.27,8.63 -0.06,1.4 0.31,4.98 -0.86,5.05 -33.52,0 -67.05,0 -100.57,0z","name":"Algeria"},"be":{"path":"m265.32,343.64c-0.99,-1.16 -1.81,-2.49 -3.73,-3.37 -2.08,-0.35 -0.28,-1.85 -1.25,-2.79 1.47,-1.88 -0.53,-2.73 -1.47,-0.87 -1.28,2.32 -4.46,0.99 -3.2,-0.74 -0.78,-0.74 1.11,-3.63 -1.62,-3.19 -2.17,0.83 -2.23,-1.41 -2.67,-2.1 -3.94,1.05 -1.51,-5.53 -5.39,-3.71 -2.36,1.07 -3.02,-4.27 -0.45,-4.53 1.73,-0.62 4.14,-3.17 4.52,-0.63 2.42,-0.22 3.66,2.56 5.83,0.13 1.3,-0.02 1.88,1.91 1.96,-0.36 0.89,-2.95 2.67,0.31 4.45,-0.43 0.58,-0.7 1.45,3.34 3.54,2.07 2.55,0.01 1.99,1.94 1.4,3.06 -1.22,1.97 -0.15,4.06 2.13,3.5 1.5,1.19 1.36,3.16 2.63,4.39 -1.48,2.22 -4.2,1.28 -5.1,4.2 -1.39,2.28 2.74,5.98 -1.59,5.37z","name":"Belgium"},"it":{"path":"m350.4,500.36c-1.75,-1.38 -4.77,0.56 -6.21,-2.11 -0.98,-3.12 -4.25,-2.35 -6.74,-3.12 -2.11,-1.47 -4.61,-1.93 -6.58,-3.76 -2.2,-1.23 -6.25,0.31 -6.1,-3.66 0.15,-1.98 2.31,-4.17 3.5,-1.8 2.52,0.49 3.53,-4.85 5.24,-0.9 2.01,0.26 4.02,2.27 5.97,0.45 2.63,-0.1 5.81,0.01 7.46,-2.47 1.45,0.01 4.12,1.89 4.36,-0.76 1.1,1.6 3.69,-2.6 2.02,0.26 -1.4,3.25 -4.08,7.31 -3.12,10.66 1.21,0.69 0.93,2.35 2.17,3.37 -1.93,0.14 -1.88,2.41 -1.97,3.84z m7.22,-15.37c-2.78,-0.14 -2.87,-3.99 -0.28,-4.55 1.37,-2.08 -1.36,-4.79 2.17,-5.13 3.25,-2.22 -1.35,-4.63 -1.21,-7.46 -1.16,-2.63 -2.56,-4.66 -3.09,-7.45 -1.59,-2.98 -4.91,-0.29 -6.78,-2.73 -1.65,-0.84 -0.12,-5.17 -3.33,-5.63 -1.56,-0.37 -4.03,2.8 -2.57,0.22 0.06,-2.91 -3.33,-1.3 -4.25,-2.37 -0.69,-2.23 -3.26,-6.17 -5.36,-4.2 -1.73,-2.18 -4.5,1.85 -5.25,-1.44 -2.69,-0.65 -4.1,-2.62 -6.18,-4.28 -0.73,-3.32 -5.19,-3.11 -5.74,-6.57 -1.05,-1.9 -5.27,-0.02 -4.05,-2.26 -1.1,-2.38 -3.86,-3.39 -4.73,-5.46 -3.13,0.51 0.07,-2.73 -1.71,-4.47 -2.14,-2.56 -1.2,-6.42 -3.6,-8.63 -2.19,-1.12 -4.5,-0.88 -6.03,-3.28 -2.22,-0.9 -4.82,-2.51 -7.33,-1.86 -1.74,1.89 -3.46,3.3 -4.61,5.48 -1.55,2.14 -5.91,2.59 -3.27,-0.76 1.07,-4.25 -4.16,-0.46 -5.52,-3.08 -2.08,-1.9 -1.08,-4.02 0.62,-5.53 0.76,-2.12 -4.77,-3.84 -2.88,-4.68 2.55,0.23 5.53,-3.6 2.83,-5.28 -0.93,-1.94 -2.92,-4.5 0.7,-3.9 2.4,0.04 4.29,-1.2 6.65,-0.24 1.85,-1.05 2.45,-2.98 2.51,-4.87 1.03,-0.35 2.29,-2.18 1.57,0.13 -0.67,2.56 4.99,2.17 2.47,4.45 0.19,0.08 2.08,0.32 2.23,1.7 1.41,1.01 2.54,-1.65 0.98,-2.25 0.53,-2.02 3.41,-3.57 2.37,-5.9 0.68,2.09 2.82,3.69 4.41,1.42 0.81,0.91 2.52,3.75 3.07,0.97 -0.97,-1.55 1.29,-1.81 -0.84,-2.7 -0.29,-2.99 3.05,2.3 3.43,-1.02 -1.77,-2.29 0.88,-4.07 2.84,-1.92 2.41,1.34 1.9,-4.15 4.64,-2.65 2.33,0.51 5.21,-2.28 6.13,0.74 1.38,2.34 4.22,3.29 6.93,3.47 1.41,0.44 5.26,-0.07 4.99,0.93 -2.13,0.92 -2.35,3.92 0.43,3.72 -1.26,1.22 -1.47,2.53 -0.57,3.56 0.79,3.16 -4.05,-1.16 -3.93,2.42 -2.22,1.73 -5.54,2.13 -7.33,4.03 -0.52,1.97 1.06,2.99 1.39,4.46 3.61,0.71 -1.06,2.87 -0.87,4.28 0.35,2.85 0.62,6.32 3.48,7.85 2.75,2.1 5.47,4.43 8.75,5.58 2.03,1.86 2.11,4.88 3.12,7.29 0.93,3.7 3.47,6.75 6.72,8.67 2.2,2.52 5.18,4.19 8.71,3.54 1.79,0.5 5.88,-2.59 5.92,0.29 -0.8,1.53 -3.65,2.89 -1.29,4.86 4.13,2.94 10.13,1.81 13.75,5.65 1.89,1.55 5.85,0.5 6.34,3.52 1.71,1.18 6.04,2.73 4.13,5.37 0.4,1.63 -0.95,3.55 -2.34,1.36 -0.96,-2.97 -3.23,-5.68 -6.54,-4.48 -2.32,-1.32 -6.05,-2.69 -6.78,1.09 -1.28,2.2 -1.32,4.97 -2.42,7.17 0.64,2.84 4.59,1.65 5.83,3.73 1.59,0.26 0.35,2.98 1.81,3.8 -0.21,3.1 -5.83,1.6 -5.88,5 0.28,1.92 0.81,4.68 -1.72,5.06 -1.23,1.65 -1.39,4.64 -3.63,5.25z m-35.56,-71.98c1.98,1.43 0.5,-2.39 0,0z m-33.54,62.41c-0.72,-1.6 -3.1,-3.35 -3.37,-5.68 1.54,-2 1.07,-4.81 2.16,-7.03 -3.26,0.28 0.82,-2.8 -0.89,-4.55 -0.02,-1.96 -1.35,-4.24 -2.94,-4.22 0.19,-1.55 0.4,-3.39 2.06,-1.78 3.1,0.15 5.25,-2.55 7.52,-4.29 0.91,-0.84 5.63,1.48 2.53,2.55 -0.36,1.47 2.3,1.33 1.41,2.66 3.07,1.36 0.3,4.08 -0.53,6.16 1.23,2.67 0.22,5.65 0.3,8.76 -0.33,1.29 -0.37,5.73 -2.35,3.37 -1.49,-1.18 -4.61,-1.6 -3.46,1.11 -0.38,1.17 -0.94,2.88 -2.43,2.94z","name":"Italy"},"by":{"path":"m402.72,308.87c0.99,-3.18 0.27,-7 -3.79,-7.04 -0.71,-2.3 3.14,-4.07 4.34,-6.18 -0.26,-5.15 -3.83,-9.19 -5.74,-13.77 2.18,-0.83 4.01,-0.87 5.95,-0.9 0.86,-1.84 2.51,-1.83 3.98,-0.84 -1.05,-1.12 -2.37,-3.07 0.28,-3.17 1.9,0.02 -0.71,-2.58 2.17,-2.24 -1.28,2.76 4.76,1.14 2.24,-1.38 -2.85,-0.47 0.33,-3.89 -1.4,-5.76 0.96,-1.56 2.7,-3.08 2.72,-4.65 2.53,0.76 4.43,-4.49 0.94,-3.47 -1.1,-1.17 0.25,-4.78 1.91,-6.11 2.45,0.48 4.37,-0.43 4.51,-3.22 0.17,-2.25 2.08,-1.78 3.18,-1.85 2.02,-2.32 2.15,2.85 3.69,0.14 1.75,-1.51 3.73,-0.83 3.53,1.45 2.17,2.99 3.24,-2.73 5.87,-2.54 1.93,0.2 3.24,2.17 5.04,1.95 0.25,2.02 -0.47,3.85 1.8,5.15 0.82,1.65 -1.87,4.51 1.47,4.95 2.1,-0.08 0.99,1.32 1.56,1.96 1.72,2.18 3.98,3.94 6.71,3.73 0,1.84 0.71,4.69 2.92,2.85 2.09,-1.22 3.09,0.78 3.28,1.76 2.02,-0.38 3.13,1.46 1.26,2.31 -0.06,3.07 -3.04,4.09 -5.35,2.65 -3.54,0.27 -2.85,5.57 0.51,5.52 0.97,2.55 1.33,5.72 3.91,7.42 -2.66,1.35 -6.88,2 -6.85,5.76 -1.23,2.53 1.43,5.57 1.33,7.2 -1.16,-1.33 -5.51,-3.73 -5.13,-0.77 -2.24,-2.52 -3.75,4.16 -4.59,0.03 -1.77,-2.65 -4.04,1.4 -4.28,1.56 -1.22,-2.58 -2.82,1.6 -3.58,-0.67 -1.01,0.66 -2.93,1.68 -4.34,1.01 -1.39,0.16 -1.96,2.41 -2.67,0.56 -2.3,-2.34 -5.69,0.72 -8.43,-0.73 -2.87,-0.21 -5.7,0.69 -8.51,0.87 -1.69,1.51 -4.3,1.17 -5.72,2.79 -0.82,1.63 -1.2,4.18 -3.37,2.88 -0.54,-0.03 -1.11,0.27 -1.34,0.78z","name":"Belarus"},"pl":{"path":"m378.8,342.69c0.85,-2.71 -2.77,-1.44 -3.2,-3.81 -2.16,-0.74 -2.68,4.74 -4.1,1.6 -1.34,-0.42 -0.38,-2.05 -2.3,-2.3 -1.38,-1.23 -0.72,-3.2 -2.99,-2.63 -1.39,-1.14 -3.17,-0.83 -4.08,-0.27 -2.65,-1 1.12,-2.8 -1.66,-3.95 -1.04,2.08 -3.71,0.51 -5.13,-0.34 -2.56,-1.21 -1.29,2 -1.13,2.64 -1.27,1.67 -2.44,1.3 -2.92,-0.65 -1.25,-0.75 -2.67,-1.29 -0.72,-2.16 1.16,-2.1 -2.17,-2.93 -3.11,-1.63 -1.5,-2.25 -5.49,-1.16 -6.45,-4 -1.21,-1.39 -2.59,1.06 -1.9,-1.41 0.23,-2.18 -0.48,-4.58 -2.34,-5.49 -1.37,-2.65 0.61,-5.37 -0.78,-8.1 -2.17,-1.37 0.53,-5.96 -3.41,-5.97 -3.09,-2.11 2.9,-5.25 0.3,-8.13 -0.64,-1.64 -2.11,-4.93 -1.01,-5.69 2.39,-0.86 4.49,-2.6 7.02,-3.34 1.88,-0.91 4.34,-1.13 5.97,-2.18 0.73,-2.97 3.72,-4.13 6.19,-5.25 2.44,-1.51 5.22,-3.64 8.26,-2.74 0.34,2.92 2.37,6.29 5.83,5.11 2.32,-0.46 3.66,-2.87 6.19,-1.88 5.94,0.22 12.06,0.04 17.77,-1.75 2.19,-1.89 4.37,-0.56 6.59,0.69 0.91,5.68 5.67,10 6.52,15.73 -0.74,2.77 -4.55,3.76 -4.71,6.89 0.95,2.08 5.51,0.97 4.43,4.48 -0.75,3.1 1.11,5.48 1.99,8.14 0.77,2 4.89,2.48 3.07,4.57 1.18,1.35 3.03,3.77 0.15,4.64 -2.63,0.49 -3.02,4.28 -4.54,6.17 -0.82,2.29 -3.04,4.17 -2.56,6.78 1.11,1.72 -0.12,4.53 2.39,4.91 -2.96,0.2 -5.66,-0.81 -7.88,-2.64 -2.12,-1.23 -4.34,-0.31 -6.37,0.12 -1.06,0.6 -0.02,2.66 -2.03,1.15 -2.7,-1.27 -4.67,0.77 -6.02,2.87 -0.44,-0.92 -1.49,0.48 -1.34,-0.18z","name":"Poland"},"jo":{"path":"m566.3,519.26c-0.01,-4.69 -2.26,-8.97 -3.12,-13.51 1.51,-3.32 4.45,-0.15 6.76,0.1 3.02,0.33 6.94,0.22 8.51,-2.87 4.44,-5.57 8.37,-11.53 12.83,-17.08 1.86,2.51 3.76,5 5.38,7.68 -2.06,2.03 2.19,4.71 3.12,1.72 0.91,2.72 -2.48,4.53 -4.03,6.38 -4,3.47 -8.47,6.39 -12.72,9.51 -2.44,0.61 -3.15,3.3 -0.46,3.9 2.58,1.36 5.17,2.72 7.71,4.17 -7.99,0 -15.99,-0 -23.98,0z","name":"Jordan"},"gr":{"path":"m449.88,508.26c-1.41,-0.44 -0.91,-2.43 -2.98,-2.05 -2.92,-1.02 -4.66,0.87 -7.49,-0.12 -2.89,2.86 -3.34,-3.03 -1.84,-3.28 2.13,1.48 4.85,0.78 6.99,2.27 2.66,-1.89 5.67,-2.41 8.68,-1.61 1.64,-0.07 3.7,-0.37 4.57,-0.83 -1.03,2.5 2.95,2.63 3.64,0.39 1.59,-1.01 2.86,-0.15 1.23,1.36 -4.14,0.67 -8.27,1.86 -12.04,3.72l-0.39,0.1 -0.37,0.03 0,0z m-26.29,-13.55c-0.61,-2.64 -1.46,-5.84 -4.37,-6.76 -3.02,-0.62 -1.68,2.8 -1.92,4.11 -2.48,0.25 -0.03,-2.58 -2.33,-3.13 -1.56,-1.69 2.11,-3.33 -0.42,-5.29 -1.75,-1.46 -3.48,-2.23 -4.88,-3.8 -1.71,-0.32 1.67,-2.18 0.95,-3.89 1.31,0.41 3.43,-0.58 4.2,-2.4 2.31,-0.03 5.27,1.8 8.03,2.01 1.1,0.72 3.08,0.98 3.24,1.46 1.77,0.36 1.5,3.47 4.29,3.78 1.97,0.86 -3.33,1.22 -3.75,-0.39 -3.29,-1.87 -3.6,3.04 -0.88,3.97 1.42,2.4 3.54,4.49 2.98,7.25 0.93,1.21 1.93,2.16 0.11,0.68 -1.13,-1.37 -3.59,-4.36 -5,-1.33 -0.38,1.2 -0.28,2.48 -0.25,3.72z m12.62,-17.67c-0.61,-1.76 -3.37,-2.18 -4.61,-3.83 -1.54,-1.35 -1.12,2.07 -3.22,1.63 -1.32,1.11 -3.33,0.37 -1.06,-0.31 2.53,-1.38 -0.23,-3.22 -1.98,-2.17 -2.19,0.64 -2.76,-3.59 -4.29,-0.5 0.28,-1.81 -1.78,-2.98 -1.95,-0.63 -1.85,0.67 -5.66,-0.17 -7.42,2.31 -1.43,-1.51 -2.69,-1.73 -3.58,0.32 -0.06,-3.13 -3.02,-4.71 -4.64,-5.97 -0.05,-3.03 -3.45,-4.15 -5.3,-5.69 0.58,-2.13 -4.66,-2.22 -1.22,-2.7 1.45,0.13 1.31,-1.81 1.97,-2.79 -2.74,-2.59 4.57,-2.51 2.29,-5.81 0.57,-2.27 3.93,-4.04 1.77,-6.57 2.29,-1.19 5.68,-0.59 7.21,-3.12 0.92,-4.2 5.51,-0.91 7.7,-3.66 0.88,-0.81 0.03,-3.12 2.26,-2.13 2.68,-1.49 5.94,-1.98 8.75,-3.4 1.35,-1.69 4.25,-2.43 5.72,-0.71 1.88,0.93 3.48,-0.95 5.39,0.66 2.83,0.48 5.06,-1.99 7.75,-2.56 2.63,-1.48 -0.92,-3.81 -0.19,-4.93 2.53,-0.82 6.54,2.78 3.07,4.45 -2.66,1.03 1.16,6.08 -1.92,6.2 -2.59,-1.16 -5.58,1.42 -8.08,-0.62 -2.31,-0.06 -3.98,4.61 -5.94,1.87 -2.75,-0.21 -2.93,5.39 -5.82,3.29 -2.56,0.13 -2.19,2.87 -0.61,3.88 1.51,1.31 -0.02,1.67 -0.46,3.12 -2.01,-0.91 -2.94,1.12 -4.72,-0.3 -3.05,1.25 -3.01,-2.2 -1.76,-3.97 -0.09,-0.54 -2.81,1.81 -3.44,2.49 -1.02,1.92 0.18,3.87 -0.21,6.03 1.55,1.98 3.8,3.4 4.84,5.84 0.92,0.8 4.25,2.4 3.42,2.64 -2.14,-2.19 -4.85,-0.02 -3.78,2.46 1.31,0.13 3.2,1.7 0.6,2.21 -1.13,0.04 -4.23,2.36 -2.68,2.49 2.62,-1.25 4.96,1.17 7.41,0.98 0.52,2.36 2.91,0.77 3.98,2.53 2.06,0.36 4.93,0.25 3.64,2.95 0.1,1.33 1.96,3.02 1.13,4.05z m-32.41,-12.35c-2.66,1.97 2.35,4.76 3.65,1.72 0.88,-3.08 -2.48,0.37 -3.25,-1.63l-0.4,-0.09 0,0z m1.2,12.17c-2.12,0.67 -3.94,-2.49 -2.24,-3.05 -0.52,2.11 1.79,2.11 2.24,3.05z m35.21,-4.75c-1.33,-0.45 -3.15,-2.25 -0.48,-1.45 1.91,-0.84 2.27,1.01 0.48,1.45z m-3.1,-3.76c-1.98,-1.68 -5.22,0.85 -5.86,-2.11 -1.43,-1.48 -5.05,-2.2 -5.77,-2.78 2.78,-2.67 4.14,2.1 7.15,1.68 1.66,0.78 3.06,-0.62 3.9,1.22 0.4,0.59 0.43,1.32 0.58,1.99z m-10.1,-17.81c-3.53,-1.73 2.32,0.07 0,0z m3.59,-1.57c-2.32,-1.62 -0.44,-1.62 0.45,0.12l-0.11,0.22 -0.34,-0.34z","name":"Greece"},"tm":{"path":"m679.06,344.59c-1.21,-0.72 -0.78,-2.05 -2.51,-2.48 -0.91,-2.53 -0.44,-5.74 -2.11,-7.9 1.43,2.3 3.65,0.44 4.81,-0.09 -0.04,3.47 0.02,6.95 -0.03,10.42l-0.16,0.04z m-9.11,-14.43c-1.83,0.29 -2,-1.85 -2.97,-2.07 -2.67,-0.77 0.57,-4.63 0.48,-6.52 1.65,-3.13 3.89,-6.16 6.88,-8.09 1.36,-0.18 5.09,-1.73 4.9,0.43 0,2.65 0,5.3 0,7.95 -2.35,-1.52 -3.83,-5.43 -6.79,-5.11 -2.41,2.22 -6.24,4.38 -5.17,8.26 -0.05,1.27 0.71,3.09 1.95,2.4 0.34,0.89 0.41,1.85 0.72,2.75z m9.29,-40.46c-2.98,-4.77 -6.29,-9.32 -9.41,-14 0.44,-3.11 3.69,-4.89 4.74,-7.82 1.56,-2.45 3.21,-4.85 4.68,-7.37 0,9.73 0,19.46 0,29.19z","name":"Turkmenistan"},"kz":{"path":"m665.18,326.25c-2.97,-1.86 -1.2,-5.67 -2.65,-8.21 0.53,-3.17 -3.51,-2.8 -4.88,-0.83 -1.79,-1.67 -2.48,2.95 -4.91,0.84 -1.43,-2.21 -3.22,-0.68 -4.76,0.52 -0.4,-3.09 -3.28,-5.18 -6.16,-5.75 -2.02,-1.36 -4.24,-5.19 -6.86,-2.37 -2.9,1.87 -4.15,-4.1 -0.51,-3.35 1.06,-1.32 1.8,-1.79 3.42,-0.84 1.53,-0.78 2.76,-2.24 4.06,-3.11 -1.44,-2.18 -5.78,0.43 -7.07,-2.22 0.12,-1.34 3.47,-2.2 0.83,-3.45 -1.26,-2.14 2.16,-2.43 1.45,-4.52 2.51,-0.62 4.01,-2.7 6.42,-3.67 1.55,-0.68 5.82,-1.56 4.27,-3.73 -2.44,0.42 -5.53,1.2 -4.64,-2.51 0.27,-3.12 -0.67,-6.7 -3.34,-8.56 -1.46,-0.11 0.78,-3.59 -1.86,-3.15 -1.5,-2.77 -4.84,0.02 -6.51,0.7 0.1,2.2 -0.93,4.69 -3.45,3.61 -2.4,0.56 -6.57,-0.38 -7.49,3.29 -0,2.58 -2.65,3.31 -2.68,6 -1.27,1.57 -1.07,5.37 -3.43,5.36 -2.12,-0.08 -2.2,2.62 -2.46,3.63 -1.26,0.74 -5.86,0.39 -4.64,-0.82 3.5,0.56 3.47,-4.4 0.06,-4.32 -3.14,-1.51 -5.73,-4.02 -8.93,-5.36 -2.47,-0.32 -4.25,2.11 -6.54,2.07 -0.12,1.28 0.37,2.59 -1.35,1.17 -1.8,-0.93 0.01,-2.79 -2.21,-3.3 0,-2.52 -4.2,-0.23 -5.74,-0.66 -0.96,-2.72 -0.8,-5.85 -0.41,-8.82 0.73,-3.23 -4.34,-1.07 -3.74,-4.61 -1.48,-2.21 -1.17,-5.16 0.32,-7.28 -2.58,-1.5 -1.53,-6.73 1.82,-4.04 2.29,0.54 4.78,3.98 7.13,1.98 1.97,-1.65 2.09,-5.06 -0.41,-5.79 -0.5,-2.08 -4.31,-2.93 -1.9,-4.7 0.1,-1.7 1.79,-4.1 2.05,-4.93 -2.7,-0.86 -1.25,-3.39 0.39,-3.59 0.3,-2.73 3.83,-4.97 2.24,-7.88 -1.16,-1.26 2.12,-0.49 0.87,-2.37 -0.73,-0.82 1.71,-0.82 1.99,-1.86 2.14,-0.45 -1.05,2.08 1.69,2.02 1.48,-0.55 1.41,-1.96 2.93,-1.7 0.29,-1.63 -1.06,-3.26 1.01,-4 0.5,-1.63 0.88,-2.2 1.87,-0.46 3.2,2.4 4.8,-3.1 7.46,-3.43 1.62,1.55 3.73,2.04 5.43,0.37 1.27,1.42 3.01,1.43 4.62,1.61 -0.26,2.56 4.05,4.44 3.68,0.87 -0.11,-2.04 -2.23,-3.06 -3.52,-3.49 2.49,-1.89 5.28,1.44 8.06,-0.13 2.65,1.71 2.89,-3.09 2.88,-4.82 -0.94,-1.46 1.32,-2.87 0.36,-4.29 1.64,0.4 1.75,-1.1 1.34,-1.85 1.08,-2.25 2.79,-1.39 4.44,-0.52 1,-0.8 1.78,-2.46 2.98,-2.01 -1.89,-1.21 -2.16,-3.64 0.61,-3.9 -0.26,-1.23 0.14,-1.29 1.28,-1.45 1.06,-0.94 2.07,2.58 4.01,1.26 1.98,1.74 4.96,-3.12 5.37,-1.36 0.29,1.89 3.37,-0.99 2.39,-2.55 -0.11,-1.94 -1.41,-4.21 1.46,-3.17 2.91,-0.36 4.26,-3.79 5.34,-6.17 1.47,-2.93 -2.47,-4.1 -2.09,-6.64 -1.36,-2.25 -4.48,-0.11 -5.91,0.2 -2.22,-2.09 -4.58,3.81 -4.91,0.16 -1.29,-0.68 -2.71,2.23 -3.65,0.73 1.29,-1.47 1.19,-4.25 2.39,-6.18 1.51,-3.13 -2.02,-3.28 -3.58,-4.22 -3.1,0.97 0.81,-3.99 -1.61,-4.03 1.01,-2.42 4.84,-2.6 5.47,-5.2 -0.01,-2.9 -4.66,-1.68 -5.74,0.02 -1.13,1.71 -4.5,-0.24 -1.75,-0.92 2.16,-2.49 -2.77,-3.66 -2.05,-1.2 -2.33,3.55 -0.85,-4.14 -3.83,-1.64 1.26,-0.48 -0.31,-3.76 1.92,-2.68 1.3,1.04 0.21,-2.26 2.14,-1.3 2.74,-0.21 -1.15,-2.68 1.49,-3.26 1.26,2.1 3.9,-0.29 1.53,-1.19 0.54,-2.35 2.7,-4.74 3.28,-7.51 1.48,-0.31 3.12,-1.58 1.37,-2.69 1.12,-2.77 3.18,-4.87 5.44,-6.15 -0.1,-1.8 -3.04,-1.6 -1.06,-3.51 0.73,-2.38 2.55,-3.81 3.48,-6.49 2.08,-2.53 2.36,-5.49 3.47,-8.34 0.29,-1.69 3.72,-3.96 0.35,-4.97 -1.01,-0.43 2.31,-2.04 0.29,-3.41 -1.75,-1.68 3.22,-0.78 0.65,-2.37 -1.73,-0.49 3.06,-0.82 1.8,-2.5 2.25,-1.54 6.79,-0.26 5.35,-4.64 -0.2,-2.91 3.08,-0.72 4.32,0.28 1.69,1.75 4.12,-0.2 4.78,2.52 1.5,0.9 1.01,3.62 3.74,3.35 2.67,0.01 -0.81,-3.38 2.11,-2.14 1.93,-0.51 -0.97,-4.41 1.41,-3.27 0,52.65 0,105.3 0,157.95 -2.28,4.16 -5.07,8.03 -7.49,12.09 -2.11,1.94 -4.29,5.26 -1.49,7.58 3.01,4.53 6.37,8.91 8.98,13.65 0.02,6.62 -0.04,13.29 0.04,19.87 -3.05,0.34 -6.58,0.54 -8.5,3.49 -2.48,2.8 -4.81,5.91 -5.35,9.73 -0.09,0.46 -0.18,0.92 -0.25,1.38z","name":"Kazakhstan"},"fi":{"path":"m382.62,208.07c0.7,-3.07 -2.78,1.32 -3.86,-1.32 0.05,-0.96 1.56,-3.75 -0.71,-2.21 -1.13,1.69 -1.33,-1.45 -2.92,-0.68 -0.94,0.89 -2.97,-0.9 -3.55,-0.42 -0.14,-2.36 -1.97,-0.15 -2.25,-0.03 -0.63,-1.67 -0.91,-3.6 -2.08,-5.17 1.86,-0.74 1.72,-4.06 0.26,-5.25 -0.34,-1.47 3.17,-0.38 1.07,-2.02 -1.2,-2.15 -2.78,-4.06 -3.52,-6.25 0.62,-2.08 -0.63,-3.97 -1.49,-4.42 0.49,-1.2 -0.5,-2.29 -0.95,-2.29 0.13,-1.71 3.82,-4.59 2.52,-5.52 -3.07,-0.18 0.32,-3.17 1.17,-0.45 1.02,-1.23 3.05,-2.66 2.12,-4.84 0.01,-1.7 0.15,-2.94 1.36,-1.21 0.12,-2.42 1.26,-4.91 3.64,-5.85 -0.72,-2.45 1.54,-4.8 2.24,-7.01 -0.27,-2.84 0.9,-5.24 3.71,-6.24 1.6,-1.13 1.77,-3.36 -0.51,-2.84 -0.44,-2.27 -0.12,-5.32 -2.74,-6.02 -2.3,1.99 -2.43,-3.68 -4.97,-1.88 -1.75,-2.03 -4.37,-4.52 -3.48,-7.48 1.52,-3.03 -0.83,-5.16 -2.34,-7.18 -0.2,-1.46 0.87,-4.46 -1.6,-3.74 -0.01,-2.39 -0.15,-4.83 -1.27,-7.01 -2.48,-1.84 -4.57,-4.14 -8.05,-4.18 -1.93,-1.7 -6.43,-2.88 -5.46,-6.12 -0.41,-2.16 1.14,-3.53 2.73,-1.48 2.59,1.31 1.85,6.17 5.39,5.44 2.27,0.35 4.34,-0.45 4.98,-2.51 2.4,-0.26 6.27,3.96 5.78,-0.87 -0.39,-2.02 3.32,-1.43 1.97,-3.98 -1.32,-3.02 -2.11,-7.03 -0.35,-9.99 -0.31,-2.74 4.21,-0.11 4.22,-3.35 1.47,-1.91 3.36,2.08 5.49,1.78 2.95,0.9 3.14,3.84 1.7,6.03 1.41,1.64 0.21,2.38 -0.46,3.84 1.14,0.8 2.75,1.02 1.72,2.87 -0.47,3.13 2.02,6.77 5.45,6.28 1.67,2.35 6.13,3.59 3.92,7.14 -0.75,2.27 -1.97,4.85 -0.96,7.21 3.59,3.29 6.5,7.25 9.05,11.36 0.06,1.49 -2.83,0.38 -0.84,2.06 -0.22,2.17 0.21,4.77 1.29,6.07 -1.26,3.74 5.08,3.34 3.58,6.82 0.48,3.1 6.13,1.5 4.41,5.52 -0.25,1.99 -2.95,4.48 0.53,5.03 2.93,1.69 6.43,2.67 8.87,5.07 1.06,2.48 -0.3,5.24 -0.57,7.75 -2.26,6.49 -4.21,13.14 -7.27,19.3 -1.55,2.69 -3.59,5.26 -4.3,8.32 -1.76,0.21 -3.5,-1.24 -4.38,1.19 1.52,0.77 -3.01,1.75 -1.49,-0.16 -0.76,-2.31 -1.99,0.16 -1.56,1.47 -1.82,-2.09 -4.5,1.44 -1.45,2.01 0.62,2.53 -3.67,-2.15 -3.14,-0.28 0.89,2.06 -2.52,3.25 -2.85,3.52 -2.72,0.33 -4.14,2.39 -6.64,3.79l-0.57,0.27 -0.58,0.1 0,0z","name":"Finland"},"de":{"path":"m302.45,372.15c0.39,-0.91 1.99,-2.77 0.16,-1.49 -1.57,0.93 -2.11,-2.91 -4.19,-2.08 -2.04,1.85 -3.44,-2.27 -6.01,-1.15 -2.15,0.46 -2.02,-2.87 -4.5,-1.23 -1.72,0.52 0.38,3.76 -1.44,1.73 -1.84,0.2 -4.84,0.84 -5.69,-0.07 -0.64,-1 1.16,-4.13 0.65,-5.99 1.9,-2.36 0.91,-6.25 3.86,-7.87 2.56,-1.63 0.59,-4.12 -1.86,-3.67 -2.56,0.2 -2.84,-3.15 -5.48,-1.32 -1.23,0.08 -2.11,-2.54 -3.28,-1.12 -0.17,-2.33 -4.09,-3.23 -1.38,-5.35 1.81,-3.01 -5.32,-3.18 -1.88,-6.63 1.67,-1.33 2.21,-2.89 0.22,-4.22 1.95,-2 -1.2,-0.75 -1.34,-2.77 1.01,-1.22 0.18,-2.51 -0.16,-3.21 1.78,-1.86 2.88,-5.05 1.22,-7.64 -2.19,-2.06 0.71,-2.52 2.29,-1.67 2.39,0.34 3.33,-2.08 3.64,-3.33 2.38,-1.19 2.15,-5.11 -0.59,-5.64 -0.03,-1.55 3.42,0.08 2.83,-2.66 0.31,-2.54 1.52,-4.9 2.38,-7.37 -0.34,-0.18 -3.53,0.96 -2.22,-1.41 0.9,-2.9 4.25,-1.28 6.2,-2.15 0.16,2.03 2.57,6.54 4.4,3.34 0.14,-1.85 -1,-6.59 2.18,-4.76 1.27,0.28 4.88,-0.75 2.09,-1.66 -3.15,0.44 1.18,-4.81 -1.98,-5.31 4.2,-1.72 -2.92,-4.5 -0.43,-6.3 2.37,1.37 6.56,0.38 7.64,2.55 -0.45,0.53 1.55,0.68 -0.04,1.71 -1.46,1.22 0.47,2.21 1.51,1.23 -1.09,2.31 1.04,2.07 1.81,0.68 1.67,1.18 3.81,1.56 5.14,0.49 0.21,1.77 -4.56,3.93 -2.04,5 1.38,0.2 3.65,-1.17 3.27,1.31 2.66,-0.01 2.46,-4.21 4.91,-4.12 1.43,1.57 3,-1.39 3.56,-2.49 0.61,-2.1 3.54,-0.7 4.16,-0.17 0.88,1.8 2.57,3.83 4.93,3.32 -0.95,4 4.51,3.57 4.6,6.93 3.14,3.28 -3.49,6.24 0.16,9.19 2.04,0.76 2.91,2.01 2.23,4.17 0.93,1.99 2.9,4.81 0.48,6.79 1.68,1.23 1.03,4.11 3.18,4.83 0.68,1.92 0.82,5.65 -0.66,6.5 -0.87,-1.78 -4.46,-3.53 -3.95,-0.41 1.16,0.88 -2.8,1.08 -3.3,2.22 -2.5,0.18 -3.71,2.69 -5.8,3.41 -0.73,-0.12 -0.57,1.65 -2.06,0.72 -2.78,-0.99 -2.28,4.11 -4.17,1.96 -3.51,0.44 1.56,4.5 2.19,5.46 -2.26,2.79 1.42,6 3.88,7.15 1.53,1.88 3.04,3.44 5.43,4.44 2.44,1.22 2.24,4.86 -1.02,3.8 -0.57,1.52 -0.37,3.53 -2.79,3.73 -3.29,0.46 -2.9,3.65 -1.01,5.5 0.76,1.93 -3,3.3 -3.36,1.75 -0.45,-0 -3.6,-1.29 -2.93,0.98 -3.48,-0.65 -5.56,1.87 -8.47,2.95 -1.59,-0.45 -2.06,-3.03 -4.27,-1.95 -2.85,-1.05 -0.37,3.13 -2.89,3.37z m-6.7,-79.27c-0.21,2.06 4.44,6.44 3.78,2.2 -1.59,0.14 -2.26,-2.95 -3.66,-2.25L295.75,292.88z m29,76.43c-1.59,-1.17 -0.3,-3.24 0.69,-1.13 -0.04,0.43 -0.23,0.99 -0.69,1.13z m-0.01,-83.07c-2.42,-0.16 -2.07,-4.22 0.32,-2.83 -1.17,-1.29 -0.5,-0.74 0.89,-0.58 -1.82,1.06 2.32,2.92 -0.86,3.34l-0.35,0.07 0,0z","name":"Germany"},"se":{"path":"m323.06,272.38c-2.85,0.68 -1.5,-2.92 -0.88,-3.47 -1.34,-1.73 -2.37,-3.77 -4.04,-5.01 0.79,-1.22 -1.53,-2.8 1.01,-1.48 2.77,0.18 -2.19,-2.84 0.98,-2.65 2.38,-2.15 -2.21,-3.59 -2.38,-5.5 -2.18,-0.93 -1.38,-4.24 -3.57,-5.03 -0.5,-2.35 -1.05,-4.69 -2.37,-6.57 0.36,-2.06 3.34,-6.36 -0.08,-6.96 -1.38,2.23 -3.39,1.39 -2.89,-1.18 0.66,-1.66 -0.9,-5.32 -0.3,-5.55 1.22,1.95 2.5,1.63 3.29,-0.5 0.91,-2.52 -0.9,-5.03 -0.38,-7.57 2.08,-1.14 -0.02,-3.96 3.05,-4 2.39,-1.51 1.37,-4.54 1.71,-6.85 0.8,-2.58 -4.53,-6.31 0,-6.91 1.04,-0.81 1.22,-3.31 1.37,-4.79 -1.12,-2.38 -6.01,-2.81 -4.1,-6.25 1.84,-3.74 -1.45,-6.92 -1.02,-10.47 0.52,-2.44 0.53,-5.73 -0.14,-7.32 0.64,-2.96 1.19,-6.43 4.34,-7.91 2.35,-0.49 6.23,1.31 6.51,-2.71 0.96,-3.43 -4.73,-4.28 -1.85,-7.71 0.9,-2.93 3.32,-5.66 2.42,-8.87 0.15,-1.92 0.67,-3.87 -0.11,-5.73 -1.01,-2.32 3.73,-0.74 3.99,-3.33 -0.13,-2.25 -0.54,-4.21 1.52,-5.81 2.69,-2.56 2.7,-6.48 0.46,-8.94 2.93,-1.39 1.66,-4.89 3.52,-7.09 1.35,-0.88 5.1,1.96 4.84,-1.65 -0.51,-1.95 -1.78,-6.23 1.75,-4.92 2.24,0.45 5.5,2.66 7.12,-0.07 1.29,-1.53 -2.75,-1.44 -0.66,-3.53 0.95,-1.42 0.76,-3.57 -0.83,-4.28 3.02,-0.52 2.64,2.5 5.35,3.5 2.17,2.8 6.24,2.01 8.45,4.17 1.81,1.26 3.78,2.76 3.22,5.22 1.03,1.27 -0.68,4.42 1.98,4.24 -0.85,2.83 1.11,4.63 2.62,6.51 0.04,2.86 -1.49,6.25 1.05,8.57 1.6,1.29 3.31,4.27 -0.1,3.45 -1.76,0.14 -2.91,-0.92 -2.17,1.42 -0.95,1.6 -5.22,-2.83 -4.14,0.58 0.84,1.65 -2.05,2.45 -1.57,1.13 -2.06,-0.65 -0.53,1.54 0.66,1.49 -0.6,0.2 -1.52,0.57 -0.3,1.82 -1.49,0.26 -4.7,1.58 -1.68,2.64 2.32,2.25 -3.2,4.64 -1.02,7.19 1.54,0.9 4.4,2.82 1.64,4.33 -1.68,2.21 -0.66,5.89 -3.12,7.17 -0.94,1.59 -3.16,2.96 -4.81,3.45 -0.21,1.34 -1.22,2.8 -1.35,4.54 -1.77,-1.72 -2.61,0.56 -2.76,1.85 -1.12,0.81 -2.56,2.13 0.01,2.01 -0.44,1.31 -4.33,0.73 -2.47,3.43 -0.06,0.73 -0.49,2.94 -1.88,1.95 -2.76,-0.24 -2.07,3.37 0.06,3.69 -0.77,1.95 -1.46,4.89 0.24,6.81 -3.74,-1.85 -2.36,2.41 -0.94,3.91 0.18,1.27 -3.07,0.5 -0.73,1.44 0.84,1.85 1.12,4.66 1.43,6.67 -0.32,2.79 5.02,-0.22 4.86,2.53 0.7,1.96 4.04,1.71 4.48,1.82 -3.19,-0.43 -0.28,3.53 1.17,3.32 1.13,1.08 3.55,2.93 0.69,3.17 -0.96,1.32 -2.08,3.54 -3.42,3.71 1.54,1.27 -2.79,1.25 -1.63,-0.68 0.49,-2.21 -4.13,-4.8 -3.64,-1.69 1.43,0.51 0.2,2.21 2.13,2.69 -1.79,0.21 -3.94,-2.79 -5.52,-0.41 -0.59,-1.15 -2.36,-1.3 -1.99,0.35 -2.53,-0.76 -3.68,2.49 -1.03,1.96 1.95,-0.49 4.14,0.17 6.05,0.67 -0.71,2.97 4.28,-1.28 2.88,1.93 -0.14,2.13 -0.95,4.88 -3.12,4.77 0.18,1.44 -0.14,1.56 -2.15,1.24 -1.48,-0.93 -5.69,1.16 -2.24,1.59 0.93,-0.93 4.88,0.08 2.51,0.95 -1.3,-0.74 -2.65,-1.15 -1.6,0.7 1.1,0.49 3.58,1.85 1.37,2.42 -0.48,1.93 2.49,4.34 -0.83,3.78 -1.22,1.55 3.46,2.55 0.79,3.59 -0.59,1.57 1.8,1.83 -0.1,3.07 -0.36,1.71 1.22,3.68 -0.24,4.3 0.8,1.29 0.72,4.62 -0.49,4.51 -0.92,1.99 -0.01,8.09 -3.9,5.74 -0.75,-0.04 -1.2,1.04 -1.28,-0.03 -1.81,1.13 -4.91,0.3 -5.24,2.54 -3.47,0.86 -2.77,5.15 -1.48,7.22 -1.25,2.12 -3.78,-0.71 -5.21,1.44 -0.58,0.2 -1.19,0.28 -1.8,0.28z m21.76,-13.69c-0.6,-1.64 -0.03,-5.51 0.58,-5.62 -0.47,1.84 -0.07,3.79 -0.58,5.62z m11.16,-10.28c-1.47,-2.04 -0.57,-3.97 -1.15,-6.17 0.13,-1.54 3.5,-5.82 3.93,-3.32 -1.59,1.67 -1.23,4.3 -0.42,5.29 -0.56,1.58 -2.33,2.58 -2.36,4.21z m-6.04,-22.62c-0.58,-0.9 -1.01,-2.64 0.37,-3.19 0.51,-2.57 3.62,1.5 0.73,1.06 -0.71,0.44 -0.93,1.57 -1.1,2.14z m3.41,-4.74c-1.71,-0.56 1.15,-0.98 0,0z","name":"Sweden"},"no":{"path":"m283.92,239.69c-2.05,0.82 -1.04,-2.38 -3.04,-0.45 -2.25,0.63 -2.45,-1.19 -0.48,-1.71 1.16,-1.98 -1.94,-1.69 -2.54,-0.89 -1.88,-1.69 -4.73,-3.13 -5.46,-5.54 0.16,-1.17 0.04,-2.84 1.26,-1.53 2.45,-0.31 0.5,-3.28 2.63,-3.15 -0.92,-1.74 3.6,-1.24 2.16,-3.19 -1.49,-0.01 -3.77,0.75 -1.5,-1.08 1.07,-1.87 -4.03,-2.48 -3.95,0.31 -0.43,1.99 -1.31,-1.27 0.03,-1.59 -0.59,-1.71 3.37,0.46 2.3,-1.73 2.11,-0.09 3.7,-3.31 0.62,-1.92 -2.12,1.06 -0.9,-1.62 0.69,-0.69 -1.77,-1.8 3.78,-2.21 0.57,-3.6 -0.56,-4.05 -3.61,3.53 -2.9,-0.4 -0.09,-1.07 2.45,-2.14 0.56,-2.38 1.23,-1.75 0.14,-1.45 -1.12,-1.67 -0.48,-2.03 3.39,-0.54 1.29,-2.62 -1.57,-0.11 -2.3,1.01 -2.92,1.83 0.23,-1.47 -0.96,-1.1 0.71,-1.97 1.17,-0.81 3,-0.92 0.68,-1.9 -1.68,1.41 -3.48,-0.55 -1.63,-1.27 2.35,2.15 4.25,-2.5 6.35,0.43 1.83,1.86 1.2,0.18 2.05,-1.15 2.54,-0.3 -0.18,4.44 3.17,3.6 2.08,-1.21 -0.36,-4.05 -1.72,-4.82 -1.87,-1.19 -2.86,1.17 -4.77,-0.24 -1.71,-0.32 -5.74,2.24 -5.21,-1.12 1.24,-0.84 -1.48,-1.91 1.02,-1.63 0.93,-0.21 -1.41,2 0.86,1.55 1.15,0.42 4.11,-2.74 2.32,-2.56 -1.17,0.24 -3.58,0.07 -2.04,-0.78 0.01,-1.15 -2.86,-0.72 -1.37,-2.6 1.92,-1.21 1.67,-2.06 2.44,-3.76 1.13,0.7 1.55,1.95 2.59,0.89 1.71,1.83 3.67,-1.21 0.78,-1.26 -1.72,-1.7 2.02,-2.98 1.47,-0.81 -0.08,1.94 2.1,2.28 1.49,0.15 -1.54,-0.73 -0.39,-3.26 1.26,-2.04 -0.9,2.54 1.99,2.46 3.2,1.29 -0.57,-1.07 -3.07,-0.84 -2.76,-2.61 -1.93,-0.78 -0.88,-1.18 0.63,-1.75 -0.31,2.53 1.54,0.84 1.46,0.89 0.76,2.66 4.97,0.16 2.35,-0.64 -1.68,1.13 0.97,-2.47 -1.62,-1.35 -1.33,0.1 -1.92,0.19 -0.62,-0.55 0.77,-1.45 -3.3,-3.11 -0.25,-2.56 1.36,2.34 4.5,0.23 4.77,-0.42 0.76,1.21 1.99,4.78 3.9,2.5 -0.19,-1.38 -1.61,-1.13 -0.15,-1.91 -0.52,-0.88 -3.96,-0.82 -1.31,-0.98 2.56,1.07 3.94,-2.68 1.6,-3.22 -2.38,3 -0.29,-2.57 1.23,-0.79 -1.13,2.54 3.47,1.05 2.52,-0.37 0.79,-1.1 1.41,-2.4 1.63,-0.68 1.42,0.16 -1.15,3.34 1.22,2.27 1.23,1.9 3.05,-0.32 1.25,-1.45 2.02,0.81 5.84,0.23 4.08,-2.68 2.55,-0.11 3.44,-2.71 1.89,-3.48 2.7,-0.44 1.04,-4.25 -0.61,-2.47 -0.94,0.99 -4.98,3.53 -3.32,4.59 1.36,-0.14 -3.55,4.36 -3.84,1.11 1.8,-0.4 1.59,-2.97 -0.14,-1.47 -1.54,1.59 -1.58,-0.15 0.05,-0.55 1.29,-0.12 3.11,-2.23 0.74,-1.96 0.49,-1.84 0.69,-1.57 2.55,-2.66 -0.01,-1.8 3.87,-1.75 1.44,-3.46 1.6,-3.11 2.62,3.25 4.94,0.36 -0.07,-0.91 1.83,-2.92 -0.44,-2.32 -1.97,0.37 0.51,-3.35 0.91,-3.77 2.46,-0.4 5.23,-2.14 6.04,-4.52 -0.69,-1.41 -1.97,0.46 -0.84,-1.25 0.83,-2.9 -4.58,-0.06 -1.84,-2.23 2.88,-0.42 -1.2,-4.08 2.2,-4.17 1.93,2.26 1.6,-1.88 -0.02,-2.41 1.79,-0.55 2.5,-1.55 4.25,-0.42 0.51,-2.76 -3.45,-2.33 -4.43,-3.58 -0.26,-3.01 2.59,-3.12 4.58,-3.67 0.29,-0.78 -0.81,-3.13 0.47,-2.48 2.46,0.65 2.45,-2.36 2.11,-3.23 1.27,-0.62 3.06,1.08 2.81,-1.49 0.06,-2.75 -4.88,2.23 -2.7,-0.53 -0.33,-1.84 3.17,-2.65 3.79,-1 0.44,2.38 2.69,0.96 0.74,-0.53 -0.37,-0.19 2.89,-3.12 0.16,-2.12 -1.52,1.62 -2.69,-1.67 -0.67,-0.49 2.18,0.6 1.78,-2.26 0.1,-2.63 1.64,-0.99 1.76,-1.25 3.09,0.31 2.65,0.05 -0.04,3.53 -1.13,3.83 -0.13,2.43 3.49,4.78 1.03,6.94 -1.52,2.38 -4.26,5.02 -2.96,8.1 -1.03,2.23 -5.62,0.34 -3.97,3.87 1.08,2.24 -0.41,4.62 0.29,6.91 -0.21,2.4 -1.5,4.65 -2.48,6.84 -1.89,2.33 -0.64,4.78 1.42,6.24 1.36,2.71 -1.06,4.75 -3.56,3.4 -3.47,0.13 -6.05,3.54 -6.55,6.75 -0.09,2.61 -2.39,4.76 -0.87,7.58 1.7,0.33 -0.26,3.51 0.65,5.09 0.93,2.11 2.11,4.27 1.04,6.66 -1.85,3.6 1.33,5.61 3.87,7.28 0.34,1.26 -0.49,2.52 -0.69,3.78 -4.37,0.5 -1.64,4.45 -0.68,6.73 -0.19,2.39 0.87,5.69 -1.37,7.29 -2.33,-0.08 -2.37,2.05 -2.44,3.42 -2.81,2.64 1.45,6.5 -0.89,9.33 -0.63,-0.51 -0.86,-4.28 -3.41,-3.07 -1.98,0.66 -1.1,-2.02 -2.18,-2.85 0.06,-1.66 0.25,-4.8 -1.34,-6.05 -1.51,0.96 0.6,3.37 -1.47,1.82 -1.6,1.08 1.29,3.05 0.43,4.75 1.82,1.57 -1.36,1.57 -0.61,3.28 -0.57,0.33 -1.78,3.28 -2.33,0.68 -1.69,-2.25 -3.03,0.06 -1.93,1.1 -2.37,0.2 -1.22,2.58 -3.27,2.72 0.26,1.74 0.63,2.15 -0.66,0.4 -0.55,-0.29 -0.31,3.24 -1.72,3.89 -1.13,1.13 -2.53,1.14 -2.96,2.81 -1.25,-1.4 -1.53,-2.14 -2.1,0.08 -0.58,1.07 -1.97,0.9 -2.97,1.19z m1.79,-42.62c-2.02,0.59 -1.81,3.69 -1.92,5.35 2.29,1.58 5.16,-1.56 2.82,-2.47 -2.51,1.62 -0.41,-2.26 1.2,-2.22 -0.69,-0.24 -1.35,-0.63 -2.1,-0.66z m-8.26,-3.48c1.26,1.05 1.96,-0.59 3.75,0.18 2.86,-0.7 0.32,-3.31 -1.23,-1.63 -0.54,1.11 -4.66,-2.16 -3.53,0.83 -0.64,0.74 0.98,1.54 1.01,0.63z m-1.56,-1.31c1.64,-1.54 -2.29,-0.9 0,0l0,0z m-3.39,20.54c-1.15,-1.48 -0.79,-2.31 1.27,-2.09 -0.5,0.65 -0.76,1.45 -1.27,2.09z m20.58,-43.12c1.89,-0.99 1.05,0.09 0,0z m18.74,-19.12c-0.11,-1.35 1.21,-2.72 0.71,-0.65l-0.24,0.29 -0.47,0.36 0,0z m7.46,-19.18c-1.61,-0.55 0.1,-1.14 0,0l0,0z m3.95,-10.61c-1.42,-0.85 2.16,-3.22 0.98,-0.56 -0.23,0.31 -0.59,0.56 -0.98,0.56z m8.03,-3.21c-0.35,-1.4 -4.22,-5.53 -0.69,-3.55 1.98,-0.66 -2.87,-2.41 0.24,-2.21 2.34,-1.07 1.29,3.96 3.81,2.24 0.12,-1.58 -1.95,-2.83 0.76,-2.09 1.98,-2.01 2.51,5.82 -0.36,3.01 -2.2,-1.1 -3.01,1.06 -3.76,2.6z m-5.57,-1.57c-2.14,-0.36 2.05,-0.11 0,0z m-7.93,-1.09c-0.6,-2.04 2.47,-0.64 0,0z m7.12,-4.13c0.59,-2.37 4.58,-1.01 4.01,-4.46 0.66,-1.69 0.95,3.05 2.77,1.99 1.53,1.25 -2.5,3.06 -1.7,0.6 -1.05,-1.01 -2.27,1.66 -3.77,0.7 -0.56,0.22 -0.96,0.7 -1.3,1.17z m7.58,-0.78c-1.19,-2.28 3.86,-0.43 2.34,-2.88 -3.7,-0.04 1.43,-1.56 0.6,-2.56 -2.52,-1.2 0.41,-2.37 1.15,-2.81 0.41,-3.22 -2.85,-1.84 -4.06,-0.47 -1.59,-2.04 2.26,-2.36 2.32,-4.57 0.14,1.33 0.46,2.85 1.65,2.42 0.8,1.52 3.32,1.84 3.24,-0.37 1.68,1.68 2.77,1.67 2.31,-0.48 0.79,-1.17 0.35,-2.79 1.61,-3.02 -0.4,-0.66 -1.42,-3.92 0.2,-3.31 0.95,2.39 -0.14,5.28 -0.89,7.26 2.94,1.88 1.55,-3.57 4.12,-3.05 0.22,-1.76 -3.3,-2.79 -1.17,-4.59 1.11,2.64 2.9,-1.39 2.9,-1.08 0.95,0.44 4.33,3.19 2.86,0.58 0.52,-1.54 -0.4,-5.86 -2.92,-3.36 -3.05,-0.22 1.04,-4.05 2.23,-1.43 1.8,-0.47 3.36,-0.55 3.65,1.78 1.6,2.82 3.68,-1.17 2.1,-1.52 0.07,-0.51 -0.69,-2.47 -0.41,-3.71 -0.86,-0.45 -2.21,1.67 -1.86,-0.59 0.28,-1.23 2.77,-3.11 1.94,-0.75 0.94,1.47 4.41,-0.15 2,-1.03 0.6,-1.49 3.48,0.04 1.97,-2.16 -0.79,-0.71 -2.04,-3.95 0.25,-3.13 1.93,-0.42 3.84,0.45 2.02,2.21 -1.75,1.98 -0.56,3.61 -0.42,5.65 -2.28,2.68 3.1,3.87 2.24,0.45 -0.18,-2.74 0.93,-5.32 1.76,-8.05 1.89,-3.05 -1.06,3.6 0.33,2.81 1.3,-1.62 0.64,3.35 2.9,1.4 2.12,-1.22 -1.68,-4.46 1.77,-4.91 0.72,-1.47 -2.34,-1.18 -0.57,-2.18 -0.51,-2.17 4.79,-1.62 2.39,1.11 -1.65,1.09 -1.95,4.14 -0.56,3.08 -0.4,2.24 2.84,0.85 3.62,0.4 -0.89,-1.13 -1.79,-4.79 0.32,-4.87 0.09,2.52 4.6,3.29 3.84,0.25 1.3,0.25 1.81,0.78 0.68,1.44 0.12,2.4 2.78,-0.68 3.9,1.46 2.08,1.26 -1.72,0.74 -1.03,2.68 -0.51,3.31 -7.08,0.08 -6.25,3.51 1.53,-0.19 4.57,0.06 4.67,1.27 -0.73,2.54 2.28,1.63 2.62,2.01 1.41,2.24 -3.5,3.67 -1.9,6.17 0.12,3.04 -1.51,0.49 -0.35,-1.03 0.73,-2.35 -0.61,-5.22 -3.22,-5.51 -2.52,-0.23 -4.95,-4.8 -6.83,-0.86 -0.98,2.59 -3.07,-0.98 -3.73,2.03 -1.82,2.85 -1.43,6.39 -0.81,9.47 1.12,1.85 1.17,3.38 -0.82,4.1 -0.7,1.31 0.29,4.41 -1.67,2.5 -2.14,-1.69 -5.02,-0.86 -5.85,1.4 -2.54,0.85 -4.72,0.04 -5.34,-2.66 -0.99,-2.14 -5.91,-6.2 -6.14,-1.61 0.57,2.13 -0.39,0.96 -1.13,1.23 -0.7,0.99 -4.96,0.92 -2.14,2.3 2.85,1.94 -1.88,4.5 0.34,5.92 1.59,3.24 -4.12,0.39 -5.68,0.21 -2.06,-1.04 -3.15,2.55 -4.42,0.38 -1.01,-0.36 -2.16,1.19 -2.67,1.07z m-9.01,-1c0.11,-2.56 2.91,0.13 0,0z m-1.13,-1.28c-0.8,-1.29 3.49,-1.49 0.69,-0.52l-0.34,0.34 -0.36,0.18 0,0z m4.3,-0.48c-1.71,-0.47 -0.9,-2.93 0.17,-2.2 -0,0.74 -0.11,1.47 -0.17,2.2z m4.79,-4.64c0.18,-0.78 1.29,-1.07 0,0z m7.64,-3.83c-2.24,0.29 -1.11,-3.47 -0.22,-0.75 0.06,0.35 1.74,0.98 0.22,0.75z m2.2,-0.62c-2.38,-0.91 -2.84,-5.4 0.1,-4.68 0.37,1.54 -0.1,3.12 -0.1,4.68z m-1.72,-6.1c-4,-0.97 3.45,-2.52 1.03,-0.52 -0.42,0.05 -0.59,0.56 -1.03,0.52z m5.27,-4.48c-0.27,-0.28 0.7,-0.67 0,0z m42.25,-2.91c-1.73,0.39 -2.88,-3.16 -0.45,-1.74 1.34,-0.78 2.3,1.96 0.45,1.74z m-35.9,-2.93c0.17,-2 2.33,-0.17 0,0z m1.12,-1.12c1.6,0.69 0.37,-2.16 2.16,-2.14 -0.43,0.5 -1.9,3.93 -2.16,2.14z m20.87,-4.79c0.68,-1.68 0.54,-0.43 0,0z m-9.67,-2.21c-2.58,-0.52 -0.4,-3.09 0.65,-0.8 -0.07,0.3 -0.24,0.8 -0.65,0.8z M319.32,12.08c-0.3,-1.14 -1.45,-2.77 -2.39,-2.03 -1.57,-1.66 3.97,-2.79 -0.11,-4.02 -1.19,0.78 -1.7,1.41 -2.54,-0.32 -1.8,0.29 -3.52,-4 -2,-4.15 0.28,2.4 2.41,-1.85 3.57,0.39 1.62,1.46 1.99,-0.61 1.81,-1.03 1.1,0 2.2,0 3.3,0 -1.65,1.5 0.79,4.98 -1.45,5.97 1.81,0.96 -0.87,3.73 0.84,4.72 -0.27,0.27 -0.64,0.46 -1.03,0.47z M334.56,1.41c-0.71,-0.78 1.26,-0.59 0,0z","name":"Norway"},"ua":{"path":"m458.88,376.43c-1.65,0.13 -4.78,-1.76 -1.5,-2.12 1.11,-0.94 -0.88,-2.9 1.02,-4.06 0.62,-1.77 2.75,-4.95 1.17,-6.55 -2.35,-0.6 0.77,-4.92 0.58,-1.37 1.22,0.09 1.33,-0.46 2.29,-1.4 1.42,1.03 2.11,1.68 2.01,-0.49 0.8,-0.31 0.98,2.31 1.91,0.48 2.09,-0.77 2.07,-2.38 0.02,-2.62 0.48,-3.05 -2.01,-4.08 -4.34,-4.76 -1.03,-1.35 0.14,-4.1 -2.32,-4.58 -0.19,2.48 -3.85,-0.68 -2.94,-2.62 0.58,-1.57 -1.58,-5.77 -2.62,-3.02 -1.32,-0.9 -3.45,-3.78 -4.76,-1.05 -0.61,-1.26 -0.31,-1.31 -2.39,-0.85 -1.59,-0.19 -3.7,-2.91 -5.96,-1.05 -1.9,1.41 -4.52,1.99 -6.34,2.49 -0.3,1.21 -2.98,2.87 -3.26,4.06 0.69,2.88 -3.92,2.94 -5.88,3.36 -1.91,1.06 -2.85,5.5 -5.12,2.22 -2.55,-1.4 -4.85,1.16 -7.45,0.17 -2.78,0.68 -6.22,-1.81 -7.42,1.27 -1.7,-1.79 -4.36,-1.99 -6.08,-3.8 -1.69,-1.99 1.67,-4.76 1.1,-7.32 0.71,-2.08 3.89,1.72 3.03,-0.71 -0.43,-1.86 -2.14,-2.21 -2.09,-4.41 -1.6,-2.52 1.02,-5.01 1.85,-7.4 1.48,-2.09 2.06,-5.46 4.76,-6.09 3,-1.14 0.85,-4.79 0.14,-5.51 2.5,-2.1 -3.76,-3.23 -3.93,-5.84 -0.3,-1.41 -1.88,-4.75 0.96,-3.25 2.78,-0.65 2.08,-4.77 5.31,-4.83 2.44,-2.13 5.65,-1.09 8.41,-2.29 2.86,0.12 5.82,0.8 8.71,-0.13 1.44,0.02 2.96,3.43 4.46,0.67 0.48,-0.61 1.02,3.11 2.27,0.92 -0.68,-2.01 1.68,-0.28 2.33,-1.83 1.72,1.64 3.14,-2.06 4.36,1.19 0.98,-0.83 1.53,-5.36 3.12,-2.13 0.91,1.83 2.9,1.59 3.18,-0.37 1.11,-0.89 4.84,0.77 2.92,-1.35 2.22,-0.55 3.94,4.29 5.74,0.82 -0.53,-2.27 -3.24,-4.21 -1.65,-7.03 0.3,-2.91 3.55,-3.36 5.73,-4.62 2.8,0.98 5.55,-1.1 4.6,-3.99 2.15,-0.59 4.74,-0.01 5.62,-2.79 1.28,-1.72 2.08,2.03 2.83,-0.54 3.15,-1.7 3.09,3.74 6.17,3.78 2.69,0.81 -2.77,1.83 -0.06,3.34 0.97,1.1 0.27,1.92 1.66,2.64 0.13,1.93 0.76,2.76 1.8,0.93 1.75,0.21 3.63,-0.42 4.86,-1.04 1.22,1.6 2.86,1.33 3.58,3.44 0.66,2.12 2.97,6.38 5.86,3.86 0.95,-2.66 2.98,0.62 4.61,-0.26 2.96,0.38 3.76,-3.58 5.99,-4.66 2.15,1.36 3.87,3.07 6.32,3.78 2.39,1.73 1.46,-2.06 1.83,-2.22 2.04,0.83 3.63,-0.35 5.65,0.78 1.64,-1.06 3.29,-0.67 5.4,-0.98 -0.34,2.96 3.78,0.35 3.93,-0.21 -1.54,1.79 2.89,1.91 1.36,4.34 -0.91,1.71 -3.3,4.32 0.42,4.36 1.34,-0.17 -2.51,1.76 -0.87,3.22 0.73,1.16 4.31,0.82 2.94,3.4 -1.12,2.14 2.56,-1.79 1.05,1.32 0.04,1.92 1.74,4.67 -1.56,4.6 -2.59,0.04 -5.57,1.58 -4.88,4.34 -1.93,1.59 -3.46,4.3 -2.04,6.74 1.21,-0.9 1.4,3.27 -0.48,2.33 -2.61,-0.17 -4.34,2.86 -4.47,4.25 -3.32,-0.37 -1.93,5.58 -4.94,3.83 -1.97,0.68 -1.55,3.31 -3.9,2.83 -2.31,2.16 -4.28,4.87 -4.46,8.16 0.05,2.37 -1.89,1.63 -2.69,0.94 -1.43,2.66 1.92,4.83 3.49,6.52 1.72,1.52 4.3,4.21 6.67,2.42 1.12,-1.05 0.41,-2.57 2.09,-1.56 1.41,-0.15 1,-2.82 3.17,-2.37 1.15,-0 0.13,2.98 0.5,4.21 -1.72,0.79 -3.13,2.24 -5.41,1.17 -2.72,0.19 -1.51,3.05 -3.33,4.45 -1.46,1.36 -5.27,2.16 -5.39,5.34 -0.65,2.52 -2.91,5.33 -5.63,3.62 -2.92,-0.52 2.13,-0.53 -0.45,-1.77 -0.6,-1.76 -0.24,-6.9 -3.31,-5.63 -2.51,0.74 -5.09,-2.4 -7.49,-0.19 -0.84,-1.11 2.17,-2.44 2.5,-3.9 1.15,-2.11 4.76,-3.17 5,-5.4 -1.21,-0.47 -1.1,-4.45 -2.98,-2.14 -0.01,2.53 -3.55,-2.55 -3,-0.06 -1.18,1.35 -4.02,3.26 -6.29,3.26 -0.55,-2.41 -5.82,0.8 -2.84,-2.01 -2.07,-2.11 3.13,-0.37 2.51,-2.12 0.43,-0.87 2.54,-3.83 0.04,-2.33 -1.67,2.49 -5.64,0.74 -4.34,-2.2 -3.44,-0.71 0.17,4.67 -3.05,4.35 -0.95,0.4 -1.24,-2.89 -2.18,-0.81 1.19,3.1 -5.65,1.69 -4.31,5.43 -0.19,2.64 -0.71,6.16 -2.65,8.5 -1.92,0.15 -2.28,-0.37 -1.97,1.56 1.06,2.6 -1.47,1.65 -1.44,-0.04 -3.03,0.54 1.86,5.97 -1.63,4.84 -1.69,1.04 -2.76,2.58 -4.85,3.23 -0.33,0.68 0.22,1.06 -0.9,0.94z m8.84,-3.13c-1.24,-0.5 0.31,-1.59 0,0z M480,354.71c-2.02,-0.24 1.4,-0.94 0,0z","name":"Ukraine"},"il":{"path":"m564.91,519.32c-2.79,-0.13 -5.59,-0.02 -8.39,-0.06 1.03,-3 0.55,-6.35 0.36,-9.47 -0.77,-1.89 -0.08,-3.97 0.69,-5.38 -2.21,-3.68 3.62,-1.36 3.34,-4.63 0.16,-2.5 0.5,0.45 0.78,1.3 0.41,1.74 0.97,3.45 0.64,5.26 0.64,4.15 2.85,8.05 2.93,12.32 -0.33,0.17 0.28,0.88 -0.36,0.66z","name":"Israel"},"sa":{"path":"m593.15,519.31c-2.83,-0.62 -5.1,-2.77 -7.77,-3.86 -1.58,-0.98 -5.22,-1.86 -2.02,-3.26 5.2,-3.81 10.77,-7.23 15.26,-11.9 1.43,-2.99 4.63,-3.12 7.49,-3.98 3.73,-1.26 7.76,-1.54 11.57,-0.41 3.34,1.04 6.79,1.79 10.32,1.49 3.1,-0.23 6.16,0.27 9.07,1.36 7.05,2.14 14.23,3.86 21.25,6.06 3.22,1.22 7.13,2.8 10.33,0.7 3.47,-1.54 7.12,-2.66 10.59,-4.19 0,5.98 0,11.96 0,17.94 -28.52,0 -57.04,0 -85.55,0l-0.54,0.05z","name":"Saudi Arabia"},"iq":{"path":"m665.09,505.54c-3.93,-0.14 -7.37,-2.41 -11.2,-3.08 -6.98,-1.9 -13.93,-3.92 -20.88,-5.88 -4.51,-0.55 -9.21,0.46 -13.56,-1.25 -4.06,-1.23 -8.45,-1.67 -12.53,-0.27 -2.28,0.01 -6.14,3.28 -6.23,-0.28 -1.25,-1.52 -3.9,2.58 -3.26,-0.38 2.09,0.09 -1.51,-3.02 -1.67,-4.04 -1.32,-2.57 -5.49,-5.02 -2.13,-7.49 4.5,-5.84 9.16,-11.56 13.6,-17.45 2.04,-3.07 2.39,-7.4 0.02,-10.4 -1.41,-3.28 0.38,-7.66 -2.62,-10.31 -3.09,-2.29 -2.71,-6.73 0.85,-8.16 2.5,-2.92 2.33,-7.04 4.39,-10.19 0.66,-2.04 0.93,-3.47 3.19,-3.89 2.1,-2.75 5.72,-0.13 8.03,-2.44 0.9,-1.04 2.2,-3.85 2.95,-0.99 0.24,2.01 2.47,2.98 2.75,0.39 0.38,-1.99 1.84,-3.41 3.5,-1.73 2.25,0.16 -1.13,2.67 1.73,2.71 2.42,-0.18 1.65,4.3 5.21,2.73 1.14,1.18 1.93,5.76 4.16,3.01 2.6,0.76 5.25,0.47 7.14,-1.59 0.61,0.22 -3.19,2.13 -1.4,3.83 1.09,1.94 5.9,4.19 1.79,5.59 0.41,2.25 -2.38,5.11 0.78,6.65 -2.86,-0.58 -2.74,5.86 0.16,4.24 -0.52,2.48 -0.45,5.39 2.6,5.52 0.99,0.71 1.98,1.43 2.96,2.14 0.34,-1.31 1.06,-1.78 0.88,-0.17 1.65,-0.62 3.99,0.32 4.03,2.59 0.12,1.35 0.91,3.75 2.75,1.76 3.33,-1.46 6.61,1.38 9.97,1.03 2.56,-1.77 4.83,0.86 6.18,2.91 0,13.19 0,26.38 0,39.57 -4.3,1.87 -8.8,3.32 -13.06,5.23 -0.36,0.05 -0.72,0.08 -1.09,0.08z","name":"Iraq"},"az":{"path":"m625.84,392.01c-2.29,-1.74 -6.12,-1.39 -7.67,-4.17 -2.87,-0.9 2.82,-3.1 1.5,0.21 -0.29,2.16 0.66,-0.38 1.38,-0.86 1.98,0.67 2.99,-0.38 4.14,-1.97 0.78,0.36 1.17,3.12 3.09,2.25 0.41,1.86 5.4,3.6 1.25,3.88 -1.24,0.15 -2.44,0.52 -3.69,0.66z m9.25,-4.53c-1.22,-1.31 -1.37,-1.74 -0.58,-3.22 -0.7,-1.79 -4.05,0.28 -2.18,-2.45 -0.71,-3.07 -3.86,1.6 -5.74,-0.73 -1.12,-1.04 -4.8,-0.64 -2.24,-1.72 1.66,-3.91 -3.46,-4.05 -5.96,-4.45 -3.06,-0.54 1.31,-0.13 -0.04,-1.79 -1.74,-0.11 0.76,-3.32 -2.15,-2.78 -1.13,-2.07 -3.77,1.24 -3.43,-1.3 -3.83,0.78 -1.14,-4.07 1.25,-3.79 1.55,-0.11 2.45,2.19 4.64,1.11 1.17,-0.47 1.66,-2.32 3.53,-1.24 4.04,0.44 2.81,-5.63 -0.82,-5.09 -1.19,-0.23 -4.57,-0.92 -2.6,-1.97 -1.03,-3.22 2.59,-2.79 4.29,-1.55 1.8,0.76 4.71,-0.66 4.29,1.94 2.3,1.27 5.96,-0.02 6.83,-2.57 -0.51,-2.81 0.78,-5.44 1.5,-8.17 0.77,-1.87 3.93,1.21 5.57,1.75 2.04,2.28 4.63,3.86 7.4,4.84 2.72,2.9 5,-2.29 8.05,-0.66 2.42,0.7 -1.69,0.86 -2.16,1.8 -1.58,1 -0.94,2.98 -2.64,4.05 -0.87,2.65 2.35,4.7 1.48,7.28 0.01,2.24 2,3.06 1.53,5.18 2.05,2.31 -2.94,0.21 -1.67,3.07 0.41,2.71 2.06,5.63 2.66,7.96 -1.4,1.58 -3.89,-2.8 -4.72,-0.12 -0.51,-2.33 -5.01,-0.05 -2.24,-2.75 1.89,-2.25 -0.89,-2.79 -2.14,-3.4 -0.39,-1.7 3.13,-2.19 0.43,-2.98 -2.55,-2.17 -6.8,-1.82 -7.18,2.01 -1.56,2.2 -2.45,4.87 -3.2,7.25 -1.02,1.28 -1.42,2.9 -1.76,4.47z","name":"Azerbaijan"},"ir":{"path":"m679.21,458.81c-1.85,-0.64 -2.96,-4.67 -5.07,-2.4 -2.51,1.13 -4.99,-0.69 -7.5,-0.94 -1.54,-1.25 -4.65,1.4 -4.88,0.3 -0.35,-2 -1.76,-5.08 -4.31,-4.59 -0.55,-2.48 -2.8,0.93 -4,-1.28 -1.15,-1.36 -3.82,-0.5 -2.7,-3.18 1.2,-2.24 -1.18,-2.93 -1.92,-2.92 -0.76,-2.14 0.85,-1.8 1.93,-2.95 -0.87,-1.54 -2.25,-2.23 -1.18,-3.98 1.41,-1.22 -0.93,-2.74 1.62,-3.12 2.22,-2.84 -3.32,-4.02 -3.44,-6.68 1.23,-0.62 3.69,-3.96 0.62,-3.5 -2.16,1.88 -4.6,2.34 -7.4,1.61 -2.13,2.68 -1.52,-4.01 -4.35,-3.02 -2.59,1.12 -1.74,-3.71 -4.6,-2.9 0.47,-2.81 -2.6,-2.62 -3.34,-4.74 -3.51,-0.37 -2.73,-5.88 -6.79,-4.9 -2.43,-0.23 0.88,-4.74 -1.15,-6.42 -2.63,1.81 -2.65,-3.09 -4,-4.32 -2.26,0.51 -1.17,-4.01 -3.82,-4.01 -1.08,-1.34 3.43,-0.98 2.24,-3.41 -0.62,-1.73 -1.46,-4.27 1.42,-2.93 2.06,1.49 5.14,2.91 7.63,3.88 2.25,1.24 5.18,-0.04 7.5,-0.74 2.07,-1.71 5.07,-2.61 4.75,-5.97 2.3,-2.33 1.71,-5.53 3.7,-8.09 0.98,-2.61 2.58,-5.68 5.71,-3.44 1.82,0.32 -1.95,3.66 1.08,3.95 4.06,-0.35 -2.73,4.32 1.52,4.83 1.27,-1.49 2.59,2.44 3.8,0.15 1.45,1.58 3.99,1.1 4.87,0.71 1.82,2.85 3.68,6.92 7.62,6.9 3.17,0.36 5.34,-2.56 8.13,-3.02 2.01,0.9 4.99,2.01 6.34,2.88 -0.02,22.74 0.03,45.49 -0.03,68.23z","name":"Iran"},"ge":{"path":"m581.92,380.27c-2.26,-0.5 1.41,-3.83 -0.72,-5.4 -1.82,-2.3 -4.05,-4.17 -5.45,-6.77 -1.72,-2.18 -4.46,-0.36 -5.95,-2.58 -2.48,-1.15 -5.99,1.77 -7.69,-0.38 -1.24,-0.61 -3.4,-1.34 -1.11,-2.52 2.92,-1.18 5.31,-0.74 8.31,-1.17 2.62,-0.64 4.81,0.81 7.27,-1.05 1.64,-1.03 2.03,-2.53 4.37,-2.32 3.09,-1.55 5.23,0.93 8.34,0.23 1.97,-0.34 3.8,-1.06 3.76,1.37 3.33,1.16 4.09,-3.43 6.09,-4.97 1.82,1.19 3.56,0.44 3.29,-1.84 2.38,1.1 4.89,0.94 6.98,-0.29 0.1,2.19 0.6,4.52 3.44,3.9 1.82,0.87 6.7,-2.08 4.44,1.62 -1.04,4.09 6.18,1.33 6.51,4.88 -0.55,2.71 -3.63,-0.63 -4.78,1.93 -2.42,2.07 -3.95,-2.25 -6.59,-0.28 -2.88,0.84 -1.75,4.15 -4.11,5.26 -2.15,1.64 -6.02,2.97 -7.99,5.72 -1.4,1.55 -3.24,0.61 -4.57,1.11 -0.32,-2.7 -4.41,-0.39 -5.08,-2.59 -2.74,0.39 -1.4,4.41 -4.46,3.55 -2.08,-0.04 -2.63,2.5 -4.3,2.58z","name":"Georgia"},"sy":{"path":"m570.98,505.1c-2.37,-0.06 -4.22,-2.23 -6.66,-1.9 -1.76,1.54 -0.95,-3.61 -2.17,-4.66 0.26,-2.1 3.06,-4.25 2.48,-6.23 -2.86,0.37 -0.12,-3.18 1.61,-2.81 1.41,-1.1 -2.08,-2 0.23,-3.24 2.46,-1.85 0.82,-6.41 -2.32,-5.73 1.74,-2.54 -3.41,-1.48 -4.52,-0.5 -2.16,-1.45 -1.71,-4.59 -2.2,-6.89 -0.72,-2.13 -3.63,-2.2 -2.69,-4.95 -1.91,-3.07 4.61,0.44 2.96,-3.37 1.96,-1.34 -0.54,-4.12 2.56,-4.37 1.92,-1.95 -2.9,-3.08 -1.96,-5.67 -0.17,-2.68 3.53,-1.88 4.07,-0.24 2.8,-1.4 6.26,-2.87 7.96,-6.08 1.77,-3.87 6.01,-0.57 8.96,-1.32 4.89,-1.98 9.3,-5.28 12.15,-9.78 2.06,-3.09 5.52,-4.42 8.88,-5.51 3.15,-0.62 4.71,-4.01 6.68,-5.54 2.16,2.06 -0.35,4.49 -0.71,6.75 -0.34,2.94 -3.64,3.54 -4.67,5.93 -0.77,2.72 0.96,5.34 2.92,7.06 1.91,2.86 0.25,6.61 2.05,9.52 1.43,2.7 2.07,6.08 0.11,8.71 -2.41,4.04 -5.84,7.35 -8.54,11.19 -6.92,8.84 -13.8,17.72 -20.31,26.87 -1.64,2.62 -4.19,2.66 -6.86,2.76z","name":"Syrian Arab Republic"},"tr":{"path":"m494.91,482.2c-2.64,-0.83 -6.61,0.7 -6.69,-3.38 -0.28,-2.26 -4.06,-2.7 -3.32,0.14 -2.13,0.72 -2.01,-4.36 -4.24,-2.06 -1.1,1.64 -1.71,4.09 -2.75,1.3 -0.06,-0.7 3.87,-0.84 1.58,-2.85 -2.66,-0.75 -4.9,2.05 -7.56,2.3 -3.22,0.12 2.63,-2.09 -0.16,-3.58 -1.02,-1.26 -2.59,-1.78 -3.85,-0.25 0.8,-2.14 -2.11,-2.59 -0.3,-4.42 0.7,-2.91 -3.46,-4.14 -4.72,-3.08 -0.35,-2.13 -2.41,-1.66 -2.94,-0.12 -0.96,-0.52 -4.49,-1.13 -1.65,-1.67 1.95,-1.12 -0.35,-1.93 -0.64,-2.3 -0.1,-2.91 1.76,1.21 2.44,2.3 1.21,0.53 0.61,-1.54 2.32,-0.91 2.14,0.31 3.08,-4.19 0.9,-2.3 -2.98,0.71 -3.35,-2.88 -0.63,-3.63 1.42,-2.31 -2.41,-1.49 -2.02,-3.47 -1.48,-1.26 -3.08,-1.7 -1.12,-3.61 1.88,-4.06 -3.41,-1.44 -4.89,-0.21 -3.22,2.13 -1.41,-2.71 -2.53,-4.43 0.27,-1.5 2.4,-1.02 1.65,-3 1.08,-2.79 3.49,-3.54 5.85,-4.95 1.33,-0.2 3.18,2.13 5.06,0.5 2.19,-0.32 0.53,-4.12 2.21,-2.66 -1.01,2.78 3.65,-0.5 5.07,-0.34 1.73,-0.22 7.01,-0.13 5.15,-2.97 -1.48,-0.21 -3.18,0.39 -0.99,-0.95 1.96,-1.62 4.19,-2.4 6.66,-2.8 2.77,-0.54 1.2,-2.91 -0.89,-1.86 -1.93,1.45 -3.4,0.81 -4.38,0.32 -3.58,0.35 -2.31,-4.79 0.81,-3.52 2.71,0.01 5.57,-0.39 7.64,-2.28 2.46,-0.32 5.31,1.16 7.39,-0.69 2.9,-0.41 1.41,-4.52 4.23,-5.54 2.71,-2.98 4.61,-6.84 8.39,-8.68 2.29,-1.78 4.29,-3.83 7.39,-4.02 3.16,-0.7 6.47,-1.22 9.26,-2.97 -0.18,-2.01 2.92,-3.03 2.12,-0.46 1.09,2.77 5.37,3.22 7.04,0.72 1.14,-1.37 -0.27,2.45 1.16,0.14 2.04,-1.94 2.88,3.79 5.57,2.83 1.27,-1.86 4.62,-3.78 5.67,-1.09 1.67,-0.99 4.1,0.27 5.52,-0.17 -0.07,-1.45 1.44,-1.93 0.76,-0.72 3.48,0.31 7.66,-0.08 9.71,-3.32 2.34,-1.18 4.33,-4.18 7.15,-3.36 2.71,-0.07 6.67,-0.67 7.5,-3.83 1.38,-2.88 4.81,-4.34 5.49,-7.63 0.34,-3.02 3.69,-0.01 3.89,-2.79 0.79,-1.71 6.06,-0.8 5.2,-2.54 -0.27,-1.98 1.64,-2.11 0.91,-0.61 1.97,-1.13 4.24,-0.33 5.11,0.95 0.95,1.76 2.34,-1.7 3.43,0.93 2.07,0.94 4.5,1.8 3.64,4.81 0.12,2.83 2.56,6.38 5.64,4.35 1.45,-1.61 6.05,-1.12 6.12,-0.28 -2.87,1.25 2.28,4.65 -1.45,5.76 -2.31,0.86 -1.86,1.74 0.02,2.55 2.07,1.41 1.16,4.02 3.6,4.69 1.23,1.57 1.59,5.71 3.8,4.2 0.43,2.37 -1.79,7.52 2.74,6.05 2.64,-0.44 0.94,3.97 3.94,4.02 3.58,1.02 -1.74,2.3 -1.12,4.76 -1.2,0.98 -0.5,-3.85 -3.12,-2.67 -1.98,1.2 -2.57,4.14 -5.61,3.29 -2.88,-0.31 -4.84,1.72 -7.02,2.7 -0.69,1.88 -0.86,5.21 -2.91,2.44 -2.75,-0.22 -2.61,4.46 -5.58,4.92 -2.98,1.72 -6.75,1.93 -9.15,4.66 -2.61,2.66 -4.36,6.14 -7.61,8.16 -2.25,1.32 -4.52,3.36 -7.26,3.28 -3.54,-1.52 -7.49,-0.78 -9.08,3.03 -1.68,2.28 -5.43,4.75 -7.39,2.82 -3.82,-1.14 -4.64,3.62 -2.75,6 0.73,1.14 2.5,1.57 0.17,2.12 -3,0.1 0.83,3.76 -2.09,4.07 1.59,1.89 -1.39,2.48 -1.35,0.31 -1.32,-1.73 -3.85,-3.07 -1.43,-5.18 3.46,-2.09 -0.87,-8.48 -3.12,-4.45 -0.21,1.09 -4.52,4.06 -1.07,3.29 -0.14,0.32 -3.7,3.62 -5.39,1.57 -3.14,-1.5 -6.7,0.91 -7.75,3.93 -2.31,1.12 0.64,5.77 -2.52,4.44 -0.89,2.68 -3.25,3.27 -5.84,4.06 -1.96,1.06 -3.83,3.65 -6.37,2.47 -2.84,-1.55 -5.07,-4.65 -8.7,-4.14 -2.94,-0.38 -6,-0.94 -8.9,-0.06 -3.48,-0.29 -3.26,3.57 -2.85,5.62 -0.19,1.75 1.15,3.5 -1.34,2.67 -2.13,0.36 -2.94,2.88 -4.85,3.38z m-22.48,-0.92c1.54,-1.56 1.67,0.46 0,0z m4.91,-2.51c-0.79,-0.93 0.97,-1.15 0,0z m-7.81,-0.87c-2.21,-0.79 -0.04,-1.14 0.54,-0.39 -0.12,0.2 -0.29,0.4 -0.54,0.39z m-17.07,-35.78c-2.05,-1.66 3.84,-4.8 1.02,-1.64 -0.17,0.27 -1.7,3.54 -1.02,1.64z m-2.5,-4.63c-2.27,-0.95 2.99,-3.59 0.8,-5.77 -1.18,-2.59 4.67,-3.55 1.64,-6.24 -1.25,-1.27 -3.7,-1.75 -1.56,-3.41 0.31,-2.43 2.93,-0.92 3.7,-3.21 1.99,-1.8 4.08,2.49 6.12,-0.22 3,-2.82 1.8,3.03 4.59,3.75 2.54,1.72 5.71,1.31 8.59,1.46 1.59,1.71 -1.83,5.17 -3.31,2.87 -1.59,0.83 -4.21,-0.49 -5.46,2.07 -2.23,0.06 -4.36,0.17 -4.68,3.06 -0.43,2.55 -2.87,5.66 -5.23,3.75 -1.9,0.1 -3.3,1.78 -5.2,1.9z","name":"Turkey"},"am":{"path":"m631.96,389.85c-1.96,-0.78 -2.5,-4.05 -4.9,-3.4 0,-2.98 -2.99,-2.85 -3.89,-0.42 -0.72,0.59 -2.05,-1 -2.73,0.47 -1.44,-4.24 -3.82,2.15 -6.08,-0.34 -2.43,-1.36 -5.05,-0.13 -7.33,0.88 -1.6,1.02 -2.24,-1.35 -3.25,-2.19 -0.22,-2.63 -0.35,-6.8 -3.95,-6.8 -1.56,-1.33 3.34,-2.22 3.67,-4.1 2.01,-1.81 4.84,-2.17 7,-3.75 -1.93,-0.72 2.92,-0.35 0.29,0.72 0.12,2.73 3.55,-1.6 5.25,0.33 2.07,0.17 -1.51,3.12 1.09,4.06 1.57,1.97 7.78,-0.09 6.04,3.56 -1.81,0.88 -2.21,2.81 0.36,2.27 2.62,0.26 4.73,3.06 7.3,0.67 1.25,-0.38 -1.56,2.52 0.95,2.4 1.37,0.14 2.22,0.32 0.58,1.07 -0.16,1.55 3.78,3 0.58,4.04l-0.53,0.37 -0.44,0.16 0,0z","name":"Armenia"},"cy":{"path":"m527.35,491.44c-2,0.03 -5.42,-2.87 -2.34,-3.85 0.27,-2.84 4.77,-0.45 3.78,-3.88 -1.1,-2.02 2.82,-0.4 4.03,-1.67 3.21,-1.08 5.34,-3.84 7.9,-5.9 -1.85,1.69 -5.66,5.67 -1.55,7.09 -1.16,0.96 -4.02,1.69 -3.88,3.92 -1.79,0.94 -4.14,2.55 -4.75,3.95 -1.18,-1.33 -2.1,0.23 -3.19,0.34z","name":"Cyprus"},"ie":{"path":"m160.13,300.45c-1.94,-0.73 -5.41,-0.29 -5.93,-1.1 2.68,-0.96 1.02,-3.47 -1.27,-2.29 -2.17,-0.03 4.61,-0.27 1.86,-1.87 -1.29,0.35 -5.82,0.84 -4.6,-0.88 0.33,-2.41 5.15,0.07 4.57,-2.91 -1.5,-0.99 -3.62,0.6 -3.81,-1.26 1.2,-0.91 6.26,2.54 3.91,-0.67 0.38,-1.38 3.44,-1.82 5,-1.34 1.1,0.96 5.65,0.21 3.16,-0.84 -0.11,-2.83 -2.54,-0.03 -3.01,-0.47 -0.23,-0.23 -3.43,-0.5 -1.1,-1.34 2.22,-1.01 0.54,-4 2.82,-3.42 2.56,1.02 3.91,-3.17 0.52,-2.46 -1.68,0.14 -2.56,-0.23 -2,-1.83 -0.18,-2.01 -5.12,-1.21 -3.94,-2.82 2.15,0.5 2.19,-2.65 4.57,-1.69 2.67,-0.16 1.13,-2.7 -0.21,-3.26 0.29,-1.31 0.02,-3.18 -0.75,-3.28 2.65,-0.82 4.91,0.87 5.93,2.56 1.46,-1.86 3.2,1.45 5.23,1.05 -1.45,-1.4 -1.04,-3.03 1.32,-2.78 1.21,-0.78 -0.05,1.72 1.32,2.45 1.11,1.84 4.55,5.05 6.16,2.17 -0.49,-1.92 2.26,-1.77 1.43,0.13 0.94,1.15 1.06,2.27 0.8,3.26 0.63,1.48 4.47,-0.64 2.75,0.86 -2.34,0.42 -0.05,3.2 -0.77,4.83 0.46,1.62 -0.08,2.98 -1.28,2.32 1.02,2.41 1.46,5.54 -0.48,7.61 -1.25,2.01 -3.34,4.38 -4.14,6.02 -2.56,-0.85 -5.09,-0.34 -7.67,-1.06 -1.16,0.41 -0.62,2.52 -2.3,1.42 -1.5,0.14 -2.91,2.49 -3.4,0.19 -2.29,-1.05 -1.04,2.27 -2.69,2.29 -0.11,0.95 -1.6,-1.12 -2.01,0.4z m13.73,-33.46c2.33,-2.06 -0.9,-1.95 -2,-2.14 -1.29,-0.53 -2.55,-1.96 -0.25,-1.08 1.89,0.69 2.47,-1.66 2.15,-3.1 -1.16,-1.71 7.03,-1.16 4.23,1.31 -0.31,1.85 2.66,-0.08 1.09,1.63 -0.53,1.73 -5.09,0.69 -2.83,2.72 -0.77,0.31 -1.61,0.36 -2.38,0.64z m6.45,-5.05c0.02,-0.88 0.61,0.23 0,0z","name":"Ireland"},"gb":{"path":"m182.64,325.46c0.06,-1.95 -4.47,-2.09 -0.74,-2.3 2.67,-0.61 3.94,-3.31 6.49,-4.14 2.12,-0.77 1.4,-4.5 3.94,-3.31 1.45,-3.67 5.43,-1.45 8.06,-0.26 2.91,0.6 2.6,-3.72 5.07,-4.06 1.35,-0.1 4.35,-3.93 1.42,-2.57 -1.86,1.99 -5.05,0.84 -6.82,2.84 -2.27,-0.51 -2.72,-5.62 -5.77,-3.31 0.24,-2.37 -1.53,-4.27 -3.69,-2.44 -0.87,0.75 -2.94,0.79 -1.58,-0.17 0.16,-1.27 -3.6,-0.88 -1.52,-2.98 1.52,-0.74 3.44,0.29 4.82,-1.36 2.13,0.95 4.49,-1.92 5.83,-3.38 1.68,-2.26 0.05,-8.36 -3.37,-5.58 -1.46,1.33 -0.19,-1.41 0.97,-0.91 1.28,-1.84 2.91,-2.79 5,-2.8 1.2,0.32 4.62,-0.54 5.23,2.01 0.71,1.84 0.61,0.28 0.62,-0.81 -0.49,-1.45 0.01,-1.88 0.83,-1.63 -1.44,-2.21 1.58,-2.99 1.67,-4.6 -1.45,-0.49 -1.63,-2.14 0.09,-1.51 0.69,-1.16 0.79,-2.38 1.37,-3.56 -0.63,-2.27 -3.62,2.01 -2.38,-1.12 -0.36,-1.35 -2.39,0.41 -1.46,-1.51 -2.08,-2.31 0.12,-6.19 3.07,-5.98 2.74,-1.73 -0.83,-1.86 -2.08,-2.37 -0.92,0.48 -3.28,2.29 -4.42,1.19 -1.32,1.2 -1.79,-3.4 -3.43,-0.83 0.32,2.13 0.14,1.46 -0.76,0.01 -1.33,-0.68 -2.66,-1.39 -1.32,-3.18 1.13,-2.26 5.13,-4.6 2.33,-7.17 0.52,-2.42 1.47,-4.31 0.99,-6.83 -1.19,-2.25 -5.91,3.7 -3.96,0.19 -1.17,-1.95 1,-2.29 1.54,-3.39 -1.93,-1.31 3.92,-1.92 1.97,-3.06 1.93,-2.14 -1.4,-1.12 -1.91,0.17 -2.64,0.37 -2.78,2.95 -5.17,3.25 1.64,-1.88 1.56,-3.32 4.36,-3.1 0.45,-1.67 -5.98,-1.25 -1.81,-1.19 1.82,-0.7 -1.08,-3.69 1.83,-2.58 2.2,1.18 2.55,-1.86 1.62,-2.28 3.21,-0.32 0.94,-5 -0.12,-6.67 -1.49,-3.19 1.62,1.59 1.66,-1.31 -0.16,-0.99 3.11,1.17 2.06,-1.21 -1.02,-1.19 -0.29,-1.17 0.73,-0.82 0.07,-1.49 0.01,-1.71 1.64,-1.31 1.56,-1.15 -0.74,-2.21 0.86,-3.26 -0.88,-3.08 1.49,-0.59 1.87,-0.27 0.74,0.04 0.92,2.92 2,0.79 2.21,-0.9 6.43,0.18 7.86,0.3 -1.51,1.12 -1.16,3.83 -3.76,4.28 -1.25,1.24 -5.25,2.21 -4.45,4.19 2.02,-0.77 1.46,0.73 0.51,0.2 -2.65,-1.31 -3.91,3.83 -0.65,3.27 1.6,-1 4.76,-1.27 6.96,-0.43 2.15,0.77 9,0.4 6.36,4.13 -2.17,1.32 -1.95,4.3 -3.79,5.88 -1.36,2.24 -3.73,4.99 -6.67,3.85 -2.54,0.88 -0.66,2.52 1.1,1.38 0.78,-0.5 3.15,3.35 0.84,1.99 -2.07,-0.28 -3.16,1.31 -5.18,1.63 -0.02,2.53 4.56,1.95 5.82,1.47 2.3,1.2 3.8,3.55 4.55,5.85 2,2.23 0.13,5.79 1.35,8.49 -0.45,3.02 1.26,4.86 3.81,6.01 1.66,1.49 2.34,4.19 3.57,5.37 -2.57,1.95 1.1,5.12 0.44,6.31 -2.04,-0.08 1.34,3.78 1.3,5.11 0.78,2.24 -5.08,2.32 -2.09,4.71 1.56,2.69 3.3,0.05 4.83,-1 2.51,1.1 6.37,1.79 6.61,5.25 -0.28,2.6 -1.71,7.67 -4.87,6.84 -2.14,0.29 1.39,3.23 -1.35,2.01 -1.64,-1.62 -4.38,2.64 -1.7,1.39 1.98,0.5 -1.21,2.23 -2.35,1.41 -3.04,0.03 -0.52,3.18 1.11,2.57 2.13,-1.55 -0.82,1.67 1.85,1 1.37,0.01 4.16,-1.13 2.4,1.04 0.18,1.94 -3.04,1.77 -3.79,3.01 -3.03,-0.26 -5.14,2.46 -7.81,0.22 -2.14,-0.87 -5.12,1.06 -5.71,-1.04 -0.97,0.35 -1.61,-1.39 -2.37,0.11 -0.34,-1.96 -3.3,-2.15 -1.9,0.13 -1.76,0.29 -4.97,-1.2 -5.38,0.98 -2.03,-0.7 -3.26,-0.69 -4.99,-2.14 -2.67,-1.4 -6.68,-1.13 -6.68,2.71 -0.68,3.61 -3.23,0.34 -4.72,-0.57 -1.81,-0.09 -4.28,-1.13 -5.91,0.19 -1.52,-0.34 -2.18,1.47 -2.78,2.5z m18.76,-70.13c1.65,1.54 3.03,-0.19 0.57,-0.92 -0.47,-0.23 -0.39,0.68 -0.57,0.92z m-3.12,31.93c0.55,0.53 0.27,0.88 0,0z m-1.17,-10.07c0.02,-1.53 3.39,-4.02 1.66,-1.22 -0.39,0.58 -0.96,1.08 -1.66,1.22z m-10.63,-1.73c-1.59,-0.31 -2.08,-2.29 -3.03,-0.36 -1.91,-0.73 1.49,-2.2 -1,-2.29 0.13,-2.31 -2.8,-4.88 -3.79,-2.04 0.08,3.32 -3.97,-0.09 -4.6,-1.78 -1.85,-2.46 4.1,-0.54 2.7,-3.31 3.07,0.55 2.59,-4.32 5.36,-2.92 1.06,-1.19 2,-1.61 3.15,-1.03 2.23,-0.98 4.88,1.21 3.52,3.35 -0.19,2.26 3.15,1.24 0.87,3.27 -2.06,1.44 -0.04,2.03 1.25,1.47 1.84,1.95 -0.91,4.87 -2.77,3.75 -0.28,0.8 -0.67,1.84 -1.67,1.88z m10.61,-7.92c-1.67,-0.09 0.88,-0.41 0,0z m-4.29,-6.97c1.08,-0.83 2.3,-4.85 2.33,-3.8 -0.86,1.14 -0.52,3.62 -2.33,3.8z m2.73,-6.13c0.35,-1.24 0.97,-0.17 0,0l0,0z m-3.97,-25.03c-1.05,-1.04 1.79,-1.33 0,0z m1.85,-1.48c-0.51,-1.01 -1.32,-1.32 -0.4,-1.6 -1.54,-1.3 0.12,-2.32 1.22,-0.9 1.22,-0.53 0.35,-2.59 1.9,-1.78 0.84,-0.86 3.02,-1.98 1.27,-0.28 -1.41,1.61 -1.17,5.41 -3.42,2.95 -0.74,0.32 -0.1,1.35 -0.58,1.61z m38.33,-20.76c-1.93,-1.65 4.17,-0.89 0.99,-0.51l-0.47,0.12 -0.53,0.39 0,0z","name":"United Kingdom"},"ch":{"path":"m292.05,389.98c-1.12,-2.03 -1.49,-3.96 -4.14,-4.68 0.24,-1.27 0.28,-4.19 -2.02,-2.48 -2.76,1.07 -0.98,6.19 -4.8,5.6 -1.34,-2.05 -4.35,2.18 -5.85,-0.49 -0.66,-1.9 -1.54,-2.82 -1.22,-5.23 -0.26,-1.58 -4.49,-1.34 -5.35,0.35 0,0.96 -0.92,3.04 -1.36,2.14 2.08,-0.65 -0.4,-3.99 1.78,-5.21 1.94,-0.57 2.18,-1.6 2.3,-3.5 2.42,-0.82 3.23,-3.53 5.4,-5.02 0.92,-1.36 3.51,-0.53 3.7,-1.93 2.51,-0.36 5.31,-0.33 7.48,-0.01 1.57,-0.63 0.5,-2.03 0.36,-2.23 1.31,-1.57 1.36,1.33 2.5,0.98 1.1,0.96 4.91,-0.68 5.97,2.04 0.36,1.7 -2.95,6.33 1.28,6.08 1.9,0.87 4.09,3.47 5.78,0.3 -0.28,1.18 -0.17,4.33 -0.42,4.42 -1.87,-2.39 -4.17,0.79 -2.27,2.33 0.4,3.64 -0.7,-1.85 -2.69,-0.06 -1.62,2.46 -2.25,-1.46 -3.43,-1.76 -2.43,0.76 -0.07,4.33 -2.78,4.97 -1.02,0.89 -0.72,2.33 -0.22,3.4z M275.63,370.8c0.49,-1.83 2.92,0.14 0.45,0.04l-0.53,0.11 0.08,-0.14 0,0z","name":"Switzerland"},"at":{"path":"m338.89,381.72c-2.92,-0.37 -5.68,-0.8 -8.68,-1.29 -3.41,-0.44 -7.47,0 -10.13,-2.59 -0.49,-1.79 -2.01,-0.99 -0.74,-2.9 -1.54,-1.34 -4.15,1.63 -6.36,0.74 -2.58,-0.56 -3.71,1.14 -4.67,3.02 -0.77,-1.61 -4.07,-0.58 -3.15,-2.45 -2.02,-1.72 -4.43,3.34 -5.34,-0.45 -2.71,0.05 -3.32,-2.5 -1.76,-4.48 -0.11,-1.92 0.65,-1.26 2.03,-1.24 0.77,2.34 2.91,4.54 4.57,1.3 -0.46,-2.13 1.09,-1.56 2.51,-1.62 1.01,3.44 4.52,1.32 6.34,0.3 1.07,-2.1 5.55,-0.39 5.96,-2.32 1.02,0.88 3.01,0.37 3.69,0.59 0.18,3.89 5.07,0.73 2.69,-1.53 -0.2,-1.43 -1.39,-3.39 -2.11,-5.03 1.93,-1.47 5.36,-2.58 5.54,-5.05 1.88,0.9 2.55,-1.98 3.13,-1.73 2,1.9 4.33,0.91 6.33,0.45 0.7,-1.97 2.92,-2.39 2.31,-5.03 1.96,0.92 4.91,0.17 6.97,1.75 1.9,2.39 4.37,-0.77 6.11,0.38 1.43,-0.03 2.77,1.31 1.21,2.94 -0.45,2.79 3.86,4.35 2.35,7.1 1.97,3.48 -4.51,0.08 -4.56,2.79 1.63,1.11 3.27,1.96 0.42,2.95 -0.98,1.81 1.97,4.01 -0.88,5.49 -1.01,1.14 -3.1,1.64 -2.24,3.63 -2.75,-0.79 -4.87,2.27 -7.7,0.89 -1.89,0.31 -2.39,2.61 -3.87,3.38z","name":"Austria"},"cz":{"path":"m335.18,355.05c-3.65,-0.41 -4.96,-4.57 -8.41,-5.66 -1.31,-1.75 -2.19,-2.91 -4.32,-3.66 -1.8,-1.56 -2.64,-3.53 -1.6,-5.57 -0.16,-1.57 -4.02,-3.53 -3.2,-4.17 1.42,3.2 2.44,-2.24 4.26,-2.25 1.35,1.3 3.09,-0.63 3.77,-1.12 1.58,-1.86 4.18,-2.74 6.59,-3.91 1.63,-0.69 3.11,-2.35 4.59,-0.56 2.65,1.13 2.61,-4.69 4.17,-1.06 1.38,1.66 3.64,0.69 5.11,2.36 0.67,1.75 5.33,-1.17 2.84,1.24 -1.67,2.06 2.09,2.81 2.61,4.74 2.09,1.86 2.12,-0.93 3.96,-1.42 0.43,-1.39 -1.9,-2.7 0.65,-1.55 1.23,1.3 3.29,0.96 4.4,0.53 -3.27,0.95 2.17,5.16 3.09,2.65 2.93,0.44 4.53,2.63 6.07,4.63 -2.15,1.71 -4.92,3.04 -5,6.15 -1.22,2.56 -3.35,3.75 -6.24,3.67 -1.85,1 -3.16,2.67 -5.05,0.79 -2.11,1.83 -4.69,0.96 -6.9,-0.42 -1.92,-1.1 -4.07,-0.45 -5.85,-0.93 -0.34,2.31 -2.03,3.48 -2.87,5.34 -1.07,-1.47 -1.28,0.34 -2.66,0.17z m-0.68,-28.45c-2.43,-2.03 2.32,0.24 0,0z","name":"Czech Republic"},"sk":{"path":"m364.44,362.94c-2.39,-2.37 -6.56,-2.63 -7.73,-6.02 -0.46,-2.43 0.4,-6.56 3.64,-6.16 3.23,0.29 4.91,-3 5.9,-5.48 0.17,-1.96 3.95,-5.08 5.19,-3.02 2.43,1.82 3.49,-4.97 4.66,-0.89 1.56,0.35 1.91,0.85 1.91,2.52 2.64,1.02 3.89,-1.84 5.57,-3.22 1.58,-0.07 4.26,1.88 5.1,-0.34 0.99,-1.59 4.74,-1.57 6.47,-0.13 1.28,2.35 6.24,0.73 4.22,4.32 -1.5,2.17 -0.53,7.67 -4.43,6.22 -0.53,-3.18 -3.88,-1.31 -5.83,-0.46 -2.77,-2.02 -4.98,0.68 -5.07,3.51 -1.08,0.67 -2.09,-0.14 -2.29,1.79 -1.29,1.17 -3.96,-2.16 -4.46,1.1 -0.72,2.43 -5.78,-0.07 -5.66,3.66 1.11,2.54 -4.04,1.94 -5.84,2.51 -0.44,0.04 -0.88,0.07 -1.32,0.1z","name":"Slovakia"},"hu":{"path":"m369.77,387.01c-2.75,-0.58 -5.39,-1.37 -7.78,-2.73 -2.27,-2.63 -5.77,-3.91 -7.5,-7.04 -1.21,-1.85 -2.06,-2.65 0.1,-3.74 1.43,-1.97 -1.64,-4.55 1.32,-5.48 2.04,-1.7 -3.3,-3.48 -0.09,-2.71 2.81,1.04 3.86,-1.91 3.11,-3.93 1.93,-1.05 3.43,2.43 5.44,2.58 3.24,-0.18 6.53,-0.68 9.48,-2.09 -2.94,-1.84 0.68,-3.88 2.85,-2.99 1.75,-0.27 1.26,-4.31 3.33,-2 2.26,0.8 3.01,-1.99 4.8,-2.5 0.41,-2.48 1.52,-4.92 4.25,-3.08 1.93,-0.18 4.28,-2.95 5.05,0.14 2.1,1.7 4.8,-1.81 6.38,0.84 2.12,-0.07 1.45,3.23 3.34,1.35 3.46,3.21 -4.18,3.49 -4.55,6.38 0.35,2.87 -2.65,4.72 -2.5,7.52 0.37,3.17 -2.46,5.43 -2.51,8.54 0.01,3.02 -4.16,0.17 -4.1,3.12 -3.14,1.57 -7.09,0.21 -9.73,1.82 -1.24,2.36 -3.12,1.16 -4.53,3 -2.57,0.36 -3.31,3.42 -6.16,3.01z","name":"Hungary"},"lt":{"path":"m397.76,280.99c-1.28,-1.32 -1.63,-4.58 -4.11,-3.7 -1.13,-2.07 -4.01,-0.28 -3.26,-3.14 1.62,-3.48 -2.4,-7.19 -5.64,-5.13 -2.28,0.26 -5.13,-1.48 -6.05,-2.17 -0.51,-2.23 -1.53,-3.51 -2.2,-5.4 -1.37,-2.68 1.24,-5.63 3.5,-7 1.88,-1.44 4.85,-0.65 6.6,-1.37 0.56,-1.26 2.33,2.09 2.82,-0.31 2.06,-0.86 4.97,0.1 6.62,-0.3 1.76,-0.28 3.35,-0.61 3.78,-2.83 1.19,2.4 3.3,3.12 5.7,2.26 2.79,0.52 4.16,3.86 7.04,4.08 1.64,1.42 -0.82,5.15 2.39,4.69 0.41,1.84 -3.75,0.79 -2.82,3.52 -2.05,1.6 -2.93,3.79 -1.88,6.23 -0.12,2.13 -0.68,3.69 -2.75,4.26 -0.43,1.13 -0.04,1.82 -1.97,2.11 -0.51,1.51 -1.38,2.09 -2.67,3.35 -1.72,-1.32 -3.41,0.53 -5.09,0.87z m13.27,-5.67c-0.11,-1.17 -1.77,-2.09 0.31,-1.22 0.43,0.34 0.36,1.19 -0.31,1.22z","name":"Lithuania"},"lv":{"path":"m375.49,257.31c-1.25,-2.79 -1.57,-6.54 -0.19,-9.24 2.63,-2.07 -0.8,-6.67 2.34,-8.6 1.69,0.07 4.11,-4.27 4.4,-1.32 2.44,1.48 4.79,3.19 5.76,5.78 2.55,1.96 6.17,0.07 7.13,-2.71 1.39,-2.75 -1.14,-5.3 -1.86,-7.82 1.34,-1.86 3.66,-3.57 5.64,-3.47 0.08,-0.9 1.63,1.08 2.69,0.67 1.72,0.06 3.13,2.25 4.97,3.22 2.21,0.36 3.53,-2.11 5.72,-1.12 1.76,-0.72 2.78,1.38 4.4,2.33 -0.55,1.5 -1.61,1.77 0.06,2.4 -0.17,1.1 -0.46,3.72 1.44,2.57 1.53,2.66 6.04,5.32 2.65,8.5 -1.42,1.56 -0.49,4.51 -3.48,3.69 -2.28,0.64 -3.94,4.9 -6.51,1.93 -2.03,-2.26 -5.06,-3.95 -7.91,-2.78 -1.1,-1.49 -3.6,-4.26 -4.46,-0.94 -1.47,1.77 -5.35,0.57 -7.87,1.17 -1.87,0.26 -2.16,0.89 -3.44,-0.06 -2.37,1.98 -6.1,0.17 -8.37,2.54 -1.6,0.14 -2,4.17 -3.11,3.25z","name":"Latvia"},"md":{"path":"m454.92,374.42c-0.33,-2.09 -1.86,-4.78 -2.23,-7.4 0.38,-3.56 0.07,-7.47 -2.96,-9.91 -3.2,-3.43 -7.96,-5.44 -9.93,-9.93 -0.24,-2.34 -6.31,-3.34 -2.39,-4.03 2.67,0.33 3.73,-3.48 6.57,-2.14 1.32,0.97 1.83,2.54 3.78,1.18 -0.02,0.82 2.42,2.73 2.56,0.37 1.33,-1.44 3.96,3.6 4.43,1.55 1.2,-1.55 0.65,3.03 1.22,3.93 0.07,2.32 4.57,4.13 4.42,2.59 -0.43,1.81 0.64,4.31 3.01,4.64 2.61,-0.41 1.35,4.32 2.84,4.34 -0.24,1.12 -3.35,-2.1 -2.5,0.78 -1.04,0.18 -2.3,-2.64 -2.02,-0.03 -1.22,0.21 -2.31,-1.71 -3.62,0.36 -1.34,1.85 1.39,3.73 0.77,5.48 -0.5,2.25 -2.95,4.34 -2.23,7.32 -0.82,-0.46 -1.48,0.35 -1.72,0.91z","name":"Moldova"},"ro":{"path":"m414.71,404.53c-2.94,-0.37 2.3,-2.82 -0.89,-3.86 -1.36,-0.38 -6.12,-1.72 -3.63,-3.39 3.62,-1.4 -2.29,-3.42 -3.82,-3.63 -1.25,0.73 1.78,4.33 -1.06,3.46 -0.47,-2.42 -4.24,0.23 -4.49,-2.27 -1.54,0.07 -1.87,0.1 -0.31,-0.74 0.46,-1.41 -2.15,-1.17 -0.71,-2.27 0.07,-4.02 -6.25,-1.24 -6.86,-4.86 0.56,-2.93 -2.25,-4.23 -4.45,-5.46 -1.23,-1.35 3.36,-1.23 3.59,-2.71 4.37,0.45 2.54,-4.6 4.68,-6.55 1.28,-2.95 0.7,-6.3 2.76,-8.97 0.62,-2.75 1.58,-5.21 4.69,-5.79 2.24,-1.25 2.4,-5.8 5.34,-3.67 2.44,-0.6 4.8,0.38 7.17,-0.21 2.51,-1.94 3.7,1.15 5.91,1.18 2.03,-1.31 2.68,-4.39 5.67,-3.96 2.31,-0.28 4.86,-1.95 4.49,-4.32 1.75,-2.97 4.98,-1.01 6.29,1.29 1.93,4.74 7.06,6.72 10.28,10.39 2.93,2.37 2.34,6.09 2.36,9.35 0.53,2.52 1.69,4.86 1.92,7.13 1.82,1.67 4.12,3.74 6.83,2.36 1.37,-1.24 4.51,-5.35 6.51,-2.84 1.18,1.97 2.1,5.63 -1.2,6.33 -1.85,1.04 -1.42,-3.67 -3.88,-1.61 -1.51,1.92 1.84,2.51 -0.11,4.51 -0.61,2.57 2.04,-0.86 0.82,1.98 -2.28,2.63 -0.38,5.59 -0.04,8.5 -1.15,2.51 -5.2,-0 -6.02,-1.11 -1.09,1.46 -1.67,-0.92 -3.54,0.54 -1.82,0.49 -3.31,-1.46 -5.44,0.01 -3.08,1.35 -6.52,2.81 -8.17,5.95 -1.31,3.55 -4.97,3.29 -8.01,2.77 -2.75,-0.48 -4.92,1.71 -7.44,1.75 -2.74,-0.25 -5.83,-1.37 -8.31,0.42l-0.52,0.24 -0.43,0.06 0,0z","name":"Romania"},"bg":{"path":"m419.98,434.43c-0.77,-1.6 0.33,-5.03 -1.67,-6.74 -1.14,-2.34 -7.05,-2.04 -4.41,-5.19 -0.49,-1.45 -2.46,-4.37 -1,-5.23 2.16,0.54 4.75,-3.78 2.92,-5.59 -2.57,-1.55 -5.66,-2.78 -5.98,-6.24 -0.97,-2.47 2.74,-1.99 1.69,-4.32 2.08,-0.06 3.2,1.11 1.22,2.59 -0.15,3.28 3.83,0.6 5.65,0.71 2.58,-0.64 5.13,0.94 7.65,0.08 2.61,-1.18 5.46,-2.28 8.27,-1.01 3.32,0.37 5.6,-2.51 6.93,-5.13 2.16,-2.35 5.29,-3.61 8.27,-4.56 1.69,0.75 3.92,0.92 5.2,0.32 0.77,1.61 2.46,-1.39 3.17,1.07 1.58,2.18 6.09,-1.71 5.26,2.45 0.21,2.63 -4.48,0.38 -4.02,3.94 -1.88,1.85 1.39,5.32 -0.17,7.14 -1.24,1.25 -1.7,3.03 -2.93,4.26 0.82,1.66 4.27,-0.37 3.64,2.02 1.44,0.86 3.71,1.89 1.23,2.18 -1.9,3.08 -4.18,-1.08 -6.49,0.5 -1.52,1.95 -4.37,1.58 -4.82,4.55 -1.37,1.04 -4.43,1.49 -2.91,4.13 3.08,3.26 -3.78,2.7 -5.13,4.68 -1.95,0.62 -4.22,-2.41 -5.93,-0.29 -2.04,-2.63 -5.18,-1.43 -7.46,0.15 -2.06,2.52 -5.54,1.17 -7.76,3.47l-0.43,0.06 0,0z","name":"Bulgaria"},"al":{"path":"m396.5,458.88c-2.16,0.08 -0.81,-2.55 -2.74,-3.41 -0.91,-2.13 -5.81,-2.06 -5.48,-3.81 2.36,-1.04 -1.62,-3.19 -0.48,-4.99 0.36,-1.26 2.66,-2.2 0.57,-3.3 1.39,-2.49 -3.57,-5.96 0.77,-6.52 2.37,-0.03 -1.92,-0.89 -0.55,-2.51 -0.14,-2.15 -3.24,-0.23 -2.21,-2.9 -1.48,-2.28 0.07,-4.41 1.36,-6.71 1.01,3.42 4.23,-2.13 4.66,1.78 1.21,1.69 4.6,1.07 3.88,4.25 -0.33,2.87 -0.02,5.6 0.51,8.19 0.21,1.77 2.38,5.51 4.15,4.74 1.69,-0.32 2.5,4.45 0.05,5.02 -0.86,1.75 -0.27,5.37 -3.24,5.56 -2.01,1.26 1.3,2.75 -0.81,3.98l-0.23,0.5 -0.19,0.12 0,0z","name":"Albania"},"ee":{"path":"m378.18,234.33c-0.29,-1.42 0.77,-0.85 0,0z m29.34,-1.46c-2.55,-0.18 -3.15,-3.15 -5.39,-3.23 -0.21,-1.76 -1.21,1.44 -2.27,-0.65 -2.12,-1.63 -4.52,1.21 -6.27,2.48 -1.26,-0.67 1.67,-5.98 -1.81,-5.74 -1.1,1.92 -1.82,2.36 -3.83,1.3 -0.08,-2.54 -3.43,-2.95 -2.01,-5.67 0.96,-2.03 -3.8,-2.6 -0.62,-3.95 1.35,-0.61 4.23,-0.97 2.3,-2.67 2.82,-0.9 4.5,-2.4 7.47,-2.41 1.66,-0.56 1.5,-2.75 3.42,-1.67 0.91,-1.72 4.64,0.07 6.63,-0.66 2.13,-0.1 4.26,0.22 6.03,-1.29 -1.43,2.67 -1.02,5.84 -2.24,8.62 2.11,2.2 1.2,5.64 3.15,7.83 0.24,0.52 1.89,2.24 1.35,2.38 -0.73,0.83 -0.81,2.27 -1.35,2.68 1.66,2.85 -2.28,0.25 -2.89,1.26 -0.29,0.68 -0.83,1.4 -1.65,1.38z m-28.89,-1.28c-1.29,-0.43 -2.59,-1.4 -0.92,-2.29 -0.22,-0.67 0.59,-1.5 0.99,-0.78 -0.53,-2.4 4.69,-3.37 4.19,-1.27 0.07,2.48 -3,2.5 -4.26,4.33z m1.02,-7.14c-0.54,-0.34 -0.96,-2.14 -1.01,-2.27 0.8,-1.29 0.79,-1.32 2,-0.55 1.89,-0.4 1.35,1.06 -0.17,0.69 0.83,0.84 0.55,2.1 -0.81,2.14z","name":"Estonia"},"lb":{"path":"m557.2,501.39c0.58,-2.8 0.32,-5.88 1.17,-8.53 -0.92,-2.02 1.77,-3.87 0.09,-5.88 -0.28,-2.6 2.65,-3.83 2.23,-6.01 1.03,-0.93 3.35,-2.1 2.42,0.09 1.64,0.57 3.96,0.89 3.49,3.25 -1.11,1.34 -2.61,3.51 -1.84,4.51 -2.48,0.69 -2.89,3.8 -1.53,5.08 -0.04,2.15 -2.43,3.34 -3.12,4.26 0.57,1.87 -1.28,3.1 -2.91,3.25z","name":"Lebanon"},"ad":{"path":"m225.99,427.08c-4.4,2.06 -0.81,-5.33 0.49,-0.98l-0.2,0.53 -0.29,0.45z","name":"Andorra"},"sm":{"path":"m321.66,413.68c0.71,-2.83 1.59,1.21 0,0z","name":"San Marino"},"mc":{"path":"m273.92,416.64c-2.8,-1.65 2.23,-1.64 0.39,-0.13l-0.39,0.13 0,0z","name":"Monaco"},"lu":{"path":"m268.7,344.38c-1.34,-0.37 0.48,-2.79 -0.9,-3.99 -1.47,-1.94 2.76,-5.38 1.98,-1.49 0.37,1.78 4.79,2.33 1.84,4.09 -0.47,1.66 -1.49,1.22 -2.93,1.39z","name":"Luxembourg"},"fr":{"path":"m292.72,444.55c-0.12,-2 -3.86,-0.94 -2.75,-2.99 -2.34,-0.62 -0.11,-2.51 0.75,-3.57 0.35,-0.55 -3.76,1.07 -1.24,-0.63 0.32,-1.34 -2.6,-2.05 -0.51,-3.01 -0.25,-1.14 -1.13,-1.51 -0.02,-1.71 -0.89,-2.66 3.14,-1.71 3.48,-3.51 1.94,0.96 2.98,-0.2 2.33,-2.11 1.79,-2.18 -0.99,3.51 1.02,4.43 1.2,3.29 -2.09,6.35 -1.33,9.73 -0.95,0.89 -1.15,2.64 -1.75,3.36z m-58.87,-15.16c-2.27,-2.01 -5.59,-0.28 -7.2,-2.87 1.48,-2.11 -2.14,-2.13 -2.92,-2.19 -1.78,-1.34 -3.82,-2.36 -5.67,-3.53 -1.54,0.58 -1.53,2.27 -3.51,1.46 -1.54,0.07 -2.66,-0.59 -3.93,-0.35 -0.8,-2.33 -2.93,-1.69 -4.53,-2.09 -1.06,-2 -2.81,-3.32 -5.06,-3.18 -1.57,-1.15 -1.33,-1.7 -1.45,-3.5 -1.23,-0.24 -3.44,-0.96 -1.02,-1.55 3.04,-3.75 2.96,-8.84 4.5,-13.21 0.85,-1.4 2.99,0.68 2.08,-1.85 -1.2,-1.06 -2.14,-0.84 -1.15,-2.81 1.1,-1.59 0.63,-5.99 2.35,-6.1 1.89,1.55 0.82,3.87 1.88,5.79 -0.05,2.01 2.7,3.12 1.93,0.38 -2.25,-2.11 -0.08,-5.11 -2.23,-7.23 -1.52,-1.07 -0.74,-1.21 -0.52,-2.39 -2.12,-1.87 0.87,-2.79 -0.3,-5.08 -0.91,-0.78 2.06,-4.15 0.31,-2.92 -1.7,1.58 -2.8,-0.99 -4.34,-1.54 -1.66,-0.48 -1.34,-4.04 -3.07,-5.27 1.45,-1.37 2.03,-3.5 -0.17,-4.21 -1.28,-1.38 -1.85,-1.7 -0.64,-3.42 1.28,-3.05 -5.85,-0.88 -2.14,-2.3 -0.4,-2.26 -4.49,0.28 -3.4,-2.31 -0.36,-2.67 -3.56,0.62 -4,-1.74 -2.28,-0.09 -2.42,-4.2 -4.81,-1.84 -1.78,1.57 -0.33,-2.39 -2.37,-2.56 1.59,0.62 3.87,-0.51 1.92,-2.13 1.84,1.1 2.88,-0.7 0.65,-1.01 0.13,0.05 1.59,-2.28 -0.46,-1.5 -1.34,1.45 -4.19,-0.07 -1.73,-1.25 1.3,-0.76 2.79,-0.81 2.95,-0 1.4,-0.85 2.87,-0.97 3.66,0.09 0.65,-1.02 3.21,1.35 3.19,-1.26 2.43,-1.62 2.22,2.03 2.47,2.06 1.69,-2.75 1.86,2.19 3.17,3.11 1.26,-0.74 3.83,-3.16 3.73,-0.14 1.62,2.63 2.82,-1.65 4.78,0.11 0.83,-0.47 4.32,1.06 3.36,-0.07 -1.65,-1.65 -2.42,-4.02 -1.35,-6.19 0.76,-2.4 -2.42,-4.6 -1.19,-7.04 1.21,1.81 5.2,-0.98 3.31,2.03 -0.19,2.43 1.93,3.76 3.68,2.84 2.59,0.56 5.12,3.56 7.68,1.11 2.16,-0.17 1.32,-1.39 0.53,-2.64 1.54,-3 5.41,-2.03 8.05,-3.16 1.81,-0.67 4.58,-1.88 5.31,-3.4 -1.75,-1.03 0.04,-4.18 -0.3,-6.15 0.44,-3.1 4.2,-2.36 6.44,-2.8 0.98,0.77 1.49,6.24 4.58,4.17 1.46,-0.35 0.7,4.82 3.67,3.62 -0.14,3.07 3.12,1.53 4.18,2.82 -0.64,1.44 -0.56,1.83 -0.25,2.78 -0.88,2.67 3.93,2.4 4.83,0.49 0.88,1.69 -1.1,3.55 1.66,3.61 2.55,0.29 2.49,4.49 5.21,3.37 2.65,1.52 6.43,-0.33 7.5,3.53 0.45,0.9 2.96,3.41 2.01,0.96 0.54,-1.16 0.79,1.42 0.5,1.49 1.47,-0.3 3.92,-1.81 4.53,0.32 1.92,0.28 7.08,0.84 3.22,2.94 -2.39,2.02 -1.66,5.55 -3.51,7.88 -0.4,2.45 -0.29,5.21 -1.25,7.67 -1.85,0.33 -4.65,-1.22 -4.94,2.33 0.2,1.24 -1.59,3.49 -3.64,4.12 -0.97,0.48 0.4,3.01 -1.75,3.44 -3.21,1.4 -0.53,4.69 -2.87,6.5 1.14,2.08 4.46,-0.29 3.63,-2.44 2.64,-1.79 4.27,0.65 3.32,3.02 0.97,1.33 2.7,2.42 0.16,3.24 -1.7,2.56 4.01,4.8 1.9,7.11 -0.78,1.84 -6.17,0.54 -3.47,3.57 1.68,1.38 4.39,3.16 1.43,4.85 -1.24,3.13 2.12,7 5.6,6.15 2.64,-0.69 -0.62,4.28 -2,4.64 -1.17,-0.72 -4.03,-3.03 -4.38,0.05 0.55,1.28 1.71,2.84 -0.72,3.26 -2.25,0.54 -0.87,3.61 -3.15,2.9 -1.62,1.27 -2.66,0.82 -4.12,0.04 -1.35,1.82 -1.33,-1.1 -3.38,-0.87 -2.84,0.75 -0.64,-3.44 -1.53,-2.84 -0.63,0.89 -3.09,1.3 -1.09,0.56 1.49,-2.74 -3.49,-2.8 -2.54,-0.31 -2.24,0.5 -1.46,-2.79 -1.57,-3.36 -1.08,1.05 -1.96,2.65 -0.52,3.91 -1.04,-0.28 -1.31,-2.83 -3.36,-2.08 -2.5,-1.7 -5.52,-1.71 -6.96,1.2 -2.68,0.79 -5.03,2.02 -5.69,4.77 0.13,1.89 -0.47,3.75 0.65,5.49 -1.42,-0.84 -3.32,-0.38 -4.33,0.88z","name":"France"},"li":{"path":"m296.51,373.48c1.45,1.4 -0.83,3.11 -0.11,0.58 0.04,-0.19 0.08,-0.38 0.11,-0.58z","name":"Liechtenstein"},"nl":{"path":"m269.04,328.72c-2.4,0.87 -0.84,-4.47 0.3,-2.01 0.8,0.23 0,1.75 -0.3,2.01z m-0.07,-3.78c0.6,-3.32 -5.02,-1.6 -5.27,-4.51 -0.12,-2.74 -3.14,1.24 -2.06,-1.29 -0.99,-0.79 -2.22,1.2 -3.22,-0.45 -0.9,0.27 -1.14,2.68 -1.08,0.81 0.68,-2.17 -1.32,-2.87 -3.53,-3.17 2.34,0.11 2.58,-2.07 3,-3.35 2.89,-2.17 4.59,-5.57 4.61,-9.18 -0.19,-3.29 4.06,-0.89 5.3,-3.43 1.14,-2.76 4.56,-2.87 7.04,-3.65 2.21,-0.91 4.28,0.51 5.07,2.25 2.56,1.19 -1.21,4.26 -0.45,6.54 -1.09,0.31 -2.87,-0.17 -2.83,1.81 -1.46,0.58 -1.58,0.91 0.09,0.93 3.35,-0.05 2.57,4.59 -0.38,4.58 -2.35,0.19 2.62,1.25 -0.12,2.19 -2.05,1.07 -3.43,-1.35 -5.33,0.59 -1.38,2.19 2.97,4.39 0.94,6.8 -0.8,0.77 -1.72,1.2 -0.27,1.66 -0.44,0.36 -0.82,1.02 -1.51,0.87z m-14.99,-3c-0.33,-1.2 -5.07,-0.99 -2.8,-1.87 1.14,1.13 2.85,1.22 3.93,0.81 -0.06,0.56 -0.57,1.04 -1.13,1.06z m0.03,-2.7c-1.37,-0.05 -4.02,-1.94 -1,-1.43 0.49,-0.33 2.23,1.73 1,1.43z","name":"Netherlands"},"ba":{"path":"m376.75,425.9c-1.98,-1.6 -4.83,-1.93 -6.41,-4.05 -1.67,0.65 -0.52,0.38 -0.54,-0.48 -1.09,-2.31 -4.84,-2.74 -4.68,-5.7 -3.06,-0.33 -4.09,-3.71 -6.36,-5.29 -1.63,-1.9 -4.06,-2.19 -3.82,-4.87 -1.04,-2.44 -3.06,-3.46 -4.21,-5.63 -0.7,-2.04 0.84,-4.87 2.73,-2.36 1.15,1.84 2.68,1.49 3.04,-0.59 0.75,-2.51 2.6,0.54 3.87,-1.57 1.61,1.11 3.76,0.32 5.58,0.98 1.67,0.69 2.8,0.63 3.98,-0.64 1.28,0.32 2.43,1.79 1.94,-0.33 2.34,0.41 3.8,0.76 5.26,2.77 1.51,0.59 4.58,-2.46 3.33,0.9 -1.48,2.62 -1.55,6.27 2.2,6.4 -0.16,1.48 3,1.5 0.7,2.04 -2.41,-1.63 -1.77,2 -0.04,2.77 1.22,1.2 1.32,2.1 -0.54,1.97 -0.8,1.43 -2.82,1.15 -3.55,0.9 0.15,1.26 1.77,2.85 -0.32,2.67 -1.22,1.98 -1.74,4.24 -3.03,5.92 0.2,1.48 1.25,2.79 0.88,4.2z","name":"Bosnia and Herzegovina"},"si":{"path":"m332.96,393.93c-2.25,0.07 3.69,-1.78 0.33,-3.25 -2.05,-0.05 -1.39,-3.19 -2.18,-3.5 2.21,-1.77 -0.2,-2.6 -1.36,-3.11 1.58,-3.35 4.85,-1.64 7.7,-1.58 3.3,1.9 3.73,-4.65 7.02,-2.86 2.43,0.1 4.45,-1.78 6.8,-1.33 -0.07,-1.25 0.26,-3.28 1.79,-1.82 0.58,1.34 2.29,2.96 -0.11,2.97 0.07,3.17 -6.44,2.43 -4.97,6.04 0.89,1.87 0.62,3.86 -1.85,3.13 -2.37,0.85 1.33,6.35 -2.15,4.17 -1.76,0.02 -2.78,0.57 -3.81,-1.48 -1.83,-1 -1.59,2.92 -3.88,1.76 -1.41,-0.46 -2.2,0.65 -3.34,0.85z","name":"Slovenia"},"mk":{"path":"m403.18,443.19c-1.28,-0.84 -1.77,-0.72 -3.14,-0.4 -2.27,-2.33 -2.73,-5.58 -2.85,-8.64 -1.26,-2.44 2.39,-0.6 1.33,-3.13 0.23,-2.42 3.43,-3.85 5.06,-1.8 1.38,1.18 -1.35,-3.28 1.33,-2.73 2.83,0.6 4.67,-2.89 7.49,-1.79 1.51,2.18 4.77,1.95 5.79,4.72 1.29,2.63 0.37,4.95 -1.12,7.01 -1.05,2.69 -5.33,0.11 -7.05,2.7 -0.97,2.88 -4.09,3.39 -6.84,4.04z","name":"Macedonia"},"hr":{"path":"m375.93,426.49c-1.17,-0.64 -1.03,-0.77 0,0z m-5.08,-2.9c-0.73,0.27 -1.25,-2.08 0,0z m-2.28,-1.81c-3.23,-1.04 -5.06,-4.7 -8.53,-5.08 -1.74,-1.23 -4.13,-1.36 -6.19,-0.38 -0.54,-3.7 -5.51,-3.9 -7.37,-6.92 -1.68,-2.86 2.16,-0.38 2.91,-1.43 -1.18,-2.05 -5.06,-2.05 -5.62,-5.05 0.07,-2.45 -0.12,-5.23 -2.77,-6.41 -1.46,-3.02 -5.35,-1.33 -4.75,1.8 -0.1,1.22 -1.81,1.15 -1.78,3.18 -0.42,-0.02 -2.43,-3.25 -2.8,-4.77 0.5,-1.41 -1.33,-2.59 0.97,-1.85 1.93,-0.05 3.32,-1.26 5.49,-0.87 1.75,-0.28 1.19,-2.99 2.55,-0.54 1.83,1.65 2.98,0.1 5.14,0.7 1.63,-0.59 0.6,-2.35 1.05,-3.41 -2.13,-1.84 3.84,-0.57 2.93,-3.42 -1.1,-1.62 -1.88,-3.53 0.82,-4.04 1.16,-1.26 3.54,-0.9 3.14,-3.3 3.59,0.79 6.21,3.61 8.62,6.19 2.91,-0.18 5.33,2.55 8.31,1.69 2.32,0.95 5.06,-5.2 5.33,-0.4 0.15,1.9 1.2,2.64 1.4,4.46 1.55,0.76 2.24,0.37 1.04,2.01 -0.17,1.69 1.08,1.86 -0.44,2.99 -1.42,0.96 -2.53,-3.66 -4.34,-2.06 -2.98,-1.4 -5.14,1.63 -8.13,0.38 -2.22,0.17 -4.52,-1.28 -6.44,-0.34 -1.8,-0.84 -3.54,0.72 -3.99,2.64 -1.51,-1.59 -4.97,-3.78 -5.35,0.02 -1.16,3.92 2.99,5.58 4.38,8.58 -0.13,1.41 -1.05,2.05 0.83,2.59 2.9,1.5 4.8,4.21 6.98,6.53 2.65,1.59 3.98,4.49 6.78,6.28l-0.16,0.23 0,0z","name":"Croatia"},"dk":{"path":"m311.37,281.37c-1.81,-0.13 -3.63,-2.95 -0.99,-2.75 0.71,0.89 2.21,0.72 1.2,1.27 0.93,0.68 0.95,1.07 -0.21,1.48z m2.12,-1.04c1.35,-0.18 -0.34,1.13 0,0z m0.84,-0.24c-0.07,-1 -2.35,-2.59 0.16,-1.62 2.08,0.28 -0.51,1.71 -0.16,1.62z m-17.99,-0.84c-2.31,-0.88 -6.15,-0.22 -4.5,-3.71 0.81,-2.84 -1.69,-4.3 -3.84,-4.7 -1.19,-2.12 0.77,-2.92 1.79,-2.7 1.1,-1.9 -0.71,-4.04 -1.69,-4.68 0.35,-1.37 0.2,-5.41 0.68,-4.97 1.59,3.78 6.34,-5.25 4.96,-0.56 0.24,2.86 4.45,-0.07 2.01,-1.61 0.04,-2.03 -0.06,-3.57 2.27,-2.05 0.18,-1.79 3.93,-0.45 2.6,-2.4 -2.36,-1.07 -4.97,1.4 -7.44,0.51 -0.9,0.41 -2.06,0.6 -1.03,-0.46 2.89,0.74 6.43,-0.56 7.07,-3.76 0.42,-1.7 4.2,-3.59 3.75,-0.9 2.01,1.66 -0.21,4.73 -1.55,6.01 0.4,0.87 0.32,2.52 0.39,3.1 -1.16,1.34 2.36,4.31 4.12,3.09 1.32,1.67 -1.85,5.56 -2.69,2.65 -3.21,0.21 -0.77,4.74 -2.69,6.35 -0.74,1.02 -5.24,-0.82 -2.77,1.37 1.61,1.85 3.89,1.32 5.37,0.39 1.04,1.32 2.66,0.54 1.88,1.61 2.2,1.44 0.71,6.32 -1.89,3.8 -0.99,-0.9 -2.97,-2.42 -3.55,-4.38 -0.8,-2.14 -4.39,1.02 -3.28,1.06 2.19,-0.86 -0.04,1.87 1.38,2.68 -1.87,1.01 -1.25,3.06 -0.58,3.35 -0.3,0.27 -0.55,0.59 -0.78,0.92z m18.96,-2.29c-1.92,-0.02 -1.04,-3.7 -3.92,-2.81 -3.51,-0.09 0.22,-3.64 -2.76,-5.02 -1.79,-1.21 3.2,0.15 3.13,-2.28 0.04,-2.46 4.91,0.23 1.92,1.9 1.06,2.45 3.33,-0.76 2,-2.36 -0.51,-1.34 -2.25,-2.02 0.21,-1.96 2.33,-0.37 1.21,1.23 1.29,2.13 2.22,2.03 -1.98,3.78 -1.88,4.86 2.05,0.87 2.04,2.76 -0.28,2.66 -0.97,0.83 0.11,2.08 0.29,2.88z m-25.23,-19.54c-1.89,-1.51 1.09,-5.6 1.21,-4.99 -1.52,1.21 -1.11,3.3 -1.21,4.99z","name":"Denmark"},"ru":{"path":"m558.98,364.3c-2.56,-0.91 -4.97,-2.14 -7.36,-3.43 -2.39,-1.15 -4.94,-2.06 -7.59,-2.35 -2.81,2.28 -5.5,-0.94 -8.06,-1.85 -1.23,0.3 0.78,2.15 -1.52,1.8 -2.42,-0.25 -3.69,-3.69 -6.4,-2.82 -1.31,0.16 -4.41,0.18 -1.55,-0.66 1.64,-0.7 0.81,-3.34 -0.75,-1.74 0.37,-1.63 2.93,0.94 3.87,-1 1.25,-0.31 2.74,-1.24 3.63,-1.06 1.16,-2.32 -3.44,-3.39 -1.08,-5.92 0.57,-0.81 -0.94,-4.08 0.12,-2.72 0.39,2.37 2.24,1.11 1.25,-0.78 -1.26,-3.41 3.86,0.53 3.04,-2.81 -1.97,-1.81 -4.99,-1.7 -7.55,-2.54 -2.06,-0.94 2.06,-1.24 1.86,-3.16 2.06,1.7 4.87,-1.76 1.32,-1.4 -0.21,-1.02 3.11,-2.69 3.56,-4.64 3.16,0.27 3.03,-5.1 -0.28,-4.48 -2.62,0.21 -2.08,3.91 -4.95,4.14 -2.31,1.85 -0.59,-0.97 -1.26,-1.15 -2.27,0.02 -1.28,-3.82 0.48,-4.34 1.4,-2.13 0.73,-5.08 4.3,-4.68 2.91,0.1 4.24,-2.66 2.99,-5.05 -0.44,-0.81 1.31,-4.54 -0.5,-3.12 -0.89,0.38 -1.08,-3.79 -3.06,-2.28 -2.61,-1.85 3.34,-2.5 1.03,-4.59 -1.03,0.14 -4.3,0.91 -2.02,-0.74 1.96,-2.14 1.02,-4.53 -0.68,-6.4 1.16,-2.59 -2.93,-0.35 -3.64,0.61 0.41,-2.95 -3.61,-0.32 -4.74,-2.01 -1.3,0.69 -2.17,2.73 -3.44,0.57 -1.62,0.46 -2.9,0.42 -4.52,-0.03 -1.18,0.97 0.35,3.57 -1.91,1.94 -2.66,-0.03 -3.84,-4.48 -6.19,-3.24 -2.12,0.99 -3.16,6.03 -6.01,3.79 -0.55,1.88 -3.23,-1.75 -4.12,0.93 -2.26,2.15 -4.17,-0.6 -4.14,-2.64 -1.31,-0.74 -1.67,-2.47 -1.76,-3.17 -1.84,0.68 -2.55,-1.54 -3.04,-1.81 -1.53,1.29 -5.9,2.64 -6.27,0.53 -0.46,-1.43 -3.35,-2.71 -0.58,-3.43 0.87,-2.91 -3.85,-2.55 -4.29,-5.27 -1.34,-1.28 -2.82,-2.7 -4.07,-0.62 -2.6,-1.29 -3.34,1.16 -4.86,2.57 -2.29,-0.64 -4.88,0.47 -3.99,3.28 -1.64,3.09 -5.33,-1.16 -5.28,-3.38 0.29,-1.54 -1.99,-0.85 -0.93,-2.73 -1.04,-1.23 -5.06,-2.53 -2.44,-4.58 2.85,1.31 6.86,-0.11 6.98,-3.34 2.36,-1.51 -0.16,-3.89 -1.6,-4.2 -0.58,-2.91 -4.71,-0.88 -5.61,-1.07 0.65,-2.69 -1.62,-3.41 -3.71,-3.4 -2.11,-1.16 -3.32,-2.8 -3.81,-4.83 -2.42,0.17 -3.41,-1.67 -2.18,-3.83 -0.02,-1.71 -2.9,-2.44 -1.99,-4.84 -0.01,-1.79 -0.45,-2.87 -2.15,-2.08 -2.12,-2.07 -5.85,-2.66 -7.51,0.31 -0.95,2.92 -2.17,-0.33 -1.92,-1.55 -1.94,-2.34 -4.43,2.65 -5.64,-0.22 -1.71,0.04 -3.09,1.26 -3.28,-1.31 -0.9,-2.65 -2.85,-5.01 -4.71,-6.53 -1.83,-1.02 1.04,-5.27 -2.45,-5.76 -1.67,-0.51 -0.04,-2.71 -2.19,-1.57 0.05,-1.42 0.26,-2.99 1.68,-3.72 -0.54,-0.99 -1.34,-2.16 -1.45,-2.96 -2.84,-0.69 -1.01,-4.26 -2.77,-5.86 -2.08,-2.24 0.85,-4.53 0.39,-6.92 -1.01,-2.41 3.22,-2.6 0.55,-4.16 -0.83,-1.3 -2.35,-4.31 0.18,-2.28 1.51,-0.56 0.02,-3.79 2.55,-2.16 2.03,-0.4 0.55,-4.34 3.6,-3.39 1.61,0.41 6.06,0.64 4.72,-1.87 -2.47,0.38 -3.46,-3.31 -5.66,-1.7 -1.73,1.59 -3.35,0.22 -4.28,-0.75 -2.83,1.04 -0.5,-5.97 -3.43,-3.33 -0.79,1.95 -3.72,3.09 -1.67,0.48 4.94,-7.07 7.08,-15.55 9.98,-23.55 0.44,-3.03 2.51,-7.51 -0.31,-9.8 -2.38,-1.89 -5.29,-2.93 -7.96,-4.32 -3.88,-1.06 2.38,-6.07 -1.12,-8.02 -2.45,-0.36 -4.96,-1.94 -3.33,-4.47 -1.48,-1.21 -6.02,-2.28 -3.05,-4.86 0.42,-0.7 -3.23,-0.64 -2.08,-2.79 0.39,-2.06 -0.85,-2.94 1.09,-3.89 -0.82,-2.4 -2.73,-4.51 -4.14,-6.68 -1.51,-2.32 -3.78,-4.06 -5.41,-6.21 -0.98,-3.34 2.21,-6.3 1.62,-9.59 -0.91,-2.31 -3.95,-2.73 -4.86,-5.04 -3.1,0.98 -6.11,-2.82 -4.58,-5.63 1.26,-2.13 -3.52,-2.39 -0.66,-3.49 1.51,-2.49 0.64,-5.59 3.12,-7.72 -0.6,-2.56 3.46,0.62 3.16,-2.41 -2.11,-2.17 1.85,-1.54 2.99,-1.35 2.03,1.63 4.11,1.29 6.52,0.08 0.37,0.23 -0.76,2.57 1.13,2.81 -1.22,0.77 -1.32,4.65 0.4,2.88 0.2,-1.73 1.36,-3.42 1.9,-5.04 3.21,0.08 6.07,-1.95 9.29,-1.34 2.75,0.76 5.58,1.26 8.28,2.2 2.14,0.82 4.03,2.32 6.18,3.01 2,-1.35 5.54,1.61 7.21,-0.07 2.23,0.7 3.31,3.46 5.54,1.69 1.16,1.01 0.65,2.43 2.18,2.82 1.01,2.1 3.8,2.21 3.29,5.21 -0.09,3.44 0.15,7.2 -2.11,10.07 -2.26,3.09 -6,5.79 -10.02,4.97 -2.84,-0.74 -5.34,0.99 -8.08,1.16 -2.01,0.97 -5.49,-2.15 -6.54,-0.13 -1.33,0.97 -2.24,-0.89 -2.89,-1.46 -1,2.57 -7.21,1.52 -6.06,-1.62 -0.53,-0.64 -4.07,0.19 -5.44,0.48 -1.33,1.22 -0,2.41 1.25,1.32 2.16,-0.38 0.62,2.19 3.06,2.74 1.23,1.53 6.57,0.25 5.42,2.51 -1.91,3.1 2.22,0.91 3.81,1.72 2.09,0.58 5.78,2.19 4.56,4.13 2.75,1.59 0.23,3.96 -0.48,5.25 2.3,-0.18 4.43,1.99 4.35,4.27 2,-0.84 0.78,1.8 1.68,2.47 0.1,3.23 4.49,3.53 6.69,2.22 2.28,0.22 3.06,3.83 6.02,2.68 3.14,0.7 6.51,-0.4 7.17,-3.81 0.24,-2.71 -4.02,-6.69 -5.49,-3.3 -2.65,0.34 -5.44,-2.93 -6.7,-4.13 2.45,-0.62 0.68,-2.65 0.87,-3.74 2.98,-0.53 5.18,2.7 8.25,1.24 2.42,-0.59 5.57,1.81 7.6,-0.26 0.47,-1.42 5.9,0.3 3.69,-2.76 -1.12,-2.61 -3.65,-4.39 -6.37,-5.3 -3.26,-1.55 -1.48,-4.68 -0.67,-7 0.13,-2.98 3,-4.72 3.48,-7.44 -0.29,-1.95 -0.01,-6.22 2.42,-3.58 1.94,-2.25 5.82,-1.29 7.83,0.68 1.2,2.1 3.32,0.53 1.22,-1.06 -2.48,-1.87 -1.81,-4.87 -2.24,-7.47 -1.88,-1.57 -2.53,-5.38 -5.87,-5.07 -3.66,0.72 -1.05,-5.18 -3.4,-6.67 -1.19,-0.92 0.46,-3.75 -1.48,-3.55 -1.01,-2.39 -5.64,-2.94 -6.17,-3.55 2.64,0.97 4.98,-0.76 6.95,-2.52 2.55,-2.21 4.69,1.32 7.17,1.82 2.66,0.14 2.98,2.58 0.58,3.55 -1.44,1.01 -3.37,2.5 -1.86,4.15 -2.05,2.82 1.45,5.04 4.18,4.46 2.24,0.66 3.9,4.74 5.89,0.83 -0.45,2.74 1.7,0.82 1.6,-0.76 0.67,-1.92 4.97,-2.44 2.12,-4.7 -0.88,-2.08 -0.93,-5.08 -2.83,-6.29 1.51,-0.41 1.74,-3.36 4.33,-3.14 0.74,-1.52 -4.26,-0.47 -1.65,-2.01 1.38,-2.03 1.95,-4.13 2.25,-6.48 -0.71,-3 2.32,-4.04 2.61,-6.78 0.79,-1.07 0.87,-3.3 2.02,-0.85 0.37,3.39 3.79,-1.54 1.28,-2.71 -2.87,-0.55 -1.44,-3.38 -0.47,-5.41 0.59,0.58 1.75,-1.54 1.49,0.66 0.07,2.26 4.9,2.03 2.07,4.51 -3.06,1.89 2.52,2.73 3.16,0.29 0.8,-0.58 2.28,-0.85 1.45,-2.12 2.18,1.11 3.08,-1.11 1.14,-2.24 -0.63,-3.15 1.27,-6.2 4.04,-7.12 3.15,-0.33 1.76,-4.5 2.46,-6.7 2.68,1.91 1.44,-1.23 0.17,-1.57 -0.24,-1.73 3.07,-1.64 3.49,-0.99 -0.52,3.68 4.93,5.45 5.98,1.6 -0.74,-2.19 -4.02,-2.52 -1.51,-4.94 1.37,-2.71 -0.97,-5.14 -3.64,-5.47 -2.06,-0.69 -6.98,-0.83 -4,-3.86 -2.84,-2.24 1.77,-2.66 3.14,-4.1 2.67,-3.27 6.84,-5.01 10.97,-5.41 2.08,0.66 3.04,-0.42 5.04,-0.78 3.26,-0.69 5.53,-2.7 8.88,-1.89 1.83,0.09 3.72,-0.92 5.18,-0.23 3.3,-0.51 -0.59,-3.78 0.31,-4.05 7.13,0.01 14.26,-0.01 21.38,0.01 2.09,0.14 -2,3.01 0.93,2.93 1.33,0.5 2.97,0.39 1.78,1.28 0.04,1.2 -0.09,5.95 -1.36,3.75 0.88,-1.97 -1.47,-3.03 -1.4,-0.65 -0.13,1.49 -3.77,0.21 -3.69,2.55 -3.37,1.5 0.23,4.73 2.72,4.05 3.82,-0.71 6.21,-3.84 8.09,-6.94 1.84,-0.32 4.98,-2.24 2.66,-4.31C557.34,3.94 555.66,1.55 558.62,2.18c40.17,0 80.35,0 120.52,0 0,32.42 0,64.83 0,97.25 -2.09,0.36 -2.95,2.3 -1.54,3.74 -2.44,-1.53 -2.16,1.82 -2.17,2.03 -1.83,-0.06 -0.41,-2.79 -2.86,-3.06 -0.55,-1.54 -1.56,-2.65 -3.54,-1.77 -1.52,-1.23 -4.42,-2.86 -6,-3.08 -2.3,1.54 0.4,6.71 -3.71,5.55 -1.63,0.21 -3.74,1.9 -3.4,2.86 -1.22,-0.25 -2.92,1.14 -1.43,2.07 -2.82,1.19 1.7,2.9 -0.94,4.55 -2.72,2.09 2.48,0.44 1.29,3.06 -2.53,0.4 -0.3,2.61 -2.09,4 -0.4,3.26 -2.41,5.93 -3.86,8.82 0.28,0.79 -3.1,0.12 -1.27,1.6 -1.02,2.01 -3.11,4.53 -0.2,6.39 -2.52,0.22 -3.43,3.38 -5,5.17 -0.91,1.5 1.12,2.54 -1.32,2.93 -1.23,2.37 -2.15,5.27 -3.97,7.32 1.46,1.7 -3.54,1.33 -2.2,4 0.89,0.84 -2.06,0.35 -2,1.51 -2.16,-0.19 -3.58,4.12 -1.57,4.8 2.75,-1.67 -0.46,5.07 2.92,2.57 1.47,-1.64 1.11,3.68 3.89,2.06 1.15,-1.3 4.64,-3.43 5.55,-1.97 -0.97,2.34 -5.83,2.91 -5.32,5.59 1.65,1.51 -1.67,5.32 2.05,4.87 0.58,1.25 3.67,-0.2 3.17,2.56 -0.46,2.07 -2.09,3.57 -1.96,5.92 -2.28,1.79 1.99,3.07 3.27,1.27 1.22,3.88 3.54,-2.53 5.73,-0.07 1.71,0.15 3.48,-3.04 4.82,-0.75 0.7,2.54 3.93,4.85 1.33,7.39 -0.96,2.05 -3.49,5.21 -5.83,2.98 -2.18,1.39 0.8,4.71 -0.35,6.74 -1.64,-3.35 -4.19,2.67 -7,1.13 -1.58,0.37 -1.77,-1.65 -2.62,-1.81 -0.7,0.72 -4.76,0.36 -3.34,1.66 -0.36,0.87 -3.77,2.22 -1.73,4.23 -0.31,2.89 -2.88,-1.51 -4.31,1.09 -1.46,1.61 -3.55,2.49 -3.46,4.75 -0.41,1.43 -0.54,3.48 -0.05,5.34 -0.27,1.74 -0.64,1.81 -2.46,1.7 -2.35,1.24 -5.67,-2 -7.94,0.36 -1.02,1.19 0.11,2.72 -2.11,2.54 -1.91,-2.74 -5.13,1.42 -6.94,-1.53 -3.68,-1.24 -4.83,6.16 -8.08,2.91 -0.68,-0.31 -3.05,-3.22 -2.23,-1.07 0.44,2 -3.21,4.32 -1.91,5.59 -1.58,-0.54 -1.24,3.52 -1.64,0.7 -1.39,-2.07 -3.9,0.94 -5.63,0.87 0.37,1.37 0.82,0.9 -0.34,1.77 -0.21,2.03 1.56,4.11 -0.43,6.09 -0.26,2.82 -3.85,3.15 -3.39,6.04 1.82,1.79 -0.1,4.43 -1.07,6.43 -3.76,0.87 1.99,2.12 2.03,4.1 0.89,1.78 3.76,2.19 1.71,4.57 -2.3,2.9 -5.15,-1.81 -7.83,-2.01 -3.78,-1.12 -4.32,3.77 -2.19,5.82 -2.31,2.78 -0.33,6.19 0.38,9.1 0.77,1.86 4.43,0.77 3.16,3.54 -0.62,2.49 -0.11,4.99 0.21,7.43 1.17,3.44 5.88,-1.22 6.9,2.2 0.63,0.39 -1.33,1.3 0.64,1.71 0.61,2 4.71,2.89 4.1,0.07 2.42,-0.19 4.16,-3.38 6.65,-1.26 2.61,1.3 4.67,3.68 7.51,4.49 2.44,-0.41 2.29,3.63 -0.15,2.17 -3.16,1.33 0.69,4.72 2.95,3.33 2.69,-1.74 4.67,2.16 2.98,3.28 -1.53,-1.48 -3.23,1.37 -1.51,2.46 -1.66,0.09 -1.17,4.59 -3.15,5.57 -2.16,-0.57 -0.01,3.21 -2.03,1.18 -1.51,-0.51 -1.63,0.74 -2.82,1.17 0.46,1.78 3.76,-0.82 2.44,1.78 0.45,1.46 -0.73,2.48 0.5,3.94 -0.91,1.42 1.06,4.29 -0.87,5.01 0.89,2.05 -1.39,4.46 -0.11,6.57 1.6,2.36 2.84,-1.08 4.63,0.84 2.19,0.61 6.36,2.5 5.42,5.48 1.51,1.9 3.6,2.8 3.89,5.79 1.08,1.98 3.28,1.24 4.3,3.24 2.25,0.68 4.45,1.39 6.37,2.79 1.16,1.48 3.78,2.23 4.69,2.86 -0.38,2.65 -2.37,5.25 -1.49,7.93 0.05,2.46 -6.1,4.34 -5.15,1.14 -2.52,-0.74 -5.24,-0.5 -7.55,-1.88 -1.49,0.54 -3.24,0.69 -4.5,0.55 -1.71,1.13 -6.19,1.11 -5.4,-1.84 -0.88,-3.94 -4.63,1.38 -6.95,-0.97 -1.81,-1.22 -2.73,1 -2.64,2.13 -3.4,-2.47 -4.1,3.12 -6.37,4.33 -1.56,1.14 -0.42,-3.07 -2.75,-1.69 -2.4,0.37 -5.28,1.01 -7,-0.66 -2.78,0.67 -5.63,0.98 -8.42,1.61 1.94,1.66 -2.76,2.56 -3.79,2.43 -2.67,-0.72 -5.06,0.99 -7.69,0.02 -2.34,1.37 -6.27,0.31 -6.05,4.11l-0.04,0.01 0,0z m57.81,-33.85c-0.89,-1.57 0.49,-2.17 0,0z m-241.23,-51.26c-1.5,-0.26 -4.88,0.4 -5.3,-0.46 2.59,-1.58 -0.9,-5.56 2.71,-5.44 2.09,-0.97 5.31,1.36 6.88,-1.15 -0.17,-1.75 -1.39,-4.59 1.04,-3 2.58,1.66 5.83,-0.05 8.09,1.03 2.4,1.17 -0.19,4.14 1.51,6.12 -0.91,2.05 -4.72,1.7 -6.85,2.38 -2.67,0.39 -5.38,0.53 -8.08,0.53z m245.17,-54.27c-0.96,-0.5 -1.79,-4.14 -0.7,-1.7 0.41,0.34 1.1,1.13 0.7,1.7z m15.47,-62.08c-0.5,-1.68 1.86,0.26 0,0z M392.43,81.96c-1.18,-1.24 -0.52,-3.74 1,-1.58 0.97,0.64 4.51,-0.85 3.11,1.22 -1.28,-0.1 -4.06,-2.2 -4.11,0.36z m69.72,-22.48c-3.13,-0.37 -5.18,-4.96 -3.51,-7.6 1.49,-0.95 5.9,-1.19 6.08,0.31 -0.75,2.23 0.93,5.01 -1.2,6.83 -0.37,0.32 -0.88,0.46 -1.36,0.46z m1.2,-32.66c0.64,-1.98 -0.94,-1.7 -1.81,-2.37 0.83,-0.97 3.57,-1.76 1.01,-2.23 -1.29,0.52 -2.78,0.7 -3.28,0.14 -1.2,0.89 -3.04,-4.18 -2.96,-0.9 1.94,3.97 -3.66,-2.01 -2.98,1.25 2.3,2.87 -2.86,2.37 -3.53,0.29 -1.84,-1.41 -2.9,-5.04 0.07,-4.98 -0.36,-1.21 -1.52,-2.86 -0.18,-4.45 -3.01,0.94 -0.61,-2.79 -2.49,-3.65 -1.26,2.21 -4.03,0.25 -1.58,-1.13 2.3,-1.91 -4.09,-1.91 -1.43,-4.6 0.66,-1.81 2.03,-2.29 3.79,-2.01 1.73,-0.33 3.25,0.66 4.85,0.17 2.53,-1.3 -3.03,3.08 0.48,2.2 3.11,-1.44 -1.22,5.41 2.65,3.83 2.34,0.52 1.33,4.72 3.21,4.64 2.81,0.65 4.59,3.49 7.55,3.98 2.95,1.5 6.52,1.02 9.42,1.43 -0.95,0.85 -5.31,2.46 -4.34,3.45 -1.86,0.24 -4.2,1.89 -2.01,3.36 -1.56,0.82 -3.63,-0.42 -4.9,1.06 -0.87,-0.61 -1.05,-0.3 -1.52,0.53z m23.35,-5.93c-1.68,-0.42 -4.33,-0.5 -2.76,-2.36 -1.89,0.07 -1.65,-3.14 0.36,-1.62 2.48,0.8 5.12,0.27 7.63,0.6 2.21,1.62 -2.46,4.83 -3.16,1.83 -0.45,0.12 -0.96,1.84 -2.07,1.55z","name":"Russian Federation"},"mt":{"path":"m343.65,509.08c-1.52,-0.23 -1.75,-0.24 0,0z m1.95,2.72c-1.32,-0.63 -1.5,-0.7 0,0z","name":"Malta"},"me":{"path":"m385.29,433.13c-1.98,-1.45 -3.12,-5.3 -6.16,-4.27 -0.68,-0.6 -0.46,-1.87 -1.44,-2.17 0.16,-1.66 0.06,-3.3 -0.89,-4.86 1.96,-1.05 1.28,-4.74 3.12,-5.09 1.81,3.01 2.14,-1.15 0.71,-2.43 2.24,-0.2 3.4,-2.11 5.57,-0.36 3.49,0.56 2.95,4.72 6.22,5.9 -2.5,0.45 -0.84,6.17 -3.72,4.67 0.19,-3.37 -2.81,0.5 -2.99,1.87 -0.8,1.83 -2.3,3.26 -0.46,4.87 0.08,0.47 0.4,1.59 0.03,1.87z","name":"Montenegro"},"rs":{"path":"m397.48,431.57c-0.16,-2.49 -1.05,-5.46 -3.99,-5.18 -0.83,-1.86 -3.16,-3.89 -0.74,-5.1 2.42,-2.35 -3,-3.15 -2.73,-5.8 -1.28,-2.34 -5.16,-1.7 -5.47,-5.07 -0.61,-1.48 -2.43,-2.36 0.08,-2.14 2.37,-1.69 -1.79,-3.25 -2.79,-4.49 -3.49,-0.35 0.76,-4.99 -0.07,-7.08 -1.54,-0.41 -2.38,-0.6 -2.22,-2.53 -0.29,-0.9 3.52,-0.03 1.84,-1.89 -1.99,-0.46 -4.18,-1.03 -2.61,-2.61 0.5,-1.92 -2.64,0.29 -1.69,-2.2 -0.12,-1.58 -1.93,-2.81 0.65,-3.27 2.64,-1.35 4.3,-3.64 7.52,-3.04 2.34,-0.11 4.56,2.67 6.11,3.82 1,0.92 0.22,4.94 3.24,4.94 1.65,0.3 5.5,0.5 3.47,2.78 1.27,1.27 0.97,1.07 -0.4,2.22 0.32,1.47 3.21,0.4 3.09,2.01 1.78,0.14 4.21,-0.13 4.93,1.74 2.85,0.45 1.17,-3.79 1.99,-3.56 1.66,0.7 3.37,1 1.04,1.99 -1.64,2.21 4.19,3.86 0.86,5.71 -2.2,2.75 0.34,6.72 2.98,8.19 2.92,0.51 3.82,2.98 1.52,5.06 -0.82,0.05 -2.7,-0.25 -2.65,1.85 -1.23,2.37 3.66,5.04 -0.48,5.54 -2.42,1.11 -4.61,2.18 -7.35,2.39 -1.32,2.74 -6.31,0.55 -6.16,5.74z","name":"Serbia"}}});

;

var ngMap=angular.module("ngMap",[]);ngMap.directive("infoWindow",["Attr2Options",function(Attr2Options){var parser=new Attr2Options;return{restrict:"E",require:"^map",link:function(scope,element,attrs,mapController){var filtered=new parser.filter(attrs);scope.google=google;var options=parser.getOptions(filtered,scope);options.pixelOffset&&(options.pixelOffset=google.maps.Size.apply(this,options.pixelOffset));var infoWindow=new google.maps.InfoWindow(options);infoWindow.contents=element.html();var events=parser.getEvents(scope,filtered);for(var eventName in events)eventName&&google.maps.event.addListener(infoWindow,eventName,events[eventName]);mapController.infoWindows.push(infoWindow),element.css({display:"none"}),scope.showInfoWindow=function(event,id,options){var infoWindow=scope.infoWindows[id],contents=infoWindow.contents,matches=contents.match(/\[\[[^\]]+\]\]/g);if(matches)for(var i=0,length=matches.length;length>i;i++){var expression=matches[i].replace(/\[\[/,"").replace(/\]\]/,"");try{contents=contents.replace(matches[i],eval(expression))}catch(e){expression="options."+expression,contents=contents.replace(matches[i],eval(expression))}}infoWindow.setContent(contents),infoWindow.open(scope.map,this)}}}}]),ngMap.directive("map",["Attr2Options","$parse","NavigatorGeolocation","GeoCoder","$compile",function(a,b,c,d){var e=new a;return{restrict:"AE",controller:["$scope",function(a){this.map=null,this.controls={},this.markers=[],this.shapes=[],this.infoWindows=[],this.initializeMap=function(a,b,f){var g=e.filter(f);a.google=google;var h=e.getOptions(g,a),i=e.getControlOptions(g);for(var j in i)j&&(h[j]=i[j]);var k=this,l=null;if(h.zoom||(h.zoom=15),h.center instanceof Array){var m=h.center[0],n=h.center[1];h.center=new google.maps.LatLng(m,n)}else l=h.center,delete h.center;for(var o in this.controls)o&&(h[o+"Control"]="false"===this.controls[o].enabled?0:1,delete this.controls[o].enabled,h[o+"ControlOptions"]=this.controls[o]);var p=document.createElement("div");p.style.width="100%",p.style.height="100%",b.prepend(p),k.map=new google.maps.Map(p,h),"string"==typeof l?d.geocode({address:l}).then(function(a){k.map.setCenter(a[0].geometry.location)}):h.center||c.getCurrentPosition().then(function(a){var b=a.coords.latitude,c=a.coords.longitude;k.map.setCenter(new google.maps.LatLng(b,c))});var q=e.getEvents(a,g);for(var r in q)r&&google.maps.event.addListener(k.map,r,q[r]);return a.map=k.map,k.map},this.addMarker=function(b){b.setMap(this.map),b.centered&&this.map.setCenter(b.position);var c=Object.keys(a.markers).length;a.markers[b.id||c]=b},this.initializeMarkers=function(){a.markers={};for(var b=0;b<this.markers.length;b++){var c=this.markers[b];this.addMarker(c)}return a.markers},this.initializeShapes=function(){a.shapes={};for(var b=0;b<this.shapes.length;b++){var c=this.shapes[b];c.setMap(this.map),a.shapes[c.id||b+1]=c}return a.shapes},this.initializeInfoWindows=function(){a.infoWindows={};for(var b=0;b<this.infoWindows.length;b++){var c=this.infoWindows[b];a.infoWindows[c.id||b+1]=c}return a.infoWindows}}],link:function(a,b,c,d){var e=d.initializeMap(a,b,c);a.$emit("mapInitialized",[e]);var f=d.initializeMarkers();a.$emit("markersInitialized",[f]);var g=d.initializeShapes();a.$emit("shapesInitialized",[g]);var h=d.initializeInfoWindows();a.$emit("infoWindowsInitialized",[h])}}}]),ngMap.directive("marker",["Attr2Options","GeoCoder","NavigatorGeolocation",function(a,b,c){var d=new a;return{restrict:"E",require:"^map",link:function(a,e,f,g){var h=new d.filter(f);a.google=google;var i=d.getOptions(h,a),j=d.getEvents(a,h),k=function(){var a=new google.maps.Marker(i);Object.keys(j).length>0;for(var b in j)b&&google.maps.event.addListener(a,b,j[b]);return a};if(i.position instanceof Array){var l=i.position[0],m=i.position[1];i.position=new google.maps.LatLng(l,m);var n=k();i.ngRepeat?g.addMarker(n):g.markers.push(n)}else if("string"==typeof i.position){var o=i.position;o.match(/^current/i)?c.getCurrentPosition().then(function(a){var b=a.coords.latitude,c=a.coords.longitude;i.position=new google.maps.LatLng(b,c);var d=k();g.addMarker(d)}):b.geocode({address:i.position}).then(function(a){var b=a[0].geometry.location;i.position=b;var c=k();g.addMarker(c)})}}}}]),ngMap.directive("shape",["Attr2Options",function(a){var b=new a,c=function(a){return a[0]&&a[0]instanceof Array?a.map(function(a){return new google.maps.LatLng(a[0],a[1])}):new google.maps.LatLng(a[0],a[1])},d=function(a){var b=c(a);return new google.maps.LatLngBounds(b[0],b[1])},e=function(a,b){switch(a){case"circle":return b.center=c(b.center),new google.maps.Circle(b);case"polygon":return b.paths=c(b.paths),new google.maps.Polygon(b);case"polyline":return b.path=c(b.path),new google.maps.Polyline(b);case"rectangle":return b.bounds=d(b.bounds),new google.maps.Rectangle(b);case"groundOverlay":case"image":var e=b.url,f=d(b.bounds),g={opacity:b.opacity,clickable:b.clickable};return new google.maps.GroundOverlay(e,f,g)}return null};return{restrict:"E",require:"^map",link:function(a,c,d,f){var g=b.filter(d),h=g.name;delete g.name;var i=b.getOptions(g),j=e(h,i);j&&f.shapes.push(j);var k=b.getEvents(a,g);for(var l in k)k[l]&&google.maps.event.addListener(j,l,k[l])}}}]),ngMap.provider("Attr2Options",function(){this.$get=function(){return function(){this.filter=function(a){var b={};for(var c in a)c.match(/^\$/)||(b[c]=a[c]);return b},this.getOptions=function(attrs,scope){var options={};for(var key in attrs)if(attrs[key]){if(key.match(/^on[A-Z]/))continue;if(key.match(/ControlOptions$/))continue;var val=attrs[key];try{var num=Number(val);if(isNaN(num))throw"Not a number";options[key]=num}catch(err){try{options[key]=JSON.parse(val)}catch(err2){if(val.match(/^[A-Z][a-zA-Z0-9]+\(.*\)$/))try{var exp="new google.maps."+val;options[key]=eval(exp)}catch(e){options[key]=val}else if(val.match(/^[A-Z][a-zA-Z0-9]+\.[A-Z]+$/))try{options[key]=scope.$eval("google.maps."+val)}catch(e){options[key]=val}else if(val.match(/^[A-Z]+$/))try{var capitializedKey=key.charAt(0).toUpperCase()+key.slice(1);options[key]=scope.$eval("google.maps."+capitializedKey+"."+val)}catch(e){options[key]=val}else options[key]=val}}}return options},this.getEvents=function(a,b){var c={},d=function(a){return"_"+a.toLowerCase()},e=function(b){var c=b.match(/([^\(]+)\(([^\)]*)\)/),d=c[1],e=c[2].replace(/event[ ,]*/,""),f=a.$eval("["+e+"]");return function(b){a[d].apply(this,[b].concat(f))}};for(var f in b)if(b[f]){if(!f.match(/^on[A-Z]/))continue;var g=f.replace(/^on/,"");g=g.charAt(0).toLowerCase()+g.slice(1),g=g.replace(/([A-Z])/g,d);var h=b[f];c[g]=new e(h)}return c},this.getControlOptions=function(a){var b={};for(var c in a)if(a[c]){if(!c.match(/(.*)ControlOptions$/))continue;var d=a[c],e=d.replace(/'/g,'"');e=e.replace(/([^"]+)|("[^"]+")/g,function(a,b,c){return b?b.replace(/([a-zA-Z0-9]+?):/g,'"$1":'):c});try{var f=JSON.parse(e);for(var g in f)if(f[g]){var h=f[g];if("string"==typeof h?h=h.toUpperCase():"mapTypeIds"===g&&(h=h.map(function(a){return google.maps.MapTypeId[a.toUpperCase()]})),"style"===g){var i=c.charAt(0).toUpperCase()+c.slice(1),j=i.replace(/Options$/,"")+"Style";f[g]=google.maps[j][h]}else f[g]="position"===g?google.maps.ControlPosition[h]:h}b[c]=f}catch(k){}}return b}}}}),ngMap.service("GeoCoder",["$q",function(a){return{geocode:function(b){var c=a.defer(),d=new google.maps.Geocoder;return d.geocode(b,function(a,b){b==google.maps.GeocoderStatus.OK?c.resolve(a):c.reject("Geocoder failed due to: "+b)}),c.promise}}}]),ngMap.service("NavigatorGeolocation",["$q",function(a){return{getCurrentPosition:function(){var b=a.defer();return navigator.geolocation?navigator.geolocation.getCurrentPosition(function(a){b.resolve(a)},function(a){b.reject(a)}):b.reject("Browser Geolocation service failed."),b.promise},watchPosition:function(){return"TODO"},clearWatch:function(){return"TODO"}}}]);
;

/*!ngTagsInput v2.0.1 License: MIT */
!function(){"use strict";function a(){var a={};return{on:function(b,c){return b.split(" ").forEach(function(b){a[b]||(a[b]=[]),a[b].push(c)}),this},trigger:function(b,c){return angular.forEach(a[b],function(a){a.call(null,c)}),this}}}function b(a,b){return a=a||[],a.length>0&&!angular.isObject(a[0])&&a.forEach(function(c,d){a[d]={},a[d][b]=c}),a}function c(a,b,c){for(var d=null,e=0;e<a.length;e++)if(a[e][c].toLowerCase()===b[c].toLowerCase()){d=a[e];break}return d}function d(a,b,c){var d=b.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return a.replace(new RegExp(d,"gi"),c)}var e={backspace:8,tab:9,enter:13,escape:27,space:32,up:38,down:40,comma:188},f=angular.module("ngTagsInput",[]);f.directive("tagsInput",["$timeout","$document","tagsInputConfig",function(d,f,g){function h(a,b){var d,e,f,g={};return d=function(b){return b[a.displayProperty]},e=function(b,c){b[a.displayProperty]=c},f=function(b){var e=d(b);return e.length>=a.minLength&&e.length<=(a.maxLength||e.length)&&a.allowedTagsPattern.test(e)&&!c(g.items,b,a.displayProperty)},g.items=[],g.addText=function(a){var b={};return e(b,a),g.add(b)},g.add=function(c){var h=d(c).trim();return a.replaceSpacesWithDashes&&(h=h.replace(/\s/g,"-")),e(c,h),f(c)?(g.items.push(c),b.trigger("tag-added",{$tag:c})):b.trigger("invalid-tag",{$tag:c}),c},g.remove=function(a){var c=g.items.splice(a,1)[0];return b.trigger("tag-removed",{$tag:c}),c},g.removeLast=function(){var b,c=g.items.length-1;return a.enableEditingLastTag||g.selected?(g.selected=null,b=g.remove(c)):g.selected||(g.selected=g.items[c]),b},g}return{restrict:"E",require:"ngModel",scope:{tags:"=ngModel",onTagAdded:"&",onTagRemoved:"&"},replace:!1,transclude:!0,templateUrl:"ngTagsInput/tags-input.html",controller:["$scope","$attrs","$element",function(b,c,d){g.load("tagsInput",b,c,{placeholder:[String,"Add a tag"],tabindex:[Number],removeTagSymbol:[String,String.fromCharCode(215)],replaceSpacesWithDashes:[Boolean,!0],minLength:[Number,3],maxLength:[Number],addOnEnter:[Boolean,!0],addOnSpace:[Boolean,!1],addOnComma:[Boolean,!0],addOnBlur:[Boolean,!0],allowedTagsPattern:[RegExp,/.+/],enableEditingLastTag:[Boolean,!1],minTags:[Number],maxTags:[Number],displayProperty:[String,"text"],allowLeftoverText:[Boolean,!1],addFromAutocompleteOnly:[Boolean,!1]}),b.events=new a,b.tagList=new h(b.options,b.events),this.registerAutocomplete=function(){var a=d.find("input");return a.on("keydown",function(a){b.events.trigger("input-keydown",a)}),{addTag:function(a){return b.tagList.add(a)},focusInput:function(){a[0].focus()},getTags:function(){return b.tags},getOptions:function(){return b.options},on:function(a,c){return b.events.on(a,c),this}}}}],link:function(a,c,g,h){var i=[e.enter,e.comma,e.space,e.backspace],j=a.tagList,k=a.events,l=a.options,m=c.find("input");k.on("tag-added",a.onTagAdded).on("tag-removed",a.onTagRemoved).on("tag-added",function(){a.newTag.text=""}).on("tag-added tag-removed",function(){h.$setViewValue(a.tags)}).on("invalid-tag",function(){a.newTag.invalid=!0}).on("input-change",function(){j.selected=null,a.newTag.invalid=null}).on("input-focus",function(){h.$setValidity("leftoverText",!0)}).on("input-blur",function(){l.addFromAutocompleteOnly||(l.addOnBlur&&j.addText(a.newTag.text),h.$setValidity("leftoverText",l.allowLeftoverText?!0:!a.newTag.text))}),a.newTag={text:"",invalid:null},a.getDisplayText=function(a){return a[l.displayProperty].trim()},a.track=function(a){return a[l.displayProperty]},a.newTagChange=function(){k.trigger("input-change",a.newTag.text)},a.$watch("tags",function(c){a.tags=b(c,l.displayProperty),j.items=a.tags}),a.$watch("tags.length",function(a){h.$setValidity("maxTags",angular.isUndefined(l.maxTags)||a<=l.maxTags),h.$setValidity("minTags",angular.isUndefined(l.minTags)||a>=l.minTags)}),m.on("keydown",function(b){if(!b.isImmediatePropagationStopped||!b.isImmediatePropagationStopped()){var c,d,f=b.keyCode,g=b.shiftKey||b.altKey||b.ctrlKey||b.metaKey,h={};if(!g&&-1!==i.indexOf(f))if(h[e.enter]=l.addOnEnter,h[e.comma]=l.addOnComma,h[e.space]=l.addOnSpace,c=!l.addFromAutocompleteOnly&&h[f],d=!c&&f===e.backspace&&0===a.newTag.text.length,c)j.addText(a.newTag.text),a.$apply(),b.preventDefault();else if(d){var k=j.removeLast();k&&l.enableEditingLastTag&&(a.newTag.text=k[l.displayProperty]),a.$apply(),b.preventDefault()}}}).on("focus",function(){a.hasFocus||(a.hasFocus=!0,k.trigger("input-focus"),a.$apply())}).on("blur",function(){d(function(){var b=f.prop("activeElement"),d=b===m[0],e=c[0].contains(b);(d||!e)&&(a.hasFocus=!1,k.trigger("input-blur"))})}),c.find("div").on("click",function(){m[0].focus()})}}}]),f.directive("autoComplete",["$document","$timeout","$sce","tagsInputConfig",function(a,f,g,h){function i(a,d){var e,g,h,i={};return g=function(a,b){return a.filter(function(a){return!c(b,a,d.tagsInput.displayProperty)})},i.reset=function(){h=null,i.items=[],i.visible=!1,i.index=-1,i.selected=null,i.query=null,f.cancel(e)},i.show=function(){i.selected=null,i.visible=!0},i.load=function(c,j){return c.length<d.minLength?void i.reset():(f.cancel(e),void(e=f(function(){i.query=c;var e=a({$query:c});h=e,e.then(function(a){e===h&&(a=b(a.data||a,d.tagsInput.displayProperty),a=g(a,j),i.items=a.slice(0,d.maxResultsToShow),i.items.length>0?i.show():i.reset())})},d.debounceDelay,!1)))},i.selectNext=function(){i.select(++i.index)},i.selectPrior=function(){i.select(--i.index)},i.select=function(a){0>a?a=i.items.length-1:a>=i.items.length&&(a=0),i.index=a,i.selected=i.items[a]},i.reset(),i}function j(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}return{restrict:"E",require:"^tagsInput",scope:{source:"&"},templateUrl:"ngTagsInput/auto-complete.html",link:function(b,c,f,k){var l,m,n,o,p,q=[e.enter,e.tab,e.escape,e.up,e.down];h.load("autoComplete",b,f,{debounceDelay:[Number,100],minLength:[Number,3],highlightMatchedText:[Boolean,!0],maxResultsToShow:[Number,10]}),n=b.options,m=k.registerAutocomplete(),n.tagsInput=m.getOptions(),l=new i(b.source,n),o=function(a){return a[n.tagsInput.displayProperty]},b.suggestionList=l,b.addSuggestion=function(){var a=!1;return l.selected&&(m.addTag(l.selected),l.reset(),m.focusInput(),a=!0),a},b.highlight=function(a){var b=o(a);return b=j(b),n.highlightMatchedText&&(b=d(b,j(l.query),"<em>$&</em>")),g.trustAsHtml(b)},b.track=function(a){return o(a)},m.on("tag-added invalid-tag",function(){l.reset()}).on("input-change",function(a){a?l.load(a,m.getTags()):l.reset()}).on("input-keydown",function(a){var c,d;if(-1!==q.indexOf(a.keyCode)){var f=!1;a.stopImmediatePropagation=function(){f=!0,a.stopPropagation()},a.isImmediatePropagationStopped=function(){return f},l.visible&&(c=a.keyCode,d=!1,c===e.down?(l.selectNext(),d=!0):c===e.up?(l.selectPrior(),d=!0):c===e.escape?(l.reset(),d=!0):(c===e.enter||c===e.tab)&&(d=b.addSuggestion()),d&&(a.preventDefault(),a.stopImmediatePropagation(),b.$apply()))}}).on("input-blur",function(){l.reset()}),p=function(){l.visible&&(l.reset(),b.$apply())},a.on("click",p),b.$on("$destroy",function(){a.off("click",p)})}}}]),f.directive("tiTranscludeAppend",function(){return function(a,b,c,d,e){e(function(a){b.append(a)})}}),f.directive("tiAutosize",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){var e,f,g=3;e=angular.element('<span class="input"></span>'),e.css("display","none").css("visibility","hidden").css("width","auto").css("white-space","pre"),b.parent().append(e),f=function(a){var d,f=a;return angular.isString(f)&&0===f.length&&(f=c.placeholder),f&&(e.text(f),e.css("display",""),d=e.prop("offsetWidth"),e.css("display","none")),b.css("width",d?d+g+"px":""),a},d.$parsers.unshift(f),d.$formatters.unshift(f),c.$observe("placeholder",function(a){d.$modelValue||f(a)})}}}),f.provider("tagsInputConfig",function(){var a={},b={};this.setDefaults=function(b,c){return a[b]=c,this},this.setActiveInterpolation=function(a,c){return b[a]=c,this},this.$get=["$interpolate",function(c){var d={};return d[String]=function(a){return a},d[Number]=function(a){return parseInt(a,10)},d[Boolean]=function(a){return"true"===a.toLowerCase()},d[RegExp]=function(a){return new RegExp(a)},{load:function(e,f,g,h){f.options={},angular.forEach(h,function(h,i){var j,k,l,m,n;j=h[0],k=h[1],l=d[j],m=function(){var b=a[e]&&a[e][i];return angular.isDefined(b)?b:k},n=function(a){f.options[i]=a?l(a):m()},b[e]&&b[e][i]?g.$observe(i,function(a){n(a)}):n(g[i]&&c(g[i])(f.$parent))})}}}]}),f.run(["$templateCache",function(a){a.put("ngTagsInput/tags-input.html",'<div class="host" tabindex="-1" ti-transclude-append=""><div class="tags" ng-class="{focused: hasFocus}"><ul class="tag-list"><li class="tag-item" ng-repeat="tag in tagList.items track by track(tag)" ng-class="{ selected: tag == tagList.selected }"><span>{{getDisplayText(tag)}}</span> <a class="remove-button" ng-click="tagList.remove($index)">{{options.removeTagSymbol}}</a></li></ul><input class="input" placeholder="{{options.placeholder}}" tabindex="{{options.tabindex}}" ng-model="newTag.text" ng-change="newTagChange()" ng-trim="false" ng-class="{\'invalid-tag\': newTag.invalid}" ti-autosize=""></div></div>'),a.put("ngTagsInput/auto-complete.html",'<div class="autocomplete" ng-show="suggestionList.visible"><ul class="suggestion-list"><li class="suggestion-item" ng-repeat="item in suggestionList.items track by track(item)" ng-class="{selected: item == suggestionList.selected}" ng-click="addSuggestion()" ng-mouseenter="suggestionList.select($index)" ng-bind-html="highlight(item)"></li></ul></div>')}])}();

/*
 Bootstrap - File Input
 ======================

 This is meant to convert all file input tags into a set of elements that displays consistently in all browsers.

 Converts all
 <input type="file">
 into Bootstrap buttons
 <a class="btn">Browse</a>

 */
(function($) {

    $.fn.bootstrapFileInput = function() {

        this.each(function(i,elem){

            var $elem = $(elem);

            // Maybe some fields don't need to be standardized.
            if (typeof $elem.attr('data-bfi-disabled') != 'undefined') {
                return;
            }

            // Set the word to be displayed on the button
            var buttonWord = 'Browse';

            if (typeof $elem.attr('title') != 'undefined') {
                buttonWord = $elem.attr('title');
            }

            var className = '';

            if (!!$elem.attr('class')) {
                className = ' ' + $elem.attr('class');
            }

            // Now we're going to wrap that input field with a Bootstrap button.
            // The input will actually still be there, it will just be float above and transparent (done with the CSS).
            $elem.wrap('<a class="file-input-wrapper btn btn-default ' + className + '"></a>').parent().prepend($('<span></span>').html(buttonWord));
        })

            // After we have found all of the file inputs let's apply a listener for tracking the mouse movement.
            // This is important because the in order to give the illusion that this is a button in FF we actually need to move the button from the file input under the cursor. Ugh.
            .promise().done( function(){

                // As the cursor moves over our new Bootstrap button we need to adjust the position of the invisible file input Browse button to be under the cursor.
                // This gives us the pointer cursor that FF denies us
                $('.file-input-wrapper').mousemove(function(cursor) {

                    var input, wrapper,
                        wrapperX, wrapperY,
                        inputWidth, inputHeight,
                        cursorX, cursorY;

                    // This wrapper element (the button surround this file input)
                    wrapper = $(this);
                    // The invisible file input element
                    input = wrapper.find("input");
                    // The left-most position of the wrapper
                    wrapperX = wrapper.offset().left;
                    // The top-most position of the wrapper
                    wrapperY = wrapper.offset().top;
                    // The with of the browsers input field
                    inputWidth= input.width();
                    // The height of the browsers input field
                    inputHeight= input.height();
                    //The position of the cursor in the wrapper
                    cursorX = cursor.pageX;
                    cursorY = cursor.pageY;

                    //The positions we are to move the invisible file input
                    // The 20 at the end is an arbitrary number of pixels that we can shift the input such that cursor is not pointing at the end of the Browse button but somewhere nearer the middle
                    moveInputX = cursorX - wrapperX - inputWidth + 20;
                    // Slides the invisible input Browse button to be positioned middle under the cursor
                    moveInputY = cursorY- wrapperY - (inputHeight/2);

                    // Apply the positioning styles to actually move the invisible file input
                    input.css({
                        left:moveInputX,
                        top:moveInputY
                    });
                });

                $('body').on('change', '.file-input-wrapper input[type=file]', function(){

                    var fileName;
                    fileName = $(this).val();

                    // Remove any previous file names
                    $(this).parent().next('.file-input-name').remove();
                    if (!!$(this).prop('files') && $(this).prop('files').length > 1) {
                        fileName = $(this)[0].files.length+' files';
                        //$(this).parent().after('<span class="file-input-name">'+$(this)[0].files.length+' files</span>');
                    }
                    else {
                        // var fakepath = 'C:\\fakepath\\';
                        // fileName = $(this).val().replace('C:\\fakepath\\','');
                        fileName = fileName.substring(fileName.lastIndexOf('\\')+1,fileName.length);
                    }

                    var selectedFileNamePlacement = $(this).data('filename-placement') || 'outside';
                    if (selectedFileNamePlacement === 'inside') {
                        // Print the fileName inside
                        $(this).siblings('span').html(fileName);
                        $(this).attr('title', fileName);
                    } else if (selectedFileNamePlacement === 'outside') {
                        // Print the fileName aside (right after the the button)
                        $(this).parent().after('<span class="file-input-name">'+fileName+'</span>');
                    } else {
                        console.log('Error in bootstrap-file-input plugin : unknown placement [' + selectedFileNamePlacement + '] for selected filename');
                    }
                });

            });

    };

// Add the styles before the first stylesheet
// This ensures they can be easily overridden with developer styles
    var cssHtml = '<style>'+
        '.file-input-wrapper { overflow: hidden; position: relative; cursor: pointer; z-index: 1; }'+
        '.file-input-wrapper input[type=file], .file-input-wrapper input[type=file]:focus, .file-input-wrapper input[type=file]:hover { position: absolute; top: 0; left: 0; cursor: pointer; opacity: 0; filter: alpha(opacity=0); z-index: 99; outline: 0; }'+
        '.file-input-name { margin-left: 8px; }'+
        '</style>';
    $('link[rel=stylesheet]').eq(0).before(cssHtml);

})(jQuery);
var app = angular.module("app", ["ngRoute", "ngAnimate","app.config", "ui.bootstrap", "mgo-angular-wizard", "ui.tree", "ngMap", "ngTagsInput", "app.ui.ctrls", "app.ui.services", "app.controllers", "app.directives", "app.form.validation", "app.ui.form.ctrls", "app.ui.form.directives", "app.tables", "app.map", "countTo", "mediaPlayer","ngDragDrop", "app.music"]).run(["$rootScope", "$location","loggit",
    function ($rootScope, $location,loggit) {

        $(document).ready(function(){

            setTimeout(function(){
                $('.page-loading-overlay').addClass("loaded");
                $('.load_circle_wrapper').addClass("loaded");

                loggit.logSuccess("Welcome to Groovy! Navigate and add songs to your playlists.");

            },1000);

        });

    }] ).config(["$routeProvider",
    function($routeProvider) {
        return $routeProvider.when("/", {
            redirectTo: "/dashboard"
        }).when("/dashboard", {
                templateUrl: "app/views/dashboards/dashboard.html"
            }).when("/dashboard/dashboard", {
                templateUrl: "app/views/dashboards/dashboard.html"
            }).when("/ui/typography", {
                templateUrl: "app/views/ui_elements/typography.html"
            }).when("/ui/buttons", {
                templateUrl: "app/views/ui_elements/buttons.html"
            }).when("/ui/icons", {
                templateUrl: "app/views/ui_elements/icons.html"
            }).when("/ui/grids", {
                templateUrl: "app/views/ui_elements/grids.html"
            }).when("/ui/widgets", {
                templateUrl: "app/views/ui_elements/widgets.html"
            }).when("/ui/components", {
                templateUrl: "app/views/ui_elements/components.html"
            }).when("/ui/timeline", {
                templateUrl: "app/views/ui_elements/timeline.html"
            }).when("/ui/nested-lists", {
                templateUrl: "app/views/ui_elements/nested-lists.html"
            }).when("/playlist/sample", {
                templateUrl: "app/views/playlist/sample.html"
            }).when("/artist/:title", {
              templateUrl: "app/views/playlist/artist.html"
            }).when("/playlist/:title", {
              templateUrl: "app/views/playlist/playlist.html"
            }).when("/artist-list", {
              templateUrl: "app/views/playlist/artists-list.html"
            }).when("/albums", {
              templateUrl: "app/views/playlist/albums.html"
            }).when("/genres", {
              templateUrl: "app/views/playlist/genres.html"
            }).when("/forms/elements", {
                templateUrl: "app/views/forms/elements.html"
            }).when("/forms/layouts", {
                templateUrl: "app/views/forms/layouts.html"
            }).when("/forms/validation", {
                templateUrl: "app/views/forms/validation.html"
            }).when("/forms/wizard", {
                templateUrl: "app/views/forms/wizard.html"
            }).when("/maps/gmap", {
                templateUrl: "app/views/maps/gmap.html"
            }).when("/maps/jqvmap", {
                templateUrl: "app/views/maps/jqvmap.html"
            }).when("/tables/static", {
                templateUrl: "app/views/tables/static.html"
            }).when("/tables/responsive", {
                templateUrl: "app/views/tables/responsive.html"
            }).when("/tables/dynamic", {
                templateUrl: "app/views/tables/dynamic.html"
            }).when("/mail/inbox", {
                templateUrl: "app/views/mail/inbox.html"
            }).when("/mail/compose", {
                templateUrl: "app/views/mail/compose.html"
            }).when("/mail/single", {
                templateUrl: "app/views/mail/single.html"
            }).when("/pages/features", {
                templateUrl: "app/views/pages/features.html"
            }).when("/front", {
              templateUrl: "app/views/pages/frontpage.html"
            }).when("/pages/signin", {
                templateUrl: "app/views/pages/signin.html"
            }).when("/pages/signup", {
                templateUrl: "app/views/pages/signup.html"
            }).when("/pages/forgot", {
                templateUrl: "app/views/pages/forgot-password.html"
            }).when("/pages/profile", {
                templateUrl: "app/views/pages/profile.html"
            }).when("/404", {
                templateUrl: "app/views/pages/404.html"
            }).when("/pages/500", {
                templateUrl: "app/views/pages/500.html"
            }).when("/pages/blank", {
                templateUrl: "app/views/pages/blank.html"
            }).when("/pages/contact", {
                templateUrl: "app/views/pages/contact.html"
            }).otherwise({
                redirectTo: "/404"
            });
    }
]);


/**************************
 App Map
 **************************/

angular.module("app.map", []).directive("uiJqvmap", [
        function() {
            return {
                restrict: "A",
                scope: {
                    options: "="
                },
                link: function(scope, ele) {
                    var options;
                    return options = scope.options, ele.vectorMap(options);
                }
            };
        }
    ]).controller("jqvmapCtrl", ["$scope",
        function($scope) {
            var sample_data;
            return sample_data = {
                af: "16.63",
                al: "11.58",
                dz: "158.97",
                ao: "85.81",
                ag: "1.1",
                ar: "351.02",
                am: "8.83",
                au: "1219.72",
                at: "366.26",
                az: "52.17",
                bs: "7.54",
                bh: "21.73",
                bd: "105.4",
                bb: "3.96",
                by: "52.89",
                be: "461.33",
                bz: "1.43",
                bj: "6.49",
                bt: "1.4",
                bo: "19.18",
                ba: "16.2",
                bw: "12.5",
                br: "2023.53",
                bn: "11.96",
                bg: "44.84",
                bf: "8.67",
                bi: "1.47",
                kh: "11.36",
                cm: "21.88",
                ca: "1563.66",
                cv: "1.57",
                cf: "2.11",
                td: "7.59",
                cl: "199.18",
                cn: "5745.13",
                co: "283.11",
                km: "0.56",
                cd: "12.6",
                cg: "11.88",
                cr: "35.02",
                ci: "22.38",
                hr: "59.92",
                cy: "22.75",
                cz: "195.23",
                dk: "304.56",
                dj: "1.14",
                dm: "0.38",
                "do": "50.87",
                ec: "61.49",
                eg: "216.83",
                sv: "21.8",
                gq: "14.55",
                er: "2.25",
                ee: "19.22",
                et: "30.94",
                fj: "3.15",
                fi: "231.98",
                fr: "2555.44",
                ga: "12.56",
                gm: "1.04",
                ge: "11.23",
                de: "3305.9",
                gh: "18.06",
                gr: "305.01",
                gd: "0.65",
                gt: "40.77",
                gn: "4.34",
                gw: "0.83",
                gy: "2.2",
                ht: "6.5",
                hn: "15.34",
                hk: "226.49",
                hu: "132.28",
                is: "12.77",
                "in": "1430.02",
                id: "695.06",
                ir: "337.9",
                iq: "84.14",
                ie: "204.14",
                il: "201.25",
                it: "2036.69",
                jm: "13.74",
                jp: "5390.9",
                jo: "27.13",
                kz: "129.76",
                ke: "32.42",
                ki: "0.15",
                kr: "986.26",
                undefined: "5.73",
                kw: "117.32",
                kg: "4.44",
                la: "6.34",
                lv: "23.39",
                lb: "39.15",
                ls: "1.8",
                lr: "0.98",
                ly: "77.91",
                lt: "35.73",
                lu: "52.43",
                mk: "9.58",
                mg: "8.33",
                mw: "5.04",
                my: "218.95",
                mv: "1.43",
                ml: "9.08",
                mt: "7.8",
                mr: "3.49",
                mu: "9.43",
                mx: "1004.04",
                md: "5.36",
                mn: "5.81",
                me: "3.88",
                ma: "91.7",
                mz: "10.21",
                mm: "35.65",
                na: "11.45",
                np: "15.11",
                nl: "770.31",
                nz: "138",
                ni: "6.38",
                ne: "5.6",
                ng: "206.66",
                no: "413.51",
                om: "53.78",
                pk: "174.79",
                pa: "27.2",
                pg: "8.81",
                py: "17.17",
                pe: "153.55",
                ph: "189.06",
                pl: "438.88",
                pt: "223.7",
                qa: "126.52",
                ro: "158.39",
                ru: "1476.91",
                rw: "5.69",
                ws: "0.55",
                st: "0.19",
                sa: "434.44",
                sn: "12.66",
                rs: "38.92",
                sc: "0.92",
                sl: "1.9",
                sg: "217.38",
                sk: "86.26",
                si: "46.44",
                sb: "0.67",
                za: "354.41",
                es: "1374.78",
                lk: "48.24",
                kn: "0.56",
                lc: "1",
                vc: "0.58",
                sd: "65.93",
                sr: "3.3",
                sz: "3.17",
                se: "444.59",
                ch: "522.44",
                sy: "59.63",
                tw: "426.98",
                tj: "5.58",
                tz: "22.43",
                th: "312.61",
                tl: "0.62",
                tg: "3.07",
                to: "0.3",
                tt: "21.2",
                tn: "43.86",
                tr: "729.05",
                tm: 0,
                ug: "17.12",
                ua: "136.56",
                ae: "239.65",
                gb: "2258.57",
                us: "14624.18",
                uy: "40.71",
                uz: "37.72",
                vu: "0.72",
                ve: "285.21",
                vn: "101.99",
                ye: "30.02",
                zm: "15.69",
                zw: "5.57"
            }, $scope.worldMap = {
                map: "world_en",
                backgroundColor: null,
                color: "#ffffff",
                hoverOpacity: 0.7,
                selectedColor: "#db5031",
                hoverColor: "#db5031",
                enableZoom: !0,
                showTooltip: !0,
                values: sample_data,
                scaleColors: ["#F1EFF0", "#c1bfc0"],
                normalizeFunction: "polynomial"
            }, $scope.USAMap = {
                map: "usa_en",
                backgroundColor: null,
                color: "#ffffff",
                selectedColor: "#db5031",
                hoverColor: "#db5031",
                enableZoom: !0,
                showTooltip: !0,
                selectedRegion: "MO"
            }, $scope.europeMap = {
                map: "europe_en",
                backgroundColor: null,
                color: "#ffffff",
                hoverOpacity: 0.7,
                selectedColor: "#db5031",
                hoverColor: "#db5031",
                enableZoom: !0,
                showTooltip: !0,
                values: sample_data,
                scaleColors: ["#F1EFF0", "#c1bfc0"],
                normalizeFunction: "polynomial"
            };
        }
    ]);

/**************************
 Timer
 **************************/
angular.module('countTo', []).controller("countTo", ["$scope",
        function($scope) {

            return $scope.countersmall1 = {
                countTo: 20,
                countFrom: 0
            },$scope.countersmall2 = {
                countTo: 42,
                countFrom: 0
            },$scope.countersmall3 = {
                countTo: 90,
                countFrom: 0
            },$scope.countersmall1dash = {
                countTo: 420,
                countFrom: 0
            },$scope.countersmall2dash = {
                countTo: 742,
                countFrom: 0
            },$scope.countersmall3dash = {
                countTo: 100,
                countFrom: 0
            };

        }]).directive('countTo', ['$timeout', function ($timeout) {
        return {
            replace: false,
            scope: true,
            link: function (scope, element, attrs) {

                var e = element[0];
                var num, refreshInterval, duration, steps, step, countTo, value, increment;

                var calculate = function () {
                    refreshInterval = 30;
                    step = 0;
                    scope.timoutId = null;
                    countTo = parseInt(attrs.countTo) || 0;
                    scope.value = parseInt(attrs.value, 10) || 0;
                    duration = (parseFloat(attrs.duration) * 1000) || 0;

                    steps = Math.ceil(duration / refreshInterval);
                    increment = ((countTo - scope.value) / steps);
                    num = scope.value;
                };

                var tick = function () {
                    scope.timoutId = $timeout(function () {
                        num += increment;
                        step++;
                        if (step >= steps) {
                            $timeout.cancel(scope.timoutId);
                            num = countTo;
                            e.textContent = countTo;
                        } else {
                            e.textContent = Math.round(num);
                            tick();
                        }
                    }, refreshInterval);

                };

                var start = function () {
                    if (scope.timoutId) {
                        $timeout.cancel(scope.timoutId);
                    }
                    calculate();
                    tick();
                };

                attrs.$observe('countTo', function (val) {
                    if (val) {
                        start();
                    }
                });

                attrs.$observe('value', function (val) {
                    start();
                });

                return true;
            }
        };

    }]);
angular.module('app.config', []).constant('top100SongsEver', [
  { url: 'http://upload.wikimedia.org/wikipedia/en/5/5e/U2_One.ogg', displayName: 'U2 - One' },
  { url: 'http://upload.wikimedia.org/wikipedia/en/6/6c/NirvanaSmellsLikeTeenSpirit.ogg', displayName: 'Nirvana - Smells Like Teen Spirit' },
  { url: 'http://upload.wikimedia.org/wikipedia/en/b/be/My_Name_Is.ogg', displayName: 'Eminem - My Name is' },
  { url: 'http://upload.wikimedia.org/wikipedia/en/c/c4/Radiohead_-_Creep_%28sample%29.ogg', displayName: 'Radiohead - Creep' },
  { url: 'http://upload.wikimedia.org/wikipedia/en/6/64/OasisLiveForever.ogg', displayName: 'Oasis - Live Forever' },
  { url: 'http://upload.wikimedia.org/wikipedia/en/6/65/Eagles_-_Hotel_California.ogg', displayName: 'Eagles - Hotel California' },
  { url: 'http://upload.wikimedia.org/wikipedia/en/c/cb/Stairway_to_Heaven_3_sections.ogg', displayName: 'Led Zeppelin - Stairway to Heaven' },
  { url: 'http://upload.wikimedia.org/wikipedia/en/c/cb/Pink_floyd_another_brick_in_the_wall_part_2.ogg', displayName: 'Pink Floyd - Another Brick in the Wall' },
  { url: 'http://upload.wikimedia.org/wikipedia/en/d/d0/Beatles_cometogether.ogg', displayName: 'Beatles - Come Together' },
  { url: 'http://upload.wikimedia.org/wikipedia/en/d/db/Layla_sample_1.ogg', displayName: 'Derek and the Dominos - Layla' }
]);
angular.module("app.controllers", []).controller("AdminAppCtrl", ["$scope", "$location",
  function ($scope, $location) {
    $scope.checkIfOwnPage = function () {

      return _.contains(["/front","/404", "/pages/500", "/pages/login", "/pages/signin", "/pages/signin1", "/pages/signin2", "/pages/signup", "/pages/signup1", "/pages/signup2", "/pages/forgot", "/pages/lock-screen"], $location.path());

    };

    $scope.checkIfFixedPage = function () {

      return _.contains(["/dashboard"], $location.path());

    };

    $scope.info = {
      theme_name: "Kimono",
      user_name: "Jane Doe"
    };

  }
]).controller("NavCtrl", ['navigationMenuService',
  function (navigationMenuService) {

    this.navigationState = navigationMenuService;

    this.SwitchToMenu = function () {
      navigationMenuService.menu = true;
      navigationMenuService.playlist = false;
    };

    this.SwitchToPlaylist = function () {
      navigationMenuService.menu = false;
      navigationMenuService.playlist = true;
    };

  }
]).controller("ActionsCtrl", ['$scope',function ($scope) {

    this.toggleChat = function () {
      $('.chat-bar').toggleClass("visible");
    };

  }
]);

/*
 App Form validations
 Validator functions for form elements (signIn,signUp and custom forms)
 */

angular.module("app.form.validation", []).controller("wizardFormCtrl", ["$scope",
  function ($scope) {
    return $scope.wizard = {
      firstName: "some name",
      lastName: "",
      email: "",
      password: "",
      age: "",
      address: ""
    }, $scope.isValidateStep1 = function () {
      return void 0;
    }, $scope.finishedWizard = function () {
      return void 0;
    };
  }
]).controller("formConstraintsCtrl", ["$scope",
  function ($scope) {
    var original;
    return $scope.form = {
      required: "",
      minlength: "",
      maxlength: "",
      length_rage: "",
      type_something: "",
      confirm_type: "",
      foo: "",
      email: "",
      url: "",
      num: "",
      minVal: "",
      maxVal: "",
      valRange: "",
      pattern: ""
    }, original = angular.copy($scope.form), $scope.revert = function () {
      return $scope.form = angular.copy(original), $scope.form_constraints.$setPristine();
    }, $scope.canRevert = function () {
      return !angular.equals($scope.form, original) || !$scope.form_constraints.$pristine;
    }, $scope.canSubmit = function () {
      return $scope.form_constraints.$valid && !angular.equals($scope.form, original);
    };
  }
]).controller("signinCtrl", ["$scope",
  function ($scope) {
    var original;
    return $scope.user = {
      email: "",
      password: ""
    }, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function () {
      return $scope.user = angular.copy(original), $scope.form_signin.$setPristine();
    }, $scope.canRevert = function () {
      return !angular.equals($scope.user, original) || !$scope.form_signin.$pristine;
    }, $scope.canSubmit = function () {
      return $scope.form_signin.$valid && !angular.equals($scope.user, original);
    }, $scope.submitForm = function () {
      return $scope.showInfoOnSubmit = !0, $scope.revert();
    };
  }
]).controller("signupCtrl", ["$scope",
  function ($scope) {
    var original;
    return $scope.user = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: ""
    }, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function () {
      return $scope.user = angular.copy(original), $scope.form_signup.$setPristine(), $scope.form_signup.confirmPassword.$setPristine();
    }, $scope.canRevert = function () {
      return !angular.equals($scope.user, original) || !$scope.form_signup.$pristine;
    }, $scope.canSubmit = function () {
      return $scope.form_signup.$valid && !angular.equals($scope.user, original);
    }, $scope.submitForm = function () {
      return $scope.showInfoOnSubmit = !0, $scope.revert();
    };
  }
]).directive("validateEquals", [
  function () {
    return {
      require: "ngModel",
      link: function (scope, ele, attrs, ngModelCtrl) {
        var validateEqual;
        return validateEqual = function (value) {
          var valid;
          return valid = value === scope.$eval(attrs.validateEquals), ngModelCtrl.$setValidity("equal", valid), "function" == typeof valid ? valid({
            value: void 0
          }) : void 0;
        }, ngModelCtrl.$parsers.push(validateEqual), ngModelCtrl.$formatters.push(validateEqual), scope.$watch(attrs.validateEquals, function (newValue, oldValue) {
          return newValue !== oldValue ? ngModelCtrl.$setViewValue(ngModelCtrl.$ViewValue) : void 0;
        });
      }
    };
  }
]);


/*
 App Form Ui Controls
 Controllers for form Ui components
 */

angular.module("app.ui.form.ctrls", []).controller("TagsDemoCtrl", ["$scope",
  function ($scope) {
    $scope.tags = ["foo", "bar"];
  }
]).controller("DatepickerDemoCtrl", ["$scope",
  function ($scope) {
    return $scope.today = function () {
      $scope.dt = new Date();
    }, $scope.today(), $scope.showWeeks = !0, $scope.toggleWeeks = function () {
      $scope.showWeeks = !$scope.showWeeks;
    }, $scope.clear = function () {
      $scope.dt = null;
    }, $scope.disabled = function (date, mode) {
      return "day" === mode && (0 === date.getDay() || 6 === date.getDay());
    }, $scope.toggleMin = function () {
      var _ref;
      $scope.minDate = null !== (_ref = $scope.minDate) ? _ref : {
        "null": new Date()
      };
    }, $scope.toggleMin(), $scope.open = function ($event) {
      return $event.preventDefault(), $event.stopPropagation(), $scope.opened = !0;
    }, $scope.dateOptions = {
      "year-format": "'yy'",
      "starting-day": 1
    }, $scope.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "shortDate"], $scope.format = $scope.formats[0];
  }
]).controller("TimepickerDemoCtrl", ["$scope",
  function ($scope) {
    return $scope.mytime = new Date(), $scope.hstep = 1, $scope.mstep = 15, $scope.options = {
      hstep: [1, 2, 3],
      mstep: [1, 5, 10, 15, 25, 30]
    }, $scope.ismeridian = !0, $scope.toggleMode = function () {
      $scope.ismeridian = !$scope.ismeridian;
    }, $scope.update = function () {
      var d;
      return d = new Date(), d.setHours(14), d.setMinutes(0), $scope.mytime = d;
    }, $scope.changed = function () {
      return void 0;
    }, $scope.clear = function () {
      $scope.mytime = null;
    };
  }
]).controller("TypeaheadCtrl", ["$scope",
  function ($scope) {
    return $scope.selected = void 0, $scope.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
  }
]).controller("RatingDemoCtrl", ["$scope",
  function ($scope) {
    return $scope.rate = 7, $scope.max = 10, $scope.isReadonly = !1, $scope.hoveringOver = function (value) {
      return $scope.overStar = value, $scope.percent = 100 * (value / $scope.max);
    }, $scope.ratingStates = [{
      stateOn: "glyphicon-ok-sign",
      stateOff: "glyphicon-ok-circle"
    }, {
      stateOn: "glyphicon-star",
      stateOff: "glyphicon-star-empty"
    }, {
      stateOn: "glyphicon-heart",
      stateOff: "glyphicon-ban-circle"
    }, {
      stateOn: "glyphicon-heart"
    }, {
      stateOff: "glyphicon-off"
    }];
  }
]);


/*
 App Tables
 Controller for dynamic and other tables
 */

angular.module("app.tables", []).controller("tableCtrl", ["$scope", "$filter",
  function ($scope, $filter) {
    var init;
    return $scope.stores = [{
      name: "Nijiya Market",
      price: "$$",
      sales: 292,
      rating: 4
    }, {
      name: "Eat On Monday Truck",
      price: "$",
      sales: 119,
      rating: 4.3
    }, {
      name: "Tea Era",
      price: "$",
      sales: 874,
      rating: 4
    }, {
      name: "Rogers Deli",
      price: "$",
      sales: 347,
      rating: 4.2
    }, {
      name: "MoBowl",
      price: "$$$",
      sales: 24,
      rating: 4.6
    }, {
      name: "The Milk Pail Market",
      price: "$",
      sales: 543,
      rating: 4.5
    }, {
      name: "Nob Hill Foods",
      price: "$$",
      sales: 874,
      rating: 4
    }, {
      name: "Scratch",
      price: "$$$",
      sales: 643,
      rating: 3.6
    }, {
      name: "Gochi Japanese Fusion Tapas",
      price: "$$$",
      sales: 56,
      rating: 4.1
    }, {
      name: "Cost Plus World Market",
      price: "$$",
      sales: 79,
      rating: 4
    }, {
      name: "Bumble Bee Health Foods",
      price: "$$",
      sales: 43,
      rating: 4.3
    }, {
      name: "Costco",
      price: "$$",
      sales: 219,
      rating: 3.6
    }, {
      name: "Red Rock Coffee Co",
      price: "$",
      sales: 765,
      rating: 4.1
    }, {
      name: "99 Ranch Market",
      price: "$",
      sales: 181,
      rating: 3.4
    }, {
      name: "Mi Pueblo Food Center",
      price: "$",
      sales: 78,
      rating: 4
    }, {
      name: "Cucina Venti",
      price: "$$",
      sales: 163,
      rating: 3.3
    }, {
      name: "Sufi Coffee Shop",
      price: "$",
      sales: 113,
      rating: 3.3
    }, {
      name: "Dana Street Roasting",
      price: "$",
      sales: 316,
      rating: 4.1
    }, {
      name: "Pearl Cafe",
      price: "$",
      sales: 173,
      rating: 3.4
    }, {
      name: "Posh Bagel",
      price: "$",
      sales: 140,
      rating: 4
    }, {
      name: "Artisan Wine Depot",
      price: "$$",
      sales: 26,
      rating: 4.1
    }, {
      name: "Hong Kong Chinese Bakery",
      price: "$",
      sales: 182,
      rating: 3.4
    }, {
      name: "Starbucks",
      price: "$$",
      sales: 97,
      rating: 3.7
    }, {
      name: "Tapioca Express",
      price: "$",
      sales: 301,
      rating: 3
    }, {
      name: "House of Bagels",
      price: "$",
      sales: 82,
      rating: 4.4
    }], $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function (page) {
      var end, start;
      return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end);
    }, $scope.onFilterChange = function () {
      return $scope.select(1), $scope.currentPage = 1, $scope.row = "";
    }, $scope.onNumPerPageChange = function () {
      return $scope.select(1), $scope.currentPage = 1;
    }, $scope.onOrderChange = function () {
      return $scope.select(1), $scope.currentPage = 1;
    }, $scope.search = function () {
      return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange();
    }, $scope.order = function (rowName) {
      return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0;
    }, $scope.numPerPageOpt = [3, 5, 10, 20], $scope.numPerPage = $scope.numPerPageOpt[2], $scope.currentPage = 1, $scope.currentPageStores = [], (init = function () {
      return $scope.search(), $scope.select($scope.currentPage);
    }), $scope.search();
  }
]);

/*
 App Ui Controllers
 Provides general controllers for the app
 */

angular.module("app.ui.ctrls", []).controller("NotifyCtrl", ["$scope", "loggit",
  function ($scope, loggit) {
    $scope.notify = function (type) {
      switch (type) {
        case "info":
          return loggit.log("Hello! This is an alert of the info importance level.");
        case "success":
          return loggit.logSuccess("Great! You did something successfully.");
        case "warning":
          return loggit.logWarning("Warning! Something that happened that is not critical but important.");
        case "error":
          return loggit.logError("Error! Something went terribly wrong and needs your attention.");
      }
    };
  }
]).controller("AlertDemoCtrl", ["$scope",
  function ($scope) {
    $scope.alerts = [{
      type: "success",
      msg: "Great! You did something successfully."
    }, {
      type: "info",
      msg: "Hello! This is an alert of the info importance level."
    }, {
      type: "warning",
      msg: "Warning! Something that happened that is not critical but important."
    }, {
      type: "danger",
      msg: "Error! Something went terribly wrong and needs your attention."
    }];

    $scope.addAlert = function () {
      $scope.alerts.push({msg: 'Another alert!'});
    };

    $scope.closeAlert = function (index) {
      $scope.alerts.splice(index, 1);
    };
  }
]).controller("ProgressDemoCtrl", ["$scope",
  function ($scope) {
    $scope.max = 200;

    $scope.random = function () {
      var value = Math.floor((Math.random() * 100) + 1);
      var type;

      if (value < 25) {
        type = 'success';
      } else if (value < 50) {
        type = 'info';
      } else if (value < 75) {
        type = 'warning';
      } else {
        type = 'danger';
      }

      $scope.showWarning = (type === 'danger' || type === 'warning');

      $scope.dynamic = value;
      $scope.type = type;
    };
    $scope.random();

    $scope.randomStacked = function () {
      $scope.stacked = [];
      var types = ['success', 'info', 'warning', 'danger'];

      for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
        var index = Math.floor((Math.random() * 4));
        $scope.stacked.push({
          value: Math.floor((Math.random() * 30) + 1),
          type: types[index]
        });
      }
    };
    $scope.randomStacked();
  }
]).controller("AccordionDemoCtrl", ["$scope",
  function ($scope) {
    return $scope.oneAtATime = !0, $scope.groups = [{
      title: "First Group Header",
      content: "First Group Body"
    }, {
      title: "Second Group Header",
      content: "Second Group Body"
    }, {
      title: "Third Group Header",
      content: "Third Group Body"
    }], $scope.items = ["Item 1", "Item 2", "Item 3"], $scope.status = {
      isFirstOpen: !0,
      isFirstOpen1: !0,
      isFirstOpen2: !0,
      isFirstOpen3: !0,
      isFirstOpen4: !0,
      isFirstOpen5: !0,
      isFirstOpen6: !0
    }, $scope.addItem = function () {
      var newItemNo;
      newItemNo = $scope.items.length + 1;
      $scope.items.push("Item " + newItemNo);
    };
  }
]).controller("CollapseDemoCtrl", ["$scope",
  function ($scope) {
    $scope.isCollapsed = !1;
  }
]).controller("ModalDemoCtrl", ["$scope", "$modal", "$log",
  function ($scope, $modal, $log) {
    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function (size) {

      var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  }
]).controller("ModalInstanceCtrl", ["$scope", "$modalInstance", "items",
  function ($scope, $modalInstance, items) {
    $scope.items = items;
    $scope.selected = {
      item: $scope.items[0]
    };

    $scope.ok = function () {
      $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }
]).controller("PaginationDemoCtrl", ["$scope",
  function ($scope) {
    $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function () {
      console.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
  }
]).controller("MapDemoCtrl", ["$scope", "$http", "$interval",
  function ($scope, $http, $interval) {
    var i, markers;
    for (markers = [], i = 0; 8 > i;) {
      markers[i] = new google.maps.Marker({
        title: "Marker: " + i
      });
      i++;
    }
    $scope.GenerateMapMarkers = function () {
      var d, lat, lng, loc, numMarkers;
      for (d = new Date(), $scope.date = d.toLocaleString(), numMarkers = Math.floor(4 * Math.random()) + 4, i = 0; numMarkers > i;) {
        lat = 38.73 + Math.random() / 100;
        lng = -9.14 + Math.random() / 100;
        loc = new google.maps.LatLng(lat, lng);
        markers[i].setPosition(loc);
        markers[i].setMap($scope.map);
        i++;
      }
    };
    $interval($scope.GenerateMapMarkers, 2e3);
  }
]).controller("TreeDemoCtrl", ["$scope",
  function ($scope) {
    // Parameters

    $scope.list = [{
      "id": 1,
      "title": "1. dragon-breath",
      "items": []
    }, {
      "id": 2,
      "title": "2. moiré-vision",
      "items": [{
        "id": 21,
        "title": "2.1. tofu-animation",
        "items": [{
          "id": 211,
          "title": "2.1.1. spooky-giraffe",
          "items": []
        }, {
          "id": 212,
          "title": "2.1.2. bubble-burst",
          "items": []
        }]
      }, {
        "id": 22,
        "title": "2.2. barehand-atomsplitting",
        "items": []
      }]
    }, {
      "id": 3,
      "title": "3. unicorn-zapper",
      "items": []
    }, {
      "id": 4,
      "title": "4. romantic-transclusion",
      "items": []
    }];

    $scope.callbacks = {};

    $scope.remove = function (scope) {
      scope.remove();
    };

    $scope.toggle = function (scope) {
      scope.toggle();
    };

    $scope.newSubItem = function (scope) {
      var nodeData = scope.$modelValue;
      nodeData.items.push({
        id: nodeData.id * 10 + nodeData.items.length,
        title: nodeData.title + '.' + (nodeData.items.length + 1),
        items: []
      });
    };
  }
]);


/*
 App Ui Controllers
 Provides general controllers for the app
 */

angular.module('app.music', ['mediaPlayer','ngDragDrop'])
  .controller('PlayListCtrl', ['$scope','PlayListSrv', 'CreatePlaylistSrv',
    function ($scope,PlayListSrv, CreatePlaylistSrv) {
      this.audioPlaylist = [];
      var CreateNewPlaylistSrv = CreatePlaylistSrv;

      this.userPlaylists = PlayListSrv.playlists;

      this.addSong = function (audioElement) {
        this.audioPlaylist.push(angular.copy(audioElement));
      };

      this.removeSong = function (index) {
        this.audioPlaylist.splice(index, 1);
      };

      this.dropSong = function (audioElement, index) {
        this.audioPlaylist.splice(index, 0, angular.copy(audioElement));
      };

      this.getSongImage = function (currentTrack) {
        if (typeof this.audioPlaylist[currentTrack - 1] != "undefined") {
          return this.audioPlaylist[currentTrack - 1].image;
        }
      };

      this.getSongArtist = function (currentTrack) {
        if (typeof this.audioPlaylist[currentTrack - 1] != "undefined") {
          return this.audioPlaylist[currentTrack - 1].artist;
        }
      };

      this.getSongName = function (currentTrack) {
        if (typeof this.audioPlaylist[currentTrack - 1] != "undefined") {
          return this.audioPlaylist[currentTrack - 1].title;
        }
      };

      this.seekPercentage = function ($event) {
        var percentage = ($event.offsetX / $event.target.offsetWidth);
        if (percentage <= 1) {
          return percentage;
        } else {
          return 0;
        }
      };

      this.createNewPlaylist = function(song){

        CreateNewPlaylistSrv.openCreateModal(song);

      };

    }]).controller('ArtistListingCtrl',['$scope','ArtistListingSrv',
    function($scope,ArtistListingSrv){

      $scope.ArtistsSrv = ArtistListingSrv;

      ArtistListingSrv.getArtists(function(data){
        // no need to read data because its binded to $scope.AlbumsSrv
        // You can however process something only after the data comes back
      });

    }]).controller('AlbumsCtrl',['$scope','AlbumsListingSrv',
    function($scope,AlbumsListingSrv){

      $scope.AlbumsSrv = AlbumsListingSrv;

      AlbumsListingSrv.getAlbums(function(data){
        // no need to read data because its binded to $scope.AlbumsSrv
        // You can however process something only after the data comes back
      });


    }]).controller('GenresCtrl',['$scope','GenresListingSrv',
    function($scope,GenresListingSrv){

      $scope.GenresSrv = GenresListingSrv;

      GenresListingSrv.getGenres(function(data){
        // no need to read data because its binded to $scope.GenresSrv
        // You can however process something only after the data comes back
      });


    }]).controller('ArtistCtrl', ['$scope','$routeParams', 'ArtistSrv','PlayListSrv', 'navigationMenuService','loggit',
    function ($scope,$routeParams, ArtistSrv,PlayListSrv, navigationMenuService,loggit) {

      this.ArtistSrv = ArtistSrv;
      var artistPlaylistVar = [],
        artistPlaylistAlbums = [];


      this.AlbumList = true;
      this.FullList = false;
      this.following = "Follow artist";
      this.following_class = "btn-default";

      this.follow = function(){

        this.following = "Following";
        this.following_class = "btn-primary";

        loggit.logSuccess('Yaay!! You are now following this artist');

      };

      ArtistSrv.getArtist($routeParams.title, function (response) {

        if(typeof response.albums != "undefined"){

          _.map(response.albums, function (album) {

            artistPlaylistAlbums.push({
              album_name: album.album_name,
              album_image: album.album_image,
              album_release: album.album_release,
              songs:[]
            });

            _.map(album.songs, function (song) {

              /*Put them all together in one single list (for adding to new playlists for example)*/

              var parseTitle = song.displayName.match(/(.*?)\s?-\s?(.*)?$/);

              artistPlaylistVar.push({
                image: song.image,
                src: song.url,
                url: song.url,
                type: song.type,
                artist: parseTitle[1],
                title: parseTitle[2],
                displayName:song.displayName
              });

              /*Put songs also in this artist ordered by album*/

              artistPlaylistAlbums[artistPlaylistAlbums.length - 1].songs.push({
                image: song.image,
                src: song.url,
                url: song.url,
                type: song.type,
                artist: parseTitle[1],
                title: parseTitle[2],
                displayName:song.displayName
              });
            });

          });

          $scope.artistName = response.name;
          $scope.artistImage = response.image;
          $scope.artistBanner = response.banner;
          $scope.artistGenre = response.genre;
          $scope.artistAbout = response.about;

        }

      });

      $scope.artistPlaylist = artistPlaylistVar;
      $scope.artistPlaylistAlbums = artistPlaylistAlbums;


      this.addSongs = function (playlist, callback) {

        _.each(artistPlaylistVar, function (audioElement) {
          playlist.push(angular.copy(audioElement));

          if ((artistPlaylistVar.indexOf(audioElement) + 1) == artistPlaylistVar.length) {
            // Callback goes here
            if (callback) {
              callback();
            }
          }

        });

        navigationMenuService.menu = false;
        navigationMenuService.playlist = true;

      };

      this.addSongsAndPlay = function (playlist, mediaPlayer) {

        this.addSongs(playlist, function () {

          setTimeout(function () {
            mediaPlayer.play();
          }, 1000);

        });

      };

      this.addSongToPlaylist = function(song,playlist){

        PlayListSrv.addSongToPlaylist(song,playlist);
      };

      this.toggleAlbumsList = function(){
        this.AlbumList = true;
        this.FullList = false;
      };

      this.toggleFullList = function(){
        this.AlbumList = false;
        this.FullList = true;
      };


    }]).controller('UserPlayListCtrl', ['$routeParams', 'PlayListSrv', 'navigationMenuService',
    function ($routeParams, PlayListSrv, navigationMenuService) {

      this.PlayListSrv = PlayListSrv;
      var UserPlaylistVar = [],
        playlistTitle, playlistImage, playlistBanner, playlistGenre,playlistUrlName;

      PlayListSrv.getPlaylist($routeParams.title, function (response) {

        if (typeof response.songs != "undefined") {

          _.map(response.songs, function (song) {
            var parseTitle = song.displayName.match(/(.*?)\s?-\s?(.*)?$/);
            UserPlaylistVar.push({
              image: song.image,
              src: song.url,
              url: song.url,
              type: song.type,
              artist: parseTitle[1],
              title: parseTitle[2],
              displayName:song.displayName
            });
          });

          playlistTitle = response.name;
          playlistImage = response.image;
          playlistBanner = response.banner;
          playlistGenre = response.genre;
          playlistUrlName = response.url_name;
        }

      });

      this.userPlaylist = UserPlaylistVar;
      this.playlistName = playlistTitle;
      this.playlistImage = playlistImage;
      this.playlistBanner = playlistBanner;
      this.playlistGenre = playlistGenre;
      this.playlistUrlName = playlistUrlName;

      this.addSongs = function (playlist, callback) {

        _.each(UserPlaylistVar, function (audioElement) {
          playlist.push(angular.copy(audioElement));

          if ((UserPlaylistVar.indexOf(audioElement) + 1) == UserPlaylistVar.length) {
            // Callback goes here
            if (callback) {
              callback();
            }
          }

        });

        navigationMenuService.menu = false;
        navigationMenuService.playlist = true;

      };

      this.addSongsAndPlay = function (playlist, mediaPlayer) {

        this.addSongs(playlist, function () {

          setTimeout(function () {
            mediaPlayer.play();
          }, 1000);

        });

      };

      this.addSongToPlaylist = function(song,playlist){

        PlayListSrv.addSongToPlaylist(song,playlist);
      };

      this.removeSongFromPlaylist = function(song,playlist){

        PlayListSrv.removeSongFromPlaylist(song,playlist);

        //Remove from client so he notices immediately
        this.userPlaylist = _.without(this.userPlaylist,song);
      };

    }]).controller("CreatePlaylistInstanceCtrl", ["$scope", "$modalInstance",'playlistName', 'song','loggit',
    function ($scope, $modalInstance, playlistName, song,loggit) {

      $scope.playlistName = playlistName;
      $scope.song = song;

      $scope.ok = function () {

        if($scope.playlistName !== ""){
          $modalInstance.close($scope);
        }
        else {
          $modalInstance.dismiss('cancel');
          loggit.logError("Error! Could not create a playlist with no name..");
        }
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }
  ]);
angular.module("app.directives", []).directive("imgHolder", [
        function() {
            return {
                link: function(scope, ele) {
                    return Holder.run({
                        images: ele[0]
                    });
                }
            };
        }
    ]).directive("customBackground", function() {
        return {
            controller: ["$scope", "$element", "$location",
                function($scope, $element, $location) {
                    var addBg, path;
                    return path = function() {
                        return $location.path();
                    }, addBg = function(path) {
                        switch ($element.removeClass("body-home body-special body-tasks body-lock"), path) {
                            case "/":
                                return $element.addClass("body-home");
                            case "/front":
                            case "/404":
                            case "/pages/500":
                            case "/pages/signin":
                            case "/pages/signup":
                            case "/pages/forgot":
                                return $element.addClass("body-special");
                            case "/pages/lock-screen":
                                return $element.addClass("body-special body-lock");
                            case "/tasks":
                                return $element.addClass("body-tasks");
                        }
                    }, addBg($location.path()), $scope.$watch(path, function(newVal, oldVal) {
                        return newVal !== oldVal ? addBg($location.path()) : void 0;
                    });
                }
            ]
        };
    }).directive("toggleMinNav", ["$rootScope",
        function($rootScope) {
            return {
                link: function(scope, ele) {
                    var $content, $nav, $window, Timer, app, updateClass;

                    return app = $("#app"), $window = $(window), $nav = $("#nav-container"), $content = $("#content"), ele.on("click", function(e) {

                        if(app.hasClass("nav-min")){
                            app.removeClass("nav-min");
                        }
                        else{
                            app.addClass("nav-min");
                            $rootScope.$broadcast("minNav:enabled");
                            e.preventDefault();
                        }

                    }), Timer = void 0, updateClass = function() {
                        var width;
                        return width = $window.width(), 980 > width ? app.addClass("nav-min") : void 0;
                    },initResize = function() {
                        var width;
                        return width = $window.width(), 980 > width ? app.addClass("nav-min") : app.removeClass("nav-min");
                    }, $window.resize(function() {
                        var t;
                        return clearTimeout(t), t = setTimeout(updateClass, 300);
                    }),initResize();

                }
            };
        }
    ]).directive("collapseNav", [
        function() {
            return {
                link: function(scope, ele) {
                    var $a, $aRest, $lists, $listsRest, app;
                    return $lists = ele.find("ul").parent("li"),
                        //$lists.append('<i class="fa fa-arrow-circle-o-right icon-has-ul"></i>'),
                        $a = $lists.children("a"),
                        $listsRest = ele.children("li").not($lists),
                        $aRest = $listsRest.children("a"),
                        app = $("#app"),
                        $a.on("click", function(event) {
                            var $parent, $this;
                            return ($this = $(this),
                                $parent = $this.parent("li"),
                                $lists.not($parent).removeClass("open").find("ul").slideUp(),
                                $parent.toggleClass("open").find("ul").stop().slideToggle(), event.preventDefault());
                        }), $aRest.on("click", function() {
                        return $lists.removeClass("open").find("ul").slideUp();
                    }), scope.$on("minNav:enabled", function() {
                        return $lists.removeClass("open").find("ul").slideUp();
                    });
                }
            };
        }
    ]).directive("highlightActive", [
        function() {
            return {
                controller: ["$scope", "$element", "$attrs", "$location",
                    function($scope, $element, $attrs, $location) {
                        var highlightActive, links, path;
                        return links = $element.find("a"), path = function() {
                            return $location.path();
                        }, highlightActive = function(links, path) {
                            return path = "#" + path, angular.forEach(links, function(link) {
                                var $li, $link, href;
                                return $link = angular.element(link), $li = $link.parent("li"), href = $link.attr("href"), $li.hasClass("active") && $li.removeClass("active"), 0 === path.indexOf(href) ? $li.addClass("active") : void 0;
                            });
                        }, highlightActive(links, $location.path()), $scope.$watch(path, function(newVal, oldVal) {
                            return newVal !== oldVal ? highlightActive(links, $location.path()) : void 0;
                        });
                    }
                ]
            };
        }
    ]).directive("toggleOffCanvas", [
        function() {
            return {
                link: function(scope, ele) {
                    return ele.on("click", function() {
                        return $("#app").toggleClass("on-canvas").toggleClass("nav-min");
                    });
                }
            };
        }
    ]).directive("slimScroll", [
        function() {
            return {
                link: function(scope, ele, attrs) {
                    return ele.slimScroll({
                        height: attrs.scrollHeight || "100%"
                    });
                }
            };
        }
    ]).directive("goBack", [
        function() {
            return {
                restrict: "A",
                controller: ["$scope", "$element", "$window",
                    function($scope, $element, $window) {
                        return $element.on("click", function() {
                            return $window.history.back();
                        });
                    }
                ]
            };
        }
    ]);



/*
 App Form Ui Directives
 Custom directives for Form Ui elements
 */

angular.module("app.ui.form.directives", []).directive("uiRangeSlider", [
        function() {
            return {
                restrict: "A",
                link: function(scope, ele) {
                    return ele.slider();
                }
            };
        }
    ]).directive("uiFileUpload", [
        function() {
            return {
                restrict: "A",
                link: function(scope, ele) {
                    return ele.bootstrapFileInput();
                }
            };
        }
    ]).directive("uiSpinner", [
        function() {
            return {
                restrict: "A",
                compile: function(ele) {
                    return ele.addClass("ui-spinner"), {
                        post: function() {
                            return ele.spinner();
                        }
                    };
                }
            };
        }
    ]).directive("uiWizardForm", [
        function() {
            return {
                link: function(scope, ele) {
                    return ele.steps();
                }
            };
        }
    ]);


angular.module("app.ui.services", []).factory("loggit", [
    function() {
        var logIt;
        return toastr.options = {
            closeButton: !0,
            positionClass: "toast-top-right",
            timeOut: "3000"
        }, logIt = function(message, type) {
            return toastr[type](message);
        }, {
            log: function(message) {
                logIt(message, "info");
            },
            logWarning: function(message) {
                logIt(message, "warning");
            },
            logSuccess: function(message) {
                logIt(message, "success");
            },
            logError: function(message) {
                logIt(message, "error");
            }
        };
    }
]).factory("ArtistListingSrv",
  function($http) {

    /**************************
     Gets artists list with image url and name from the Server
     **************************/

    var ArtistListingObj = {},
      artists = [];

    /**************************
     Get data from the .json files (Replace by your own webserver)
     **************************/

    ArtistListingObj.getArtists = function(callback){

      $http.get('dist/data/artists.json').success(function(data) {

        artists = data;

        ArtistListingObj.artists = artists;
        callback(data);

      });

    };

    return ArtistListingObj;

  }).factory("AlbumsListingSrv",
  function($http) {

    /**************************
     Gets artists list with image url and name from the Server
     **************************/

    var AlbumListingObj = {},
      albums = [];

    /**************************
     Get data from the .json files (Replace by your own webserver)
     **************************/

    AlbumListingObj.getAlbums = function(callback){

      $http.get('dist/data/albums.json').success(function(data) {

        albums = data;

        AlbumListingObj.albums = albums;
        callback(data);

      });

    };

    return AlbumListingObj;

  })
  .factory("GenresListingSrv",
  function($http) {

    /**************************
     Gets genres list with image url and name from the Server
     **************************/

    var GenresListingObj = {},
      genres = [];

    /**************************
     Get data from the .json files (Replace by your own webserver)
     **************************/

    GenresListingObj.getGenres = function(callback){

      $http.get('dist/data/genres.json').success(function(data) {

        genres = data;

        GenresListingObj.genres = genres;
        callback(data);

      });

    };

    return GenresListingObj;


  }).factory("ArtistSrv",
  function($http) {

    /**************************
     Gets artists with all songs from the "Server"
     **************************/

    var PlayListObj = {},
      artists = [];

    /**************************
     Get data from the .json files (Replace by your own webserver)
     **************************/

    PlayListObj.getSongs = function(callback){

      $http.get('dist/data/artistsMusic.json').success(function(data) {

        artists = data;

        PlayListObj.artists = artists;
        callback(data);

      });

    };

    PlayListObj.getArtist = function(title,callback) {

      PlayListObj.getSongs(function(data){

        _.map(PlayListObj.artists, function(artistSongs){

          if(artistSongs.url_name == title){
            return callback(artistSongs);
          }
        });

      });

    };

    return PlayListObj;

  })
  .factory("PlayListSrv",
  function() {

    /**************************
     Saves and loads Playlists from the localStorage
     **************************/

    var PlayListObj = {},
      playlists = {
        list: []
      };

    var storage_id = "playlists_local_list";

    /**************************
     Initialize with some default values
     **************************/

    playlists.list[0] = {
      url_name: 'greatest-heats',
      name: 'Greatest hits',
      banner: 'dist/images/playlists/playlistbanner.jpg',
      image: 'dist/images/songs/song10.jpg',
      genre: [],
      songs: [
        {image: 'dist/images/songs/song1.jpg', url: 'http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3', displayName: 'Beatles - Come Together', type: "audio/mpeg" },
        {image: 'dist/images/songs/song2.jpg', url: 'http://ccmixter.org/content/admiralbob77/admiralbob77_-_The_Remixin_Blues_2.mp3', displayName: 'Beatles - Drive my car', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song3.jpg', url: 'http://ccmixter.org/content/unreal_dm/unreal_dm_-_Recycle_This.mp3', displayName: 'Beatles - Loser', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song4.jpg', url: 'http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3', displayName: 'Beatles - All my loving', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song5.jpg', url: 'http://ccmixter.org/content/admiralbob77/admiralbob77_-_The_Remixin_Blues_2.mp3', displayName: 'Beatles - Taxman', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song6.jpg', url: 'http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3', displayName: 'Beatles - Come Together', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song7.jpg', url: 'http://ccmixter.org/content/admiralbob77/admiralbob77_-_The_Remixin_Blues_2.mp3', displayName: 'Beatles - Drive my car', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song8.jpg', url: 'http://ccmixter.org/content/unreal_dm/unreal_dm_-_Recycle_This.mp3', displayName: 'Beatles - Loser', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song9.jpg', url: 'http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3', displayName: 'Beatles - All my loving', type: "audio/mpeg"  }
      ]
    };

    playlists.list[1] = {
      url_name: 'songsofdream',
      name: 'Sons of Dream',
      banner: 'dist/images/playlists/playlistbanner.jpg',
      image: 'dist/images/songs/song11.jpg',
      genre: ['New age','Celtic','World'],
      songs: [
        {image: 'dist/images/songs/song12.jpg', url: 'http://ccmixter.org/content/admiralbob77/admiralbob77_-_The_Remixin_Blues_2.mp3', displayName: 'Enya - Laetha', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song13.jpg', url: 'http://ccmixter.org/content/unreal_dm/unreal_dm_-_Recycle_This.mp3', displayName: 'Enya - Only if', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song14.jpg', url: 'http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3', displayName: 'Enya - Trains and winter rains', type: "audio/mpeg" },
        {image: 'dist/images/songs/song15.jpg', url: 'http://ccmixter.org/content/admiralbob77/admiralbob77_-_The_Remixin_Blues_2.mp3', displayName: 'Beatles - Drive my car', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song16.jpg', url: 'http://ccmixter.org/content/unreal_dm/unreal_dm_-_Recycle_This.mp3', displayName: 'Beatles - Loser', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song17.jpg', url: 'http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3', displayName: 'Beatles - All my loving', type: "audio/mpeg"  }
      ]
    };

    PlayListObj.get = function (){
      return JSON.parse(localStorage.getItem(storage_id) || JSON.stringify(playlists));
    };

    PlayListObj.put = function (playlist,callback){

      PlayListObj.playlists.push(playlist);

      localStorage.setItem(storage_id, JSON.stringify(PlayListObj.playlistsObj));

      setTimeout(function(){
        callback(localStorage.getItem(storage_id));
      },500);
    };

    PlayListObj.update = function (playlists){

      PlayListObj.playlists = playlists;

      return localStorage.setItem(storage_id, JSON.stringify(PlayListObj.playlistsObj));
    };

    //Replace with get from localStorage
    PlayListObj.playlistsObj = PlayListObj.get();
    //PlayListObj.playlistsObj = playlists;

    PlayListObj.playlists = PlayListObj.playlistsObj.list;

    PlayListObj.getPlaylist = function(title,callback) {

      _.map(PlayListObj.playlists, function(playlist){

        if(playlist.url_name == title){
          return callback(playlist);
        }
      });

    };

    PlayListObj.addSongToPlaylist = function(song,playListName) {

      _.map(PlayListObj.playlists, function(playlist){

        if(playlist.name == playListName){

          playlist.songs.push(song);

          PlayListObj.update(PlayListObj.playlists);
        }

      });

    };

    PlayListObj.removeSongFromPlaylist = function(song,playListName) {

      _.map(PlayListObj.playlists, function(playlist){

        if(playlist.name == playListName){

          _.map(playlist.songs, function(songOnList){

            if(songOnList.url == song.url){

              playlist.songs = _.without(playlist.songs,songOnList);

              console.log(PlayListObj.playlists);

              PlayListObj.update(PlayListObj.playlists);

            }

          });

        }

      });

    };

    return PlayListObj;

  }).factory("navigationMenuService",
  function() {

    /**************************
     Provides a way to toggle the menu scope
     **************************/

    var MENU_STATES = {
      menu:true,
      playing:false
    };

    return MENU_STATES;


  }).factory("CreatePlaylistSrv",['$modal','$log','PlayListSrv','$location',function($modal,$log,PlayListSrv,$location) {

    /**************************
     Provides a way to create a new playlist
     **************************/

    var CreatePlayListSrvObj = {};

    CreatePlayListSrvObj.openCreateModal = function(song){

     var modalInstance = $modal.open({
       templateUrl: 'app/views/forms/create_playlist.html',
       controller: 'CreatePlaylistInstanceCtrl',
       resolve: {
         playlistName: function () {
           return '';
         },
         song: function () {
           return song;
         }
       }
     });

     modalInstance.result.then(function (response) {

       var songs = [],
         playlistName;

       if(typeof response.song != "undefined"){
         songs.push(response.song);
       }

       playlistName = response.playlistName;

       //Callback for a Okay on Save new playlist
       var url_name = playlistName.toLowerCase().replace(" ","-"),
       new_playlist = {
         url_name: url_name,
         name: playlistName,
         banner: 'dist/images/playlists/playlistbanner.jpg',
         image: 'dist/images/songs/song17.jpg',
         genre: [],
         songs: songs
       };

       PlayListSrv.put(new_playlist,function(response){

         window.location = "#/playlist/" + url_name;
       });

     }, function () {
        $log.info('Modal dismissed at: ' + new Date());
     });

     };

    return CreatePlayListSrvObj;


  }]);