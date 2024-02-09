import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const attributeGroupReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('attribute-group');

export default attributeGroupReference;
