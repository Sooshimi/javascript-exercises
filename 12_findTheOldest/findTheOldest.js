const findTheOldest = function(array) {
    return array.reduce((oldestPerson,currentPerson) => {
        let oldestAge = getAge(oldestPerson.yearOfDeath, oldestPerson.yearOfBirth);
        let currentPersonAge = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
        return (oldestAge < currentPersonAge) ? currentPerson : oldestPerson;
    });

    function getAge(deathDate,birthDate) {
        if (!deathDate) {
            deathDate = new Date().getFullYear();
        }
        return deathDate - birthDate;
    }
};

// Do not edit below this line
module.exports = findTheOldest;
