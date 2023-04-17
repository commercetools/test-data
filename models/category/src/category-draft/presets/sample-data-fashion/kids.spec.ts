import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import kids from './kids';

describe(`with kids preset`, () => {
  it('should provide a kids preset', () => {
    const kidsCategoryDraft = kids().build<TCategoryDraft>();
    expect(kidsCategoryDraft).toEqual({
      key: 'kids',
      externalId: undefined,
      name: expect.objectContaining({
        de: undefined,
        en: undefined,
        fr: undefined,
        'en-US': 'Kids',
      }),
      slug: expect.objectContaining({
        de: undefined,
        en: undefined,
        fr: undefined,
        'en-US': 'kids',
      }),
      description: expect.objectContaining({
        de: undefined,
        en: undefined,
        fr: undefined,
        'en-US': 'Items for kids',
      }),
      parent: undefined,
      orderHint: '0.25',
      metaTitle: undefined,
      metaDescription: undefined,
      metaKeywords: undefined,
      assets: [],
      custom: undefined,
    });
  });

  it('should provide a kids preset when built for graphql', () => {
    const kidsCategoryDraftGraphql =
      kids().buildGraphql<TCategoryDraftGraphql>();
    expect(kidsCategoryDraftGraphql).toEqual({
      key: 'kids',
      externalId: undefined,
      name: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en-US',
          value: 'Kids',
          __typename: 'LocalizedString',
        }),
      ]),
      slug: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en-US',
          value: 'kids',
          __typename: 'LocalizedString',
        }),
      ]),
      description: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en-US',
          value: 'Items for kids',
          __typename: 'LocalizedString',
        }),
      ]),
      parent: undefined,
      orderHint: '0.25',
      metaTitle: undefined,
      metaDescription: undefined,
      metaKeywords: undefined,
      assets: [],
      custom: undefined,
      __typename: 'CategoryDraft',
    });
  });
});
