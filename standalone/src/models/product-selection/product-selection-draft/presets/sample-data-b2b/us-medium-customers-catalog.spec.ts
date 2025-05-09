import type { TProductSelectionDraft } from '../../../types';
import usMediumCustomersCatalog from './us-medium-customers-catalog';

describe(`with usMediumCustomersCatalog preset`, () => {
  it(`should return a usMediumCustomersCatalog preset`, () => {
    const usMediumCustomersCatalogPreset =
      usMediumCustomersCatalog().build<TProductSelectionDraft>();
    expect(usMediumCustomersCatalogPreset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "us-medium-customers-catalog",
        "mode": "Individual",
        "name": {
          "de": undefined,
          "de-DE": "US Mittel Kundenkatalog",
          "en": undefined,
          "en-AU": "US Medium Customers Catalog",
          "en-GB": "US Medium Customers Catalog",
          "en-NZ": "US Medium Customers Catalog",
          "en-US": "US Medium Customers Catalog",
          "es-ES": "Catálogo de Clientes Medianos de EE. UU.",
          "fr": undefined,
          "fr-FR": "Catalogue Clients Moyens des États-Unis",
          "it-IT": "Catalogo Clienti Medio USA",
          "nl-NL": "Catalogus voor Middelgrote Klanten in de VS",
          "pt-PT": "Catálogo de Clientes Médios dos EUA",
        },
      }
    `);
  });

  it(`should return a usMediumCustomersCatalog preset when built for graphql`, () => {
    const usMediumCustomersCatalogPresetGraphql =
      usMediumCustomersCatalog().buildGraphql<TProductSelectionDraft>();
    expect(usMediumCustomersCatalogPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "us-medium-customers-catalog",
        "mode": "Individual",
        "name": [
          {
            "locale": "de-DE",
            "value": "US Mittel Kundenkatalog",
          },
          {
            "locale": "it-IT",
            "value": "Catalogo Clienti Medio USA",
          },
          {
            "locale": "nl-NL",
            "value": "Catalogus voor Middelgrote Klanten in de VS",
          },
          {
            "locale": "fr-FR",
            "value": "Catalogue Clients Moyens des États-Unis",
          },
          {
            "locale": "en-AU",
            "value": "US Medium Customers Catalog",
          },
          {
            "locale": "es-ES",
            "value": "Catálogo de Clientes Medianos de EE. UU.",
          },
          {
            "locale": "en-GB",
            "value": "US Medium Customers Catalog",
          },
          {
            "locale": "en-NZ",
            "value": "US Medium Customers Catalog",
          },
          {
            "locale": "pt-PT",
            "value": "Catálogo de Clientes Médios dos EUA",
          },
          {
            "locale": "en-US",
            "value": "US Medium Customers Catalog",
          },
        ],
      }
    `);
  });
});
