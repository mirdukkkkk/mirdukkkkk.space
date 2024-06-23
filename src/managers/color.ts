import {createContext} from "preact";
import {signal} from "@preact/signals";
import config from "../config";

export const ColorManager = {
    color: signal(config.colors[Math.floor(Math.random() * config.colors.length)]),
    nextColor() {
        ColorManager.color.value = config.colors[(config.colors.indexOf(ColorManager.color.value) + 1) % config.colors.length];
    }
    //ColorManager.color.value = config.colors[Math.floor(Math.random() * config.colors.length)];
}

export const ColorContext = createContext({} as typeof ColorManager);