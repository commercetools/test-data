import type { TStandalonePriceDraft } from '../../../types';
import oo789Uv20235 from './oo-789-uv-2023-5';

describe(`with oo789Uv20235 preset`, () => {
  it(`should return a oo789Uv20235 preset`, () => {
    const oo789Uv20235Preset = oo789Uv20235().build<TStandalonePriceDraft>();
    expect(oo789Uv20235Preset).toMatchInlineSnapshot(`
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
        "key": "oo789-uv-2023-5",
        "sku": "oo789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2250000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a oo789Uv20235 preset when built for graphql`, () => {
    const oo789Uv20235PresetGraphql =
      oo789Uv20235().buildGraphql<TStandalonePriceDraft>();
    expect(oo789Uv20235PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "oo789-uv-2023-5",
        "sku": "oo789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2250000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
