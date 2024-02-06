import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const channelReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('channel');

export default channelReference;
