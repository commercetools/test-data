import type { TStandalonePriceDraft } from '../../../types';
import d234Wx20191 from './d-234-wx-2019-1';

describe(`with d234Wx20191 preset`, () => {
  it(`should return a d234Wx20191 preset`, () => {
    const d234Wx20191Preset = d234Wx20191().build<TStandalonePriceDraft>();
    expect(d234Wx20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2019-1",
        "sku": "d234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1089001,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a d234Wx20191 preset when built for graphql`, () => {
    const d234Wx20191PresetGraphql =
      d234Wx20191().buildGraphql<TStandalonePriceDraft>();
    expect(d234Wx20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2019-1",
        "sku": "d234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1089001,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
