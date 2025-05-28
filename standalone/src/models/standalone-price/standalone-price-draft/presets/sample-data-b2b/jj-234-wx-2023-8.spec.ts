import type { TStandalonePriceDraft } from '../../../types';
import jj234Wx20238 from './jj-234-wx-2023-8';

describe(`with jj234Wx20238 preset`, () => {
  it(`should return a jj234Wx20238 preset`, () => {
    const jj234Wx20238Preset = jj234Wx20238().build<TStandalonePriceDraft>();
    expect(jj234Wx20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2023-8",
        "recurrencePolicy": undefined,
        "sku": "jj234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a jj234Wx20238 preset when built for graphql`, () => {
    const jj234Wx20238PresetGraphql =
      jj234Wx20238().buildGraphql<TStandalonePriceDraft>();
    expect(jj234Wx20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2023-8",
        "recurrencePolicy": undefined,
        "sku": "jj234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
