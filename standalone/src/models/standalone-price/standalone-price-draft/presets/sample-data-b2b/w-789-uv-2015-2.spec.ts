import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20152 from './w-789-uv-2015-2';

describe(`with w789Uv20152 preset`, () => {
  it(`should return a w789Uv20152 preset`, () => {
    const w789Uv20152Preset = w789Uv20152().build<TStandalonePriceDraft>();
    expect(w789Uv20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2015-2",
        "sku": "w789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2970000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a w789Uv20152 preset when built for graphql`, () => {
    const w789Uv20152PresetGraphql =
      w789Uv20152().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2015-2",
        "sku": "w789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2970000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
