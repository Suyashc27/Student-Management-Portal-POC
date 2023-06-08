

import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import AdminPage from './AdminSide/Admin/AdminPage';
import Dashboard from './Components/Dashboard';
import FormUser from './Components/FormUser';
import MyProfile_Student from './Components/MyProfile_Student';
import StudentPage from './Components/StudentPage';
import { TeacherComponent } from './Teacher/TeacherComponent';

import Form from './AdminSide/Form/Form';
import TeacherForm from './AdminSide/Form/TeacherForm';


import Delete from './AdminSide/Delete/DeleteStudent';
import Deleteteacher from './AdminSide/Delete/DeleteTeacher';
import DisplayStudent from './AdminSide/DisplayData/Display';
import DisplayTeacher from './AdminSide/DisplayData/DisplayTeacher';
import MySubjects from './Student/Subject/MySubjects';
import UpdateUser from './AdminSide/UpdateData/UpdateUser';
import Student from './Components/Student';
import AddSubjects from './AdminSide/Form/AddSubject';
import Teacher from './Teacher/Teacher';
import ShowStudent from './Teacher/ShowStudent';
import AddHomeWork from './Teacher/AddHomeWork';
import TeacherProfile from './Teacher/TeacherProfile';
import MyHomework from './Student/Subject/MyHomework';
import HomePage from './Home/HomePage';


function App() {
  return (

    <div>
      <BrowserRouter>
    
        <Routes>
        
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/login" element={<FormUser/>} />
          
          <Route path='/admin' element={<AdminPage />}>

            <Route path="addStudentRecords" element={<Form name="Add Student Records" id="student" firstField="Student Roll No *" api="/addstudent" field="roll_no" />} />
            <Route path="addTeacherRecords" element={<TeacherForm name="Add Teacher Records" id="teacher" firstField="Qualification *" api="/addteacher" field="qualification" />} />
            <Route path="deleteStudent" element={<Delete name="student" field="student_id"/>} />
            <Route path="deleteTeacher" element={<Deleteteacher name="teacher" field="teacher_id"/>} />
            <Route path="updateStudent" element={<UpdateUser name="Update Student Records" role="student" />} />
            <Route path="updateTeacher" element={<UpdateUser name="Update Teacher Records" role="teacher" />} />
            <Route path="updateStudentRecords" element={<Form name="Update Student Records" role="student" type="update"/>} />
            <Route path="updateTeacherRecords" element={<TeacherForm name="Update Teacher Records" role="teacher"  type="update"/>} />
            <Route path="displayStudents" element={<DisplayStudent api="getStudent" />} />
            <Route path="displayTeachers" element={<DisplayTeacher api="getTeacher" />} />
            <Route path="addSubjects" element={<AddSubjects/>}/>

          </Route>

          <Route exact path='/student' element={<Student />}>
            <Route exact path="studentPage" element={<StudentPage/>}/>
            <Route exact path="myProfile" element={<MyProfile_Student />} />
            <Route path='teacherprofile' element={<TeacherProfile name="student" fieldname="Roll Number"/>} />
            <Route exact path="mySubjects" element={<MySubjects />} />
            <Route  path="myhomework" element={<MyHomework/>}/>

          </Route>

          <Route exact path='/teacher' element={<Teacher/>}>
            <Route path='teacherPage' element={<TeacherComponent/>} />
            <Route path='showStudent' element={<ShowStudent/>}/>
            <Route path='addhomework' element={<AddHomeWork/>}/>
            <Route path='teacherprofile' element={<TeacherProfile  name="teacher" fieldname="Qualification"/>}/>

          </Route>

         

        </Routes>
       


      </BrowserRouter>

   

    </div>
  );
}

export default App;
