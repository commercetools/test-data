import { LocalizedStringDraft } from '@/models/commons';
import type { TCategoryDraftBuilder } from '../../../types';
import empty from '../empty';

const furniture = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Furniture')
        ['en-US']('Furniture')
        ['de-DE']('Möbel')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('furniture')
        ['en-US']('furniture')
        ['de-DE']('furniture')
    )
    .key('furniture')
    .orderHint('0.2');

export default furniture;
