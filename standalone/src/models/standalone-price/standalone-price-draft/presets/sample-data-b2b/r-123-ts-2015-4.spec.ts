import type { TStandalonePriceDraft } from '../../../types';
import r123Ts20154 from './r-123-ts-2015-4';

describe(`with r123Ts20154 preset`, () => {
  it(`should return a r123Ts20154 preset`, () => {
    const r123Ts20154Preset = r123Ts20154().build<TStandalonePriceDraft>();
    expect(r123Ts20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2015-4",
        "sku": "r123-ts-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 950000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a r123Ts20154 preset when built for graphql`, () => {
    const r123Ts20154PresetGraphql =
      r123Ts20154().buildGraphql<TStandalonePriceDraft>();
    expect(r123Ts20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2015-4",
        "sku": "r123-ts-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 950000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
