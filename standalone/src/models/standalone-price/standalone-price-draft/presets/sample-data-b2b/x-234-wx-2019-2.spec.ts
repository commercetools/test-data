import type { TStandalonePriceDraft } from '../../../types';
import x234Wx20192 from './x-234-wx-2019-2';

describe(`with x234Wx20192 preset`, () => {
  it(`should return a x234Wx20192 preset`, () => {
    const x234Wx20192Preset = x234Wx20192().build<TStandalonePriceDraft>();
    expect(x234Wx20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2019-2",
        "sku": "x234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2200000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a x234Wx20192 preset when built for graphql`, () => {
    const x234Wx20192PresetGraphql =
      x234Wx20192().buildGraphql<TStandalonePriceDraft>();
    expect(x234Wx20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2019-2",
        "sku": "x234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2200000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
