import type { TStandalonePriceDraft } from '../../../types';
import cc789Uv20193 from './cc-789-uv-2019-3';

describe(`with cc789Uv20193 preset`, () => {
  it(`should return a cc789Uv20193 preset`, () => {
    const cc789Uv20193Preset = cc789Uv20193().build<TStandalonePriceDraft>();
    expect(cc789Uv20193Preset).toMatchInlineSnapshot(`
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
        "key": "cc789-uv-2019-3",
        "sku": "cc789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3146000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a cc789Uv20193 preset when built for graphql`, () => {
    const cc789Uv20193PresetGraphql =
      cc789Uv20193().buildGraphql<TStandalonePriceDraft>();
    expect(cc789Uv20193PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "cc789-uv-2019-3",
        "sku": "cc789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3146000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
