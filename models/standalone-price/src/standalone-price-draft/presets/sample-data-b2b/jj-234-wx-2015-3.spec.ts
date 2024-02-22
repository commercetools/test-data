import type { TStandalonePriceDraft } from '../../../types';
import jj234Wx20153 from './jj-234-wx-2015-3';

describe(`with jj234Wx20153 preset`, () => {
  it(`should return a jj234Wx20153 preset`, () => {
    const jj234Wx20153Preset = jj234Wx20153().build<TStandalonePriceDraft>();
    expect(jj234Wx20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2015-3",
        "sku": "jj234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a jj234Wx20153 preset when built for graphql`, () => {
    const jj234Wx20153PresetGraphql =
      jj234Wx20153().buildGraphql<TStandalonePriceDraft>();
    expect(jj234Wx20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2015-3",
        "sku": "jj234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
