# Generators CLI

This package implements a command line interface providing different code generation options.

These are the current available generators:

- New test data model: Creates the base code required for any test data model

## How to use

Run this command:

```bash
pnpm generate
```

Although you can use the tool from this directory, we also provide an NPM script you can run from the root of the repository for better DX:

```bash
pnpm generate-model
```

### New test data model generator

This is an interactive command that will ask some questions in order to generate the right code.

It has two main options:

- Standalone package data model: Create a new public package in the repository
- Child data model: Adds a new data model to an existing package

Once the new model is created, you might want to check the contents of the new files and you will find some `TODO` comments with instructions about the next steps you should be following.
