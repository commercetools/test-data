import InventoryEntryDraft from '../../builder';

const withNoSupplyChannel = () =>
  InventoryEntryDraft().supplyChannel(undefined);

export default withNoSupplyChannel;
