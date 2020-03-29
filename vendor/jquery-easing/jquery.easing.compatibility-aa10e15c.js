/*
 * Easing Compatibility v1 - http://gsgd.co.uk/sandbox/jquery/easing
 *
 * Adds compatibility for applications that use the pre 1.2 easing names
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */
!function(n){n.extend(n.easing,{easeIn:function(e,u,t,a,i){return n.easing.easeInQuad(e,u,t,a,i)},easeOut:function(e,u,t,a,i){return n.easing.easeOutQuad(e,u,t,a,i)},easeInOut:function(e,u,t,a,i){return n.easing.easeInOutQuad(e,u,t,a,i)},expoin:function(e,u,t,a,i){return n.easing.easeInExpo(e,u,t,a,i)},expoout:function(e,u,t,a,i){return n.easing.easeOutExpo(e,u,t,a,i)},expoinout:function(e,u,t,a,i){return n.easing.easeInOutExpo(e,u,t,a,i)},bouncein:function(e,u,t,a,i){return n.easing.easeInBounce(e,u,t,a,i)},bounceout:function(e,u,t,a,i){return n.easing.easeOutBounce(e,u,t,a,i)},bounceinout:function(e,u,t,a,i){return n.easing.easeInOutBounce(e,u,t,a,i)},elasin:function(e,u,t,a,i){return n.easing.easeInElastic(e,u,t,a,i)},elasout:function(e,u,t,a,i){return n.easing.easeOutElastic(e,u,t,a,i)},elasinout:function(e,u,t,a,i){return n.easing.easeInOutElastic(e,u,t,a,i)},backin:function(e,u,t,a,i){return n.easing.easeInBack(e,u,t,a,i)},backout:function(e,u,t,a,i){return n.easing.easeOutBack(e,u,t,a,i)},backinout:function(e,u,t,a,i){return n.easing.easeInOutBack(e,u,t,a,i)}})}(jQuery);