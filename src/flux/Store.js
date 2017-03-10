export class Store {

    constructor(dispatcher) {
        this._listeners = [];
        this.__state = this.getInitialState();
        dispatcher.register(this.__onDispatch.bind(this));
    }

    __onDispatch() {
        throw new Error("Subclass must override __onDispatch method of Flux Store");
    }

    getInitialState() {
        throw new Error("Subclass must override getInitialState method of Flux Store");
    }

    addListener(listener) {
        this._listeners.push(listener);
    }

    __emitChange() {
        this._listeners.forEach(listener => {
            listener(this.__state);
        })
    }
}