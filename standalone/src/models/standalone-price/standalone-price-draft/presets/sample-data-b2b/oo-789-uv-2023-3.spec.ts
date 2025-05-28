import type { TStandalonePriceDraft } from '../../../types';
import oo789Uv20233 from './oo-789-uv-2023-3';

describe(`with oo789Uv20233 preset`, () => {
  it(`should return a oo789Uv20233 preset`, () => {
    const oo789Uv20233Preset = oo789Uv20233().build<TStandalonePriceDraft>();
    expect(oo789Uv20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2023-3",
        "recurrencePolicy": undefined,
        "sku": "oo789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3850000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a oo789Uv20233 preset when built for graphql`, () => {
    const oo789Uv20233PresetGraphql =
      oo789Uv20233().buildGraphql<TStandalonePriceDraft>();
    expect(oo789Uv20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2023-3",
        "recurrencePolicy": undefined,
        "sku": "oo789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3850000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
