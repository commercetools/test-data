import InventoryEntryDraft from '../../builders';

const withNoSupplyChannel = () =>
  InventoryEntryDraft().supplyChannel(undefined);

export default withNoSupplyChannel;
