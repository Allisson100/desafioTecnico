import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
import theme from "./styles/Theme.js";
import { ThemeProvider } from "styled-components";


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Router />
		</ThemeProvider>
	</React.StrictMode>,
);
