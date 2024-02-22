import type { TStandalonePriceDraft } from '../../../types';
import r123Ts20156 from './r-123-ts-2015-6';

describe(`with r123Ts20156 preset`, () => {
  it(`should return a r123Ts20156 preset`, () => {
    const r123Ts20156Preset = r123Ts20156().build<TStandalonePriceDraft>();
    expect(r123Ts20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2015-6",
        "sku": "r123-ts-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 760000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a r123Ts20156 preset when built for graphql`, () => {
    const r123Ts20156PresetGraphql =
      r123Ts20156().buildGraphql<TStandalonePriceDraft>();
    expect(r123Ts20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2015-6",
        "sku": "r123-ts-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 760000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
