(function(){var d=true,e=null,g=false;function i(a){return function(b){this[a]=b}}function j(a){return function(){return this[a]}}var k;
function l(a,b,c){this.extend(l,google.maps.OverlayView);this.b=a;this.a=[];this.l=[];this.X=[53,56,66,78,90];this.h=[];this.z=g;c=c||{};this.f=c.gridSize||60;this.T=c.maxZoom||e;this.h=c.styles||[];this.S=c.imagePath||this.M;this.R=c.imageExtension||this.L;this.K=d;if(c.zoomOnClick!=undefined)this.K=c.zoomOnClick;this.p=g;if(c.averageCenter!=undefined)this.p=c.averageCenter;m(this);this.setMap(a);this.G=this.b.getZoom();var f=this;google.maps.event.addListener(this.b,"zoom_changed",function(){var h=
f.b.mapTypes[f.b.getMapTypeId()].maxZoom,o=f.b.getZoom();if(!(o<0||o>h))if(f.G!=o){f.G=f.b.getZoom();f.m()}});google.maps.event.addListener(this.b,"idle",function(){f.j()});b&&b.length&&this.B(b,g)}k=l.prototype;k.M="http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m";k.L="png";k.extend=function(a,b){return function(c){for(var f in c.prototype)this.prototype[f]=c.prototype[f];return this}.apply(a,[b])};k.onAdd=function(){if(!this.z){this.z=d;p(this)}};k.draw=function(){};
function m(a){if(!a.h.length)for(var b=0,c;c=a.X[b];b++)a.h.push({url:a.S+(b+1)+"."+a.R,height:c,width:c})}k.w=j("h");k.v=j("a");k.Q=j("a");k.F=function(){return this.T||this.b.mapTypes[this.b.getMapTypeId()].maxZoom};k.C=function(a,b){for(var c=0,f=a.length,h=f;h!==0;){h=parseInt(h/10,10);c++}c=Math.min(c,b);return{text:f,index:c}};k.V=i("C");k.D=j("C");k.B=function(a,b){for(var c=0,f;f=a[c];c++)q(this,f);b||this.j()};
function q(a,b){b.setVisible(g);b.setMap(e);b.r=g;b.draggable&&google.maps.event.addListener(b,"dragend",function(){b.r=g;a.m();a.j()});a.a.push(b)}k.o=function(a,b){q(this,a);b||this.j()};k.U=function(a){var b=-1;if(this.a.indexOf)b=this.a.indexOf(a);else for(var c=0,f;f=this.a[c];c++)if(f==a)b=c;if(b==-1)return g;this.a.splice(b,1);a.setVisible(g);a.setMap(e);this.m();this.j();return d};k.P=function(){return this.l.length};k.getMap=j("b");k.setMap=i("b");k.u=j("f");k.W=i("f");
function r(a,b){var c=a.getProjection(),f=new google.maps.LatLng(b.getNorthEast().lat(),b.getNorthEast().lng()),h=new google.maps.LatLng(b.getSouthWest().lat(),b.getSouthWest().lng());f=c.fromLatLngToDivPixel(f);f.x+=a.f;f.y-=a.f;h=c.fromLatLngToDivPixel(h);h.x-=a.f;h.y+=a.f;f=c.fromDivPixelToLatLng(f);c=c.fromDivPixelToLatLng(h);b.extend(f);b.extend(c);return b}k.N=function(){this.m();this.a=[]};
k.m=function(){for(var a=0,b;b=this.l[a];a++)b.remove();for(a=0;b=this.a[a];a++){b.r=g;b.setMap(e);b.setVisible(g)}this.l=[]};k.j=function(){p(this)};function p(a){if(a.z)for(var b=r(a,new google.maps.LatLngBounds(a.b.getBounds().getSouthWest(),a.b.getBounds().getNorthEast())),c=0,f;f=a.a[c];c++){var h=g;if(!f.r&&b.contains(f.getPosition())){for(var o=0,n;n=a.l[o];o++)if(!h&&n.getCenter()&&n.t.contains(f.getPosition())){h=d;n.o(f);break}if(!h){n=new s(a);n.o(f);a.l.push(n)}}}}
function s(a){this.i=a;this.b=a.getMap();this.f=a.u();this.p=a.p;this.d=e;this.a=[];this.t=e;this.k=new t(this,a.w(),a.u())}k=s.prototype;
k.o=function(a){var b;a:if(this.a.indexOf)b=this.a.indexOf(a)!=-1;else{b=0;for(var c;c=this.a[b];b++)if(c==a){b=d;break a}b=g}if(b)return g;if(this.d){if(this.p){b=(this.d.lat()+a.getPosition().lat())/2;c=(this.d.lng()+a.getPosition().lng())/2;this.d=new google.maps.LatLng(b,c);u(this)}}else{this.d=a.getPosition();u(this)}if(this.a.length==0){a.setMap(this.b);a.setVisible(d)}else if(this.a.length==1){this.a[0].setMap(e);this.a[0].setVisible(g)}a.r=d;this.a.push(a);if(this.b.getZoom()>this.i.F())for(a=
0;b=this.a[a];a++){b.setMap(this.b);b.setVisible(d)}else if(this.a.length<2)v(this.k);else{b=this.i.D()(this.a,this.i.w().length);this.k.setCenter(this.d);a=this.k;a.A=b;a.$=b.text;a.Y=b.index;if(a.c)a.c.innerHTML=b.text;b=Math.max(0,a.A.index-1);b=Math.min(a.h.length-1,b);b=a.h[b];a.J=b.url;a.g=b.height;a.n=b.width;a.H=b.textColor;a.e=b.anchor;a.I=b.textSize;this.k.show()}return d};k.getBounds=function(){u(this);return this.t};k.remove=function(){this.k.remove();this.a.length=0;delete this.a};
k.O=function(){return this.a.length};k.v=j("a");k.getCenter=j("d");function u(a){a.t=r(a.i,new google.maps.LatLngBounds(a.d,a.d))}k.getMap=j("b");function t(a,b,c){a.i.extend(t,google.maps.OverlayView);this.h=b;this.Z=c||0;this.q=a;this.d=e;this.b=a.getMap();this.A=this.c=e;this.s=g;this.setMap(this.b)}k=t.prototype;
k.onAdd=function(){this.c=document.createElement("DIV");if(this.s){this.c.style.cssText=w(this,x(this,this.d));this.c.innerHTML=this.A.text}this.getPanes().overlayImage.appendChild(this.c);var a=this;google.maps.event.addDomListener(this.c,"click",function(){var b=a.q.i;google.maps.event.trigger(b,"clusterclick",a.q);if(b.K){a.b.panTo(a.q.getCenter());a.b.fitBounds(a.q.getBounds())}})};
function x(a,b){var c=a.getProjection().fromLatLngToDivPixel(b);c.x-=parseInt(a.n/2,10);c.y-=parseInt(a.g/2,10);return c}k.draw=function(){if(this.s){var a=x(this,this.d);this.c.style.top=a.y+"px";this.c.style.left=a.x+"px"}};function v(a){if(a.c)a.c.style.display="none";a.s=g}k.show=function(){if(this.c){this.c.style.cssText=w(this,x(this,this.d));this.c.style.display=""}this.s=d};k.remove=function(){this.setMap(e)};
k.onRemove=function(){if(this.c&&this.c.parentNode){v(this);this.c.parentNode.removeChild(this.c);this.c=e}};k.setCenter=i("d");
function w(a,b){var c=[];document.all?c.push('filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="'+a.J+'");'):c.push("background:url("+a.J+");");if(typeof a.e==="object"){typeof a.e[0]==="number"&&a.e[0]>0&&a.e[0]<a.g?c.push("height:"+(a.g-a.e[0])+"px; padding-top:"+a.e[0]+"px;"):c.push("height:"+a.g+"px; line-height:"+a.g+"px;");typeof a.e[1]==="number"&&a.e[1]>0&&a.e[1]<a.n?c.push("width:"+(a.n-a.e[1])+"px; padding-left:"+a.e[1]+"px;"):c.push("width:"+a.n+"px; text-align:center;")}else c.push("height:"+
a.g+"px; line-height:"+a.g+"px; width:"+a.n+"px; text-align:center;");c.push("cursor:pointer; top:"+b.y+"px; left:"+b.x+"px; color:"+(a.H?a.H:"black")+"; position:absolute; font-size:"+(a.I?a.I:11)+"px; font-family:Arial,sans-serif; font-weight:bold");return c.join("")}window.MarkerClusterer=l;l.prototype.addMarker=l.prototype.o;l.prototype.addMarkers=l.prototype.B;l.prototype.clearMarkers=l.prototype.N;l.prototype.getCalculator=l.prototype.D;l.prototype.getGridSize=l.prototype.u;
l.prototype.getMap=l.prototype.getMap;l.prototype.getMarkers=l.prototype.v;l.prototype.getMaxZoom=l.prototype.F;l.prototype.getStyles=l.prototype.w;l.prototype.getTotalClusters=l.prototype.P;l.prototype.getTotalMarkers=l.prototype.Q;l.prototype.redraw=l.prototype.j;l.prototype.removeMarker=l.prototype.U;l.prototype.resetViewport=l.prototype.m;l.prototype.setCalculator=l.prototype.V;l.prototype.setGridSize=l.prototype.W;l.prototype.onAdd=l.prototype.onAdd;l.prototype.draw=l.prototype.draw;
s.prototype.getCenter=s.prototype.getCenter;s.prototype.getSize=s.prototype.O;s.prototype.getMarkers=s.prototype.v;t.prototype.onAdd=t.prototype.onAdd;t.prototype.draw=t.prototype.draw;t.prototype.onRemove=t.prototype.onRemove;
})();