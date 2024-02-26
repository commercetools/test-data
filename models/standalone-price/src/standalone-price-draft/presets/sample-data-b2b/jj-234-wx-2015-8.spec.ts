import type { TStandalonePriceDraft } from '../../../types';
import jj234Wx20158 from './jj-234-wx-2015-8';

describe(`with jj234Wx20158 preset`, () => {
  it(`should return a jj234Wx20158 preset`, () => {
    const jj234Wx20158Preset = jj234Wx20158().build<TStandalonePriceDraft>();
    expect(jj234Wx20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2015-8",
        "sku": "jj234-wx-2015",
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

  it(`should return a jj234Wx20158 preset when built for graphql`, () => {
    const jj234Wx20158PresetGraphql =
      jj234Wx20158().buildGraphql<TStandalonePriceDraft>();
    expect(jj234Wx20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2015-8",
        "sku": "jj234-wx-2015",
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
