import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'puzzlecards', ...(require('/Users/oumatsu/Desktop/my-projects/umi-test/front-end/src/models/puzzlecards.js').default) });
app.model({ namespace: 'test', ...(require('/Users/oumatsu/Desktop/my-projects/umi-test/front-end/src/models/test.js').default) });
