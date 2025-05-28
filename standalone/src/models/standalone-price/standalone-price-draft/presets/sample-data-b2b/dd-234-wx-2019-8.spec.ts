import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20198 from './dd-234-wx-2019-8';

describe(`with dd234Wx20198 preset`, () => {
  it(`should return a dd234Wx20198 preset`, () => {
    const dd234Wx20198Preset = dd234Wx20198().build<TStandalonePriceDraft>();
    expect(dd234Wx20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2019-8",
        "recurrencePolicy": undefined,
        "sku": "dd234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1650001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a dd234Wx20198 preset when built for graphql`, () => {
    const dd234Wx20198PresetGraphql =
      dd234Wx20198().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2019-8",
        "recurrencePolicy": undefined,
        "sku": "dd234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1650001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
