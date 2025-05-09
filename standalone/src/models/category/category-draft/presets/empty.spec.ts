import { TCategoryDraft } from '../../types';
import empty from './empty';

it(`should set all fields but name and slug to undefined`, () => {
  const emptyCategoryDraft = empty().build<TCategoryDraft>();
  expect(emptyCategoryDraft).toEqual({
    key: undefined,
    externalId: undefined,
    name: expect.objectContaining({
      de: expect.any(String),
      en: expect.any(String),
      fr: expect.any(String),
    }),
    slug: expect.objectContaining({
      de: expect.any(String),
      en: expect.any(String),
      fr: expect.any(String),
    }),
    description: undefined,
    parent: undefined,
    orderHint: undefined,
    metaTitle: undefined,
    metaDescription: undefined,
    metaKeywords: undefined,
    assets: undefined,
    custom: undefined,
  });
});
