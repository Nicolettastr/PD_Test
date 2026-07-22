import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EpisodeDetail } from "../pages/EpisodeDetail/EpisodeDetail";
import { Home } from "../pages/Home/Home";
import { PodcastDetail } from "../pages/PodcastDetail/PodcastDetail";
import { ROUTES } from "./routes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.EPISODE_DETAIL} element={<EpisodeDetail />} />
        <Route path={ROUTES.PODCAST_DETAIL} element={<PodcastDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
