import type { TInventoryEntryDraftBuilder } from '../../types';
import InventoryEntryDraft from '../builder';

const empty = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft()
    .key(undefined)
    .supplyChannel(undefined)
    .restockableInDays(undefined)
    .expectedDelivery(undefined);

export default empty;
