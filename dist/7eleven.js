(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?b(exports):'function'==typeof define&&define.amd?define(['exports'],b):b(a['7eleven']={})})(this,function(a){'use strict';function b(a){return b='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},b(a)}function c(){for(var a=Object.keys(this.actions),b=0,c=a.length;b<c;b++){var d=this.actions[a[b]].schemaName,e=this.actions[a[b]].schema;this.actions[a[b]]._forState&&(this.state[d]=e),this.schemas[d]=e}}function d(a,c){var d=!(2<arguments.length&&void 0!==arguments[2])||arguments[2];if('object'!==b(c)||c.length)return console.error('New Schemas must be initialized with an Object literal as the second argument.');for(var e=Object.keys(c),f=0,g=e.length;f<g;f++)this[e[f]]=d?Object.freeze(c[e[f]]):c[e[f]];return this.name=a,Object.defineProperty(this,'_isStoreMember',{enumerable:!1,writable:!1,value:!0}),this}function e(a,b){return b._isStoreMember?(this.type=a,this.schemaName=b.name,delete b.name,this.schema=b,this):console.error('New Actions must be initialized with a Schema Object as the second argument.')}e.prototype.forState=function(){var a=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];return Object.defineProperty(this,'_forState',{writable:!1,enumerable:!1,value:a}),this},a.Store=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.actions=a,this.schemas={},this.mutations={},this.state={},c.call(this),this},a.Schema=d,a.Action=e,Object.defineProperty(a,'__esModule',{value:!0})});
