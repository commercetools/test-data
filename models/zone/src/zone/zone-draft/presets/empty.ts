import type { TZoneDraftBuilder } from '../../../types';
import ZoneDraft from '../builder';

const empty = (): TZoneDraftBuilder =>
  ZoneDraft().key(undefined).description(undefined).locations(undefined);

export default empty;
