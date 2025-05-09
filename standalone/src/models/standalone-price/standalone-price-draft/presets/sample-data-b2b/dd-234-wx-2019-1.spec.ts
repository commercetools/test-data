import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20191 from './dd-234-wx-2019-1';

describe(`with dd234Wx20191 preset`, () => {
  it(`should return a dd234Wx20191 preset`, () => {
    const dd234Wx20191Preset = dd234Wx20191().build<TStandalonePriceDraft>();
    expect(dd234Wx20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2019-1",
        "sku": "dd234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1815001,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a dd234Wx20191 preset when built for graphql`, () => {
    const dd234Wx20191PresetGraphql =
      dd234Wx20191().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2019-1",
        "sku": "dd234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1815001,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
