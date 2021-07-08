const buildCount =  (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    };
    return displayCount;
}

const myCount = buildCount(3);
myCount();
myCount();
myCount();


const person = () => {
    let saveName = "Name";
    return {
      getName: () => saveName,
      setName: (name) => {
        saveName = name;
      },
    };
  };
  
  const newPerson = person();
  console.log(newPerson.getName());
  newPerson.setName('Cediel');
  console.log(newPerson.getName());