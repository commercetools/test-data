import type { TStandalonePriceDraft } from '../../../types';
import oo789Uv20234 from './oo-789-uv-2023-4';

describe(`with oo789Uv20234 preset`, () => {
  it(`should return a oo789Uv20234 preset`, () => {
    const oo789Uv20234Preset = oo789Uv20234().build<TStandalonePriceDraft>();
    expect(oo789Uv20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2023-4",
        "sku": "oo789-uv-2023",
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

  it(`should return a oo789Uv20234 preset when built for graphql`, () => {
    const oo789Uv20234PresetGraphql =
      oo789Uv20234().buildGraphql<TStandalonePriceDraft>();
    expect(oo789Uv20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2023-4",
        "sku": "oo789-uv-2023",
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
