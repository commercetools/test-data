import type { TStandalonePriceDraft } from '../../../types';
import oo789Uv20196 from './oo-789-uv-2019-6';

describe(`with oo789Uv20196 preset`, () => {
  it(`should return a oo789Uv20196 preset`, () => {
    const oo789Uv20196Preset = oo789Uv20196().build<TStandalonePriceDraft>();
    expect(oo789Uv20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2019-6",
        "sku": "oo789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a oo789Uv20196 preset when built for graphql`, () => {
    const oo789Uv20196PresetGraphql =
      oo789Uv20196().buildGraphql<TStandalonePriceDraft>();
    expect(oo789Uv20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2019-6",
        "sku": "oo789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
