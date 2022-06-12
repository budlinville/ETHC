export const writeToChromeStorage = (key, value) => {
    const obj = {};
    obj[key] = value;
    chrome.storage.sync.set(obj);
}