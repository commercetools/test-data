import type { TStandalonePriceDraft } from '../../../types';
import x234Wx20151 from './x-234-wx-2015-1';

describe(`with x234Wx20151 preset`, () => {
  it(`should return a x234Wx20151 preset`, () => {
    const x234Wx20151Preset = x234Wx20151().build<TStandalonePriceDraft>();
    expect(x234Wx20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2015-1",
        "sku": "x234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2200000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a x234Wx20151 preset when built for graphql`, () => {
    const x234Wx20151PresetGraphql =
      x234Wx20151().buildGraphql<TStandalonePriceDraft>();
    expect(x234Wx20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2015-1",
        "sku": "x234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2200000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
