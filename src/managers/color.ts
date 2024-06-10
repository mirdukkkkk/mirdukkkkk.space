import {createContext} from "preact";
import {type Signal, signal} from "@preact/signals";
import config from "../config";

export const ColorManager = {
    color: signal(config.colors[Math.floor(Math.random() * config.colors.length)]) as Signal<string>,
    changeColor(random: boolean = false) {
        ColorManager.color.value = random
            ? config.colors[Math.floor(Math.random() * config.colors.length)]
            : config.colors[(config.colors.indexOf(ColorManager.color.value) + 1) % config.colors.length];
    }
}

export function generateColorManager(initialvalue: string) {
    return Object.assign(ColorManager, { color: signal(initialvalue) });
}

export const ColorContext = createContext({ } as typeof ColorManager);