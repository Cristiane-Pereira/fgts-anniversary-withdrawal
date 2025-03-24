import { Montserrat } from "next/font/google";

// Import Context
import { AppWrapper } from "./contexts";

// Imports Styles
import "../assets/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Saque-aniversário FGTS",
  description: "O projeto calcula o valor do saque-aniversário do FGTS com base no saldo e no mês de aniversário do usuário.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable}`} suppressHydrationWarning>
        <AppWrapper>
           {children}
        </AppWrapper>
      </body>
    </html>
  );
}
