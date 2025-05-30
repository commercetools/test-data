import { TBuilder } from '@/core';
import { LocalizedStringDraft } from '../../../../../commons';
import { TStoreDraftGraphql, TStoreDraftRest } from '../../../types';
import * as StoreDraft from '../../index';

const b2cRetailStore = (): TBuilder<TStoreDraftRest | TStoreDraftGraphql> =>
  StoreDraft.presets
    .empty()
    .key('b2c-retail-store')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('B2C Retail Store')
        ['en-GB']('B2C Retail Store')
    );
export default b2cRetailStore;
