import type { TStandalonePriceDraft } from '../../../types';
import jj234Wx20157 from './jj-234-wx-2015-7';

describe(`with jj234Wx20157 preset`, () => {
  it(`should return a jj234Wx20157 preset`, () => {
    const jj234Wx20157Preset = jj234Wx20157().build<TStandalonePriceDraft>();
    expect(jj234Wx20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2015-7",
        "recurrencePolicy": undefined,
        "sku": "jj234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a jj234Wx20157 preset when built for graphql`, () => {
    const jj234Wx20157PresetGraphql =
      jj234Wx20157().buildGraphql<TStandalonePriceDraft>();
    expect(jj234Wx20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2015-7",
        "recurrencePolicy": undefined,
        "sku": "jj234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
