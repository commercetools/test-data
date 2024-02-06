import type { TReferenceDraft } from '../../../types';
import extensionReference from './extension-reference';

it('should build an extension reference', () => {
  const built = extensionReference().build<TReferenceDraft<'extension'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'extension',
  });
});
