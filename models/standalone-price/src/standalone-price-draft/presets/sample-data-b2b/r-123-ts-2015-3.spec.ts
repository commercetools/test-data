import type { TStandalonePriceDraft } from '../../../types';
import r123Ts20153 from './r-123-ts-2015-3';

describe(`with r123Ts20153 preset`, () => {
  it(`should return a r123Ts20153 preset`, () => {
    const r123Ts20153Preset = r123Ts20153().build<TStandalonePriceDraft>();
    expect(r123Ts20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2015-3",
        "sku": "r123-ts-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1254000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a r123Ts20153 preset when built for graphql`, () => {
    const r123Ts20153PresetGraphql =
      r123Ts20153().buildGraphql<TStandalonePriceDraft>();
    expect(r123Ts20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2015-3",
        "sku": "r123-ts-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1254000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
