import type { TStandalonePriceDraft } from '../../../types';
import bb456St20192 from './bb-456-st-2019-2';

describe(`with bb456St20192 preset`, () => {
  it(`should return a bb456St20192 preset`, () => {
    const bb456St20192Preset = bb456St20192().build<TStandalonePriceDraft>();
    expect(bb456St20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2019-2",
        "recurrencePolicy": undefined,
        "sku": "bb456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1980000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a bb456St20192 preset when built for graphql`, () => {
    const bb456St20192PresetGraphql =
      bb456St20192().buildGraphql<TStandalonePriceDraft>();
    expect(bb456St20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2019-2",
        "recurrencePolicy": undefined,
        "sku": "bb456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1980000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
