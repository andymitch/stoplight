export const LightConfig: Record<
    string,
    {
        lit_style: string;
        unlit_style: string;
        duration: number;
        next: string;
    }
> = {
    red: {
        lit_style: "bg-red-500 shadow-lg shadow-red-500/50",
        unlit_style: "bg-red-900/30",
        duration: 2000,
        next: "yellow",
    },
    yellow: {
        lit_style: "bg-yellow-500 shadow-lg shadow-yellow-500/50",
        unlit_style: "bg-yellow-900/30",
        duration: 1000,
        next: "green",
    },
    green: {
        lit_style: "bg-green-500 shadow-lg shadow-green-500/50",
        unlit_style: "bg-green-900/30",
        duration: 5000,
        next: "red",
    },
};

export const startColor = Object.keys(LightConfig)[0];
