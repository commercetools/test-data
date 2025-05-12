import type {
  TProductSelectionDraftGraphql,
  TProductSelectionDraftRest,
  TProductSelectionDraft,
} from '../../types';
import { restPreset, graphqlPreset, compatPreset } from './empty';

const restExpectation = (productSelection: TProductSelectionDraftRest) => {
  expect(productSelection).toMatchObject({
    key: undefined,
    mode: undefined,
    custom: undefined,
  });
};

const graphqlExpectation = (
  productSelection: TProductSelectionDraftGraphql
) => {
  expect(productSelection).toMatchObject({
    key: undefined,
    mode: undefined,
    custom: undefined,
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
