const STORAGE_KEY = 'coding-minutes-ide-user-settings';

export function getSettings() {
  const settings = localStorage.getItem(STORAGE_KEY);
  if (settings) return JSON.parse(settings);
  return {};
}

export function setSettings(settings) {
  const oldSettings = getSettings();
  const newSettings = {
    ...oldSettings,
    ...settings,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings));
}
