import type { TStandalonePriceDraft } from '../../../types';
import f890Op20195 from './f-890-op-2019-5';

describe(`with f890Op20195 preset`, () => {
  it(`should return a f890Op20195 preset`, () => {
    const f890Op20195Preset = f890Op20195().build<TStandalonePriceDraft>();
    expect(f890Op20195Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2019-5",
        "sku": "f890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 900000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a f890Op20195 preset when built for graphql`, () => {
    const f890Op20195PresetGraphql =
      f890Op20195().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20195PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2019-5",
        "sku": "f890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 900000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
