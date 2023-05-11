import type { TZoneDraftBuilder } from '../../types';
import ZoneDraft from '../builder';

const empty = (): TZoneDraftBuilder =>
  ZoneDraft().description(undefined).key(undefined).locations(undefined);

export default empty;
