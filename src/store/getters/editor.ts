export const getSelectedLanguage = () => (state) => state.editor.selectedLanguage;
export const getCurrentSource = () => (state) =>
  state.editor.sourceLanguageMap[state.editor.selectedLanguage?.id] || ' ';
export const getStdin = () => (state) => state.editor.stdin;
export const getStdout = () => (state) => state.editor.stdout;
export const getReturnCode = () => (state) => state.editor.returnCode;
