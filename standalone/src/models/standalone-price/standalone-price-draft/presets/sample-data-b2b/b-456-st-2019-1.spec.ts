import type { TStandalonePriceDraft } from '../../../types';
import b456St20191 from './b-456-st-2019-1';

describe(`with b456St20191 preset`, () => {
  it(`should return a b456St20191 preset`, () => {
    const b456St20191Preset = b456St20191().build<TStandalonePriceDraft>();
    expect(b456St20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2019-1",
        "recurrencePolicy": undefined,
        "sku": "b456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1149501,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a b456St20191 preset when built for graphql`, () => {
    const b456St20191PresetGraphql =
      b456St20191().buildGraphql<TStandalonePriceDraft>();
    expect(b456St20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2019-1",
        "recurrencePolicy": undefined,
        "sku": "b456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1149501,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
