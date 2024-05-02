import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsProjectExtension } from '@commercetools-test-data/graphql-types/src/generated/settings';

export type TProjectExtension = Omit<TMcSettingsProjectExtension, '__typename'>;

export type TProjectExtensionGraphql = TMcSettingsProjectExtension;

export type TProjectExtensionBuilder = TBuilder<TProjectExtension>;
export type TCreateProjectExtensionBuilder = () => TProjectExtensionBuilder;
