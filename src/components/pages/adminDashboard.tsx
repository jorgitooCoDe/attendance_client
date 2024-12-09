import React from 'react';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { TertiaryButton, LargeSquareButton } from '../atoms/button';
import { useNavigate } from 'react-router-dom';
import { useManagerDashboard } from '../../hooks/useManagerDashboard';
import CreateGroupModal from '../molecules/groupModal';
import AddPersonToGroupModal from '../molecules/addPersonModal';

const options = [
  { text: 'Crear Grupo', modal: 'createGroup' },
  { text: 'Agregar persona a Grupo', modal: 'addPersonToGroup' },
  { text: 'Agregar Manager a Grupo', modal: 'addManagerToGroup' },
  { text: 'Crear Sesión', modal: 'createSession' },
  { text: 'Estadísticas de Grupos', modal: 'getGroupStatistics' },
  { text: 'Ver todos los Grupos', modal: 'getAllGroups' },
  { text: 'Buscar grupo por nombre', modal: 'getSearchGroupByName' },
  { text: 'Sesiones de hoy', modal: 'getSessionsToday' },
];

const AdminDashboard: React.FC = () => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();
  const { user } = useManagerDashboard();

  const onLogout = () => {
    handleLogout();
    navigate('/login');
  };

  const [open, setOpen] = useState<string | null>(null);

  const handleOpen = (modal: string) => () => setOpen(modal);
  const handleClose = () => setOpen(null);

  const renderModalContent = () => {
    switch (open) {
      case 'createGroup':
        return <CreateGroupModal isOpen={true} onClose={handleClose} />;
      case 'addPersonToGroup':
        return <AddPersonToGroupModal isOpen={true} onClose={handleClose} />;
      case 'addManagerToGroup':
        return <div>Add Manager to Group Content</div>;
      case 'createSession':
        return <div>Create Session Content</div>;
      case 'getGroupStatistics':
        return <div>Get Group Statistics Content</div>;
      case 'getAllGroups':
        return <div>Get All Groups Content</div>;
      case 'getSearchGroupByName':
        return <div>Get Search Group by Name Content</div>;
      case 'getSessionsToday':
        return <div>Get Sessions Today Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <TertiaryButton
        text="Cerrar sesión"
        onClick={onLogout}
        className="absolute top-4 right-4 px-3 py-1"
      />
      <div className="bg-white p-8 rounded-lg text-center shadow-custom-gray">
        {user && (
          <h1 className="text-2xl font-bold mb-6 text-center text-mto_gray">
            Bienvenido <span className='text-mto_red'>{user.name}</span>
          </h1>
        )}
        <div className="space-y-4">
          <div className="flex justify-center space-x-4">
            {options.slice(0, 4).map(option => (
              <LargeSquareButton
                key={option.modal}
                text={option.text}
                onClick={handleOpen(option.modal)}
              />
            ))}
          </div>
          <div className="flex justify-center space-x-4">
            {options.slice(4).map(option => (
              <LargeSquareButton
                key={option.modal}
                text={option.text}
                onClick={handleOpen(option.modal)}
              />
            ))}
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <button className="absolute top-2 right-2 text-gray-500" onClick={handleClose}>
              &times;
            </button>
            {renderModalContent()}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;