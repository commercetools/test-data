import type { TStandalonePriceDraft } from '../../../types';
import r123Ts20236 from './r-123-ts-2023-6';

describe(`with r123Ts20236 preset`, () => {
  it(`should return a r123Ts20236 preset`, () => {
    const r123Ts20236Preset = r123Ts20236().build<TStandalonePriceDraft>();
    expect(r123Ts20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2023-6",
        "sku": "r123-ts-2023",
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

  it(`should return a r123Ts20236 preset when built for graphql`, () => {
    const r123Ts20236PresetGraphql =
      r123Ts20236().buildGraphql<TStandalonePriceDraft>();
    expect(r123Ts20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2023-6",
        "sku": "r123-ts-2023",
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
