import type { TStandalonePriceDraft } from '../../../types';
import oo789Uv20238 from './oo-789-uv-2023-8';

describe(`with oo789Uv20238 preset`, () => {
  it(`should return a oo789Uv20238 preset`, () => {
    const oo789Uv20238Preset = oo789Uv20238().build<TStandalonePriceDraft>();
    expect(oo789Uv20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2023-8",
        "sku": "oo789-uv-2023",
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

  it(`should return a oo789Uv20238 preset when built for graphql`, () => {
    const oo789Uv20238PresetGraphql =
      oo789Uv20238().buildGraphql<TStandalonePriceDraft>();
    expect(oo789Uv20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2023-8",
        "sku": "oo789-uv-2023",
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
