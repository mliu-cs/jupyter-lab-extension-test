import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the xkcd-jupyter-lab-tutorial-matthew extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'xkcd-jupyter-lab-tutorial-matthew',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension xkcd-jupyter-lab-tutorial-matthew is activated!');
  }
};

export default extension;
