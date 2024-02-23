import type { TStandalonePriceDraft } from '../../../types';
import bb456St20156 from './bb-456-st-2015-6';

describe(`with bb456St20156 preset`, () => {
  it(`should return a bb456St20156 preset`, () => {
    const bb456St20156Preset = bb456St20156().build<TStandalonePriceDraft>();
    expect(bb456St20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2015-6",
        "sku": "bb456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1440000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a bb456St20156 preset when built for graphql`, () => {
    const bb456St20156PresetGraphql =
      bb456St20156().buildGraphql<TStandalonePriceDraft>();
    expect(bb456St20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2015-6",
        "sku": "bb456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1440000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
