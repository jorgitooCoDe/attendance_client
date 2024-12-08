import React from 'react';
import Modal from '../modal';
import ToggleSwitch from '../../atoms/toggleSwitch';
import Button from '../../atoms/button';
import { GroupStatisticsResponseEntity } from '../../../types/apiResponseEntities';

type AttendanceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
  error: string | null;
  assignations: GroupStatisticsResponseEntity[];
  attendances: { [key: number]: boolean };
  toggleAttendance: (id: number) => void;
};

const AttendanceModal: React.FC<AttendanceModalProps> = ({
  isOpen,
  onClose,
  loading,
  error,
  assignations,
  attendances,
  toggleAttendance,
}) => {
  console.log('AttendanceModal Props:', { loading, error, assignations, attendances });

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Asistencia de participantes">
      {loading && <div className="text-center">Cargando participantes...</div>}
      {error && <div className="text-red-500 text-center">{error}</div>}

      {!loading && !error && (
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">N°</th>
              <th className="px-4 py-2 border-b">Apellidos y Nombres</th>
              <th className="px-4 py-2 border-b">Estado</th>
              <th className="px-4 py-2 border-b">Asistió?</th>
            </tr>
          </thead>
          <tbody>
            {assignations.length > 0 ? (
              assignations.map((participant, index) => (
                <tr key={participant.AssignationID} className="text-center">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">
                    {participant.PersonLastName} {participant.PersonName}
                  </td>
                  <td className="px-4 py-2 border-b">{participant.PersonState}</td>
                  <td className="px-4 py-2 border-b flex items-center justify-center">
                    <ToggleSwitch
                      isChecked={attendances[participant.AssignationID] || false}
                      onToggle={() => toggleAttendance(participant.AssignationID)}
                    />
                    <span className="ml-2">{attendances[participant.AssignationID] ? 'Sí' : 'No'}</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-4 py-2">
                  No hay participantes.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      <div className="text-center mt-4">
        <Button
          text="Cerrar"
          onClick={onClose}
          variant="tertiary"
          className="px-4 py-2"
        />
      </div>
    </Modal>
  );
};

export default AttendanceModal;