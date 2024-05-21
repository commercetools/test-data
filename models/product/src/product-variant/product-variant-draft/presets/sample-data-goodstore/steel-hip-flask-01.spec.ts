import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import steelHipFlask01 from './steel-hip-flask-01';

describe(`with steelHipFlask01 preset`, () => {
  it(`should return a steelHipFlask01 preset`, () => {
    const steelHipFlask01Preset =
      steelHipFlask01().build<TProductVariantDraft>();
    expect(steelHipFlask01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Edelstahl",
              "en-GB": "- Stainless steel",
              "en-US": "- Stainless steel",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 6580,
              "w": 5006,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Steel_Hip_Flask-1.1.jpeg",
          },
        ],
        "key": undefined,
        "prices": [
          {
            "channel": {
              "key": "distribution-channel",
              "typeId": "channel",
            },
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 599,
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
              "centAmount": 599,
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
              "centAmount": 599,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "FLAS-094",
      }
    `);
  });

  it(`should return a steelHipFlask01 preset when built for graphql`, () => {
    const steelHipFlask01PresetGraphql =
      steelHipFlask01().buildGraphql<TProductVariantDraftGraphql>();
    expect(steelHipFlask01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Stainless steel","en-US":"- Stainless steel","de-DE":"- Edelstahl"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 6580,
              "width": 5006,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Steel_Hip_Flask-1.1.jpeg",
          },
        ],
        "key": undefined,
        "prices": [
          {
            "channel": {
              "key": "distribution-channel",
              "typeId": "channel",
            },
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
                "centAmount": 599,
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
                "centAmount": 599,
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
                "centAmount": 599,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "FLAS-094",
      }
    `);
  });
});
