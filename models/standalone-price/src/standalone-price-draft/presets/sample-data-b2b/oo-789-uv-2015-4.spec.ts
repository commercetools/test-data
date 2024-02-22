import type { TStandalonePriceDraft } from '../../../types';
import oo789Uv20154 from './oo-789-uv-2015-4';

describe(`with oo789Uv20154 preset`, () => {
  it(`should return a oo789Uv20154 preset`, () => {
    const oo789Uv20154Preset = oo789Uv20154().build<TStandalonePriceDraft>();
    expect(oo789Uv20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2015-4",
        "sku": "oo789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a oo789Uv20154 preset when built for graphql`, () => {
    const oo789Uv20154PresetGraphql =
      oo789Uv20154().buildGraphql<TStandalonePriceDraft>();
    expect(oo789Uv20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2015-4",
        "sku": "oo789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
