import type { TStandalonePriceDraft } from '../../../types';
import oo789Uv20153 from './oo-789-uv-2015-3';

describe(`with oo789Uv20153 preset`, () => {
  it(`should return a oo789Uv20153 preset`, () => {
    const oo789Uv20153Preset = oo789Uv20153().build<TStandalonePriceDraft>();
    expect(oo789Uv20153Preset).toMatchInlineSnapshot(`
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
        "key": "oo789-uv-2015-3",
        "sku": "oo789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a oo789Uv20153 preset when built for graphql`, () => {
    const oo789Uv20153PresetGraphql =
      oo789Uv20153().buildGraphql<TStandalonePriceDraft>();
    expect(oo789Uv20153PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "oo789-uv-2015-3",
        "sku": "oo789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
