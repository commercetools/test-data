import type { TStandalonePriceDraft } from '../../../types';
import i789Uv20233 from './i-789-uv-2023-3';

describe(`with i789Uv20233 preset`, () => {
  it(`should return a i789Uv20233 preset`, () => {
    const i789Uv20233Preset = i789Uv20233().build<TStandalonePriceDraft>();
    expect(i789Uv20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2023-3",
        "recurrencePolicy": undefined,
        "sku": "i789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2156000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a i789Uv20233 preset when built for graphql`, () => {
    const i789Uv20233PresetGraphql =
      i789Uv20233().buildGraphql<TStandalonePriceDraft>();
    expect(i789Uv20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2023-3",
        "recurrencePolicy": undefined,
        "sku": "i789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2156000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
