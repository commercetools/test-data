import type { TStandalonePriceDraft } from '../../../types';
import x234Wx20197 from './x-234-wx-2019-7';

describe(`with x234Wx20197 preset`, () => {
  it(`should return a x234Wx20197 preset`, () => {
    const x234Wx20197Preset = x234Wx20197().build<TStandalonePriceDraft>();
    expect(x234Wx20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2019-7",
        "sku": "x234-wx-2019",
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

  it(`should return a x234Wx20197 preset when built for graphql`, () => {
    const x234Wx20197PresetGraphql =
      x234Wx20197().buildGraphql<TStandalonePriceDraft>();
    expect(x234Wx20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2019-7",
        "sku": "x234-wx-2019",
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
