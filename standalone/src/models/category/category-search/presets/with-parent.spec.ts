import { TCategorySearch } from '../../category/types';
import withParent from './with-parent-and-ancestors';

it('should set the label only for en locale', () => {
  const categoryWithParent: TCategorySearch = withParent().build();
  expect(categoryWithParent).toEqual(
    expect.objectContaining({
      parent: expect.objectContaining({
        id: expect.any(String),
        name: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
      }),
    })
  );
});
