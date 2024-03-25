import type { TChannelDraft } from '../../../types';
import usLargeCustomers from './us-large-customers';

describe(`with usLargeCustomers preset`, () => {
  it(`should return a usLargeCustomers preset`, () => {
    const usLargeCustomersPreset = usLargeCustomers().build<TChannelDraft>();
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
    const usLargeCustomersPresetGraphql =
      usLargeCustomers().buildGraphql<TChannelDraft>();
    expect(usLargeCustomersPresetGraphql).toMatchInlineSnapshot(`
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
