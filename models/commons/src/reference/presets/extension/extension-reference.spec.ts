import type { TReference } from '../../types';
import extensionReference from './extension-reference';

it('should build an extension reference', () => {
  const built = extensionReference().build<TReference<'extension'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'extension',
  });
});
