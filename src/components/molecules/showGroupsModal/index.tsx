import React from 'react';
import Modal from '../modal';
import useGetAllGroups from '../../../hooks/useGetAllGroups';

type ShowAllGroupsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ShowAllGroupsModal: React.FC<ShowAllGroupsModalProps> = ({ isOpen, onClose }) => {
  const { groups, loading, error } = useGetAllGroups();

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Ver todos los grupos" size="large">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500 mt-2">Error: {error.message}</p>}
      {groups && (
        <div className="flex flex-col space-y-4">
          {groups.map((group, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded">
              <h3 className="text-lg font-bold">{group.name}</h3>
              <p>{group.description}</p>
              <p>Cantidad de personas: {group.amount_persons}</p>
              <p>Cantidad de sesiones: {group.amount_sessions}</p>
            </div>
          ))}
        </div>
      )}
    </Modal>
  );
};

export default ShowAllGroupsModal;