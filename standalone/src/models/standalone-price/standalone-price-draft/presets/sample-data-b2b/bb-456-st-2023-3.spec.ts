import type { TStandalonePriceDraft } from '../../../types';
import bb456St20233 from './bb-456-st-2023-3';

describe(`with bb456St20233 preset`, () => {
  it(`should return a bb456St20233 preset`, () => {
    const bb456St20233Preset = bb456St20233().build<TStandalonePriceDraft>();
    expect(bb456St20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2023-3",
        "recurrencePolicy": undefined,
        "sku": "bb456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2772000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a bb456St20233 preset when built for graphql`, () => {
    const bb456St20233PresetGraphql =
      bb456St20233().buildGraphql<TStandalonePriceDraft>();
    expect(bb456St20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2023-3",
        "recurrencePolicy": undefined,
        "sku": "bb456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2772000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
