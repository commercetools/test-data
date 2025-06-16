import { TCategorySearchGraphql } from '../../category/types';
import withParentAndAncestors from './with-parent-and-ancestors';

it('should set the label only for en locale', () => {
  const categoryWithParentAndAncestors: TCategorySearchGraphql =
    withParentAndAncestors().build();
  expect(categoryWithParentAndAncestors).toEqual(
    expect.objectContaining({
      parent: expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        nameAllLocales: expect.arrayContaining([
          {
            locale: expect.any(String),
            value: expect.any(String),
            __typename: 'LocalizedString',
          },
        ]),
      }),
      ancestors: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          name: expect.any(String),
          nameAllLocales: expect.arrayContaining([
            {
              locale: expect.any(String),
              value: expect.any(String),
              __typename: 'LocalizedString',
            },
          ]),
        }),
      ]),
    })
  );
});
