import * as genericProduct from './generic-product';
import * as heavyEarthmovingAndConstructionEquipment from './heavy-earthmoving-and-construction-equipment';
import * as heavyLiftingAndSpecializedEquipment from './heavy-lifting-and-specialized-equipment';

export const restPresets = {
  heavyEarthmovingAndConstructionEquipment:
    heavyEarthmovingAndConstructionEquipment.restPreset,
  heavyLiftingAndSpecializedEquipment:
    heavyLiftingAndSpecializedEquipment.restPreset,
  genericProduct: genericProduct.restPreset,
};

export const graphqlPresets = {
  heavyEarthmovingAndConstructionEquipment:
    heavyEarthmovingAndConstructionEquipment.graphqlPreset,
  heavyLiftingAndSpecializedEquipment:
    heavyLiftingAndSpecializedEquipment.graphqlPreset,
  genericProduct: genericProduct.graphqlPreset,
};

export const compatPresets = {
  heavyEarthmovingAndConstructionEquipment:
    heavyEarthmovingAndConstructionEquipment.compatPreset,
  heavyLiftingAndSpecializedEquipment:
    heavyLiftingAndSpecializedEquipment.compatPreset,
  genericProduct: genericProduct.compatPreset,
};
