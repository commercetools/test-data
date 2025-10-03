import type {
  TAttributeGroupDraftGraphql,
  TAttributeGroupDraftRest,
} from '../../types';
import { restPreset, graphqlPreset, compatPreset } from './empty';

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
    const model = restPreset().buildRest();
    validateCommonFields(model);
  });

  it('[GraphQL] should set all specified fields to empty', () => {
    const model = graphqlPreset().buildGraphql();
    validateCommonFields(model);
  });

  it('[Compat - DEFAULT] should set all specified fields to empty', () => {
    const model = compatPreset().build();
    validateCommonFields(model);
  });

  it('[Compat - REST] should set all specified fields to empty', () => {
    const model = compatPreset().buildRest();
    validateCommonFields(model);
  });

  it('[Compat - GraphQL] should set all specified fields to empty', () => {
    const model = compatPreset().buildGraphql();
    validateCommonFields(model);
  });
});
