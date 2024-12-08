import React from 'react';
import { useManagerDashboard } from '../../hooks/useManagerDashboard';
import Button from '../atoms/button';

const ManagerDashboard = () => {
  const { user, sessionsData, error } = useManagerDashboard();

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  const currentSession = sessionsData && sessionsData.length > 0 ? sessionsData[0] : null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg w-full max-w-lg border shadow-custom-red">
        {user && (
          <h1 className="text-2xl font-bold mb-6 text-center text-mto_gray">
            Bienvenido manager {user.name}
          </h1>
        )}

        {currentSession ? (
          <div>
            <p className="text-xl mb-4 text-center">
              Te encuentras en la sesión <strong>{currentSession.sessionNumber}</strong>
            </p>

            <table className="w-full mb-6">
              <tbody>
                <tr>
                  <th className="text-left px-4 py-2 border-b w-1/3 text-mto_gray">Descripción:</th>
                  <td className="px-4 py-2 border-b">{currentSession.description}</td>
                </tr>
                <tr>
                  <th className="text-left px-4 py-2 border-b text-mto_gray">Inicio:</th>
                  <td className="px-4 py-2 border-b">
                    {new Date(currentSession.createdAt).toLocaleString()}
                  </td>
                </tr>
                <tr>
                  <th className="text-left px-4 py-2 border-b text-mto_gray">Duración:</th>
                  <td className="px-4 py-2 border-b">{currentSession.duration} minutos</td>
                </tr>
              </tbody>
            </table>

            <div className="text-center">
              <Button
                text="Tomar asistencia"
                onClick={() => { /* TODO: Attendance logic */ }}
                variant="secondary"
              />
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No hay sesiones disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
};

export default ManagerDashboard;