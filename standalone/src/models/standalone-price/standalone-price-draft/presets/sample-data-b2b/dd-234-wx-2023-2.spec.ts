import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20232 from './dd-234-wx-2023-2';

describe(`with dd234Wx20232 preset`, () => {
  it(`should return a dd234Wx20232 preset`, () => {
    const dd234Wx20232Preset = dd234Wx20232().build<TStandalonePriceDraft>();
    expect(dd234Wx20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2023-2",
        "recurrencePolicy": undefined,
        "sku": "dd234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1815001,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a dd234Wx20232 preset when built for graphql`, () => {
    const dd234Wx20232PresetGraphql =
      dd234Wx20232().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2023-2",
        "recurrencePolicy": undefined,
        "sku": "dd234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1815001,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
