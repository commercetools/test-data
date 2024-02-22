import type { TStandalonePriceDraft } from '../../../types';
import x234Wx20156 from './x-234-wx-2015-6';

describe(`with x234Wx20156 preset`, () => {
  it(`should return a x234Wx20156 preset`, () => {
    const x234Wx20156Preset = x234Wx20156().build<TStandalonePriceDraft>();
    expect(x234Wx20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2015-6",
        "sku": "x234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1600000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a x234Wx20156 preset when built for graphql`, () => {
    const x234Wx20156PresetGraphql =
      x234Wx20156().buildGraphql<TStandalonePriceDraft>();
    expect(x234Wx20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2015-6",
        "sku": "x234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1600000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
