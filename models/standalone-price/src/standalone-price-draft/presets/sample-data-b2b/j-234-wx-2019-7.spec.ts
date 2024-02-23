import type { TStandalonePriceDraft } from '../../../types';
import j234Wx20197 from './j-234-wx-2019-7';

describe(`with j234Wx20197 preset`, () => {
  it(`should return a j234Wx20197 preset`, () => {
    const j234Wx20197Preset = j234Wx20197().build<TStandalonePriceDraft>();
    expect(j234Wx20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "j234-wx-2019-7",
        "sku": "j234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a j234Wx20197 preset when built for graphql`, () => {
    const j234Wx20197PresetGraphql =
      j234Wx20197().buildGraphql<TStandalonePriceDraft>();
    expect(j234Wx20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "j234-wx-2019-7",
        "sku": "j234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
