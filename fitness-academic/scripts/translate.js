function translate(status){
    switch (status){
        case "fill_info":
            return "تکمیل فرم";
            break;
            
        case "unpaid":
            return "پرداخت نشده"; 
            break;

        case "active":
            return "فعال";   
            break;

        case "pending":
            return "در حال آماده سازی"; 
            break;    

        case "beginner":
            return "مبتدی";   
            break;

        case "professional":
            return "حرفه ای"; 
            break;

        case "arm":
            return "بازو"; 
            break;   

        case "chest":
            return "سینه"; 
            break;   

        case "legs":
            return "پاها"; 
            break;   

        case "pectoral_muscles":
            return "عضلات سینه ای"; 
            break;  

        case "shoulder_belt":
            return "کمربند شانه ای"; 
            break;   

        case "armpit_muscles":
            return "عضلات زیربغل"; 
            break;   

        case "quadriceps_and_hamstrings":
            return "عضلات چهار سر رانی و همسترینگ"; 
            break;   

        case "abdominal_muscles":
            return "عضلات شکمی"; 
            break;   

        case "news":
            return "اخبار"; 
            break;   

        case "events":
            return "رویدادها"; 
            break;            
    }
}

