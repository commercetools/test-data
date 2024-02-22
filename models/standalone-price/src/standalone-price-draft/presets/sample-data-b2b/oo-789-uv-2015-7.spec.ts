import type { TStandalonePriceDraft } from '../../../types';
import oo789Uv20157 from './oo-789-uv-2015-7';

describe(`with oo789Uv20157 preset`, () => {
  it(`should return a oo789Uv20157 preset`, () => {
    const oo789Uv20157Preset = oo789Uv20157().build<TStandalonePriceDraft>();
    expect(oo789Uv20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2015-7",
        "sku": "oo789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a oo789Uv20157 preset when built for graphql`, () => {
    const oo789Uv20157PresetGraphql =
      oo789Uv20157().buildGraphql<TStandalonePriceDraft>();
    expect(oo789Uv20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2015-7",
        "sku": "oo789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
