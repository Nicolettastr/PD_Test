import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { EpisodeDetail } from "../pages/EpisodeDetail/EpisodeDetail";
import { Home } from "../pages/Home/Home";
import { PodcastDetail } from "../pages/PodcastDetail/PodcastDetail";
import { ROUTES } from "./routes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.EPISODE_DETAIL} element={<EpisodeDetail />} />
          <Route path={ROUTES.PODCAST_DETAIL} element={<PodcastDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
