import * as distributionChannelPresets from './distribution-channel';
import * as inventoryChannelPresets from './inventory-channel';

export const restPresets = {
  distributionChannel: distributionChannelPresets.restPreset,
  inventoryChannel: inventoryChannelPresets.restPreset,
};

export const graphqlPresets = {
  distributionChannel: distributionChannelPresets.graphqlPreset,
  inventoryChannel: inventoryChannelPresets.graphqlPreset,
};

export const compatPresets = {
  distributionChannel: distributionChannelPresets.compatPreset,
  inventoryChannel: inventoryChannelPresets.compatPreset,
};
