import type { TStandalonePriceDraft } from '../../../types';
import x234Wx20193 from './x-234-wx-2019-3';

describe(`with x234Wx20193 preset`, () => {
  it(`should return a x234Wx20193 preset`, () => {
    const x234Wx20193Preset = x234Wx20193().build<TStandalonePriceDraft>();
    expect(x234Wx20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2019-3",
        "sku": "x234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2860000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a x234Wx20193 preset when built for graphql`, () => {
    const x234Wx20193PresetGraphql =
      x234Wx20193().buildGraphql<TStandalonePriceDraft>();
    expect(x234Wx20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2019-3",
        "sku": "x234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2860000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
