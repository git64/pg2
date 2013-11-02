module dd.core {
    export class Signal {
        private _enabled: boolean = true;
        private _slots: Slot[] = [];
        private _dispatched: boolean = false;

        constructor() {
        }

        public get dispatched(): boolean {
            return this._dispatched;
        }

        public get enabled(): boolean {
            return this._enabled;
        }

        public set enabled(value: boolean) {
            this._enabled = value;
        }

        public get length(): number {
            return this._slots.length;
        }

        public dispatch(...args: any[]): void {
            if (!this.enabled) {
                return;
            }

            this._dispatched = true;

            var l: number = this._slots.length;
            var slot: Slot;
            for (var i: number = 0; i < l; ++i) {
                slot = this._slots[i];
                if (!slot.enabled)
                    continue;
                var res: Boolean = slot.execute(this, args);
                if (slot.once) {
                    slot.dispose();
                    this._slots.splice(i, 1);
                    --i;
                    --l;
                }
            }
        }

        public once(listener: Function, context: any = null): Slot {
            var sl = this.add(listener, context);
            sl.once = true;
            return sl;
        }

        public add(listener: Function, context: any = null): Slot {
            var sl = this.retrieveSlot(listener);
            if (sl) {
                var idx: number = this._slots.indexOf(sl);
                this._slots.splice(idx, 1);
                this._slots.push(sl);
                return sl;
            }

            sl = new Slot(this, listener, context);
            this._slots.push(sl);
            return sl;
        }

        public remove(listener: Function): Slot {
            return this.removeSlot(this.retrieveSlot(listener));
        }

        private removeSlot(sl: Slot): Slot {
            if (!sl)
                return null;
            var idx: number = this._slots.indexOf(sl);
            this._slots.splice(idx, 1);
            sl.dispose();
            return sl;
        }

        public clear(): void {
            var l: number = this._slots.length;
            for (var i: number = 0; i < l; ++i) {
                this._slots[i].dispose();
            }
            this._slots.splice(0, this._slots.length);
            //this._dispatched = false;
        }

        private retrieveSlot(listener: Function): Slot {
            var l: number = this._slots.length;
            for (var i: number = 0; i < l; ++i) {
                if (this._slots[i].listener == listener)
                    return this._slots[i];
            }
            return null;
        }

        public dispose(): void {
            this.clear();
        }
    }

    export class Slot {
        public once: boolean = false;

        private _enabled: boolean = true;
        private _listener: Function;
        private _signal: Signal;
        private _context: any;

        constructor(signal: Signal, listener: Function, context: any) {
            this._signal = signal;
            this._listener = listener;
            this._context = context;
        }

        public get enabled(): boolean {
            return this._enabled;
        }

        public set enabled(value: boolean) {
            this._enabled = value;
        }

        public get listener(): Function {
            return this._listener;
        }

        public execute(target: Signal, args: any[]): boolean {
            var val: Object = this._listener.apply(this._context, args);
            if (val instanceof Boolean)
                return Boolean(val);
            return true;
        }

        public remove(): void {
            this._signal.remove(this._listener);
        }

        public dispose(): void {
            this._listener = null;
            this._signal = null;
        }
    }
}