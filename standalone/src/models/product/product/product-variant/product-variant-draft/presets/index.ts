import * as empty from './empty';
import * as withOneImage from './with-one-image';
import * as withPrices from './with-prices';
import * as withTwoImages from './with-two-images';

export const restPresets = {
  empty: empty.restPreset,
  withPrices: withPrices.restPreset,
  withOneImage: withOneImage.restPreset,
  withTwoImages: withTwoImages.restPreset,
};

export const graphqlPresets = {
  empty: empty.graphqlPreset,
  withPrices: withPrices.graphqlPreset,
  withOneImage: withOneImage.graphqlPreset,
  withTwoImages: withTwoImages.graphqlPreset,
};

export const compatPresets = {
  empty: empty.compatPreset,
  withPrices: withPrices.compatPreset,
  withOneImage: withOneImage.compatPreset,
  withTwoImages: withTwoImages.compatPreset,
};
