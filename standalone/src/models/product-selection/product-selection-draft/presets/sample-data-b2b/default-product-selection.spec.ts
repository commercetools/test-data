import type {
  TProductSelectionDraftGraphql,
  TProductSelectionDraftRest,
  TProductSelectionDraft,
} from '../../../types';
import {
  restPreset,
  graphqlPreset,
  compatPreset,
} from './default-product-selection';

const restExpectation = (productSelection: TProductSelectionDraftRest) => {
  expect(productSelection).toMatchObject({
    custom: undefined,
    key: 'default-product-selection',
    mode: 'Individual',
    name: {
      de: undefined,
      'de-DE': 'Standard',
      en: undefined,
      'en-AU': 'Default',
      'en-GB': 'Default',
      'en-NZ': 'Default',
      'en-US': 'Default',
      'es-ES': 'Predeterminado',
      fr: undefined,
      'fr-FR': 'Défaut',
      'it-IT': 'Predefinito',
      'nl-NL': 'Standaard',
      'pt-PT': 'Padrão',
    },
  });
};

const graphqlExpectation = (
  productSelection: TProductSelectionDraftGraphql
) => {
  expect(productSelection).toMatchObject({
    key: 'default-product-selection',
    name: [
      { locale: 'de-DE', value: 'Standard' },
      { locale: 'it-IT', value: 'Predefinito' },
      { locale: 'nl-NL', value: 'Standaard' },
      { locale: 'fr-FR', value: 'Défaut' },
      { locale: 'en-AU', value: 'Default' },
      { locale: 'es-ES', value: 'Predeterminado' },
      { locale: 'en-GB', value: 'Default' },
      { locale: 'en-NZ', value: 'Default' },
      { locale: 'pt-PT', value: 'Padrão' },
      { locale: 'en-US', value: 'Default' },
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
