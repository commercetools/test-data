import type { TStandalonePriceDraft } from '../../../types';
import f890Op20236 from './f-890-op-2023-6';

describe(`with f890Op20236 preset`, () => {
  it(`should return a f890Op20236 preset`, () => {
    const f890Op20236Preset = f890Op20236().build<TStandalonePriceDraft>();
    expect(f890Op20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2023-6",
        "recurrencePolicy": undefined,
        "sku": "f890-op-2023",
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

  it(`should return a f890Op20236 preset when built for graphql`, () => {
    const f890Op20236PresetGraphql =
      f890Op20236().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2023-6",
        "recurrencePolicy": undefined,
        "sku": "f890-op-2023",
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
