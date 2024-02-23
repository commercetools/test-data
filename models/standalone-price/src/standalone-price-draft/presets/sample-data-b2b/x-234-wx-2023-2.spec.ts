import type { TStandalonePriceDraft } from '../../../types';
import x234Wx20232 from './x-234-wx-2023-2';

describe(`with x234Wx20232 preset`, () => {
  it(`should return a x234Wx20232 preset`, () => {
    const x234Wx20232Preset = x234Wx20232().build<TStandalonePriceDraft>();
    expect(x234Wx20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2023-2",
        "sku": "x234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2420000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a x234Wx20232 preset when built for graphql`, () => {
    const x234Wx20232PresetGraphql =
      x234Wx20232().buildGraphql<TStandalonePriceDraft>();
    expect(x234Wx20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2023-2",
        "sku": "x234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2420000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
