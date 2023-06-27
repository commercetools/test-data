import type { TReference } from '../../types';
import keyValueDocumentReference from './key-value-document-reference';

it('should build a key-value-document reference', () => {
  const built =
    keyValueDocumentReference().build<TReference<'key-value-document'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'key-value-document',
  });
});
