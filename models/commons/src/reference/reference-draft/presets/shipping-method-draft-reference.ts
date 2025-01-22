import { referenceTypes } from '../../constants';
import { buildReferenceDraftPresets } from './_shared/reference-draft-presets-builder';

const presets = buildReferenceDraftPresets(referenceTypes.shippingMethod);

export default presets;
