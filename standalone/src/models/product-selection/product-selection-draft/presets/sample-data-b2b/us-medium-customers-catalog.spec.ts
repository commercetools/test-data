import type {
  TProductSelectionDraftGraphql,
  TProductSelectionDraftRest,
} from '../../../types';
import {
  restPreset,
  graphqlPreset,
  compatPreset,
} from './us-medium-customers-catalog';

const restExpectation = (productSelection: TProductSelectionDraftRest) => {
  expect(productSelection).toMatchObject({
    custom: undefined,
    key: 'us-medium-customers-catalog',
    mode: 'Individual',
    name: {
      de: undefined,
      'de-DE': 'US Mittel Kundenkatalog',
      en: undefined,
      'en-AU': 'US Medium Customers Catalog',
      'en-GB': 'US Medium Customers Catalog',
      'en-NZ': 'US Medium Customers Catalog',
      'en-US': 'US Medium Customers Catalog',
      'es-ES': 'Catálogo de Clientes Medianos de EE. UU.',
      fr: undefined,
      'fr-FR': 'Catalogue Clients Moyens des États-Unis',
      'it-IT': 'Catalogo Clienti Medio USA',
      'nl-NL': 'Catalogus voor Middelgrote Klanten in de VS',
      'pt-PT': 'Catálogo de Clientes Médios dos EUA',
    },
  });
};

const graphqlExpectation = (
  productSelection: TProductSelectionDraftGraphql
) => {
  expect(productSelection).toMatchObject({
    custom: undefined,
    key: 'us-medium-customers-catalog',
    mode: 'Individual',
    name: [
      {
        locale: 'de-DE',
        value: 'US Mittel Kundenkatalog',
      },
      {
        locale: 'it-IT',
        value: 'Catalogo Clienti Medio USA',
      },
      {
        locale: 'nl-NL',
        value: 'Catalogus voor Middelgrote Klanten in de VS',
      },
      {
        locale: 'fr-FR',
        value: 'Catalogue Clients Moyens des États-Unis',
      },
      {
        locale: 'en-AU',
        value: 'US Medium Customers Catalog',
      },
      {
        locale: 'es-ES',
        value: 'Catálogo de Clientes Medianos de EE. UU.',
      },
      {
        locale: 'en-GB',
        value: 'US Medium Customers Catalog',
      },
      {
        locale: 'en-NZ',
        value: 'US Medium Customers Catalog',
      },
      {
        locale: 'pt-PT',
        value: 'Catálogo de Clientes Médios dos EUA',
      },
      {
        locale: 'en-US',
        value: 'US Medium Customers Catalog',
      },
    ],
  });
};

describe('Default product selection', () => {
  it('[REST] should set all specified fields to undefined', () => {
    const productSelectionDraft = restPreset().build();
    restExpectation(productSelectionDraft);
  });
  it('[Graphql] should set all specified fields to undefined', () => {
    const productSelectionDraft = graphqlPreset().build();
    graphqlExpectation(productSelectionDraft);
  });
  it('[Compat - REST] should set all specified fields to undefined', () => {
    const productSelectionDraft = compatPreset().buildRest();
    restExpectation(productSelectionDraft);
  });
  it('[Compat - Graphql] should set all specified fields to undefined', () => {
    const productSelectionDraft =
      compatPreset().buildGraphql<TProductSelectionDraftGraphql>();
    graphqlExpectation(productSelectionDraft);
  });
});
