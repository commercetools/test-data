import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import { fake, TModelFieldsConfig } from '@commercetools-test-data/core';
import {
  TAttributeLocalizedEnumValueDraftGraphql,
  TAttributeLocalizedEnumValueDraftRest,
} from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributelocalizedenumvalue

const commonFieldsConfig = {
  key: fake((f) => f.lorem.slug(2)),
  label: fake(() => LocalizedStringDraft.random()),
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeLocalizedEnumValueDraftRest> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeLocalizedEnumValueDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };
