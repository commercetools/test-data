import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20153 from './w-789-uv-2015-3';

describe(`with w789Uv20153 preset`, () => {
  it(`should return a w789Uv20153 preset`, () => {
    const w789Uv20153Preset = w789Uv20153().build<TStandalonePriceDraft>();
    expect(w789Uv20153Preset).toMatchInlineSnapshot(`
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
        "key": "w789-uv-2015-3",
        "sku": "w789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3960000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a w789Uv20153 preset when built for graphql`, () => {
    const w789Uv20153PresetGraphql =
      w789Uv20153().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20153PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "w789-uv-2015-3",
        "sku": "w789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3960000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
