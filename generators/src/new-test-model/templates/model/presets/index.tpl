{{@if(it.isPresetExampleRequired === true)}}
import * as examplePresets from './example-preset/example-preset';

export const restPresets = {
  example: examplePresets.restPreset,
};
export const graphqlPresets = {
  example: examplePresets.graphqlPreset,
};
{{#else}}
export const restPresets = {};
export const graphqlPresets = {};
{{/if}}
