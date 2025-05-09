import type { TProductDiscountDraft } from '../../../types';
import dumpTrucks15PctOff from './dump-trucks-15-pct-off';

describe(`with dumpTrucks15PctOff preset`, () => {
  it(`should return a dumpTrucks15PctOff preset`, () => {
    const dumpTrucks15PctOffPreset =
      dumpTrucks15PctOff().build<TProductDiscountDraft>();
    expect(dumpTrucks15PctOffPreset).toMatchInlineSnapshot(`
      {
        "description": {
          "de": undefined,
          "de-DE": "15% Rabatt auf alle Kipplaster",
          "en": undefined,
          "en-AU": "15% off on all dump trucks",
          "en-GB": "15% off on all dump trucks",
          "en-NZ": "15% off on all dump trucks",
          "en-US": "15% off on all dump trucks",
          "es-ES": "15% de descuento en todos los camiones de volteo",
          "fr": undefined,
          "fr-FR": "15% de réduction sur tous les camions à benne",
          "it-IT": "15% di sconto su tutti i camion ribaltabili",
          "nl-NL": "15% korting op alle kiepwagens",
          "pt-PT": "15% de desconto em todos os camiões de caixa basculante",
        },
        "isActive": true,
        "key": "dump-trucks-15-pct-off",
        "name": {
          "de": undefined,
          "de-DE": "15% Rabatt auf alle Kipplaster",
          "en": undefined,
          "en-AU": "15% off on all dump trucks",
          "en-GB": "15% off on all dump trucks",
          "en-NZ": "15% off on all dump trucks",
          "en-US": "15% off on all dump trucks",
          "es-ES": "15% de descuento en todos los camiones de volteo",
          "fr": undefined,
          "fr-FR": "15% de réduction sur tous les camions à benne",
          "it-IT": "15% di sconto su tutti i camion ribaltabili",
          "nl-NL": "15% korting op alle kiepwagens",
          "pt-PT": "15% de desconto em todos os camiões de caixa basculante",
        },
        "predicate": "categoriesWithAncestors.key contains "dump-trucks"",
        "sortOrder": "0.67",
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "permyriad": 1500,
          "type": "relative",
        },
      }
    `);
  });

  it(`should return a dumpTrucks15PctOff preset when built for graphql`, () => {
    const dumpTrucks15PctOffPresetGraphql =
      dumpTrucks15PctOff().buildGraphql<TProductDiscountDraft>();
    expect(dumpTrucks15PctOffPresetGraphql).toMatchInlineSnapshot(`
      {
        "description": [
          {
            "locale": "de-DE",
            "value": "15% Rabatt auf alle Kipplaster",
          },
          {
            "locale": "it-IT",
            "value": "15% di sconto su tutti i camion ribaltabili",
          },
          {
            "locale": "nl-NL",
            "value": "15% korting op alle kiepwagens",
          },
          {
            "locale": "fr-FR",
            "value": "15% de réduction sur tous les camions à benne",
          },
          {
            "locale": "en-AU",
            "value": "15% off on all dump trucks",
          },
          {
            "locale": "es-ES",
            "value": "15% de descuento en todos los camiones de volteo",
          },
          {
            "locale": "en-GB",
            "value": "15% off on all dump trucks",
          },
          {
            "locale": "en-NZ",
            "value": "15% off on all dump trucks",
          },
          {
            "locale": "pt-PT",
            "value": "15% de desconto em todos os camiões de caixa basculante",
          },
          {
            "locale": "en-US",
            "value": "15% off on all dump trucks",
          },
        ],
        "isActive": true,
        "key": "dump-trucks-15-pct-off",
        "name": [
          {
            "locale": "de-DE",
            "value": "15% Rabatt auf alle Kipplaster",
          },
          {
            "locale": "it-IT",
            "value": "15% di sconto su tutti i camion ribaltabili",
          },
          {
            "locale": "nl-NL",
            "value": "15% korting op alle kiepwagens",
          },
          {
            "locale": "fr-FR",
            "value": "15% de réduction sur tous les camions à benne",
          },
          {
            "locale": "en-AU",
            "value": "15% off on all dump trucks",
          },
          {
            "locale": "es-ES",
            "value": "15% de descuento en todos los camiones de volteo",
          },
          {
            "locale": "en-GB",
            "value": "15% off on all dump trucks",
          },
          {
            "locale": "en-NZ",
            "value": "15% off on all dump trucks",
          },
          {
            "locale": "pt-PT",
            "value": "15% de desconto em todos os camiões de caixa basculante",
          },
          {
            "locale": "en-US",
            "value": "15% off on all dump trucks",
          },
        ],
        "predicate": "categoriesWithAncestors.key contains "dump-trucks"",
        "sortOrder": "0.67",
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "relative": {
            "permyriad": 1500,
          },
        },
      }
    `);
  });
});
