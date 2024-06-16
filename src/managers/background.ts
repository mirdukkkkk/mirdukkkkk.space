import {createContext} from "preact";
import {signal} from "@preact/signals";
import LocalStorage from "../classes/LocalStorage";

export const BackgroundManager = {
    isEnabled: signal(false),
    toggle(value: boolean) {
        BackgroundManager.isEnabled.value = value;
    },
    load() {
        BackgroundManager.isEnabled.value = (LocalStorage.get('background') ?? true);
    },
    save() {
        LocalStorage.set('background', BackgroundManager.isEnabled.value);
    }
}

export const BackgroundContext = createContext({} as typeof BackgroundManager);