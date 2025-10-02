import { fake, type TModelFieldsConfig } from '@/core';
import { LocalizedStringDraft, LocalizedString } from '@/models/commons';
import type {
  TAttributeGroupDraftGraphql,
  TAttributeGroupDraftRest,
} from '../types';

const commonFieldsConfig = {
  key: fake((f) => f.lorem.slug(2)),
  name: fake(() => LocalizedStringDraft.random()),
  description: fake((f) =>
    LocalizedStringDraft.random().en(f.lorem.sentences(2))
  ),
  attributes: [],
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeGroupDraftRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeGroupDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      nameAllLocales: fake(() =>
        LocalizedString.toLocalizedField(LocalizedString.random())
      ),
      descriptionAllLocales: fake(() =>
        LocalizedString.toLocalizedField(LocalizedString.random())
      ),
      __typename: 'AttributeGroupDraft',
    },
  };
