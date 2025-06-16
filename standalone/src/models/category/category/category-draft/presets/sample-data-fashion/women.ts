import { TBuilder } from '@/core';
import { LocalizedStringDraft } from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';

const women = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Women'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('women'))
    .description(
      LocalizedStringDraft.presets.empty()['en-US']('Items for women')
    )
    .key('women')
    .orderHint('0.5');

export default women;
