import * as clothesStore from './clothes-store';
import * as foodStore from './food-store';

export const restPresets = {
  foodStore: foodStore.restPreset,
  clothesStore: clothesStore.restPreset,
};
export const graphqlPresets = {
  foodStore: foodStore.graphqlPreset,
  clothesStore: clothesStore.graphqlPreset,
};
export const compatPresets = {
  foodStore: foodStore.compatPreset,
  clothesStore: clothesStore.compatPreset,
};
