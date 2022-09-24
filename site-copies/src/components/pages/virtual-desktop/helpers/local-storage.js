// export const setLocalStorageItem = (namespace, key, val) => {
//     let allItems = localStorage[namespace].split('|').slice(0, -1);

//     if (allItems[allItems.indexOf(allItems.find(e => e.includes(`${key}=`) ? e : null))] === undefined) {
//         allItems.push(`${key}=${val}`);
//     } else {
//         allItems[allItems.indexOf(allItems.find(e => e.includes(`${key}=`) ? e : null))] = `${key}=${val}`;
//     }
    
//     localStorage[namespace] = allItems.join('|') + "|";
//     return allItems.join('|') + "|";
// }

// export const getLocalStorageItem = (namespace, key) => localStorage[namespace].split('|').slice(0, -1).find(e => e.includes(`${key}=`) ? e : null).replace(`${key}=`, "");

export const getLocalStorageItem = (namespace) => JSON.parse(localStorage[namespace]);

export const setLocalStorageItem = (namespace, key, val) => {
    
}