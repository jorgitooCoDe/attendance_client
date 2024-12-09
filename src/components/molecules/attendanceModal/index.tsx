import React from 'react';
import Modal from '../modal';
import ToggleSwitch from '../../atoms/toggleSwitch';
import { SaveButton } from '../../atoms/button';

import { GroupStatisticsResponseEntity } from '../../../types';

type AttendanceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
  error: string | null;
  assignations: GroupStatisticsResponseEntity[];
  attendances: { [key: number]: boolean };
  toggleAttendance: (id: number) => void;
  onSave: () => void;
};

const AttendanceModal: React.FC<AttendanceModalProps> = ({
  isOpen,
  onClose,
  loading,
  error,
  assignations,
  attendances,
  toggleAttendance,
  onSave,
}) => {
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
              assignations
                .sort((a, b) => {
                  const nameA = `${a.PersonLastName} ${a.PersonName}`.toUpperCase();
                  const nameB = `${b.PersonLastName} ${b.PersonName}`.toUpperCase();
                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }
                  return 0;
                })
                .map((participant, index) => (
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

      <div className="flex justify-end mt-4">
        <SaveButton
          text="Guardar"
          onClick={onSave}
          className="mr-6"
        />
      </div>
    </Modal>
  );
};

export default AttendanceModal;