import {getStudentInfo, updateStudentInfo } from "../../utilities/databaseHelper";
import  MainProfile  from "./page.jsx";
export default async function Layout() {

    const studentInfo = await getStudentInfo();
    
    return (
        <MainProfile student={studentInfo} updateStudent={updateStudentInfo} />
    )
}