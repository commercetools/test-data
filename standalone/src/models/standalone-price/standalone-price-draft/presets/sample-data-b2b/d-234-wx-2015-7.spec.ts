import type { TStandalonePriceDraft } from '../../../types';
import d234Wx20157 from './d-234-wx-2015-7';

describe(`with d234Wx20157 preset`, () => {
  it(`should return a d234Wx20157 preset`, () => {
    const d234Wx20157Preset = d234Wx20157().build<TStandalonePriceDraft>();
    expect(d234Wx20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2015-7",
        "sku": "d234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1080000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a d234Wx20157 preset when built for graphql`, () => {
    const d234Wx20157PresetGraphql =
      d234Wx20157().buildGraphql<TStandalonePriceDraft>();
    expect(d234Wx20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2015-7",
        "sku": "d234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1080000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
