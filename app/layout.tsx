import "../styles/globals.css";
import Header from "../components/Header";
import { AuthProvider } from "../context/AuthContext";
import '@fontsource/inter'

// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{fontFamily:'Inter,sans-serif'}}>
        <AuthProvider>
          <Header />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
