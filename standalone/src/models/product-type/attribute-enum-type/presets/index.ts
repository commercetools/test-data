import { AttributePlainEnumValue } from '@/models/product-type';
import AttributeEnumType from '../builder';

const presets = {
  allSizesEnum: () =>
    AttributeEnumType().values([
      AttributePlainEnumValue.presets.s(),
      AttributePlainEnumValue.presets.m(),
      AttributePlainEnumValue.presets.l(),
      AttributePlainEnumValue.presets.xl(),
    ]),
  smallSizesEnum: () =>
    AttributeEnumType().values([
      AttributePlainEnumValue.presets.s(),
      AttributePlainEnumValue.presets.m(),
    ]),

  bigSizesEnum: () =>
    AttributeEnumType().values([
      AttributePlainEnumValue.presets.l(),
      AttributePlainEnumValue.presets.xl(),
    ]),
};

export default presets;
