import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import women from './women';

describe(`with women preset`, () => {
  it('should provide a women preset', () => {
    const womenCategoryDraft = women().build<TCategoryDraft>();
    expect(womenCategoryDraft).toEqual({
      key: 'women',
      externalId: undefined,
      name: expect.objectContaining({
        de: undefined,
        en: undefined,
        fr: undefined,
        'en-US': 'Women',
      }),
      slug: expect.objectContaining({
        de: undefined,
        en: undefined,
        fr: undefined,
        'en-US': 'women',
      }),
      description: expect.objectContaining({
        de: undefined,
        en: undefined,
        fr: undefined,
        'en-US': 'Items for women',
      }),
      parent: undefined,
      orderHint: '0.5',
      metaTitle: undefined,
      metaDescription: undefined,
      metaKeywords: undefined,
      assets: [],
      custom: undefined,
    });
  });

  it('should provide a women preset when built for graphql', () => {
    const womenCategoryDraftGraphql =
      women().buildGraphql<TCategoryDraftGraphql>();
    expect(womenCategoryDraftGraphql).toEqual({
      key: 'women',
      externalId: undefined,
      name: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en-US',
          value: 'Women',
          __typename: 'LocalizedString',
        }),
      ]),
      slug: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en-US',
          value: 'women',
          __typename: 'LocalizedString',
        }),
      ]),
      description: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en-US',
          value: 'Items for women',
          __typename: 'LocalizedString',
        }),
      ]),
      parent: undefined,
      orderHint: '0.5',
      metaTitle: undefined,
      metaDescription: undefined,
      metaKeywords: undefined,
      assets: [],
      custom: undefined,
      __typename: 'CategoryDraft',
    });
  });
});
