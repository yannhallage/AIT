
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentification from "../pages/authentification";
import Tickets_Gestion from "../pages/gestion_tickets";

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
                    <Route path="/tickets" element={<Tickets_Gestion />}/>
                </Routes>
            </Router>
        </>
    )
}
export default Component_Router;