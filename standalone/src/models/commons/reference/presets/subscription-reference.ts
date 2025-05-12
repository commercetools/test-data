import { referenceTypes } from '../constants';
import { buildReferencePresets } from './_shared/reference-presets-builder';

const presets = buildReferencePresets(referenceTypes.subscription);

export default presets;
