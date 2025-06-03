import type { TStandalonePriceDraft } from '../../../types';
import jj234Wx20235 from './jj-234-wx-2023-5';

describe(`with jj234Wx20235 preset`, () => {
  it(`should return a jj234Wx20235 preset`, () => {
    const jj234Wx20235Preset = jj234Wx20235().build<TStandalonePriceDraft>();
    expect(jj234Wx20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2023-5",
        "recurrencePolicy": undefined,
        "sku": "jj234-wx-2023",
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

  it(`should return a jj234Wx20235 preset when built for graphql`, () => {
    const jj234Wx20235PresetGraphql =
      jj234Wx20235().buildGraphql<TStandalonePriceDraft>();
    expect(jj234Wx20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2023-5",
        "recurrencePolicy": undefined,
        "sku": "jj234-wx-2023",
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
