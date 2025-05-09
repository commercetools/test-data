import { referenceTypes } from '../constants';
import { buildReferencePresets } from './_shared/reference-presets-builder';

const presets = buildReferencePresets(referenceTypes.customer);

export default presets;
