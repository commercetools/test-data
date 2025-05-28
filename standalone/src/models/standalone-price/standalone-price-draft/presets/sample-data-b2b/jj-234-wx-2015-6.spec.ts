import type { TStandalonePriceDraft } from '../../../types';
import jj234Wx20156 from './jj-234-wx-2015-6';

describe(`with jj234Wx20156 preset`, () => {
  it(`should return a jj234Wx20156 preset`, () => {
    const jj234Wx20156Preset = jj234Wx20156().build<TStandalonePriceDraft>();
    expect(jj234Wx20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2015-6",
        "recurrencePolicy": undefined,
        "sku": "jj234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a jj234Wx20156 preset when built for graphql`, () => {
    const jj234Wx20156PresetGraphql =
      jj234Wx20156().buildGraphql<TStandalonePriceDraft>();
    expect(jj234Wx20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2015-6",
        "recurrencePolicy": undefined,
        "sku": "jj234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
