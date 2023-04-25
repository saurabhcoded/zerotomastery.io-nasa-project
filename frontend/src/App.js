import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Arwes,
  SoundsProvider,
  ThemeProvider,
  createSounds,
  createTheme,
} from "arwes";

import AppLayout from "./pages/AppLayout";

import { theme, resources, sounds } from "./settings";
import CourseUpload from "./pages/CourseUpload";

const App = () => {
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <SoundsProvider sounds={createSounds(sounds)}>
        <Arwes
          animate
          background={resources.background.large}
          pattern={resources.pattern}
        >
          {(anim) => (
            <Router>
              <Route path="/courseupload">
                <CourseUpload />
              </Route>
              <AppLayout show={anim.entered} />
            </Router>
          )}
        </Arwes>
      </SoundsProvider>
    </ThemeProvider>
  );
};

export default App;
