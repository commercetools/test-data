import { TCategorySearch } from '../../types';
import withParentAndAncestors from './with-parent-and-ancestors';

it('should set the label only for en locale', () => {
  const categoryWithParentAndAncestors: TCategorySearch =
    withParentAndAncestors().build();
  expect(categoryWithParentAndAncestors).toEqual(
    expect.objectContaining({
      parent: expect.objectContaining({
        id: expect.any(String),
        name: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
      }),
      ancestors: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          name: expect.objectContaining({
            en: expect.any(String),
            de: expect.any(String),
            fr: expect.any(String),
          }),
        }),
      ]),
    })
  );
});
