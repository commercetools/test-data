import type { TStandalonePriceDraft } from '../../../types';
import a789Bc20153 from './a-789-bc-2015-3';

describe(`with a789Bc20153 preset`, () => {
  it(`should return a a789Bc20153 preset`, () => {
    const a789Bc20153Preset = a789Bc20153().build<TStandalonePriceDraft>();
    expect(a789Bc20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2015-3",
        "sku": "a789-bc-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1650000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a a789Bc20153 preset when built for graphql`, () => {
    const a789Bc20153PresetGraphql =
      a789Bc20153().buildGraphql<TStandalonePriceDraft>();
    expect(a789Bc20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2015-3",
        "sku": "a789-bc-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1650000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
