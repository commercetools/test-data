import type { TStandalonePriceDraft } from '../../../types';
import bb456St20196 from './bb-456-st-2019-6';

describe(`with bb456St20196 preset`, () => {
  it(`should return a bb456St20196 preset`, () => {
    const bb456St20196Preset = bb456St20196().build<TStandalonePriceDraft>();
    expect(bb456St20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2019-6",
        "recurrencePolicy": undefined,
        "sku": "bb456-st-2019",
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

  it(`should return a bb456St20196 preset when built for graphql`, () => {
    const bb456St20196PresetGraphql =
      bb456St20196().buildGraphql<TStandalonePriceDraft>();
    expect(bb456St20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2019-6",
        "recurrencePolicy": undefined,
        "sku": "bb456-st-2019",
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
