import type { TStandalonePriceDraft } from '../../../types';
import bb456St20198 from './bb-456-st-2019-8';

describe(`with bb456St20198 preset`, () => {
  it(`should return a bb456St20198 preset`, () => {
    const bb456St20198Preset = bb456St20198().build<TStandalonePriceDraft>();
    expect(bb456St20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2019-8",
        "recurrencePolicy": undefined,
        "sku": "bb456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1980001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a bb456St20198 preset when built for graphql`, () => {
    const bb456St20198PresetGraphql =
      bb456St20198().buildGraphql<TStandalonePriceDraft>();
    expect(bb456St20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2019-8",
        "recurrencePolicy": undefined,
        "sku": "bb456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1980001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
