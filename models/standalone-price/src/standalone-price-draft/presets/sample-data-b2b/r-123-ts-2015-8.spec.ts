import type { TStandalonePriceDraft } from '../../../types';
import r123Ts20158 from './r-123-ts-2015-8';

describe(`with r123Ts20158 preset`, () => {
  it(`should return a r123Ts20158 preset`, () => {
    const r123Ts20158Preset = r123Ts20158().build<TStandalonePriceDraft>();
    expect(r123Ts20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2015-8",
        "sku": "r123-ts-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1045001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a r123Ts20158 preset when built for graphql`, () => {
    const r123Ts20158PresetGraphql =
      r123Ts20158().buildGraphql<TStandalonePriceDraft>();
    expect(r123Ts20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2015-8",
        "sku": "r123-ts-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1045001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
