import type { TStandalonePriceDraft } from '../../../types';
import a789Bc20152 from './a-789-bc-2015-2';

describe(`with a789Bc20152 preset`, () => {
  it(`should return a a789Bc20152 preset`, () => {
    const a789Bc20152Preset = a789Bc20152().build<TStandalonePriceDraft>();
    expect(a789Bc20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2015-2",
        "sku": "a789-bc-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1237500,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a a789Bc20152 preset when built for graphql`, () => {
    const a789Bc20152PresetGraphql =
      a789Bc20152().buildGraphql<TStandalonePriceDraft>();
    expect(a789Bc20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2015-2",
        "sku": "a789-bc-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1237500,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
