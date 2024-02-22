import type { TStandalonePriceDraft } from '../../../types';
import r123Ts20152 from './r-123-ts-2015-2';

describe(`with r123Ts20152 preset`, () => {
  it(`should return a r123Ts20152 preset`, () => {
    const r123Ts20152Preset = r123Ts20152().build<TStandalonePriceDraft>();
    expect(r123Ts20152Preset).toMatchInlineSnapshot(`
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
        "key": "r123-ts-2015-2",
        "sku": "r123-ts-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 940500,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a r123Ts20152 preset when built for graphql`, () => {
    const r123Ts20152PresetGraphql =
      r123Ts20152().buildGraphql<TStandalonePriceDraft>();
    expect(r123Ts20152PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "r123-ts-2015-2",
        "sku": "r123-ts-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 940500,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
