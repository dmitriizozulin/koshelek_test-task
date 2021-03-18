export class Store {
  constructor() {
    this._store = {};
    this._diff = {};
    this._subs = [];
  }

  insert(val) {
    this._store = { ...val };

    for (let sub in this._subs) {
      this._subs[sub](this._store);
    }
  }

  update(val) {
    this.insert(val);

    const key = Object.keys(val)[0];
    const data = {
      date: new Date(),
      ...val,
    }
    if (this._diff[key]) {
      this._diff[key].push(data);
    } else {
      this._diff[key] = [data];
    }
  }

  delete(key) {
    this._store[key] = undefined;
  }

  getDiff() {
    return this._diff;
  }

  subscribe(callback) {
    this._subs.push(callback);
  }
}

export class BinanceApi {
  constructor(store) {
    this.symbols = ['BTCUSDT', 'BNBBTC', 'ETHBTC'];
    this.current_symbol = 0;
    this.limit = 500;
    this.restHref = `https://api.binance.com/api/v3/depth?symbol=${this.symbols[this.current_symbol]}&limit=${this.limit}`;
    this.wsHref = `wss://stream.binance.com:9443/ws/${this.symbols[this.current_symbol].toLowerCase()}@depth`

    this.store = store;
    this.data = null;
    this.socket = null;
  }

  changeCurrentSymbol(id) {
    this.current_symbol = id;
    this.restHref = `https://api.binance.com/api/v3/depth?symbol=${this.symbols[this.current_symbol]}&limit=${this.limit}`;
    this.wsHref = `wss://stream.binance.com:9443/ws/${this.symbols[this.current_symbol].toLowerCase()}@depth`;
    if (this.socket) {
      this.close();
      this.getData();
    }
  }

  updateStore(data) {
    this.store.update({
      [data['s']]: {
        bids: data['b'],
        asks: data['a'],
      }
    })
  }

  onWsMessage({ data: json }) {
    const data = JSON.parse(json);
    this.updateStore(data);
  }

  connectToWs() {
    this.socket = new WebSocket(this.wsHref);

    this.socket.onmessage = this.onWsMessage.bind(this);
    this.socket.onerror = this.close.bind(this);
  }

  close() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }

  async getData() {
    await fetch(this.restHref)
      .then(async d => {
        this.data = await d.json();

        const data = {
          's': this.symbols[this.current_symbol],
          'b': this.data.bids,
          'a': this.data.asks,
        };
        this.updateStore(data);
      })
      .then(() => this.connectToWs())
      .catch(e => console.error(e));

    return this.data;
  }
}

export default class Core {
  constructor() {
    this.store = new Store;
    this.api = new BinanceApi(this.store);
  }
}
