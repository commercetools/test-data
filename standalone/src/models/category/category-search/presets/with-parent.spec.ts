import type { TCategorySearchGraphql } from '../types';
import withParent from './with-parent';

it('should set the label only for en locale', () => {
  const categoryWithParent: TCategorySearchGraphql = withParent().build();
  expect(categoryWithParent).toEqual(
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
    })
  );
});
