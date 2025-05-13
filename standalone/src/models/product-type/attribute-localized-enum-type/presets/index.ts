import { AttributeLocalizedEnumValue } from '@/models/product-type';
import AttributeLocalizedEnumType from '../builder';

const presets = {
  allSizesLenum: () =>
    AttributeLocalizedEnumType().values([
      AttributeLocalizedEnumValue.presets.s(),
      AttributeLocalizedEnumValue.presets.m(),
      AttributeLocalizedEnumValue.presets.l(),
      AttributeLocalizedEnumValue.presets.xl(),
    ]),

  smallSizesLenum: () =>
    AttributeLocalizedEnumType().values([
      AttributeLocalizedEnumValue.presets.s(),
      AttributeLocalizedEnumValue.presets.m(),
    ]),

  bigSizesLenum: () =>
    AttributeLocalizedEnumType().values([
      AttributeLocalizedEnumValue.presets.l(),
      AttributeLocalizedEnumValue.presets.xl(),
    ]),
};

export default presets;
