import {createContext} from "preact";
import {signal} from "@preact/signals";
import {span} from "../data/colors";

export const ColorManager = {
    color: signal(span.available[Math.floor(Math.random() * span.available.length)]),
    nextColor() {
        ColorManager.color.value = span.available[
            (span.available.indexOf(ColorManager.color.value) + 1)
            % span.available.length
        ];
    }
}

export const ColorContext = createContext({} as typeof ColorManager);