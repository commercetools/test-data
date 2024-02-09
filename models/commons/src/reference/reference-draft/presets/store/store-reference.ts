import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const storeReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('store');

export default storeReference;
