import { buildField } from '@/core';
import { TLocalizedStringDraftGraphql } from '../types';

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
