import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import type { TStoreDraftBuilder } from '../../../types';
import * as StoreDraft from '../../index';

const b2cRetailStore = (): TStoreDraftBuilder =>
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
