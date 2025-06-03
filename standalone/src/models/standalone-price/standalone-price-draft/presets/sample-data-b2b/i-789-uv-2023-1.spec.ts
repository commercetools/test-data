import type { TStandalonePriceDraft } from '../../../types';
import i789Uv20231 from './i-789-uv-2023-1';

describe(`with i789Uv20231 preset`, () => {
  it(`should return a i789Uv20231 preset`, () => {
    const i789Uv20231Preset = i789Uv20231().build<TStandalonePriceDraft>();
    expect(i789Uv20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2023-1",
        "recurrencePolicy": undefined,
        "sku": "i789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1848000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a i789Uv20231 preset when built for graphql`, () => {
    const i789Uv20231PresetGraphql =
      i789Uv20231().buildGraphql<TStandalonePriceDraft>();
    expect(i789Uv20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2023-1",
        "recurrencePolicy": undefined,
        "sku": "i789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1848000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
