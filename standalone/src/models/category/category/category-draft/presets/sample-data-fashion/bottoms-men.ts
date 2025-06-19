import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import men from './men';

const menCategoryDraft = men().build<TCategoryDraft>();

const bottomsMen = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Bottoms'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('bottoms_men'))
    .parent(KeyReferenceDraft.presets.category().key(menCategoryDraft.key!))
    .key('bottoms-men')
    .orderHint('0.4');

export default bottomsMen;
