import type { TStandalonePriceDraft } from '../../../types';
import bb456St20231 from './bb-456-st-2023-1';

describe(`with bb456St20231 preset`, () => {
  it(`should return a bb456St20231 preset`, () => {
    const bb456St20231Preset = bb456St20231().build<TStandalonePriceDraft>();
    expect(bb456St20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2023-1",
        "recurrencePolicy": undefined,
        "sku": "bb456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2376000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a bb456St20231 preset when built for graphql`, () => {
    const bb456St20231PresetGraphql =
      bb456St20231().buildGraphql<TStandalonePriceDraft>();
    expect(bb456St20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2023-1",
        "recurrencePolicy": undefined,
        "sku": "bb456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2376000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
