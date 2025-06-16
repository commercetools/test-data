import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import women from './women';

const womenCategoryDraft = women().build<TCategoryDraft>();

const otherWomen = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Other'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('other_women'))
    .parent(KeyReferenceDraft.presets.category().key(womenCategoryDraft.key!))
    .key('other-women')
    .orderHint('0.5')
    .assets([]);

export default otherWomen;
