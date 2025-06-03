import type { TStandalonePriceDraft } from '../../../types';
import f890Op20235 from './f-890-op-2023-5';

describe(`with f890Op20235 preset`, () => {
  it(`should return a f890Op20235 preset`, () => {
    const f890Op20235Preset = f890Op20235().build<TStandalonePriceDraft>();
    expect(f890Op20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2023-5",
        "recurrencePolicy": undefined,
        "sku": "f890-op-2023",
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

  it(`should return a f890Op20235 preset when built for graphql`, () => {
    const f890Op20235PresetGraphql =
      f890Op20235().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2023-5",
        "recurrencePolicy": undefined,
        "sku": "f890-op-2023",
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
