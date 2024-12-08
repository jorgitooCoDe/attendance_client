// src/components/pages/ManagerDashboard.tsx
import React, { useState } from 'react';
import { useManagerDashboard } from '../../hooks/useManagerDashboard';
import { useAuth } from '../../hooks/useAuth';
import Button from '../atoms/button';
import AttendanceModal from '../molecules/attendanceModal';
import { useAssignationByGroupID } from '../../hooks/useAssignation';
import { useNavigate } from 'react-router-dom';

const ManagerDashboard = () => {
  const { user, sessionsData, error } = useManagerDashboard();
  const { handleLogout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [attendances, setAttendances] = useState<{ [key: number]: boolean }>({});
  const navigate = useNavigate();

  const currentSession = sessionsData && sessionsData.length > 0 ? sessionsData[0] : null;
  const groupId = currentSession?.groupId || 0;
  console.log('Current Session:', currentSession);
  console.log('Group ID:', groupId);
  const { assignations = [], loading, error: assignationError } = useAssignationByGroupID(groupId);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  const onLogout = () => {
    handleLogout();
    navigate('/login');
  };

  const toggleAttendance = (id: number) => {
    setAttendances((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Button
        text="Cerrar sesión"
        onClick={onLogout}
        variant="tertiary"
        className="absolute top-4 right-4 px-3 py-1"
      />
      <div className="relative bg-white p-8 rounded-lg w-full max-w-lg border shadow-custom-red">
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
                onClick={() => setIsModalOpen(true)}
                variant="secondary"
              />
            </div>

            <AttendanceModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              loading={loading}
              error={assignationError}
              assignations={assignations}
              attendances={attendances}
              toggleAttendance={toggleAttendance}
            />
          </div>
        ) : (
          <p className="text-center text-gray-500">No hay sesiones disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
};

export default ManagerDashboard;