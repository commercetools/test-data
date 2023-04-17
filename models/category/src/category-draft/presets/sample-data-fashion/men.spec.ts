import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import men from './men';

describe(`with men preset`, () => {
  it('should provide a men preset', () => {
    const menCategoryDraft = men().build<TCategoryDraft>();
    expect(menCategoryDraft).toEqual({
      key: 'men',
      externalId: undefined,
      name: expect.objectContaining({
        de: undefined,
        en: undefined,
        fr: undefined,
        'en-US': 'Men',
      }),
      slug: expect.objectContaining({
        de: undefined,
        en: undefined,
        fr: undefined,
        'en-US': 'men',
      }),
      description: expect.objectContaining({
        de: undefined,
        en: undefined,
        fr: undefined,
        'en-US': 'Items for men',
      }),
      parent: undefined,
      orderHint: '0.75',
      metaTitle: undefined,
      metaDescription: undefined,
      metaKeywords: undefined,
      assets: [],
      custom: undefined,
    });
  });

  it('should provide a men preset when built for graphql', () => {
    const menCategoryDraftGraphql = men().buildGraphql<TCategoryDraftGraphql>();
    expect(menCategoryDraftGraphql).toEqual({
      key: 'men',
      externalId: undefined,
      name: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en-US',
          value: 'Men',
          __typename: 'LocalizedString',
        }),
      ]),
      slug: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en-US',
          value: 'men',
          __typename: 'LocalizedString',
        }),
      ]),
      description: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en-US',
          value: 'Items for men',
          __typename: 'LocalizedString',
        }),
      ]),
      parent: undefined,
      orderHint: '0.75',
      metaTitle: undefined,
      metaDescription: undefined,
      metaKeywords: undefined,
      assets: [],
      custom: undefined,
      __typename: 'CategoryDraft',
    });
  });
});
