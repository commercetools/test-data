import type { TStandalonePriceDraft } from '../../../types';
import alternator6 from './alternator-6';

describe(`with alternator6 preset`, () => {
  it(`should return a alternator6 preset`, () => {
    const alternator6Preset = alternator6().build<TStandalonePriceDraft>();
    expect(alternator6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "alternator-6",
        "recurrencePolicy": undefined,
        "sku": "alternator",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 27500,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a alternator6 preset when built for graphql`, () => {
    const alternator6PresetGraphql =
      alternator6().buildGraphql<TStandalonePriceDraft>();
    expect(alternator6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "alternator-6",
        "recurrencePolicy": undefined,
        "sku": "alternator",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 27500,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
