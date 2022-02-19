import { options, Fragment, Component, render } from 'preact';
import _ from 'lodash';
import { useState, useEffect, useMemo } from 'preact/hooks';
import { ethers } from 'ethers';
import * as rx from 'rxjs';
import { css, cx, keyframes } from '@emotion/css';

(function() {
    const env = {};
    try {
        if (process) {
            process.env = Object.assign({}, process.env);
            Object.assign(process.env, env);
            return;
        }
    } catch (e) {} // avoid ReferenceError: process is not defined
    globalThis.process = { env:env };
})();

var o$1=0;function e(_,e,n,t,f){var l,s,u={};for(s in e)"ref"==s?l=e[s]:u[s]=e[s];var a={type:_,props:u,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--o$1,__source:t,__self:f};if("function"==typeof _&&(l=_.defaultProps))for(s in l)void 0===u[s]&&(u[s]=l[s]);return options.vnode&&options.vnode(a),a}

"undefined"!=typeof window&&window.__PREACT_DEVTOOLS__&&window.__PREACT_DEVTOOLS__.attachPreact("10.6.6",options,{Fragment:Fragment,Component:Component});

var o={};function a(n){return n.type===Fragment?"Fragment":"function"==typeof n.type?n.type.displayName||n.type.name:"string"==typeof n.type?n.type:"#text"}var i=[],s$1=[];function c(){return i.length>0?i[i.length-1]:null}var l=!1;function u(n){return "function"==typeof n.type&&n.type!=Fragment}function f(n){for(var t=[n],e=n;null!=e.__o;)t.push(e.__o),e=e.__o;return t.reduce(function(n,t){n+="  in "+a(t);var e=t.__source;return e?n+=" (at "+e.fileName+":"+e.lineNumber+")":l||(l=!0,console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")),n+"\n"},"")}var p="function"==typeof WeakMap,d=Component.prototype.setState;Component.prototype.setState=function(n,t){return null==this.__v?null==this.state&&console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n'+f(c())):null==this.__P&&console.warn('Can\'t call "this.setState" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n'+f(this.__v)),d.call(this,n,t)};var h=Component.prototype.forceUpdate;function y(n){var t=n.props,e=a(n),o="";for(var r in t)if(t.hasOwnProperty(r)&&"children"!==r){var i=t[r];"function"==typeof i&&(i="function "+(i.displayName||i.name)+"() {}"),i=Object(i)!==i||i.toString?i+"":Object.prototype.toString.call(i),o+=" "+r+"="+JSON.stringify(i);}var s=t.children;return "<"+e+o+(s&&s.length?">..</"+e+">":" />")}Component.prototype.forceUpdate=function(n){return null==this.__v?console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n'+f(c())):null==this.__P&&console.warn('Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n'+f(this.__v)),h.call(this,n)},function(){!function(){var t=options.__b,e=options.diffed,o=options.__,r=options.vnode,a=options.__r;options.diffed=function(n){u(n)&&s$1.pop(),i.pop(),e&&e(n);},options.__b=function(n){u(n)&&i.push(n),t&&t(n);},options.__=function(n,t){s$1=[],o&&o(n,t);},options.vnode=function(n){n.__o=s$1.length>0?s$1[s$1.length-1]:null,r&&r(n);},options.__r=function(n){u(n)&&s$1.push(n),a&&a(n);};}();var t=!1,e=options.__b,r=options.diffed,c=options.vnode,l=options.__e,d=options.__,h=options.__h,m=p?{useEffect:new WeakMap,useLayoutEffect:new WeakMap,lazyPropTypes:new WeakMap}:null,v=[];options.__e=function(n,t,e){if(t&&t.__c&&"function"==typeof n.then){var o=n;n=new Error("Missing Suspense. The throwing component was: "+a(t));for(var r=t;r;r=r.__)if(r.__c&&r.__c.__c){n=o;break}if(n instanceof Error)throw n}try{l(n,t,e),"function"!=typeof n.then&&setTimeout(function(){throw n});}catch(n){throw n}},options.__=function(n,t){if(!t)throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");var e;switch(t.nodeType){case 1:case 11:case 9:e=!0;break;default:e=!1;}if(!e){var o=a(n);throw new Error("Expected a valid HTML node as a second argument to render.\tReceived "+t+" instead: render(<"+o+" />, "+t+");")}d&&d(n,t);},options.__b=function(n){var r=n.type,i=function n(t){return t?"function"==typeof t.type?n(t.__):t:{}}(n.__);if(t=!0,void 0===r)throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports"+y(n)+"\n\n"+f(n));if(null!=r&&"object"==typeof r){if(void 0!==r.__k&&void 0!==r.__e)throw new Error("Invalid type passed to createElement(): "+r+"\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My"+a(n)+" = "+y(r)+";\n  let vnode = <My"+a(n)+" />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n"+f(n));throw new Error("Invalid type passed to createElement(): "+(Array.isArray(r)?"array":r))}if("thead"!==r&&"tfoot"!==r&&"tbody"!==r||"table"===i.type?"tr"===r&&"thead"!==i.type&&"tfoot"!==i.type&&"tbody"!==i.type&&"table"!==i.type?console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent."+y(n)+"\n\n"+f(n)):"td"===r&&"tr"!==i.type?console.error("Improper nesting of table. Your <td> should have a <tr> parent."+y(n)+"\n\n"+f(n)):"th"===r&&"tr"!==i.type&&console.error("Improper nesting of table. Your <th> should have a <tr>."+y(n)+"\n\n"+f(n)):console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent."+y(n)+"\n\n"+f(n)),void 0!==n.ref&&"function"!=typeof n.ref&&"object"!=typeof n.ref&&!("$$typeof"in n))throw new Error('Component\'s "ref" property should be a function, or an object created by createRef(), but got ['+typeof n.ref+"] instead\n"+y(n)+"\n\n"+f(n));if("string"==typeof n.type)for(var s in n.props)if("o"===s[0]&&"n"===s[1]&&"function"!=typeof n.props[s]&&null!=n.props[s])throw new Error("Component's \""+s+'" property should be a function, but got ['+typeof n.props[s]+"] instead\n"+y(n)+"\n\n"+f(n));if("function"==typeof n.type&&n.type.propTypes){if("Lazy"===n.type.displayName&&m&&!m.lazyPropTypes.has(n.type)){var c="PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try{var l=n.type();m.lazyPropTypes.set(n.type,!0),console.warn(c+"Component wrapped in lazy() is "+a(l));}catch(n){console.warn(c+"We will log the wrapped component's name once it is loaded.");}}var u=n.props;n.type.__f&&delete(u=function(n,t){for(var e in t)n[e]=t[e];return n}({},u)).ref,function(n,t,e,r,a){Object.keys(n).forEach(function(e){var i;try{i=n[e](t,e,r,"prop",null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");}catch(n){i=n;}!i||i.message in o||(o[i.message]=!0,console.error("Failed prop type: "+i.message+(a&&"\n"+a()||"")));});}(n.type.propTypes,u,0,a(n),function(){return f(n)});}e&&e(n);},options.__h=function(n,e,o){if(!n||!t)throw new Error("Hook can only be invoked from render methods.");h&&h(n,e,o);};var b=function(n,t){return {get:function(){var e="get"+n+t;v&&v.indexOf(e)<0&&(v.push(e),console.warn("getting vnode."+n+" is deprecated, "+t));},set:function(){var e="set"+n+t;v&&v.indexOf(e)<0&&(v.push(e),console.warn("setting vnode."+n+" is not allowed, "+t));}}},w={nodeName:b("nodeName","use vnode.type"),attributes:b("attributes","use vnode.props"),children:b("children","use vnode.props.children")},g=Object.create({},w);options.vnode=function(n){var t=n.props;if(null!==n.type&&null!=t&&("__source"in t||"__self"in t)){var e=n.props={};for(var o in t){var r=t[o];"__source"===o?n.__source=r:"__self"===o?n.__self=r:e[o]=r;}}n.__proto__=g,c&&c(n);},options.diffed=function(n){if(n.__k&&n.__k.forEach(function(t){if(t&&void 0===t.type){delete t.__,delete t.__b;var e=Object.keys(t).join(",");throw new Error("Objects are not valid as a child. Encountered an object with the keys {"+e+"}.\n\n"+f(n))}}),t=!1,r&&r(n),null!=n.__k)for(var e=[],o=0;o<n.__k.length;o++){var a=n.__k[o];if(a&&null!=a.key){var i=a.key;if(-1!==e.indexOf(i)){console.error('Following component has two or more children with the same key attribute: "'+i+'". This may cause glitches and misbehavior in rendering process. Component: \n\n'+y(n)+"\n\n"+f(n));break}e.push(i);}}};}();

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var immutabilityHelper = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
function stringifiable(obj) {
    // Safely stringify Object.create(null)
    /* istanbul ignore next */
    return typeof obj === 'object' && !('toString' in obj) ?
        Object.prototype.toString.call(obj).slice(8, -1) :
        obj;
}
var isProduction = typeof process === 'object' && process.env.NODE_ENV === 'production';
function invariant(condition, message) {
    if (!condition) {
        /* istanbul ignore next */
        if (isProduction) {
            throw new Error('Invariant failed');
        }
        throw new Error(message());
    }
}
exports.invariant = invariant;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var splice = Array.prototype.splice;
var toString = Object.prototype.toString;
function type(obj) {
    return toString.call(obj).slice(8, -1);
}
var assign = Object.assign || /* istanbul ignore next */ (function (target, source) {
    getAllKeys(source).forEach(function (key) {
        if (hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    });
    return target;
});
var getAllKeys = typeof Object.getOwnPropertySymbols === 'function'
    ? function (obj) { return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj)); }
    /* istanbul ignore next */
    : function (obj) { return Object.keys(obj); };
function copy(object) {
    return Array.isArray(object)
        ? assign(object.constructor(object.length), object)
        : (type(object) === 'Map')
            ? new Map(object)
            : (type(object) === 'Set')
                ? new Set(object)
                : (object && typeof object === 'object')
                    ? assign(Object.create(Object.getPrototypeOf(object)), object)
                    /* istanbul ignore next */
                    : object;
}
var Context = /** @class */ (function () {
    function Context() {
        this.commands = assign({}, defaultCommands);
        this.update = this.update.bind(this);
        // Deprecated: update.extend, update.isEquals and update.newContext
        this.update.extend = this.extend = this.extend.bind(this);
        this.update.isEquals = function (x, y) { return x === y; };
        this.update.newContext = function () { return new Context().update; };
    }
    Object.defineProperty(Context.prototype, "isEquals", {
        get: function () {
            return this.update.isEquals;
        },
        set: function (value) {
            this.update.isEquals = value;
        },
        enumerable: true,
        configurable: true
    });
    Context.prototype.extend = function (directive, fn) {
        this.commands[directive] = fn;
    };
    Context.prototype.update = function (object, $spec) {
        var _this = this;
        var spec = (typeof $spec === 'function') ? { $apply: $spec } : $spec;
        if (!(Array.isArray(object) && Array.isArray(spec))) {
            invariant(!Array.isArray(spec), function () { return "update(): You provided an invalid spec to update(). The spec may " +
                "not contain an array except as the value of $set, $push, $unshift, " +
                "$splice or any custom command allowing an array value."; });
        }
        invariant(typeof spec === 'object' && spec !== null, function () { return "update(): You provided an invalid spec to update(). The spec and " +
            "every included key path must be plain objects containing one of the " +
            ("following commands: " + Object.keys(_this.commands).join(', ') + "."); });
        var nextObject = object;
        getAllKeys(spec).forEach(function (key) {
            if (hasOwnProperty.call(_this.commands, key)) {
                var objectWasNextObject = object === nextObject;
                nextObject = _this.commands[key](spec[key], nextObject, spec, object);
                if (objectWasNextObject && _this.isEquals(nextObject, object)) {
                    nextObject = object;
                }
            }
            else {
                var nextValueForKey = type(object) === 'Map'
                    ? _this.update(object.get(key), spec[key])
                    : _this.update(object[key], spec[key]);
                var nextObjectValue = type(nextObject) === 'Map'
                    ? nextObject.get(key)
                    : nextObject[key];
                if (!_this.isEquals(nextValueForKey, nextObjectValue)
                    || typeof nextValueForKey === 'undefined'
                        && !hasOwnProperty.call(object, key)) {
                    if (nextObject === object) {
                        nextObject = copy(object);
                    }
                    if (type(nextObject) === 'Map') {
                        nextObject.set(key, nextValueForKey);
                    }
                    else {
                        nextObject[key] = nextValueForKey;
                    }
                }
            }
        });
        return nextObject;
    };
    return Context;
}());
exports.Context = Context;
var defaultCommands = {
    $push: function (value, nextObject, spec) {
        invariantPushAndUnshift(nextObject, spec, '$push');
        return value.length ? nextObject.concat(value) : nextObject;
    },
    $unshift: function (value, nextObject, spec) {
        invariantPushAndUnshift(nextObject, spec, '$unshift');
        return value.length ? value.concat(nextObject) : nextObject;
    },
    $splice: function (value, nextObject, spec, originalObject) {
        invariantSplices(nextObject, spec);
        value.forEach(function (args) {
            invariantSplice(args);
            if (nextObject === originalObject && args.length) {
                nextObject = copy(originalObject);
            }
            splice.apply(nextObject, args);
        });
        return nextObject;
    },
    $set: function (value, _nextObject, spec) {
        invariantSet(spec);
        return value;
    },
    $toggle: function (targets, nextObject) {
        invariantSpecArray(targets, '$toggle');
        var nextObjectCopy = targets.length ? copy(nextObject) : nextObject;
        targets.forEach(function (target) {
            nextObjectCopy[target] = !nextObject[target];
        });
        return nextObjectCopy;
    },
    $unset: function (value, nextObject, _spec, originalObject) {
        invariantSpecArray(value, '$unset');
        value.forEach(function (key) {
            if (Object.hasOwnProperty.call(nextObject, key)) {
                if (nextObject === originalObject) {
                    nextObject = copy(originalObject);
                }
                delete nextObject[key];
            }
        });
        return nextObject;
    },
    $add: function (values, nextObject, _spec, originalObject) {
        invariantMapOrSet(nextObject, '$add');
        invariantSpecArray(values, '$add');
        if (type(nextObject) === 'Map') {
            values.forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (nextObject === originalObject && nextObject.get(key) !== value) {
                    nextObject = copy(originalObject);
                }
                nextObject.set(key, value);
            });
        }
        else {
            values.forEach(function (value) {
                if (nextObject === originalObject && !nextObject.has(value)) {
                    nextObject = copy(originalObject);
                }
                nextObject.add(value);
            });
        }
        return nextObject;
    },
    $remove: function (value, nextObject, _spec, originalObject) {
        invariantMapOrSet(nextObject, '$remove');
        invariantSpecArray(value, '$remove');
        value.forEach(function (key) {
            if (nextObject === originalObject && nextObject.has(key)) {
                nextObject = copy(originalObject);
            }
            nextObject.delete(key);
        });
        return nextObject;
    },
    $merge: function (value, nextObject, _spec, originalObject) {
        invariantMerge(nextObject, value);
        getAllKeys(value).forEach(function (key) {
            if (value[key] !== nextObject[key]) {
                if (nextObject === originalObject) {
                    nextObject = copy(originalObject);
                }
                nextObject[key] = value[key];
            }
        });
        return nextObject;
    },
    $apply: function (value, original) {
        invariantApply(value);
        return value(original);
    },
};
var defaultContext = new Context();
exports.isEquals = defaultContext.update.isEquals;
exports.extend = defaultContext.extend;
exports.default = defaultContext.update;
// @ts-ignore
exports.default.default = module.exports = assign(exports.default, exports);
// invariants
function invariantPushAndUnshift(value, spec, command) {
    invariant(Array.isArray(value), function () { return "update(): expected target of " + stringifiable(command) + " to be an array; got " + stringifiable(value) + "."; });
    invariantSpecArray(spec[command], command);
}
function invariantSpecArray(spec, command) {
    invariant(Array.isArray(spec), function () { return "update(): expected spec of " + stringifiable(command) + " to be an array; got " + stringifiable(spec) + ". " +
        "Did you forget to wrap your parameter in an array?"; });
}
function invariantSplices(value, spec) {
    invariant(Array.isArray(value), function () { return "Expected $splice target to be an array; got " + stringifiable(value); });
    invariantSplice(spec.$splice);
}
function invariantSplice(value) {
    invariant(Array.isArray(value), function () { return "update(): expected spec of $splice to be an array of arrays; got " + stringifiable(value) + ". " +
        "Did you forget to wrap your parameters in an array?"; });
}
function invariantApply(fn) {
    invariant(typeof fn === 'function', function () { return "update(): expected spec of $apply to be a function; got " + stringifiable(fn) + "."; });
}
function invariantSet(spec) {
    invariant(Object.keys(spec).length === 1, function () { return "Cannot have more than one key in an object with $set"; });
}
function invariantMerge(target, specValue) {
    invariant(specValue && typeof specValue === 'object', function () { return "update(): $merge expects a spec of type 'object'; got " + stringifiable(specValue); });
    invariant(target && typeof target === 'object', function () { return "update(): $merge expects a target of type 'object'; got " + stringifiable(target); });
}
function invariantMapOrSet(target, command) {
    var typeOfTarget = type(target);
    invariant(typeOfTarget === 'Map' || typeOfTarget === 'Set', function () { return "update(): " + stringifiable(command) + " expects a target of type Set or Map; got " + stringifiable(typeOfTarget); });
}
});

var update = unwrapExports(immutabilityHelper);
immutabilityHelper.invariant;
immutabilityHelper.Context;
immutabilityHelper.isEquals;
immutabilityHelper.extend;

function useRxSubscribe(sourceOrSourceFactory, inputs) {
    const [state, setState] = useState();
    useEffect(() => {
        const source = ("subscribe" in sourceOrSourceFactory)
            ? sourceOrSourceFactory
            : sourceOrSourceFactory();
        const s = source.subscribe(setState);
        return () => s.unsubscribe();
    }, inputs);
    return state;
}

function usePromise(promiseFactory, inputs) {
    const [state, setState] = useState();
    useEffect(() => {
        let cancelled = false;
        (async () => {
            const state = await promiseFactory();
            if (cancelled) {
                return;
            }
            setState(state);
        })();
        return () => cancelled = true;
    }, inputs);
    return state;
}

var BigNumber = ethers.BigNumber;
const { keccak256: keccak256$2, arrayify, hexlify: hexlify$4 } = ethers.utils;
const xor = (xs, ys) => _.zip(arrayify(xs), arrayify(ys))
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    .map(([x, y]) => x ^ y);
const flip = (xs) => arrayify(xs).map(x => ~x);
const scoreSolution = (address, task, solution) => BigNumber.from(flip(xor(keccak256$2(solution), xor(task, keccak256$2(address)))));
const hexdotify = (x, blockSize = 4) => {
    const hex = hexlify$4(x);
    if (hex.length <= 2 + blockSize + 1 + blockSize) {
        return hex;
    }
    return `${hex.substring(0, 2 + blockSize)}…${hex.substring(hex.length - blockSize)}`;
};

const { randomBytes } = ethers.utils;
//todo this is supposed to be run as worker
class BackgroundSolver {
    constructor() {
        this.generateSolution = (address, task) => {
            const solution = randomBytes(32);
            const score = scoreSolution(address, task, solution);
            return { task, solution, score };
        };
        this.solution$ = new rx.Subject();
        setInterval(this.iterate.bind(this), 50);
    }
    setTask(address, task) {
        this.address = address;
        this.task = task;
    }
    iterate() {
        if (!this.address || !this.task) {
            return;
        }
        let best = this.generateSolution(this.address, this.task);
        for (let i = 0; i < 20; i++) {
            const solution = this.generateSolution(this.address, this.task);
            if (best.score.lt(solution.score)) {
                best = solution;
            }
        }
        this.solution$.next(best);
    }
}

