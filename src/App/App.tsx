import { CssBaseline, ThemeProvider } from "@mui/material";
import { FC } from "react";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router";
import { LoaderData } from "../types/loader";
import { ContentView } from "../views/ContentView";
import { HomeView } from "../views/HomeView";
import { theme } from "./theme";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeView />,
    },
    {
      path: "/card",
      loader: ({ request }) => {
        const url = new URL(request.url);
        const queryParam = url.searchParams;
        if (!queryParam.has("id")) {
          return redirect("/");
        }
        return redirect(`/card/${queryParam.get("id")!}`);
      },
    },
    {
      path: "/card/:id",
      element: <ContentView />,
      loader: async ({ params }) => {
        const { id } = params;
        if (id === undefined) {
          return redirect("/");
        }
        const response = await fetch(
          `${
            import.meta.env.BASE_URL
          }assets/content/${id}.enc`
        );
        if (!response.ok) {
          return redirect("/");
        }
        if (
          response.headers.has("content-type") &&
          response.headers.get("content-type") !==
            "application/octet-stream"
        ) {
          return redirect("/");
        }
        const content = await response.text();
        const loaderData: LoaderData = {
          id,
          content,
        };
        return loaderData;
      },
    },
    {
      path: "*",
      loader: () => {
        return redirect("/");
      },
    },
  ],
  {
    basename: "/project-new-year-card-2025/",
  }
);

export const App: FC = () => {
  // const [content, setContent] = useState("");
  // useEffect(() => {
  //   (async () => {
  //     const c = await fetch(qq);
  //     const t = await c.text();
  //     setContent(t);

  //     const { encryptedDocument, iv } =
  //       await encryptDocument(t, "to-my-favourite-co-lead");
  //     console.log(JSON.stringify(iv));
  //     console.log(JSON.stringify(encryptedDocument));
  //   })();
  // }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Container maxWidth="md">
        <StyledMarkdown>{content}</StyledMarkdown>
      </Container> */}
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
