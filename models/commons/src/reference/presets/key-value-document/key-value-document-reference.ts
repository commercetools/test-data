import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const keyValueDocumentReference = (): TReferenceBuilder =>
  Reference().typeId('key-value-document');

export default keyValueDocumentReference;
