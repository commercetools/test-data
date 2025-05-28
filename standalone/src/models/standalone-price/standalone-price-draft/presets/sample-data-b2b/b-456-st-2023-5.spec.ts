import type { TStandalonePriceDraft } from '../../../types';
import b456St20235 from './b-456-st-2023-5';

describe(`with b456St20235 preset`, () => {
  it(`should return a b456St20235 preset`, () => {
    const b456St20235Preset = b456St20235().build<TStandalonePriceDraft>();
    expect(b456St20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2023-5",
        "recurrencePolicy": undefined,
        "sku": "b456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 855000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a b456St20235 preset when built for graphql`, () => {
    const b456St20235PresetGraphql =
      b456St20235().buildGraphql<TStandalonePriceDraft>();
    expect(b456St20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2023-5",
        "recurrencePolicy": undefined,
        "sku": "b456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 855000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
