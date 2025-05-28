import type { TStandalonePriceDraft } from '../../../types';
import oo789Uv20232 from './oo-789-uv-2023-2';

describe(`with oo789Uv20232 preset`, () => {
  it(`should return a oo789Uv20232 preset`, () => {
    const oo789Uv20232Preset = oo789Uv20232().build<TStandalonePriceDraft>();
    expect(oo789Uv20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2023-2",
        "recurrencePolicy": undefined,
        "sku": "oo789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3025000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a oo789Uv20232 preset when built for graphql`, () => {
    const oo789Uv20232PresetGraphql =
      oo789Uv20232().buildGraphql<TStandalonePriceDraft>();
    expect(oo789Uv20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2023-2",
        "recurrencePolicy": undefined,
        "sku": "oo789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3025000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
