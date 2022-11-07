import { LocalizedString } from '@commercetools-test-data/commons';
import LocalizedEnumValue from './builder';

export default {
  red: () =>
    LocalizedEnumValue()
      .key('red')
      .label(LocalizedString.presets.empty().en('Red color').de('Rote Farbe')),
  blue: () =>
    LocalizedEnumValue()
      .key('blue')
      .label(
        LocalizedString.presets.empty().en('Blue color').de('Blaue Farbe')
      ),
  green: () =>
    LocalizedEnumValue()
      .key('green')
      .label(
        LocalizedString.presets.empty().en('Green color').de('Grüne Farbe')
      ),
  s: () =>
    LocalizedEnumValue()
      .key('s')
      .label(LocalizedString.presets.empty().en('Size S').de('Größe S')),
  m: () =>
    LocalizedEnumValue()
      .key('m')
      .label(LocalizedString.presets.empty().en('Size M').de('Größe M')),
  l: () =>
    LocalizedEnumValue()
      .key('l')
      .label(LocalizedString.presets.empty().en('Size L').de('Größe L')),
  xl: () =>
    LocalizedEnumValue()
      .key('xl')
      .label(LocalizedString.presets.empty().en('Size XL').de('Größe XL')),
};
