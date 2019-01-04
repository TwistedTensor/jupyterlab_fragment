import {
  IRenderMime
} from '@jupyterlab/rendermime-interfaces';

import {
  Widget
} from '@phosphor/widgets';

import {
  GlslCanvas
} from 'glslCanvas';

/**
 * The default mime type for the extension.
 */
const MIME_TYPE = 'text/fragment';


/**
 * The class name added to the extension.
 */
const CLASS_NAME = 'jp-OutputWidgetfragment';


/**
 * A widget for rendering fragment.
 */
export
class OutputWidget extends Widget implements IRenderMime.IRenderer {
  /**
   * Construct a new output widget.
   */
  constructor(options: IRenderMime.IRendererOptions) {
    super();
    this._mimeType = options.mimeType;
    this.addClass(CLASS_NAME);
  }

  /**
   * Render fragment into this widget's node.
   */
  renderModel(model: IRenderMime.IMimeModel): Promise<void> {
    var canvas = document.createElement("canvas");
    var sandbox = new GlslCanvas(canvas);
    sandbox.load(model.data[this._mimeType]);
    this.node.appendChild(sandbox);
    return Promise.resolve(void 0);
  }

  private _mimeType: string;
}


/**
 * A mime renderer factory for fragment data.
 */
export
const rendererFactory: IRenderMime.IRendererFactory = {
  safe: true,
  mimeTypes: [MIME_TYPE],
  createRenderer: options => new OutputWidget(options)
};


const extension: IRenderMime.IExtension = {
  id: 'jupyterlab_fragment:plugin',
  rendererFactory,
  rank: 0,
  dataType: 'string'
};

export default extension;

