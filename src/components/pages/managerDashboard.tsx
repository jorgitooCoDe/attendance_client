import React from 'react';
import { useManagerDashboard } from '../../hooks/useManagerDashboard';
import Button from '../atoms/button';

const ManagerDashboard = () => {
  const { user, sessionsData, error } = useManagerDashboard();

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        {user && (
          <h1>Bienvenido manager {user.name}</h1>
        )}
        {sessionsData && sessionsData.length > 0 ? (
          <div>
            {sessionsData.map((session) => (
              <div key={session.sessionId}>
                <p>Sesión: {session.sessionNumber}</p>
                <p>Descripción: {session.description}</p>
                <p>Inició en: {new Date(session.createdAt).toLocaleString()}</p>
                <p>Duración: {session.duration} minutos</p>
              </div>
            ))}
            <Button text="Tomar asistencia" onClick={() => { /* TODO: Take attendance */ }} variant="primary" />
          </div>
        ) : (
          <p>No hay sesiones disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
};

export default ManagerDashboard;