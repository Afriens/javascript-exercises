const findTheOldest = function(people) {
    const arrList = people.reduce((obj, current) => {
        if (!current.yearOfDeath) { 
            current.yearOfDeath = new Date().getFullYear()
        }
        obj.push(current.yearOfDeath - current.yearOfBirth)
        return obj
    }, []);        
    const maxAge = Math.max(...arrList);
    const findPerson = arrList.indexOf(maxAge);
    return people[findPerson];
};

// Do not edit below this line
module.exports = findTheOldest;
