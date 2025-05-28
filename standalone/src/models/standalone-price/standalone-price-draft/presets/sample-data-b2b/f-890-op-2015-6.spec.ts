import type { TStandalonePriceDraft } from '../../../types';
import f890Op20156 from './f-890-op-2015-6';

describe(`with f890Op20156 preset`, () => {
  it(`should return a f890Op20156 preset`, () => {
    const f890Op20156Preset = f890Op20156().build<TStandalonePriceDraft>();
    expect(f890Op20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2015-6",
        "recurrencePolicy": undefined,
        "sku": "f890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 800000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a f890Op20156 preset when built for graphql`, () => {
    const f890Op20156PresetGraphql =
      f890Op20156().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2015-6",
        "recurrencePolicy": undefined,
        "sku": "f890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 800000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
