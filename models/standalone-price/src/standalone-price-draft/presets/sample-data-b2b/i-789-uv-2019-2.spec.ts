import type { TStandalonePriceDraft } from '../../../types';
import i789Uv20192 from './i-789-uv-2019-2';

describe(`with i789Uv20192 preset`, () => {
  it(`should return a i789Uv20192 preset`, () => {
    const i789Uv20192Preset = i789Uv20192().build<TStandalonePriceDraft>();
    expect(i789Uv20192Preset).toMatchInlineSnapshot(`
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
        "key": "i789-uv-2019-2",
        "sku": "i789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1540000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a i789Uv20192 preset when built for graphql`, () => {
    const i789Uv20192PresetGraphql =
      i789Uv20192().buildGraphql<TStandalonePriceDraft>();
    expect(i789Uv20192PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "i789-uv-2019-2",
        "sku": "i789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1540000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
