import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const inventoryEntryReference = (): TReferenceBuilder =>
  Reference().typeId('inventory-entry');

export default inventoryEntryReference;
