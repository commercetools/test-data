import type { TStandalonePriceDraft } from '../../../types';
import x234Wx20233 from './x-234-wx-2023-3';

describe(`with x234Wx20233 preset`, () => {
  it(`should return a x234Wx20233 preset`, () => {
    const x234Wx20233Preset = x234Wx20233().build<TStandalonePriceDraft>();
    expect(x234Wx20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2023-3",
        "recurrencePolicy": undefined,
        "sku": "x234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3080000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a x234Wx20233 preset when built for graphql`, () => {
    const x234Wx20233PresetGraphql =
      x234Wx20233().buildGraphql<TStandalonePriceDraft>();
    expect(x234Wx20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2023-3",
        "recurrencePolicy": undefined,
        "sku": "x234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3080000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
