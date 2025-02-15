      /*  Write a JavaScript program to create a new string
        from a given string taking the first 3 characters
        and the last 3 characters of a string and adding
        them together. The string length must be 3 or more,
        if not, the original string is returned. */














        





        









        const firstThreeCharacters = (str) => str.legth < 3 ? str : str.slice(0, 3) + str.slice(-3);

        console.log(firstThreeCharacters('Manno'));
        console.log(firstThreeCharacters('abc'));
        console.log(firstThreeCharacters('abcde'));
        console.log(firstThreeCharacters('abc123def123'));