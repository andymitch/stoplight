import { useState, useEffect } from "react";
import { LightConfig, startColor } from "./config";
import "./index.css";

export default function Stoplight() {
    const [light, setLight] = useState<string>(startColor);

    useEffect(() => {
        const { next, duration } = LightConfig[light];
        const timer = setTimeout(() => setLight(next), duration);
        return () => clearTimeout(timer);
    }, [light]);

    return (
        <div className="min-h-screen min-w-screen bg-gray-900 flex items-center justify-center">
            <div className="bg-gray-800 rounded-3xl p-8 shadow-2xl flex flex-col gap-6">
                {Object.entries(LightConfig).map(
                    ([color, { lit_style, unlit_style }], i) => (
                        <div
                            key={i}
                            className={`w-32 h-32 rounded-full border-4 border-gray-700 transition-all duration-300 ${
                                light === color ? lit_style : unlit_style
                            }`}
                        />
                    ),
                )}
            </div>
        </div>
    );
}
