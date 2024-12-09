import { useState, useEffect } from 'react';
import { getValidSession, getSessionsToday } from '../services/managerService';
import { UserResponseEntity, SessionResponseEntity, PersonResponseEntity } from '../types/apiResponseEntities';

export const useManagerDashboard = () => {
  const [user, setUser] = useState<UserResponseEntity | null>(null);
  const [sessionsData, setSessionsData] = useState<SessionResponseEntity[]>([]);
  const [persons] = useState<PersonResponseEntity[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const validSessionData = await getValidSession();
        setUser(validSessionData.user);

        const sessionsResponse = await getSessionsToday();
        console.log('Sessions data:', sessionsResponse);

        if (!sessionsResponse || sessionsResponse.length === 0) {
          console.log('No sessions data found');
          setSessionsData([]);
          return;
        }

        setSessionsData(sessionsResponse);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  return { user, sessionsData, persons, error };
};