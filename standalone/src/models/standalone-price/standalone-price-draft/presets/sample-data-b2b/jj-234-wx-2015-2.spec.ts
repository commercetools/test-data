import type { TStandalonePriceDraft } from '../../../types';
import jj234Wx20152 from './jj-234-wx-2015-2';

describe(`with jj234Wx20152 preset`, () => {
  it(`should return a jj234Wx20152 preset`, () => {
    const jj234Wx20152Preset = jj234Wx20152().build<TStandalonePriceDraft>();
    expect(jj234Wx20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2015-2",
        "recurrencePolicy": undefined,
        "sku": "jj234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2475000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a jj234Wx20152 preset when built for graphql`, () => {
    const jj234Wx20152PresetGraphql =
      jj234Wx20152().buildGraphql<TStandalonePriceDraft>();
    expect(jj234Wx20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2015-2",
        "recurrencePolicy": undefined,
        "sku": "jj234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2475000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
