# @commercetools-test-data/template-model

This package provides the data model for the commercetools platform `TemplateModel` type

https://docs.commercetools.com/api/projects/templateModel#template

# Install

```bash
$ yarn add -D @commercetools-test-data/template-model
```

# Usage

```ts
import type { TTemplateModel, TTemplateModel } from '@commercetools-test-data/template-model';
import * as TemplateModel from '@commercetools-test-data/template-model';

const template = TemplateModel.random().build<TTemplateModel>();
const templateDraft = TemplateModel.TemplateModelDraft.random().build<TTemplateModelDraft>();
```
