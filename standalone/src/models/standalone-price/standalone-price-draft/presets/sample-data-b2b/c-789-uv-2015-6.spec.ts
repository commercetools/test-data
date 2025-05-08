import type { TStandalonePriceDraft } from '../../../types';
import c789Uv20156 from './c-789-uv-2015-6';

describe(`with c789Uv20156 preset`, () => {
  it(`should return a c789Uv20156 preset`, () => {
    const c789Uv20156Preset = c789Uv20156().build<TStandalonePriceDraft>();
    expect(c789Uv20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2015-6",
        "sku": "c789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 960000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a c789Uv20156 preset when built for graphql`, () => {
    const c789Uv20156PresetGraphql =
      c789Uv20156().buildGraphql<TStandalonePriceDraft>();
    expect(c789Uv20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2015-6",
        "sku": "c789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 960000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
