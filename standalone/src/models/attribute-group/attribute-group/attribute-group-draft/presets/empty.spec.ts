import type {
  TAttributeGroupDraftGraphql,
  TAttributeGroupDraftRest,
} from '../../types';
import { restPreset, graphqlPreset } from './empty';

const validateCommonFields = (
  model: TAttributeGroupDraftRest | TAttributeGroupDraftGraphql
) => {
  expect(model).toMatchObject({
    key: undefined,
    description: undefined,
    attributes: expect.any(Array),
  });
};

describe('attribute-group-draft with empty fields', () => {
  it('[REST] should set all specified fields to empty', () => {
    const model = restPreset().build();
    validateCommonFields(model);
  });

  it('[GraphQL] should set all specified fields to empty', () => {
    const model = graphqlPreset().build();
    validateCommonFields(model);
  });
});
