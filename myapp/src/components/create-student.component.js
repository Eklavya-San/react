import React,{useState} from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";

const CreateStudent = () => {
    const [formValues,setFormValues] = useState({ name:'',email:'',rollno:''})

    const onSubmit = studentObject => {
        axios.post(
            'http://127.0.0.1:4000/create-student',studentObject
        ).then(res=>{
            if(res.status===200)
                alert("Student Successfully created")
            else
                Promise.reject()
        }).catch(err => alert('something went wrong'))
    }
    return (
        <StudentForm intialValues={formValues}
            onSubmit={onSubmit}
            enableReintialize>
                create Student
            </StudentForm>
    )
    
}
export default CreateStudent;


