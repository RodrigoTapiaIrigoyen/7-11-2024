import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import OneVsOne from './components/1vs1';
import Matchmaking from './components/Matchmaking';
import Depositos from './components/Depositos';
import Retiros from './components/Retiros';
import Torneos from './components/Torneos';
import TournamentSuccess from './components/TournamentSuccess';
import SobreNosotros from './components/SobreNosotros';
import Dashboard from './components/Dashboard';
import HowToPlay from './components/HowToPlay';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/1vs1" element={<OneVsOne />} />
          <Route path="/matchmaking" element={<PrivateRoute><Matchmaking /></PrivateRoute>} />
          <Route path="/depositos" element={<Depositos />} />
          <Route path="/retiros" element={<Retiros />} />
          <Route path="/torneos" element={<Torneos />} />
          <Route path="/tournament-success" element={<TournamentSuccess />} />
          <Route path="/sobreNosotros" element={<SobreNosotros />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;