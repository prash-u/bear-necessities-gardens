import { createContext, useContext, type ReactNode } from "react";
import { logoShowcaseModes, type LogoShowcaseMode } from "@/data/siteContent";

type ActiveLogoContextValue = {
  activeMode: LogoShowcaseMode["id"];
  selectedLogo: LogoShowcaseMode;
};

const ActiveLogoContext = createContext<ActiveLogoContextValue | null>(null);

type ActiveLogoProviderProps = {
  activeMode: LogoShowcaseMode["id"];
  children: ReactNode;
};

export const ActiveLogoProvider = ({
  activeMode,
  children,
}: ActiveLogoProviderProps) => {
  const selectedLogo =
    logoShowcaseModes.find((mode) => mode.id === activeMode) ?? logoShowcaseModes[0];

  return (
    <ActiveLogoContext.Provider value={{ activeMode, selectedLogo }}>
      {children}
    </ActiveLogoContext.Provider>
  );
};

export const useActiveLogo = () => {
  const context = useContext(ActiveLogoContext);

  if (!context) {
    throw new Error("useActiveLogo must be used within an ActiveLogoProvider.");
  }

  return context;
};
