
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentification from "../pages/authentification";

const Component_Router = () => {
    return (
        <>
            {/* <Router>
                <Routes>
                    <Route path="/" element={
                        <RedirectIfAuth>
                            <Authentification />
                        </RedirectIfAuth>   
                    } />
                    <Route path="/home" element={
                        <ProtectedRoute >
                            <Home />
                        </ProtectedRoute>
                    } />
                    <Route path="/create" element={
                        <ProtectedRoute >
                            <Signup />
                        </ProtectedRoute>
                    } />
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </Router> */}

            <Router>
                <Routes>
                    <Route path="/" element={<Authentification />}/>
                </Routes>
            </Router>
        </>
    )
}
export default Component_Router;