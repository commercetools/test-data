import { Transformer } from '../../core';
import { LocalizedString } from '../commons';
import type { TAttributeGroup, TAttributeGroupGraphql } from './types';
const transformers = {
  rest: Transformer<TAttributeGroup, TAttributeGroup>('rest', {
    buildFields: ['createdBy', 'lastModifiedBy'],
  }),
  graphql: Transformer<TAttributeGroup, TAttributeGroupGraphql>('graphql', {
    buildFields: ['createdBy', 'lastModifiedBy'],
    replaceFields: ({ fields }) => {
      const nameAllLocales = LocalizedString.toLocalizedField(fields.name);
      const descriptionAllLocales = LocalizedString.toLocalizedField(
        fields.description
      );
      return {
        ...fields,
        __typename: 'AttributeGroup',
        nameAllLocales,
        name: LocalizedString.resolveGraphqlDefaultLocaleValue(nameAllLocales)!,
        description: LocalizedString.resolveGraphqlDefaultLocaleValue(
          descriptionAllLocales
        ),
        descriptionAllLocales,
      };
    },
  }),
};

export default transformers;