var abi = [
	{
		inputs: [
		],
		name: "BET_SIZE",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "BLOCKS_TO_CREATE_TASK",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		name: "activeTasks",
		outputs: [
			{
				internalType: "uint256",
				name: "bank",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "score",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "sender",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "task",
				type: "bytes32"
			}
		],
		name: "claimReward",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "task",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "solutionClaim",
				type: "bytes32"
			}
		],
		name: "claimSoluton",
		outputs: [
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "h",
				type: "bytes32"
			},
			{
				internalType: "uint256",
				name: "searchDepth",
				type: "uint256"
			}
		],
		name: "findBlockByHash",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "task",
				type: "bytes32"
			}
		],
		name: "isTaskOngoing",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "task",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "solution",
				type: "bytes32"
			}
		],
		name: "scoreSolution",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "task",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "solution",
				type: "bytes32"
			}
		],
		name: "submitSolution",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];

const provider = new ethers.providers.JsonRpcProvider();
const block$ = rx.fromEvent(provider, "block")
    .pipe(rx.shareReplay(1));
function createHashCompetitionContract(addressOrName, signerOrProvider) {
    return new ethers.Contract(addressOrName, abi, signerOrProvider);
}

const s = ["...", "·..", "˙·.", "·˙·", ".·˙", "..·"];
const waiting$f = (interval = 100) => rx.interval(interval).pipe(rx.map(i => s[i % s.length]));
const Waiting = ({ interval = 100 }) => e(Fragment, { children: useRxSubscribe(() => waiting$f(interval), [interval]) }, void 0);

const _css$5 = css `
    & {
        text-decoration: underline dashed;
    }
    &:hover {
        background-color: rgba(255, 221, 0, 0.068);
    }
    & .copied {
        position: relative;
    }
    & .copied>* {
        position: absolute;
        bottom: -1.3em;
        left: 0.1em;
        border: 1px solid;
        background-color: rgb(255, 252, 233);
    }
`;
function CopySpan({ data, className, onMouseDown, onDblClick, children, ...props }) {
    const [copied, setCopied] = useState(false);
    const copyAndFeedback = async () => {
        await navigator.clipboard.writeText(data);
        setCopied(true);
        setTimeout(() => setCopied(false), 400);
    };
    return e("span", { ...props, className: cx("CopySpan", _css$5, className), onMouseDown: function (ev) {
            onMouseDown?.call(this, ev);
            return (ev.detail > 1) && ev.preventDefault(); // prevent text selection on dbl click
        }, onDblClick: function (ev) {
            onDblClick?.call(this, ev);
            return copyAndFeedback();
        }, title: "DblClick to copy: " + data, children: [copied && e("span", { className: "copied", children: e("div", { children: "Copied!" }, void 0) }, void 0), children] }, void 0);
}

function useToggle(inputs) {
    const [toggle, setToggle] = useState(false);
    useEffect(() => setToggle(toggle => !toggle), inputs);
    return [toggle, setToggle];
}

const flashesKeyframes = [
    keyframes `0% { background: #f6e7fc; } 100% { background: initial; } #`,
    keyframes `0% { background: #f6e7fc; } 100% { background: initial; } ##`,
];
const flashes = [
    css `& { animation: ${flashesKeyframes[0]} 1s; }`,
    css `& { animation: ${flashesKeyframes[1]} 1s; }`,
];
const useFlashes = (inputs) => flashes[+useToggle(inputs)[0]];

const { hexlify: hexlify$3 } = ethers.utils;
const _css$4 = css `
    & .hex-prefix { 
        color: rgb(184, 184, 184)
    }
`;
const Hex = ({ bytes, transform, className, }) => e("span", { className: cx(className, "Hex", _css$4, useFlashes([hexlify$3(bytes)])), children: e(CopySpan, { data: hexlify$3(bytes), children: [e("span", { className: "hex-prefix", children: "0x" }, void 0), (transform ?? hexlify$3)(bytes).substring(2)] }, void 0) }, void 0);

const _css$3 = css `
    & .hex-prefix { 
        color: rgb(184, 184, 184)
    }

    &.colored .score-fs {
        background-color: rgba(0, 157, 255, 0.100)
    }

    &.colored .score-first-non-fs {
        background-color: rgba(0, 255, 174, 0.100)
    }
`;
function Score({ score, full = false, colored = false, }) {
    const hex = "0x" + score.toHexString().substring(2).padStart(64, "0");
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const [, fs, firstNonFs, rest] = hex.match(/0x(f*)(..)(.*)/);
    const fCount = fs.length;
    const fCountStr = fCount.toString(16).padStart(2, "0");
    return e("span", { className: cx("Score", _css$3, { colored }, useFlashes([hex])), children: e(CopySpan, { data: hex, children: [e("span", { className: "hex-prefix", children: "0x" }, void 0), full
                    ? e(Fragment, { children: [e("span", { className: cx("score-fs"), children: fs }, void 0), e("span", { className: cx("score-first-non-fs"), children: firstNonFs }, void 0), rest] }, void 0)
                    : e(Fragment, { children: ["[", e("span", { className: cx("score-fs"), children: fCountStr }, void 0), "]", e("span", { className: cx("score-first-non-fs"), children: firstNonFs }, void 0), "\u2026"] }, void 0)] }, void 0) }, void 0);
}

const eqBy = (fn) => (a, b) => fn(a) === fn(b);
const eqByStringify = () => eqBy(JSON.stringify);
const def = (x) => typeof x !== "undefined";

const good = css `& { background-color: rgba(38, 255, 0, 0.068); }`;
const neutral = css `& { background-color: rgba(255, 221, 0, 0.068); }`;
const bad = css `& { background-color: rgba(255, 0, 0, 0.068); }`;
const term = css `
    & {
        text-decoration: underline dashed;
    }
    &::after {
        content: "[?]";
    }
    &:hover {
        background-color: rgba(255, 221, 0, 0.068);
    }
`;

const _css$2 = css `
    & {
        border: 1px solid;
        animation: flash0 1s;
        padding: 0.5em 0.5ch;
        margin: 1px;
    }
    &.selected {
        background-color: rgb(237, 255, 234);
    }
`;
function Task({ hashCompetition, blockNumber, selectedHash, onSolve, }) {
    const block = usePromise(() => provider.getBlock(blockNumber), []);
    const newestBlockNumber = useRxSubscribe(() => block$, []);
    const bestPublicScore = usePromise(async () => {
        if (!block) {
            return;
        }
        const at = await hashCompetition.activeTasks(block.hash);
        return at.score;
    }, [block, newestBlockNumber]);
    const selected = block && (selectedHash === block.hash);
    const solveBtn = e("button", { disabled: !block || selected, onClick: block && (() => onSolve(block.hash)), children: "Solve" }, void 0);
    const hashEl = block ? e(Hex, { bytes: block.hash, transform: hexdotify }, void 0) : e(Waiting, {}, void 0);
    const relativeNumberStr = (!def(newestBlockNumber) || !block)
        ? e(Waiting, {}, void 0)
        : (() => {
            const relativeNumber = newestBlockNumber - block.number;
            const relativeNumberStr = relativeNumber.toString().padStart(3, "·");
            return relativeNumberStr;
        })();
    return e("div", { className: cx("Task", _css$2, { selected }), children: [e("div", { children: [solveBtn, " ", relativeNumberStr, ": ", hashEl] }, void 0), e("div", { children: [e("span", { className: term, title: "The score of the best solution for the given task submitted so far", children: "Public score" }, void 0), ": ", !def(bestPublicScore) ? e(Waiting, {}, void 0) : e(Score, { score: bestPublicScore }, void 0)] }, void 0)] }, void 0);
}

const { hexlify: hexlify$2, keccak256: keccak256$1 } = ethers.utils;
function Solver({ hashCompetition, backgroundSolver, contractAddress, onClaim, }) {
    const newestBlockNumber = useRxSubscribe(() => block$, []);
    const bestSolution = useRxSubscribe(() => backgroundSolver.solution$.pipe(rx.scan((acc, value) => {
        if (acc.task !== value.task) {
            return value;
        }
        if (acc.score.lt(value.score)) {
            return value;
        }
        return acc;
    }), rx.distinctUntilChanged(eqByStringify())), [backgroundSolver]);
    const lastSolution = useRxSubscribe(() => backgroundSolver.solution$, [backgroundSolver]);
    if (!bestSolution || !lastSolution) {
        return null;
    }
    const publicTask = usePromise(async () => (await hashCompetition.activeTasks(lastSolution.task)), [newestBlockNumber, hexlify$2(lastSolution.task)]);
    const publicScore = publicTask?.score;
    const canClaim = def(publicScore) && def(bestSolution) && bestSolution.score.gt(publicScore);
    const claim = () => onClaim(bestSolution.task, bestSolution.solution, bestSolution.score);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const scoreFCount = bestSolution.score._hex.match(/0xf*/)[0].length - 2;
    return e("div", { children: [e("h2", { children: "Solver" }, void 0), e("div", { children: ["Solving task ", e(Hex, { bytes: bestSolution.task, transform: hexdotify }, void 0), e(Waiting, {}, void 0), " | Last solution: ", e(Hex, { bytes: lastSolution.solution, transform: hexdotify }, void 0), e("br", {}, void 0), e("br", {}, void 0), "Best solution so far: ", e(Hex, { bytes: bestSolution.solution, transform: hexdotify }, void 0), e("br", {}, void 0), "Goal:".padStart(10, "·"), " ", e(Hex, { bytes: xor(bestSolution.task, keccak256$1(contractAddress)) }, void 0), e("br", {}, void 0), "Sol hash:".padStart(10, "·"), " ", e(Hex, { bytes: (keccak256$1(bestSolution.solution)) }, void 0), e("br", {}, void 0), "".padStart(10, "·"), "\u00B7\u00B7\u00B7", "".padStart(scoreFCount, "⇓"), e("br", {}, void 0), "Sol score:".padStart(10, "·"), " ", e(Score, { score: bestSolution.score, full: true, colored: true }, void 0), e("br", {}, void 0), "Sol score ", e(Score, { score: bestSolution.score, colored: true }, void 0), " is ", !def(publicScore)
                        ? e(Waiting, {}, void 0)
                        : e(Fragment, { children: [(publicScore.lt(bestSolution.score)
                                    ? e(Fragment, { children: [e("span", { className: "good", children: "better" }, void 0), " than"] }, void 0)
                                    : (publicScore.eq(bestSolution.score)
                                        ? e(Fragment, { children: [e("span", { className: "neutral", children: "same" }, void 0), " as"] }, void 0)
                                        : e(Fragment, { children: [e("span", { className: "bad", children: "worse" }, void 0), " than"] }, void 0))), " pub score ", e(Score, { score: publicScore }, void 0)] }, void 0), e("br", {}, void 0), " ", e("button", { disabled: !canClaim, onClick: claim, children: "Claim" }, void 0)] }, void 0)] }, void 0);
}

const useTransaction = (txFactory, autoSend = false) => {
    const [state, setState] = useState([]);
    useEffect(() => {
        let cancelled = false;
        const send = async () => {
            if (cancelled) {
                return;
            }
            setState([["sent"]]);
            try {
                const tx = await txFactory();
                if (cancelled) {
                    return;
                }
                setState([["pooled", tx]]);
                try {
                    const rcp = await tx.wait();
                    if (cancelled) {
                        return;
                    }
                    setState([["confirmed", rcp, tx]]);
                }
                catch (er) {
                    console.error(er);
                    if (cancelled) {
                        return;
                    }
                    setState([["confirmationFailed", er, tx], send]);
                    return;
                }
            }
            catch (er) {
                console.error(er);
                if (cancelled) {
                    return;
                }
                setState([["poolingFailed", er], send]);
                return;
            }
        };
        if (autoSend) {
            send();
        }
        else {
            setState([undefined, send]);
        }
        return () => cancelled = true;
    }, []);
    return state;
};
function TransactionStatusRender({ status, }) {
    const renderError = (er) => {
        if ("object" !== typeof er || er === null) {
            return JSON.stringify(er);
        }
        if ("error" in er) {
            return renderError(er.error);
        }
        if ("message" in er) {
            const { message } = er;
            if ("string" !== typeof message) {
                return JSON.stringify(message);
            }
            const match = message.match(/reverted with reason string '(.*)'/);
            if (!match) {
                return message;
            }
            return match[1];
        }
        return JSON.stringify(er);
    };
    switch (status[0]) {
        case "sent":
            return e(Fragment, { children: ["sending", e(Waiting, {}, void 0)] }, void 0);
        case "pooled":
            return e(Fragment, { children: ["waiting confirmation", e(Waiting, {}, void 0), " (tx ", e(Hex, { bytes: status[1].hash, transform: hexdotify }, void 0), ")"] }, void 0);
        case "poolingFailed":
            return e(Fragment, { children: ["pooling failed: ", e("span", { className: bad, children: renderError(status[1]) }, void 0)] }, void 0);
        case "confirmed":
            return e(Fragment, { children: ["confirmed (tx ", e(Hex, { bytes: status[1].transactionHash, transform: hexdotify }, void 0), ")"] }, void 0);
        case "confirmationFailed":
            return e(Fragment, { children: ["confirmation failed, ", renderError(status[1])] }, void 0);
    }
}
function Transaction({ title, actionTitle, status, onRetry: retry, }) {
    return e(Fragment, { children: [status && e(Fragment, { children: [e("span", { className: useFlashes([status]), children: [title, " ", e(TransactionStatusRender, { status: status }, void 0)] }, void 0), e("br", {}, void 0)] }, void 0), retry && e(Fragment, { children: [e("button", { onClick: retry, children: (def(status) ? "Retry " : "") + (actionTitle ?? title) }, void 0), e("br", {}, void 0)] }, void 0)] }, void 0);
}

const { hexlify: hexlify$1, keccak256 } = ethers.utils;
const _css$1 = css `
    & button.short {
        float: right
    }
`;
function Solution({ hashCompetition, task, solution, score, onRemove }) {
    const newestBlockNumber = useRxSubscribe(() => block$, []);
    const block = usePromise(() => provider.getBlock(hexlify$1(task)), [task]);
    const BLOCKS_TO_CREATE_TASK = usePromise(() => hashCompetition.BLOCKS_TO_CREATE_TASK(), []);
    const isOngoing = (!def(BLOCKS_TO_CREATE_TASK) || !def(block) || !def(newestBlockNumber))
        ? undefined
        : ((newestBlockNumber - block.number) < BLOCKS_TO_CREATE_TASK.toNumber());
    const renderedTitle = e(Fragment, { children: [e("button", { className: "short", onClick: () => confirm("Are you sure you want to remove this solution? This action is not revertible")
                    && onRemove(), children: "x" }, void 0), e("h3", { children: ["Solution ", e(Hex, { bytes: solution, transform: hexdotify }, void 0), " for  ", e("span", { className: useFlashes([isOngoing]), children: _.isUndefined(isOngoing) ? e(Waiting, {}, void 0) : isOngoing
                            ? e("span", { className: term, title: "soultion claims and submissions are still accpeted\rrewards are not payed out yet", children: "ongoing" }, void 0)
                            : e("span", { className: term, title: "soultion claims and submissions are no more accpeted\rrewards are payed out", children: "finished" }, void 0) }, void 0), " task ", e(Hex, { bytes: task, transform: hexdotify }, void 0)] }, void 0)] }, void 0);
    const publicTask = usePromise(async () => (await hashCompetition.activeTasks(task)), [newestBlockNumber, task]);
    const publicScore = publicTask?.score;
    const renderedScore = e(Fragment, { children: ["Solution score ", e(Score, { score: score }, void 0), " is ", !def(publicScore)
                ? e(Waiting, {}, void 0)
                : e(Fragment, { children: [e(BigNumberCmp, { n1: score, n2: publicScore }, void 0), " public score ", e(Score, { score: publicScore }, void 0)] }, void 0)] }, void 0);
    const BET_SIZE = usePromise(() => hashCompetition.BET_SIZE(), []);
    const renderedClaim = (() => {
        if (!BET_SIZE) {
            return e(Waiting, {}, void 0);
        }
        const [claimTxStatus, sendClaim] = useTransaction(() => hashCompetition.claimSoluton(task, keccak256(solution), { value: BET_SIZE }), true);
        const renderedClaim = e(Transaction, { title: "Claim", status: claimTxStatus, onRetry: sendClaim }, void 0);
        if (claimTxStatus?.[0] !== "confirmed") {
            return renderedClaim;
        }
        // okay, the claim is confirmed
        const [submitTxStatus, sendSubmit] = useTransaction(() => hashCompetition.submitSolution(task, solution));
        const renderedSubmit = e(Transaction, { title: "Submission", actionTitle: "Submit", status: submitTxStatus, onRetry: sendSubmit }, void 0);
        if (submitTxStatus?.[0] !== "confirmed") {
            return e(Fragment, { children: [renderedClaim, renderedSubmit] }, void 0);
        }
        // okay, the submission is confirmed
        const [rewardClaimTxStatus, sendRewardClaim] = useTransaction(() => hashCompetition.claimReward(task));
        const renderedReward = e(Transaction, { title: "Reward claim", actionTitle: "Claim reward", status: rewardClaimTxStatus, onRetry: sendRewardClaim }, void 0);
        return e(Fragment, { children: [renderedClaim, renderedSubmit, renderedReward] }, void 0);
    })();
    return e("div", { className: cx("Solution", _css$1), children: [renderedTitle, renderedScore, e("br", {}, void 0), renderedClaim] }, void 0);
}
const BigNumberCmp = ({ n1, n2 }) => e(Fragment, { children: (n2.lt(n1)
        ? e(Fragment, { children: [e("span", { className: good, children: "better" }, void 0), " than"] }, void 0)
        : (n2.eq(n1)
            ? e(Fragment, { children: [e("span", { className: neutral, children: "same" }, void 0), " as"] }, void 0)
            : e(Fragment, { children: [e("span", { className: bad, children: "worse" }, void 0), " than"] }, void 0))) }, void 0);

const { hexlify } = ethers.utils;
const backgroundSolver = new BackgroundSolver();
function PerContract({ contractAddress }) {
    const hashCompetition = useMemo(() => createHashCompetitionContract(contractAddress, provider.getSigner()), [contractAddress]);
    const [selectedTask, setSelectedTask] = useState();
    const newestBlockNumber = useRxSubscribe(() => block$, []);
    const [claims, setClaims] = useState({});
    const BLOCKS_TO_CREATE_TASK = usePromise(() => hashCompetition.BLOCKS_TO_CREATE_TASK(), []);
    if (_.isUndefined(BLOCKS_TO_CREATE_TASK) || _.isUndefined(newestBlockNumber)) {
        return e("div", { children: ["Lodaing", e(Waiting, {}, void 0)] }, void 0);
    }
    const solve = (taskHash) => {
        backgroundSolver.setTask(contractAddress, taskHash);
        setSelectedTask(taskHash);
    };
    const claim = (task, solution, score) => setClaims(claims => update(claims, {
        [hexlify(task) + hexlify(solution)]: { $set: { task, solution, score } }
    }));
    return e("div", { children: [e("h1", { children: "HashCompetition frontend" }, void 0), _.values(claims).length > 0 && e("div", { children: [e("h2", { children: "Your solutions" }, void 0), _.entries(claims).map(([key, claim]) => e(Solution, { hashCompetition: hashCompetition, ...claim, onRemove: () => setClaims(claims => update(claims, {
                            $unset: [key]
                        })) }, key))] }, void 0), e(Solver, { hashCompetition: hashCompetition, contractAddress: contractAddress, backgroundSolver: backgroundSolver, onClaim: claim }, void 0), e("div", { children: [e("h2", { children: "Ongoing tasks (based on last blocks)" }, void 0), "Select a task to solve:", _.range(newestBlockNumber, Math.max(0, newestBlockNumber - BLOCKS_TO_CREATE_TASK.toNumber()), -1).map(blockNumber => e(Task, { hashCompetition: hashCompetition, blockNumber: blockNumber, selectedHash: selectedTask, onSolve: solve }, blockNumber))] }, void 0)] }, void 0);
}

function App() {
    const searchParams = new URLSearchParams(location.search);
    const contractAddress = searchParams.get("contract");
    if (!contractAddress) {
        return e("div", { children: [e("h1", { children: "No contract address specified!" }, void 0), e("div", { children: "Specify contract address in url like /?contract=0x0000000000000000000000000000000000000000" }, void 0)] }, void 0);
    }
    return e(PerContract, { contractAddress: contractAddress }, void 0);
}

