import * as withLargeSizePresets from './with-large-size/with-large-size';
import * as withMediumSizePresets from './with-medium-size/with-medium-size';
import * as withSmallSizePresets from './with-small-size/with-small-size';
import * as withThumbSizePresets from './with-thumb-size/with-thumb-size';
import * as withZoomSizePresets from './with-zoom-size/with-zoom-size';

export const restPresets = {
  withThumbSize: withThumbSizePresets.restPreset,
  withSmallSize: withSmallSizePresets.restPreset,
  withMediumSize: withMediumSizePresets.restPreset,
  withLargeSize: withLargeSizePresets.restPreset,
  withZoomSize: withZoomSizePresets.restPreset,
};
export const graphqlPresets = {
  withThumbSize: withThumbSizePresets.graphqlPreset,
  withSmallSize: withSmallSizePresets.graphqlPreset,
  withMediumSize: withMediumSizePresets.graphqlPreset,
  withLargeSize: withLargeSizePresets.graphqlPreset,
  withZoomSize: withZoomSizePresets.graphqlPreset,
};
