import { buildField } from '@commercetools-test-data/core';
import type { TLocalizedStringDraftGraphql } from '../types';

const toLocalizedField = <Model>(value?: Model) => {
  if (!value) {
    return null;
  }

  const localizedField = buildField<Model>(
    value,
    'graphql'
  ) as unknown as TLocalizedStringDraftGraphql;
  return localizedField;
};

export { toLocalizedField };
