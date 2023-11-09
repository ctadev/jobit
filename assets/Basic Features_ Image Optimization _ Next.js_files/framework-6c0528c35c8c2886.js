"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9774],{5578:function(t,e){Symbol.for("react.element"),Symbol.for("react.portal");/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=Symbol.for("react.fragment"),r=(Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),n=Object.assign,a={};function c(t,e,o){this.props=t,this.context=e,this.refs=a,this.updater=o||r}function p(){}function s(t,e,o){this.props=t,this.context=e,this.refs=a,this.updater=o||r}c.prototype.isReactComponent={},c.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},c.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},p.prototype=c.prototype;var f=s.prototype=new p;f.constructor=s,n(f,c.prototype),f.isPureReactComponent=!0,Object.prototype.hasOwnProperty;e.Fragment=o},52983:function(t,e,o){t.exports=o(5578)}}]);