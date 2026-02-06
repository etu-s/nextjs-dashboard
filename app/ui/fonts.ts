import {Abyssinica_SIL, Inter, Lusitana, Playpen_Sans} from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const playpenSans = Playpen_Sans({
    subsets: ["latin"], weight: ["600", "800"],
});
export const lusitana = Lusitana({
    subsets: ["latin"], weight: ["400", "700"],
});

export const abyssinicaSil = Abyssinica_SIL({
    subsets: ["ethiopic"], weight: ["400"],
}); 