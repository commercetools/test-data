import type { TStandalonePriceDraft } from '../../../types';
import x234Wx20235 from './x-234-wx-2023-5';

describe(`with x234Wx20235 preset`, () => {
  it(`should return a x234Wx20235 preset`, () => {
    const x234Wx20235Preset = x234Wx20235().build<TStandalonePriceDraft>();
    expect(x234Wx20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2023-5",
        "recurrencePolicy": undefined,
        "sku": "x234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1800000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a x234Wx20235 preset when built for graphql`, () => {
    const x234Wx20235PresetGraphql =
      x234Wx20235().buildGraphql<TStandalonePriceDraft>();
    expect(x234Wx20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2023-5",
        "recurrencePolicy": undefined,
        "sku": "x234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1800000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
