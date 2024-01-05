

function monthOfYear(num) {
    switch (num) {
        case 1:
            console.log(`Month number ${num}--> January `);
            break;

            case 2:
            console.log(`Month number ${num}--> February `);
            break;
        
            case 3:
            console.log(`Month number ${num}--> March `);
            break;

            case 4:
            console.log(`Month number ${num}--> April `);
            break;

            case 5:
            console.log(`Month number ${num}--> May `);
            break;

            case 6:
            console.log(`Month number ${num}--> June `);
            break;

            case 7:
            console.log(`Month number ${num}--> Jully `);
            break;

            case 8:
            console.log(`Month number ${num}--> August `);
            break;

            case 9:
            console.log(`Month number ${num}--> September `);
            break;

            case 10:
            console.log(`Month number ${num}--> October `);
            break;

            case 11:
            console.log(`Month number ${num}--> November `);
            break;
        
            case 12:
            console.log(`Month number ${num}--> December `);
            break;

        default:
            console.log(`Invalid input---> Month Number ${num}`);
            break;
    }
    
}

monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
