import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const keyValueDocumentReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('key-value-document');

export default keyValueDocumentReference;
