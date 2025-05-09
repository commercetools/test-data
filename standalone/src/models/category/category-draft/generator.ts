import { Generator, fake } from '../../../core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../commons';
import type { TCategoryDraft } from '../types';

const KEY = 'key';

// https://docs.commercetools.com/api/projects/categories#categorydraft

const generator = Generator<TCategoryDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    externalId: fake((f) => f.string.uuid()),
    name: fake(() => LocalizedStringDraft.random()),
    slug: fake(() => LocalizedStringDraft.presets.ofSlugs()),
    description: null,
    parent: fake(() => KeyReferenceDraft.presets.category().key(KEY)),
    orderHint: fake((f) => f.number.float({ min: 0.01, max: 0.99 }).toString()),
    metaTitle: null,
    metaDescription: null,
    metaKeywords: null,
    assets: null,
    custom: null,
  },
});

export default generator;
