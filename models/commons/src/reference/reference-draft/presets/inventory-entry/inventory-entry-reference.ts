import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const inventoryEntryReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('inventory-entry');

export default inventoryEntryReference;
