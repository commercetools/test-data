import type { TStandalonePriceDraft } from '../../../types';
import a789Bc20151 from './a-789-bc-2015-1';

describe(`with a789Bc20151 preset`, () => {
  it(`should return a a789Bc20151 preset`, () => {
    const a789Bc20151Preset = a789Bc20151().build<TStandalonePriceDraft>();
    expect(a789Bc20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2015-1",
        "sku": "a789-bc-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1375000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a a789Bc20151 preset when built for graphql`, () => {
    const a789Bc20151PresetGraphql =
      a789Bc20151().buildGraphql<TStandalonePriceDraft>();
    expect(a789Bc20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2015-1",
        "sku": "a789-bc-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1375000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
