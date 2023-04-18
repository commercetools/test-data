import type { TAttributeDefinitionDraft } from '../../types';
import empty from './empty';

it(`should set attributeConstraint, inputHint, and isSearchable to undefined`, () => {
  const emptyAttributeDefinition = empty().build<TAttributeDefinitionDraft>();
  expect(emptyAttributeDefinition).toEqual({
    type: expect.objectContaining({
      name: expect.any(String),
    }),
    name: expect.any(String),
    label: expect.objectContaining({
      de: expect.any(String),
      en: expect.any(String),
      fr: expect.any(String),
    }),
    inputTip: expect.objectContaining({
      de: expect.any(String),
      en: expect.any(String),
      fr: expect.any(String),
    }),
    isRequired: expect.any(Boolean),
    attributeConstraint: undefined,
    inputHint: undefined,
    isSearchable: undefined,
  });
});
