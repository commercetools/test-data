import type { TStandalonePriceDraft } from '../../../types';
import cc789Uv20236 from './cc-789-uv-2023-6';

describe(`with cc789Uv20236 preset`, () => {
  it(`should return a cc789Uv20236 preset`, () => {
    const cc789Uv20236Preset = cc789Uv20236().build<TStandalonePriceDraft>();
    expect(cc789Uv20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2023-6",
        "sku": "cc789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1760000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a cc789Uv20236 preset when built for graphql`, () => {
    const cc789Uv20236PresetGraphql =
      cc789Uv20236().buildGraphql<TStandalonePriceDraft>();
    expect(cc789Uv20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2023-6",
        "sku": "cc789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1760000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
