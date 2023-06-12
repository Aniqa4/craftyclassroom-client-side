/* import { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../Provider/AuthProvider';

function useStudentData() {
    const {user}=useContext(AuthContext);
    const { refetch , data: studentData=[] } = useQuery({
        queryKey: ['studentsData',user?.email],
        queryFn: async()=>{
            const res =await  fetch(`http://localhost:5000/studentsData?email=${user.email}`)
            return res.json();
        },
      })
    return [studentData, refetch]
}

export default useStudentData; */