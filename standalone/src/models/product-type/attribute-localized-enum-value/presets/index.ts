import { LocalizedString } from '@/models/commons';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from '../builders';

export const restPresets = {
  s: () =>
    RestModelBuilder()
      .key('s')
      .label(LocalizedString.presets.empty().en('Size S').de('Größe S')),
  m: () =>
    RestModelBuilder()
      .key('m')
      .label(LocalizedString.presets.empty().en('Size M').de('Größe M')),
  l: () =>
    RestModelBuilder()
      .key('l')
      .label(LocalizedString.presets.empty().en('Size L').de('Größe L')),
  xl: () =>
    RestModelBuilder()
      .key('xl')
      .label(LocalizedString.presets.empty().en('Size XL').de('Größe XL')),
};

export const graphqlPresets = {
  s: () =>
    GraphqlModelBuilder()
      .key('s')
      .labelAllLocales(
        LocalizedString.presets.empty().en('Size S').de('Größe S')
      ),
  m: () =>
    GraphqlModelBuilder()
      .key('m')
      .labelAllLocales(
        LocalizedString.presets.empty().en('Size M').de('Größe M')
      ),
  l: () =>
    GraphqlModelBuilder()
      .key('l')
      .labelAllLocales(
        LocalizedString.presets.empty().en('Size L').de('Größe L')
      ),
  xl: () =>
    GraphqlModelBuilder()
      .key('xl')
      .labelAllLocales(
        LocalizedString.presets.empty().en('Size XL').de('Größe XL')
      ),
};

export const compatPresets = {
  s: () =>
    CompatModelBuilder()
      .key('s')
      .label(LocalizedString.presets.empty().en('Size S').de('Größe S')),
  m: () =>
    CompatModelBuilder()
      .key('m')
      .label(LocalizedString.presets.empty().en('Size M').de('Größe M')),
  l: () =>
    CompatModelBuilder()
      .key('l')
      .label(LocalizedString.presets.empty().en('Size L').de('Größe L')),
  xl: () =>
    CompatModelBuilder()
      .key('xl')
      .label(LocalizedString.presets.empty().en('Size XL').de('Größe XL')),
};
