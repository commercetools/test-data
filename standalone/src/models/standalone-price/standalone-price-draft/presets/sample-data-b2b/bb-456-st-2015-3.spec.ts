import type { TStandalonePriceDraft } from '../../../types';
import bb456St20153 from './bb-456-st-2015-3';

describe(`with bb456St20153 preset`, () => {
  it(`should return a bb456St20153 preset`, () => {
    const bb456St20153Preset = bb456St20153().build<TStandalonePriceDraft>();
    expect(bb456St20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2015-3",
        "recurrencePolicy": undefined,
        "sku": "bb456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2376000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a bb456St20153 preset when built for graphql`, () => {
    const bb456St20153PresetGraphql =
      bb456St20153().buildGraphql<TStandalonePriceDraft>();
    expect(bb456St20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2015-3",
        "recurrencePolicy": undefined,
        "sku": "bb456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2376000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
