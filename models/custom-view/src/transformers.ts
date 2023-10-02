import { LocalizedString } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type { CustomView } from './types';
import { formatCustomViewIdToResourceAccessKey } from './utils';

const customFieldsGenerator = ({ fields }: { fields: CustomView }) => {
  const permissions = [
    {
      name: `view${formatCustomViewIdToResourceAccessKey(fields.id)}`,
      oAuthScopes: ['view_products'],
    },
    {
      name: `manage${formatCustomViewIdToResourceAccessKey(fields.id)}`,
      oAuthScopes: ['manage_products'],
    },
  ];
  const labelAllLocales =
    LocalizedString.toLocalizedField(fields.defaultLabel) || [];

  return {
    permissions,
    labelAllLocales,
  };
};

const transformers = {
  default: Transformer<CustomView, CustomView>('default', {
    addFields: customFieldsGenerator,
  }),
  graphql: Transformer<CustomView, CustomView>('graphql', {
    addFields: ({ fields }) => {
      return {
        ...customFieldsGenerator({ fields }),
        __typename: 'CustomView',
      };
    },
  }),
};

export default transformers;
