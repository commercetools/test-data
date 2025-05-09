import { LocalizedString } from '../../../commons';
import AttributeLocalizedEnumValue from '../builder';

const presets = {
  s: () =>
    AttributeLocalizedEnumValue()
      .key('s')
      .label(LocalizedString.presets.empty().en('Size S').de('Größe S')),
  m: () =>
    AttributeLocalizedEnumValue()
      .key('m')
      .label(LocalizedString.presets.empty().en('Size M').de('Größe M')),
  l: () =>
    AttributeLocalizedEnumValue()
      .key('l')
      .label(LocalizedString.presets.empty().en('Size L').de('Größe L')),
  xl: () =>
    AttributeLocalizedEnumValue()
      .key('xl')
      .label(LocalizedString.presets.empty().en('Size XL').de('Größe XL')),
};

export default presets;
