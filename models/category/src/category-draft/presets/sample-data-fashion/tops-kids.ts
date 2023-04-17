import { LocalizedString, Reference } from '@commercetools-test-data/commons';
import * as CategoryDraft from '../..';
import { TCategoryDraftBuilder } from '../../../types';

const topsKids = (): TCategoryDraftBuilder =>
  CategoryDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Tops'))
    .slug(LocalizedString.presets.empty()['en-US']('tops_kids'))
    .description(LocalizedString.presets.empty()['en-US']('Tops'))
    .parent(Reference.presets.category()['key']('clothing-kids'))
    .key('tops-kids')
    .orderHint('0.3')
    .assets([]);

export default topsKids;
