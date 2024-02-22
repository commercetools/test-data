import type { TStandalonePriceDraft } from '../../../types';
import oo789Uv20198 from './oo-789-uv-2019-8';

describe(`with oo789Uv20198 preset`, () => {
  it(`should return a oo789Uv20198 preset`, () => {
    const oo789Uv20198Preset = oo789Uv20198().build<TStandalonePriceDraft>();
    expect(oo789Uv20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2019-8",
        "sku": "oo789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a oo789Uv20198 preset when built for graphql`, () => {
    const oo789Uv20198PresetGraphql =
      oo789Uv20198().buildGraphql<TStandalonePriceDraft>();
    expect(oo789Uv20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2019-8",
        "sku": "oo789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