const _css = css `
    & {
        width: 750px;
        margin: auto;
    }
    & * {
        font-family: "Courier";
        font-size: 1em;
        line-height: 1.1em;
    }
    & h1::before {
        content: "# ";
    }
    & h2::before {
        content: "## ";
    }
    & h3::before {
        content: "### ";
    }
    & h1, h2, h3 {
        margin: 1em 0em 0em 0em;
        padding: 0em;
    }
    & h3 {
        font-weight: normal;
    }
    & button {
        padding: 0px;
        border: none;
    }
    & button::before {
        content: "[\\00a0\\00a0";
    }
    & button::after {
        content: "\\00a0\\00a0]";
    }
    & button.short::before {
        content: "[";
    }
    & button.short::after {
        content: "]";
    }

    & .todo {
        color: red;
    }
`;
render(e("div", { className: _css, children: e(App, {}, void 0) }, void 0), document.body);

export { _css };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2pzeC1ydW50aW1lL2Rpc3QvanN4UnVudGltZS5tb2R1bGUuanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2RldnRvb2xzL2Rpc3QvZGV2dG9vbHMubW9kdWxlLmpzIiwibm9kZV9tb2R1bGVzL3ByZWFjdC9kZWJ1Zy9kaXN0L2RlYnVnLm1vZHVsZS5qcyIsIm5vZGVfbW9kdWxlcy9pbW11dGFiaWxpdHktaGVscGVyL2luZGV4LmpzIiwic3JjL3JlYWN0LXV0aWxzL3VzZVJ4U3Vic2NyaWJlLnRzIiwic3JjL3JlYWN0LXV0aWxzL3VzZVByb21pc2UudHMiLCJzcmMvZXRoLXV0aWxzLnRzIiwic3JjL0JhY2tncm91bmRTb2x2ZXIudHMiLCJzcmMvcHJvdmlkZXIudHMiLCJzcmMvcmVhY3QtdXRpbHMvV2FpdGluZy50c3giLCJzcmMvcmVhY3QtdXRpbHMvQ29weVNwYW4udHN4Iiwic3JjL3JlYWN0LXV0aWxzL3VzZVRvZ2dsZS50cyIsInNyYy9yZWFjdC11dGlscy91c2VGbGFzaGVzLnRzIiwic3JjL0hleC50c3giLCJzcmMvU2NvcmUudHN4Iiwic3JjL3V0aWxzLnRzIiwic3JjL3N0eWxlLnRzIiwic3JjL1Rhc2sudHN4Iiwic3JjL1NvbHZlci50c3giLCJzcmMvVHJhbnNhY3Rpb24udHN4Iiwic3JjL1NvbHV0aW9uLnRzeCIsInNyYy9QZXJDb250cmFjdC50c3giLCJzcmMvQXBwLnRzeCIsInNyYy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0e29wdGlvbnMgYXMgcixGcmFnbWVudCBhcyBffWZyb21cInByZWFjdFwiO2V4cG9ydHtGcmFnbWVudH1mcm9tXCJwcmVhY3RcIjt2YXIgbz0wO2Z1bmN0aW9uIGUoXyxlLG4sdCxmKXt2YXIgbCxzLHU9e307Zm9yKHMgaW4gZSlcInJlZlwiPT1zP2w9ZVtzXTp1W3NdPWVbc107dmFyIGE9e3R5cGU6Xyxwcm9wczp1LGtleTpuLHJlZjpsLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Oi0tbyxfX3NvdXJjZTp0LF9fc2VsZjpmfTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBfJiYobD1fLmRlZmF1bHRQcm9wcykpZm9yKHMgaW4gbCl2b2lkIDA9PT11W3NdJiYodVtzXT1sW3NdKTtyZXR1cm4gci52bm9kZSYmci52bm9kZShhKSxhfWV4cG9ydHtlIGFzIGpzeCxlIGFzIGpzeHMsZSBhcyBqc3hERVZ9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9anN4UnVudGltZS5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7b3B0aW9ucyBhcyBuLEZyYWdtZW50IGFzIG8sQ29tcG9uZW50IGFzIGV9ZnJvbVwicHJlYWN0XCI7ZnVuY3Rpb24gdChvLGUpe3JldHVybiBuLl9fYSYmbi5fX2EoZSksb31cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuX19QUkVBQ1RfREVWVE9PTFNfXyYmd2luZG93Ll9fUFJFQUNUX0RFVlRPT0xTX18uYXR0YWNoUHJlYWN0KFwiMTAuNi42XCIsbix7RnJhZ21lbnQ6byxDb21wb25lbnQ6ZX0pO2V4cG9ydHt0IGFzIGFkZEhvb2tOYW1lfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRldnRvb2xzLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG4sRnJhZ21lbnQgYXMgdCxDb21wb25lbnQgYXMgZX1mcm9tXCJwcmVhY3RcIjtpbXBvcnRcInByZWFjdC9kZXZ0b29sc1wiO3ZhciBvPXt9O2Z1bmN0aW9uIHIoKXtvPXt9fWZ1bmN0aW9uIGEobil7cmV0dXJuIG4udHlwZT09PXQ/XCJGcmFnbWVudFwiOlwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT9uLnR5cGUuZGlzcGxheU5hbWV8fG4udHlwZS5uYW1lOlwic3RyaW5nXCI9PXR5cGVvZiBuLnR5cGU/bi50eXBlOlwiI3RleHRcIn12YXIgaT1bXSxzPVtdO2Z1bmN0aW9uIGMoKXtyZXR1cm4gaS5sZW5ndGg+MD9pW2kubGVuZ3RoLTFdOm51bGx9dmFyIGw9ITE7ZnVuY3Rpb24gdShuKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGUmJm4udHlwZSE9dH1mdW5jdGlvbiBmKG4pe2Zvcih2YXIgdD1bbl0sZT1uO251bGwhPWUuX19vOyl0LnB1c2goZS5fX28pLGU9ZS5fX287cmV0dXJuIHQucmVkdWNlKGZ1bmN0aW9uKG4sdCl7bis9XCIgIGluIFwiK2EodCk7dmFyIGU9dC5fX3NvdXJjZTtyZXR1cm4gZT9uKz1cIiAoYXQgXCIrZS5maWxlTmFtZStcIjpcIitlLmxpbmVOdW1iZXIrXCIpXCI6bHx8KGw9ITAsY29uc29sZS53YXJuKFwiQWRkIEBiYWJlbC9wbHVnaW4tdHJhbnNmb3JtLXJlYWN0LWpzeC1zb3VyY2UgdG8gZ2V0IGEgbW9yZSBkZXRhaWxlZCBjb21wb25lbnQgc3RhY2suIE5vdGUgdGhhdCB5b3Ugc2hvdWxkIG5vdCBhZGQgaXQgdG8gcHJvZHVjdGlvbiBidWlsZHMgb2YgeW91ciBBcHAgZm9yIGJ1bmRsZSBzaXplIHJlYXNvbnMuXCIpKSxuK1wiXFxuXCJ9LFwiXCIpfXZhciBwPVwiZnVuY3Rpb25cIj09dHlwZW9mIFdlYWtNYXAsZD1lLnByb3RvdHlwZS5zZXRTdGF0ZTtlLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihuLHQpe3JldHVybiBudWxsPT10aGlzLl9fdj9udWxsPT10aGlzLnN0YXRlJiZjb25zb2xlLndhcm4oJ0NhbGxpbmcgXCJ0aGlzLnNldFN0YXRlXCIgaW5zaWRlIHRoZSBjb25zdHJ1Y3RvciBvZiBhIGNvbXBvbmVudCBpcyBhIG5vLW9wIGFuZCBtaWdodCBiZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiBJbnN0ZWFkLCBzZXQgXCJ0aGlzLnN0YXRlID0ge31cIiBkaXJlY3RseS5cXG5cXG4nK2YoYygpKSk6bnVsbD09dGhpcy5fX1AmJmNvbnNvbGUud2FybignQ2FuXFwndCBjYWxsIFwidGhpcy5zZXRTdGF0ZVwiIG9uIGFuIHVubW91bnRlZCBjb21wb25lbnQuIFRoaXMgaXMgYSBuby1vcCwgYnV0IGl0IGluZGljYXRlcyBhIG1lbW9yeSBsZWFrIGluIHlvdXIgYXBwbGljYXRpb24uIFRvIGZpeCwgY2FuY2VsIGFsbCBzdWJzY3JpcHRpb25zIGFuZCBhc3luY2hyb25vdXMgdGFza3MgaW4gdGhlIGNvbXBvbmVudFdpbGxVbm1vdW50IG1ldGhvZC5cXG5cXG4nK2YodGhpcy5fX3YpKSxkLmNhbGwodGhpcyxuLHQpfTt2YXIgaD1lLnByb3RvdHlwZS5mb3JjZVVwZGF0ZTtmdW5jdGlvbiB5KG4pe3ZhciB0PW4ucHJvcHMsZT1hKG4pLG89XCJcIjtmb3IodmFyIHIgaW4gdClpZih0Lmhhc093blByb3BlcnR5KHIpJiZcImNoaWxkcmVuXCIhPT1yKXt2YXIgaT10W3JdO1wiZnVuY3Rpb25cIj09dHlwZW9mIGkmJihpPVwiZnVuY3Rpb24gXCIrKGkuZGlzcGxheU5hbWV8fGkubmFtZSkrXCIoKSB7fVwiKSxpPU9iamVjdChpKSE9PWl8fGkudG9TdHJpbmc/aStcIlwiOk9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpKSxvKz1cIiBcIityK1wiPVwiK0pTT04uc3RyaW5naWZ5KGkpfXZhciBzPXQuY2hpbGRyZW47cmV0dXJuXCI8XCIrZStvKyhzJiZzLmxlbmd0aD9cIj4uLjwvXCIrZStcIj5cIjpcIiAvPlwiKX1lLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbD09dGhpcy5fX3Y/Y29uc29sZS53YXJuKCdDYWxsaW5nIFwidGhpcy5mb3JjZVVwZGF0ZVwiIGluc2lkZSB0aGUgY29uc3RydWN0b3Igb2YgYSBjb21wb25lbnQgaXMgYSBuby1vcCBhbmQgbWlnaHQgYmUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi5cXG5cXG4nK2YoYygpKSk6bnVsbD09dGhpcy5fX1AmJmNvbnNvbGUud2FybignQ2FuXFwndCBjYWxsIFwidGhpcy5mb3JjZVVwZGF0ZVwiIG9uIGFuIHVubW91bnRlZCBjb21wb25lbnQuIFRoaXMgaXMgYSBuby1vcCwgYnV0IGl0IGluZGljYXRlcyBhIG1lbW9yeSBsZWFrIGluIHlvdXIgYXBwbGljYXRpb24uIFRvIGZpeCwgY2FuY2VsIGFsbCBzdWJzY3JpcHRpb25zIGFuZCBhc3luY2hyb25vdXMgdGFza3MgaW4gdGhlIGNvbXBvbmVudFdpbGxVbm1vdW50IG1ldGhvZC5cXG5cXG4nK2YodGhpcy5fX3YpKSxoLmNhbGwodGhpcyxuKX0sZnVuY3Rpb24oKXshZnVuY3Rpb24oKXt2YXIgdD1uLl9fYixlPW4uZGlmZmVkLG89bi5fXyxyPW4udm5vZGUsYT1uLl9fcjtuLmRpZmZlZD1mdW5jdGlvbihuKXt1KG4pJiZzLnBvcCgpLGkucG9wKCksZSYmZShuKX0sbi5fX2I9ZnVuY3Rpb24obil7dShuKSYmaS5wdXNoKG4pLHQmJnQobil9LG4uX189ZnVuY3Rpb24obix0KXtzPVtdLG8mJm8obix0KX0sbi52bm9kZT1mdW5jdGlvbihuKXtuLl9fbz1zLmxlbmd0aD4wP3Nbcy5sZW5ndGgtMV06bnVsbCxyJiZyKG4pfSxuLl9fcj1mdW5jdGlvbihuKXt1KG4pJiZzLnB1c2gobiksYSYmYShuKX19KCk7dmFyIHQ9ITEsZT1uLl9fYixyPW4uZGlmZmVkLGM9bi52bm9kZSxsPW4uX19lLGQ9bi5fXyxoPW4uX19oLG09cD97dXNlRWZmZWN0Om5ldyBXZWFrTWFwLHVzZUxheW91dEVmZmVjdDpuZXcgV2Vha01hcCxsYXp5UHJvcFR5cGVzOm5ldyBXZWFrTWFwfTpudWxsLHY9W107bi5fX2U9ZnVuY3Rpb24obix0LGUpe2lmKHQmJnQuX19jJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnRoZW4pe3ZhciBvPW47bj1uZXcgRXJyb3IoXCJNaXNzaW5nIFN1c3BlbnNlLiBUaGUgdGhyb3dpbmcgY29tcG9uZW50IHdhczogXCIrYSh0KSk7Zm9yKHZhciByPXQ7cjtyPXIuX18paWYoci5fX2MmJnIuX19jLl9fYyl7bj1vO2JyZWFrfWlmKG4gaW5zdGFuY2VvZiBFcnJvcil0aHJvdyBufXRyeXtsKG4sdCxlKSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBuLnRoZW4mJnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBufSl9Y2F0Y2gobil7dGhyb3cgbn19LG4uX189ZnVuY3Rpb24obix0KXtpZighdCl0aHJvdyBuZXcgRXJyb3IoXCJVbmRlZmluZWQgcGFyZW50IHBhc3NlZCB0byByZW5kZXIoKSwgdGhpcyBpcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxcbkNoZWNrIGlmIHRoZSBlbGVtZW50IGlzIGF2YWlsYWJsZSBpbiB0aGUgRE9NL2hhcyB0aGUgY29ycmVjdCBpZC5cIik7dmFyIGU7c3dpdGNoKHQubm9kZVR5cGUpe2Nhc2UgMTpjYXNlIDExOmNhc2UgOTplPSEwO2JyZWFrO2RlZmF1bHQ6ZT0hMX1pZighZSl7dmFyIG89YShuKTt0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBhIHZhbGlkIEhUTUwgbm9kZSBhcyBhIHNlY29uZCBhcmd1bWVudCB0byByZW5kZXIuXFx0UmVjZWl2ZWQgXCIrdCtcIiBpbnN0ZWFkOiByZW5kZXIoPFwiK28rXCIgLz4sIFwiK3QrXCIpO1wiKX1kJiZkKG4sdCl9LG4uX19iPWZ1bmN0aW9uKG4pe3ZhciByPW4udHlwZSxpPWZ1bmN0aW9uIG4odCl7cmV0dXJuIHQ/XCJmdW5jdGlvblwiPT10eXBlb2YgdC50eXBlP24odC5fXyk6dDp7fX0obi5fXyk7aWYodD0hMCx2b2lkIDA9PT1yKXRocm93IG5ldyBFcnJvcihcIlVuZGVmaW5lZCBjb21wb25lbnQgcGFzc2VkIHRvIGNyZWF0ZUVsZW1lbnQoKVxcblxcbllvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBvciBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHNcIit5KG4pK1wiXFxuXFxuXCIrZihuKSk7aWYobnVsbCE9ciYmXCJvYmplY3RcIj09dHlwZW9mIHIpe2lmKHZvaWQgMCE9PXIuX19rJiZ2b2lkIDAhPT1yLl9fZSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHR5cGUgcGFzc2VkIHRvIGNyZWF0ZUVsZW1lbnQoKTogXCIrcitcIlxcblxcbkRpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBKU1ggbGl0ZXJhbCBhcyBKU1ggdHdpY2U/XFxuXFxuICBsZXQgTXlcIithKG4pK1wiID0gXCIreShyKStcIjtcXG4gIGxldCB2bm9kZSA9IDxNeVwiK2EobikrXCIgLz47XFxuXFxuVGhpcyB1c3VhbGx5IGhhcHBlbnMgd2hlbiB5b3UgZXhwb3J0IGEgSlNYIGxpdGVyYWwgYW5kIG5vdCB0aGUgY29tcG9uZW50LlxcblxcblwiK2YobikpO3Rocm93IG5ldyBFcnJvcihcIkludmFsaWQgdHlwZSBwYXNzZWQgdG8gY3JlYXRlRWxlbWVudCgpOiBcIisoQXJyYXkuaXNBcnJheShyKT9cImFycmF5XCI6cikpfWlmKFwidGhlYWRcIiE9PXImJlwidGZvb3RcIiE9PXImJlwidGJvZHlcIiE9PXJ8fFwidGFibGVcIj09PWkudHlwZT9cInRyXCI9PT1yJiZcInRoZWFkXCIhPT1pLnR5cGUmJlwidGZvb3RcIiE9PWkudHlwZSYmXCJ0Ym9keVwiIT09aS50eXBlJiZcInRhYmxlXCIhPT1pLnR5cGU/Y29uc29sZS5lcnJvcihcIkltcHJvcGVyIG5lc3Rpbmcgb2YgdGFibGUuIFlvdXIgPHRyPiBzaG91bGQgaGF2ZSBhIDx0aGVhZC90Ym9keS90Zm9vdC90YWJsZT4gcGFyZW50LlwiK3kobikrXCJcXG5cXG5cIitmKG4pKTpcInRkXCI9PT1yJiZcInRyXCIhPT1pLnR5cGU/Y29uc29sZS5lcnJvcihcIkltcHJvcGVyIG5lc3Rpbmcgb2YgdGFibGUuIFlvdXIgPHRkPiBzaG91bGQgaGF2ZSBhIDx0cj4gcGFyZW50LlwiK3kobikrXCJcXG5cXG5cIitmKG4pKTpcInRoXCI9PT1yJiZcInRyXCIhPT1pLnR5cGUmJmNvbnNvbGUuZXJyb3IoXCJJbXByb3BlciBuZXN0aW5nIG9mIHRhYmxlLiBZb3VyIDx0aD4gc2hvdWxkIGhhdmUgYSA8dHI+LlwiK3kobikrXCJcXG5cXG5cIitmKG4pKTpjb25zb2xlLmVycm9yKFwiSW1wcm9wZXIgbmVzdGluZyBvZiB0YWJsZS4gWW91ciA8dGhlYWQvdGJvZHkvdGZvb3Q+IHNob3VsZCBoYXZlIGEgPHRhYmxlPiBwYXJlbnQuXCIreShuKStcIlxcblxcblwiK2YobikpLHZvaWQgMCE9PW4ucmVmJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBuLnJlZiYmXCJvYmplY3RcIiE9dHlwZW9mIG4ucmVmJiYhKFwiJCR0eXBlb2ZcImluIG4pKXRocm93IG5ldyBFcnJvcignQ29tcG9uZW50XFwncyBcInJlZlwiIHByb3BlcnR5IHNob3VsZCBiZSBhIGZ1bmN0aW9uLCBvciBhbiBvYmplY3QgY3JlYXRlZCBieSBjcmVhdGVSZWYoKSwgYnV0IGdvdCBbJyt0eXBlb2Ygbi5yZWYrXCJdIGluc3RlYWRcXG5cIit5KG4pK1wiXFxuXFxuXCIrZihuKSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIG4udHlwZSlmb3IodmFyIHMgaW4gbi5wcm9wcylpZihcIm9cIj09PXNbMF0mJlwiblwiPT09c1sxXSYmXCJmdW5jdGlvblwiIT10eXBlb2Ygbi5wcm9wc1tzXSYmbnVsbCE9bi5wcm9wc1tzXSl0aHJvdyBuZXcgRXJyb3IoXCJDb21wb25lbnQncyBcXFwiXCIrcysnXCIgcHJvcGVydHkgc2hvdWxkIGJlIGEgZnVuY3Rpb24sIGJ1dCBnb3QgWycrdHlwZW9mIG4ucHJvcHNbc10rXCJdIGluc3RlYWRcXG5cIit5KG4pK1wiXFxuXFxuXCIrZihuKSk7aWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlJiZuLnR5cGUucHJvcFR5cGVzKXtpZihcIkxhenlcIj09PW4udHlwZS5kaXNwbGF5TmFtZSYmbSYmIW0ubGF6eVByb3BUeXBlcy5oYXMobi50eXBlKSl7dmFyIGM9XCJQcm9wVHlwZXMgYXJlIG5vdCBzdXBwb3J0ZWQgb24gbGF6eSgpLiBVc2UgcHJvcFR5cGVzIG9uIHRoZSB3cmFwcGVkIGNvbXBvbmVudCBpdHNlbGYuIFwiO3RyeXt2YXIgbD1uLnR5cGUoKTttLmxhenlQcm9wVHlwZXMuc2V0KG4udHlwZSwhMCksY29uc29sZS53YXJuKGMrXCJDb21wb25lbnQgd3JhcHBlZCBpbiBsYXp5KCkgaXMgXCIrYShsKSl9Y2F0Y2gobil7Y29uc29sZS53YXJuKGMrXCJXZSB3aWxsIGxvZyB0aGUgd3JhcHBlZCBjb21wb25lbnQncyBuYW1lIG9uY2UgaXQgaXMgbG9hZGVkLlwiKX19dmFyIHU9bi5wcm9wcztuLnR5cGUuX19mJiZkZWxldGUodT1mdW5jdGlvbihuLHQpe2Zvcih2YXIgZSBpbiB0KW5bZV09dFtlXTtyZXR1cm4gbn0oe30sdSkpLnJlZixmdW5jdGlvbihuLHQsZSxyLGEpe09iamVjdC5rZXlzKG4pLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIGk7dHJ5e2k9bltlXSh0LGUscixcInByb3BcIixudWxsLFwiU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRURcIil9Y2F0Y2gobil7aT1ufSFpfHxpLm1lc3NhZ2UgaW4gb3x8KG9baS5tZXNzYWdlXT0hMCxjb25zb2xlLmVycm9yKFwiRmFpbGVkIHByb3AgdHlwZTogXCIraS5tZXNzYWdlKyhhJiZcIlxcblwiK2EoKXx8XCJcIikpKX0pfShuLnR5cGUucHJvcFR5cGVzLHUsMCxhKG4pLGZ1bmN0aW9uKCl7cmV0dXJuIGYobil9KX1lJiZlKG4pfSxuLl9faD1mdW5jdGlvbihuLGUsbyl7aWYoIW58fCF0KXRocm93IG5ldyBFcnJvcihcIkhvb2sgY2FuIG9ubHkgYmUgaW52b2tlZCBmcm9tIHJlbmRlciBtZXRob2RzLlwiKTtoJiZoKG4sZSxvKX07dmFyIGI9ZnVuY3Rpb24obix0KXtyZXR1cm57Z2V0OmZ1bmN0aW9uKCl7dmFyIGU9XCJnZXRcIituK3Q7diYmdi5pbmRleE9mKGUpPDAmJih2LnB1c2goZSksY29uc29sZS53YXJuKFwiZ2V0dGluZyB2bm9kZS5cIituK1wiIGlzIGRlcHJlY2F0ZWQsIFwiK3QpKX0sc2V0OmZ1bmN0aW9uKCl7dmFyIGU9XCJzZXRcIituK3Q7diYmdi5pbmRleE9mKGUpPDAmJih2LnB1c2goZSksY29uc29sZS53YXJuKFwic2V0dGluZyB2bm9kZS5cIituK1wiIGlzIG5vdCBhbGxvd2VkLCBcIit0KSl9fX0sdz17bm9kZU5hbWU6YihcIm5vZGVOYW1lXCIsXCJ1c2Ugdm5vZGUudHlwZVwiKSxhdHRyaWJ1dGVzOmIoXCJhdHRyaWJ1dGVzXCIsXCJ1c2Ugdm5vZGUucHJvcHNcIiksY2hpbGRyZW46YihcImNoaWxkcmVuXCIsXCJ1c2Ugdm5vZGUucHJvcHMuY2hpbGRyZW5cIil9LGc9T2JqZWN0LmNyZWF0ZSh7fSx3KTtuLnZub2RlPWZ1bmN0aW9uKG4pe3ZhciB0PW4ucHJvcHM7aWYobnVsbCE9PW4udHlwZSYmbnVsbCE9dCYmKFwiX19zb3VyY2VcImluIHR8fFwiX19zZWxmXCJpbiB0KSl7dmFyIGU9bi5wcm9wcz17fTtmb3IodmFyIG8gaW4gdCl7dmFyIHI9dFtvXTtcIl9fc291cmNlXCI9PT1vP24uX19zb3VyY2U9cjpcIl9fc2VsZlwiPT09bz9uLl9fc2VsZj1yOmVbb109cn19bi5fX3Byb3RvX189ZyxjJiZjKG4pfSxuLmRpZmZlZD1mdW5jdGlvbihuKXtpZihuLl9fayYmbi5fX2suZm9yRWFjaChmdW5jdGlvbih0KXtpZih0JiZ2b2lkIDA9PT10LnR5cGUpe2RlbGV0ZSB0Ll9fLGRlbGV0ZSB0Ll9fYjt2YXIgZT1PYmplY3Qua2V5cyh0KS5qb2luKFwiLFwiKTt0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBjaGlsZC4gRW5jb3VudGVyZWQgYW4gb2JqZWN0IHdpdGggdGhlIGtleXMge1wiK2UrXCJ9LlxcblxcblwiK2YobikpfX0pLHQ9ITEsciYmcihuKSxudWxsIT1uLl9faylmb3IodmFyIGU9W10sbz0wO288bi5fX2subGVuZ3RoO28rKyl7dmFyIGE9bi5fX2tbb107aWYoYSYmbnVsbCE9YS5rZXkpe3ZhciBpPWEua2V5O2lmKC0xIT09ZS5pbmRleE9mKGkpKXtjb25zb2xlLmVycm9yKCdGb2xsb3dpbmcgY29tcG9uZW50IGhhcyB0d28gb3IgbW9yZSBjaGlsZHJlbiB3aXRoIHRoZSBzYW1lIGtleSBhdHRyaWJ1dGU6IFwiJytpKydcIi4gVGhpcyBtYXkgY2F1c2UgZ2xpdGNoZXMgYW5kIG1pc2JlaGF2aW9yIGluIHJlbmRlcmluZyBwcm9jZXNzLiBDb21wb25lbnQ6IFxcblxcbicreShuKStcIlxcblxcblwiK2YobikpO2JyZWFrfWUucHVzaChpKX19fX0oKTtleHBvcnR7ciBhcyByZXNldFByb3BXYXJuaW5nc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWJ1Zy5tb2R1bGUuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHN0cmluZ2lmaWFibGUob2JqKSB7XG4gICAgLy8gU2FmZWx5IHN0cmluZ2lmeSBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgISgndG9TdHJpbmcnIGluIG9iaikgP1xuICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKS5zbGljZSg4LCAtMSkgOlxuICAgICAgICBvYmo7XG59XG52YXIgaXNQcm9kdWN0aW9uID0gdHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhcmlhbnQgZmFpbGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UoKSk7XG4gICAgfVxufVxuZXhwb3J0cy5pbnZhcmlhbnQgPSBpbnZhcmlhbnQ7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHNwbGljZSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2U7XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuZnVuY3Rpb24gdHlwZShvYmopIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopLnNsaWNlKDgsIC0xKTtcbn1cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIChmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBnZXRBbGxLZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0YXJnZXQ7XG59KTtcbnZhciBnZXRBbGxLZXlzID0gdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbidcbiAgICA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKSk7IH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gT2JqZWN0LmtleXMob2JqKTsgfTtcbmZ1bmN0aW9uIGNvcHkob2JqZWN0KSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqZWN0KVxuICAgICAgICA/IGFzc2lnbihvYmplY3QuY29uc3RydWN0b3Iob2JqZWN0Lmxlbmd0aCksIG9iamVjdClcbiAgICAgICAgOiAodHlwZShvYmplY3QpID09PSAnTWFwJylcbiAgICAgICAgICAgID8gbmV3IE1hcChvYmplY3QpXG4gICAgICAgICAgICA6ICh0eXBlKG9iamVjdCkgPT09ICdTZXQnKVxuICAgICAgICAgICAgICAgID8gbmV3IFNldChvYmplY3QpXG4gICAgICAgICAgICAgICAgOiAob2JqZWN0ICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnKVxuICAgICAgICAgICAgICAgICAgICA/IGFzc2lnbihPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpKSwgb2JqZWN0KVxuICAgICAgICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgICAgICAgICAgICA6IG9iamVjdDtcbn1cbnZhciBDb250ZXh0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbnRleHQoKSB7XG4gICAgICAgIHRoaXMuY29tbWFuZHMgPSBhc3NpZ24oe30sIGRlZmF1bHRDb21tYW5kcyk7XG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gRGVwcmVjYXRlZDogdXBkYXRlLmV4dGVuZCwgdXBkYXRlLmlzRXF1YWxzIGFuZCB1cGRhdGUubmV3Q29udGV4dFxuICAgICAgICB0aGlzLnVwZGF0ZS5leHRlbmQgPSB0aGlzLmV4dGVuZCA9IHRoaXMuZXh0ZW5kLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlLmlzRXF1YWxzID0gZnVuY3Rpb24gKHgsIHkpIHsgcmV0dXJuIHggPT09IHk7IH07XG4gICAgICAgIHRoaXMudXBkYXRlLm5ld0NvbnRleHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgQ29udGV4dCgpLnVwZGF0ZTsgfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRleHQucHJvdG90eXBlLCBcImlzRXF1YWxzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUuaXNFcXVhbHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZS5pc0VxdWFscyA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBDb250ZXh0LnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiAoZGlyZWN0aXZlLCBmbikge1xuICAgICAgICB0aGlzLmNvbW1hbmRzW2RpcmVjdGl2ZV0gPSBmbjtcbiAgICB9O1xuICAgIENvbnRleHQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChvYmplY3QsICRzcGVjKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzcGVjID0gKHR5cGVvZiAkc3BlYyA9PT0gJ2Z1bmN0aW9uJykgPyB7ICRhcHBseTogJHNwZWMgfSA6ICRzcGVjO1xuICAgICAgICBpZiAoIShBcnJheS5pc0FycmF5KG9iamVjdCkgJiYgQXJyYXkuaXNBcnJheShzcGVjKSkpIHtcbiAgICAgICAgICAgIGludmFyaWFudCghQXJyYXkuaXNBcnJheShzcGVjKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJ1cGRhdGUoKTogWW91IHByb3ZpZGVkIGFuIGludmFsaWQgc3BlYyB0byB1cGRhdGUoKS4gVGhlIHNwZWMgbWF5IFwiICtcbiAgICAgICAgICAgICAgICBcIm5vdCBjb250YWluIGFuIGFycmF5IGV4Y2VwdCBhcyB0aGUgdmFsdWUgb2YgJHNldCwgJHB1c2gsICR1bnNoaWZ0LCBcIiArXG4gICAgICAgICAgICAgICAgXCIkc3BsaWNlIG9yIGFueSBjdXN0b20gY29tbWFuZCBhbGxvd2luZyBhbiBhcnJheSB2YWx1ZS5cIjsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaW52YXJpYW50KHR5cGVvZiBzcGVjID09PSAnb2JqZWN0JyAmJiBzcGVjICE9PSBudWxsLCBmdW5jdGlvbiAoKSB7IHJldHVybiBcInVwZGF0ZSgpOiBZb3UgcHJvdmlkZWQgYW4gaW52YWxpZCBzcGVjIHRvIHVwZGF0ZSgpLiBUaGUgc3BlYyBhbmQgXCIgK1xuICAgICAgICAgICAgXCJldmVyeSBpbmNsdWRlZCBrZXkgcGF0aCBtdXN0IGJlIHBsYWluIG9iamVjdHMgY29udGFpbmluZyBvbmUgb2YgdGhlIFwiICtcbiAgICAgICAgICAgIChcImZvbGxvd2luZyBjb21tYW5kczogXCIgKyBPYmplY3Qua2V5cyhfdGhpcy5jb21tYW5kcykuam9pbignLCAnKSArIFwiLlwiKTsgfSk7XG4gICAgICAgIHZhciBuZXh0T2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICBnZXRBbGxLZXlzKHNwZWMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoX3RoaXMuY29tbWFuZHMsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JqZWN0V2FzTmV4dE9iamVjdCA9IG9iamVjdCA9PT0gbmV4dE9iamVjdDtcbiAgICAgICAgICAgICAgICBuZXh0T2JqZWN0ID0gX3RoaXMuY29tbWFuZHNba2V5XShzcGVjW2tleV0sIG5leHRPYmplY3QsIHNwZWMsIG9iamVjdCk7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdFdhc05leHRPYmplY3QgJiYgX3RoaXMuaXNFcXVhbHMobmV4dE9iamVjdCwgb2JqZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0T2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBuZXh0VmFsdWVGb3JLZXkgPSB0eXBlKG9iamVjdCkgPT09ICdNYXAnXG4gICAgICAgICAgICAgICAgICAgID8gX3RoaXMudXBkYXRlKG9iamVjdC5nZXQoa2V5KSwgc3BlY1trZXldKVxuICAgICAgICAgICAgICAgICAgICA6IF90aGlzLnVwZGF0ZShvYmplY3Rba2V5XSwgc3BlY1trZXldKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dE9iamVjdFZhbHVlID0gdHlwZShuZXh0T2JqZWN0KSA9PT0gJ01hcCdcbiAgICAgICAgICAgICAgICAgICAgPyBuZXh0T2JqZWN0LmdldChrZXkpXG4gICAgICAgICAgICAgICAgICAgIDogbmV4dE9iamVjdFtrZXldO1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuaXNFcXVhbHMobmV4dFZhbHVlRm9yS2V5LCBuZXh0T2JqZWN0VmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHx8IHR5cGVvZiBuZXh0VmFsdWVGb3JLZXkgPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRPYmplY3QgPT09IG9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE9iamVjdCA9IGNvcHkob2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZShuZXh0T2JqZWN0KSA9PT0gJ01hcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRPYmplY3Quc2V0KGtleSwgbmV4dFZhbHVlRm9yS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRPYmplY3Rba2V5XSA9IG5leHRWYWx1ZUZvcktleTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXh0T2JqZWN0O1xuICAgIH07XG4gICAgcmV0dXJuIENvbnRleHQ7XG59KCkpO1xuZXhwb3J0cy5Db250ZXh0ID0gQ29udGV4dDtcbnZhciBkZWZhdWx0Q29tbWFuZHMgPSB7XG4gICAgJHB1c2g6IGZ1bmN0aW9uICh2YWx1ZSwgbmV4dE9iamVjdCwgc3BlYykge1xuICAgICAgICBpbnZhcmlhbnRQdXNoQW5kVW5zaGlmdChuZXh0T2JqZWN0LCBzcGVjLCAnJHB1c2gnKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA/IG5leHRPYmplY3QuY29uY2F0KHZhbHVlKSA6IG5leHRPYmplY3Q7XG4gICAgfSxcbiAgICAkdW5zaGlmdDogZnVuY3Rpb24gKHZhbHVlLCBuZXh0T2JqZWN0LCBzcGVjKSB7XG4gICAgICAgIGludmFyaWFudFB1c2hBbmRVbnNoaWZ0KG5leHRPYmplY3QsIHNwZWMsICckdW5zaGlmdCcpO1xuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID8gdmFsdWUuY29uY2F0KG5leHRPYmplY3QpIDogbmV4dE9iamVjdDtcbiAgICB9LFxuICAgICRzcGxpY2U6IGZ1bmN0aW9uICh2YWx1ZSwgbmV4dE9iamVjdCwgc3BlYywgb3JpZ2luYWxPYmplY3QpIHtcbiAgICAgICAgaW52YXJpYW50U3BsaWNlcyhuZXh0T2JqZWN0LCBzcGVjKTtcbiAgICAgICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgaW52YXJpYW50U3BsaWNlKGFyZ3MpO1xuICAgICAgICAgICAgaWYgKG5leHRPYmplY3QgPT09IG9yaWdpbmFsT2JqZWN0ICYmIGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbmV4dE9iamVjdCA9IGNvcHkob3JpZ2luYWxPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BsaWNlLmFwcGx5KG5leHRPYmplY3QsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5leHRPYmplY3Q7XG4gICAgfSxcbiAgICAkc2V0OiBmdW5jdGlvbiAodmFsdWUsIF9uZXh0T2JqZWN0LCBzcGVjKSB7XG4gICAgICAgIGludmFyaWFudFNldChzcGVjKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgJHRvZ2dsZTogZnVuY3Rpb24gKHRhcmdldHMsIG5leHRPYmplY3QpIHtcbiAgICAgICAgaW52YXJpYW50U3BlY0FycmF5KHRhcmdldHMsICckdG9nZ2xlJyk7XG4gICAgICAgIHZhciBuZXh0T2JqZWN0Q29weSA9IHRhcmdldHMubGVuZ3RoID8gY29weShuZXh0T2JqZWN0KSA6IG5leHRPYmplY3Q7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgICBuZXh0T2JqZWN0Q29weVt0YXJnZXRdID0gIW5leHRPYmplY3RbdGFyZ2V0XTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXh0T2JqZWN0Q29weTtcbiAgICB9LFxuICAgICR1bnNldDogZnVuY3Rpb24gKHZhbHVlLCBuZXh0T2JqZWN0LCBfc3BlYywgb3JpZ2luYWxPYmplY3QpIHtcbiAgICAgICAgaW52YXJpYW50U3BlY0FycmF5KHZhbHVlLCAnJHVuc2V0Jyk7XG4gICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5leHRPYmplY3QsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV4dE9iamVjdCA9PT0gb3JpZ2luYWxPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dE9iamVjdCA9IGNvcHkob3JpZ2luYWxPYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWxldGUgbmV4dE9iamVjdFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5leHRPYmplY3Q7XG4gICAgfSxcbiAgICAkYWRkOiBmdW5jdGlvbiAodmFsdWVzLCBuZXh0T2JqZWN0LCBfc3BlYywgb3JpZ2luYWxPYmplY3QpIHtcbiAgICAgICAgaW52YXJpYW50TWFwT3JTZXQobmV4dE9iamVjdCwgJyRhZGQnKTtcbiAgICAgICAgaW52YXJpYW50U3BlY0FycmF5KHZhbHVlcywgJyRhZGQnKTtcbiAgICAgICAgaWYgKHR5cGUobmV4dE9iamVjdCkgPT09ICdNYXAnKSB7XG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gX2FbMF0sIHZhbHVlID0gX2FbMV07XG4gICAgICAgICAgICAgICAgaWYgKG5leHRPYmplY3QgPT09IG9yaWdpbmFsT2JqZWN0ICYmIG5leHRPYmplY3QuZ2V0KGtleSkgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRPYmplY3QgPSBjb3B5KG9yaWdpbmFsT2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV4dE9iamVjdC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChuZXh0T2JqZWN0ID09PSBvcmlnaW5hbE9iamVjdCAmJiAhbmV4dE9iamVjdC5oYXModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRPYmplY3QgPSBjb3B5KG9yaWdpbmFsT2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV4dE9iamVjdC5hZGQodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5leHRPYmplY3Q7XG4gICAgfSxcbiAgICAkcmVtb3ZlOiBmdW5jdGlvbiAodmFsdWUsIG5leHRPYmplY3QsIF9zcGVjLCBvcmlnaW5hbE9iamVjdCkge1xuICAgICAgICBpbnZhcmlhbnRNYXBPclNldChuZXh0T2JqZWN0LCAnJHJlbW92ZScpO1xuICAgICAgICBpbnZhcmlhbnRTcGVjQXJyYXkodmFsdWUsICckcmVtb3ZlJyk7XG4gICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKG5leHRPYmplY3QgPT09IG9yaWdpbmFsT2JqZWN0ICYmIG5leHRPYmplY3QuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICBuZXh0T2JqZWN0ID0gY29weShvcmlnaW5hbE9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXh0T2JqZWN0LmRlbGV0ZShrZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5leHRPYmplY3Q7XG4gICAgfSxcbiAgICAkbWVyZ2U6IGZ1bmN0aW9uICh2YWx1ZSwgbmV4dE9iamVjdCwgX3NwZWMsIG9yaWdpbmFsT2JqZWN0KSB7XG4gICAgICAgIGludmFyaWFudE1lcmdlKG5leHRPYmplY3QsIHZhbHVlKTtcbiAgICAgICAgZ2V0QWxsS2V5cyh2YWx1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAodmFsdWVba2V5XSAhPT0gbmV4dE9iamVjdFtrZXldKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5leHRPYmplY3QgPT09IG9yaWdpbmFsT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRPYmplY3QgPSBjb3B5KG9yaWdpbmFsT2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV4dE9iamVjdFtrZXldID0gdmFsdWVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXh0T2JqZWN0O1xuICAgIH0sXG4gICAgJGFwcGx5OiBmdW5jdGlvbiAodmFsdWUsIG9yaWdpbmFsKSB7XG4gICAgICAgIGludmFyaWFudEFwcGx5KHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlKG9yaWdpbmFsKTtcbiAgICB9LFxufTtcbnZhciBkZWZhdWx0Q29udGV4dCA9IG5ldyBDb250ZXh0KCk7XG5leHBvcnRzLmlzRXF1YWxzID0gZGVmYXVsdENvbnRleHQudXBkYXRlLmlzRXF1YWxzO1xuZXhwb3J0cy5leHRlbmQgPSBkZWZhdWx0Q29udGV4dC5leHRlbmQ7XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZhdWx0Q29udGV4dC51cGRhdGU7XG4vLyBAdHMtaWdub3JlXG5leHBvcnRzLmRlZmF1bHQuZGVmYXVsdCA9IG1vZHVsZS5leHBvcnRzID0gYXNzaWduKGV4cG9ydHMuZGVmYXVsdCwgZXhwb3J0cyk7XG4vLyBpbnZhcmlhbnRzXG5mdW5jdGlvbiBpbnZhcmlhbnRQdXNoQW5kVW5zaGlmdCh2YWx1ZSwgc3BlYywgY29tbWFuZCkge1xuICAgIGludmFyaWFudChBcnJheS5pc0FycmF5KHZhbHVlKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJ1cGRhdGUoKTogZXhwZWN0ZWQgdGFyZ2V0IG9mIFwiICsgc3RyaW5naWZpYWJsZShjb21tYW5kKSArIFwiIHRvIGJlIGFuIGFycmF5OyBnb3QgXCIgKyBzdHJpbmdpZmlhYmxlKHZhbHVlKSArIFwiLlwiOyB9KTtcbiAgICBpbnZhcmlhbnRTcGVjQXJyYXkoc3BlY1tjb21tYW5kXSwgY29tbWFuZCk7XG59XG5mdW5jdGlvbiBpbnZhcmlhbnRTcGVjQXJyYXkoc3BlYywgY29tbWFuZCkge1xuICAgIGludmFyaWFudChBcnJheS5pc0FycmF5KHNwZWMpLCBmdW5jdGlvbiAoKSB7IHJldHVybiBcInVwZGF0ZSgpOiBleHBlY3RlZCBzcGVjIG9mIFwiICsgc3RyaW5naWZpYWJsZShjb21tYW5kKSArIFwiIHRvIGJlIGFuIGFycmF5OyBnb3QgXCIgKyBzdHJpbmdpZmlhYmxlKHNwZWMpICsgXCIuIFwiICtcbiAgICAgICAgXCJEaWQgeW91IGZvcmdldCB0byB3cmFwIHlvdXIgcGFyYW1ldGVyIGluIGFuIGFycmF5P1wiOyB9KTtcbn1cbmZ1bmN0aW9uIGludmFyaWFudFNwbGljZXModmFsdWUsIHNwZWMpIHtcbiAgICBpbnZhcmlhbnQoQXJyYXkuaXNBcnJheSh2YWx1ZSksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiRXhwZWN0ZWQgJHNwbGljZSB0YXJnZXQgdG8gYmUgYW4gYXJyYXk7IGdvdCBcIiArIHN0cmluZ2lmaWFibGUodmFsdWUpOyB9KTtcbiAgICBpbnZhcmlhbnRTcGxpY2Uoc3BlYy4kc3BsaWNlKTtcbn1cbmZ1bmN0aW9uIGludmFyaWFudFNwbGljZSh2YWx1ZSkge1xuICAgIGludmFyaWFudChBcnJheS5pc0FycmF5KHZhbHVlKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJ1cGRhdGUoKTogZXhwZWN0ZWQgc3BlYyBvZiAkc3BsaWNlIHRvIGJlIGFuIGFycmF5IG9mIGFycmF5czsgZ290IFwiICsgc3RyaW5naWZpYWJsZSh2YWx1ZSkgKyBcIi4gXCIgK1xuICAgICAgICBcIkRpZCB5b3UgZm9yZ2V0IHRvIHdyYXAgeW91ciBwYXJhbWV0ZXJzIGluIGFuIGFycmF5P1wiOyB9KTtcbn1cbmZ1bmN0aW9uIGludmFyaWFudEFwcGx5KGZuKSB7XG4gICAgaW52YXJpYW50KHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJ1cGRhdGUoKTogZXhwZWN0ZWQgc3BlYyBvZiAkYXBwbHkgdG8gYmUgYSBmdW5jdGlvbjsgZ290IFwiICsgc3RyaW5naWZpYWJsZShmbikgKyBcIi5cIjsgfSk7XG59XG5mdW5jdGlvbiBpbnZhcmlhbnRTZXQoc3BlYykge1xuICAgIGludmFyaWFudChPYmplY3Qua2V5cyhzcGVjKS5sZW5ndGggPT09IDEsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiQ2Fubm90IGhhdmUgbW9yZSB0aGFuIG9uZSBrZXkgaW4gYW4gb2JqZWN0IHdpdGggJHNldFwiOyB9KTtcbn1cbmZ1bmN0aW9uIGludmFyaWFudE1lcmdlKHRhcmdldCwgc3BlY1ZhbHVlKSB7XG4gICAgaW52YXJpYW50KHNwZWNWYWx1ZSAmJiB0eXBlb2Ygc3BlY1ZhbHVlID09PSAnb2JqZWN0JywgZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJ1cGRhdGUoKTogJG1lcmdlIGV4cGVjdHMgYSBzcGVjIG9mIHR5cGUgJ29iamVjdCc7IGdvdCBcIiArIHN0cmluZ2lmaWFibGUoc3BlY1ZhbHVlKTsgfSk7XG4gICAgaW52YXJpYW50KHRhcmdldCAmJiB0eXBlb2YgdGFyZ2V0ID09PSAnb2JqZWN0JywgZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJ1cGRhdGUoKTogJG1lcmdlIGV4cGVjdHMgYSB0YXJnZXQgb2YgdHlwZSAnb2JqZWN0JzsgZ290IFwiICsgc3RyaW5naWZpYWJsZSh0YXJnZXQpOyB9KTtcbn1cbmZ1bmN0aW9uIGludmFyaWFudE1hcE9yU2V0KHRhcmdldCwgY29tbWFuZCkge1xuICAgIHZhciB0eXBlT2ZUYXJnZXQgPSB0eXBlKHRhcmdldCk7XG4gICAgaW52YXJpYW50KHR5cGVPZlRhcmdldCA9PT0gJ01hcCcgfHwgdHlwZU9mVGFyZ2V0ID09PSAnU2V0JywgZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJ1cGRhdGUoKTogXCIgKyBzdHJpbmdpZmlhYmxlKGNvbW1hbmQpICsgXCIgZXhwZWN0cyBhIHRhcmdldCBvZiB0eXBlIFNldCBvciBNYXA7IGdvdCBcIiArIHN0cmluZ2lmaWFibGUodHlwZU9mVGFyZ2V0KTsgfSk7XG59XG4iLCJpbXBvcnQgKiBhcyByeCBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBJbnB1dHMgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJ4U3Vic2NyaWJlPFQ+KFxyXG4gICAgc291cmNlT3JTb3VyY2VGYWN0b3J5OiByeC5PYnNlcnZhYmxlPFQ+IHwgKCgpID0+IHJ4Lk9ic2VydmFibGU8VD4pLFxyXG4gICAgaW5wdXRzPzogSW5wdXRzXHJcbikge1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTxUPigpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzb3VyY2UgPSAoXCJzdWJzY3JpYmVcIiBpbiBzb3VyY2VPclNvdXJjZUZhY3RvcnkpXHJcbiAgICAgICAgICAgID8gc291cmNlT3JTb3VyY2VGYWN0b3J5XHJcbiAgICAgICAgICAgIDogc291cmNlT3JTb3VyY2VGYWN0b3J5KCk7XHJcbiAgICAgICAgY29uc3QgcyA9IHNvdXJjZS5zdWJzY3JpYmUoc2V0U3RhdGUpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBzLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9LCBpbnB1dHMpO1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIElucHV0cyB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlUHJvbWlzZTxUPihcclxuICAgIHByb21pc2VGYWN0b3J5OiAoKSA9PiBQcm9taXNlPFQ+IHwgVCxcclxuICAgIGlucHV0cz86IElucHV0c1xyXG4pIHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8VD4oKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gYXdhaXQgcHJvbWlzZUZhY3RvcnkoKTtcclxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkgeyByZXR1cm47IH1cclxuICAgICAgICAgICAgc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH0pKCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbGxlZCA9IHRydWU7XHJcbiAgICB9LCBpbnB1dHMpO1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG59XHJcbiIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5cclxuaW1wb3J0IEJ5dGVzTGlrZSA9IGV0aGVycy5CeXRlc0xpa2U7XHJcbmltcG9ydCBCaWdOdW1iZXIgPSBldGhlcnMuQmlnTnVtYmVyO1xyXG5jb25zdCB7IGtlY2NhazI1NiwgYXJyYXlpZnksIGhleGxpZnkgfSA9IGV0aGVycy51dGlscztcclxuXHJcbmV4cG9ydCBjb25zdCB4b3IgPSAoeHM6IEJ5dGVzTGlrZSwgeXM6IEJ5dGVzTGlrZSkgPT5cclxuICAgIF8uemlwKGFycmF5aWZ5KHhzKSwgYXJyYXlpZnkoeXMpKVxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgICAgLm1hcCgoW3gsIHldKSA9PiB4ISBeIHkhKTtcclxuXHJcbmV4cG9ydCBjb25zdCBmbGlwID0gKHhzOiBCeXRlc0xpa2UpID0+XHJcbiAgICBhcnJheWlmeSh4cykubWFwKHggPT4gfngpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNjb3JlU29sdXRpb24gPVxyXG4gICAgKGFkZHJlc3M6IEJ5dGVzTGlrZSwgdGFzazogQnl0ZXNMaWtlLCBzb2x1dGlvbjogQnl0ZXNMaWtlKSA9PlxyXG4gICAgICAgICAgICBCaWdOdW1iZXIuZnJvbShmbGlwKHhvcihrZWNjYWsyNTYoc29sdXRpb24pLCB4b3IodGFzaywga2VjY2FrMjU2KGFkZHJlc3MpKSkpKTtcclxuXHJcbmV4cG9ydCBjb25zdCBoZXhkb3RpZnkgPSAoeDogQnl0ZXNMaWtlLCBibG9ja1NpemUgPSA0KSA9PiB7XHJcbiAgICBjb25zdCBoZXggPSBoZXhsaWZ5KHgpO1xyXG4gICAgaWYgKGhleC5sZW5ndGggPD0gMiArIGJsb2NrU2l6ZSArIDEgKyBibG9ja1NpemUpIHsgcmV0dXJuIGhleDsgfVxyXG4gICAgcmV0dXJuIGAke2hleC5zdWJzdHJpbmcoMCwgMiArIGJsb2NrU2l6ZSl94oCmJHtoZXguc3Vic3RyaW5nKGhleC5sZW5ndGggLSBibG9ja1NpemUpfWA7XHJcbn0iLCJpbXBvcnQgKiBhcyByeCBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBldGhlcnMsIEJ5dGVzTGlrZSB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IHsgc2NvcmVTb2x1dGlvbiB9IGZyb20gXCIuL2V0aC11dGlsc1wiO1xyXG5cclxuY29uc3QgeyByYW5kb21CeXRlcyB9ID0gZXRoZXJzLnV0aWxzO1xyXG5cclxuLy90b2RvIHRoaXMgaXMgc3VwcG9zZWQgdG8gYmUgcnVuIGFzIHdvcmtlclxyXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZFNvbHZlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICkge1xyXG4gICAgICAgIHNldEludGVydmFsKHRoaXMuaXRlcmF0ZS5iaW5kKHRoaXMpLCA1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVTb2x1dGlvbiA9IChhZGRyZXNzOiBCeXRlc0xpa2UsIHRhc2s6IEJ5dGVzTGlrZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNvbHV0aW9uID0gcmFuZG9tQnl0ZXMoMzIpO1xyXG4gICAgICAgIGNvbnN0IHNjb3JlID0gc2NvcmVTb2x1dGlvbihhZGRyZXNzLCB0YXNrLCBzb2x1dGlvbik7XHJcbiAgICAgICAgcmV0dXJuIHsgdGFzaywgc29sdXRpb24sIHNjb3JlIH07XHJcbiAgICB9XHJcbiAgICBzY29yZVNvbHV0aW9uOiBSZXR1cm5UeXBlPHR5cGVvZiBzY29yZVNvbHV0aW9uPiB8IHVuZGVmaW5lZDtcclxuICAgIHNvbHV0aW9uJCA9IG5ldyByeC5TdWJqZWN0PFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZ2VuZXJhdGVTb2x1dGlvbj4+KCk7XHJcbiAgICBhZGRyZXNzPzogQnl0ZXNMaWtlO1xyXG4gICAgdGFzaz86IEJ5dGVzTGlrZTtcclxuICAgIHNldFRhc2soYWRkcmVzczogQnl0ZXNMaWtlLCB0YXNrOiBCeXRlc0xpa2UpIHsgXHJcbiAgICAgICAgdGhpcy5hZGRyZXNzID0gYWRkcmVzcztcclxuICAgICAgICB0aGlzLnRhc2sgPSB0YXNrO1xyXG4gICAgfVxyXG4gICAgaXRlcmF0ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYWRkcmVzcyB8fCAhdGhpcy50YXNrKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBsZXQgYmVzdCA9IHRoaXMuZ2VuZXJhdGVTb2x1dGlvbih0aGlzLmFkZHJlc3MsIHRoaXMudGFzayk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvbHV0aW9uID0gdGhpcy5nZW5lcmF0ZVNvbHV0aW9uKHRoaXMuYWRkcmVzcywgdGhpcy50YXNrKTtcclxuICAgICAgICAgICAgaWYgKGJlc3Quc2NvcmUubHQoc29sdXRpb24uc2NvcmUpKSB7IGJlc3QgPSBzb2x1dGlvbjsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNvbHV0aW9uJC5uZXh0KGJlc3QpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIHJ4IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IHsgSGFzaENvbXBldGl0aW9uIH0gZnJvbSBcIkB4cGxhcnQvaGFzaC1jb21wZXRpdGlvbi1vbmNoYWluL3R5cGVjaGFpbi10eXBlcy9IYXNoQ29tcGV0aXRpb25cIjtcclxuaW1wb3J0IHsgYWJpIH0gZnJvbSBcIkB4cGxhcnQvaGFzaC1jb21wZXRpdGlvbi1vbmNoYWluL2FydGlmYWN0cy9jb250cmFjdHMvSGFzaENvbXBldGl0aW9uLnNvbC9IYXNoQ29tcGV0aXRpb24uanNvblwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5Kc29uUnBjUHJvdmlkZXIoKTtcclxuZXhwb3J0IGNvbnN0IGJsb2NrJCA9IChyeC5mcm9tRXZlbnQocHJvdmlkZXIsIFwiYmxvY2tcIikgYXMgcnguT2JzZXJ2YWJsZTxudW1iZXI+KVxyXG4gICAgLnBpcGUocnguc2hhcmVSZXBsYXkoMSkpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhhc2hDb21wZXRpdGlvbkNvbnRyYWN0KFxyXG4gICAgYWRkcmVzc09yTmFtZTogc3RyaW5nLFxyXG4gICAgc2lnbmVyT3JQcm92aWRlcj86IGV0aGVycy5TaWduZXIgfCBldGhlcnMucHJvdmlkZXJzLlByb3ZpZGVyXHJcbikge1xyXG4gICAgcmV0dXJuIG5ldyBldGhlcnMuQ29udHJhY3QoXHJcbiAgICAgICAgYWRkcmVzc09yTmFtZSxcclxuICAgICAgICBhYmksXHJcbiAgICAgICAgc2lnbmVyT3JQcm92aWRlclxyXG4gICAgKSBhcyBIYXNoQ29tcGV0aXRpb247XHJcbn0iLCJpbXBvcnQgKiBhcyByeCBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyB1c2VSeFN1YnNjcmliZSB9IGZyb20gXCIuL3VzZVJ4U3Vic2NyaWJlXCI7XHJcblxyXG5jb25zdCBzID0gW1wiLi4uXCIsIFwiwrcuLlwiLCBcIsuZwrcuXCIsIFwiwrfLmcK3XCIsIFwiLsK3y5lcIiwgXCIuLsK3XCJdO1xyXG5leHBvcnQgY29uc3Qgd2FpdGluZyRmID0gKGludGVydmFsID0gMTAwKSA9PlxyXG4gICAgcnguaW50ZXJ2YWwoaW50ZXJ2YWwpLnBpcGUocngubWFwKGkgPT4gc1tpICUgcy5sZW5ndGhdKSk7XHJcbmV4cG9ydCBjb25zdCBXYWl0aW5nID0gKHsgaW50ZXJ2YWwgPSAxMDAgfTogeyBpbnRlcnZhbD86IG51bWJlciB9KSA9PlxyXG4gICAgPD57dXNlUnhTdWJzY3JpYmUoKCkgPT4gd2FpdGluZyRmKGludGVydmFsKSwgW2ludGVydmFsXSl9PC8+O1xyXG5cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xyXG50eXBlIEhUTUxBdHRyaWJ1dGVzPFJlZlR5cGU+ID0gaW1wb3J0KFwicHJlYWN0XCIpLmNyZWF0ZUVsZW1lbnQuSlNYLkhUTUxBdHRyaWJ1dGVzPFJlZlR5cGU+O1xyXG5cclxuY29uc3QgX2NzcyA9IGNzc2BcclxuICAgICYge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRhc2hlZDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjEsIDAsIDAuMDY4KTtcclxuICAgIH1cclxuICAgICYgLmNvcGllZCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgJiAuY29waWVkPioge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IC0xLjNlbTtcclxuICAgICAgICBsZWZ0OiAwLjFlbTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTIsIDIzMyk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ29weVNwYW4oe1xyXG4gICAgZGF0YSxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIG9uTW91c2VEb3duLFxyXG4gICAgb25EYmxDbGljayxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgLi4ucHJvcHNcclxufTogSFRNTEF0dHJpYnV0ZXM8SFRNTFNwYW5FbGVtZW50PiAmIHtcclxuICAgIGRhdGE6IHN0cmluZztcclxufSkge1xyXG4gICAgY29uc3QgW2NvcGllZCwgc2V0Q29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBjb3B5QW5kRmVlZGJhY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZGF0YSk7XHJcbiAgICAgICAgc2V0Q29waWVkKHRydWUpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q29waWVkKGZhbHNlKSwgNDAwKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIDxzcGFuXHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y3goXCJDb3B5U3BhblwiLCBfY3NzLCBjbGFzc05hbWUpfVxyXG4gICAgICAgIG9uTW91c2VEb3duPXtmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgb25Nb3VzZURvd24/LmNhbGwodGhpcywgZXYpO1xyXG4gICAgICAgICAgICByZXR1cm4gKGV2LmRldGFpbCA+IDEpICYmIGV2LnByZXZlbnREZWZhdWx0KCk7IC8vIHByZXZlbnQgdGV4dCBzZWxlY3Rpb24gb24gZGJsIGNsaWNrXHJcbiAgICAgICAgfX0gXHJcbiAgICAgICAgb25EYmxDbGljaz17ZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIG9uRGJsQ2xpY2s/LmNhbGwodGhpcywgZXYpO1xyXG4gICAgICAgICAgICByZXR1cm4gY29weUFuZEZlZWRiYWNrKCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICB0aXRsZT17XCJEYmxDbGljayB0byBjb3B5OiBcIiArIGRhdGF9XHJcbiAgICA+e2NvcGllZCAmJiA8c3BhbiBjbGFzc05hbWU9XCJjb3BpZWRcIj48ZGl2PkNvcGllZCE8L2Rpdj48L3NwYW4+fXtjaGlsZHJlbn08L3NwYW4+O1xyXG59XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIElucHV0cyB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlVG9nZ2xlKGlucHV0cz86IElucHV0cykge1xyXG4gICAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiBzZXRUb2dnbGUodG9nZ2xlID0+ICF0b2dnbGUpLCBpbnB1dHMpO1xyXG4gICAgcmV0dXJuIFt0b2dnbGUsIHNldFRvZ2dsZV0gYXMgY29uc3Q7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tIFwiQGVtb3Rpb24vY3NzXCI7XHJcbmltcG9ydCB7IElucHV0cyB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlVG9nZ2xlIH0gZnJvbSBcIi4vdXNlVG9nZ2xlXCI7XHJcblxyXG5jb25zdCBmbGFzaGVzS2V5ZnJhbWVzID0gW1xyXG4gICAga2V5ZnJhbWVzYDAlIHsgYmFja2dyb3VuZDogI2Y2ZTdmYzsgfSAxMDAlIHsgYmFja2dyb3VuZDogaW5pdGlhbDsgfSAjYCxcclxuICAgIGtleWZyYW1lc2AwJSB7IGJhY2tncm91bmQ6ICNmNmU3ZmM7IH0gMTAwJSB7IGJhY2tncm91bmQ6IGluaXRpYWw7IH0gIyNgLFxyXG5dXHJcbmV4cG9ydCBjb25zdCBmbGFzaGVzID0gW1xyXG4gICAgY3NzYCYgeyBhbmltYXRpb246ICR7Zmxhc2hlc0tleWZyYW1lc1swXX0gMXM7IH1gLFxyXG4gICAgY3NzYCYgeyBhbmltYXRpb246ICR7Zmxhc2hlc0tleWZyYW1lc1sxXX0gMXM7IH1gLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUZsYXNoZXMgPSAoaW5wdXRzPzogSW5wdXRzKSA9PiBmbGFzaGVzWyt1c2VUb2dnbGUoaW5wdXRzKVswXV07IiwiaW1wb3J0IHsgQnl0ZXNMaWtlLCBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCB7IENvcHlTcGFuIH0gZnJvbSBcIi4vcmVhY3QtdXRpbHMvQ29weVNwYW5cIjtcclxuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gXCJAZW1vdGlvbi9jc3NcIjtcclxuaW1wb3J0IHsgdXNlRmxhc2hlcyB9IGZyb20gXCIuL3JlYWN0LXV0aWxzL3VzZUZsYXNoZXNcIjtcclxudHlwZSBIVE1MQXR0cmlidXRlczxSZWZUeXBlPiA9IGltcG9ydChcInByZWFjdFwiKS5jcmVhdGVFbGVtZW50LkpTWC5IVE1MQXR0cmlidXRlczxSZWZUeXBlPjtcclxuY29uc3QgeyBoZXhsaWZ5IH0gPSBldGhlcnMudXRpbHM7XHJcblxyXG5jb25zdCBfY3NzID0gY3NzYFxyXG4gICAgJiAuaGV4LXByZWZpeCB7IFxyXG4gICAgICAgIGNvbG9yOiByZ2IoMTg0LCAxODQsIDE4NClcclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZXggPSAoe1xyXG4gICAgYnl0ZXMsXHJcbiAgICB0cmFuc2Zvcm0sXHJcbiAgICBjbGFzc05hbWUsXHJcbn06IEhUTUxBdHRyaWJ1dGVzPEhUTUxTcGFuRWxlbWVudD4gJiB7XHJcbiAgICBieXRlczogQnl0ZXNMaWtlLFxyXG4gICAgdHJhbnNmb3JtPzogKGI6IEJ5dGVzTGlrZSkgPT4gc3RyaW5nLFxyXG4gICAgY2hpbGRyZW4/OiBuZXZlcixcclxufSkgPT4gPHNwYW4gY2xhc3NOYW1lPXtjeChjbGFzc05hbWUsIFwiSGV4XCIsIF9jc3MsIHVzZUZsYXNoZXMoW2hleGxpZnkoYnl0ZXMpXSkpfT5cclxuICAgICAgICA8Q29weVNwYW4gZGF0YT17aGV4bGlmeShieXRlcyl9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZXgtcHJlZml4XCI+MHg8L3NwYW4+eyh0cmFuc2Zvcm0gPz8gaGV4bGlmeSkoYnl0ZXMpLnN1YnN0cmluZygyKX1cclxuICAgICAgICA8L0NvcHlTcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4iLCJpbXBvcnQgeyBCaWdOdW1iZXIgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tIFwiQGVtb3Rpb24vY3NzXCI7XHJcbmltcG9ydCB7IHVzZUZsYXNoZXMgfSBmcm9tIFwiLi9yZWFjdC11dGlscy91c2VGbGFzaGVzXCI7XHJcbmltcG9ydCB7IENvcHlTcGFuIH0gZnJvbSBcIi4vcmVhY3QtdXRpbHMvQ29weVNwYW5cIjtcclxuXHJcbmNvbnN0IF9jc3MgPSBjc3NgXHJcbiAgICAmIC5oZXgtcHJlZml4IHsgXHJcbiAgICAgICAgY29sb3I6IHJnYigxODQsIDE4NCwgMTg0KVxyXG4gICAgfVxyXG5cclxuICAgICYuY29sb3JlZCAuc2NvcmUtZnMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTU3LCAyNTUsIDAuMTAwKVxyXG4gICAgfVxyXG5cclxuICAgICYuY29sb3JlZCAuc2NvcmUtZmlyc3Qtbm9uLWZzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMTc0LCAwLjEwMClcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjb3JlKHtcclxuICAgIHNjb3JlLCBmdWxsID0gZmFsc2UsIGNvbG9yZWQgPSBmYWxzZSxcclxufToge1xyXG4gICAgc2NvcmU6IEJpZ051bWJlcjtcclxuICAgIGZ1bGw/OiBib29sZWFuO1xyXG4gICAgY29sb3JlZD86IGJvb2xlYW47XHJcbn0pIHtcclxuICAgIGNvbnN0IGhleCA9IFwiMHhcIiArIHNjb3JlLnRvSGV4U3RyaW5nKCkuc3Vic3RyaW5nKDIpLnBhZFN0YXJ0KDY0LCBcIjBcIik7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgY29uc3QgWywgZnMsIGZpcnN0Tm9uRnMsIHJlc3RdID0gaGV4Lm1hdGNoKC8weChmKikoLi4pKC4qKS8pITtcclxuICAgIGNvbnN0IGZDb3VudCA9IGZzLmxlbmd0aDtcclxuICAgIGNvbnN0IGZDb3VudFN0ciA9IGZDb3VudC50b1N0cmluZygxNikucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17Y3goXCJTY29yZVwiLCBfY3NzLCB7IGNvbG9yZWQgfSwgdXNlRmxhc2hlcyhbaGV4XSkpfT5cclxuICAgICAgICA8Q29weVNwYW4gZGF0YT17aGV4fT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGV4LXByZWZpeFwiPjB4PC9zcGFuPlxyXG4gICAgICAgICAgICB7ZnVsbFxyXG4gICAgICAgICAgICAgICAgPyA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goXCJzY29yZS1mc1wiKX0+e2ZzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KFwic2NvcmUtZmlyc3Qtbm9uLWZzXCIpfT57Zmlyc3ROb25Gc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge3Jlc3R9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIDogPD5cclxuICAgICAgICAgICAgICAgICAgICBbPHNwYW4gY2xhc3NOYW1lPXtjeChcInNjb3JlLWZzXCIpfT57ZkNvdW50U3RyfTwvc3Bhbj5dXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeChcInNjb3JlLWZpcnN0LW5vbi1mc1wiKX0+e2ZpcnN0Tm9uRnN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIOKAplxyXG4gICAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgIDwvQ29weVNwYW4+XHJcbiAgICA8L3NwYW4+O1xyXG59XHJcbiIsIlxyXG5leHBvcnQgY29uc3QgZXFCeSA9IDxULCBVPihmbjogKHg6IFQpID0+IFUpID0+IChhOiBULCBiOiBUKSA9PiBmbihhKSA9PT0gZm4oYik7XHJcbmV4cG9ydCBjb25zdCBlcUJ5U3RyaW5naWZ5ID0gPFQ+KCkgPT4gZXFCeShKU09OLnN0cmluZ2lmeSBhcyAoeDogVCkgPT4gc3RyaW5nKTtcclxuZXhwb3J0IGNvbnN0IGRlZiA9IDxUPih4OiBUIHwgdW5kZWZpbmVkKTogeCBpcyBUID0+IHR5cGVvZiB4ICE9PSBcInVuZGVmaW5lZFwiOyIsImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jc3NcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ29vZCA9IGNzc2AmIHsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOCwgMjU1LCAwLCAwLjA2OCk7IH1gXHJcbmV4cG9ydCBjb25zdCBuZXV0cmFsID0gY3NzYCYgeyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjIxLCAwLCAwLjA2OCk7IH1gXHJcbmV4cG9ydCBjb25zdCBiYWQgPSBjc3NgJiB7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjA2OCk7IH1gXHJcblxyXG5leHBvcnQgY29uc3QgdGVybSA9IGNzc2BcclxuICAgICYge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRhc2hlZDtcclxuICAgIH1cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIls/XVwiO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIyMSwgMCwgMC4wNjgpO1xyXG4gICAgfVxyXG5gOyIsImltcG9ydCB7IHVzZVJ4U3Vic2NyaWJlIH0gZnJvbSBcIi4vcmVhY3QtdXRpbHMvdXNlUnhTdWJzY3JpYmVcIjtcclxuaW1wb3J0IHsgdXNlUHJvbWlzZSB9IGZyb20gXCIuL3JlYWN0LXV0aWxzL3VzZVByb21pc2VcIjtcclxuaW1wb3J0IHsgQnl0ZXNMaWtlIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgeyBibG9jayQsIHByb3ZpZGVyIH0gZnJvbSBcIi4vcHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgSGFzaENvbXBldGl0aW9uIH0gZnJvbSBcIkB4cGxhcnQvaGFzaC1jb21wZXRpdGlvbi1vbmNoYWluL3R5cGVjaGFpbi10eXBlcy9IYXNoQ29tcGV0aXRpb25cIjtcclxuaW1wb3J0IHsgV2FpdGluZyB9IGZyb20gXCIuL3JlYWN0LXV0aWxzL1dhaXRpbmdcIjtcclxuaW1wb3J0IHsgSGV4IH0gZnJvbSBcIi4vSGV4XCI7XHJcbmltcG9ydCB7IGhleGRvdGlmeSB9IGZyb20gXCIuL2V0aC11dGlsc1wiO1xyXG5pbXBvcnQgeyBTY29yZSB9IGZyb20gXCIuL1Njb3JlXCI7XHJcbmltcG9ydCB7IGRlZiB9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tIFwiQGVtb3Rpb24vY3NzXCI7XHJcbmltcG9ydCAqIGFzIHN0eWxlIGZyb20gXCIuL3N0eWxlXCI7XHJcblxyXG5jb25zdCBfY3NzID0gY3NzYFxyXG4gICAgJiB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBmbGFzaDAgMXM7XHJcbiAgICAgICAgcGFkZGluZzogMC41ZW0gMC41Y2g7XHJcbiAgICAgICAgbWFyZ2luOiAxcHg7XHJcbiAgICB9XHJcbiAgICAmLnNlbGVjdGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM3LCAyNTUsIDIzNCk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGFzayh7XHJcbiAgICBoYXNoQ29tcGV0aXRpb24sXHJcbiAgICBibG9ja051bWJlcixcclxuICAgIHNlbGVjdGVkSGFzaCxcclxuICAgIG9uU29sdmUsXHJcbn06IHtcclxuICAgIGhhc2hDb21wZXRpdGlvbjogSGFzaENvbXBldGl0aW9uXHJcbiAgICBibG9ja051bWJlcjogbnVtYmVyLFxyXG4gICAgc2VsZWN0ZWRIYXNoOiBCeXRlc0xpa2UgfCB1bmRlZmluZWQsXHJcbiAgICBvblNvbHZlOiAodGFzazogQnl0ZXNMaWtlKSA9PiB2b2lkLFxyXG59KSB7XHJcbiAgICBjb25zdCBibG9jayA9IHVzZVByb21pc2UoKCkgPT4gcHJvdmlkZXIuZ2V0QmxvY2soYmxvY2tOdW1iZXIpLCBbXSk7XHJcbiAgICBjb25zdCBuZXdlc3RCbG9ja051bWJlciA9IHVzZVJ4U3Vic2NyaWJlKCgpID0+IGJsb2NrJCwgW10pO1xyXG4gICAgY29uc3QgYmVzdFB1YmxpY1Njb3JlID0gdXNlUHJvbWlzZShhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFibG9jaykgeyByZXR1cm47IH1cclxuICAgICAgICBjb25zdCBhdCA9IGF3YWl0IGhhc2hDb21wZXRpdGlvbi5hY3RpdmVUYXNrcyhibG9jay5oYXNoKTtcclxuICAgICAgICByZXR1cm4gYXQuc2NvcmU7XHJcbiAgICB9LCBbYmxvY2ssIG5ld2VzdEJsb2NrTnVtYmVyXSk7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBibG9jayAmJiAoc2VsZWN0ZWRIYXNoID09PSBibG9jay5oYXNoKTtcclxuXHJcbiAgICBjb25zdCBzb2x2ZUJ0biA9IDxidXR0b24gZGlzYWJsZWQ9eyFibG9jayB8fCBzZWxlY3RlZH0gb25DbGljaz17YmxvY2sgJiYgKCgpID0+IG9uU29sdmUoYmxvY2suaGFzaCkpfT5Tb2x2ZTwvYnV0dG9uPjtcclxuICAgIGNvbnN0IGhhc2hFbCA9IGJsb2NrID8gPEhleCBieXRlcz17YmxvY2suaGFzaH0gdHJhbnNmb3JtPXtoZXhkb3RpZnl9IC8+IDogPFdhaXRpbmcgLz47XHJcbiAgICBjb25zdCByZWxhdGl2ZU51bWJlclN0ciA9ICghZGVmKG5ld2VzdEJsb2NrTnVtYmVyKSB8fCAhYmxvY2spXHJcbiAgICAgICAgPyA8V2FpdGluZyAvPlxyXG4gICAgICAgIDogKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVOdW1iZXIgPSBuZXdlc3RCbG9ja051bWJlciAtIGJsb2NrLm51bWJlcjtcclxuICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVOdW1iZXJTdHIgPSByZWxhdGl2ZU51bWJlci50b1N0cmluZygpLnBhZFN0YXJ0KDMsIFwiwrdcIik7XHJcbiAgICAgICAgICAgIHJldHVybiByZWxhdGl2ZU51bWJlclN0cjtcclxuICAgICAgICB9KSgpO1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y3goXCJUYXNrXCIsIF9jc3MsIHsgc2VsZWN0ZWQgfSl9PlxyXG4gICAgICAgIDxkaXY+e3NvbHZlQnRufSB7cmVsYXRpdmVOdW1iZXJTdHJ9OiB7aGFzaEVsfTwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUudGVybX0gdGl0bGU9XCJUaGUgc2NvcmUgb2YgdGhlIGJlc3Qgc29sdXRpb24gZm9yIHRoZSBnaXZlbiB0YXNrIHN1Ym1pdHRlZCBzbyBmYXJcIj5cclxuICAgICAgICAgICAgICAgIFB1YmxpYyBzY29yZVxyXG4gICAgICAgICAgICA8L3NwYW4+OiB7IWRlZihiZXN0UHVibGljU2NvcmUpID8gPFdhaXRpbmcgLz4gOiA8U2NvcmUgc2NvcmU9e2Jlc3RQdWJsaWNTY29yZX0gLz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbn0iLCJpbXBvcnQgKiBhcyByeCBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyB1c2VSeFN1YnNjcmliZSB9IGZyb20gXCIuL3JlYWN0LXV0aWxzL3VzZVJ4U3Vic2NyaWJlXCI7XHJcbmltcG9ydCB7IHVzZVByb21pc2UgfSBmcm9tIFwiLi9yZWFjdC11dGlscy91c2VQcm9taXNlXCI7XHJcbmltcG9ydCB7IGRlZiwgZXFCeVN0cmluZ2lmeSB9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCB7IEJpZ051bWJlciwgQnl0ZXNMaWtlLCBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCB7IEJhY2tncm91bmRTb2x2ZXIgfSBmcm9tIFwiLi9CYWNrZ3JvdW5kU29sdmVyXCI7XHJcbmltcG9ydCB7IGhleGRvdGlmeSwgeG9yIH0gZnJvbSBcIi4vZXRoLXV0aWxzXCI7XHJcbmltcG9ydCB7IEhleCB9IGZyb20gXCIuL0hleFwiO1xyXG5pbXBvcnQgeyBTY29yZSB9IGZyb20gXCIuL1Njb3JlXCI7XHJcbmltcG9ydCB7IFdhaXRpbmcgfSBmcm9tIFwiLi9yZWFjdC11dGlscy9XYWl0aW5nXCI7XHJcbmltcG9ydCB7IGJsb2NrJCB9IGZyb20gXCIuL3Byb3ZpZGVyXCI7XHJcbmltcG9ydCB7IEhhc2hDb21wZXRpdGlvbiB9IGZyb20gXCJAeHBsYXJ0L2hhc2gtY29tcGV0aXRpb24tb25jaGFpbi90eXBlY2hhaW4tdHlwZXMvSGFzaENvbXBldGl0aW9uXCI7XHJcbmNvbnN0IHsgaGV4bGlmeSwga2VjY2FrMjU2IH0gPSBldGhlcnMudXRpbHM7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU29sdmVyKHtcclxuICAgIGhhc2hDb21wZXRpdGlvbiwgYmFja2dyb3VuZFNvbHZlciwgY29udHJhY3RBZGRyZXNzLCBvbkNsYWltLFxyXG59OiB7XHJcbiAgICBoYXNoQ29tcGV0aXRpb246IEhhc2hDb21wZXRpdGlvbixcclxuICAgIGJhY2tncm91bmRTb2x2ZXI6IEJhY2tncm91bmRTb2x2ZXIsXHJcbiAgICBjb250cmFjdEFkZHJlc3M6IEJ5dGVzTGlrZSxcclxuICAgIG9uQ2xhaW06ICh0YXNrOiBCeXRlc0xpa2UsIHNvbHV0aW9uOiBCeXRlc0xpa2UsIHNjb3JlOiBCaWdOdW1iZXIpID0+IHZvaWQ7XHJcbn0pIHtcclxuICAgIGNvbnN0IG5ld2VzdEJsb2NrTnVtYmVyID0gdXNlUnhTdWJzY3JpYmUoKCkgPT4gYmxvY2skLCBbXSk7XHJcbiAgICBjb25zdCBiZXN0U29sdXRpb24gPSB1c2VSeFN1YnNjcmliZSgoKSA9PiBiYWNrZ3JvdW5kU29sdmVyLnNvbHV0aW9uJC5waXBlKFxyXG4gICAgICAgIHJ4LnNjYW4oKGFjYywgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGFjYy50YXNrICE9PSB2YWx1ZS50YXNrKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFjYy5zY29yZS5sdCh2YWx1ZS5zY29yZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHJ4LmRpc3RpbmN0VW50aWxDaGFuZ2VkKGVxQnlTdHJpbmdpZnkoKSlcclxuICAgICksIFtiYWNrZ3JvdW5kU29sdmVyXSk7XHJcbiAgICBjb25zdCBsYXN0U29sdXRpb24gPSB1c2VSeFN1YnNjcmliZSgoKSA9PiBiYWNrZ3JvdW5kU29sdmVyLnNvbHV0aW9uJCwgW2JhY2tncm91bmRTb2x2ZXJdKTtcclxuICAgIGlmICghYmVzdFNvbHV0aW9uIHx8ICFsYXN0U29sdXRpb24pIHsgcmV0dXJuIG51bGw7IH1cclxuICAgIGNvbnN0IHB1YmxpY1Rhc2sgPSB1c2VQcm9taXNlKFxyXG4gICAgICAgIGFzeW5jICgpID0+IChhd2FpdCBoYXNoQ29tcGV0aXRpb24uYWN0aXZlVGFza3MobGFzdFNvbHV0aW9uLnRhc2spKSxcclxuICAgICAgICBbbmV3ZXN0QmxvY2tOdW1iZXIsIGhleGxpZnkobGFzdFNvbHV0aW9uLnRhc2spXSk7XHJcbiAgICBjb25zdCBwdWJsaWNTY29yZSA9IHB1YmxpY1Rhc2s/LnNjb3JlO1xyXG4gICAgY29uc3QgY2FuQ2xhaW0gPSBkZWYocHVibGljU2NvcmUpICYmIGRlZihiZXN0U29sdXRpb24pICYmIGJlc3RTb2x1dGlvbi5zY29yZS5ndChwdWJsaWNTY29yZSk7XHJcbiAgICBjb25zdCBjbGFpbSA9ICgpID0+IG9uQ2xhaW0oYmVzdFNvbHV0aW9uLnRhc2ssIGJlc3RTb2x1dGlvbi5zb2x1dGlvbiwgYmVzdFNvbHV0aW9uLnNjb3JlKTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICBjb25zdCBzY29yZUZDb3VudCA9IGJlc3RTb2x1dGlvbi5zY29yZS5faGV4Lm1hdGNoKC8weGYqLykhWzBdLmxlbmd0aCAtIDI7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICA8aDI+U29sdmVyPC9oMj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBTb2x2aW5nIHRhc2sgPEhleCBieXRlcz17YmVzdFNvbHV0aW9uLnRhc2t9IHRyYW5zZm9ybT17aGV4ZG90aWZ5fSAvPjxXYWl0aW5nIC8+XHJcbiAgICAgICAgICAgICYjeDIwO3wgTGFzdCBzb2x1dGlvbjogPEhleCBieXRlcz17bGFzdFNvbHV0aW9uLnNvbHV0aW9ufSB0cmFuc2Zvcm09e2hleGRvdGlmeX0gLz48YnIgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIEJlc3Qgc29sdXRpb24gc28gZmFyOiA8SGV4IGJ5dGVzPXtiZXN0U29sdXRpb24uc29sdXRpb259IHRyYW5zZm9ybT17aGV4ZG90aWZ5fSAvPjxiciAvPlxyXG4gICAgICAgICAgICB7XCJHb2FsOlwiLnBhZFN0YXJ0KDEwLCBcIsK3XCIpfVxyXG4gICAgICAgICAgICAmI3gyMDs8SGV4IGJ5dGVzPXt4b3IoYmVzdFNvbHV0aW9uLnRhc2ssIGtlY2NhazI1Nihjb250cmFjdEFkZHJlc3MpKX0gLz48YnIgLz5cclxuICAgICAgICAgICAge1wiU29sIGhhc2g6XCIucGFkU3RhcnQoMTAsIFwiwrdcIil9XHJcbiAgICAgICAgICAgICYjeDIwOzxIZXggYnl0ZXM9eyhrZWNjYWsyNTYoYmVzdFNvbHV0aW9uLnNvbHV0aW9uKSl9IC8+PGJyIC8+XHJcbiAgICAgICAgICAgIHtcIlwiLnBhZFN0YXJ0KDEwLCBcIsK3XCIpfcK3wrfCt3tcIlwiLnBhZFN0YXJ0KHNjb3JlRkNvdW50LCBcIuKHk1wiKX08YnIgLz5cclxuICAgICAgICAgICAge1wiU29sIHNjb3JlOlwiLnBhZFN0YXJ0KDEwLCBcIsK3XCIpfVxyXG4gICAgICAgICAgICAmI3gyMDs8U2NvcmUgc2NvcmU9e2Jlc3RTb2x1dGlvbi5zY29yZX0gZnVsbCBjb2xvcmVkIC8+PGJyIC8+XHJcbiAgICAgICAgICAgIFNvbCBzY29yZSA8U2NvcmUgc2NvcmU9e2Jlc3RTb2x1dGlvbi5zY29yZX0gY29sb3JlZCAvPiBpcyB7XHJcbiAgICAgICAgICAgICAgICAhZGVmKHB1YmxpY1Njb3JlKVxyXG4gICAgICAgICAgICAgICAgICAgID8gPFdhaXRpbmcgLz5cclxuICAgICAgICAgICAgICAgICAgICA6IDw+eyhwdWJsaWNTY29yZS5sdChiZXN0U29sdXRpb24uc2NvcmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPD48c3BhbiBjbGFzc05hbWU9XCJnb29kXCI+YmV0dGVyPC9zcGFuPiB0aGFuPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKHB1YmxpY1Njb3JlLmVxKGJlc3RTb2x1dGlvbi5zY29yZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPD48c3BhbiBjbGFzc05hbWU9XCJuZXV0cmFsXCI+c2FtZTwvc3Bhbj4gYXM8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPD48c3BhbiBjbGFzc05hbWU9XCJiYWRcIj53b3JzZTwvc3Bhbj4gdGhhbjwvPikpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBwdWIgc2NvcmUgPFNjb3JlIHNjb3JlPXtwdWJsaWNTY29yZX0gLz48Lz5cclxuICAgICAgICAgICAgfTxiciAvPlxyXG4gICAgICAgICAgICAmI3gyMDs8YnV0dG9uIGRpc2FibGVkPXshY2FuQ2xhaW19IG9uQ2xpY2s9e2NsYWltfT5DbGFpbTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG59XHJcbiIsImltcG9ydCB7IENvbnRyYWN0UmVjZWlwdCwgQ29udHJhY3RUcmFuc2FjdGlvbiB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgaGV4ZG90aWZ5IH0gZnJvbSBcIi4vZXRoLXV0aWxzXCI7XHJcbmltcG9ydCB7IEhleCB9IGZyb20gXCIuL0hleFwiO1xyXG5pbXBvcnQgeyB1c2VGbGFzaGVzIH0gZnJvbSBcIi4vcmVhY3QtdXRpbHMvdXNlRmxhc2hlc1wiO1xyXG5pbXBvcnQgeyBXYWl0aW5nIH0gZnJvbSBcIi4vcmVhY3QtdXRpbHMvV2FpdGluZ1wiO1xyXG5pbXBvcnQgeyBkZWYgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQgKiBhcyBzdHlsZSBmcm9tIFwiLi9zdHlsZVwiO1xyXG5cclxudHlwZSBUcmFuc2FjdGlvblN0YXR1cyA9XHJcbiAgICBbXCJzZW50XCJdXHJcbiAgICB8IFtcInBvb2xlZFwiLCBDb250cmFjdFRyYW5zYWN0aW9uXVxyXG4gICAgfCBbXCJwb29saW5nRmFpbGVkXCIsIHVua25vd25dXHJcbiAgICB8IFtcImNvbmZpcm1lZFwiLCBDb250cmFjdFJlY2VpcHQsIENvbnRyYWN0VHJhbnNhY3Rpb25dXHJcbiAgICB8IFtcImNvbmZpcm1hdGlvbkZhaWxlZFwiLCB1bmtub3duLCBDb250cmFjdFRyYW5zYWN0aW9uXTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VUcmFuc2FjdGlvbiA9ICh0eEZhY3Rvcnk6ICgpID0+IFByb21pc2U8Q29udHJhY3RUcmFuc2FjdGlvbj4sIGF1dG9TZW5kID0gZmFsc2UpID0+IHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoW10gYXMgW3N0YXR1cz86IFRyYW5zYWN0aW9uU3RhdHVzLCBzZW5kPzogKCkgPT4gdm9pZF0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3Qgc2VuZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkgeyByZXR1cm47IH1cclxuICAgICAgICAgICAgc2V0U3RhdGUoW1tcInNlbnRcIl1dKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4ID0gYXdhaXQgdHhGYWN0b3J5KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoW1tcInBvb2xlZFwiLCB0eF1dKTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmNwID0gYXdhaXQgdHgud2FpdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUoW1tcImNvbmZpcm1lZFwiLCByY3AsIHR4XV0pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXRlKFtbXCJjb25maXJtYXRpb25GYWlsZWRcIiwgZXIsIHR4XSwgc2VuZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkgeyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIHNldFN0YXRlKFtbXCJwb29saW5nRmFpbGVkXCIsIGVyXSwgc2VuZF0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoYXV0b1NlbmQpIHsgXHJcbiAgICAgICAgICAgIHNlbmQoKTsgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0U3RhdGUoW3VuZGVmaW5lZCwgc2VuZF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsbGVkID0gdHJ1ZTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiBzdGF0ZTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2FjdGlvblN0YXR1c1JlbmRlcih7XHJcbiAgICBzdGF0dXMsXHJcbn06IHtcclxuICAgIHN0YXR1czogVHJhbnNhY3Rpb25TdGF0dXMsXHJcbn0pIHtcclxuICAgIGNvbnN0IHJlbmRlckVycm9yID0gKGVyOiB1bmtub3duKTogc3RyaW5nID0+IHtcclxuICAgICAgICBpZiAoXCJvYmplY3RcIiAhPT0gdHlwZW9mIGVyIHx8IGVyID09PSBudWxsKSB7IHJldHVybiBKU09OLnN0cmluZ2lmeShlcik7IH1cclxuICAgICAgICBpZiAoXCJlcnJvclwiIGluIGVyKSB7IHJldHVybiByZW5kZXJFcnJvcigoZXIgYXMgeyBlcnJvcjogdW5rbm93biB9KS5lcnJvcik7IH1cclxuICAgICAgICBpZiAoXCJtZXNzYWdlXCIgaW4gZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSAoZXIgYXMgeyBtZXNzYWdlOiB1bmtub3duIH0pO1xyXG4gICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiAhPT0gdHlwZW9mIG1lc3NhZ2UpIHsgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpOyB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gbWVzc2FnZS5tYXRjaCgvcmV2ZXJ0ZWQgd2l0aCByZWFzb24gc3RyaW5nICcoLiopJy8pO1xyXG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7IHJldHVybiBtZXNzYWdlOyB9XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaFsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGVyKTtcclxuICAgIH07XHJcbiAgICBzd2l0Y2ggKHN0YXR1c1swXSkge1xyXG4gICAgICAgIGNhc2UgXCJzZW50XCI6XHJcbiAgICAgICAgICAgIHJldHVybiA8PnNlbmRpbmc8V2FpdGluZyAvPjwvPjtcclxuICAgICAgICBjYXNlIFwicG9vbGVkXCI6XHJcbiAgICAgICAgICAgIHJldHVybiA8PndhaXRpbmcgY29uZmlybWF0aW9uPFdhaXRpbmcgLz4gKHR4IDxIZXggYnl0ZXM9e3N0YXR1c1sxXS5oYXNofSB0cmFuc2Zvcm09e2hleGRvdGlmeX0gLz4pPC8+O1xyXG4gICAgICAgIGNhc2UgXCJwb29saW5nRmFpbGVkXCI6XHJcbiAgICAgICAgICAgIHJldHVybiA8PnBvb2xpbmcgZmFpbGVkOiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmJhZH0+e3JlbmRlckVycm9yKHN0YXR1c1sxXSl9PC9zcGFuPjwvPjtcclxuICAgICAgICBjYXNlIFwiY29uZmlybWVkXCI6XHJcbiAgICAgICAgICAgIHJldHVybiA8PmNvbmZpcm1lZCAodHggPEhleCBieXRlcz17c3RhdHVzWzFdLnRyYW5zYWN0aW9uSGFzaH0gdHJhbnNmb3JtPXtoZXhkb3RpZnl9IC8+KTwvPlxyXG4gICAgICAgIGNhc2UgXCJjb25maXJtYXRpb25GYWlsZWRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIDw+Y29uZmlybWF0aW9uIGZhaWxlZCwge3JlbmRlckVycm9yKHN0YXR1c1sxXSl9PC8+O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zYWN0aW9uKHtcclxuICAgIHRpdGxlLCBhY3Rpb25UaXRsZSwgc3RhdHVzLCBvblJldHJ5OiByZXRyeSxcclxufToge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGFjdGlvblRpdGxlPzogc3RyaW5nO1xyXG4gICAgc3RhdHVzOiBSZXR1cm5UeXBlPHR5cGVvZiB1c2VUcmFuc2FjdGlvbj5bMF07XHJcbiAgICBvblJldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiB1c2VUcmFuc2FjdGlvbj5bMV07XHJcbn0pIHtcclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIHtzdGF0dXMgJiYgPD48c3BhbiBjbGFzc05hbWU9e3VzZUZsYXNoZXMoW3N0YXR1c10pfT5cclxuICAgICAgICAgICAge3RpdGxlfSA8VHJhbnNhY3Rpb25TdGF0dXNSZW5kZXIgc3RhdHVzPXtzdGF0dXN9IC8+XHJcbiAgICAgICAgPC9zcGFuPjxiciAvPjwvPn1cclxuICAgICAgICB7cmV0cnkgJiYgPD48YnV0dG9uIG9uQ2xpY2s9e3JldHJ5fT5cclxuICAgICAgICAgICAgeyhkZWYoc3RhdHVzKSA/IFwiUmV0cnkgXCIgOiBcIlwiKSArIChhY3Rpb25UaXRsZSA/PyB0aXRsZSl9XHJcbiAgICAgICAgPC9idXR0b24+PGJyIC8+PC8+fVxyXG4gICAgPC8+O1xyXG59XHJcbiIsImltcG9ydCB7IHVzZUZsYXNoZXMgfSBmcm9tIFwiLi9yZWFjdC11dGlscy91c2VGbGFzaGVzXCI7XHJcbmltcG9ydCB7IHVzZVJ4U3Vic2NyaWJlIH0gZnJvbSBcIi4vcmVhY3QtdXRpbHMvdXNlUnhTdWJzY3JpYmVcIjtcclxuaW1wb3J0IHsgdXNlUHJvbWlzZSB9IGZyb20gXCIuL3JlYWN0LXV0aWxzL3VzZVByb21pc2VcIjtcclxuaW1wb3J0IHsgQnl0ZXNMaWtlLCBCaWdOdW1iZXIsIGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IHsgSGV4IH0gZnJvbSBcIi4vSGV4XCI7XHJcbmltcG9ydCB7IGhleGRvdGlmeSB9IGZyb20gXCIuL2V0aC11dGlsc1wiO1xyXG5pbXBvcnQgeyBXYWl0aW5nIH0gZnJvbSBcIi4vcmVhY3QtdXRpbHMvV2FpdGluZ1wiO1xyXG5pbXBvcnQgeyBibG9jayQsIHByb3ZpZGVyIH0gZnJvbSBcIi4vcHJvdmlkZXJcIjtcclxuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyBTY29yZSB9IGZyb20gXCIuL1Njb3JlXCI7XHJcbmltcG9ydCB7IGRlZiB9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCB7IEhhc2hDb21wZXRpdGlvbiB9IGZyb20gXCJAeHBsYXJ0L2hhc2gtY29tcGV0aXRpb24tb25jaGFpbi90eXBlY2hhaW4tdHlwZXMvSGFzaENvbXBldGl0aW9uXCI7XHJcbmltcG9ydCAqIGFzIHN0eWxlIGZyb20gXCIuL3N0eWxlXCI7XHJcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tIFwiQGVtb3Rpb24vY3NzXCI7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uLCB1c2VUcmFuc2FjdGlvbiB9IGZyb20gXCIuL1RyYW5zYWN0aW9uXCI7XHJcblxyXG5jb25zdCB7IGhleGxpZnksIGtlY2NhazI1NiB9ID0gZXRoZXJzLnV0aWxzO1xyXG5cclxuY29uc3QgX2NzcyA9IGNzc2BcclxuICAgICYgYnV0dG9uLnNob3J0IHtcclxuICAgICAgICBmbG9hdDogcmlnaHRcclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTb2x1dGlvbih7XHJcbiAgICBoYXNoQ29tcGV0aXRpb24sIHRhc2ssIHNvbHV0aW9uLCBzY29yZSwgb25SZW1vdmVcclxufToge1xyXG4gICAgaGFzaENvbXBldGl0aW9uOiBIYXNoQ29tcGV0aXRpb25cclxuICAgIHRhc2s6IEJ5dGVzTGlrZSxcclxuICAgIHNvbHV0aW9uOiBCeXRlc0xpa2UsXHJcbiAgICBzY29yZTogQmlnTnVtYmVyLFxyXG4gICAgb25SZW1vdmU6ICgpID0+IHZvaWQsXHJcbn0pIHtcclxuICAgIGNvbnN0IG5ld2VzdEJsb2NrTnVtYmVyID0gdXNlUnhTdWJzY3JpYmUoKCkgPT4gYmxvY2skLCBbXSk7XHJcbiAgICBjb25zdCBibG9jayA9IHVzZVByb21pc2UoKCkgPT4gcHJvdmlkZXIuZ2V0QmxvY2soaGV4bGlmeSh0YXNrKSksIFt0YXNrXSk7XHJcbiAgICBjb25zdCBCTE9DS1NfVE9fQ1JFQVRFX1RBU0sgPSB1c2VQcm9taXNlKCgpID0+IGhhc2hDb21wZXRpdGlvbi5CTE9DS1NfVE9fQ1JFQVRFX1RBU0soKSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGlzT25nb2luZyA9XHJcbiAgICAgICAgKCFkZWYoQkxPQ0tTX1RPX0NSRUFURV9UQVNLKSB8fCAhZGVmKGJsb2NrKSB8fCAhZGVmKG5ld2VzdEJsb2NrTnVtYmVyKSlcclxuICAgICAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICAgICAgOiAoKG5ld2VzdEJsb2NrTnVtYmVyIC0gYmxvY2subnVtYmVyKSA8IEJMT0NLU19UT19DUkVBVEVfVEFTSy50b051bWJlcigpKTtcclxuXHJcblxyXG4gICAgY29uc3QgcmVuZGVyZWRUaXRsZSA9IDw+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzaG9ydFwiIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgIGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgc29sdXRpb24/IFRoaXMgYWN0aW9uIGlzIG5vdCByZXZlcnRpYmxlXCIpXHJcbiAgICAgICAgICAgICYmIG9uUmVtb3ZlKClcclxuICAgICAgICB9Png8L2J1dHRvbj5cclxuICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgIFNvbHV0aW9uIDxIZXggYnl0ZXM9e3NvbHV0aW9ufSB0cmFuc2Zvcm09e2hleGRvdGlmeX0gLz4gZm9yXHJcbiAgICAgICAgICAgICYjeDIwOzxzcGFuIGNsYXNzTmFtZT17dXNlRmxhc2hlcyhbaXNPbmdvaW5nXSl9PntfLmlzVW5kZWZpbmVkKGlzT25nb2luZykgPyA8V2FpdGluZyAvPiA6IGlzT25nb2luZ1xyXG4gICAgICAgICAgICAgICAgPyA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudGVybX1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cInNvdWx0aW9uIGNsYWltcyBhbmQgc3VibWlzc2lvbnMgYXJlIHN0aWxsIGFjY3BldGVkJiMwMTM7cmV3YXJkcyBhcmUgbm90IHBheWVkIG91dCB5ZXRcIlxyXG4gICAgICAgICAgICAgICAgPm9uZ29pbmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA6IDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS50ZXJtfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwic291bHRpb24gY2xhaW1zIGFuZCBzdWJtaXNzaW9ucyBhcmUgbm8gbW9yZSBhY2NwZXRlZCYjMDEzO3Jld2FyZHMgYXJlIHBheWVkIG91dFwiXHJcbiAgICAgICAgICAgICAgICA+ZmluaXNoZWQ8L3NwYW4+XHJcbiAgICAgICAgICAgIH08L3NwYW4+XHJcbiAgICAgICAgICAgICYjeDIwO3Rhc2sgPEhleCBieXRlcz17dGFza30gdHJhbnNmb3JtPXtoZXhkb3RpZnl9IC8+XHJcbiAgICAgICAgPC9oMz5cclxuICAgIDwvPjtcclxuXHJcbiAgICBjb25zdCBwdWJsaWNUYXNrID0gdXNlUHJvbWlzZShcclxuICAgICAgICBhc3luYyAoKSA9PiAoYXdhaXQgaGFzaENvbXBldGl0aW9uLmFjdGl2ZVRhc2tzKHRhc2spKSxcclxuICAgICAgICBbbmV3ZXN0QmxvY2tOdW1iZXIsIHRhc2tdKTtcclxuICAgIGNvbnN0IHB1YmxpY1Njb3JlID0gcHVibGljVGFzaz8uc2NvcmU7XHJcbiAgICBjb25zdCByZW5kZXJlZFNjb3JlID0gPD5Tb2x1dGlvbiBzY29yZSA8U2NvcmUgc2NvcmU9e3Njb3JlfSAvPiBpcyB7XHJcbiAgICAgICAgIWRlZihwdWJsaWNTY29yZSlcclxuICAgICAgICAgICAgPyA8V2FpdGluZyAvPlxyXG4gICAgICAgICAgICA6IDw+PEJpZ051bWJlckNtcCBuMT17c2NvcmV9IG4yPXtwdWJsaWNTY29yZX0gLz4gcHVibGljIHNjb3JlIDxTY29yZSBzY29yZT17cHVibGljU2NvcmV9IC8+PC8+XHJcbiAgICB9PC8+XHJcblxyXG4gICAgY29uc3QgQkVUX1NJWkUgPSB1c2VQcm9taXNlKCgpID0+IGhhc2hDb21wZXRpdGlvbi5CRVRfU0laRSgpLCBbXSk7XHJcbiAgICBjb25zdCByZW5kZXJlZENsYWltID0gKCgpID0+IHtcclxuICAgICAgICBpZiAoIUJFVF9TSVpFKSB7IHJldHVybiA8V2FpdGluZyAvPiB9XHJcblxyXG4gICAgICAgIGNvbnN0IFtjbGFpbVR4U3RhdHVzLCBzZW5kQ2xhaW1dID0gdXNlVHJhbnNhY3Rpb24oKCkgPT5cclxuICAgICAgICAgICAgaGFzaENvbXBldGl0aW9uLmNsYWltU29sdXRvbih0YXNrLCBrZWNjYWsyNTYoc29sdXRpb24pLCB7IHZhbHVlOiBCRVRfU0laRSB9KSxcclxuICAgICAgICAgICAgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlcmVkQ2xhaW0gPSA8VHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgdGl0bGU9XCJDbGFpbVwiIHN0YXR1cz17Y2xhaW1UeFN0YXR1c30gb25SZXRyeT17c2VuZENsYWltfSAvPjtcclxuXHJcbiAgICAgICAgaWYgKGNsYWltVHhTdGF0dXM/LlswXSAhPT0gXCJjb25maXJtZWRcIikgeyByZXR1cm4gcmVuZGVyZWRDbGFpbTsgfVxyXG5cclxuICAgICAgICAvLyBva2F5LCB0aGUgY2xhaW0gaXMgY29uZmlybWVkXHJcbiAgICAgICAgY29uc3QgW3N1Ym1pdFR4U3RhdHVzLCBzZW5kU3VibWl0XSA9IHVzZVRyYW5zYWN0aW9uKCgpID0+XHJcbiAgICAgICAgICAgIGhhc2hDb21wZXRpdGlvbi5zdWJtaXRTb2x1dGlvbih0YXNrLCBzb2x1dGlvbikpO1xyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJlZFN1Ym1pdCA9IDxUcmFuc2FjdGlvblxyXG4gICAgICAgICAgICB0aXRsZT1cIlN1Ym1pc3Npb25cIiBhY3Rpb25UaXRsZT1cIlN1Ym1pdFwiIHN0YXR1cz17c3VibWl0VHhTdGF0dXN9IG9uUmV0cnk9e3NlbmRTdWJtaXR9IC8+O1xyXG5cclxuICAgICAgICBpZiAoc3VibWl0VHhTdGF0dXM/LlswXSAhPT0gXCJjb25maXJtZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgICAgIHtyZW5kZXJlZENsYWltfVxyXG4gICAgICAgICAgICAgICAge3JlbmRlcmVkU3VibWl0fVxyXG4gICAgICAgICAgICA8Lz47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBva2F5LCB0aGUgc3VibWlzc2lvbiBpcyBjb25maXJtZWRcclxuICAgICAgICBjb25zdCBbcmV3YXJkQ2xhaW1UeFN0YXR1cywgc2VuZFJld2FyZENsYWltXSA9IHVzZVRyYW5zYWN0aW9uKCgpID0+XHJcbiAgICAgICAgICAgIGhhc2hDb21wZXRpdGlvbi5jbGFpbVJld2FyZCh0YXNrKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlcmVkUmV3YXJkID0gPFRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgIHRpdGxlPVwiUmV3YXJkIGNsYWltXCIgYWN0aW9uVGl0bGU9XCJDbGFpbSByZXdhcmRcIiBzdGF0dXM9e3Jld2FyZENsYWltVHhTdGF0dXN9IG9uUmV0cnk9e3NlbmRSZXdhcmRDbGFpbX0gLz47XHJcblxyXG4gICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICB7cmVuZGVyZWRDbGFpbX1cclxuICAgICAgICAgICAge3JlbmRlcmVkU3VibWl0fVxyXG4gICAgICAgICAgICB7cmVuZGVyZWRSZXdhcmR9XHJcbiAgICAgICAgPC8+XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y3goXCJTb2x1dGlvblwiLCBfY3NzKX0+XHJcbiAgICAgICAge3JlbmRlcmVkVGl0bGV9XHJcbiAgICAgICAge3JlbmRlcmVkU2NvcmV9PGJyIC8+XHJcbiAgICAgICAge3JlbmRlcmVkQ2xhaW19XHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBCaWdOdW1iZXJDbXAgPSAoeyBuMSwgbjIgfTogeyBuMTogQmlnTnVtYmVyLCBuMjogQmlnTnVtYmVyIH0pID0+XHJcbiAgICA8PnsobjIubHQobjEpXHJcbiAgICAgICAgPyA8PjxzcGFuIGNsYXNzTmFtZT17c3R5bGUuZ29vZH0+YmV0dGVyPC9zcGFuPiB0aGFuPC8+XHJcbiAgICAgICAgOiAobjIuZXEobjEpXHJcbiAgICAgICAgICAgID8gPD48c3BhbiBjbGFzc05hbWU9e3N0eWxlLm5ldXRyYWx9PnNhbWU8L3NwYW4+IGFzPC8+XHJcbiAgICAgICAgICAgIDogPD48c3BhbiBjbGFzc05hbWU9e3N0eWxlLmJhZH0+d29yc2U8L3NwYW4+IHRoYW48Lz4pKX08Lz5cclxuIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHVwZGF0ZSBmcm9tICdpbW11dGFiaWxpdHktaGVscGVyJztcclxuaW1wb3J0IHsgdXNlUnhTdWJzY3JpYmUgfSBmcm9tIFwiLi9yZWFjdC11dGlscy91c2VSeFN1YnNjcmliZVwiO1xyXG5pbXBvcnQgeyB1c2VQcm9taXNlIH0gZnJvbSBcIi4vcmVhY3QtdXRpbHMvdXNlUHJvbWlzZVwiO1xyXG5pbXBvcnQgeyBCaWdOdW1iZXIsIEJ5dGVzTGlrZSwgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgeyBCYWNrZ3JvdW5kU29sdmVyIH0gZnJvbSBcIi4vQmFja2dyb3VuZFNvbHZlclwiO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vVGFza1wiO1xyXG5pbXBvcnQgeyBibG9jayQsIHByb3ZpZGVyLCBjcmVhdGVIYXNoQ29tcGV0aXRpb25Db250cmFjdCB9IGZyb20gXCIuL3Byb3ZpZGVyXCI7XHJcbmltcG9ydCB7IFNvbHZlciB9IGZyb20gXCIuL1NvbHZlclwiO1xyXG5pbXBvcnQgeyBXYWl0aW5nIH0gZnJvbSBcIi4vcmVhY3QtdXRpbHMvV2FpdGluZ1wiO1xyXG5pbXBvcnQgeyBTb2x1dGlvbiB9IGZyb20gXCIuL1NvbHV0aW9uXCI7XHJcbmNvbnN0IHsgaGV4bGlmeSB9ID0gZXRoZXJzLnV0aWxzO1xyXG5cclxuY29uc3QgYmFja2dyb3VuZFNvbHZlciA9IG5ldyBCYWNrZ3JvdW5kU29sdmVyKCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGVyQ29udHJhY3QoeyBjb250cmFjdEFkZHJlc3MgfTogeyBjb250cmFjdEFkZHJlc3M6IHN0cmluZzsgfSkge1xyXG4gICAgY29uc3QgaGFzaENvbXBldGl0aW9uID0gdXNlTWVtbyhcclxuICAgICAgICAoKSA9PiBjcmVhdGVIYXNoQ29tcGV0aXRpb25Db250cmFjdChjb250cmFjdEFkZHJlc3MsIHByb3ZpZGVyLmdldFNpZ25lcigpKSxcclxuICAgICAgICBbY29udHJhY3RBZGRyZXNzXSk7XHJcblxyXG4gICAgY29uc3QgW3NlbGVjdGVkVGFzaywgc2V0U2VsZWN0ZWRUYXNrXSA9IHVzZVN0YXRlPEJ5dGVzTGlrZT4oKTtcclxuICAgIGNvbnN0IG5ld2VzdEJsb2NrTnVtYmVyID0gdXNlUnhTdWJzY3JpYmUoKCkgPT4gYmxvY2skLCBbXSk7XHJcbiAgICBjb25zdCBbY2xhaW1zLCBzZXRDbGFpbXNdID0gdXNlU3RhdGU8UmVjb3JkPHN0cmluZywge1xyXG4gICAgICAgIHRhc2s6IEJ5dGVzTGlrZTtcclxuICAgICAgICBzb2x1dGlvbjogQnl0ZXNMaWtlO1xyXG4gICAgICAgIHNjb3JlOiBCaWdOdW1iZXI7XHJcbiAgICB9Pj4oe30pO1xyXG4gICAgY29uc3QgQkxPQ0tTX1RPX0NSRUFURV9UQVNLID0gdXNlUHJvbWlzZSgoKSA9PiBoYXNoQ29tcGV0aXRpb24uQkxPQ0tTX1RPX0NSRUFURV9UQVNLKCksIFtdKTtcclxuXHJcbiAgICBpZiAoXy5pc1VuZGVmaW5lZChCTE9DS1NfVE9fQ1JFQVRFX1RBU0spIHx8IF8uaXNVbmRlZmluZWQobmV3ZXN0QmxvY2tOdW1iZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+TG9kYWluZzxXYWl0aW5nIC8+PC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNvbHZlID0gKHRhc2tIYXNoOiBCeXRlc0xpa2UpID0+IHtcclxuICAgICAgICBiYWNrZ3JvdW5kU29sdmVyLnNldFRhc2soY29udHJhY3RBZGRyZXNzLCB0YXNrSGFzaCk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRUYXNrKHRhc2tIYXNoKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBjbGFpbSA9ICh0YXNrOiBCeXRlc0xpa2UsIHNvbHV0aW9uOiBCeXRlc0xpa2UsIHNjb3JlOiBCaWdOdW1iZXIpID0+IHNldENsYWltcyhjbGFpbXMgPT4gdXBkYXRlKGNsYWltcywge1xyXG4gICAgICAgIFtoZXhsaWZ5KHRhc2spICsgaGV4bGlmeShzb2x1dGlvbildOiB7ICRzZXQ6IHsgdGFzaywgc29sdXRpb24sIHNjb3JlIH0gfVxyXG4gICAgfSkpO1xyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgIDxoMT5IYXNoQ29tcGV0aXRpb24gZnJvbnRlbmQ8L2gxPlxyXG5cclxuICAgICAgICB7Xy52YWx1ZXMoY2xhaW1zKS5sZW5ndGggPiAwICYmIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj5Zb3VyIHNvbHV0aW9uczwvaDI+XHJcbiAgICAgICAgICAgIHtfLmVudHJpZXMoY2xhaW1zKS5tYXAoKFtrZXksIGNsYWltXSkgPT4gPFNvbHV0aW9uXHJcbiAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgIGhhc2hDb21wZXRpdGlvbj17aGFzaENvbXBldGl0aW9ufVxyXG4gICAgICAgICAgICAgICAgey4uLmNsYWltfVxyXG4gICAgICAgICAgICAgICAgb25SZW1vdmU9eygpID0+IHNldENsYWltcyhjbGFpbXMgPT4gdXBkYXRlKGNsYWltcywge1xyXG4gICAgICAgICAgICAgICAgICAgICR1bnNldDogW2tleV1cclxuICAgICAgICAgICAgICAgIH0pKX1cclxuICAgICAgICAgICAgLz4pfVxyXG4gICAgICAgIDwvZGl2Pn1cclxuXHJcbiAgICAgICAgPFNvbHZlclxyXG4gICAgICAgICAgICBoYXNoQ29tcGV0aXRpb249e2hhc2hDb21wZXRpdGlvbn1cclxuICAgICAgICAgICAgY29udHJhY3RBZGRyZXNzPXtjb250cmFjdEFkZHJlc3N9XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRTb2x2ZXI9e2JhY2tncm91bmRTb2x2ZXJ9XHJcbiAgICAgICAgICAgIG9uQ2xhaW09e2NsYWltfSAvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj5PbmdvaW5nIHRhc2tzIChiYXNlZCBvbiBsYXN0IGJsb2Nrcyk8L2gyPlxyXG4gICAgICAgICAgICBTZWxlY3QgYSB0YXNrIHRvIHNvbHZlOlxyXG4gICAgICAgICAgICB7Xy5yYW5nZShcclxuICAgICAgICAgICAgICAgIG5ld2VzdEJsb2NrTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgoMCwgbmV3ZXN0QmxvY2tOdW1iZXIgLSBCTE9DS1NfVE9fQ1JFQVRFX1RBU0sudG9OdW1iZXIoKSksXHJcbiAgICAgICAgICAgICAgICAtMVxyXG4gICAgICAgICAgICApLm1hcChibG9ja051bWJlciA9PiA8VGFza1xyXG4gICAgICAgICAgICAgICAga2V5PXtibG9ja051bWJlcn1cclxuICAgICAgICAgICAgICAgIGhhc2hDb21wZXRpdGlvbj17aGFzaENvbXBldGl0aW9ufVxyXG4gICAgICAgICAgICAgICAgYmxvY2tOdW1iZXI9e2Jsb2NrTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRIYXNoPXtzZWxlY3RlZFRhc2t9XHJcbiAgICAgICAgICAgICAgICBvblNvbHZlPXtzb2x2ZX0gLz4pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG59XHJcbiIsImltcG9ydCB7IFBlckNvbnRyYWN0IH0gZnJvbSBcIi4vUGVyQ29udHJhY3RcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gc2VhcmNoUGFyYW1zLmdldChcImNvbnRyYWN0XCIpO1xyXG4gICAgaWYgKCFjb250cmFjdEFkZHJlc3MpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGgxPk5vIGNvbnRyYWN0IGFkZHJlc3Mgc3BlY2lmaWVkITwvaDE+XHJcbiAgICAgICAgICAgIDxkaXY+U3BlY2lmeSBjb250cmFjdCBhZGRyZXNzIGluIHVybCBsaWtlIC8/Y29udHJhY3Q9MHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxQZXJDb250cmFjdCBjb250cmFjdEFkZHJlc3M9e2NvbnRyYWN0QWRkcmVzc30gLz5cclxufVxyXG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWludGVybmFsLW1vZHVsZXNcclxuaW1wb3J0IFwicHJlYWN0L2RlYnVnXCI7XHJcblxyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuL0FwcFwiO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY3NzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IF9jc3MgPSBjc3NgXHJcbiAgICAmIHtcclxuICAgICAgICB3aWR0aDogNzUwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgJiAqIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJDb3VyaWVyXCI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMWVtO1xyXG4gICAgfVxyXG4gICAgJiBoMTo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIiMgXCI7XHJcbiAgICB9XHJcbiAgICAmIGgyOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiIyMgXCI7XHJcbiAgICB9XHJcbiAgICAmIGgzOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiIyMjIFwiO1xyXG4gICAgfVxyXG4gICAgJiBoMSwgaDIsIGgzIHtcclxuICAgICAgICBtYXJnaW46IDFlbSAwZW0gMGVtIDBlbTtcclxuICAgICAgICBwYWRkaW5nOiAwZW07XHJcbiAgICB9XHJcbiAgICAmIGgzIHtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG4gICAgJiBidXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAmIGJ1dHRvbjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIltcXFxcMDBhMFxcXFwwMGEwXCI7XHJcbiAgICB9XHJcbiAgICAmIGJ1dHRvbjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXFxcXDAwYTBcXFxcMDBhMF1cIjtcclxuICAgIH1cclxuICAgICYgYnV0dG9uLnNob3J0OjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiW1wiO1xyXG4gICAgfVxyXG4gICAgJiBidXR0b24uc2hvcnQ6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIl1cIjtcclxuICAgIH1cclxuXHJcbiAgICAmIC50b2RvIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuXHJcbnJlbmRlcig8ZGl2IGNsYXNzTmFtZT17X2Nzc30+PEFwcCAvPjwvZGl2PiwgZG9jdW1lbnQuYm9keSk7Il0sIm5hbWVzIjpbIm8iLCJyIiwibiIsImUiLCJ0IiwicyIsImtlY2NhazI1NiIsImhleGxpZnkiLCJfanN4IiwiX2NzcyIsIl9qc3hzIiwic3R5bGUudGVybSIsInN0eWxlLmJhZCIsInN0eWxlLmdvb2QiLCJzdHlsZS5uZXV0cmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRFLElBQUlBLEdBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsR0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBT0MsT0FBQyxDQUFDLEtBQUssRUFBRUEsT0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQ0FsVCxXQUFXLEVBQUUsT0FBTyxNQUFNLEVBQUUsTUFBTSxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDQyxPQUFDLENBQUMsQ0FBQyxRQUFRLENBQUNGLFFBQUMsQ0FBQyxTQUFTLENBQUNHLFNBQUMsQ0FBQyxDQUFDOztBQ0FySixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQW1CLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksR0FBR0MsUUFBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDQyxHQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUVELFFBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnTEFBZ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUNELFNBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDQSxTQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0pBQStKLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLDZOQUE2TixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0EsU0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUNBLFNBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHlIQUF5SCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxnT0FBZ08sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUNELE9BQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDQSxPQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQ0EsT0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUNBLE9BQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDQSxPQUFDLENBQUMsR0FBRyxDQUFDQSxPQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFRyxHQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQ0gsT0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQ0EsT0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDSCxPQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQ0csR0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQ0EsR0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDSCxPQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFRyxHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDSCxPQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ0EsT0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUNBLE9BQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDQSxPQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ0EsT0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUNBLE9BQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUNBLE9BQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsT0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMscUlBQXFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLHVFQUF1RSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDQSxPQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsOElBQThJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLENBQUMsdUVBQXVFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHVGQUF1RixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsMENBQTBDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUMsRUFBRSxPQUFPLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxzRkFBc0YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQywwREFBMEQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUZBQW1GLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLGtHQUFrRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsNENBQTRDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLHdGQUF3RixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsNkRBQTZELEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsOENBQThDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUNBLE9BQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUNBLE9BQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDQSxPQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMs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
