import { ModalsProvider } from "@mantine/modals";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./contextes/authContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { NotificationsProvider } from "@mantine/notifications";

const client = new QueryClient();

function Providers({ children }) {
  return (
    <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={client}>
          <NotificationsProvider>
            <ModalsProvider>{children}</ModalsProvider>
          </NotificationsProvider>
        </QueryClientProvider>
      </AuthProvider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Providers children={<App />} />);
