import type { TStandalonePriceDraft } from '../../../types';
import x234Wx20153 from './x-234-wx-2015-3';

describe(`with x234Wx20153 preset`, () => {
  it(`should return a x234Wx20153 preset`, () => {
    const x234Wx20153Preset = x234Wx20153().build<TStandalonePriceDraft>();
    expect(x234Wx20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2015-3",
        "sku": "x234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2640000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a x234Wx20153 preset when built for graphql`, () => {
    const x234Wx20153PresetGraphql =
      x234Wx20153().buildGraphql<TStandalonePriceDraft>();
    expect(x234Wx20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2015-3",
        "sku": "x234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2640000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
