import type { TStandalonePriceDraft } from '../../../types';
import bb456St20232 from './bb-456-st-2023-2';

describe(`with bb456St20232 preset`, () => {
  it(`should return a bb456St20232 preset`, () => {
    const bb456St20232Preset = bb456St20232().build<TStandalonePriceDraft>();
    expect(bb456St20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2023-2",
        "recurrencePolicy": undefined,
        "sku": "bb456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2178001,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a bb456St20232 preset when built for graphql`, () => {
    const bb456St20232PresetGraphql =
      bb456St20232().buildGraphql<TStandalonePriceDraft>();
    expect(bb456St20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2023-2",
        "recurrencePolicy": undefined,
        "sku": "bb456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2178001,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
