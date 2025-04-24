import { moodBg } from "@/utils/configs/colors";
import { create } from "zustand";

interface ColoPaletteState {
  bgColor: string;
  selectedPalette: number;
  setBgColor: (color: number) => void;
  setSelectedPalette: (index: number) => void;
}

interface ActivityState {
  selectedActivities: string[];
  setSelectedActivities: (activities: string[]) => void;
  toggleActivity: (activity: string) => void;
}

export const useColorPalettStore = create<ColoPaletteState>((set) => ({
  bgColor: moodBg[0],
  selectedPalette: 0,
  setBgColor: (color) => set({ bgColor: moodBg[color] }),
  setSelectedPalette: (index) =>
    set({
      selectedPalette: index,
      bgColor: moodBg[index],
    }),
}));

export const useActivityStore = create<ActivityState>((set) => ({
  selectedActivities: [],
  setSelectedActivities: (activities) =>
    set({ selectedActivities: activities }),
  toggleActivity: (activity) =>
    set((state) => ({
      selectedActivities: state.selectedActivities.includes(activity)
        ? state.selectedActivities.filter((a) => a !== activity)
        : [...state.selectedActivities, activity],
    })),
}));
