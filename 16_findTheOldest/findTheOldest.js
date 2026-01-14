const findTheOldest = function (arr) {
    const currentYear = new Date().getFullYear();

    const oldest = arr.reduce((oldest, person) => {
        const oldestDeathYear = oldest.yearOfDeath ?? currentYear;
        const personDeathYear = person.yearOfDeath ?? currentYear;

        const oldestAge = oldestDeathYear - oldest.yearOfBirth;
        const personAge = personDeathYear - person.yearOfBirth;
        if (personAge > oldestAge)
            return person;
        else return oldest;
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
