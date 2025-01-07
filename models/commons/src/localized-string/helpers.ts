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

const DEFAULT_LOCALE = 'en';

const resolveGraphqlDefaultLocaleValue = (
  allLocales?: TLocalizedStringGraphql | null
) => {
  if (!allLocales || allLocales.length < 1) {
    return null;
  }
  const defaultLocaleName = allLocales.find(
    (name) => name.locale === DEFAULT_LOCALE
  );
  return defaultLocaleName ? defaultLocaleName.value : allLocales[0]?.value;
};

export { resolveGraphqlDefaultLocaleValue, toLocalizedField };
