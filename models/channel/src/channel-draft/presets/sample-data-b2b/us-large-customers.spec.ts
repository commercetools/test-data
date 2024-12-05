import type { TChannelDraftGraphql, TChannelDraftRest } from '../../../types';
import * as presets from './us-large-customers';

describe(`with usLargeCustomers preset`, () => {
  it(`should return a usLargeCustomers preset when built for rest`, () => {
    const usLargeCustomersPreset = presets.restPreset().build();
    expect(usLargeCustomersPreset).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "us-large-customers",
        "name": {
          "de": undefined,
          "de-DE": "Große Kunden im Vereinigten Staaten",
          "en": undefined,
          "en-AU": "US Large Customers",
          "en-GB": "US Large Customers",
          "en-NZ": "US Large Customers",
          "en-US": "US Large Customers",
          "es-ES": "Clientes Grandes de Estados Unidos",
          "fr": undefined,
          "fr-FR": "Clients Importants aux États-Unis",
          "it-IT": "Grandi Clienti USA",
          "nl-NL": "VS Grote Klanten",
          "pt-PT": "Grandes Clientes EUA",
        },
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });

  it(`should return a usLargeCustomers preset when built for graphql`, () => {
    const usLargeCustomersPreset = presets.graphqlPreset().build();
    expect(usLargeCustomersPreset).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "us-large-customers",
        "name": [
          {
            "locale": "de-DE",
            "value": "Große Kunden im Vereinigten Staaten",
          },
          {
            "locale": "it-IT",
            "value": "Grandi Clienti USA",
          },
          {
            "locale": "nl-NL",
            "value": "VS Grote Klanten",
          },
          {
            "locale": "fr-FR",
            "value": "Clients Importants aux États-Unis",
          },
          {
            "locale": "en-AU",
            "value": "US Large Customers",
          },
          {
            "locale": "es-ES",
            "value": "Clientes Grandes de Estados Unidos",
          },
          {
            "locale": "en-GB",
            "value": "US Large Customers",
          },
          {
            "locale": "en-NZ",
            "value": "US Large Customers",
          },
          {
            "locale": "pt-PT",
            "value": "Grandes Clientes EUA",
          },
          {
            "locale": "en-US",
            "value": "US Large Customers",
          },
        ],
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });

  it(`should return a usLargeCustomers preset when built for legacy rest`, () => {
    const usLargeCustomersPreset = presets
      .compatPreset()
      .buildRest<TChannelDraftRest>();
    expect(usLargeCustomersPreset).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "us-large-customers",
        "name": {
          "de": undefined,
          "de-DE": "Große Kunden im Vereinigten Staaten",
          "en": undefined,
          "en-AU": "US Large Customers",
          "en-GB": "US Large Customers",
          "en-NZ": "US Large Customers",
          "en-US": "US Large Customers",
          "es-ES": "Clientes Grandes de Estados Unidos",
          "fr": undefined,
          "fr-FR": "Clients Importants aux États-Unis",
          "it-IT": "Grandi Clienti USA",
          "nl-NL": "VS Grote Klanten",
          "pt-PT": "Grandes Clientes EUA",
        },
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });

  it(`should return a usLargeCustomers preset when built for legacy graphql`, () => {
    const usLargeCustomersPreset = presets
      .compatPreset()
      .buildGraphql<TChannelDraftGraphql>();
    expect(usLargeCustomersPreset).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "us-large-customers",
        "name": [
          {
            "locale": "de-DE",
            "value": "Große Kunden im Vereinigten Staaten",
          },
          {
            "locale": "it-IT",
            "value": "Grandi Clienti USA",
          },
          {
            "locale": "nl-NL",
            "value": "VS Grote Klanten",
          },
          {
            "locale": "fr-FR",
            "value": "Clients Importants aux États-Unis",
          },
          {
            "locale": "en-AU",
            "value": "US Large Customers",
          },
          {
            "locale": "es-ES",
            "value": "Clientes Grandes de Estados Unidos",
          },
          {
            "locale": "en-GB",
            "value": "US Large Customers",
          },
          {
            "locale": "en-NZ",
            "value": "US Large Customers",
          },
          {
            "locale": "pt-PT",
            "value": "Grandes Clientes EUA",
          },
          {
            "locale": "en-US",
            "value": "US Large Customers",
          },
        ],
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });
});
