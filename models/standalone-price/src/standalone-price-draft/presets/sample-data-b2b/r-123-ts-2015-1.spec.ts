import type { TStandalonePriceDraft } from '../../../types';
import r123Ts20151 from './r-123-ts-2015-1';

describe(`with r123Ts20151 preset`, () => {
  it(`should return a r123Ts20151 preset`, () => {
    const r123Ts20151Preset = r123Ts20151().build<TStandalonePriceDraft>();
    expect(r123Ts20151Preset).toMatchInlineSnapshot(`
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
        "key": "r123-ts-2015-1",
        "sku": "r123-ts-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1045000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a r123Ts20151 preset when built for graphql`, () => {
    const r123Ts20151PresetGraphql =
      r123Ts20151().buildGraphql<TStandalonePriceDraft>();
    expect(r123Ts20151PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "r123-ts-2015-1",
        "sku": "r123-ts-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1045000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
