import { useTheme } from "@/app/hooks/useTheme";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export default function SimpleDayNightToggle() {
  const [isNight, setIsNight] = useState(true);
  const { toggleTheme } = useTheme();

  const handleClick = () => {
    setIsNight(!isNight);
    toggleTheme();
  };

  return (
    <button
      onClick={handleClick}
      aria-label={isNight ? "Activar modo claro" : "Activar modo oscuro"}
      style={{
        border: "none",
        padding: "10px",
        background: "none",
        cursor: "pointer",
        display: "inline-block",
      }}
    >
      <div
        style={{
          width: "64px",
          height: "32px",
          borderRadius: "32px",
          background: isNight ? "#1a242ad8" : "#b6cedc",
          boxShadow: "0 1px 6px #0002",
          position: "relative",
          transition: "background 0.3s",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Slider */}
        <div
          style={{
            position: "absolute",
            top: "4px",
            left: isNight ? "32px" : "4px",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            background: isNight ? "#446171" : "#dceffa",
            boxShadow: "0 2px 8px #0001",
            transition: "left 0.3s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isNight ? (
            <Moon size={18} color="#c0e2f4" strokeWidth={2} />
          ) : (
            <Sun size={18} color="#FFD700" strokeWidth={2.5} />
          )}
        </div>
        {/* Fondo decorativo - opcional, puedes agregar estrellitas u ocultar */}
        {isNight && (
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          ></div>
        )}
      </div>
    </button>
  );
}
