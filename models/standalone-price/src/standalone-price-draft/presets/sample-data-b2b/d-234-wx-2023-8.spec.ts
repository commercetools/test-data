import type { TStandalonePriceDraft } from '../../../types';
import d234Wx20238 from './d-234-wx-2023-8';

describe(`with d234Wx20238 preset`, () => {
  it(`should return a d234Wx20238 preset`, () => {
    const d234Wx20238Preset = d234Wx20238().build<TStandalonePriceDraft>();
    expect(d234Wx20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2023-8",
        "sku": "d234-wx-2023",
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

  it(`should return a d234Wx20238 preset when built for graphql`, () => {
    const d234Wx20238PresetGraphql =
      d234Wx20238().buildGraphql<TStandalonePriceDraft>();
    expect(d234Wx20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2023-8",
        "sku": "d234-wx-2023",
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
