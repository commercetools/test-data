import type { TProductDiscountDraft } from '../../../types';
import spareParts5EurOff from './spare-parts-5-eur-off';

describe(`with spareParts5EurOff preset`, () => {
  it(`should return a spareParts5EurOff preset`, () => {
    const spareParts5EurOffPreset =
      spareParts5EurOff().build<TProductDiscountDraft>();
    expect(spareParts5EurOffPreset).toMatchInlineSnapshot(`
      {
        "description": {
          "de": undefined,
          "de-DE": "5 EUR Rabatt auf alle Ersatzteile",
          "en": undefined,
          "en-AU": "5 EUR off on all spare parts",
          "en-GB": "5 EUR off on all spare parts",
          "en-NZ": "5 EUR off on all spare parts",
          "en-US": "5 EUR off on all spare parts",
          "es-ES": "5 EUR de descuento en todos los repuestos",
          "fr": undefined,
          "fr-FR": "5 EUR de réduction sur toutes les pièces détachées",
          "it-IT": "5 EUR di sconto su tutti i pezzi di ricambio",
          "nl-NL": "5 EUR korting op alle reserveonderdelen",
          "pt-PT": "5 EUR de desconto em todas as peças sobressalentes",
        },
        "isActive": true,
        "key": "spare-parts-5-eur-off",
        "name": {
          "de": undefined,
          "de-DE": "5 EUR Rabatt auf alle Ersatzteile",
          "en": undefined,
          "en-AU": "5 EUR off on all spare parts",
          "en-GB": "5 EUR off on all spare parts",
          "en-NZ": "5 EUR off on all spare parts",
          "en-US": "5 EUR off on all spare parts",
          "es-ES": "5 EUR de descuento en todos los repuestos",
          "fr": undefined,
          "fr-FR": "5 EUR de réduction sur toutes les pièces détachées",
          "it-IT": "5 EUR di sconto su tutti i pezzi di ricambio",
          "nl-NL": "5 EUR korting op alle reserveonderdelen",
          "pt-PT": "5 EUR de desconto em todas as peças sobressalentes",
        },
        "predicate": "categories.key contains "spare-parts"",
        "sortOrder": "0.5",
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "money": [
            {
              "centAmount": 500,
              "currencyCode": "EUR",
            },
          ],
          "type": "absolute",
        },
      }
    `);
  });

  it(`should return a spareParts5EurOff preset when built for graphql`, () => {
    const spareParts5EurOffPresetGraphql =
      spareParts5EurOff().buildGraphql<TProductDiscountDraft>();
    expect(spareParts5EurOffPresetGraphql).toMatchInlineSnapshot(`
      {
        "description": [
          {
            "locale": "de-DE",
            "value": "5 EUR Rabatt auf alle Ersatzteile",
          },
          {
            "locale": "it-IT",
            "value": "5 EUR di sconto su tutti i pezzi di ricambio",
          },
          {
            "locale": "nl-NL",
            "value": "5 EUR korting op alle reserveonderdelen",
          },
          {
            "locale": "fr-FR",
            "value": "5 EUR de réduction sur toutes les pièces détachées",
          },
          {
            "locale": "en-AU",
            "value": "5 EUR off on all spare parts",
          },
          {
            "locale": "es-ES",
            "value": "5 EUR de descuento en todos los repuestos",
          },
          {
            "locale": "en-GB",
            "value": "5 EUR off on all spare parts",
          },
          {
            "locale": "en-NZ",
            "value": "5 EUR off on all spare parts",
          },
          {
            "locale": "pt-PT",
            "value": "5 EUR de desconto em todas as peças sobressalentes",
          },
          {
            "locale": "en-US",
            "value": "5 EUR off on all spare parts",
          },
        ],
        "isActive": true,
        "key": "spare-parts-5-eur-off",
        "name": [
          {
            "locale": "de-DE",
            "value": "5 EUR Rabatt auf alle Ersatzteile",
          },
          {
            "locale": "it-IT",
            "value": "5 EUR di sconto su tutti i pezzi di ricambio",
          },
          {
            "locale": "nl-NL",
            "value": "5 EUR korting op alle reserveonderdelen",
          },
          {
            "locale": "fr-FR",
            "value": "5 EUR de réduction sur toutes les pièces détachées",
          },
          {
            "locale": "en-AU",
            "value": "5 EUR off on all spare parts",
          },
          {
            "locale": "es-ES",
            "value": "5 EUR de descuento en todos los repuestos",
          },
          {
            "locale": "en-GB",
            "value": "5 EUR off on all spare parts",
          },
          {
            "locale": "en-NZ",
            "value": "5 EUR off on all spare parts",
          },
          {
            "locale": "pt-PT",
            "value": "5 EUR de desconto em todas as peças sobressalentes",
          },
          {
            "locale": "en-US",
            "value": "5 EUR off on all spare parts",
          },
        ],
        "predicate": "categories.key contains "spare-parts"",
        "sortOrder": "0.5",
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "absolute": {
            "money": [
              {
                "centAmount": 500,
                "currencyCode": "EUR",
              },
            ],
          },
        },
      }
    `);
  });
});
