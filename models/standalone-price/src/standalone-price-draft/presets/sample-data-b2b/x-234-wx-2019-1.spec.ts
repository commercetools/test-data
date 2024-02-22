import type { TStandalonePriceDraft } from '../../../types';
import x234Wx20191 from './x-234-wx-2019-1';

describe(`with x234Wx20191 preset`, () => {
  it(`should return a x234Wx20191 preset`, () => {
    const x234Wx20191Preset = x234Wx20191().build<TStandalonePriceDraft>();
    expect(x234Wx20191Preset).toMatchInlineSnapshot(`
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
        "key": "x234-wx-2019-1",
        "sku": "x234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2420000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a x234Wx20191 preset when built for graphql`, () => {
    const x234Wx20191PresetGraphql =
      x234Wx20191().buildGraphql<TStandalonePriceDraft>();
    expect(x234Wx20191PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "x234-wx-2019-1",
        "sku": "x234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2420000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
