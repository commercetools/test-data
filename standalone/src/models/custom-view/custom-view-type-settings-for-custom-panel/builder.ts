import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCustomViewTypeSettingsForCustomPanel,
  TCreateCustomViewTypeSettingsForCustomPanelBuilder,
} from './types';

const Model: TCreateCustomViewTypeSettingsForCustomPanelBuilder = () =>
  Builder<TCustomViewTypeSettingsForCustomPanel>({
    generator,
    transformers,
  });

export default Model;
