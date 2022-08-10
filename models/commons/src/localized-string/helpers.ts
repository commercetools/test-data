import { buildField } from '@commercetools-test-data/core';
import { TLocalizedStringGraphql } from './types';

const toLocalizedField = <Model>(value?: Model) => {
  if (!value) {
    return null;
  }

  const localizedField = buildField<Model>(
    value,
    'graphql'
  ) as unknown as TLocalizedStringGraphql;
  return localizedField;
};

export { toLocalizedField };
