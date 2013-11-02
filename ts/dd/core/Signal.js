var dd;
(function (dd) {
    (function (core) {
        var Signal = (function () {
            function Signal() {
                this._enabled = true;
                this._slots = [];
                this._dispatched = false;
            }
            Object.defineProperty(Signal.prototype, "dispatched", {
                get: function () {
                    return this._dispatched;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Signal.prototype, "enabled", {
                get: function () {
                    return this._enabled;
                },
                set: function (value) {
                    this._enabled = value;
                },
                enumerable: true,
                configurable: true
            });


            Object.defineProperty(Signal.prototype, "length", {
                get: function () {
                    return this._slots.length;
                },
                enumerable: true,
                configurable: true
            });

            Signal.prototype.dispatch = function () {
                var args = [];
                for (var _i = 0; _i < (arguments.length - 0); _i++) {
                    args[_i] = arguments[_i + 0];
                }
                if (!this.enabled) {
                    return;
                }

                this._dispatched = true;

                var l = this._slots.length;
                var slot;
                for (var i = 0; i < l; ++i) {
                    slot = this._slots[i];
                    if (!slot.enabled)
                        continue;
                    var res = slot.execute(this, args);
                    if (slot.once) {
                        slot.dispose();
                        this._slots.splice(i, 1);
                        --i;
                        --l;
                    }
                }
            };

            Signal.prototype.once = function (listener, context) {
                if (typeof context === "undefined") { context = null; }
                var sl = this.add(listener, context);
                sl.once = true;
                return sl;
            };

            Signal.prototype.add = function (listener, context) {
                if (typeof context === "undefined") { context = null; }
                //            if (context) {
                //                var an: any = arguments.callee.caller.prototype;
                //                console.log(an);
                //                console.log(context);
                //                console.log(an == context);
                //                console.log(an.constructor);
                //                console.log(context.constructor);
                //                console.log(an.constructor == context.constructor);
                //            }
                var sl = this.retrieveSlot(listener);
                if (sl) {
                    var idx = this._slots.indexOf(sl);
                    this._slots.splice(idx, 1);
                    this._slots.push(sl);
                    return sl;
                }

                sl = new Slot(this, listener, context);
                this._slots.push(sl);
                return sl;
            };

            Signal.prototype.remove = function (listener) {
                return this.removeSlot(this.retrieveSlot(listener));
            };

            Signal.prototype.removeSlot = function (sl) {
                if (!sl)
                    return null;
                var idx = this._slots.indexOf(sl);
                this._slots.splice(idx, 1);
                sl.dispose();
                return sl;
            };

            Signal.prototype.clear = function () {
                var l = this._slots.length;
                for (var i = 0; i < l; ++i) {
                    this._slots[i].dispose();
                }
                this._slots.splice(0, this._slots.length);
                //this._dispatched = false;
            };

            Signal.prototype.retrieveSlot = function (listener) {
                var l = this._slots.length;
                for (var i = 0; i < l; ++i) {
                    if (this._slots[i].listener == listener)
                        return this._slots[i];
                }
                return null;
            };

            Signal.prototype.dispose = function () {
                this.clear();
            };
            return Signal;
        })();
        core.Signal = Signal;

        var Slot = (function () {
            function Slot(signal, listener, context) {
                this.once = false;
                this._enabled = true;
                this._signal = signal;
                this._listener = listener;
                this._context = context;
            }
            Object.defineProperty(Slot.prototype, "enabled", {
                get: function () {
                    return this._enabled;
                },
                set: function (value) {
                    this._enabled = value;
                },
                enumerable: true,
                configurable: true
            });


            Object.defineProperty(Slot.prototype, "listener", {
                get: function () {
                    return this._listener;
                },
                enumerable: true,
                configurable: true
            });

            Slot.prototype.execute = function (target, args) {
                var val = this._listener.apply(this._context, args);
                if (val instanceof Boolean)
                    return Boolean(val);
                return true;
            };

            Slot.prototype.remove = function () {
                this._signal.remove(this._listener);
            };

            Slot.prototype.dispose = function () {
                this._listener = null;
                this._signal = null;
            };
            return Slot;
        })();
        core.Slot = Slot;
    })(dd.core || (dd.core = {}));
    var core = dd.core;
})(dd || (dd = {}));
