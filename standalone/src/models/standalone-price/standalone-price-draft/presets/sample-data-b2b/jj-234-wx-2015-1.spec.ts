import type { TStandalonePriceDraft } from '../../../types';
import jj234Wx20151 from './jj-234-wx-2015-1';

describe(`with jj234Wx20151 preset`, () => {
  it(`should return a jj234Wx20151 preset`, () => {
    const jj234Wx20151Preset = jj234Wx20151().build<TStandalonePriceDraft>();
    expect(jj234Wx20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2015-1",
        "sku": "jj234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a jj234Wx20151 preset when built for graphql`, () => {
    const jj234Wx20151PresetGraphql =
      jj234Wx20151().buildGraphql<TStandalonePriceDraft>();
    expect(jj234Wx20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2015-1",
        "sku": "jj234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
