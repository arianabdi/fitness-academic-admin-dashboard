function translateText(text){
    switch(text){
      case 'full_name':
        return 'نام و نام خانوادگی';
        break;
      case 'age':
        return 'سن';
        break;
      case 'height':
        return 'قد';
        break;
      case 'weight':
        return 'وزن';
        break; 
      case 'gender':
        return 'جنسیت';
        break;   
      case 'chest_size':
        return 'number';
        break;
      case 'waist_size':
        return 'سایز دور کمر (گودی کمر )';
        break;
      case 'abdominal_cir_size':
        return 'سایز دور شکم';
        break;
      case 'hip_cir_size':
        return 'سایز دور باسن';
        break;
      case 'thigh_cir_size':
        return 'سایز دور ران';
        break;
      case 'arm_cir_size':
        return 'سایز دور بازو';
        break;
      case 'wrist_cir_size':
        return 'سایز دور مچ دست';
        break;
      case 'is_homework_request':
        return 'درخواست شما برنامه تمرینی قابل اجرا در باشگاه یا منزل هست؟';
        break;
      case 'available_equipment_at_home':
        return 'در صورت درخواست برنامه در منزل،  وسایل ورزشی موجود در منزل هم بفرمایید.';
        break;
      case 'any_sport_background':
        return ' سابقه ورزشی ؟';
        break;
      case 'any_bodybuilding_background':
        return 'سابقه تمرینی بدنسازی و کار با دستگاه های بدنسازی. ..چند ماه ؟...  چندسال؟';
        break;
      case 'purpose_of_receiving_bodybuilding_program':
        return 'هدف اصلی شما از مراجعه و دریافت برنامه بدنسازی چیست؟';
        break;
      case 'orthopedic_problems':
        return 'مشکلات ارتوپدی ( درد در کمر،  زانو،  دست،  انحراف ستون فقرات و پاها....)';
        break;
      case 'surgery_history':
        return 'سابقه جراحی';
        break;
      case 'illness_history':
        return 'سابقه بیماری';
        break;
      case 'birth_history':
        return 'سابقه زایمان';
        break;
      case 'job':
        return 'شغل ( جواب ضروری بدلیل سنجش میزان فعالیت روزانه)';
        break;
      case 'daily_rest':
        return 'میزان استراحت روزانه ( جواب ضروری...)';
        break;
      case 'consumable_medicine':
        return 'داروی مصرفی';
        break;
      case 'use_drink':
        return 'آیا مشروبات الکلی و دخانيات استفاده میفرمایید؟ در صورت مثبت بودن جواب ، به چه میزان مصرف دارید؟';
        break;
      case 'use_supplements':
        return 'مکملهایی که تاکنون استفاده کردید و همچنین مکملهایی که در حال حاضر دارید هم بفرمایید؟';
        break;
      case 'hours_of_training':
        return 'ساعات دقیق تمرین ( عصر یا صبح )';
        break;
      case 'days_of_training':
        return 'روزهایی که تمرین میکنید و قرار هست تمرین کنید ( چند روز در هفته)  ، را بفرمایید؟';
        break;
      case 'friends_who_are_under_our_program':
        return 'نام دوستان و آشنایانی که زیرنظر بنده هستند،  و برنامه تمرینی گرفتند هم نام ببرید.';
        break;
      case 'reference':
        return 'معرف و طریقه آشنایی شما، با سیستم برنامه نویسی بنده هم بفرمایید.';
        break;
      default:
        return text;
    }
  }
  
  async function addUserSpeceficationItem(key, value){
    var newItemHTML = `
    <div class="row">
      <div class="col-sm order-2 font-yekan-bakh">${translateText(key)}</div>
      <div class="col-sm order-3 d-flex justify-content-end font-yekan-bakh">${value}</div>
    </div>
    <hr>
    `
  
    
    // Convert the HTML structure to a DOM element
    var newItemElement = document.createElement('div');
    newItemElement.innerHTML = newItemHTML;
  
    // Add the new item to the form
    document.getElementById('specificationContainer').appendChild(newItemElement);
  }

