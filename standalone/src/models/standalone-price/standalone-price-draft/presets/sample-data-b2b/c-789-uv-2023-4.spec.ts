import type { TStandalonePriceDraft } from '../../../types';
import c789Uv20234 from './c-789-uv-2023-4';

describe(`with c789Uv20234 preset`, () => {
  it(`should return a c789Uv20234 preset`, () => {
    const c789Uv20234Preset = c789Uv20234().build<TStandalonePriceDraft>();
    expect(c789Uv20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2023-4",
        "recurrencePolicy": undefined,
        "sku": "c789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1200000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a c789Uv20234 preset when built for graphql`, () => {
    const c789Uv20234PresetGraphql =
      c789Uv20234().buildGraphql<TStandalonePriceDraft>();
    expect(c789Uv20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2023-4",
        "recurrencePolicy": undefined,
        "sku": "c789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1200000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
