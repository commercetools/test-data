import type { TStandalonePriceDraft } from '../../../types';
import oo789Uv20152 from './oo-789-uv-2015-2';

describe(`with oo789Uv20152 preset`, () => {
  it(`should return a oo789Uv20152 preset`, () => {
    const oo789Uv20152Preset = oo789Uv20152().build<TStandalonePriceDraft>();
    expect(oo789Uv20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2015-2",
        "sku": "oo789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2475000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a oo789Uv20152 preset when built for graphql`, () => {
    const oo789Uv20152PresetGraphql =
      oo789Uv20152().buildGraphql<TStandalonePriceDraft>();
    expect(oo789Uv20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2015-2",
        "sku": "oo789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2475000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
