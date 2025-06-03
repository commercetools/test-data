import type { TStandalonePriceDraft } from '../../../types';
import bb456St20238 from './bb-456-st-2023-8';

describe(`with bb456St20238 preset`, () => {
  it(`should return a bb456St20238 preset`, () => {
    const bb456St20238Preset = bb456St20238().build<TStandalonePriceDraft>();
    expect(bb456St20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2023-8",
        "recurrencePolicy": undefined,
        "sku": "bb456-st-2023",
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

  it(`should return a bb456St20238 preset when built for graphql`, () => {
    const bb456St20238PresetGraphql =
      bb456St20238().buildGraphql<TStandalonePriceDraft>();
    expect(bb456St20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2023-8",
        "recurrencePolicy": undefined,
        "sku": "bb456-st-2023",
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
