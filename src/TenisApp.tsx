import { LevelsProvider } from "./app/context/levels/";
import { AppRouter } from "./router/AppRouter"

export const TenisApp = () => {
  return (
    <LevelsProvider>
      <AppRouter />
    </LevelsProvider>
  )
}
