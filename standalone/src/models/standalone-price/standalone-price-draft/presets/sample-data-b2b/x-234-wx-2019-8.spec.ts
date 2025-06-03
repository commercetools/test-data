import type { TStandalonePriceDraft } from '../../../types';
import x234Wx20198 from './x-234-wx-2019-8';

describe(`with x234Wx20198 preset`, () => {
  it(`should return a x234Wx20198 preset`, () => {
    const x234Wx20198Preset = x234Wx20198().build<TStandalonePriceDraft>();
    expect(x234Wx20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2019-8",
        "recurrencePolicy": undefined,
        "sku": "x234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2200000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a x234Wx20198 preset when built for graphql`, () => {
    const x234Wx20198PresetGraphql =
      x234Wx20198().buildGraphql<TStandalonePriceDraft>();
    expect(x234Wx20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2019-8",
        "recurrencePolicy": undefined,
        "sku": "x234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2200000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
