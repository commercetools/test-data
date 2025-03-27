import * as empty from './empty';
import sampleDataB2B from './sample-data-b2b';
import sampleDataB2CLifestyle from './sample-data-b2c-lifestyle';
import sampleDataFashion from './sample-data-fashion';
import * as withOneImage from './with-one-image';
import * as withPrices from './with-prices';
import * as withTwoImages from './with-two-images';

// const presets = {
//   withPrices,
//   withOneImage,
//   withTwoImages,
//   empty,
//   sampleDataB2B,
//   sampleDataB2CLifestyle,
//   sampleDataFashion,
// };

// export default presets;

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
