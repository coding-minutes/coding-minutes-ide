export const getSelectedLanguage = () => (state) => state.editor.selectedLanguage;
export const getCurrentSource = () => (state) =>
  state.editor.sourceLanguageMap[state.editor.selectedLanguage?.id] || ' ';
export const getStdin = () => (state) => state.editor.stdin;
export const getStdout = () => (state) => state.editor.stdout;
export const getReturnCode = () => (state) => state.editor.returnCode;
export const getLanguages = () => (state) => Object.values(state.editor.languages);
export const getLanguageMap = () => (state) => state.editor.languages;
