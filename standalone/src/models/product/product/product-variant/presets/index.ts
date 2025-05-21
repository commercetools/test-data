import * as boringGenericMilkMasterVariant from './boring-generic-milk-master-variant';
import * as happyCowMilkMasterVariant from './happy-cow-milk-master-variant';
import * as withBooleanAttributeVariant from './with-boolean-attribute-preset';

export const restPresets = {
  boringGenericMilkMasterVariant: boringGenericMilkMasterVariant.restPreset,
  happyCowMilkMasterVariant: happyCowMilkMasterVariant.restPreset,
  withBooleanAttributeVariant: withBooleanAttributeVariant.restPreset,
};
export const graphqlPresets = {
  boringGenericMilkMasterVariant: boringGenericMilkMasterVariant.graphqlPreset,
  happyCowMilkMasterVariant: happyCowMilkMasterVariant.graphqlPreset,
  withBooleanAttributeVariant: withBooleanAttributeVariant.graphqlPreset,
};

export const compatPresets = {
  boringGenericMilkMasterVariant: boringGenericMilkMasterVariant.compatPreset,
  happyCowMilkMasterVariant: happyCowMilkMasterVariant.compatPreset,
  withBooleanAttributeVariant: withBooleanAttributeVariant.compatPreset,
};
