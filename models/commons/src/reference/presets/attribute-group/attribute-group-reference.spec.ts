import type { TReference } from '../../types';
import attributeGroupReference from './attribute-group-reference';

it('should build an attribute-group reference', () => {
  const built =
    attributeGroupReference().build<TReference<'attribute-group'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'attribute-group',
  });
});
