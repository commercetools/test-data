import type {
  TShippingMethodDraft,
  TShippingMethodDraftGraphql,
  TShippingMethodDraftRest,
} from '../../types';
import { restPresets, graphqlPresets, compatPresets } from './index';

const validateModel = (
  model:
    | TShippingMethodDraftGraphql
    | TShippingMethodDraftRest
    | TShippingMethodDraft
) => {
  expect(model).toMatchObject({
    key: undefined,
    localizedName: undefined,
    localizedDescription: undefined,
    predicate: undefined,
    custom: undefined,
  });
};

describe('ShippingMethodDraft - Empty Preset', () => {
  it('should return a valid rest model', () => {
    const model = restPresets.empty().build();

    validateModel(model);
  });

  it('should return a valid graphql model', () => {
    const model = graphqlPresets.empty().build();

    validateModel(model);
  });

  it('should return a valid compat model', () => {
    const model = compatPresets.empty().build();

    validateModel(model);
  });
});
