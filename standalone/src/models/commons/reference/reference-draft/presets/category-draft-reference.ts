import { referenceTypes } from '../../constants';
import { buildReferenceDraftPresets } from './_shared/reference-draft-presets-builder';

const presets = buildReferenceDraftPresets(referenceTypes.category);

export default presets;
