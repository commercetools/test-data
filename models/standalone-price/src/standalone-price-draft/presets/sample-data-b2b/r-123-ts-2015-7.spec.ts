import type { TStandalonePriceDraft } from '../../../types';
import r123Ts20157 from './r-123-ts-2015-7';

describe(`with r123Ts20157 preset`, () => {
  it(`should return a r123Ts20157 preset`, () => {
    const r123Ts20157Preset = r123Ts20157().build<TStandalonePriceDraft>();
    expect(r123Ts20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2015-7",
        "sku": "r123-ts-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1140000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a r123Ts20157 preset when built for graphql`, () => {
    const r123Ts20157PresetGraphql =
      r123Ts20157().buildGraphql<TStandalonePriceDraft>();
    expect(r123Ts20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2015-7",
        "sku": "r123-ts-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1140000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
