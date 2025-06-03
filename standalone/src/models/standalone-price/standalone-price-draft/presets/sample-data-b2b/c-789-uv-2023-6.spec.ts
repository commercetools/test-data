import type { TStandalonePriceDraft } from '../../../types';
import c789Uv20236 from './c-789-uv-2023-6';

describe(`with c789Uv20236 preset`, () => {
  it(`should return a c789Uv20236 preset`, () => {
    const c789Uv20236Preset = c789Uv20236().build<TStandalonePriceDraft>();
    expect(c789Uv20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2023-6",
        "recurrencePolicy": undefined,
        "sku": "c789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 960000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a c789Uv20236 preset when built for graphql`, () => {
    const c789Uv20236PresetGraphql =
      c789Uv20236().buildGraphql<TStandalonePriceDraft>();
    expect(c789Uv20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2023-6",
        "recurrencePolicy": undefined,
        "sku": "c789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 960000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
