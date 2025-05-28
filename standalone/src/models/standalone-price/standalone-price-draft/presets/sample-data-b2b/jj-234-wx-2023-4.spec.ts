import type { TStandalonePriceDraft } from '../../../types';
import jj234Wx20234 from './jj-234-wx-2023-4';

describe(`with jj234Wx20234 preset`, () => {
  it(`should return a jj234Wx20234 preset`, () => {
    const jj234Wx20234Preset = jj234Wx20234().build<TStandalonePriceDraft>();
    expect(jj234Wx20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2023-4",
        "recurrencePolicy": undefined,
        "sku": "jj234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a jj234Wx20234 preset when built for graphql`, () => {
    const jj234Wx20234PresetGraphql =
      jj234Wx20234().buildGraphql<TStandalonePriceDraft>();
    expect(jj234Wx20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2023-4",
        "recurrencePolicy": undefined,
        "sku": "jj234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
