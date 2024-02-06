import type { TReferenceDraft } from '../../../types';
import typeReference from './type-reference';

it('should build a type reference', () => {
  const built = typeReference().build<TReferenceDraft<'type'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'type',
  });
});
