import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import evergreenCandle01 from './evergreen-candle-01';

describe(`with evergreenCandle01 preset`, () => {
  it(`should return a evergreenCandle01 preset`, () => {
    const evergreenCandle01Preset =
      evergreenCandle01().build<TProductVariantDraft>();
    expect(evergreenCandle01Preset).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "color",
      "value": {
        "de-DE": "Helles Oliv:#BAB86C",
        "en-GB": "Light Olive:#BAB86C",
        "en-US": "Light Olive:#BAB86C",
      },
    },
  ],
  "images": [
    {
      "dimensions": {
        "h": 2160,
        "w": 3840,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Evergreen_Candle-1.1.jpeg",
    },
    {
      "dimensions": {
        "h": 2160,
        "w": 3840,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Evergreen_Candle-1.3.jpeg",
    },
    {
      "dimensions": {
        "h": 6720,
        "w": 4480,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Evergreen_Candle-1.2.jpeg",
    },
  ],
  "key": undefined,
  "prices": [
    {
      "channel": undefined,
      "country": "DE",
      "custom": undefined,
      "customerGroup": undefined,
      "discounted": undefined,
      "key": undefined,
      "tiers": undefined,
      "validFrom": undefined,
      "validUntil": undefined,
      "value": {
        "centAmount": 299,
        "currencyCode": "EUR",
      },
    },
    {
      "channel": undefined,
      "country": "GB",
      "custom": undefined,
      "customerGroup": undefined,
      "discounted": undefined,
      "key": undefined,
      "tiers": undefined,
      "validFrom": undefined,
      "validUntil": undefined,
      "value": {
        "centAmount": 299,
        "currencyCode": "GBP",
      },
    },
    {
      "channel": undefined,
      "country": "US",
      "custom": undefined,
      "customerGroup": undefined,
      "discounted": undefined,
      "key": undefined,
      "tiers": undefined,
      "validFrom": undefined,
      "validUntil": undefined,
      "value": {
        "centAmount": 299,
        "currencyCode": "USD",
      },
    },
  ],
  "sku": "EC-0993",
}
`);
  });

  it(`should return a evergreenCandle01 preset when built for graphql`, () => {
    const evergreenCandle01PresetGraphql =
      evergreenCandle01().buildGraphql<TProductVariantDraftGraphql>();
    expect(evergreenCandle01PresetGraphql).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "color",
      "value": "{"en-GB":"Light Olive:#BAB86C","de-DE":"Helles Oliv:#BAB86C","en-US":"Light Olive:#BAB86C"}",
    },
  ],
  "images": [
    {
      "dimensions": {
        "height": 2160,
        "width": 3840,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Evergreen_Candle-1.1.jpeg",
    },
    {
      "dimensions": {
        "height": 2160,
        "width": 3840,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Evergreen_Candle-1.3.jpeg",
    },
    {
      "dimensions": {
        "height": 6720,
        "width": 4480,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Evergreen_Candle-1.2.jpeg",
    },
  ],
  "key": undefined,
  "prices": [
    {
      "channel": undefined,
      "country": "DE",
      "custom": undefined,
      "customerGroup": undefined,
      "discounted": undefined,
      "key": undefined,
      "tiers": undefined,
      "validFrom": undefined,
      "validUntil": undefined,
      "value": {
        "centPrecision": {
          "centAmount": 299,
          "currencyCode": "EUR",
        },
      },
    },
    {
      "channel": undefined,
      "country": "GB",
      "custom": undefined,
      "customerGroup": undefined,
      "discounted": undefined,
      "key": undefined,
      "tiers": undefined,
      "validFrom": undefined,
      "validUntil": undefined,
      "value": {
        "centPrecision": {
          "centAmount": 299,
          "currencyCode": "GBP",
        },
      },
    },
    {
      "channel": undefined,
      "country": "US",
      "custom": undefined,
      "customerGroup": undefined,
      "discounted": undefined,
      "key": undefined,
      "tiers": undefined,
      "validFrom": undefined,
      "validUntil": undefined,
      "value": {
        "centPrecision": {
          "centAmount": 299,
          "currencyCode": "USD",
        },
      },
    },
  ],
  "sku": "EC-0993",
}
`);
  });
});
