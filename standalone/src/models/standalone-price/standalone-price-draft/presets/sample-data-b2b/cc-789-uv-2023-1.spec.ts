import type { TStandalonePriceDraft } from '../../../types';
import cc789Uv20231 from './cc-789-uv-2023-1';

describe(`with cc789Uv20231 preset`, () => {
  it(`should return a cc789Uv20231 preset`, () => {
    const cc789Uv20231Preset = cc789Uv20231().build<TStandalonePriceDraft>();
    expect(cc789Uv20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2023-1",
        "recurrencePolicy": undefined,
        "sku": "cc789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2904000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a cc789Uv20231 preset when built for graphql`, () => {
    const cc789Uv20231PresetGraphql =
      cc789Uv20231().buildGraphql<TStandalonePriceDraft>();
    expect(cc789Uv20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2023-1",
        "recurrencePolicy": undefined,
        "sku": "cc789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2904000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
