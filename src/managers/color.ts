import {createContext} from "preact";
import {signal} from "@preact/signals";
import colors from "../data/colors";

export const ColorManager = {
    color: signal(colors.available[Math.floor(Math.random() * colors.available.length)]),
    nextColor() {
        ColorManager.color.value = colors.available[
            (colors.available.indexOf(ColorManager.color.value) + 1)
            % colors.available.length
        ];
    }
    //ColorManager.color.value = config.colors[Math.floor(Math.random() * config.colors.length)];
}

export const ColorContext = createContext({} as typeof ColorManager);