import type { IconName } from "@/lib/types";
import { iconsLib } from "../lib/constants";

interface IIcons {
    name: IconName;
}

export default function Icons({ name }: IIcons) {
    return iconsLib[name] ? iconsLib[name] : null;
}