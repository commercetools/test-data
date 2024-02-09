import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const extensionReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('extension');

export default extensionReference;
