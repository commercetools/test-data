import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20231 from './dd-234-wx-2023-1';

describe(`with dd234Wx20231 preset`, () => {
  it(`should return a dd234Wx20231 preset`, () => {
    const dd234Wx20231Preset = dd234Wx20231().build<TStandalonePriceDraft>();
    expect(dd234Wx20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2023-1",
        "recurrencePolicy": undefined,
        "sku": "dd234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1980000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a dd234Wx20231 preset when built for graphql`, () => {
    const dd234Wx20231PresetGraphql =
      dd234Wx20231().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2023-1",
        "recurrencePolicy": undefined,
        "sku": "dd234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1980000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
