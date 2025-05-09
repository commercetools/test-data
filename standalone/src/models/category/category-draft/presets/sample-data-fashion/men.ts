import { LocalizedStringDraft } from '../../../../commons';
import type { TCategoryDraftBuilder } from '../../../types';
import empty from '../empty';

const men = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Men'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('men'))
    .description(LocalizedStringDraft.presets.empty()['en-US']('Items for men'))
    .key('men')
    .orderHint('0.75');

export default men;
