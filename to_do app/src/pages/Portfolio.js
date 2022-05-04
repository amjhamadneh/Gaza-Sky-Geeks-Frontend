
const projects = [
    {
        name:"Project 1",
        link:'https://www.w3schools.com/tags/tag_ul.asp'
    }
]


export default function ToDo() {
    return (
        <ul>
            {projects.map(project => (
                <li>
                    <span>{project.name}</span>
                    <a href={project.link}>go to the project</a>
                </li>
            ))}
        </ul>
    )
}
