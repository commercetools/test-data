import type { TStandalonePriceDraft } from '../../../types';
import c789Uv20192 from './c-789-uv-2019-2';

describe(`with c789Uv20192 preset`, () => {
  it(`should return a c789Uv20192 preset`, () => {
    const c789Uv20192Preset = c789Uv20192().build<TStandalonePriceDraft>();
    expect(c789Uv20192Preset).toMatchInlineSnapshot(`
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
        "key": "c789-uv-2019-2",
        "sku": "c789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a c789Uv20192 preset when built for graphql`, () => {
    const c789Uv20192PresetGraphql =
      c789Uv20192().buildGraphql<TStandalonePriceDraft>();
    expect(c789Uv20192PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "c789-uv-2019-2",
        "sku": "c789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
