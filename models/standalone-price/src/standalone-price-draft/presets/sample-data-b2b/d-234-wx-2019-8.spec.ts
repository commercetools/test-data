import type { TStandalonePriceDraft } from '../../../types';
import d234Wx20198 from './d-234-wx-2019-8';

describe(`with d234Wx20198 preset`, () => {
  it(`should return a d234Wx20198 preset`, () => {
    const d234Wx20198Preset = d234Wx20198().build<TStandalonePriceDraft>();
    expect(d234Wx20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2019-8",
        "sku": "d234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 990001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a d234Wx20198 preset when built for graphql`, () => {
    const d234Wx20198PresetGraphql =
      d234Wx20198().buildGraphql<TStandalonePriceDraft>();
    expect(d234Wx20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2019-8",
        "sku": "d234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 990001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
