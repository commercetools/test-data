import type { TReferenceDraft } from '../../../types';
import attributeGroupReference from './attribute-group-reference';

it('should build an attribute-group reference', () => {
  const built =
    attributeGroupReference().build<TReferenceDraft<'attribute-group'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'attribute-group',
  });
});
