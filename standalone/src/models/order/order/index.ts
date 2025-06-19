import LegacyBuilder from './builder';
import * as constants from './constants';
import draftPresets from './order-from-cart-draft/presets';
import presets from './presets';

export const Order = {
  constants,
  draftPresets: draftPresets,
  presets: presets,
  random: LegacyBuilder,
};
