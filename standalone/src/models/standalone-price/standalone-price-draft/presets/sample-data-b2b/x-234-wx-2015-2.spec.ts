import type { TStandalonePriceDraft } from '../../../types';
import x234Wx20152 from './x-234-wx-2015-2';

describe(`with x234Wx20152 preset`, () => {
  it(`should return a x234Wx20152 preset`, () => {
    const x234Wx20152Preset = x234Wx20152().build<TStandalonePriceDraft>();
    expect(x234Wx20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2015-2",
        "sku": "x234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1980000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a x234Wx20152 preset when built for graphql`, () => {
    const x234Wx20152PresetGraphql =
      x234Wx20152().buildGraphql<TStandalonePriceDraft>();
    expect(x234Wx20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2015-2",
        "sku": "x234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1980000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
