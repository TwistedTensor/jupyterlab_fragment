# jupyterlab_fragment

A jupyterlab MIME renderer for fragment shaders.


## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install jupyterlab_fragment
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```

