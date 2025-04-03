import * as empty from './empty';
import * as sampleDataB2B from './sample-data-b2b';
import * as sampleDataB2CLifestyle from './sample-data-b2c-lifestyle';
import * as sampleDataFashion from './sample-data-fashion';
import * as withOneImage from './with-one-image';
import * as withPrices from './with-prices';
import * as withTwoImages from './with-two-images';

export const restPresets = {
  empty: empty.restPreset,
  withPrices: withPrices.restPreset,
  withOneImage: withOneImage.restPreset,
  withTwoImages: withTwoImages.restPreset,
  sampleDataB2B: sampleDataB2B.restPresets,
  sampleDataB2CLifestyle: sampleDataB2CLifestyle.restPresets,
  sampleDataFashion: sampleDataFashion.restPresets,
};

export const graphqlPresets = {
  empty: empty.graphqlPreset,
  withPrices: withPrices.graphqlPreset,
  withOneImage: withOneImage.graphqlPreset,
  withTwoImages: withTwoImages.graphqlPreset,
  sampleDataB2B: sampleDataB2B.graphqlPresets,
  sampleDataB2CLifestyle: sampleDataB2CLifestyle.graphqlPresets,
  sampleDataFashion: sampleDataFashion.graphqlPresets,
};

export const compatPresets = {
  empty: empty.compatPreset,
  withPrices: withPrices.compatPreset,
  withOneImage: withOneImage.compatPreset,
  withTwoImages: withTwoImages.compatPreset,
  sampleDataB2B: sampleDataB2B.compatPresets,
  sampleDataB2CLifestyle: sampleDataB2CLifestyle.compatPresets,
  sampleDataFashion: sampleDataFashion.compatPresets,
};
