import type { TStandalonePriceDraft } from '../../../types';
import i789Uv20156 from './i-789-uv-2015-6';

describe(`with i789Uv20156 preset`, () => {
  it(`should return a i789Uv20156 preset`, () => {
    const i789Uv20156Preset = i789Uv20156().build<TStandalonePriceDraft>();
    expect(i789Uv20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2015-6",
        "sku": "i789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1120000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a i789Uv20156 preset when built for graphql`, () => {
    const i789Uv20156PresetGraphql =
      i789Uv20156().buildGraphql<TStandalonePriceDraft>();
    expect(i789Uv20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2015-6",
        "sku": "i789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1120000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
