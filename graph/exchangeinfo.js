var exchangeInfo = {
    "timezone": "UTC",
    "serverTime": 1565947895696,
    "rateLimits": [
    {
    "rateLimitType": "REQUEST_WEIGHT",
    "interval": "MINUTE",
    "intervalNum": 1,
    "limit": 1200
    },
    {
    "rateLimitType": "ORDERS",
    "interval": "SECOND",
    "intervalNum": 1,
    "limit": 10
    },
    {
    "rateLimitType": "ORDERS",
    "interval": "DAY",
    "intervalNum": 1,
    "limit": 100000
    }
    ],
    "exchangeFilters": [],
    "symbols": [
    {
    "symbol": "ETHBTC",
    "status": "TRADING",
    "baseAsset": "ETH",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": true,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "100000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "100000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "63100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LTCBTC",
    "status": "TRADING",
    "baseAsset": "LTC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": true,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "100000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "100000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "72500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BNBBTC",
    "status": "TRADING",
    "baseAsset": "BNB",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": true,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "100000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "100000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1769700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NEOBTC",
    "status": "TRADING",
    "baseAsset": "NEO",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "100000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "100000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "365600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "123456",
    "status": "TRADING",
    "baseAsset": "123",
    "baseAssetPrecision": 8,
    "quoteAsset": "456",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "100000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "100000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "QTUMETH",
    "status": "TRADING",
    "baseAsset": "QTUM",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "146600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "EOSETH",
    "status": "TRADING",
    "baseAsset": "EOS",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "286200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "SNTETH",
    "status": "TRADING",
    "baseAsset": "SNT",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "7648700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BNTETH",
    "status": "TRADING",
    "baseAsset": "BNT",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "356100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCCBTC",
    "status": "BREAK",
    "baseAsset": "BCC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "100000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "100000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "GASBTC",
    "status": "TRADING",
    "baseAsset": "GAS",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "100000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "100000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "111700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BNBETH",
    "status": "TRADING",
    "baseAsset": "BNB",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "68100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BTCUSDT",
    "status": "TRADING",
    "baseAsset": "BTC",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": true,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "1000000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00000100",
    "maxQty": "9000.00000000",
    "stepSize": "0.00000100"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "3200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ETHUSDT",
    "status": "TRADING",
    "baseAsset": "ETH",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": true,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "1000000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "9000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "52400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "HSRBTC",
    "status": "BREAK",
    "baseAsset": "HSR",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "100000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "OAXETH",
    "status": "TRADING",
    "baseAsset": "OAX",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000000",
    "maxPrice": "0.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "822600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DNTETH",
    "status": "TRADING",
    "baseAsset": "DNT",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "7750800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "MCOETH",
    "status": "TRADING",
    "baseAsset": "MCO",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "29700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ICNETH",
    "status": "BREAK",
    "baseAsset": "ICN",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000000",
    "maxPrice": "0.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "1.3",
    "multiplierDown": "0.7",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "MCOBTC",
    "status": "TRADING",
    "baseAsset": "MCO",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "100000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "226300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WTCBTC",
    "status": "TRADING",
    "baseAsset": "WTC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1489800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WTCETH",
    "status": "TRADING",
    "baseAsset": "WTC",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "120000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LRCBTC",
    "status": "TRADING",
    "baseAsset": "LRC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "8481800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LRCETH",
    "status": "TRADING",
    "baseAsset": "LRC",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "3072100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "QTUMBTC",
    "status": "TRADING",
    "baseAsset": "QTUM",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "100000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "554400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "YOYOBTC",
    "status": "TRADING",
    "baseAsset": "YOYO",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "41680800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "OMGBTC",
    "status": "TRADING",
    "baseAsset": "OMG",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "100000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "371100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "OMGETH",
    "status": "TRADING",
    "baseAsset": "OMG",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "372000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ZRXBTC",
    "status": "TRADING",
    "baseAsset": "ZRX",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "4510800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ZRXETH",
    "status": "TRADING",
    "baseAsset": "ZRX",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1617600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "STRATBTC",
    "status": "TRADING",
    "baseAsset": "STRAT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1022300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "STRATETH",
    "status": "TRADING",
    "baseAsset": "STRAT",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "247900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "SNGLSBTC",
    "status": "TRADING",
    "baseAsset": "SNGLS",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "23413000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "SNGLSETH",
    "status": "TRADING",
    "baseAsset": "SNGLS",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "6821000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BQXBTC",
    "status": "TRADING",
    "baseAsset": "BQX",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "12797800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BQXETH",
    "status": "TRADING",
    "baseAsset": "BQX",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000000",
    "maxPrice": "0.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1303500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "KNCBTC",
    "status": "TRADING",
    "baseAsset": "KNC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "5147500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "KNCETH",
    "status": "TRADING",
    "baseAsset": "KNC",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000000",
    "maxPrice": "0.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "3642600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "FUNBTC",
    "status": "TRADING",
    "baseAsset": "FUN",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "51853200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "FUNETH",
    "status": "TRADING",
    "baseAsset": "FUN",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "62536900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "SNMBTC",
    "status": "TRADING",
    "baseAsset": "SNM",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "8975000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "SNMETH",
    "status": "TRADING",
    "baseAsset": "SNM",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "4705100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NEOETH",
    "status": "TRADING",
    "baseAsset": "NEO",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "130000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "IOTABTC",
    "status": "TRADING",
    "baseAsset": "IOTA",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "12315300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "IOTAETH",
    "status": "TRADING",
    "baseAsset": "IOTA",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2518700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LINKBTC",
    "status": "TRADING",
    "baseAsset": "LINK",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": true,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2976000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LINKETH",
    "status": "TRADING",
    "baseAsset": "LINK",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "385500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XVGBTC",
    "status": "TRADING",
    "baseAsset": "XVG",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "76202500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XVGETH",
    "status": "TRADING",
    "baseAsset": "XVG",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "47534300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "SALTBTC",
    "status": "BREAK",
    "baseAsset": "SALT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "SALTETH",
    "status": "BREAK",
    "baseAsset": "SALT",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "MDABTC",
    "status": "TRADING",
    "baseAsset": "MDA",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1092600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "MDAETH",
    "status": "TRADING",
    "baseAsset": "MDA",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000000",
    "maxPrice": "0.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "178800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "MTLBTC",
    "status": "TRADING",
    "baseAsset": "MTL",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "840000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "MTLETH",
    "status": "TRADING",
    "baseAsset": "MTL",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "214800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "SUBBTC",
    "status": "BREAK",
    "baseAsset": "SUB",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "SUBETH",
    "status": "BREAK",
    "baseAsset": "SUB",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "EOSBTC",
    "status": "TRADING",
    "baseAsset": "EOS",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": true,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1684200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "SNTBTC",
    "status": "TRADING",
    "baseAsset": "SNT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "12415800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ETCETH",
    "status": "TRADING",
    "baseAsset": "ETC",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "37600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ETCBTC",
    "status": "TRADING",
    "baseAsset": "ETC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": true,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "100000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "343000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "MTHBTC",
    "status": "TRADING",
    "baseAsset": "MTH",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "26826400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "MTHETH",
    "status": "TRADING",
    "baseAsset": "MTH",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "10684900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ENGBTC",
    "status": "TRADING",
    "baseAsset": "ENG",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2283700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ENGETH",
    "status": "TRADING",
    "baseAsset": "ENG",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000000",
    "maxPrice": "0.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "844200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DNTBTC",
    "status": "TRADING",
    "baseAsset": "DNT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "26246600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ZECBTC",
    "status": "TRADING",
    "baseAsset": "ZEC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "27800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ZECETH",
    "status": "TRADING",
    "baseAsset": "ZEC",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "6700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BNTBTC",
    "status": "TRADING",
    "baseAsset": "BNT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "911500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ASTBTC",
    "status": "TRADING",
    "baseAsset": "AST",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "16333300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ASTETH",
    "status": "TRADING",
    "baseAsset": "AST",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000000",
    "maxPrice": "0.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "3134700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DASHBTC",
    "status": "TRADING",
    "baseAsset": "DASH",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "12600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DASHETH",
    "status": "TRADING",
    "baseAsset": "DASH",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "OAXBTC",
    "status": "TRADING",
    "baseAsset": "OAX",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "3892200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ICNBTC",
    "status": "BREAK",
    "baseAsset": "ICN",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BTGBTC",
    "status": "TRADING",
    "baseAsset": "BTG",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "100000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "83200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BTGETH",
    "status": "TRADING",
    "baseAsset": "BTG",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "8000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "EVXBTC",
    "status": "TRADING",
    "baseAsset": "EVX",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2424900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "EVXETH",
    "status": "TRADING",
    "baseAsset": "EVX",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000000",
    "maxPrice": "0.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "196100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "REQBTC",
    "status": "TRADING",
    "baseAsset": "REQ",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "17712100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "REQETH",
    "status": "TRADING",
    "baseAsset": "REQ",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "18357800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "VIBBTC",
    "status": "TRADING",
    "baseAsset": "VIB",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "9370400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "VIBETH",
    "status": "TRADING",
    "baseAsset": "VIB",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2852000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "HSRETH",
    "status": "BREAK",
    "baseAsset": "HSR",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TRXBTC",
    "status": "TRADING",
    "baseAsset": "TRX",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": true,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "177000000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TRXETH",
    "status": "TRADING",
    "baseAsset": "TRX",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "60203600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "POWRBTC",
    "status": "TRADING",
    "baseAsset": "POWR",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "4829000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "POWRETH",
    "status": "TRADING",
    "baseAsset": "POWR",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1218300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ARKBTC",
    "status": "TRADING",
    "baseAsset": "ARK",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1608500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ARKETH",
    "status": "TRADING",
    "baseAsset": "ARK",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "171500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "YOYOETH",
    "status": "TRADING",
    "baseAsset": "YOYO",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "7287900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XRPBTC",
    "status": "TRADING",
    "baseAsset": "XRP",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": true,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "42853300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XRPETH",
    "status": "TRADING",
    "baseAsset": "XRP",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "4202500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "MODBTC",
    "status": "BREAK",
    "baseAsset": "MOD",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "MODETH",
    "status": "BREAK",
    "baseAsset": "MOD",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ENJBTC",
    "status": "TRADING",
    "baseAsset": "ENJ",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "19300900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ENJETH",
    "status": "TRADING",
    "baseAsset": "ENJ",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "3616900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "STORJBTC",
    "status": "TRADING",
    "baseAsset": "STORJ",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "3562900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "STORJETH",
    "status": "TRADING",
    "baseAsset": "STORJ",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000000",
    "maxPrice": "0.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "294100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BNBUSDT",
    "status": "TRADING",
    "baseAsset": "BNB",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": true,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "393000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "VENBNB",
    "status": "BREAK",
    "baseAsset": "VEN",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "YOYOBNB",
    "status": "TRADING",
    "baseAsset": "YOYO",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "915300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "POWRBNB",
    "status": "TRADING",
    "baseAsset": "POWR",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "420100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "VENBTC",
    "status": "BREAK",
    "baseAsset": "VEN",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "VENETH",
    "status": "BREAK",
    "baseAsset": "VEN",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "KMDBTC",
    "status": "TRADING",
    "baseAsset": "KMD",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1014400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "KMDETH",
    "status": "TRADING",
    "baseAsset": "KMD",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "70200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NULSBNB",
    "status": "TRADING",
    "baseAsset": "NULS",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "94800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "RCNBTC",
    "status": "TRADING",
    "baseAsset": "RCN",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "14574700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "RCNETH",
    "status": "TRADING",
    "baseAsset": "RCN",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "3707200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "RCNBNB",
    "status": "TRADING",
    "baseAsset": "RCN",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1674200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NULSBTC",
    "status": "TRADING",
    "baseAsset": "NULS",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "962300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NULSETH",
    "status": "TRADING",
    "baseAsset": "NULS",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "124200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "RDNBTC",
    "status": "TRADING",
    "baseAsset": "RDN",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2625600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "RDNETH",
    "status": "TRADING",
    "baseAsset": "RDN",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000000",
    "maxPrice": "0.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1288500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "RDNBNB",
    "status": "TRADING",
    "baseAsset": "RDN",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "87100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XMRBTC",
    "status": "TRADING",
    "baseAsset": "XMR",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "41700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XMRETH",
    "status": "TRADING",
    "baseAsset": "XMR",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "4700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DLTBNB",
    "status": "TRADING",
    "baseAsset": "DLT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "718800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WTCBNB",
    "status": "TRADING",
    "baseAsset": "WTC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "38400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DLTBTC",
    "status": "TRADING",
    "baseAsset": "DLT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "10422400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DLTETH",
    "status": "TRADING",
    "baseAsset": "DLT",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2510300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "AMBBTC",
    "status": "TRADING",
    "baseAsset": "AMB",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "16127800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "AMBETH",
    "status": "TRADING",
    "baseAsset": "AMB",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "4658100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "AMBBNB",
    "status": "TRADING",
    "baseAsset": "AMB",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "668000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCCETH",
    "status": "BREAK",
    "baseAsset": "BCC",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCCUSDT",
    "status": "BREAK",
    "baseAsset": "BCC",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "100000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCCBNB",
    "status": "BREAK",
    "baseAsset": "BCC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "100000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BATBTC",
    "status": "TRADING",
    "baseAsset": "BAT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "6664500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BATETH",
    "status": "TRADING",
    "baseAsset": "BAT",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1040500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BATBNB",
    "status": "TRADING",
    "baseAsset": "BAT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "754800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCPTBTC",
    "status": "TRADING",
    "baseAsset": "BCPT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "15465800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCPTETH",
    "status": "TRADING",
    "baseAsset": "BCPT",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2395500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCPTBNB",
    "status": "TRADING",
    "baseAsset": "BCPT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "914300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ARNBTC",
    "status": "TRADING",
    "baseAsset": "ARN",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2868900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ARNETH",
    "status": "TRADING",
    "baseAsset": "ARN",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "308200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "GVTBTC",
    "status": "TRADING",
    "baseAsset": "GVT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "381100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "GVTETH",
    "status": "TRADING",
    "baseAsset": "GVT",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "68500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "CDTBTC",
    "status": "TRADING",
    "baseAsset": "CDT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "38110800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "CDTETH",
    "status": "TRADING",
    "baseAsset": "CDT",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "12174400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "GXSBTC",
    "status": "TRADING",
    "baseAsset": "GXS",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "497300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "GXSETH",
    "status": "TRADING",
    "baseAsset": "GXS",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "109600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NEOUSDT",
    "status": "TRADING",
    "baseAsset": "NEO",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00100000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00100000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "236900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NEOBNB",
    "status": "TRADING",
    "baseAsset": "NEO",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "24600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "POEBTC",
    "status": "TRADING",
    "baseAsset": "POE",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "69079600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "POEETH",
    "status": "TRADING",
    "baseAsset": "POE",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "36484600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "QSPBTC",
    "status": "TRADING",
    "baseAsset": "QSP",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "9955800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "QSPETH",
    "status": "TRADING",
    "baseAsset": "QSP",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "5732800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "QSPBNB",
    "status": "TRADING",
    "baseAsset": "QSP",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1515800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BTSBTC",
    "status": "TRADING",
    "baseAsset": "BTS",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "13082700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BTSETH",
    "status": "TRADING",
    "baseAsset": "BTS",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1691500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BTSBNB",
    "status": "TRADING",
    "baseAsset": "BTS",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "803100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XZCBTC",
    "status": "TRADING",
    "baseAsset": "XZC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "100000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "62700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XZCETH",
    "status": "TRADING",
    "baseAsset": "XZC",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "10000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XZCBNB",
    "status": "TRADING",
    "baseAsset": "XZC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LSKBTC",
    "status": "TRADING",
    "baseAsset": "LSK",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "596600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LSKETH",
    "status": "TRADING",
    "baseAsset": "LSK",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "115400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LSKBNB",
    "status": "TRADING",
    "baseAsset": "LSK",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "20100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TNTBTC",
    "status": "TRADING",
    "baseAsset": "TNT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "15082300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TNTETH",
    "status": "TRADING",
    "baseAsset": "TNT",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "6646900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "FUELBTC",
    "status": "TRADING",
    "baseAsset": "FUEL",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "60427700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "FUELETH",
    "status": "TRADING",
    "baseAsset": "FUEL",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "24424800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "MANABTC",
    "status": "TRADING",
    "baseAsset": "MANA",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "19397300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "MANAETH",
    "status": "TRADING",
    "baseAsset": "MANA",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "6197900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCDBTC",
    "status": "TRADING",
    "baseAsset": "BCD",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "266700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCDETH",
    "status": "TRADING",
    "baseAsset": "BCD",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "118100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DGDBTC",
    "status": "TRADING",
    "baseAsset": "DGD",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "30900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DGDETH",
    "status": "TRADING",
    "baseAsset": "DGD",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "9000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "IOTABNB",
    "status": "TRADING",
    "baseAsset": "IOTA",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "417500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ADXBTC",
    "status": "TRADING",
    "baseAsset": "ADX",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "5864300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ADXETH",
    "status": "TRADING",
    "baseAsset": "ADX",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000000",
    "maxPrice": "0.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "524300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ADXBNB",
    "status": "TRADING",
    "baseAsset": "ADX",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "218000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ADABTC",
    "status": "TRADING",
    "baseAsset": "ADA",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": true,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "62929600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ADAETH",
    "status": "TRADING",
    "baseAsset": "ADA",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "13623000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "PPTBTC",
    "status": "TRADING",
    "baseAsset": "PPT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "503700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "PPTETH",
    "status": "TRADING",
    "baseAsset": "PPT",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "110400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "CMTBTC",
    "status": "TRADING",
    "baseAsset": "CMT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "25294300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "CMTETH",
    "status": "TRADING",
    "baseAsset": "CMT",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "7780500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "CMTBNB",
    "status": "TRADING",
    "baseAsset": "CMT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "661400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XLMBTC",
    "status": "TRADING",
    "baseAsset": "XLM",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "15465700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XLMETH",
    "status": "TRADING",
    "baseAsset": "XLM",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "10947200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XLMBNB",
    "status": "TRADING",
    "baseAsset": "XLM",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1214300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "CNDBTC",
    "status": "TRADING",
    "baseAsset": "CND",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "27678400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "CNDETH",
    "status": "TRADING",
    "baseAsset": "CND",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "7973800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "CNDBNB",
    "status": "TRADING",
    "baseAsset": "CND",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2682800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LENDBTC",
    "status": "TRADING",
    "baseAsset": "LEND",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "66709800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LENDETH",
    "status": "TRADING",
    "baseAsset": "LEND",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "15463700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WABIBTC",
    "status": "TRADING",
    "baseAsset": "WABI",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "3858000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WABIETH",
    "status": "TRADING",
    "baseAsset": "WABI",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "647200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WABIBNB",
    "status": "TRADING",
    "baseAsset": "WABI",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "280800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LTCETH",
    "status": "TRADING",
    "baseAsset": "LTC",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "5200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LTCUSDT",
    "status": "TRADING",
    "baseAsset": "LTC",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": true,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "100000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "55700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LTCBNB",
    "status": "TRADING",
    "baseAsset": "LTC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00100000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00100000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "18600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TNBBTC",
    "status": "TRADING",
    "baseAsset": "TNB",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "61109700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TNBETH",
    "status": "TRADING",
    "baseAsset": "TNB",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "38128500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WAVESBTC",
    "status": "TRADING",
    "baseAsset": "WAVES",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "772500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WAVESETH",
    "status": "TRADING",
    "baseAsset": "WAVES",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "82200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WAVESBNB",
    "status": "TRADING",
    "baseAsset": "WAVES",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "22400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "GTOBTC",
    "status": "TRADING",
    "baseAsset": "GTO",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "9729600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "GTOETH",
    "status": "TRADING",
    "baseAsset": "GTO",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "7988100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "GTOBNB",
    "status": "TRADING",
    "baseAsset": "GTO",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2202000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ICXBTC",
    "status": "TRADING",
    "baseAsset": "ICX",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2926800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ICXETH",
    "status": "TRADING",
    "baseAsset": "ICX",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1520800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ICXBNB",
    "status": "TRADING",
    "baseAsset": "ICX",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "172100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "OSTBTC",
    "status": "TRADING",
    "baseAsset": "OST",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "16300200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "OSTETH",
    "status": "TRADING",
    "baseAsset": "OST",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "10247300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "OSTBNB",
    "status": "TRADING",
    "baseAsset": "OST",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "993700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ELFBTC",
    "status": "TRADING",
    "baseAsset": "ELF",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "4822300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ELFETH",
    "status": "TRADING",
    "baseAsset": "ELF",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2012400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "AIONBTC",
    "status": "TRADING",
    "baseAsset": "AION",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2889700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "AIONETH",
    "status": "TRADING",
    "baseAsset": "AION",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2146600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "AIONBNB",
    "status": "TRADING",
    "baseAsset": "AION",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "191400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NEBLBTC",
    "status": "TRADING",
    "baseAsset": "NEBL",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "377100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NEBLETH",
    "status": "TRADING",
    "baseAsset": "NEBL",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "71000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NEBLBNB",
    "status": "TRADING",
    "baseAsset": "NEBL",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "36800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BRDBTC",
    "status": "TRADING",
    "baseAsset": "BRD",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2201500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BRDETH",
    "status": "TRADING",
    "baseAsset": "BRD",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000000",
    "maxPrice": "0.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "237500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BRDBNB",
    "status": "TRADING",
    "baseAsset": "BRD",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "73200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "MCOBNB",
    "status": "TRADING",
    "baseAsset": "MCO",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "12300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "EDOBTC",
    "status": "TRADING",
    "baseAsset": "EDO",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1514800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "EDOETH",
    "status": "TRADING",
    "baseAsset": "EDO",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "178900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WINGSBTC",
    "status": "BREAK",
    "baseAsset": "WINGS",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WINGSETH",
    "status": "BREAK",
    "baseAsset": "WINGS",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000000",
    "maxPrice": "0.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "1.3",
    "multiplierDown": "0.7",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NAVBTC",
    "status": "TRADING",
    "baseAsset": "NAV",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2144400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NAVETH",
    "status": "TRADING",
    "baseAsset": "NAV",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "250300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NAVBNB",
    "status": "TRADING",
    "baseAsset": "NAV",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "43600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LUNBTC",
    "status": "TRADING",
    "baseAsset": "LUN",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "279800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LUNETH",
    "status": "TRADING",
    "baseAsset": "LUN",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "45500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TRIGBTC",
    "status": "BREAK",
    "baseAsset": "TRIG",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TRIGETH",
    "status": "BREAK",
    "baseAsset": "TRIG",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TRIGBNB",
    "status": "BREAK",
    "baseAsset": "TRIG",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "APPCBTC",
    "status": "TRADING",
    "baseAsset": "APPC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "6279600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "APPCETH",
    "status": "TRADING",
    "baseAsset": "APPC",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000000",
    "maxPrice": "0.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2519600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "APPCBNB",
    "status": "TRADING",
    "baseAsset": "APPC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "556300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "VIBEBTC",
    "status": "TRADING",
    "baseAsset": "VIBE",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "5029300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "VIBEETH",
    "status": "TRADING",
    "baseAsset": "VIBE",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000000",
    "maxPrice": "0.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2290000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "RLCBTC",
    "status": "TRADING",
    "baseAsset": "RLC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "785100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "RLCETH",
    "status": "TRADING",
    "baseAsset": "RLC",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "176700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "RLCBNB",
    "status": "TRADING",
    "baseAsset": "RLC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "33100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "INSBTC",
    "status": "TRADING",
    "baseAsset": "INS",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "3027300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "INSETH",
    "status": "TRADING",
    "baseAsset": "INS",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "397000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "PIVXBTC",
    "status": "TRADING",
    "baseAsset": "PIVX",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "889800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "PIVXETH",
    "status": "TRADING",
    "baseAsset": "PIVX",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "222100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "PIVXBNB",
    "status": "TRADING",
    "baseAsset": "PIVX",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "28100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "IOSTBTC",
    "status": "TRADING",
    "baseAsset": "IOST",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "49930700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "IOSTETH",
    "status": "TRADING",
    "baseAsset": "IOST",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "17963200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "CHATBTC",
    "status": "BREAK",
    "baseAsset": "CHAT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "CHATETH",
    "status": "BREAK",
    "baseAsset": "CHAT",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "STEEMBTC",
    "status": "TRADING",
    "baseAsset": "STEEM",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1199600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "STEEMETH",
    "status": "TRADING",
    "baseAsset": "STEEM",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "312100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "STEEMBNB",
    "status": "TRADING",
    "baseAsset": "STEEM",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "75600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NANOBTC",
    "status": "TRADING",
    "baseAsset": "NANO",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2262900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NANOETH",
    "status": "TRADING",
    "baseAsset": "NANO",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "294900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NANOBNB",
    "status": "TRADING",
    "baseAsset": "NANO",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "89000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "VIABTC",
    "status": "TRADING",
    "baseAsset": "VIA",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "623500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "VIAETH",
    "status": "TRADING",
    "baseAsset": "VIA",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "93600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "VIABNB",
    "status": "TRADING",
    "baseAsset": "VIA",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "81000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BLZBTC",
    "status": "TRADING",
    "baseAsset": "BLZ",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "12656600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BLZETH",
    "status": "TRADING",
    "baseAsset": "BLZ",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2188000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BLZBNB",
    "status": "TRADING",
    "baseAsset": "BLZ",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "468900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "AEBTC",
    "status": "TRADING",
    "baseAsset": "AE",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "597400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "AEETH",
    "status": "TRADING",
    "baseAsset": "AE",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "554600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "AEBNB",
    "status": "TRADING",
    "baseAsset": "AE",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "123100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "RPXBTC",
    "status": "BREAK",
    "baseAsset": "RPX",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "RPXETH",
    "status": "BREAK",
    "baseAsset": "RPX",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "RPXBNB",
    "status": "BREAK",
    "baseAsset": "RPX",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NCASHBTC",
    "status": "TRADING",
    "baseAsset": "NCASH",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "153000000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NCASHETH",
    "status": "TRADING",
    "baseAsset": "NCASH",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "67411900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NCASHBNB",
    "status": "TRADING",
    "baseAsset": "NCASH",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "21332000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "POABTC",
    "status": "TRADING",
    "baseAsset": "POA",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "8586800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "POAETH",
    "status": "TRADING",
    "baseAsset": "POA",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "4744600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "POABNB",
    "status": "TRADING",
    "baseAsset": "POA",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2311900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ZILBTC",
    "status": "TRADING",
    "baseAsset": "ZIL",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "44522800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ZILETH",
    "status": "TRADING",
    "baseAsset": "ZIL",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "19905900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ZILBNB",
    "status": "TRADING",
    "baseAsset": "ZIL",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "9231200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ONTBTC",
    "status": "TRADING",
    "baseAsset": "ONT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": true,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "672900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ONTETH",
    "status": "TRADING",
    "baseAsset": "ONT",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "248200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ONTBNB",
    "status": "TRADING",
    "baseAsset": "ONT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "126500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "STORMBTC",
    "status": "TRADING",
    "baseAsset": "STORM",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "82130100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "STORMETH",
    "status": "TRADING",
    "baseAsset": "STORM",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "24609300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "STORMBNB",
    "status": "TRADING",
    "baseAsset": "STORM",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "6673100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "QTUMBNB",
    "status": "TRADING",
    "baseAsset": "QTUM",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "24800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "QTUMUSDT",
    "status": "TRADING",
    "baseAsset": "QTUM",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00100000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00100000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "171500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XEMBTC",
    "status": "TRADING",
    "baseAsset": "XEM",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "8118400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XEMETH",
    "status": "TRADING",
    "baseAsset": "XEM",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2766300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XEMBNB",
    "status": "TRADING",
    "baseAsset": "XEM",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "551800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WANBTC",
    "status": "TRADING",
    "baseAsset": "WAN",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1116700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WANETH",
    "status": "TRADING",
    "baseAsset": "WAN",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1177500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WANBNB",
    "status": "TRADING",
    "baseAsset": "WAN",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "101300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WPRBTC",
    "status": "TRADING",
    "baseAsset": "WPR",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "12499800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WPRETH",
    "status": "TRADING",
    "baseAsset": "WPR",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "11275100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "QLCBTC",
    "status": "TRADING",
    "baseAsset": "QLC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "21208000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "QLCETH",
    "status": "TRADING",
    "baseAsset": "QLC",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "3120800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "SYSBTC",
    "status": "TRADING",
    "baseAsset": "SYS",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "10148300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "SYSETH",
    "status": "TRADING",
    "baseAsset": "SYS",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "699000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "SYSBNB",
    "status": "TRADING",
    "baseAsset": "SYS",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "453500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "QLCBNB",
    "status": "TRADING",
    "baseAsset": "QLC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1132700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "GRSBTC",
    "status": "TRADING",
    "baseAsset": "GRS",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2609800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "GRSETH",
    "status": "TRADING",
    "baseAsset": "GRS",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "194900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ADAUSDT",
    "status": "TRADING",
    "baseAsset": "ADA",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": true,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "44681800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ADABNB",
    "status": "TRADING",
    "baseAsset": "ADA",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "4526300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "CLOAKBTC",
    "status": "BREAK",
    "baseAsset": "CLOAK",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "CLOAKETH",
    "status": "BREAK",
    "baseAsset": "CLOAK",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "GNTBTC",
    "status": "TRADING",
    "baseAsset": "GNT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "7038900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "GNTETH",
    "status": "TRADING",
    "baseAsset": "GNT",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2165800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "GNTBNB",
    "status": "TRADING",
    "baseAsset": "GNT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "900000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "442900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LOOMBTC",
    "status": "TRADING",
    "baseAsset": "LOOM",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "4695700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LOOMETH",
    "status": "TRADING",
    "baseAsset": "LOOM",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "4655200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LOOMBNB",
    "status": "TRADING",
    "baseAsset": "LOOM",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "588900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XRPUSDT",
    "status": "TRADING",
    "baseAsset": "XRP",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": true,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "21663800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCNBTC",
    "status": "BREAK",
    "baseAsset": "BCN",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCNETH",
    "status": "BREAK",
    "baseAsset": "BCN",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCNBNB",
    "status": "BREAK",
    "baseAsset": "BCN",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "REPBTC",
    "status": "TRADING",
    "baseAsset": "REP",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "39600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "REPETH",
    "status": "TRADING",
    "baseAsset": "REP",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "17800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "REPBNB",
    "status": "TRADING",
    "baseAsset": "REP",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BTCTUSD",
    "status": "TRADING",
    "baseAsset": "BTC",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "1000000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00000100",
    "maxQty": "9000.00000000",
    "stepSize": "0.00000100"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TUSDBTC",
    "status": "BREAK",
    "baseAsset": "TUSD",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ETHTUSD",
    "status": "TRADING",
    "baseAsset": "ETH",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "100000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TUSDETH",
    "status": "BREAK",
    "baseAsset": "TUSD",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TUSDBNB",
    "status": "BREAK",
    "baseAsset": "TUSD",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ZENBTC",
    "status": "TRADING",
    "baseAsset": "ZEN",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "38800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ZENETH",
    "status": "TRADING",
    "baseAsset": "ZEN",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "3000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ZENBNB",
    "status": "TRADING",
    "baseAsset": "ZEN",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "4300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "SKYBTC",
    "status": "TRADING",
    "baseAsset": "SKY",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "295400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "SKYETH",
    "status": "TRADING",
    "baseAsset": "SKY",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "61200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "SKYBNB",
    "status": "TRADING",
    "baseAsset": "SKY",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "18400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "EOSUSDT",
    "status": "TRADING",
    "baseAsset": "EOS",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": true,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "674000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "EOSBNB",
    "status": "TRADING",
    "baseAsset": "EOS",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "108500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "CVCBTC",
    "status": "TRADING",
    "baseAsset": "CVC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "4964200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "CVCETH",
    "status": "TRADING",
    "baseAsset": "CVC",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "793400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "CVCBNB",
    "status": "TRADING",
    "baseAsset": "CVC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "343400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "THETABTC",
    "status": "TRADING",
    "baseAsset": "THETA",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "5038700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "THETAETH",
    "status": "TRADING",
    "baseAsset": "THETA",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1737100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "THETABNB",
    "status": "TRADING",
    "baseAsset": "THETA",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "755000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XRPBNB",
    "status": "TRADING",
    "baseAsset": "XRP",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1405600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TUSDUSDT",
    "status": "TRADING",
    "baseAsset": "TUSD",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1720800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "IOTAUSDT",
    "status": "TRADING",
    "baseAsset": "IOTA",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "3767600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XLMUSDT",
    "status": "TRADING",
    "baseAsset": "XLM",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "11819800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "IOTXBTC",
    "status": "TRADING",
    "baseAsset": "IOTX",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "62047600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "IOTXETH",
    "status": "TRADING",
    "baseAsset": "IOTX",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "10494500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "QKCBTC",
    "status": "TRADING",
    "baseAsset": "QKC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "24155000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "QKCETH",
    "status": "TRADING",
    "baseAsset": "QKC",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "6874500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "AGIBTC",
    "status": "TRADING",
    "baseAsset": "AGI",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "8524400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "AGIETH",
    "status": "TRADING",
    "baseAsset": "AGI",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "3979700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "AGIBNB",
    "status": "TRADING",
    "baseAsset": "AGI",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "444800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NXSBTC",
    "status": "TRADING",
    "baseAsset": "NXS",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "820500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NXSETH",
    "status": "TRADING",
    "baseAsset": "NXS",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "121800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NXSBNB",
    "status": "TRADING",
    "baseAsset": "NXS",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "66500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ENJBNB",
    "status": "TRADING",
    "baseAsset": "ENJ",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "963900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DATABTC",
    "status": "TRADING",
    "baseAsset": "DATA",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "10846500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DATAETH",
    "status": "TRADING",
    "baseAsset": "DATA",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "3264700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ONTUSDT",
    "status": "TRADING",
    "baseAsset": "ONT",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": true,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "840800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TRXBNB",
    "status": "TRADING",
    "baseAsset": "TRX",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "10168100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TRXUSDT",
    "status": "TRADING",
    "baseAsset": "TRX",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": true,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "76622600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ETCUSDT",
    "status": "TRADING",
    "baseAsset": "ETC",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": true,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "159700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ETCBNB",
    "status": "TRADING",
    "baseAsset": "ETC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "3900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ICXUSDT",
    "status": "TRADING",
    "baseAsset": "ICX",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2173500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "SCBTC",
    "status": "TRADING",
    "baseAsset": "SC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "328000000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "SCETH",
    "status": "TRADING",
    "baseAsset": "SC",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "61896000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "SCBNB",
    "status": "TRADING",
    "baseAsset": "SC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "15000500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NPXSBTC",
    "status": "TRADING",
    "baseAsset": "NPXS",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "4340000000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NPXSETH",
    "status": "TRADING",
    "baseAsset": "NPXS",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "476000000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "VENUSDT",
    "status": "BREAK",
    "baseAsset": "VEN",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "KEYBTC",
    "status": "TRADING",
    "baseAsset": "KEY",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "56242900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "KEYETH",
    "status": "TRADING",
    "baseAsset": "KEY",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "32748000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NASBTC",
    "status": "TRADING",
    "baseAsset": "NAS",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "279400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NASETH",
    "status": "TRADING",
    "baseAsset": "NAS",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "71800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NASBNB",
    "status": "TRADING",
    "baseAsset": "NAS",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "45700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "MFTBTC",
    "status": "TRADING",
    "baseAsset": "MFT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "138000000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "MFTETH",
    "status": "TRADING",
    "baseAsset": "MFT",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "35855500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "MFTBNB",
    "status": "TRADING",
    "baseAsset": "MFT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "9292000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DENTBTC",
    "status": "TRADING",
    "baseAsset": "DENT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1830000000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DENTETH",
    "status": "TRADING",
    "baseAsset": "DENT",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "125000000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ARDRBTC",
    "status": "TRADING",
    "baseAsset": "ARDR",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "3945800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ARDRETH",
    "status": "TRADING",
    "baseAsset": "ARDR",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "358500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ARDRBNB",
    "status": "TRADING",
    "baseAsset": "ARDR",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "331400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NULSUSDT",
    "status": "TRADING",
    "baseAsset": "NULS",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "353500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "HOTBTC",
    "status": "TRADING",
    "baseAsset": "HOT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1870000000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "HOTETH",
    "status": "TRADING",
    "baseAsset": "HOT",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "565000000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "VETBTC",
    "status": "TRADING",
    "baseAsset": "VET",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "116000000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "VETETH",
    "status": "TRADING",
    "baseAsset": "VET",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "52447600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "VETUSDT",
    "status": "TRADING",
    "baseAsset": "VET",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "78479400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "VETBNB",
    "status": "TRADING",
    "baseAsset": "VET",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "30626300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DOCKBTC",
    "status": "TRADING",
    "baseAsset": "DOCK",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "14703300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DOCKETH",
    "status": "TRADING",
    "baseAsset": "DOCK",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "5313300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "POLYBTC",
    "status": "TRADING",
    "baseAsset": "POLY",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "6854100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "POLYBNB",
    "status": "TRADING",
    "baseAsset": "POLY",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "285600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "PHXBTC",
    "status": "BREAK",
    "baseAsset": "PHX",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "79612100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "PHXETH",
    "status": "BREAK",
    "baseAsset": "PHX",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "7740200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "PHXBNB",
    "status": "BREAK",
    "baseAsset": "PHX",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "3980900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "HCBTC",
    "status": "TRADING",
    "baseAsset": "HC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "276700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "HCETH",
    "status": "TRADING",
    "baseAsset": "HC",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "66400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "GOBTC",
    "status": "TRADING",
    "baseAsset": "GO",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "7814200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "GOBNB",
    "status": "TRADING",
    "baseAsset": "GO",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "949900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "PAXBTC",
    "status": "BREAK",
    "baseAsset": "PAX",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "PAXBNB",
    "status": "BREAK",
    "baseAsset": "PAX",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "PAXUSDT",
    "status": "TRADING",
    "baseAsset": "PAX",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2450000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "PAXETH",
    "status": "BREAK",
    "baseAsset": "PAX",
    "baseAssetPrecision": 8,
    "quoteAsset": "ETH",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.01000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "RVNBTC",
    "status": "TRADING",
    "baseAsset": "RVN",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "40636700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "RVNBNB",
    "status": "TRADING",
    "baseAsset": "RVN",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2440800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DCRBTC",
    "status": "TRADING",
    "baseAsset": "DCR",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "28900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DCRBNB",
    "status": "TRADING",
    "baseAsset": "DCR",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00100000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00100000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "USDCBNB",
    "status": "BREAK",
    "baseAsset": "USDC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "USDCBTC",
    "status": "BREAK",
    "baseAsset": "USDC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "MITHBTC",
    "status": "TRADING",
    "baseAsset": "MITH",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "20880600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "MITHBNB",
    "status": "TRADING",
    "baseAsset": "MITH",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "813300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCHABCBTC",
    "status": "TRADING",
    "baseAsset": "BCHABC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "31000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCHSVBTC",
    "status": "BREAK",
    "baseAsset": "BCHSV",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCHABCUSDT",
    "status": "TRADING",
    "baseAsset": "BCHABC",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "100000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "22000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCHSVUSDT",
    "status": "BREAK",
    "baseAsset": "BCHSV",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "100000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BNBPAX",
    "status": "TRADING",
    "baseAsset": "BNB",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "57700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BTCPAX",
    "status": "TRADING",
    "baseAsset": "BTC",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "1000000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00000100",
    "maxQty": "9000.00000000",
    "stepSize": "0.00000100"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ETHPAX",
    "status": "TRADING",
    "baseAsset": "ETH",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "100000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XRPPAX",
    "status": "TRADING",
    "baseAsset": "XRP",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "971300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "EOSPAX",
    "status": "TRADING",
    "baseAsset": "EOS",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "26100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XLMPAX",
    "status": "TRADING",
    "baseAsset": "XLM",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "187400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "RENBTC",
    "status": "TRADING",
    "baseAsset": "REN",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "8259300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "RENBNB",
    "status": "TRADING",
    "baseAsset": "REN",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1865400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BNBTUSD",
    "status": "TRADING",
    "baseAsset": "BNB",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "35400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XRPTUSD",
    "status": "TRADING",
    "baseAsset": "XRP",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "946000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "EOSTUSD",
    "status": "TRADING",
    "baseAsset": "EOS",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "26500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XLMTUSD",
    "status": "TRADING",
    "baseAsset": "XLM",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "389700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BNBUSDC",
    "status": "TRADING",
    "baseAsset": "BNB",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "27700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BTCUSDC",
    "status": "TRADING",
    "baseAsset": "BTC",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": true,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "1000000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00000100",
    "maxQty": "9000.00000000",
    "stepSize": "0.00000100"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ETHUSDC",
    "status": "TRADING",
    "baseAsset": "ETH",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "100000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "3800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XRPUSDC",
    "status": "TRADING",
    "baseAsset": "XRP",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1492000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "EOSUSDC",
    "status": "TRADING",
    "baseAsset": "EOS",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "34600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XLMUSDC",
    "status": "TRADING",
    "baseAsset": "XLM",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1401500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "USDCUSDT",
    "status": "TRADING",
    "baseAsset": "USDC",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1523100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ADATUSD",
    "status": "TRADING",
    "baseAsset": "ADA",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2231500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TRXTUSD",
    "status": "TRADING",
    "baseAsset": "TRX",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "7502800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NEOTUSD",
    "status": "TRADING",
    "baseAsset": "NEO",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00100000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00100000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "13500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TRXXRP",
    "status": "TRADING",
    "baseAsset": "TRX",
    "baseAssetPrecision": 8,
    "quoteAsset": "XRP",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "14698800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XZCXRP",
    "status": "TRADING",
    "baseAsset": "XZC",
    "baseAssetPrecision": 8,
    "quoteAsset": "XRP",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00100000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00100000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "20400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "PAXTUSD",
    "status": "TRADING",
    "baseAsset": "PAX",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "554400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "USDCTUSD",
    "status": "TRADING",
    "baseAsset": "USDC",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "974900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "USDCPAX",
    "status": "TRADING",
    "baseAsset": "USDC",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "460200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LINKUSDT",
    "status": "TRADING",
    "baseAsset": "LINK",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": true,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1275600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LINKTUSD",
    "status": "TRADING",
    "baseAsset": "LINK",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "186400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LINKPAX",
    "status": "TRADING",
    "baseAsset": "LINK",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "120400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LINKUSDC",
    "status": "TRADING",
    "baseAsset": "LINK",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "79700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WAVESUSDT",
    "status": "TRADING",
    "baseAsset": "WAVES",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "126400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WAVESTUSD",
    "status": "TRADING",
    "baseAsset": "WAVES",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "37300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WAVESPAX",
    "status": "TRADING",
    "baseAsset": "WAVES",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "8500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WAVESUSDC",
    "status": "TRADING",
    "baseAsset": "WAVES",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "26900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCHABCTUSD",
    "status": "TRADING",
    "baseAsset": "BCHABC",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "100000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCHABCPAX",
    "status": "TRADING",
    "baseAsset": "BCHABC",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "100000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCHABCUSDC",
    "status": "TRADING",
    "baseAsset": "BCHABC",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "100000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCHSVTUSD",
    "status": "BREAK",
    "baseAsset": "BCHSV",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "100000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCHSVPAX",
    "status": "BREAK",
    "baseAsset": "BCHSV",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "100000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCHSVUSDC",
    "status": "BREAK",
    "baseAsset": "BCHSV",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": false,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "100000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LTCTUSD",
    "status": "TRADING",
    "baseAsset": "LTC",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "100000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "4800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LTCPAX",
    "status": "TRADING",
    "baseAsset": "LTC",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "100000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "5300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "LTCUSDC",
    "status": "TRADING",
    "baseAsset": "LTC",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "100000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "6000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TRXPAX",
    "status": "TRADING",
    "baseAsset": "TRX",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "4068900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TRXUSDC",
    "status": "TRADING",
    "baseAsset": "TRX",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "4984400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BTTBTC",
    "status": "TRADING",
    "baseAsset": "BTT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "8020000000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BTTBNB",
    "status": "TRADING",
    "baseAsset": "BTT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "385000000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BTTUSDT",
    "status": "TRADING",
    "baseAsset": "BTT",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1060000000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BNBUSDS",
    "status": "TRADING",
    "baseAsset": "BNB",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDS",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "6600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BTCUSDS",
    "status": "TRADING",
    "baseAsset": "BTC",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDS",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "1000000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00000100",
    "maxQty": "9000.00000000",
    "stepSize": "0.00000100"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "USDSUSDT",
    "status": "TRADING",
    "baseAsset": "USDS",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "153500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "USDSPAX",
    "status": "TRADING",
    "baseAsset": "USDS",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "156600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "USDSTUSD",
    "status": "TRADING",
    "baseAsset": "USDS",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "74500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "USDSUSDC",
    "status": "TRADING",
    "baseAsset": "USDS",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "232600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BTTPAX",
    "status": "TRADING",
    "baseAsset": "BTT",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "95111900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BTTTUSD",
    "status": "TRADING",
    "baseAsset": "BTT",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "78001500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BTTUSDC",
    "status": "TRADING",
    "baseAsset": "BTT",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "125000000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ONGBNB",
    "status": "TRADING",
    "baseAsset": "ONG",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "51900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ONGBTC",
    "status": "TRADING",
    "baseAsset": "ONG",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1217900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ONGUSDT",
    "status": "TRADING",
    "baseAsset": "ONG",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "656200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "HOTBNB",
    "status": "TRADING",
    "baseAsset": "HOT",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "71608100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "HOTUSDT",
    "status": "TRADING",
    "baseAsset": "HOT",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "241000000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ZILUSDT",
    "status": "TRADING",
    "baseAsset": "ZIL",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "29107600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ZRXBNB",
    "status": "TRADING",
    "baseAsset": "ZRX",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "88200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ZRXUSDT",
    "status": "TRADING",
    "baseAsset": "ZRX",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "412400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "FETBNB",
    "status": "TRADING",
    "baseAsset": "FET",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1354700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "FETBTC",
    "status": "TRADING",
    "baseAsset": "FET",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1669300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "FETUSDT",
    "status": "TRADING",
    "baseAsset": "FET",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "3243500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BATUSDT",
    "status": "TRADING",
    "baseAsset": "BAT",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2120100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XMRBNB",
    "status": "TRADING",
    "baseAsset": "XMR",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00100000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00100000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "3400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "XMRUSDT",
    "status": "TRADING",
    "baseAsset": "XMR",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "100000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "8700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ZECBNB",
    "status": "TRADING",
    "baseAsset": "ZEC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00100000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00100000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ZECUSDT",
    "status": "TRADING",
    "baseAsset": "ZEC",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "100000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "6700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ZECPAX",
    "status": "TRADING",
    "baseAsset": "ZEC",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "100000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ZECTUSD",
    "status": "TRADING",
    "baseAsset": "ZEC",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "100000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "600.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ZECUSDC",
    "status": "TRADING",
    "baseAsset": "ZEC",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "100000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "IOSTBNB",
    "status": "TRADING",
    "baseAsset": "IOST",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "5060500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "IOSTUSDT",
    "status": "TRADING",
    "baseAsset": "IOST",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "41402800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "CELRBNB",
    "status": "TRADING",
    "baseAsset": "CELR",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "14310800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "CELRBTC",
    "status": "TRADING",
    "baseAsset": "CELR",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "45282700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "CELRUSDT",
    "status": "TRADING",
    "baseAsset": "CELR",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "36144200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ADAPAX",
    "status": "TRADING",
    "baseAsset": "ADA",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "857400.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ADAUSDC",
    "status": "TRADING",
    "baseAsset": "ADA",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "3042200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NEOPAX",
    "status": "TRADING",
    "baseAsset": "NEO",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00100000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00100000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "8800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NEOUSDC",
    "status": "TRADING",
    "baseAsset": "NEO",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00100000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00100000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "20500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DASHBNB",
    "status": "TRADING",
    "baseAsset": "DASH",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00100000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00100000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DASHUSDT",
    "status": "TRADING",
    "baseAsset": "DASH",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.01000000",
    "maxPrice": "100000.00000000",
    "tickSize": "0.01000000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00001000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00001000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NANOUSDT",
    "status": "TRADING",
    "baseAsset": "NANO",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "279300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "OMGBNB",
    "status": "TRADING",
    "baseAsset": "OMG",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "40300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "OMGUSDT",
    "status": "TRADING",
    "baseAsset": "OMG",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "193200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "THETAUSDT",
    "status": "TRADING",
    "baseAsset": "THETA",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1618800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ENJUSDT",
    "status": "TRADING",
    "baseAsset": "ENJ",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "2366900.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "MITHUSDT",
    "status": "TRADING",
    "baseAsset": "MITH",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "7316200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "MATICBNB",
    "status": "TRADING",
    "baseAsset": "MATIC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "37288200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "MATICBTC",
    "status": "TRADING",
    "baseAsset": "MATIC",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "349000000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "MATICUSDT",
    "status": "TRADING",
    "baseAsset": "MATIC",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "78345200.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ATOMBNB",
    "status": "TRADING",
    "baseAsset": "ATOM",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "33700.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ATOMBTC",
    "status": "TRADING",
    "baseAsset": "ATOM",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "588300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ATOMUSDT",
    "status": "TRADING",
    "baseAsset": "ATOM",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00100000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00100000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "208000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ATOMUSDC",
    "status": "TRADING",
    "baseAsset": "ATOM",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00100000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00100000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "3800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ATOMPAX",
    "status": "TRADING",
    "baseAsset": "ATOM",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00100000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00100000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "15300.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ATOMTUSD",
    "status": "TRADING",
    "baseAsset": "ATOM",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00100000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00100000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "15000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ETCUSDC",
    "status": "TRADING",
    "baseAsset": "ETC",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00100000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00100000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "9800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ETCPAX",
    "status": "TRADING",
    "baseAsset": "ETC",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00100000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00100000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "1000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ETCTUSD",
    "status": "TRADING",
    "baseAsset": "ETC",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00100000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00100000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "9100.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BATUSDC",
    "status": "TRADING",
    "baseAsset": "BAT",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "302000.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BATPAX",
    "status": "TRADING",
    "baseAsset": "BAT",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "186800.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BATTUSD",
    "status": "TRADING",
    "baseAsset": "BAT",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MARKET_LOT_SIZE",
    "minQty": "0.00000000",
    "maxQty": "85500.00000000",
    "stepSize": "0.00000000"
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "PHBBNB",
    "status": "TRADING",
    "baseAsset": "PHB",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "PHBBTC",
    "status": "TRADING",
    "baseAsset": "PHB",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "PHBUSDC",
    "status": "TRADING",
    "baseAsset": "PHB",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "PHBTUSD",
    "status": "TRADING",
    "baseAsset": "PHB",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "PHBPAX",
    "status": "TRADING",
    "baseAsset": "PHB",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TFUELBNB",
    "status": "TRADING",
    "baseAsset": "TFUEL",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TFUELBTC",
    "status": "TRADING",
    "baseAsset": "TFUEL",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TFUELUSDT",
    "status": "TRADING",
    "baseAsset": "TFUEL",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TFUELUSDC",
    "status": "TRADING",
    "baseAsset": "TFUEL",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TFUELTUSD",
    "status": "TRADING",
    "baseAsset": "TFUEL",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TFUELPAX",
    "status": "TRADING",
    "baseAsset": "TFUEL",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ONEBNB",
    "status": "TRADING",
    "baseAsset": "ONE",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ONEBTC",
    "status": "TRADING",
    "baseAsset": "ONE",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ONEUSDT",
    "status": "TRADING",
    "baseAsset": "ONE",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ONETUSD",
    "status": "TRADING",
    "baseAsset": "ONE",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ONEPAX",
    "status": "TRADING",
    "baseAsset": "ONE",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ONEUSDC",
    "status": "TRADING",
    "baseAsset": "ONE",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "FTMBNB",
    "status": "TRADING",
    "baseAsset": "FTM",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "FTMBTC",
    "status": "TRADING",
    "baseAsset": "FTM",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "FTMUSDT",
    "status": "TRADING",
    "baseAsset": "FTM",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "FTMTUSD",
    "status": "TRADING",
    "baseAsset": "FTM",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "FTMPAX",
    "status": "TRADING",
    "baseAsset": "FTM",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "FTMUSDC",
    "status": "TRADING",
    "baseAsset": "FTM",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BTCBBTC",
    "status": "TRADING",
    "baseAsset": "BTCB",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "10000000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCPTTUSD",
    "status": "TRADING",
    "baseAsset": "BCPT",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCPTPAX",
    "status": "TRADING",
    "baseAsset": "BCPT",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BCPTUSDC",
    "status": "TRADING",
    "baseAsset": "BCPT",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ALGOBNB",
    "status": "TRADING",
    "baseAsset": "ALGO",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ALGOBTC",
    "status": "TRADING",
    "baseAsset": "ALGO",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "90000000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ALGOUSDT",
    "status": "TRADING",
    "baseAsset": "ALGO",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00100000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00100000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ALGOTUSD",
    "status": "TRADING",
    "baseAsset": "ALGO",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00100000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00100000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ALGOPAX",
    "status": "TRADING",
    "baseAsset": "ALGO",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00100000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00100000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ALGOUSDC",
    "status": "TRADING",
    "baseAsset": "ALGO",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00100000",
    "maxPrice": "10000.00000000",
    "tickSize": "0.00100000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.00100000",
    "maxQty": "900000.00000000",
    "stepSize": "0.00100000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "USDSBUSDT",
    "status": "TRADING",
    "baseAsset": "USDSB",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "USDSBUSDS",
    "status": "TRADING",
    "baseAsset": "USDSB",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDS",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "GTOUSDT",
    "status": "TRADING",
    "baseAsset": "GTO",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "GTOPAX",
    "status": "TRADING",
    "baseAsset": "GTO",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "GTOTUSD",
    "status": "TRADING",
    "baseAsset": "GTO",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "GTOUSDC",
    "status": "TRADING",
    "baseAsset": "GTO",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ERDBNB",
    "status": "TRADING",
    "baseAsset": "ERD",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ERDBTC",
    "status": "TRADING",
    "baseAsset": "ERD",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ERDUSDT",
    "status": "TRADING",
    "baseAsset": "ERD",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ERDPAX",
    "status": "TRADING",
    "baseAsset": "ERD",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ERDUSDC",
    "status": "TRADING",
    "baseAsset": "ERD",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DOGEBNB",
    "status": "TRADING",
    "baseAsset": "DOGE",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DOGEBTC",
    "status": "TRADING",
    "baseAsset": "DOGE",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DOGEUSDT",
    "status": "TRADING",
    "baseAsset": "DOGE",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DOGEPAX",
    "status": "TRADING",
    "baseAsset": "DOGE",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DOGEUSDC",
    "status": "TRADING",
    "baseAsset": "DOGE",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DUSKBNB",
    "status": "TRADING",
    "baseAsset": "DUSK",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DUSKBTC",
    "status": "TRADING",
    "baseAsset": "DUSK",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DUSKUSDT",
    "status": "TRADING",
    "baseAsset": "DUSK",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DUSKUSDC",
    "status": "TRADING",
    "baseAsset": "DUSK",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "DUSKPAX",
    "status": "TRADING",
    "baseAsset": "DUSK",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "BGBPUSDC",
    "status": "TRADING",
    "baseAsset": "BGBP",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ANKRBNB",
    "status": "TRADING",
    "baseAsset": "ANKR",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ANKRBTC",
    "status": "TRADING",
    "baseAsset": "ANKR",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ANKRUSDT",
    "status": "TRADING",
    "baseAsset": "ANKR",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ANKRTUSD",
    "status": "TRADING",
    "baseAsset": "ANKR",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ANKRPAX",
    "status": "TRADING",
    "baseAsset": "ANKR",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ANKRUSDC",
    "status": "TRADING",
    "baseAsset": "ANKR",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ONTPAX",
    "status": "TRADING",
    "baseAsset": "ONT",
    "baseAssetPrecision": 8,
    "quoteAsset": "PAX",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "ONTUSDC",
    "status": "TRADING",
    "baseAsset": "ONT",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WINBNB",
    "status": "TRADING",
    "baseAsset": "WIN",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WINBTC",
    "status": "TRADING",
    "baseAsset": "WIN",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WINUSDT",
    "status": "TRADING",
    "baseAsset": "WIN",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "WINUSDC",
    "status": "TRADING",
    "baseAsset": "WIN",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "COSBNB",
    "status": "TRADING",
    "baseAsset": "COS",
    "baseAssetPrecision": 8,
    "quoteAsset": "BNB",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000100",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000100"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "9000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.10000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "COSBTC",
    "status": "TRADING",
    "baseAsset": "COS",
    "baseAssetPrecision": 8,
    "quoteAsset": "BTC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000001",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000001"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "0.00010000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "COSUSDT",
    "status": "TRADING",
    "baseAsset": "COS",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00001000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00001000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.10000000",
    "maxQty": "9000000.00000000",
    "stepSize": "0.10000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "TUSDBTUSD",
    "status": "TRADING",
    "baseAsset": "TUSDB",
    "baseAssetPrecision": 8,
    "quoteAsset": "TUSD",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00010000",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00010000"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "0.01000000",
    "maxQty": "900000.00000000",
    "stepSize": "0.01000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NPXSUSDT",
    "status": "TRADING",
    "baseAsset": "NPXS",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDT",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    },
    {
    "symbol": "NPXSUSDC",
    "status": "TRADING",
    "baseAsset": "NPXS",
    "baseAssetPrecision": 8,
    "quoteAsset": "USDC",
    "quotePrecision": 8,
    "orderTypes": [
    "LIMIT",
    "LIMIT_MAKER",
    "MARKET",
    "STOP_LOSS_LIMIT",
    "TAKE_PROFIT_LIMIT"
    ],
    "icebergAllowed": true,
    "ocoAllowed": true,
    "isSpotTradingAllowed": true,
    "isMarginTradingAllowed": false,
    "filters": [
    {
    "filterType": "PRICE_FILTER",
    "minPrice": "0.00000010",
    "maxPrice": "1000.00000000",
    "tickSize": "0.00000010"
    },
    {
    "filterType": "PERCENT_PRICE",
    "multiplierUp": "5",
    "multiplierDown": "0.2",
    "avgPriceMins": 5
    },
    {
    "filterType": "LOT_SIZE",
    "minQty": "1.00000000",
    "maxQty": "90000000.00000000",
    "stepSize": "1.00000000"
    },
    {
    "filterType": "MIN_NOTIONAL",
    "minNotional": "10.00000000",
    "applyToMarket": true,
    "avgPriceMins": 5
    },
    {
    "filterType": "ICEBERG_PARTS",
    "limit": 10
    },
    {
    "filterType": "MAX_NUM_ALGO_ORDERS",
    "maxNumAlgoOrders": 5
    }
    ]
    }
    ]
    };