import firebase from '../../config/firebase';

// Retrive projects from the Cloud firestore
const fetchProjects = () => {
    return new Promise((resolve, reject) => {
        const projects = []
        firebase.firestore().collection("projects")
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    projects.push(doc.data())
                });
                resolve({
                    isErrorOnProjects: false,
                    projects,
                })
            })
            .catch(function(error) {
                reject({
                    isErrorOnProjects: true,
                    projects,
                })
            });
    })
}

export default fetchProjects;
