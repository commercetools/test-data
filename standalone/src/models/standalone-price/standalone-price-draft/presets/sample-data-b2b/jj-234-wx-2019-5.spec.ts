import type { TStandalonePriceDraft } from '../../../types';
import jj234Wx20195 from './jj-234-wx-2019-5';

describe(`with jj234Wx20195 preset`, () => {
  it(`should return a jj234Wx20195 preset`, () => {
    const jj234Wx20195Preset = jj234Wx20195().build<TStandalonePriceDraft>();
    expect(jj234Wx20195Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2019-5",
        "sku": "jj234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2250000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a jj234Wx20195 preset when built for graphql`, () => {
    const jj234Wx20195PresetGraphql =
      jj234Wx20195().buildGraphql<TStandalonePriceDraft>();
    expect(jj234Wx20195PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2019-5",
        "sku": "jj234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2250000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
