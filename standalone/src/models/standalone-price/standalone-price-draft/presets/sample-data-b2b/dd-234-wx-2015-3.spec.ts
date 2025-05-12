import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20153 from './dd-234-wx-2015-3';

describe(`with dd234Wx20153 preset`, () => {
  it(`should return a dd234Wx20153 preset`, () => {
    const dd234Wx20153Preset = dd234Wx20153().build<TStandalonePriceDraft>();
    expect(dd234Wx20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2015-3",
        "sku": "dd234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1980000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a dd234Wx20153 preset when built for graphql`, () => {
    const dd234Wx20153PresetGraphql =
      dd234Wx20153().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2015-3",
        "sku": "dd234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1980000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
