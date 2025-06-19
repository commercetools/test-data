import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import women from './women';

const womenCategoryDraft = women().build<TCategoryDraft>();

const topsWomen = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Tops'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('tops_women'))
    .parent(KeyReferenceDraft.presets.category().key(womenCategoryDraft.key!))
    .key('tops-women')
    .orderHint('0.3');

export default topsWomen;
