import React, {useState,useEffect} from "react";
import axios from "axios";
import StudentForm from "./StudentForm";

const EditStudent = (props)=> {
    const [formValues,setFormValues] = useState({
        name:"",
        email:"",
        rollno:"",
    });

    const onSubmit = (studentObject) => {
        axios.put(
            "http://localhost:4000/students/update-student"+props.match.params.id,studentObject
        )
        .then((res)=>{
            if(res.status===200){
                alert("Student successfully updated");
                props.history.push("/student-list");
            }
                else 
                Promise.reject();
        })
        .catch((err)=> alert("Something went wrong"));
        
    };
    useEffect(()=>{
        axios.get(
            "http://127.0.0.1:4000/students/update-student/" +props.match.params.id
        ).then((res)=>{
            const{name,email,rollno}=res.data;
            setFormValues({name,email,rollno});
        })
        .catch((err) => console.log(err));
        },[])

        return (
            <StudentForm intialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
                update Student
            </StudentForm>
        );
};
export default EditStudent;