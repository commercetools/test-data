import type { TStandalonePriceDraft } from '../../../types';
import pp234Wx20197 from './pp-234-wx-2019-7';

describe(`with pp234Wx20197 preset`, () => {
  it(`should return a pp234Wx20197 preset`, () => {
    const pp234Wx20197Preset = pp234Wx20197().build<TStandalonePriceDraft>();
    expect(pp234Wx20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2019-7",
        "sku": "pp234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2400000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a pp234Wx20197 preset when built for graphql`, () => {
    const pp234Wx20197PresetGraphql =
      pp234Wx20197().buildGraphql<TStandalonePriceDraft>();
    expect(pp234Wx20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2019-7",
        "sku": "pp234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2400000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
