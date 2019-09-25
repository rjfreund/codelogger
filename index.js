(async () => {    
    var _ = {};

    await log([
        () => { 
            _.x = 10;
            console.log('yo');
        },
        async () => {
            console.log('happy');
        },
        () => { 
            _.y = 20;
            console.log('world');
        }
    ]);

    async function log(functions){        
        for (var index=0; index<functions.length; index++){            
            console.log(functions[index].toString().replace(/\s+/g, " "));
            await functions[index]();
        }
    }
})();