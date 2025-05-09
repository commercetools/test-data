import type { TStandalonePriceDraft } from '../../../types';
import cc789Uv20151 from './cc-789-uv-2015-1';

describe(`with cc789Uv20151 preset`, () => {
  it(`should return a cc789Uv20151 preset`, () => {
    const cc789Uv20151Preset = cc789Uv20151().build<TStandalonePriceDraft>();
    expect(cc789Uv20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2015-1",
        "sku": "cc789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2420000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a cc789Uv20151 preset when built for graphql`, () => {
    const cc789Uv20151PresetGraphql =
      cc789Uv20151().buildGraphql<TStandalonePriceDraft>();
    expect(cc789Uv20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2015-1",
        "sku": "cc789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2420000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
