import { LocalizedStringDraft } from '@/models/commons';
import { TCategoryDraftBuilder } from '../../../types';
import empty from '../empty';

const kids = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Kids'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('kids'))
    .description(
      LocalizedStringDraft.presets.empty()['en-US']('Items for kids')
    )
    .key('kids')
    .orderHint('0.25');

export default kids;
