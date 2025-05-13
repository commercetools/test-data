import { LocalizedStringDraft } from '@/models/commons';
import type { TCategoryDraftBuilder } from '../../../types';
import empty from '../empty';

const women = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Women'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('women'))
    .description(
      LocalizedStringDraft.presets.empty()['en-US']('Items for women')
    )
    .key('women')
    .orderHint('0.5');

export default women;
