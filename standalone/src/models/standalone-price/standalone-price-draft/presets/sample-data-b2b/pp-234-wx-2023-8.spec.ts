import type { TStandalonePriceDraft } from '../../../types';
import pp234Wx20238 from './pp-234-wx-2023-8';

describe(`with pp234Wx20238 preset`, () => {
  it(`should return a pp234Wx20238 preset`, () => {
    const pp234Wx20238Preset = pp234Wx20238().build<TStandalonePriceDraft>();
    expect(pp234Wx20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2023-8",
        "recurrencePolicy": undefined,
        "sku": "pp234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2200000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a pp234Wx20238 preset when built for graphql`, () => {
    const pp234Wx20238PresetGraphql =
      pp234Wx20238().buildGraphql<TStandalonePriceDraft>();
    expect(pp234Wx20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2023-8",
        "recurrencePolicy": undefined,
        "sku": "pp234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2200000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
