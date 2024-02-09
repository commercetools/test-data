import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const stateReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('state');

export default stateReference;
