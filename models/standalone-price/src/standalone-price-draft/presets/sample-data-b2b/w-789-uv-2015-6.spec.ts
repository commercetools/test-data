import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20156 from './w-789-uv-2015-6';

describe(`with w789Uv20156 preset`, () => {
  it(`should return a w789Uv20156 preset`, () => {
    const w789Uv20156Preset = w789Uv20156().build<TStandalonePriceDraft>();
    expect(w789Uv20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2015-6",
        "sku": "w789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2400000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a w789Uv20156 preset when built for graphql`, () => {
    const w789Uv20156PresetGraphql =
      w789Uv20156().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2015-6",
        "sku": "w789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2400000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
