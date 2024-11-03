import { useEffect } from "react";



const Education = () => {

    useEffect(() => {
        fetch="https://resume-website-server.onrender.com/education"
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }, [])
    

    const education = [
         {
            name: "Humber College",
            program: "Computer Programming",
            degree: "Diploma",
            year: "2023"
         }
    ]

    return(
        <section id="education">
            <h2>Education</h2>
            <ul>
                {education.map((edu) => (
                    <li key={edu.name}>
                        <h3>{edu.name}</h3>
                        <p>{edu.program}</p>
                        <p>{edu.degree}</p>
                        <p>{edu.year}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Education;