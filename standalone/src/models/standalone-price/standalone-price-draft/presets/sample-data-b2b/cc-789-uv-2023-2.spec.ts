import type { TStandalonePriceDraft } from '../../../types';
import cc789Uv20232 from './cc-789-uv-2023-2';

describe(`with cc789Uv20232 preset`, () => {
  it(`should return a cc789Uv20232 preset`, () => {
    const cc789Uv20232Preset = cc789Uv20232().build<TStandalonePriceDraft>();
    expect(cc789Uv20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2023-2",
        "sku": "cc789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2662000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a cc789Uv20232 preset when built for graphql`, () => {
    const cc789Uv20232PresetGraphql =
      cc789Uv20232().buildGraphql<TStandalonePriceDraft>();
    expect(cc789Uv20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2023-2",
        "sku": "cc789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2662000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
