import type { TStandalonePriceDraft } from '../../../types';
import i789Uv20234 from './i-789-uv-2023-4';

describe(`with i789Uv20234 preset`, () => {
  it(`should return a i789Uv20234 preset`, () => {
    const i789Uv20234Preset = i789Uv20234().build<TStandalonePriceDraft>();
    expect(i789Uv20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2023-4",
        "recurrencePolicy": undefined,
        "sku": "i789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1400000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a i789Uv20234 preset when built for graphql`, () => {
    const i789Uv20234PresetGraphql =
      i789Uv20234().buildGraphql<TStandalonePriceDraft>();
    expect(i789Uv20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2023-4",
        "recurrencePolicy": undefined,
        "sku": "i789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1400000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
