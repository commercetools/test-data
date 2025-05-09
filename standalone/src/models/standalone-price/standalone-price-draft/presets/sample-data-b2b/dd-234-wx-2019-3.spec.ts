import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20193 from './dd-234-wx-2019-3';

describe(`with dd234Wx20193 preset`, () => {
  it(`should return a dd234Wx20193 preset`, () => {
    const dd234Wx20193Preset = dd234Wx20193().build<TStandalonePriceDraft>();
    expect(dd234Wx20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2019-3",
        "sku": "dd234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2145000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a dd234Wx20193 preset when built for graphql`, () => {
    const dd234Wx20193PresetGraphql =
      dd234Wx20193().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2019-3",
        "sku": "dd234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2145000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
