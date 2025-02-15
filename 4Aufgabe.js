      /*  Write a JavaScript program to get the current
        date.
        Expected Output :
        mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */










        const currentDate = (date = new Date()) => {
            const days = date.getDate();
            const months = date.getMonth() + 1; // +1 wegen Februar
            const years = date.getFullYear();
        
            return `${days}/${months}/${years}`;
        } 
        
        console.log(currentDate());