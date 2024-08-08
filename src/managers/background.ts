import {createContext} from "preact";
import {signal} from "@preact/signals";
import LocalStorage, {BackgroundData} from "../classes/LocalStorage";
import {star} from "../data/colors";

export const BackgroundManager = {
    isEnabled: signal(true),
    starColor: signal(star.default),
    starSpeed: signal(0.0005),
    toggle(value: boolean) {
        BackgroundManager.isEnabled.value = value;
        BackgroundManager.save();
    },
    nextStarColor() {
        BackgroundManager.starColor.value = star.available[
            (star.available.indexOf(BackgroundManager.starColor.value) + 1)
            % star.available.length
        ];
        BackgroundManager.save();
    },
    setStarSpeed(speed: number) {
        BackgroundManager.starSpeed.value = speed;
    },
    load() {
        const data = LocalStorage.get('background');
        if(!data) return;

        Object.keys(data).map((key) => (BackgroundManager as any)[key].value = (data as any)[key]);
    },
    save() {
        const data = {};
        const keys = Object.keys(BackgroundManager).slice(0, 2);

        keys.map((key) => (data as any)[key] = (BackgroundManager as any)[key].value);
        LocalStorage.set('background', data as BackgroundData);
    }
}

export const BackgroundContext = createContext({} as typeof BackgroundManager);