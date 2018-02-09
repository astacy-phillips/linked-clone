let connections = [
    {   
        id: 1,
        firstName: "Chaddie",
        lastName: "Veldstra",    
        jobTitle: "Mechanical Systems Engineer",   
        connections: 66
    },
    {   
        id: 2,
        firstName: "Dominica",
        lastName: "McFaell",
        jobTitle: "Operator",
        connections: 613
    },
    {   
        id: 3,
        firstName: "Ezri",
        lastName: "Akeherst",
        jobTitle: "Cost Accountant",
        connections: 470
    },
    {   
        id: 4,
        firstName: "Percy",
        lastName: "Le Huquet",
        jobTitle: "Software Test Engineer I",
        connections: 574
    },
    {   
        id: 5,
        firstName: "Kristoforo",
        lastName: "Orring",
        jobTitle: "Web Designer IV",
        connections: 7
    },
    {   
        id: 6,
        firstName: "Ruprecht",
        lastName: "Chantler",
        jobTitle: "Registered Nurse",
        connections: 93
    },
    {   
        id: 7,
        firstName: "Terri",
        lastName: "Devaney",
        jobTitle: "Project Manager",
        connections: 1
    },
    {   
        id: 8,
        firstName: "Celia",
        lastName: "Ramirez",
        jobTitle: "Analyst Programmer",
        connections: 4
    },
    {   
        id: 9,
        firstName: "Clair",
        lastName: "Pacey",
        jobTitle: "Chemical Engineer",
        connections: 31
    },
    {   
        id: 10,
        firstName: "Jase",
        lastName: "Dawidowsky",
        jobTitle: "Dental Hygienist",
        connections: 830
    },
    
];
let nextId = 11;

export default connections;
export const getConnections = () => connections;

export const addConnections = () => (connection) => {
    connection.id = getNextId();
    connections = [...connections, connection]
    return connections;
}

function getNextId() {
    return nextId++;
}