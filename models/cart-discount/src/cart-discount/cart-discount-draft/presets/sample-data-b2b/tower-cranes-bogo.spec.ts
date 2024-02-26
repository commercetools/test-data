import type { TCartDiscountDraft } from '../../../types';
import towerCranesBogo from './tower-cranes-bogo';

describe(`with towerCranesBogo preset`, () => {
  it(`should return a towerCranesBogo preset`, () => {
    const towerCranesBogoPreset = towerCranesBogo().build<TCartDiscountDraft>();
    expect(towerCranesBogoPreset).toMatchInlineSnapshot(`
      {
        "cartPredicate": "1 = 1",
        "custom": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Zwei zum Preis von einem bei allen Turmkränen (Rabatt auf den günstigsten Artikel)",
          "en": undefined,
          "en-AU": "Two for one on all tower cranes (discount on the cheapest item)",
          "en-GB": "Two for one on all tower cranes (discount on the cheapest item)",
          "en-NZ": "Two for one on all tower cranes (discount on the cheapest item)",
          "en-US": "Two for one on all tower cranes (discount on the cheapest item)",
          "es-ES": "Dos por uno en todas las grúas torre (descuento en el artículo más barato)",
          "fr": undefined,
          "fr-FR": "Deux pour le prix d&#39;un sur toutes les grues à tour (réduction sur l&#39;article le moins cher)",
          "it-IT": "Due al prezzo di uno su tutte le gru a torre (sconto sull&#39;articolo più economico)",
          "nl-NL": "Twee voor de prijs van één op alle torenkranen (korting op het goedkoopste artikel)",
          "pt-PT": "Dois pelo preço de um em todas as gruas torre (desconto no item mais barato)",
        },
        "isActive": true,
        "key": "tower-cranes-bogo",
        "name": {
          "de": undefined,
          "de-DE": "Kaufen Sie einen Turmkran und erhalten Sie den zweiten kostenlos",
          "en": undefined,
          "en-AU": "Buy One Tower Crane and Receive the Second for Free",
          "en-GB": "Buy One Tower Crane and Receive the Second for Free",
          "en-NZ": "Buy One Tower Crane and Receive the Second for Free",
          "en-US": "Buy One Tower Crane and Receive the Second for Free",
          "es-ES": "Compra una grúa torre y recibe la segunda gratis",
          "fr": undefined,
          "fr-FR": "Achetez une grue à tour et recevez la deuxième gratuitement",
          "it-IT": "Acquista una gru a torre e ricevi la seconda gratis",
          "nl-NL": "Koop één torenkraan en krijg de tweede gratis",
          "pt-PT": "Compre uma grua torre e receba a segunda de graça",
        },
        "requiresDiscountCode": true,
        "sortOrder": "0.15",
        "stackingMode": "Stacking",
        "target": {
          "discountedQuantity": 1,
          "maxOccurrence": undefined,
          "predicate": "categories.key contains "tower-cranes"",
          "selectionMode": "Cheapest",
          "triggerQuantity": 2,
          "type": "multiBuyLineItems",
        },
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "permyriad": 10000,
          "type": "relative",
        },
      }
    `);
  });

  it(`should return a towerCranesBogo preset when built for graphql`, () => {
    const towerCranesBogoPresetGraphql =
      towerCranesBogo().buildGraphql<TCartDiscountDraft>();
    expect(towerCranesBogoPresetGraphql).toMatchInlineSnapshot(`
      {
        "cartPredicate": "1 = 1",
        "custom": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Zwei zum Preis von einem bei allen Turmkränen (Rabatt auf den günstigsten Artikel)",
          },
          {
            "locale": "it-IT",
            "value": "Due al prezzo di uno su tutte le gru a torre (sconto sull&#39;articolo più economico)",
          },
          {
            "locale": "nl-NL",
            "value": "Twee voor de prijs van één op alle torenkranen (korting op het goedkoopste artikel)",
          },
          {
            "locale": "fr-FR",
            "value": "Deux pour le prix d&#39;un sur toutes les grues à tour (réduction sur l&#39;article le moins cher)",
          },
          {
            "locale": "en-AU",
            "value": "Two for one on all tower cranes (discount on the cheapest item)",
          },
          {
            "locale": "es-ES",
            "value": "Dos por uno en todas las grúas torre (descuento en el artículo más barato)",
          },
          {
            "locale": "en-GB",
            "value": "Two for one on all tower cranes (discount on the cheapest item)",
          },
          {
            "locale": "en-NZ",
            "value": "Two for one on all tower cranes (discount on the cheapest item)",
          },
          {
            "locale": "pt-PT",
            "value": "Dois pelo preço de um em todas as gruas torre (desconto no item mais barato)",
          },
          {
            "locale": "en-US",
            "value": "Two for one on all tower cranes (discount on the cheapest item)",
          },
        ],
        "isActive": true,
        "key": "tower-cranes-bogo",
        "name": [
          {
            "locale": "de-DE",
            "value": "Kaufen Sie einen Turmkran und erhalten Sie den zweiten kostenlos",
          },
          {
            "locale": "it-IT",
            "value": "Acquista una gru a torre e ricevi la seconda gratis",
          },
          {
            "locale": "nl-NL",
            "value": "Koop één torenkraan en krijg de tweede gratis",
          },
          {
            "locale": "fr-FR",
            "value": "Achetez une grue à tour et recevez la deuxième gratuitement",
          },
          {
            "locale": "en-AU",
            "value": "Buy One Tower Crane and Receive the Second for Free",
          },
          {
            "locale": "es-ES",
            "value": "Compra una grúa torre y recibe la segunda gratis",
          },
          {
            "locale": "en-GB",
            "value": "Buy One Tower Crane and Receive the Second for Free",
          },
          {
            "locale": "en-NZ",
            "value": "Buy One Tower Crane and Receive the Second for Free",
          },
          {
            "locale": "pt-PT",
            "value": "Compre uma grua torre e receba a segunda de graça",
          },
          {
            "locale": "en-US",
            "value": "Buy One Tower Crane and Receive the Second for Free",
          },
        ],
        "requiresDiscountCode": true,
        "sortOrder": "0.15",
        "stackingMode": "Stacking",
        "target": {
          "multiBuyLineItems": {
            "discountedQuantity": 1,
            "maxOccurrence": undefined,
            "predicate": "categories.key contains "tower-cranes"",
            "selectionMode": "Cheapest",
            "triggerQuantity": 2,
          },
        },
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "relative": {
            "permyriad": 10000,
          },
        },
      }
    `);
  });
});
