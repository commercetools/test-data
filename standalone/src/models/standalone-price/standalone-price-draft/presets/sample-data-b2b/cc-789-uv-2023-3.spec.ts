import type { TStandalonePriceDraft } from '../../../types';
import cc789Uv20233 from './cc-789-uv-2023-3';

describe(`with cc789Uv20233 preset`, () => {
  it(`should return a cc789Uv20233 preset`, () => {
    const cc789Uv20233Preset = cc789Uv20233().build<TStandalonePriceDraft>();
    expect(cc789Uv20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2023-3",
        "recurrencePolicy": undefined,
        "sku": "cc789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3388000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a cc789Uv20233 preset when built for graphql`, () => {
    const cc789Uv20233PresetGraphql =
      cc789Uv20233().buildGraphql<TStandalonePriceDraft>();
    expect(cc789Uv20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2023-3",
        "recurrencePolicy": undefined,
        "sku": "cc789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3388000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
