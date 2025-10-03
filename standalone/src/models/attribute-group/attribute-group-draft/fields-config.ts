import { fake, type TModelFieldsConfig } from '@/core';
import { LocalizedString } from '@/models/commons';
import type {
  TAttributeGroupDraftGraphql,
  TAttributeGroupDraftRest,
} from '../types';

const commonFieldsConfig = {
  key: fake((f) => f.lorem.slug(2)),
  name: fake(() => LocalizedString.random()),
  description: fake((f) => LocalizedString.random().en(f.lorem.sentences(2))),
  attributes: fake(() => []), // TODO: attributeReference[]
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeGroupDraftRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeGroupDraftGraphql> =
  {
    fields: {
      // TODO: name and description have unique types
      ...commonFieldsConfig,
      __typename: 'AttributeGroupDraft',
    },
  };
