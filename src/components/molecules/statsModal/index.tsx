import React from 'react';
import Modal from '../modal';
import useGetGroupStatistics from '../../../hooks/useGroupStats';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

type GroupStatisticsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  groupId: number;
};

const GroupStatisticsModal: React.FC<GroupStatisticsModalProps> = ({ isOpen, onClose, groupId }) => {
  const { statistics, loading, error } = useGetGroupStatistics(groupId);

  const totalPossibleAttendances = (statistics?.TotalPersons || 0) * (statistics?.TotalSessions || 0);
  const attendancePercentage = totalPossibleAttendances > 0
    ? ((statistics?.TotalAttendances || 0) / totalPossibleAttendances) * 100
    : 0;

  const data = [
    { name: 'Asistencia', value: parseFloat(attendancePercentage.toFixed(2)) },
    { name: 'Ausencia', value: parseFloat((100 - attendancePercentage).toFixed(2)) },
  ];

  const COLORS = ['#0088FE', '#FF8042'];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Estadísticas del grupo" size="large">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500 mt-2">Error: {error.message}</p>}
      {statistics && (
        <div className="flex flex-col space-y-4">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label={({ name, value }) => `${name}: ${value.toFixed(2)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `${value.toFixed(2)}%`} />
            </PieChart>
          </ResponsiveContainer>
          <p>Total de personas: {statistics.TotalPersons}</p>
          <p>Total de sesiones: {statistics.TotalSessions}</p>
          <p>Total de asistencias: {statistics.TotalAttendances}</p>
          <p>Porcentaje de asistencias: {attendancePercentage.toFixed(2)}%</p>
        </div>
      )}
    </Modal>
  );
};

export default GroupStatisticsModal;