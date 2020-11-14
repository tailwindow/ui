import highlightjs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
highlightjs.registerLanguage("javascript", javascript);

var highlight = {
  install: function(Vue) {
    Vue.directive("highlight", {
      mounted(el) {
        highlightjs.highlightBlock(el);
      },
      updated(el) {
        highlightjs.highlightBlock(el);
      }
    });
  }
};

export default highlight;
