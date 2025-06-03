import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20197 from './dd-234-wx-2019-7';

describe(`with dd234Wx20197 preset`, () => {
  it(`should return a dd234Wx20197 preset`, () => {
    const dd234Wx20197Preset = dd234Wx20197().build<TStandalonePriceDraft>();
    expect(dd234Wx20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2019-7",
        "recurrencePolicy": undefined,
        "sku": "dd234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1800000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a dd234Wx20197 preset when built for graphql`, () => {
    const dd234Wx20197PresetGraphql =
      dd234Wx20197().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2019-7",
        "recurrencePolicy": undefined,
        "sku": "dd234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1800000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
