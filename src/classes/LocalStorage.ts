interface ClickerData {
    version: number;
    clicks: number;
}

interface LocalStorageMap {
    clicker: ClickerData;
    background: boolean
}

class LocalStorage {
    public static set<K extends keyof LocalStorageMap>(
        key: K,
        value: LocalStorageMap[K],
        serialize: (value: LocalStorageMap[K]) => string = JSON.stringify) {

        localStorage.setItem(key, serialize(value))
    }

    public static get<K extends keyof LocalStorageMap>(
        key: K,
        deserialize?: (str: LocalStorageMap[K]) => LocalStorageMap[K]): LocalStorageMap[K] | undefined {
        const item = localStorage.getItem(key);

        return item
            ? deserialize
                ? deserialize(JSON.parse(item))
                : JSON.parse(item)
            : undefined;
    }

    public static reset<K extends keyof LocalStorageMap>(key: K): void {
        localStorage.removeItem(key);
    }
}

export default LocalStorage;