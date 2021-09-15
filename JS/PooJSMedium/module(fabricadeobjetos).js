function isObject(subject) {
    return typeof subject == "object";
}

function isArray(subject) {
    return Array.isArray(subject);
}

function deepCopy(subject) {
    let copySubject;
    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    for (key in subject) {

        const keyIsObject = isObject(subject[key]);

        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject;
}

function requiereParam(param) {
    throw new Error(param +"Este parametro es obligatorio");
}

function createLearingPaths({
    name = requiereParam("name"),
    courses = [],

}) {
    const private = {
        "__name": name,
        "__courses": courses,
    };
     const public = {
     get name() {
       return private["_name"];
     },
     set name(newName) {
       if (newName.length != 0) {
         private["_name"] = newName;
       } else {
         console.warn("Tu nombre debe tener al menos 1 caracter");
       }
     },
     get courses() {
       return private["_courses"];
     },
   };

   return public;
   
}
function createStudent({
    name = requiereParam("name"),
    age,
    email = requiereParam("email"),
    approvedCourses = [],
    learningPaths = [],
    twitter,
    instagram,
    facebook,
} = {}){
    const private = {
        __name : name,
        __learningPaths : learningPaths,
    };
    const public = {
        age,
        email,
        approvedCourses,
        socialMedia: {
            twitter,
            instagram,
            facebook,
      },

    get name(){
        return private[__name];
    },

    set name(newName){
        if (newName.length != 0) {
            return private[newName] = newName;    
        } else {
            console.warn("tu nombre no debe ser menor a 1 caracteres.");            
        }
    },
    get learningPaths(){
        return private[__learningPaths];
    },

    set learningPaths(newLearningPaths){
        if (!newLearningPaths.name) {
            console.warn("tu lista de aprendizaje no tiene nombre.");
            return;      
        } else if (!newLearningPaths.courses) {
            console.warn("tu lp no tiene cursos.");
            return;      
        }else if (!isArray(newLearningPaths)) {
            console.warn("tu lp no tiene cursos. (No es una lista de cursos)");
            return;        
        } 
        private["__learningPaths"].push(newLearningPaths);
    },
};   
    return public;
}

let camilo = createStudent(
    {name: "Camilo Alonso Hernandez Cediel,", 
    email: "Chernandezcediel@gmail.com", 
    age: 28, approvedCourses: ["todos", "los cursos", "Backend", "no te rindas"], 
    learningPaths: ["Alll","offff","Theeemmmmm"], 
    twitter: "cherced", 
    instagram: "cherced", 
    facebook: "cherced",  
});

console.log(camilo);